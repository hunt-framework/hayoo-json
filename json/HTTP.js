[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSession-level interactions over HTTP.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003eNetwork.Browser\u003c/a\u003e goes beyond the basic \u003ca\u003eNetwork.HTTP\u003c/a\u003e functionality in \nproviding support for more involved, and real, request/response interactions over \nHTTP. Additional features supported are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e HTTP Authentication handling\n\u003c/li\u003e\u003cli\u003e Transparent handling of redirects\n\u003c/li\u003e\u003cli\u003e Cookie stores + transmission.\n\u003c/li\u003e\u003cli\u003e Transaction logging\n\u003c/li\u003e\u003cli\u003e Proxy-mediated connections.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample use:\n\u003c/p\u003e\u003cpre\u003e    do\n      (_, rsp)\n         \u003c- Network.Browser.browse $ do\n               setAllowRedirects True -- handle HTTP redirects\n               request $ getRequest \"http://www.haskell.org/\"\n      return (take 100 (rspBody rsp))\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-Browser.html",
        "fct-type": "module",
        "title": "Browser"
      },
      "index": {
        "description": "Session-level interactions over HTTP The Network.Browser goes beyond the basic Network.HTTP functionality in providing support for more involved and real request response interactions over HTTP Additional features supported are HTTP Authentication handling Transparent handling of redirects Cookie stores transmission Transaction logging Proxy-mediated connections Example use do rsp Network.Browser.browse do setAllowRedirects True handle HTTP redirects request getRequest http www.haskell.org return take rspBody rsp",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "Browser",
        "normalized": "",
        "package": "HTTP",
        "partial": "Browser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Algorithm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eAlgorithm\u003c/code\u003e controls the digest algorithm to, \u003ccode\u003eMD5\u003c/code\u003e or \u003ccode\u003eMD5Session\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Auth.html#Algorithm",
        "fct-type": "data",
        "title": "Algorithm"
      },
      "index": {
        "description": "Algorithm controls the digest algorithm to MD5 or MD5Session",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "Algorithm",
        "normalized": "",
        "package": "HTTP",
        "partial": "Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Authority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eAuthority\u003c/code\u003e specifies the HTTP Authentication method to use for\n a given domain/realm; \u003ccode\u003eBasic\u003c/code\u003e or \u003ccode\u003eDigest\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "data",
        "title": "Authority"
      },
      "index": {
        "description": "Authority specifies the HTTP Authentication method to use for given domain realm Basic or Digest",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "Authority",
        "normalized": "",
        "package": "HTTP",
        "partial": "Authority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:BrowserAction",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eBrowserAction\u003c/code\u003e is the IO monad, but carrying along a \u003ccode\u003e\u003ca\u003eBrowserState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-Browser.html#BrowserAction",
        "fct-type": "data",
        "title": "BrowserAction"
      },
      "index": {
        "description": "BrowserAction is the IO monad but carrying along BrowserState",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "BrowserAction",
        "normalized": "",
        "package": "HTTP",
        "partial": "Browser Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:BrowserEvent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eBrowserEvent\u003c/code\u003e is the event record type that a user-defined handler, set\n via \u003ccode\u003e\u003ca\u003esetEventHandler\u003c/a\u003e\u003c/code\u003e, will be passed. It indicates various state changes\n encountered in the processing of a given \u003ccode\u003e\u003ca\u003eRequestID\u003c/a\u003e\u003c/code\u003e, along with timestamps\n at which they occurred.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-Browser.html#BrowserEvent",
        "fct-type": "data",
        "title": "BrowserEvent"
      },
      "index": {
        "description": "BrowserEvent is the event record type that user-defined handler set via setEventHandler will be passed It indicates various state changes encountered in the processing of given RequestID along with timestamps at which they occurred",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "BrowserEvent",
        "normalized": "",
        "package": "HTTP",
        "partial": "Browser Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:BrowserEventType",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBrowserEventType\u003c/a\u003e\u003c/code\u003e is the enumerated list of events that the browser\n internals will report to a user-defined event handler.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-Browser.html#BrowserEventType",
        "fct-type": "data",
        "title": "BrowserEventType"
      },
      "index": {
        "description": "BrowserEventType is the enumerated list of events that the browser internals will report to user-defined event handler",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "BrowserEventType",
        "normalized": "",
        "package": "HTTP",
        "partial": "Browser Event Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:BrowserState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eBrowserState\u003c/code\u003e is the (large) record type tracking the current\n settings of the browser.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-Browser.html#BrowserState",
        "fct-type": "data",
        "title": "BrowserState"
      },
      "index": {
        "description": "BrowserState is the large record type tracking the current settings of the browser",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "BrowserState",
        "normalized": "",
        "package": "HTTP",
        "partial": "Browser State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Challenge",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "data",
        "title": "Challenge"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "Challenge",
        "normalized": "",
        "package": "HTTP",
        "partial": "Challenge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Cookie",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eCookie\u003c/code\u003e is the Haskell representation of HTTP cookie values.\n See its relevant specs for authoritative details.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "data",
        "title": "Cookie"
      },
      "index": {
        "description": "Cookie is the Haskell representation of HTTP cookie values See its relevant specs for authoritative details",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "Cookie",
        "normalized": "",
        "package": "HTTP",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Form",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-Browser.html#Form",
        "fct-type": "data",
        "title": "Form"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "Form",
        "normalized": "",
        "package": "HTTP",
        "partial": "Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:FormVar",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-Browser.html#FormVar",
        "fct-type": "type",
        "title": "FormVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "FormVar",
        "normalized": "",
        "package": "HTTP",
        "partial": "Form Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Proxy",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP proxies (or not) are represented via \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e, specifying if a\n proxy should be used for the request (see \u003ccode\u003e\u003ca\u003esetProxy\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Proxy.html#Proxy",
        "fct-type": "data",
        "title": "Proxy"
      },
      "index": {
        "description": "HTTP proxies or not are represented via Proxy specifying if proxy should be used for the request see setProxy",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "Proxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Qop",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Auth.html#Qop",
        "fct-type": "data",
        "title": "Qop"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "Qop",
        "normalized": "",
        "package": "HTTP",
        "partial": "Qop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:RequestID",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-Browser.html#RequestID",
        "fct-type": "type",
        "title": "RequestID"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "RequestID",
        "normalized": "",
        "package": "HTTP",
        "partial": "Request ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AlgMD5",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "AlgMD5",
        "fct-source": "src/Network-HTTP-Auth.html#Algorithm",
        "fct-type": "function",
        "title": "AlgMD5"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "AlgMD5",
        "normalized": "",
        "package": "HTTP",
        "partial": "Alg MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AlgMD5sess",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "AlgMD5sess",
        "fct-source": "src/Network-HTTP-Auth.html#Algorithm",
        "fct-type": "function",
        "title": "AlgMD5sess"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "AlgMD5sess",
        "normalized": "",
        "package": "HTTP",
        "partial": "Alg MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AuthBasic",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "AuthBasic",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "AuthBasic"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "AuthBasic",
        "normalized": "",
        "package": "HTTP",
        "partial": "Auth Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AuthDigest",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "AuthDigest",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "AuthDigest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "AuthDigest",
        "normalized": "",
        "package": "HTTP",
        "partial": "Auth Digest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:BrowserEvent",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserEvent",
        "fct-source": "src/Network-Browser.html#BrowserEvent",
        "fct-type": "function",
        "title": "BrowserEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "BrowserEvent",
        "normalized": "",
        "package": "HTTP",
        "partial": "Browser Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ChalBasic",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "ChalBasic",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "ChalBasic"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ChalBasic",
        "normalized": "",
        "package": "HTTP",
        "partial": "Chal Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ChalDigest",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "ChalDigest",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "ChalDigest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ChalDigest",
        "normalized": "",
        "package": "HTTP",
        "partial": "Chal Digest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:Form",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Form RequestMethod URI [FormVar]",
        "fct-source": "src/Network-Browser.html#Form",
        "fct-type": "function",
        "title": "Form"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "Form",
        "normalized": "Form RequestMethod URI[FormVar]",
        "package": "HTTP",
        "partial": "Form",
        "signature": "Form RequestMethod URI[FormVar]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:MkCookie",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "MkCookie",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "MkCookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "MkCookie",
        "normalized": "",
        "package": "HTTP",
        "partial": "Mk Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:NoProxy",
      "description": {
        "fct-descr": "\u003cp\u003eDon't use a proxy.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "NoProxy",
        "fct-source": "src/Network-HTTP-Proxy.html#Proxy",
        "fct-type": "function",
        "title": "NoProxy"
      },
      "index": {
        "description": "Don use proxy",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "NoProxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "No Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:OpenConnection",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "OpenConnection",
        "fct-source": "src/Network-Browser.html#BrowserEventType",
        "fct-type": "function",
        "title": "OpenConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "OpenConnection",
        "normalized": "",
        "package": "HTTP",
        "partial": "Open Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:Proxy",
      "description": {
        "fct-descr": "\u003cp\u003eUse the proxy given. Should be of the\n form \u003ca\u003ehttp://host:port\u003c/a\u003e, \u003ca\u003ehost\u003c/a\u003e, \u003ca\u003ehost:port\u003c/a\u003e, or \u003ca\u003ehttp://host\u003c/a\u003e.\n Additionally, an optional \u003ccode\u003e\u003ca\u003eAuthority\u003c/a\u003e\u003c/code\u003e for authentication with the proxy.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Proxy String (Maybe Authority)",
        "fct-source": "src/Network-HTTP-Proxy.html#Proxy",
        "fct-type": "function",
        "title": "Proxy"
      },
      "index": {
        "description": "Use the proxy given Should be of the form http host port host host port or http host Additionally an optional Authority for authentication with the proxy",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "Proxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:QopAuth",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "QopAuth",
        "fct-source": "src/Network-HTTP-Auth.html#Qop",
        "fct-type": "function",
        "title": "QopAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "QopAuth",
        "normalized": "",
        "package": "HTTP",
        "partial": "Qop Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:QopAuthInt",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "QopAuthInt",
        "fct-source": "src/Network-HTTP-Auth.html#Qop",
        "fct-type": "function",
        "title": "QopAuthInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "QopAuthInt",
        "normalized": "",
        "package": "HTTP",
        "partial": "Qop Auth Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:RequestSent",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "RequestSent",
        "fct-source": "src/Network-Browser.html#BrowserEventType",
        "fct-type": "function",
        "title": "RequestSent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "RequestSent",
        "normalized": "",
        "package": "HTTP",
        "partial": "Request Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ResponseEnd",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "ResponseEnd ResponseData",
        "fct-source": "src/Network-Browser.html#BrowserEventType",
        "fct-type": "function",
        "title": "ResponseEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ResponseEnd",
        "normalized": "",
        "package": "HTTP",
        "partial": "Response End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ResponseFinish",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "ResponseFinish",
        "fct-source": "src/Network-Browser.html#BrowserEventType",
        "fct-type": "function",
        "title": "ResponseFinish"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ResponseFinish",
        "normalized": "",
        "package": "HTTP",
        "partial": "Response Finish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ReuseConnection",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "ReuseConnection",
        "fct-source": "src/Network-Browser.html#BrowserEventType",
        "fct-type": "function",
        "title": "ReuseConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ReuseConnection",
        "normalized": "",
        "package": "HTTP",
        "partial": "Reuse Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:addAuthority",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Authority -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#addAuthority",
        "fct-type": "function",
        "title": "addAuthority"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "addAuthority",
        "normalized": "Authority-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Authority",
        "signature": "Authority-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:addCookie",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eaddCookie c\u003c/code\u003e adds a cookie to the browser state, removing duplicates.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Cookie -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#addCookie",
        "fct-type": "function",
        "title": "addCookie"
      },
      "index": {
        "description": "addCookie adds cookie to the browser state removing duplicates",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "addCookie",
        "normalized": "Cookie-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Cookie",
        "signature": "Cookie-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auAlgorithm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe Algorithm",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auAlgorithm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "auAlgorithm",
        "normalized": "",
        "package": "HTTP",
        "partial": "Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auDomain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "[URI]",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auDomain"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "auDomain",
        "normalized": "[URI]",
        "package": "HTTP",
        "partial": "Domain",
        "signature": "[URI]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auNonce",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auNonce"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "auNonce",
        "normalized": "",
        "package": "HTTP",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auOpaque",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auOpaque"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "auOpaque",
        "normalized": "",
        "package": "HTTP",
        "partial": "Opaque",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "auPassword",
        "normalized": "",
        "package": "HTTP",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auQop",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "[Qop]",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auQop"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "auQop",
        "normalized": "[Qop]",
        "package": "HTTP",
        "partial": "Qop",
        "signature": "[Qop]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auRealm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auRealm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "auRealm",
        "normalized": "",
        "package": "HTTP",
        "partial": "Realm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auSite",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "URI",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auSite"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "auSite",
        "normalized": "",
        "package": "HTTP",
        "partial": "Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auUsername",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auUsername"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "auUsername",
        "normalized": "",
        "package": "HTTP",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:browse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebrowse act\u003c/code\u003e is the toplevel action to perform a \u003ccode\u003e\u003ca\u003eBrowserAction\u003c/a\u003e\u003c/code\u003e.\n Example use: \u003ccode\u003ebrowse (request (getRequest yourURL))\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction conn a -\u003e IO a",
        "fct-source": "src/Network-Browser.html#browse",
        "fct-type": "function",
        "title": "browse"
      },
      "index": {
        "description": "browse act is the toplevel action to perform BrowserAction Example use browse request getRequest yourURL",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "browse",
        "normalized": "BrowserAction a b-\u003eIO b",
        "package": "HTTP",
        "partial": "",
        "signature": "BrowserAction conn a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:browserEventType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserEventType",
        "fct-source": "src/Network-Browser.html#BrowserEvent",
        "fct-type": "function",
        "title": "browserEventType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "browserEventType",
        "normalized": "",
        "package": "HTTP",
        "partial": "Event Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:browserRequestID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "RequestID",
        "fct-source": "src/Network-Browser.html#BrowserEvent",
        "fct-type": "function",
        "title": "browserRequestID"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "browserRequestID",
        "normalized": "",
        "package": "HTTP",
        "partial": "Request ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:browserRequestURI",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-Browser.html#BrowserEvent",
        "fct-type": "function",
        "title": "browserRequestURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "browserRequestURI",
        "normalized": "",
        "package": "HTTP",
        "partial": "Request URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:browserTimestamp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "ClockTime",
        "fct-source": "src/Network-Browser.html#BrowserEvent",
        "fct-type": "function",
        "title": "browserTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "browserTimestamp",
        "normalized": "",
        "package": "HTTP",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chAlgorithm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe Algorithm",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chAlgorithm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "chAlgorithm",
        "normalized": "",
        "package": "HTTP",
        "partial": "Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chDomain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "[URI]",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chDomain"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "chDomain",
        "normalized": "[URI]",
        "package": "HTTP",
        "partial": "Domain",
        "signature": "[URI]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chNonce",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chNonce"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "chNonce",
        "normalized": "",
        "package": "HTTP",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chOpaque",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chOpaque"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "chOpaque",
        "normalized": "",
        "package": "HTTP",
        "partial": "Opaque",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chQop",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "[Qop]",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chQop"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "chQop",
        "normalized": "[Qop]",
        "package": "HTTP",
        "partial": "Qop",
        "signature": "[Qop]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chRealm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chRealm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "chRealm",
        "normalized": "",
        "package": "HTTP",
        "partial": "Realm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chStale",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Bool",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chStale"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "chStale",
        "normalized": "",
        "package": "HTTP",
        "partial": "Stale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckComment",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ckComment",
        "normalized": "",
        "package": "HTTP",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckDomain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckDomain"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ckDomain",
        "normalized": "",
        "package": "HTTP",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ckName",
        "normalized": "",
        "package": "HTTP",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ckPath",
        "normalized": "",
        "package": "HTTP",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ckValue",
        "normalized": "",
        "package": "HTTP",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ckVersion",
        "normalized": "",
        "package": "HTTP",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:defaultCookieFilter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edefaultCookieFilter\u003c/code\u003e is the initial cookie acceptance filter.\n It welcomes them all into the store \u003ccode\u003e:-)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e Cookie -\u003e IO Bool",
        "fct-source": "src/Network-Browser.html#defaultCookieFilter",
        "fct-type": "function",
        "title": "defaultCookieFilter"
      },
      "index": {
        "description": "defaultCookieFilter is the initial cookie acceptance filter It welcomes them all into the store",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "defaultCookieFilter",
        "normalized": "URI-\u003eCookie-\u003eIO Bool",
        "package": "HTTP",
        "partial": "Cookie Filter",
        "signature": "URI-\u003eCookie-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:defaultGETRequest",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e Request_String",
        "fct-source": "src/Network-HTTP-Base.html#defaultGETRequest",
        "fct-type": "function",
        "title": "defaultGETRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "defaultGETRequest",
        "normalized": "URI-\u003eRequest_String",
        "package": "HTTP",
        "partial": "GETRequest",
        "signature": "URI-\u003eRequest_String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:defaultGETRequest_",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e Request a",
        "fct-source": "src/Network-HTTP-Base.html#defaultGETRequest_",
        "fct-type": "function",
        "title": "defaultGETRequest_"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "defaultGETRequest_",
        "normalized": "URI-\u003eRequest a",
        "package": "HTTP",
        "partial": "GETRequest",
        "signature": "URI-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:err",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#err",
        "fct-type": "function",
        "title": "err"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "err",
        "normalized": "String-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "",
        "signature": "String-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:formToRequest",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Form -\u003e Request_String",
        "fct-source": "src/Network-Browser.html#formToRequest",
        "fct-type": "function",
        "title": "formToRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "formToRequest",
        "normalized": "Form-\u003eRequest_String",
        "package": "HTTP",
        "partial": "To Request",
        "signature": "Form-\u003eRequest_String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getAllowBasicAuth",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t Bool",
        "fct-source": "src/Network-Browser.html#getAllowBasicAuth",
        "fct-type": "function",
        "title": "getAllowBasicAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getAllowBasicAuth",
        "normalized": "",
        "package": "HTTP",
        "partial": "Allow Basic Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getAllowRedirects",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetAllowRedirects\u003c/code\u003e returns current setting of the do-chase-redirects flag.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t Bool",
        "fct-source": "src/Network-Browser.html#getAllowRedirects",
        "fct-type": "function",
        "title": "getAllowRedirects"
      },
      "index": {
        "description": "getAllowRedirects returns current setting of the do-chase-redirects flag",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getAllowRedirects",
        "normalized": "",
        "package": "HTTP",
        "partial": "Allow Redirects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getAuthorities",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetAuthorities\u003c/code\u003e return the current set of \u003ccode\u003eAuthority\u003c/code\u003es known\n to the browser.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t [Authority]",
        "fct-source": "src/Network-Browser.html#getAuthorities",
        "fct-type": "function",
        "title": "getAuthorities"
      },
      "index": {
        "description": "getAuthorities return the current set of Authority known to the browser",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getAuthorities",
        "normalized": "BrowserAction a[Authority]",
        "package": "HTTP",
        "partial": "Authorities",
        "signature": "BrowserAction t[Authority]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getAuthorityGen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetAuthorityGen\u003c/code\u003e returns the current authority generator\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t (URI -\u003e String -\u003e IO (Maybe (String, String)))",
        "fct-source": "src/Network-Browser.html#getAuthorityGen",
        "fct-type": "function",
        "title": "getAuthorityGen"
      },
      "index": {
        "description": "getAuthorityGen returns the current authority generator",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getAuthorityGen",
        "normalized": "BrowserAction a(URI-\u003eString-\u003eIO(Maybe(String,String)))",
        "package": "HTTP",
        "partial": "Authority Gen",
        "signature": "BrowserAction t(URI-\u003eString-\u003eIO(Maybe(String,String)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getBrowserState",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Control.Monad.State.get instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003ccode\u003egetBrowserState\u003c/code\u003e returns the current browser config. Useful\n for restoring state across \u003ccode\u003e\u003ca\u003eBrowserAction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t (BrowserState t)",
        "fct-source": "src/Network-Browser.html#getBrowserState",
        "fct-type": "function",
        "title": "getBrowserState"
      },
      "index": {
        "description": "Deprecated Use Control.Monad.State.get instead getBrowserState returns the current browser config Useful for restoring state across BrowserAction",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getBrowserState",
        "normalized": "",
        "package": "HTTP",
        "partial": "Browser State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getCheckForProxy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetCheckForProxy\u003c/code\u003e returns the current check-proxy setting.\n Notice that this may not be equal to \u003ccode\u003eTrue\u003c/code\u003e if the session has\n set it to that via \u003ccode\u003e\u003ca\u003esetCheckForProxy\u003c/a\u003e\u003c/code\u003e and subsequently performed\n some HTTP protocol interactions. i.e., the flag return represents\n whether a proxy will be checked for again before any future protocol\n interactions.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t Bool",
        "fct-source": "src/Network-Browser.html#getCheckForProxy",
        "fct-type": "function",
        "title": "getCheckForProxy"
      },
      "index": {
        "description": "getCheckForProxy returns the current check-proxy setting Notice that this may not be equal to True if the session has set it to that via setCheckForProxy and subsequently performed some HTTP protocol interactions i.e the flag return represents whether proxy will be checked for again before any future protocol interactions",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getCheckForProxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "Check For Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getCookieFilter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetCookieFilter\u003c/code\u003e returns the current cookie acceptance filter.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t (URI -\u003e Cookie -\u003e IO Bool)",
        "fct-source": "src/Network-Browser.html#getCookieFilter",
        "fct-type": "function",
        "title": "getCookieFilter"
      },
      "index": {
        "description": "getCookieFilter returns the current cookie acceptance filter",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getCookieFilter",
        "normalized": "BrowserAction a(URI-\u003eCookie-\u003eIO Bool)",
        "package": "HTTP",
        "partial": "Cookie Filter",
        "signature": "BrowserAction t(URI-\u003eCookie-\u003eIO Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getCookies",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetCookies\u003c/code\u003e returns the current set of cookies known to\n the browser.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t [Cookie]",
        "fct-source": "src/Network-Browser.html#getCookies",
        "fct-type": "function",
        "title": "getCookies"
      },
      "index": {
        "description": "getCookies returns the current set of cookies known to the browser",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getCookies",
        "normalized": "BrowserAction a[Cookie]",
        "package": "HTTP",
        "partial": "Cookies",
        "signature": "BrowserAction t[Cookie]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getMaxAuthAttempts",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetMaxAuthAttempts\u003c/code\u003e returns the current max auth attempts. If \u003ccode\u003eNothing\u003c/code\u003e,\n the browser's default is used.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t (Maybe Int)",
        "fct-source": "src/Network-Browser.html#getMaxAuthAttempts",
        "fct-type": "function",
        "title": "getMaxAuthAttempts"
      },
      "index": {
        "description": "getMaxAuthAttempts returns the current max auth attempts If Nothing the browser default is used",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getMaxAuthAttempts",
        "normalized": "",
        "package": "HTTP",
        "partial": "Max Auth Attempts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getMaxErrorRetries",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetMaxErrorRetries\u003c/code\u003e returns the current max number of error retries.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t (Maybe Int)",
        "fct-source": "src/Network-Browser.html#getMaxErrorRetries",
        "fct-type": "function",
        "title": "getMaxErrorRetries"
      },
      "index": {
        "description": "getMaxErrorRetries returns the current max number of error retries",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getMaxErrorRetries",
        "normalized": "",
        "package": "HTTP",
        "partial": "Max Error Retries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getMaxPoolSize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetMaxPoolSize\u003c/code\u003e gets the maximum size of the connection pool\n that is used to cache connections between requests.\n If \u003ccode\u003eNothing\u003c/code\u003e, the \u003ca\u003eNetwork.Browser\u003c/a\u003e's default is used.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t (Maybe Int)",
        "fct-source": "src/Network-Browser.html#getMaxPoolSize",
        "fct-type": "function",
        "title": "getMaxPoolSize"
      },
      "index": {
        "description": "getMaxPoolSize gets the maximum size of the connection pool that is used to cache connections between requests If Nothing the Network.Browser default is used",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getMaxPoolSize",
        "normalized": "",
        "package": "HTTP",
        "partial": "Max Pool Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getMaxRedirects",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetMaxRedirects\u003c/code\u003e returns the current setting for the max-redirect count.\n If \u003ccode\u003eNothing\u003c/code\u003e, the \u003ca\u003eNetwork.Browser\u003c/a\u003e's default is used.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t (Maybe Int)",
        "fct-source": "src/Network-Browser.html#getMaxRedirects",
        "fct-type": "function",
        "title": "getMaxRedirects"
      },
      "index": {
        "description": "getMaxRedirects returns the current setting for the max-redirect count If Nothing the Network.Browser default is used",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getMaxRedirects",
        "normalized": "",
        "package": "HTTP",
        "partial": "Max Redirects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getProxy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetProxy\u003c/code\u003e returns the current proxy settings. If\n the auto-proxy flag is set to \u003ccode\u003eTrue\u003c/code\u003e, \u003ccode\u003egetProxy\u003c/code\u003e will\n perform the necessary \n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t Proxy",
        "fct-source": "src/Network-Browser.html#getProxy",
        "fct-type": "function",
        "title": "getProxy"
      },
      "index": {
        "description": "getProxy returns the current proxy settings If the auto-proxy flag is set to True getProxy will perform the necessary",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getProxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getUserAgent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetUserAgent\u003c/code\u003e returns the current \u003ccode\u003eUser-Agent:\u003c/code\u003e default string.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserAction t String",
        "fct-source": "src/Network-Browser.html#getUserAgent",
        "fct-type": "function",
        "title": "getUserAgent"
      },
      "index": {
        "description": "getUserAgent returns the current User-Agent default string",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "getUserAgent",
        "normalized": "",
        "package": "HTTP",
        "partial": "User Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ioAction",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Control.Monad.Trans.liftIO instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eLifts an IO action into the \u003ccode\u003e\u003ca\u003eBrowserAction\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "IO a -\u003e BrowserAction t a",
        "fct-source": "src/Network-Browser.html#ioAction",
        "fct-type": "function",
        "title": "ioAction"
      },
      "index": {
        "description": "Deprecated Use Control.Monad.Trans.liftIO instead Lifts an IO action into the BrowserAction monad",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "ioAction",
        "normalized": "IO a-\u003eBrowserAction b a",
        "package": "HTTP",
        "partial": "Action",
        "signature": "IO a-\u003eBrowserAction t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:out",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#out",
        "fct-type": "function",
        "title": "out"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "out",
        "normalized": "String-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "",
        "signature": "String-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erequest httpRequest\u003c/code\u003e tries to submit the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehttpRequest\u003c/code\u003e\n to some HTTP server (possibly going via a \u003cem\u003eproxy\u003c/em\u003e, see \u003ccode\u003e\u003ca\u003esetProxy\u003c/a\u003e\u003c/code\u003e.)\n Upon successful delivery, the URL where the response was fetched from\n is returned along with the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e itself.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Request ty -\u003e BrowserAction (HandleStream ty) (URI, Response ty)",
        "fct-source": "src/Network-Browser.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "request httpRequest tries to submit the Request httpRequest to some HTTP server possibly going via proxy see setProxy Upon successful delivery the URL where the response was fetched from is returned along with the Response itself",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "request",
        "normalized": "Request a-\u003eBrowserAction(HandleStream a)(URI,Response a)",
        "package": "HTTP",
        "partial": "",
        "signature": "Request ty-\u003eBrowserAction(HandleStream ty)(URI,Response ty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setAllowBasicAuth",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetAllowBasicAuth onOff\u003c/code\u003e enables/disables HTTP Basic Authentication.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Bool -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setAllowBasicAuth",
        "fct-type": "function",
        "title": "setAllowBasicAuth"
      },
      "index": {
        "description": "setAllowBasicAuth onOff enables disables HTTP Basic Authentication",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setAllowBasicAuth",
        "normalized": "Bool-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Allow Basic Auth",
        "signature": "Bool-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setAllowRedirects",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetAllowRedirects onOff\u003c/code\u003e toggles the willingness to\n follow redirects (HTTP responses with 3xx status codes).\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Bool -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setAllowRedirects",
        "fct-type": "function",
        "title": "setAllowRedirects"
      },
      "index": {
        "description": "setAllowRedirects onOff toggles the willingness to follow redirects HTTP responses with xx status codes",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setAllowRedirects",
        "normalized": "Bool-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Allow Redirects",
        "signature": "Bool-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setAuthorities",
      "description": {
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "[Authority] -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setAuthorities",
        "fct-type": "function",
        "title": "setAuthorities"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setAuthorities",
        "normalized": "[Authority]-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Authorities",
        "signature": "[Authority]-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setAuthorityGen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetAuthorityGen genAct\u003c/code\u003e sets the auth generator to \u003ccode\u003egenAct\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "(URI -\u003e String -\u003e IO (Maybe (String, String))) -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setAuthorityGen",
        "fct-type": "function",
        "title": "setAuthorityGen"
      },
      "index": {
        "description": "setAuthorityGen genAct sets the auth generator to genAct",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setAuthorityGen",
        "normalized": "(URI-\u003eString-\u003eIO(Maybe(String,String)))-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Authority Gen",
        "signature": "(URI-\u003eString-\u003eIO(Maybe(String,String)))-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setCheckForProxy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetCheckForProxy flg\u003c/code\u003e sets the one-time check for proxy\n flag to \u003ccode\u003eflg\u003c/code\u003e. If \u003ccode\u003eTrue\u003c/code\u003e, the session will try to determine\n the proxy server is locally configured. See \u003ccode\u003e\u003ca\u003efetchProxy\u003c/a\u003e\u003c/code\u003e\n for details of how this done.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Bool -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setCheckForProxy",
        "fct-type": "function",
        "title": "setCheckForProxy"
      },
      "index": {
        "description": "setCheckForProxy flg sets the one-time check for proxy flag to flg If True the session will try to determine the proxy server is locally configured See fetchProxy for details of how this done",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setCheckForProxy",
        "normalized": "Bool-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Check For Proxy",
        "signature": "Bool-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setCookieFilter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetCookieFilter fn\u003c/code\u003e sets the cookie acceptance filter to \u003ccode\u003efn\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "(URI -\u003e Cookie -\u003e IO Bool) -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setCookieFilter",
        "fct-type": "function",
        "title": "setCookieFilter"
      },
      "index": {
        "description": "setCookieFilter fn sets the cookie acceptance filter to fn",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setCookieFilter",
        "normalized": "(URI-\u003eCookie-\u003eIO Bool)-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Cookie Filter",
        "signature": "(URI-\u003eCookie-\u003eIO Bool)-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setCookies",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetCookies cookies\u003c/code\u003e replaces the set of cookies known to\n the browser to \u003ccode\u003ecookies\u003c/code\u003e. Useful when wanting to restore cookies\n used across \u003ccode\u003e\u003ca\u003ebrowse\u003c/a\u003e\u003c/code\u003e invocations.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "[Cookie] -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setCookies",
        "fct-type": "function",
        "title": "setCookies"
      },
      "index": {
        "description": "setCookies cookies replaces the set of cookies known to the browser to cookies Useful when wanting to restore cookies used across browse invocations",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setCookies",
        "normalized": "[Cookie]-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Cookies",
        "signature": "[Cookie]-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setDebugLog",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetDebugLog mbFile\u003c/code\u003e turns off debug logging iff \u003ccode\u003embFile\u003c/code\u003e\n is \u003ccode\u003eNothing\u003c/code\u003e. If set to \u003ccode\u003eJust fStem\u003c/code\u003e, logs of browser activity\n is appended to files of the form \u003ccode\u003efStem-url-authority\u003c/code\u003e, i.e.,\n \u003ccode\u003efStem\u003c/code\u003e is just the prefix for a set of log files, one per host/authority.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setDebugLog",
        "fct-type": "function",
        "title": "setDebugLog"
      },
      "index": {
        "description": "setDebugLog mbFile turns off debug logging iff mbFile is Nothing If set to Just fStem logs of browser activity is appended to files of the form fStem-url-authority i.e fStem is just the prefix for set of log files one per host authority",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setDebugLog",
        "normalized": "Maybe String-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Debug Log",
        "signature": "Maybe String-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setErrHandler",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetErrHandler\u003c/code\u003e sets the IO action to call when\n the browser reports running errors. To disable any\n such, set it to \u003ccode\u003econst (return ())\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "(String -\u003e IO ()) -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setErrHandler",
        "fct-type": "function",
        "title": "setErrHandler"
      },
      "index": {
        "description": "setErrHandler sets the IO action to call when the browser reports running errors To disable any such set it to const return",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setErrHandler",
        "normalized": "(String-\u003eIO())-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Err Handler",
        "signature": "(String-\u003eIO())-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setEventHandler",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetEventHandler onBrowserEvent\u003c/code\u003e configures event handling.\n If \u003ccode\u003eonBrowserEvent\u003c/code\u003e is \u003ccode\u003eNothing\u003c/code\u003e, event handling is turned off;\n setting it to \u003ccode\u003eJust onEv\u003c/code\u003e causes the \u003ccode\u003eonEv\u003c/code\u003e IO action to be\n notified of browser events during the processing of a request\n by the Browser pipeline.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe (BrowserEvent -\u003e BrowserAction ty ()) -\u003e BrowserAction ty ()",
        "fct-source": "src/Network-Browser.html#setEventHandler",
        "fct-type": "function",
        "title": "setEventHandler"
      },
      "index": {
        "description": "setEventHandler onBrowserEvent configures event handling If onBrowserEvent is Nothing event handling is turned off setting it to Just onEv causes the onEv IO action to be notified of browser events during the processing of request by the Browser pipeline",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setEventHandler",
        "normalized": "Maybe(BrowserEvent-\u003eBrowserAction a())-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Event Handler",
        "signature": "Maybe(BrowserEvent-\u003eBrowserAction ty())-\u003eBrowserAction ty()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setMaxAuthAttempts",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetMaxAuthAttempts mbMax\u003c/code\u003e sets the maximum number of authentication attempts\n to do. If \u003ccode\u003eNothing\u003c/code\u003e, rever to default max.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe Int -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setMaxAuthAttempts",
        "fct-type": "function",
        "title": "setMaxAuthAttempts"
      },
      "index": {
        "description": "setMaxAuthAttempts mbMax sets the maximum number of authentication attempts to do If Nothing rever to default max",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setMaxAuthAttempts",
        "normalized": "Maybe Int-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Max Auth Attempts",
        "signature": "Maybe Int-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setMaxErrorRetries",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetMaxErrorRetries mbMax\u003c/code\u003e sets the maximum number of attempts at\n transmitting a request. If \u003ccode\u003eNothing\u003c/code\u003e, rever to default max.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe Int -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setMaxErrorRetries",
        "fct-type": "function",
        "title": "setMaxErrorRetries"
      },
      "index": {
        "description": "setMaxErrorRetries mbMax sets the maximum number of attempts at transmitting request If Nothing rever to default max",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setMaxErrorRetries",
        "normalized": "Maybe Int-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Max Error Retries",
        "signature": "Maybe Int-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setMaxPoolSize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetMaxPoolSize maxCount\u003c/code\u003e sets the maximum size of the connection pool\n that is used to cache connections between requests\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe Int -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setMaxPoolSize",
        "fct-type": "function",
        "title": "setMaxPoolSize"
      },
      "index": {
        "description": "setMaxPoolSize maxCount sets the maximum size of the connection pool that is used to cache connections between requests",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setMaxPoolSize",
        "normalized": "Maybe Int-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Max Pool Size",
        "signature": "Maybe Int-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setMaxRedirects",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetMaxRedirects maxCount\u003c/code\u003e sets the maxiumum number of forwarding hops\n we are willing to jump through. A no-op if the count is negative; if zero,\n the max is set to whatever default applies. Notice that setting the max\n redirects count does \u003cem\u003enot\u003c/em\u003e enable following of redirects itself; use\n \u003ccode\u003e\u003ca\u003esetAllowRedirects\u003c/a\u003e\u003c/code\u003e to do so.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Maybe Int -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setMaxRedirects",
        "fct-type": "function",
        "title": "setMaxRedirects"
      },
      "index": {
        "description": "setMaxRedirects maxCount sets the maxiumum number of forwarding hops we are willing to jump through no-op if the count is negative if zero the max is set to whatever default applies Notice that setting the max redirects count does not enable following of redirects itself use setAllowRedirects to do so",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setMaxRedirects",
        "normalized": "Maybe Int-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Max Redirects",
        "signature": "Maybe Int-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setOutHandler",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetOutHandler\u003c/code\u003e sets the IO action to call when\n the browser chatters info on its running. To disable any\n such, set it to \u003ccode\u003econst (return ())\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "(String -\u003e IO ()) -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setOutHandler",
        "fct-type": "function",
        "title": "setOutHandler"
      },
      "index": {
        "description": "setOutHandler sets the IO action to call when the browser chatters info on its running To disable any such set it to const return",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setOutHandler",
        "normalized": "(String-\u003eIO())-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Out Handler",
        "signature": "(String-\u003eIO())-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setProxy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetProxy p\u003c/code\u003e will disable proxy usage if \u003ccode\u003ep\u003c/code\u003e is \u003ccode\u003eNoProxy\u003c/code\u003e.\n If \u003ccode\u003ep\u003c/code\u003e is \u003ccode\u003eProxy proxyURL mbAuth\u003c/code\u003e, then \u003ccode\u003eproxyURL\u003c/code\u003e is interpreted\n as the URL of the proxy to use, possibly authenticating via \n \u003ccode\u003e\u003ca\u003eAuthority\u003c/a\u003e\u003c/code\u003e information in \u003ccode\u003embAuth\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "Proxy -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setProxy",
        "fct-type": "function",
        "title": "setProxy"
      },
      "index": {
        "description": "setProxy will disable proxy usage if is NoProxy If is Proxy proxyURL mbAuth then proxyURL is interpreted as the URL of the proxy to use possibly authenticating via Authority information in mbAuth",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setProxy",
        "normalized": "Proxy-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "Proxy",
        "signature": "Proxy-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setUserAgent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetUserAgent ua\u003c/code\u003e sets the current \u003ccode\u003eUser-Agent:\u003c/code\u003e string to \u003ccode\u003eua\u003c/code\u003e. It\n will be used if no explicit user agent header is found in subsequent requests.\n\u003c/p\u003e\u003cp\u003eA common form of user agent string is \u003ccode\u003e\"name/version (details)\"\u003c/code\u003e. For\n example \u003ccode\u003e\"cabal-install/0.10.2 (HTTP 4000.1.2)\"\u003c/code\u003e. Including the version\n of this HTTP package can be helpful if you ever need to track down HTTP\n compatability quirks. This version is available via \u003ccode\u003e\u003ca\u003ehttpPackageVersion\u003c/a\u003e\u003c/code\u003e.\n For more info see \u003ca\u003ehttp://en.wikipedia.org/wiki/User_agent\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e BrowserAction t ()",
        "fct-source": "src/Network-Browser.html#setUserAgent",
        "fct-type": "function",
        "title": "setUserAgent"
      },
      "index": {
        "description": "setUserAgent ua sets the current User-Agent string to ua It will be used if no explicit user agent header is found in subsequent requests common form of user agent string is name version details For example cabal-install HTTP Including the version of this HTTP package can be helpful if you ever need to track down HTTP compatability quirks This version is available via httpPackageVersion For more info see http en.wikipedia.org wiki User agent",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "setUserAgent",
        "normalized": "String-\u003eBrowserAction a()",
        "package": "HTTP",
        "partial": "User Agent",
        "signature": "String-\u003eBrowserAction t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:uriDefaultTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003euriDefaultTo a b\u003c/code\u003e returns a URI that is consistent with the first\n argument URI \u003ccode\u003ea\u003c/code\u003e when read in the context of the second URI \u003ccode\u003eb\u003c/code\u003e.\n If the second argument is not sufficient context for determining\n a full URI then anarchy reins.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e URI -\u003e URI",
        "fct-source": "src/Network-Browser.html#uriDefaultTo",
        "fct-type": "function",
        "title": "uriDefaultTo"
      },
      "index": {
        "description": "uriDefaultTo returns URI that is consistent with the first argument URI when read in the context of the second URI If the second argument is not sufficient context for determining full URI then anarchy reins",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "uriDefaultTo",
        "normalized": "URI-\u003eURI-\u003eURI",
        "package": "HTTP",
        "partial": "Default To",
        "signature": "URI-\u003eURI-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:userCookieFilter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003euserCookieFilter\u003c/code\u003e is a handy acceptance filter, asking the\n user if he/she is willing to accept an incoming cookie before\n adding it to the store.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e Cookie -\u003e IO Bool",
        "fct-source": "src/Network-Browser.html#userCookieFilter",
        "fct-type": "function",
        "title": "userCookieFilter"
      },
      "index": {
        "description": "userCookieFilter is handy acceptance filter asking the user if he she is willing to accept an incoming cookie before adding it to the store",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "userCookieFilter",
        "normalized": "URI-\u003eCookie-\u003eIO Bool",
        "package": "HTTP",
        "partial": "Cookie Filter",
        "signature": "URI-\u003eCookie-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:withBrowserState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithBrowserAction st act\u003c/code\u003e performs \u003ccode\u003eact\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eBrowserState\u003c/a\u003e\u003c/code\u003e \u003ccode\u003est\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Browser",
        "fct-package": "HTTP",
        "fct-signature": "BrowserState t -\u003e BrowserAction t a -\u003e BrowserAction t a",
        "fct-source": "src/Network-Browser.html#withBrowserState",
        "fct-type": "function",
        "title": "withBrowserState"
      },
      "index": {
        "description": "withBrowserAction st act performs act with BrowserState st",
        "hierarchy": "Network Browser",
        "module": "Network.Browser",
        "name": "withBrowserState",
        "normalized": "BrowserState a-\u003eBrowserAction a b-\u003eBrowserAction a b",
        "package": "HTTP",
        "partial": "Browser State",
        "signature": "BrowserState t-\u003eBrowserAction t a-\u003eBrowserAction t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn order to give the user freedom in how request and response content\n is represented, a sufficiently abstract representation is needed of\n these internally. The \u003ca\u003eNetwork.BufferType\u003c/a\u003e module provides this, defining\n the \u003ccode\u003e\u003ca\u003eBufferType\u003c/a\u003e\u003c/code\u003e class and its ad-hoc representation of buffer operations\n via the \u003ccode\u003e\u003ca\u003eBufferOp\u003c/a\u003e\u003c/code\u003e record.\n\u003c/p\u003e\u003cp\u003eThis module provides definitions for the standard buffer types that the\n package supports, i.e., for \u003ccode\u003eString\u003c/code\u003e and \u003ccode\u003eByteString\u003c/code\u003e (strict and lazy.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-BufferType.html",
        "fct-type": "module",
        "title": "BufferType"
      },
      "index": {
        "description": "In order to give the user freedom in how request and response content is represented sufficiently abstract representation is needed of these internally The Network.BufferType module provides this defining the BufferType class and its ad-hoc representation of buffer operations via the BufferOp record This module provides definitions for the standard buffer types that the package supports i.e for String and ByteString strict and lazy",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "BufferType",
        "normalized": "",
        "package": "HTTP",
        "partial": "Buffer Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#t:BufferOp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eBufferOp\u003c/code\u003e encodes the I/O operations of the underlying buffer over \n a Handle in an (explicit) dictionary type. May not be needed, but gives\n us flexibility in explicit overriding and wrapping up of these methods.\n\u003c/p\u003e\u003cp\u003eAlong with IO operations is an ad-hoc collection of functions for working\n with these abstract buffers, as needed by the internals of the code\n that processes requests and responses.\n\u003c/p\u003e\u003cp\u003eWe supply three default \u003ccode\u003eBufferOp\u003c/code\u003e values, for \u003ccode\u003eString\u003c/code\u003e along with the\n strict and lazy versions of \u003ccode\u003eByteString\u003c/code\u003e. To add others, provide \u003ccode\u003eBufferOp\u003c/code\u003e\n definitions for \n\u003c/p\u003e",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "data",
        "title": "BufferOp"
      },
      "index": {
        "description": "BufferOp encodes the operations of the underlying buffer over Handle in an explicit dictionary type May not be needed but gives us flexibility in explicit overriding and wrapping up of these methods Along with IO operations is an ad-hoc collection of functions for working with these abstract buffers as needed by the internals of the code that processes requests and responses We supply three default BufferOp values for String along with the strict and lazy versions of ByteString To add others provide BufferOp definitions for",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "BufferOp",
        "normalized": "",
        "package": "HTTP",
        "partial": "Buffer Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#t:BufferType",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eBufferType\u003c/code\u003e class encodes, in a mixed-mode way, the interface\n that the library requires to operate over data embedded in HTTP\n requests and responses. That is, we use explicit dictionaries\n for the operations, but overload the name of the dicts themselves.\n\u003c/p\u003e",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "class",
        "fct-source": "src/Network-BufferType.html#BufferType",
        "fct-type": "class",
        "title": "BufferType"
      },
      "index": {
        "description": "The BufferType class encodes in mixed-mode way the interface that the library requires to operate over data embedded in HTTP requests and responses That is we use explicit dictionaries for the operations but overload the name of the dicts themselves",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "BufferType",
        "normalized": "",
        "package": "HTTP",
        "partial": "Buffer Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:BufferOp",
      "description": {
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "BufferOp",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "BufferOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "BufferOp",
        "normalized": "",
        "package": "HTTP",
        "partial": "Buffer Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_append",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_append"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_append",
        "normalized": "a-\u003ea-\u003ea",
        "package": "HTTP",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_concat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_concat",
        "normalized": "[a]-\u003ea",
        "package": "HTTP",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_empty",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "a",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_empty",
        "normalized": "",
        "package": "HTTP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_fromStr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_fromStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_fromStr",
        "normalized": "String-\u003ea",
        "package": "HTTP",
        "partial": "Str",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_hGet",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "Handle -\u003e Int -\u003e IO a",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_hGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_hGet",
        "normalized": "Handle-\u003eInt-\u003eIO a",
        "package": "HTTP",
        "partial": "Get",
        "signature": "Handle-\u003eInt-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_hGetContents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "Handle -\u003e IO a",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_hGetContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_hGetContents",
        "normalized": "Handle-\u003eIO a",
        "package": "HTTP",
        "partial": "Get Contents",
        "signature": "Handle-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_hGetLine",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "Handle -\u003e IO a",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_hGetLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_hGetLine",
        "normalized": "Handle-\u003eIO a",
        "package": "HTTP",
        "partial": "Get Line",
        "signature": "Handle-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_hPut",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "Handle -\u003e a -\u003e IO ()",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_hPut"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_hPut",
        "normalized": "Handle-\u003ea-\u003eIO()",
        "package": "HTTP",
        "partial": "Put",
        "signature": "Handle-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_isEmpty",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_isEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_isEmpty",
        "normalized": "a-\u003eBool",
        "package": "HTTP",
        "partial": "Empty",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_isLineTerm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_isLineTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_isLineTerm",
        "normalized": "a-\u003eBool",
        "package": "HTTP",
        "partial": "Line Term",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_snoc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "a -\u003e Word8 -\u003e a",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_snoc",
        "normalized": "a-\u003eWord-\u003ea",
        "package": "HTTP",
        "partial": "",
        "signature": "a-\u003eWord-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_span",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "(Char -\u003e Bool) -\u003e a -\u003e (a, a)",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_span"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_span",
        "normalized": "(Char-\u003eBool)-\u003ea-\u003e(a,a)",
        "package": "HTTP",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_splitAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "Int -\u003e a -\u003e (a, a)",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_splitAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_splitAt",
        "normalized": "Int-\u003ea-\u003e(a,a)",
        "package": "HTTP",
        "partial": "At",
        "signature": "Int-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_toStr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Network-BufferType.html#BufferOp",
        "fct-type": "function",
        "title": "buf_toStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "buf_toStr",
        "normalized": "a-\u003eString",
        "package": "HTTP",
        "partial": "Str",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:bufferOps",
      "description": {
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "BufferOp bufType",
        "fct-source": "src/Network-BufferType.html#bufferOps",
        "fct-type": "method",
        "title": "bufferOps"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "bufferOps",
        "normalized": "",
        "package": "HTTP",
        "partial": "Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:lazyBufferOp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elazyBufferOp\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eBufferOp\u003c/a\u003e\u003c/code\u003e definition over \u003ccode\u003eByteString\u003c/code\u003es,\n the non-strict kind.\n\u003c/p\u003e",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "BufferOp ByteString",
        "fct-source": "src/Network-BufferType.html#lazyBufferOp",
        "fct-type": "function",
        "title": "lazyBufferOp"
      },
      "index": {
        "description": "lazyBufferOp is the BufferOp definition over ByteString the non-strict kind",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "lazyBufferOp",
        "normalized": "",
        "package": "HTTP",
        "partial": "Buffer Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:strictBufferOp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003estrictBufferOp\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eBufferOp\u003c/a\u003e\u003c/code\u003e definition over \u003ccode\u003eByteString\u003c/code\u003es,\n the non-lazy kind.\n\u003c/p\u003e",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "BufferOp ByteString",
        "fct-source": "src/Network-BufferType.html#strictBufferOp",
        "fct-type": "function",
        "title": "strictBufferOp"
      },
      "index": {
        "description": "strictBufferOp is the BufferOp definition over ByteString the non-lazy kind",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "strictBufferOp",
        "normalized": "",
        "package": "HTTP",
        "partial": "Buffer Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:stringBufferOp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003estringBufferOp\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eBufferOp\u003c/a\u003e\u003c/code\u003e definition over \u003ccode\u003eString\u003c/code\u003es.\n It is defined in terms of \u003ccode\u003estrictBufferOp\u003c/code\u003e operations,\n unpacking/converting to \u003ccode\u003eString\u003c/code\u003e when needed.\n\u003c/p\u003e",
        "fct-module": "Network.BufferType",
        "fct-package": "HTTP",
        "fct-signature": "BufferOp String",
        "fct-source": "src/Network-BufferType.html#stringBufferOp",
        "fct-type": "function",
        "title": "stringBufferOp"
      },
      "index": {
        "description": "stringBufferOp is the BufferOp definition over String It is defined in terms of strictBufferOp operations unpacking converting to String when needed",
        "hierarchy": "Network BufferType",
        "module": "Network.BufferType",
        "name": "stringBufferOp",
        "normalized": "",
        "package": "HTTP",
        "partial": "Buffer Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresenting HTTP Auth values in Haskell.\n Right now, it contains mostly functionality needed by \u003ccode\u003e\u003ca\u003eBrowser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Auth.html",
        "fct-type": "module",
        "title": "Auth"
      },
      "index": {
        "description": "Representing HTTP Auth values in Haskell Right now it contains mostly functionality needed by Browser",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "Auth",
        "normalized": "",
        "package": "HTTP",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#t:Algorithm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eAlgorithm\u003c/code\u003e controls the digest algorithm to, \u003ccode\u003eMD5\u003c/code\u003e or \u003ccode\u003eMD5Session\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Auth.html#Algorithm",
        "fct-type": "data",
        "title": "Algorithm"
      },
      "index": {
        "description": "Algorithm controls the digest algorithm to MD5 or MD5Session",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "Algorithm",
        "normalized": "",
        "package": "HTTP",
        "partial": "Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#t:Authority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eAuthority\u003c/code\u003e specifies the HTTP Authentication method to use for\n a given domain/realm; \u003ccode\u003eBasic\u003c/code\u003e or \u003ccode\u003eDigest\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "data",
        "title": "Authority"
      },
      "index": {
        "description": "Authority specifies the HTTP Authentication method to use for given domain realm Basic or Digest",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "Authority",
        "normalized": "",
        "package": "HTTP",
        "partial": "Authority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#t:Challenge",
      "description": {
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "data",
        "title": "Challenge"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "Challenge",
        "normalized": "",
        "package": "HTTP",
        "partial": "Challenge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#t:Qop",
      "description": {
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Auth.html#Qop",
        "fct-type": "data",
        "title": "Qop"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "Qop",
        "normalized": "",
        "package": "HTTP",
        "partial": "Qop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:AlgMD5",
      "description": {
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "AlgMD5",
        "fct-source": "src/Network-HTTP-Auth.html#Algorithm",
        "fct-type": "function",
        "title": "AlgMD5"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "AlgMD5",
        "normalized": "",
        "package": "HTTP",
        "partial": "Alg MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:AlgMD5sess",
      "description": {
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "AlgMD5sess",
        "fct-source": "src/Network-HTTP-Auth.html#Algorithm",
        "fct-type": "function",
        "title": "AlgMD5sess"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "AlgMD5sess",
        "normalized": "",
        "package": "HTTP",
        "partial": "Alg MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:AuthBasic",
      "description": {
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "AuthBasic",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "AuthBasic"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "AuthBasic",
        "normalized": "",
        "package": "HTTP",
        "partial": "Auth Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:AuthDigest",
      "description": {
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "AuthDigest",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "AuthDigest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "AuthDigest",
        "normalized": "",
        "package": "HTTP",
        "partial": "Auth Digest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:ChalBasic",
      "description": {
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "ChalBasic",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "ChalBasic"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "ChalBasic",
        "normalized": "",
        "package": "HTTP",
        "partial": "Chal Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:ChalDigest",
      "description": {
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "ChalDigest",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "ChalDigest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "ChalDigest",
        "normalized": "",
        "package": "HTTP",
        "partial": "Chal Digest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:QopAuth",
      "description": {
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "QopAuth",
        "fct-source": "src/Network-HTTP-Auth.html#Qop",
        "fct-type": "function",
        "title": "QopAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "QopAuth",
        "normalized": "",
        "package": "HTTP",
        "partial": "Qop Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:QopAuthInt",
      "description": {
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "QopAuthInt",
        "fct-source": "src/Network-HTTP-Auth.html#Qop",
        "fct-type": "function",
        "title": "QopAuthInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "QopAuthInt",
        "normalized": "",
        "package": "HTTP",
        "partial": "Qop Auth Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auAlgorithm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "Maybe Algorithm",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auAlgorithm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "auAlgorithm",
        "normalized": "",
        "package": "HTTP",
        "partial": "Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auDomain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "[URI]",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auDomain"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "auDomain",
        "normalized": "[URI]",
        "package": "HTTP",
        "partial": "Domain",
        "signature": "[URI]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auNonce",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auNonce"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "auNonce",
        "normalized": "",
        "package": "HTTP",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auOpaque",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auOpaque"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "auOpaque",
        "normalized": "",
        "package": "HTTP",
        "partial": "Opaque",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "auPassword",
        "normalized": "",
        "package": "HTTP",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auQop",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "[Qop]",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auQop"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "auQop",
        "normalized": "[Qop]",
        "package": "HTTP",
        "partial": "Qop",
        "signature": "[Qop]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auRealm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auRealm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "auRealm",
        "normalized": "",
        "package": "HTTP",
        "partial": "Realm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auSite",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "URI",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auSite"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "auSite",
        "normalized": "",
        "package": "HTTP",
        "partial": "Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auUsername",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Authority",
        "fct-type": "function",
        "title": "auUsername"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "auUsername",
        "normalized": "",
        "package": "HTTP",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chAlgorithm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "Maybe Algorithm",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chAlgorithm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "chAlgorithm",
        "normalized": "",
        "package": "HTTP",
        "partial": "Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chDomain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "[URI]",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chDomain"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "chDomain",
        "normalized": "[URI]",
        "package": "HTTP",
        "partial": "Domain",
        "signature": "[URI]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chNonce",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chNonce"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "chNonce",
        "normalized": "",
        "package": "HTTP",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chOpaque",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chOpaque"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "chOpaque",
        "normalized": "",
        "package": "HTTP",
        "partial": "Opaque",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chQop",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "[Qop]",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chQop"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "chQop",
        "normalized": "[Qop]",
        "package": "HTTP",
        "partial": "Qop",
        "signature": "[Qop]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chRealm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chRealm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "chRealm",
        "normalized": "",
        "package": "HTTP",
        "partial": "Realm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chStale",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "Bool",
        "fct-source": "src/Network-HTTP-Auth.html#Challenge",
        "fct-type": "function",
        "title": "chStale"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "chStale",
        "normalized": "",
        "package": "HTTP",
        "partial": "Stale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:headerToChallenge",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eheaderToChallenge base www_auth\u003c/code\u003e tries to convert the \u003ccode\u003eWWW-Authenticate\u003c/code\u003e header \n \u003ccode\u003ewww_auth\u003c/code\u003e  into a \u003ccode\u003e\u003ca\u003eChallenge\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e Header -\u003e Maybe Challenge",
        "fct-source": "src/Network-HTTP-Auth.html#headerToChallenge",
        "fct-type": "function",
        "title": "headerToChallenge"
      },
      "index": {
        "description": "headerToChallenge base www auth tries to convert the WWW-Authenticate header www auth into Challenge value",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "headerToChallenge",
        "normalized": "URI-\u003eHeader-\u003eMaybe Challenge",
        "package": "HTTP",
        "partial": "To Challenge",
        "signature": "URI-\u003eHeader-\u003eMaybe Challenge"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:withAuthority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithAuthority auth req\u003c/code\u003e generates a credentials value from the \u003ccode\u003eauth\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAuthority\u003c/a\u003e\u003c/code\u003e,\n in the context of the given request.\n\u003c/p\u003e\u003cp\u003eIf a client nonce was to be used then this function might need to be of type ... -\u003e BrowserAction String\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Auth",
        "fct-package": "HTTP",
        "fct-signature": "Authority -\u003e Request ty -\u003e String",
        "fct-source": "src/Network-HTTP-Auth.html#withAuthority",
        "fct-type": "function",
        "title": "withAuthority"
      },
      "index": {
        "description": "withAuthority auth req generates credentials value from the auth Authority in the context of the given request If client nonce was to be used then this function might need to be of type BrowserAction String",
        "hierarchy": "Network HTTP Auth",
        "module": "Network.HTTP.Auth",
        "name": "withAuthority",
        "normalized": "Authority-\u003eRequest a-\u003eString",
        "package": "HTTP",
        "partial": "Authority",
        "signature": "Authority-\u003eRequest ty-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions of \u003ccode\u003eRequest\u003c/code\u003e and \u003ccode\u003eResponse\u003c/code\u003e types along with functions\n for normalizing them. It is assumed to be an internal module; user\n code should, if possible, import \u003ccode\u003eNetwork.HTTP\u003c/code\u003e to access the functionality\n that this module provides.\n\u003c/p\u003e\u003cp\u003eAdditionally, the module exports internal functions for working with URLs,\n and for handling the processing of requests and responses coming back.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Definitions of Request and Response types along with functions for normalizing them It is assumed to be an internal module user code should if possible import Network.HTTP to access the functionality that this module provides Additionally the module exports internal functions for working with URLs and for handling the processing of requests and responses coming back",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Base",
        "normalized": "",
        "package": "HTTP",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:HTTPRequest",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Base.html#HTTPRequest",
        "fct-type": "type",
        "title": "HTTPRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "HTTPRequest",
        "normalized": "",
        "package": "HTTP",
        "partial": "HTTPRequest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:HTTPResponse",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Base.html#HTTPResponse",
        "fct-type": "type",
        "title": "HTTPResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "HTTPResponse",
        "normalized": "",
        "package": "HTTP",
        "partial": "HTTPResponse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:NormalizeRequestOptions",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eNormalizeRequestOptions\u003c/code\u003e brings together the various defaulting/normalization options\n over \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es. Use \u003ccode\u003e\u003ca\u003edefaultNormalizeRequestOptions\u003c/a\u003e\u003c/code\u003e for the standard selection of option\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
        "fct-type": "data",
        "title": "NormalizeRequestOptions"
      },
      "index": {
        "description": "NormalizeRequestOptions brings together the various defaulting normalization options over Request Use defaultNormalizeRequestOptions for the standard selection of option",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "NormalizeRequestOptions",
        "normalized": "",
        "package": "HTTP",
        "partial": "Normalize Request Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eAn HTTP Request.\n The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of this type is used for message serialisation,\n which means no body data is output.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Base.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "An HTTP Request The Show instance of this type is used for message serialisation which means no body data is output",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Request",
        "normalized": "",
        "package": "HTTP",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:RequestData",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eRequestData\u003c/code\u003e contains the head of a HTTP request; method,\n its URL along with the auxillary/supporting header data.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Base.html#RequestData",
        "fct-type": "type",
        "title": "RequestData"
      },
      "index": {
        "description": "RequestData contains the head of HTTP request method its URL along with the auxillary supporting header data",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "RequestData",
        "normalized": "",
        "package": "HTTP",
        "partial": "Request Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:RequestMethod",
      "description": {
        "fct-descr": "\u003cp\u003eThe HTTP request method, to be used in the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object.\n We are missing a few of the stranger methods, but these are\n not really necessary until we add full TLS.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Base.html#RequestMethod",
        "fct-type": "data",
        "title": "RequestMethod"
      },
      "index": {
        "description": "The HTTP request method to be used in the Request object We are missing few of the stranger methods but these are not really necessary until we add full TLS",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "RequestMethod",
        "normalized": "",
        "package": "HTTP",
        "partial": "Request Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:RequestNormalizer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eRequestNormalizer\u003c/code\u003e is the shape of a (pure) function that rewrites\n a request into some normalized form.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Base.html#RequestNormalizer",
        "fct-type": "type",
        "title": "RequestNormalizer"
      },
      "index": {
        "description": "RequestNormalizer is the shape of pure function that rewrites request into some normalized form",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "RequestNormalizer",
        "normalized": "",
        "package": "HTTP",
        "partial": "Request Normalizer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:Request_String",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Base.html#Request_String",
        "fct-type": "type",
        "title": "Request_String"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Request_String",
        "normalized": "",
        "package": "HTTP",
        "partial": "Request String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:Response",
      "description": {
        "fct-descr": "\u003cp\u003eAn HTTP Response.\n The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of this type is used for message serialisation,\n which means no body data is output, additionally the output will\n show an HTTP version of 1.1 instead of the actual version returned\n by a server.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Base.html#Response",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "An HTTP Response The Show instance of this type is used for message serialisation which means no body data is output additionally the output will show an HTTP version of instead of the actual version returned by server",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Response",
        "normalized": "",
        "package": "HTTP",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:ResponseCode",
      "description": {
        "fct-descr": "\u003cp\u003eFor easy pattern matching, HTTP response codes \u003ccode\u003exyz\u003c/code\u003e are\n represented as \u003ccode\u003e(x,y,z)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Base.html#ResponseCode",
        "fct-type": "type",
        "title": "ResponseCode"
      },
      "index": {
        "description": "For easy pattern matching HTTP response codes xyz are represented as",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "ResponseCode",
        "normalized": "",
        "package": "HTTP",
        "partial": "Response Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:ResponseData",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eResponseData\u003c/code\u003e contains the head of a response payload;\n HTTP response code, accompanying text description + header\n fields.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Base.html#ResponseData",
        "fct-type": "type",
        "title": "ResponseData"
      },
      "index": {
        "description": "ResponseData contains the head of response payload HTTP response code accompanying text description header fields",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "ResponseData",
        "normalized": "",
        "package": "HTTP",
        "partial": "Response Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:ResponseNextStep",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Base.html#ResponseNextStep",
        "fct-type": "data",
        "title": "ResponseNextStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "ResponseNextStep",
        "normalized": "",
        "package": "HTTP",
        "partial": "Response Next Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:Response_String",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Base.html#Response_String",
        "fct-type": "type",
        "title": "Response_String"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Response_String",
        "normalized": "",
        "package": "HTTP",
        "partial": "Response String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:URIAuthority",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Base.html#URIAuthority",
        "fct-type": "data",
        "title": "URIAuthority"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "URIAuthority",
        "normalized": "",
        "package": "HTTP",
        "partial": "URIAuthority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:CONNECT",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "CONNECT",
        "fct-source": "src/Network-HTTP-Base.html#RequestMethod",
        "fct-type": "function",
        "title": "CONNECT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "CONNECT",
        "normalized": "",
        "package": "HTTP",
        "partial": "CONNECT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Continue",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Continue",
        "fct-source": "src/Network-HTTP-Base.html#ResponseNextStep",
        "fct-type": "function",
        "title": "Continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Continue",
        "normalized": "",
        "package": "HTTP",
        "partial": "Continue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Custom",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Custom String",
        "fct-source": "src/Network-HTTP-Base.html#RequestMethod",
        "fct-type": "function",
        "title": "Custom"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Custom",
        "normalized": "",
        "package": "HTTP",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:DELETE",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "DELETE",
        "fct-source": "src/Network-HTTP-Base.html#RequestMethod",
        "fct-type": "function",
        "title": "DELETE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "DELETE",
        "normalized": "",
        "package": "HTTP",
        "partial": "DELETE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:DieHorribly",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "DieHorribly String",
        "fct-source": "src/Network-HTTP-Base.html#ResponseNextStep",
        "fct-type": "function",
        "title": "DieHorribly"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "DieHorribly",
        "normalized": "",
        "package": "HTTP",
        "partial": "Die Horribly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Done",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Done",
        "fct-source": "src/Network-HTTP-Base.html#ResponseNextStep",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Done",
        "normalized": "",
        "package": "HTTP",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:ExpectEntity",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "ExpectEntity",
        "fct-source": "src/Network-HTTP-Base.html#ResponseNextStep",
        "fct-type": "function",
        "title": "ExpectEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "ExpectEntity",
        "normalized": "",
        "package": "HTTP",
        "partial": "Expect Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:GET",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "GET",
        "fct-source": "src/Network-HTTP-Base.html#RequestMethod",
        "fct-type": "function",
        "title": "GET"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "GET",
        "normalized": "",
        "package": "HTTP",
        "partial": "GET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:HEAD",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "HEAD",
        "fct-source": "src/Network-HTTP-Base.html#RequestMethod",
        "fct-type": "function",
        "title": "HEAD"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "HEAD",
        "normalized": "",
        "package": "HTTP",
        "partial": "HEAD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:NormalizeRequestOptions",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "NormalizeRequestOptions",
        "fct-source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
        "fct-type": "function",
        "title": "NormalizeRequestOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "NormalizeRequestOptions",
        "normalized": "",
        "package": "HTTP",
        "partial": "Normalize Request Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:OPTIONS",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "OPTIONS",
        "fct-source": "src/Network-HTTP-Base.html#RequestMethod",
        "fct-type": "function",
        "title": "OPTIONS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "OPTIONS",
        "normalized": "",
        "package": "HTTP",
        "partial": "OPTIONS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:POST",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "POST",
        "fct-source": "src/Network-HTTP-Base.html#RequestMethod",
        "fct-type": "function",
        "title": "POST"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "POST",
        "normalized": "",
        "package": "HTTP",
        "partial": "POST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:PUT",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "PUT",
        "fct-source": "src/Network-HTTP-Base.html#RequestMethod",
        "fct-type": "function",
        "title": "PUT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "PUT",
        "normalized": "",
        "package": "HTTP",
        "partial": "PUT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Request",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Request",
        "fct-source": "src/Network-HTTP-Base.html#Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Request",
        "normalized": "",
        "package": "HTTP",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Response",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Response",
        "fct-source": "src/Network-HTTP-Base.html#Response",
        "fct-type": "function",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Response",
        "normalized": "",
        "package": "HTTP",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Retry",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Retry",
        "fct-source": "src/Network-HTTP-Base.html#ResponseNextStep",
        "fct-type": "function",
        "title": "Retry"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "Retry",
        "normalized": "",
        "package": "HTTP",
        "partial": "Retry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:TRACE",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "TRACE",
        "fct-source": "src/Network-HTTP-Base.html#RequestMethod",
        "fct-type": "function",
        "title": "TRACE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "TRACE",
        "normalized": "",
        "package": "HTTP",
        "partial": "TRACE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:URIAuthority",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "URIAuthority",
        "fct-source": "src/Network-HTTP-Base.html#URIAuthority",
        "fct-type": "function",
        "title": "URIAuthority"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "URIAuthority",
        "normalized": "",
        "package": "HTTP",
        "partial": "URIAuthority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:catchIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecatchIO a h\u003c/code\u003e handles IO action exceptions throughout codebase; version-specific\n tweaks better go here.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "IO a -\u003e (IOException -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-HTTP-Base.html#catchIO",
        "fct-type": "function",
        "title": "catchIO"
      },
      "index": {
        "description": "catchIO handles IO action exceptions throughout codebase version-specific tweaks better go here",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "catchIO",
        "normalized": "IO a-\u003e(IOException-\u003eIO a)-\u003eIO a",
        "package": "HTTP",
        "partial": "IO",
        "signature": "IO a-\u003e(IOException-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:catchIO_",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "IO a -\u003e IO a -\u003e IO a",
        "fct-source": "src/Network-HTTP-Base.html#catchIO_",
        "fct-type": "function",
        "title": "catchIO_"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "catchIO_",
        "normalized": "IO a-\u003eIO a-\u003eIO a",
        "package": "HTTP",
        "partial": "IO",
        "signature": "IO a-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:chunkedTransfer",
      "description": {
        "fct-descr": "\u003cp\u003eA necessary feature of HTTP/1.1\n   Also the only transfer variety likely to\n   return any footers.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "BufferOp a -\u003e IO (Result a) -\u003e (Int -\u003e IO (Result a)) -\u003e IO (Result ([Header], a))",
        "fct-source": "src/Network-HTTP-Base.html#chunkedTransfer",
        "fct-type": "function",
        "title": "chunkedTransfer"
      },
      "index": {
        "description": "necessary feature of HTTP Also the only transfer variety likely to return any footers",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "chunkedTransfer",
        "normalized": "BufferOp a-\u003eIO(Result a)-\u003e(Int-\u003eIO(Result a))-\u003eIO(Result([Header],a))",
        "package": "HTTP",
        "partial": "Transfer",
        "signature": "BufferOp a-\u003eIO(Result a)-\u003e(Int-\u003eIO(Result a))-\u003eIO(Result([Header],a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:defaultGETRequest",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e Request_String",
        "fct-source": "src/Network-HTTP-Base.html#defaultGETRequest",
        "fct-type": "function",
        "title": "defaultGETRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "defaultGETRequest",
        "normalized": "URI-\u003eRequest_String",
        "package": "HTTP",
        "partial": "GETRequest",
        "signature": "URI-\u003eRequest_String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:defaultGETRequest_",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e Request a",
        "fct-source": "src/Network-HTTP-Base.html#defaultGETRequest_",
        "fct-type": "function",
        "title": "defaultGETRequest_"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "defaultGETRequest_",
        "normalized": "URI-\u003eRequest a",
        "package": "HTTP",
        "partial": "GETRequest",
        "signature": "URI-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:defaultNormalizeRequestOptions",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "NormalizeRequestOptions ty",
        "fct-source": "src/Network-HTTP-Base.html#defaultNormalizeRequestOptions",
        "fct-type": "function",
        "title": "defaultNormalizeRequestOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "defaultNormalizeRequestOptions",
        "normalized": "",
        "package": "HTTP",
        "partial": "Normalize Request Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:defaultUserAgent",
      "description": {
        "fct-descr": "\u003cp\u003eA default user agent string. The string is \u003ccode\u003e\"haskell-HTTP/$version\"\u003c/code\u003e\n where \u003ccode\u003e$version\u003c/code\u003e is the version of this HTTP package.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Base.html#defaultUserAgent",
        "fct-type": "function",
        "title": "defaultUserAgent"
      },
      "index": {
        "description": "default user agent string The string is haskell-HTTP version where version is the version of this HTTP package",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "defaultUserAgent",
        "normalized": "",
        "package": "HTTP",
        "partial": "User Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:failHTTPS",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e m ()",
        "fct-source": "src/Network-HTTP-Base.html#failHTTPS",
        "fct-type": "function",
        "title": "failHTTPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "failHTTPS",
        "normalized": "URI-\u003ea()",
        "package": "HTTP",
        "partial": "HTTPS",
        "signature": "URI-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:findConnClose",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "[Header] -\u003e Bool",
        "fct-source": "src/Network-HTTP-Base.html#findConnClose",
        "fct-type": "function",
        "title": "findConnClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "findConnClose",
        "normalized": "[Header]-\u003eBool",
        "package": "HTTP",
        "partial": "Conn Close",
        "signature": "[Header]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:getAuth",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetAuth req\u003c/code\u003e fishes out the authority portion of the URL in a request's \u003ccode\u003eHost\u003c/code\u003e\n header.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Request ty -\u003e m URIAuthority",
        "fct-source": "src/Network-HTTP-Base.html#getAuth",
        "fct-type": "function",
        "title": "getAuth"
      },
      "index": {
        "description": "getAuth req fishes out the authority portion of the URL in request Host header",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "getAuth",
        "normalized": "Request a-\u003eb URIAuthority",
        "package": "HTTP",
        "partial": "Auth",
        "signature": "Request ty-\u003em URIAuthority"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:getRequestVersion",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetRequestVersion req\u003c/code\u003e returns the HTTP protocol version of\n the request \u003ccode\u003ereq\u003c/code\u003e. If \u003ccode\u003eNothing\u003c/code\u003e, the default \u003ccode\u003e\u003ca\u003ehttpVersion\u003c/a\u003e\u003c/code\u003e can be assumed.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Request a -\u003e Maybe String",
        "fct-source": "src/Network-HTTP-Base.html#getRequestVersion",
        "fct-type": "function",
        "title": "getRequestVersion"
      },
      "index": {
        "description": "getRequestVersion req returns the HTTP protocol version of the request req If Nothing the default httpVersion can be assumed",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "getRequestVersion",
        "normalized": "Request a-\u003eMaybe String",
        "package": "HTTP",
        "partial": "Request Version",
        "signature": "Request a-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:getResponseVersion",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetResponseVersion rsp\u003c/code\u003e returns the HTTP protocol version of\n the response \u003ccode\u003ersp\u003c/code\u003e. If \u003ccode\u003eNothing\u003c/code\u003e, the default \u003ccode\u003e\u003ca\u003ehttpVersion\u003c/a\u003e\u003c/code\u003e can be \n assumed.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Response a -\u003e Maybe String",
        "fct-source": "src/Network-HTTP-Base.html#getResponseVersion",
        "fct-type": "function",
        "title": "getResponseVersion"
      },
      "index": {
        "description": "getResponseVersion rsp returns the HTTP protocol version of the response rsp If Nothing the default httpVersion can be assumed",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "getResponseVersion",
        "normalized": "Response a-\u003eMaybe String",
        "package": "HTTP",
        "partial": "Response Version",
        "signature": "Response a-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:hopefulTransfer",
      "description": {
        "fct-descr": "\u003cp\u003eUsed when nothing about data is known,\n   Unfortunately waiting for a socket closure\n   causes bad behaviour.  Here we just\n   take data once and give up the rest.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "BufferOp a -\u003e IO (Result a) -\u003e [a] -\u003e IO (Result ([Header], a))",
        "fct-source": "src/Network-HTTP-Base.html#hopefulTransfer",
        "fct-type": "function",
        "title": "hopefulTransfer"
      },
      "index": {
        "description": "Used when nothing about data is known Unfortunately waiting for socket closure causes bad behaviour Here we just take data once and give up the rest",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "hopefulTransfer",
        "normalized": "BufferOp a-\u003eIO(Result a)-\u003e[a]-\u003eIO(Result([Header],a))",
        "package": "HTTP",
        "partial": "Transfer",
        "signature": "BufferOp a-\u003eIO(Result a)-\u003e[a]-\u003eIO(Result([Header],a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:host",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Base.html#URIAuthority",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "host",
        "normalized": "",
        "package": "HTTP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:httpPackageVersion",
      "description": {
        "fct-descr": "\u003cp\u003eThe version of this HTTP package as a string, e.g. \u003ccode\u003e\"4000.1.2\"\u003c/code\u003e. This\n may be useful to include in a user agent string so that you can determine\n from server logs what version of this package HTTP clients are using.\n This can be useful for tracking down HTTP compatibility quirks.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Base.html#httpPackageVersion",
        "fct-type": "function",
        "title": "httpPackageVersion"
      },
      "index": {
        "description": "The version of this HTTP package as string e.g This may be useful to include in user agent string so that you can determine from server logs what version of this package HTTP clients are using This can be useful for tracking down HTTP compatibility quirks",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "httpPackageVersion",
        "normalized": "",
        "package": "HTTP",
        "partial": "Package Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:httpVersion",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Base.html#httpVersion",
        "fct-type": "function",
        "title": "httpVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "httpVersion",
        "normalized": "",
        "package": "HTTP",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:libUA",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultUserAgent instead (but note the user agent name change)\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated. Use \u003ccode\u003e\u003ca\u003edefaultUserAgent\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Base.html#libUA",
        "fct-type": "function",
        "title": "libUA"
      },
      "index": {
        "description": "Deprecated Use defaultUserAgent instead but note the user agent name change Deprecated Use defaultUserAgent",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "libUA",
        "normalized": "",
        "package": "HTTP",
        "partial": "UA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:linearTransfer",
      "description": {
        "fct-descr": "\u003cp\u003eUsed when we know exactly how many bytes to expect.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "(Int -\u003e IO (Result a)) -\u003e Int -\u003e IO (Result ([Header], a))",
        "fct-source": "src/Network-HTTP-Base.html#linearTransfer",
        "fct-type": "function",
        "title": "linearTransfer"
      },
      "index": {
        "description": "Used when we know exactly how many bytes to expect",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "linearTransfer",
        "normalized": "(Int-\u003eIO(Result a))-\u003eInt-\u003eIO(Result([Header],a))",
        "package": "HTTP",
        "partial": "Transfer",
        "signature": "(Int-\u003eIO(Result a))-\u003eInt-\u003eIO(Result([Header],a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:matchResponse",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "RequestMethod -\u003e ResponseCode -\u003e ResponseNextStep",
        "fct-source": "src/Network-HTTP-Base.html#matchResponse",
        "fct-type": "function",
        "title": "matchResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "matchResponse",
        "normalized": "RequestMethod-\u003eResponseCode-\u003eResponseNextStep",
        "package": "HTTP",
        "partial": "Response",
        "signature": "RequestMethod-\u003eResponseCode-\u003eResponseNextStep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:mkRequest",
      "description": {
        "fct-descr": "\u003cp\u003e'mkRequest method uri' constructs a well formed\n request for the given HTTP method and URI. It does not\n normalize the URI for the request _nor_ add the required \n Host: header. That is done either explicitly by the user\n or when requests are normalized prior to transmission.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "RequestMethod -\u003e URI -\u003e Request ty",
        "fct-source": "src/Network-HTTP-Base.html#mkRequest",
        "fct-type": "function",
        "title": "mkRequest"
      },
      "index": {
        "description": "mkRequest method uri constructs well formed request for the given HTTP method and URI It does not normalize the URI for the request nor add the required Host header That is done either explicitly by the user or when requests are normalized prior to transmission",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "mkRequest",
        "normalized": "RequestMethod-\u003eURI-\u003eRequest a",
        "package": "HTTP",
        "partial": "Request",
        "signature": "RequestMethod-\u003eURI-\u003eRequest ty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normCustoms",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "[RequestNormalizer ty]",
        "fct-source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
        "fct-type": "function",
        "title": "normCustoms"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "normCustoms",
        "normalized": "[RequestNormalizer a]",
        "package": "HTTP",
        "partial": "Customs",
        "signature": "[RequestNormalizer ty]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normDoClose",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Bool",
        "fct-source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
        "fct-type": "function",
        "title": "normDoClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "normDoClose",
        "normalized": "",
        "package": "HTTP",
        "partial": "Do Close",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normForProxy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Bool",
        "fct-source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
        "fct-type": "function",
        "title": "normForProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "normForProxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "For Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normUserAgent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
        "fct-type": "function",
        "title": "normUserAgent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "normUserAgent",
        "normalized": "",
        "package": "HTTP",
        "partial": "User Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normalizeHostHeader",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use Network.HTTP.Base.normalizeRequest instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Request ty -\u003e Request ty",
        "fct-source": "src/Network-HTTP-Base.html#normalizeHostHeader",
        "fct-type": "function",
        "title": "normalizeHostHeader"
      },
      "index": {
        "description": "Deprecated Please use Network.HTTP.Base.normalizeRequest instead",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "normalizeHostHeader",
        "normalized": "Request a-\u003eRequest a",
        "package": "HTTP",
        "partial": "Host Header",
        "signature": "Request ty-\u003eRequest ty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normalizeRequest",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enormalizeRequest opts req\u003c/code\u003e is the entry point to use to normalize your\n request prior to transmission (or other use.) Normalization is controlled\n via the \u003ccode\u003eNormalizeRequestOptions\u003c/code\u003e record.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "NormalizeRequestOptions ty -\u003e Request ty -\u003e Request ty",
        "fct-source": "src/Network-HTTP-Base.html#normalizeRequest",
        "fct-type": "function",
        "title": "normalizeRequest"
      },
      "index": {
        "description": "normalizeRequest opts req is the entry point to use to normalize your request prior to transmission or other use Normalization is controlled via the NormalizeRequestOptions record",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "normalizeRequest",
        "normalized": "NormalizeRequestOptions a-\u003eRequest a-\u003eRequest a",
        "package": "HTTP",
        "partial": "Request",
        "signature": "NormalizeRequestOptions ty-\u003eRequest ty-\u003eRequest ty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normalizeRequestURI",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use Network.HTTP.Base.normalizeRequest instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Bool -\u003e String -\u003e Request ty -\u003e Request ty",
        "fct-source": "src/Network-HTTP-Base.html#normalizeRequestURI",
        "fct-type": "function",
        "title": "normalizeRequestURI"
      },
      "index": {
        "description": "Deprecated Please use Network.HTTP.Base.normalizeRequest instead",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "normalizeRequestURI",
        "normalized": "Bool-\u003eString-\u003eRequest a-\u003eRequest a",
        "package": "HTTP",
        "partial": "Request URI",
        "signature": "Bool-\u003eString-\u003eRequest ty-\u003eRequest ty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:parseRequestHead",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "[String] -\u003e Result RequestData",
        "fct-source": "src/Network-HTTP-Base.html#parseRequestHead",
        "fct-type": "function",
        "title": "parseRequestHead"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "parseRequestHead",
        "normalized": "[String]-\u003eResult RequestData",
        "package": "HTTP",
        "partial": "Request Head",
        "signature": "[String]-\u003eResult RequestData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:parseResponseHead",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "[String] -\u003e Result ResponseData",
        "fct-source": "src/Network-HTTP-Base.html#parseResponseHead",
        "fct-type": "function",
        "title": "parseResponseHead"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "parseResponseHead",
        "normalized": "[String]-\u003eResult ResponseData",
        "package": "HTTP",
        "partial": "Response Head",
        "signature": "[String]-\u003eResult ResponseData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:parseURIAuthority",
      "description": {
        "fct-descr": "\u003cp\u003eParse the authority part of a URL.\n\u003c/p\u003e\u003cpre\u003e RFC 1732, section 3.1:\n\n       //\u003cuser\u003e:\u003cpassword\u003e@\u003chost\u003e:\u003cport\u003e/\u003curl-path\u003e\n  Some or all of the parts \"\u003cuser\u003e:\u003cpassword\u003e@\", \":\u003cpassword\u003e\",\n  \":\u003cport\u003e\", and \"/\u003curl-path\u003e\" may be excluded.\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Maybe URIAuthority",
        "fct-source": "src/Network-HTTP-Base.html#parseURIAuthority",
        "fct-type": "function",
        "title": "parseURIAuthority"
      },
      "index": {
        "description": "Parse the authority part of URL RFC section user password host port url-path Some or all of the parts user password password port and url-path may be excluded",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "parseURIAuthority",
        "normalized": "String-\u003eMaybe URIAuthority",
        "package": "HTTP",
        "partial": "URIAuthority",
        "signature": "String-\u003eMaybe URIAuthority"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:password",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Base.html#URIAuthority",
        "fct-type": "function",
        "title": "password"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "password",
        "normalized": "",
        "package": "HTTP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:port",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Network-HTTP-Base.html#URIAuthority",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "port",
        "normalized": "",
        "package": "HTTP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:readTillEmpty1",
      "description": {
        "fct-descr": "\u003cp\u003eRemove leading crlfs then call readTillEmpty2 (not required by RFC)\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "BufferOp a -\u003e IO (Result a) -\u003e IO (Result [a])",
        "fct-source": "src/Network-HTTP-Base.html#readTillEmpty1",
        "fct-type": "function",
        "title": "readTillEmpty1"
      },
      "index": {
        "description": "Remove leading crlfs then call readTillEmpty2 not required by RFC",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "readTillEmpty1",
        "normalized": "BufferOp a-\u003eIO(Result a)-\u003eIO(Result[a])",
        "package": "HTTP",
        "partial": "Till Empty",
        "signature": "BufferOp a-\u003eIO(Result a)-\u003eIO(Result[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:readTillEmpty2",
      "description": {
        "fct-descr": "\u003cp\u003eRead lines until an empty line (CRLF),\n   also accepts a connection close as end of\n   input, which is not an HTTP/1.1 compliant\n   thing to do - so probably indicates an\n   error condition.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "BufferOp a -\u003e IO (Result a) -\u003e [a] -\u003e IO (Result [a])",
        "fct-source": "src/Network-HTTP-Base.html#readTillEmpty2",
        "fct-type": "function",
        "title": "readTillEmpty2"
      },
      "index": {
        "description": "Read lines until an empty line CRLF also accepts connection close as end of input which is not an HTTP compliant thing to do so probably indicates an error condition",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "readTillEmpty2",
        "normalized": "BufferOp a-\u003eIO(Result a)-\u003e[a]-\u003eIO(Result[a])",
        "package": "HTTP",
        "partial": "Till Empty",
        "signature": "BufferOp a-\u003eIO(Result a)-\u003e[a]-\u003eIO(Result[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:reqURIAuth",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Request ty -\u003e URIAuth",
        "fct-source": "src/Network-HTTP-Base.html#reqURIAuth",
        "fct-type": "function",
        "title": "reqURIAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "reqURIAuth",
        "normalized": "Request a-\u003eURIAuth",
        "package": "HTTP",
        "partial": "URIAuth",
        "signature": "Request ty-\u003eURIAuth"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:responseParseError",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e String -\u003e Result a",
        "fct-source": "src/Network-HTTP-Base.html#responseParseError",
        "fct-type": "function",
        "title": "responseParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "responseParseError",
        "normalized": "String-\u003eString-\u003eResult a",
        "package": "HTTP",
        "partial": "Parse Error",
        "signature": "String-\u003eString-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rqBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "a",
        "fct-source": "src/Network-HTTP-Base.html#Request",
        "fct-type": "function",
        "title": "rqBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "rqBody",
        "normalized": "",
        "package": "HTTP",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rqHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "[Header]",
        "fct-source": "src/Network-HTTP-Base.html#Request",
        "fct-type": "function",
        "title": "rqHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "rqHeaders",
        "normalized": "[Header]",
        "package": "HTTP",
        "partial": "Headers",
        "signature": "[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rqMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "RequestMethod",
        "fct-source": "src/Network-HTTP-Base.html#Request",
        "fct-type": "function",
        "title": "rqMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "rqMethod",
        "normalized": "",
        "package": "HTTP",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rqURI",
      "description": {
        "fct-descr": "\u003cp\u003emight need changing in future\n  1) to support \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e uri in OPTIONS request\n  2) transparent support for both relative\n     & absolute uris, although this should\n     already work (leave scheme & host parts empty).\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "URI",
        "fct-source": "src/Network-HTTP-Base.html#Request",
        "fct-type": "function",
        "title": "rqURI"
      },
      "index": {
        "description": "might need changing in future to support uri in OPTIONS request transparent support for both relative absolute uris although this should already work leave scheme host parts empty",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "rqURI",
        "normalized": "",
        "package": "HTTP",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rspBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "a",
        "fct-source": "src/Network-HTTP-Base.html#Response",
        "fct-type": "function",
        "title": "rspBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "rspBody",
        "normalized": "",
        "package": "HTTP",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rspCode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "ResponseCode",
        "fct-source": "src/Network-HTTP-Base.html#Response",
        "fct-type": "function",
        "title": "rspCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "rspCode",
        "normalized": "",
        "package": "HTTP",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rspHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "[Header]",
        "fct-source": "src/Network-HTTP-Base.html#Response",
        "fct-type": "function",
        "title": "rspHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "rspHeaders",
        "normalized": "[Header]",
        "package": "HTTP",
        "partial": "Headers",
        "signature": "[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rspReason",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Base.html#Response",
        "fct-type": "function",
        "title": "rspReason"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "rspReason",
        "normalized": "",
        "package": "HTTP",
        "partial": "Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:setRequestBody",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Request_String -\u003e (String, String) -\u003e Request_String",
        "fct-source": "src/Network-HTTP-Base.html#setRequestBody",
        "fct-type": "function",
        "title": "setRequestBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "setRequestBody",
        "normalized": "Request_String-\u003e(String,String)-\u003eRequest_String",
        "package": "HTTP",
        "partial": "Request Body",
        "signature": "Request_String-\u003e(String,String)-\u003eRequest_String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:setRequestVersion",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetRequestVersion v req\u003c/code\u003e returns a new request, identical to\n \u003ccode\u003ereq\u003c/code\u003e, but with its HTTP version set to \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Request a -\u003e Request a",
        "fct-source": "src/Network-HTTP-Base.html#setRequestVersion",
        "fct-type": "function",
        "title": "setRequestVersion"
      },
      "index": {
        "description": "setRequestVersion req returns new request identical to req but with its HTTP version set to",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "setRequestVersion",
        "normalized": "String-\u003eRequest a-\u003eRequest a",
        "package": "HTTP",
        "partial": "Request Version",
        "signature": "String-\u003eRequest a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:setResponseVersion",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetResponseVersion v rsp\u003c/code\u003e returns a new response, identical to\n \u003ccode\u003ersp\u003c/code\u003e, but with its HTTP version set to \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Response a -\u003e Response a",
        "fct-source": "src/Network-HTTP-Base.html#setResponseVersion",
        "fct-type": "function",
        "title": "setResponseVersion"
      },
      "index": {
        "description": "setResponseVersion rsp returns new response identical to rsp but with its HTTP version set to",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "setResponseVersion",
        "normalized": "String-\u003eResponse a-\u003eResponse a",
        "package": "HTTP",
        "partial": "Response Version",
        "signature": "String-\u003eResponse a-\u003eResponse a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:splitRequestURI",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e (String, URI)",
        "fct-source": "src/Network-HTTP-Base.html#splitRequestURI",
        "fct-type": "function",
        "title": "splitRequestURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "splitRequestURI",
        "normalized": "URI-\u003e(String,URI)",
        "package": "HTTP",
        "partial": "Request URI",
        "signature": "URI-\u003e(String,URI)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:uglyDeathTransfer",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe in the future we will have a sensible thing\n   to do here, at that time we might want to change\n   the name.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e IO (Result ([Header], a))",
        "fct-source": "src/Network-HTTP-Base.html#uglyDeathTransfer",
        "fct-type": "function",
        "title": "uglyDeathTransfer"
      },
      "index": {
        "description": "Maybe in the future we will have sensible thing to do here at that time we might want to change the name",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "uglyDeathTransfer",
        "normalized": "String-\u003eIO(Result([Header],a))",
        "package": "HTTP",
        "partial": "Death Transfer",
        "signature": "String-\u003eIO(Result([Header],a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:uriAuthPort",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Maybe URI -\u003e URIAuth -\u003e Int",
        "fct-source": "src/Network-HTTP-Base.html#uriAuthPort",
        "fct-type": "function",
        "title": "uriAuthPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "uriAuthPort",
        "normalized": "Maybe URI-\u003eURIAuth-\u003eInt",
        "package": "HTTP",
        "partial": "Auth Port",
        "signature": "Maybe URI-\u003eURIAuth-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:uriAuthToString",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "URIAuth -\u003e String",
        "fct-source": "src/Network-HTTP-Base.html#uriAuthToString",
        "fct-type": "function",
        "title": "uriAuthToString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "uriAuthToString",
        "normalized": "URIAuth-\u003eString",
        "package": "HTTP",
        "partial": "Auth To String",
        "signature": "URIAuth-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:uriToAuthorityString",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "URI -\u003e String",
        "fct-source": "src/Network-HTTP-Base.html#uriToAuthorityString",
        "fct-type": "function",
        "title": "uriToAuthorityString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "uriToAuthorityString",
        "normalized": "URI-\u003eString",
        "package": "HTTP",
        "partial": "To Authority String",
        "signature": "URI-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:urlDecode",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Network-HTTP-Base.html#urlDecode",
        "fct-type": "function",
        "title": "urlDecode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "urlDecode",
        "normalized": "String-\u003eString",
        "package": "HTTP",
        "partial": "Decode",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:urlEncode",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Network-HTTP-Base.html#urlEncode",
        "fct-type": "function",
        "title": "urlEncode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "urlEncode",
        "normalized": "String-\u003eString",
        "package": "HTTP",
        "partial": "Encode",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:urlEncodeVars",
      "description": {
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "[(String, String)] -\u003e String",
        "fct-source": "src/Network-HTTP-Base.html#urlEncodeVars",
        "fct-type": "function",
        "title": "urlEncodeVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "urlEncodeVars",
        "normalized": "[(String,String)]-\u003eString",
        "package": "HTTP",
        "partial": "Encode Vars",
        "signature": "[(String,String)]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:user",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Base",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Base.html#URIAuthority",
        "fct-type": "function",
        "title": "user"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Base",
        "module": "Network.HTTP.Base",
        "name": "user",
        "normalized": "",
        "package": "HTTP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the data types and functions for working with HTTP cookies.\n Right now, it contains mostly functionality needed by \u003ccode\u003e\u003ca\u003eBrowser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Cookie.html",
        "fct-type": "module",
        "title": "Cookie"
      },
      "index": {
        "description": "This module provides the data types and functions for working with HTTP cookies Right now it contains mostly functionality needed by Browser",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "Cookie",
        "normalized": "",
        "package": "HTTP",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#t:Cookie",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eCookie\u003c/code\u003e is the Haskell representation of HTTP cookie values.\n See its relevant specs for authoritative details.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "data",
        "title": "Cookie"
      },
      "index": {
        "description": "Cookie is the Haskell representation of HTTP cookie values See its relevant specs for authoritative details",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "Cookie",
        "normalized": "",
        "package": "HTTP",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:MkCookie",
      "description": {
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "MkCookie",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "MkCookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "MkCookie",
        "normalized": "",
        "package": "HTTP",
        "partial": "Mk Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckComment",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "ckComment",
        "normalized": "",
        "package": "HTTP",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckDomain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckDomain"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "ckDomain",
        "normalized": "",
        "package": "HTTP",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "ckName",
        "normalized": "",
        "package": "HTTP",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "ckPath",
        "normalized": "",
        "package": "HTTP",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "ckValue",
        "normalized": "",
        "package": "HTTP",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "ckVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "ckVersion",
        "normalized": "",
        "package": "HTTP",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:cookieMatch",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecookieMatch (domain,path) ck\u003c/code\u003e performs the standard cookie\n match wrt the given domain and path. \n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "(String, String) -\u003e Cookie -\u003e Bool",
        "fct-source": "src/Network-HTTP-Cookie.html#cookieMatch",
        "fct-type": "function",
        "title": "cookieMatch"
      },
      "index": {
        "description": "cookieMatch domain path ck performs the standard cookie match wrt the given domain and path",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "cookieMatch",
        "normalized": "(String,String)-\u003eCookie-\u003eBool",
        "package": "HTTP",
        "partial": "Match",
        "signature": "(String,String)-\u003eCookie-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:cookiesToHeader",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecookieToHeaders ck\u003c/code\u003e serialises \u003ccode\u003eCookie\u003c/code\u003es to an HTTP request header.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "[Cookie] -\u003e Header",
        "fct-source": "src/Network-HTTP-Cookie.html#cookiesToHeader",
        "fct-type": "function",
        "title": "cookiesToHeader"
      },
      "index": {
        "description": "cookieToHeaders ck serialises Cookie to an HTTP request header",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "cookiesToHeader",
        "normalized": "[Cookie]-\u003eHeader",
        "package": "HTTP",
        "partial": "To Header",
        "signature": "[Cookie]-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:processCookieHeaders",
      "description": {
        "fct-descr": "\u003cpre\u003eprocessCookieHeaders dom hdrs\u003c/pre\u003e",
        "fct-module": "Network.HTTP.Cookie",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e [Header] -\u003e ([String], [Cookie])",
        "fct-source": "src/Network-HTTP-Cookie.html#processCookieHeaders",
        "fct-type": "function",
        "title": "processCookieHeaders"
      },
      "index": {
        "description": "processCookieHeaders dom hdrs",
        "hierarchy": "Network HTTP Cookie",
        "module": "Network.HTTP.Cookie",
        "name": "processCookieHeaders",
        "normalized": "String-\u003e[Header]-\u003e([String],[Cookie])",
        "package": "HTTP",
        "partial": "Cookie Headers",
        "signature": "String-\u003e[Header]-\u003e([String],[Cookie])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003e-based version of \u003ca\u003eNetwork.HTTP\u003c/a\u003e interface.\n\u003c/p\u003e\u003cp\u003eFor more detailed information about what the individual exports do, please consult\n the documentation for \u003ca\u003eNetwork.HTTP\u003c/a\u003e. \u003cem\u003eNotice\u003c/em\u003e however that the functions here do\n not perform any kind of normalization prior to transmission (or receipt); you are\n responsible for doing any such yourself, or, if you prefer, just switch to using\n \u003ca\u003eNetwork.HTTP\u003c/a\u003e function instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.HandleStream",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-HandleStream.html",
        "fct-type": "module",
        "title": "HandleStream"
      },
      "index": {
        "description": "HandleStream based version of Network.HTTP interface For more detailed information about what the individual exports do please consult the documentation for Network.HTTP Notice however that the functions here do not perform any kind of normalization prior to transmission or receipt you are responsible for doing any such yourself or if you prefer just switch to using Network.HTTP function instead",
        "hierarchy": "Network HTTP HandleStream",
        "module": "Network.HTTP.HandleStream",
        "name": "HandleStream",
        "normalized": "",
        "package": "HTTP",
        "partial": "Handle Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:receiveHTTP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereceiveHTTP hStream\u003c/code\u003e reads a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehStream\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.HandleStream",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream bufTy -\u003e IO (Result (Request bufTy))",
        "fct-source": "src/Network-HTTP-HandleStream.html#receiveHTTP",
        "fct-type": "function",
        "title": "receiveHTTP"
      },
      "index": {
        "description": "receiveHTTP hStream reads Request from the HandleStream hStream",
        "hierarchy": "Network HTTP HandleStream",
        "module": "Network.HTTP.HandleStream",
        "name": "receiveHTTP",
        "normalized": "HandleStream a-\u003eIO(Result(Request a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "HandleStream bufTy-\u003eIO(Result(Request bufTy))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:respondHTTP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erespondHTTP hStream httpResponse\u003c/code\u003e transmits an HTTP \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e over\n the \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehStream\u003c/code\u003e. It could be used to implement simple web\n server interactions, performing the dual role to \u003ccode\u003e\u003ca\u003esendHTTP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.HandleStream",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e Response ty -\u003e IO ()",
        "fct-source": "src/Network-HTTP-HandleStream.html#respondHTTP",
        "fct-type": "function",
        "title": "respondHTTP"
      },
      "index": {
        "description": "respondHTTP hStream httpResponse transmits an HTTP Response over the HandleStream hStream It could be used to implement simple web server interactions performing the dual role to sendHTTP",
        "hierarchy": "Network HTTP HandleStream",
        "module": "Network.HTTP.HandleStream",
        "name": "respondHTTP",
        "normalized": "HandleStream a-\u003eResponse a-\u003eIO()",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "HandleStream ty-\u003eResponse ty-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:sendHTTP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esendHTTP hStream httpRequest\u003c/code\u003e transmits \u003ccode\u003ehttpRequest\u003c/code\u003e over\n \u003ccode\u003ehStream\u003c/code\u003e, but does not alter the status of the connection, nor request it to be\n closed upon receiving the response.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.HandleStream",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e Request ty -\u003e IO (Result (Response ty))",
        "fct-source": "src/Network-HTTP-HandleStream.html#sendHTTP",
        "fct-type": "function",
        "title": "sendHTTP"
      },
      "index": {
        "description": "sendHTTP hStream httpRequest transmits httpRequest over hStream but does not alter the status of the connection nor request it to be closed upon receiving the response",
        "hierarchy": "Network HTTP HandleStream",
        "module": "Network.HTTP.HandleStream",
        "name": "sendHTTP",
        "normalized": "HandleStream a-\u003eRequest a-\u003eIO(Result(Response a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "HandleStream ty-\u003eRequest ty-\u003eIO(Result(Response ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:sendHTTP_notify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esendHTTP_notify hStream httpRequest action\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003esendHTTP\u003c/a\u003e\u003c/code\u003e, but\n lets you supply an IO \u003ccode\u003eaction\u003c/code\u003e to execute once the request has been successfully\n transmitted over the connection. Useful when you want to set up tracing of\n request transmission and its performance.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.HandleStream",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e Request ty -\u003e IO () -\u003e IO (Result (Response ty))",
        "fct-source": "src/Network-HTTP-HandleStream.html#sendHTTP_notify",
        "fct-type": "function",
        "title": "sendHTTP_notify"
      },
      "index": {
        "description": "sendHTTP notify hStream httpRequest action behaves like sendHTTP but lets you supply an IO action to execute once the request has been successfully transmitted over the connection Useful when you want to set up tracing of request transmission and its performance",
        "hierarchy": "Network HTTP HandleStream",
        "module": "Network.HTTP.HandleStream",
        "name": "sendHTTP_notify",
        "normalized": "HandleStream a-\u003eRequest a-\u003eIO()-\u003eIO(Result(Response a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "HandleStream ty-\u003eRequest ty-\u003eIO()-\u003eIO(Result(Response ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:simpleHTTP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esimpleHTTP\u003c/code\u003e transmits a resource across a non-persistent connection.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.HandleStream",
        "fct-package": "HTTP",
        "fct-signature": "Request ty -\u003e IO (Result (Response ty))",
        "fct-source": "src/Network-HTTP-HandleStream.html#simpleHTTP",
        "fct-type": "function",
        "title": "simpleHTTP"
      },
      "index": {
        "description": "simpleHTTP transmits resource across non-persistent connection",
        "hierarchy": "Network HTTP HandleStream",
        "module": "Network.HTTP.HandleStream",
        "name": "simpleHTTP",
        "normalized": "Request a-\u003eIO(Result(Response a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "Request ty-\u003eIO(Result(Response ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:simpleHTTP_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e, but acting on an already opened stream.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.HandleStream",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e Request ty -\u003e IO (Result (Response ty))",
        "fct-source": "src/Network-HTTP-HandleStream.html#simpleHTTP_",
        "fct-type": "function",
        "title": "simpleHTTP_"
      },
      "index": {
        "description": "Like simpleHTTP but acting on an already opened stream",
        "hierarchy": "Network HTTP HandleStream",
        "module": "Network.HTTP.HandleStream",
        "name": "simpleHTTP_",
        "normalized": "HandleStream a-\u003eRequest a-\u003eIO(Result(Response a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "HandleStream ty-\u003eRequest ty-\u003eIO(Result(Response ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:simpleHTTP_debug",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esimpleHTTP_debug debugFile req\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e, but logs\n the HTTP operation via the debug file \u003ccode\u003edebugFile\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.HandleStream",
        "fct-package": "HTTP",
        "fct-signature": "FilePath -\u003e Request ty -\u003e IO (Result (Response ty))",
        "fct-source": "src/Network-HTTP-HandleStream.html#simpleHTTP_debug",
        "fct-type": "function",
        "title": "simpleHTTP_debug"
      },
      "index": {
        "description": "simpleHTTP debug debugFile req behaves like simpleHTTP but logs the HTTP operation via the debug file debugFile",
        "hierarchy": "Network HTTP HandleStream",
        "module": "Network.HTTP.HandleStream",
        "name": "simpleHTTP_debug",
        "normalized": "FilePath-\u003eRequest a-\u003eIO(Result(Response a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "FilePath-\u003eRequest ty-\u003eIO(Result(Response ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the data types for representing HTTP headers, and\n operations for looking up header values and working with sequences of\n header values in \u003ccode\u003eRequest\u003c/code\u003es and \u003ccode\u003eResponse\u003c/code\u003es. To avoid having to provide\n separate set of operations for doing so, we introduce a type class \u003ccode\u003e\u003ca\u003eHasHeaders\u003c/a\u003e\u003c/code\u003e\n to facilitate writing such processing using overloading instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Headers.html",
        "fct-type": "module",
        "title": "Headers"
      },
      "index": {
        "description": "This module provides the data types for representing HTTP headers and operations for looking up header values and working with sequences of header values in Request and Response To avoid having to provide separate set of operations for doing so we introduce type class HasHeaders to facilitate writing such processing using overloading instead",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "Headers",
        "normalized": "",
        "package": "HTTP",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#t:HasHeaders",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eHasHeaders\u003c/code\u003e is a type class for types containing HTTP headers, allowing\n you to write overloaded header manipulation functions\n for both \u003ccode\u003eRequest\u003c/code\u003e and \u003ccode\u003eResponse\u003c/code\u003e data types, for instance.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "class",
        "fct-source": "src/Network-HTTP-Headers.html#HasHeaders",
        "fct-type": "class",
        "title": "HasHeaders"
      },
      "index": {
        "description": "HasHeaders is type class for types containing HTTP headers allowing you to write overloaded header manipulation functions for both Request and Response data types for instance",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HasHeaders",
        "normalized": "",
        "package": "HTTP",
        "partial": "Has Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#t:Header",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eHeader\u003c/code\u003e data type pairs header names & values.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Headers.html#Header",
        "fct-type": "data",
        "title": "Header"
      },
      "index": {
        "description": "The Header data type pairs header names values",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "Header",
        "normalized": "",
        "package": "HTTP",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#t:HeaderName",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP \u003ccode\u003eHeaderName\u003c/code\u003e type, a Haskell data constructor for each\n specification-defined header, prefixed with \u003ccode\u003eHdr\u003c/code\u003e and CamelCased,\n (i.e., eliding the \u003ccode\u003e-\u003c/code\u003e in the process.) Should you require using\n a custom header, there's the \u003ccode\u003eHdrCustom\u003c/code\u003e constructor which takes\n a \u003ccode\u003eString\u003c/code\u003e argument.\n\u003c/p\u003e\u003cp\u003eEncoding HTTP header names differently, as Strings perhaps, is an\n equally fine choice..no decidedly clear winner, but let's stick\n with data constructors here.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "data",
        "title": "HeaderName"
      },
      "index": {
        "description": "HTTP HeaderName type Haskell data constructor for each specification-defined header prefixed with Hdr and CamelCased i.e eliding the in the process Should you require using custom header there the HdrCustom constructor which takes String argument Encoding HTTP header names differently as Strings perhaps is an equally fine choice..no decidedly clear winner but let stick with data constructors here",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HeaderName",
        "normalized": "",
        "package": "HTTP",
        "partial": "Header Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#t:HeaderSetter",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderSetter",
        "fct-type": "type",
        "title": "HeaderSetter"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HeaderSetter",
        "normalized": "",
        "package": "HTTP",
        "partial": "Header Setter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAccept",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrAccept",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrAccept"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrAccept",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Accept",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAcceptCharset",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrAcceptCharset",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrAcceptCharset"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrAcceptCharset",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Accept Charset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAcceptEncoding",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrAcceptEncoding",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrAcceptEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrAcceptEncoding",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Accept Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAcceptLanguage",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrAcceptLanguage",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrAcceptLanguage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrAcceptLanguage",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Accept Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAge",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrAge",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrAge"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrAge",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Age",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAllow",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrAllow",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrAllow"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrAllow",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Allow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAuthorization",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrAuthorization",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrAuthorization"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrAuthorization",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Authorization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrCacheControl",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrCacheControl",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrCacheControl"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrCacheControl",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Cache Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrConnection",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrConnection",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrConnection",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentBase",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrContentBase",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrContentBase"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrContentBase",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Content Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentEncoding",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrContentEncoding",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrContentEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrContentEncoding",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Content Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentLanguage",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrContentLanguage",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrContentLanguage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrContentLanguage",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Content Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentLength",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrContentLength",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrContentLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrContentLength",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Content Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentLocation",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrContentLocation",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrContentLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrContentLocation",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Content Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentMD5",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrContentMD5",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrContentMD5"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrContentMD5",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Content MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentRange",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrContentRange",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrContentRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrContentRange",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Content Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentTransferEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eMIME entity headers (for sub-parts)\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrContentTransferEncoding",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrContentTransferEncoding"
      },
      "index": {
        "description": "MIME entity headers for sub-parts",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrContentTransferEncoding",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Content Transfer Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentType",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrContentType",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrContentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrContentType",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrCookie",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrCookie",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrCookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrCookie",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrCustom",
      "description": {
        "fct-descr": "\u003cp\u003eAllows for unrecognised or experimental headers.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrCustom String",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrCustom"
      },
      "index": {
        "description": "Allows for unrecognised or experimental headers",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrCustom",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrDate",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrDate",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrDate",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrETag",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrETag",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrETag"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrETag",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr ETag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrExpect",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrExpect",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrExpect"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrExpect",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Expect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrExpires",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrExpires",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrExpires"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrExpires",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Expires",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrFrom",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrFrom",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrFrom",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrHost",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrHost",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrHost",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrIfMatch",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrIfMatch",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrIfMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrIfMatch",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr If Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrIfModifiedSince",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrIfModifiedSince",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrIfModifiedSince"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrIfModifiedSince",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr If Modified Since",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrIfNoneMatch",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrIfNoneMatch",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrIfNoneMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrIfNoneMatch",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr If None Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrIfRange",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrIfRange",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrIfRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrIfRange",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr If Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrIfUnmodifiedSince",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrIfUnmodifiedSince",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrIfUnmodifiedSince"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrIfUnmodifiedSince",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr If Unmodified Since",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrLastModified",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrLastModified",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrLastModified"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrLastModified",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Last Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrLocation",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrLocation",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrLocation",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrMaxForwards",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrMaxForwards",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrMaxForwards"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrMaxForwards",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Max Forwards",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrPragma",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrPragma",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrPragma"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrPragma",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Pragma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrProxyAuthenticate",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrProxyAuthenticate",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrProxyAuthenticate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrProxyAuthenticate",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Proxy Authenticate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrProxyAuthorization",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrProxyAuthorization",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrProxyAuthorization"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrProxyAuthorization",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Proxy Authorization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrPublic",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrPublic",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrPublic"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrPublic",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Public",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrRange",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrRange",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrRange",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrReferer",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrReferer",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrReferer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrReferer",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Referer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrRetryAfter",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrRetryAfter",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrRetryAfter"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrRetryAfter",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Retry After",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrServer",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrServer",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrServer",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrSetCookie",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrSetCookie",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrSetCookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrSetCookie",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Set Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrTE",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrTE",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrTE",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrTrailer",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrTrailer",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrTrailer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrTrailer",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Trailer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrTransferEncoding",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrTransferEncoding",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrTransferEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrTransferEncoding",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Transfer Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrUpgrade",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrUpgrade",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrUpgrade"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrUpgrade",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Upgrade",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrUserAgent",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrUserAgent",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrUserAgent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrUserAgent",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr User Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrVary",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrVary",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrVary"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrVary",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Vary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrVia",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrVia",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrVia"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrVia",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Via",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrWWWAuthenticate",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrWWWAuthenticate",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrWWWAuthenticate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrWWWAuthenticate",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr WWWAuthenticate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrWarning",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HdrWarning",
        "fct-source": "src/Network-HTTP-Headers.html#HeaderName",
        "fct-type": "function",
        "title": "HdrWarning"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "HdrWarning",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hdr Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:Header",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "Header HeaderName String",
        "fct-source": "src/Network-HTTP-Headers.html#Header",
        "fct-type": "function",
        "title": "Header"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "Header",
        "normalized": "",
        "package": "HTTP",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:findHeader",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efindHeader hdrNm x\u003c/code\u003e looks up \u003ccode\u003ehdrNm\u003c/code\u003e in \u003ccode\u003ex\u003c/code\u003e, returning the first\n header that matches, if any.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HeaderName -\u003e a -\u003e Maybe String",
        "fct-source": "src/Network-HTTP-Headers.html#findHeader",
        "fct-type": "function",
        "title": "findHeader"
      },
      "index": {
        "description": "findHeader hdrNm looks up hdrNm in returning the first header that matches if any",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "findHeader",
        "normalized": "HeaderName-\u003ea-\u003eMaybe String",
        "package": "HTTP",
        "partial": "Header",
        "signature": "HeaderName-\u003ea-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:getHeaders",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "x -\u003e [Header]",
        "fct-source": "src/Network-HTTP-Headers.html#getHeaders",
        "fct-type": "method",
        "title": "getHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "getHeaders",
        "normalized": "a-\u003e[Header]",
        "package": "HTTP",
        "partial": "Headers",
        "signature": "x-\u003e[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:hdrName",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "Header -\u003e HeaderName",
        "fct-source": "src/Network-HTTP-Headers.html#hdrName",
        "fct-type": "function",
        "title": "hdrName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "hdrName",
        "normalized": "Header-\u003eHeaderName",
        "package": "HTTP",
        "partial": "Name",
        "signature": "Header-\u003eHeaderName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:hdrValue",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "Header -\u003e String",
        "fct-source": "src/Network-HTTP-Headers.html#hdrValue",
        "fct-type": "function",
        "title": "hdrValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "hdrValue",
        "normalized": "Header-\u003eString",
        "package": "HTTP",
        "partial": "Value",
        "signature": "Header-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:headerMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eheaderMap\u003c/code\u003e is a straight assoc list for translating between header names \n and values.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "[(String, HeaderName)]",
        "fct-source": "src/Network-HTTP-Headers.html#headerMap",
        "fct-type": "function",
        "title": "headerMap"
      },
      "index": {
        "description": "headerMap is straight assoc list for translating between header names and values",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "headerMap",
        "normalized": "[(String,HeaderName)]",
        "package": "HTTP",
        "partial": "Map",
        "signature": "[(String,HeaderName)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:insertHeader",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einsertHeader hdr val x\u003c/code\u003e inserts a header with the given header name\n and value. Does not check for existing headers with same name, allowing\n duplicates to be introduce (use \u003ccode\u003e\u003ca\u003ereplaceHeader\u003c/a\u003e\u003c/code\u003e if you want to avoid this.)\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HeaderSetter a",
        "fct-source": "src/Network-HTTP-Headers.html#insertHeader",
        "fct-type": "function",
        "title": "insertHeader"
      },
      "index": {
        "description": "insertHeader hdr val inserts header with the given header name and value Does not check for existing headers with same name allowing duplicates to be introduce use replaceHeader if you want to avoid this",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "insertHeader",
        "normalized": "",
        "package": "HTTP",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:insertHeaderIfMissing",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einsertHeaderIfMissing hdr val x\u003c/code\u003e adds the new header only if no previous\n header with name \u003ccode\u003ehdr\u003c/code\u003e exists in \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HeaderSetter a",
        "fct-source": "src/Network-HTTP-Headers.html#insertHeaderIfMissing",
        "fct-type": "function",
        "title": "insertHeaderIfMissing"
      },
      "index": {
        "description": "insertHeaderIfMissing hdr val adds the new header only if no previous header with name hdr exists in",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "insertHeaderIfMissing",
        "normalized": "",
        "package": "HTTP",
        "partial": "Header If Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:insertHeaders",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einsertHeaders hdrs x\u003c/code\u003e appends multiple headers to \u003ccode\u003ex\u003c/code\u003e's existing\n set.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "[Header] -\u003e a -\u003e a",
        "fct-source": "src/Network-HTTP-Headers.html#insertHeaders",
        "fct-type": "function",
        "title": "insertHeaders"
      },
      "index": {
        "description": "insertHeaders hdrs appends multiple headers to existing set",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "insertHeaders",
        "normalized": "[Header]-\u003ea-\u003ea",
        "package": "HTTP",
        "partial": "Headers",
        "signature": "[Header]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:lookupHeader",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elookupHeader hdr hdrs\u003c/code\u003e locates the first header matching \u003ccode\u003ehdr\u003c/code\u003e in the\n list \u003ccode\u003ehdrs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HeaderName -\u003e [Header] -\u003e Maybe String",
        "fct-source": "src/Network-HTTP-Headers.html#lookupHeader",
        "fct-type": "function",
        "title": "lookupHeader"
      },
      "index": {
        "description": "lookupHeader hdr hdrs locates the first header matching hdr in the list hdrs",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "lookupHeader",
        "normalized": "HeaderName-\u003e[Header]-\u003eMaybe String",
        "package": "HTTP",
        "partial": "Header",
        "signature": "HeaderName-\u003e[Header]-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:mkHeader",
      "description": {
        "fct-descr": "\u003cp\u003eHeader constructor as a function, hiding above rep.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HeaderName -\u003e String -\u003e Header",
        "fct-source": "src/Network-HTTP-Headers.html#mkHeader",
        "fct-type": "function",
        "title": "mkHeader"
      },
      "index": {
        "description": "Header constructor as function hiding above rep",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "mkHeader",
        "normalized": "HeaderName-\u003eString-\u003eHeader",
        "package": "HTTP",
        "partial": "Header",
        "signature": "HeaderName-\u003eString-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:parseHeader",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparseHeader headerNameAndValueString\u003c/code\u003e tries to unscramble a\n \u003ccode\u003eheader: value\u003c/code\u003e pairing and returning it as a \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Result Header",
        "fct-source": "src/Network-HTTP-Headers.html#parseHeader",
        "fct-type": "function",
        "title": "parseHeader"
      },
      "index": {
        "description": "parseHeader headerNameAndValueString tries to unscramble header value pairing and returning it as Header",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "parseHeader",
        "normalized": "String-\u003eResult Header",
        "package": "HTTP",
        "partial": "Header",
        "signature": "String-\u003eResult Header"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:parseHeaders",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparseHeaders hdrs\u003c/code\u003e takes a sequence of strings holding header\n information and parses them into a set of headers (preserving their\n order in the input argument.) Handles header values split up over\n multiple lines.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "[String] -\u003e Result [Header]",
        "fct-source": "src/Network-HTTP-Headers.html#parseHeaders",
        "fct-type": "function",
        "title": "parseHeaders"
      },
      "index": {
        "description": "parseHeaders hdrs takes sequence of strings holding header information and parses them into set of headers preserving their order in the input argument Handles header values split up over multiple lines",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "parseHeaders",
        "normalized": "[String]-\u003eResult[Header]",
        "package": "HTTP",
        "partial": "Headers",
        "signature": "[String]-\u003eResult[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:replaceHeader",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereplaceHeader hdr val o\u003c/code\u003e replaces the header \u003ccode\u003ehdr\u003c/code\u003e with the\n value \u003ccode\u003eval\u003c/code\u003e, dropping any existing \n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HeaderSetter a",
        "fct-source": "src/Network-HTTP-Headers.html#replaceHeader",
        "fct-type": "function",
        "title": "replaceHeader"
      },
      "index": {
        "description": "replaceHeader hdr val replaces the header hdr with the value val dropping any existing",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "replaceHeader",
        "normalized": "",
        "package": "HTTP",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:retrieveHeaders",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eretrieveHeaders hdrNm x\u003c/code\u003e gets a list of headers with \u003ccode\u003e\u003ca\u003eHeaderName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdrNm\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "HeaderName -\u003e a -\u003e [Header]",
        "fct-source": "src/Network-HTTP-Headers.html#retrieveHeaders",
        "fct-type": "function",
        "title": "retrieveHeaders"
      },
      "index": {
        "description": "retrieveHeaders hdrNm gets list of headers with HeaderName hdrNm",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "retrieveHeaders",
        "normalized": "HeaderName-\u003ea-\u003e[Header]",
        "package": "HTTP",
        "partial": "Headers",
        "signature": "HeaderName-\u003ea-\u003e[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:setHeaders",
      "description": {
        "fct-module": "Network.HTTP.Headers",
        "fct-package": "HTTP",
        "fct-signature": "x -\u003e [Header] -\u003e x",
        "fct-source": "src/Network-HTTP-Headers.html#setHeaders",
        "fct-type": "method",
        "title": "setHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Headers",
        "module": "Network.HTTP.Headers",
        "name": "setHeaders",
        "normalized": "a-\u003e[Header]-\u003ea",
        "package": "HTTP",
        "partial": "Headers",
        "signature": "x-\u003e[Header]-\u003ex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandling proxy server settings and their resolution.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Proxy.html",
        "fct-type": "module",
        "title": "Proxy"
      },
      "index": {
        "description": "Handling proxy server settings and their resolution",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "Proxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#t:Proxy",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP proxies (or not) are represented via \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e, specifying if a\n proxy should be used for the request (see \u003ccode\u003e\u003ca\u003esetProxy\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Proxy.html#Proxy",
        "fct-type": "data",
        "title": "Proxy"
      },
      "index": {
        "description": "HTTP proxies or not are represented via Proxy specifying if proxy should be used for the request see setProxy",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "Proxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#v:NoProxy",
      "description": {
        "fct-descr": "\u003cp\u003eDon't use a proxy.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "HTTP",
        "fct-signature": "NoProxy",
        "fct-source": "src/Network-HTTP-Proxy.html#Proxy",
        "fct-type": "function",
        "title": "NoProxy"
      },
      "index": {
        "description": "Don use proxy",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "NoProxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "No Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#v:Proxy",
      "description": {
        "fct-descr": "\u003cp\u003eUse the proxy given. Should be of the\n form \u003ca\u003ehttp://host:port\u003c/a\u003e, \u003ca\u003ehost\u003c/a\u003e, \u003ca\u003ehost:port\u003c/a\u003e, or \u003ca\u003ehttp://host\u003c/a\u003e.\n Additionally, an optional \u003ccode\u003e\u003ca\u003eAuthority\u003c/a\u003e\u003c/code\u003e for authentication with the proxy.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "HTTP",
        "fct-signature": "Proxy String (Maybe Authority)",
        "fct-source": "src/Network-HTTP-Proxy.html#Proxy",
        "fct-type": "function",
        "title": "Proxy"
      },
      "index": {
        "description": "Use the proxy given Should be of the form http host port host host port or http host Additionally an optional Authority for authentication with the proxy",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "Proxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#v:fetchProxy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efetchProxy flg\u003c/code\u003e gets the local proxy settings and parse the string\n into a \u003ccode\u003eProxy\u003c/code\u003e value. If you want to be informed of ill-formed proxy\n configuration strings, supply \u003ccode\u003eTrue\u003c/code\u003e for \u003ccode\u003eflg\u003c/code\u003e.\n Proxy settings are sourced from the \u003ccode\u003eHTTP_PROXY\u003c/code\u003e environment variable,\n and in the case of Windows platforms, by consulting IE/WinInet's proxy\n setting in the Registry.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "HTTP",
        "fct-signature": "Bool -\u003e IO Proxy",
        "fct-source": "src/Network-HTTP-Proxy.html#fetchProxy",
        "fct-type": "function",
        "title": "fetchProxy"
      },
      "index": {
        "description": "fetchProxy flg gets the local proxy settings and parse the string into Proxy value If you want to be informed of ill-formed proxy configuration strings supply True for flg Proxy settings are sourced from the HTTP PROXY environment variable and in the case of Windows platforms by consulting IE WinInet proxy setting in the Registry",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "fetchProxy",
        "normalized": "Bool-\u003eIO Proxy",
        "package": "HTTP",
        "partial": "Proxy",
        "signature": "Bool-\u003eIO Proxy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#v:noProxy",
      "description": {
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "HTTP",
        "fct-signature": "Proxy",
        "fct-source": "src/Network-HTTP-Proxy.html#noProxy",
        "fct-type": "function",
        "title": "noProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "noProxy",
        "normalized": "",
        "package": "HTTP",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#v:parseProxy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparseProxy str\u003c/code\u003e translates a proxy server string into a \u003ccode\u003eProxy\u003c/code\u003e value;\n returns \u003ccode\u003eNothing\u003c/code\u003e if not well-formed.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Maybe Proxy",
        "fct-source": "src/Network-HTTP-Proxy.html#parseProxy",
        "fct-type": "function",
        "title": "parseProxy"
      },
      "index": {
        "description": "parseProxy str translates proxy server string into Proxy value returns Nothing if not well-formed",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "parseProxy",
        "normalized": "String-\u003eMaybe Proxy",
        "package": "HTTP",
        "partial": "Proxy",
        "signature": "String-\u003eMaybe Proxy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransmitting HTTP requests and responses holding \u003ccode\u003eString\u003c/code\u003e in their payload bodies.\n This is one of the implementation modules for the \u003ca\u003eNetwork.HTTP\u003c/a\u003e interface, representing\n request and response content as \u003ccode\u003eString\u003c/code\u003es and transmitting them in non-packed form\n (cf. \u003ca\u003eNetwork.HTTP.HandleStream\u003c/a\u003e and its use of \u003ccode\u003eByteString\u003c/code\u003es.) over \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e handles.\n It is mostly here for backwards compatibility, representing how requests and responses\n were transmitted up until the 4.x releases of the HTTP package.\n\u003c/p\u003e\u003cp\u003eFor more detailed information about what the individual exports do, please consult\n the documentation for \u003ca\u003eNetwork.HTTP\u003c/a\u003e. \u003cem\u003eNotice\u003c/em\u003e however that the functions here do\n not perform any kind of normalization prior to transmission (or receipt); you are\n responsible for doing any such yourself, or, if you prefer, just switch to using\n \u003ca\u003eNetwork.HTTP\u003c/a\u003e function instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Stream",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "Transmitting HTTP requests and responses holding String in their payload bodies This is one of the implementation modules for the Network.HTTP interface representing request and response content as String and transmitting them in non-packed form cf Network.HTTP.HandleStream and its use of ByteString over Stream handles It is mostly here for backwards compatibility representing how requests and responses were transmitted up until the releases of the HTTP package For more detailed information about what the individual exports do please consult the documentation for Network.HTTP Notice however that the functions here do not perform any kind of normalization prior to transmission or receipt you are responsible for doing any such yourself or if you prefer just switch to using Network.HTTP function instead",
        "hierarchy": "Network HTTP Stream",
        "module": "Network.HTTP.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "HTTP",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:receiveHTTP",
      "description": {
        "fct-descr": "\u003cp\u003eReceive and parse a HTTP request from the given Stream. Should be used \n   for server side interactions.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Stream",
        "fct-package": "HTTP",
        "fct-signature": "s -\u003e IO (Result Request_String)",
        "fct-source": "src/Network-HTTP-Stream.html#receiveHTTP",
        "fct-type": "function",
        "title": "receiveHTTP"
      },
      "index": {
        "description": "Receive and parse HTTP request from the given Stream Should be used for server side interactions",
        "hierarchy": "Network HTTP Stream",
        "module": "Network.HTTP.Stream",
        "name": "receiveHTTP",
        "normalized": "a-\u003eIO(Result Request_String)",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "s-\u003eIO(Result Request_String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:respondHTTP",
      "description": {
        "fct-descr": "\u003cp\u003eVery simple function, send a HTTP response over the given stream. This \n   could be improved on to use different transfer types.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Stream",
        "fct-package": "HTTP",
        "fct-signature": "s -\u003e Response_String -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Stream.html#respondHTTP",
        "fct-type": "function",
        "title": "respondHTTP"
      },
      "index": {
        "description": "Very simple function send HTTP response over the given stream This could be improved on to use different transfer types",
        "hierarchy": "Network HTTP Stream",
        "module": "Network.HTTP.Stream",
        "name": "respondHTTP",
        "normalized": "a-\u003eResponse_String-\u003eIO()",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "s-\u003eResponse_String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:sendHTTP",
      "description": {
        "fct-module": "Network.HTTP.Stream",
        "fct-package": "HTTP",
        "fct-signature": "s -\u003e Request_String -\u003e IO (Result Response_String)",
        "fct-source": "src/Network-HTTP-Stream.html#sendHTTP",
        "fct-type": "function",
        "title": "sendHTTP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Stream",
        "module": "Network.HTTP.Stream",
        "name": "sendHTTP",
        "normalized": "a-\u003eRequest_String-\u003eIO(Result Response_String)",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "s-\u003eRequest_String-\u003eIO(Result Response_String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:sendHTTP_notify",
      "description": {
        "fct-module": "Network.HTTP.Stream",
        "fct-package": "HTTP",
        "fct-signature": "s -\u003e Request_String -\u003e IO () -\u003e IO (Result Response_String)",
        "fct-source": "src/Network-HTTP-Stream.html#sendHTTP_notify",
        "fct-type": "function",
        "title": "sendHTTP_notify"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Stream",
        "module": "Network.HTTP.Stream",
        "name": "sendHTTP_notify",
        "normalized": "a-\u003eRequest_String-\u003eIO()-\u003eIO(Result Response_String)",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "s-\u003eRequest_String-\u003eIO()-\u003eIO(Result Response_String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:simpleHTTP",
      "description": {
        "fct-descr": "\u003cp\u003eSimple way to transmit a resource across a non-persistent connection.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Stream",
        "fct-package": "HTTP",
        "fct-signature": "Request_String -\u003e IO (Result Response_String)",
        "fct-source": "src/Network-HTTP-Stream.html#simpleHTTP",
        "fct-type": "function",
        "title": "simpleHTTP"
      },
      "index": {
        "description": "Simple way to transmit resource across non-persistent connection",
        "hierarchy": "Network HTTP Stream",
        "module": "Network.HTTP.Stream",
        "name": "simpleHTTP",
        "normalized": "Request_String-\u003eIO(Result Response_String)",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "Request_String-\u003eIO(Result Response_String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:simpleHTTP_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e, but acting on an already opened stream.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Stream",
        "fct-package": "HTTP",
        "fct-signature": "s -\u003e Request_String -\u003e IO (Result Response_String)",
        "fct-source": "src/Network-HTTP-Stream.html#simpleHTTP_",
        "fct-type": "function",
        "title": "simpleHTTP_"
      },
      "index": {
        "description": "Like simpleHTTP but acting on an already opened stream",
        "hierarchy": "Network HTTP Stream",
        "module": "Network.HTTP.Stream",
        "name": "simpleHTTP_",
        "normalized": "a-\u003eRequest_String-\u003eIO(Result Response_String)",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "s-\u003eRequest_String-\u003eIO(Result Response_String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHTTP\u003c/a\u003e\u003c/code\u003e module provides a simple interface for sending and\n receiving content over HTTP in Haskell. Here's how to fetch a document from\n a URL and return it as a String:\n\u003c/p\u003e\u003cpre\u003e\n    simpleHTTP (getRequest \"http://www.haskell.org/\") \u003e\u003e= fmap (take 100) . getResponseBody\n        -- fetch document and return it (as a 'String'.)\n\u003c/pre\u003e\u003cp\u003eOther functions let you control the submission and transfer of HTTP\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es more carefully, letting you integrate the use\n of \u003ccode\u003e\u003ca\u003eHTTP\u003c/a\u003e\u003c/code\u003e functionality into your application.\n\u003c/p\u003e\u003cp\u003eThe module also exports the main types of the package, \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e,\n along with \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e and functions for working with these.\n\u003c/p\u003e\u003cp\u003eThe actual functionality is implemented by modules in the \u003ccode\u003eNetwork.HTTP.*\u003c/code\u003e\n namespace, letting you either use the default implementation here\n by importing \u003ccode\u003eNetwork.HTTP\u003c/code\u003e or, for more specific uses, selectively\n import the modules in \u003ccode\u003eNetwork.HTTP.*\u003c/code\u003e. To wit, more than one kind of\n representation of the bulk data that flows across a HTTP connection is \n supported. (see \u003ca\u003eNetwork.HTTP.HandleStream\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e send actions will normalize the \u003ccode\u003eRequest\u003c/code\u003e prior to transmission.\n Normalization such as having the request path be in the expected form and, possibly,\n introduce a default \u003ccode\u003eHost:\u003c/code\u003e header if one isn't already present. If you do not \n want the requests tampered with, but sent as-is, please import and use the\n the \u003ca\u003eNetwork.HTTP.HandleStream\u003c/a\u003e or \u003ca\u003eNetwork.HTTP.Stream\u003c/a\u003e modules instead. They\n export the same functions, but leaves construction and any normalization of \n \u003ccode\u003eRequest\u003c/code\u003es to the user.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e This package only supports HTTP; it does not support HTTPS.\n Attempts to use HTTPS result in an error.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP.html",
        "fct-type": "module",
        "title": "HTTP"
      },
      "index": {
        "description": "The HTTP module provides simple interface for sending and receiving content over HTTP in Haskell Here how to fetch document from URL and return it as String simpleHTTP getRequest http www.haskell.org fmap take getResponseBody fetch document and return it as String Other functions let you control the submission and transfer of HTTP Request and Response more carefully letting you integrate the use of HTTP functionality into your application The module also exports the main types of the package Request and Response along with Header and functions for working with these The actual functionality is implemented by modules in the Network.HTTP namespace letting you either use the default implementation here by importing Network.HTTP or for more specific uses selectively import the modules in Network.HTTP To wit more than one kind of representation of the bulk data that flows across HTTP connection is supported see Network.HTTP.HandleStream NOTE The Request send actions will normalize the Request prior to transmission Normalization such as having the request path be in the expected form and possibly introduce default Host header if one isn already present If you do not want the requests tampered with but sent as-is please import and use the the Network.HTTP.HandleStream or Network.HTTP.Stream modules instead They export the same functions but leaves construction and any normalization of Request to the user NOTE This package only supports HTTP it does not support HTTPS Attempts to use HTTPS result in an error",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HTTP",
        "normalized": "",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:getRequest",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience constructor for a GET \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the URL isn't syntactically valid, the function raises an error.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "String-\u003e Request_String",
        "fct-type": "function",
        "title": "getRequest"
      },
      "index": {
        "description": "convenience constructor for GET Request If the URL isn syntactically valid the function raises an error",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getRequest",
        "normalized": "String-\u003eRequest_String",
        "package": "HTTP",
        "partial": "Request",
        "signature": "String-\u003eRequest_String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:getResponseBody",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetResponseBody response\u003c/code\u003e takes the response of a HTTP requesting action and\n tries to extricate the body of the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eresponse\u003c/code\u003e. If the request action\n returned an error, an IO exception is raised.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "Result (Response ty) -\u003e IO ty",
        "fct-source": "src/Network-HTTP.html#getResponseBody",
        "fct-type": "function",
        "title": "getResponseBody"
      },
      "index": {
        "description": "getResponseBody response takes the response of HTTP requesting action and tries to extricate the body of the Response response If the request action returned an error an IO exception is raised",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getResponseBody",
        "normalized": "Result(Response a)-\u003eIO a",
        "package": "HTTP",
        "partial": "Response Body",
        "signature": "Result(Response ty)-\u003eIO ty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:getResponseCode",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetResponseBody response\u003c/code\u003e takes the response of a HTTP requesting action and\n tries to extricate the status code of the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eresponse\u003c/code\u003e. If the request action\n returned an error, an IO exception is raised.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "Result (Response ty) -\u003e IO ResponseCode",
        "fct-source": "src/Network-HTTP.html#getResponseCode",
        "fct-type": "function",
        "title": "getResponseCode"
      },
      "index": {
        "description": "getResponseBody response takes the response of HTTP requesting action and tries to extricate the status code of the Response response If the request action returned an error an IO exception is raised",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getResponseCode",
        "normalized": "Result(Response a)-\u003eIO ResponseCode",
        "package": "HTTP",
        "partial": "Response Code",
        "signature": "Result(Response ty)-\u003eIO ResponseCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:headRequest",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience constructor for a HEAD \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the URL isn't syntactically valid, the function raises an error.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "String-\u003e Request_String",
        "fct-type": "function",
        "title": "headRequest"
      },
      "index": {
        "description": "convenience constructor for HEAD Request If the URL isn syntactically valid the function raises an error",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "headRequest",
        "normalized": "String-\u003eRequest_String",
        "package": "HTTP",
        "partial": "Request",
        "signature": "String-\u003eRequest_String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:postRequest",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience constructor for a POST \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the URL isn't syntactically valid, the function raises an error.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "String-\u003e Request_String",
        "fct-type": "function",
        "title": "postRequest"
      },
      "index": {
        "description": "convenience constructor for POST Request If the URL isn syntactically valid the function raises an error",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "postRequest",
        "normalized": "String-\u003eRequest_String",
        "package": "HTTP",
        "partial": "Request",
        "signature": "String-\u003eRequest_String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:postRequestWithBody",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience constructor for a POST \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt constructs a request and sets the body as well as\n the Content-Type and Content-Length headers. The contents of the body\n are forced to calculate the value for the Content-Length header.\n\u003c/p\u003e\u003cp\u003eIf the URL isn't syntactically valid, the function raises an error.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "String-\u003e String-\u003e String-\u003e Request_String",
        "fct-type": "function",
        "title": "postRequestWithBody"
      },
      "index": {
        "description": "convenience constructor for POST Request It constructs request and sets the body as well as the Content-Type and Content-Length headers The contents of the body are forced to calculate the value for the Content-Length header If the URL isn syntactically valid the function raises an error",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "postRequestWithBody",
        "normalized": "String-\u003eString-\u003eString-\u003eRequest_String",
        "package": "HTTP",
        "partial": "Request With Body",
        "signature": "String-\u003eString-\u003eString-\u003eRequest_String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:receiveHTTP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereceiveHTTP hStream\u003c/code\u003e reads a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehStream\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e IO (Result (Request ty))",
        "fct-source": "src/Network-HTTP.html#receiveHTTP",
        "fct-type": "function",
        "title": "receiveHTTP"
      },
      "index": {
        "description": "receiveHTTP hStream reads Request from the HandleStream hStream",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "receiveHTTP",
        "normalized": "HandleStream a-\u003eIO(Result(Request a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "HandleStream ty-\u003eIO(Result(Request ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:respondHTTP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erespondHTTP hStream httpResponse\u003c/code\u003e transmits an HTTP \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e over\n the \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehStream\u003c/code\u003e. It could be used to implement simple web\n server interactions, performing the dual role to \u003ccode\u003e\u003ca\u003esendHTTP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e Response ty -\u003e IO ()",
        "fct-source": "src/Network-HTTP.html#respondHTTP",
        "fct-type": "function",
        "title": "respondHTTP"
      },
      "index": {
        "description": "respondHTTP hStream httpResponse transmits an HTTP Response over the HandleStream hStream It could be used to implement simple web server interactions performing the dual role to sendHTTP",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "respondHTTP",
        "normalized": "HandleStream a-\u003eResponse a-\u003eIO()",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "HandleStream ty-\u003eResponse ty-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:sendHTTP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esendHTTP hStream httpRequest\u003c/code\u003e transmits \u003ccode\u003ehttpRequest\u003c/code\u003e (after normalization) over\n \u003ccode\u003ehStream\u003c/code\u003e, but does not alter the status of the connection, nor request it to be\n closed upon receiving the response.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e Request ty -\u003e IO (Result (Response ty))",
        "fct-source": "src/Network-HTTP.html#sendHTTP",
        "fct-type": "function",
        "title": "sendHTTP"
      },
      "index": {
        "description": "sendHTTP hStream httpRequest transmits httpRequest after normalization over hStream but does not alter the status of the connection nor request it to be closed upon receiving the response",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "sendHTTP",
        "normalized": "HandleStream a-\u003eRequest a-\u003eIO(Result(Response a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "HandleStream ty-\u003eRequest ty-\u003eIO(Result(Response ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:sendHTTP_notify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esendHTTP_notify hStream httpRequest action\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003esendHTTP\u003c/a\u003e\u003c/code\u003e, but\n lets you supply an IO \u003ccode\u003eaction\u003c/code\u003e to execute once the request has been successfully\n transmitted over the connection. Useful when you want to set up tracing of\n request transmission and its performance.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e Request ty -\u003e IO () -\u003e IO (Result (Response ty))",
        "fct-source": "src/Network-HTTP.html#sendHTTP_notify",
        "fct-type": "function",
        "title": "sendHTTP_notify"
      },
      "index": {
        "description": "sendHTTP notify hStream httpRequest action behaves like sendHTTP but lets you supply an IO action to execute once the request has been successfully transmitted over the connection Useful when you want to set up tracing of request transmission and its performance",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "sendHTTP_notify",
        "normalized": "HandleStream a-\u003eRequest a-\u003eIO()-\u003eIO(Result(Response a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "HandleStream ty-\u003eRequest ty-\u003eIO()-\u003eIO(Result(Response ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:simpleHTTP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esimpleHTTP req\u003c/code\u003e transmits the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ereq\u003c/code\u003e by opening a \u003cem\u003edirect\u003c/em\u003e, non-persistent\n connection to the HTTP server that \u003ccode\u003ereq\u003c/code\u003e is destined for, followed by transmitting\n it and gathering up the response as a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e. Prior to sending the request,\n it is normalized (via \u003ccode\u003e\u003ca\u003enormalizeRequest\u003c/a\u003e\u003c/code\u003e). If you have to mediate the request\n via an HTTP proxy, you will have to normalize the request yourself. Or switch to\n using \u003ccode\u003e\u003ca\u003eBrowser\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e simpleHTTP (getRequest \"http://hackage.haskell.org/\")\n simpleHTTP (getRequest \"http://hackage.haskell.org:8012/\")\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "Request ty -\u003e IO (Result (Response ty))",
        "fct-source": "src/Network-HTTP.html#simpleHTTP",
        "fct-type": "function",
        "title": "simpleHTTP"
      },
      "index": {
        "description": "simpleHTTP req transmits the Request req by opening direct non-persistent connection to the HTTP server that req is destined for followed by transmitting it and gathering up the response as Result Prior to sending the request it is normalized via normalizeRequest If you have to mediate the request via an HTTP proxy you will have to normalize the request yourself Or switch to using Browser instead Examples simpleHTTP getRequest http hackage.haskell.org simpleHTTP getRequest http hackage.haskell.org",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "simpleHTTP",
        "normalized": "Request a-\u003eIO(Result(Response a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "Request ty-\u003eIO(Result(Response ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:simpleHTTP_",
      "description": {
        "fct-descr": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e, but acting on an already opened stream.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e Request ty -\u003e IO (Result (Response ty))",
        "fct-source": "src/Network-HTTP.html#simpleHTTP_",
        "fct-type": "function",
        "title": "simpleHTTP_"
      },
      "index": {
        "description": "Identical to simpleHTTP but acting on an already opened stream",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "simpleHTTP_",
        "normalized": "HandleStream a-\u003eRequest a-\u003eIO(Result(Response a))",
        "package": "HTTP",
        "partial": "HTTP",
        "signature": "HandleStream ty-\u003eRequest ty-\u003eIO(Result(Response ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn library for creating abstract streams. Originally part of Gray's\\/Bringert's\n HTTP module.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Changes by Robin Bate Boerop \u003ca\u003erobin@bateboerop.name\u003c/a\u003e:\n      - Removed unnecessary import statements.\n      - Moved Debug code to StreamDebugger.hs\n      - Moved Socket-related code to StreamSocket.hs.\n\u003c/li\u003e\u003cli\u003e Changes by Simon Foster:\n      - Split Network.HTTPmodule up into to separate\n        Network.[Stream,TCP,HTTP] modules\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "An library for creating abstract streams Originally part of Gray Bringert HTTP module Changes by Robin Bate Boerop robin@bateboerop.name Removed unnecessary import statements Moved Debug code to StreamDebugger.hs Moved Socket-related code to StreamSocket.hs Changes by Simon Foster Split Network.HTTPmodule up into to separate Network Stream TCP HTTP modules",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "HTTP",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#t:ConnError",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-Stream.html#ConnError",
        "fct-type": "data",
        "title": "ConnError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "ConnError",
        "normalized": "",
        "package": "HTTP",
        "partial": "Conn Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the type returned by many exported network functions.\n\u003c/p\u003e",
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "type",
        "fct-source": "src/Network-Stream.html#Result",
        "fct-type": "type",
        "title": "Result"
      },
      "index": {
        "description": "This is the type returned by many exported network functions",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "Result",
        "normalized": "",
        "package": "HTTP",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eStreams should make layering of TLS protocol easier in future,\n they allow reading/writing to files etc for debugging,\n they allow use of protocols other than TCP/IP\n and they allow customisation.\n\u003c/p\u003e\u003cp\u003eInstances of this class should not trim\n the input in any way, e.g. leave LF on line\n endings etc. Unless that is exactly the behaviour\n you want from your twisted instances ;)\n\u003c/p\u003e",
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "class",
        "fct-source": "src/Network-Stream.html#Stream",
        "fct-type": "class",
        "title": "Stream"
      },
      "index": {
        "description": "Streams should make layering of TLS protocol easier in future they allow reading writing to files etc for debugging they allow use of protocols other than TCP IP and they allow customisation Instances of this class should not trim the input in any way e.g leave LF on line endings etc Unless that is exactly the behaviour you want from your twisted instances",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "HTTP",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:ErrorClosed",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "ErrorClosed",
        "fct-source": "src/Network-Stream.html#ConnError",
        "fct-type": "function",
        "title": "ErrorClosed"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "ErrorClosed",
        "normalized": "",
        "package": "HTTP",
        "partial": "Error Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:ErrorMisc",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "ErrorMisc String",
        "fct-source": "src/Network-Stream.html#ConnError",
        "fct-type": "function",
        "title": "ErrorMisc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "ErrorMisc",
        "normalized": "",
        "package": "HTTP",
        "partial": "Error Misc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:ErrorParse",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "ErrorParse String",
        "fct-source": "src/Network-Stream.html#ConnError",
        "fct-type": "function",
        "title": "ErrorParse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "ErrorParse",
        "normalized": "",
        "package": "HTTP",
        "partial": "Error Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:ErrorReset",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "ErrorReset",
        "fct-source": "src/Network-Stream.html#ConnError",
        "fct-type": "function",
        "title": "ErrorReset"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "ErrorReset",
        "normalized": "",
        "package": "HTTP",
        "partial": "Error Reset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:bindE",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "Result a -\u003e (a -\u003e Result b) -\u003e Result b",
        "fct-source": "src/Network-Stream.html#bindE",
        "fct-type": "function",
        "title": "bindE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "bindE",
        "normalized": "Result a-\u003e(a-\u003eResult b)-\u003eResult b",
        "package": "HTTP",
        "partial": "",
        "signature": "Result a-\u003e(a-\u003eResult b)-\u003eResult b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:close",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "x -\u003e IO ()",
        "fct-source": "src/Network-Stream.html#close",
        "fct-type": "method",
        "title": "close"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "close",
        "normalized": "a-\u003eIO()",
        "package": "HTTP",
        "partial": "",
        "signature": "x-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:closeOnEnd",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "closeOnEnd",
        "fct-source": "src/Network-Stream.html#closeOnEnd",
        "fct-type": "method",
        "title": "closeOnEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "closeOnEnd",
        "normalized": "",
        "package": "HTTP",
        "partial": "On End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:failMisc",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Result a",
        "fct-source": "src/Network-Stream.html#failMisc",
        "fct-type": "function",
        "title": "failMisc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "failMisc",
        "normalized": "String-\u003eResult a",
        "package": "HTTP",
        "partial": "Misc",
        "signature": "String-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:failParse",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Result a",
        "fct-source": "src/Network-Stream.html#failParse",
        "fct-type": "function",
        "title": "failParse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "failParse",
        "normalized": "String-\u003eResult a",
        "package": "HTTP",
        "partial": "Parse",
        "signature": "String-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:failWith",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "ConnError -\u003e Result a",
        "fct-source": "src/Network-Stream.html#failWith",
        "fct-type": "function",
        "title": "failWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "failWith",
        "normalized": "ConnError-\u003eResult a",
        "package": "HTTP",
        "partial": "With",
        "signature": "ConnError-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:fmapE",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "(a -\u003e Result b) -\u003e IO (Result a) -\u003e IO (Result b)",
        "fct-source": "src/Network-Stream.html#fmapE",
        "fct-type": "function",
        "title": "fmapE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "fmapE",
        "normalized": "(a-\u003eResult b)-\u003eIO(Result a)-\u003eIO(Result b)",
        "package": "HTTP",
        "partial": "",
        "signature": "(a-\u003eResult b)-\u003eIO(Result a)-\u003eIO(Result b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:readBlock",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "x -\u003e Int -\u003e IO (Result String)",
        "fct-source": "src/Network-Stream.html#readBlock",
        "fct-type": "method",
        "title": "readBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "readBlock",
        "normalized": "a-\u003eInt-\u003eIO(Result String)",
        "package": "HTTP",
        "partial": "Block",
        "signature": "x-\u003eInt-\u003eIO(Result String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:readLine",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "x -\u003e IO (Result String)",
        "fct-source": "src/Network-Stream.html#readLine",
        "fct-type": "method",
        "title": "readLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "readLine",
        "normalized": "a-\u003eIO(Result String)",
        "package": "HTTP",
        "partial": "Line",
        "signature": "x-\u003eIO(Result String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:writeBlock",
      "description": {
        "fct-module": "Network.Stream",
        "fct-package": "HTTP",
        "fct-signature": "x -\u003e String -\u003e IO (Result ())",
        "fct-source": "src/Network-Stream.html#writeBlock",
        "fct-type": "method",
        "title": "writeBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stream",
        "module": "Network.Stream",
        "name": "writeBlock",
        "normalized": "a-\u003eString-\u003eIO(Result())",
        "package": "HTTP",
        "partial": "Block",
        "signature": "x-\u003eString-\u003eIO(Result())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamDebugger.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements debugging of \u003ccode\u003eStream\u003c/code\u003es.  Originally part of Gray's\\/Bringert's\n HTTP module.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Changes by Robin Bate Boerop \u003ca\u003erobin@bateboerop.name\u003c/a\u003e:\n      - Created.  Made minor formatting changes.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Network.StreamDebugger",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-StreamDebugger.html",
        "fct-type": "module",
        "title": "StreamDebugger"
      },
      "index": {
        "description": "Implements debugging of Stream Originally part of Gray Bringert HTTP module Changes by Robin Bate Boerop robin@bateboerop.name Created Made minor formatting changes",
        "hierarchy": "Network StreamDebugger",
        "module": "Network.StreamDebugger",
        "name": "StreamDebugger",
        "normalized": "",
        "package": "HTTP",
        "partial": "Stream Debugger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamDebugger.html#t:StreamDebugger",
      "description": {
        "fct-descr": "\u003cp\u003eAllows stream logging.  Refer to \u003ccode\u003e\u003ca\u003edebugStream\u003c/a\u003e\u003c/code\u003e below.\n\u003c/p\u003e",
        "fct-module": "Network.StreamDebugger",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-StreamDebugger.html#StreamDebugger",
        "fct-type": "data",
        "title": "StreamDebugger"
      },
      "index": {
        "description": "Allows stream logging Refer to debugStream below",
        "hierarchy": "Network StreamDebugger",
        "module": "Network.StreamDebugger",
        "name": "StreamDebugger",
        "normalized": "",
        "package": "HTTP",
        "partial": "Stream Debugger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamDebugger.html#v:debugByteStream",
      "description": {
        "fct-module": "Network.StreamDebugger",
        "fct-package": "HTTP",
        "fct-signature": "FilePath -\u003e HandleStream ty -\u003e IO (HandleStream ty)",
        "fct-source": "src/Network-StreamDebugger.html#debugByteStream",
        "fct-type": "function",
        "title": "debugByteStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Network StreamDebugger",
        "module": "Network.StreamDebugger",
        "name": "debugByteStream",
        "normalized": "FilePath-\u003eHandleStream a-\u003eIO(HandleStream a)",
        "package": "HTTP",
        "partial": "Byte Stream",
        "signature": "FilePath-\u003eHandleStream ty-\u003eIO(HandleStream ty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamDebugger.html#v:debugStream",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a stream with logging I/O.\n   The first argument is a filename which is opened in \u003ccode\u003eAppendMode\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.StreamDebugger",
        "fct-package": "HTTP",
        "fct-signature": "FilePath -\u003e a -\u003e IO (StreamDebugger a)",
        "fct-source": "src/Network-StreamDebugger.html#debugStream",
        "fct-type": "function",
        "title": "debugStream"
      },
      "index": {
        "description": "Wraps stream with logging The first argument is filename which is opened in AppendMode",
        "hierarchy": "Network StreamDebugger",
        "module": "Network.StreamDebugger",
        "name": "debugStream",
        "normalized": "FilePath-\u003ea-\u003eIO(StreamDebugger a)",
        "package": "HTTP",
        "partial": "Stream",
        "signature": "FilePath-\u003ea-\u003eIO(StreamDebugger a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamSocket.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSocket Stream instance. Originally part of Gray's\\/Bringert's HTTP module.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Changes by Robin Bate Boerop \u003ca\u003erobin@bateboerop.name\u003c/a\u003e:\n      - Made dependencies explicit in import statements.\n      - Removed false dependencies in import statements.\n      - Created separate module for instance Stream Socket.\n\u003c/li\u003e\u003cli\u003e Changes by Simon Foster:\n      - Split module up into to sepearate Network.[Stream,TCP,HTTP] modules\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Network.StreamSocket",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-StreamSocket.html",
        "fct-type": "module",
        "title": "StreamSocket"
      },
      "index": {
        "description": "Socket Stream instance Originally part of Gray Bringert HTTP module Changes by Robin Bate Boerop robin@bateboerop.name Made dependencies explicit in import statements Removed false dependencies in import statements Created separate module for instance Stream Socket Changes by Simon Foster Split module up into to sepearate Network Stream TCP HTTP modules",
        "hierarchy": "Network StreamSocket",
        "module": "Network.StreamSocket",
        "name": "StreamSocket",
        "normalized": "",
        "package": "HTTP",
        "partial": "Stream Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamSocket.html#v:handleSocketError",
      "description": {
        "fct-descr": "\u003cp\u003eException handler for socket operations.\n\u003c/p\u003e",
        "fct-module": "Network.StreamSocket",
        "fct-package": "HTTP",
        "fct-signature": "Socket -\u003e IOException -\u003e IO (Result a)",
        "fct-source": "src/Network-StreamSocket.html#handleSocketError",
        "fct-type": "function",
        "title": "handleSocketError"
      },
      "index": {
        "description": "Exception handler for socket operations",
        "hierarchy": "Network StreamSocket",
        "module": "Network.StreamSocket",
        "name": "handleSocketError",
        "normalized": "Socket-\u003eIOException-\u003eIO(Result a)",
        "package": "HTTP",
        "partial": "Socket Error",
        "signature": "Socket-\u003eIOException-\u003eIO(Result a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamSocket.html#v:myrecv",
      "description": {
        "fct-module": "Network.StreamSocket",
        "fct-package": "HTTP",
        "fct-signature": "Socket -\u003e Int -\u003e IO String",
        "fct-source": "src/Network-StreamSocket.html#myrecv",
        "fct-type": "function",
        "title": "myrecv"
      },
      "index": {
        "description": "",
        "hierarchy": "Network StreamSocket",
        "module": "Network.StreamSocket",
        "name": "myrecv",
        "normalized": "Socket-\u003eInt-\u003eIO String",
        "package": "HTTP",
        "partial": "",
        "signature": "Socket-\u003eInt-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome utility functions for working with the Haskell \u003ccode\u003enetwork\u003c/code\u003e package. Mostly\n for internal use by the \u003ccode\u003eNetwork.HTTP\u003c/code\u003e code, but \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "module",
        "fct-source": "src/Network-TCP.html",
        "fct-type": "module",
        "title": "TCP"
      },
      "index": {
        "description": "Some utility functions for working with the Haskell network package Mostly for internal use by the Network.HTTP code but",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "TCP",
        "normalized": "",
        "package": "HTTP",
        "partial": "TCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e newtype is a wrapper that allows us to make\n connections an instance of the Stream class, without GHC extensions.\n While this looks sort of like a generic reference to the transport\n layer it is actually TCP specific, which can be seen in the\n implementation of the 'Stream Connection' instance.\n\u003c/p\u003e",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-TCP.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "The Connection newtype is wrapper that allows us to make connections an instance of the Stream class without GHC extensions While this looks sort of like generic reference to the transport layer it is actually TCP specific which can be seen in the implementation of the Stream Connection instance",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "Connection",
        "normalized": "",
        "package": "HTTP",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#t:EndPoint",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-TCP.html#EndPoint",
        "fct-type": "data",
        "title": "EndPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "EndPoint",
        "normalized": "",
        "package": "HTTP",
        "partial": "End Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#t:HStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eHStream\u003c/code\u003e overloads the use of \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003es, letting you\n overload the handle operations over the type that is communicated\n across the handle. It comes in handy for \u003ccode\u003eNetwork.HTTP\u003c/code\u003e \u003ccode\u003eRequest\u003c/code\u003e\n and \u003ccode\u003eResponse\u003c/code\u003es as the payload representation isn't fixed, but overloaded.\n\u003c/p\u003e\u003cp\u003eThe library comes with instances for \u003ccode\u003eByteString\u003c/code\u003es and \u003ccode\u003eString\u003c/code\u003e, but\n should you want to plug in your own payload representation, defining\n your own \u003ccode\u003eHStream\u003c/code\u003e instance _should_ be all that it takes.\n\u003c/p\u003e",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "class",
        "fct-source": "src/Network-TCP.html#HStream",
        "fct-type": "class",
        "title": "HStream"
      },
      "index": {
        "description": "HStream overloads the use of HandleStream letting you overload the handle operations over the type that is communicated across the handle It comes in handy for Network.HTTP Request and Response as the payload representation isn fixed but overloaded The library comes with instances for ByteString and String but should you want to plug in your own payload representation defining your own HStream instance should be all that it takes",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "HStream",
        "normalized": "",
        "package": "HTTP",
        "partial": "HStream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#t:HandleStream",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-TCP.html#HandleStream",
        "fct-type": "data",
        "title": "HandleStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "HandleStream",
        "normalized": "",
        "package": "HTTP",
        "partial": "Handle Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#t:StreamHooks",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "data",
        "fct-source": "src/Network-TCP.html#StreamHooks",
        "fct-type": "data",
        "title": "StreamHooks"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "StreamHooks",
        "normalized": "",
        "package": "HTTP",
        "partial": "Stream Hooks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:EndPoint",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "EndPoint",
        "fct-source": "src/Network-TCP.html#EndPoint",
        "fct-type": "function",
        "title": "EndPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "EndPoint",
        "normalized": "",
        "package": "HTTP",
        "partial": "End Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:StreamHooks",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "StreamHooks",
        "fct-source": "src/Network-TCP.html#StreamHooks",
        "fct-type": "function",
        "title": "StreamHooks"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "StreamHooks",
        "normalized": "",
        "package": "HTTP",
        "partial": "Stream Hooks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:close",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream bufType -\u003e IO ()",
        "fct-source": "src/Network-TCP.html#close",
        "fct-type": "method",
        "title": "close"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "close",
        "normalized": "HandleStream a-\u003eIO()",
        "package": "HTTP",
        "partial": "",
        "signature": "HandleStream bufType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:closeOnEnd",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream bufType -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Network-TCP.html#closeOnEnd",
        "fct-type": "method",
        "title": "closeOnEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "closeOnEnd",
        "normalized": "HandleStream a-\u003eBool-\u003eIO()",
        "package": "HTTP",
        "partial": "On End",
        "signature": "HandleStream bufType-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:closeQuick",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream bufType -\u003e IO ()",
        "fct-source": "src/Network-TCP.html#closeQuick",
        "fct-type": "method",
        "title": "closeQuick"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "closeQuick",
        "normalized": "HandleStream a-\u003eIO()",
        "package": "HTTP",
        "partial": "Quick",
        "signature": "HandleStream bufType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:epHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-TCP.html#EndPoint",
        "fct-type": "function",
        "title": "epHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "epHost",
        "normalized": "",
        "package": "HTTP",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:epPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "Int",
        "fct-source": "src/Network-TCP.html#EndPoint",
        "fct-type": "function",
        "title": "epPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "epPort",
        "normalized": "",
        "package": "HTTP",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:getStreamHooks",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e IO (Maybe (StreamHooks ty))",
        "fct-source": "src/Network-TCP.html#getStreamHooks",
        "fct-type": "function",
        "title": "getStreamHooks"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "getStreamHooks",
        "normalized": "HandleStream a-\u003eIO(Maybe(StreamHooks a))",
        "package": "HTTP",
        "partial": "Stream Hooks",
        "signature": "HandleStream ty-\u003eIO(Maybe(StreamHooks ty))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hook_close",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-TCP.html#StreamHooks",
        "fct-type": "function",
        "title": "hook_close"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "hook_close",
        "normalized": "IO()",
        "package": "HTTP",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hook_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "String",
        "fct-source": "src/Network-TCP.html#StreamHooks",
        "fct-type": "function",
        "title": "hook_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "hook_name",
        "normalized": "",
        "package": "HTTP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hook_readBlock",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "(ty -\u003e String) -\u003e Int -\u003e Result ty -\u003e IO ()",
        "fct-source": "src/Network-TCP.html#StreamHooks",
        "fct-type": "function",
        "title": "hook_readBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "hook_readBlock",
        "normalized": "(a-\u003eString)-\u003eInt-\u003eResult a-\u003eIO()",
        "package": "HTTP",
        "partial": "Block",
        "signature": "(ty-\u003eString)-\u003eInt-\u003eResult ty-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hook_readLine",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "(ty -\u003e String) -\u003e Result ty -\u003e IO ()",
        "fct-source": "src/Network-TCP.html#StreamHooks",
        "fct-type": "function",
        "title": "hook_readLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "hook_readLine",
        "normalized": "(a-\u003eString)-\u003eResult a-\u003eIO()",
        "package": "HTTP",
        "partial": "Line",
        "signature": "(ty-\u003eString)-\u003eResult ty-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hook_writeBlock",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "(ty -\u003e String) -\u003e ty -\u003e Result () -\u003e IO ()",
        "fct-source": "src/Network-TCP.html#StreamHooks",
        "fct-type": "function",
        "title": "hook_writeBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "hook_writeBlock",
        "normalized": "(a-\u003eString)-\u003ea-\u003eResult()-\u003eIO()",
        "package": "HTTP",
        "partial": "Block",
        "signature": "(ty-\u003eString)-\u003ety-\u003eResult()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hstreamToConnection",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream String -\u003e Connection",
        "fct-source": "src/Network-TCP.html#hstreamToConnection",
        "fct-type": "function",
        "title": "hstreamToConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "hstreamToConnection",
        "normalized": "HandleStream String-\u003eConnection",
        "package": "HTTP",
        "partial": "To Connection",
        "signature": "HandleStream String-\u003eConnection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:isConnectedTo",
      "description": {
        "fct-descr": "\u003cp\u003eChecks both that the underlying Socket is connected\n and that the connection peer matches the given\n host name (which is recorded locally).\n\u003c/p\u003e",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "Connection -\u003e EndPoint -\u003e IO Bool",
        "fct-source": "src/Network-TCP.html#isConnectedTo",
        "fct-type": "function",
        "title": "isConnectedTo"
      },
      "index": {
        "description": "Checks both that the underlying Socket is connected and that the connection peer matches the given host name which is recorded locally",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "isConnectedTo",
        "normalized": "Connection-\u003eEndPoint-\u003eIO Bool",
        "package": "HTTP",
        "partial": "Connected To",
        "signature": "Connection-\u003eEndPoint-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:isTCPConnectedTo",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e EndPoint -\u003e IO Bool",
        "fct-source": "src/Network-TCP.html#isTCPConnectedTo",
        "fct-type": "function",
        "title": "isTCPConnectedTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "isTCPConnectedTo",
        "normalized": "HandleStream a-\u003eEndPoint-\u003eIO Bool",
        "package": "HTTP",
        "partial": "TCPConnected To",
        "signature": "HandleStream ty-\u003eEndPoint-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:nullHooks",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "StreamHooks ty",
        "fct-source": "src/Network-TCP.html#nullHooks",
        "fct-type": "function",
        "title": "nullHooks"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "nullHooks",
        "normalized": "",
        "package": "HTTP",
        "partial": "Hooks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:openSocketStream",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Int -\u003e Socket -\u003e IO (HandleStream bufType)",
        "fct-source": "src/Network-TCP.html#openSocketStream",
        "fct-type": "method",
        "title": "openSocketStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "openSocketStream",
        "normalized": "String-\u003eInt-\u003eSocket-\u003eIO(HandleStream a)",
        "package": "HTTP",
        "partial": "Socket Stream",
        "signature": "String-\u003eInt-\u003eSocket-\u003eIO(HandleStream bufType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:openStream",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Int -\u003e IO (HandleStream bufType)",
        "fct-source": "src/Network-TCP.html#openStream",
        "fct-type": "method",
        "title": "openStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "openStream",
        "normalized": "String-\u003eInt-\u003eIO(HandleStream a)",
        "package": "HTTP",
        "partial": "Stream",
        "signature": "String-\u003eInt-\u003eIO(HandleStream bufType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:openTCPConnection",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Int -\u003e IO (HandleStream ty)",
        "fct-source": "src/Network-TCP.html#openTCPConnection",
        "fct-type": "function",
        "title": "openTCPConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "openTCPConnection",
        "normalized": "String-\u003eInt-\u003eIO(HandleStream a)",
        "package": "HTTP",
        "partial": "TCPConnection",
        "signature": "String-\u003eInt-\u003eIO(HandleStream ty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:openTCPPort",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eopenTCPPort uri port\u003c/code\u003e  establishes a connection to a remote\n host, using \u003ccode\u003e\u003ca\u003egetHostByName\u003c/a\u003e\u003c/code\u003e which possibly queries the DNS system, hence \n may trigger a network connection.\n\u003c/p\u003e",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Int -\u003e IO Connection",
        "fct-source": "src/Network-TCP.html#openTCPPort",
        "fct-type": "function",
        "title": "openTCPPort"
      },
      "index": {
        "description": "openTCPPort uri port establishes connection to remote host using getHostByName which possibly queries the DNS system hence may trigger network connection",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "openTCPPort",
        "normalized": "String-\u003eInt-\u003eIO Connection",
        "package": "HTTP",
        "partial": "TCPPort",
        "signature": "String-\u003eInt-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:readBlock",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream bufType -\u003e Int -\u003e IO (Result bufType)",
        "fct-source": "src/Network-TCP.html#readBlock",
        "fct-type": "method",
        "title": "readBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "readBlock",
        "normalized": "HandleStream a-\u003eInt-\u003eIO(Result a)",
        "package": "HTTP",
        "partial": "Block",
        "signature": "HandleStream bufType-\u003eInt-\u003eIO(Result bufType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:readLine",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream bufType -\u003e IO (Result bufType)",
        "fct-source": "src/Network-TCP.html#readLine",
        "fct-type": "method",
        "title": "readLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "readLine",
        "normalized": "HandleStream a-\u003eIO(Result a)",
        "package": "HTTP",
        "partial": "Line",
        "signature": "HandleStream bufType-\u003eIO(Result bufType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:setStreamHooks",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream ty -\u003e StreamHooks ty -\u003e IO ()",
        "fct-source": "src/Network-TCP.html#setStreamHooks",
        "fct-type": "function",
        "title": "setStreamHooks"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "setStreamHooks",
        "normalized": "HandleStream a-\u003eStreamHooks a-\u003eIO()",
        "package": "HTTP",
        "partial": "Stream Hooks",
        "signature": "HandleStream ty-\u003eStreamHooks ty-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:socketConnection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esocketConnection\u003c/code\u003e, like \u003ccode\u003eopenConnection\u003c/code\u003e but using a pre-existing \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "String -\u003e Int -\u003e Socket -\u003e IO (HandleStream ty)",
        "fct-source": "src/Network-TCP.html#socketConnection",
        "fct-type": "function",
        "title": "socketConnection"
      },
      "index": {
        "description": "socketConnection like openConnection but using pre-existing Socket",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "socketConnection",
        "normalized": "String-\u003eInt-\u003eSocket-\u003eIO(HandleStream a)",
        "package": "HTTP",
        "partial": "Connection",
        "signature": "String-\u003eInt-\u003eSocket-\u003eIO(HandleStream ty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:writeBlock",
      "description": {
        "fct-module": "Network.TCP",
        "fct-package": "HTTP",
        "fct-signature": "HandleStream bufType -\u003e bufType -\u003e IO (Result ())",
        "fct-source": "src/Network-TCP.html#writeBlock",
        "fct-type": "method",
        "title": "writeBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCP",
        "module": "Network.TCP",
        "name": "writeBlock",
        "normalized": "HandleStream a-\u003ea-\u003eIO(Result())",
        "package": "HTTP",
        "partial": "Block",
        "signature": "HandleStream bufType-\u003ebufType-\u003eIO(Result())"
      }
    }
  }
]