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
        "word": "http-conduit-browser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is designed to work similarly to the Network.Browser module in the HTTP package.\n The idea is that there are two new types defined: \u003ccode\u003e\u003ca\u003eBrowserState\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBrowserAction\u003c/a\u003e\u003c/code\u003e. The\n purpose of this module is to make it easy to describe a browsing session, including navigating\n to multiple pages, and have things like cookie jar updates work as expected as you browse\n around.\n\u003c/p\u003e\u003cp\u003eBrowserAction is a monad that handles all your browser-related activities. This monad is\n actually implemented as a specialization of the State monad, over the BrowserState type. The\n BrowserState type has various bits of information that a web browser keeps, such as a current\n cookie jar, the number of times to retry a request on failure, HTTP proxy information, etc. In\n the BrowserAction monad, there is one BrowserState at any given time, and you can modify it by\n using the convenience functions in this module.\n\u003c/p\u003e\u003cp\u003eA special kind of modification of the current browser state is the action of making a HTTP\n request. This will do the request according to the params in the current BrowserState, as well\n as modifying the current state with, for example, an updated cookie jar and location.\n\u003c/p\u003e\u003cp\u003eTo use this module, you would bind together a series of BrowserActions (This simulates the user\n clicking on links or using a settings dialogue etc.) to describe your browsing session. When\n you've described your session, you call \u003ccode\u003e\u003ca\u003ebrowse\u003c/a\u003e\u003c/code\u003e on your top-level BrowserAction to actually\n convert your actions into the ResourceT IO monad.\n\u003c/p\u003e\u003cp\u003eHere is an example program:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import qualified Data.ByteString.Lazy as LB\n import qualified Data.Text.Encoding as TE\n import qualified Data.Text.Lazy.Encoding as TLE\n import qualified Data.Text.Lazy.IO as TLIO\n import           Data.Conduit\n import           Network.HTTP.Conduit\n import           Network.HTTP.Conduit.Browser\n\n -- The web request to log in to a service\n req1 :: IO (Request (ResourceT IO))\n req1 = do\n   req \u003c- parseUrl \"http://www.myurl.com/login.php\"\n   return $ urlEncodedBody [ (TE.encodeUtf8 \"name\", TE.encodeUtf8 \"litherum\")\n                           , (TE.encodeUtf8 \"pass\", TE.encodeUtf8 \"S33kRe7\")\n                           ] req\n\n -- Once authenticated, run this request\n req2 :: IO (Request m')\n req2 = parseUrl \"http://www.myurl.com/main.php\"\n\n -- Bind two BrowserActions together\n action :: Request (ResourceT IO) -\u003e Request (ResourceT IO) -\u003e BrowserAction (Response LB.ByteString)\n action r1 r2 = do\n   _ \u003c- makeRequestLbs r1\n   makeRequestLbs r2\n\n main :: IO ()\n main = do\n   man \u003c- newManager def\n   r1 \u003c- req1\n   r2 \u003c- req2\n   out \u003c- runResourceT $ browse man $ do\n     setDefaultHeader \"User-Agent\" $ Just \"A very popular browser\"\n     action r1 r2\n   TLIO.putStrLn $ TLE.decodeUtf8 $ responseBody out\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "Browser",
          "package": "http-conduit-browser",
          "source": "src/Network-HTTP-Conduit-Browser.html",
          "type": "module"
        },
        "index": {
          "description": "This module is designed to work similarly to the Network.Browser module in the HTTP package The idea is that there are two new types defined BrowserState and BrowserAction The purpose of this module is to make it easy to describe browsing session including navigating to multiple pages and have things like cookie jar updates work as expected as you browse around BrowserAction is monad that handles all your browser-related activities This monad is actually implemented as specialization of the State monad over the BrowserState type The BrowserState type has various bits of information that web browser keeps such as current cookie jar the number of times to retry request on failure HTTP proxy information etc In the BrowserAction monad there is one BrowserState at any given time and you can modify it by using the convenience functions in this module special kind of modification of the current browser state is the action of making HTTP request This will do the request according to the params in the current BrowserState as well as modifying the current state with for example an updated cookie jar and location To use this module you would bind together series of BrowserActions This simulates the user clicking on links or using settings dialogue etc to describe your browsing session When you ve described your session you call browse on your top-level BrowserAction to actually convert your actions into the ResourceT IO monad Here is an example program LANGUAGE OverloadedStrings import qualified Data.ByteString.Lazy as LB import qualified Data.Text.Encoding as TE import qualified Data.Text.Lazy.Encoding as TLE import qualified Data.Text.Lazy.IO as TLIO import Data.Conduit import Network.HTTP.Conduit import Network.HTTP.Conduit.Browser The web request to log in to service req1 IO Request ResourceT IO req1 do req parseUrl http www.myurl.com login.php return urlEncodedBody TE.encodeUtf8 name TE.encodeUtf8 litherum TE.encodeUtf8 pass TE.encodeUtf8 S33kRe7 req Once authenticated run this request req2 IO Request req2 parseUrl http www.myurl.com main.php Bind two BrowserActions together action Request ResourceT IO Request ResourceT IO BrowserAction Response LB.ByteString action r1 r2 do makeRequestLbs r1 makeRequestLbs r2 main IO main do man newManager def r1 req1 r2 req2 out runResourceT browse man do setDefaultHeader User-Agent Just very popular browser action r1 r2 TLIO.putStrLn TLE.decodeUtf8 responseBody out",
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "Browser",
          "package": "http-conduit-browser",
          "partial": "Browser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "BrowserAction",
          "package": "http-conduit-browser",
          "source": "src/Network-HTTP-Conduit-Browser.html#BrowserAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "BrowserAction",
          "package": "http-conduit-browser",
          "partial": "Browser Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#t:BrowserAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "BrowserState",
          "package": "http-conduit-browser",
          "source": "src/Network-HTTP-Conduit-Browser.html#BrowserState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "BrowserState",
          "package": "http-conduit-browser",
          "partial": "Browser State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#t:BrowserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "GenericBrowserAction",
          "package": "http-conduit-browser",
          "source": "src/Network-HTTP-Conduit-Browser.html#GenericBrowserAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "GenericBrowserAction",
          "package": "http-conduit-browser",
          "partial": "Generic Browser Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#t:GenericBrowserAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo the browser action with the given manager\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "browse",
          "package": "http-conduit-browser",
          "signature": "Manager -\u003e GenericBrowserAction m a -\u003e m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#browse",
          "type": "function"
        },
        "index": {
          "description": "Do the browser action with the given manager",
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "browse",
          "normalized": "Manager-\u003eGenericBrowserAction a b-\u003ea b",
          "package": "http-conduit-browser",
          "signature": "Manager-\u003eGenericBrowserAction m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:browse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "defaultState",
          "package": "http-conduit-browser",
          "signature": "Manager -\u003e BrowserState",
          "source": "src/Network-HTTP-Conduit-Browser.html#defaultState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "defaultState",
          "normalized": "Manager-\u003eBrowserState",
          "package": "http-conduit-browser",
          "partial": "State",
          "signature": "Manager-\u003eBrowserState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:defaultState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "deleteDefaultHeader",
          "package": "http-conduit-browser",
          "signature": "HeaderName -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#deleteDefaultHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "deleteDefaultHeader",
          "normalized": "HeaderName-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Default Header",
          "signature": "HeaderName-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:deleteDefaultHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "deleteOverrideHeader",
          "package": "http-conduit-browser",
          "signature": "HeaderName -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#deleteOverrideHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "deleteOverrideHeader",
          "normalized": "HeaderName-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Override Header",
          "signature": "HeaderName-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:deleteOverrideHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a request and sink the \u003ccode\u003e\u003ca\u003eresponseBody\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "downloadFile",
          "package": "http-conduit-browser",
          "signature": "FilePath -\u003e Request (ResourceT IO) -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#downloadFile",
          "type": "function"
        },
        "index": {
          "description": "Make request and sink the responseBody to file",
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "downloadFile",
          "normalized": "FilePath-\u003eRequest(ResourceT IO)-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "File",
          "signature": "FilePath-\u003eRequest(ResourceT IO)-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:downloadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getAuthorities",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m (Request (ResourceT IO) -\u003e Maybe (ByteString, ByteString))",
          "source": "src/Network-HTTP-Conduit-Browser.html#getAuthorities",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getAuthorities",
          "normalized": "GenericBrowserAction a(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))",
          "package": "http-conduit-browser",
          "partial": "Authorities",
          "signature": "GenericBrowserAction m(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getAuthorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getBrowserState",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m BrowserState",
          "source": "src/Network-HTTP-Conduit-Browser.html#getBrowserState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getBrowserState",
          "package": "http-conduit-browser",
          "partial": "Browser State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getBrowserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getCheckStatus",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m (Maybe (Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException))",
          "source": "src/Network-HTTP-Conduit-Browser.html#getCheckStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getCheckStatus",
          "normalized": "GenericBrowserAction a(Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException))",
          "package": "http-conduit-browser",
          "partial": "Check Status",
          "signature": "GenericBrowserAction m(Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getCheckStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getClientCertificates",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m (Maybe [(X509, Maybe PrivateKey)])",
          "source": "src/Network-HTTP-Conduit-Browser.html#getClientCertificates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getClientCertificates",
          "normalized": "GenericBrowserAction a(Maybe[(X,Maybe PrivateKey)])",
          "package": "http-conduit-browser",
          "partial": "Client Certificates",
          "signature": "GenericBrowserAction m(Maybe[(X,Maybe PrivateKey)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getClientCertificates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getCookieFilter",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m (Request (ResourceT IO) -\u003e Cookie -\u003e IO Bool)",
          "source": "src/Network-HTTP-Conduit-Browser.html#getCookieFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getCookieFilter",
          "normalized": "GenericBrowserAction a(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)",
          "package": "http-conduit-browser",
          "partial": "Cookie Filter",
          "signature": "GenericBrowserAction m(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getCookieFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getCookieJar",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m CookieJar",
          "source": "src/Network-HTTP-Conduit-Browser.html#getCookieJar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getCookieJar",
          "package": "http-conduit-browser",
          "partial": "Cookie Jar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getCookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getCurrentProxy",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m (Maybe Proxy)",
          "source": "src/Network-HTTP-Conduit-Browser.html#getCurrentProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getCurrentProxy",
          "package": "http-conduit-browser",
          "partial": "Current Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getCurrentProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getCurrentSocksProxy",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m (Maybe SocksConf)",
          "source": "src/Network-HTTP-Conduit-Browser.html#getCurrentSocksProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getCurrentSocksProxy",
          "package": "http-conduit-browser",
          "partial": "Current Socks Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getCurrentSocksProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getDefaultHeader",
          "package": "http-conduit-browser",
          "signature": "HeaderName -\u003e GenericBrowserAction m (Maybe ByteString)",
          "source": "src/Network-HTTP-Conduit-Browser.html#getDefaultHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getDefaultHeader",
          "normalized": "HeaderName-\u003eGenericBrowserAction a(Maybe ByteString)",
          "package": "http-conduit-browser",
          "partial": "Default Header",
          "signature": "HeaderName-\u003eGenericBrowserAction m(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getDefaultHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getDefaultHeaders",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m RequestHeaders",
          "source": "src/Network-HTTP-Conduit-Browser.html#getDefaultHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getDefaultHeaders",
          "package": "http-conduit-browser",
          "partial": "Default Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getDefaultHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getLocation",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m (Maybe URI)",
          "source": "src/Network-HTTP-Conduit-Browser.html#getLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getLocation",
          "package": "http-conduit-browser",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getManager",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m Manager",
          "source": "src/Network-HTTP-Conduit-Browser.html#getManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getManager",
          "package": "http-conduit-browser",
          "partial": "Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getMaxRedirects",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m (Maybe Int)",
          "source": "src/Network-HTTP-Conduit-Browser.html#getMaxRedirects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getMaxRedirects",
          "package": "http-conduit-browser",
          "partial": "Max Redirects",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getMaxRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getMaxRetryCount",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m Int",
          "source": "src/Network-HTTP-Conduit-Browser.html#getMaxRetryCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getMaxRetryCount",
          "package": "http-conduit-browser",
          "partial": "Max Retry Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getMaxRetryCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getOverrideHeader",
          "package": "http-conduit-browser",
          "signature": "HeaderName -\u003e GenericBrowserAction m (Maybe ByteString)",
          "source": "src/Network-HTTP-Conduit-Browser.html#getOverrideHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getOverrideHeader",
          "normalized": "HeaderName-\u003eGenericBrowserAction a(Maybe ByteString)",
          "package": "http-conduit-browser",
          "partial": "Override Header",
          "signature": "HeaderName-\u003eGenericBrowserAction m(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getOverrideHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getOverrideHeaders",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m RequestHeaders",
          "source": "src/Network-HTTP-Conduit-Browser.html#getOverrideHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getOverrideHeaders",
          "package": "http-conduit-browser",
          "partial": "Override Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getOverrideHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getTimeout",
          "package": "http-conduit-browser",
          "signature": "GenericBrowserAction m (Maybe Int)",
          "source": "src/Network-HTTP-Conduit-Browser.html#getTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "getTimeout",
          "package": "http-conduit-browser",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:getTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "insertDefaultHeader",
          "package": "http-conduit-browser",
          "signature": "Header -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#insertDefaultHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "insertDefaultHeader",
          "normalized": "Header-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Default Header",
          "signature": "Header-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:insertDefaultHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "insertOverrideHeader",
          "package": "http-conduit-browser",
          "signature": "Header -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#insertOverrideHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "insertOverrideHeader",
          "normalized": "Header-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Override Header",
          "signature": "Header-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:insertOverrideHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a request, using all the state in the current BrowserState\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "makeRequest",
          "package": "http-conduit-browser",
          "signature": "Request (ResourceT IO) -\u003e GenericBrowserAction m (Response (ResumableSource (ResourceT IO) ByteString))",
          "source": "src/Network-HTTP-Conduit-Browser.html#makeRequest",
          "type": "function"
        },
        "index": {
          "description": "Make request using all the state in the current BrowserState",
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "makeRequest",
          "normalized": "Request(ResourceT IO)-\u003eGenericBrowserAction a(Response(ResumableSource(ResourceT IO)ByteString))",
          "package": "http-conduit-browser",
          "partial": "Request",
          "signature": "Request(ResourceT IO)-\u003eGenericBrowserAction m(Response(ResumableSource(ResourceT IO)ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:makeRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a request and pack the result as a lazy bytestring.\n\u003c/p\u003e\u003cp\u003eNote: Even though this function returns a lazy bytestring, it does not\n utilize lazy I/O, and therefore the entire response body will live in memory.\n If you want constant memory usage, you'll need to use the conduit package and\n \u003ccode\u003e\u003ca\u003emakeRequest\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "makeRequestLbs",
          "package": "http-conduit-browser",
          "signature": "Request (ResourceT IO) -\u003e GenericBrowserAction m (Response ByteString)",
          "source": "src/Network-HTTP-Conduit-Browser.html#makeRequestLbs",
          "type": "function"
        },
        "index": {
          "description": "Make request and pack the result as lazy bytestring Note Even though this function returns lazy bytestring it does not utilize lazy and therefore the entire response body will live in memory If you want constant memory usage you ll need to use the conduit package and makeRequest directly",
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "makeRequestLbs",
          "normalized": "Request(ResourceT IO)-\u003eGenericBrowserAction a(Response ByteString)",
          "package": "http-conduit-browser",
          "partial": "Request Lbs",
          "signature": "Request(ResourceT IO)-\u003eGenericBrowserAction m(Response ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:makeRequestLbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an URL relative to current Location into a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWill throw \u003ccode\u003e\u003ca\u003eInvalidUrlException\u003c/a\u003e\u003c/code\u003e on parse failures or if your Location is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e (e.g. you haven't made any requests before)\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "parseRelativeUrl",
          "package": "http-conduit-browser",
          "signature": "String -\u003e GenericBrowserAction m (Request m')",
          "source": "src/Network-HTTP-Conduit-Browser.html#parseRelativeUrl",
          "type": "function"
        },
        "index": {
          "description": "Convert an URL relative to current Location into Request Will throw InvalidUrlException on parse failures or if your Location is Nothing e.g you haven made any requests before",
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "parseRelativeUrl",
          "normalized": "String-\u003eGenericBrowserAction a(Request b)",
          "package": "http-conduit-browser",
          "partial": "Relative Url",
          "signature": "String-\u003eGenericBrowserAction m(Request m')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:parseRelativeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setAuthorities",
          "package": "http-conduit-browser",
          "signature": "(Request (ResourceT IO) -\u003e Maybe (ByteString, ByteString)) -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setAuthorities",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setAuthorities",
          "normalized": "(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Authorities",
          "signature": "(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setAuthorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setBrowserState",
          "package": "http-conduit-browser",
          "signature": "BrowserState -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setBrowserState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setBrowserState",
          "normalized": "BrowserState-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Browser State",
          "signature": "BrowserState-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setBrowserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setCheckStatus",
          "package": "http-conduit-browser",
          "signature": "Maybe (Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException) -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setCheckStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setCheckStatus",
          "normalized": "Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Check Status",
          "signature": "Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setCheckStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setClientCertificates",
          "package": "http-conduit-browser",
          "signature": "Maybe [(X509, Maybe PrivateKey)] -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setClientCertificates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setClientCertificates",
          "normalized": "Maybe[(X,Maybe PrivateKey)]-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Client Certificates",
          "signature": "Maybe[(X,Maybe PrivateKey)]-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setClientCertificates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setCookieFilter",
          "package": "http-conduit-browser",
          "signature": "(Request (ResourceT IO) -\u003e Cookie -\u003e IO Bool) -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setCookieFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setCookieFilter",
          "normalized": "(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Cookie Filter",
          "signature": "(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setCookieFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setCookieJar",
          "package": "http-conduit-browser",
          "signature": "CookieJar -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setCookieJar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setCookieJar",
          "normalized": "CookieJar-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Cookie Jar",
          "signature": "CookieJar-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setCookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setCurrentProxy",
          "package": "http-conduit-browser",
          "signature": "Maybe Proxy -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setCurrentProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setCurrentProxy",
          "normalized": "Maybe Proxy-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Current Proxy",
          "signature": "Maybe Proxy-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setCurrentProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setCurrentSocksProxy",
          "package": "http-conduit-browser",
          "signature": "Maybe SocksConf -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setCurrentSocksProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setCurrentSocksProxy",
          "normalized": "Maybe SocksConf-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Current Socks Proxy",
          "signature": "Maybe SocksConf-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setCurrentSocksProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setDefaultHeader",
          "package": "http-conduit-browser",
          "signature": "HeaderName -\u003e Maybe ByteString -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setDefaultHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setDefaultHeader",
          "normalized": "HeaderName-\u003eMaybe ByteString-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Default Header",
          "signature": "HeaderName-\u003eMaybe ByteString-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setDefaultHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setDefaultHeaders",
          "package": "http-conduit-browser",
          "signature": "RequestHeaders -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setDefaultHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setDefaultHeaders",
          "normalized": "RequestHeaders-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Default Headers",
          "signature": "RequestHeaders-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setDefaultHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setLocation",
          "package": "http-conduit-browser",
          "signature": "Maybe URI -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setLocation",
          "normalized": "Maybe URI-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Location",
          "signature": "Maybe URI-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setManager",
          "package": "http-conduit-browser",
          "signature": "Manager -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setManager",
          "normalized": "Manager-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Manager",
          "signature": "Manager-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setMaxRedirects",
          "package": "http-conduit-browser",
          "signature": "Maybe Int -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setMaxRedirects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setMaxRedirects",
          "normalized": "Maybe Int-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Max Redirects",
          "signature": "Maybe Int-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setMaxRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setMaxRetryCount",
          "package": "http-conduit-browser",
          "signature": "Int -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setMaxRetryCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setMaxRetryCount",
          "normalized": "Int-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Max Retry Count",
          "signature": "Int-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setMaxRetryCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setOverrideHeader",
          "package": "http-conduit-browser",
          "signature": "HeaderName -\u003e Maybe ByteString -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setOverrideHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setOverrideHeader",
          "normalized": "HeaderName-\u003eMaybe ByteString-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Override Header",
          "signature": "HeaderName-\u003eMaybe ByteString-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setOverrideHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setOverrideHeaders",
          "package": "http-conduit-browser",
          "signature": "RequestHeaders -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setOverrideHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setOverrideHeaders",
          "normalized": "RequestHeaders-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Override Headers",
          "signature": "RequestHeaders-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setOverrideHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setTimeout",
          "package": "http-conduit-browser",
          "signature": "Maybe Int -\u003e GenericBrowserAction m ()",
          "source": "src/Network-HTTP-Conduit-Browser.html#setTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "setTimeout",
          "normalized": "Maybe Int-\u003eGenericBrowserAction a()",
          "package": "http-conduit-browser",
          "partial": "Timeout",
          "signature": "Maybe Int-\u003eGenericBrowserAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:setTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withAuthorities",
          "package": "http-conduit-browser",
          "signature": "(Request (ResourceT IO) -\u003e Maybe (ByteString, ByteString)) -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withAuthorities",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withAuthorities",
          "normalized": "(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Authorities",
          "signature": "(Request(ResourceT IO)-\u003eMaybe(ByteString,ByteString))-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withAuthorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withBrowserState",
          "package": "http-conduit-browser",
          "signature": "BrowserState -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withBrowserState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withBrowserState",
          "normalized": "BrowserState-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Browser State",
          "signature": "BrowserState-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withBrowserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withCheckStatus",
          "package": "http-conduit-browser",
          "signature": "Maybe (Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException) -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withCheckStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withCheckStatus",
          "normalized": "Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Check Status",
          "signature": "Maybe(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withCheckStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withClientCertificates",
          "package": "http-conduit-browser",
          "signature": "Maybe [(X509, Maybe PrivateKey)] -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withClientCertificates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withClientCertificates",
          "normalized": "Maybe[(X,Maybe PrivateKey)]-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Client Certificates",
          "signature": "Maybe[(X,Maybe PrivateKey)]-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withClientCertificates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withCookieFilter",
          "package": "http-conduit-browser",
          "signature": "(Request (ResourceT IO) -\u003e Cookie -\u003e IO Bool) -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withCookieFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withCookieFilter",
          "normalized": "(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Cookie Filter",
          "signature": "(Request(ResourceT IO)-\u003eCookie-\u003eIO Bool)-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withCookieFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withCookieJar",
          "package": "http-conduit-browser",
          "signature": "CookieJar -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withCookieJar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withCookieJar",
          "normalized": "CookieJar-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Cookie Jar",
          "signature": "CookieJar-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withCookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withCurrentProxy",
          "package": "http-conduit-browser",
          "signature": "Maybe Proxy -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withCurrentProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withCurrentProxy",
          "normalized": "Maybe Proxy-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Current Proxy",
          "signature": "Maybe Proxy-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withCurrentProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withCurrentSocksProxy",
          "package": "http-conduit-browser",
          "signature": "Maybe SocksConf -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withCurrentSocksProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withCurrentSocksProxy",
          "normalized": "Maybe SocksConf-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Current Socks Proxy",
          "signature": "Maybe SocksConf-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withCurrentSocksProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withDefaultHeader",
          "package": "http-conduit-browser",
          "signature": "Header -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withDefaultHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withDefaultHeader",
          "normalized": "Header-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Default Header",
          "signature": "Header-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withDefaultHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withDefaultHeaders",
          "package": "http-conduit-browser",
          "signature": "RequestHeaders -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withDefaultHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withDefaultHeaders",
          "normalized": "RequestHeaders-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Default Headers",
          "signature": "RequestHeaders-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withDefaultHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withLocation",
          "package": "http-conduit-browser",
          "signature": "Maybe URI -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withLocation",
          "normalized": "Maybe URI-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Location",
          "signature": "Maybe URI-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withMaxRedirects",
          "package": "http-conduit-browser",
          "signature": "Maybe Int -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withMaxRedirects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withMaxRedirects",
          "normalized": "Maybe Int-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Max Redirects",
          "signature": "Maybe Int-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withMaxRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withMaxRetryCount",
          "package": "http-conduit-browser",
          "signature": "Int -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withMaxRetryCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withMaxRetryCount",
          "normalized": "Int-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Max Retry Count",
          "signature": "Int-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withMaxRetryCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withOverrideHeader",
          "package": "http-conduit-browser",
          "signature": "Header -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withOverrideHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withOverrideHeader",
          "normalized": "Header-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Override Header",
          "signature": "Header-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withOverrideHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withOverrideHeaders",
          "package": "http-conduit-browser",
          "signature": "RequestHeaders -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withOverrideHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withOverrideHeaders",
          "normalized": "RequestHeaders-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Override Headers",
          "signature": "RequestHeaders-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withOverrideHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withTimeout",
          "package": "http-conduit-browser",
          "signature": "Maybe Int -\u003e GenericBrowserAction m a -\u003e GenericBrowserAction m a",
          "source": "src/Network-HTTP-Conduit-Browser.html#withTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Conduit Browser",
          "module": "Network.HTTP.Conduit.Browser",
          "name": "withTimeout",
          "normalized": "Maybe Int-\u003eGenericBrowserAction a b-\u003eGenericBrowserAction a b",
          "package": "http-conduit-browser",
          "partial": "Timeout",
          "signature": "Maybe Int-\u003eGenericBrowserAction m a-\u003eGenericBrowserAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-conduit-browser/docs/Network-HTTP-Conduit-Browser.html#v:withTimeout"
      }
    }
  ]
]