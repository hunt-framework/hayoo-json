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
        "word": "HTTP"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSession-level interactions over HTTP.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003eNetwork.Browser\u003c/a\u003e goes beyond the basic \u003ca\u003eNetwork.HTTP\u003c/a\u003e functionality in \nproviding support for more involved, and real, request/response interactions over \nHTTP. Additional features supported are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e HTTP Authentication handling\n\u003c/li\u003e\u003cli\u003e Transparent handling of redirects\n\u003c/li\u003e\u003cli\u003e Cookie stores + transmission.\n\u003c/li\u003e\u003cli\u003e Transaction logging\n\u003c/li\u003e\u003cli\u003e Proxy-mediated connections.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample use:\n\u003c/p\u003e\u003cpre\u003e    do\n      (_, rsp)\n         \u003c- Network.Browser.browse $ do\n               setAllowRedirects True -- handle HTTP redirects\n               request $ getRequest \"http://www.haskell.org/\"\n      return (take 100 (rspBody rsp))\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Browser",
          "name": "Browser",
          "package": "HTTP",
          "source": "src/Network-Browser.html",
          "type": "module"
        },
        "index": {
          "description": "Session-level interactions over HTTP The Network.Browser goes beyond the basic Network.HTTP functionality in providing support for more involved and real request response interactions over HTTP Additional features supported are HTTP Authentication handling Transparent handling of redirects Cookie stores transmission Transaction logging Proxy-mediated connections Example use do rsp Network.Browser.browse do setAllowRedirects True handle HTTP redirects request getRequest http www.haskell.org return take rspBody rsp",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "Browser",
          "package": "HTTP",
          "partial": "Browser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAlgorithm\u003c/code\u003e controls the digest algorithm to, \u003ccode\u003eMD5\u003c/code\u003e or \u003ccode\u003eMD5Session\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "Algorithm",
          "package": "HTTP",
          "source": "src/Network-HTTP-Auth.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "Algorithm controls the digest algorithm to MD5 or MD5Session",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "Algorithm",
          "package": "HTTP",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAuthority\u003c/code\u003e specifies the HTTP Authentication method to use for\n a given domain/realm; \u003ccode\u003eBasic\u003c/code\u003e or \u003ccode\u003eDigest\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "Authority",
          "package": "HTTP",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "data"
        },
        "index": {
          "description": "Authority specifies the HTTP Authentication method to use for given domain realm Basic or Digest",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "Authority",
          "package": "HTTP",
          "partial": "Authority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eBrowserAction\u003c/code\u003e is the IO monad, but carrying along a \u003ccode\u003e\u003ca\u003eBrowserState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "BrowserAction",
          "package": "HTTP",
          "source": "src/Network-Browser.html#BrowserAction",
          "type": "data"
        },
        "index": {
          "description": "BrowserAction is the IO monad but carrying along BrowserState",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "BrowserAction",
          "package": "HTTP",
          "partial": "Browser Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:BrowserAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eBrowserEvent\u003c/code\u003e is the event record type that a user-defined handler, set\n via \u003ccode\u003e\u003ca\u003esetEventHandler\u003c/a\u003e\u003c/code\u003e, will be passed. It indicates various state changes\n encountered in the processing of a given \u003ccode\u003e\u003ca\u003eRequestID\u003c/a\u003e\u003c/code\u003e, along with timestamps\n at which they occurred.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "BrowserEvent",
          "package": "HTTP",
          "source": "src/Network-Browser.html#BrowserEvent",
          "type": "data"
        },
        "index": {
          "description": "BrowserEvent is the event record type that user-defined handler set via setEventHandler will be passed It indicates various state changes encountered in the processing of given RequestID along with timestamps at which they occurred",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "BrowserEvent",
          "package": "HTTP",
          "partial": "Browser Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:BrowserEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBrowserEventType\u003c/a\u003e\u003c/code\u003e is the enumerated list of events that the browser\n internals will report to a user-defined event handler.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "BrowserEventType",
          "package": "HTTP",
          "source": "src/Network-Browser.html#BrowserEventType",
          "type": "data"
        },
        "index": {
          "description": "BrowserEventType is the enumerated list of events that the browser internals will report to user-defined event handler",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "BrowserEventType",
          "package": "HTTP",
          "partial": "Browser Event Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:BrowserEventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eBrowserState\u003c/code\u003e is the (large) record type tracking the current\n settings of the browser.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "BrowserState",
          "package": "HTTP",
          "source": "src/Network-Browser.html#BrowserState",
          "type": "data"
        },
        "index": {
          "description": "BrowserState is the large record type tracking the current settings of the browser",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "BrowserState",
          "package": "HTTP",
          "partial": "Browser State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:BrowserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "Challenge",
          "package": "HTTP",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "Challenge",
          "package": "HTTP",
          "partial": "Challenge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Challenge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCookie\u003c/code\u003e is the Haskell representation of HTTP cookie values.\n See its relevant specs for authoritative details.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "Cookie",
          "package": "HTTP",
          "source": "src/Network-HTTP-Cookie.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "Cookie is the Haskell representation of HTTP cookie values See its relevant specs for authoritative details",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "Cookie",
          "package": "HTTP",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "Form",
          "package": "HTTP",
          "source": "src/Network-Browser.html#Form",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "Form",
          "package": "HTTP",
          "partial": "Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "FormVar",
          "package": "HTTP",
          "source": "src/Network-Browser.html#FormVar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "FormVar",
          "package": "HTTP",
          "partial": "Form Var",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:FormVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP proxies (or not) are represented via \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e, specifying if a\n proxy should be used for the request (see \u003ccode\u003e\u003ca\u003esetProxy\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "Proxy",
          "package": "HTTP",
          "source": "src/Network-HTTP-Proxy.html#Proxy",
          "type": "data"
        },
        "index": {
          "description": "HTTP proxies or not are represented via Proxy specifying if proxy should be used for the request see setProxy",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "Proxy",
          "package": "HTTP",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "Qop",
          "package": "HTTP",
          "source": "src/Network-HTTP-Auth.html#Qop",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "Qop",
          "package": "HTTP",
          "partial": "Qop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:Qop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "RequestID",
          "package": "HTTP",
          "source": "src/Network-Browser.html#RequestID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "RequestID",
          "package": "HTTP",
          "partial": "Request ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#t:RequestID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "AlgMD5",
          "package": "HTTP",
          "signature": "AlgMD5",
          "source": "src/Network-HTTP-Auth.html#Algorithm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AlgMD5\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:AlgMD5\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "AlgMD5",
          "package": "HTTP",
          "partial": "Alg MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AlgMD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "AlgMD5sess",
          "package": "HTTP",
          "signature": "AlgMD5sess",
          "source": "src/Network-HTTP-Auth.html#Algorithm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AlgMD5sess\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:AlgMD5sess\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "AlgMD5sess",
          "package": "HTTP",
          "partial": "Alg MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AlgMD5sess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "AuthBasic",
          "package": "HTTP",
          "signature": "AuthBasic",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AuthBasic\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:AuthBasic\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "AuthBasic",
          "package": "HTTP",
          "partial": "Auth Basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AuthBasic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "AuthDigest",
          "package": "HTTP",
          "signature": "AuthDigest",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AuthDigest\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:AuthDigest\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "AuthDigest",
          "package": "HTTP",
          "partial": "Auth Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:AuthDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "BrowserEvent",
          "package": "HTTP",
          "signature": "BrowserEvent",
          "source": "src/Network-Browser.html#BrowserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "BrowserEvent",
          "package": "HTTP",
          "partial": "Browser Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:BrowserEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "ChalBasic",
          "package": "HTTP",
          "signature": "ChalBasic",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ChalBasic\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:ChalBasic\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ChalBasic",
          "package": "HTTP",
          "partial": "Chal Basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ChalBasic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "ChalDigest",
          "package": "HTTP",
          "signature": "ChalDigest",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ChalDigest\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:ChalDigest\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ChalDigest",
          "package": "HTTP",
          "partial": "Chal Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ChalDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "Form",
          "package": "HTTP",
          "signature": "Form RequestMethod URI [FormVar]",
          "source": "src/Network-Browser.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "Form",
          "normalized": "Form RequestMethod URI[FormVar]",
          "package": "HTTP",
          "partial": "Form",
          "signature": "Form RequestMethod URI[FormVar]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Cookie\"]",
          "name": "MkCookie",
          "package": "HTTP",
          "signature": "MkCookie",
          "source": "src/Network-HTTP-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:MkCookie\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:MkCookie\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "MkCookie",
          "package": "HTTP",
          "partial": "Mk Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:MkCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't use a proxy.\n\u003c/p\u003e",
          "module": "[\"Network.Browser\",\"Network.HTTP.Proxy\"]",
          "name": "NoProxy",
          "package": "HTTP",
          "signature": "NoProxy",
          "source": "src/Network-HTTP-Proxy.html#Proxy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:NoProxy\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#v:NoProxy\"]"
        },
        "index": {
          "description": "Don use proxy",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "NoProxy",
          "package": "HTTP",
          "partial": "No Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:NoProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "OpenConnection",
          "package": "HTTP",
          "signature": "OpenConnection",
          "source": "src/Network-Browser.html#BrowserEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "OpenConnection",
          "package": "HTTP",
          "partial": "Open Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:OpenConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the proxy given. Should be of the\n form \u003ca\u003ehttp://host:port\u003c/a\u003e, \u003ca\u003ehost\u003c/a\u003e, \u003ca\u003ehost:port\u003c/a\u003e, or \u003ca\u003ehttp://host\u003c/a\u003e.\n Additionally, an optional \u003ccode\u003e\u003ca\u003eAuthority\u003c/a\u003e\u003c/code\u003e for authentication with the proxy.\n\u003c/p\u003e",
          "module": "[\"Network.Browser\",\"Network.HTTP.Proxy\"]",
          "name": "Proxy",
          "package": "HTTP",
          "signature": "Proxy String (Maybe Authority)",
          "source": "src/Network-HTTP-Proxy.html#Proxy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:Proxy\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#v:Proxy\"]"
        },
        "index": {
          "description": "Use the proxy given Should be of the form http host port host host port or http host Additionally an optional Authority for authentication with the proxy",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "Proxy",
          "package": "HTTP",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "QopAuth",
          "package": "HTTP",
          "signature": "QopAuth",
          "source": "src/Network-HTTP-Auth.html#Qop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:QopAuth\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:QopAuth\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "QopAuth",
          "package": "HTTP",
          "partial": "Qop Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:QopAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "QopAuthInt",
          "package": "HTTP",
          "signature": "QopAuthInt",
          "source": "src/Network-HTTP-Auth.html#Qop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:QopAuthInt\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:QopAuthInt\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "QopAuthInt",
          "package": "HTTP",
          "partial": "Qop Auth Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:QopAuthInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "RequestSent",
          "package": "HTTP",
          "signature": "RequestSent",
          "source": "src/Network-Browser.html#BrowserEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "RequestSent",
          "package": "HTTP",
          "partial": "Request Sent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:RequestSent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "ResponseEnd",
          "package": "HTTP",
          "signature": "ResponseEnd ResponseData",
          "source": "src/Network-Browser.html#BrowserEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ResponseEnd",
          "package": "HTTP",
          "partial": "Response End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ResponseEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "ResponseFinish",
          "package": "HTTP",
          "signature": "ResponseFinish",
          "source": "src/Network-Browser.html#BrowserEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ResponseFinish",
          "package": "HTTP",
          "partial": "Response Finish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ResponseFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "ReuseConnection",
          "package": "HTTP",
          "signature": "ReuseConnection",
          "source": "src/Network-Browser.html#BrowserEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ReuseConnection",
          "package": "HTTP",
          "partial": "Reuse Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ReuseConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "addAuthority",
          "package": "HTTP",
          "signature": "Authority -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#addAuthority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "addAuthority",
          "normalized": "Authority-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Authority",
          "signature": "Authority-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:addAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaddCookie c\u003c/code\u003e adds a cookie to the browser state, removing duplicates.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "addCookie",
          "package": "HTTP",
          "signature": "Cookie -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#addCookie",
          "type": "function"
        },
        "index": {
          "description": "addCookie adds cookie to the browser state removing duplicates",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "addCookie",
          "normalized": "Cookie-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Cookie",
          "signature": "Cookie-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:addCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "auAlgorithm",
          "package": "HTTP",
          "signature": "Maybe Algorithm",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auAlgorithm\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auAlgorithm\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "auAlgorithm",
          "package": "HTTP",
          "partial": "Algorithm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "auDomain",
          "package": "HTTP",
          "signature": "[URI]",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auDomain\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auDomain\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "auDomain",
          "normalized": "[URI]",
          "package": "HTTP",
          "partial": "Domain",
          "signature": "[URI]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "auNonce",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auNonce\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auNonce\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "auNonce",
          "package": "HTTP",
          "partial": "Nonce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auNonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "auOpaque",
          "package": "HTTP",
          "signature": "Maybe String",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auOpaque\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auOpaque\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "auOpaque",
          "package": "HTTP",
          "partial": "Opaque",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auOpaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "auPassword",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auPassword\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auPassword\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "auPassword",
          "package": "HTTP",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "auQop",
          "package": "HTTP",
          "signature": "[Qop]",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auQop\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auQop\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "auQop",
          "normalized": "[Qop]",
          "package": "HTTP",
          "partial": "Qop",
          "signature": "[Qop]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auQop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "auRealm",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auRealm\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auRealm\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "auRealm",
          "package": "HTTP",
          "partial": "Realm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auRealm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "auSite",
          "package": "HTTP",
          "signature": "URI",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auSite\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auSite\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "auSite",
          "package": "HTTP",
          "partial": "Site",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "auUsername",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auUsername\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:auUsername\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "auUsername",
          "package": "HTTP",
          "partial": "Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:auUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebrowse act\u003c/code\u003e is the toplevel action to perform a \u003ccode\u003e\u003ca\u003eBrowserAction\u003c/a\u003e\u003c/code\u003e.\n Example use: \u003ccode\u003ebrowse (request (getRequest yourURL))\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "browse",
          "package": "HTTP",
          "signature": "BrowserAction conn a -\u003e IO a",
          "source": "src/Network-Browser.html#browse",
          "type": "function"
        },
        "index": {
          "description": "browse act is the toplevel action to perform BrowserAction Example use browse request getRequest yourURL",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "browse",
          "normalized": "BrowserAction a b-\u003eIO b",
          "package": "HTTP",
          "signature": "BrowserAction conn a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:browse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "browserEventType",
          "package": "HTTP",
          "signature": "BrowserEventType",
          "source": "src/Network-Browser.html#BrowserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "browserEventType",
          "package": "HTTP",
          "partial": "Event Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:browserEventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "browserRequestID",
          "package": "HTTP",
          "signature": "RequestID",
          "source": "src/Network-Browser.html#BrowserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "browserRequestID",
          "package": "HTTP",
          "partial": "Request ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:browserRequestID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "browserRequestURI",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-Browser.html#BrowserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "browserRequestURI",
          "package": "HTTP",
          "partial": "Request URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:browserRequestURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "browserTimestamp",
          "package": "HTTP",
          "signature": "ClockTime",
          "source": "src/Network-Browser.html#BrowserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "browserTimestamp",
          "package": "HTTP",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:browserTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "chAlgorithm",
          "package": "HTTP",
          "signature": "Maybe Algorithm",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chAlgorithm\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chAlgorithm\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "chAlgorithm",
          "package": "HTTP",
          "partial": "Algorithm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "chDomain",
          "package": "HTTP",
          "signature": "[URI]",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chDomain\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chDomain\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "chDomain",
          "normalized": "[URI]",
          "package": "HTTP",
          "partial": "Domain",
          "signature": "[URI]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "chNonce",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chNonce\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chNonce\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "chNonce",
          "package": "HTTP",
          "partial": "Nonce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chNonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "chOpaque",
          "package": "HTTP",
          "signature": "Maybe String",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chOpaque\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chOpaque\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "chOpaque",
          "package": "HTTP",
          "partial": "Opaque",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chOpaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "chQop",
          "package": "HTTP",
          "signature": "[Qop]",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chQop\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chQop\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "chQop",
          "normalized": "[Qop]",
          "package": "HTTP",
          "partial": "Qop",
          "signature": "[Qop]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chQop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "chRealm",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chRealm\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chRealm\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "chRealm",
          "package": "HTTP",
          "partial": "Realm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chRealm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Auth\"]",
          "name": "chStale",
          "package": "HTTP",
          "signature": "Bool",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chStale\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:chStale\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "chStale",
          "package": "HTTP",
          "partial": "Stale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:chStale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Cookie\"]",
          "name": "ckComment",
          "package": "HTTP",
          "signature": "Maybe String",
          "source": "src/Network-HTTP-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckComment\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckComment\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ckComment",
          "package": "HTTP",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Cookie\"]",
          "name": "ckDomain",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckDomain\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckDomain\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ckDomain",
          "package": "HTTP",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Cookie\"]",
          "name": "ckName",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckName\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckName\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ckName",
          "package": "HTTP",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Cookie\"]",
          "name": "ckPath",
          "package": "HTTP",
          "signature": "Maybe String",
          "source": "src/Network-HTTP-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckPath\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckPath\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ckPath",
          "package": "HTTP",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Cookie\"]",
          "name": "ckValue",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckValue\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckValue\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ckValue",
          "package": "HTTP",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Cookie\"]",
          "name": "ckVersion",
          "package": "HTTP",
          "signature": "Maybe String",
          "source": "src/Network-HTTP-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckVersion\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:ckVersion\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ckVersion",
          "package": "HTTP",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ckVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edefaultCookieFilter\u003c/code\u003e is the initial cookie acceptance filter.\n It welcomes them all into the store \u003ccode\u003e:-)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "defaultCookieFilter",
          "package": "HTTP",
          "signature": "URI -\u003e Cookie -\u003e IO Bool",
          "source": "src/Network-Browser.html#defaultCookieFilter",
          "type": "function"
        },
        "index": {
          "description": "defaultCookieFilter is the initial cookie acceptance filter It welcomes them all into the store",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "defaultCookieFilter",
          "normalized": "URI-\u003eCookie-\u003eIO Bool",
          "package": "HTTP",
          "partial": "Cookie Filter",
          "signature": "URI-\u003eCookie-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:defaultCookieFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Base\"]",
          "name": "defaultGETRequest",
          "package": "HTTP",
          "signature": "URI -\u003e Request_String",
          "source": "src/Network-HTTP-Base.html#defaultGETRequest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:defaultGETRequest\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:defaultGETRequest\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "defaultGETRequest",
          "normalized": "URI-\u003eRequest_String",
          "package": "HTTP",
          "partial": "GETRequest",
          "signature": "URI-\u003eRequest_String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:defaultGETRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Browser\",\"Network.HTTP.Base\"]",
          "name": "defaultGETRequest_",
          "package": "HTTP",
          "signature": "URI -\u003e Request a",
          "source": "src/Network-HTTP-Base.html#defaultGETRequest_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:defaultGETRequest_\",\"http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:defaultGETRequest_\"]"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "defaultGETRequest_",
          "normalized": "URI-\u003eRequest a",
          "package": "HTTP",
          "partial": "GETRequest",
          "signature": "URI-\u003eRequest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:defaultGETRequest_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "err",
          "package": "HTTP",
          "signature": "String -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#err",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "err",
          "normalized": "String-\u003eBrowserAction a()",
          "package": "HTTP",
          "signature": "String-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "formToRequest",
          "package": "HTTP",
          "signature": "Form -\u003e Request_String",
          "source": "src/Network-Browser.html#formToRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "formToRequest",
          "normalized": "Form-\u003eRequest_String",
          "package": "HTTP",
          "partial": "To Request",
          "signature": "Form-\u003eRequest_String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:formToRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "getAllowBasicAuth",
          "package": "HTTP",
          "signature": "BrowserAction t Bool",
          "source": "src/Network-Browser.html#getAllowBasicAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getAllowBasicAuth",
          "package": "HTTP",
          "partial": "Allow Basic Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getAllowBasicAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetAllowRedirects\u003c/code\u003e returns current setting of the do-chase-redirects flag.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getAllowRedirects",
          "package": "HTTP",
          "signature": "BrowserAction t Bool",
          "source": "src/Network-Browser.html#getAllowRedirects",
          "type": "function"
        },
        "index": {
          "description": "getAllowRedirects returns current setting of the do-chase-redirects flag",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getAllowRedirects",
          "package": "HTTP",
          "partial": "Allow Redirects",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getAllowRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetAuthorities\u003c/code\u003e return the current set of \u003ccode\u003eAuthority\u003c/code\u003es known\n to the browser.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getAuthorities",
          "package": "HTTP",
          "signature": "BrowserAction t [Authority]",
          "source": "src/Network-Browser.html#getAuthorities",
          "type": "function"
        },
        "index": {
          "description": "getAuthorities return the current set of Authority known to the browser",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getAuthorities",
          "normalized": "BrowserAction a[Authority]",
          "package": "HTTP",
          "partial": "Authorities",
          "signature": "BrowserAction t[Authority]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getAuthorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetAuthorityGen\u003c/code\u003e returns the current authority generator\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getAuthorityGen",
          "package": "HTTP",
          "signature": "BrowserAction t (URI -\u003e String -\u003e IO (Maybe (String, String)))",
          "source": "src/Network-Browser.html#getAuthorityGen",
          "type": "function"
        },
        "index": {
          "description": "getAuthorityGen returns the current authority generator",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getAuthorityGen",
          "normalized": "BrowserAction a(URI-\u003eString-\u003eIO(Maybe(String,String)))",
          "package": "HTTP",
          "partial": "Authority Gen",
          "signature": "BrowserAction t(URI-\u003eString-\u003eIO(Maybe(String,String)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getAuthorityGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Control.Monad.State.get instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003ccode\u003egetBrowserState\u003c/code\u003e returns the current browser config. Useful\n for restoring state across \u003ccode\u003e\u003ca\u003eBrowserAction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getBrowserState",
          "package": "HTTP",
          "signature": "BrowserAction t (BrowserState t)",
          "source": "src/Network-Browser.html#getBrowserState",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Control.Monad.State.get instead getBrowserState returns the current browser config Useful for restoring state across BrowserAction",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getBrowserState",
          "package": "HTTP",
          "partial": "Browser State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getBrowserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetCheckForProxy\u003c/code\u003e returns the current check-proxy setting.\n Notice that this may not be equal to \u003ccode\u003eTrue\u003c/code\u003e if the session has\n set it to that via \u003ccode\u003e\u003ca\u003esetCheckForProxy\u003c/a\u003e\u003c/code\u003e and subsequently performed\n some HTTP protocol interactions. i.e., the flag return represents\n whether a proxy will be checked for again before any future protocol\n interactions.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getCheckForProxy",
          "package": "HTTP",
          "signature": "BrowserAction t Bool",
          "source": "src/Network-Browser.html#getCheckForProxy",
          "type": "function"
        },
        "index": {
          "description": "getCheckForProxy returns the current check-proxy setting Notice that this may not be equal to True if the session has set it to that via setCheckForProxy and subsequently performed some HTTP protocol interactions i.e the flag return represents whether proxy will be checked for again before any future protocol interactions",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getCheckForProxy",
          "package": "HTTP",
          "partial": "Check For Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getCheckForProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetCookieFilter\u003c/code\u003e returns the current cookie acceptance filter.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getCookieFilter",
          "package": "HTTP",
          "signature": "BrowserAction t (URI -\u003e Cookie -\u003e IO Bool)",
          "source": "src/Network-Browser.html#getCookieFilter",
          "type": "function"
        },
        "index": {
          "description": "getCookieFilter returns the current cookie acceptance filter",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getCookieFilter",
          "normalized": "BrowserAction a(URI-\u003eCookie-\u003eIO Bool)",
          "package": "HTTP",
          "partial": "Cookie Filter",
          "signature": "BrowserAction t(URI-\u003eCookie-\u003eIO Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getCookieFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetCookies\u003c/code\u003e returns the current set of cookies known to\n the browser.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getCookies",
          "package": "HTTP",
          "signature": "BrowserAction t [Cookie]",
          "source": "src/Network-Browser.html#getCookies",
          "type": "function"
        },
        "index": {
          "description": "getCookies returns the current set of cookies known to the browser",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getCookies",
          "normalized": "BrowserAction a[Cookie]",
          "package": "HTTP",
          "partial": "Cookies",
          "signature": "BrowserAction t[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetMaxAuthAttempts\u003c/code\u003e returns the current max auth attempts. If \u003ccode\u003eNothing\u003c/code\u003e,\n the browser's default is used.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getMaxAuthAttempts",
          "package": "HTTP",
          "signature": "BrowserAction t (Maybe Int)",
          "source": "src/Network-Browser.html#getMaxAuthAttempts",
          "type": "function"
        },
        "index": {
          "description": "getMaxAuthAttempts returns the current max auth attempts If Nothing the browser default is used",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getMaxAuthAttempts",
          "package": "HTTP",
          "partial": "Max Auth Attempts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getMaxAuthAttempts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetMaxErrorRetries\u003c/code\u003e returns the current max number of error retries.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getMaxErrorRetries",
          "package": "HTTP",
          "signature": "BrowserAction t (Maybe Int)",
          "source": "src/Network-Browser.html#getMaxErrorRetries",
          "type": "function"
        },
        "index": {
          "description": "getMaxErrorRetries returns the current max number of error retries",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getMaxErrorRetries",
          "package": "HTTP",
          "partial": "Max Error Retries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getMaxErrorRetries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetMaxPoolSize\u003c/code\u003e gets the maximum size of the connection pool\n that is used to cache connections between requests.\n If \u003ccode\u003eNothing\u003c/code\u003e, the \u003ca\u003eNetwork.Browser\u003c/a\u003e's default is used.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getMaxPoolSize",
          "package": "HTTP",
          "signature": "BrowserAction t (Maybe Int)",
          "source": "src/Network-Browser.html#getMaxPoolSize",
          "type": "function"
        },
        "index": {
          "description": "getMaxPoolSize gets the maximum size of the connection pool that is used to cache connections between requests If Nothing the Network.Browser default is used",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getMaxPoolSize",
          "package": "HTTP",
          "partial": "Max Pool Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getMaxPoolSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetMaxRedirects\u003c/code\u003e returns the current setting for the max-redirect count.\n If \u003ccode\u003eNothing\u003c/code\u003e, the \u003ca\u003eNetwork.Browser\u003c/a\u003e's default is used.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getMaxRedirects",
          "package": "HTTP",
          "signature": "BrowserAction t (Maybe Int)",
          "source": "src/Network-Browser.html#getMaxRedirects",
          "type": "function"
        },
        "index": {
          "description": "getMaxRedirects returns the current setting for the max-redirect count If Nothing the Network.Browser default is used",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getMaxRedirects",
          "package": "HTTP",
          "partial": "Max Redirects",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getMaxRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetProxy\u003c/code\u003e returns the current proxy settings. If\n the auto-proxy flag is set to \u003ccode\u003eTrue\u003c/code\u003e, \u003ccode\u003egetProxy\u003c/code\u003e will\n perform the necessary \n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getProxy",
          "package": "HTTP",
          "signature": "BrowserAction t Proxy",
          "source": "src/Network-Browser.html#getProxy",
          "type": "function"
        },
        "index": {
          "description": "getProxy returns the current proxy settings If the auto-proxy flag is set to True getProxy will perform the necessary",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getProxy",
          "package": "HTTP",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetUserAgent\u003c/code\u003e returns the current \u003ccode\u003eUser-Agent:\u003c/code\u003e default string.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "getUserAgent",
          "package": "HTTP",
          "signature": "BrowserAction t String",
          "source": "src/Network-Browser.html#getUserAgent",
          "type": "function"
        },
        "index": {
          "description": "getUserAgent returns the current User-Agent default string",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "getUserAgent",
          "package": "HTTP",
          "partial": "User Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:getUserAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Control.Monad.Trans.liftIO instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eLifts an IO action into the \u003ccode\u003e\u003ca\u003eBrowserAction\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "ioAction",
          "package": "HTTP",
          "signature": "IO a -\u003e BrowserAction t a",
          "source": "src/Network-Browser.html#ioAction",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Control.Monad.Trans.liftIO instead Lifts an IO action into the BrowserAction monad",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "ioAction",
          "normalized": "IO a-\u003eBrowserAction b a",
          "package": "HTTP",
          "partial": "Action",
          "signature": "IO a-\u003eBrowserAction t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:ioAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "out",
          "package": "HTTP",
          "signature": "String -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "out",
          "normalized": "String-\u003eBrowserAction a()",
          "package": "HTTP",
          "signature": "String-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erequest httpRequest\u003c/code\u003e tries to submit the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehttpRequest\u003c/code\u003e\n to some HTTP server (possibly going via a \u003cem\u003eproxy\u003c/em\u003e, see \u003ccode\u003e\u003ca\u003esetProxy\u003c/a\u003e\u003c/code\u003e.)\n Upon successful delivery, the URL where the response was fetched from\n is returned along with the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e itself.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "request",
          "package": "HTTP",
          "signature": "Request ty -\u003e BrowserAction (HandleStream ty) (URI, Response ty)",
          "source": "src/Network-Browser.html#request",
          "type": "function"
        },
        "index": {
          "description": "request httpRequest tries to submit the Request httpRequest to some HTTP server possibly going via proxy see setProxy Upon successful delivery the URL where the response was fetched from is returned along with the Response itself",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "request",
          "normalized": "Request a-\u003eBrowserAction(HandleStream a)(URI,Response a)",
          "package": "HTTP",
          "signature": "Request ty-\u003eBrowserAction(HandleStream ty)(URI,Response ty)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetAllowBasicAuth onOff\u003c/code\u003e enables/disables HTTP Basic Authentication.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setAllowBasicAuth",
          "package": "HTTP",
          "signature": "Bool -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setAllowBasicAuth",
          "type": "function"
        },
        "index": {
          "description": "setAllowBasicAuth onOff enables disables HTTP Basic Authentication",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setAllowBasicAuth",
          "normalized": "Bool-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Allow Basic Auth",
          "signature": "Bool-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setAllowBasicAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetAllowRedirects onOff\u003c/code\u003e toggles the willingness to\n follow redirects (HTTP responses with 3xx status codes).\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setAllowRedirects",
          "package": "HTTP",
          "signature": "Bool -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setAllowRedirects",
          "type": "function"
        },
        "index": {
          "description": "setAllowRedirects onOff toggles the willingness to follow redirects HTTP responses with xx status codes",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setAllowRedirects",
          "normalized": "Bool-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Allow Redirects",
          "signature": "Bool-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setAllowRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Browser",
          "name": "setAuthorities",
          "package": "HTTP",
          "signature": "[Authority] -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setAuthorities",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setAuthorities",
          "normalized": "[Authority]-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Authorities",
          "signature": "[Authority]-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setAuthorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetAuthorityGen genAct\u003c/code\u003e sets the auth generator to \u003ccode\u003egenAct\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setAuthorityGen",
          "package": "HTTP",
          "signature": "(URI -\u003e String -\u003e IO (Maybe (String, String))) -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setAuthorityGen",
          "type": "function"
        },
        "index": {
          "description": "setAuthorityGen genAct sets the auth generator to genAct",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setAuthorityGen",
          "normalized": "(URI-\u003eString-\u003eIO(Maybe(String,String)))-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Authority Gen",
          "signature": "(URI-\u003eString-\u003eIO(Maybe(String,String)))-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setAuthorityGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetCheckForProxy flg\u003c/code\u003e sets the one-time check for proxy\n flag to \u003ccode\u003eflg\u003c/code\u003e. If \u003ccode\u003eTrue\u003c/code\u003e, the session will try to determine\n the proxy server is locally configured. See \u003ccode\u003e\u003ca\u003efetchProxy\u003c/a\u003e\u003c/code\u003e\n for details of how this done.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setCheckForProxy",
          "package": "HTTP",
          "signature": "Bool -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setCheckForProxy",
          "type": "function"
        },
        "index": {
          "description": "setCheckForProxy flg sets the one-time check for proxy flag to flg If True the session will try to determine the proxy server is locally configured See fetchProxy for details of how this done",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setCheckForProxy",
          "normalized": "Bool-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Check For Proxy",
          "signature": "Bool-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setCheckForProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetCookieFilter fn\u003c/code\u003e sets the cookie acceptance filter to \u003ccode\u003efn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setCookieFilter",
          "package": "HTTP",
          "signature": "(URI -\u003e Cookie -\u003e IO Bool) -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setCookieFilter",
          "type": "function"
        },
        "index": {
          "description": "setCookieFilter fn sets the cookie acceptance filter to fn",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setCookieFilter",
          "normalized": "(URI-\u003eCookie-\u003eIO Bool)-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Cookie Filter",
          "signature": "(URI-\u003eCookie-\u003eIO Bool)-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setCookieFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetCookies cookies\u003c/code\u003e replaces the set of cookies known to\n the browser to \u003ccode\u003ecookies\u003c/code\u003e. Useful when wanting to restore cookies\n used across \u003ccode\u003e\u003ca\u003ebrowse\u003c/a\u003e\u003c/code\u003e invocations.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setCookies",
          "package": "HTTP",
          "signature": "[Cookie] -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setCookies",
          "type": "function"
        },
        "index": {
          "description": "setCookies cookies replaces the set of cookies known to the browser to cookies Useful when wanting to restore cookies used across browse invocations",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setCookies",
          "normalized": "[Cookie]-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Cookies",
          "signature": "[Cookie]-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetDebugLog mbFile\u003c/code\u003e turns off debug logging iff \u003ccode\u003embFile\u003c/code\u003e\n is \u003ccode\u003eNothing\u003c/code\u003e. If set to \u003ccode\u003eJust fStem\u003c/code\u003e, logs of browser activity\n is appended to files of the form \u003ccode\u003efStem-url-authority\u003c/code\u003e, i.e.,\n \u003ccode\u003efStem\u003c/code\u003e is just the prefix for a set of log files, one per host/authority.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setDebugLog",
          "package": "HTTP",
          "signature": "Maybe String -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setDebugLog",
          "type": "function"
        },
        "index": {
          "description": "setDebugLog mbFile turns off debug logging iff mbFile is Nothing If set to Just fStem logs of browser activity is appended to files of the form fStem-url-authority i.e fStem is just the prefix for set of log files one per host authority",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setDebugLog",
          "normalized": "Maybe String-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Debug Log",
          "signature": "Maybe String-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setDebugLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetErrHandler\u003c/code\u003e sets the IO action to call when\n the browser reports running errors. To disable any\n such, set it to \u003ccode\u003econst (return ())\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setErrHandler",
          "package": "HTTP",
          "signature": "(String -\u003e IO ()) -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setErrHandler",
          "type": "function"
        },
        "index": {
          "description": "setErrHandler sets the IO action to call when the browser reports running errors To disable any such set it to const return",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setErrHandler",
          "normalized": "(String-\u003eIO())-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Err Handler",
          "signature": "(String-\u003eIO())-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setErrHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetEventHandler onBrowserEvent\u003c/code\u003e configures event handling.\n If \u003ccode\u003eonBrowserEvent\u003c/code\u003e is \u003ccode\u003eNothing\u003c/code\u003e, event handling is turned off;\n setting it to \u003ccode\u003eJust onEv\u003c/code\u003e causes the \u003ccode\u003eonEv\u003c/code\u003e IO action to be\n notified of browser events during the processing of a request\n by the Browser pipeline.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setEventHandler",
          "package": "HTTP",
          "signature": "Maybe (BrowserEvent -\u003e BrowserAction ty ()) -\u003e BrowserAction ty ()",
          "source": "src/Network-Browser.html#setEventHandler",
          "type": "function"
        },
        "index": {
          "description": "setEventHandler onBrowserEvent configures event handling If onBrowserEvent is Nothing event handling is turned off setting it to Just onEv causes the onEv IO action to be notified of browser events during the processing of request by the Browser pipeline",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setEventHandler",
          "normalized": "Maybe(BrowserEvent-\u003eBrowserAction a())-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Event Handler",
          "signature": "Maybe(BrowserEvent-\u003eBrowserAction ty())-\u003eBrowserAction ty()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setEventHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetMaxAuthAttempts mbMax\u003c/code\u003e sets the maximum number of authentication attempts\n to do. If \u003ccode\u003eNothing\u003c/code\u003e, rever to default max.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setMaxAuthAttempts",
          "package": "HTTP",
          "signature": "Maybe Int -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setMaxAuthAttempts",
          "type": "function"
        },
        "index": {
          "description": "setMaxAuthAttempts mbMax sets the maximum number of authentication attempts to do If Nothing rever to default max",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setMaxAuthAttempts",
          "normalized": "Maybe Int-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Max Auth Attempts",
          "signature": "Maybe Int-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setMaxAuthAttempts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetMaxErrorRetries mbMax\u003c/code\u003e sets the maximum number of attempts at\n transmitting a request. If \u003ccode\u003eNothing\u003c/code\u003e, rever to default max.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setMaxErrorRetries",
          "package": "HTTP",
          "signature": "Maybe Int -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setMaxErrorRetries",
          "type": "function"
        },
        "index": {
          "description": "setMaxErrorRetries mbMax sets the maximum number of attempts at transmitting request If Nothing rever to default max",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setMaxErrorRetries",
          "normalized": "Maybe Int-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Max Error Retries",
          "signature": "Maybe Int-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setMaxErrorRetries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetMaxPoolSize maxCount\u003c/code\u003e sets the maximum size of the connection pool\n that is used to cache connections between requests\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setMaxPoolSize",
          "package": "HTTP",
          "signature": "Maybe Int -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setMaxPoolSize",
          "type": "function"
        },
        "index": {
          "description": "setMaxPoolSize maxCount sets the maximum size of the connection pool that is used to cache connections between requests",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setMaxPoolSize",
          "normalized": "Maybe Int-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Max Pool Size",
          "signature": "Maybe Int-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setMaxPoolSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetMaxRedirects maxCount\u003c/code\u003e sets the maxiumum number of forwarding hops\n we are willing to jump through. A no-op if the count is negative; if zero,\n the max is set to whatever default applies. Notice that setting the max\n redirects count does \u003cem\u003enot\u003c/em\u003e enable following of redirects itself; use\n \u003ccode\u003e\u003ca\u003esetAllowRedirects\u003c/a\u003e\u003c/code\u003e to do so.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setMaxRedirects",
          "package": "HTTP",
          "signature": "Maybe Int -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setMaxRedirects",
          "type": "function"
        },
        "index": {
          "description": "setMaxRedirects maxCount sets the maxiumum number of forwarding hops we are willing to jump through no-op if the count is negative if zero the max is set to whatever default applies Notice that setting the max redirects count does not enable following of redirects itself use setAllowRedirects to do so",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setMaxRedirects",
          "normalized": "Maybe Int-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Max Redirects",
          "signature": "Maybe Int-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setMaxRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetOutHandler\u003c/code\u003e sets the IO action to call when\n the browser chatters info on its running. To disable any\n such, set it to \u003ccode\u003econst (return ())\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setOutHandler",
          "package": "HTTP",
          "signature": "(String -\u003e IO ()) -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setOutHandler",
          "type": "function"
        },
        "index": {
          "description": "setOutHandler sets the IO action to call when the browser chatters info on its running To disable any such set it to const return",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setOutHandler",
          "normalized": "(String-\u003eIO())-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Out Handler",
          "signature": "(String-\u003eIO())-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setOutHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetProxy p\u003c/code\u003e will disable proxy usage if \u003ccode\u003ep\u003c/code\u003e is \u003ccode\u003eNoProxy\u003c/code\u003e.\n If \u003ccode\u003ep\u003c/code\u003e is \u003ccode\u003eProxy proxyURL mbAuth\u003c/code\u003e, then \u003ccode\u003eproxyURL\u003c/code\u003e is interpreted\n as the URL of the proxy to use, possibly authenticating via \n \u003ccode\u003e\u003ca\u003eAuthority\u003c/a\u003e\u003c/code\u003e information in \u003ccode\u003embAuth\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setProxy",
          "package": "HTTP",
          "signature": "Proxy -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setProxy",
          "type": "function"
        },
        "index": {
          "description": "setProxy will disable proxy usage if is NoProxy If is Proxy proxyURL mbAuth then proxyURL is interpreted as the URL of the proxy to use possibly authenticating via Authority information in mbAuth",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setProxy",
          "normalized": "Proxy-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "Proxy",
          "signature": "Proxy-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetUserAgent ua\u003c/code\u003e sets the current \u003ccode\u003eUser-Agent:\u003c/code\u003e string to \u003ccode\u003eua\u003c/code\u003e. It\n will be used if no explicit user agent header is found in subsequent requests.\n\u003c/p\u003e\u003cp\u003eA common form of user agent string is \u003ccode\u003e\"name/version (details)\"\u003c/code\u003e. For\n example \u003ccode\u003e\"cabal-install/0.10.2 (HTTP 4000.1.2)\"\u003c/code\u003e. Including the version\n of this HTTP package can be helpful if you ever need to track down HTTP\n compatability quirks. This version is available via \u003ccode\u003e\u003ca\u003ehttpPackageVersion\u003c/a\u003e\u003c/code\u003e.\n For more info see \u003ca\u003ehttp://en.wikipedia.org/wiki/User_agent\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "setUserAgent",
          "package": "HTTP",
          "signature": "String -\u003e BrowserAction t ()",
          "source": "src/Network-Browser.html#setUserAgent",
          "type": "function"
        },
        "index": {
          "description": "setUserAgent ua sets the current User-Agent string to ua It will be used if no explicit user agent header is found in subsequent requests common form of user agent string is name version details For example cabal-install HTTP Including the version of this HTTP package can be helpful if you ever need to track down HTTP compatability quirks This version is available via httpPackageVersion For more info see http en.wikipedia.org wiki User agent",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "setUserAgent",
          "normalized": "String-\u003eBrowserAction a()",
          "package": "HTTP",
          "partial": "User Agent",
          "signature": "String-\u003eBrowserAction t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:setUserAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003euriDefaultTo a b\u003c/code\u003e returns a URI that is consistent with the first\n argument URI \u003ccode\u003ea\u003c/code\u003e when read in the context of the second URI \u003ccode\u003eb\u003c/code\u003e.\n If the second argument is not sufficient context for determining\n a full URI then anarchy reins.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "uriDefaultTo",
          "package": "HTTP",
          "signature": "URI -\u003e URI -\u003e URI",
          "source": "src/Network-Browser.html#uriDefaultTo",
          "type": "function"
        },
        "index": {
          "description": "uriDefaultTo returns URI that is consistent with the first argument URI when read in the context of the second URI If the second argument is not sufficient context for determining full URI then anarchy reins",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "uriDefaultTo",
          "normalized": "URI-\u003eURI-\u003eURI",
          "package": "HTTP",
          "partial": "Default To",
          "signature": "URI-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:uriDefaultTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003euserCookieFilter\u003c/code\u003e is a handy acceptance filter, asking the\n user if he/she is willing to accept an incoming cookie before\n adding it to the store.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "userCookieFilter",
          "package": "HTTP",
          "signature": "URI -\u003e Cookie -\u003e IO Bool",
          "source": "src/Network-Browser.html#userCookieFilter",
          "type": "function"
        },
        "index": {
          "description": "userCookieFilter is handy acceptance filter asking the user if he she is willing to accept an incoming cookie before adding it to the store",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "userCookieFilter",
          "normalized": "URI-\u003eCookie-\u003eIO Bool",
          "package": "HTTP",
          "partial": "Cookie Filter",
          "signature": "URI-\u003eCookie-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:userCookieFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewithBrowserAction st act\u003c/code\u003e performs \u003ccode\u003eact\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eBrowserState\u003c/a\u003e\u003c/code\u003e \u003ccode\u003est\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Browser",
          "name": "withBrowserState",
          "package": "HTTP",
          "signature": "BrowserState t -\u003e BrowserAction t a -\u003e BrowserAction t a",
          "source": "src/Network-Browser.html#withBrowserState",
          "type": "function"
        },
        "index": {
          "description": "withBrowserAction st act performs act with BrowserState st",
          "hierarchy": "Network Browser",
          "module": "Network.Browser",
          "name": "withBrowserState",
          "normalized": "BrowserState a-\u003eBrowserAction a b-\u003eBrowserAction a b",
          "package": "HTTP",
          "partial": "Browser State",
          "signature": "BrowserState t-\u003eBrowserAction t a-\u003eBrowserAction t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Browser.html#v:withBrowserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn order to give the user freedom in how request and response content\n is represented, a sufficiently abstract representation is needed of\n these internally. The \u003ca\u003eNetwork.BufferType\u003c/a\u003e module provides this, defining\n the \u003ccode\u003e\u003ca\u003eBufferType\u003c/a\u003e\u003c/code\u003e class and its ad-hoc representation of buffer operations\n via the \u003ccode\u003e\u003ca\u003eBufferOp\u003c/a\u003e\u003c/code\u003e record.\n\u003c/p\u003e\u003cp\u003eThis module provides definitions for the standard buffer types that the\n package supports, i.e., for \u003ccode\u003eString\u003c/code\u003e and \u003ccode\u003eByteString\u003c/code\u003e (strict and lazy.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.BufferType",
          "name": "BufferType",
          "package": "HTTP",
          "source": "src/Network-BufferType.html",
          "type": "module"
        },
        "index": {
          "description": "In order to give the user freedom in how request and response content is represented sufficiently abstract representation is needed of these internally The Network.BufferType module provides this defining the BufferType class and its ad-hoc representation of buffer operations via the BufferOp record This module provides definitions for the standard buffer types that the package supports i.e for String and ByteString strict and lazy",
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "BufferType",
          "package": "HTTP",
          "partial": "Buffer Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eBufferOp\u003c/code\u003e encodes the I/O operations of the underlying buffer over \n a Handle in an (explicit) dictionary type. May not be needed, but gives\n us flexibility in explicit overriding and wrapping up of these methods.\n\u003c/p\u003e\u003cp\u003eAlong with IO operations is an ad-hoc collection of functions for working\n with these abstract buffers, as needed by the internals of the code\n that processes requests and responses.\n\u003c/p\u003e\u003cp\u003eWe supply three default \u003ccode\u003eBufferOp\u003c/code\u003e values, for \u003ccode\u003eString\u003c/code\u003e along with the\n strict and lazy versions of \u003ccode\u003eByteString\u003c/code\u003e. To add others, provide \u003ccode\u003eBufferOp\u003c/code\u003e\n definitions for \n\u003c/p\u003e",
          "module": "Network.BufferType",
          "name": "BufferOp",
          "package": "HTTP",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "data"
        },
        "index": {
          "description": "BufferOp encodes the operations of the underlying buffer over Handle in an explicit dictionary type May not be needed but gives us flexibility in explicit overriding and wrapping up of these methods Along with IO operations is an ad-hoc collection of functions for working with these abstract buffers as needed by the internals of the code that processes requests and responses We supply three default BufferOp values for String along with the strict and lazy versions of ByteString To add others provide BufferOp definitions for",
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "BufferOp",
          "package": "HTTP",
          "partial": "Buffer Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#t:BufferOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eBufferType\u003c/code\u003e class encodes, in a mixed-mode way, the interface\n that the library requires to operate over data embedded in HTTP\n requests and responses. That is, we use explicit dictionaries\n for the operations, but overload the name of the dicts themselves.\n\u003c/p\u003e",
          "module": "Network.BufferType",
          "name": "BufferType",
          "package": "HTTP",
          "source": "src/Network-BufferType.html#BufferType",
          "type": "class"
        },
        "index": {
          "description": "The BufferType class encodes in mixed-mode way the interface that the library requires to operate over data embedded in HTTP requests and responses That is we use explicit dictionaries for the operations but overload the name of the dicts themselves",
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "BufferType",
          "package": "HTTP",
          "partial": "Buffer Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#t:BufferType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "BufferOp",
          "package": "HTTP",
          "signature": "BufferOp",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "BufferOp",
          "package": "HTTP",
          "partial": "Buffer Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:BufferOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_append",
          "package": "HTTP",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_append",
          "normalized": "a-\u003ea-\u003ea",
          "package": "HTTP",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_concat",
          "package": "HTTP",
          "signature": "[a] -\u003e a",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_concat",
          "normalized": "[a]-\u003ea",
          "package": "HTTP",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_empty",
          "package": "HTTP",
          "signature": "a",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_empty",
          "package": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_fromStr",
          "package": "HTTP",
          "signature": "String -\u003e a",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_fromStr",
          "normalized": "String-\u003ea",
          "package": "HTTP",
          "partial": "Str",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_fromStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_hGet",
          "package": "HTTP",
          "signature": "Handle -\u003e Int -\u003e IO a",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_hGet",
          "normalized": "Handle-\u003eInt-\u003eIO a",
          "package": "HTTP",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_hGetContents",
          "package": "HTTP",
          "signature": "Handle -\u003e IO a",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_hGetContents",
          "normalized": "Handle-\u003eIO a",
          "package": "HTTP",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_hGetLine",
          "package": "HTTP",
          "signature": "Handle -\u003e IO a",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_hGetLine",
          "normalized": "Handle-\u003eIO a",
          "package": "HTTP",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_hPut",
          "package": "HTTP",
          "signature": "Handle -\u003e a -\u003e IO ()",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_hPut",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "HTTP",
          "partial": "Put",
          "signature": "Handle-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_isEmpty",
          "package": "HTTP",
          "signature": "a -\u003e Bool",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_isEmpty",
          "normalized": "a-\u003eBool",
          "package": "HTTP",
          "partial": "Empty",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_isLineTerm",
          "package": "HTTP",
          "signature": "a -\u003e Bool",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_isLineTerm",
          "normalized": "a-\u003eBool",
          "package": "HTTP",
          "partial": "Line Term",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_isLineTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_snoc",
          "package": "HTTP",
          "signature": "a -\u003e Word8 -\u003e a",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_snoc",
          "normalized": "a-\u003eWord-\u003ea",
          "package": "HTTP",
          "signature": "a-\u003eWord-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_span",
          "package": "HTTP",
          "signature": "(Char -\u003e Bool) -\u003e a -\u003e (a, a)",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_span",
          "normalized": "(Char-\u003eBool)-\u003ea-\u003e(a,a)",
          "package": "HTTP",
          "signature": "(Char-\u003eBool)-\u003ea-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_splitAt",
          "package": "HTTP",
          "signature": "Int -\u003e a -\u003e (a, a)",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_splitAt",
          "normalized": "Int-\u003ea-\u003e(a,a)",
          "package": "HTTP",
          "partial": "At",
          "signature": "Int-\u003ea-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "buf_toStr",
          "package": "HTTP",
          "signature": "a -\u003e String",
          "source": "src/Network-BufferType.html#BufferOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "buf_toStr",
          "normalized": "a-\u003eString",
          "package": "HTTP",
          "partial": "Str",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:buf_toStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BufferType",
          "name": "bufferOps",
          "package": "HTTP",
          "signature": "BufferOp bufType",
          "source": "src/Network-BufferType.html#bufferOps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "bufferOps",
          "package": "HTTP",
          "partial": "Ops",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:bufferOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elazyBufferOp\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eBufferOp\u003c/a\u003e\u003c/code\u003e definition over \u003ccode\u003eByteString\u003c/code\u003es,\n the non-strict kind.\n\u003c/p\u003e",
          "module": "Network.BufferType",
          "name": "lazyBufferOp",
          "package": "HTTP",
          "signature": "BufferOp ByteString",
          "source": "src/Network-BufferType.html#lazyBufferOp",
          "type": "function"
        },
        "index": {
          "description": "lazyBufferOp is the BufferOp definition over ByteString the non-strict kind",
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "lazyBufferOp",
          "package": "HTTP",
          "partial": "Buffer Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:lazyBufferOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estrictBufferOp\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eBufferOp\u003c/a\u003e\u003c/code\u003e definition over \u003ccode\u003eByteString\u003c/code\u003es,\n the non-lazy kind.\n\u003c/p\u003e",
          "module": "Network.BufferType",
          "name": "strictBufferOp",
          "package": "HTTP",
          "signature": "BufferOp ByteString",
          "source": "src/Network-BufferType.html#strictBufferOp",
          "type": "function"
        },
        "index": {
          "description": "strictBufferOp is the BufferOp definition over ByteString the non-lazy kind",
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "strictBufferOp",
          "package": "HTTP",
          "partial": "Buffer Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:strictBufferOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estringBufferOp\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eBufferOp\u003c/a\u003e\u003c/code\u003e definition over \u003ccode\u003eString\u003c/code\u003es.\n It is defined in terms of \u003ccode\u003estrictBufferOp\u003c/code\u003e operations,\n unpacking/converting to \u003ccode\u003eString\u003c/code\u003e when needed.\n\u003c/p\u003e",
          "module": "Network.BufferType",
          "name": "stringBufferOp",
          "package": "HTTP",
          "signature": "BufferOp String",
          "source": "src/Network-BufferType.html#stringBufferOp",
          "type": "function"
        },
        "index": {
          "description": "stringBufferOp is the BufferOp definition over String It is defined in terms of strictBufferOp operations unpacking converting to String when needed",
          "hierarchy": "Network BufferType",
          "module": "Network.BufferType",
          "name": "stringBufferOp",
          "package": "HTTP",
          "partial": "Buffer Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-BufferType.html#v:stringBufferOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresenting HTTP Auth values in Haskell.\n Right now, it contains mostly functionality needed by \u003ccode\u003e\u003ca\u003eBrowser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Auth",
          "name": "Auth",
          "package": "HTTP",
          "source": "src/Network-HTTP-Auth.html",
          "type": "module"
        },
        "index": {
          "description": "Representing HTTP Auth values in Haskell Right now it contains mostly functionality needed by Browser",
          "hierarchy": "Network HTTP Auth",
          "module": "Network.HTTP.Auth",
          "name": "Auth",
          "package": "HTTP",
          "partial": "Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAlgorithm\u003c/code\u003e controls the digest algorithm to, \u003ccode\u003eMD5\u003c/code\u003e or \u003ccode\u003eMD5Session\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Auth",
          "name": "Algorithm",
          "package": "HTTP",
          "source": "src/Network-HTTP-Auth.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "Algorithm controls the digest algorithm to MD5 or MD5Session",
          "hierarchy": "Network HTTP Auth",
          "module": "Network.HTTP.Auth",
          "name": "Algorithm",
          "package": "HTTP",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAuthority\u003c/code\u003e specifies the HTTP Authentication method to use for\n a given domain/realm; \u003ccode\u003eBasic\u003c/code\u003e or \u003ccode\u003eDigest\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Auth",
          "name": "Authority",
          "package": "HTTP",
          "source": "src/Network-HTTP-Auth.html#Authority",
          "type": "data"
        },
        "index": {
          "description": "Authority specifies the HTTP Authentication method to use for given domain realm Basic or Digest",
          "hierarchy": "Network HTTP Auth",
          "module": "Network.HTTP.Auth",
          "name": "Authority",
          "package": "HTTP",
          "partial": "Authority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#t:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Auth",
          "name": "Challenge",
          "package": "HTTP",
          "source": "src/Network-HTTP-Auth.html#Challenge",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Auth",
          "module": "Network.HTTP.Auth",
          "name": "Challenge",
          "package": "HTTP",
          "partial": "Challenge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#t:Challenge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Auth",
          "name": "Qop",
          "package": "HTTP",
          "source": "src/Network-HTTP-Auth.html#Qop",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Auth",
          "module": "Network.HTTP.Auth",
          "name": "Qop",
          "package": "HTTP",
          "partial": "Qop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#t:Qop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eheaderToChallenge base www_auth\u003c/code\u003e tries to convert the \u003ccode\u003eWWW-Authenticate\u003c/code\u003e header \n \u003ccode\u003ewww_auth\u003c/code\u003e  into a \u003ccode\u003e\u003ca\u003eChallenge\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Network.HTTP.Auth",
          "name": "headerToChallenge",
          "package": "HTTP",
          "signature": "URI -\u003e Header -\u003e Maybe Challenge",
          "source": "src/Network-HTTP-Auth.html#headerToChallenge",
          "type": "function"
        },
        "index": {
          "description": "headerToChallenge base www auth tries to convert the WWW-Authenticate header www auth into Challenge value",
          "hierarchy": "Network HTTP Auth",
          "module": "Network.HTTP.Auth",
          "name": "headerToChallenge",
          "normalized": "URI-\u003eHeader-\u003eMaybe Challenge",
          "package": "HTTP",
          "partial": "To Challenge",
          "signature": "URI-\u003eHeader-\u003eMaybe Challenge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:headerToChallenge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewithAuthority auth req\u003c/code\u003e generates a credentials value from the \u003ccode\u003eauth\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAuthority\u003c/a\u003e\u003c/code\u003e,\n in the context of the given request.\n\u003c/p\u003e\u003cp\u003eIf a client nonce was to be used then this function might need to be of type ... -\u003e BrowserAction String\n\u003c/p\u003e",
          "module": "Network.HTTP.Auth",
          "name": "withAuthority",
          "package": "HTTP",
          "signature": "Authority -\u003e Request ty -\u003e String",
          "source": "src/Network-HTTP-Auth.html#withAuthority",
          "type": "function"
        },
        "index": {
          "description": "withAuthority auth req generates credentials value from the auth Authority in the context of the given request If client nonce was to be used then this function might need to be of type BrowserAction String",
          "hierarchy": "Network HTTP Auth",
          "module": "Network.HTTP.Auth",
          "name": "withAuthority",
          "normalized": "Authority-\u003eRequest a-\u003eString",
          "package": "HTTP",
          "partial": "Authority",
          "signature": "Authority-\u003eRequest ty-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Auth.html#v:withAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions of \u003ccode\u003eRequest\u003c/code\u003e and \u003ccode\u003eResponse\u003c/code\u003e types along with functions\n for normalizing them. It is assumed to be an internal module; user\n code should, if possible, import \u003ccode\u003eNetwork.HTTP\u003c/code\u003e to access the functionality\n that this module provides.\n\u003c/p\u003e\u003cp\u003eAdditionally, the module exports internal functions for working with URLs,\n and for handling the processing of requests and responses coming back.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Base",
          "name": "Base",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions of Request and Response types along with functions for normalizing them It is assumed to be an internal module user code should if possible import Network.HTTP to access the functionality that this module provides Additionally the module exports internal functions for working with URLs and for handling the processing of requests and responses coming back",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Base",
          "package": "HTTP",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "HTTPRequest",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#HTTPRequest",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "HTTPRequest",
          "package": "HTTP",
          "partial": "HTTPRequest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:HTTPRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "HTTPResponse",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#HTTPResponse",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "HTTPResponse",
          "package": "HTTP",
          "partial": "HTTPResponse",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:HTTPResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNormalizeRequestOptions\u003c/code\u003e brings together the various defaulting/normalization options\n over \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es. Use \u003ccode\u003e\u003ca\u003edefaultNormalizeRequestOptions\u003c/a\u003e\u003c/code\u003e for the standard selection of option\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "NormalizeRequestOptions",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
          "type": "data"
        },
        "index": {
          "description": "NormalizeRequestOptions brings together the various defaulting normalization options over Request Use defaultNormalizeRequestOptions for the standard selection of option",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "NormalizeRequestOptions",
          "package": "HTTP",
          "partial": "Normalize Request Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:NormalizeRequestOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP Request.\n The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of this type is used for message serialisation,\n which means no body data is output.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "Request",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#Request",
          "type": "data"
        },
        "index": {
          "description": "An HTTP Request The Show instance of this type is used for message serialisation which means no body data is output",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Request",
          "package": "HTTP",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eRequestData\u003c/code\u003e contains the head of a HTTP request; method,\n its URL along with the auxillary/supporting header data.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "RequestData",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#RequestData",
          "type": "type"
        },
        "index": {
          "description": "RequestData contains the head of HTTP request method its URL along with the auxillary supporting header data",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "RequestData",
          "package": "HTTP",
          "partial": "Request Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:RequestData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP request method, to be used in the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object.\n We are missing a few of the stranger methods, but these are\n not really necessary until we add full TLS.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "RequestMethod",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#RequestMethod",
          "type": "data"
        },
        "index": {
          "description": "The HTTP request method to be used in the Request object We are missing few of the stranger methods but these are not really necessary until we add full TLS",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "RequestMethod",
          "package": "HTTP",
          "partial": "Request Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:RequestMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eRequestNormalizer\u003c/code\u003e is the shape of a (pure) function that rewrites\n a request into some normalized form.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "RequestNormalizer",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#RequestNormalizer",
          "type": "type"
        },
        "index": {
          "description": "RequestNormalizer is the shape of pure function that rewrites request into some normalized form",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "RequestNormalizer",
          "package": "HTTP",
          "partial": "Request Normalizer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:RequestNormalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "Request_String",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#Request_String",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Request_String",
          "package": "HTTP",
          "partial": "Request String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:Request_String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP Response.\n The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of this type is used for message serialisation,\n which means no body data is output, additionally the output will\n show an HTTP version of 1.1 instead of the actual version returned\n by a server.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "Response",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#Response",
          "type": "data"
        },
        "index": {
          "description": "An HTTP Response The Show instance of this type is used for message serialisation which means no body data is output additionally the output will show an HTTP version of instead of the actual version returned by server",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Response",
          "package": "HTTP",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor easy pattern matching, HTTP response codes \u003ccode\u003exyz\u003c/code\u003e are\n represented as \u003ccode\u003e(x,y,z)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "ResponseCode",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#ResponseCode",
          "type": "type"
        },
        "index": {
          "description": "For easy pattern matching HTTP response codes xyz are represented as",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "ResponseCode",
          "package": "HTTP",
          "partial": "Response Code",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:ResponseCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eResponseData\u003c/code\u003e contains the head of a response payload;\n HTTP response code, accompanying text description + header\n fields.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "ResponseData",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#ResponseData",
          "type": "type"
        },
        "index": {
          "description": "ResponseData contains the head of response payload HTTP response code accompanying text description header fields",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "ResponseData",
          "package": "HTTP",
          "partial": "Response Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:ResponseData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "ResponseNextStep",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#ResponseNextStep",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "ResponseNextStep",
          "package": "HTTP",
          "partial": "Response Next Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:ResponseNextStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "Response_String",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#Response_String",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Response_String",
          "package": "HTTP",
          "partial": "Response String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:Response_String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "URIAuthority",
          "package": "HTTP",
          "source": "src/Network-HTTP-Base.html#URIAuthority",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "URIAuthority",
          "package": "HTTP",
          "partial": "URIAuthority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#t:URIAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "CONNECT",
          "package": "HTTP",
          "signature": "CONNECT",
          "source": "src/Network-HTTP-Base.html#RequestMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "CONNECT",
          "package": "HTTP",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "Continue",
          "package": "HTTP",
          "signature": "Continue",
          "source": "src/Network-HTTP-Base.html#ResponseNextStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Continue",
          "package": "HTTP",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "Custom",
          "package": "HTTP",
          "signature": "Custom String",
          "source": "src/Network-HTTP-Base.html#RequestMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Custom",
          "package": "HTTP",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "DELETE",
          "package": "HTTP",
          "signature": "DELETE",
          "source": "src/Network-HTTP-Base.html#RequestMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "DELETE",
          "package": "HTTP",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "DieHorribly",
          "package": "HTTP",
          "signature": "DieHorribly String",
          "source": "src/Network-HTTP-Base.html#ResponseNextStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "DieHorribly",
          "package": "HTTP",
          "partial": "Die Horribly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:DieHorribly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "Done",
          "package": "HTTP",
          "signature": "Done",
          "source": "src/Network-HTTP-Base.html#ResponseNextStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Done",
          "package": "HTTP",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "ExpectEntity",
          "package": "HTTP",
          "signature": "ExpectEntity",
          "source": "src/Network-HTTP-Base.html#ResponseNextStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "ExpectEntity",
          "package": "HTTP",
          "partial": "Expect Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:ExpectEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "GET",
          "package": "HTTP",
          "signature": "GET",
          "source": "src/Network-HTTP-Base.html#RequestMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "GET",
          "package": "HTTP",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "HEAD",
          "package": "HTTP",
          "signature": "HEAD",
          "source": "src/Network-HTTP-Base.html#RequestMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "HEAD",
          "package": "HTTP",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "NormalizeRequestOptions",
          "package": "HTTP",
          "signature": "NormalizeRequestOptions",
          "source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "NormalizeRequestOptions",
          "package": "HTTP",
          "partial": "Normalize Request Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:NormalizeRequestOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "OPTIONS",
          "package": "HTTP",
          "signature": "OPTIONS",
          "source": "src/Network-HTTP-Base.html#RequestMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "OPTIONS",
          "package": "HTTP",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "POST",
          "package": "HTTP",
          "signature": "POST",
          "source": "src/Network-HTTP-Base.html#RequestMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "POST",
          "package": "HTTP",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "PUT",
          "package": "HTTP",
          "signature": "PUT",
          "source": "src/Network-HTTP-Base.html#RequestMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "PUT",
          "package": "HTTP",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "Request",
          "package": "HTTP",
          "signature": "Request",
          "source": "src/Network-HTTP-Base.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Request",
          "package": "HTTP",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "Response",
          "package": "HTTP",
          "signature": "Response",
          "source": "src/Network-HTTP-Base.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Response",
          "package": "HTTP",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "Retry",
          "package": "HTTP",
          "signature": "Retry",
          "source": "src/Network-HTTP-Base.html#ResponseNextStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "Retry",
          "package": "HTTP",
          "partial": "Retry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:Retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "TRACE",
          "package": "HTTP",
          "signature": "TRACE",
          "source": "src/Network-HTTP-Base.html#RequestMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "TRACE",
          "package": "HTTP",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "URIAuthority",
          "package": "HTTP",
          "signature": "URIAuthority",
          "source": "src/Network-HTTP-Base.html#URIAuthority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "URIAuthority",
          "package": "HTTP",
          "partial": "URIAuthority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:URIAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecatchIO a h\u003c/code\u003e handles IO action exceptions throughout codebase; version-specific\n tweaks better go here.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "catchIO",
          "package": "HTTP",
          "signature": "IO a -\u003e (IOException -\u003e IO a) -\u003e IO a",
          "source": "src/Network-HTTP-Base.html#catchIO",
          "type": "function"
        },
        "index": {
          "description": "catchIO handles IO action exceptions throughout codebase version-specific tweaks better go here",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "catchIO",
          "normalized": "IO a-\u003e(IOException-\u003eIO a)-\u003eIO a",
          "package": "HTTP",
          "partial": "IO",
          "signature": "IO a-\u003e(IOException-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:catchIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "catchIO_",
          "package": "HTTP",
          "signature": "IO a -\u003e IO a -\u003e IO a",
          "source": "src/Network-HTTP-Base.html#catchIO_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "catchIO_",
          "normalized": "IO a-\u003eIO a-\u003eIO a",
          "package": "HTTP",
          "partial": "IO",
          "signature": "IO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:catchIO_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA necessary feature of HTTP/1.1\n   Also the only transfer variety likely to\n   return any footers.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "chunkedTransfer",
          "package": "HTTP",
          "signature": "BufferOp a -\u003e IO (Result a) -\u003e (Int -\u003e IO (Result a)) -\u003e IO (Result ([Header], a))",
          "source": "src/Network-HTTP-Base.html#chunkedTransfer",
          "type": "function"
        },
        "index": {
          "description": "necessary feature of HTTP Also the only transfer variety likely to return any footers",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "chunkedTransfer",
          "normalized": "BufferOp a-\u003eIO(Result a)-\u003e(Int-\u003eIO(Result a))-\u003eIO(Result([Header],a))",
          "package": "HTTP",
          "partial": "Transfer",
          "signature": "BufferOp a-\u003eIO(Result a)-\u003e(Int-\u003eIO(Result a))-\u003eIO(Result([Header],a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:chunkedTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "defaultNormalizeRequestOptions",
          "package": "HTTP",
          "signature": "NormalizeRequestOptions ty",
          "source": "src/Network-HTTP-Base.html#defaultNormalizeRequestOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "defaultNormalizeRequestOptions",
          "package": "HTTP",
          "partial": "Normalize Request Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:defaultNormalizeRequestOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default user agent string. The string is \u003ccode\u003e\"haskell-HTTP/$version\"\u003c/code\u003e\n where \u003ccode\u003e$version\u003c/code\u003e is the version of this HTTP package.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "defaultUserAgent",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Base.html#defaultUserAgent",
          "type": "function"
        },
        "index": {
          "description": "default user agent string The string is haskell-HTTP version where version is the version of this HTTP package",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "defaultUserAgent",
          "package": "HTTP",
          "partial": "User Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:defaultUserAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "failHTTPS",
          "package": "HTTP",
          "signature": "URI -\u003e m ()",
          "source": "src/Network-HTTP-Base.html#failHTTPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "failHTTPS",
          "normalized": "URI-\u003ea()",
          "package": "HTTP",
          "partial": "HTTPS",
          "signature": "URI-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:failHTTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "findConnClose",
          "package": "HTTP",
          "signature": "[Header] -\u003e Bool",
          "source": "src/Network-HTTP-Base.html#findConnClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "findConnClose",
          "normalized": "[Header]-\u003eBool",
          "package": "HTTP",
          "partial": "Conn Close",
          "signature": "[Header]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:findConnClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetAuth req\u003c/code\u003e fishes out the authority portion of the URL in a request's \u003ccode\u003eHost\u003c/code\u003e\n header.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "getAuth",
          "package": "HTTP",
          "signature": "Request ty -\u003e m URIAuthority",
          "source": "src/Network-HTTP-Base.html#getAuth",
          "type": "function"
        },
        "index": {
          "description": "getAuth req fishes out the authority portion of the URL in request Host header",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "getAuth",
          "normalized": "Request a-\u003eb URIAuthority",
          "package": "HTTP",
          "partial": "Auth",
          "signature": "Request ty-\u003em URIAuthority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:getAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetRequestVersion req\u003c/code\u003e returns the HTTP protocol version of\n the request \u003ccode\u003ereq\u003c/code\u003e. If \u003ccode\u003eNothing\u003c/code\u003e, the default \u003ccode\u003e\u003ca\u003ehttpVersion\u003c/a\u003e\u003c/code\u003e can be assumed.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "getRequestVersion",
          "package": "HTTP",
          "signature": "Request a -\u003e Maybe String",
          "source": "src/Network-HTTP-Base.html#getRequestVersion",
          "type": "function"
        },
        "index": {
          "description": "getRequestVersion req returns the HTTP protocol version of the request req If Nothing the default httpVersion can be assumed",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "getRequestVersion",
          "normalized": "Request a-\u003eMaybe String",
          "package": "HTTP",
          "partial": "Request Version",
          "signature": "Request a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:getRequestVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetResponseVersion rsp\u003c/code\u003e returns the HTTP protocol version of\n the response \u003ccode\u003ersp\u003c/code\u003e. If \u003ccode\u003eNothing\u003c/code\u003e, the default \u003ccode\u003e\u003ca\u003ehttpVersion\u003c/a\u003e\u003c/code\u003e can be \n assumed.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "getResponseVersion",
          "package": "HTTP",
          "signature": "Response a -\u003e Maybe String",
          "source": "src/Network-HTTP-Base.html#getResponseVersion",
          "type": "function"
        },
        "index": {
          "description": "getResponseVersion rsp returns the HTTP protocol version of the response rsp If Nothing the default httpVersion can be assumed",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "getResponseVersion",
          "normalized": "Response a-\u003eMaybe String",
          "package": "HTTP",
          "partial": "Response Version",
          "signature": "Response a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:getResponseVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when nothing about data is known,\n   Unfortunately waiting for a socket closure\n   causes bad behaviour.  Here we just\n   take data once and give up the rest.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "hopefulTransfer",
          "package": "HTTP",
          "signature": "BufferOp a -\u003e IO (Result a) -\u003e [a] -\u003e IO (Result ([Header], a))",
          "source": "src/Network-HTTP-Base.html#hopefulTransfer",
          "type": "function"
        },
        "index": {
          "description": "Used when nothing about data is known Unfortunately waiting for socket closure causes bad behaviour Here we just take data once and give up the rest",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "hopefulTransfer",
          "normalized": "BufferOp a-\u003eIO(Result a)-\u003e[a]-\u003eIO(Result([Header],a))",
          "package": "HTTP",
          "partial": "Transfer",
          "signature": "BufferOp a-\u003eIO(Result a)-\u003e[a]-\u003eIO(Result([Header],a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:hopefulTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "host",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Base.html#URIAuthority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "host",
          "package": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of this HTTP package as a string, e.g. \u003ccode\u003e\"4000.1.2\"\u003c/code\u003e. This\n may be useful to include in a user agent string so that you can determine\n from server logs what version of this package HTTP clients are using.\n This can be useful for tracking down HTTP compatibility quirks.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "httpPackageVersion",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Base.html#httpPackageVersion",
          "type": "function"
        },
        "index": {
          "description": "The version of this HTTP package as string e.g This may be useful to include in user agent string so that you can determine from server logs what version of this package HTTP clients are using This can be useful for tracking down HTTP compatibility quirks",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "httpPackageVersion",
          "package": "HTTP",
          "partial": "Package Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:httpPackageVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "httpVersion",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Base.html#httpVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "httpVersion",
          "package": "HTTP",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:httpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultUserAgent instead (but note the user agent name change)\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated. Use \u003ccode\u003e\u003ca\u003edefaultUserAgent\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "libUA",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Base.html#libUA",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use defaultUserAgent instead but note the user agent name change Deprecated Use defaultUserAgent",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "libUA",
          "package": "HTTP",
          "partial": "UA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:libUA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when we know exactly how many bytes to expect.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "linearTransfer",
          "package": "HTTP",
          "signature": "(Int -\u003e IO (Result a)) -\u003e Int -\u003e IO (Result ([Header], a))",
          "source": "src/Network-HTTP-Base.html#linearTransfer",
          "type": "function"
        },
        "index": {
          "description": "Used when we know exactly how many bytes to expect",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "linearTransfer",
          "normalized": "(Int-\u003eIO(Result a))-\u003eInt-\u003eIO(Result([Header],a))",
          "package": "HTTP",
          "partial": "Transfer",
          "signature": "(Int-\u003eIO(Result a))-\u003eInt-\u003eIO(Result([Header],a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:linearTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "matchResponse",
          "package": "HTTP",
          "signature": "RequestMethod -\u003e ResponseCode -\u003e ResponseNextStep",
          "source": "src/Network-HTTP-Base.html#matchResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "matchResponse",
          "normalized": "RequestMethod-\u003eResponseCode-\u003eResponseNextStep",
          "package": "HTTP",
          "partial": "Response",
          "signature": "RequestMethod-\u003eResponseCode-\u003eResponseNextStep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:matchResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'mkRequest method uri' constructs a well formed\n request for the given HTTP method and URI. It does not\n normalize the URI for the request _nor_ add the required \n Host: header. That is done either explicitly by the user\n or when requests are normalized prior to transmission.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "mkRequest",
          "package": "HTTP",
          "signature": "RequestMethod -\u003e URI -\u003e Request ty",
          "source": "src/Network-HTTP-Base.html#mkRequest",
          "type": "function"
        },
        "index": {
          "description": "mkRequest method uri constructs well formed request for the given HTTP method and URI It does not normalize the URI for the request nor add the required Host header That is done either explicitly by the user or when requests are normalized prior to transmission",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "mkRequest",
          "normalized": "RequestMethod-\u003eURI-\u003eRequest a",
          "package": "HTTP",
          "partial": "Request",
          "signature": "RequestMethod-\u003eURI-\u003eRequest ty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:mkRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "normCustoms",
          "package": "HTTP",
          "signature": "[RequestNormalizer ty]",
          "source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "normCustoms",
          "normalized": "[RequestNormalizer a]",
          "package": "HTTP",
          "partial": "Customs",
          "signature": "[RequestNormalizer ty]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normCustoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "normDoClose",
          "package": "HTTP",
          "signature": "Bool",
          "source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "normDoClose",
          "package": "HTTP",
          "partial": "Do Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normDoClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "normForProxy",
          "package": "HTTP",
          "signature": "Bool",
          "source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "normForProxy",
          "package": "HTTP",
          "partial": "For Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normForProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "normUserAgent",
          "package": "HTTP",
          "signature": "Maybe String",
          "source": "src/Network-HTTP-Base.html#NormalizeRequestOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "normUserAgent",
          "package": "HTTP",
          "partial": "User Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normUserAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use Network.HTTP.Base.normalizeRequest instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Base",
          "name": "normalizeHostHeader",
          "package": "HTTP",
          "signature": "Request ty -\u003e Request ty",
          "source": "src/Network-HTTP-Base.html#normalizeHostHeader",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Please use Network.HTTP.Base.normalizeRequest instead",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "normalizeHostHeader",
          "normalized": "Request a-\u003eRequest a",
          "package": "HTTP",
          "partial": "Host Header",
          "signature": "Request ty-\u003eRequest ty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normalizeHostHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enormalizeRequest opts req\u003c/code\u003e is the entry point to use to normalize your\n request prior to transmission (or other use.) Normalization is controlled\n via the \u003ccode\u003eNormalizeRequestOptions\u003c/code\u003e record.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "normalizeRequest",
          "package": "HTTP",
          "signature": "NormalizeRequestOptions ty -\u003e Request ty -\u003e Request ty",
          "source": "src/Network-HTTP-Base.html#normalizeRequest",
          "type": "function"
        },
        "index": {
          "description": "normalizeRequest opts req is the entry point to use to normalize your request prior to transmission or other use Normalization is controlled via the NormalizeRequestOptions record",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "normalizeRequest",
          "normalized": "NormalizeRequestOptions a-\u003eRequest a-\u003eRequest a",
          "package": "HTTP",
          "partial": "Request",
          "signature": "NormalizeRequestOptions ty-\u003eRequest ty-\u003eRequest ty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normalizeRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use Network.HTTP.Base.normalizeRequest instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Base",
          "name": "normalizeRequestURI",
          "package": "HTTP",
          "signature": "Bool -\u003e String -\u003e Request ty -\u003e Request ty",
          "source": "src/Network-HTTP-Base.html#normalizeRequestURI",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Please use Network.HTTP.Base.normalizeRequest instead",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "normalizeRequestURI",
          "normalized": "Bool-\u003eString-\u003eRequest a-\u003eRequest a",
          "package": "HTTP",
          "partial": "Request URI",
          "signature": "Bool-\u003eString-\u003eRequest ty-\u003eRequest ty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:normalizeRequestURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "parseRequestHead",
          "package": "HTTP",
          "signature": "[String] -\u003e Result RequestData",
          "source": "src/Network-HTTP-Base.html#parseRequestHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "parseRequestHead",
          "normalized": "[String]-\u003eResult RequestData",
          "package": "HTTP",
          "partial": "Request Head",
          "signature": "[String]-\u003eResult RequestData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:parseRequestHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "parseResponseHead",
          "package": "HTTP",
          "signature": "[String] -\u003e Result ResponseData",
          "source": "src/Network-HTTP-Base.html#parseResponseHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "parseResponseHead",
          "normalized": "[String]-\u003eResult ResponseData",
          "package": "HTTP",
          "partial": "Response Head",
          "signature": "[String]-\u003eResult ResponseData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:parseResponseHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the authority part of a URL.\n\u003c/p\u003e\u003cpre\u003e RFC 1732, section 3.1:\n\n       //\u003cuser\u003e:\u003cpassword\u003e@\u003chost\u003e:\u003cport\u003e/\u003curl-path\u003e\n  Some or all of the parts \"\u003cuser\u003e:\u003cpassword\u003e@\", \":\u003cpassword\u003e\",\n  \":\u003cport\u003e\", and \"/\u003curl-path\u003e\" may be excluded.\n\u003c/pre\u003e",
          "module": "Network.HTTP.Base",
          "name": "parseURIAuthority",
          "package": "HTTP",
          "signature": "String -\u003e Maybe URIAuthority",
          "source": "src/Network-HTTP-Base.html#parseURIAuthority",
          "type": "function"
        },
        "index": {
          "description": "Parse the authority part of URL RFC section user password host port url-path Some or all of the parts user password password port and url-path may be excluded",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "parseURIAuthority",
          "normalized": "String-\u003eMaybe URIAuthority",
          "package": "HTTP",
          "partial": "URIAuthority",
          "signature": "String-\u003eMaybe URIAuthority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:parseURIAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "password",
          "package": "HTTP",
          "signature": "Maybe String",
          "source": "src/Network-HTTP-Base.html#URIAuthority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "password",
          "package": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "port",
          "package": "HTTP",
          "signature": "Maybe Int",
          "source": "src/Network-HTTP-Base.html#URIAuthority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "port",
          "package": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove leading crlfs then call readTillEmpty2 (not required by RFC)\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "readTillEmpty1",
          "package": "HTTP",
          "signature": "BufferOp a -\u003e IO (Result a) -\u003e IO (Result [a])",
          "source": "src/Network-HTTP-Base.html#readTillEmpty1",
          "type": "function"
        },
        "index": {
          "description": "Remove leading crlfs then call readTillEmpty2 not required by RFC",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "readTillEmpty1",
          "normalized": "BufferOp a-\u003eIO(Result a)-\u003eIO(Result[a])",
          "package": "HTTP",
          "partial": "Till Empty",
          "signature": "BufferOp a-\u003eIO(Result a)-\u003eIO(Result[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:readTillEmpty1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead lines until an empty line (CRLF),\n   also accepts a connection close as end of\n   input, which is not an HTTP/1.1 compliant\n   thing to do - so probably indicates an\n   error condition.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "readTillEmpty2",
          "package": "HTTP",
          "signature": "BufferOp a -\u003e IO (Result a) -\u003e [a] -\u003e IO (Result [a])",
          "source": "src/Network-HTTP-Base.html#readTillEmpty2",
          "type": "function"
        },
        "index": {
          "description": "Read lines until an empty line CRLF also accepts connection close as end of input which is not an HTTP compliant thing to do so probably indicates an error condition",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "readTillEmpty2",
          "normalized": "BufferOp a-\u003eIO(Result a)-\u003e[a]-\u003eIO(Result[a])",
          "package": "HTTP",
          "partial": "Till Empty",
          "signature": "BufferOp a-\u003eIO(Result a)-\u003e[a]-\u003eIO(Result[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:readTillEmpty2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "reqURIAuth",
          "package": "HTTP",
          "signature": "Request ty -\u003e URIAuth",
          "source": "src/Network-HTTP-Base.html#reqURIAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "reqURIAuth",
          "normalized": "Request a-\u003eURIAuth",
          "package": "HTTP",
          "partial": "URIAuth",
          "signature": "Request ty-\u003eURIAuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:reqURIAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "responseParseError",
          "package": "HTTP",
          "signature": "String -\u003e String -\u003e Result a",
          "source": "src/Network-HTTP-Base.html#responseParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "responseParseError",
          "normalized": "String-\u003eString-\u003eResult a",
          "package": "HTTP",
          "partial": "Parse Error",
          "signature": "String-\u003eString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:responseParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "rqBody",
          "package": "HTTP",
          "signature": "a",
          "source": "src/Network-HTTP-Base.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "rqBody",
          "package": "HTTP",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rqBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "rqHeaders",
          "package": "HTTP",
          "signature": "[Header]",
          "source": "src/Network-HTTP-Base.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "rqHeaders",
          "normalized": "[Header]",
          "package": "HTTP",
          "partial": "Headers",
          "signature": "[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rqHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "rqMethod",
          "package": "HTTP",
          "signature": "RequestMethod",
          "source": "src/Network-HTTP-Base.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "rqMethod",
          "package": "HTTP",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emight need changing in future\n  1) to support \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e uri in OPTIONS request\n  2) transparent support for both relative\n     & absolute uris, although this should\n     already work (leave scheme & host parts empty).\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "rqURI",
          "package": "HTTP",
          "signature": "URI",
          "source": "src/Network-HTTP-Base.html#Request",
          "type": "function"
        },
        "index": {
          "description": "might need changing in future to support uri in OPTIONS request transparent support for both relative absolute uris although this should already work leave scheme host parts empty",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "rqURI",
          "package": "HTTP",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "rspBody",
          "package": "HTTP",
          "signature": "a",
          "source": "src/Network-HTTP-Base.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "rspBody",
          "package": "HTTP",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rspBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "rspCode",
          "package": "HTTP",
          "signature": "ResponseCode",
          "source": "src/Network-HTTP-Base.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "rspCode",
          "package": "HTTP",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rspCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "rspHeaders",
          "package": "HTTP",
          "signature": "[Header]",
          "source": "src/Network-HTTP-Base.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "rspHeaders",
          "normalized": "[Header]",
          "package": "HTTP",
          "partial": "Headers",
          "signature": "[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rspHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "rspReason",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-HTTP-Base.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "rspReason",
          "package": "HTTP",
          "partial": "Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:rspReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "setRequestBody",
          "package": "HTTP",
          "signature": "Request_String -\u003e (String, String) -\u003e Request_String",
          "source": "src/Network-HTTP-Base.html#setRequestBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "setRequestBody",
          "normalized": "Request_String-\u003e(String,String)-\u003eRequest_String",
          "package": "HTTP",
          "partial": "Request Body",
          "signature": "Request_String-\u003e(String,String)-\u003eRequest_String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:setRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetRequestVersion v req\u003c/code\u003e returns a new request, identical to\n \u003ccode\u003ereq\u003c/code\u003e, but with its HTTP version set to \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "setRequestVersion",
          "package": "HTTP",
          "signature": "String -\u003e Request a -\u003e Request a",
          "source": "src/Network-HTTP-Base.html#setRequestVersion",
          "type": "function"
        },
        "index": {
          "description": "setRequestVersion req returns new request identical to req but with its HTTP version set to",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "setRequestVersion",
          "normalized": "String-\u003eRequest a-\u003eRequest a",
          "package": "HTTP",
          "partial": "Request Version",
          "signature": "String-\u003eRequest a-\u003eRequest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:setRequestVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetResponseVersion v rsp\u003c/code\u003e returns a new response, identical to\n \u003ccode\u003ersp\u003c/code\u003e, but with its HTTP version set to \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "setResponseVersion",
          "package": "HTTP",
          "signature": "String -\u003e Response a -\u003e Response a",
          "source": "src/Network-HTTP-Base.html#setResponseVersion",
          "type": "function"
        },
        "index": {
          "description": "setResponseVersion rsp returns new response identical to rsp but with its HTTP version set to",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "setResponseVersion",
          "normalized": "String-\u003eResponse a-\u003eResponse a",
          "package": "HTTP",
          "partial": "Response Version",
          "signature": "String-\u003eResponse a-\u003eResponse a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:setResponseVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "splitRequestURI",
          "package": "HTTP",
          "signature": "URI -\u003e (String, URI)",
          "source": "src/Network-HTTP-Base.html#splitRequestURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "splitRequestURI",
          "normalized": "URI-\u003e(String,URI)",
          "package": "HTTP",
          "partial": "Request URI",
          "signature": "URI-\u003e(String,URI)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:splitRequestURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe in the future we will have a sensible thing\n   to do here, at that time we might want to change\n   the name.\n\u003c/p\u003e",
          "module": "Network.HTTP.Base",
          "name": "uglyDeathTransfer",
          "package": "HTTP",
          "signature": "String -\u003e IO (Result ([Header], a))",
          "source": "src/Network-HTTP-Base.html#uglyDeathTransfer",
          "type": "function"
        },
        "index": {
          "description": "Maybe in the future we will have sensible thing to do here at that time we might want to change the name",
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "uglyDeathTransfer",
          "normalized": "String-\u003eIO(Result([Header],a))",
          "package": "HTTP",
          "partial": "Death Transfer",
          "signature": "String-\u003eIO(Result([Header],a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:uglyDeathTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "uriAuthPort",
          "package": "HTTP",
          "signature": "Maybe URI -\u003e URIAuth -\u003e Int",
          "source": "src/Network-HTTP-Base.html#uriAuthPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "uriAuthPort",
          "normalized": "Maybe URI-\u003eURIAuth-\u003eInt",
          "package": "HTTP",
          "partial": "Auth Port",
          "signature": "Maybe URI-\u003eURIAuth-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:uriAuthPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "uriAuthToString",
          "package": "HTTP",
          "signature": "URIAuth -\u003e String",
          "source": "src/Network-HTTP-Base.html#uriAuthToString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "uriAuthToString",
          "normalized": "URIAuth-\u003eString",
          "package": "HTTP",
          "partial": "Auth To String",
          "signature": "URIAuth-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:uriAuthToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "uriToAuthorityString",
          "package": "HTTP",
          "signature": "URI -\u003e String",
          "source": "src/Network-HTTP-Base.html#uriToAuthorityString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "uriToAuthorityString",
          "normalized": "URI-\u003eString",
          "package": "HTTP",
          "partial": "To Authority String",
          "signature": "URI-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:uriToAuthorityString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "urlDecode",
          "package": "HTTP",
          "signature": "String -\u003e String",
          "source": "src/Network-HTTP-Base.html#urlDecode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "urlDecode",
          "normalized": "String-\u003eString",
          "package": "HTTP",
          "partial": "Decode",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:urlDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "urlEncode",
          "package": "HTTP",
          "signature": "String -\u003e String",
          "source": "src/Network-HTTP-Base.html#urlEncode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "urlEncode",
          "normalized": "String-\u003eString",
          "package": "HTTP",
          "partial": "Encode",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:urlEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "urlEncodeVars",
          "package": "HTTP",
          "signature": "[(String, String)] -\u003e String",
          "source": "src/Network-HTTP-Base.html#urlEncodeVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "urlEncodeVars",
          "normalized": "[(String,String)]-\u003eString",
          "package": "HTTP",
          "partial": "Encode Vars",
          "signature": "[(String,String)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:urlEncodeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Base",
          "name": "user",
          "package": "HTTP",
          "signature": "Maybe String",
          "source": "src/Network-HTTP-Base.html#URIAuthority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Base",
          "module": "Network.HTTP.Base",
          "name": "user",
          "package": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Base.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the data types and functions for working with HTTP cookies.\n Right now, it contains mostly functionality needed by \u003ccode\u003e\u003ca\u003eBrowser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Cookie",
          "name": "Cookie",
          "package": "HTTP",
          "source": "src/Network-HTTP-Cookie.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the data types and functions for working with HTTP cookies Right now it contains mostly functionality needed by Browser",
          "hierarchy": "Network HTTP Cookie",
          "module": "Network.HTTP.Cookie",
          "name": "Cookie",
          "package": "HTTP",
          "partial": "Cookie",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCookie\u003c/code\u003e is the Haskell representation of HTTP cookie values.\n See its relevant specs for authoritative details.\n\u003c/p\u003e",
          "module": "Network.HTTP.Cookie",
          "name": "Cookie",
          "package": "HTTP",
          "source": "src/Network-HTTP-Cookie.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "Cookie is the Haskell representation of HTTP cookie values See its relevant specs for authoritative details",
          "hierarchy": "Network HTTP Cookie",
          "module": "Network.HTTP.Cookie",
          "name": "Cookie",
          "package": "HTTP",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecookieMatch (domain,path) ck\u003c/code\u003e performs the standard cookie\n match wrt the given domain and path. \n\u003c/p\u003e",
          "module": "Network.HTTP.Cookie",
          "name": "cookieMatch",
          "package": "HTTP",
          "signature": "(String, String) -\u003e Cookie -\u003e Bool",
          "source": "src/Network-HTTP-Cookie.html#cookieMatch",
          "type": "function"
        },
        "index": {
          "description": "cookieMatch domain path ck performs the standard cookie match wrt the given domain and path",
          "hierarchy": "Network HTTP Cookie",
          "module": "Network.HTTP.Cookie",
          "name": "cookieMatch",
          "normalized": "(String,String)-\u003eCookie-\u003eBool",
          "package": "HTTP",
          "partial": "Match",
          "signature": "(String,String)-\u003eCookie-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:cookieMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecookieToHeaders ck\u003c/code\u003e serialises \u003ccode\u003eCookie\u003c/code\u003es to an HTTP request header.\n\u003c/p\u003e",
          "module": "Network.HTTP.Cookie",
          "name": "cookiesToHeader",
          "package": "HTTP",
          "signature": "[Cookie] -\u003e Header",
          "source": "src/Network-HTTP-Cookie.html#cookiesToHeader",
          "type": "function"
        },
        "index": {
          "description": "cookieToHeaders ck serialises Cookie to an HTTP request header",
          "hierarchy": "Network HTTP Cookie",
          "module": "Network.HTTP.Cookie",
          "name": "cookiesToHeader",
          "normalized": "[Cookie]-\u003eHeader",
          "package": "HTTP",
          "partial": "To Header",
          "signature": "[Cookie]-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:cookiesToHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eprocessCookieHeaders dom hdrs\u003c/pre\u003e",
          "module": "Network.HTTP.Cookie",
          "name": "processCookieHeaders",
          "package": "HTTP",
          "signature": "String -\u003e [Header] -\u003e ([String], [Cookie])",
          "source": "src/Network-HTTP-Cookie.html#processCookieHeaders",
          "type": "function"
        },
        "index": {
          "description": "processCookieHeaders dom hdrs",
          "hierarchy": "Network HTTP Cookie",
          "module": "Network.HTTP.Cookie",
          "name": "processCookieHeaders",
          "normalized": "String-\u003e[Header]-\u003e([String],[Cookie])",
          "package": "HTTP",
          "partial": "Cookie Headers",
          "signature": "String-\u003e[Header]-\u003e([String],[Cookie])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Cookie.html#v:processCookieHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003e-based version of \u003ca\u003eNetwork.HTTP\u003c/a\u003e interface.\n\u003c/p\u003e\u003cp\u003eFor more detailed information about what the individual exports do, please consult\n the documentation for \u003ca\u003eNetwork.HTTP\u003c/a\u003e. \u003cem\u003eNotice\u003c/em\u003e however that the functions here do\n not perform any kind of normalization prior to transmission (or receipt); you are\n responsible for doing any such yourself, or, if you prefer, just switch to using\n \u003ca\u003eNetwork.HTTP\u003c/a\u003e function instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.HandleStream",
          "name": "HandleStream",
          "package": "HTTP",
          "source": "src/Network-HTTP-HandleStream.html",
          "type": "module"
        },
        "index": {
          "description": "HandleStream based version of Network.HTTP interface For more detailed information about what the individual exports do please consult the documentation for Network.HTTP Notice however that the functions here do not perform any kind of normalization prior to transmission or receipt you are responsible for doing any such yourself or if you prefer just switch to using Network.HTTP function instead",
          "hierarchy": "Network HTTP HandleStream",
          "module": "Network.HTTP.HandleStream",
          "name": "HandleStream",
          "package": "HTTP",
          "partial": "Handle Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereceiveHTTP hStream\u003c/code\u003e reads a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehStream\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.HandleStream",
          "name": "receiveHTTP",
          "package": "HTTP",
          "signature": "HandleStream bufTy -\u003e IO (Result (Request bufTy))",
          "source": "src/Network-HTTP-HandleStream.html#receiveHTTP",
          "type": "function"
        },
        "index": {
          "description": "receiveHTTP hStream reads Request from the HandleStream hStream",
          "hierarchy": "Network HTTP HandleStream",
          "module": "Network.HTTP.HandleStream",
          "name": "receiveHTTP",
          "normalized": "HandleStream a-\u003eIO(Result(Request a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "HandleStream bufTy-\u003eIO(Result(Request bufTy))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:receiveHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erespondHTTP hStream httpResponse\u003c/code\u003e transmits an HTTP \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e over\n the \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehStream\u003c/code\u003e. It could be used to implement simple web\n server interactions, performing the dual role to \u003ccode\u003e\u003ca\u003esendHTTP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.HandleStream",
          "name": "respondHTTP",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e Response ty -\u003e IO ()",
          "source": "src/Network-HTTP-HandleStream.html#respondHTTP",
          "type": "function"
        },
        "index": {
          "description": "respondHTTP hStream httpResponse transmits an HTTP Response over the HandleStream hStream It could be used to implement simple web server interactions performing the dual role to sendHTTP",
          "hierarchy": "Network HTTP HandleStream",
          "module": "Network.HTTP.HandleStream",
          "name": "respondHTTP",
          "normalized": "HandleStream a-\u003eResponse a-\u003eIO()",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "HandleStream ty-\u003eResponse ty-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:respondHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esendHTTP hStream httpRequest\u003c/code\u003e transmits \u003ccode\u003ehttpRequest\u003c/code\u003e over\n \u003ccode\u003ehStream\u003c/code\u003e, but does not alter the status of the connection, nor request it to be\n closed upon receiving the response.\n\u003c/p\u003e",
          "module": "Network.HTTP.HandleStream",
          "name": "sendHTTP",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e Request ty -\u003e IO (Result (Response ty))",
          "source": "src/Network-HTTP-HandleStream.html#sendHTTP",
          "type": "function"
        },
        "index": {
          "description": "sendHTTP hStream httpRequest transmits httpRequest over hStream but does not alter the status of the connection nor request it to be closed upon receiving the response",
          "hierarchy": "Network HTTP HandleStream",
          "module": "Network.HTTP.HandleStream",
          "name": "sendHTTP",
          "normalized": "HandleStream a-\u003eRequest a-\u003eIO(Result(Response a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "HandleStream ty-\u003eRequest ty-\u003eIO(Result(Response ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:sendHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esendHTTP_notify hStream httpRequest action\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003esendHTTP\u003c/a\u003e\u003c/code\u003e, but\n lets you supply an IO \u003ccode\u003eaction\u003c/code\u003e to execute once the request has been successfully\n transmitted over the connection. Useful when you want to set up tracing of\n request transmission and its performance.\n\u003c/p\u003e",
          "module": "Network.HTTP.HandleStream",
          "name": "sendHTTP_notify",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e Request ty -\u003e IO () -\u003e IO (Result (Response ty))",
          "source": "src/Network-HTTP-HandleStream.html#sendHTTP_notify",
          "type": "function"
        },
        "index": {
          "description": "sendHTTP notify hStream httpRequest action behaves like sendHTTP but lets you supply an IO action to execute once the request has been successfully transmitted over the connection Useful when you want to set up tracing of request transmission and its performance",
          "hierarchy": "Network HTTP HandleStream",
          "module": "Network.HTTP.HandleStream",
          "name": "sendHTTP_notify",
          "normalized": "HandleStream a-\u003eRequest a-\u003eIO()-\u003eIO(Result(Response a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "HandleStream ty-\u003eRequest ty-\u003eIO()-\u003eIO(Result(Response ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:sendHTTP_notify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esimpleHTTP\u003c/code\u003e transmits a resource across a non-persistent connection.\n\u003c/p\u003e",
          "module": "Network.HTTP.HandleStream",
          "name": "simpleHTTP",
          "package": "HTTP",
          "signature": "Request ty -\u003e IO (Result (Response ty))",
          "source": "src/Network-HTTP-HandleStream.html#simpleHTTP",
          "type": "function"
        },
        "index": {
          "description": "simpleHTTP transmits resource across non-persistent connection",
          "hierarchy": "Network HTTP HandleStream",
          "module": "Network.HTTP.HandleStream",
          "name": "simpleHTTP",
          "normalized": "Request a-\u003eIO(Result(Response a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "Request ty-\u003eIO(Result(Response ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:simpleHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e, but acting on an already opened stream.\n\u003c/p\u003e",
          "module": "Network.HTTP.HandleStream",
          "name": "simpleHTTP_",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e Request ty -\u003e IO (Result (Response ty))",
          "source": "src/Network-HTTP-HandleStream.html#simpleHTTP_",
          "type": "function"
        },
        "index": {
          "description": "Like simpleHTTP but acting on an already opened stream",
          "hierarchy": "Network HTTP HandleStream",
          "module": "Network.HTTP.HandleStream",
          "name": "simpleHTTP_",
          "normalized": "HandleStream a-\u003eRequest a-\u003eIO(Result(Response a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "HandleStream ty-\u003eRequest ty-\u003eIO(Result(Response ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:simpleHTTP_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esimpleHTTP_debug debugFile req\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e, but logs\n the HTTP operation via the debug file \u003ccode\u003edebugFile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.HandleStream",
          "name": "simpleHTTP_debug",
          "package": "HTTP",
          "signature": "FilePath -\u003e Request ty -\u003e IO (Result (Response ty))",
          "source": "src/Network-HTTP-HandleStream.html#simpleHTTP_debug",
          "type": "function"
        },
        "index": {
          "description": "simpleHTTP debug debugFile req behaves like simpleHTTP but logs the HTTP operation via the debug file debugFile",
          "hierarchy": "Network HTTP HandleStream",
          "module": "Network.HTTP.HandleStream",
          "name": "simpleHTTP_debug",
          "normalized": "FilePath-\u003eRequest a-\u003eIO(Result(Response a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "FilePath-\u003eRequest ty-\u003eIO(Result(Response ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-HandleStream.html#v:simpleHTTP_debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the data types for representing HTTP headers, and\n operations for looking up header values and working with sequences of\n header values in \u003ccode\u003eRequest\u003c/code\u003es and \u003ccode\u003eResponse\u003c/code\u003es. To avoid having to provide\n separate set of operations for doing so, we introduce a type class \u003ccode\u003e\u003ca\u003eHasHeaders\u003c/a\u003e\u003c/code\u003e\n to facilitate writing such processing using overloading instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Headers",
          "name": "Headers",
          "package": "HTTP",
          "source": "src/Network-HTTP-Headers.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the data types for representing HTTP headers and operations for looking up header values and working with sequences of header values in Request and Response To avoid having to provide separate set of operations for doing so we introduce type class HasHeaders to facilitate writing such processing using overloading instead",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "Headers",
          "package": "HTTP",
          "partial": "Headers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eHasHeaders\u003c/code\u003e is a type class for types containing HTTP headers, allowing\n you to write overloaded header manipulation functions\n for both \u003ccode\u003eRequest\u003c/code\u003e and \u003ccode\u003eResponse\u003c/code\u003e data types, for instance.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "HasHeaders",
          "package": "HTTP",
          "source": "src/Network-HTTP-Headers.html#HasHeaders",
          "type": "class"
        },
        "index": {
          "description": "HasHeaders is type class for types containing HTTP headers allowing you to write overloaded header manipulation functions for both Request and Response data types for instance",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HasHeaders",
          "package": "HTTP",
          "partial": "Has Headers",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#t:HasHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eHeader\u003c/code\u003e data type pairs header names & values.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "Header",
          "package": "HTTP",
          "source": "src/Network-HTTP-Headers.html#Header",
          "type": "data"
        },
        "index": {
          "description": "The Header data type pairs header names values",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "Header",
          "package": "HTTP",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP \u003ccode\u003eHeaderName\u003c/code\u003e type, a Haskell data constructor for each\n specification-defined header, prefixed with \u003ccode\u003eHdr\u003c/code\u003e and CamelCased,\n (i.e., eliding the \u003ccode\u003e-\u003c/code\u003e in the process.) Should you require using\n a custom header, there's the \u003ccode\u003eHdrCustom\u003c/code\u003e constructor which takes\n a \u003ccode\u003eString\u003c/code\u003e argument.\n\u003c/p\u003e\u003cp\u003eEncoding HTTP header names differently, as Strings perhaps, is an\n equally fine choice..no decidedly clear winner, but let's stick\n with data constructors here.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "HeaderName",
          "package": "HTTP",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "data"
        },
        "index": {
          "description": "HTTP HeaderName type Haskell data constructor for each specification-defined header prefixed with Hdr and CamelCased i.e eliding the in the process Should you require using custom header there the HdrCustom constructor which takes String argument Encoding HTTP header names differently as Strings perhaps is an equally fine choice..no decidedly clear winner but let stick with data constructors here",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HeaderName",
          "package": "HTTP",
          "partial": "Header Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#t:HeaderName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HeaderSetter",
          "package": "HTTP",
          "source": "src/Network-HTTP-Headers.html#HeaderSetter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HeaderSetter",
          "package": "HTTP",
          "partial": "Header Setter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#t:HeaderSetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrAccept",
          "package": "HTTP",
          "signature": "HdrAccept",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrAccept",
          "package": "HTTP",
          "partial": "Hdr Accept",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrAcceptCharset",
          "package": "HTTP",
          "signature": "HdrAcceptCharset",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrAcceptCharset",
          "package": "HTTP",
          "partial": "Hdr Accept Charset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAcceptCharset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrAcceptEncoding",
          "package": "HTTP",
          "signature": "HdrAcceptEncoding",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrAcceptEncoding",
          "package": "HTTP",
          "partial": "Hdr Accept Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAcceptEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrAcceptLanguage",
          "package": "HTTP",
          "signature": "HdrAcceptLanguage",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrAcceptLanguage",
          "package": "HTTP",
          "partial": "Hdr Accept Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAcceptLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrAge",
          "package": "HTTP",
          "signature": "HdrAge",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrAge",
          "package": "HTTP",
          "partial": "Hdr Age",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrAllow",
          "package": "HTTP",
          "signature": "HdrAllow",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrAllow",
          "package": "HTTP",
          "partial": "Hdr Allow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAllow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrAuthorization",
          "package": "HTTP",
          "signature": "HdrAuthorization",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrAuthorization",
          "package": "HTTP",
          "partial": "Hdr Authorization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrAuthorization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrCacheControl",
          "package": "HTTP",
          "signature": "HdrCacheControl",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrCacheControl",
          "package": "HTTP",
          "partial": "Hdr Cache Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrCacheControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrConnection",
          "package": "HTTP",
          "signature": "HdrConnection",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrConnection",
          "package": "HTTP",
          "partial": "Hdr Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrContentBase",
          "package": "HTTP",
          "signature": "HdrContentBase",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrContentBase",
          "package": "HTTP",
          "partial": "Hdr Content Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrContentEncoding",
          "package": "HTTP",
          "signature": "HdrContentEncoding",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrContentEncoding",
          "package": "HTTP",
          "partial": "Hdr Content Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrContentLanguage",
          "package": "HTTP",
          "signature": "HdrContentLanguage",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrContentLanguage",
          "package": "HTTP",
          "partial": "Hdr Content Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrContentLength",
          "package": "HTTP",
          "signature": "HdrContentLength",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrContentLength",
          "package": "HTTP",
          "partial": "Hdr Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrContentLocation",
          "package": "HTTP",
          "signature": "HdrContentLocation",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrContentLocation",
          "package": "HTTP",
          "partial": "Hdr Content Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrContentMD5",
          "package": "HTTP",
          "signature": "HdrContentMD5",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrContentMD5",
          "package": "HTTP",
          "partial": "Hdr Content MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentMD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrContentRange",
          "package": "HTTP",
          "signature": "HdrContentRange",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrContentRange",
          "package": "HTTP",
          "partial": "Hdr Content Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMIME entity headers (for sub-parts)\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "HdrContentTransferEncoding",
          "package": "HTTP",
          "signature": "HdrContentTransferEncoding",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "description": "MIME entity headers for sub-parts",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrContentTransferEncoding",
          "package": "HTTP",
          "partial": "Hdr Content Transfer Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentTransferEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrContentType",
          "package": "HTTP",
          "signature": "HdrContentType",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrContentType",
          "package": "HTTP",
          "partial": "Hdr Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrCookie",
          "package": "HTTP",
          "signature": "HdrCookie",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrCookie",
          "package": "HTTP",
          "partial": "Hdr Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows for unrecognised or experimental headers.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "HdrCustom",
          "package": "HTTP",
          "signature": "HdrCustom String",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "description": "Allows for unrecognised or experimental headers",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrCustom",
          "package": "HTTP",
          "partial": "Hdr Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrCustom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrDate",
          "package": "HTTP",
          "signature": "HdrDate",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrDate",
          "package": "HTTP",
          "partial": "Hdr Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrETag",
          "package": "HTTP",
          "signature": "HdrETag",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrETag",
          "package": "HTTP",
          "partial": "Hdr ETag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrETag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrExpect",
          "package": "HTTP",
          "signature": "HdrExpect",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrExpect",
          "package": "HTTP",
          "partial": "Hdr Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrExpires",
          "package": "HTTP",
          "signature": "HdrExpires",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrExpires",
          "package": "HTTP",
          "partial": "Hdr Expires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrExpires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrFrom",
          "package": "HTTP",
          "signature": "HdrFrom",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrFrom",
          "package": "HTTP",
          "partial": "Hdr From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrHost",
          "package": "HTTP",
          "signature": "HdrHost",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrHost",
          "package": "HTTP",
          "partial": "Hdr Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrIfMatch",
          "package": "HTTP",
          "signature": "HdrIfMatch",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrIfMatch",
          "package": "HTTP",
          "partial": "Hdr If Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrIfMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrIfModifiedSince",
          "package": "HTTP",
          "signature": "HdrIfModifiedSince",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrIfModifiedSince",
          "package": "HTTP",
          "partial": "Hdr If Modified Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrIfModifiedSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrIfNoneMatch",
          "package": "HTTP",
          "signature": "HdrIfNoneMatch",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrIfNoneMatch",
          "package": "HTTP",
          "partial": "Hdr If None Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrIfNoneMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrIfRange",
          "package": "HTTP",
          "signature": "HdrIfRange",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrIfRange",
          "package": "HTTP",
          "partial": "Hdr If Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrIfRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrIfUnmodifiedSince",
          "package": "HTTP",
          "signature": "HdrIfUnmodifiedSince",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrIfUnmodifiedSince",
          "package": "HTTP",
          "partial": "Hdr If Unmodified Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrIfUnmodifiedSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrLastModified",
          "package": "HTTP",
          "signature": "HdrLastModified",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrLastModified",
          "package": "HTTP",
          "partial": "Hdr Last Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrLastModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrLocation",
          "package": "HTTP",
          "signature": "HdrLocation",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrLocation",
          "package": "HTTP",
          "partial": "Hdr Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrMaxForwards",
          "package": "HTTP",
          "signature": "HdrMaxForwards",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrMaxForwards",
          "package": "HTTP",
          "partial": "Hdr Max Forwards",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrMaxForwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrPragma",
          "package": "HTTP",
          "signature": "HdrPragma",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrPragma",
          "package": "HTTP",
          "partial": "Hdr Pragma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrPragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrProxyAuthenticate",
          "package": "HTTP",
          "signature": "HdrProxyAuthenticate",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrProxyAuthenticate",
          "package": "HTTP",
          "partial": "Hdr Proxy Authenticate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrProxyAuthenticate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrProxyAuthorization",
          "package": "HTTP",
          "signature": "HdrProxyAuthorization",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrProxyAuthorization",
          "package": "HTTP",
          "partial": "Hdr Proxy Authorization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrProxyAuthorization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrPublic",
          "package": "HTTP",
          "signature": "HdrPublic",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrPublic",
          "package": "HTTP",
          "partial": "Hdr Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrPublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrRange",
          "package": "HTTP",
          "signature": "HdrRange",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrRange",
          "package": "HTTP",
          "partial": "Hdr Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrReferer",
          "package": "HTTP",
          "signature": "HdrReferer",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrReferer",
          "package": "HTTP",
          "partial": "Hdr Referer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrReferer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrRetryAfter",
          "package": "HTTP",
          "signature": "HdrRetryAfter",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrRetryAfter",
          "package": "HTTP",
          "partial": "Hdr Retry After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrRetryAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrServer",
          "package": "HTTP",
          "signature": "HdrServer",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrServer",
          "package": "HTTP",
          "partial": "Hdr Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrSetCookie",
          "package": "HTTP",
          "signature": "HdrSetCookie",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrSetCookie",
          "package": "HTTP",
          "partial": "Hdr Set Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrSetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrTE",
          "package": "HTTP",
          "signature": "HdrTE",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrTE",
          "package": "HTTP",
          "partial": "Hdr TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrTrailer",
          "package": "HTTP",
          "signature": "HdrTrailer",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrTrailer",
          "package": "HTTP",
          "partial": "Hdr Trailer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrTrailer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrTransferEncoding",
          "package": "HTTP",
          "signature": "HdrTransferEncoding",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrTransferEncoding",
          "package": "HTTP",
          "partial": "Hdr Transfer Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrTransferEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrUpgrade",
          "package": "HTTP",
          "signature": "HdrUpgrade",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrUpgrade",
          "package": "HTTP",
          "partial": "Hdr Upgrade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrUpgrade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrUserAgent",
          "package": "HTTP",
          "signature": "HdrUserAgent",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrUserAgent",
          "package": "HTTP",
          "partial": "Hdr User Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrUserAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrVary",
          "package": "HTTP",
          "signature": "HdrVary",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrVary",
          "package": "HTTP",
          "partial": "Hdr Vary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrVary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrVia",
          "package": "HTTP",
          "signature": "HdrVia",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrVia",
          "package": "HTTP",
          "partial": "Hdr Via",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrVia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrWWWAuthenticate",
          "package": "HTTP",
          "signature": "HdrWWWAuthenticate",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrWWWAuthenticate",
          "package": "HTTP",
          "partial": "Hdr WWWAuthenticate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrWWWAuthenticate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "HdrWarning",
          "package": "HTTP",
          "signature": "HdrWarning",
          "source": "src/Network-HTTP-Headers.html#HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "HdrWarning",
          "package": "HTTP",
          "partial": "Hdr Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:HdrWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "Header",
          "package": "HTTP",
          "signature": "Header HeaderName String",
          "source": "src/Network-HTTP-Headers.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "Header",
          "package": "HTTP",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efindHeader hdrNm x\u003c/code\u003e looks up \u003ccode\u003ehdrNm\u003c/code\u003e in \u003ccode\u003ex\u003c/code\u003e, returning the first\n header that matches, if any.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "findHeader",
          "package": "HTTP",
          "signature": "HeaderName -\u003e a -\u003e Maybe String",
          "source": "src/Network-HTTP-Headers.html#findHeader",
          "type": "function"
        },
        "index": {
          "description": "findHeader hdrNm looks up hdrNm in returning the first header that matches if any",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "findHeader",
          "normalized": "HeaderName-\u003ea-\u003eMaybe String",
          "package": "HTTP",
          "partial": "Header",
          "signature": "HeaderName-\u003ea-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:findHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "getHeaders",
          "package": "HTTP",
          "signature": "x -\u003e [Header]",
          "source": "src/Network-HTTP-Headers.html#getHeaders",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "getHeaders",
          "normalized": "a-\u003e[Header]",
          "package": "HTTP",
          "partial": "Headers",
          "signature": "x-\u003e[Header]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:getHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "hdrName",
          "package": "HTTP",
          "signature": "Header -\u003e HeaderName",
          "source": "src/Network-HTTP-Headers.html#hdrName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "hdrName",
          "normalized": "Header-\u003eHeaderName",
          "package": "HTTP",
          "partial": "Name",
          "signature": "Header-\u003eHeaderName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:hdrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "hdrValue",
          "package": "HTTP",
          "signature": "Header -\u003e String",
          "source": "src/Network-HTTP-Headers.html#hdrValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "hdrValue",
          "normalized": "Header-\u003eString",
          "package": "HTTP",
          "partial": "Value",
          "signature": "Header-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:hdrValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eheaderMap\u003c/code\u003e is a straight assoc list for translating between header names \n and values.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "headerMap",
          "package": "HTTP",
          "signature": "[(String, HeaderName)]",
          "source": "src/Network-HTTP-Headers.html#headerMap",
          "type": "function"
        },
        "index": {
          "description": "headerMap is straight assoc list for translating between header names and values",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "headerMap",
          "normalized": "[(String,HeaderName)]",
          "package": "HTTP",
          "partial": "Map",
          "signature": "[(String,HeaderName)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:headerMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einsertHeader hdr val x\u003c/code\u003e inserts a header with the given header name\n and value. Does not check for existing headers with same name, allowing\n duplicates to be introduce (use \u003ccode\u003e\u003ca\u003ereplaceHeader\u003c/a\u003e\u003c/code\u003e if you want to avoid this.)\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "insertHeader",
          "package": "HTTP",
          "signature": "HeaderSetter a",
          "source": "src/Network-HTTP-Headers.html#insertHeader",
          "type": "function"
        },
        "index": {
          "description": "insertHeader hdr val inserts header with the given header name and value Does not check for existing headers with same name allowing duplicates to be introduce use replaceHeader if you want to avoid this",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "insertHeader",
          "package": "HTTP",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:insertHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einsertHeaderIfMissing hdr val x\u003c/code\u003e adds the new header only if no previous\n header with name \u003ccode\u003ehdr\u003c/code\u003e exists in \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "insertHeaderIfMissing",
          "package": "HTTP",
          "signature": "HeaderSetter a",
          "source": "src/Network-HTTP-Headers.html#insertHeaderIfMissing",
          "type": "function"
        },
        "index": {
          "description": "insertHeaderIfMissing hdr val adds the new header only if no previous header with name hdr exists in",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "insertHeaderIfMissing",
          "package": "HTTP",
          "partial": "Header If Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:insertHeaderIfMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einsertHeaders hdrs x\u003c/code\u003e appends multiple headers to \u003ccode\u003ex\u003c/code\u003e's existing\n set.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "insertHeaders",
          "package": "HTTP",
          "signature": "[Header] -\u003e a -\u003e a",
          "source": "src/Network-HTTP-Headers.html#insertHeaders",
          "type": "function"
        },
        "index": {
          "description": "insertHeaders hdrs appends multiple headers to existing set",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "insertHeaders",
          "normalized": "[Header]-\u003ea-\u003ea",
          "package": "HTTP",
          "partial": "Headers",
          "signature": "[Header]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:insertHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elookupHeader hdr hdrs\u003c/code\u003e locates the first header matching \u003ccode\u003ehdr\u003c/code\u003e in the\n list \u003ccode\u003ehdrs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "lookupHeader",
          "package": "HTTP",
          "signature": "HeaderName -\u003e [Header] -\u003e Maybe String",
          "source": "src/Network-HTTP-Headers.html#lookupHeader",
          "type": "function"
        },
        "index": {
          "description": "lookupHeader hdr hdrs locates the first header matching hdr in the list hdrs",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "lookupHeader",
          "normalized": "HeaderName-\u003e[Header]-\u003eMaybe String",
          "package": "HTTP",
          "partial": "Header",
          "signature": "HeaderName-\u003e[Header]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:lookupHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader constructor as a function, hiding above rep.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "mkHeader",
          "package": "HTTP",
          "signature": "HeaderName -\u003e String -\u003e Header",
          "source": "src/Network-HTTP-Headers.html#mkHeader",
          "type": "function"
        },
        "index": {
          "description": "Header constructor as function hiding above rep",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "mkHeader",
          "normalized": "HeaderName-\u003eString-\u003eHeader",
          "package": "HTTP",
          "partial": "Header",
          "signature": "HeaderName-\u003eString-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:mkHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseHeader headerNameAndValueString\u003c/code\u003e tries to unscramble a\n \u003ccode\u003eheader: value\u003c/code\u003e pairing and returning it as a \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "parseHeader",
          "package": "HTTP",
          "signature": "String -\u003e Result Header",
          "source": "src/Network-HTTP-Headers.html#parseHeader",
          "type": "function"
        },
        "index": {
          "description": "parseHeader headerNameAndValueString tries to unscramble header value pairing and returning it as Header",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "parseHeader",
          "normalized": "String-\u003eResult Header",
          "package": "HTTP",
          "partial": "Header",
          "signature": "String-\u003eResult Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:parseHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseHeaders hdrs\u003c/code\u003e takes a sequence of strings holding header\n information and parses them into a set of headers (preserving their\n order in the input argument.) Handles header values split up over\n multiple lines.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "parseHeaders",
          "package": "HTTP",
          "signature": "[String] -\u003e Result [Header]",
          "source": "src/Network-HTTP-Headers.html#parseHeaders",
          "type": "function"
        },
        "index": {
          "description": "parseHeaders hdrs takes sequence of strings holding header information and parses them into set of headers preserving their order in the input argument Handles header values split up over multiple lines",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "parseHeaders",
          "normalized": "[String]-\u003eResult[Header]",
          "package": "HTTP",
          "partial": "Headers",
          "signature": "[String]-\u003eResult[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:parseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereplaceHeader hdr val o\u003c/code\u003e replaces the header \u003ccode\u003ehdr\u003c/code\u003e with the\n value \u003ccode\u003eval\u003c/code\u003e, dropping any existing \n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "replaceHeader",
          "package": "HTTP",
          "signature": "HeaderSetter a",
          "source": "src/Network-HTTP-Headers.html#replaceHeader",
          "type": "function"
        },
        "index": {
          "description": "replaceHeader hdr val replaces the header hdr with the value val dropping any existing",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "replaceHeader",
          "package": "HTTP",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:replaceHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eretrieveHeaders hdrNm x\u003c/code\u003e gets a list of headers with \u003ccode\u003e\u003ca\u003eHeaderName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdrNm\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Headers",
          "name": "retrieveHeaders",
          "package": "HTTP",
          "signature": "HeaderName -\u003e a -\u003e [Header]",
          "source": "src/Network-HTTP-Headers.html#retrieveHeaders",
          "type": "function"
        },
        "index": {
          "description": "retrieveHeaders hdrNm gets list of headers with HeaderName hdrNm",
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "retrieveHeaders",
          "normalized": "HeaderName-\u003ea-\u003e[Header]",
          "package": "HTTP",
          "partial": "Headers",
          "signature": "HeaderName-\u003ea-\u003e[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:retrieveHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Headers",
          "name": "setHeaders",
          "package": "HTTP",
          "signature": "x -\u003e [Header] -\u003e x",
          "source": "src/Network-HTTP-Headers.html#setHeaders",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network HTTP Headers",
          "module": "Network.HTTP.Headers",
          "name": "setHeaders",
          "normalized": "a-\u003e[Header]-\u003ea",
          "package": "HTTP",
          "partial": "Headers",
          "signature": "x-\u003e[Header]-\u003ex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Headers.html#v:setHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandling proxy server settings and their resolution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "Proxy",
          "package": "HTTP",
          "source": "src/Network-HTTP-Proxy.html",
          "type": "module"
        },
        "index": {
          "description": "Handling proxy server settings and their resolution",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "Proxy",
          "package": "HTTP",
          "partial": "Proxy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP proxies (or not) are represented via \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e, specifying if a\n proxy should be used for the request (see \u003ccode\u003e\u003ca\u003esetProxy\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "Proxy",
          "package": "HTTP",
          "source": "src/Network-HTTP-Proxy.html#Proxy",
          "type": "data"
        },
        "index": {
          "description": "HTTP proxies or not are represented via Proxy specifying if proxy should be used for the request see setProxy",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "Proxy",
          "package": "HTTP",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efetchProxy flg\u003c/code\u003e gets the local proxy settings and parse the string\n into a \u003ccode\u003eProxy\u003c/code\u003e value. If you want to be informed of ill-formed proxy\n configuration strings, supply \u003ccode\u003eTrue\u003c/code\u003e for \u003ccode\u003eflg\u003c/code\u003e.\n Proxy settings are sourced from the \u003ccode\u003eHTTP_PROXY\u003c/code\u003e environment variable,\n and in the case of Windows platforms, by consulting IE/WinInet's proxy\n setting in the Registry.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "fetchProxy",
          "package": "HTTP",
          "signature": "Bool -\u003e IO Proxy",
          "source": "src/Network-HTTP-Proxy.html#fetchProxy",
          "type": "function"
        },
        "index": {
          "description": "fetchProxy flg gets the local proxy settings and parse the string into Proxy value If you want to be informed of ill-formed proxy configuration strings supply True for flg Proxy settings are sourced from the HTTP PROXY environment variable and in the case of Windows platforms by consulting IE WinInet proxy setting in the Registry",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "fetchProxy",
          "normalized": "Bool-\u003eIO Proxy",
          "package": "HTTP",
          "partial": "Proxy",
          "signature": "Bool-\u003eIO Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#v:fetchProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Proxy",
          "name": "noProxy",
          "package": "HTTP",
          "signature": "Proxy",
          "source": "src/Network-HTTP-Proxy.html#noProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "noProxy",
          "package": "HTTP",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#v:noProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseProxy str\u003c/code\u003e translates a proxy server string into a \u003ccode\u003eProxy\u003c/code\u003e value;\n returns \u003ccode\u003eNothing\u003c/code\u003e if not well-formed.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "parseProxy",
          "package": "HTTP",
          "signature": "String -\u003e Maybe Proxy",
          "source": "src/Network-HTTP-Proxy.html#parseProxy",
          "type": "function"
        },
        "index": {
          "description": "parseProxy str translates proxy server string into Proxy value returns Nothing if not well-formed",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "parseProxy",
          "normalized": "String-\u003eMaybe Proxy",
          "package": "HTTP",
          "partial": "Proxy",
          "signature": "String-\u003eMaybe Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Proxy.html#v:parseProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransmitting HTTP requests and responses holding \u003ccode\u003eString\u003c/code\u003e in their payload bodies.\n This is one of the implementation modules for the \u003ca\u003eNetwork.HTTP\u003c/a\u003e interface, representing\n request and response content as \u003ccode\u003eString\u003c/code\u003es and transmitting them in non-packed form\n (cf. \u003ca\u003eNetwork.HTTP.HandleStream\u003c/a\u003e and its use of \u003ccode\u003eByteString\u003c/code\u003es.) over \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e handles.\n It is mostly here for backwards compatibility, representing how requests and responses\n were transmitted up until the 4.x releases of the HTTP package.\n\u003c/p\u003e\u003cp\u003eFor more detailed information about what the individual exports do, please consult\n the documentation for \u003ca\u003eNetwork.HTTP\u003c/a\u003e. \u003cem\u003eNotice\u003c/em\u003e however that the functions here do\n not perform any kind of normalization prior to transmission (or receipt); you are\n responsible for doing any such yourself, or, if you prefer, just switch to using\n \u003ca\u003eNetwork.HTTP\u003c/a\u003e function instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Stream",
          "name": "Stream",
          "package": "HTTP",
          "source": "src/Network-HTTP-Stream.html",
          "type": "module"
        },
        "index": {
          "description": "Transmitting HTTP requests and responses holding String in their payload bodies This is one of the implementation modules for the Network.HTTP interface representing request and response content as String and transmitting them in non-packed form cf Network.HTTP.HandleStream and its use of ByteString over Stream handles It is mostly here for backwards compatibility representing how requests and responses were transmitted up until the releases of the HTTP package For more detailed information about what the individual exports do please consult the documentation for Network.HTTP Notice however that the functions here do not perform any kind of normalization prior to transmission or receipt you are responsible for doing any such yourself or if you prefer just switch to using Network.HTTP function instead",
          "hierarchy": "Network HTTP Stream",
          "module": "Network.HTTP.Stream",
          "name": "Stream",
          "package": "HTTP",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive and parse a HTTP request from the given Stream. Should be used \n   for server side interactions.\n\u003c/p\u003e",
          "module": "Network.HTTP.Stream",
          "name": "receiveHTTP",
          "package": "HTTP",
          "signature": "s -\u003e IO (Result Request_String)",
          "source": "src/Network-HTTP-Stream.html#receiveHTTP",
          "type": "function"
        },
        "index": {
          "description": "Receive and parse HTTP request from the given Stream Should be used for server side interactions",
          "hierarchy": "Network HTTP Stream",
          "module": "Network.HTTP.Stream",
          "name": "receiveHTTP",
          "normalized": "a-\u003eIO(Result Request_String)",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "s-\u003eIO(Result Request_String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:receiveHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVery simple function, send a HTTP response over the given stream. This \n   could be improved on to use different transfer types.\n\u003c/p\u003e",
          "module": "Network.HTTP.Stream",
          "name": "respondHTTP",
          "package": "HTTP",
          "signature": "s -\u003e Response_String -\u003e IO ()",
          "source": "src/Network-HTTP-Stream.html#respondHTTP",
          "type": "function"
        },
        "index": {
          "description": "Very simple function send HTTP response over the given stream This could be improved on to use different transfer types",
          "hierarchy": "Network HTTP Stream",
          "module": "Network.HTTP.Stream",
          "name": "respondHTTP",
          "normalized": "a-\u003eResponse_String-\u003eIO()",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "s-\u003eResponse_String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:respondHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Stream",
          "name": "sendHTTP",
          "package": "HTTP",
          "signature": "s -\u003e Request_String -\u003e IO (Result Response_String)",
          "source": "src/Network-HTTP-Stream.html#sendHTTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Stream",
          "module": "Network.HTTP.Stream",
          "name": "sendHTTP",
          "normalized": "a-\u003eRequest_String-\u003eIO(Result Response_String)",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "s-\u003eRequest_String-\u003eIO(Result Response_String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:sendHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Stream",
          "name": "sendHTTP_notify",
          "package": "HTTP",
          "signature": "s -\u003e Request_String -\u003e IO () -\u003e IO (Result Response_String)",
          "source": "src/Network-HTTP-Stream.html#sendHTTP_notify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Stream",
          "module": "Network.HTTP.Stream",
          "name": "sendHTTP_notify",
          "normalized": "a-\u003eRequest_String-\u003eIO()-\u003eIO(Result Response_String)",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "s-\u003eRequest_String-\u003eIO()-\u003eIO(Result Response_String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:sendHTTP_notify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple way to transmit a resource across a non-persistent connection.\n\u003c/p\u003e",
          "module": "Network.HTTP.Stream",
          "name": "simpleHTTP",
          "package": "HTTP",
          "signature": "Request_String -\u003e IO (Result Response_String)",
          "source": "src/Network-HTTP-Stream.html#simpleHTTP",
          "type": "function"
        },
        "index": {
          "description": "Simple way to transmit resource across non-persistent connection",
          "hierarchy": "Network HTTP Stream",
          "module": "Network.HTTP.Stream",
          "name": "simpleHTTP",
          "normalized": "Request_String-\u003eIO(Result Response_String)",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "Request_String-\u003eIO(Result Response_String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:simpleHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e, but acting on an already opened stream.\n\u003c/p\u003e",
          "module": "Network.HTTP.Stream",
          "name": "simpleHTTP_",
          "package": "HTTP",
          "signature": "s -\u003e Request_String -\u003e IO (Result Response_String)",
          "source": "src/Network-HTTP-Stream.html#simpleHTTP_",
          "type": "function"
        },
        "index": {
          "description": "Like simpleHTTP but acting on an already opened stream",
          "hierarchy": "Network HTTP Stream",
          "module": "Network.HTTP.Stream",
          "name": "simpleHTTP_",
          "normalized": "a-\u003eRequest_String-\u003eIO(Result Response_String)",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "s-\u003eRequest_String-\u003eIO(Result Response_String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP-Stream.html#v:simpleHTTP_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHTTP\u003c/a\u003e\u003c/code\u003e module provides a simple interface for sending and\n receiving content over HTTP in Haskell. Here's how to fetch a document from\n a URL and return it as a String:\n\u003c/p\u003e\u003cpre\u003e\n    simpleHTTP (getRequest \"http://www.haskell.org/\") \u003e\u003e= fmap (take 100) . getResponseBody\n        -- fetch document and return it (as a 'String'.)\n\u003c/pre\u003e\u003cp\u003eOther functions let you control the submission and transfer of HTTP\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es more carefully, letting you integrate the use\n of \u003ccode\u003e\u003ca\u003eHTTP\u003c/a\u003e\u003c/code\u003e functionality into your application.\n\u003c/p\u003e\u003cp\u003eThe module also exports the main types of the package, \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e,\n along with \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e and functions for working with these.\n\u003c/p\u003e\u003cp\u003eThe actual functionality is implemented by modules in the \u003ccode\u003eNetwork.HTTP.*\u003c/code\u003e\n namespace, letting you either use the default implementation here\n by importing \u003ccode\u003eNetwork.HTTP\u003c/code\u003e or, for more specific uses, selectively\n import the modules in \u003ccode\u003eNetwork.HTTP.*\u003c/code\u003e. To wit, more than one kind of\n representation of the bulk data that flows across a HTTP connection is \n supported. (see \u003ca\u003eNetwork.HTTP.HandleStream\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e send actions will normalize the \u003ccode\u003eRequest\u003c/code\u003e prior to transmission.\n Normalization such as having the request path be in the expected form and, possibly,\n introduce a default \u003ccode\u003eHost:\u003c/code\u003e header if one isn't already present. If you do not \n want the requests tampered with, but sent as-is, please import and use the\n the \u003ca\u003eNetwork.HTTP.HandleStream\u003c/a\u003e or \u003ca\u003eNetwork.HTTP.Stream\u003c/a\u003e modules instead. They\n export the same functions, but leaves construction and any normalization of \n \u003ccode\u003eRequest\u003c/code\u003es to the user.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e This package only supports HTTP; it does not support HTTPS.\n Attempts to use HTTPS result in an error.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP",
          "name": "HTTP",
          "package": "HTTP",
          "source": "src/Network-HTTP.html",
          "type": "module"
        },
        "index": {
          "description": "The HTTP module provides simple interface for sending and receiving content over HTTP in Haskell Here how to fetch document from URL and return it as String simpleHTTP getRequest http www.haskell.org fmap take getResponseBody fetch document and return it as String Other functions let you control the submission and transfer of HTTP Request and Response more carefully letting you integrate the use of HTTP functionality into your application The module also exports the main types of the package Request and Response along with Header and functions for working with these The actual functionality is implemented by modules in the Network.HTTP namespace letting you either use the default implementation here by importing Network.HTTP or for more specific uses selectively import the modules in Network.HTTP To wit more than one kind of representation of the bulk data that flows across HTTP connection is supported see Network.HTTP.HandleStream NOTE The Request send actions will normalize the Request prior to transmission Normalization such as having the request path be in the expected form and possibly introduce default Host header if one isn already present If you do not want the requests tampered with but sent as-is please import and use the the Network.HTTP.HandleStream or Network.HTTP.Stream modules instead They export the same functions but leaves construction and any normalization of Request to the user NOTE This package only supports HTTP it does not support HTTPS Attempts to use HTTPS result in an error",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HTTP",
          "package": "HTTP",
          "partial": "HTTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience constructor for a GET \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the URL isn't syntactically valid, the function raises an error.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getRequest",
          "package": "HTTP",
          "signature": "String-\u003e Request_String",
          "type": "function"
        },
        "index": {
          "description": "convenience constructor for GET Request If the URL isn syntactically valid the function raises an error",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getRequest",
          "normalized": "String-\u003eRequest_String",
          "package": "HTTP",
          "partial": "Request",
          "signature": "String-\u003eRequest_String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:getRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetResponseBody response\u003c/code\u003e takes the response of a HTTP requesting action and\n tries to extricate the body of the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eresponse\u003c/code\u003e. If the request action\n returned an error, an IO exception is raised.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getResponseBody",
          "package": "HTTP",
          "signature": "Result (Response ty) -\u003e IO ty",
          "source": "src/Network-HTTP.html#getResponseBody",
          "type": "function"
        },
        "index": {
          "description": "getResponseBody response takes the response of HTTP requesting action and tries to extricate the body of the Response response If the request action returned an error an IO exception is raised",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getResponseBody",
          "normalized": "Result(Response a)-\u003eIO a",
          "package": "HTTP",
          "partial": "Response Body",
          "signature": "Result(Response ty)-\u003eIO ty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:getResponseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetResponseBody response\u003c/code\u003e takes the response of a HTTP requesting action and\n tries to extricate the status code of the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eresponse\u003c/code\u003e. If the request action\n returned an error, an IO exception is raised.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getResponseCode",
          "package": "HTTP",
          "signature": "Result (Response ty) -\u003e IO ResponseCode",
          "source": "src/Network-HTTP.html#getResponseCode",
          "type": "function"
        },
        "index": {
          "description": "getResponseBody response takes the response of HTTP requesting action and tries to extricate the status code of the Response response If the request action returned an error an IO exception is raised",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getResponseCode",
          "normalized": "Result(Response a)-\u003eIO ResponseCode",
          "package": "HTTP",
          "partial": "Response Code",
          "signature": "Result(Response ty)-\u003eIO ResponseCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:getResponseCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience constructor for a HEAD \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the URL isn't syntactically valid, the function raises an error.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "headRequest",
          "package": "HTTP",
          "signature": "String-\u003e Request_String",
          "type": "function"
        },
        "index": {
          "description": "convenience constructor for HEAD Request If the URL isn syntactically valid the function raises an error",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "headRequest",
          "normalized": "String-\u003eRequest_String",
          "package": "HTTP",
          "partial": "Request",
          "signature": "String-\u003eRequest_String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:headRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience constructor for a POST \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the URL isn't syntactically valid, the function raises an error.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "postRequest",
          "package": "HTTP",
          "signature": "String-\u003e Request_String",
          "type": "function"
        },
        "index": {
          "description": "convenience constructor for POST Request If the URL isn syntactically valid the function raises an error",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "postRequest",
          "normalized": "String-\u003eRequest_String",
          "package": "HTTP",
          "partial": "Request",
          "signature": "String-\u003eRequest_String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:postRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience constructor for a POST \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt constructs a request and sets the body as well as\n the Content-Type and Content-Length headers. The contents of the body\n are forced to calculate the value for the Content-Length header.\n\u003c/p\u003e\u003cp\u003eIf the URL isn't syntactically valid, the function raises an error.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "postRequestWithBody",
          "package": "HTTP",
          "signature": "String-\u003e String-\u003e String-\u003e Request_String",
          "type": "function"
        },
        "index": {
          "description": "convenience constructor for POST Request It constructs request and sets the body as well as the Content-Type and Content-Length headers The contents of the body are forced to calculate the value for the Content-Length header If the URL isn syntactically valid the function raises an error",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "postRequestWithBody",
          "normalized": "String-\u003eString-\u003eString-\u003eRequest_String",
          "package": "HTTP",
          "partial": "Request With Body",
          "signature": "String-\u003eString-\u003eString-\u003eRequest_String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:postRequestWithBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereceiveHTTP hStream\u003c/code\u003e reads a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehStream\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "receiveHTTP",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e IO (Result (Request ty))",
          "source": "src/Network-HTTP.html#receiveHTTP",
          "type": "function"
        },
        "index": {
          "description": "receiveHTTP hStream reads Request from the HandleStream hStream",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "receiveHTTP",
          "normalized": "HandleStream a-\u003eIO(Result(Request a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "HandleStream ty-\u003eIO(Result(Request ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:receiveHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erespondHTTP hStream httpResponse\u003c/code\u003e transmits an HTTP \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e over\n the \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehStream\u003c/code\u003e. It could be used to implement simple web\n server interactions, performing the dual role to \u003ccode\u003e\u003ca\u003esendHTTP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "respondHTTP",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e Response ty -\u003e IO ()",
          "source": "src/Network-HTTP.html#respondHTTP",
          "type": "function"
        },
        "index": {
          "description": "respondHTTP hStream httpResponse transmits an HTTP Response over the HandleStream hStream It could be used to implement simple web server interactions performing the dual role to sendHTTP",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "respondHTTP",
          "normalized": "HandleStream a-\u003eResponse a-\u003eIO()",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "HandleStream ty-\u003eResponse ty-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:respondHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esendHTTP hStream httpRequest\u003c/code\u003e transmits \u003ccode\u003ehttpRequest\u003c/code\u003e (after normalization) over\n \u003ccode\u003ehStream\u003c/code\u003e, but does not alter the status of the connection, nor request it to be\n closed upon receiving the response.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "sendHTTP",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e Request ty -\u003e IO (Result (Response ty))",
          "source": "src/Network-HTTP.html#sendHTTP",
          "type": "function"
        },
        "index": {
          "description": "sendHTTP hStream httpRequest transmits httpRequest after normalization over hStream but does not alter the status of the connection nor request it to be closed upon receiving the response",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "sendHTTP",
          "normalized": "HandleStream a-\u003eRequest a-\u003eIO(Result(Response a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "HandleStream ty-\u003eRequest ty-\u003eIO(Result(Response ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:sendHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esendHTTP_notify hStream httpRequest action\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003esendHTTP\u003c/a\u003e\u003c/code\u003e, but\n lets you supply an IO \u003ccode\u003eaction\u003c/code\u003e to execute once the request has been successfully\n transmitted over the connection. Useful when you want to set up tracing of\n request transmission and its performance.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "sendHTTP_notify",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e Request ty -\u003e IO () -\u003e IO (Result (Response ty))",
          "source": "src/Network-HTTP.html#sendHTTP_notify",
          "type": "function"
        },
        "index": {
          "description": "sendHTTP notify hStream httpRequest action behaves like sendHTTP but lets you supply an IO action to execute once the request has been successfully transmitted over the connection Useful when you want to set up tracing of request transmission and its performance",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "sendHTTP_notify",
          "normalized": "HandleStream a-\u003eRequest a-\u003eIO()-\u003eIO(Result(Response a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "HandleStream ty-\u003eRequest ty-\u003eIO()-\u003eIO(Result(Response ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:sendHTTP_notify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esimpleHTTP req\u003c/code\u003e transmits the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ereq\u003c/code\u003e by opening a \u003cem\u003edirect\u003c/em\u003e, non-persistent\n connection to the HTTP server that \u003ccode\u003ereq\u003c/code\u003e is destined for, followed by transmitting\n it and gathering up the response as a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e. Prior to sending the request,\n it is normalized (via \u003ccode\u003e\u003ca\u003enormalizeRequest\u003c/a\u003e\u003c/code\u003e). If you have to mediate the request\n via an HTTP proxy, you will have to normalize the request yourself. Or switch to\n using \u003ccode\u003e\u003ca\u003eBrowser\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e simpleHTTP (getRequest \"http://hackage.haskell.org/\")\n simpleHTTP (getRequest \"http://hackage.haskell.org:8012/\")\n\u003c/pre\u003e",
          "module": "Network.HTTP",
          "name": "simpleHTTP",
          "package": "HTTP",
          "signature": "Request ty -\u003e IO (Result (Response ty))",
          "source": "src/Network-HTTP.html#simpleHTTP",
          "type": "function"
        },
        "index": {
          "description": "simpleHTTP req transmits the Request req by opening direct non-persistent connection to the HTTP server that req is destined for followed by transmitting it and gathering up the response as Result Prior to sending the request it is normalized via normalizeRequest If you have to mediate the request via an HTTP proxy you will have to normalize the request yourself Or switch to using Browser instead Examples simpleHTTP getRequest http hackage.haskell.org simpleHTTP getRequest http hackage.haskell.org",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "simpleHTTP",
          "normalized": "Request a-\u003eIO(Result(Response a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "Request ty-\u003eIO(Result(Response ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:simpleHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e, but acting on an already opened stream.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "simpleHTTP_",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e Request ty -\u003e IO (Result (Response ty))",
          "source": "src/Network-HTTP.html#simpleHTTP_",
          "type": "function"
        },
        "index": {
          "description": "Identical to simpleHTTP but acting on an already opened stream",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "simpleHTTP_",
          "normalized": "HandleStream a-\u003eRequest a-\u003eIO(Result(Response a))",
          "package": "HTTP",
          "partial": "HTTP",
          "signature": "HandleStream ty-\u003eRequest ty-\u003eIO(Result(Response ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-HTTP.html#v:simpleHTTP_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn library for creating abstract streams. Originally part of Gray's\\/Bringert's\n HTTP module.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Changes by Robin Bate Boerop \u003ca\u003erobin@bateboerop.name\u003c/a\u003e:\n      - Removed unnecessary import statements.\n      - Moved Debug code to StreamDebugger.hs\n      - Moved Socket-related code to StreamSocket.hs.\n\u003c/li\u003e\u003cli\u003e Changes by Simon Foster:\n      - Split Network.HTTPmodule up into to separate\n        Network.[Stream,TCP,HTTP] modules\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Network.Stream",
          "name": "Stream",
          "package": "HTTP",
          "source": "src/Network-Stream.html",
          "type": "module"
        },
        "index": {
          "description": "An library for creating abstract streams Originally part of Gray Bringert HTTP module Changes by Robin Bate Boerop robin@bateboerop.name Removed unnecessary import statements Moved Debug code to StreamDebugger.hs Moved Socket-related code to StreamSocket.hs Changes by Simon Foster Split Network.HTTPmodule up into to separate Network Stream TCP HTTP modules",
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "Stream",
          "package": "HTTP",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "ConnError",
          "package": "HTTP",
          "source": "src/Network-Stream.html#ConnError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "ConnError",
          "package": "HTTP",
          "partial": "Conn Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#t:ConnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the type returned by many exported network functions.\n\u003c/p\u003e",
          "module": "Network.Stream",
          "name": "Result",
          "package": "HTTP",
          "source": "src/Network-Stream.html#Result",
          "type": "type"
        },
        "index": {
          "description": "This is the type returned by many exported network functions",
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "Result",
          "package": "HTTP",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStreams should make layering of TLS protocol easier in future,\n they allow reading/writing to files etc for debugging,\n they allow use of protocols other than TCP/IP\n and they allow customisation.\n\u003c/p\u003e\u003cp\u003eInstances of this class should not trim\n the input in any way, e.g. leave LF on line\n endings etc. Unless that is exactly the behaviour\n you want from your twisted instances ;)\n\u003c/p\u003e",
          "module": "Network.Stream",
          "name": "Stream",
          "package": "HTTP",
          "source": "src/Network-Stream.html#Stream",
          "type": "class"
        },
        "index": {
          "description": "Streams should make layering of TLS protocol easier in future they allow reading writing to files etc for debugging they allow use of protocols other than TCP IP and they allow customisation Instances of this class should not trim the input in any way e.g leave LF on line endings etc Unless that is exactly the behaviour you want from your twisted instances",
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "Stream",
          "package": "HTTP",
          "partial": "Stream",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "ErrorClosed",
          "package": "HTTP",
          "signature": "ErrorClosed",
          "source": "src/Network-Stream.html#ConnError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "ErrorClosed",
          "package": "HTTP",
          "partial": "Error Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:ErrorClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "ErrorMisc",
          "package": "HTTP",
          "signature": "ErrorMisc String",
          "source": "src/Network-Stream.html#ConnError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "ErrorMisc",
          "package": "HTTP",
          "partial": "Error Misc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:ErrorMisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "ErrorParse",
          "package": "HTTP",
          "signature": "ErrorParse String",
          "source": "src/Network-Stream.html#ConnError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "ErrorParse",
          "package": "HTTP",
          "partial": "Error Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:ErrorParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "ErrorReset",
          "package": "HTTP",
          "signature": "ErrorReset",
          "source": "src/Network-Stream.html#ConnError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "ErrorReset",
          "package": "HTTP",
          "partial": "Error Reset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:ErrorReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "bindE",
          "package": "HTTP",
          "signature": "Result a -\u003e (a -\u003e Result b) -\u003e Result b",
          "source": "src/Network-Stream.html#bindE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "bindE",
          "normalized": "Result a-\u003e(a-\u003eResult b)-\u003eResult b",
          "package": "HTTP",
          "signature": "Result a-\u003e(a-\u003eResult b)-\u003eResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:bindE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "close",
          "package": "HTTP",
          "signature": "x -\u003e IO ()",
          "source": "src/Network-Stream.html#close",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "close",
          "normalized": "a-\u003eIO()",
          "package": "HTTP",
          "signature": "x-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "closeOnEnd",
          "package": "HTTP",
          "signature": "closeOnEnd",
          "source": "src/Network-Stream.html#closeOnEnd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "closeOnEnd",
          "package": "HTTP",
          "partial": "On End",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:closeOnEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "failMisc",
          "package": "HTTP",
          "signature": "String -\u003e Result a",
          "source": "src/Network-Stream.html#failMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "failMisc",
          "normalized": "String-\u003eResult a",
          "package": "HTTP",
          "partial": "Misc",
          "signature": "String-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:failMisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "failParse",
          "package": "HTTP",
          "signature": "String -\u003e Result a",
          "source": "src/Network-Stream.html#failParse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "failParse",
          "normalized": "String-\u003eResult a",
          "package": "HTTP",
          "partial": "Parse",
          "signature": "String-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:failParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "failWith",
          "package": "HTTP",
          "signature": "ConnError -\u003e Result a",
          "source": "src/Network-Stream.html#failWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "failWith",
          "normalized": "ConnError-\u003eResult a",
          "package": "HTTP",
          "partial": "With",
          "signature": "ConnError-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:failWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "fmapE",
          "package": "HTTP",
          "signature": "(a -\u003e Result b) -\u003e IO (Result a) -\u003e IO (Result b)",
          "source": "src/Network-Stream.html#fmapE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "fmapE",
          "normalized": "(a-\u003eResult b)-\u003eIO(Result a)-\u003eIO(Result b)",
          "package": "HTTP",
          "signature": "(a-\u003eResult b)-\u003eIO(Result a)-\u003eIO(Result b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:fmapE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "readBlock",
          "package": "HTTP",
          "signature": "x -\u003e Int -\u003e IO (Result String)",
          "source": "src/Network-Stream.html#readBlock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "readBlock",
          "normalized": "a-\u003eInt-\u003eIO(Result String)",
          "package": "HTTP",
          "partial": "Block",
          "signature": "x-\u003eInt-\u003eIO(Result String)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:readBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "readLine",
          "package": "HTTP",
          "signature": "x -\u003e IO (Result String)",
          "source": "src/Network-Stream.html#readLine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "readLine",
          "normalized": "a-\u003eIO(Result String)",
          "package": "HTTP",
          "partial": "Line",
          "signature": "x-\u003eIO(Result String)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:readLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stream",
          "name": "writeBlock",
          "package": "HTTP",
          "signature": "x -\u003e String -\u003e IO (Result ())",
          "source": "src/Network-Stream.html#writeBlock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Stream",
          "module": "Network.Stream",
          "name": "writeBlock",
          "normalized": "a-\u003eString-\u003eIO(Result())",
          "package": "HTTP",
          "partial": "Block",
          "signature": "x-\u003eString-\u003eIO(Result())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-Stream.html#v:writeBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements debugging of \u003ccode\u003eStream\u003c/code\u003es.  Originally part of Gray's\\/Bringert's\n HTTP module.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Changes by Robin Bate Boerop \u003ca\u003erobin@bateboerop.name\u003c/a\u003e:\n      - Created.  Made minor formatting changes.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Network.StreamDebugger",
          "name": "StreamDebugger",
          "package": "HTTP",
          "source": "src/Network-StreamDebugger.html",
          "type": "module"
        },
        "index": {
          "description": "Implements debugging of Stream Originally part of Gray Bringert HTTP module Changes by Robin Bate Boerop robin@bateboerop.name Created Made minor formatting changes",
          "hierarchy": "Network StreamDebugger",
          "module": "Network.StreamDebugger",
          "name": "StreamDebugger",
          "package": "HTTP",
          "partial": "Stream Debugger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamDebugger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows stream logging.  Refer to \u003ccode\u003e\u003ca\u003edebugStream\u003c/a\u003e\u003c/code\u003e below.\n\u003c/p\u003e",
          "module": "Network.StreamDebugger",
          "name": "StreamDebugger",
          "package": "HTTP",
          "source": "src/Network-StreamDebugger.html#StreamDebugger",
          "type": "data"
        },
        "index": {
          "description": "Allows stream logging Refer to debugStream below",
          "hierarchy": "Network StreamDebugger",
          "module": "Network.StreamDebugger",
          "name": "StreamDebugger",
          "package": "HTTP",
          "partial": "Stream Debugger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamDebugger.html#t:StreamDebugger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StreamDebugger",
          "name": "debugByteStream",
          "package": "HTTP",
          "signature": "FilePath -\u003e HandleStream ty -\u003e IO (HandleStream ty)",
          "source": "src/Network-StreamDebugger.html#debugByteStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StreamDebugger",
          "module": "Network.StreamDebugger",
          "name": "debugByteStream",
          "normalized": "FilePath-\u003eHandleStream a-\u003eIO(HandleStream a)",
          "package": "HTTP",
          "partial": "Byte Stream",
          "signature": "FilePath-\u003eHandleStream ty-\u003eIO(HandleStream ty)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamDebugger.html#v:debugByteStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a stream with logging I/O.\n   The first argument is a filename which is opened in \u003ccode\u003eAppendMode\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.StreamDebugger",
          "name": "debugStream",
          "package": "HTTP",
          "signature": "FilePath -\u003e a -\u003e IO (StreamDebugger a)",
          "source": "src/Network-StreamDebugger.html#debugStream",
          "type": "function"
        },
        "index": {
          "description": "Wraps stream with logging The first argument is filename which is opened in AppendMode",
          "hierarchy": "Network StreamDebugger",
          "module": "Network.StreamDebugger",
          "name": "debugStream",
          "normalized": "FilePath-\u003ea-\u003eIO(StreamDebugger a)",
          "package": "HTTP",
          "partial": "Stream",
          "signature": "FilePath-\u003ea-\u003eIO(StreamDebugger a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamDebugger.html#v:debugStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSocket Stream instance. Originally part of Gray's\\/Bringert's HTTP module.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Changes by Robin Bate Boerop \u003ca\u003erobin@bateboerop.name\u003c/a\u003e:\n      - Made dependencies explicit in import statements.\n      - Removed false dependencies in import statements.\n      - Created separate module for instance Stream Socket.\n\u003c/li\u003e\u003cli\u003e Changes by Simon Foster:\n      - Split module up into to sepearate Network.[Stream,TCP,HTTP] modules\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Network.StreamSocket",
          "name": "StreamSocket",
          "package": "HTTP",
          "source": "src/Network-StreamSocket.html",
          "type": "module"
        },
        "index": {
          "description": "Socket Stream instance Originally part of Gray Bringert HTTP module Changes by Robin Bate Boerop robin@bateboerop.name Made dependencies explicit in import statements Removed false dependencies in import statements Created separate module for instance Stream Socket Changes by Simon Foster Split module up into to sepearate Network Stream TCP HTTP modules",
          "hierarchy": "Network StreamSocket",
          "module": "Network.StreamSocket",
          "name": "StreamSocket",
          "package": "HTTP",
          "partial": "Stream Socket",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamSocket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handler for socket operations.\n\u003c/p\u003e",
          "module": "Network.StreamSocket",
          "name": "handleSocketError",
          "package": "HTTP",
          "signature": "Socket -\u003e IOException -\u003e IO (Result a)",
          "source": "src/Network-StreamSocket.html#handleSocketError",
          "type": "function"
        },
        "index": {
          "description": "Exception handler for socket operations",
          "hierarchy": "Network StreamSocket",
          "module": "Network.StreamSocket",
          "name": "handleSocketError",
          "normalized": "Socket-\u003eIOException-\u003eIO(Result a)",
          "package": "HTTP",
          "partial": "Socket Error",
          "signature": "Socket-\u003eIOException-\u003eIO(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamSocket.html#v:handleSocketError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StreamSocket",
          "name": "myrecv",
          "package": "HTTP",
          "signature": "Socket -\u003e Int -\u003e IO String",
          "source": "src/Network-StreamSocket.html#myrecv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StreamSocket",
          "module": "Network.StreamSocket",
          "name": "myrecv",
          "normalized": "Socket-\u003eInt-\u003eIO String",
          "package": "HTTP",
          "signature": "Socket-\u003eInt-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-StreamSocket.html#v:myrecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome utility functions for working with the Haskell \u003ccode\u003enetwork\u003c/code\u003e package. Mostly\n for internal use by the \u003ccode\u003eNetwork.HTTP\u003c/code\u003e code, but \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TCP",
          "name": "TCP",
          "package": "HTTP",
          "source": "src/Network-TCP.html",
          "type": "module"
        },
        "index": {
          "description": "Some utility functions for working with the Haskell network package Mostly for internal use by the Network.HTTP code but",
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "TCP",
          "package": "HTTP",
          "partial": "TCP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e newtype is a wrapper that allows us to make\n connections an instance of the Stream class, without GHC extensions.\n While this looks sort of like a generic reference to the transport\n layer it is actually TCP specific, which can be seen in the\n implementation of the 'Stream Connection' instance.\n\u003c/p\u003e",
          "module": "Network.TCP",
          "name": "Connection",
          "package": "HTTP",
          "source": "src/Network-TCP.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "The Connection newtype is wrapper that allows us to make connections an instance of the Stream class without GHC extensions While this looks sort of like generic reference to the transport layer it is actually TCP specific which can be seen in the implementation of the Stream Connection instance",
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "Connection",
          "package": "HTTP",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "EndPoint",
          "package": "HTTP",
          "source": "src/Network-TCP.html#EndPoint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "EndPoint",
          "package": "HTTP",
          "partial": "End Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#t:EndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eHStream\u003c/code\u003e overloads the use of \u003ccode\u003e\u003ca\u003eHandleStream\u003c/a\u003e\u003c/code\u003es, letting you\n overload the handle operations over the type that is communicated\n across the handle. It comes in handy for \u003ccode\u003eNetwork.HTTP\u003c/code\u003e \u003ccode\u003eRequest\u003c/code\u003e\n and \u003ccode\u003eResponse\u003c/code\u003es as the payload representation isn't fixed, but overloaded.\n\u003c/p\u003e\u003cp\u003eThe library comes with instances for \u003ccode\u003eByteString\u003c/code\u003es and \u003ccode\u003eString\u003c/code\u003e, but\n should you want to plug in your own payload representation, defining\n your own \u003ccode\u003eHStream\u003c/code\u003e instance _should_ be all that it takes.\n\u003c/p\u003e",
          "module": "Network.TCP",
          "name": "HStream",
          "package": "HTTP",
          "source": "src/Network-TCP.html#HStream",
          "type": "class"
        },
        "index": {
          "description": "HStream overloads the use of HandleStream letting you overload the handle operations over the type that is communicated across the handle It comes in handy for Network.HTTP Request and Response as the payload representation isn fixed but overloaded The library comes with instances for ByteString and String but should you want to plug in your own payload representation defining your own HStream instance should be all that it takes",
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "HStream",
          "package": "HTTP",
          "partial": "HStream",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#t:HStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "HandleStream",
          "package": "HTTP",
          "source": "src/Network-TCP.html#HandleStream",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "HandleStream",
          "package": "HTTP",
          "partial": "Handle Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#t:HandleStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "StreamHooks",
          "package": "HTTP",
          "source": "src/Network-TCP.html#StreamHooks",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "StreamHooks",
          "package": "HTTP",
          "partial": "Stream Hooks",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#t:StreamHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "EndPoint",
          "package": "HTTP",
          "signature": "EndPoint",
          "source": "src/Network-TCP.html#EndPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "EndPoint",
          "package": "HTTP",
          "partial": "End Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:EndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "StreamHooks",
          "package": "HTTP",
          "signature": "StreamHooks",
          "source": "src/Network-TCP.html#StreamHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "StreamHooks",
          "package": "HTTP",
          "partial": "Stream Hooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:StreamHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "close",
          "package": "HTTP",
          "signature": "HandleStream bufType -\u003e IO ()",
          "source": "src/Network-TCP.html#close",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "close",
          "normalized": "HandleStream a-\u003eIO()",
          "package": "HTTP",
          "signature": "HandleStream bufType-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "closeOnEnd",
          "package": "HTTP",
          "signature": "HandleStream bufType -\u003e Bool -\u003e IO ()",
          "source": "src/Network-TCP.html#closeOnEnd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "closeOnEnd",
          "normalized": "HandleStream a-\u003eBool-\u003eIO()",
          "package": "HTTP",
          "partial": "On End",
          "signature": "HandleStream bufType-\u003eBool-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:closeOnEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "closeQuick",
          "package": "HTTP",
          "signature": "HandleStream bufType -\u003e IO ()",
          "source": "src/Network-TCP.html#closeQuick",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "closeQuick",
          "normalized": "HandleStream a-\u003eIO()",
          "package": "HTTP",
          "partial": "Quick",
          "signature": "HandleStream bufType-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:closeQuick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "epHost",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-TCP.html#EndPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "epHost",
          "package": "HTTP",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:epHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "epPort",
          "package": "HTTP",
          "signature": "Int",
          "source": "src/Network-TCP.html#EndPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "epPort",
          "package": "HTTP",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:epPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "getStreamHooks",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e IO (Maybe (StreamHooks ty))",
          "source": "src/Network-TCP.html#getStreamHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "getStreamHooks",
          "normalized": "HandleStream a-\u003eIO(Maybe(StreamHooks a))",
          "package": "HTTP",
          "partial": "Stream Hooks",
          "signature": "HandleStream ty-\u003eIO(Maybe(StreamHooks ty))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:getStreamHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "hook_close",
          "package": "HTTP",
          "signature": "IO ()",
          "source": "src/Network-TCP.html#StreamHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "hook_close",
          "normalized": "IO()",
          "package": "HTTP",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hook_close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "hook_name",
          "package": "HTTP",
          "signature": "String",
          "source": "src/Network-TCP.html#StreamHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "hook_name",
          "package": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hook_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "hook_readBlock",
          "package": "HTTP",
          "signature": "(ty -\u003e String) -\u003e Int -\u003e Result ty -\u003e IO ()",
          "source": "src/Network-TCP.html#StreamHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "hook_readBlock",
          "normalized": "(a-\u003eString)-\u003eInt-\u003eResult a-\u003eIO()",
          "package": "HTTP",
          "partial": "Block",
          "signature": "(ty-\u003eString)-\u003eInt-\u003eResult ty-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hook_readBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "hook_readLine",
          "package": "HTTP",
          "signature": "(ty -\u003e String) -\u003e Result ty -\u003e IO ()",
          "source": "src/Network-TCP.html#StreamHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "hook_readLine",
          "normalized": "(a-\u003eString)-\u003eResult a-\u003eIO()",
          "package": "HTTP",
          "partial": "Line",
          "signature": "(ty-\u003eString)-\u003eResult ty-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hook_readLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "hook_writeBlock",
          "package": "HTTP",
          "signature": "(ty -\u003e String) -\u003e ty -\u003e Result () -\u003e IO ()",
          "source": "src/Network-TCP.html#StreamHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "hook_writeBlock",
          "normalized": "(a-\u003eString)-\u003ea-\u003eResult()-\u003eIO()",
          "package": "HTTP",
          "partial": "Block",
          "signature": "(ty-\u003eString)-\u003ety-\u003eResult()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hook_writeBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "hstreamToConnection",
          "package": "HTTP",
          "signature": "HandleStream String -\u003e Connection",
          "source": "src/Network-TCP.html#hstreamToConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "hstreamToConnection",
          "normalized": "HandleStream String-\u003eConnection",
          "package": "HTTP",
          "partial": "To Connection",
          "signature": "HandleStream String-\u003eConnection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:hstreamToConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks both that the underlying Socket is connected\n and that the connection peer matches the given\n host name (which is recorded locally).\n\u003c/p\u003e",
          "module": "Network.TCP",
          "name": "isConnectedTo",
          "package": "HTTP",
          "signature": "Connection -\u003e EndPoint -\u003e IO Bool",
          "source": "src/Network-TCP.html#isConnectedTo",
          "type": "function"
        },
        "index": {
          "description": "Checks both that the underlying Socket is connected and that the connection peer matches the given host name which is recorded locally",
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "isConnectedTo",
          "normalized": "Connection-\u003eEndPoint-\u003eIO Bool",
          "package": "HTTP",
          "partial": "Connected To",
          "signature": "Connection-\u003eEndPoint-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:isConnectedTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "isTCPConnectedTo",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e EndPoint -\u003e IO Bool",
          "source": "src/Network-TCP.html#isTCPConnectedTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "isTCPConnectedTo",
          "normalized": "HandleStream a-\u003eEndPoint-\u003eIO Bool",
          "package": "HTTP",
          "partial": "TCPConnected To",
          "signature": "HandleStream ty-\u003eEndPoint-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:isTCPConnectedTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "nullHooks",
          "package": "HTTP",
          "signature": "StreamHooks ty",
          "source": "src/Network-TCP.html#nullHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "nullHooks",
          "package": "HTTP",
          "partial": "Hooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:nullHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "openSocketStream",
          "package": "HTTP",
          "signature": "String -\u003e Int -\u003e Socket -\u003e IO (HandleStream bufType)",
          "source": "src/Network-TCP.html#openSocketStream",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "openSocketStream",
          "normalized": "String-\u003eInt-\u003eSocket-\u003eIO(HandleStream a)",
          "package": "HTTP",
          "partial": "Socket Stream",
          "signature": "String-\u003eInt-\u003eSocket-\u003eIO(HandleStream bufType)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:openSocketStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "openStream",
          "package": "HTTP",
          "signature": "String -\u003e Int -\u003e IO (HandleStream bufType)",
          "source": "src/Network-TCP.html#openStream",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "openStream",
          "normalized": "String-\u003eInt-\u003eIO(HandleStream a)",
          "package": "HTTP",
          "partial": "Stream",
          "signature": "String-\u003eInt-\u003eIO(HandleStream bufType)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:openStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "openTCPConnection",
          "package": "HTTP",
          "signature": "String -\u003e Int -\u003e IO (HandleStream ty)",
          "source": "src/Network-TCP.html#openTCPConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "openTCPConnection",
          "normalized": "String-\u003eInt-\u003eIO(HandleStream a)",
          "package": "HTTP",
          "partial": "TCPConnection",
          "signature": "String-\u003eInt-\u003eIO(HandleStream ty)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:openTCPConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenTCPPort uri port\u003c/code\u003e  establishes a connection to a remote\n host, using \u003ccode\u003e\u003ca\u003egetHostByName\u003c/a\u003e\u003c/code\u003e which possibly queries the DNS system, hence \n may trigger a network connection.\n\u003c/p\u003e",
          "module": "Network.TCP",
          "name": "openTCPPort",
          "package": "HTTP",
          "signature": "String -\u003e Int -\u003e IO Connection",
          "source": "src/Network-TCP.html#openTCPPort",
          "type": "function"
        },
        "index": {
          "description": "openTCPPort uri port establishes connection to remote host using getHostByName which possibly queries the DNS system hence may trigger network connection",
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "openTCPPort",
          "normalized": "String-\u003eInt-\u003eIO Connection",
          "package": "HTTP",
          "partial": "TCPPort",
          "signature": "String-\u003eInt-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:openTCPPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "readBlock",
          "package": "HTTP",
          "signature": "HandleStream bufType -\u003e Int -\u003e IO (Result bufType)",
          "source": "src/Network-TCP.html#readBlock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "readBlock",
          "normalized": "HandleStream a-\u003eInt-\u003eIO(Result a)",
          "package": "HTTP",
          "partial": "Block",
          "signature": "HandleStream bufType-\u003eInt-\u003eIO(Result bufType)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:readBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "readLine",
          "package": "HTTP",
          "signature": "HandleStream bufType -\u003e IO (Result bufType)",
          "source": "src/Network-TCP.html#readLine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "readLine",
          "normalized": "HandleStream a-\u003eIO(Result a)",
          "package": "HTTP",
          "partial": "Line",
          "signature": "HandleStream bufType-\u003eIO(Result bufType)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:readLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "setStreamHooks",
          "package": "HTTP",
          "signature": "HandleStream ty -\u003e StreamHooks ty -\u003e IO ()",
          "source": "src/Network-TCP.html#setStreamHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "setStreamHooks",
          "normalized": "HandleStream a-\u003eStreamHooks a-\u003eIO()",
          "package": "HTTP",
          "partial": "Stream Hooks",
          "signature": "HandleStream ty-\u003eStreamHooks ty-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:setStreamHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esocketConnection\u003c/code\u003e, like \u003ccode\u003eopenConnection\u003c/code\u003e but using a pre-existing \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.TCP",
          "name": "socketConnection",
          "package": "HTTP",
          "signature": "String -\u003e Int -\u003e Socket -\u003e IO (HandleStream ty)",
          "source": "src/Network-TCP.html#socketConnection",
          "type": "function"
        },
        "index": {
          "description": "socketConnection like openConnection but using pre-existing Socket",
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "socketConnection",
          "normalized": "String-\u003eInt-\u003eSocket-\u003eIO(HandleStream a)",
          "package": "HTTP",
          "partial": "Connection",
          "signature": "String-\u003eInt-\u003eSocket-\u003eIO(HandleStream ty)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:socketConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP",
          "name": "writeBlock",
          "package": "HTTP",
          "signature": "HandleStream bufType -\u003e bufType -\u003e IO (Result ())",
          "source": "src/Network-TCP.html#writeBlock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP",
          "module": "Network.TCP",
          "name": "writeBlock",
          "normalized": "HandleStream a-\u003ea-\u003eIO(Result())",
          "package": "HTTP",
          "partial": "Block",
          "signature": "HandleStream bufType-\u003ebufType-\u003eIO(Result())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HTTP/docs/Network-TCP.html#v:writeBlock"
      }
    }
  ]
]