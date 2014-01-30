[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is designed to work similarly to the Network.Browser module in the HTTP package.\n The idea is that there are two new types defined: \u003ccode\u003e\u003ca\u003eBrowserState\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBrowserAction\u003c/a\u003e\u003c/code\u003e. The\n purpose of this module is to make it easy to describe a browsing session, including navigating\n to multiple pages, and have things like cookie jar updates work as expected as you browse\n around.\n\u003c/p\u003e\u003cp\u003eBrowserAction is a monad that handles all your browser-related activities. This monad is\n actually implemented as a specialization of the State monad, over the BrowserState type. The\n BrowserState type has various bits of information that a web browser keeps, such as a current\n cookie jar, the number of times to retry a request on failure, HTTP proxy information, etc. In\n the BrowserAction monad, there is one BrowserState at any given time, and you can modify it by\n using the convenience functions in this module.\n\u003c/p\u003e\u003cp\u003eA special kind of modification of the current browser state is the action of making a HTTP\n request. This will do the request according to the params in the current BrowserState, as well\n as modifying the current state with, for example, an updated cookie jar and location.\n\u003c/p\u003e\u003cp\u003eTo use this module, you would bind together a series of BrowserActions (This simulates the user\n clicking on links or using a settings dialogue etc.) to describe your browsing session. When\n you've described your session, you call \u003ccode\u003e\u003ca\u003ebrowse\u003c/a\u003e\u003c/code\u003e on your top-level BrowserAction to actually\n convert your actions into the ResourceT IO monad.\n\u003c/p\u003e\u003cp\u003eHere is an example program:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import qualified Data.ByteString.Lazy as LB\n import qualified Data.Text.Encoding as TE\n import qualified Data.Text.Lazy.Encoding as TLE\n import qualified Data.Text.Lazy.IO as TLIO\n import           Data.Conduit\n import           Network.HTTP.Conduit\n import           Network.HTTP.Conduit.Browser\n\n -- The web request to log in to a service\n req1 :: IO (Request (ResourceT IO))\n req1 = do\n   req \u003c- parseUrl \"http://www.myurl.com/login.php\"\n   return $ urlEncodedBody [ (TE.encodeUtf8 \"name\", TE.encodeUtf8 \"litherum\")\n                           , (TE.encodeUtf8 \"pass\", TE.encodeUtf8 \"S33kRe7\")\n                           ] req\n\n -- Once authenticated, run this request\n req2 :: IO (Request m')\n req2 = parseUrl \"http://www.myurl.com/main.php\"\n\n -- Bind two BrowserActions together\n action :: Request (ResourceT IO) -\u003e Request (ResourceT IO) -\u003e BrowserAction (Response LB.ByteString)\n action r1 r2 = do\n   _ \u003c- makeRequestLbs r1\n   makeRequestLbs r2\n\n main :: IO ()\n main = do\n   man \u003c- newManager def\n   r1 \u003c- req1\n   r2 \u003c- req2\n   out \u003c- runResourceT $ browse man $ do\n     setDefaultHeader \"User-Agent\" $ Just \"A very popular browser\"\n     action r1 r2\n   TLIO.putStrLn $ TLE.decodeUtf8 $ responseBody out\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html",
        "fct-type": "module",
        "title": "Browser"
      },
      "index": {
        "description": "This module is designed to work similarly to the Network.Browser module in the HTTP package The idea is that there are two new types defined BrowserState and BrowserAction The purpose of this module is to make it easy to describe browsing session including navigating to multiple pages and have things like cookie jar updates work as expected as you browse around BrowserAction is monad that handles all your browser-related activities This monad is actually implemented as specialization of the State monad over the BrowserState type The BrowserState type has various bits of information that web browser keeps such as current cookie jar the number of times to retry request on failure HTTP proxy information etc In the BrowserAction monad there is one BrowserState at any given time and you can modify it by using the convenience functions in this module special kind of modification of the current browser state is the action of making HTTP request This will do the request according to the params in the current BrowserState as well as modifying the current state with for example an updated cookie jar and location To use this module you would bind together series of BrowserActions This simulates the user clicking on links or using settings dialogue etc to describe your browsing session When you ve described your session you call browse on your top-level BrowserAction to actually convert your actions into the ResourceT IO monad Here is an example program LANGUAGE OverloadedStrings import qualified Data.ByteString.Lazy as LB import qualified Data.Text.Encoding as TE import qualified Data.Text.Lazy.Encoding as TLE import qualified Data.Text.Lazy.IO as TLIO import Data.Conduit import Network.HTTP.Conduit import Network.HTTP.Conduit.Browser The web request to log in to service req1 IO Request ResourceT IO req1 do req parseUrl http www.myurl.com login.php return urlEncodedBody TE.encodeUtf8 name TE.encodeUtf8 litherum TE.encodeUtf8 pass TE.encodeUtf8 S33kRe7 req Once authenticated run this request req2 IO Request req2 parseUrl http www.myurl.com main.php Bind two BrowserActions together action Request ResourceT IO Request ResourceT IO BrowserAction Response LB.ByteString action r1 r2 do makeRequestLbs r1 makeRequestLbs r2 main IO main do man newManager def r1 req1 r2 req2 out runResourceT browse man do setDefaultHeader User-Agent Just very popular browser action r1 r2 TLIO.putStrLn TLE.decodeUtf8 responseBody out",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "Browser",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Browser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#t:BrowserAction",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#BrowserAction",
        "fct-type": "type",
        "title": "BrowserAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "BrowserAction",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Browser Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#t:BrowserState",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#BrowserState",
        "fct-type": "data",
        "title": "BrowserState"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "BrowserState",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Browser State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#t:GenericBrowserAction",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#GenericBrowserAction",
        "fct-type": "type",
        "title": "GenericBrowserAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "GenericBrowserAction",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Generic Browser Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:browse",
      "description": {
        "fct-descr": "\u003cp\u003eDo the browser action with the given manager\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Manager -\u003e GenericBrowserAction m a -\u003e m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#browse",
        "fct-type": "function",
        "title": "browse"
      },
      "index": {
        "description": "Do the browser action with the given manager",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "browse",
        "normalized": "Manager-\u003eGenericBrowserAction a b-\u003ea b",
        "package": "http-conduit-browser",
        "partial": "",
        "signature": "Manager-\u003eGenericBrowserAction m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:defaultState",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Manager -\u003e BrowserState",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#defaultState",
        "fct-type": "function",
        "title": "defaultState"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "defaultState",
        "normalized": "Manager-\u003eBrowserState",
        "package": "http-conduit-browser",
        "partial": "State",
        "signature": "Manager-\u003eBrowserState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:deleteDefaultHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "HeaderName -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#deleteDefaultHeader",
        "fct-type": "function",
        "title": "deleteDefaultHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "deleteDefaultHeader",
        "normalized": "HeaderName-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Default Header",
        "signature": "HeaderName-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:deleteOverrideHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "HeaderName -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#deleteOverrideHeader",
        "fct-type": "function",
        "title": "deleteOverrideHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "deleteOverrideHeader",
        "normalized": "HeaderName-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Override Header",
        "signature": "HeaderName-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:downloadFile",
      "description": {
        "fct-descr": "\u003cp\u003eMake a request and sink the \u003ccode\u003e\u003ca\u003eresponseBody\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "FilePath -\u003e Request (ResourceT IO) -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#downloadFile",
        "fct-type": "function",
        "title": "downloadFile"
      },
      "index": {
        "description": "Make request and sink the responseBody to file",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "downloadFile",
        "normalized": "FilePath-\u003eRequest(ResourceT IO)-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "File",
        "signature": "FilePath-\u003eRequest(ResourceT IO)-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getAuthorities",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m (Request (ResourceT IO) -\u003e Maybe (ByteString, ByteString))",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getAuthorities",
        "fct-type": "function",
        "title": "getAuthorities"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getAuthorities",
        "normalized": "GenericBrowserAction a(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))",
        "package": "http-conduit-browser",
        "partial": "Authorities",
        "signature": "GenericBrowserAction m(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getBrowserState",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m BrowserState",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getBrowserState",
        "fct-type": "function",
        "title": "getBrowserState"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getBrowserState",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Browser State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getCheckStatus",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m (Maybe (Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException))",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getCheckStatus",
        "fct-type": "function",
        "title": "getCheckStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getCheckStatus",
        "normalized": "GenericBrowserAction a(Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException))",
        "package": "http-conduit-browser",
        "partial": "Check Status",
        "signature": "GenericBrowserAction m(Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getClientCertificates",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m (Maybe [(X509, Maybe PrivateKey)])",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getClientCertificates",
        "fct-type": "function",
        "title": "getClientCertificates"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getClientCertificates",
        "normalized": "GenericBrowserAction a(Maybe[(X,Maybe PrivateKey)])",
        "package": "http-conduit-browser",
        "partial": "Client Certificates",
        "signature": "GenericBrowserAction m(Maybe[(X,Maybe PrivateKey)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getCookieFilter",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m (Request (ResourceT IO) -\u003e Cookie -\u003e IO Bool)",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getCookieFilter",
        "fct-type": "function",
        "title": "getCookieFilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getCookieFilter",
        "normalized": "GenericBrowserAction a(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)",
        "package": "http-conduit-browser",
        "partial": "Cookie Filter",
        "signature": "GenericBrowserAction m(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getCookieJar",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m CookieJar",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getCookieJar",
        "fct-type": "function",
        "title": "getCookieJar"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getCookieJar",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Cookie Jar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getCurrentProxy",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m (Maybe Proxy)",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getCurrentProxy",
        "fct-type": "function",
        "title": "getCurrentProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getCurrentProxy",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Current Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getCurrentSocksProxy",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m (Maybe SocksConf)",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getCurrentSocksProxy",
        "fct-type": "function",
        "title": "getCurrentSocksProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getCurrentSocksProxy",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Current Socks Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getDefaultHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "HeaderName -\u003e GenericBrowserAction m (Maybe ByteString)",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getDefaultHeader",
        "fct-type": "function",
        "title": "getDefaultHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getDefaultHeader",
        "normalized": "HeaderName-\u003eGenericBrowserAction a(Maybe ByteString)",
        "package": "http-conduit-browser",
        "partial": "Default Header",
        "signature": "HeaderName-\u003eGenericBrowserAction m(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getDefaultHeaders",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m RequestHeaders",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getDefaultHeaders",
        "fct-type": "function",
        "title": "getDefaultHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getDefaultHeaders",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Default Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getLocation",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m (Maybe URI)",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getLocation",
        "fct-type": "function",
        "title": "getLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getLocation",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getManager",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m Manager",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getManager",
        "fct-type": "function",
        "title": "getManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getManager",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getMaxRedirects",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m (Maybe Int)",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getMaxRedirects",
        "fct-type": "function",
        "title": "getMaxRedirects"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getMaxRedirects",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Max Redirects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getMaxRetryCount",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m Int",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getMaxRetryCount",
        "fct-type": "function",
        "title": "getMaxRetryCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getMaxRetryCount",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Max Retry Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getOverrideHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "HeaderName -\u003e GenericBrowserAction m (Maybe ByteString)",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getOverrideHeader",
        "fct-type": "function",
        "title": "getOverrideHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getOverrideHeader",
        "normalized": "HeaderName-\u003eGenericBrowserAction a(Maybe ByteString)",
        "package": "http-conduit-browser",
        "partial": "Override Header",
        "signature": "HeaderName-\u003eGenericBrowserAction m(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getOverrideHeaders",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m RequestHeaders",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getOverrideHeaders",
        "fct-type": "function",
        "title": "getOverrideHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getOverrideHeaders",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Override Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getTimeout",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "GenericBrowserAction m (Maybe Int)",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#getTimeout",
        "fct-type": "function",
        "title": "getTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "getTimeout",
        "normalized": "",
        "package": "http-conduit-browser",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:insertDefaultHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Header -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#insertDefaultHeader",
        "fct-type": "function",
        "title": "insertDefaultHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "insertDefaultHeader",
        "normalized": "Header-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Default Header",
        "signature": "Header-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:insertOverrideHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Header -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#insertOverrideHeader",
        "fct-type": "function",
        "title": "insertOverrideHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "insertOverrideHeader",
        "normalized": "Header-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Override Header",
        "signature": "Header-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:makeRequest",
      "description": {
        "fct-descr": "\u003cp\u003eMake a request, using all the state in the current BrowserState\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Request (ResourceT IO) -\u003e GenericBrowserAction m (Response (ResumableSource (ResourceT IO) ByteString))",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#makeRequest",
        "fct-type": "function",
        "title": "makeRequest"
      },
      "index": {
        "description": "Make request using all the state in the current BrowserState",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "makeRequest",
        "normalized": "Request(ResourceT IO)-\u003eGenericBrowserAction a(Response(ResumableSource(ResourceT IO)ByteString))",
        "package": "http-conduit-browser",
        "partial": "Request",
        "signature": "Request(ResourceT IO)-\u003eGenericBrowserAction m(Response(ResumableSource(ResourceT IO)ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:makeRequestLbs",
      "description": {
        "fct-descr": "\u003cp\u003eMake a request and pack the result as a lazy bytestring.\n\u003c/p\u003e\u003cp\u003eNote: Even though this function returns a lazy bytestring, it does not\n utilize lazy I/O, and therefore the entire response body will live in memory.\n If you want constant memory usage, you'll need to use the conduit package and\n \u003ccode\u003e\u003ca\u003emakeRequest\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Request (ResourceT IO) -\u003e GenericBrowserAction m (Response ByteString)",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#makeRequestLbs",
        "fct-type": "function",
        "title": "makeRequestLbs"
      },
      "index": {
        "description": "Make request and pack the result as lazy bytestring Note Even though this function returns lazy bytestring it does not utilize lazy and therefore the entire response body will live in memory If you want constant memory usage you ll need to use the conduit package and makeRequest directly",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "makeRequestLbs",
        "normalized": "Request(ResourceT IO)-\u003eGenericBrowserAction a(Response ByteString)",
        "package": "http-conduit-browser",
        "partial": "Request Lbs",
        "signature": "Request(ResourceT IO)-\u003eGenericBrowserAction m(Response ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:parseRelativeUrl",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an URL relative to current Location into a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWill throw \u003ccode\u003e\u003ca\u003eInvalidUrlException\u003c/a\u003e\u003c/code\u003e on parse failures or if your Location is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e (e.g. you haven't made any requests before)\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "String -\u003e GenericBrowserAction m (Request m')",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#parseRelativeUrl",
        "fct-type": "function",
        "title": "parseRelativeUrl"
      },
      "index": {
        "description": "Convert an URL relative to current Location into Request Will throw InvalidUrlException on parse failures or if your Location is Nothing e.g you haven made any requests before",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "parseRelativeUrl",
        "normalized": "String-\u003eGenericBrowserAction a(Request b)",
        "package": "http-conduit-browser",
        "partial": "Relative Url",
        "signature": "String-\u003eGenericBrowserAction m(Request m')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setAuthorities",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "(Request (ResourceT IO) -\u003e Maybe (ByteString, ByteString)) -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setAuthorities",
        "fct-type": "function",
        "title": "setAuthorities"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setAuthorities",
        "normalized": "(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Authorities",
        "signature": "(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setBrowserState",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "BrowserState -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setBrowserState",
        "fct-type": "function",
        "title": "setBrowserState"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setBrowserState",
        "normalized": "BrowserState-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Browser State",
        "signature": "BrowserState-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setCheckStatus",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe (Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException) -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setCheckStatus",
        "fct-type": "function",
        "title": "setCheckStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setCheckStatus",
        "normalized": "Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Check Status",
        "signature": "Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setClientCertificates",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe [(X509, Maybe PrivateKey)] -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setClientCertificates",
        "fct-type": "function",
        "title": "setClientCertificates"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setClientCertificates",
        "normalized": "Maybe[(X,Maybe PrivateKey)]-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Client Certificates",
        "signature": "Maybe[(X,Maybe PrivateKey)]-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setCookieFilter",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "(Request (ResourceT IO) -\u003e Cookie -\u003e IO Bool) -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setCookieFilter",
        "fct-type": "function",
        "title": "setCookieFilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setCookieFilter",
        "normalized": "(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Cookie Filter",
        "signature": "(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setCookieJar",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "CookieJar -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setCookieJar",
        "fct-type": "function",
        "title": "setCookieJar"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setCookieJar",
        "normalized": "CookieJar-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Cookie Jar",
        "signature": "CookieJar-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setCurrentProxy",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe Proxy -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setCurrentProxy",
        "fct-type": "function",
        "title": "setCurrentProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setCurrentProxy",
        "normalized": "Maybe Proxy-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Current Proxy",
        "signature": "Maybe Proxy-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setCurrentSocksProxy",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe SocksConf -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setCurrentSocksProxy",
        "fct-type": "function",
        "title": "setCurrentSocksProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setCurrentSocksProxy",
        "normalized": "Maybe SocksConf-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Current Socks Proxy",
        "signature": "Maybe SocksConf-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setDefaultHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "HeaderName -\u003e Maybe ByteString -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setDefaultHeader",
        "fct-type": "function",
        "title": "setDefaultHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setDefaultHeader",
        "normalized": "HeaderName-\u003eMaybe ByteString-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Default Header",
        "signature": "HeaderName-\u003eMaybe ByteString-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setDefaultHeaders",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "RequestHeaders -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setDefaultHeaders",
        "fct-type": "function",
        "title": "setDefaultHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setDefaultHeaders",
        "normalized": "RequestHeaders-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Default Headers",
        "signature": "RequestHeaders-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setLocation",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe URI -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setLocation",
        "fct-type": "function",
        "title": "setLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setLocation",
        "normalized": "Maybe URI-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Location",
        "signature": "Maybe URI-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setManager",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Manager -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setManager",
        "fct-type": "function",
        "title": "setManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setManager",
        "normalized": "Manager-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Manager",
        "signature": "Manager-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setMaxRedirects",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe Int -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setMaxRedirects",
        "fct-type": "function",
        "title": "setMaxRedirects"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setMaxRedirects",
        "normalized": "Maybe Int-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Max Redirects",
        "signature": "Maybe Int-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setMaxRetryCount",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Int -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setMaxRetryCount",
        "fct-type": "function",
        "title": "setMaxRetryCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setMaxRetryCount",
        "normalized": "Int-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Max Retry Count",
        "signature": "Int-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setOverrideHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "HeaderName -\u003e Maybe ByteString -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setOverrideHeader",
        "fct-type": "function",
        "title": "setOverrideHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setOverrideHeader",
        "normalized": "HeaderName-\u003eMaybe ByteString-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Override Header",
        "signature": "HeaderName-\u003eMaybe ByteString-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setOverrideHeaders",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "RequestHeaders -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setOverrideHeaders",
        "fct-type": "function",
        "title": "setOverrideHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setOverrideHeaders",
        "normalized": "RequestHeaders-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Override Headers",
        "signature": "RequestHeaders-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setTimeout",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe Int -\u003e GenericBrowserAction m ()",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#setTimeout",
        "fct-type": "function",
        "title": "setTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "setTimeout",
        "normalized": "Maybe Int-\u003eGenericBrowserAction a()",
        "package": "http-conduit-browser",
        "partial": "Timeout",
        "signature": "Maybe Int-\u003eGenericBrowserAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withAuthorities",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "(Request (ResourceT IO) -\u003e Maybe (ByteString, ByteString)) -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withAuthorities",
        "fct-type": "function",
        "title": "withAuthorities"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withAuthorities",
        "normalized": "(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Authorities",
        "signature": "(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withBrowserState",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "BrowserState -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withBrowserState",
        "fct-type": "function",
        "title": "withBrowserState"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withBrowserState",
        "normalized": "BrowserState-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Browser State",
        "signature": "BrowserState-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withCheckStatus",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe (Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException) -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withCheckStatus",
        "fct-type": "function",
        "title": "withCheckStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withCheckStatus",
        "normalized": "Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Check Status",
        "signature": "Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withClientCertificates",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe [(X509, Maybe PrivateKey)] -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withClientCertificates",
        "fct-type": "function",
        "title": "withClientCertificates"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withClientCertificates",
        "normalized": "Maybe[(X,Maybe PrivateKey)]-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Client Certificates",
        "signature": "Maybe[(X,Maybe PrivateKey)]-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withCookieFilter",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "(Request (ResourceT IO) -\u003e Cookie -\u003e IO Bool) -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withCookieFilter",
        "fct-type": "function",
        "title": "withCookieFilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withCookieFilter",
        "normalized": "(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Cookie Filter",
        "signature": "(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withCookieJar",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "CookieJar -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withCookieJar",
        "fct-type": "function",
        "title": "withCookieJar"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withCookieJar",
        "normalized": "CookieJar-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Cookie Jar",
        "signature": "CookieJar-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withCurrentProxy",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe Proxy -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withCurrentProxy",
        "fct-type": "function",
        "title": "withCurrentProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withCurrentProxy",
        "normalized": "Maybe Proxy-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Current Proxy",
        "signature": "Maybe Proxy-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withCurrentSocksProxy",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe SocksConf -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withCurrentSocksProxy",
        "fct-type": "function",
        "title": "withCurrentSocksProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withCurrentSocksProxy",
        "normalized": "Maybe SocksConf-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Current Socks Proxy",
        "signature": "Maybe SocksConf-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withDefaultHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Header -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withDefaultHeader",
        "fct-type": "function",
        "title": "withDefaultHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withDefaultHeader",
        "normalized": "Header-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Default Header",
        "signature": "Header-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withDefaultHeaders",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "RequestHeaders -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withDefaultHeaders",
        "fct-type": "function",
        "title": "withDefaultHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withDefaultHeaders",
        "normalized": "RequestHeaders-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Default Headers",
        "signature": "RequestHeaders-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withLocation",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe URI -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withLocation",
        "fct-type": "function",
        "title": "withLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withLocation",
        "normalized": "Maybe URI-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Location",
        "signature": "Maybe URI-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withMaxRedirects",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe Int -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withMaxRedirects",
        "fct-type": "function",
        "title": "withMaxRedirects"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withMaxRedirects",
        "normalized": "Maybe Int-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Max Redirects",
        "signature": "Maybe Int-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withMaxRetryCount",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Int -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withMaxRetryCount",
        "fct-type": "function",
        "title": "withMaxRetryCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withMaxRetryCount",
        "normalized": "Int-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Max Retry Count",
        "signature": "Int-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withOverrideHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Header -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withOverrideHeader",
        "fct-type": "function",
        "title": "withOverrideHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withOverrideHeader",
        "normalized": "Header-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Override Header",
        "signature": "Header-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withOverrideHeaders",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "RequestHeaders -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withOverrideHeaders",
        "fct-type": "function",
        "title": "withOverrideHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withOverrideHeaders",
        "normalized": "RequestHeaders-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Override Headers",
        "signature": "RequestHeaders-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withTimeout",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Browser",
        "fct-package": "http-conduit-browser",
        "fct-signature": "Maybe Int -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
        "fct-source": "src/Network-HTTP-Conduit-Browser.html#withTimeout",
        "fct-type": "function",
        "title": "withTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Browser",
        "module": "Network.HTTP.Conduit.Browser",
        "name": "withTimeout",
        "normalized": "Maybe Int-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
        "package": "http-conduit-browser",
        "partial": "Timeout",
        "signature": "Maybe Int-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a"
      }
    }
  }
]