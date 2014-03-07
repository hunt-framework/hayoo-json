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
        "word": "happstack-server"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for basic access authentication \u003ca\u003ehttp://en.wikipedia.org/wiki/Basic_access_authentication\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Auth",
          "name": "Auth",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Auth.html",
          "type": "module"
        },
        "index": {
          "description": "Support for basic access authentication http en.wikipedia.org wiki Basic access authentication",
          "hierarchy": "Happstack Server Auth",
          "module": "Happstack.Server.Auth",
          "name": "Auth",
          "package": "happstack-server",
          "partial": "Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Auth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple HTTP basic authentication guard.\n\u003c/p\u003e\u003cp\u003eIf authentication fails, this part will call \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eexample:\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ \n  msum [ basicAuth \"127.0.0.1\" (fromList [(\"happstack\",\"rocks\")]) $ ok \"You are in the secret club\"\n       , ok \"You are not in the secret club.\" \n       ]\n\u003c/pre\u003e",
          "module": "Happstack.Server.Auth",
          "name": "basicAuth",
          "package": "happstack-server",
          "signature": "String-\u003e Map String String-\u003e m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "simple HTTP basic authentication guard If authentication fails this part will call mzero example main simpleHTTP nullConf msum basicAuth fromList happstack rocks ok You are in the secret club ok You are not in the secret club",
          "hierarchy": "Happstack Server Auth",
          "module": "Happstack.Server.Auth",
          "name": "basicAuth",
          "normalized": "String-\u003eMap String String-\u003ea b-\u003ea b",
          "package": "happstack-server",
          "partial": "Auth",
          "signature": "String-\u003eMap String String-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Auth.html#v:basicAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea very simple interface for acting as an HTTP client. This is mostly used for things like \u003ca\u003eHappstack.Server.Proxy\u003c/a\u003e. You are more likely to want a library like http-enumerator \u003ca\u003ehttp://hackage.haskell.org/package/http-enumerator\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Client",
          "name": "Client",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Client.html",
          "type": "module"
        },
        "index": {
          "description": "very simple interface for acting as an HTTP client This is mostly used for things like Happstack.Server.Proxy You are more likely to want library like http-enumerator http hackage.haskell.org package http-enumerator",
          "hierarchy": "Happstack Server Client",
          "module": "Happstack.Server.Client",
          "name": "Client",
          "package": "happstack-server",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends the serialized request to the host defined in the request\n and attempts to parse response upon arrival.\n\u003c/p\u003e",
          "module": "Happstack.Server.Client",
          "name": "getResponse",
          "package": "happstack-server",
          "signature": "Request -\u003e IO (Either String Response)",
          "source": "src/Happstack-Server-Client.html#getResponse",
          "type": "function"
        },
        "index": {
          "description": "Sends the serialized request to the host defined in the request and attempts to parse response upon arrival",
          "hierarchy": "Happstack Server Client",
          "module": "Happstack.Server.Client",
          "name": "getResponse",
          "normalized": "Request-\u003eIO(Either String Response)",
          "package": "happstack-server",
          "partial": "Response",
          "signature": "Request-\u003eIO(Either String Response)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Client.html#v:getResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFilter for compressing the \u003ccode\u003eResponse\u003c/code\u003e body.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Compression",
          "name": "Compression",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Compression.html",
          "type": "module"
        },
        "index": {
          "description": "Filter for compressing the Response body",
          "hierarchy": "Happstack Server Compression",
          "module": "Happstack.Server.Compression",
          "name": "Compression",
          "package": "happstack-server",
          "partial": "Compression",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Compression.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereads the \u003ccode\u003eAccept-Encoding\u003c/code\u003e header.  Then, if possible\n will compress the response body with methods \u003ccode\u003egzip\u003c/code\u003e or \u003ccode\u003edeflate\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main =\n   simpleHTTP nullConf $\n      do str \u003c- compressedResponseFilter\n         return $ toResponse (\"This response compressed using: \" ++ str)\n\u003c/pre\u003e",
          "module": "[\"Happstack.Server.Compression\",\"Happstack.Server.Internal.Compression\"]",
          "name": "compressedResponseFilter",
          "package": "happstack-server",
          "signature": "m String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Compression.html#v:compressedResponseFilter\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Compression.html#v:compressedResponseFilter\"]"
        },
        "index": {
          "description": "reads the Accept-Encoding header Then if possible will compress the response body with methods gzip or deflate main simpleHTTP nullConf do str compressedResponseFilter return toResponse This response compressed using str",
          "hierarchy": "Happstack Server Compression",
          "module": "Happstack.Server.Compression",
          "name": "compressedResponseFilter",
          "package": "happstack-server",
          "partial": "Response Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Compression.html#v:compressedResponseFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for creating, adding, and expiring cookies. To lookup cookie values see \u003ca\u003eHappstack.Server.RqData\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Cookie",
          "name": "Cookie",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Cookie.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for creating adding and expiring cookies To lookup cookie values see Happstack.Server.RqData",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "Cookie",
          "package": "happstack-server",
          "partial": "Cookie",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea type for HTTP cookies. Usually created using \u003ccode\u003e\u003ca\u003emkCookie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Cookie",
          "name": "Cookie",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Cookie.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "type for HTTP cookies Usually created using mkCookie",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "Cookie",
          "package": "happstack-server",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the lifetime of a cookie.\n\u003c/p\u003e\u003cp\u003eNote that we always set the max-age and expires headers because\n internet explorer does not honor max-age. You can specific \u003ccode\u003e\u003ca\u003eMaxAge\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eExpires\u003c/a\u003e\u003c/code\u003e and the other will be calculated for you. Choose which\n ever one makes your life easiest.\n\u003c/p\u003e",
          "module": "Happstack.Server.Cookie",
          "name": "CookieLife",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Cookie.html#CookieLife",
          "type": "data"
        },
        "index": {
          "description": "Specify the lifetime of cookie Note that we always set the max-age and expires headers because internet explorer does not honor max-age You can specific MaxAge or Expires and the other will be calculated for you Choose which ever one makes your life easiest",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "CookieLife",
          "package": "happstack-server",
          "partial": "Cookie Life",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#t:CookieLife"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "Cookie",
          "package": "happstack-server",
          "signature": "Cookie",
          "source": "src/Happstack-Server-Internal-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:Cookie\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:Cookie\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "Cookie",
          "package": "happstack-server",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecookie already expired\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "Expired",
          "package": "happstack-server",
          "signature": "Expired",
          "source": "src/Happstack-Server-Internal-Cookie.html#CookieLife",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:Expired\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:Expired\"]"
        },
        "index": {
          "description": "cookie already expired",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "Expired",
          "package": "happstack-server",
          "partial": "Expired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:Expired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecookie expiration date\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "Expires",
          "package": "happstack-server",
          "signature": "Expires UTCTime",
          "source": "src/Happstack-Server-Internal-Cookie.html#CookieLife",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:Expires\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:Expires\"]"
        },
        "index": {
          "description": "cookie expiration date",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "Expires",
          "package": "happstack-server",
          "partial": "Expires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:Expires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elife time of cookie in seconds\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "MaxAge",
          "package": "happstack-server",
          "signature": "MaxAge Int",
          "source": "src/Happstack-Server-Internal-Cookie.html#CookieLife",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:MaxAge\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:MaxAge\"]"
        },
        "index": {
          "description": "life time of cookie in seconds",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "MaxAge",
          "package": "happstack-server",
          "partial": "Max Age",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:MaxAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esession cookie - expires when browser is closed\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "Session",
          "package": "happstack-server",
          "signature": "Session",
          "source": "src/Happstack-Server-Internal-Cookie.html#CookieLife",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:Session\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:Session\"]"
        },
        "index": {
          "description": "session cookie expires when browser is closed",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "Session",
          "package": "happstack-server",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eexample\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $\n   do addCookie Session (mkCookie \"name\" \"value\")\n      ok $ \"You now have a session cookie.\"\n\u003c/pre\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eaddCookies\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Cookie",
          "name": "addCookie",
          "package": "happstack-server",
          "signature": "CookieLife -\u003e Cookie -\u003e m ()",
          "source": "src/Happstack-Server-Cookie.html#addCookie",
          "type": "function"
        },
        "index": {
          "description": "Add the Cookie to Response example main simpleHTTP nullConf do addCookie Session mkCookie name value ok You now have session cookie see also addCookies",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "addCookie",
          "normalized": "CookieLife-\u003eCookie-\u003ea()",
          "package": "happstack-server",
          "partial": "Cookie",
          "signature": "CookieLife-\u003eCookie-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:addCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the list \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eaddCookie\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Cookie",
          "name": "addCookies",
          "package": "happstack-server",
          "signature": "[(CookieLife, Cookie)] -\u003e m ()",
          "source": "src/Happstack-Server-Cookie.html#addCookies",
          "type": "function"
        },
        "index": {
          "description": "Add the list Cookie to the Response see also addCookie",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "addCookies",
          "normalized": "[(CookieLife,Cookie)]-\u003ea()",
          "package": "happstack-server",
          "partial": "Cookies",
          "signature": "[(CookieLife,Cookie)]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:addCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "cookieDomain",
          "package": "happstack-server",
          "signature": "String",
          "source": "src/Happstack-Server-Internal-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:cookieDomain\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:cookieDomain\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "cookieDomain",
          "package": "happstack-server",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:cookieDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "cookieName",
          "package": "happstack-server",
          "signature": "String",
          "source": "src/Happstack-Server-Internal-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:cookieName\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:cookieName\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "cookieName",
          "package": "happstack-server",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:cookieName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "cookiePath",
          "package": "happstack-server",
          "signature": "String",
          "source": "src/Happstack-Server-Internal-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:cookiePath\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:cookiePath\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "cookiePath",
          "package": "happstack-server",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:cookiePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "cookieValue",
          "package": "happstack-server",
          "signature": "String",
          "source": "src/Happstack-Server-Internal-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:cookieValue\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:cookieValue\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "cookieValue",
          "package": "happstack-server",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:cookieValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "cookieVersion",
          "package": "happstack-server",
          "signature": "String",
          "source": "src/Happstack-Server-Internal-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:cookieVersion\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:cookieVersion\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "cookieVersion",
          "package": "happstack-server",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:cookieVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpire the named cookie immediately and set the cookie value to \u003ccode\u003e\"\"\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $\n   do expireCookie \"name\"\n      ok $ \"The cookie has been expired.\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Cookie",
          "name": "expireCookie",
          "package": "happstack-server",
          "signature": "String -\u003e m ()",
          "source": "src/Happstack-Server-Cookie.html#expireCookie",
          "type": "function"
        },
        "index": {
          "description": "Expire the named cookie immediately and set the cookie value to main simpleHTTP nullConf do expireCookie name ok The cookie has been expired",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "expireCookie",
          "normalized": "String-\u003ea()",
          "package": "happstack-server",
          "partial": "Cookie",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:expireCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "httpOnly",
          "package": "happstack-server",
          "signature": "Bool",
          "source": "src/Happstack-Server-Internal-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:httpOnly\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:httpOnly\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "httpOnly",
          "package": "happstack-server",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:httpOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a cookie with a default version of 1, empty domain, a\n path of \u003ca\u003e/\u003c/a\u003e, secure == False and httpOnly == False\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003eaddCookie\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "mkCookie",
          "package": "happstack-server",
          "signature": "String-\u003e String-\u003e Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:mkCookie\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:mkCookie\"]"
        },
        "index": {
          "description": "Creates cookie with default version of empty domain path of secure False and httpOnly False see also addCookie",
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "mkCookie",
          "normalized": "String-\u003eString-\u003eCookie",
          "package": "happstack-server",
          "partial": "Cookie",
          "signature": "String-\u003eString-\u003eCookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:mkCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Cookie\",\"Happstack.Server.Internal.Cookie\"]",
          "name": "secure",
          "package": "happstack-server",
          "signature": "Bool",
          "source": "src/Happstack-Server-Internal-Cookie.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:secure\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:secure\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Cookie",
          "module": "Happstack.Server.Cookie",
          "name": "secure",
          "package": "happstack-server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Cookie.html#v:secure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome useful functions if you want to wrap the \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e monad transformer around the \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e monad transformer. e.g., \u003ccode\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e e m) a\u003c/code\u003e. This allows you to use \u003ccode\u003ethrowError\u003c/code\u003e and \u003ccode\u003ecatchError\u003c/code\u003e inside your monad.  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Error",
          "name": "Error",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Some useful functions if you want to wrap the ServerPartT monad transformer around the ErrorT monad transformer e.g ServerPartT ErrorT This allows you to use throwError and catchError inside your monad",
          "hierarchy": "Happstack Server Error",
          "module": "Happstack.Server.Error",
          "name": "Error",
          "package": "happstack-server",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use spUnwrapErrorT\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis \u003ccode\u003eServerPart\u003c/code\u003e modifier enables the use of \u003ccode\u003ethrowError\u003c/code\u003e and\n \u003ccode\u003ecatchError\u003c/code\u003e inside the \u003ccode\u003e\u003ca\u003eWebT\u003c/a\u003e\u003c/code\u003e actions, by adding the \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e\n monad transformer to the stack.\n\u003c/p\u003e\u003cp\u003eYou can wrap the complete second argument to \u003ccode\u003esimpleHTTP\u003c/code\u003e in this\n function.\n\u003c/p\u003e\u003cp\u003eDEPRECATED: use \u003ccode\u003e\u003ca\u003espUnwrapErrorT\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Happstack.Server.Error",
          "name": "errorHandlerSP",
          "package": "happstack-server",
          "signature": "(Request -\u003e e -\u003e WebT m a) -\u003e ServerPartT (ErrorT e m) a -\u003e ServerPartT m a",
          "source": "src/Happstack-Server-Error.html#errorHandlerSP",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use spUnwrapErrorT This ServerPart modifier enables the use of throwError and catchError inside the WebT actions by adding the ErrorT monad transformer to the stack You can wrap the complete second argument to simpleHTTP in this function DEPRECATED use spUnwrapErrorT instead",
          "hierarchy": "Happstack Server Error",
          "module": "Happstack.Server.Error",
          "name": "errorHandlerSP",
          "normalized": "(Request-\u003ea-\u003eWebT b c)-\u003eServerPartT(ErrorT a b)c-\u003eServerPartT b c",
          "package": "happstack-server",
          "partial": "Handler SP",
          "signature": "(Request-\u003ee-\u003eWebT m a)-\u003eServerPartT(ErrorT e m)a-\u003eServerPartT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Error.html#v:errorHandlerSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple error handler which can be used with \u003ccode\u003e\u003ca\u003espUnwrapErrorT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt returns the error message as a plain text message to the\n browser. More sophisticated behaviour can be achieved by calling\n your own custom error handler instead.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003espUnwrapErrorT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Error",
          "name": "simpleErrorHandler",
          "package": "happstack-server",
          "signature": "String -\u003e ServerPartT m Response",
          "source": "src/Happstack-Server-Error.html#simpleErrorHandler",
          "type": "function"
        },
        "index": {
          "description": "simple error handler which can be used with spUnwrapErrorT It returns the error message as plain text message to the browser More sophisticated behaviour can be achieved by calling your own custom error handler instead see also spUnwrapErrorT",
          "hierarchy": "Happstack Server Error",
          "module": "Happstack.Server.Error",
          "name": "simpleErrorHandler",
          "normalized": "String-\u003eServerPartT a Response",
          "package": "happstack-server",
          "partial": "Error Handler",
          "signature": "String-\u003eServerPartT m Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Error.html#v:simpleErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten \u003ccode\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e e m) a\u003c/code\u003e into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e m\n a\u003c/code\u003e so that it can be use with \u003ccode\u003esimpleHTTP\u003c/code\u003e.  Used with\n \u003ccode\u003emapServerPartT'\u003c/code\u003e, e.g.,\n\u003c/p\u003e\u003cpre\u003e simpleHTTP conf $ mapServerPartT' (spUnWrapErrorT simpleErrorHandler)  $ myPart `catchError` errorPart\n\u003c/pre\u003e\u003cp\u003eNote that in this example, \u003ccode\u003esimpleErrorHandler\u003c/code\u003e will only be run if \u003ccode\u003eerrorPart\u003c/code\u003e throws an error. You can replace \u003ccode\u003esimpleErrorHandler\u003c/code\u003e with your own custom error handler.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003esimpleErrorHandler\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Error",
          "name": "spUnwrapErrorT",
          "package": "happstack-server",
          "signature": "(e -\u003e ServerPartT m a) -\u003e Request -\u003e UnWebT (ErrorT e m) a -\u003e UnWebT m a",
          "source": "src/Happstack-Server-Error.html#spUnwrapErrorT",
          "type": "function"
        },
        "index": {
          "description": "Flatten ServerPartT ErrorT into ServerPartT so that it can be use with simpleHTTP Used with mapServerPartT e.g simpleHTTP conf mapServerPartT spUnWrapErrorT simpleErrorHandler myPart catchError errorPart Note that in this example simpleErrorHandler will only be run if errorPart throws an error You can replace simpleErrorHandler with your own custom error handler see also simpleErrorHandler",
          "hierarchy": "Happstack Server Error",
          "module": "Happstack.Server.Error",
          "name": "spUnwrapErrorT",
          "normalized": "(a-\u003eServerPartT b c)-\u003eRequest-\u003eUnWebT(ErrorT a b)c-\u003eUnWebT b c",
          "package": "happstack-server",
          "partial": "Unwrap Error",
          "signature": "(e-\u003eServerPartT m a)-\u003eRequest-\u003eUnWebT(ErrorT e m)a-\u003eUnWebT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Error.html#v:spUnwrapErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBuild your own file serving functions\n\u003c/p\u003e\u003cp\u003eIf the functions in \u003ca\u003eHappstack.Server.FileServe\u003c/a\u003e do not quite do\n you want you can roll your own by reusing pieces from this module.\n\u003c/p\u003e\u003cp\u003eYou will likely want to start by copying the source for a function\n like, \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e and then modifying it to suit your needs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "BuildingBlocks",
          "package": "happstack-server",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html",
          "type": "module"
        },
        "index": {
          "description": "Build your own file serving functions If the functions in Happstack.Server.FileServe do not quite do you want you can roll your own by reusing pieces from this module You will likely want to start by copying the source for function like serveDirectory and then modifying it to suit your needs",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "BuildingBlocks",
          "package": "happstack-server",
          "partial": "Building Blocks",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "Browsing",
          "package": "happstack-server",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#Browsing",
          "type": "data"
        },
        "index": {
          "description": "see serveDirectory",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "Browsing",
          "package": "happstack-server",
          "partial": "Browsing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#t:Browsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "EntryKind",
          "package": "happstack-server",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#EntryKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "EntryKind",
          "package": "happstack-server",
          "partial": "Entry Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#t:EntryKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from file extensions to content-types\n\u003c/p\u003e\u003cp\u003eexample:\n\u003c/p\u003e\u003cpre\u003e myMimeMap :: MimeMap\n myMimeMap = Map.fromList [(\"gz\",\"application/x-gzip\"), ... ]\n\u003c/pre\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003emimeTypes\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "MimeMap",
          "package": "happstack-server",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#MimeMap",
          "type": "type"
        },
        "index": {
          "description": "Map from file extensions to content-types example myMimeMap MimeMap myMimeMap Map.fromList gz application x-gzip see also mimeTypes",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "MimeMap",
          "package": "happstack-server",
          "partial": "Mime Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#t:MimeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "Directory",
          "package": "happstack-server",
          "signature": "Directory",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#EntryKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "Directory",
          "package": "happstack-server",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.FileServe.BuildingBlocks\",\"Happstack.Server.FileServe\"]",
          "name": "DisableBrowsing",
          "package": "happstack-server",
          "signature": "DisableBrowsing",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#Browsing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:DisableBrowsing\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#v:DisableBrowsing\"]"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "DisableBrowsing",
          "package": "happstack-server",
          "partial": "Disable Browsing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:DisableBrowsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.FileServe.BuildingBlocks\",\"Happstack.Server.FileServe\"]",
          "name": "EnableBrowsing",
          "package": "happstack-server",
          "signature": "EnableBrowsing",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#Browsing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:EnableBrowsing\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#v:EnableBrowsing\"]"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "EnableBrowsing",
          "package": "happstack-server",
          "partial": "Enable Browsing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:EnableBrowsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "File",
          "package": "happstack-server",
          "signature": "File",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#EntryKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "File",
          "package": "happstack-server",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "UnknownKind",
          "package": "happstack-server",
          "signature": "UnknownKind",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#EntryKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "UnknownKind",
          "package": "happstack-server",
          "partial": "Unknown Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:UnknownKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns a specific content type, completely ignoring the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e\u003cp\u003eUse this with \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e if you want to explicitly specify the\n content-type.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eguessContentTypeM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.FileServe.BuildingBlocks\",\"Happstack.Server.FileServe\"]",
          "name": "asContentType",
          "package": "happstack-server",
          "signature": "String-\u003e FilePath -\u003e m String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:asContentType\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#v:asContentType\"]"
        },
        "index": {
          "description": "returns specific content type completely ignoring the FilePath argument Use this with serveFile if you want to explicitly specify the content-type see also guessContentTypeM serveFile",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "asContentType",
          "normalized": "String-\u003eFilePath-\u003ea String",
          "package": "happstack-server",
          "partial": "Content Type",
          "signature": "String-\u003eFilePath-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:asContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrevents files of the form '.foo' or 'bar/.foo' from being served\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "blockDotFiles",
          "package": "happstack-server",
          "signature": "(Request -\u003e IO Response) -\u003e Request -\u003e IO Response",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#blockDotFiles",
          "type": "function"
        },
        "index": {
          "description": "Prevents files of the form foo or bar foo from being served",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "blockDotFiles",
          "normalized": "(Request-\u003eIO Response)-\u003eRequest-\u003eIO Response",
          "package": "happstack-server",
          "partial": "Dot Files",
          "signature": "(Request-\u003eIO Response)-\u003eRequest-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:blockDotFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "browseIndex",
          "package": "happstack-server",
          "signature": "(FilePath -\u003e [FilePath] -\u003e m b) -\u003e (String -\u003e FilePath -\u003e m Response) -\u003e (FilePath -\u003e m String) -\u003e [String] -\u003e FilePath -\u003e m Response",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#browseIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "browseIndex",
          "normalized": "(FilePath-\u003e[FilePath]-\u003ea b)-\u003e(String-\u003eFilePath-\u003ea Response)-\u003e(FilePath-\u003ea String)-\u003e[String]-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Index",
          "signature": "(FilePath-\u003e[FilePath]-\u003em b)-\u003e(String-\u003eFilePath-\u003em Response)-\u003e(FilePath-\u003em String)-\u003e[String]-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:browseIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es, ensuring that the resulting path leads to\n a file within the first \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecombineSafe \"/var/uploads/\" \"etc/passwd\"\n\u003c/code\u003e\u003c/strong\u003eJust \"/var/uploads/etc/passwd\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecombineSafe \"/var/uploads/\" \"/etc/passwd\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecombineSafe \"/var/uploads/\" \"../../etc/passwd\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecombineSafe \"/var/uploads/\" \"../uploads/home/../etc/passwd\"\n\u003c/code\u003e\u003c/strong\u003eJust \"/var/uploads/etc/passwd\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "combineSafe",
          "package": "happstack-server",
          "signature": "FilePath -\u003e FilePath -\u003e Maybe FilePath",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#combineSafe",
          "type": "function"
        },
        "index": {
          "description": "Combine two FilePath ensuring that the resulting path leads to file within the first FilePath combineSafe var uploads etc passwd Just var uploads etc passwd combineSafe var uploads etc passwd Nothing combineSafe var uploads etc passwd Nothing combineSafe var uploads uploads home etc passwd Just var uploads etc passwd",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "combineSafe",
          "normalized": "FilePath-\u003eFilePath-\u003eMaybe FilePath",
          "package": "happstack-server",
          "partial": "Safe",
          "signature": "FilePath-\u003eFilePath-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:combineSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea list of common index files. Specifically: \u003ccode\u003eindex.html\u003c/code\u003e, \u003ccode\u003eindex.xml\u003c/code\u003e, \u003ccode\u003eindex.gif\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTypically used as an argument to \u003ccode\u003eserveDiretory\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.FileServe.BuildingBlocks\",\"Happstack.Server.FileServe\"]",
          "name": "defaultIxFiles",
          "package": "happstack-server",
          "signature": "[FilePath]",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#defaultIxFiles",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:defaultIxFiles\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#v:defaultIxFiles\"]"
        },
        "index": {
          "description": "list of common index files Specifically index.html index.xml index.gif Typically used as an argument to serveDiretory",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "defaultIxFiles",
          "normalized": "[FilePath]",
          "package": "happstack-server",
          "partial": "Ix Files",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:defaultIxFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempt to serve index files\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "doIndex",
          "package": "happstack-server",
          "signature": "[FilePath]-\u003e MimeMap-\u003e FilePath-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "attempt to serve index files",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "doIndex",
          "normalized": "[FilePath]-\u003eMimeMap-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Index",
          "signature": "[FilePath]-\u003eMimeMap-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:doIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "doIndex'",
          "package": "happstack-server",
          "signature": "(String -\u003e FilePath -\u003e m Response) -\u003e (FilePath -\u003e m String) -\u003e [String] -\u003e FilePath -\u003e m Response",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#doIndex%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "doIndex'",
          "normalized": "(String-\u003eFilePath-\u003ea Response)-\u003e(FilePath-\u003ea String)-\u003e[String]-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Index'",
          "signature": "(String-\u003eFilePath-\u003em Response)-\u003e(FilePath-\u003em String)-\u003e[String]-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:doIndex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "doIndexLazy",
          "package": "happstack-server",
          "signature": "[String] -\u003e MimeMap -\u003e FilePath -\u003e m Response",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#doIndexLazy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "doIndexLazy",
          "normalized": "[String]-\u003eMimeMap-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Index Lazy",
          "signature": "[String]-\u003eMimeMap-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:doIndexLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "doIndexStrict",
          "package": "happstack-server",
          "signature": "[String] -\u003e MimeMap -\u003e FilePath -\u003e m Response",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#doIndexStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "doIndexStrict",
          "normalized": "[String]-\u003eMimeMap-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Index Strict",
          "signature": "[String]-\u003eMimeMap-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:doIndexStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn a simple \u003ca\u003eFile not found 404 page.\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "fileNotFound",
          "package": "happstack-server",
          "signature": "FilePath -\u003e m Response",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#fileNotFound",
          "type": "function"
        },
        "index": {
          "description": "return simple File not found page",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "fileNotFound",
          "normalized": "FilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Not Found",
          "signature": "FilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:fileNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the specified file with the specified mime-type using lazy ByteStrings\n\u003c/p\u003e\u003cp\u003eNOTE: assumes file exists and is readable by the server. See \u003ccode\u003e\u003ca\u003eserveFileUsing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWARNING: No security checks are performed.\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "filePathLazy",
          "package": "happstack-server",
          "signature": "String-\u003e FilePath-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "Send the specified file with the specified mime-type using lazy ByteStrings NOTE assumes file exists and is readable by the server See serveFileUsing WARNING No security checks are performed",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "filePathLazy",
          "normalized": "String-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Path Lazy",
          "signature": "String-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:filePathLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the specified file with the specified mime-type using sendFile()\n\u003c/p\u003e\u003cp\u003eNOTE: assumes file exists and is readable by the server. See \u003ccode\u003e\u003ca\u003eserveFileUsing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWARNING: No security checks are performed.\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "filePathSendFile",
          "package": "happstack-server",
          "signature": "String-\u003e FilePath-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "Send the specified file with the specified mime-type using sendFile NOTE assumes file exists and is readable by the server See serveFileUsing WARNING No security checks are performed",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "filePathSendFile",
          "normalized": "String-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Path Send File",
          "signature": "String-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:filePathSendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the specified file with the specified mime-type using strict ByteStrings\n\u003c/p\u003e\u003cp\u003eNOTE: assumes file exists and is readable by the server. See \u003ccode\u003e\u003ca\u003eserveFileUsing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWARNING: No security checks are performed.\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "filePathStrict",
          "package": "happstack-server",
          "signature": "String-\u003e FilePath-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "Send the specified file with the specified mime-type using strict ByteStrings NOTE assumes file exists and is readable by the server See serveFileUsing WARNING No security checks are performed",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "filePathStrict",
          "normalized": "String-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Path Strict",
          "signature": "String-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:filePathStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use serveDirectory instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eServe files from a directory and its subdirectories using \u003ccode\u003esendFile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e fileServe [\"index.html\"] \"path/to/files/on/disk\"\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efileServe\u003c/a\u003e\u003c/code\u003e does not support directory browsing. See \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eDEPRECATED: use \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eNote:\n\u003c/p\u003e\u003cp\u003eThe list of index files \u003ccode\u003e[\"index.html\"]\u003c/code\u003e is only used to determine what file to show if the user requests a directory. You *do not* need to explicitly list all the files you want to serve.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.FileServe.BuildingBlocks\",\"Happstack.Server.FileServe\"]",
          "name": "fileServe",
          "package": "happstack-server",
          "signature": "[FilePath]-\u003e FilePath-\u003e m Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:fileServe\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#v:fileServe\"]"
        },
        "index": {
          "description": "Deprecated use serveDirectory instead Serve files from directory and its subdirectories using sendFile Usage fileServe index.html path to files on disk fileServe does not support directory browsing See serveDirectory DEPRECATED use serveDirectory instead Note The list of index files index.html is only used to determine what file to show if the user requests directory You do not need to explicitly list all the files you want to serve",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "fileServe",
          "normalized": "[FilePath]-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Serve",
          "signature": "[FilePath]-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:fileServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe files from a directory and its subdirectories (parameterizable version)\n\u003c/p\u003e\u003cp\u003eParameterize this function to create functions like, \u003ccode\u003e\u003ca\u003efileServe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efileServeLazy\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efileServeStrict\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eYou supply:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e a low-level function which takes a content-type and \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and generates a Response\n\u003c/li\u003e\u003cli\u003e a function which determines the content-type from the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e a list of all the default index files\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eNOTE: unlike fileServe, there are no index files by default. See \u003ccode\u003e\u003ca\u003edefaultIxFiles\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "fileServe'",
          "package": "happstack-server",
          "signature": "(String -\u003e FilePath -\u003e m Response)-\u003e (FilePath -\u003e m String)-\u003e (FilePath -\u003e m Response)-\u003e FilePath-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "Serve files from directory and its subdirectories parameterizable version Parameterize this function to create functions like fileServe fileServeLazy and fileServeStrict You supply low-level function which takes content-type and FilePath and generates Response function which determines the content-type from the FilePath list of all the default index files NOTE unlike fileServe there are no index files by default See defaultIxFiles",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "fileServe'",
          "normalized": "(String-\u003eFilePath-\u003ea Response)-\u003e(FilePath-\u003ea String)-\u003e(FilePath-\u003ea Response)-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Serve'",
          "signature": "(String-\u003eFilePath-\u003em Response)-\u003e(FilePath-\u003em String)-\u003e(FilePath-\u003em Response)-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:fileServe-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe files from a directory and its subdirectories (lazy ByteString version).\n\u003c/p\u003e\u003cp\u003eWARNING: May leak file handles. You should probably use \u003ccode\u003e\u003ca\u003efileServe\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "fileServeLazy",
          "package": "happstack-server",
          "signature": "[FilePath]-\u003e FilePath-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "Serve files from directory and its subdirectories lazy ByteString version WARNING May leak file handles You should probably use fileServe instead",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "fileServeLazy",
          "normalized": "[FilePath]-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Serve Lazy",
          "signature": "[FilePath]-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:fileServeLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe files from a directory and its subdirectories (strict ByteString version).\n\u003c/p\u003e\u003cp\u003eWARNING: the entire file will be read into RAM before being served. You should probably use \u003ccode\u003e\u003ca\u003efileServe\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "fileServeStrict",
          "package": "happstack-server",
          "signature": "[FilePath]-\u003e FilePath-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "Serve files from directory and its subdirectories strict ByteString version WARNING the entire file will be read into RAM before being served You should probably use fileServe instead",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "fileServeStrict",
          "normalized": "[FilePath]-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Serve Strict",
          "signature": "[FilePath]-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:fileServeStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to guess the content-type of a file based on its extension\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eguessContentTypeM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "guessContentType",
          "package": "happstack-server",
          "signature": "MimeMap -\u003e FilePath -\u003e Maybe String",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#guessContentType",
          "type": "function"
        },
        "index": {
          "description": "try to guess the content-type of file based on its extension see also guessContentTypeM",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "guessContentType",
          "normalized": "MimeMap-\u003eFilePath-\u003eMaybe String",
          "package": "happstack-server",
          "partial": "Content Type",
          "signature": "MimeMap-\u003eFilePath-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:guessContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to guess the content-type of a file based on its extension\n\u003c/p\u003e\u003cp\u003edefaults to \u003ca\u003eapplication/octet-stream\u003c/a\u003e if no match was found.\n\u003c/p\u003e\u003cp\u003eUseful as an argument to \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eguessContentType\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.FileServe.BuildingBlocks\",\"Happstack.Server.FileServe\"]",
          "name": "guessContentTypeM",
          "package": "happstack-server",
          "signature": "MimeMap -\u003e FilePath -\u003e m String",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#guessContentTypeM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:guessContentTypeM\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#v:guessContentTypeM\"]"
        },
        "index": {
          "description": "try to guess the content-type of file based on its extension defaults to application octet-stream if no match was found Useful as an argument to serveFile see also guessContentType serveFile",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "guessContentTypeM",
          "normalized": "MimeMap-\u003eFilePath-\u003ea String",
          "package": "happstack-server",
          "partial": "Content Type",
          "signature": "MimeMap-\u003eFilePath-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:guessContentTypeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the given String either starts with a . or is of the form\n \u003ca\u003efoo/.bar\u003c/a\u003e, e.g. the typical *nix convention for hidden files.\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "isDot",
          "package": "happstack-server",
          "signature": "String -\u003e Bool",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#isDot",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the given String either starts with or is of the form foo bar e.g the typical nix convention for hidden files",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "isDot",
          "normalized": "String-\u003eBool",
          "package": "happstack-server",
          "partial": "Dot",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:isDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "isSafePath",
          "package": "happstack-server",
          "signature": "[FilePath] -\u003e Bool",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#isSafePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "isSafePath",
          "normalized": "[FilePath]-\u003eBool",
          "package": "happstack-server",
          "partial": "Safe Path",
          "signature": "[FilePath]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:isSafePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the contents of a Lazy ByteString\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "lazyByteStringResponse",
          "package": "happstack-server",
          "signature": "String-\u003e ByteString-\u003e Maybe (UTCTime, Request)-\u003e Integer-\u003e Integer-\u003e Response",
          "type": "function"
        },
        "index": {
          "description": "Send the contents of Lazy ByteString",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "lazyByteStringResponse",
          "normalized": "String-\u003eByteString-\u003eMaybe(UTCTime,Request)-\u003eInteger-\u003eInteger-\u003eResponse",
          "package": "happstack-server",
          "partial": "Byte String Response",
          "signature": "String-\u003eByteString-\u003eMaybe(UTCTime,Request)-\u003eInteger-\u003eInteger-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:lazyByteStringResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReady collection of common mime types.\n Except for the first two entries, the mappings come from an Ubuntu 8.04 /etc/mime.types file.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.FileServe.BuildingBlocks\",\"Happstack.Server.FileServe\"]",
          "name": "mimeTypes",
          "package": "happstack-server",
          "signature": "MimeMap",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#mimeTypes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:mimeTypes\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#v:mimeTypes\"]"
        },
        "index": {
          "description": "Ready collection of common mime types Except for the first two entries the mappings come from an Ubuntu etc mime.types file",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "mimeTypes",
          "package": "happstack-server",
          "partial": "Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:mimeTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea function to generate an HTML page showing the contents of a directory on the disk\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ebrowseIndex\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erenderDirectoryContentsTable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "renderDirectoryContents",
          "package": "happstack-server",
          "signature": "FilePath-\u003e [FilePath]-\u003e m Html",
          "type": "function"
        },
        "index": {
          "description": "function to generate an HTML page showing the contents of directory on the disk see also browseIndex renderDirectoryContentsTable",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "renderDirectoryContents",
          "normalized": "FilePath-\u003e[FilePath]-\u003ea Html",
          "package": "happstack-server",
          "partial": "Directory Contents",
          "signature": "FilePath-\u003e[FilePath]-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:renderDirectoryContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea function to generate an HTML table showing the contents of a directory on the disk\n\u003c/p\u003e\u003cp\u003eThis function generates most of the content of the\n \u003ccode\u003e\u003ca\u003erenderDirectoryContents\u003c/a\u003e\u003c/code\u003e page. If you want to style the page\n differently, or add google analytics code, etc, you can just create\n a new page template to wrap around this HTML.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003egetMetaData\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erenderDirectoryContents\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "renderDirectoryContentsTable",
          "package": "happstack-server",
          "signature": "[(FilePath, Maybe UTCTime, Maybe Integer, EntryKind)]-\u003e Html",
          "type": "function"
        },
        "index": {
          "description": "function to generate an HTML table showing the contents of directory on the disk This function generates most of the content of the renderDirectoryContents page If you want to style the page differently or add google analytics code etc you can just create new page template to wrap around this HTML see also getMetaData renderDirectoryContents",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "renderDirectoryContentsTable",
          "normalized": "[(FilePath,Maybe UTCTime,Maybe Integer,EntryKind)]-\u003eHtml",
          "package": "happstack-server",
          "partial": "Directory Contents Table",
          "signature": "[(FilePath,Maybe UTCTime,Maybe Integer,EntryKind)]-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:renderDirectoryContentsTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse sendFile to send the contents of a Handle\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "sendFileResponse",
          "package": "happstack-server",
          "signature": "String-\u003e FilePath-\u003e Maybe (UTCTime, Request)-\u003e Integer-\u003e Integer-\u003e Response",
          "type": "function"
        },
        "index": {
          "description": "Use sendFile to send the contents of Handle",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "sendFileResponse",
          "normalized": "String-\u003eFilePath-\u003eMaybe(UTCTime,Request)-\u003eInteger-\u003eInteger-\u003eResponse",
          "package": "happstack-server",
          "partial": "File Response",
          "signature": "String-\u003eFilePath-\u003eMaybe(UTCTime,Request)-\u003eInteger-\u003eInteger-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:sendFileResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe files and directories from a directory and its subdirectories using \u003ccode\u003esendFile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e serveDirectory EnableBrowsing [\"index.html\"] \"path/to/files/on/disk\"\n\u003c/pre\u003e\u003cp\u003eIf the requested path does not match a file or directory on the\n disk, then \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the requested path is a file then the file is served normally.\n\u003c/p\u003e\u003cp\u003eIf the requested path is a directory, then the result depends on\n what the first two arguments to the function are.\n\u003c/p\u003e\u003cp\u003eThe first argument controls whether directory browsing is\n enabled.\n\u003c/p\u003e\u003cp\u003eThe second argument is a list of index files (such as\n index.html).\n\u003c/p\u003e\u003cp\u003eWhen a directory is requested, \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e will first try to\n find one of the index files (in the order they are listed). If that\n fails, it will show a directory listing if \u003ccode\u003e\u003ca\u003eEnableBrowsing\u003c/a\u003e\u003c/code\u003e is set,\n otherwise it will return \u003ccode\u003eforbidden \"Directory index forbidden\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere is an explicit list of all the possible outcomes when the\n argument is a (valid) directory:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eDisableBrowsing\u003c/a\u003e\u003c/code\u003e, empty index file list\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThis will always return, forbidden \"Directory index forbidden\"\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eDisableBrowsing\u003c/a\u003e\u003c/code\u003e, non-empty index file list\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003col\u003e\u003cli\u003e If an index file is found it will be shown.\n\u003c/li\u003e\u003cli\u003e Otherwise returns, forbidden \"Directory index forbidden\"\n\u003c/li\u003e\u003c/ol\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eEnableBrowsing\u003c/a\u003e\u003c/code\u003e, empty index file list\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eAlways shows a directory index.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eEnableBrowsing\u003c/a\u003e\u003c/code\u003e, non-empty index file list\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003col\u003e\u003cli\u003e If an index file is found it will be shown\n\u003c/li\u003e\u003cli\u003e Otherwise shows a directory index\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003edefaultIxFiles\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.FileServe.BuildingBlocks\",\"Happstack.Server.FileServe\"]",
          "name": "serveDirectory",
          "package": "happstack-server",
          "signature": "Browsing-\u003e [FilePath]-\u003e FilePath-\u003e m Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:serveDirectory\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#v:serveDirectory\"]"
        },
        "index": {
          "description": "Serve files and directories from directory and its subdirectories using sendFile Usage serveDirectory EnableBrowsing index.html path to files on disk If the requested path does not match file or directory on the disk then serveDirectory calls mzero If the requested path is file then the file is served normally If the requested path is directory then the result depends on what the first two arguments to the function are The first argument controls whether directory browsing is enabled The second argument is list of index files such as index.html When directory is requested serveDirectory will first try to find one of the index files in the order they are listed If that fails it will show directory listing if EnableBrowsing is set otherwise it will return forbidden Directory index forbidden Here is an explicit list of all the possible outcomes when the argument is valid directory DisableBrowsing empty index file list This will always return forbidden Directory index forbidden DisableBrowsing non-empty index file list If an index file is found it will be shown Otherwise returns forbidden Directory index forbidden EnableBrowsing empty index file list Always shows directory index EnableBrowsing non-empty index file list If an index file is found it will be shown Otherwise shows directory index see also defaultIxFiles serveFile",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "serveDirectory",
          "normalized": "Browsing-\u003e[FilePath]-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Directory",
          "signature": "Browsing-\u003e[FilePath]-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:serveDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e but with custom mimeTypes\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "serveDirectory'",
          "package": "happstack-server",
          "signature": "Browsing-\u003e [FilePath]-\u003e (FilePath -\u003e m String)-\u003e FilePath-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "like serveDirectory but with custom mimeTypes",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "serveDirectory'",
          "normalized": "Browsing-\u003e[FilePath]-\u003e(FilePath-\u003ea String)-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Directory'",
          "signature": "Browsing-\u003e[FilePath]-\u003e(FilePath-\u003em String)-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:serveDirectory-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe a single, specified file. The name of the file being served is specified explicity. It is not derived automatically from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e url.\n\u003c/p\u003e\u003cp\u003eexample 1:\n\u003c/p\u003e\u003cp\u003eServe as a specific content-type:\n\u003c/p\u003e\u003cpre\u003e serveFile (asContentType \"image/jpeg\") \"/srv/data/image.jpg\"\n\u003c/pre\u003e\u003cp\u003eexample 2:\n\u003c/p\u003e\u003cp\u003eServe guessing the content-type from the extension:\n\u003c/p\u003e\u003cpre\u003e serveFile (guessContentTypeM mimeTypes) \"/srv/data/image.jpg\"\n\u003c/pre\u003e\u003cp\u003eIf the specified path does not exist or is not a file, this function will return \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWARNING: No security checks are performed.\n\u003c/p\u003e\u003cp\u003eNOTE: alias for \u003ccode\u003e\u003ca\u003eserveFileUsing\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efilePathSendFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.FileServe.BuildingBlocks\",\"Happstack.Server.FileServe\"]",
          "name": "serveFile",
          "package": "happstack-server",
          "signature": "(FilePath -\u003e m String)-\u003e FilePath-\u003e m Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:serveFile\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#v:serveFile\"]"
        },
        "index": {
          "description": "Serve single specified file The name of the file being served is specified explicity It is not derived automatically from the Request url example Serve as specific content-type serveFile asContentType image jpeg srv data image.jpg example Serve guessing the content-type from the extension serveFile guessContentTypeM mimeTypes srv data image.jpg If the specified path does not exist or is not file this function will return mzero WARNING No security checks are performed NOTE alias for serveFileUsing filePathSendFile",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "serveFile",
          "normalized": "(FilePath-\u003ea String)-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "File",
          "signature": "(FilePath-\u003em String)-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:serveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e, but uses \u003ccode\u003e\u003ca\u003ecombineSafe\u003c/a\u003e\u003c/code\u003e to prevent directory\n traversal attacks when the path to the file is supplied by the user.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.FileServe.BuildingBlocks\",\"Happstack.Server.FileServe\"]",
          "name": "serveFileFrom",
          "package": "happstack-server",
          "signature": "FilePath-\u003e (FilePath -\u003e m String)-\u003e FilePath-\u003e m Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:serveFileFrom\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#v:serveFileFrom\"]"
        },
        "index": {
          "description": "Like serveFile but uses combineSafe to prevent directory traversal attacks when the path to the file is supplied by the user",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "serveFileFrom",
          "normalized": "FilePath-\u003e(FilePath-\u003ea String)-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "File From",
          "signature": "FilePath-\u003e(FilePath-\u003em String)-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:serveFileFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe a single, specified file. The name of the file being served is specified explicity. It is not derived automatically from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e url.\n\u003c/p\u003e\u003cp\u003eexample 1:\n\u003c/p\u003e\u003cp\u003eServe using sendfile() and the specified content-type\n\u003c/p\u003e\u003cpre\u003e serveFileUsing filePathSendFile (asContentType \"image/jpeg\") \"/srv/data/image.jpg\"\n\u003c/pre\u003e\u003cp\u003eexample 2:\n\u003c/p\u003e\u003cp\u003eServe using a lazy ByteString and the guess the content-type from the extension\n\u003c/p\u003e\u003cpre\u003e serveFileUsing filePathLazy (guessContentTypeM mimeTypes) \"/srv/data/image.jpg\"\n\u003c/pre\u003e\u003cp\u003eWARNING: No security checks are performed.\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "serveFileUsing",
          "package": "happstack-server",
          "signature": "(String -\u003e FilePath -\u003e m Response)-\u003e (FilePath -\u003e m String)-\u003e FilePath-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "Serve single specified file The name of the file being served is specified explicity It is not derived automatically from the Request url example Serve using sendfile and the specified content-type serveFileUsing filePathSendFile asContentType image jpeg srv data image.jpg example Serve using lazy ByteString and the guess the content-type from the extension serveFileUsing filePathLazy guessContentTypeM mimeTypes srv data image.jpg WARNING No security checks are performed",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "serveFileUsing",
          "normalized": "(String-\u003eFilePath-\u003ea Response)-\u003e(FilePath-\u003ea String)-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "File Using",
          "signature": "(String-\u003eFilePath-\u003em Response)-\u003e(FilePath-\u003em String)-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:serveFileUsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the contents of a Lazy ByteString\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "strictByteStringResponse",
          "package": "happstack-server",
          "signature": "String-\u003e ByteString-\u003e Maybe (UTCTime, Request)-\u003e Integer-\u003e Integer-\u003e Response",
          "type": "function"
        },
        "index": {
          "description": "Send the contents of Lazy ByteString",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "strictByteStringResponse",
          "normalized": "String-\u003eByteString-\u003eMaybe(UTCTime,Request)-\u003eInteger-\u003eInteger-\u003eResponse",
          "package": "happstack-server",
          "partial": "Byte String Response",
          "signature": "String-\u003eByteString-\u003eMaybe(UTCTime,Request)-\u003eInteger-\u003eInteger-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:strictByteStringResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to find an index file, calls mzero on failure\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "tryIndex",
          "package": "happstack-server",
          "signature": "(String -\u003e FilePath -\u003e m Response)-\u003e (FilePath -\u003e m String)-\u003e [String]-\u003e FilePath-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "try to find an index file calls mzero on failure",
          "hierarchy": "Happstack Server FileServe BuildingBlocks",
          "module": "Happstack.Server.FileServe.BuildingBlocks",
          "name": "tryIndex",
          "normalized": "(String-\u003eFilePath-\u003ea Response)-\u003e(FilePath-\u003ea String)-\u003e[String]-\u003eFilePath-\u003ea Response",
          "package": "happstack-server",
          "partial": "Index",
          "signature": "(String-\u003eFilePath-\u003em Response)-\u003e(FilePath-\u003em String)-\u003e[String]-\u003eFilePath-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe-BuildingBlocks.html#v:tryIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003efunctions for serving static files from the disk\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.FileServe",
          "name": "FileServe",
          "package": "happstack-server",
          "source": "src/Happstack-Server-FileServe.html",
          "type": "module"
        },
        "index": {
          "description": "functions for serving static files from the disk",
          "hierarchy": "Happstack Server FileServe",
          "module": "Happstack.Server.FileServe",
          "name": "FileServe",
          "package": "happstack-server",
          "partial": "File Serve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe",
          "name": "Browsing",
          "package": "happstack-server",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#Browsing",
          "type": "data"
        },
        "index": {
          "description": "see serveDirectory",
          "hierarchy": "Happstack Server FileServe",
          "module": "Happstack.Server.FileServe",
          "name": "Browsing",
          "package": "happstack-server",
          "partial": "Browsing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#t:Browsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from file extensions to content-types\n\u003c/p\u003e\u003cp\u003eexample:\n\u003c/p\u003e\u003cpre\u003e myMimeMap :: MimeMap\n myMimeMap = Map.fromList [(\"gz\",\"application/x-gzip\"), ... ]\n\u003c/pre\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003emimeTypes\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.FileServe",
          "name": "MimeMap",
          "package": "happstack-server",
          "source": "src/Happstack-Server-FileServe-BuildingBlocks.html#MimeMap",
          "type": "type"
        },
        "index": {
          "description": "Map from file extensions to content-types example myMimeMap MimeMap myMimeMap Map.fromList gz application x-gzip see also mimeTypes",
          "hierarchy": "Happstack Server FileServe",
          "module": "Happstack.Server.FileServe",
          "name": "MimeMap",
          "package": "happstack-server",
          "partial": "Mime Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-FileServe.html#t:MimeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.I18N",
          "name": "I18N",
          "package": "happstack-server",
          "source": "src/Happstack-Server-I18N.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server I18N",
          "module": "Happstack.Server.I18N",
          "name": "I18N",
          "package": "happstack-server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-I18N.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse the 'Accept-Language' header, or [] if not found.\n\u003c/p\u003e",
          "module": "Happstack.Server.I18N",
          "name": "acceptLanguage",
          "package": "happstack-server",
          "signature": "m [(Text, Maybe Double)]",
          "source": "src/Happstack-Server-I18N.html#acceptLanguage",
          "type": "function"
        },
        "index": {
          "description": "parse the Accept-Language header or if not found",
          "hierarchy": "Happstack Server I18N",
          "module": "Happstack.Server.I18N",
          "name": "acceptLanguage",
          "normalized": "a[(Text,Maybe Double)]",
          "package": "happstack-server",
          "partial": "Language",
          "signature": "m[(Text,Maybe Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-I18N.html#v:acceptLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeconstruct the \u003ccode\u003e\u003ca\u003eacceptLanguage\u003c/a\u003e\u003c/code\u003e results a return a list of\n languages sorted by preference in descending order.\n\u003c/p\u003e\u003cp\u003eNote: this implementation does not conform to RFC4647\n\u003c/p\u003e\u003cp\u003eAmong other things, it does not handle wildcards. A proper\n implementation needs to take a list of available languages.\n\u003c/p\u003e",
          "module": "Happstack.Server.I18N",
          "name": "bestLanguage",
          "package": "happstack-server",
          "signature": "[(Text, Maybe Double)] -\u003e [Text]",
          "source": "src/Happstack-Server-I18N.html#bestLanguage",
          "type": "function"
        },
        "index": {
          "description": "deconstruct the acceptLanguage results return list of languages sorted by preference in descending order Note this implementation does not conform to RFC4647 Among other things it does not handle wildcards proper implementation needs to take list of available languages",
          "hierarchy": "Happstack Server I18N",
          "module": "Happstack.Server.I18N",
          "name": "bestLanguage",
          "normalized": "[(Text,Maybe Double)]-\u003e[Text]",
          "package": "happstack-server",
          "partial": "Language",
          "signature": "[(Text,Maybe Double)]-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-I18N.html#v:bestLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFilter for compressing the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Internal.Compression",
          "name": "Compression",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Compression.html",
          "type": "module"
        },
        "index": {
          "description": "Filter for compressing the Response body",
          "hierarchy": "Happstack Server Internal Compression",
          "module": "Happstack.Server.Internal.Compression",
          "name": "Compression",
          "package": "happstack-server",
          "partial": "Compression",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Compression.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore the \u003ccode\u003eAccept-Encoding\u003c/code\u003e header in the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and attempt to compress the body of the response using the supplied compressor.\n\u003c/p\u003e\u003cp\u003eWe can not compress files being transfered using \u003ccode\u003e\u003ca\u003eSendFile\u003c/a\u003e\u003c/code\u003e. If\n \u003ccode\u003eidentity\u003c/code\u003e is an allowed encoding, then just return the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n unmodified. Otherwise we return \u003ca\u003e406 Not Acceptable\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003egzipFilter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003edefaultFilter\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Compression",
          "name": "compressWithFilter",
          "package": "happstack-server",
          "signature": "(ByteString -\u003e ByteString)-\u003e String-\u003e Bool-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Ignore the Accept-Encoding header in the Request and attempt to compress the body of the response using the supplied compressor We can not compress files being transfered using SendFile If identity is an allowed encoding then just return the Response unmodified Otherwise we return Not Acceptable see also gzipFilter and defaultFilter",
          "hierarchy": "Happstack Server Internal Compression",
          "module": "Happstack.Server.Internal.Compression",
          "name": "compressWithFilter",
          "normalized": "(ByteString-\u003eByteString)-\u003eString-\u003eBool-\u003ea()",
          "package": "happstack-server",
          "partial": "With Filter",
          "signature": "(ByteString-\u003eByteString)-\u003eString-\u003eBool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Compression.html#v:compressWithFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore the \u003ccode\u003eAccept-Encoding\u003c/code\u003e header in the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and attempt compress the body of the response with zlib's\n \u003ccode\u003edeflate\u003c/code\u003e method\n\u003c/p\u003e\u003cp\u003ecalls \u003ccode\u003e\u003ca\u003ecompressWithFilter\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ecompressedResponseFilter\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Compression",
          "name": "deflateFilter",
          "package": "happstack-server",
          "signature": "String-\u003e Bool-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Ignore the Accept-Encoding header in the Request and attempt compress the body of the response with zlib deflate method calls compressWithFilter using compress see also compressedResponseFilter",
          "hierarchy": "Happstack Server Internal Compression",
          "module": "Happstack.Server.Internal.Compression",
          "name": "deflateFilter",
          "normalized": "String-\u003eBool-\u003ea()",
          "package": "happstack-server",
          "partial": "Filter",
          "signature": "String-\u003eBool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Compression.html#v:deflateFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea parser for the Accept-Encoding header\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Compression",
          "name": "encodings",
          "package": "happstack-server",
          "signature": "GenParser Char st [(String, Maybe Double)]",
          "source": "src/Happstack-Server-Internal-Compression.html#encodings",
          "type": "function"
        },
        "index": {
          "description": "parser for the Accept-Encoding header",
          "hierarchy": "Happstack Server Internal Compression",
          "module": "Happstack.Server.Internal.Compression",
          "name": "encodings",
          "normalized": "GenParser Char a[(String,Maybe Double)]",
          "package": "happstack-server",
          "signature": "GenParser Char st[(String,Maybe Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Compression.html#v:encodings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore the \u003ccode\u003eAccept-Encoding\u003c/code\u003e header in the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and attempt to compress the body of the response with \u003ccode\u003egzip\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ecalls \u003ccode\u003e\u003ca\u003ecompressWithFilter\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ecompressedResponseFilter\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Compression",
          "name": "gzipFilter",
          "package": "happstack-server",
          "signature": "String-\u003e Bool-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Ignore the Accept-Encoding header in the Request and attempt to compress the body of the response with gzip calls compressWithFilter using compress see also compressedResponseFilter",
          "hierarchy": "Happstack Server Internal Compression",
          "module": "Happstack.Server.Internal.Compression",
          "name": "gzipFilter",
          "normalized": "String-\u003eBool-\u003ea()",
          "package": "happstack-server",
          "partial": "Filter",
          "signature": "String-\u003eBool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Compression.html#v:gzipFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Cookie",
          "name": "Cookie",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Cookie.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "Cookie",
          "package": "happstack-server",
          "partial": "Cookie",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea type for HTTP cookies. Usually created using \u003ccode\u003e\u003ca\u003emkCookie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "Cookie",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Cookie.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "type for HTTP cookies Usually created using mkCookie",
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "Cookie",
          "package": "happstack-server",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the lifetime of a cookie.\n\u003c/p\u003e\u003cp\u003eNote that we always set the max-age and expires headers because\n internet explorer does not honor max-age. You can specific \u003ccode\u003e\u003ca\u003eMaxAge\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eExpires\u003c/a\u003e\u003c/code\u003e and the other will be calculated for you. Choose which\n ever one makes your life easiest.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "CookieLife",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Cookie.html#CookieLife",
          "type": "data"
        },
        "index": {
          "description": "Specify the lifetime of cookie Note that we always set the max-age and expires headers because internet explorer does not honor max-age You can specific MaxAge or Expires and the other will be calculated for you Choose which ever one makes your life easiest",
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "CookieLife",
          "package": "happstack-server",
          "partial": "Cookie Life",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#t:CookieLife"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Cookie",
          "name": "calcLife",
          "package": "happstack-server",
          "signature": "CookieLife -\u003e IO (Maybe (Int, UTCTime))",
          "source": "src/Happstack-Server-Internal-Cookie.html#calcLife",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "calcLife",
          "normalized": "CookieLife-\u003eIO(Maybe(Int,UTCTime))",
          "package": "happstack-server",
          "partial": "Life",
          "signature": "CookieLife-\u003eIO(Maybe(Int,UTCTime))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:calcLife"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enot a supported api.  A parser for RFC 2109 cookies\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "cookiesParser",
          "package": "happstack-server",
          "signature": "GenParser Char st [Cookie]",
          "source": "src/Happstack-Server-Internal-Cookie.html#cookiesParser",
          "type": "function"
        },
        "index": {
          "description": "not supported api parser for RFC cookies",
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "cookiesParser",
          "normalized": "GenParser Char a[Cookie]",
          "package": "happstack-server",
          "partial": "Parser",
          "signature": "GenParser Char st[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:cookiesParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the most specific cookie with the given name. Fails if there is no such\n cookie or if the browser did not escape cookies in a proper fashion.\n Browser support for escaping cookies properly is very diverse.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "getCookie",
          "package": "happstack-server",
          "signature": "String -\u003e ByteString -\u003e m Cookie",
          "source": "src/Happstack-Server-Internal-Cookie.html#getCookie",
          "type": "function"
        },
        "index": {
          "description": "Get the most specific cookie with the given name Fails if there is no such cookie or if the browser did not escape cookies in proper fashion Browser support for escaping cookies properly is very diverse",
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "getCookie",
          "normalized": "String-\u003eByteString-\u003ea Cookie",
          "package": "happstack-server",
          "partial": "Cookie",
          "signature": "String-\u003eByteString-\u003em Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:getCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Cookie",
          "name": "getCookie'",
          "package": "happstack-server",
          "signature": "String -\u003e ByteString -\u003e m (Either String Cookie)",
          "source": "src/Happstack-Server-Internal-Cookie.html#getCookie%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "getCookie'",
          "normalized": "String-\u003eByteString-\u003ea(Either String Cookie)",
          "package": "happstack-server",
          "partial": "Cookie'",
          "signature": "String-\u003eByteString-\u003em(Either String Cookie)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:getCookie-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all cookies from the HTTP request. The cookies are ordered per RFC from\n the most specific to the least specific. Multiple cookies with the same\n name are allowed to exist.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "getCookies",
          "package": "happstack-server",
          "signature": "ByteString -\u003e m [Cookie]",
          "source": "src/Happstack-Server-Internal-Cookie.html#getCookies",
          "type": "function"
        },
        "index": {
          "description": "Get all cookies from the HTTP request The cookies are ordered per RFC from the most specific to the least specific Multiple cookies with the same name are allowed to exist",
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "getCookies",
          "normalized": "ByteString-\u003ea[Cookie]",
          "package": "happstack-server",
          "partial": "Cookies",
          "signature": "ByteString-\u003em[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:getCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Cookie",
          "name": "getCookies'",
          "package": "happstack-server",
          "signature": "ByteString -\u003e m (Either String [Cookie])",
          "source": "src/Happstack-Server-Internal-Cookie.html#getCookies%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "getCookies'",
          "normalized": "ByteString-\u003ea(Either String[Cookie])",
          "package": "happstack-server",
          "partial": "Cookies'",
          "signature": "ByteString-\u003em(Either String[Cookie])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:getCookies-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a Cookie in the Result.\n The values are escaped as per RFC 2109, but some browsers may\n have buggy support for cookies containing e.g. \u003ccode\u003e'\"'\u003c/code\u003e or \u003ccode\u003e' '\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlso, it seems that chrome, safari, and other webkit browsers do\n not like cookies which have double quotes around the domain and\n reject/ignore the cookie. So, we no longer quote the domain.\n\u003c/p\u003e\u003cp\u003einternet explorer does not honor the max-age directive so we set\n both max-age and expires.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eCookieLife\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecalcLife\u003c/a\u003e\u003c/code\u003e for a convenient way of calculating\n the first argument to this function.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "mkCookieHeader",
          "package": "happstack-server",
          "signature": "Maybe (Int, UTCTime) -\u003e Cookie -\u003e String",
          "source": "src/Happstack-Server-Internal-Cookie.html#mkCookieHeader",
          "type": "function"
        },
        "index": {
          "description": "Set Cookie in the Result The values are escaped as per RFC but some browsers may have buggy support for cookies containing e.g or Also it seems that chrome safari and other webkit browsers do not like cookies which have double quotes around the domain and reject ignore the cookie So we no longer quote the domain internet explorer does not honor the max-age directive so we set both max-age and expires See CookieLife and calcLife for convenient way of calculating the first argument to this function",
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "mkCookieHeader",
          "normalized": "Maybe(Int,UTCTime)-\u003eCookie-\u003eString",
          "package": "happstack-server",
          "partial": "Cookie Header",
          "signature": "Maybe(Int,UTCTime)-\u003eCookie-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:mkCookieHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot an supported api.  Takes a cookie header and returns\n either a String error message or an array of parsed cookies\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "parseCookies",
          "package": "happstack-server",
          "signature": "String -\u003e Either String [Cookie]",
          "source": "src/Happstack-Server-Internal-Cookie.html#parseCookies",
          "type": "function"
        },
        "index": {
          "description": "Not an supported api Takes cookie header and returns either String error message or an array of parsed cookies",
          "hierarchy": "Happstack Server Internal Cookie",
          "module": "Happstack.Server.Internal.Cookie",
          "name": "parseCookies",
          "normalized": "String-\u003eEither String[Cookie]",
          "package": "happstack-server",
          "partial": "Cookies",
          "signature": "String-\u003eEither String[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Cookie.html#v:parseCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Handler",
          "name": "Handler",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Handler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Handler",
          "module": "Happstack.Server.Internal.Handler",
          "name": "Handler",
          "package": "happstack-server",
          "partial": "Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Handler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnserializes the bytestring into a response.  If there is an\n error it will return \u003ccode\u003eLeft msg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Handler",
          "name": "parseResponse",
          "package": "happstack-server",
          "signature": "ByteString -\u003e Either String Response",
          "source": "src/Happstack-Server-Internal-Handler.html#parseResponse",
          "type": "function"
        },
        "index": {
          "description": "Unserializes the bytestring into response If there is an error it will return Left msg",
          "hierarchy": "Happstack Server Internal Handler",
          "module": "Happstack.Server.Internal.Handler",
          "name": "parseResponse",
          "normalized": "ByteString-\u003eEither String Response",
          "package": "happstack-server",
          "partial": "Response",
          "signature": "ByteString-\u003eEither String Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Handler.html#v:parseResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerializes the request to the given handle\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Handler",
          "name": "putRequest",
          "package": "happstack-server",
          "signature": "Handle -\u003e Request -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-Handler.html#putRequest",
          "type": "function"
        },
        "index": {
          "description": "Serializes the request to the given handle",
          "hierarchy": "Happstack Server Internal Handler",
          "module": "Happstack.Server.Internal.Handler",
          "name": "putRequest",
          "normalized": "Handle-\u003eRequest-\u003eIO()",
          "package": "happstack-server",
          "partial": "Request",
          "signature": "Handle-\u003eRequest-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Handler.html#v:putRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Handler",
          "name": "request",
          "package": "happstack-server",
          "signature": "TimeoutIO -\u003e Maybe (LogAccess UTCTime) -\u003e Host -\u003e (Request -\u003e IO Response) -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-Handler.html#request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Handler",
          "module": "Happstack.Server.Internal.Handler",
          "name": "request",
          "normalized": "TimeoutIO-\u003eMaybe(LogAccess UTCTime)-\u003eHost-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "package": "happstack-server",
          "signature": "TimeoutIO-\u003eMaybe(LogAccess UTCTime)-\u003eHost-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Handler.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Listen",
          "name": "Listen",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Listen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Listen",
          "module": "Happstack.Server.Internal.Listen",
          "name": "Listen",
          "package": "happstack-server",
          "partial": "Listen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Listen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind and listen port\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Listen",
          "name": "listen",
          "package": "happstack-server",
          "signature": "Conf -\u003e (Request -\u003e IO Response) -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-Listen.html#listen",
          "type": "function"
        },
        "index": {
          "description": "Bind and listen port",
          "hierarchy": "Happstack Server Internal Listen",
          "module": "Happstack.Server.Internal.Listen",
          "name": "listen",
          "normalized": "Conf-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "package": "happstack-server",
          "signature": "Conf-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Listen.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a previously bind port and listen\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Listen",
          "name": "listen'",
          "package": "happstack-server",
          "signature": "Socket -\u003e Conf -\u003e (Request -\u003e IO Response) -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-Listen.html#listen%27",
          "type": "function"
        },
        "index": {
          "description": "Use previously bind port and listen",
          "hierarchy": "Happstack Server Internal Listen",
          "module": "Happstack.Server.Internal.Listen",
          "name": "listen'",
          "normalized": "Socket-\u003eConf-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "package": "happstack-server",
          "signature": "Socket-\u003eConf-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Listen.html#v:listen-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Listen",
          "name": "listenOn",
          "package": "happstack-server",
          "signature": "Int -\u003e IO Socket",
          "source": "src/Happstack-Server-Internal-Listen.html#listenOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Listen",
          "module": "Happstack.Server.Internal.Listen",
          "name": "listenOn",
          "normalized": "Int-\u003eIO Socket",
          "package": "happstack-server",
          "partial": "On",
          "signature": "Int-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Listen.html#v:listenOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Listen",
          "name": "listenOnIPv4",
          "package": "happstack-server",
          "signature": "String-\u003e Int-\u003e IO Socket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Listen",
          "module": "Happstack.Server.Internal.Listen",
          "name": "listenOnIPv4",
          "normalized": "String-\u003eInt-\u003eIO Socket",
          "package": "happstack-server",
          "partial": "On IPv",
          "signature": "String-\u003eInt-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Listen.html#v:listenOnIPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.LogFormat",
          "name": "LogFormat",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-LogFormat.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal LogFormat",
          "module": "Happstack.Server.Internal.LogFormat",
          "name": "LogFormat",
          "package": "happstack-server",
          "partial": "Log Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-LogFormat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat the request as describe in the Apache combined log format.\n   http:\u003cem/\u003ehttpd.apache.org\u003cem\u003edocs\u003c/em\u003e2.2/logs.html#combined\n\u003c/p\u003e\u003cp\u003eThe format is: \u003ca\u003e%h - %u %t \"%r\" %\u003es %b \"%{Referer}i\" \"%{User-agent}i\"\u003c/a\u003e\n %h:            This is the IP address of the client (remote host) which made the request to the server.\n %u:            This is the userid of the person requesting the document as determined by HTTP authentication.\n %t:            The time that the request was received.\n %r:            The request line from the client is given in double quotes.\n %\u003es:           This is the status code that the server sends back to the client.\n %b:            The last part indicates the size of the object returned to the client, not including the response headers.\n %{Referer}:    The \u003ca\u003eReferer\u003c/a\u003e (sic) HTTP request header.\n %{User-agent}: The User-Agent HTTP request header.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.LogFormat",
          "name": "formatRequestCombined",
          "package": "happstack-server",
          "signature": "String -\u003e String -\u003e t -\u003e String -\u003e Int -\u003e Integer -\u003e String -\u003e String -\u003e String",
          "source": "src/Happstack-Server-Internal-LogFormat.html#formatRequestCombined",
          "type": "function"
        },
        "index": {
          "description": "Format the request as describe in the Apache combined log format http httpd.apache.org docs logs.html combined The format is Referer User-agent This is the IP address of the client remote host which made the request to the server This is the userid of the person requesting the document as determined by HTTP authentication The time that the request was received The request line from the client is given in double quotes This is the status code that the server sends back to the client The last part indicates the size of the object returned to the client not including the response headers Referer The Referer sic HTTP request header User-agent The User-Agent HTTP request header",
          "hierarchy": "Happstack Server Internal LogFormat",
          "module": "Happstack.Server.Internal.LogFormat",
          "name": "formatRequestCombined",
          "normalized": "String-\u003eString-\u003ea-\u003eString-\u003eInt-\u003eInteger-\u003eString-\u003eString-\u003eString",
          "package": "happstack-server",
          "partial": "Request Combined",
          "signature": "String-\u003eString-\u003et-\u003eString-\u003eInt-\u003eInteger-\u003eString-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-LogFormat.html#v:formatRequestCombined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat the time as describe in the Apache combined log format.\n   http:\u003cem/\u003ehttpd.apache.org\u003cem\u003edocs\u003c/em\u003e2.2/logs.html#combined\n\u003c/p\u003e\u003cp\u003eThe format is:\n   [day\u003cem\u003emonth\u003c/em\u003eyear:hour:minute:second zone]\n    day = 2*digit\n    month = 3*letter\n    year = 4*digit\n    hour = 2*digit\n    minute = 2*digit\n    second = 2*digit\n    zone = (\u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e | \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e) 4*digit\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.LogFormat",
          "name": "formatTimeCombined",
          "package": "happstack-server",
          "signature": "t -\u003e String",
          "source": "src/Happstack-Server-Internal-LogFormat.html#formatTimeCombined",
          "type": "function"
        },
        "index": {
          "description": "Format the time as describe in the Apache combined log format http httpd.apache.org docs logs.html combined The format is day month year hour minute second zone day digit month letter year digit hour digit minute digit second digit zone digit",
          "hierarchy": "Happstack Server Internal LogFormat",
          "module": "Happstack.Server.Internal.LogFormat",
          "name": "formatTimeCombined",
          "normalized": "a-\u003eString",
          "package": "happstack-server",
          "partial": "Time Combined",
          "signature": "t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-LogFormat.html#v:formatTimeCombined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.LowLevel",
          "name": "LowLevel",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-LowLevel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal LowLevel",
          "module": "Happstack.Server.Internal.LowLevel",
          "name": "LowLevel",
          "package": "happstack-server",
          "partial": "Low Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-LowLevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "MessageWrap",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-MessageWrap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "MessageWrap",
          "package": "happstack-server",
          "partial": "Message Wrap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003edefaultBodyPolicy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "BodyPolicy",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#BodyPolicy",
          "type": "data"
        },
        "index": {
          "description": "see defaultBodyPolicy",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "BodyPolicy",
          "package": "happstack-server",
          "partial": "Body Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#t:BodyPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.MessageWrap\",\"Happstack.Server.RqData\"]",
          "name": "BodyPolicy",
          "package": "happstack-server",
          "signature": "BodyPolicy",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#BodyPolicy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:BodyPolicy\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:BodyPolicy\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "BodyPolicy",
          "package": "happstack-server",
          "partial": "Body Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:BodyPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "bodyInput",
          "package": "happstack-server",
          "signature": "BodyPolicy -\u003e Request -\u003e m ([(String, Input)], Maybe String)",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#bodyInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "bodyInput",
          "normalized": "BodyPolicy-\u003eRequest-\u003ea([(String,Input)],Maybe String)",
          "package": "happstack-server",
          "partial": "Input",
          "signature": "BodyPolicy-\u003eRequest-\u003em([(String,Input)],Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:bodyInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "decodeBody",
          "package": "happstack-server",
          "signature": "BodyPolicy -\u003e Maybe ContentType -\u003e ByteString -\u003e IO ([(String, Input)], Maybe String)",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#decodeBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "decodeBody",
          "normalized": "BodyPolicy-\u003eMaybe ContentType-\u003eByteString-\u003eIO([(String,Input)],Maybe String)",
          "package": "happstack-server",
          "partial": "Body",
          "signature": "BodyPolicy-\u003eMaybe ContentType-\u003eByteString-\u003eIO([(String,Input)],Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:decodeBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a \u003ccode\u003e\u003ca\u003eBodyPolicy\u003c/a\u003e\u003c/code\u003e for use with decodeBody\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.MessageWrap\",\"Happstack.Server.RqData\"]",
          "name": "defaultBodyPolicy",
          "package": "happstack-server",
          "signature": "FilePath-\u003e Int64-\u003e Int64-\u003e Int64-\u003e BodyPolicy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:defaultBodyPolicy\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:defaultBodyPolicy\"]"
        },
        "index": {
          "description": "create BodyPolicy for use with decodeBody",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "defaultBodyPolicy",
          "normalized": "FilePath-\u003eInt-\u003eInt-\u003eInt-\u003eBodyPolicy",
          "package": "happstack-server",
          "partial": "Body Policy",
          "signature": "FilePath-\u003eInt-\u003eInt-\u003eInt-\u003eBodyPolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:defaultBodyPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.MessageWrap\",\"Happstack.Server.Internal.Multipart\"]",
          "name": "defaultInputIter",
          "package": "happstack-server",
          "signature": "FileSaver -\u003e FilePath -\u003e Int64 -\u003e Int64 -\u003e Int64 -\u003e Int64 -\u003e Int64 -\u003e Int64 -\u003e Work -\u003e IO InputIter",
          "source": "src/Happstack-Server-Internal-Multipart.html#defaultInputIter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:defaultInputIter\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:defaultInputIter\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "defaultInputIter",
          "normalized": "FileSaver-\u003eFilePath-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eWork-\u003eIO InputIter",
          "package": "happstack-server",
          "partial": "Input Iter",
          "signature": "FileSaver-\u003eFilePath-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eWork-\u003eIO InputIter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:defaultInputIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes application/x-www-form-urlencoded inputs.\n TODO: should any of the [] be error conditions?\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "formDecode",
          "package": "happstack-server",
          "signature": "String -\u003e [(String, Input)]",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#formDecode",
          "type": "function"
        },
        "index": {
          "description": "Decodes application x-www-form-urlencoded inputs TODO should any of the be error conditions",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "formDecode",
          "normalized": "String-\u003e[(String,Input)]",
          "package": "happstack-server",
          "partial": "Decode",
          "signature": "String-\u003e[(String,Input)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:formDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.MessageWrap\",\"Happstack.Server.RqData\"]",
          "name": "inputWorker",
          "package": "happstack-server",
          "signature": "Int64 -\u003e Int64 -\u003e Int64 -\u003e InputWorker",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#BodyPolicy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:inputWorker\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:inputWorker\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "inputWorker",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInputWorker",
          "package": "happstack-server",
          "partial": "Worker",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInputWorker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:inputWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum bytes for files uploaded in this \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.MessageWrap\",\"Happstack.Server.RqData\"]",
          "name": "maxDisk",
          "package": "happstack-server",
          "signature": "Int64",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#BodyPolicy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:maxDisk\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:maxDisk\"]"
        },
        "index": {
          "description": "maximum bytes for files uploaded in this Request",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "maxDisk",
          "package": "happstack-server",
          "partial": "Disk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:maxDisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum bytes of overhead for headers in \u003ccode\u003emultipart/form-data\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.MessageWrap\",\"Happstack.Server.RqData\"]",
          "name": "maxHeader",
          "package": "happstack-server",
          "signature": "Int64",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#BodyPolicy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:maxHeader\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:maxHeader\"]"
        },
        "index": {
          "description": "maximum bytes of overhead for headers in multipart form-data",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "maxHeader",
          "package": "happstack-server",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:maxHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum bytes for all non-file values in the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e body\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.MessageWrap\",\"Happstack.Server.RqData\"]",
          "name": "maxRAM",
          "package": "happstack-server",
          "signature": "Int64",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#BodyPolicy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:maxRAM\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:maxRAM\"]"
        },
        "index": {
          "description": "maximum bytes for all non-file values in the Request body",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "maxRAM",
          "package": "happstack-server",
          "partial": "RAM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:maxRAM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes multipart/form-data input.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "multipartDecode",
          "package": "happstack-server",
          "signature": "InputWorker-\u003e [(String, String)]-\u003e ByteString-\u003e IO ([(String, Input)], Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Decodes multipart form-data input",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "multipartDecode",
          "normalized": "InputWorker-\u003e[(String,String)]-\u003eByteString-\u003eIO([(String,Input)],Maybe String)",
          "package": "happstack-server",
          "partial": "Decode",
          "signature": "InputWorker-\u003e[(String,String)]-\u003eByteString-\u003eIO([(String,Input)],Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:multipartDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path components from a String.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "pathEls",
          "package": "happstack-server",
          "signature": "String -\u003e [String]",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#pathEls",
          "type": "function"
        },
        "index": {
          "description": "Get the path components from String",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "pathEls",
          "normalized": "String-\u003e[String]",
          "package": "happstack-server",
          "partial": "Els",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:pathEls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "queryInput",
          "package": "happstack-server",
          "signature": "SURI -\u003e [(String, Input)]",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#queryInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "queryInput",
          "normalized": "SURI-\u003e[(String,Input)]",
          "package": "happstack-server",
          "partial": "Input",
          "signature": "SURI-\u003e[(String,Input)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:queryInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit is like break, but the matching element is dropped.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "split",
          "package": "happstack-server",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#split",
          "type": "function"
        },
        "index": {
          "description": "Split is like break but the matching element is dropped",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "split",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "happstack-server",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeadly splits a list by the provided separator and collects the results\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "splitList",
          "package": "happstack-server",
          "signature": "a -\u003e [a] -\u003e [[a]]",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#splitList",
          "type": "function"
        },
        "index": {
          "description": "Repeadly splits list by the provided separator and collects the results",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "splitList",
          "normalized": "a-\u003e[a]-\u003e[[a]]",
          "package": "happstack-server",
          "partial": "List",
          "signature": "a-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:splitList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly splits a list and collects the results\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "splitListBy",
          "package": "happstack-server",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#splitListBy",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly splits list and collects the results",
          "hierarchy": "Happstack Server Internal MessageWrap",
          "module": "Happstack.Server.Internal.MessageWrap",
          "name": "splitListBy",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "happstack-server",
          "partial": "List By",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-MessageWrap.html#v:splitListBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the Monad stack used by Happstack. You mostly don't want to be looking in here. Look in \u003ca\u003eHappstack.Server.Monads\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "Monads",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the Monad stack used by Happstack You mostly don want to be looking in here Look in Happstack.Server.Monads instead",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "Monads",
          "package": "happstack-server",
          "partial": "Monads",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFilterFun\u003c/a\u003e\u003c/code\u003e is a lot more fun to type than \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSetAppend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eDual\u003c/a\u003e\u003c/code\u003e\n (\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e a))\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "FilterFun",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#FilterFun",
          "type": "type"
        },
        "index": {
          "description": "FilterFun is lot more fun to type than SetAppend Dual Endo",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "FilterFun",
          "package": "happstack-server",
          "partial": "Filter Fun",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:FilterFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of functions for manipulating filters.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e implements \u003ccode\u003e\u003ca\u003eFilterMonad\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e so these methods\n are the fundamental ways of manipulating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "FilterMonad",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#FilterMonad",
          "type": "class"
        },
        "index": {
          "description": "set of functions for manipulating filters ServerPartT implements FilterMonad Response so these methods are the fundamental ways of manipulating Response values",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "FilterMonad",
          "package": "happstack-server",
          "partial": "Filter Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:FilterMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "FilterT",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#FilterT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "FilterT",
          "package": "happstack-server",
          "partial": "Filter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:FilterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eServerMonad\u003c/a\u003e\u003c/code\u003e class provides methods for reading or locally\n modifying the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. It is essentially a specialized version of\n the \u003ccode\u003e\u003ca\u003eMonadReader\u003c/a\u003e\u003c/code\u003e class. Providing the unique names, \u003ccode\u003e\u003ca\u003easkRq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003elocalRq\u003c/a\u003e\u003c/code\u003e makes it easier to use \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e\n together.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "ServerMonad",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#ServerMonad",
          "type": "class"
        },
        "index": {
          "description": "The ServerMonad class provides methods for reading or locally modifying the Request It is essentially specialized version of the MonadReader class Providing the unique names askRq and localRq makes it easier to use ServerPartT and ReaderT together",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "ServerMonad",
          "package": "happstack-server",
          "partial": "Server Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:ServerMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "ServerPart",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#ServerPart",
          "type": "type"
        },
        "index": {
          "description": "An alias for ServerPartT IO",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "ServerPart",
          "package": "happstack-server",
          "partial": "Server Part",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:ServerPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e is a rich, featureful monad for web development.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003esimpleHTTP\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eServerMonad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFilterMonad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWebMonad\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003eHasRqData\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "ServerPartT",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#ServerPartT",
          "type": "newtype"
        },
        "index": {
          "description": "ServerPartT is rich featureful monad for web development see also simpleHTTP ServerMonad FilterMonad WebMonad and HasRqData",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "ServerPartT",
          "package": "happstack-server",
          "partial": "Server Part",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:ServerPartT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoid operation container.  If \u003ccode\u003ea\u003c/code\u003e is a monoid, then\n \u003ccode\u003e\u003ca\u003eSetAppend\u003c/a\u003e\u003c/code\u003e is a monoid with the following behaviors:\n\u003c/p\u003e\u003cpre\u003e  Set    x `mappend` Append y = Set    (x `mappend` y)\n  Append x `mappend` Append y = Append (x `mappend` y)\n  _        `mappend` Set y    = Set y\n\u003c/pre\u003e\u003cp\u003eA simple way of summarizing this is, if the right side is \u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e,\n then the right is appended to the left.  If the right side is\n \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e, then the left side is ignored.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "SetAppend",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#SetAppend",
          "type": "data"
        },
        "index": {
          "description": "monoid operation container If is monoid then SetAppend is monoid with the following behaviors Set mappend Append Set mappend Append mappend Append Append mappend mappend Set Set simple way of summarizing this is if the right side is Append then the right is appended to the left If the right side is Set then the left side is ignored",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "SetAppend",
          "package": "happstack-server",
          "partial": "Set Append",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:SetAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUnWebT\u003c/a\u003e\u003c/code\u003e is almost exclusively used with \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e. If you\n are not using \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e then you do not need to wrap your\n head around this type. If you are -- the type is not as complex as\n it first appears.\n\u003c/p\u003e\u003cp\u003eIt is worth discussing the unpacked structure of \u003ccode\u003e\u003ca\u003eWebT\u003c/a\u003e\u003c/code\u003e a bit as\n it's exposed in \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emapWebT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA fully unpacked \u003ccode\u003e\u003ca\u003eWebT\u003c/a\u003e\u003c/code\u003e has a structure that looks like:\n\u003c/p\u003e\u003cpre\u003e ununWebT $ WebT m a :: m (Maybe (Either Response a, FilterFun Response))\n\u003c/pre\u003e\u003cp\u003eSo, ignoring \u003ccode\u003em\u003c/code\u003e, as it is just the containing \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, the\n  outermost layer is a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.  This is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e was\n  called or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eSetAppend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e))\u003c/code\u003e if \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e wasn't called.  Inside the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, there\n  is a pair.  The second element of the pair is our filter function\n  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilterFun\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilterFun\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a type\n  alias for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSetAppend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eDual\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e))\u003c/code\u003e.  This is\n  just a wrapper for a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e function with a\n  particular \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e behavior.  The value\n\u003c/p\u003e\u003cpre\u003e  Append (Dual (Endo f))\n\u003c/pre\u003e\u003cp\u003eCauses \u003ccode\u003ef\u003c/code\u003e to be composed with the previous filter.\n\u003c/p\u003e\u003cpre\u003e  Set (Dual (Endo f))\n\u003c/pre\u003e\u003cp\u003eCauses \u003ccode\u003ef\u003c/code\u003e to not be composed with the previous filter.\n\u003c/p\u003e\u003cp\u003eFinally, the first element of the pair is either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAnother way of looking at all these pieces is from the behaviors\n  they control.  The \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e controls the \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e behavior.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e\n  (\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e f)\u003c/code\u003e comes from the \u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e behavior.  Likewise,\n  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e f)\u003c/code\u003e is from \u003ccode\u003e\u003ca\u003ecomposeFilter\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is what you get when you call \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e and\n  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is the normal exit.\n\u003c/p\u003e\u003cp\u003eAn example case statement looks like:\n\u003c/p\u003e\u003cpre\u003e  ex1 webt = do\n    val \u003c- ununWebT webt\n    case val of\n        Nothing -\u003e Nothing  -- this is the interior value when mzero was used\n        Just (Left r, f) -\u003e Just (Left r, f) -- r is the value that was passed into \"finishWith\"\n                                             -- f is our filter function\n        Just (Right a, f) -\u003e Just (Right a, f) -- a is our normal monadic value\n                                               -- f is still our filter function\n\u003c/pre\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "UnWebT",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#UnWebT",
          "type": "type"
        },
        "index": {
          "description": "UnWebT is almost exclusively used with mapServerPartT If you are not using mapServerPartT then you do not need to wrap your head around this type If you are the type is not as complex as it first appears It is worth discussing the unpacked structure of WebT bit as it exposed in mapServerPartT and mapWebT fully unpacked WebT has structure that looks like ununWebT WebT Maybe Either Response FilterFun Response So ignoring as it is just the containing Monad the outermost layer is Maybe This is Nothing if mzero was called or Just Either Response SetAppend Endo Response if mzero wasn called Inside the Maybe there is pair The second element of the pair is our filter function FilterFun Response FilterFun Response is type alias for SetAppend Dual Endo Response This is just wrapper for Response Response function with particular Monoid behavior The value Append Dual Endo Causes to be composed with the previous filter Set Dual Endo Causes to not be composed with the previous filter Finally the first element of the pair is either Left Response or Right Another way of looking at all these pieces is from the behaviors they control The Maybe controls the mzero behavior Set Endo comes from the setFilter behavior Likewise Append Endo is from composeFilter Left Response is what you get when you call finishWith and Right is the normal exit An example case statement looks like ex1 webt do val ununWebT webt case val of Nothing Nothing this is the interior value when mzero was used Just Left Just Left is the value that was passed into finishWith is our filter function Just Right Just Right is our normal monadic value is still our filter function",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "UnWebT",
          "package": "happstack-server",
          "partial": "Un Web",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:UnWebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eWebT\u003c/a\u003e\u003c/code\u003e when using \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "Web",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#Web",
          "type": "type"
        },
        "index": {
          "description": "An alias for WebT when using IO",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "Web",
          "package": "happstack-server",
          "partial": "Web",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:Web"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWebMonad\u003c/a\u003e\u003c/code\u003e provides a means to end the current computation\n and return a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e immediately.  This provides an\n alternate escape route.  In particular it has a monadic value\n of any type.  And unless you call \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e first your\n response filters will be applied normally.\n\u003c/p\u003e\u003cp\u003eExtremely useful when you're deep inside a monad and decide\n that you want to return a completely different content type,\n since it doesn't force you to convert all your return types to\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e early just to accommodate this.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eescape\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eescape'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "WebMonad",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#WebMonad",
          "type": "class"
        },
        "index": {
          "description": "WebMonad provides means to end the current computation and return Response immediately This provides an alternate escape route In particular it has monadic value of any type And unless you call setFilter id first your response filters will be applied normally Extremely useful when you re deep inside monad and decide that you want to return completely different content type since it doesn force you to convert all your return types to Response early just to accommodate this see also escape and escape",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "WebMonad",
          "package": "happstack-server",
          "partial": "Web Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:WebMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e building object.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "WebT",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#WebT",
          "type": "newtype"
        },
        "index": {
          "description": "The basic Response building object",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "WebT",
          "package": "happstack-server",
          "partial": "Web",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#t:WebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "Append",
          "package": "happstack-server",
          "signature": "Append a",
          "source": "src/Happstack-Server-Internal-Monads.html#SetAppend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "Append",
          "package": "happstack-server",
          "partial": "Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:Append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "FilterT",
          "package": "happstack-server",
          "signature": "FilterT",
          "source": "src/Happstack-Server-Internal-Monads.html#FilterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "FilterT",
          "package": "happstack-server",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:FilterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "ServerPartT",
          "package": "happstack-server",
          "signature": "ServerPartT",
          "source": "src/Happstack-Server-Internal-Monads.html#ServerPartT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "ServerPartT",
          "package": "happstack-server",
          "partial": "Server Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:ServerPartT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "Set",
          "package": "happstack-server",
          "signature": "Set a",
          "source": "src/Happstack-Server-Internal-Monads.html#SetAppend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "Set",
          "package": "happstack-server",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "WebT",
          "package": "happstack-server",
          "signature": "WebT",
          "source": "src/Happstack-Server-Internal-Monads.html#WebT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "WebT",
          "package": "happstack-server",
          "partial": "Web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:WebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor for a \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e when you don't care about the request.\n\u003c/p\u003e\u003cp\u003eNOTE: This is mostly for internal use. If you think you need to use\n it in your own code, you might consider asking on the mailing list\n or IRC to find out if there is an alternative solution.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "anyRequest",
          "package": "happstack-server",
          "signature": "WebT m a -\u003e ServerPartT m a",
          "source": "src/Happstack-Server-Internal-Monads.html#anyRequest",
          "type": "function"
        },
        "index": {
          "description": "constructor for ServerPartT when you don care about the request NOTE This is mostly for internal use If you think you need to use it in your own code you might consider asking on the mailing list or IRC to find out if there is an alternative solution",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "anyRequest",
          "normalized": "WebT a b-\u003eServerPartT a b",
          "package": "happstack-server",
          "partial": "Request",
          "signature": "WebT m a-\u003eServerPartT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:anyRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "askRq",
          "package": "happstack-server",
          "signature": "m Request",
          "source": "src/Happstack-Server-Internal-Monads.html#askRq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "askRq",
          "package": "happstack-server",
          "partial": "Rq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:askRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposes your filter function with the existing filter\n function.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "composeFilter",
          "package": "happstack-server",
          "signature": "(a -\u003e a) -\u003e m ()",
          "source": "src/Happstack-Server-Internal-Monads.html#composeFilter",
          "type": "method"
        },
        "index": {
          "description": "Composes your filter function with the existing filter function",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "composeFilter",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "happstack-server",
          "partial": "Filter",
          "signature": "(a-\u003ea)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:composeFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: This function appears to do nothing.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eWhat is this for, exactly?  I don't understand why \u003ccode\u003eShow a\u003c/code\u003e is\n even in the context Deprecated: This function appears to do nothing\n at all. If it use it, let us know why.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "debugFilter",
          "package": "happstack-server",
          "signature": "ServerPartT m a -\u003e ServerPartT m a",
          "source": "src/Happstack-Server-Internal-Monads.html#debugFilter",
          "type": "function"
        },
        "index": {
          "description": "Deprecated This function appears to do nothing What is this for exactly don understand why Show is even in the context Deprecated This function appears to do nothing at all If it use it let us know why",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "debugFilter",
          "normalized": "ServerPartT a b-\u003eServerPartT a b",
          "package": "happstack-server",
          "partial": "Filter",
          "signature": "ServerPartT m a-\u003eServerPartT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:debugFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to ignore all your filters and immediately end the\n computation.  A combination of \u003ccode\u003e\u003ca\u003eignoreFilters\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Monads\",\"Happstack.Server.Monads\"]",
          "name": "escape",
          "package": "happstack-server",
          "signature": "m a -\u003e m b",
          "source": "src/Happstack-Server-Internal-Monads.html#escape",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:escape\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:escape\"]"
        },
        "index": {
          "description": "Used to ignore all your filters and immediately end the computation combination of ignoreFilters and finishWith",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "escape",
          "normalized": "a b-\u003ea c",
          "package": "happstack-server",
          "signature": "m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alternate form of \u003ccode\u003e\u003ca\u003eescape\u003c/a\u003e\u003c/code\u003e that can be easily used within a do\n block.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Monads\",\"Happstack.Server.Monads\"]",
          "name": "escape'",
          "package": "happstack-server",
          "signature": "a -\u003e m b",
          "source": "src/Happstack-Server-Internal-Monads.html#escape%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:escape-39-\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:escape-39-\"]"
        },
        "index": {
          "description": "An alternate form of escape that can be easily used within do block",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "escape'",
          "normalized": "a-\u003eb c",
          "package": "happstack-server",
          "signature": "a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:escape-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "escapeString",
          "package": "happstack-server",
          "signature": "String -\u003e String",
          "source": "src/Happstack-Server-Internal-Monads.html#escapeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "escapeString",
          "normalized": "String-\u003eString",
          "package": "happstack-server",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:escapeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the value from a \u003ccode\u003e\u003ca\u003eSetAppend\u003c/a\u003e\u003c/code\u003e.\n Note that a \u003ccode\u003e\u003ca\u003eSetAppend\u003c/a\u003e\u003c/code\u003e is actually a \u003ccode\u003eCoPointed\u003c/code\u003e from:\n \u003ca\u003ehttp://hackage.haskell.org/packages/archive/category-extras/latest/doc/html/Control-Functor-Pointed.html\u003c/a\u003e\n But lets not drag in that dependency. yet...\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "extract",
          "package": "happstack-server",
          "signature": "SetAppend t -\u003e t",
          "source": "src/Happstack-Server-Internal-Monads.html#extract",
          "type": "function"
        },
        "index": {
          "description": "Extract the value from SetAppend Note that SetAppend is actually CoPointed from http hackage.haskell.org packages archive category-extras latest doc html Control-Functor-Pointed.html But lets not drag in that dependency yet",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "extract",
          "normalized": "SetAppend a-\u003ea",
          "package": "happstack-server",
          "signature": "SetAppend t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "failHtml",
          "package": "happstack-server",
          "signature": "String -\u003e String",
          "source": "src/Happstack-Server-Internal-Monads.html#failHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "failHtml",
          "normalized": "String-\u003eString",
          "package": "happstack-server",
          "partial": "Html",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:failHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturn a function into a \u003ccode\u003e\u003ca\u003eFilterFun\u003c/a\u003e\u003c/code\u003e. Primarily used with \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Monads\",\"Happstack.Server.Monads\"]",
          "name": "filterFun",
          "package": "happstack-server",
          "signature": "(a -\u003e a) -\u003e FilterFun a",
          "source": "src/Happstack-Server-Internal-Monads.html#filterFun",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:filterFun\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:filterFun\"]"
        },
        "index": {
          "description": "turn function into FilterFun Primarily used with mapServerPartT",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "filterFun",
          "normalized": "(a-\u003ea)-\u003eFilterFun a",
          "package": "happstack-server",
          "partial": "Fun",
          "signature": "(a-\u003ea)-\u003eFilterFun a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:filterFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "finishWith",
          "package": "happstack-server",
          "signature": "finishWith",
          "source": "src/Happstack-Server-Internal-Monads.html#finishWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "finishWith",
          "package": "happstack-server",
          "partial": "With",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:finishWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the filter from the environment.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "getFilter",
          "package": "happstack-server",
          "signature": "m b -\u003e m (b, a -\u003e a)",
          "source": "src/Happstack-Server-Internal-Monads.html#getFilter",
          "type": "method"
        },
        "index": {
          "description": "Retrieves the filter from the environment",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "getFilter",
          "normalized": "a b-\u003ea(b,c-\u003ec)",
          "package": "happstack-server",
          "partial": "Filter",
          "signature": "m b-\u003em(b,a-\u003ea)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:getFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets all your filters. An alias for \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Monads\",\"Happstack.Server.Monads\"]",
          "name": "ignoreFilters",
          "package": "happstack-server",
          "signature": "m ()",
          "source": "src/Happstack-Server-Internal-Monads.html#ignoreFilters",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:ignoreFilters\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:ignoreFilters\"]"
        },
        "index": {
          "description": "Resets all your filters An alias for setFilter id",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "ignoreFilters",
          "normalized": "a()",
          "package": "happstack-server",
          "partial": "Filters",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:ignoreFilters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is kinda like a very oddly shaped \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emapWebT\u003c/a\u003e\u003c/code\u003e.\n You probably want one or the other of those.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "localContext",
          "package": "happstack-server",
          "signature": "(WebT m a -\u003e WebT m' a) -\u003e ServerPartT m a -\u003e ServerPartT m' a",
          "source": "src/Happstack-Server-Internal-Monads.html#localContext",
          "type": "function"
        },
        "index": {
          "description": "This is kinda like very oddly shaped mapServerPartT or mapWebT You probably want one or the other of those",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "localContext",
          "normalized": "(WebT a b-\u003eWebT c b)-\u003eServerPartT a b-\u003eServerPartT c b",
          "package": "happstack-server",
          "partial": "Context",
          "signature": "(WebT m a-\u003eWebT m' a)-\u003eServerPartT m a-\u003eServerPartT m' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:localContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "localRq",
          "package": "happstack-server",
          "signature": "(Request -\u003e Request) -\u003e m a -\u003e m a",
          "source": "src/Happstack-Server-Internal-Monads.html#localRq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "localRq",
          "normalized": "(Request-\u003eRequest)-\u003ea b-\u003ea b",
          "package": "happstack-server",
          "partial": "Rq",
          "signature": "(Request-\u003eRequest)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:localRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to transform the inner monad of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOften used when transforming a monad with \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e, since\n \u003ccode\u003esimpleHTTP\u003c/code\u003e requires a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.  Refer to \u003ccode\u003e\u003ca\u003eUnWebT\u003c/a\u003e\u003c/code\u003e\n for an explanation of the structure of the monad.\n\u003c/p\u003e\u003cp\u003eHere is an example.  Suppose you want to embed an \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e into your\n \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e to enable \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e in your \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e type MyServerPartT e m a = ServerPartT (ErrorT e m) a\n\u003c/pre\u003e\u003cp\u003eNow suppose you want to pass \u003ccode\u003eMyServerPartT\u003c/code\u003e into a function that\n demands a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e (e.g. \u003ccode\u003esimpleHTTP\u003c/code\u003e).  You can\n provide the function:\n\u003c/p\u003e\u003cpre\u003e   unpackErrorT :: (Monad m, Show e) =\u003e UnWebT (ErrorT e m) a -\u003e UnWebT m a\n   unpackErrorT et = do\n      eitherV \u003c- runErrorT et\n      return $ case eitherV of\n          Left err -\u003e Just (Left $ toResponse $\n                                   \"Catastrophic failure \" ++ show err\n                           , filterFun $ \\r -\u003e r{rsCode = 500})\n          Right x -\u003e x\n\u003c/pre\u003e\u003cp\u003eWith \u003ccode\u003eunpackErrorT\u003c/code\u003e you can now call \u003ccode\u003esimpleHTTP\u003c/code\u003e. Just wrap your\n \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e list.\n\u003c/p\u003e\u003cpre\u003e  simpleHTTP nullConf $ mapServerPartT unpackErrorT (myPart `catchError` myHandler)\n\u003c/pre\u003e\u003cp\u003eOr alternatively:\n\u003c/p\u003e\u003cpre\u003e  simpleHTTP' unpackErrorT nullConf (myPart `catchError` myHandler)\n\u003c/pre\u003e\u003cp\u003eAlso see \u003ccode\u003e\u003ca\u003espUnwrapErrorT\u003c/a\u003e\u003c/code\u003e for a more sophisticated version of this\n function.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Monads\",\"Happstack.Server.Monads\"]",
          "name": "mapServerPartT",
          "package": "happstack-server",
          "signature": "(UnWebT m a -\u003e UnWebT n b) -\u003e ServerPartT m a -\u003e ServerPartT n b",
          "source": "src/Happstack-Server-Internal-Monads.html#mapServerPartT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:mapServerPartT\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:mapServerPartT\"]"
        },
        "index": {
          "description": "Apply function to transform the inner monad of ServerPartT Often used when transforming monad with ServerPartT since simpleHTTP requires ServerPartT IO Refer to UnWebT for an explanation of the structure of the monad Here is an example Suppose you want to embed an ErrorT into your ServerPartT to enable throwError and catchError in your Monad type MyServerPartT ServerPartT ErrorT Now suppose you want to pass MyServerPartT into function that demands ServerPartT IO e.g simpleHTTP You can provide the function unpackErrorT Monad Show UnWebT ErrorT UnWebT unpackErrorT et do eitherV runErrorT et return case eitherV of Left err Just Left toResponse Catastrophic failure show err filterFun rsCode Right With unpackErrorT you can now call simpleHTTP Just wrap your ServerPartT list simpleHTTP nullConf mapServerPartT unpackErrorT myPart catchError myHandler Or alternatively simpleHTTP unpackErrorT nullConf myPart catchError myHandler Also see spUnwrapErrorT for more sophisticated version of this function",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "mapServerPartT",
          "normalized": "(UnWebT a b-\u003eUnWebT c d)-\u003eServerPartT a b-\u003eServerPartT c d",
          "package": "happstack-server",
          "partial": "Server Part",
          "signature": "(UnWebT m a-\u003eUnWebT n b)-\u003eServerPartT m a-\u003eServerPartT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:mapServerPartT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e where the first argument also takes\n a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.  Useful if you want to \u003ccode\u003e\u003ca\u003erunServerPartT\u003c/a\u003e\u003c/code\u003e on a different\n \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e inside your monad (see \u003ccode\u003espUnwrapErrorT\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Monads\",\"Happstack.Server.Monads\"]",
          "name": "mapServerPartT'",
          "package": "happstack-server",
          "signature": "(Request -\u003e UnWebT m a -\u003e UnWebT n b) -\u003e ServerPartT m a -\u003e ServerPartT n b",
          "source": "src/Happstack-Server-Internal-Monads.html#mapServerPartT%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:mapServerPartT-39-\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:mapServerPartT-39-\"]"
        },
        "index": {
          "description": "variant of mapServerPartT where the first argument also takes Request Useful if you want to runServerPartT on different ServerPartT inside your monad see spUnwrapErrorT",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "mapServerPartT'",
          "normalized": "(Request-\u003eUnWebT a b-\u003eUnWebT c d)-\u003eServerPartT a b-\u003eServerPartT c d",
          "package": "happstack-server",
          "partial": "Server Part T'",
          "signature": "(Request-\u003eUnWebT m a-\u003eUnWebT n b)-\u003eServerPartT m a-\u003eServerPartT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:mapServerPartT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e for a discussion of this function.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "mapWebT",
          "package": "happstack-server",
          "signature": "(UnWebT m a -\u003e UnWebT n b) -\u003e WebT m a -\u003e WebT n b",
          "source": "src/Happstack-Server-Internal-Monads.html#mapWebT",
          "type": "function"
        },
        "index": {
          "description": "See mapServerPartT for discussion of this function",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "mapWebT",
          "normalized": "(UnWebT a b-\u003eUnWebT c d)-\u003eWebT a b-\u003eWebT c d",
          "package": "happstack-server",
          "partial": "Web",
          "signature": "(UnWebT m a-\u003eUnWebT n b)-\u003eWebT m a-\u003eWebT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:mapWebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "mkFailMessage",
          "package": "happstack-server",
          "signature": "String -\u003e m b",
          "source": "src/Happstack-Server-Internal-Monads.html#mkFailMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "mkFailMessage",
          "normalized": "String-\u003ea b",
          "package": "happstack-server",
          "partial": "Fail Message",
          "signature": "String-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:mkFailMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor wrapping a \u003ccode\u003e\u003ca\u003eWebT\u003c/a\u003e\u003c/code\u003e back up.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003emkWebT\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eununWebT\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "mkWebT",
          "package": "happstack-server",
          "signature": "UnWebT m a -\u003e WebT m a",
          "source": "src/Happstack-Server-Internal-Monads.html#mkWebT",
          "type": "function"
        },
        "index": {
          "description": "For wrapping WebT back up mkWebT ununWebT id",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "mkWebT",
          "normalized": "UnWebT a b-\u003eWebT a b",
          "package": "happstack-server",
          "partial": "Web",
          "signature": "UnWebT m a-\u003eWebT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:mkWebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use msum instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated: use \u003ccode\u003e\u003ca\u003emsum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "multi",
          "package": "happstack-server",
          "signature": "[ServerPartT m a] -\u003e ServerPartT m a",
          "source": "src/Happstack-Server-Internal-Monads.html#multi",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use msum instead Deprecated use msum",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "multi",
          "normalized": "[ServerPartT a b]-\u003eServerPartT a b",
          "package": "happstack-server",
          "signature": "[ServerPartT m a]-\u003eServerPartT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:multi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "outputTraceMessage",
          "package": "happstack-server",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Happstack-Server-Internal-Monads.html#outputTraceMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "outputTraceMessage",
          "normalized": "String-\u003ea-\u003ea",
          "package": "happstack-server",
          "partial": "Trace Message",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:outputTraceMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParticularly useful when combined with \u003ccode\u003erunWebT\u003c/code\u003e to produce\n a \u003ccode\u003em (\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "runServerPartT",
          "package": "happstack-server",
          "signature": "ServerPartT m a -\u003e Request -\u003e WebT m a",
          "source": "src/Happstack-Server-Internal-Monads.html#runServerPartT",
          "type": "function"
        },
        "index": {
          "description": "Particularly useful when combined with runWebT to produce Maybe Response from Request",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "runServerPartT",
          "normalized": "ServerPartT a b-\u003eRequest-\u003eWebT a b",
          "package": "happstack-server",
          "partial": "Server Part",
          "signature": "ServerPartT m a-\u003eRequest-\u003eWebT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:runServerPartT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnores all previous alterations to your filter\n\u003c/p\u003e\u003cp\u003eAs an example:\n\u003c/p\u003e\u003cpre\u003e do\n   composeFilter f\n   setFilter g\n   return \"Hello World\"\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e will cause the first \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecomposeFilter\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e to\n be ignored.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "setFilter",
          "package": "happstack-server",
          "signature": "(a -\u003e a) -\u003e m ()",
          "source": "src/Happstack-Server-Internal-Monads.html#setFilter",
          "type": "method"
        },
        "index": {
          "description": "Ignores all previous alterations to your filter As an example do composeFilter setFilter return Hello World The setFilter will cause the first composeFilter to be ignored",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "setFilter",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "happstack-server",
          "partial": "Filter",
          "signature": "(a-\u003ea)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:setFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "unFilterFun",
          "package": "happstack-server",
          "signature": "FilterFun a -\u003e a -\u003e a",
          "source": "src/Happstack-Server-Internal-Monads.html#unFilterFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "unFilterFun",
          "normalized": "FilterFun a-\u003ea-\u003ea",
          "package": "happstack-server",
          "partial": "Filter Fun",
          "signature": "FilterFun a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:unFilterFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "unFilterT",
          "package": "happstack-server",
          "signature": "WriterT (FilterFun a) m b",
          "source": "src/Happstack-Server-Internal-Monads.html#FilterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "unFilterT",
          "package": "happstack-server",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:unFilterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "unServerPartT",
          "package": "happstack-server",
          "signature": "ReaderT Request (WebT m) a",
          "source": "src/Happstack-Server-Internal-Monads.html#ServerPartT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "unServerPartT",
          "package": "happstack-server",
          "partial": "Server Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:unServerPartT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Monads",
          "name": "unWebT",
          "package": "happstack-server",
          "signature": "ErrorT Response (FilterT Response (MaybeT m)) a",
          "source": "src/Happstack-Server-Internal-Monads.html#WebT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "unWebT",
          "package": "happstack-server",
          "partial": "Web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:unWebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor when you really need to unpack a \u003ccode\u003e\u003ca\u003eWebT\u003c/a\u003e\u003c/code\u003e entirely (and not\n just unwrap the first layer with \u003ccode\u003e\u003ca\u003eunWebT\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "ununWebT",
          "package": "happstack-server",
          "signature": "WebT m a -\u003e UnWebT m a",
          "source": "src/Happstack-Server-Internal-Monads.html#ununWebT",
          "type": "function"
        },
        "index": {
          "description": "For when you really need to unpack WebT entirely and not just unwrap the first layer with unWebT",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "ununWebT",
          "normalized": "WebT a b-\u003eUnWebT a b",
          "package": "happstack-server",
          "partial": "Web",
          "signature": "WebT m a-\u003eUnWebT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:ununWebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction for lifting WebT to ServerPartT\n\u003c/p\u003e\u003cp\u003eNOTE: This is mostly for internal use. If you want to access the\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e in user-code see \u003ccode\u003e\u003ca\u003easkRq\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eServerMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e do request \u003c- askRq\n    ...\n\u003c/pre\u003e",
          "module": "Happstack.Server.Internal.Monads",
          "name": "withRequest",
          "package": "happstack-server",
          "signature": "(Request -\u003e WebT m a) -\u003e ServerPartT m a",
          "source": "src/Happstack-Server-Internal-Monads.html#withRequest",
          "type": "function"
        },
        "index": {
          "description": "function for lifting WebT to ServerPartT NOTE This is mostly for internal use If you want to access the Request in user-code see askRq from ServerMonad do request askRq",
          "hierarchy": "Happstack Server Internal Monads",
          "module": "Happstack.Server.Internal.Monads",
          "name": "withRequest",
          "normalized": "(Request-\u003eWebT a b)-\u003eServerPartT a b",
          "package": "happstack-server",
          "partial": "Request",
          "signature": "(Request-\u003eWebT m a)-\u003eServerPartT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Monads.html#v:withRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "Multipart",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Multipart.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "Multipart",
          "package": "happstack-server",
          "partial": "Multipart",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "BodyPart",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Multipart.html#BodyPart",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "BodyPart",
          "package": "happstack-server",
          "partial": "Body Part",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#t:BodyPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "FileSaver",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Multipart.html#FileSaver",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "FileSaver",
          "package": "happstack-server",
          "partial": "File Saver",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#t:FileSaver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "InputIter",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Multipart.html#InputIter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "InputIter",
          "package": "happstack-server",
          "partial": "Input Iter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#t:InputIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "InputWorker",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Multipart.html#InputWorker",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "InputWorker",
          "package": "happstack-server",
          "partial": "Input Worker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#t:InputWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "Work",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Multipart.html#Work",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "Work",
          "package": "happstack-server",
          "partial": "Work",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#t:Work"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eheaders body\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "BodyPart",
          "package": "happstack-server",
          "signature": "BodyPart ByteString ByteString",
          "source": "src/Happstack-Server-Internal-Multipart.html#BodyPart",
          "type": "function"
        },
        "index": {
          "description": "headers body",
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "BodyPart",
          "package": "happstack-server",
          "partial": "Body Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:BodyPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "BodyResult",
          "package": "happstack-server",
          "signature": "BodyResult (String, Input) InputWorker",
          "source": "src/Happstack-Server-Internal-Multipart.html#InputIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "BodyResult",
          "normalized": "BodyResult(String,Input)InputWorker",
          "package": "happstack-server",
          "partial": "Body Result",
          "signature": "BodyResult(String,Input)InputWorker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:BodyResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "BodyWork",
          "package": "happstack-server",
          "signature": "BodyWork ContentType [(String, String)] ByteString",
          "source": "src/Happstack-Server-Internal-Multipart.html#Work",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "BodyWork",
          "normalized": "BodyWork ContentType[(String,String)]ByteString",
          "package": "happstack-server",
          "partial": "Body Work",
          "signature": "BodyWork ContentType[(String,String)]ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:BodyWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "Failed",
          "package": "happstack-server",
          "signature": "Failed (Maybe (String, Input)) String",
          "source": "src/Happstack-Server-Internal-Multipart.html#InputIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "Failed",
          "normalized": "Failed(Maybe(String,Input))String",
          "package": "happstack-server",
          "partial": "Failed",
          "signature": "Failed(Maybe(String,Input))String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:Failed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "HeaderResult",
          "package": "happstack-server",
          "signature": "HeaderResult [Header] InputWorker",
          "source": "src/Happstack-Server-Internal-Multipart.html#InputIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "HeaderResult",
          "normalized": "HeaderResult[Header]InputWorker",
          "package": "happstack-server",
          "partial": "Header Result",
          "signature": "HeaderResult[Header]InputWorker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:HeaderResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "HeaderWork",
          "package": "happstack-server",
          "signature": "HeaderWork ByteString",
          "source": "src/Happstack-Server-Internal-Multipart.html#Work",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "HeaderWork",
          "package": "happstack-server",
          "partial": "Header Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:HeaderWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "blankLine",
          "package": "happstack-server",
          "signature": "ByteString",
          "source": "src/Happstack-Server-Internal-Multipart.html#blankLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "blankLine",
          "package": "happstack-server",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:blankLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "bodyPartToInput",
          "package": "happstack-server",
          "signature": "InputWorker -\u003e BodyPart -\u003e IO InputIter",
          "source": "src/Happstack-Server-Internal-Multipart.html#bodyPartToInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "bodyPartToInput",
          "normalized": "InputWorker-\u003eBodyPart-\u003eIO InputIter",
          "package": "happstack-server",
          "partial": "Part To Input",
          "signature": "InputWorker-\u003eBodyPart-\u003eIO InputIter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:bodyPartToInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "bodyPartsToInputs",
          "package": "happstack-server",
          "signature": "InputWorker -\u003e [BodyPart] -\u003e IO ([(String, Input)], Maybe String)",
          "source": "src/Happstack-Server-Internal-Multipart.html#bodyPartsToInputs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "bodyPartsToInputs",
          "normalized": "InputWorker-\u003e[BodyPart]-\u003eIO([(String,Input)],Maybe String)",
          "package": "happstack-server",
          "partial": "Parts To Inputs",
          "signature": "InputWorker-\u003e[BodyPart]-\u003eIO([(String,Input)],Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:bodyPartsToInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "crlf",
          "package": "happstack-server",
          "signature": "ByteString",
          "source": "src/Happstack-Server-Internal-Multipart.html#crlf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "crlf",
          "package": "happstack-server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:crlf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "crlfcrlf",
          "package": "happstack-server",
          "signature": "ByteString",
          "source": "src/Happstack-Server-Internal-Multipart.html#crlfcrlf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "crlfcrlf",
          "package": "happstack-server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:crlfcrlf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "defaultFileSaver",
          "package": "happstack-server",
          "signature": "FilePath -\u003e Int64 -\u003e FilePath -\u003e ByteString -\u003e IO (Bool, Int64, FilePath)",
          "source": "src/Happstack-Server-Internal-Multipart.html#defaultFileSaver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "defaultFileSaver",
          "normalized": "FilePath-\u003eInt-\u003eFilePath-\u003eByteString-\u003eIO(Bool,Int,FilePath)",
          "package": "happstack-server",
          "partial": "File Saver",
          "signature": "FilePath-\u003eInt-\u003eFilePath-\u003eByteString-\u003eIO(Bool,Int,FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:defaultFileSaver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default content-type for variables.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "defaultInputType",
          "package": "happstack-server",
          "signature": "ContentType",
          "source": "src/Happstack-Server-Internal-Multipart.html#defaultInputType",
          "type": "function"
        },
        "index": {
          "description": "The default content-type for variables",
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "defaultInputType",
          "package": "happstack-server",
          "partial": "Input Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:defaultInputType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "dropLine",
          "package": "happstack-server",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Happstack-Server-Internal-Multipart.html#dropLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "dropLine",
          "normalized": "ByteString-\u003eByteString",
          "package": "happstack-server",
          "partial": "Line",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:dropLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "dropPreamble",
          "package": "happstack-server",
          "signature": "ByteString -\u003e ByteString -\u003e (ByteString, Maybe String)",
          "source": "src/Happstack-Server-Internal-Multipart.html#dropPreamble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "dropPreamble",
          "normalized": "ByteString-\u003eByteString-\u003e(ByteString,Maybe String)",
          "package": "happstack-server",
          "partial": "Preamble",
          "signature": "ByteString-\u003eByteString-\u003e(ByteString,Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:dropPreamble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "dropWhileS",
          "package": "happstack-server",
          "signature": "(ByteString -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Happstack-Server-Internal-Multipart.html#dropWhileS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "dropWhileS",
          "normalized": "(ByteString-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "happstack-server",
          "partial": "While",
          "signature": "(ByteString-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:dropWhileS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "hPutLimit",
          "package": "happstack-server",
          "signature": "Int64 -\u003e Handle -\u003e ByteString -\u003e IO (Bool, Int64)",
          "source": "src/Happstack-Server-Internal-Multipart.html#hPutLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "hPutLimit",
          "normalized": "Int-\u003eHandle-\u003eByteString-\u003eIO(Bool,Int)",
          "package": "happstack-server",
          "partial": "Put Limit",
          "signature": "Int-\u003eHandle-\u003eByteString-\u003eIO(Bool,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:hPutLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "hPutLimit'",
          "package": "happstack-server",
          "signature": "Int64 -\u003e Handle -\u003e Int64 -\u003e ByteString -\u003e IO (Bool, Int64)",
          "source": "src/Happstack-Server-Internal-Multipart.html#hPutLimit%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "hPutLimit'",
          "normalized": "Int-\u003eHandle-\u003eInt-\u003eByteString-\u003eIO(Bool,Int)",
          "package": "happstack-server",
          "partial": "Put Limit'",
          "signature": "Int-\u003eHandle-\u003eInt-\u003eByteString-\u003eIO(Bool,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:hPutLimit-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a string starts with two dashes followed by\n   the given boundary string.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "isBoundary",
          "package": "happstack-server",
          "signature": "ByteString-\u003e ByteString-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check whether string starts with two dashes followed by the given boundary string",
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "isBoundary",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "happstack-server",
          "partial": "Boundary",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:isBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "multipartBody",
          "package": "happstack-server",
          "signature": "InputWorker -\u003e ByteString -\u003e ByteString -\u003e IO ([(String, Input)], Maybe String)",
          "source": "src/Happstack-Server-Internal-Multipart.html#multipartBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "multipartBody",
          "normalized": "InputWorker-\u003eByteString-\u003eByteString-\u003eIO([(String,Input)],Maybe String)",
          "package": "happstack-server",
          "partial": "Body",
          "signature": "InputWorker-\u003eByteString-\u003eByteString-\u003eIO([(String,Input)],Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:multipartBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "parseMultipartBody",
          "package": "happstack-server",
          "signature": "ByteString -\u003e ByteString -\u003e ([BodyPart], Maybe String)",
          "source": "src/Happstack-Server-Internal-Multipart.html#parseMultipartBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "parseMultipartBody",
          "normalized": "ByteString-\u003eByteString-\u003e([BodyPart],Maybe String)",
          "package": "happstack-server",
          "partial": "Multipart Body",
          "signature": "ByteString-\u003eByteString-\u003e([BodyPart],Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:parseMultipartBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePacks a string into an Input of type \u003ca\u003etext/plain\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "simpleInput",
          "package": "happstack-server",
          "signature": "String -\u003e Input",
          "source": "src/Happstack-Server-Internal-Multipart.html#simpleInput",
          "type": "function"
        },
        "index": {
          "description": "Packs string into an Input of type text plain",
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "simpleInput",
          "normalized": "String-\u003eInput",
          "package": "happstack-server",
          "partial": "Input",
          "signature": "String-\u003eInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:simpleInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to the normal \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e function, except the predicate gets the whole rest of the lazy bytestring, not just one character.\n\u003c/p\u003e\u003cp\u003eTODO: this function has not been profiled.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "spanS",
          "package": "happstack-server",
          "signature": "(ByteString -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Happstack-Server-Internal-Multipart.html#spanS",
          "type": "function"
        },
        "index": {
          "description": "similar to the normal span function except the predicate gets the whole rest of the lazy bytestring not just one character TODO this function has not been profiled",
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "spanS",
          "normalized": "(ByteString-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "happstack-server",
          "signature": "(ByteString-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:spanS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string at the first CRLF. The CRLF is not included\n   in any of the returned strings.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitAtCRLF",
          "package": "happstack-server",
          "signature": "ByteString-\u003e Maybe (ByteString, ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Split string at the first CRLF The CRLF is not included in any of the returned strings",
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitAtCRLF",
          "normalized": "ByteString-\u003eMaybe(ByteString,ByteString)",
          "package": "happstack-server",
          "partial": "At CRLF",
          "signature": "ByteString-\u003eMaybe(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:splitAtCRLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitAtEmptyLine",
          "package": "happstack-server",
          "signature": "ByteString -\u003e Maybe (ByteString, ByteString)",
          "source": "src/Happstack-Server-Internal-Multipart.html#splitAtEmptyLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitAtEmptyLine",
          "normalized": "ByteString-\u003eMaybe(ByteString,ByteString)",
          "package": "happstack-server",
          "partial": "At Empty Line",
          "signature": "ByteString-\u003eMaybe(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:splitAtEmptyLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitBlank",
          "package": "happstack-server",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Happstack-Server-Internal-Multipart.html#splitBlank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitBlank",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "happstack-server",
          "partial": "Blank",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:splitBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitBoundary",
          "package": "happstack-server",
          "signature": "ByteString -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Happstack-Server-Internal-Multipart.html#splitBoundary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitBoundary",
          "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "happstack-server",
          "partial": "Boundary",
          "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:splitBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitPart",
          "package": "happstack-server",
          "signature": "ByteString -\u003e ByteString -\u003e (BodyPart, ByteString)",
          "source": "src/Happstack-Server-Internal-Multipart.html#splitPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitPart",
          "normalized": "ByteString-\u003eByteString-\u003e(BodyPart,ByteString)",
          "package": "happstack-server",
          "partial": "Part",
          "signature": "ByteString-\u003eByteString-\u003e(BodyPart,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:splitPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitParts",
          "package": "happstack-server",
          "signature": "ByteString -\u003e ByteString -\u003e ([BodyPart], Maybe String)",
          "source": "src/Happstack-Server-Internal-Multipart.html#splitParts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "splitParts",
          "normalized": "ByteString-\u003eByteString-\u003e([BodyPart],Maybe String)",
          "package": "happstack-server",
          "partial": "Parts",
          "signature": "ByteString-\u003eByteString-\u003e([BodyPart],Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:splitParts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether a string starts with two dashes.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "startsWithDashes",
          "package": "happstack-server",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Happstack-Server-Internal-Multipart.html#startsWithDashes",
          "type": "function"
        },
        "index": {
          "description": "Checks whether string starts with two dashes",
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "startsWithDashes",
          "normalized": "ByteString-\u003eBool",
          "package": "happstack-server",
          "partial": "With Dashes",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:startsWithDashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Multipart",
          "name": "takeWhileS",
          "package": "happstack-server",
          "signature": "(ByteString -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Happstack-Server-Internal-Multipart.html#takeWhileS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Multipart",
          "module": "Happstack.Server.Internal.Multipart",
          "name": "takeWhileS",
          "normalized": "(ByteString-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "happstack-server",
          "partial": "While",
          "signature": "(ByteString-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Multipart.html#v:takeWhileS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Socket",
          "name": "Socket",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Socket.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Socket",
          "module": "Happstack.Server.Internal.Socket",
          "name": "Socket",
          "package": "happstack-server",
          "partial": "Socket",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Socket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealternative implementation of accept to work around EAI_AGAIN errors\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Socket",
          "name": "acceptLite",
          "package": "happstack-server",
          "signature": "Socket -\u003e IO (Socket, HostName, PortNumber)",
          "source": "src/Happstack-Server-Internal-Socket.html#acceptLite",
          "type": "function"
        },
        "index": {
          "description": "alternative implementation of accept to work around EAI AGAIN errors",
          "hierarchy": "Happstack Server Internal Socket",
          "module": "Happstack.Server.Internal.Socket",
          "name": "acceptLite",
          "normalized": "Socket-\u003eIO(Socket,HostName,PortNumber)",
          "package": "happstack-server",
          "partial": "Lite",
          "signature": "Socket-\u003eIO(Socket,HostName,PortNumber)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Socket.html#v:acceptLite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Socket",
          "name": "sockAddrToPeer",
          "package": "happstack-server",
          "signature": "SockAddr -\u003e (HostName, PortNumber)",
          "source": "src/Happstack-Server-Internal-Socket.html#sockAddrToPeer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Socket",
          "module": "Happstack.Server.Internal.Socket",
          "name": "sockAddrToPeer",
          "normalized": "SockAddr-\u003e(HostName,PortNumber)",
          "package": "happstack-server",
          "partial": "Addr To Peer",
          "signature": "SockAddr-\u003e(HostName,PortNumber)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Socket.html#v:sockAddrToPeer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "TimeoutIO",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-TimeoutIO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutIO",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "TimeoutIO",
          "package": "happstack-server",
          "partial": "Timeout IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeoutIO is a record which abstracts out all the network IO\n functions needed by the request handling loop. This allows use to\n use the same event loop for handle both http:\u003cem/\u003e and https:\u003cem/\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "TimeoutIO",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-TimeoutIO.html#TimeoutIO",
          "type": "data"
        },
        "index": {
          "description": "TimeoutIO is record which abstracts out all the network IO functions needed by the request handling loop This allows use to use the same event loop for handle both http and https",
          "hierarchy": "Happstack Server Internal TimeoutIO",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "TimeoutIO",
          "package": "happstack-server",
          "partial": "Timeout IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutIO.html#t:TimeoutIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "TimeoutIO",
          "package": "happstack-server",
          "signature": "TimeoutIO",
          "source": "src/Happstack-Server-Internal-TimeoutIO.html#TimeoutIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutIO",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "TimeoutIO",
          "package": "happstack-server",
          "partial": "Timeout IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutIO.html#v:TimeoutIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toGetContents",
          "package": "happstack-server",
          "signature": "IO ByteString",
          "source": "src/Happstack-Server-Internal-TimeoutIO.html#TimeoutIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutIO",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toGetContents",
          "package": "happstack-server",
          "partial": "Get Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutIO.html#v:toGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toHandle",
          "package": "happstack-server",
          "signature": "Handle",
          "source": "src/Happstack-Server-Internal-TimeoutIO.html#TimeoutIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutIO",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toHandle",
          "package": "happstack-server",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutIO.html#v:toHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toPut",
          "package": "happstack-server",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutIO.html#TimeoutIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutIO",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toPut",
          "normalized": "ByteString-\u003eIO()",
          "package": "happstack-server",
          "partial": "Put",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutIO.html#v:toPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toPutLazy",
          "package": "happstack-server",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutIO.html#TimeoutIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutIO",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toPutLazy",
          "normalized": "ByteString-\u003eIO()",
          "package": "happstack-server",
          "partial": "Put Lazy",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutIO.html#v:toPutLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toSecure",
          "package": "happstack-server",
          "signature": "Bool",
          "source": "src/Happstack-Server-Internal-TimeoutIO.html#TimeoutIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutIO",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toSecure",
          "package": "happstack-server",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutIO.html#v:toSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toSendFile",
          "package": "happstack-server",
          "signature": "FilePath -\u003e Offset -\u003e ByteCount -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutIO.html#TimeoutIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutIO",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toSendFile",
          "normalized": "FilePath-\u003eOffset-\u003eByteCount-\u003eIO()",
          "package": "happstack-server",
          "partial": "Send File",
          "signature": "FilePath-\u003eOffset-\u003eByteCount-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutIO.html#v:toSendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toShutdown",
          "package": "happstack-server",
          "signature": "IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutIO.html#TimeoutIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutIO",
          "module": "Happstack.Server.Internal.TimeoutIO",
          "name": "toShutdown",
          "normalized": "IO()",
          "package": "happstack-server",
          "partial": "Shutdown",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutIO.html#v:toShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "TimeoutManager",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-TimeoutManager.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutManager",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "TimeoutManager",
          "package": "happstack-server",
          "partial": "Timeout Manager",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutManager.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "Handle",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-TimeoutManager.html#Handle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutManager",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "Handle",
          "package": "happstack-server",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutManager.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA timeout manager\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "Manager",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-TimeoutManager.html#Manager",
          "type": "data"
        },
        "index": {
          "description": "timeout manager",
          "hierarchy": "Happstack Server Internal TimeoutManager",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "Manager",
          "package": "happstack-server",
          "partial": "Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutManager.html#t:Manager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "cancel",
          "package": "happstack-server",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutManager.html#cancel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutManager",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "cancel",
          "normalized": "Handle-\u003eIO()",
          "package": "happstack-server",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutManager.html#v:cancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "initialize",
          "package": "happstack-server",
          "signature": "Int -\u003e IO Manager",
          "source": "src/Happstack-Server-Internal-TimeoutManager.html#initialize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutManager",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "initialize",
          "normalized": "Int-\u003eIO Manager",
          "package": "happstack-server",
          "signature": "Int-\u003eIO Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutManager.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "pause",
          "package": "happstack-server",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutManager.html#pause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutManager",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "pause",
          "normalized": "Handle-\u003eIO()",
          "package": "happstack-server",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutManager.html#v:pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "register",
          "package": "happstack-server",
          "signature": "Manager -\u003e IO () -\u003e IO Handle",
          "source": "src/Happstack-Server-Internal-TimeoutManager.html#register",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutManager",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "register",
          "normalized": "Manager-\u003eIO()-\u003eIO Handle",
          "package": "happstack-server",
          "signature": "Manager-\u003eIO()-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutManager.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "registerKillThread",
          "package": "happstack-server",
          "signature": "Manager -\u003e IO Handle",
          "source": "src/Happstack-Server-Internal-TimeoutManager.html#registerKillThread",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutManager",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "registerKillThread",
          "normalized": "Manager-\u003eIO Handle",
          "package": "happstack-server",
          "partial": "Kill Thread",
          "signature": "Manager-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutManager.html#v:registerKillThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "resume",
          "package": "happstack-server",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutManager.html#resume",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutManager",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "resume",
          "normalized": "Handle-\u003eIO()",
          "package": "happstack-server",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutManager.html#v:resume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "tickle",
          "package": "happstack-server",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutManager.html#tickle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutManager",
          "module": "Happstack.Server.Internal.TimeoutManager",
          "name": "tickle",
          "normalized": "Handle-\u003eIO()",
          "package": "happstack-server",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutManager.html#v:tickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cul\u003e\u003cli\u003e- borrowed from snap-server. Check there periodically for updates.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "TimeoutSocket",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-TimeoutSocket.html",
          "type": "module"
        },
        "index": {
          "description": "borrowed from snap-server Check there periodically for updates",
          "hierarchy": "Happstack Server Internal TimeoutSocket",
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "TimeoutSocket",
          "package": "happstack-server",
          "partial": "Timeout Socket",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutSocket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "iterTickle",
          "package": "happstack-server",
          "signature": "Handle -\u003e IO Iter -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutSocket.html#iterTickle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocket",
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "iterTickle",
          "normalized": "Handle-\u003eIO Iter-\u003eIO()",
          "package": "happstack-server",
          "partial": "Tickle",
          "signature": "Handle-\u003eIO Iter-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutSocket.html#v:iterTickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "sGetContents",
          "package": "happstack-server",
          "signature": "Handle-\u003e Socket-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocket",
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "sGetContents",
          "normalized": "Handle-\u003eSocket-\u003eIO ByteString",
          "package": "happstack-server",
          "partial": "Get Contents",
          "signature": "Handle-\u003eSocket-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutSocket.html#v:sGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "sPutLazyTickle",
          "package": "happstack-server",
          "signature": "Handle -\u003e Socket -\u003e ByteString -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutSocket.html#sPutLazyTickle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocket",
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "sPutLazyTickle",
          "normalized": "Handle-\u003eSocket-\u003eByteString-\u003eIO()",
          "package": "happstack-server",
          "partial": "Put Lazy Tickle",
          "signature": "Handle-\u003eSocket-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutSocket.html#v:sPutLazyTickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "sPutTickle",
          "package": "happstack-server",
          "signature": "Handle -\u003e Socket -\u003e ByteString -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutSocket.html#sPutTickle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocket",
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "sPutTickle",
          "normalized": "Handle-\u003eSocket-\u003eByteString-\u003eIO()",
          "package": "happstack-server",
          "partial": "Put Tickle",
          "signature": "Handle-\u003eSocket-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutSocket.html#v:sPutTickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "sendFileTickle",
          "package": "happstack-server",
          "signature": "Handle -\u003e Socket -\u003e FilePath -\u003e Offset -\u003e ByteCount -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutSocket.html#sendFileTickle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocket",
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "sendFileTickle",
          "normalized": "Handle-\u003eSocket-\u003eFilePath-\u003eOffset-\u003eByteCount-\u003eIO()",
          "package": "happstack-server",
          "partial": "File Tickle",
          "signature": "Handle-\u003eSocket-\u003eFilePath-\u003eOffset-\u003eByteCount-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutSocket.html#v:sendFileTickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "timeoutSocketIO",
          "package": "happstack-server",
          "signature": "Handle -\u003e Socket -\u003e TimeoutIO",
          "source": "src/Happstack-Server-Internal-TimeoutSocket.html#timeoutSocketIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocket",
          "module": "Happstack.Server.Internal.TimeoutSocket",
          "name": "timeoutSocketIO",
          "normalized": "Handle-\u003eSocket-\u003eTimeoutIO",
          "package": "happstack-server",
          "partial": "Socket IO",
          "signature": "Handle-\u003eSocket-\u003eTimeoutIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-TimeoutSocket.html#v:timeoutSocketIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Types",
          "name": "Types",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Types",
          "package": "happstack-server",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP configuration\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "Conf",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Conf",
          "type": "data"
        },
        "index": {
          "description": "HTTP configuration",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Conf",
          "package": "happstack-server",
          "partial": "Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:Conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA MIME media type value.\n   The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance is derived automatically.\n   Use \u003ccode\u003eshowContentType\u003c/code\u003e to obtain the standard\n   string representation.\n   See \u003ca\u003ehttp://www.ietf.org/rfc/rfc2046.txt\u003c/a\u003e for more\n   information about MIME media types.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "ContentType",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-RFC822Headers.html#ContentType",
          "type": "data"
        },
        "index": {
          "description": "MIME media type value The Show instance is derived automatically Use showContentType to obtain the standard string representation See http www.ietf.org rfc rfc2046.txt for more information about MIME media types",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "ContentType",
          "package": "happstack-server",
          "partial": "Content Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is used by \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e to parse a path component into a\n value.\n\u003c/p\u003e\u003cp\u003eThe instances for number types (\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e, etc) use \u003ccode\u003e\u003ca\u003ereadM\u003c/a\u003e\u003c/code\u003e to\n parse the path component.\n\u003c/p\u003e\u003cp\u003eThe instance for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, on the other hand, returns the\n unmodified path component.\n\u003c/p\u003e\u003cp\u003eSee the following section of the Happstack Crash Course for\n detailed instructions using and extending \u003ccode\u003e\u003ca\u003eFromReqURI\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.happstack.com/docs/crashcourse/RouteFilters.html#FromReqURI\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "FromReqURI",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#FromReqURI",
          "type": "class"
        },
        "index": {
          "description": "This class is used by path to parse path component into value The instances for number types Int Float etc use readM to parse the path component The instance for String on the other hand returns the unmodified path component See the following section of the Happstack Crash Course for detailed instructions using and extending FromReqURI http www.happstack.com docs crashcourse RouteFilters.html FromReqURI",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "FromReqURI",
          "package": "happstack-server",
          "partial": "From Req URI",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:FromReqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean HTTP header\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "HeaderPair",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#HeaderPair",
          "type": "data"
        },
        "index": {
          "description": "an HTTP header",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "HeaderPair",
          "package": "happstack-server",
          "partial": "Header Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:HeaderPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea Map of HTTP headers\n\u003c/p\u003e\u003cp\u003ethe Map key is the header converted to lowercase\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "Headers",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Headers",
          "type": "type"
        },
        "index": {
          "description": "Map of HTTP headers the Map key is the header converted to lowercase",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Headers",
          "package": "happstack-server",
          "partial": "Headers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehostname & port\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "Host",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Host",
          "type": "type"
        },
        "index": {
          "description": "hostname port",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Host",
          "package": "happstack-server",
          "partial": "Host",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP version\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "HttpVersion",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#HttpVersion",
          "type": "data"
        },
        "index": {
          "description": "HTTP version",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "HttpVersion",
          "package": "happstack-server",
          "partial": "Http Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:HttpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea value extract from the \u003ccode\u003eQUERY_STRING\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e body\n\u003c/p\u003e\u003cp\u003eIf the input value was a file, then it will be saved to a temporary file on disk and \u003ccode\u003e\u003ca\u003einputValue\u003c/a\u003e\u003c/code\u003e will contain \u003ccode\u003eLeft pathToTempFile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "Input",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Input",
          "type": "data"
        },
        "index": {
          "description": "value extract from the QUERY STRING or Request body If the input value was file then it will be saved to temporary file on disk and inputValue will contain Left pathToTempFile",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Input",
          "package": "happstack-server",
          "partial": "Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA flag value set in the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e which controls how the\n \u003ccode\u003eContent-Length\u003c/code\u003e header is set, and whether *chunked* output\n encoding is used.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003enullRsFlags\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003enotContentLength\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003echunked\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "Length",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Length",
          "type": "data"
        },
        "index": {
          "description": "flag value set in the Response which controls how the Content-Length header is set and whether chunked output encoding is used see also nullRsFlags notContentLength and chunked",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Length",
          "package": "happstack-server",
          "partial": "Length",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction to log access requests (see also: \u003ccode\u003e\u003ca\u003elogMAccess\u003c/a\u003e\u003c/code\u003e)\n type LogAccess time =\n    (   String  -- ^ host\n     -\u003e String  -- ^ user\n     -\u003e time    -- ^ time\n     -\u003e String  -- ^ requestLine\n     -\u003e Int     -- ^ responseCode\n     -\u003e Integer -- ^ size\n     -\u003e String  -- ^ referer\n     -\u003e String  -- ^ userAgent\n     -\u003e IO ())\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "LogAccess",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#LogAccess",
          "type": "type"
        },
        "index": {
          "description": "function to log access requests see also logMAccess type LogAccess time String host String user time time String requestLine Int responseCode Integer size String referer String userAgent IO",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "LogAccess",
          "package": "happstack-server",
          "partial": "Log Access",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:LogAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP request method\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "Method",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Method",
          "type": "data"
        },
        "index": {
          "description": "HTTP request method",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Method",
          "package": "happstack-server",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean HTTP request\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "Request",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "data"
        },
        "index": {
          "description": "an HTTP request",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Request",
          "package": "happstack-server",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean HTTP Response\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "Response",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "data"
        },
        "index": {
          "description": "an HTTP Response",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Response",
          "package": "happstack-server",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe body of an HTTP \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "RqBody",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#RqBody",
          "type": "newtype"
        },
        "index": {
          "description": "The body of an HTTP Request",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "RqBody",
          "package": "happstack-server",
          "partial": "Rq Body",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:RqBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult flags\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "RsFlags",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#RsFlags",
          "type": "data"
        },
        "index": {
          "description": "Result flags",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "RsFlags",
          "package": "happstack-server",
          "partial": "Rs Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#t:RsFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "Body",
          "package": "happstack-server",
          "signature": "Body",
          "source": "src/Happstack-Server-Internal-Types.html#RqBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:Body\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:Body\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Body",
          "package": "happstack-server",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "CONNECT",
          "package": "happstack-server",
          "signature": "CONNECT",
          "source": "src/Happstack-Server-Internal-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:CONNECT\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:CONNECT\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "CONNECT",
          "package": "happstack-server",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "Conf",
          "package": "happstack-server",
          "signature": "Conf",
          "source": "src/Happstack-Server-Internal-Types.html#Conf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:Conf\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:Conf\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Conf",
          "package": "happstack-server",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:Conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eautomatically add a \u003ccode\u003eContent-Length\u003c/code\u003e header to the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "ContentLength",
          "package": "happstack-server",
          "signature": "ContentLength",
          "source": "src/Happstack-Server-Internal-Types.html#Length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:ContentLength\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:ContentLength\"]"
        },
        "index": {
          "description": "automatically add Content-Length header to the Response",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "ContentLength",
          "package": "happstack-server",
          "partial": "Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:ContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "ContentType",
          "package": "happstack-server",
          "signature": "ContentType",
          "source": "src/Happstack-Server-Internal-RFC822Headers.html#ContentType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:ContentType\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:ContentType\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "ContentType",
          "package": "happstack-server",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "DELETE",
          "package": "happstack-server",
          "signature": "DELETE",
          "source": "src/Happstack-Server-Internal-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:DELETE\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:DELETE\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "DELETE",
          "package": "happstack-server",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "GET",
          "package": "happstack-server",
          "signature": "GET",
          "source": "src/Happstack-Server-Internal-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:GET\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:GET\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "GET",
          "package": "happstack-server",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "HEAD",
          "package": "happstack-server",
          "signature": "HEAD",
          "source": "src/Happstack-Server-Internal-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:HEAD\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:HEAD\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "HEAD",
          "package": "happstack-server",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "HeaderPair",
          "package": "happstack-server",
          "signature": "HeaderPair",
          "source": "src/Happstack-Server-Internal-Types.html#HeaderPair",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:HeaderPair\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:HeaderPair\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "HeaderPair",
          "package": "happstack-server",
          "partial": "Header Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:HeaderPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "HttpVersion",
          "package": "happstack-server",
          "signature": "HttpVersion Int Int",
          "source": "src/Happstack-Server-Internal-Types.html#HttpVersion",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:HttpVersion\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:HttpVersion\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "HttpVersion",
          "package": "happstack-server",
          "partial": "Http Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:HttpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "Input",
          "package": "happstack-server",
          "signature": "Input",
          "source": "src/Happstack-Server-Internal-Types.html#Input",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:Input\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:Input\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Input",
          "package": "happstack-server",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edo not set \u003ccode\u003eContent-Length\u003c/code\u003e or \u003ccode\u003echunked\u003c/code\u003e output encoding.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "NoContentLength",
          "package": "happstack-server",
          "signature": "NoContentLength",
          "source": "src/Happstack-Server-Internal-Types.html#Length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:NoContentLength\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:NoContentLength\"]"
        },
        "index": {
          "description": "do not set Content-Length or chunked output encoding",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "NoContentLength",
          "package": "happstack-server",
          "partial": "No Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:NoContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "OPTIONS",
          "package": "happstack-server",
          "signature": "OPTIONS",
          "source": "src/Happstack-Server-Internal-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:OPTIONS\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:OPTIONS\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "OPTIONS",
          "package": "happstack-server",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "POST",
          "package": "happstack-server",
          "signature": "POST",
          "source": "src/Happstack-Server-Internal-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:POST\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:POST\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "POST",
          "package": "happstack-server",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "PUT",
          "package": "happstack-server",
          "signature": "PUT",
          "source": "src/Happstack-Server-Internal-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:PUT\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:PUT\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "PUT",
          "package": "happstack-server",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "Request",
          "package": "happstack-server",
          "signature": "Request",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:Request\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:Request\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Request",
          "package": "happstack-server",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "Response",
          "package": "happstack-server",
          "signature": "Response",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:Response\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:Response\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "Response",
          "package": "happstack-server",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "RsFlags",
          "package": "happstack-server",
          "signature": "RsFlags",
          "source": "src/Happstack-Server-Internal-Types.html#RsFlags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:RsFlags\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:RsFlags\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "RsFlags",
          "package": "happstack-server",
          "partial": "Rs Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:RsFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "SendFile",
          "package": "happstack-server",
          "signature": "SendFile",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:SendFile\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:SendFile\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "SendFile",
          "package": "happstack-server",
          "partial": "Send File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:SendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "TRACE",
          "package": "happstack-server",
          "signature": "TRACE",
          "source": "src/Happstack-Server-Internal-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:TRACE\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:TRACE\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "TRACE",
          "package": "happstack-server",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edo not add a \u003ccode\u003eContent-Length\u003c/code\u003e header. Do use \u003ccode\u003echunked\u003c/code\u003e output encoding\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "TransferEncodingChunked",
          "package": "happstack-server",
          "signature": "TransferEncodingChunked",
          "source": "src/Happstack-Server-Internal-Types.html#Length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:TransferEncodingChunked\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:TransferEncodingChunked\"]"
        },
        "index": {
          "description": "do not add Content-Length header Do use chunked output encoding",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "TransferEncodingChunked",
          "package": "happstack-server",
          "partial": "Transfer Encoding Chunked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:TransferEncodingChunked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a key/value pair to the header.  If the key already has a value\n associated with it, then the value will be appended.\n Forces the key to be lowercase.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "addHeader",
          "package": "happstack-server",
          "signature": "String -\u003e String -\u003e r -\u003e r",
          "source": "src/Happstack-Server-Internal-Types.html#addHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:addHeader\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:addHeader\"]"
        },
        "index": {
          "description": "Add key value pair to the header If the key already has value associated with it then the value will be appended Forces the key to be lowercase",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "addHeader",
          "normalized": "String-\u003eString-\u003ea-\u003ea",
          "package": "happstack-server",
          "partial": "Header",
          "signature": "String-\u003eString-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:addHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as addHeader except for ByteStrings\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "addHeaderBS",
          "package": "happstack-server",
          "signature": "ByteString -\u003e ByteString -\u003e r -\u003e r",
          "source": "src/Happstack-Server-Internal-Types.html#addHeaderBS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:addHeaderBS\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:addHeaderBS\"]"
        },
        "index": {
          "description": "Acts as addHeader except for ByteStrings",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "addHeaderBS",
          "normalized": "ByteString-\u003eByteString-\u003ea-\u003ea",
          "package": "happstack-server",
          "partial": "Header BS",
          "signature": "ByteString-\u003eByteString-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:addHeaderBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a key/value pair to the header using the underlying HeaderPair data\n type.  Does not force the key to be in lowercase or guarantee that the given key and the key in the HeaderPair will match.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "addHeaderUnsafe",
          "package": "happstack-server",
          "signature": "ByteString -\u003e HeaderPair -\u003e r -\u003e r",
          "source": "src/Happstack-Server-Internal-Types.html#addHeaderUnsafe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:addHeaderUnsafe\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:addHeaderUnsafe\"]"
        },
        "index": {
          "description": "Add key value pair to the header using the underlying HeaderPair data type Does not force the key to be in lowercase or guarantee that the given key and the key in the HeaderPair will match",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "addHeaderUnsafe",
          "normalized": "ByteString-\u003eHeaderPair-\u003ea-\u003ea",
          "package": "happstack-server",
          "partial": "Header Unsafe",
          "signature": "ByteString-\u003eHeaderPair-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:addHeaderUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not automatically add a Content-Length header. Do automatically use Transfer-Encoding: Chunked\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "chunked",
          "package": "happstack-server",
          "signature": "Response -\u003e Response",
          "source": "src/Happstack-Server-Internal-Types.html#chunked",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:chunked\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:chunked\"]"
        },
        "index": {
          "description": "Do not automatically add Content-Length header Do automatically use Transfer-Encoding Chunked",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "chunked",
          "normalized": "Response-\u003eResponse",
          "package": "happstack-server",
          "signature": "Response-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:chunked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomatically add a Content-Length header. Do not use Transfer-Encoding: Chunked\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "contentLength",
          "package": "happstack-server",
          "signature": "Response -\u003e Response",
          "source": "src/Happstack-Server-Internal-Types.html#contentLength",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:contentLength\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:contentLength\"]"
        },
        "index": {
          "description": "Automatically add Content-Length header Do not use Transfer-Encoding Chunked",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "contentLength",
          "normalized": "Response-\u003eResponse",
          "package": "happstack-server",
          "partial": "Length",
          "signature": "Response-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:contentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould the connection be used for further messages after this.\n isHTTP1_0 && hasKeepAlive || isHTTP1_1 && hasNotConnectionClose\n\u003c/p\u003e\u003cp\u003eIn addition to this rule All 1xx (informational), 204 (no content),\n and 304 (not modified) responses MUST NOT include a message-body\n and therefore are eligible for connection keep-alive.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "continueHTTP",
          "package": "happstack-server",
          "signature": "Request -\u003e Response -\u003e Bool",
          "source": "src/Happstack-Server-Internal-Types.html#continueHTTP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:continueHTTP\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:continueHTTP\"]"
        },
        "index": {
          "description": "Should the connection be used for further messages after this isHTTP1 hasKeepAlive isHTTP1 hasNotConnectionClose In addition to this rule All xx informational no content and not modified responses MUST NOT include message-body and therefore are eligible for connection keep-alive",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "continueHTTP",
          "normalized": "Request-\u003eResponse-\u003eBool",
          "package": "happstack-server",
          "partial": "HTTP",
          "signature": "Request-\u003eResponse-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:continueHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedia type parameters. On common example is\n   the charset parameter for the \"text\"\n   top-level type, e.g. \u003ccode\u003e(\"charset\",\"ISO-8859-1\")\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "ctParameters",
          "package": "happstack-server",
          "signature": "[(String, String)]",
          "source": "src/Happstack-Server-Internal-RFC822Headers.html#ContentType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:ctParameters\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:ctParameters\"]"
        },
        "index": {
          "description": "Media type parameters On common example is the charset parameter for the text top-level type e.g charset ISO-8859-1",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "ctParameters",
          "normalized": "[(String,String)]",
          "package": "happstack-server",
          "partial": "Parameters",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:ctParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe media subtype, the specific data format.\n   Examples include \"plain\", \"html\",\n   \"jpeg\", \"form-data\", etc.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "ctSubtype",
          "package": "happstack-server",
          "signature": "String",
          "source": "src/Happstack-Server-Internal-RFC822Headers.html#ContentType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:ctSubtype\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:ctSubtype\"]"
        },
        "index": {
          "description": "The media subtype the specific data format Examples include plain html jpeg form-data etc",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "ctSubtype",
          "package": "happstack-server",
          "partial": "Subtype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:ctSubtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top-level media type, the general type\n   of the data. Common examples are\n   \"text\", \"image\", \"audio\", \"video\",\n   \"multipart\", and \"application\".\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "ctType",
          "package": "happstack-server",
          "signature": "String",
          "source": "src/Happstack-Server-Internal-RFC822Headers.html#ContentType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:ctType\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:ctType\"]"
        },
        "index": {
          "description": "The top-level media type the general type of the data Common examples are text image audio video multipart and application",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "ctType",
          "package": "happstack-server",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:ctType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a 'ReadS a' result to 'Maybe a'\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "fromReadS",
          "package": "happstack-server",
          "signature": "[(a, String)] -\u003e Maybe a",
          "source": "src/Happstack-Server-Internal-Types.html#fromReadS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:fromReadS\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:fromReadS\"]"
        },
        "index": {
          "description": "convert ReadS result to Maybe",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "fromReadS",
          "normalized": "[(a,String)]-\u003eMaybe a",
          "package": "happstack-server",
          "partial": "Read",
          "signature": "[(a,String)]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:fromReadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.Types",
          "name": "fromReqURI",
          "package": "happstack-server",
          "signature": "String -\u003e Maybe a",
          "source": "src/Happstack-Server-Internal-Types.html#fromReqURI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "fromReqURI",
          "normalized": "String-\u003eMaybe a",
          "package": "happstack-server",
          "partial": "Req URI",
          "signature": "String-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:fromReqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup header value. Key is case-insensitive.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "getHeader",
          "package": "happstack-server",
          "signature": "String -\u003e r -\u003e Maybe ByteString",
          "source": "src/Happstack-Server-Internal-Types.html#getHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:getHeader\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:getHeader\"]"
        },
        "index": {
          "description": "Lookup header value Key is case-insensitive",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "getHeader",
          "normalized": "String-\u003ea-\u003eMaybe ByteString",
          "package": "happstack-server",
          "partial": "Header",
          "signature": "String-\u003er-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:getHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup header value. Key is a case-insensitive bytestring.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "getHeaderBS",
          "package": "happstack-server",
          "signature": "ByteString -\u003e r -\u003e Maybe ByteString",
          "source": "src/Happstack-Server-Internal-Types.html#getHeaderBS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:getHeaderBS\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:getHeaderBS\"]"
        },
        "index": {
          "description": "Lookup header value Key is case-insensitive bytestring",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "getHeaderBS",
          "normalized": "ByteString-\u003ea-\u003eMaybe ByteString",
          "package": "happstack-server",
          "partial": "Header BS",
          "signature": "ByteString-\u003er-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:getHeaderBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup header value with a case-sensitive key. The key must be lowercase.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "getHeaderUnsafe",
          "package": "happstack-server",
          "signature": "ByteString -\u003e r -\u003e Maybe ByteString",
          "source": "src/Happstack-Server-Internal-Types.html#getHeaderUnsafe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:getHeaderUnsafe\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:getHeaderUnsafe\"]"
        },
        "index": {
          "description": "Lookup header value with case-sensitive key The key must be lowercase",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "getHeaderUnsafe",
          "normalized": "ByteString-\u003ea-\u003eMaybe ByteString",
          "package": "happstack-server",
          "partial": "Header Unsafe",
          "signature": "ByteString-\u003er-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:getHeaderUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eheader name\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "hName",
          "package": "happstack-server",
          "signature": "ByteString",
          "source": "src/Happstack-Server-Internal-Types.html#HeaderPair",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:hName\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:hName\"]"
        },
        "index": {
          "description": "header name",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "hName",
          "package": "happstack-server",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:hName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eheader value (or values if multiple occurances of the header are present)\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "hValue",
          "package": "happstack-server",
          "signature": "[ByteString]",
          "source": "src/Happstack-Server-Internal-Types.html#HeaderPair",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:hValue\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:hValue\"]"
        },
        "index": {
          "description": "header value or values if multiple occurances of the header are present",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "hValue",
          "normalized": "[ByteString]",
          "package": "happstack-server",
          "partial": "Value",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:hValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the associated key is found in the Headers.  The lookup\n is case insensitive.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "hasHeader",
          "package": "happstack-server",
          "signature": "String -\u003e r -\u003e Bool",
          "source": "src/Happstack-Server-Internal-Types.html#hasHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:hasHeader\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:hasHeader\"]"
        },
        "index": {
          "description": "Returns True if the associated key is found in the Headers The lookup is case insensitive",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "hasHeader",
          "normalized": "String-\u003ea-\u003eBool",
          "package": "happstack-server",
          "partial": "Header",
          "signature": "String-\u003er-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:hasHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003e\u003ca\u003ehasHeader\u003c/a\u003e\u003c/code\u003e with ByteStrings\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "hasHeaderBS",
          "package": "happstack-server",
          "signature": "ByteString -\u003e r -\u003e Bool",
          "source": "src/Happstack-Server-Internal-Types.html#hasHeaderBS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:hasHeaderBS\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:hasHeaderBS\"]"
        },
        "index": {
          "description": "Acts as hasHeader with ByteStrings",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "hasHeaderBS",
          "normalized": "ByteString-\u003ea-\u003eBool",
          "package": "happstack-server",
          "partial": "Header BS",
          "signature": "ByteString-\u003er-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:hasHeaderBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003e\u003ca\u003ehasHeaderBS\u003c/a\u003e\u003c/code\u003e but the key is case sensitive.  It should be\n in lowercase.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "hasHeaderUnsafe",
          "package": "happstack-server",
          "signature": "ByteString -\u003e r -\u003e Bool",
          "source": "src/Happstack-Server-Internal-Types.html#hasHeaderUnsafe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:hasHeaderUnsafe\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:hasHeaderUnsafe\"]"
        },
        "index": {
          "description": "Acts as hasHeaderBS but the key is case sensitive It should be in lowercase",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "hasHeaderUnsafe",
          "normalized": "ByteString-\u003ea-\u003eBool",
          "package": "happstack-server",
          "partial": "Header Unsafe",
          "signature": "ByteString-\u003er-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:hasHeaderUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "inputContentType",
          "package": "happstack-server",
          "signature": "ContentType",
          "source": "src/Happstack-Server-Internal-Types.html#Input",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:inputContentType\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:inputContentType\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "inputContentType",
          "package": "happstack-server",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:inputContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "inputFilename",
          "package": "happstack-server",
          "signature": "Maybe FilePath",
          "source": "src/Happstack-Server-Internal-Types.html#Input",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:inputFilename\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:inputFilename\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "inputFilename",
          "package": "happstack-server",
          "partial": "Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:inputFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "inputValue",
          "package": "happstack-server",
          "signature": "Either FilePath ByteString",
          "source": "src/Happstack-Server-Internal-Types.html#Input",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:inputValue\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:inputValue\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "inputValue",
          "package": "happstack-server",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:inputValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e is HTTP version \u003ccode\u003e1.0\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "isHTTP1_0",
          "package": "happstack-server",
          "signature": "Request -\u003e Bool",
          "source": "src/Happstack-Server-Internal-Types.html#isHTTP1_0",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:isHTTP1_0\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:isHTTP1_0\"]"
        },
        "index": {
          "description": "True if Request is HTTP version",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "isHTTP1_0",
          "normalized": "Request-\u003eBool",
          "package": "happstack-server",
          "partial": "HTTP",
          "signature": "Request-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:isHTTP1_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e is HTTP version \u003ccode\u003e1.1\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "isHTTP1_1",
          "package": "happstack-server",
          "signature": "Request -\u003e Bool",
          "source": "src/Happstack-Server-Internal-Types.html#isHTTP1_1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:isHTTP1_1\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:isHTTP1_1\"]"
        },
        "index": {
          "description": "True if Request is HTTP version",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "isHTTP1_1",
          "normalized": "Request-\u003eBool",
          "package": "happstack-server",
          "partial": "HTTP",
          "signature": "Request-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:isHTTP1_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction to log access requests (see also: \u003ccode\u003e\u003ca\u003elogMAccess\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "logAccess",
          "package": "happstack-server",
          "signature": "Maybe (LogAccess t)",
          "source": "src/Happstack-Server-Internal-Types.html#Conf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:logAccess\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:logAccess\"]"
        },
        "index": {
          "description": "function to log access requests see also logMAccess",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "logAccess",
          "package": "happstack-server",
          "partial": "Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:logAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog access requests using hslogger and apache-style log formatting\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eConf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "logMAccess",
          "package": "happstack-server",
          "signature": "LogAccess t",
          "source": "src/Happstack-Server-Internal-Types.html#logMAccess",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:logMAccess\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:logMAccess\"]"
        },
        "index": {
          "description": "log access requests using hslogger and apache-style log formatting see also Conf",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "logMAccess",
          "package": "happstack-server",
          "partial": "MAccess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:logMAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of (key,val) pairs and converts it into Headers.  The\n keys will be converted to lowercase\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "mkHeaders",
          "package": "happstack-server",
          "signature": "[(String, String)] -\u003e Headers",
          "source": "src/Happstack-Server-Internal-Types.html#mkHeaders",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:mkHeaders\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:mkHeaders\"]"
        },
        "index": {
          "description": "Takes list of key val pairs and converts it into Headers The keys will be converted to lowercase",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "mkHeaders",
          "normalized": "[(String,String)]-\u003eHeaders",
          "package": "happstack-server",
          "partial": "Headers",
          "signature": "[(String,String)]-\u003eHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:mkHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not automatically add a Content-Length field to the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "noContentLength",
          "package": "happstack-server",
          "signature": "Response -\u003e Response",
          "source": "src/Happstack-Server-Internal-Types.html#noContentLength",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:noContentLength\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:noContentLength\"]"
        },
        "index": {
          "description": "Do not automatically add Content-Length field to the Response",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "noContentLength",
          "normalized": "Response-\u003eResponse",
          "package": "happstack-server",
          "partial": "Content Length",
          "signature": "Response-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:noContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration contains no validator and the port is set to 8000\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "nullConf",
          "package": "happstack-server",
          "signature": "Conf",
          "source": "src/Happstack-Server-Internal-Types.html#nullConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:nullConf\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:nullConf\"]"
        },
        "index": {
          "description": "Default configuration contains no validator and the port is set to",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "nullConf",
          "package": "happstack-server",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:nullConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault RsFlags: automatically use \u003ccode\u003eTransfer-Encoding: Chunked\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "nullRsFlags",
          "package": "happstack-server",
          "signature": "RsFlags",
          "source": "src/Happstack-Server-Internal-Types.html#nullRsFlags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:nullRsFlags\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:nullRsFlags\"]"
        },
        "index": {
          "description": "Default RsFlags automatically use Transfer-Encoding Chunked",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "nullRsFlags",
          "package": "happstack-server",
          "partial": "Rs Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:nullRsFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort for the server to listen on.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "port",
          "package": "happstack-server",
          "signature": "Int",
          "source": "src/Happstack-Server-Internal-Types.html#Conf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:port\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:port\"]"
        },
        "index": {
          "description": "Port for the server to listen on",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "port",
          "package": "happstack-server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "readDec'",
          "package": "happstack-server",
          "signature": "String -\u003e a",
          "source": "src/Happstack-Server-Internal-Types.html#readDec%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:readDec-39-\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:readDec-39-\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "readDec'",
          "normalized": "String-\u003ea",
          "package": "happstack-server",
          "partial": "Dec'",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:readDec-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread the request body inputs\n\u003c/p\u003e\u003cp\u003eThis will only work if the body inputs have already been decoded. Otherwise it will return Nothing.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "readInputsBody",
          "package": "happstack-server",
          "signature": "Request -\u003e IO (Maybe [(String, Input)])",
          "source": "src/Happstack-Server-Internal-Types.html#readInputsBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:readInputsBody\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:readInputsBody\"]"
        },
        "index": {
          "description": "read the request body inputs This will only work if the body inputs have already been decoded Otherwise it will return Nothing",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "readInputsBody",
          "normalized": "Request-\u003eIO(Maybe[(String,Input)])",
          "package": "happstack-server",
          "partial": "Inputs Body",
          "signature": "Request-\u003eIO(Maybe[(String,Input)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:readInputsBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in any monad.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.Types",
          "name": "readM",
          "package": "happstack-server",
          "signature": "String -\u003e m t",
          "source": "src/Happstack-Server-Internal-Types.html#readM",
          "type": "function"
        },
        "index": {
          "description": "Read in any monad",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "readM",
          "normalized": "String-\u003ea b",
          "package": "happstack-server",
          "signature": "String-\u003em t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:readM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the Response's status code to the given Int and redirects to the given URI\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "redirect",
          "package": "happstack-server",
          "signature": "Int -\u003e s -\u003e Response -\u003e Response",
          "source": "src/Happstack-Server-Internal-Types.html#redirect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:redirect\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:redirect\"]"
        },
        "index": {
          "description": "Sets the Response status code to the given Int and redirects to the given URI",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "redirect",
          "normalized": "Int-\u003ea-\u003eResponse-\u003eResponse",
          "package": "happstack-server",
          "signature": "Int-\u003es-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:redirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Response with the given Int as the status code and the provided\n String as the body of the Response\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "result",
          "package": "happstack-server",
          "signature": "Int -\u003e String -\u003e Response",
          "source": "src/Happstack-Server-Internal-Types.html#result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:result\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:result\"]"
        },
        "index": {
          "description": "Creates Response with the given Int as the status code and the provided String as the body of the Response",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "result",
          "normalized": "Int-\u003eString-\u003eResponse",
          "package": "happstack-server",
          "signature": "Int-\u003eString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e but works with ByteStrings directly.\n\u003c/p\u003e\u003cp\u003eBy default, Transfer-Encoding: chunked will be used\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "resultBS",
          "package": "happstack-server",
          "signature": "Int -\u003e ByteString -\u003e Response",
          "source": "src/Happstack-Server-Internal-Types.html#resultBS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:resultBS\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:resultBS\"]"
        },
        "index": {
          "description": "Acts as result but works with ByteStrings directly By default Transfer-Encoding chunked will be used",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "resultBS",
          "normalized": "Int-\u003eByteString-\u003eResponse",
          "package": "happstack-server",
          "partial": "BS",
          "signature": "Int-\u003eByteString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:resultBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe raw, undecoded request body\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqBody",
          "package": "happstack-server",
          "signature": "MVar RqBody",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqBody\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqBody\"]"
        },
        "index": {
          "description": "the raw undecoded request body",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqBody",
          "package": "happstack-server",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecookies\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqCookies",
          "package": "happstack-server",
          "signature": "[(String, Cookie)]",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqCookies\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqCookies\"]"
        },
        "index": {
          "description": "cookies",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqCookies",
          "normalized": "[(String,Cookie)]",
          "package": "happstack-server",
          "partial": "Cookies",
          "signature": "[(String,Cookie)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe HTTP request headers\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqHeaders",
          "package": "happstack-server",
          "signature": "Headers",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqHeaders\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqHeaders\"]"
        },
        "index": {
          "description": "the HTTP request headers",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqHeaders",
          "package": "happstack-server",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe request body decoded as key/value pairs (when appropriate)\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqInputsBody",
          "package": "happstack-server",
          "signature": "MVar [(String, Input)]",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqInputsBody\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqInputsBody\"]"
        },
        "index": {
          "description": "the request body decoded as key value pairs when appropriate",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqInputsBody",
          "normalized": "MVar[(String,Input)]",
          "package": "happstack-server",
          "partial": "Inputs Body",
          "signature": "MVar[(String,Input)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqInputsBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe QUERY_STRING decoded as key/value pairs\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqInputsQuery",
          "package": "happstack-server",
          "signature": "[(String, Input)]",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqInputsQuery\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqInputsQuery\"]"
        },
        "index": {
          "description": "the QUERY STRING decoded as key value pairs",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqInputsQuery",
          "normalized": "[(String,Input)]",
          "package": "happstack-server",
          "partial": "Inputs Query",
          "signature": "[(String,Input)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqInputsQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequest method\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqMethod",
          "package": "happstack-server",
          "signature": "Method",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqMethod\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqMethod\"]"
        },
        "index": {
          "description": "request method",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqMethod",
          "package": "happstack-server",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe uri, split on /, and then decoded\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqPaths",
          "package": "happstack-server",
          "signature": "[String]",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqPaths\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqPaths\"]"
        },
        "index": {
          "description": "the uri split on and then decoded",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqPaths",
          "normalized": "[String]",
          "package": "happstack-server",
          "partial": "Paths",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(hostname, port) of the client making the request\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqPeer",
          "package": "happstack-server",
          "signature": "Host",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqPeer\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqPeer\"]"
        },
        "index": {
          "description": "hostname port of the client making the request",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqPeer",
          "package": "happstack-server",
          "partial": "Peer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqPeer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe QUERY_STRING\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqQuery",
          "package": "happstack-server",
          "signature": "String",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqQuery\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqQuery\"]"
        },
        "index": {
          "description": "the QUERY STRING",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqQuery",
          "package": "happstack-server",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequest uses https://\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqSecure",
          "package": "happstack-server",
          "signature": "Bool",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqSecure\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqSecure\"]"
        },
        "index": {
          "description": "request uses https",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqSecure",
          "package": "happstack-server",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Request into a String representing the corresponding URL\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqURL",
          "package": "happstack-server",
          "signature": "Request -\u003e String",
          "source": "src/Happstack-Server-Internal-Types.html#rqURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqURL\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqURL\"]"
        },
        "index": {
          "description": "Converts Request into String representing the corresponding URL",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqURL",
          "normalized": "Request-\u003eString",
          "package": "happstack-server",
          "partial": "URL",
          "signature": "Request-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe raw rqUri\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqUri",
          "package": "happstack-server",
          "signature": "String",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqUri\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqUri\"]"
        },
        "index": {
          "description": "the raw rqUri",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqUri",
          "package": "happstack-server",
          "partial": "Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP version\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rqVersion",
          "package": "happstack-server",
          "signature": "HttpVersion",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqVersion\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rqVersion\"]"
        },
        "index": {
          "description": "HTTP version",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rqVersion",
          "package": "happstack-server",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rqVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rsBody",
          "package": "happstack-server",
          "signature": "ByteString",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsBody\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rsBody\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rsBody",
          "package": "happstack-server",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rsCode",
          "package": "happstack-server",
          "signature": "Int",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsCode\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rsCode\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rsCode",
          "package": "happstack-server",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rsFlags",
          "package": "happstack-server",
          "signature": "RsFlags",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsFlags\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rsFlags\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rsFlags",
          "package": "happstack-server",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rsHeaders",
          "package": "happstack-server",
          "signature": "Headers",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsHeaders\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rsHeaders\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rsHeaders",
          "package": "happstack-server",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rsValidator",
          "package": "happstack-server",
          "signature": "Maybe (Response -\u003e IO Response)",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsValidator\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rsValidator\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rsValidator",
          "normalized": "Maybe(Response-\u003eIO Response)",
          "package": "happstack-server",
          "partial": "Validator",
          "signature": "Maybe(Response-\u003eIO Response)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "rsfLength",
          "package": "happstack-server",
          "signature": "Length",
          "source": "src/Happstack-Server-Internal-Types.html#RsFlags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsfLength\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:rsfLength\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "rsfLength",
          "package": "happstack-server",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:rsfLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociates the key/value pair in the headers.  Forces the key to be\n lowercase.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "setHeader",
          "package": "happstack-server",
          "signature": "String -\u003e String -\u003e r -\u003e r",
          "source": "src/Happstack-Server-Internal-Types.html#setHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:setHeader\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:setHeader\"]"
        },
        "index": {
          "description": "Associates the key value pair in the headers Forces the key to be lowercase",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "setHeader",
          "normalized": "String-\u003eString-\u003ea-\u003ea",
          "package": "happstack-server",
          "partial": "Header",
          "signature": "String-\u003eString-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003e\u003ca\u003esetHeader\u003c/a\u003e\u003c/code\u003e but with ByteStrings.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "setHeaderBS",
          "package": "happstack-server",
          "signature": "ByteString -\u003e ByteString -\u003e r -\u003e r",
          "source": "src/Happstack-Server-Internal-Types.html#setHeaderBS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:setHeaderBS\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:setHeaderBS\"]"
        },
        "index": {
          "description": "Acts as setHeader but with ByteStrings",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "setHeaderBS",
          "normalized": "ByteString-\u003eByteString-\u003ea-\u003ea",
          "package": "happstack-server",
          "partial": "Header BS",
          "signature": "ByteString-\u003eByteString-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:setHeaderBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the key to the HeaderPair.  This is the only way to associate a key\n with multiple values via the setHeader* functions.  Does not force the key\n to be in lowercase or guarantee that the given key and the key in the HeaderPair will match.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "setHeaderUnsafe",
          "package": "happstack-server",
          "signature": "ByteString -\u003e HeaderPair -\u003e r -\u003e r",
          "source": "src/Happstack-Server-Internal-Types.html#setHeaderUnsafe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:setHeaderUnsafe\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:setHeaderUnsafe\"]"
        },
        "index": {
          "description": "Sets the key to the HeaderPair This is the only way to associate key with multiple values via the setHeader functions Does not force the key to be in lowercase or guarantee that the given key and the key in the HeaderPair will match",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "setHeaderUnsafe",
          "normalized": "ByteString-\u003eHeaderPair-\u003ea-\u003ea",
          "package": "happstack-server",
          "partial": "Header Unsafe",
          "signature": "ByteString-\u003eHeaderPair-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:setHeaderUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the Response status code to the provided Int and lifts the computation\n into a Monad.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "setRsCode",
          "package": "happstack-server",
          "signature": "Int -\u003e Response -\u003e m Response",
          "source": "src/Happstack-Server-Internal-Types.html#setRsCode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:setRsCode\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:setRsCode\"]"
        },
        "index": {
          "description": "Sets the Response status code to the provided Int and lifts the computation into Monad",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "setRsCode",
          "normalized": "Int-\u003eResponse-\u003ea Response",
          "package": "happstack-server",
          "partial": "Rs Code",
          "signature": "Int-\u003eResponse-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:setRsCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of bytes to send\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "sfCount",
          "package": "happstack-server",
          "signature": "Integer",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:sfCount\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:sfCount\"]"
        },
        "index": {
          "description": "number of bytes to send",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "sfCount",
          "package": "happstack-server",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:sfCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efile handle to send from\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "sfFilePath",
          "package": "happstack-server",
          "signature": "FilePath",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:sfFilePath\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:sfFilePath\"]"
        },
        "index": {
          "description": "file handle to send from",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "sfFilePath",
          "package": "happstack-server",
          "partial": "File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:sfFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoffset to start at\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "sfOffset",
          "package": "happstack-server",
          "signature": "Integer",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:sfOffset\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:sfOffset\"]"
        },
        "index": {
          "description": "offset to start at",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "sfOffset",
          "package": "happstack-server",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:sfOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the request body from the Request and replace it with Nothing\n\u003c/p\u003e\u003cp\u003eIMPORTANT: You can really only call this function once. Subsequent\n calls will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "takeRequestBody",
          "package": "happstack-server",
          "signature": "Request -\u003e m (Maybe RqBody)",
          "source": "src/Happstack-Server-Internal-Types.html#takeRequestBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:takeRequestBody\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:takeRequestBody\"]"
        },
        "index": {
          "description": "get the request body from the Request and replace it with Nothing IMPORTANT You can really only call this function once Subsequent calls will return Nothing",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "takeRequestBody",
          "normalized": "Request-\u003ea(Maybe RqBody)",
          "package": "happstack-server",
          "partial": "Request Body",
          "signature": "Request-\u003em(Maybe RqBody)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:takeRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThreadGroup for registering spawned threads for handling requests\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "threadGroup",
          "package": "happstack-server",
          "signature": "Maybe ThreadGroup",
          "source": "src/Happstack-Server-Internal-Types.html#Conf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:threadGroup\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:threadGroup\"]"
        },
        "index": {
          "description": "ThreadGroup for registering spawned threads for handling requests",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "threadGroup",
          "package": "happstack-server",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:threadGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of seconds to wait before killing an inactive thread\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "timeout",
          "package": "happstack-server",
          "signature": "Int",
          "source": "src/Happstack-Server-Internal-Types.html#Conf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:timeout\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:timeout\"]"
        },
        "index": {
          "description": "number of seconds to wait before killing an inactive thread",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "timeout",
          "package": "happstack-server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "unBody",
          "package": "happstack-server",
          "signature": "ByteString",
          "source": "src/Happstack-Server-Internal-Types.html#RqBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:unBody\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:unBody\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "unBody",
          "package": "happstack-server",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:unBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea function to validate the output on-the-fly\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.Types\",\"Happstack.Server.Types\"]",
          "name": "validator",
          "package": "happstack-server",
          "signature": "Maybe (Response -\u003e IO Response)",
          "source": "src/Happstack-Server-Internal-Types.html#Conf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:validator\",\"http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:validator\"]"
        },
        "index": {
          "description": "function to validate the output on-the-fly",
          "hierarchy": "Happstack Server Internal Types",
          "module": "Happstack.Server.Internal.Types",
          "name": "validator",
          "normalized": "Maybe(Response-\u003eIO Response)",
          "package": "happstack-server",
          "signature": "Maybe(Response-\u003eIO Response)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Internal-Types.html#v:validator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides four classes and some related functions\n which provide \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e with much of its web-centric behavior.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eServerMonad\u003c/a\u003e\u003c/code\u003e provides access to the HTTP \u003ccode\u003eRequest\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFilterMonad\u003c/a\u003e\u003c/code\u003e provides the ability to apply filters and transformations to a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eWebMonad\u003c/a\u003e\u003c/code\u003e provides a way to escape a computation early and return a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHasRqData\u003c/a\u003e\u003c/code\u003e which provides access to the decoded QUERY_STRING and request body/form data\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Monads",
          "name": "Monads",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Monads.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides four classes and some related functions which provide ServerPartT with much of its web-centric behavior ServerMonad provides access to the HTTP Request FilterMonad provides the ability to apply filters and transformations to Response WebMonad provides way to escape computation early and return Response HasRqData which provides access to the decoded QUERY STRING and request body form data",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "Monads",
          "package": "happstack-server",
          "partial": "Monads",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of functions for manipulating filters.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e implements \u003ccode\u003e\u003ca\u003eFilterMonad\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e so these methods\n are the fundamental ways of manipulating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "FilterMonad",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#FilterMonad",
          "type": "class"
        },
        "index": {
          "description": "set of functions for manipulating filters ServerPartT implements FilterMonad Response so these methods are the fundamental ways of manipulating Response values",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "FilterMonad",
          "package": "happstack-server",
          "partial": "Filter Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#t:FilterMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class alias for all the classes a standard server monad (such as \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e) is expected to have instances for. This allows you to keep your type signatures shorter and easier to understand.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "Happstack",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Monads.html#Happstack",
          "type": "class"
        },
        "index": {
          "description": "class alias for all the classes standard server monad such as ServerPartT is expected to have instances for This allows you to keep your type signatures shorter and easier to understand",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "Happstack",
          "package": "happstack-server",
          "partial": "Happstack",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#t:Happstack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eServerMonad\u003c/a\u003e\u003c/code\u003e class provides methods for reading or locally\n modifying the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. It is essentially a specialized version of\n the \u003ccode\u003e\u003ca\u003eMonadReader\u003c/a\u003e\u003c/code\u003e class. Providing the unique names, \u003ccode\u003e\u003ca\u003easkRq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003elocalRq\u003c/a\u003e\u003c/code\u003e makes it easier to use \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e\n together.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "ServerMonad",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#ServerMonad",
          "type": "class"
        },
        "index": {
          "description": "The ServerMonad class provides methods for reading or locally modifying the Request It is essentially specialized version of the MonadReader class Providing the unique names askRq and localRq makes it easier to use ServerPartT and ReaderT together",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "ServerMonad",
          "package": "happstack-server",
          "partial": "Server Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#t:ServerMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "ServerPart",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#ServerPart",
          "type": "type"
        },
        "index": {
          "description": "An alias for ServerPartT IO",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "ServerPart",
          "package": "happstack-server",
          "partial": "Server Part",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#t:ServerPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e is a rich, featureful monad for web development.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003esimpleHTTP\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eServerMonad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFilterMonad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWebMonad\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003eHasRqData\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "ServerPartT",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#ServerPartT",
          "type": "data"
        },
        "index": {
          "description": "ServerPartT is rich featureful monad for web development see also simpleHTTP ServerMonad FilterMonad WebMonad and HasRqData",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "ServerPartT",
          "package": "happstack-server",
          "partial": "Server Part",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#t:ServerPartT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUnWebT\u003c/a\u003e\u003c/code\u003e is almost exclusively used with \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e. If you\n are not using \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e then you do not need to wrap your\n head around this type. If you are -- the type is not as complex as\n it first appears.\n\u003c/p\u003e\u003cp\u003eIt is worth discussing the unpacked structure of \u003ccode\u003e\u003ca\u003eWebT\u003c/a\u003e\u003c/code\u003e a bit as\n it's exposed in \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emapWebT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA fully unpacked \u003ccode\u003e\u003ca\u003eWebT\u003c/a\u003e\u003c/code\u003e has a structure that looks like:\n\u003c/p\u003e\u003cpre\u003e ununWebT $ WebT m a :: m (Maybe (Either Response a, FilterFun Response))\n\u003c/pre\u003e\u003cp\u003eSo, ignoring \u003ccode\u003em\u003c/code\u003e, as it is just the containing \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, the\n  outermost layer is a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.  This is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e was\n  called or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eSetAppend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e))\u003c/code\u003e if \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e wasn't called.  Inside the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, there\n  is a pair.  The second element of the pair is our filter function\n  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilterFun\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilterFun\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a type\n  alias for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSetAppend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eDual\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e))\u003c/code\u003e.  This is\n  just a wrapper for a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e function with a\n  particular \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e behavior.  The value\n\u003c/p\u003e\u003cpre\u003e  Append (Dual (Endo f))\n\u003c/pre\u003e\u003cp\u003eCauses \u003ccode\u003ef\u003c/code\u003e to be composed with the previous filter.\n\u003c/p\u003e\u003cpre\u003e  Set (Dual (Endo f))\n\u003c/pre\u003e\u003cp\u003eCauses \u003ccode\u003ef\u003c/code\u003e to not be composed with the previous filter.\n\u003c/p\u003e\u003cp\u003eFinally, the first element of the pair is either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAnother way of looking at all these pieces is from the behaviors\n  they control.  The \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e controls the \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e behavior.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e\n  (\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e f)\u003c/code\u003e comes from the \u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e behavior.  Likewise,\n  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e f)\u003c/code\u003e is from \u003ccode\u003e\u003ca\u003ecomposeFilter\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is what you get when you call \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e and\n  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is the normal exit.\n\u003c/p\u003e\u003cp\u003eAn example case statement looks like:\n\u003c/p\u003e\u003cpre\u003e  ex1 webt = do\n    val \u003c- ununWebT webt\n    case val of\n        Nothing -\u003e Nothing  -- this is the interior value when mzero was used\n        Just (Left r, f) -\u003e Just (Left r, f) -- r is the value that was passed into \"finishWith\"\n                                             -- f is our filter function\n        Just (Right a, f) -\u003e Just (Right a, f) -- a is our normal monadic value\n                                               -- f is still our filter function\n\u003c/pre\u003e",
          "module": "Happstack.Server.Monads",
          "name": "UnWebT",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#UnWebT",
          "type": "type"
        },
        "index": {
          "description": "UnWebT is almost exclusively used with mapServerPartT If you are not using mapServerPartT then you do not need to wrap your head around this type If you are the type is not as complex as it first appears It is worth discussing the unpacked structure of WebT bit as it exposed in mapServerPartT and mapWebT fully unpacked WebT has structure that looks like ununWebT WebT Maybe Either Response FilterFun Response So ignoring as it is just the containing Monad the outermost layer is Maybe This is Nothing if mzero was called or Just Either Response SetAppend Endo Response if mzero wasn called Inside the Maybe there is pair The second element of the pair is our filter function FilterFun Response FilterFun Response is type alias for SetAppend Dual Endo Response This is just wrapper for Response Response function with particular Monoid behavior The value Append Dual Endo Causes to be composed with the previous filter Set Dual Endo Causes to not be composed with the previous filter Finally the first element of the pair is either Left Response or Right Another way of looking at all these pieces is from the behaviors they control The Maybe controls the mzero behavior Set Endo comes from the setFilter behavior Likewise Append Endo is from composeFilter Left Response is what you get when you call finishWith and Right is the normal exit An example case statement looks like ex1 webt do val ununWebT webt case val of Nothing Nothing this is the interior value when mzero was used Just Left Just Left is the value that was passed into finishWith is our filter function Just Right Just Right is our normal monadic value is still our filter function",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "UnWebT",
          "package": "happstack-server",
          "partial": "Un Web",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#t:UnWebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWebMonad\u003c/a\u003e\u003c/code\u003e provides a means to end the current computation\n and return a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e immediately.  This provides an\n alternate escape route.  In particular it has a monadic value\n of any type.  And unless you call \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e first your\n response filters will be applied normally.\n\u003c/p\u003e\u003cp\u003eExtremely useful when you're deep inside a monad and decide\n that you want to return a completely different content type,\n since it doesn't force you to convert all your return types to\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e early just to accommodate this.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eescape\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eescape'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "WebMonad",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Monads.html#WebMonad",
          "type": "class"
        },
        "index": {
          "description": "WebMonad provides means to end the current computation and return Response immediately This provides an alternate escape route In particular it has monadic value of any type And unless you call setFilter id first your response filters will be applied normally Extremely useful when you re deep inside monad and decide that you want to return completely different content type since it doesn force you to convert all your return types to Response early just to accommodate this see also escape and escape",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "WebMonad",
          "package": "happstack-server",
          "partial": "Web Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#t:WebMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd headers into the response.  This method does not overwrite\n any existing header of the same name, hence the name \u003ccode\u003e\u003ca\u003eaddHeaderM\u003c/a\u003e\u003c/code\u003e.\n If you want to replace a header use \u003ccode\u003e\u003ca\u003esetHeaderM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "addHeaderM",
          "package": "happstack-server",
          "signature": "String -\u003e String -\u003e m ()",
          "source": "src/Happstack-Server-Monads.html#addHeaderM",
          "type": "function"
        },
        "index": {
          "description": "Add headers into the response This method does not overwrite any existing header of the same name hence the name addHeaderM If you want to replace header use setHeaderM",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "addHeaderM",
          "normalized": "String-\u003eString-\u003ea()",
          "package": "happstack-server",
          "partial": "Header",
          "signature": "String-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:addHeaderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Monads",
          "name": "askRq",
          "package": "happstack-server",
          "signature": "m Request",
          "source": "src/Happstack-Server-Internal-Monads.html#askRq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "askRq",
          "package": "happstack-server",
          "partial": "Rq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:askRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposes your filter function with the existing filter\n function.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "composeFilter",
          "package": "happstack-server",
          "signature": "(a -\u003e a) -\u003e m ()",
          "source": "src/Happstack-Server-Internal-Monads.html#composeFilter",
          "type": "method"
        },
        "index": {
          "description": "Composes your filter function with the existing filter function",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "composeFilter",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "happstack-server",
          "partial": "Filter",
          "signature": "(a-\u003ea)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:composeFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Monads",
          "name": "finishWith",
          "package": "happstack-server",
          "signature": "finishWith",
          "source": "src/Happstack-Server-Internal-Monads.html#finishWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "finishWith",
          "package": "happstack-server",
          "partial": "With",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:finishWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the filter from the environment.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "getFilter",
          "package": "happstack-server",
          "signature": "m b -\u003e m (b, a -\u003e a)",
          "source": "src/Happstack-Server-Internal-Monads.html#getFilter",
          "type": "method"
        },
        "index": {
          "description": "Retrieves the filter from the environment",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "getFilter",
          "normalized": "a b-\u003ea(b,c-\u003ec)",
          "package": "happstack-server",
          "partial": "Filter",
          "signature": "m b-\u003em(b,a-\u003ea)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:getFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a header out of the request.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "getHeaderM",
          "package": "happstack-server",
          "signature": "String -\u003e m (Maybe ByteString)",
          "source": "src/Happstack-Server-Monads.html#getHeaderM",
          "type": "function"
        },
        "index": {
          "description": "Get header out of the request",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "getHeaderM",
          "normalized": "String-\u003ea(Maybe ByteString)",
          "package": "happstack-server",
          "partial": "Header",
          "signature": "String-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:getHeaderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Monads",
          "name": "localRq",
          "package": "happstack-server",
          "signature": "(Request -\u003e Request) -\u003e m a -\u003e m a",
          "source": "src/Happstack-Server-Internal-Monads.html#localRq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "localRq",
          "normalized": "(Request-\u003eRequest)-\u003ea b-\u003ea b",
          "package": "happstack-server",
          "partial": "Rq",
          "signature": "(Request-\u003eRequest)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:localRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a far-future Expires header.  Useful for static resources.  If the\n browser has the resource cached, no extra request is spent.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "neverExpires",
          "package": "happstack-server",
          "signature": "m ()",
          "source": "src/Happstack-Server-Monads.html#neverExpires",
          "type": "function"
        },
        "index": {
          "description": "Set far-future Expires header Useful for static resources If the browser has the resource cached no extra request is spent",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "neverExpires",
          "normalized": "a()",
          "package": "happstack-server",
          "partial": "Expires",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:neverExpires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action and, if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, pass it to the\n second argument.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "require",
          "package": "happstack-server",
          "signature": "IO (Maybe a) -\u003e (a -\u003e m r) -\u003e m r",
          "source": "src/Happstack-Server-Monads.html#require",
          "type": "function"
        },
        "index": {
          "description": "Run an IO action and if it returns Just pass it to the second argument",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "require",
          "normalized": "IO(Maybe a)-\u003e(a-\u003eb c)-\u003eb c",
          "package": "happstack-server",
          "signature": "IO(Maybe a)-\u003e(a-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:require"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of require that can run in any monad, not just \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "requireM",
          "package": "happstack-server",
          "signature": "m (Maybe a) -\u003e (a -\u003e t m r) -\u003e t m r",
          "source": "src/Happstack-Server-Monads.html#requireM",
          "type": "function"
        },
        "index": {
          "description": "variant of require that can run in any monad not just IO",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "requireM",
          "normalized": "a(Maybe b)-\u003e(b-\u003ec a d)-\u003ec a d",
          "package": "happstack-server",
          "signature": "m(Maybe a)-\u003e(a-\u003et m r)-\u003et m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:requireM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnores all previous alterations to your filter\n\u003c/p\u003e\u003cp\u003eAs an example:\n\u003c/p\u003e\u003cpre\u003e do\n   composeFilter f\n   setFilter g\n   return \"Hello World\"\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e will cause the first \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecomposeFilter\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e to\n be ignored.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "setFilter",
          "package": "happstack-server",
          "signature": "(a -\u003e a) -\u003e m ()",
          "source": "src/Happstack-Server-Internal-Monads.html#setFilter",
          "type": "method"
        },
        "index": {
          "description": "Ignores all previous alterations to your filter As an example do composeFilter setFilter return Hello World The setFilter will cause the first composeFilter to be ignored",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "setFilter",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "happstack-server",
          "partial": "Filter",
          "signature": "(a-\u003ea)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:setFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a header into the response.  This will replace an existing\n header of the same name.  Use \u003ccode\u003e\u003ca\u003eaddHeaderM\u003c/a\u003e\u003c/code\u003e if you want to add more\n than one header of the same name.\n\u003c/p\u003e",
          "module": "Happstack.Server.Monads",
          "name": "setHeaderM",
          "package": "happstack-server",
          "signature": "String -\u003e String -\u003e m ()",
          "source": "src/Happstack-Server-Monads.html#setHeaderM",
          "type": "function"
        },
        "index": {
          "description": "Set header into the response This will replace an existing header of the same name Use addHeaderM if you want to add more than one header of the same name",
          "hierarchy": "Happstack Server Monads",
          "module": "Happstack.Server.Monads",
          "name": "setHeaderM",
          "normalized": "String-\u003eString-\u003ea()",
          "package": "happstack-server",
          "partial": "Header",
          "signature": "String-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Monads.html#v:setHeaderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for creating a proxy or reverse-proxy server\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Proxy",
          "name": "Proxy",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Proxy.html",
          "type": "module"
        },
        "index": {
          "description": "Support for creating proxy or reverse-proxy server",
          "hierarchy": "Happstack Server Proxy",
          "module": "Happstack.Server.Proxy",
          "name": "Proxy",
          "package": "happstack-server",
          "partial": "Proxy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Proxy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eproxyServe\u003c/a\u003e\u003c/code\u003e is for creating a part that acts as a proxy.  The\n sole argument \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e is a list of allowed domains for\n proxying.  This matches the domain part of the request and the\n wildcard * can be used. E.g.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \"*\" to match anything.\n\u003c/li\u003e\u003cli\u003e \"*.example.com\" to match anything under example.com\n\u003c/li\u003e\u003cli\u003e \"example.com\" to match just example.com\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTODO: annoyingly enough, this method eventually calls \u003ccode\u003eescape\u003c/code\u003e, so\n  any headers you set won't be used, and the computation immediately\n  ends.\n\u003c/p\u003e",
          "module": "Happstack.Server.Proxy",
          "name": "proxyServe",
          "package": "happstack-server",
          "signature": "[String] -\u003e m Response",
          "source": "src/Happstack-Server-Proxy.html#proxyServe",
          "type": "function"
        },
        "index": {
          "description": "proxyServe is for creating part that acts as proxy The sole argument String is list of allowed domains for proxying This matches the domain part of the request and the wildcard can be used E.g to match anything example.com to match anything under example.com example.com to match just example.com TODO annoyingly enough this method eventually calls escape so any headers you set won be used and the computation immediately ends",
          "hierarchy": "Happstack Server Proxy",
          "module": "Happstack.Server.Proxy",
          "name": "proxyServe",
          "normalized": "[String]-\u003ea Response",
          "package": "happstack-server",
          "partial": "Serve",
          "signature": "[String]-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Proxy.html#v:proxyServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a proxy \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and create a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.  Your basic proxy\n building block.  See \u003ccode\u003e\u003ca\u003eunproxify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: this would be more useful if it didn't call \u003ccode\u003eescape\u003c/code\u003e\n (e.g. it let you modify the response afterwards, or set additional\n headers)\n\u003c/p\u003e",
          "module": "Happstack.Server.Proxy",
          "name": "proxyServe'",
          "package": "happstack-server",
          "signature": "Request -\u003e m Response",
          "source": "src/Happstack-Server-Proxy.html#proxyServe%27",
          "type": "function"
        },
        "index": {
          "description": "Take proxy Request and create Response Your basic proxy building block See unproxify TODO this would be more useful if it didn call escape e.g it let you modify the response afterwards or set additional headers",
          "hierarchy": "Happstack Server Proxy",
          "module": "Happstack.Server.Proxy",
          "name": "proxyServe'",
          "normalized": "Request-\u003ea Response",
          "package": "happstack-server",
          "partial": "Serve'",
          "signature": "Request-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Proxy.html#v:proxyServe-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a reverse proxy implementation.  See \u003ccode\u003e\u003ca\u003eunrproxify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: this would be more useful if it didn't call \u003ccode\u003eescape\u003c/code\u003e, just\n like \u003ccode\u003e\u003ca\u003eproxyServe'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Proxy",
          "name": "rproxyServe",
          "package": "happstack-server",
          "signature": "String-\u003e [(String, String)]-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "This is reverse proxy implementation See unrproxify TODO this would be more useful if it didn call escape just like proxyServe",
          "hierarchy": "Happstack Server Proxy",
          "module": "Happstack.Server.Proxy",
          "name": "rproxyServe",
          "normalized": "String-\u003e[(String,String)]-\u003ea Response",
          "package": "happstack-server",
          "partial": "Serve",
          "signature": "String-\u003e[(String,String)]-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Proxy.html#v:rproxyServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Proxy",
          "name": "unproxify",
          "package": "happstack-server",
          "signature": "Request -\u003e Request",
          "source": "src/Happstack-Server-Proxy.html#unproxify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Proxy",
          "module": "Happstack.Server.Proxy",
          "name": "unproxify",
          "normalized": "Request-\u003eRequest",
          "package": "happstack-server",
          "signature": "Request-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Proxy.html#v:unproxify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Proxy",
          "name": "unrproxify",
          "package": "happstack-server",
          "signature": "String -\u003e [(String, String)] -\u003e Request -\u003e Request",
          "source": "src/Happstack-Server-Proxy.html#unrproxify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Proxy",
          "module": "Happstack.Server.Proxy",
          "name": "unrproxify",
          "normalized": "String-\u003e[(String,String)]-\u003eRequest-\u003eRequest",
          "package": "happstack-server",
          "signature": "String-\u003e[(String,String)]-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Proxy.html#v:unrproxify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions and classes related to generating a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e and setting the response code. For detailed instruction see the Happstack Crash Course: \u003ca\u003ehttp://happstack.com/docs/crashcourse/HelloWorld.html#response_code\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Response",
          "name": "Response",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Response.html",
          "type": "module"
        },
        "index": {
          "description": "Functions and classes related to generating Response and setting the response code For detailed instruction see the Happstack Crash Course http happstack.com docs crashcourse HelloWorld.html response code",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "Response",
          "package": "happstack-server",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoResponse\u003c/a\u003e\u003c/code\u003e will convert a value into a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body,\n set the \u003ccode\u003econtent-type\u003c/code\u003e, and set the default response code for that type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehappstack-server\u003c/code\u003e Example:\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ toResponse \"hello, world!\"\n\u003c/pre\u003e\u003cp\u003ewill generate a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with the content-type \u003ccode\u003etext/plain\u003c/code\u003e,\n the response code \u003ccode\u003e200 OK\u003c/code\u003e, and the body: \u003ccode\u003ehello, world!\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esimpleHTTP\u003c/code\u003e will call \u003ccode\u003e\u003ca\u003etoResponse\u003c/a\u003e\u003c/code\u003e automatically, so the above can be shortened to:\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ \"hello, world!\"\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ehappstack-lite\u003c/code\u003e Example:\n\u003c/p\u003e\u003cpre\u003e main = serve Nothing $ toResponse \"hello, world!\"\n\u003c/pre\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003etoMessage\u003c/a\u003e\u003c/code\u003e (and usually \u003ccode\u003e\u003ca\u003etoContentType\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e",
          "module": "Happstack.Server.Response",
          "name": "ToMessage",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Response.html#ToMessage",
          "type": "class"
        },
        "index": {
          "description": "toResponse will convert value into Response body set the content-type and set the default response code for that type happstack-server Example main simpleHTTP nullConf toResponse hello world will generate Response with the content-type text plain the response code OK and the body hello world simpleHTTP will call toResponse automatically so the above can be shortened to main simpleHTTP nullConf hello world happstack-lite Example main serve Nothing toResponse hello world Minimal definition toMessage and usually toContentType",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "ToMessage",
          "package": "happstack-server",
          "partial": "To Message",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#t:ToMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponds with \u003ccode\u003e502 Bad Gateway\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ badGateway \"Bad Gateway.\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "badGateway",
          "package": "happstack-server",
          "signature": "a -\u003e m a",
          "source": "src/Happstack-Server-Response.html#badGateway",
          "type": "function"
        },
        "index": {
          "description": "Responds with Bad Gateway main simpleHTTP nullConf badGateway Bad Gateway",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "badGateway",
          "normalized": "a-\u003eb a",
          "package": "happstack-server",
          "partial": "Gateway",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:badGateway"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e400 Bad Request\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ badRequest \"Bad Request.\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "badRequest",
          "package": "happstack-server",
          "signature": "a -\u003e m a",
          "source": "src/Happstack-Server-Response.html#badRequest",
          "type": "function"
        },
        "index": {
          "description": "Respond with Bad Request main simpleHTTP nullConf badRequest Bad Request",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "badRequest",
          "normalized": "a-\u003eb a",
          "package": "happstack-server",
          "partial": "Request",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:badRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealias for: \u003ccode\u003efmap toResponse\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eturns \u003ccode\u003em a\u003c/code\u003e into \u003ccode\u003em \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003etoResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ flatten $ do return \"flatten me.\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "flatten",
          "package": "happstack-server",
          "signature": "f a -\u003e f Response",
          "source": "src/Happstack-Server-Response.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "alias for fmap toResponse turns into Response using toResponse main simpleHTTP nullConf flatten do return flatten me",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "flatten",
          "normalized": "a b-\u003ea Response",
          "package": "happstack-server",
          "signature": "f a-\u003ef Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e403 Forbidden\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ forbidden \"Sorry, it is forbidden.\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "forbidden",
          "package": "happstack-server",
          "signature": "a -\u003e m a",
          "source": "src/Happstack-Server-Response.html#forbidden",
          "type": "function"
        },
        "index": {
          "description": "Respond with Forbidden main simpleHTTP nullConf forbidden Sorry it is forbidden",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "forbidden",
          "normalized": "a-\u003eb a",
          "package": "happstack-server",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:forbidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e302 Found\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou probably want \u003ccode\u003e\u003ca\u003eseeOther\u003c/a\u003e\u003c/code\u003e. This method is not in popular use anymore, and is generally treated like 303 by most user-agents anyway.\n\u003c/p\u003e",
          "module": "Happstack.Server.Response",
          "name": "found",
          "package": "happstack-server",
          "signature": "uri -\u003e res -\u003e m res",
          "source": "src/Happstack-Server-Response.html#found",
          "type": "function"
        },
        "index": {
          "description": "Respond with Found You probably want seeOther This method is not in popular use anymore and is generally treated like by most user-agents anyway",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "found",
          "normalized": "a-\u003eb-\u003ec b",
          "package": "happstack-server",
          "signature": "uri-\u003eres-\u003em res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:found"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHonor an \u003ccode\u003eif-modified-since\u003c/code\u003e header in a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n If the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e includes the \u003ccode\u003eif-modified-since\u003c/code\u003e header and the\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e has not been modified, then return 304 (Not Modified),\n otherwise return the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Response",
          "name": "ifModifiedSince",
          "package": "happstack-server",
          "signature": "UTCTime-\u003e Request-\u003e Response-\u003e Response",
          "type": "function"
        },
        "index": {
          "description": "Honor an if-modified-since header in Request If the Request includes the if-modified-since header and the Response has not been modified then return Not Modified otherwise return the Response",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "ifModifiedSince",
          "normalized": "UTCTime-\u003eRequest-\u003eResponse-\u003eResponse",
          "package": "happstack-server",
          "partial": "Modified Since",
          "signature": "UTCTime-\u003eRequest-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:ifModifiedSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e500 Internal Server Error\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ internalServerError \"Sorry, there was an internal server error.\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "internalServerError",
          "package": "happstack-server",
          "signature": "a -\u003e m a",
          "source": "src/Happstack-Server-Response.html#internalServerError",
          "type": "function"
        },
        "index": {
          "description": "Respond with Internal Server Error main simpleHTTP nullConf internalServerError Sorry there was an internal server error",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "internalServerError",
          "normalized": "a-\u003eb a",
          "package": "happstack-server",
          "partial": "Server Error",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:internalServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e301 Moved Permanently\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ movedPermanently \"http://example.org/\" \"What you are looking for is now at http://example.org/\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "movedPermanently",
          "package": "happstack-server",
          "signature": "a -\u003e res -\u003e m res",
          "source": "src/Happstack-Server-Response.html#movedPermanently",
          "type": "function"
        },
        "index": {
          "description": "Respond with Moved Permanently main simpleHTTP nullConf movedPermanently http example.org What you are looking for is now at http example.org",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "movedPermanently",
          "normalized": "a-\u003eb-\u003ec b",
          "package": "happstack-server",
          "partial": "Permanently",
          "signature": "a-\u003eres-\u003em res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:movedPermanently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e204 No Content\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e204 No Content\u003c/code\u003e response may not contain a message-body. If you try to supply one, it will be dutifully ignored.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ noContent \"This will be ignored.\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "noContent",
          "package": "happstack-server",
          "signature": "a -\u003e m a",
          "source": "src/Happstack-Server-Response.html#noContent",
          "type": "function"
        },
        "index": {
          "description": "Respond with No Content No Content response may not contain message-body If you try to supply one it will be dutifully ignored main simpleHTTP nullConf noContent This will be ignored",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "noContent",
          "normalized": "a-\u003eb a",
          "package": "happstack-server",
          "partial": "Content",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:noContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e404 Not Found\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ notFound \"What you are looking for has not been found.\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "notFound",
          "package": "happstack-server",
          "signature": "a -\u003e m a",
          "source": "src/Happstack-Server-Response.html#notFound",
          "type": "function"
        },
        "index": {
          "description": "Respond with Not Found main simpleHTTP nullConf notFound What you are looking for has not been found",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "notFound",
          "normalized": "a-\u003eb a",
          "package": "happstack-server",
          "partial": "Found",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:notFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e200 OK\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ ok \"Everything is OK\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "ok",
          "package": "happstack-server",
          "signature": "a -\u003e m a",
          "source": "src/Happstack-Server-Response.html#ok",
          "type": "function"
        },
        "index": {
          "description": "Respond with OK main simpleHTTP nullConf ok Everything is OK",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "ok",
          "normalized": "a-\u003eb a",
          "package": "happstack-server",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nicely formatted rendering of a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Response",
          "name": "prettyResponse",
          "package": "happstack-server",
          "signature": "Response -\u003e String",
          "source": "src/Happstack-Server-Response.html#prettyResponse",
          "type": "function"
        },
        "index": {
          "description": "nicely formatted rendering of Response",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "prettyResponse",
          "normalized": "Response-\u003eString",
          "package": "happstack-server",
          "partial": "Response",
          "signature": "Response-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:prettyResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e413 Request Entity Too Large\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ requestEntityTooLarge \"That's too big for me to handle.\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "requestEntityTooLarge",
          "package": "happstack-server",
          "signature": "a -\u003e m a",
          "source": "src/Happstack-Server-Response.html#requestEntityTooLarge",
          "type": "function"
        },
        "index": {
          "description": "Respond with Request Entity Too Large main simpleHTTP nullConf requestEntityTooLarge That too big for me to handle",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "requestEntityTooLarge",
          "normalized": "a-\u003eb a",
          "package": "happstack-server",
          "partial": "Entity Too Large",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:requestEntityTooLarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetResponseCode\u003c/a\u003e\u003c/code\u003e status \u003e\u003e return val\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse this if you want to set a response code that does not already\n have a helper function. \n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ resp 200 \"Everything is OK\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "resp",
          "package": "happstack-server",
          "signature": "Int-\u003e b-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Same as setResponseCode status return val Use this if you want to set response code that does not already have helper function main simpleHTTP nullConf resp Everything is OK",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "resp",
          "normalized": "Int-\u003ea-\u003eb a",
          "package": "happstack-server",
          "signature": "Int-\u003eb-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:resp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e303 See Other\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ seeOther \"http://example.org/\" \"What you are looking for is now at http://example.org/\"\n\u003c/pre\u003e\u003cp\u003eNOTE: The second argument of \u003ccode\u003e\u003ca\u003eseeOther\u003c/a\u003e\u003c/code\u003e is the message body which will sent to the browser. According to the HTTP 1.1 spec,\n\u003c/p\u003e\u003cpre\u003ethe entity of the response SHOULD contain a short hypertext note with a hyperlink to the new URI(s).\u003c/pre\u003e\u003cp\u003eThis is because pre-HTTP/1.1 user agents do not support 303. However, in practice you can probably just use \u003ccode\u003e\"\"\u003c/code\u003e as the second argument.\n\u003c/p\u003e",
          "module": "Happstack.Server.Response",
          "name": "seeOther",
          "package": "happstack-server",
          "signature": "uri -\u003e res -\u003e m res",
          "source": "src/Happstack-Server-Response.html#seeOther",
          "type": "function"
        },
        "index": {
          "description": "Respond with See Other main simpleHTTP nullConf seeOther http example.org What you are looking for is now at http example.org NOTE The second argument of seeOther is the message body which will sent to the browser According to the HTTP spec the entity of the response SHOULD contain short hypertext note with hyperlink to the new URI This is because pre-HTTP user agents do not support However in practice you can probably just use as the second argument",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "seeOther",
          "normalized": "a-\u003eb-\u003ec b",
          "package": "happstack-server",
          "partial": "Other",
          "signature": "uri-\u003eres-\u003em res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:seeOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an arbitrary return code in your response.\n\u003c/p\u003e\u003cp\u003eA filter for setting the response code. Generally you will use a\n helper function like \u003ccode\u003e\u003ca\u003eok\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eseeOther\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ do setResponseCode 200\n                                 return \"Everything is OK\"\n\u003c/pre\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eresp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Response",
          "name": "setResponseCode",
          "package": "happstack-server",
          "signature": "Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Set an arbitrary return code in your response filter for setting the response code Generally you will use helper function like ok or seeOther main simpleHTTP nullConf do setResponseCode return Everything is OK see also resp",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "setResponseCode",
          "normalized": "Int-\u003ea()",
          "package": "happstack-server",
          "partial": "Response Code",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:setResponseCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e307 Temporary Redirect\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ tempRedirect \"http://example.org/\" \"What you are looking for is temporarily at http://example.org/\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "tempRedirect",
          "package": "happstack-server",
          "signature": "a -\u003e res -\u003e m res",
          "source": "src/Happstack-Server-Response.html#tempRedirect",
          "type": "function"
        },
        "index": {
          "description": "Respond with Temporary Redirect main simpleHTTP nullConf tempRedirect http example.org What you are looking for is temporarily at http example.org",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "tempRedirect",
          "normalized": "a-\u003eb-\u003ec b",
          "package": "happstack-server",
          "partial": "Redirect",
          "signature": "a-\u003eres-\u003em res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:tempRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Response",
          "name": "toContentType",
          "package": "happstack-server",
          "signature": "a -\u003e ByteString",
          "source": "src/Happstack-Server-Response.html#toContentType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "toContentType",
          "normalized": "a-\u003eByteString",
          "package": "happstack-server",
          "partial": "Content Type",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:toContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Response",
          "name": "toMessage",
          "package": "happstack-server",
          "signature": "a -\u003e ByteString",
          "source": "src/Happstack-Server-Response.html#toMessage",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "toMessage",
          "normalized": "a-\u003eByteString",
          "package": "happstack-server",
          "partial": "Message",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:toMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Response",
          "name": "toResponse",
          "package": "happstack-server",
          "signature": "a -\u003e Response",
          "source": "src/Happstack-Server-Response.html#toResponse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "toResponse",
          "normalized": "a-\u003eResponse",
          "package": "happstack-server",
          "partial": "Response",
          "signature": "a-\u003eResponse",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:toResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA low-level function to build a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from a content-type\n and a \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e in a manner similar to the \u003ccode\u003e\u003ca\u003eToMessage\u003c/a\u003e\u003c/code\u003e class,\n but without requiring an instance declaration.\n\u003c/p\u003e\u003cp\u003eexample:\n\u003c/p\u003e\u003cpre\u003e import Data.ByteString.Char8 as C\n import Data.ByteString.Lazy.Char8 as L\n import Happstack.Server\n\n main = simpleHTTP nullConf $ ok $ toResponseBS (C.pack \"text/plain\") (L.pack \"hello, world\")\n\u003c/pre\u003e\u003cp\u003e(note: \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e only work for ascii. For unicode strings you would need to use \u003ccode\u003eutf8-string\u003c/code\u003e, \u003ccode\u003etext\u003c/code\u003e, or something similar to create a valid \u003ccode\u003eByteString\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Happstack.Server.Response",
          "name": "toResponseBS",
          "package": "happstack-server",
          "signature": "ByteString-\u003e ByteString-\u003e Response",
          "type": "function"
        },
        "index": {
          "description": "low-level function to build Response from content-type and ByteString Creates Response in manner similar to the ToMessage class but without requiring an instance declaration example import Data.ByteString.Char8 as import Data.ByteString.Lazy.Char8 as import Happstack.Server main simpleHTTP nullConf ok toResponseBS C.pack text plain L.pack hello world note pack and pack only work for ascii For unicode strings you would need to use utf8-string text or something similar to create valid ByteString",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "toResponseBS",
          "normalized": "ByteString-\u003eByteString-\u003eResponse",
          "package": "happstack-server",
          "partial": "Response BS",
          "signature": "ByteString-\u003eByteString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:toResponseBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e401 Unauthorized\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ unauthorized \"You are not authorized.\"\n\u003c/pre\u003e",
          "module": "Happstack.Server.Response",
          "name": "unauthorized",
          "package": "happstack-server",
          "signature": "a -\u003e m a",
          "source": "src/Happstack-Server-Response.html#unauthorized",
          "type": "function"
        },
        "index": {
          "description": "Respond with Unauthorized main simpleHTTP nullConf unauthorized You are not authorized",
          "hierarchy": "Happstack Server Response",
          "module": "Happstack.Server.Response",
          "name": "unauthorized",
          "normalized": "a-\u003eb a",
          "package": "happstack-server",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Response.html#v:unauthorized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRoute an incoming \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e to a handler. For more in-depth documentation see this section of the Happstack Crash Course: \u003ca\u003ehttp://happstack.com/docs/crashcourse/RouteFilters.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Routing",
          "name": "Routing",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Routing.html",
          "type": "module"
        },
        "index": {
          "description": "Route an incoming Request to handler For more in-depth documentation see this section of the Happstack Crash Course http happstack.com docs crashcourse RouteFilters.html",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "Routing",
          "package": "happstack-server",
          "partial": "Routing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einstances of this class provide a variety of ways to match on the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e method.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e method GET                  -- match GET or HEAD\n method [GET, POST]          -- match GET, HEAD or POST\n method HEAD                 -- match HEAD /but not/ GET\n method (== GET)             -- match GET or HEAD\n method (not . (==) DELETE)  -- match any method except DELETE\n method ()                   -- match any method\n\u003c/pre\u003e\u003cp\u003eAs you can see, GET implies that HEAD should match as well.  This is to\n make it harder to write an application that uses HTTP incorrectly.\n Happstack handles HEAD requests automatically, but we still need to make\n sure our handlers don't mismatch or a HEAD will result in a 404.\n\u003c/p\u003e\u003cp\u003eIf you must, you can still do something like this\n to match GET without HEAD:\n\u003c/p\u003e\u003cpre\u003e guardRq ((== GET) . rqMethod)\n\u003c/pre\u003e",
          "module": "Happstack.Server.Routing",
          "name": "MatchMethod",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Routing.html#MatchMethod",
          "type": "class"
        },
        "index": {
          "description": "instances of this class provide variety of ways to match on the Request method Examples method GET match GET or HEAD method GET POST match GET HEAD or POST method HEAD match HEAD but not GET method GET match GET or HEAD method not DELETE match any method except DELETE method match any method As you can see GET implies that HEAD should match as well This is to make it harder to write an application that uses HTTP incorrectly Happstack handles HEAD requests automatically but we still need to make sure our handlers don mismatch or HEAD will result in If you must you can still do something like this to match GET without HEAD guardRq GET rqMethod",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "MatchMethod",
          "package": "happstack-server",
          "partial": "Match Method",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#t:MatchMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop any path element and run the handler.\n\u003c/p\u003e\u003cp\u003eSucceeds if a path component was popped. Fails is the remaining path was empty.\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "anyPath",
          "package": "happstack-server",
          "signature": "m r -\u003e m r",
          "source": "src/Happstack-Server-Routing.html#anyPath",
          "type": "function"
        },
        "index": {
          "description": "Pop any path element and run the handler Succeeds if path component was popped Fails is the remaining path was empty",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "anyPath",
          "normalized": "a b-\u003ea b",
          "package": "happstack-server",
          "partial": "Path",
          "signature": "m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:anyPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop a path element and run the supplied handler if it matches the\n given string.\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler = dir \"foo\" $ dir \"bar\" $ subHandler\n\u003c/pre\u003e\u003cp\u003eThe path element can not contain '/'. See also \u003ccode\u003e\u003ca\u003edirs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "dir",
          "package": "happstack-server",
          "signature": "String -\u003e m a -\u003e m a",
          "source": "src/Happstack-Server-Routing.html#dir",
          "type": "function"
        },
        "index": {
          "description": "Pop path element and run the supplied handler if it matches the given string handler ServerPart Response handler dir foo dir bar subHandler The path element can not contain See also dirs",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "dir",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "happstack-server",
          "signature": "String-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard against a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e. Unlike \u003ccode\u003e\u003ca\u003edir\u003c/a\u003e\u003c/code\u003e the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e may\n contain '/'. If the guard succeeds, the matched elements will be\n popped from the directory stack.\n\u003c/p\u003e\u003cpre\u003e dirs \"foo/bar\" $ ...\n\u003c/pre\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003edir\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "dirs",
          "package": "happstack-server",
          "signature": "FilePath -\u003e m a -\u003e m a",
          "source": "src/Happstack-Server-Routing.html#dirs",
          "type": "function"
        },
        "index": {
          "description": "Guard against FilePath Unlike dir the FilePath may contain If the guard succeeds the matched elements will be popped from the directory stack dirs foo bar See also dir",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "dirs",
          "normalized": "FilePath-\u003ea b-\u003ea b",
          "package": "happstack-server",
          "signature": "FilePath-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:dirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard using an arbitrary function on the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "guardRq",
          "package": "happstack-server",
          "signature": "(Request -\u003e Bool) -\u003e m ()",
          "source": "src/Happstack-Server-Routing.html#guardRq",
          "type": "function"
        },
        "index": {
          "description": "Guard using an arbitrary function on the Request",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "guardRq",
          "normalized": "(Request-\u003eBool)-\u003ea()",
          "package": "happstack-server",
          "partial": "Rq",
          "signature": "(Request-\u003eBool)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:guardRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard against the host.\n\u003c/p\u003e\u003cp\u003eThis matches against the \u003ccode\u003ehost\u003c/code\u003e header specified in the incoming \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCan be used to support virtual hosting, \u003ca\u003ehttp://en.wikipedia.org/wiki/Virtual_hosting\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eNote that this matches against the value of the \u003ccode\u003eHost\u003c/code\u003e header which may include the port number.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.23\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ewithHost\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "host",
          "package": "happstack-server",
          "signature": "String -\u003e m a -\u003e m a",
          "source": "src/Happstack-Server-Routing.html#host",
          "type": "function"
        },
        "index": {
          "description": "Guard against the host This matches against the host header specified in the incoming Request Can be used to support virtual hosting http en.wikipedia.org wiki Virtual hosting Note that this matches against the value of the Host header which may include the port number http www.w3.org Protocols rfc2616 rfc2616-sec14.html sec14.23 see also withHost",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "host",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "happstack-server",
          "signature": "String-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eguard which checks that an insecure connection was made via http://\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler =\n     do https\n        ...\n\u003c/pre\u003e",
          "module": "Happstack.Server.Routing",
          "name": "http",
          "package": "happstack-server",
          "signature": "m ()",
          "source": "src/Happstack-Server-Routing.html#http",
          "type": "function"
        },
        "index": {
          "description": "guard which checks that an insecure connection was made via http Example handler ServerPart Response handler do https",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "http",
          "normalized": "a()",
          "package": "happstack-server",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eguard which checks that a secure connection was made via https://\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler =\n     do https\n        ...\n\u003c/pre\u003e",
          "module": "Happstack.Server.Routing",
          "name": "https",
          "package": "happstack-server",
          "signature": "m ()",
          "source": "src/Happstack-Server-Routing.html#https",
          "type": "function"
        },
        "index": {
          "description": "guard which checks that secure connection was made via https Example handler ServerPart Response handler do https",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "https",
          "normalized": "a()",
          "package": "happstack-server",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:https"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Routing",
          "name": "matchMethod",
          "package": "happstack-server",
          "signature": "m -\u003e Method -\u003e Bool",
          "source": "src/Happstack-Server-Routing.html#matchMethod",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "matchMethod",
          "normalized": "a-\u003eMethod-\u003eBool",
          "package": "happstack-server",
          "partial": "Method",
          "signature": "m-\u003eMethod-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:matchMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard against the method only (as opposed to \u003ccode\u003e\u003ca\u003emethodM\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler =\n     do methodOnly [GET, HEAD]\n        ...\n\u003c/pre\u003e",
          "module": "Happstack.Server.Routing",
          "name": "method",
          "package": "happstack-server",
          "signature": "method -\u003e m ()",
          "source": "src/Happstack-Server-Routing.html#method",
          "type": "function"
        },
        "index": {
          "description": "Guard against the method only as opposed to methodM Example handler ServerPart Response handler do methodOnly GET HEAD",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "method",
          "normalized": "a-\u003eb()",
          "package": "happstack-server",
          "signature": "method-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard against the method. This function also guards against\n *any remaining path segments*. See \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e for the version\n that guards only by method.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler =\n     do methodM [GET, HEAD]\n        ...\n\u003c/pre\u003e\u003cp\u003eNOTE: This function is largely retained for backwards\n compatibility. The fact that implicitly calls \u003ccode\u003e\u003ca\u003enullDir\u003c/a\u003e\u003c/code\u003e is often\n forgotten and leads to confusion. It is probably better to just use\n \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e and call \u003ccode\u003e\u003ca\u003enullDir\u003c/a\u003e\u003c/code\u003e explicitly.\n\u003c/p\u003e\u003cp\u003eThis function will likely be deprecated in the future.\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "methodM",
          "package": "happstack-server",
          "signature": "method -\u003e m ()",
          "source": "src/Happstack-Server-Routing.html#methodM",
          "type": "function"
        },
        "index": {
          "description": "Guard against the method This function also guards against any remaining path segments See method for the version that guards only by method Example handler ServerPart Response handler do methodM GET HEAD NOTE This function is largely retained for backwards compatibility The fact that implicitly calls nullDir is often forgotten and leads to confusion It is probably better to just use method and call nullDir explicitly This function will likely be deprecated in the future",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "methodM",
          "normalized": "a-\u003eb()",
          "package": "happstack-server",
          "signature": "method-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:methodM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: this function is just an alias for method now\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eGuard against the method only (as opposed to \u003ccode\u003e\u003ca\u003emethodM\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler =\n     do methodOnly [GET, HEAD]\n        ...\n\u003c/pre\u003e",
          "module": "Happstack.Server.Routing",
          "name": "methodOnly",
          "package": "happstack-server",
          "signature": "method -\u003e m ()",
          "source": "src/Happstack-Server-Routing.html#methodOnly",
          "type": "function"
        },
        "index": {
          "description": "Deprecated this function is just an alias for method now Guard against the method only as opposed to methodM Example handler ServerPart Response handler do methodOnly GET HEAD",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "methodOnly",
          "normalized": "a-\u003eb()",
          "package": "happstack-server",
          "partial": "Only",
          "signature": "method-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:methodOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use method instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eGuard against the method. Note, this function also guards against\n any remaining path segments. Similar to \u003ccode\u003e\u003ca\u003emethodM\u003c/a\u003e\u003c/code\u003e but with a different type signature.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler = methodSP [GET, HEAD] $ subHandler\n\u003c/pre\u003e\u003cp\u003eNOTE: This style of combinator is going to be deprecated in the\n future. It is better to just use \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler = method [GET, HEAD] \u003e\u003e nullDir \u003e\u003e subHandler\n\u003c/pre\u003e",
          "module": "Happstack.Server.Routing",
          "name": "methodSP",
          "package": "happstack-server",
          "signature": "method -\u003e m b -\u003e m b",
          "source": "src/Happstack-Server-Routing.html#methodSP",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use method instead Guard against the method Note this function also guards against any remaining path segments Similar to methodM but with different type signature Example handler ServerPart Response handler methodSP GET HEAD subHandler NOTE This style of combinator is going to be deprecated in the future It is better to just use method handler ServerPart Response handler method GET HEAD nullDir subHandler",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "methodSP",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "happstack-server",
          "partial": "SP",
          "signature": "method-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:methodSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe opposite of \u003ccode\u003e\u003ca\u003etrailingSlash\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "noTrailingSlash",
          "package": "happstack-server",
          "signature": "m ()",
          "source": "src/Happstack-Server-Routing.html#noTrailingSlash",
          "type": "function"
        },
        "index": {
          "description": "The opposite of trailingSlash",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "noTrailingSlash",
          "normalized": "a()",
          "package": "happstack-server",
          "partial": "Trailing Slash",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:noTrailingSlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eguard which only succeeds if there are no remaining path segments\n\u003c/p\u003e\u003cp\u003eOften used if you want to explicitly assign a route for \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "nullDir",
          "package": "happstack-server",
          "signature": "m ()",
          "source": "src/Happstack-Server-Routing.html#nullDir",
          "type": "function"
        },
        "index": {
          "description": "guard which only succeeds if there are no remaining path segments Often used if you want to explicitly assign route for",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "nullDir",
          "normalized": "a()",
          "package": "happstack-server",
          "partial": "Dir",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:nullDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop a path element and parse it using the \u003ccode\u003e\u003ca\u003efromReqURI\u003c/a\u003e\u003c/code\u003e in the\n \u003ccode\u003e\u003ca\u003eFromReqURI\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "path",
          "package": "happstack-server",
          "signature": "(a -\u003e m b) -\u003e m b",
          "source": "src/Happstack-Server-Routing.html#path",
          "type": "function"
        },
        "index": {
          "description": "Pop path element and parse it using the fromReqURI in the FromReqURI class",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "path",
          "normalized": "(a-\u003eb c)-\u003eb c",
          "package": "happstack-server",
          "signature": "(a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard which checks that the Request URI ends in \u003ccode\u003e'/'\u003c/code\u003e.  Useful\n for distinguishing between \u003ccode\u003efoo\u003c/code\u003e and \u003ccode\u003efoo/\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "trailingSlash",
          "package": "happstack-server",
          "signature": "m ()",
          "source": "src/Happstack-Server-Routing.html#trailingSlash",
          "type": "function"
        },
        "index": {
          "description": "Guard which checks that the Request URI ends in Useful for distinguishing between foo and foo",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "trailingSlash",
          "normalized": "a()",
          "package": "happstack-server",
          "partial": "Slash",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:trailingSlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab the rest of the URL (dirs + query) and passes it to your\n handler.\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "uriRest",
          "package": "happstack-server",
          "signature": "(String -\u003e m a) -\u003e m a",
          "source": "src/Happstack-Server-Routing.html#uriRest",
          "type": "function"
        },
        "index": {
          "description": "Grab the rest of the URL dirs query and passes it to your handler",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "uriRest",
          "normalized": "(String-\u003ea b)-\u003ea b",
          "package": "happstack-server",
          "partial": "Rest",
          "signature": "(String-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:uriRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the \u003ccode\u003ehost\u003c/code\u003e header in the incoming request and pass it to the handler.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ehost\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Routing",
          "name": "withHost",
          "package": "happstack-server",
          "signature": "(String -\u003e m a) -\u003e m a",
          "source": "src/Happstack-Server-Routing.html#withHost",
          "type": "function"
        },
        "index": {
          "description": "Lookup the host header in the incoming request and pass it to the handler see also host",
          "hierarchy": "Happstack Server Routing",
          "module": "Happstack.Server.Routing",
          "name": "withHost",
          "normalized": "(String-\u003ea b)-\u003ea b",
          "package": "happstack-server",
          "partial": "Host",
          "signature": "(String-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Routing.html#v:withHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for extracting values from the query string, form data, cookies, etc.\n\u003c/p\u003e\u003cp\u003eFor in-depth documentation see the following section of the Happstack Crash Course:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://happstack.com/docs/crashcourse/RqData.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.RqData",
          "name": "RqData",
          "package": "happstack-server",
          "source": "src/Happstack-Server-RqData.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for extracting values from the query string form data cookies etc For in-depth documentation see the following section of the Happstack Crash Course http happstack.com docs crashcourse RqData.html",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "RqData",
          "package": "happstack-server",
          "partial": "Rq Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003edefaultBodyPolicy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "BodyPolicy",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-MessageWrap.html#BodyPolicy",
          "type": "data"
        },
        "index": {
          "description": "see defaultBodyPolicy",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "BodyPolicy",
          "package": "happstack-server",
          "partial": "Body Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#t:BodyPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea list of errors\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "Errors",
          "package": "happstack-server",
          "source": "src/Happstack-Server-RqData.html#Errors",
          "type": "newtype"
        },
        "index": {
          "description": "list of errors",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "Errors",
          "package": "happstack-server",
          "partial": "Errors",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#t:Errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003ewithData\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetData\u003c/a\u003e\u003c/code\u003e. Make your preferred data\n type an instance of \u003ccode\u003e\u003ca\u003eFromData\u003c/a\u003e\u003c/code\u003e to use those functions.\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "FromData",
          "package": "happstack-server",
          "source": "src/Happstack-Server-RqData.html#FromData",
          "type": "class"
        },
        "index": {
          "description": "Used by withData and getData Make your preferred data type an instance of FromData to use those functions",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "FromData",
          "package": "happstack-server",
          "partial": "From Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#t:FromData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for monads which contain a \u003ccode\u003e\u003ca\u003eRqEnv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "HasRqData",
          "package": "happstack-server",
          "source": "src/Happstack-Server-RqData.html#HasRqData",
          "type": "class"
        },
        "index": {
          "description": "class for monads which contain RqEnv",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "HasRqData",
          "package": "happstack-server",
          "partial": "Has Rq Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#t:HasRqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn applicative functor and monad for looking up key/value pairs\n in the QUERY_STRING, Request body, and cookies.\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "RqData",
          "package": "happstack-server",
          "source": "src/Happstack-Server-RqData.html#RqData",
          "type": "data"
        },
        "index": {
          "description": "An applicative functor and monad for looking up key value pairs in the QUERY STRING Request body and cookies",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "RqData",
          "package": "happstack-server",
          "partial": "Rq Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#t:RqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe environment used to lookup query parameters. It consists of\n the triple: (query string inputs, body inputs, cookie inputs)\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "RqEnv",
          "package": "happstack-server",
          "source": "src/Happstack-Server-RqData.html#RqEnv",
          "type": "type"
        },
        "index": {
          "description": "the environment used to lookup query parameters It consists of the triple query string inputs body inputs cookie inputs",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "RqEnv",
          "package": "happstack-server",
          "partial": "Rq Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#t:RqEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.RqData",
          "name": "Errors",
          "package": "happstack-server",
          "signature": "Errors",
          "source": "src/Happstack-Server-RqData.html#Errors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "Errors",
          "package": "happstack-server",
          "partial": "Errors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:Errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.RqData",
          "name": "askRqEnv",
          "package": "happstack-server",
          "signature": "m RqEnv",
          "source": "src/Happstack-Server-RqData.html#askRqEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "askRqEnv",
          "package": "happstack-server",
          "partial": "Rq Env",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:askRqEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elimit the scope to the Request body\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler =\n     do foo \u003c- body $ look \"foo\"\n        ok $ toResponse $ \"foo = \" ++ foo\n\u003c/pre\u003e",
          "module": "Happstack.Server.RqData",
          "name": "body",
          "package": "happstack-server",
          "signature": "m a -\u003e m a",
          "source": "src/Happstack-Server-RqData.html#body",
          "type": "function"
        },
        "index": {
          "description": "limit the scope to the Request body handler ServerPart Response handler do foo body look foo ok toResponse foo foo",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "body",
          "normalized": "a b-\u003ea b",
          "package": "happstack-server",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elimit the scope to \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003es  which produce a \u003ccode\u003eByteString\u003c/code\u003e (aka, not a file)\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "bytestring",
          "package": "happstack-server",
          "signature": "m a -\u003e m a",
          "source": "src/Happstack-Server-RqData.html#bytestring",
          "type": "function"
        },
        "index": {
          "description": "limit the scope to Input which produce ByteString aka not file",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "bytestring",
          "normalized": "a b-\u003ea b",
          "package": "happstack-server",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:bytestring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert or validate a value\n\u003c/p\u003e\u003cp\u003eThis is similar to \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e except that the function can fail by\n returning Left and an error message. The error will be propagated\n by calling \u003ccode\u003e\u003ca\u003erqDataError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is useful for a number of things including:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Parsing a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into another type\n\u003c/li\u003e\u003cli\u003e Checking that a value meets some requirements (for example, that is an Int between 1 and 10).\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eExample usage at:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://happstack.com/docs/crashcourse/RqData.html#rqdatacheckrq\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "checkRq",
          "package": "happstack-server",
          "signature": "m a -\u003e (a -\u003e Either String b) -\u003e m b",
          "source": "src/Happstack-Server-RqData.html#checkRq",
          "type": "function"
        },
        "index": {
          "description": "convert or validate value This is similar to fmap except that the function can fail by returning Left and an error message The error will be propagated by calling rqDataError This function is useful for number of things including Parsing String into another type Checking that value meets some requirements for example that is an Int between and Example usage at http happstack.com docs crashcourse RqData.html rqdatacheckrq",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "checkRq",
          "normalized": "a b-\u003e(b-\u003eEither String c)-\u003ea c",
          "package": "happstack-server",
          "partial": "Rq",
          "signature": "m a-\u003e(a-\u003eEither String b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:checkRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003echeckRq\u003c/a\u003e\u003c/code\u003e but the check function can be monadic\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "checkRqM",
          "package": "happstack-server",
          "signature": "m a -\u003e (a -\u003e m (Either String b)) -\u003e m b",
          "source": "src/Happstack-Server-RqData.html#checkRqM",
          "type": "function"
        },
        "index": {
          "description": "like checkRq but the check function can be monadic",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "checkRqM",
          "normalized": "a b-\u003e(b-\u003ea(Either String c))-\u003ea c",
          "package": "happstack-server",
          "partial": "Rq",
          "signature": "m a-\u003e(a-\u003em(Either String b))-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:checkRqM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe POST/PUT body of a Request is not received or decoded unless\n this function is invoked.\n\u003c/p\u003e\u003cp\u003eIt is an error to try to use the look functions for a POST/PUT\n request with out first calling this function.\n\u003c/p\u003e\u003cp\u003eIt is ok to call \u003ccode\u003e\u003ca\u003edecodeBody\u003c/a\u003e\u003c/code\u003e at the beginning of every request:\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $\n           do decodeBody (defaultBodyPolicy \"/tmp/\" 4096 4096 4096)\n              handlers\n\u003c/pre\u003e\u003cp\u003eYou can achieve finer granularity quotas by calling \u003ccode\u003e\u003ca\u003edecodeBody\u003c/a\u003e\u003c/code\u003e\n with different values in different handlers.\n\u003c/p\u003e\u003cp\u003eOnly the first call to \u003ccode\u003e\u003ca\u003edecodeBody\u003c/a\u003e\u003c/code\u003e will have any effect. Calling\n it a second time, even with different quota values, will do\n nothing.\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "decodeBody",
          "package": "happstack-server",
          "signature": "BodyPolicy -\u003e m ()",
          "source": "src/Happstack-Server-RqData.html#decodeBody",
          "type": "function"
        },
        "index": {
          "description": "The POST PUT body of Request is not received or decoded unless this function is invoked It is an error to try to use the look functions for POST PUT request with out first calling this function It is ok to call decodeBody at the beginning of every request main simpleHTTP nullConf do decodeBody defaultBodyPolicy tmp handlers You can achieve finer granularity quotas by calling decodeBody with different values in different handlers Only the first call to decodeBody will have any effect Calling it second time even with different quota values will do nothing",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "decodeBody",
          "normalized": "BodyPolicy-\u003ea()",
          "package": "happstack-server",
          "partial": "Body",
          "signature": "BodyPolicy-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:decodeBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.RqData",
          "name": "fromData",
          "package": "happstack-server",
          "signature": "RqData a",
          "source": "src/Happstack-Server-RqData.html#fromData",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "fromData",
          "package": "happstack-server",
          "partial": "Data",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:fromData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003egetDataFn\u003c/a\u003e\u003c/code\u003e that uses \u003ccode\u003e\u003ca\u003eFromData\u003c/a\u003e\u003c/code\u003e to chose your\n \u003ccode\u003e\u003ca\u003eRqData\u003c/a\u003e\u003c/code\u003e for you.  The example from \u003ccode\u003e\u003ca\u003egetData\u003c/a\u003e\u003c/code\u003e becomes:\n\u003c/p\u003e\u003cpre\u003e  data AuthCredentials = AuthCredentials { username :: String,  password :: String }\n\n  isValid :: AuthCredentials -\u003e Bool\n  isValid = const True\n\n  myRqData :: RqData AuthCredentials\n  myRqData = do\n     username \u003c- look \"username\"\n     password \u003c- look \"password\"\n     return (AuthCredentials username password)\n\n  instance FromData AuthCredentials where\n     fromData = myRqData\n\n  checkAuth :: (String -\u003e ServerPart Response) -\u003e ServerPart Response\n  checkAuth errorHandler = do\n     d \u003c- getData\n     case d of\n         (Left e) -\u003e errorHandler (unlines e)\n         (Right a) | isValid a -\u003e mzero\n         (Right a) | otherwise -\u003e errorHandler \"invalid\"\n\u003c/pre\u003e\u003cp\u003eNOTE: you must call \u003ccode\u003e\u003ca\u003edecodeBody\u003c/a\u003e\u003c/code\u003e prior to calling this function if\n the request method is POST or PUT.\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "getData",
          "package": "happstack-server",
          "signature": "m (Either [String] a)",
          "source": "src/Happstack-Server-RqData.html#getData",
          "type": "function"
        },
        "index": {
          "description": "variant of getDataFn that uses FromData to chose your RqData for you The example from getData becomes data AuthCredentials AuthCredentials username String password String isValid AuthCredentials Bool isValid const True myRqData RqData AuthCredentials myRqData do username look username password look password return AuthCredentials username password instance FromData AuthCredentials where fromData myRqData checkAuth String ServerPart Response ServerPart Response checkAuth errorHandler do getData case of Left errorHandler unlines Right isValid mzero Right otherwise errorHandler invalid NOTE you must call decodeBody prior to calling this function if the request method is POST or PUT",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "getData",
          "normalized": "a(Either[String]b)",
          "package": "happstack-server",
          "partial": "Data",
          "signature": "m(Either[String]a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:getData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun \u003ccode\u003e\u003ca\u003eRqData\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eServerMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: a simple \u003ccode\u003eGET\u003c/code\u003e or \u003ccode\u003ePOST\u003c/code\u003e variable based authentication\n guard.  It handles the request with \u003ccode\u003eerrorHandler\u003c/code\u003e if\n authentication fails.\n\u003c/p\u003e\u003cpre\u003e  data AuthCredentials = AuthCredentials { username :: String,  password :: String }\n\n  isValid :: AuthCredentials -\u003e Bool\n  isValid = const True\n\n  myRqData :: RqData AuthCredentials\n  myRqData = do\n     username \u003c- look \"username\"\n     password \u003c- look \"password\"\n     return (AuthCredentials username password)\n\n  checkAuth :: (String -\u003e ServerPart Response) -\u003e ServerPart Response\n  checkAuth errorHandler = do\n     d \u003c- getDataFn myRqData\n     case d of\n         (Left e) -\u003e errorHandler (unlines e)\n         (Right a) | isValid a -\u003e mzero\n         (Right a) | otherwise -\u003e errorHandler \"invalid\"\n\u003c/pre\u003e\u003cp\u003eNOTE: you must call \u003ccode\u003e\u003ca\u003edecodeBody\u003c/a\u003e\u003c/code\u003e prior to calling this function if\n the request method is POST or PUT.\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "getDataFn",
          "package": "happstack-server",
          "signature": "RqData a-\u003e m (Either [String] a)",
          "type": "function"
        },
        "index": {
          "description": "run RqData in ServerMonad Example simple GET or POST variable based authentication guard It handles the request with errorHandler if authentication fails data AuthCredentials AuthCredentials username String password String isValid AuthCredentials Bool isValid const True myRqData RqData AuthCredentials myRqData do username look username password look password return AuthCredentials username password checkAuth String ServerPart Response ServerPart Response checkAuth errorHandler do getDataFn myRqData case of Left errorHandler unlines Right isValid mzero Right otherwise errorHandler invalid NOTE you must call decodeBody prior to calling this function if the request method is POST or PUT",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "getDataFn",
          "normalized": "RqData a-\u003eb(Either[String]a)",
          "package": "happstack-server",
          "partial": "Data Fn",
          "signature": "RqData a-\u003em(Either[String]a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:getDataFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.RqData",
          "name": "localRqEnv",
          "package": "happstack-server",
          "signature": "(RqEnv -\u003e RqEnv) -\u003e m a -\u003e m a",
          "source": "src/Happstack-Server-RqData.html#localRqEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "localRqEnv",
          "normalized": "(RqEnv-\u003eRqEnv)-\u003ea b-\u003ea b",
          "package": "happstack-server",
          "partial": "Rq Env",
          "signature": "(RqEnv-\u003eRqEnv)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:localRqEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the first matching named input parameter as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler =\n      do foo \u003c- look \"foo\"\n         ok $ toResponse $ \"foo = \" ++ foo\n\u003c/pre\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elooks\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elookBS\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003elookBSs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "look",
          "package": "happstack-server",
          "signature": "String -\u003e m String",
          "source": "src/Happstack-Server-RqData.html#look",
          "type": "function"
        },
        "index": {
          "description": "Gets the first matching named input parameter as String Searches the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded Example handler ServerPart Response handler do foo look foo ok toResponse foo foo see also looks lookBS and lookBSs",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "look",
          "normalized": "String-\u003ea String",
          "package": "happstack-server",
          "signature": "String-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:look"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the first matching named input parameter as a lazy \u003ccode\u003eByteString\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookBSs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookBS",
          "package": "happstack-server",
          "signature": "String -\u003e m ByteString",
          "source": "src/Happstack-Server-RqData.html#lookBS",
          "type": "function"
        },
        "index": {
          "description": "Gets the first matching named input parameter as lazy ByteString Searches the QUERY STRING followed by the Request body see also lookBSs",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookBS",
          "normalized": "String-\u003ea ByteString",
          "package": "happstack-server",
          "partial": "BS",
          "signature": "String-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all matches for the named input parameter as lazy \u003ccode\u003eByteString\u003c/code\u003es\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookBS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookBSs",
          "package": "happstack-server",
          "signature": "String -\u003e m [ByteString]",
          "source": "src/Happstack-Server-RqData.html#lookBSs",
          "type": "function"
        },
        "index": {
          "description": "Gets all matches for the named input parameter as lazy ByteString Searches the QUERY STRING followed by the Request body see also lookBS",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookBSs",
          "normalized": "String-\u003ea[ByteString]",
          "package": "happstack-server",
          "partial": "BSs",
          "signature": "String-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookBSs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the named cookie\n the cookie name is case insensitive\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookCookie",
          "package": "happstack-server",
          "signature": "String -\u003e m Cookie",
          "source": "src/Happstack-Server-RqData.html#lookCookie",
          "type": "function"
        },
        "index": {
          "description": "Gets the named cookie the cookie name is case insensitive",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookCookie",
          "normalized": "String-\u003ea Cookie",
          "package": "happstack-server",
          "partial": "Cookie",
          "signature": "String-\u003em Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egets the named cookie as a string\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookCookieValue",
          "package": "happstack-server",
          "signature": "String -\u003e m String",
          "source": "src/Happstack-Server-RqData.html#lookCookieValue",
          "type": "function"
        },
        "index": {
          "description": "gets the named cookie as string",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookCookieValue",
          "normalized": "String-\u003ea String",
          "package": "happstack-server",
          "partial": "Cookie Value",
          "signature": "String-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookCookieValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the first matching named file\n\u003c/p\u003e\u003cp\u003eFiles can only appear in the request body. Additionally, the form\n must set enctype=\"multipart/form-data\".\n\u003c/p\u003e\u003cp\u003eThis function returns a tuple consisting of:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The temporary location of the uploaded file\n\u003c/li\u003e\u003cli\u003e The local filename supplied by the browser\n\u003c/li\u003e\u003cli\u003e The content-type supplied by the browser\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIf the user does not supply a file in the html form input field,\n the behaviour will depend upon the browser. Most browsers will send\n a 0-length file with an empty file name, so checking that (2) is\n not empty is usually sufficient to ensure the field has been\n filled.\n\u003c/p\u003e\u003cp\u003eNOTE: You must move the file from the temporary location before the\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e is sent. The temporary files are automatically removed\n after the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e is sent.\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookFile",
          "package": "happstack-server",
          "signature": "String-\u003e m (FilePath, FilePath, ContentType)",
          "type": "function"
        },
        "index": {
          "description": "Gets the first matching named file Files can only appear in the request body Additionally the form must set enctype multipart form-data This function returns tuple consisting of The temporary location of the uploaded file The local filename supplied by the browser The content-type supplied by the browser If the user does not supply file in the html form input field the behaviour will depend upon the browser Most browsers will send length file with an empty file name so checking that is not empty is usually sufficient to ensure the field has been filled NOTE You must move the file from the temporary location before the Response is sent The temporary files are automatically removed after the Response is sent",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookFile",
          "normalized": "String-\u003ea(FilePath,FilePath,ContentType)",
          "package": "happstack-server",
          "partial": "File",
          "signature": "String-\u003em(FilePath,FilePath,ContentType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the first matching named input parameter\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookInputs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookInput",
          "package": "happstack-server",
          "signature": "String -\u003e m Input",
          "source": "src/Happstack-Server-RqData.html#lookInput",
          "type": "function"
        },
        "index": {
          "description": "Gets the first matching named input parameter Searches the QUERY STRING followed by the Request body see also lookInputs",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookInput",
          "normalized": "String-\u003ea Input",
          "package": "happstack-server",
          "partial": "Input",
          "signature": "String-\u003em Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all matches for the named input parameter\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookInput\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookInputs",
          "package": "happstack-server",
          "signature": "String -\u003e m [Input]",
          "source": "src/Happstack-Server-RqData.html#lookInputs",
          "type": "function"
        },
        "index": {
          "description": "Gets all matches for the named input parameter Searches the QUERY STRING followed by the Request body see also lookInput",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookInputs",
          "normalized": "String-\u003ea[Input]",
          "package": "happstack-server",
          "partial": "Inputs",
          "signature": "String-\u003em[Input]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egets all the input parameters, and converts them to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe results will contain the QUERY_STRING followed by the Request\n body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookPairsBS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookPairs",
          "package": "happstack-server",
          "signature": "m [(String, Either FilePath String)]",
          "source": "src/Happstack-Server-RqData.html#lookPairs",
          "type": "function"
        },
        "index": {
          "description": "gets all the input parameters and converts them to String The results will contain the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded see also lookPairsBS",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookPairs",
          "normalized": "a[(String,Either FilePath String)]",
          "package": "happstack-server",
          "partial": "Pairs",
          "signature": "m[(String,Either FilePath String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egets all the input parameters\n\u003c/p\u003e\u003cp\u003eThe results will contain the QUERY_STRING followed by the Request\n body.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookPairs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookPairsBS",
          "package": "happstack-server",
          "signature": "m [(String, Either FilePath ByteString)]",
          "source": "src/Happstack-Server-RqData.html#lookPairsBS",
          "type": "function"
        },
        "index": {
          "description": "gets all the input parameters The results will contain the QUERY STRING followed by the Request body see also lookPairs",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookPairsBS",
          "normalized": "a[(String,Either FilePath ByteString)]",
          "package": "happstack-server",
          "partial": "Pairs BS",
          "signature": "m[(String,Either FilePath ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookPairsBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the first matching named input parameter and decodes it using \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookReads\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookRead",
          "package": "happstack-server",
          "signature": "String -\u003e m a",
          "source": "src/Happstack-Server-RqData.html#lookRead",
          "type": "function"
        },
        "index": {
          "description": "Gets the first matching named input parameter and decodes it using Read Searches the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded see also lookReads",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookRead",
          "normalized": "String-\u003ea b",
          "package": "happstack-server",
          "partial": "Read",
          "signature": "String-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all matches for the named input parameter and decodes them using \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookReads\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookReads",
          "package": "happstack-server",
          "signature": "String -\u003e m [a]",
          "source": "src/Happstack-Server-RqData.html#lookReads",
          "type": "function"
        },
        "index": {
          "description": "Gets all matches for the named input parameter and decodes them using Read Searches the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded see also lookReads",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookReads",
          "normalized": "String-\u003ea[b]",
          "package": "happstack-server",
          "partial": "Reads",
          "signature": "String-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookReads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the first matching named input parameter as a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookTexts\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elook\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elooks\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elookBS\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003elookBSs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookText",
          "package": "happstack-server",
          "signature": "String -\u003e m Text",
          "source": "src/Happstack-Server-RqData.html#lookText",
          "type": "function"
        },
        "index": {
          "description": "Gets the first matching named input parameter as lazy Text Searches the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded see also lookTexts look looks lookBS and lookBSs",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookText",
          "normalized": "String-\u003ea Text",
          "package": "happstack-server",
          "partial": "Text",
          "signature": "String-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the first matching named input parameter as a strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookTexts\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elook\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elooks\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elookBS\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003elookBSs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookText'",
          "package": "happstack-server",
          "signature": "String -\u003e m Text",
          "source": "src/Happstack-Server-RqData.html#lookText%27",
          "type": "function"
        },
        "index": {
          "description": "Gets the first matching named input parameter as strict Text Searches the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded see also lookTexts look looks lookBS and lookBSs",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookText'",
          "normalized": "String-\u003ea Text",
          "package": "happstack-server",
          "partial": "Text'",
          "signature": "String-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookText-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all matches for the named input parameter as lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookText\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elooks\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookBSs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookTexts",
          "package": "happstack-server",
          "signature": "String -\u003e m [Text]",
          "source": "src/Happstack-Server-RqData.html#lookTexts",
          "type": "function"
        },
        "index": {
          "description": "Gets all matches for the named input parameter as lazy Text Searches the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded see also lookText looks and lookBSs",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookTexts",
          "normalized": "String-\u003ea[Text]",
          "package": "happstack-server",
          "partial": "Texts",
          "signature": "String-\u003em[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookTexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all matches for the named input parameter as strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookText'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elooks\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookBSs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "lookTexts'",
          "package": "happstack-server",
          "signature": "String -\u003e m [Text]",
          "source": "src/Happstack-Server-RqData.html#lookTexts%27",
          "type": "function"
        },
        "index": {
          "description": "Gets all matches for the named input parameter as strict Text Searches the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded see also lookText looks and lookBSs",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "lookTexts'",
          "normalized": "String-\u003ea[Text]",
          "package": "happstack-server",
          "partial": "Texts'",
          "signature": "String-\u003em[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:lookTexts-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all matches for the named input parameter as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elook\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookBSs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "looks",
          "package": "happstack-server",
          "signature": "String -\u003e m [String]",
          "source": "src/Happstack-Server-RqData.html#looks",
          "type": "function"
        },
        "index": {
          "description": "Gets all matches for the named input parameter as String Searches the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded see also look and lookBSs",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "looks",
          "normalized": "String-\u003ea[String]",
          "package": "happstack-server",
          "signature": "String-\u003em[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:looks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform the result of 'RqData a'.\n\u003c/p\u003e\u003cp\u003eThis is similar to \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e except it also allows you to modify the\n \u003ccode\u003e\u003ca\u003eErrors\u003c/a\u003e\u003c/code\u003e not just \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "mapRqData",
          "package": "happstack-server",
          "signature": "(Either (Errors String) a -\u003e Either (Errors String) b) -\u003e RqData a -\u003e RqData b",
          "source": "src/Happstack-Server-RqData.html#mapRqData",
          "type": "function"
        },
        "index": {
          "description": "transform the result of RqData This is similar to fmap except it also allows you to modify the Errors not just",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "mapRqData",
          "normalized": "(Either(Errors String)a-\u003eEither(Errors String)b)-\u003eRqData a-\u003eRqData b",
          "package": "happstack-server",
          "partial": "Rq Data",
          "signature": "(Either(Errors String)a-\u003eEither(Errors String)b)-\u003eRqData a-\u003eRqData b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:mapRqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elimit the scope to the QUERY_STRING\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler =\n     do foo \u003c- queryString $ look \"foo\"\n        ok $ toResponse $ \"foo = \" ++ foo\n\u003c/pre\u003e",
          "module": "Happstack.Server.RqData",
          "name": "queryString",
          "package": "happstack-server",
          "signature": "m a -\u003e m a",
          "source": "src/Happstack-Server-RqData.html#queryString",
          "type": "function"
        },
        "index": {
          "description": "limit the scope to the QUERY STRING handler ServerPart Response handler do foo queryString look foo ok toResponse foo foo",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "queryString",
          "normalized": "a b-\u003ea b",
          "package": "happstack-server",
          "partial": "String",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egets the named cookie as the requested Read type\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "readCookieValue",
          "package": "happstack-server",
          "signature": "String -\u003e m a",
          "source": "src/Happstack-Server-RqData.html#readCookieValue",
          "type": "function"
        },
        "index": {
          "description": "gets the named cookie as the requested Read type",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "readCookieValue",
          "normalized": "String-\u003ea b",
          "package": "happstack-server",
          "partial": "Cookie Value",
          "signature": "String-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:readCookieValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse \u003ccode\u003e\u003ca\u003efromReqURI\u003c/a\u003e\u003c/code\u003e to convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a value of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e look \"key\" `checkRq` (readRq \"key\")\n\u003c/pre\u003e\u003cp\u003euse with \u003ccode\u003e\u003ca\u003echeckRq\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "readRq",
          "package": "happstack-server",
          "signature": "String-\u003e String-\u003e Either String a",
          "type": "function"
        },
        "index": {
          "description": "use fromReqURI to convert String to value of type look key checkRq readRq key use with checkRq",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "readRq",
          "normalized": "String-\u003eString-\u003eEither String a",
          "package": "happstack-server",
          "partial": "Rq",
          "signature": "String-\u003eString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:readRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift some \u003ccode\u003e\u003ca\u003eErrors\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eRqData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "rqDataError",
          "package": "happstack-server",
          "signature": "Errors String -\u003e m a",
          "source": "src/Happstack-Server-RqData.html#rqDataError",
          "type": "method"
        },
        "index": {
          "description": "lift some Errors into RqData",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "rqDataError",
          "normalized": "Errors String-\u003ea b",
          "package": "happstack-server",
          "partial": "Data Error",
          "signature": "Errors String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:rqDataError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.RqData",
          "name": "unErrors",
          "package": "happstack-server",
          "signature": "[a]",
          "source": "src/Happstack-Server-RqData.html#Errors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "unErrors",
          "normalized": "[a]",
          "package": "happstack-server",
          "partial": "Errors",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:unErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e to convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a value of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e look \"key\" `checkRq` (unsafeReadRq \"key\")\n\u003c/pre\u003e\u003cp\u003euse with \u003ccode\u003e\u003ca\u003echeckRq\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNOTE: This function is marked unsafe because some Read instances\n are vulnerable to attacks that attempt to create an out of memory\n condition. For example:\n\u003c/p\u003e\u003cpre\u003e read \"1e10000000000000\" :: Integer\n\u003c/pre\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ereadRq\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "unsafeReadRq",
          "package": "happstack-server",
          "signature": "String-\u003e String-\u003e Either String a",
          "type": "function"
        },
        "index": {
          "description": "use read to convert String to value of type look key checkRq unsafeReadRq key use with checkRq NOTE This function is marked unsafe because some Read instances are vulnerable to attacks that attempt to create an out of memory condition For example read e10000000000000 Integer see also readRq",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "unsafeReadRq",
          "normalized": "String-\u003eString-\u003eEither String a",
          "package": "happstack-server",
          "partial": "Read Rq",
          "signature": "String-\u003eString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:unsafeReadRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003egetData\u003c/a\u003e\u003c/code\u003e except it calls a subhandler on success or \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e\u003cp\u003eNOTE: you must call \u003ccode\u003e\u003ca\u003edecodeBody\u003c/a\u003e\u003c/code\u003e prior to calling this function if\n the request method is POST or PUT.\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "withData",
          "package": "happstack-server",
          "signature": "(a -\u003e m r) -\u003e m r",
          "source": "src/Happstack-Server-RqData.html#withData",
          "type": "function"
        },
        "index": {
          "description": "similar to getData except it calls subhandler on success or mzero on failure NOTE you must call decodeBody prior to calling this function if the request method is POST or PUT",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "withData",
          "normalized": "(a-\u003eb c)-\u003eb c",
          "package": "happstack-server",
          "partial": "Data",
          "signature": "(a-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:withData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003egetDataFn\u003c/a\u003e\u003c/code\u003e, except it calls a sub-handler on success\n or \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e\u003cp\u003eNOTE: you must call \u003ccode\u003e\u003ca\u003edecodeBody\u003c/a\u003e\u003c/code\u003e prior to calling this function if\n the request method is POST or PUT.\n\u003c/p\u003e",
          "module": "Happstack.Server.RqData",
          "name": "withDataFn",
          "package": "happstack-server",
          "signature": "RqData a -\u003e (a -\u003e m r) -\u003e m r",
          "source": "src/Happstack-Server-RqData.html#withDataFn",
          "type": "function"
        },
        "index": {
          "description": "similar to getDataFn except it calls sub-handler on success or mzero on failure NOTE you must call decodeBody prior to calling this function if the request method is POST or PUT",
          "hierarchy": "Happstack Server RqData",
          "module": "Happstack.Server.RqData",
          "name": "withDataFn",
          "normalized": "RqData a-\u003e(a-\u003eb c)-\u003eb c",
          "package": "happstack-server",
          "partial": "Data Fn",
          "signature": "RqData a-\u003e(a-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-RqData.html#v:withDataFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA wrapper and type class so that functions like \u003ccode\u003eseeOther\u003c/code\u003e can take a URI which is represented by a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e, or other instance of \u003ccode\u003e\u003ca\u003eToSURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.SURI",
          "name": "SURI",
          "package": "happstack-server",
          "source": "src/Happstack-Server-SURI.html",
          "type": "module"
        },
        "index": {
          "description": "wrapper and type class so that functions like seeOther can take URI which is represented by String URI or other instance of ToSURI",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "SURI",
          "package": "happstack-server",
          "partial": "SURI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.SURI",
          "name": "FromPath",
          "package": "happstack-server",
          "source": "src/Happstack-Server-SURI.html#FromPath",
          "type": "class"
        },
        "index": {
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "FromPath",
          "package": "happstack-server",
          "partial": "From Path",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#t:FromPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.SURI",
          "name": "SURI",
          "package": "happstack-server",
          "source": "src/Happstack-Server-SURI.html#SURI",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "SURI",
          "package": "happstack-server",
          "partial": "SURI",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#t:SURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience class for converting data types to URIs\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "ToSURI",
          "package": "happstack-server",
          "source": "src/Happstack-Server-SURI.html#ToSURI",
          "type": "class"
        },
        "index": {
          "description": "Convenience class for converting data types to URIs",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "ToSURI",
          "package": "happstack-server",
          "partial": "To SURI",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#t:ToSURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.SURI",
          "name": "SURI",
          "package": "happstack-server",
          "signature": "SURI",
          "source": "src/Happstack-Server-SURI.html#SURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "SURI",
          "package": "happstack-server",
          "partial": "SURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:SURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the path component of the URI\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "a_path",
          "package": "happstack-server",
          "signature": "String -\u003e SURI -\u003e SURI",
          "source": "src/Happstack-Server-SURI.html#a_path",
          "type": "function"
        },
        "index": {
          "description": "Sets the path component of the URI",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "a_path",
          "normalized": "String-\u003eSURI-\u003eSURI",
          "package": "happstack-server",
          "signature": "String-\u003eSURI-\u003eSURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:a_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the scheme component of the URI\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "a_scheme",
          "package": "happstack-server",
          "signature": "String -\u003e SURI -\u003e SURI",
          "source": "src/Happstack-Server-SURI.html#a_scheme",
          "type": "function"
        },
        "index": {
          "description": "Sets the scheme component of the URI",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "a_scheme",
          "normalized": "String-\u003eSURI-\u003eSURI",
          "package": "happstack-server",
          "signature": "String-\u003eSURI-\u003eSURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:a_scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.SURI",
          "name": "fromPath",
          "package": "happstack-server",
          "signature": "String -\u003e x",
          "source": "src/Happstack-Server-SURI.html#fromPath",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "fromPath",
          "normalized": "String-\u003ea",
          "package": "happstack-server",
          "partial": "Path",
          "signature": "String-\u003ex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:fromPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the URI is absolute\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "isAbs",
          "package": "happstack-server",
          "signature": "SURI -\u003e Bool",
          "source": "src/Happstack-Server-SURI.html#isAbs",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the URI is absolute",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "isAbs",
          "normalized": "SURI-\u003eBool",
          "package": "happstack-server",
          "partial": "Abs",
          "signature": "SURI-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:isAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a URI from a String.  Returns Nothing on failure.\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "parse",
          "package": "happstack-server",
          "signature": "String -\u003e Maybe SURI",
          "source": "src/Happstack-Server-SURI.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parses URI from String Returns Nothing on failure",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "parse",
          "normalized": "String-\u003eMaybe SURI",
          "package": "happstack-server",
          "signature": "String-\u003eMaybe SURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the path component from the URI\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "path",
          "package": "happstack-server",
          "signature": "SURI -\u003e String",
          "source": "src/Happstack-Server-SURI.html#path",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the path component from the URI",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "path",
          "normalized": "SURI-\u003eString",
          "package": "happstack-server",
          "signature": "SURI-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epercent decode a String\n\u003c/p\u003e\u003cp\u003ee.g. \u003ccode\u003e\"hello%2Fworld\"\u003c/code\u003e -\u003e \u003ccode\u003e\"hello/world\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "percentDecode",
          "package": "happstack-server",
          "signature": "String -\u003e String",
          "source": "src/Happstack-Server-SURI.html#percentDecode",
          "type": "function"
        },
        "index": {
          "description": "percent decode String e.g hello Fworld hello world",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "percentDecode",
          "normalized": "String-\u003eString",
          "package": "happstack-server",
          "partial": "Decode",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:percentDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the query component from the URI\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "query",
          "package": "happstack-server",
          "signature": "SURI -\u003e String",
          "source": "src/Happstack-Server-SURI.html#query",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the query component from the URI",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "query",
          "normalized": "SURI-\u003eString",
          "package": "happstack-server",
          "signature": "SURI-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender should be used for prettyprinting URIs.\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "render",
          "package": "happstack-server",
          "signature": "a -\u003e String",
          "source": "src/Happstack-Server-SURI.html#render",
          "type": "function"
        },
        "index": {
          "description": "Render should be used for prettyprinting URIs",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "render",
          "normalized": "a-\u003eString",
          "package": "happstack-server",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the scheme component from the URI\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "scheme",
          "package": "happstack-server",
          "signature": "SURI -\u003e String",
          "source": "src/Happstack-Server-SURI.html#scheme",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the scheme component from the URI",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "scheme",
          "normalized": "SURI-\u003eString",
          "package": "happstack-server",
          "signature": "SURI-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.SURI",
          "name": "suri",
          "package": "happstack-server",
          "signature": "URI",
          "source": "src/Happstack-Server-SURI.html#SURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "suri",
          "package": "happstack-server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:suri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.SURI",
          "name": "toSURI",
          "package": "happstack-server",
          "signature": "x -\u003e SURI",
          "source": "src/Happstack-Server-SURI.html#toSURI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "toSURI",
          "normalized": "a-\u003eSURI",
          "package": "happstack-server",
          "partial": "SURI",
          "signature": "x-\u003eSURI",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:toSURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the path component of the URI using the provided function\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "u_path",
          "package": "happstack-server",
          "signature": "(String -\u003e String) -\u003e SURI -\u003e SURI",
          "source": "src/Happstack-Server-SURI.html#u_path",
          "type": "function"
        },
        "index": {
          "description": "Modifies the path component of the URI using the provided function",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "u_path",
          "normalized": "(String-\u003eString)-\u003eSURI-\u003eSURI",
          "package": "happstack-server",
          "signature": "(String-\u003eString)-\u003eSURI-\u003eSURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:u_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the scheme component of the URI using the provided function\n\u003c/p\u003e",
          "module": "Happstack.Server.SURI",
          "name": "u_scheme",
          "package": "happstack-server",
          "signature": "(String -\u003e String) -\u003e SURI -\u003e SURI",
          "source": "src/Happstack-Server-SURI.html#u_scheme",
          "type": "function"
        },
        "index": {
          "description": "Modifies the scheme component of the URI using the provided function",
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "u_scheme",
          "normalized": "(String-\u003eString)-\u003eSURI-\u003eSURI",
          "package": "happstack-server",
          "signature": "(String-\u003eString)-\u003eSURI-\u003eSURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:u_scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.SURI",
          "name": "unEscape",
          "package": "happstack-server",
          "signature": "String -\u003e String",
          "source": "src/Happstack-Server-SURI.html#unEscape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "unEscape",
          "normalized": "String-\u003eString",
          "package": "happstack-server",
          "partial": "Escape",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:unEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.SURI",
          "name": "unEscapeQS",
          "package": "happstack-server",
          "signature": "String -\u003e String",
          "source": "src/Happstack-Server-SURI.html#unEscapeQS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server SURI",
          "module": "Happstack.Server.SURI",
          "name": "unEscapeQS",
          "normalized": "String-\u003eString",
          "package": "happstack-server",
          "partial": "Escape QS",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SURI.html#v:unEscapeQS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e is a self-contained HTTP server which can be used to\n run a \u003ccode\u003e\u003ca\u003eServerPart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA very simple, \"Hello World!\" web app looks like:\n\u003c/p\u003e\u003cpre\u003e import Happstack.Server\n main = simpleHTTP nullConf $ ok \"Hello World!\"\n\u003c/pre\u003e\u003cp\u003eBy default the server will listen on port 8000. Run the app and point your browser at: \u003ca\u003ehttp://localhost:8000/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFor FastCGI support see: \u003ca\u003ehttp://hackage.haskell.org/package/happstack-fastcgi\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "SimpleHTTP",
          "package": "happstack-server",
          "source": "src/Happstack-Server-SimpleHTTP.html",
          "type": "module"
        },
        "index": {
          "description": "simpleHTTP is self-contained HTTP server which can be used to run ServerPart very simple Hello World web app looks like import Happstack.Server main simpleHTTP nullConf ok Hello World By default the server will listen on port Run the app and point your browser at http localhost For FastCGI support see http hackage.haskell.org package happstack-fastcgi",
          "hierarchy": "Happstack Server SimpleHTTP",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "SimpleHTTP",
          "package": "happstack-server",
          "partial": "Simple HTTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SimpleHTTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind to ip and port and return the socket for use with \u003ccode\u003e\u003ca\u003esimpleHTTPWithSocket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n import Happstack.Server\n\n main = do let conf = nullConf\n               addr = \"127.0.0.1\"\n           s \u003c- bindIPv4 addr (port conf)\n           simpleHTTPWithSocket s conf $ ok $ toResponse $ \n             \"now listening on ip addr \" ++ addr ++ \n             \" and port \" ++ show (port conf)\n\u003c/pre\u003e",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "bindIPv4",
          "package": "happstack-server",
          "signature": "String-\u003e Int-\u003e IO Socket",
          "type": "function"
        },
        "index": {
          "description": "Bind to ip and port and return the socket for use with simpleHTTPWithSocket import Happstack.Server main do let conf nullConf addr bindIPv4 addr port conf simpleHTTPWithSocket conf ok toResponse now listening on ip addr addr and port show port conf",
          "hierarchy": "Happstack Server SimpleHTTP",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "bindIPv4",
          "normalized": "String-\u003eInt-\u003eIO Socket",
          "package": "happstack-server",
          "partial": "IPv",
          "signature": "String-\u003eInt-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SimpleHTTP.html#v:bindIPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind port and return the socket for use with \u003ccode\u003e\u003ca\u003esimpleHTTPWithSocket\u003c/a\u003e\u003c/code\u003e. This\n function always binds to IPv4 ports until Network module is fixed\n to support IPv6 in a portable way.\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "bindPort",
          "package": "happstack-server",
          "signature": "Conf -\u003e IO Socket",
          "source": "src/Happstack-Server-SimpleHTTP.html#bindPort",
          "type": "function"
        },
        "index": {
          "description": "Bind port and return the socket for use with simpleHTTPWithSocket This function always binds to IPv4 ports until Network module is fixed to support IPv6 in portable way",
          "hierarchy": "Happstack Server SimpleHTTP",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "bindPort",
          "normalized": "Conf-\u003eIO Socket",
          "package": "happstack-server",
          "partial": "Port",
          "signature": "Conf-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SimpleHTTP.html#v:bindPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse command line options into a \u003ccode\u003e\u003ca\u003eConf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "parseConfig",
          "package": "happstack-server",
          "signature": "[String] -\u003e Either [String] Conf",
          "source": "src/Happstack-Server-SimpleHTTP.html#parseConfig",
          "type": "function"
        },
        "index": {
          "description": "Parse command line options into Conf",
          "hierarchy": "Happstack Server SimpleHTTP",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "parseConfig",
          "normalized": "[String]-\u003eEither[String]Conf",
          "package": "happstack-server",
          "partial": "Config",
          "signature": "[String]-\u003eEither[String]Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SimpleHTTP.html#v:parseConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart the server, and handle requests using the supplied\n \u003ccode\u003e\u003ca\u003eServerPart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function will not return, though it may throw an exception.\n\u003c/p\u003e\u003cp\u003eNOTE: The server will only listen on IPv4 due to portability issues\n in the \u003ca\u003eNetwork\u003c/a\u003e module. For IPv6 support, use\n \u003ccode\u003e\u003ca\u003esimpleHTTPWithSocket\u003c/a\u003e\u003c/code\u003e with custom socket.\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "simpleHTTP",
          "package": "happstack-server",
          "signature": "Conf -\u003e ServerPartT IO a -\u003e IO ()",
          "source": "src/Happstack-Server-SimpleHTTP.html#simpleHTTP",
          "type": "function"
        },
        "index": {
          "description": "start the server and handle requests using the supplied ServerPart This function will not return though it may throw an exception NOTE The server will only listen on IPv4 due to portability issues in the Network module For IPv6 support use simpleHTTPWithSocket with custom socket",
          "hierarchy": "Happstack Server SimpleHTTP",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "simpleHTTP",
          "normalized": "Conf-\u003eServerPartT IO a-\u003eIO()",
          "package": "happstack-server",
          "partial": "HTTP",
          "signature": "Conf-\u003eServerPartT IO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SimpleHTTP.html#v:simpleHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combination of \u003ccode\u003e\u003ca\u003esimpleHTTP''\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e.  See\n \u003ccode\u003e\u003ca\u003emapServerPartT\u003c/a\u003e\u003c/code\u003e for a discussion of the first argument of this\n function. \n\u003c/p\u003e\u003cp\u003eNOTE: This function always binds to IPv4 ports until Network\n module is fixed to support IPv6 in a portable way. Use\n \u003ccode\u003e\u003ca\u003esimpleHTTPWithSocket\u003c/a\u003e\u003c/code\u003e with custom socket if you want different\n behaviour.\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "simpleHTTP'",
          "package": "happstack-server",
          "signature": "(UnWebT m a -\u003e UnWebT IO b) -\u003e Conf -\u003e ServerPartT m a -\u003e IO ()",
          "source": "src/Happstack-Server-SimpleHTTP.html#simpleHTTP%27",
          "type": "function"
        },
        "index": {
          "description": "combination of simpleHTTP and mapServerPartT See mapServerPartT for discussion of the first argument of this function NOTE This function always binds to IPv4 ports until Network module is fixed to support IPv6 in portable way Use simpleHTTPWithSocket with custom socket if you want different behaviour",
          "hierarchy": "Happstack Server SimpleHTTP",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "simpleHTTP'",
          "normalized": "(UnWebT a b-\u003eUnWebT IO c)-\u003eConf-\u003eServerPartT a b-\u003eIO()",
          "package": "happstack-server",
          "partial": "HTTP'",
          "signature": "(UnWebT m a-\u003eUnWebT IO b)-\u003eConf-\u003eServerPartT m a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SimpleHTTP.html#v:simpleHTTP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a result from a \u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. This is\n mainly used by CGI (and fast-cgi) wrappers.\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "simpleHTTP''",
          "package": "happstack-server",
          "signature": "ServerPartT m b -\u003e Request -\u003e m Response",
          "source": "src/Happstack-Server-SimpleHTTP.html#simpleHTTP%27%27",
          "type": "function"
        },
        "index": {
          "description": "Generate result from ServerPartT and Request This is mainly used by CGI and fast-cgi wrappers",
          "hierarchy": "Happstack Server SimpleHTTP",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "simpleHTTP''",
          "normalized": "ServerPartT a b-\u003eRequest-\u003ea Response",
          "package": "happstack-server",
          "partial": "HTTP''",
          "signature": "ServerPartT m b-\u003eRequest-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SimpleHTTP.html#v:simpleHTTP-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e with a previously bound socket. Useful if you\n want to run happstack as user on port 80. Use something like this:\n\u003c/p\u003e\u003cpre\u003e import System.Posix.User (setUserID, UserEntry(..), getUserEntryForName)\n\n main = do\n     let conf = nullConf { port = 80 }\n     socket \u003c- bindPort conf\n     -- do other stuff as root here\n     getUserEntryForName \"www\" \u003e\u003e= setUserID . userID\n     -- finally start handling incoming requests\n     tid \u003c- forkIO $ simpleHTTPWithSocket socket Nothing conf impl\n\u003c/pre\u003e\u003cp\u003eNote: It's important to use the same conf (or at least the same\n port) for \u003ccode\u003e\u003ca\u003ebindPort\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esimpleHTTPWithSocket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ebindPort\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ebindIPv4\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "simpleHTTPWithSocket",
          "package": "happstack-server",
          "signature": "Socket -\u003e Conf -\u003e ServerPartT IO a -\u003e IO ()",
          "source": "src/Happstack-Server-SimpleHTTP.html#simpleHTTPWithSocket",
          "type": "function"
        },
        "index": {
          "description": "Run simpleHTTP with previously bound socket Useful if you want to run happstack as user on port Use something like this import System.Posix.User setUserID UserEntry getUserEntryForName main do let conf nullConf port socket bindPort conf do other stuff as root here getUserEntryForName www setUserID userID finally start handling incoming requests tid forkIO simpleHTTPWithSocket socket Nothing conf impl Note It important to use the same conf or at least the same port for bindPort and simpleHTTPWithSocket see also bindPort bindIPv4",
          "hierarchy": "Happstack Server SimpleHTTP",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "simpleHTTPWithSocket",
          "normalized": "Socket-\u003eConf-\u003eServerPartT IO a-\u003eIO()",
          "package": "happstack-server",
          "partial": "HTTPWith Socket",
          "signature": "Socket-\u003eConf-\u003eServerPartT IO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SimpleHTTP.html#v:simpleHTTPWithSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esimpleHTTP'\u003c/a\u003e\u003c/code\u003e with a socket.\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "simpleHTTPWithSocket'",
          "package": "happstack-server",
          "signature": "(UnWebT m a -\u003e UnWebT IO b) -\u003e Socket -\u003e Conf -\u003e ServerPartT m a -\u003e IO ()",
          "source": "src/Happstack-Server-SimpleHTTP.html#simpleHTTPWithSocket%27",
          "type": "function"
        },
        "index": {
          "description": "Like simpleHTTP with socket",
          "hierarchy": "Happstack Server SimpleHTTP",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "simpleHTTPWithSocket'",
          "normalized": "(UnWebT a b-\u003eUnWebT IO c)-\u003eSocket-\u003eConf-\u003eServerPartT a b-\u003eIO()",
          "package": "happstack-server",
          "partial": "HTTPWith Socket'",
          "signature": "(UnWebT m a-\u003eUnWebT IO b)-\u003eSocket-\u003eConf-\u003eServerPartT m a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SimpleHTTP.html#v:simpleHTTPWithSocket-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a signal.\n   On unix, a signal is sigINT or sigTERM (aka Control-C).\n\u003c/p\u003e\u003cp\u003eOn windows, the signal is entering: e \u003ca\u003ereturn\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "waitForTermination",
          "package": "happstack-server",
          "signature": "IO ()",
          "source": "src/Happstack-Server-SimpleHTTP.html#waitForTermination",
          "type": "function"
        },
        "index": {
          "description": "Wait for signal On unix signal is sigINT or sigTERM aka Control-C On windows the signal is entering return",
          "hierarchy": "Happstack Server SimpleHTTP",
          "module": "Happstack.Server.SimpleHTTP",
          "name": "waitForTermination",
          "normalized": "IO()",
          "package": "happstack-server",
          "partial": "For Termination",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-SimpleHTTP.html#v:waitForTermination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Types",
          "name": "Types",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "Types",
          "package": "happstack-server",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP configuration\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "Conf",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Conf",
          "type": "data"
        },
        "index": {
          "description": "HTTP configuration",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "Conf",
          "package": "happstack-server",
          "partial": "Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:Conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA MIME media type value.\n   The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance is derived automatically.\n   Use \u003ccode\u003eshowContentType\u003c/code\u003e to obtain the standard\n   string representation.\n   See \u003ca\u003ehttp://www.ietf.org/rfc/rfc2046.txt\u003c/a\u003e for more\n   information about MIME media types.\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "ContentType",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-RFC822Headers.html#ContentType",
          "type": "data"
        },
        "index": {
          "description": "MIME media type value The Show instance is derived automatically Use showContentType to obtain the standard string representation See http www.ietf.org rfc rfc2046.txt for more information about MIME media types",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "ContentType",
          "package": "happstack-server",
          "partial": "Content Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is used by \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e to parse a path component into a\n value.\n\u003c/p\u003e\u003cp\u003eThe instances for number types (\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e, etc) use \u003ccode\u003e\u003ca\u003ereadM\u003c/a\u003e\u003c/code\u003e to\n parse the path component.\n\u003c/p\u003e\u003cp\u003eThe instance for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, on the other hand, returns the\n unmodified path component.\n\u003c/p\u003e\u003cp\u003eSee the following section of the Happstack Crash Course for\n detailed instructions using and extending \u003ccode\u003e\u003ca\u003eFromReqURI\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.happstack.com/docs/crashcourse/RouteFilters.html#FromReqURI\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "FromReqURI",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#FromReqURI",
          "type": "class"
        },
        "index": {
          "description": "This class is used by path to parse path component into value The instances for number types Int Float etc use readM to parse the path component The instance for String on the other hand returns the unmodified path component See the following section of the Happstack Crash Course for detailed instructions using and extending FromReqURI http www.happstack.com docs crashcourse RouteFilters.html FromReqURI",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "FromReqURI",
          "package": "happstack-server",
          "partial": "From Req URI",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:FromReqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean HTTP header\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "HeaderPair",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#HeaderPair",
          "type": "data"
        },
        "index": {
          "description": "an HTTP header",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "HeaderPair",
          "package": "happstack-server",
          "partial": "Header Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:HeaderPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea Map of HTTP headers\n\u003c/p\u003e\u003cp\u003ethe Map key is the header converted to lowercase\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "Headers",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Headers",
          "type": "type"
        },
        "index": {
          "description": "Map of HTTP headers the Map key is the header converted to lowercase",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "Headers",
          "package": "happstack-server",
          "partial": "Headers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehostname & port\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "Host",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Host",
          "type": "type"
        },
        "index": {
          "description": "hostname port",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "Host",
          "package": "happstack-server",
          "partial": "Host",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP version\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "HttpVersion",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#HttpVersion",
          "type": "data"
        },
        "index": {
          "description": "HTTP version",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "HttpVersion",
          "package": "happstack-server",
          "partial": "Http Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:HttpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea value extract from the \u003ccode\u003eQUERY_STRING\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e body\n\u003c/p\u003e\u003cp\u003eIf the input value was a file, then it will be saved to a temporary file on disk and \u003ccode\u003e\u003ca\u003einputValue\u003c/a\u003e\u003c/code\u003e will contain \u003ccode\u003eLeft pathToTempFile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "Input",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Input",
          "type": "data"
        },
        "index": {
          "description": "value extract from the QUERY STRING or Request body If the input value was file then it will be saved to temporary file on disk and inputValue will contain Left pathToTempFile",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "Input",
          "package": "happstack-server",
          "partial": "Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA flag value set in the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e which controls how the\n \u003ccode\u003eContent-Length\u003c/code\u003e header is set, and whether *chunked* output\n encoding is used.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003enullRsFlags\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003enotContentLength\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003echunked\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "Length",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Length",
          "type": "data"
        },
        "index": {
          "description": "flag value set in the Response which controls how the Content-Length header is set and whether chunked output encoding is used see also nullRsFlags notContentLength and chunked",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "Length",
          "package": "happstack-server",
          "partial": "Length",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction to log access requests (see also: \u003ccode\u003e\u003ca\u003elogMAccess\u003c/a\u003e\u003c/code\u003e)\n type LogAccess time =\n    (   String  -- ^ host\n     -\u003e String  -- ^ user\n     -\u003e time    -- ^ time\n     -\u003e String  -- ^ requestLine\n     -\u003e Int     -- ^ responseCode\n     -\u003e Integer -- ^ size\n     -\u003e String  -- ^ referer\n     -\u003e String  -- ^ userAgent\n     -\u003e IO ())\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "LogAccess",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#LogAccess",
          "type": "type"
        },
        "index": {
          "description": "function to log access requests see also logMAccess type LogAccess time String host String user time time String requestLine Int responseCode Integer size String referer String userAgent IO",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "LogAccess",
          "package": "happstack-server",
          "partial": "Log Access",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:LogAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP request method\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "Method",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Method",
          "type": "data"
        },
        "index": {
          "description": "HTTP request method",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "Method",
          "package": "happstack-server",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean HTTP request\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "Request",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Request",
          "type": "data"
        },
        "index": {
          "description": "an HTTP request",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "Request",
          "package": "happstack-server",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean HTTP Response\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "Response",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#Response",
          "type": "data"
        },
        "index": {
          "description": "an HTTP Response",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "Response",
          "package": "happstack-server",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe body of an HTTP \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "RqBody",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#RqBody",
          "type": "newtype"
        },
        "index": {
          "description": "The body of an HTTP Request",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "RqBody",
          "package": "happstack-server",
          "partial": "Rq Body",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:RqBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult flags\n\u003c/p\u003e",
          "module": "Happstack.Server.Types",
          "name": "RsFlags",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Internal-Types.html#RsFlags",
          "type": "data"
        },
        "index": {
          "description": "Result flags",
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "RsFlags",
          "package": "happstack-server",
          "partial": "Rs Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#t:RsFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Types",
          "name": "fromReqURI",
          "package": "happstack-server",
          "signature": "String -\u003e Maybe a",
          "source": "src/Happstack-Server-Internal-Types.html#fromReqURI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server Types",
          "module": "Happstack.Server.Types",
          "name": "fromReqURI",
          "normalized": "String-\u003eMaybe a",
          "package": "happstack-server",
          "partial": "Req URI",
          "signature": "String-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Types.html#v:fromReqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for validating server output on-the-fly. Validators can be configured on a per content-type basis.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Validation",
          "name": "Validation",
          "package": "happstack-server",
          "source": "src/Happstack-Server-Validation.html",
          "type": "module"
        },
        "index": {
          "description": "Support for validating server output on-the-fly Validators can be configured on per content-type basis",
          "hierarchy": "Happstack Server Validation",
          "module": "Happstack.Server.Validation",
          "name": "Validation",
          "package": "happstack-server",
          "partial": "Validation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Validation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e using an external application.\n\u003c/p\u003e\u003cp\u003eIf the external application returns 0, the original response is\n returned unmodified. If the external application returns non-zero,\n a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e containing the error messages and original response\n body is returned instead.\n\u003c/p\u003e\u003cp\u003eThis function also takes a predicate filter which is applied to the\n content-type of the response. The filter will only be applied if\n the predicate returns true.\n\u003c/p\u003e\u003cp\u003eNOTE: This function requires the use of -threaded to avoid\n blocking.  However, you probably need that for Happstack anyway.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003ewdgHTMLValidator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Validation",
          "name": "lazyProcValidator",
          "package": "happstack-server",
          "signature": "FilePath-\u003e [String]-\u003e Maybe FilePath-\u003e Maybe [(String, String)]-\u003e (Maybe ByteString -\u003e Bool)-\u003e Response-\u003e IO Response",
          "type": "function"
        },
        "index": {
          "description": "Validate the Response using an external application If the external application returns the original response is returned unmodified If the external application returns non-zero Response containing the error messages and original response body is returned instead This function also takes predicate filter which is applied to the content-type of the response The filter will only be applied if the predicate returns true NOTE This function requires the use of threaded to avoid blocking However you probably need that for Happstack anyway See also wdgHTMLValidator",
          "hierarchy": "Happstack Server Validation",
          "module": "Happstack.Server.Validation",
          "name": "lazyProcValidator",
          "normalized": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003e(Maybe ByteString-\u003eBool)-\u003eResponse-\u003eIO Response",
          "package": "happstack-server",
          "partial": "Proc Validator",
          "signature": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003e(Maybe ByteString-\u003eBool)-\u003eResponse-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Validation.html#v:lazyProcValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA validator which always succeeds.\n\u003c/p\u003e\u003cp\u003eUseful for selectively disabling validation. For example, if you\n are sending down HTML fragments to an AJAX application and the\n default validator only understands complete documents.\n\u003c/p\u003e",
          "module": "Happstack.Server.Validation",
          "name": "noopValidator",
          "package": "happstack-server",
          "signature": "Response -\u003e IO Response",
          "source": "src/Happstack-Server-Validation.html#noopValidator",
          "type": "function"
        },
        "index": {
          "description": "validator which always succeeds Useful for selectively disabling validation For example if you are sending down HTML fragments to an AJAX application and the default validator only understands complete documents",
          "hierarchy": "Happstack Server Validation",
          "module": "Happstack.Server.Validation",
          "name": "noopValidator",
          "normalized": "Response-\u003eIO Response",
          "package": "happstack-server",
          "partial": "Validator",
          "signature": "Response-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Validation.html#v:noopValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActually perform the validation on a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eRun the validator specified in the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e. If none is provide\n use the supplied default instead.\n\u003c/p\u003e\u003cp\u003eNote: This function will run validation unconditionally. You\n probably want \u003ccode\u003e\u003ca\u003esetValidator\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evalidateConf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Validation",
          "name": "runValidator",
          "package": "happstack-server",
          "signature": "(Response -\u003e IO Response) -\u003e Response -\u003e IO Response",
          "source": "src/Happstack-Server-Validation.html#runValidator",
          "type": "function"
        },
        "index": {
          "description": "Actually perform the validation on Response Run the validator specified in the Response If none is provide use the supplied default instead Note This function will run validation unconditionally You probably want setValidator or validateConf",
          "hierarchy": "Happstack Server Validation",
          "module": "Happstack.Server.Validation",
          "name": "runValidator",
          "normalized": "(Response-\u003eIO Response)-\u003eResponse-\u003eIO Response",
          "package": "happstack-server",
          "partial": "Validator",
          "signature": "(Response-\u003eIO Response)-\u003eResponse-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Validation.html#v:runValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the validator which should be used for this particular\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e when validation is enabled.\n\u003c/p\u003e\u003cp\u003eCalling this function does not enable validation. That can only be\n done by enabling the validation in the \u003ccode\u003e\u003ca\u003eConf\u003c/a\u003e\u003c/code\u003e that is passed to\n \u003ccode\u003esimpleHTTP\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou do not need to call this function if the validator set in\n \u003ccode\u003e\u003ca\u003eConf\u003c/a\u003e\u003c/code\u003e does what you want already.\n\u003c/p\u003e\u003cp\u003eExample: (use \u003ccode\u003e\u003ca\u003enoopValidator\u003c/a\u003e\u003c/code\u003e instead of the default supplied by\n \u003ccode\u003e\u003ca\u003evalidateConf\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cpre\u003e simpleHTTP validateConf $ ok . setValidator noopValidator =\u003c\u003c htmlPage\n\u003c/pre\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003evalidateConf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewdgHTMLValidator\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enoopValidator\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003elazyProcValidator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Validation",
          "name": "setValidator",
          "package": "happstack-server",
          "signature": "(Response -\u003e IO Response) -\u003e Response -\u003e Response",
          "source": "src/Happstack-Server-Validation.html#setValidator",
          "type": "function"
        },
        "index": {
          "description": "Set the validator which should be used for this particular Response when validation is enabled Calling this function does not enable validation That can only be done by enabling the validation in the Conf that is passed to simpleHTTP You do not need to call this function if the validator set in Conf does what you want already Example use noopValidator instead of the default supplied by validateConf simpleHTTP validateConf ok setValidator noopValidator htmlPage See also validateConf wdgHTMLValidator noopValidator lazyProcValidator",
          "hierarchy": "Happstack Server Validation",
          "module": "Happstack.Server.Validation",
          "name": "setValidator",
          "normalized": "(Response-\u003eIO Response)-\u003eResponse-\u003eResponse",
          "package": "happstack-server",
          "partial": "Validator",
          "signature": "(Response-\u003eIO Response)-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Validation.html#v:setValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eServerPart\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003esetValidator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: (Set validator to \u003ccode\u003e\u003ca\u003enoopValidator\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cpre\u003e  simpleHTTP validateConf $ setValidatorSP noopValidator (dir \"ajax\" ... )\n\u003c/pre\u003e",
          "module": "Happstack.Server.Validation",
          "name": "setValidatorSP",
          "package": "happstack-server",
          "signature": "(Response -\u003e IO Response) -\u003e m r -\u003e m Response",
          "source": "src/Happstack-Server-Validation.html#setValidatorSP",
          "type": "function"
        },
        "index": {
          "description": "ServerPart version of setValidator Example Set validator to noopValidator simpleHTTP validateConf setValidatorSP noopValidator dir ajax",
          "hierarchy": "Happstack Server Validation",
          "module": "Happstack.Server.Validation",
          "name": "setValidatorSP",
          "normalized": "(Response-\u003eIO Response)-\u003ea b-\u003ea Response",
          "package": "happstack-server",
          "partial": "Validator SP",
          "signature": "(Response-\u003eIO Response)-\u003em r-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Validation.html#v:setValidatorSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend \u003ccode\u003e\u003ca\u003enullConf\u003c/a\u003e\u003c/code\u003e by enabling validation and setting\n \u003ccode\u003e\u003ca\u003ewdgHTMLValidator\u003c/a\u003e\u003c/code\u003e as the default validator for \u003ccode\u003etext/html\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e simpleHTTP validateConf . anyRequest $ ok htmlPage\n\u003c/pre\u003e",
          "module": "Happstack.Server.Validation",
          "name": "validateConf",
          "package": "happstack-server",
          "signature": "Conf",
          "source": "src/Happstack-Server-Validation.html#validateConf",
          "type": "function"
        },
        "index": {
          "description": "Extend nullConf by enabling validation and setting wdgHTMLValidator as the default validator for text html Example simpleHTTP validateConf anyRequest ok htmlPage",
          "hierarchy": "Happstack Server Validation",
          "module": "Happstack.Server.Validation",
          "name": "validateConf",
          "package": "happstack-server",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Validation.html#v:validateConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate \u003ccode\u003etext/html\u003c/code\u003e content with \u003ccode\u003eWDG HTML Validator\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function expects the executable to be named \u003ccode\u003evalidate\u003c/code\u003e and it\n must be in the default \u003ccode\u003ePATH\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003esetValidator\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evalidateConf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elazyProcValidator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.Validation",
          "name": "wdgHTMLValidator",
          "package": "happstack-server",
          "signature": "r -\u003e m Response",
          "source": "src/Happstack-Server-Validation.html#wdgHTMLValidator",
          "type": "function"
        },
        "index": {
          "description": "Validate text html content with WDG HTML Validator This function expects the executable to be named validate and it must be in the default PATH See also setValidator validateConf lazyProcValidator",
          "hierarchy": "Happstack Server Validation",
          "module": "Happstack.Server.Validation",
          "name": "wdgHTMLValidator",
          "normalized": "a-\u003eb Response",
          "package": "happstack-server",
          "partial": "HTMLValidator",
          "signature": "r-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server-Validation.html#v:wdgHTMLValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHappstack.Server provides a self-contained HTTP server and a rich collection of types and functions for routing Requests, generating Responses, working with query parameters, form data, and cookies, serving files and more.\n\u003c/p\u003e\u003cp\u003eA very simple, \"Hello World!\" web app looks like:\n\u003c/p\u003e\u003cpre\u003e import Happstack.Server\n main = simpleHTTP nullConf $ ok \"Hello World!\"\n\u003c/pre\u003e\u003cp\u003eBy default the server will listen on port 8000. Run the app and point your browser at: \u003ca\u003ehttp://localhost:8000/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAt the core of the Happstack server we have the \u003ccode\u003e\u003ca\u003esimpleHTTP\u003c/a\u003e\u003c/code\u003e function which starts the HTTP server:\n\u003c/p\u003e\u003cpre\u003e simpleHTTP :: ToMessage a =\u003e Conf -\u003e ServerPart a -\u003e IO ()\n\u003c/pre\u003e\u003cp\u003eand we have the user supplied \u003ccode\u003e\u003ca\u003eServerPart\u003c/a\u003e\u003c/code\u003e (also known as,\n\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e), which generates a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e for each incoming\n\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA trivial HTTP app server might just take a user supplied function like:\n\u003c/p\u003e\u003cpre\u003e myApp :: Request -\u003e IO Response\n\u003c/pre\u003e\u003cp\u003eFor each incoming \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e the server would fork a new thread, run\n\u003ccode\u003emyApp\u003c/code\u003e to generate a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e, and then send the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e back to\nthe client. But, that would be a pretty barren wasteland to work in.\n\u003c/p\u003e\u003cp\u003eThe model for \u003ccode\u003e\u003ca\u003eServerPart\u003c/a\u003e\u003c/code\u003e is essential the same, except we use the\nmuch richer \u003ccode\u003e\u003ca\u003eServerPart\u003c/a\u003e\u003c/code\u003e monad instead of the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad. \n\u003c/p\u003e\u003cp\u003eFor in-depth documentation and runnable examples I highly recommend The Happstack Crash Course \u003ca\u003ehttp://happstack.com/docs/crashcourse/index.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server",
          "name": "Server",
          "package": "happstack-server",
          "source": "src/Happstack-Server.html",
          "type": "module"
        },
        "index": {
          "description": "Happstack.Server provides self-contained HTTP server and rich collection of types and functions for routing Requests generating Responses working with query parameters form data and cookies serving files and more very simple Hello World web app looks like import Happstack.Server main simpleHTTP nullConf ok Hello World By default the server will listen on port Run the app and point your browser at http localhost At the core of the Happstack server we have the simpleHTTP function which starts the HTTP server simpleHTTP ToMessage Conf ServerPart IO and we have the user supplied ServerPart also known as ServerPartT IO which generates Response for each incoming Request trivial HTTP app server might just take user supplied function like myApp Request IO Response For each incoming Request the server would fork new thread run myApp to generate Response and then send the Response back to the client But that would be pretty barren wasteland to work in The model for ServerPart is essential the same except we use the much richer ServerPart monad instead of the IO monad For in-depth documentation and runnable examples highly recommend The Happstack Crash Course http happstack.com docs crashcourse index.html",
          "hierarchy": "Happstack Server",
          "module": "Happstack.Server",
          "name": "Server",
          "package": "happstack-server",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server/docs/Happstack-Server.html#"
      }
    }
  ]
]