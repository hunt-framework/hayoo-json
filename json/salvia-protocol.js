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
        "word": "salvia-protocol"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor more information: http:\u003cem/\u003ewww.ietf.org\u003cem\u003erfc\u003c/em\u003erfc2109.txt\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "Cookie",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Cookie.html",
          "type": "module"
        },
        "index": {
          "description": "For more information http www.ietf.org rfc rfc2109.txt",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "Cookie",
          "package": "salvia-protocol",
          "partial": "Cookie",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e data type containg one key/value pair with all the\n (potentially optional) meta-data.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "Cookie",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Cookie.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "The Cookie data type containg one key value pair with all the potentially optional meta-data",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "Cookie",
          "package": "salvia-protocol",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection of multiple cookies. These can all be set in one single HTTP\n \u003cem\u003eSet-Cookie\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "Cookies",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Cookie.html#Cookies",
          "type": "data"
        },
        "index": {
          "description": "collection of multiple cookies These can all be set in one single HTTP Set-Cookie header field",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "Cookies",
          "package": "salvia-protocol",
          "partial": "Cookies",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#t:Cookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Cookie",
          "name": "Cookie",
          "package": "salvia-protocol",
          "signature": "Cookie String String (Maybe String) (Maybe String) Bool (Maybe String) (Maybe Int) (Maybe String) (Maybe String) [Int] Bool Int",
          "source": "src/Network-Protocol-Cookie.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "Cookie",
          "normalized": "Cookie String String(Maybe String)(Maybe String)Bool(Maybe String)(Maybe Int)(Maybe String)(Maybe String)[Int]Bool Int",
          "package": "salvia-protocol",
          "partial": "Cookie",
          "signature": "Cookie String String(Maybe String)(Maybe String)Bool(Maybe String)(Maybe Int)(Maybe String)(Maybe String)[Int]Bool Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess comment of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "comment",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e Maybe String",
          "source": "src/Network-Protocol-Cookie.html#comment",
          "type": "function"
        },
        "index": {
          "description": "Access comment of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "comment",
          "normalized": "Cookie-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Cookie-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess comment-URL of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "commentURL",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e Maybe String",
          "source": "src/Network-Protocol-Cookie.html#commentURL",
          "type": "function"
        },
        "index": {
          "description": "Access comment-URL of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "commentURL",
          "normalized": "Cookie-\u003eMaybe String",
          "package": "salvia-protocol",
          "partial": "URL",
          "signature": "Cookie-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:commentURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookie parser and pretty printer as a lens. To be used in combination with\n the \u003cem\u003eCookie\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "cookie",
          "package": "salvia-protocol",
          "signature": "String :\u003c-\u003e: Cookie",
          "source": "src/Network-Protocol-Cookie.html#cookie",
          "type": "function"
        },
        "index": {
          "description": "Cookie parser and pretty printer as lens To be used in combination with the Cookie header field",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "cookie",
          "normalized": "String-\u003eCookie",
          "package": "salvia-protocol",
          "signature": "String-\u003eCookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel for printing and parsing collections of cookies.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "cookies",
          "package": "salvia-protocol",
          "signature": "String :\u003c-\u003e: Cookies",
          "source": "src/Network-Protocol-Cookie.html#cookies",
          "type": "function"
        },
        "index": {
          "description": "Label for printing and parsing collections of cookies",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "cookies",
          "normalized": "String-\u003eCookies",
          "package": "salvia-protocol",
          "signature": "String-\u003eCookies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:cookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess discard flag of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "discard",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e Bool",
          "source": "src/Network-Protocol-Cookie.html#discard",
          "type": "function"
        },
        "index": {
          "description": "Access discard flag of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "discard",
          "normalized": "Cookie-\u003eBool",
          "package": "salvia-protocol",
          "signature": "Cookie-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:discard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess domain of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "domain",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e Maybe String",
          "source": "src/Network-Protocol-Cookie.html#domain",
          "type": "function"
        },
        "index": {
          "description": "Access domain of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "domain",
          "normalized": "Cookie-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Cookie-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "empty",
          "package": "salvia-protocol",
          "signature": "Cookie",
          "source": "src/Network-Protocol-Cookie.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Create an empty cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "empty",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess expiration of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "expires",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e Maybe String",
          "source": "src/Network-Protocol-Cookie.html#expires",
          "type": "function"
        },
        "index": {
          "description": "Access expiration of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "expires",
          "normalized": "Cookie-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Cookie-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:expires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to a cookies collection.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "fromList",
          "package": "salvia-protocol",
          "signature": "[Cookie] -\u003e Cookies",
          "source": "src/Network-Protocol-Cookie.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list to cookies collection",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "fromList",
          "normalized": "[Cookie]-\u003eCookies",
          "package": "salvia-protocol",
          "partial": "List",
          "signature": "[Cookie]-\u003eCookies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess max-age of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "maxAge",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e Maybe Int",
          "source": "src/Network-Protocol-Cookie.html#maxAge",
          "type": "function"
        },
        "index": {
          "description": "Access max-age of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "maxAge",
          "normalized": "Cookie-\u003eMaybe Int",
          "package": "salvia-protocol",
          "partial": "Age",
          "signature": "Cookie-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:maxAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess name/key of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "name",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e String",
          "source": "src/Network-Protocol-Cookie.html#name",
          "type": "function"
        },
        "index": {
          "description": "Access name key of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "name",
          "normalized": "Cookie-\u003eString",
          "package": "salvia-protocol",
          "signature": "Cookie-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess path of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "path",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e Maybe String",
          "source": "src/Network-Protocol-Cookie.html#path",
          "type": "function"
        },
        "index": {
          "description": "Access path of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "path",
          "normalized": "Cookie-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Cookie-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase-insensitive way of getting a cookie out of a collection by name.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "pickCookie",
          "package": "salvia-protocol",
          "signature": "String -\u003e Cookies :-\u003e Maybe Cookie",
          "source": "src/Network-Protocol-Cookie.html#pickCookie",
          "type": "function"
        },
        "index": {
          "description": "Case-insensitive way of getting cookie out of collection by name",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "pickCookie",
          "normalized": "String-\u003eCookies-\u003eMaybe Cookie",
          "package": "salvia-protocol",
          "partial": "Cookie",
          "signature": "String-\u003eCookies-\u003eMaybe Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:pickCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess port of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "port",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e [Int]",
          "source": "src/Network-Protocol-Cookie.html#port",
          "type": "function"
        },
        "index": {
          "description": "Access port of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "port",
          "normalized": "Cookie-\u003e[Int]",
          "package": "salvia-protocol",
          "signature": "Cookie-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess secure flag of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "secure",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e Bool",
          "source": "src/Network-Protocol-Cookie.html#secure",
          "type": "function"
        },
        "index": {
          "description": "Access secure flag of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "secure",
          "normalized": "Cookie-\u003eBool",
          "package": "salvia-protocol",
          "signature": "Cookie-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:secure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookie parser and pretty printer as a lens. To be used in combination with\n the \u003cem\u003eSet-Cookie\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "setCookie",
          "package": "salvia-protocol",
          "signature": "String :\u003c-\u003e: Cookie",
          "source": "src/Network-Protocol-Cookie.html#setCookie",
          "type": "function"
        },
        "index": {
          "description": "Cookie parser and pretty printer as lens To be used in combination with the Set-Cookie header field",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "setCookie",
          "normalized": "String-\u003eCookie",
          "package": "salvia-protocol",
          "partial": "Cookie",
          "signature": "String-\u003eCookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:setCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookies parser and pretty printer as a lens.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "setCookies",
          "package": "salvia-protocol",
          "signature": "String :\u003c-\u003e: Cookies",
          "source": "src/Network-Protocol-Cookie.html#setCookies",
          "type": "function"
        },
        "index": {
          "description": "Cookies parser and pretty printer as lens",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "setCookies",
          "normalized": "String-\u003eCookies",
          "package": "salvia-protocol",
          "partial": "Cookies",
          "signature": "String-\u003eCookies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:setCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the cookies as a list.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "toList",
          "package": "salvia-protocol",
          "signature": "Cookies -\u003e [Cookie]",
          "source": "src/Network-Protocol-Cookie.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Get the cookies as list",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "toList",
          "normalized": "Cookies-\u003e[Cookie]",
          "package": "salvia-protocol",
          "partial": "List",
          "signature": "Cookies-\u003e[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess raw cookie mapping from collection.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "unCookies",
          "package": "salvia-protocol",
          "signature": "Cookies :-\u003e Map String Cookie",
          "source": "src/Network-Protocol-Cookie.html#unCookies",
          "type": "function"
        },
        "index": {
          "description": "Access raw cookie mapping from collection",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "unCookies",
          "normalized": "Cookies-\u003eMap String Cookie",
          "package": "salvia-protocol",
          "partial": "Cookies",
          "signature": "Cookies-\u003eMap String Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:unCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess value of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "value",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e String",
          "source": "src/Network-Protocol-Cookie.html#value",
          "type": "function"
        },
        "index": {
          "description": "Access value of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "value",
          "normalized": "Cookie-\u003eString",
          "package": "salvia-protocol",
          "signature": "Cookie-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess version of a cookie.\n\u003c/p\u003e",
          "module": "Network.Protocol.Cookie",
          "name": "version",
          "package": "salvia-protocol",
          "signature": "Cookie :-\u003e Int",
          "source": "src/Network-Protocol-Cookie.html#version",
          "type": "function"
        },
        "index": {
          "description": "Access version of cookie",
          "hierarchy": "Network Protocol Cookie",
          "module": "Network.Protocol.Cookie",
          "name": "version",
          "normalized": "Cookie-\u003eInt",
          "package": "salvia-protocol",
          "signature": "Cookie-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Cookie.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "Data",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Data",
          "package": "salvia-protocol",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP headers as mapping from keys to values.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http.Data",
          "name": "Headers",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Headers",
          "type": "newtype"
        },
        "index": {
          "description": "HTTP headers as mapping from keys to values",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Headers",
          "package": "salvia-protocol",
          "partial": "Headers",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP message. The message body is *not* included.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http.Data",
          "name": "Http",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Http",
          "type": "data"
        },
        "index": {
          "description": "An HTTP message The message body is not included",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Http",
          "package": "salvia-protocol",
          "partial": "Http",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#t:Http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "Key",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Key",
          "package": "salvia-protocol",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of HTTP request methods.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http.Data",
          "name": "Method",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "data"
        },
        "index": {
          "description": "List of HTTP request methods",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Method",
          "package": "salvia-protocol",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest specific part of HTTP messages.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http.Data",
          "name": "Request",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Request",
          "type": "data"
        },
        "index": {
          "description": "Request specific part of HTTP messages",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Request",
          "package": "salvia-protocol",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse specific part of HTTP messages.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http.Data",
          "name": "Response",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Response",
          "type": "data"
        },
        "index": {
          "description": "Response specific part of HTTP messages",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Response",
          "package": "salvia-protocol",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "Value",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Value",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Value",
          "package": "salvia-protocol",
          "partial": "Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP protocol version.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http.Data",
          "name": "Version",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Version",
          "type": "data"
        },
        "index": {
          "description": "HTTP protocol version",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Version",
          "package": "salvia-protocol",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "CONNECT",
          "package": "salvia-protocol",
          "signature": "CONNECT",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:CONNECT\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:CONNECT\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "CONNECT",
          "package": "salvia-protocol",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "DELETE",
          "package": "salvia-protocol",
          "signature": "DELETE",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:DELETE\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:DELETE\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "DELETE",
          "package": "salvia-protocol",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "GET",
          "package": "salvia-protocol",
          "signature": "GET",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:GET\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:GET\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "GET",
          "package": "salvia-protocol",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "HEAD",
          "package": "salvia-protocol",
          "signature": "HEAD",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:HEAD\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:HEAD\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "HEAD",
          "package": "salvia-protocol",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "Headers",
          "package": "salvia-protocol",
          "signature": "Headers",
          "source": "src/Network-Protocol-Http-Data.html#Headers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:Headers\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Headers\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Headers",
          "package": "salvia-protocol",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "Http",
          "package": "salvia-protocol",
          "signature": "Http",
          "source": "src/Network-Protocol-Http-Data.html#Http",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Http",
          "package": "salvia-protocol",
          "partial": "Http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:Http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "OPTIONS",
          "package": "salvia-protocol",
          "signature": "OPTIONS",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:OPTIONS\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:OPTIONS\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "OPTIONS",
          "package": "salvia-protocol",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "OTHER",
          "package": "salvia-protocol",
          "signature": "OTHER String",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:OTHER\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:OTHER\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "OTHER",
          "package": "salvia-protocol",
          "partial": "OTHER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:OTHER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "POST",
          "package": "salvia-protocol",
          "signature": "POST",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:POST\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:POST\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "POST",
          "package": "salvia-protocol",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "PUT",
          "package": "salvia-protocol",
          "signature": "PUT",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:PUT\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:PUT\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "PUT",
          "package": "salvia-protocol",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "Request",
          "package": "salvia-protocol",
          "signature": "Request",
          "source": "src/Network-Protocol-Http-Data.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Request",
          "package": "salvia-protocol",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "Response",
          "package": "salvia-protocol",
          "signature": "Response",
          "source": "src/Network-Protocol-Http-Data.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Response",
          "package": "salvia-protocol",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "TRACE",
          "package": "salvia-protocol",
          "signature": "TRACE",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:TRACE\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:TRACE\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "TRACE",
          "package": "salvia-protocol",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "Version",
          "package": "salvia-protocol",
          "signature": "Version",
          "source": "src/Network-Protocol-Http-Data.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "Version",
          "package": "salvia-protocol",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "__method",
          "package": "salvia-protocol",
          "signature": "Method",
          "source": "src/Network-Protocol-Http-Data.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "__method",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:__method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "__status",
          "package": "salvia-protocol",
          "signature": "Status",
          "source": "src/Network-Protocol-Http-Data.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "__status",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:__status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "__uri",
          "package": "salvia-protocol",
          "signature": "String",
          "source": "src/Network-Protocol-Http-Data.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "__uri",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:__uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "_headers",
          "package": "salvia-protocol",
          "signature": "Headers",
          "source": "src/Network-Protocol-Http-Data.html#Http",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "_headers",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:_headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "_headline",
          "package": "salvia-protocol",
          "signature": "a",
          "source": "src/Network-Protocol-Http-Data.html#Http",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "_headline",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:_headline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "_major",
          "package": "salvia-protocol",
          "signature": "Int",
          "source": "src/Network-Protocol-Http-Data.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "_major",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:_major"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "_method",
          "package": "salvia-protocol",
          "signature": "Request :-\u003e Method",
          "source": "src/Network-Protocol-Http-Data.html#_method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "_method",
          "normalized": "Request-\u003eMethod",
          "package": "salvia-protocol",
          "signature": "Request-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:_method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "_minor",
          "package": "salvia-protocol",
          "signature": "Int",
          "source": "src/Network-Protocol-Http-Data.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "_minor",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:_minor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "_status",
          "package": "salvia-protocol",
          "signature": "Response :-\u003e Status",
          "source": "src/Network-Protocol-Http-Data.html#_status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "_status",
          "normalized": "Response-\u003eStatus",
          "package": "salvia-protocol",
          "signature": "Response-\u003eStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:_status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "_uri",
          "package": "salvia-protocol",
          "signature": "Request :-\u003e String",
          "source": "src/Network-Protocol-Http-Data.html#_uri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "_uri",
          "normalized": "Request-\u003eString",
          "package": "salvia-protocol",
          "signature": "Request-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:_uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Data",
          "name": "_version",
          "package": "salvia-protocol",
          "signature": "Version",
          "source": "src/Network-Protocol-Http-Data.html#Http",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "_version",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the URI part of an HTTP request message and access it as a\n true URI data type.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "asUri",
          "package": "salvia-protocol",
          "signature": "Http Request :-\u003e Uri",
          "source": "src/Network-Protocol-Http-Data.html#asUri",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:asUri\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:asUri\"]"
        },
        "index": {
          "description": "Label to access the URI part of an HTTP request message and access it as true URI data type",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "asUri",
          "normalized": "Http Request-\u003eUri",
          "package": "salvia-protocol",
          "partial": "Uri",
          "signature": "Http Request-\u003eUri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:asUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty set of headers.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "emptyHeaders",
          "package": "salvia-protocol",
          "signature": "Headers",
          "source": "src/Network-Protocol-Http-Data.html#emptyHeaders",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:emptyHeaders\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:emptyHeaders\"]"
        },
        "index": {
          "description": "Create an empty set of headers",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "emptyHeaders",
          "package": "salvia-protocol",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:emptyHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty HTTP request message.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "emptyRequest",
          "package": "salvia-protocol",
          "signature": "Http Request",
          "source": "src/Network-Protocol-Http-Data.html#emptyRequest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:emptyRequest\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:emptyRequest\"]"
        },
        "index": {
          "description": "Create an empty HTTP request message",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "emptyRequest",
          "package": "salvia-protocol",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:emptyRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty HTTP response message.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "emptyResponse",
          "package": "salvia-protocol",
          "signature": "Http Response",
          "source": "src/Network-Protocol-Http-Data.html#emptyResponse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:emptyResponse\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:emptyResponse\"]"
        },
        "index": {
          "description": "Create an empty HTTP response message",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "emptyResponse",
          "package": "salvia-protocol",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:emptyResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric label to access an HTTP header field by key.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "header",
          "package": "salvia-protocol",
          "signature": "Key -\u003e Http a :-\u003e Maybe Value",
          "source": "src/Network-Protocol-Http-Data.html#header",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:header\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:header\"]"
        },
        "index": {
          "description": "Generic label to access an HTTP header field by key",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "header",
          "normalized": "Key-\u003eHttp a-\u003eMaybe Value",
          "package": "salvia-protocol",
          "signature": "Key-\u003eHttp a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the header of an HTTP message.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "headers",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Headers",
          "source": "src/Network-Protocol-Http-Data.html#headers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:headers\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:headers\"]"
        },
        "index": {
          "description": "Label to access the header of an HTTP message",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "headers",
          "normalized": "Http a-\u003eHeaders",
          "package": "salvia-protocol",
          "signature": "Http a-\u003eHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the header line part of an HTTP message.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "headline",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e a",
          "source": "src/Network-Protocol-Http-Data.html#headline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:headline\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:headline\"]"
        },
        "index": {
          "description": "Label to access the header line part of an HTTP message",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "headline",
          "normalized": "Http a-\u003ea",
          "package": "salvia-protocol",
          "signature": "Http a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:headline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate HTTP 1.0 version.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "http10",
          "package": "salvia-protocol",
          "signature": "Version",
          "source": "src/Network-Protocol-Http-Data.html#http10",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:http10\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:http10\"]"
        },
        "index": {
          "description": "Create HTTP version",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "http10",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:http10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate HTTP 1.1 version.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "http11",
          "package": "salvia-protocol",
          "signature": "Version",
          "source": "src/Network-Protocol-Http-Data.html#http11",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:http11\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:http11\"]"
        },
        "index": {
          "description": "Create HTTP version",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "http11",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:http11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the major part of the version.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "major",
          "package": "salvia-protocol",
          "signature": "Version :-\u003e Int",
          "source": "src/Network-Protocol-Http-Data.html#major",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:major\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:major\"]"
        },
        "index": {
          "description": "Label to access the major part of the version",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "major",
          "normalized": "Version-\u003eInt",
          "package": "salvia-protocol",
          "signature": "Version-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:major"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the method part of an HTTP request message.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "method",
          "package": "salvia-protocol",
          "signature": "Http Request :-\u003e Method",
          "source": "src/Network-Protocol-Http-Data.html#method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:method\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:method\"]"
        },
        "index": {
          "description": "Label to access the method part of an HTTP request message",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "method",
          "normalized": "Http Request-\u003eMethod",
          "package": "salvia-protocol",
          "signature": "Http Request-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll recognized method constructors as a list.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "methods",
          "package": "salvia-protocol",
          "signature": "[Method]",
          "source": "src/Network-Protocol-Http-Data.html#methods",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:methods\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:methods\"]"
        },
        "index": {
          "description": "All recognized method constructors as list",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "methods",
          "normalized": "[Method]",
          "package": "salvia-protocol",
          "signature": "[Method]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the minor part of the version.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "minor",
          "package": "salvia-protocol",
          "signature": "Version :-\u003e Int",
          "source": "src/Network-Protocol-Http-Data.html#minor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:minor\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:minor\"]"
        },
        "index": {
          "description": "Label to access the minor part of the version",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "minor",
          "normalized": "Version-\u003eInt",
          "package": "salvia-protocol",
          "signature": "Version-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:minor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize the capitalization of an HTTP header key.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "normalizeHeader",
          "package": "salvia-protocol",
          "signature": "Key -\u003e Key",
          "source": "src/Network-Protocol-Http-Data.html#normalizeHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:normalizeHeader\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:normalizeHeader\"]"
        },
        "index": {
          "description": "Normalize the capitalization of an HTTP header key",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "normalizeHeader",
          "normalized": "Key-\u003eKey",
          "package": "salvia-protocol",
          "partial": "Header",
          "signature": "Key-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:normalizeHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the status part of an HTTP response message.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "status",
          "package": "salvia-protocol",
          "signature": "Http Response :-\u003e Status",
          "source": "src/Network-Protocol-Http-Data.html#status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:status\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:status\"]"
        },
        "index": {
          "description": "Label to access the status part of an HTTP response message",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "status",
          "normalized": "Http Response-\u003eStatus",
          "package": "salvia-protocol",
          "signature": "Http Response-\u003eStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "unHeaders",
          "package": "salvia-protocol",
          "signature": "[(Key, Value)]",
          "source": "src/Network-Protocol-Http-Data.html#Headers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:unHeaders\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:unHeaders\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "unHeaders",
          "normalized": "[(Key,Value)]",
          "package": "salvia-protocol",
          "partial": "Headers",
          "signature": "[(Key,Value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:unHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the URI part of an HTTP request message.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "uri",
          "package": "salvia-protocol",
          "signature": "Http Request :-\u003e String",
          "source": "src/Network-Protocol-Http-Data.html#uri",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:uri\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:uri\"]"
        },
        "index": {
          "description": "Label to access the URI part of an HTTP request message",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "uri",
          "normalized": "Http Request-\u003eString",
          "package": "salvia-protocol",
          "signature": "Http Request-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the version part of an HTTP message.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Data\",\"Network.Protocol.Http\"]",
          "name": "version",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Version",
          "source": "src/Network-Protocol-Http-Data.html#version",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:version\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:version\"]"
        },
        "index": {
          "description": "Label to access the version part of an HTTP message",
          "hierarchy": "Network Protocol Http Data",
          "module": "Network.Protocol.Http.Data",
          "name": "version",
          "normalized": "Http a-\u003eVersion",
          "package": "salvia-protocol",
          "signature": "Http a-\u003eVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Data.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Headers",
          "name": "Headers",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Headers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "Headers",
          "package": "salvia-protocol",
          "partial": "Headers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eAccept\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "accept",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe Parameters",
          "source": "src/Network-Protocol-Http-Headers.html#accept",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:accept\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:accept\"]"
        },
        "index": {
          "description": "Access the Accept header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "accept",
          "normalized": "Http a-\u003eMaybe Parameters",
          "package": "salvia-protocol",
          "signature": "Http a-\u003eMaybe Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eAccept-Encoding\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "acceptEncoding",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe [String]",
          "source": "src/Network-Protocol-Http-Headers.html#acceptEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:acceptEncoding\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:acceptEncoding\"]"
        },
        "index": {
          "description": "Access the Accept-Encoding header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "acceptEncoding",
          "normalized": "Http a-\u003eMaybe[String]",
          "package": "salvia-protocol",
          "partial": "Encoding",
          "signature": "Http a-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:acceptEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eAccept-Language\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "acceptLanguage",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe [String]",
          "source": "src/Network-Protocol-Http-Headers.html#acceptLanguage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:acceptLanguage\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:acceptLanguage\"]"
        },
        "index": {
          "description": "Access the Accept-Language header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "acceptLanguage",
          "normalized": "Http a-\u003eMaybe[String]",
          "package": "salvia-protocol",
          "partial": "Language",
          "signature": "Http a-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:acceptLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eAccept-Ranges\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "acceptRanges",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe Value",
          "source": "src/Network-Protocol-Http-Headers.html#acceptRanges",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:acceptRanges\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:acceptRanges\"]"
        },
        "index": {
          "description": "Access the Accept-Ranges header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "acceptRanges",
          "normalized": "Http a-\u003eMaybe Value",
          "package": "salvia-protocol",
          "partial": "Ranges",
          "signature": "Http a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:acceptRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eConnection\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "cacheControl",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe String",
          "source": "src/Network-Protocol-Http-Headers.html#cacheControl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:cacheControl\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:cacheControl\"]"
        },
        "index": {
          "description": "Access the Connection header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "cacheControl",
          "normalized": "Http a-\u003eMaybe String",
          "package": "salvia-protocol",
          "partial": "Control",
          "signature": "Http a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:cacheControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eConnection\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "connection",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe String",
          "source": "src/Network-Protocol-Http-Headers.html#connection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:connection\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:connection\"]"
        },
        "index": {
          "description": "Access the Connection header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "connection",
          "normalized": "Http a-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Http a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eContent-Length\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "contentLength",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe i",
          "source": "src/Network-Protocol-Http-Headers.html#contentLength",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:contentLength\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:contentLength\"]"
        },
        "index": {
          "description": "Access the Content-Length header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "contentLength",
          "normalized": "Http a-\u003eMaybe b",
          "package": "salvia-protocol",
          "partial": "Length",
          "signature": "Http a-\u003eMaybe i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:contentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eContent-Type\u003c/em\u003e header field. The content-type will be parsed\n into a mimetype and optional charset.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "contentType",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe (String, Maybe String)",
          "source": "src/Network-Protocol-Http-Headers.html#contentType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:contentType\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:contentType\"]"
        },
        "index": {
          "description": "Access the Content-Type header field The content-type will be parsed into mimetype and optional charset",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "contentType",
          "normalized": "Http a-\u003eMaybe(String,Maybe String)",
          "package": "salvia-protocol",
          "partial": "Type",
          "signature": "Http a-\u003eMaybe(String,Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:contentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eCookie\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "cookie",
          "package": "salvia-protocol",
          "signature": "Http Request :-\u003e Maybe String",
          "source": "src/Network-Protocol-Http-Headers.html#cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:cookie\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:cookie\"]"
        },
        "index": {
          "description": "Access the Cookie header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "cookie",
          "normalized": "Http Request-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Http Request-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eDate\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "date",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe String",
          "source": "src/Network-Protocol-Http-Headers.html#date",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:date\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:date\"]"
        },
        "index": {
          "description": "Access the Date header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "date",
          "normalized": "Http a-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Http a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eETag\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "eTag",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe Value",
          "source": "src/Network-Protocol-Http-Headers.html#eTag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:eTag\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:eTag\"]"
        },
        "index": {
          "description": "Access the ETag header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "eTag",
          "normalized": "Http a-\u003eMaybe Value",
          "package": "salvia-protocol",
          "partial": "Tag",
          "signature": "Http a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:eTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eHost\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "hostname",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe String",
          "source": "src/Network-Protocol-Http-Headers.html#hostname",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:hostname\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:hostname\"]"
        },
        "index": {
          "description": "Access the Host header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "hostname",
          "normalized": "Http a-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Http a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:hostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eKeep-Alive\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "keepAlive",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe i",
          "source": "src/Network-Protocol-Http-Headers.html#keepAlive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:keepAlive\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:keepAlive\"]"
        },
        "index": {
          "description": "Access the Keep-Alive header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "keepAlive",
          "normalized": "Http a-\u003eMaybe b",
          "package": "salvia-protocol",
          "partial": "Alive",
          "signature": "Http a-\u003eMaybe i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:keepAlive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eLast-Modified\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "lastModified",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe Value",
          "source": "src/Network-Protocol-Http-Headers.html#lastModified",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:lastModified\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:lastModified\"]"
        },
        "index": {
          "description": "Access the Last-Modified header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "lastModified",
          "normalized": "Http a-\u003eMaybe Value",
          "package": "salvia-protocol",
          "partial": "Modified",
          "signature": "Http a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:lastModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eLocation\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "location",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe String",
          "source": "src/Network-Protocol-Http-Headers.html#location",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:location\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:location\"]"
        },
        "index": {
          "description": "Access the Location header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "location",
          "normalized": "Http a-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Http a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eServer\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "server",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe String",
          "source": "src/Network-Protocol-Http-Headers.html#server",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:server\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:server\"]"
        },
        "index": {
          "description": "Access the Server header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "server",
          "normalized": "Http a-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Http a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eSet-Cookie\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "setCookie",
          "package": "salvia-protocol",
          "signature": "Http Response :-\u003e Maybe String",
          "source": "src/Network-Protocol-Http-Headers.html#setCookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:setCookie\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:setCookie\"]"
        },
        "index": {
          "description": "Access the Set-Cookie header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "setCookie",
          "normalized": "Http Response-\u003eMaybe String",
          "package": "salvia-protocol",
          "partial": "Cookie",
          "signature": "Http Response-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:setCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eUpgrade\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "upgrade",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe String",
          "source": "src/Network-Protocol-Http-Headers.html#upgrade",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:upgrade\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:upgrade\"]"
        },
        "index": {
          "description": "Access the Upgrade header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "upgrade",
          "normalized": "Http a-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "Http a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:upgrade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eUser-Agent\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Headers\",\"Network.Protocol.Http\"]",
          "name": "userAgent",
          "package": "salvia-protocol",
          "signature": "Http a :-\u003e Maybe String",
          "source": "src/Network-Protocol-Http-Headers.html#userAgent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:userAgent\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:userAgent\"]"
        },
        "index": {
          "description": "Access the User-Agent header field",
          "hierarchy": "Network Protocol Http Headers",
          "module": "Network.Protocol.Http.Headers",
          "name": "userAgent",
          "normalized": "Http a-\u003eMaybe String",
          "package": "salvia-protocol",
          "partial": "Agent",
          "signature": "Http a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Headers.html#v:userAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Parser",
          "name": "Parser",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "Parser",
          "package": "salvia-protocol",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper to turn fully capitalized string into request method.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Parser\",\"Network.Protocol.Http\"]",
          "name": "methodFromString",
          "package": "salvia-protocol",
          "signature": "String -\u003e Method",
          "source": "src/Network-Protocol-Http-Parser.html#methodFromString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:methodFromString\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:methodFromString\"]"
        },
        "index": {
          "description": "Helper to turn fully capitalized string into request method",
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "methodFromString",
          "normalized": "String-\u003eMethod",
          "package": "salvia-protocol",
          "partial": "From String",
          "signature": "String-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:methodFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsec parser to parse one or more, possibly multiline, HTTP header lines.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Parser\",\"Network.Protocol.Http\"]",
          "name": "pHeaders",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Headers",
          "source": "src/Network-Protocol-Http-Parser.html#pHeaders",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:pHeaders\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:pHeaders\"]"
        },
        "index": {
          "description": "Parsec parser to parse one or more possibly multiline HTTP header lines",
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "pHeaders",
          "package": "salvia-protocol",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:pHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsec parser to parse an HTTP method. Parses arbitrary method but\n actually recognizes the ones listed as a constructor for \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Parser\",\"Network.Protocol.Http\"]",
          "name": "pMethod",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Method",
          "source": "src/Network-Protocol-Http-Parser.html#pMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:pMethod\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:pMethod\"]"
        },
        "index": {
          "description": "Parsec parser to parse an HTTP method Parses arbitrary method but actually recognizes the ones listed as constructor for Method",
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "pMethod",
          "package": "salvia-protocol",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:pMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsec parser to parse the header part of an HTTP request.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Parser\",\"Network.Protocol.Http\"]",
          "name": "pRequest",
          "package": "salvia-protocol",
          "signature": "GenParser Char st (Http Request)",
          "source": "src/Network-Protocol-Http-Parser.html#pRequest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:pRequest\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:pRequest\"]"
        },
        "index": {
          "description": "Parsec parser to parse the header part of an HTTP request",
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "pRequest",
          "package": "salvia-protocol",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:pRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsec parser to parse the header part of an HTTP response.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Parser\",\"Network.Protocol.Http\"]",
          "name": "pResponse",
          "package": "salvia-protocol",
          "signature": "GenParser Char st (Http Response)",
          "source": "src/Network-Protocol-Http-Parser.html#pResponse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:pResponse\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:pResponse\"]"
        },
        "index": {
          "description": "Parsec parser to parse the header part of an HTTP response",
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "pResponse",
          "package": "salvia-protocol",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:pResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsec parser to parse HTTP versions. Recognizes X.X versions only.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Parser\",\"Network.Protocol.Http\"]",
          "name": "pVersion",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Version",
          "source": "src/Network-Protocol-Http-Parser.html#pVersion",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:pVersion\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:pVersion\"]"
        },
        "index": {
          "description": "Parsec parser to parse HTTP versions Recognizes X.X versions only",
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "pVersion",
          "package": "salvia-protocol",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:pVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string as a list of HTTP headers.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Parser\",\"Network.Protocol.Http\"]",
          "name": "parseHeaders",
          "package": "salvia-protocol",
          "signature": "String -\u003e Either String Headers",
          "source": "src/Network-Protocol-Http-Parser.html#parseHeaders",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:parseHeaders\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:parseHeaders\"]"
        },
        "index": {
          "description": "Parse string as list of HTTP headers",
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "parseHeaders",
          "normalized": "String-\u003eEither String Headers",
          "package": "salvia-protocol",
          "partial": "Headers",
          "signature": "String-\u003eEither String Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:parseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string as an HTTP request message. This parser is very forgiving.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Parser\",\"Network.Protocol.Http\"]",
          "name": "parseRequest",
          "package": "salvia-protocol",
          "signature": "String -\u003e Either String (Http Request)",
          "source": "src/Network-Protocol-Http-Parser.html#parseRequest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:parseRequest\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:parseRequest\"]"
        },
        "index": {
          "description": "Parse string as an HTTP request message This parser is very forgiving",
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "parseRequest",
          "normalized": "String-\u003eEither String(Http Request)",
          "package": "salvia-protocol",
          "partial": "Request",
          "signature": "String-\u003eEither String(Http Request)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:parseRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string as an HTTP request message. This parser is very forgiving.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Parser\",\"Network.Protocol.Http\"]",
          "name": "parseResponse",
          "package": "salvia-protocol",
          "signature": "String -\u003e Either String (Http Response)",
          "source": "src/Network-Protocol-Http-Parser.html#parseResponse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:parseResponse\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:parseResponse\"]"
        },
        "index": {
          "description": "Parse string as an HTTP request message This parser is very forgiving",
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "parseResponse",
          "normalized": "String-\u003eEither String(Http Response)",
          "package": "salvia-protocol",
          "partial": "Response",
          "signature": "String-\u003eEither String(Http Response)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:parseResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecognizes HTTP protocol version 1.0 and 1.1, all other string will\n produce version 1.1.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Parser\",\"Network.Protocol.Http\"]",
          "name": "versionFromString",
          "package": "salvia-protocol",
          "signature": "String -\u003e Version",
          "source": "src/Network-Protocol-Http-Parser.html#versionFromString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:versionFromString\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:versionFromString\"]"
        },
        "index": {
          "description": "Recognizes HTTP protocol version and all other string will produce version",
          "hierarchy": "Network Protocol Http Parser",
          "module": "Network.Protocol.Http.Parser",
          "name": "versionFromString",
          "normalized": "String-\u003eVersion",
          "package": "salvia-protocol",
          "partial": "From String",
          "signature": "String-\u003eVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Parser.html#v:versionFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Printer",
          "name": "Printer",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Printer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Http Printer",
          "module": "Network.Protocol.Http.Printer",
          "name": "Printer",
          "package": "salvia-protocol",
          "partial": "Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Printer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow HTTP request status line.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Printer\",\"Network.Protocol.Http\"]",
          "name": "showRequestLine",
          "package": "salvia-protocol",
          "signature": "Http Request -\u003e String -\u003e String",
          "source": "src/Network-Protocol-Http-Printer.html#showRequestLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Printer.html#v:showRequestLine\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:showRequestLine\"]"
        },
        "index": {
          "description": "Show HTTP request status line",
          "hierarchy": "Network Protocol Http Printer",
          "module": "Network.Protocol.Http.Printer",
          "name": "showRequestLine",
          "normalized": "Http Request-\u003eString-\u003eString",
          "package": "salvia-protocol",
          "partial": "Request Line",
          "signature": "Http Request-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Printer.html#v:showRequestLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow HTTP response status line.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Printer\",\"Network.Protocol.Http\"]",
          "name": "showResponseLine",
          "package": "salvia-protocol",
          "signature": "Http Response -\u003e String -\u003e String",
          "source": "src/Network-Protocol-Http-Printer.html#showResponseLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Printer.html#v:showResponseLine\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:showResponseLine\"]"
        },
        "index": {
          "description": "Show HTTP response status line",
          "hierarchy": "Network Protocol Http Printer",
          "module": "Network.Protocol.Http.Printer",
          "name": "showResponseLine",
          "normalized": "Http Response-\u003eString-\u003eString",
          "package": "salvia-protocol",
          "partial": "Response Line",
          "signature": "Http Response-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Printer.html#v:showResponseLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http.Status",
          "name": "Status",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Status.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "Status",
          "package": "salvia-protocol",
          "partial": "Status",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP status codes. \n\u003c/p\u003e",
          "module": "Network.Protocol.Http.Status",
          "name": "Status",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "data"
        },
        "index": {
          "description": "HTTP status codes",
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "Status",
          "package": "salvia-protocol",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e202\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "Accepted",
          "package": "salvia-protocol",
          "signature": "Accepted",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Accepted\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Accepted\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "Accepted",
          "package": "salvia-protocol",
          "partial": "Accepted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Accepted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e502\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "BadGateway",
          "package": "salvia-protocol",
          "signature": "BadGateway",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:BadGateway\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:BadGateway\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "BadGateway",
          "package": "salvia-protocol",
          "partial": "Bad Gateway",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:BadGateway"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e400\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "BadRequest",
          "package": "salvia-protocol",
          "signature": "BadRequest",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:BadRequest\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:BadRequest\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "BadRequest",
          "package": "salvia-protocol",
          "partial": "Bad Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:BadRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e409\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "Conflict",
          "package": "salvia-protocol",
          "signature": "Conflict",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Conflict\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Conflict\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "Conflict",
          "package": "salvia-protocol",
          "partial": "Conflict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Conflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e100\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "Continue",
          "package": "salvia-protocol",
          "signature": "Continue",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Continue\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Continue\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "Continue",
          "package": "salvia-protocol",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e201\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "Created",
          "package": "salvia-protocol",
          "signature": "Created",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Created\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Created\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "Created",
          "package": "salvia-protocol",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Created"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "CustomStatus",
          "package": "salvia-protocol",
          "signature": "CustomStatus Int String",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:CustomStatus\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:CustomStatus\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "CustomStatus",
          "package": "salvia-protocol",
          "partial": "Custom Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:CustomStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e417\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "ExpectationFailed",
          "package": "salvia-protocol",
          "signature": "ExpectationFailed",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:ExpectationFailed\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:ExpectationFailed\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "ExpectationFailed",
          "package": "salvia-protocol",
          "partial": "Expectation Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:ExpectationFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e403\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "Forbidden",
          "package": "salvia-protocol",
          "signature": "Forbidden",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Forbidden\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Forbidden\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "Forbidden",
          "package": "salvia-protocol",
          "partial": "Forbidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Forbidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e302\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "Found",
          "package": "salvia-protocol",
          "signature": "Found",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Found\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Found\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "Found",
          "package": "salvia-protocol",
          "partial": "Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Found"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e504\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "GatewayTimeOut",
          "package": "salvia-protocol",
          "signature": "GatewayTimeOut",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:GatewayTimeOut\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:GatewayTimeOut\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "GatewayTimeOut",
          "package": "salvia-protocol",
          "partial": "Gateway Time Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:GatewayTimeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e410\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "Gone",
          "package": "salvia-protocol",
          "signature": "Gone",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Gone\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Gone\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "Gone",
          "package": "salvia-protocol",
          "partial": "Gone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Gone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e505\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "HTTPVersionNotSupported",
          "package": "salvia-protocol",
          "signature": "HTTPVersionNotSupported",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:HTTPVersionNotSupported\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:HTTPVersionNotSupported\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "HTTPVersionNotSupported",
          "package": "salvia-protocol",
          "partial": "HTTPVersion Not Supported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:HTTPVersionNotSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e500\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "InternalServerError",
          "package": "salvia-protocol",
          "signature": "InternalServerError",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:InternalServerError\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:InternalServerError\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "InternalServerError",
          "package": "salvia-protocol",
          "partial": "Internal Server Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:InternalServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e411\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "LengthRequired",
          "package": "salvia-protocol",
          "signature": "LengthRequired",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:LengthRequired\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:LengthRequired\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "LengthRequired",
          "package": "salvia-protocol",
          "partial": "Length Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:LengthRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e405\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "MethodNotAllowed",
          "package": "salvia-protocol",
          "signature": "MethodNotAllowed",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:MethodNotAllowed\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:MethodNotAllowed\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "MethodNotAllowed",
          "package": "salvia-protocol",
          "partial": "Method Not Allowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:MethodNotAllowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e301\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "MovedPermanently",
          "package": "salvia-protocol",
          "signature": "MovedPermanently",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:MovedPermanently\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:MovedPermanently\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "MovedPermanently",
          "package": "salvia-protocol",
          "partial": "Moved Permanently",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:MovedPermanently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e300\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "MultipleChoices",
          "package": "salvia-protocol",
          "signature": "MultipleChoices",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:MultipleChoices\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:MultipleChoices\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "MultipleChoices",
          "package": "salvia-protocol",
          "partial": "Multiple Choices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:MultipleChoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e204\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "NoContent",
          "package": "salvia-protocol",
          "signature": "NoContent",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NoContent\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:NoContent\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "NoContent",
          "package": "salvia-protocol",
          "partial": "No Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NoContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e203\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "NonAuthoritativeInformation",
          "package": "salvia-protocol",
          "signature": "NonAuthoritativeInformation",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NonAuthoritativeInformation\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:NonAuthoritativeInformation\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "NonAuthoritativeInformation",
          "package": "salvia-protocol",
          "partial": "Non Authoritative Information",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NonAuthoritativeInformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e406\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "NotAcceptable",
          "package": "salvia-protocol",
          "signature": "NotAcceptable",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NotAcceptable\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:NotAcceptable\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "NotAcceptable",
          "package": "salvia-protocol",
          "partial": "Not Acceptable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NotAcceptable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e404\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "NotFound",
          "package": "salvia-protocol",
          "signature": "NotFound",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NotFound\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:NotFound\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "NotFound",
          "package": "salvia-protocol",
          "partial": "Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e501\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "NotImplemented",
          "package": "salvia-protocol",
          "signature": "NotImplemented",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NotImplemented\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:NotImplemented\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "NotImplemented",
          "package": "salvia-protocol",
          "partial": "Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e304\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "NotModified",
          "package": "salvia-protocol",
          "signature": "NotModified",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NotModified\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:NotModified\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "NotModified",
          "package": "salvia-protocol",
          "partial": "Not Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:NotModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e200\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "OK",
          "package": "salvia-protocol",
          "signature": "OK",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:OK\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:OK\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "OK",
          "package": "salvia-protocol",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e206\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "PartialContent",
          "package": "salvia-protocol",
          "signature": "PartialContent",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:PartialContent\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:PartialContent\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "PartialContent",
          "package": "salvia-protocol",
          "partial": "Partial Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:PartialContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e402\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "PaymentRequired",
          "package": "salvia-protocol",
          "signature": "PaymentRequired",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:PaymentRequired\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:PaymentRequired\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "PaymentRequired",
          "package": "salvia-protocol",
          "partial": "Payment Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:PaymentRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e412\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "PreconditionFailed",
          "package": "salvia-protocol",
          "signature": "PreconditionFailed",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:PreconditionFailed\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:PreconditionFailed\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "PreconditionFailed",
          "package": "salvia-protocol",
          "partial": "Precondition Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:PreconditionFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e407\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "ProxyAuthenticationRequired",
          "package": "salvia-protocol",
          "signature": "ProxyAuthenticationRequired",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:ProxyAuthenticationRequired\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:ProxyAuthenticationRequired\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "ProxyAuthenticationRequired",
          "package": "salvia-protocol",
          "partial": "Proxy Authentication Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:ProxyAuthenticationRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e413\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "RequestEntityTooLarge",
          "package": "salvia-protocol",
          "signature": "RequestEntityTooLarge",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:RequestEntityTooLarge\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:RequestEntityTooLarge\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "RequestEntityTooLarge",
          "package": "salvia-protocol",
          "partial": "Request Entity Too Large",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:RequestEntityTooLarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e408\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "RequestTimeOut",
          "package": "salvia-protocol",
          "signature": "RequestTimeOut",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:RequestTimeOut\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:RequestTimeOut\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "RequestTimeOut",
          "package": "salvia-protocol",
          "partial": "Request Time Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:RequestTimeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e414\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "RequestURITooLarge",
          "package": "salvia-protocol",
          "signature": "RequestURITooLarge",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:RequestURITooLarge\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:RequestURITooLarge\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "RequestURITooLarge",
          "package": "salvia-protocol",
          "partial": "Request URIToo Large",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:RequestURITooLarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e416\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "RequestedRangeNotSatisfiable",
          "package": "salvia-protocol",
          "signature": "RequestedRangeNotSatisfiable",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:RequestedRangeNotSatisfiable\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:RequestedRangeNotSatisfiable\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "RequestedRangeNotSatisfiable",
          "package": "salvia-protocol",
          "partial": "Requested Range Not Satisfiable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:RequestedRangeNotSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e205\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "ResetContent",
          "package": "salvia-protocol",
          "signature": "ResetContent",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:ResetContent\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:ResetContent\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "ResetContent",
          "package": "salvia-protocol",
          "partial": "Reset Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:ResetContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e303\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "SeeOther",
          "package": "salvia-protocol",
          "signature": "SeeOther",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:SeeOther\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:SeeOther\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "SeeOther",
          "package": "salvia-protocol",
          "partial": "See Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:SeeOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e503\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "ServiceUnavailable",
          "package": "salvia-protocol",
          "signature": "ServiceUnavailable",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:ServiceUnavailable\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:ServiceUnavailable\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "ServiceUnavailable",
          "package": "salvia-protocol",
          "partial": "Service Unavailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:ServiceUnavailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e101\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "SwitchingProtocols",
          "package": "salvia-protocol",
          "signature": "SwitchingProtocols",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:SwitchingProtocols\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:SwitchingProtocols\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "SwitchingProtocols",
          "package": "salvia-protocol",
          "partial": "Switching Protocols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:SwitchingProtocols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e307\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "TemporaryRedirect",
          "package": "salvia-protocol",
          "signature": "TemporaryRedirect",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:TemporaryRedirect\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:TemporaryRedirect\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "TemporaryRedirect",
          "package": "salvia-protocol",
          "partial": "Temporary Redirect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:TemporaryRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e401\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "Unauthorized",
          "package": "salvia-protocol",
          "signature": "Unauthorized",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Unauthorized\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Unauthorized\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "Unauthorized",
          "package": "salvia-protocol",
          "partial": "Unauthorized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:Unauthorized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e415\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "UnsupportedMediaType",
          "package": "salvia-protocol",
          "signature": "UnsupportedMediaType",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:UnsupportedMediaType\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:UnsupportedMediaType\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "UnsupportedMediaType",
          "package": "salvia-protocol",
          "partial": "Unsupported Media Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:UnsupportedMediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e305\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "UseProxy",
          "package": "salvia-protocol",
          "signature": "UseProxy",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:UseProxy\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:UseProxy\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "UseProxy",
          "package": "salvia-protocol",
          "partial": "Use Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:UseProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from status codes to numbers.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "codeFromStatus",
          "package": "salvia-protocol",
          "signature": "Status -\u003e Int",
          "source": "src/Network-Protocol-Http-Status.html#codeFromStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:codeFromStatus\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:codeFromStatus\"]"
        },
        "index": {
          "description": "Conversion from status codes to numbers",
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "codeFromStatus",
          "normalized": "Status-\u003eInt",
          "package": "salvia-protocol",
          "partial": "From Status",
          "signature": "Status-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:codeFromStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRFC2616 sec6.1.1 Status Code and Reason Phrase.\n\u003c/p\u003e\u003cp\u003eBidirectional mapping from status numbers to codes.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http.Status",
          "name": "statusCodes",
          "package": "salvia-protocol",
          "signature": "Bimap Int Status",
          "source": "src/Network-Protocol-Http-Status.html#statusCodes",
          "type": "function"
        },
        "index": {
          "description": "RFC2616 sec6.1.1 Status Code and Reason Phrase Bidirectional mapping from status numbers to codes",
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "statusCodes",
          "package": "salvia-protocol",
          "partial": "Codes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:statusCodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery status greater-than or equal to 400 is considered to be a failure.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "statusFailure",
          "package": "salvia-protocol",
          "signature": "Status -\u003e Bool",
          "source": "src/Network-Protocol-Http-Status.html#statusFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:statusFailure\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:statusFailure\"]"
        },
        "index": {
          "description": "Every status greater-than or equal to is considered to be failure",
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "statusFailure",
          "normalized": "Status-\u003eBool",
          "package": "salvia-protocol",
          "partial": "Failure",
          "signature": "Status-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:statusFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from status numbers to codes.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Http.Status\",\"Network.Protocol.Http\"]",
          "name": "statusFromCode",
          "package": "salvia-protocol",
          "signature": "Int -\u003e Status",
          "source": "src/Network-Protocol-Http-Status.html#statusFromCode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:statusFromCode\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:statusFromCode\"]"
        },
        "index": {
          "description": "Conversion from status numbers to codes",
          "hierarchy": "Network Protocol Http Status",
          "module": "Network.Protocol.Http.Status",
          "name": "statusFromCode",
          "normalized": "Int-\u003eStatus",
          "package": "salvia-protocol",
          "partial": "From Code",
          "signature": "Int-\u003eStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http-Status.html#v:statusFromCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http",
          "name": "Http",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Http",
          "package": "salvia-protocol",
          "partial": "Http",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP headers as mapping from keys to values.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http",
          "name": "Headers",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Headers",
          "type": "newtype"
        },
        "index": {
          "description": "HTTP headers as mapping from keys to values",
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Headers",
          "package": "salvia-protocol",
          "partial": "Headers",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP message. The message body is *not* included.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http",
          "name": "Http",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Http",
          "type": "data"
        },
        "index": {
          "description": "An HTTP message The message body is not included",
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Http",
          "package": "salvia-protocol",
          "partial": "Http",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#t:Http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http",
          "name": "Key",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Key",
          "package": "salvia-protocol",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of HTTP request methods.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http",
          "name": "Method",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Method",
          "type": "data"
        },
        "index": {
          "description": "List of HTTP request methods",
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Method",
          "package": "salvia-protocol",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest specific part of HTTP messages.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http",
          "name": "Request",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Request",
          "type": "data"
        },
        "index": {
          "description": "Request specific part of HTTP messages",
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Request",
          "package": "salvia-protocol",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse specific part of HTTP messages.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http",
          "name": "Response",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Response",
          "type": "data"
        },
        "index": {
          "description": "Response specific part of HTTP messages",
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Response",
          "package": "salvia-protocol",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP status codes. \n\u003c/p\u003e",
          "module": "Network.Protocol.Http",
          "name": "Status",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Status.html#Status",
          "type": "data"
        },
        "index": {
          "description": "HTTP status codes",
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Status",
          "package": "salvia-protocol",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http",
          "name": "Value",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Value",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Value",
          "package": "salvia-protocol",
          "partial": "Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP protocol version.\n\u003c/p\u003e",
          "module": "Network.Protocol.Http",
          "name": "Version",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Http-Data.html#Version",
          "type": "data"
        },
        "index": {
          "description": "HTTP protocol version",
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Version",
          "package": "salvia-protocol",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http",
          "name": "Http",
          "package": "salvia-protocol",
          "signature": "Http a Version Headers",
          "source": "src/Network-Protocol-Http-Data.html#Http",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Http",
          "package": "salvia-protocol",
          "partial": "Http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http",
          "name": "Request",
          "package": "salvia-protocol",
          "signature": "Request Method String",
          "source": "src/Network-Protocol-Http-Data.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Request",
          "package": "salvia-protocol",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Http",
          "name": "Response",
          "package": "salvia-protocol",
          "signature": "Response Status",
          "source": "src/Network-Protocol-Http-Data.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Http",
          "module": "Network.Protocol.Http",
          "name": "Response",
          "package": "salvia-protocol",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Http.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandling mime types. This module contains a mapping from file extensions to\nmime-types taken from the Apache webserver project.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Protocol.Mime",
          "name": "Mime",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Mime.html",
          "type": "module"
        },
        "index": {
          "description": "Handling mime types This module contains mapping from file extensions to mime-types taken from the Apache webserver project",
          "hierarchy": "Network Protocol Mime",
          "module": "Network.Protocol.Mime",
          "name": "Mime",
          "package": "salvia-protocol",
          "partial": "Mime",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Mime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Mime",
          "name": "Mime",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Mime.html#Mime",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Mime",
          "module": "Network.Protocol.Mime",
          "name": "Mime",
          "package": "salvia-protocol",
          "partial": "Mime",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Mime.html#t:Mime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default mimetype is text/plain. \n\u003c/p\u003e",
          "module": "Network.Protocol.Mime",
          "name": "defaultMime",
          "package": "salvia-protocol",
          "signature": "Mime",
          "source": "src/Network-Protocol-Mime.html#defaultMime",
          "type": "function"
        },
        "index": {
          "description": "The default mimetype is text plain",
          "hierarchy": "Network Protocol Mime",
          "module": "Network.Protocol.Mime",
          "name": "defaultMime",
          "package": "salvia-protocol",
          "partial": "Mime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Mime.html#v:defaultMime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mapping from extension to mimetype. \n\u003c/p\u003e",
          "module": "Network.Protocol.Mime",
          "name": "extensionToMime",
          "package": "salvia-protocol",
          "signature": "Map String Mime",
          "source": "src/Network-Protocol-Mime.html#extensionToMime",
          "type": "function"
        },
        "index": {
          "description": "The mapping from extension to mimetype",
          "hierarchy": "Network Protocol Mime",
          "module": "Network.Protocol.Mime",
          "name": "extensionToMime",
          "package": "salvia-protocol",
          "partial": "To Mime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Mime.html#v:extensionToMime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the mimetype for the specified extension. \n\u003c/p\u003e",
          "module": "Network.Protocol.Mime",
          "name": "mime",
          "package": "salvia-protocol",
          "signature": "String -\u003e Maybe Mime",
          "source": "src/Network-Protocol-Mime.html#mime",
          "type": "function"
        },
        "index": {
          "description": "Get the mimetype for the specified extension",
          "hierarchy": "Network Protocol Mime",
          "module": "Network.Protocol.Mime",
          "name": "mime",
          "normalized": "String-\u003eMaybe Mime",
          "package": "salvia-protocol",
          "signature": "String-\u003eMaybe Mime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Mime.html#v:mime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Chars",
          "name": "Chars",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Chars.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Chars",
          "module": "Network.Protocol.Uri.Chars",
          "name": "Chars",
          "package": "salvia-protocol",
          "partial": "Chars",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Chars.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Chars",
          "name": "genDelims",
          "package": "salvia-protocol",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-Protocol-Uri-Chars.html#genDelims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Chars",
          "module": "Network.Protocol.Uri.Chars",
          "name": "genDelims",
          "normalized": "Char-\u003eBool",
          "package": "salvia-protocol",
          "partial": "Delims",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Chars.html#v:genDelims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Chars",
          "name": "subDelims",
          "package": "salvia-protocol",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-Protocol-Uri-Chars.html#subDelims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Chars",
          "module": "Network.Protocol.Uri.Chars",
          "name": "subDelims",
          "normalized": "Char-\u003eBool",
          "package": "salvia-protocol",
          "partial": "Delims",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Chars.html#v:subDelims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Chars",
          "name": "unreserved",
          "package": "salvia-protocol",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-Protocol-Uri-Chars.html#unreserved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Chars",
          "module": "Network.Protocol.Uri.Chars",
          "name": "unreserved",
          "normalized": "Char-\u003eBool",
          "package": "salvia-protocol",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Chars.html#v:unreserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Data",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Data",
          "package": "salvia-protocol",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Authority",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Authority",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Authority",
          "package": "salvia-protocol",
          "partial": "Authority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Domain",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Domain",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Domain",
          "package": "salvia-protocol",
          "partial": "Domain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:Domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Fragment",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Fragment",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Fragment",
          "package": "salvia-protocol",
          "partial": "Fragment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:Fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Hash",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Hash",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Hash",
          "package": "salvia-protocol",
          "partial": "Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Host",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Host",
          "package": "salvia-protocol",
          "partial": "Host",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "IPv4",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#IPv4",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "IPv4",
          "package": "salvia-protocol",
          "partial": "IPv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:IPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Path",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Path",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Path",
          "package": "salvia-protocol",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "PathSegment",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#PathSegment",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "PathSegment",
          "package": "salvia-protocol",
          "partial": "Path Segment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:PathSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Port",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Port",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Port",
          "package": "salvia-protocol",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Query",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Query",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Query",
          "package": "salvia-protocol",
          "partial": "Query",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "RegName",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#RegName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "RegName",
          "package": "salvia-protocol",
          "partial": "Reg Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:RegName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Scheme",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Scheme",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Scheme",
          "package": "salvia-protocol",
          "partial": "Scheme",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:Scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Uri",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Uri",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Uri",
          "package": "salvia-protocol",
          "partial": "Uri",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:Uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "UserInfo",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#UserInfo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "UserInfo",
          "package": "salvia-protocol",
          "partial": "User Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#t:UserInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Authority",
          "package": "salvia-protocol",
          "signature": "Authority",
          "source": "src/Network-Protocol-Uri-Data.html#Authority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Authority",
          "package": "salvia-protocol",
          "partial": "Authority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Domain",
          "package": "salvia-protocol",
          "signature": "Domain",
          "source": "src/Network-Protocol-Uri-Data.html#Domain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Domain",
          "package": "salvia-protocol",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:Domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Hostname",
          "package": "salvia-protocol",
          "signature": "Hostname",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Hostname",
          "package": "salvia-protocol",
          "partial": "Hostname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:Hostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "IP",
          "package": "salvia-protocol",
          "signature": "IP",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "IP",
          "package": "salvia-protocol",
          "partial": "IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:IP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "IPv4",
          "package": "salvia-protocol",
          "signature": "IPv4 Int Int Int Int",
          "source": "src/Network-Protocol-Uri-Data.html#IPv4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:IPv4\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:IPv4\"]"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "IPv4",
          "package": "salvia-protocol",
          "partial": "IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:IPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Path",
          "package": "salvia-protocol",
          "signature": "Path",
          "source": "src/Network-Protocol-Uri-Data.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Path",
          "package": "salvia-protocol",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "RegName",
          "package": "salvia-protocol",
          "signature": "RegName",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "RegName",
          "package": "salvia-protocol",
          "partial": "Reg Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:RegName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "Uri",
          "package": "salvia-protocol",
          "signature": "Uri",
          "source": "src/Network-Protocol-Uri-Data.html#Uri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "Uri",
          "package": "salvia-protocol",
          "partial": "Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:Uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__domain",
          "package": "salvia-protocol",
          "signature": "Domain",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__domain",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__fragment",
          "package": "salvia-protocol",
          "signature": "Fragment",
          "source": "src/Network-Protocol-Uri-Data.html#Uri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__fragment",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__host",
          "package": "salvia-protocol",
          "signature": "Host",
          "source": "src/Network-Protocol-Uri-Data.html#Authority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__host",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__ipv4",
          "package": "salvia-protocol",
          "signature": "IPv4",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__ipv4",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__ipv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__parts",
          "package": "salvia-protocol",
          "signature": "[String]",
          "source": "src/Network-Protocol-Uri-Data.html#Domain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__parts",
          "normalized": "[String]",
          "package": "salvia-protocol",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__path",
          "package": "salvia-protocol",
          "signature": "Path",
          "source": "src/Network-Protocol-Uri-Data.html#Uri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__path",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__port",
          "package": "salvia-protocol",
          "signature": "Maybe Port",
          "source": "src/Network-Protocol-Uri-Data.html#Authority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__port",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__query",
          "package": "salvia-protocol",
          "signature": "Query",
          "source": "src/Network-Protocol-Uri-Data.html#Uri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__query",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__regname",
          "package": "salvia-protocol",
          "signature": "RegName",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__regname",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__regname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__segments",
          "package": "salvia-protocol",
          "signature": "[PathSegment]",
          "source": "src/Network-Protocol-Uri-Data.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__segments",
          "normalized": "[PathSegment]",
          "package": "salvia-protocol",
          "signature": "[PathSegment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__segments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "__userinfo",
          "package": "salvia-protocol",
          "signature": "UserInfo",
          "source": "src/Network-Protocol-Uri-Data.html#Authority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "__userinfo",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:__userinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_authority",
          "package": "salvia-protocol",
          "signature": "Authority",
          "source": "src/Network-Protocol-Uri-Data.html#Uri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_authority",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_domain",
          "package": "salvia-protocol",
          "signature": "Host :-\u003e Domain",
          "source": "src/Network-Protocol-Uri-Data.html#_domain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_domain",
          "normalized": "Host-\u003eDomain",
          "package": "salvia-protocol",
          "signature": "Host-\u003eDomain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess raw (URI-encoded) fragment.\n\u003c/p\u003e",
          "module": "Network.Protocol.Uri.Data",
          "name": "_fragment",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Fragment",
          "source": "src/Network-Protocol-Uri-Data.html#_fragment",
          "type": "function"
        },
        "index": {
          "description": "Access raw URI-encoded fragment",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_fragment",
          "normalized": "Uri-\u003eFragment",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eFragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_host",
          "package": "salvia-protocol",
          "signature": "Authority :-\u003e Host",
          "source": "src/Network-Protocol-Uri-Data.html#_host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_host",
          "normalized": "Authority-\u003eHost",
          "package": "salvia-protocol",
          "signature": "Authority-\u003eHost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_ipv4",
          "package": "salvia-protocol",
          "signature": "Host :-\u003e IPv4",
          "source": "src/Network-Protocol-Uri-Data.html#_ipv4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_ipv4",
          "normalized": "Host-\u003eIPv",
          "package": "salvia-protocol",
          "signature": "Host-\u003eIPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_ipv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_parts",
          "package": "salvia-protocol",
          "signature": "Domain :-\u003e [String]",
          "source": "src/Network-Protocol-Uri-Data.html#_parts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_parts",
          "normalized": "Domain-\u003e[String]",
          "package": "salvia-protocol",
          "signature": "Domain-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_path",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Path",
          "source": "src/Network-Protocol-Uri-Data.html#_path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_path",
          "normalized": "Uri-\u003ePath",
          "package": "salvia-protocol",
          "signature": "Uri-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_port",
          "package": "salvia-protocol",
          "signature": "Authority :-\u003e Maybe Port",
          "source": "src/Network-Protocol-Uri-Data.html#_port",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_port",
          "normalized": "Authority-\u003eMaybe Port",
          "package": "salvia-protocol",
          "signature": "Authority-\u003eMaybe Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess raw (URI-encoded) query.\n\u003c/p\u003e",
          "module": "Network.Protocol.Uri.Data",
          "name": "_query",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Query",
          "source": "src/Network-Protocol-Uri-Data.html#_query",
          "type": "function"
        },
        "index": {
          "description": "Access raw URI-encoded query",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_query",
          "normalized": "Uri-\u003eQuery",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_regname",
          "package": "salvia-protocol",
          "signature": "Host :-\u003e String",
          "source": "src/Network-Protocol-Uri-Data.html#_regname",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_regname",
          "normalized": "Host-\u003eString",
          "package": "salvia-protocol",
          "signature": "Host-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_regname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_relative",
          "package": "salvia-protocol",
          "signature": "Bool",
          "source": "src/Network-Protocol-Uri-Data.html#Uri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_relative",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_scheme",
          "package": "salvia-protocol",
          "signature": "Scheme",
          "source": "src/Network-Protocol-Uri-Data.html#Uri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_scheme",
          "package": "salvia-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_segments",
          "package": "salvia-protocol",
          "signature": "Path :-\u003e [PathSegment]",
          "source": "src/Network-Protocol-Uri-Data.html#_segments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_segments",
          "normalized": "Path-\u003e[PathSegment]",
          "package": "salvia-protocol",
          "signature": "Path-\u003e[PathSegment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_segments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Data",
          "name": "_userinfo",
          "package": "salvia-protocol",
          "signature": "Authority :-\u003e UserInfo",
          "source": "src/Network-Protocol-Uri-Data.html#_userinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "_userinfo",
          "normalized": "Authority-\u003eUserInfo",
          "package": "salvia-protocol",
          "signature": "Authority-\u003eUserInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:_userinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess authority part of the URI.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "authority",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Authority",
          "source": "src/Network-Protocol-Uri-Data.html#authority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:authority\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:authority\"]"
        },
        "index": {
          "description": "Access authority part of the URI",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "authority",
          "normalized": "Uri-\u003eAuthority",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eAuthority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess domain part of the URI, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when the host is a\n regname or IP-address.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "domain",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Maybe Domain",
          "source": "src/Network-Protocol-Uri-Data.html#domain",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:domain\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:domain\"]"
        },
        "index": {
          "description": "Access domain part of the URI returns Nothing when the host is regname or IP-address",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "domain",
          "normalized": "Uri-\u003eMaybe Domain",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eMaybe Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the fragment part of the URI, the part that follows the #. The\n fragment will be properly decoded when reading and encoded when writing.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "fragment",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Fragment",
          "source": "src/Network-Protocol-Uri-Data.html#fragment",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:fragment\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:fragment\"]"
        },
        "index": {
          "description": "Access the fragment part of the URI the part that follows the The fragment will be properly decoded when reading and encoded when writing",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "fragment",
          "normalized": "Uri-\u003eFragment",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eFragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess IPv4-address part of the URI, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when the host is a\n domain or regname.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "ipv4",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Maybe IPv4",
          "source": "src/Network-Protocol-Uri-Data.html#ipv4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:ipv4\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:ipv4\"]"
        },
        "index": {
          "description": "Access IPv4-address part of the URI returns Nothing when the host is domain or regname",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "ipv4",
          "normalized": "Uri-\u003eMaybe IPv",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eMaybe IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:ipv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for making empty \u003ccode\u003e\u003ca\u003eAuthority\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "mkAuthority",
          "package": "salvia-protocol",
          "signature": "Authority",
          "source": "src/Network-Protocol-Uri-Data.html#mkAuthority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkAuthority\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:mkAuthority\"]"
        },
        "index": {
          "description": "Constructors for making empty Authority",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "mkAuthority",
          "package": "salvia-protocol",
          "partial": "Authority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for making empty \u003ccode\u003e\u003ca\u003eFragment\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "mkFragment",
          "package": "salvia-protocol",
          "signature": "Fragment",
          "source": "src/Network-Protocol-Uri-Data.html#mkFragment",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkFragment\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:mkFragment\"]"
        },
        "index": {
          "description": "Constructors for making empty Fragment",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "mkFragment",
          "package": "salvia-protocol",
          "partial": "Fragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for making empty \u003ccode\u003e\u003ca\u003eHost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "mkHost",
          "package": "salvia-protocol",
          "signature": "Host",
          "source": "src/Network-Protocol-Uri-Data.html#mkHost",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkHost\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:mkHost\"]"
        },
        "index": {
          "description": "Constructors for making empty Host",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "mkHost",
          "package": "salvia-protocol",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for making empty \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "mkPath",
          "package": "salvia-protocol",
          "signature": "Path",
          "source": "src/Network-Protocol-Uri-Data.html#mkPath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkPath\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:mkPath\"]"
        },
        "index": {
          "description": "Constructors for making empty Path",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "mkPath",
          "package": "salvia-protocol",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for making empty \u003ccode\u003e\u003ca\u003ePort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "mkPort",
          "package": "salvia-protocol",
          "signature": "Maybe Port",
          "source": "src/Network-Protocol-Uri-Data.html#mkPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkPort\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:mkPort\"]"
        },
        "index": {
          "description": "Constructors for making empty Port",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "mkPort",
          "package": "salvia-protocol",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for making empty \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "mkQuery",
          "package": "salvia-protocol",
          "signature": "Query",
          "source": "src/Network-Protocol-Uri-Data.html#mkQuery",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkQuery\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:mkQuery\"]"
        },
        "index": {
          "description": "Constructors for making empty Query",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "mkQuery",
          "package": "salvia-protocol",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for making empty \u003ccode\u003e\u003ca\u003eScheme\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "mkScheme",
          "package": "salvia-protocol",
          "signature": "Scheme",
          "source": "src/Network-Protocol-Uri-Data.html#mkScheme",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkScheme\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:mkScheme\"]"
        },
        "index": {
          "description": "Constructors for making empty Scheme",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "mkScheme",
          "package": "salvia-protocol",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for making empty URI.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "mkUri",
          "package": "salvia-protocol",
          "signature": "Uri",
          "source": "src/Network-Protocol-Uri-Data.html#mkUri",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkUri\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:mkUri\"]"
        },
        "index": {
          "description": "Constructors for making empty URI",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "mkUri",
          "package": "salvia-protocol",
          "partial": "Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for making empty \u003ccode\u003e\u003ca\u003eUserInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "mkUserinfo",
          "package": "salvia-protocol",
          "signature": "UserInfo",
          "source": "src/Network-Protocol-Uri-Data.html#mkUserinfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkUserinfo\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:mkUserinfo\"]"
        },
        "index": {
          "description": "Constructors for making empty UserInfo",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "mkUserinfo",
          "package": "salvia-protocol",
          "partial": "Userinfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:mkUserinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the port number part of the URI when available.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "port",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Maybe Port",
          "source": "src/Network-Protocol-Uri-Data.html#port",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:port\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:port\"]"
        },
        "index": {
          "description": "Access the port number part of the URI when available",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "port",
          "normalized": "Uri-\u003eMaybe Port",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eMaybe Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the query part of the URI, the part that follows the ?. The query\n will be properly decoded when reading and encoded when writing.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "query",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Query",
          "source": "src/Network-Protocol-Uri-Data.html#query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:query\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:query\"]"
        },
        "index": {
          "description": "Access the query part of the URI the part that follows the The query will be properly decoded when reading and encoded when writing",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "query",
          "normalized": "Uri-\u003eQuery",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess regname part of the URI, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when the host is a\n domain or IP-address.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "regname",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Maybe RegName",
          "source": "src/Network-Protocol-Uri-Data.html#regname",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:regname\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:regname\"]"
        },
        "index": {
          "description": "Access regname part of the URI returns Nothing when the host is domain or IP-address",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "regname",
          "normalized": "Uri-\u003eMaybe RegName",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eMaybe RegName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:regname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a URI relative?\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "relative",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Bool",
          "source": "src/Network-Protocol-Uri-Data.html#relative",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:relative\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:relative\"]"
        },
        "index": {
          "description": "Is URI relative",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "relative",
          "normalized": "Uri-\u003eBool",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the scheme part of the URI. A scheme is probably the protocol\n indicator like \u003cem\u003ehttp\u003c/em\u003e, \u003cem\u003eftp\u003c/em\u003e, etc.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "scheme",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Scheme",
          "source": "src/Network-Protocol-Uri-Data.html#scheme",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:scheme\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:scheme\"]"
        },
        "index": {
          "description": "Access the scheme part of the URI scheme is probably the protocol indicator like http ftp etc",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "scheme",
          "normalized": "Uri-\u003eScheme",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eScheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the path part of the URI as a list of path segments. The segments\n will still be URI-encoded.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "segments",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e [PathSegment]",
          "source": "src/Network-Protocol-Uri-Data.html#segments",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:segments\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:segments\"]"
        },
        "index": {
          "description": "Access the path part of the URI as list of path segments The segments will still be URI-encoded",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "segments",
          "normalized": "Uri-\u003e[PathSegment]",
          "package": "salvia-protocol",
          "signature": "Uri-\u003e[PathSegment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:segments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the userinfo part of the URI. The userinfo contains an optional\n username and password or some other credentials.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Data\",\"Network.Protocol.Uri\"]",
          "name": "userinfo",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e String",
          "source": "src/Network-Protocol-Uri-Data.html#userinfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:userinfo\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:userinfo\"]"
        },
        "index": {
          "description": "Access the userinfo part of the URI The userinfo contains an optional username and password or some other credentials",
          "hierarchy": "Network Protocol Uri Data",
          "module": "Network.Protocol.Uri.Data",
          "name": "userinfo",
          "normalized": "Uri-\u003eString",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Data.html#v:userinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Encode",
          "name": "Encode",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Encode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Encode",
          "module": "Network.Protocol.Uri.Encode",
          "name": "Encode",
          "package": "salvia-protocol",
          "partial": "Encode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Encode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURI decode a string.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Encode\",\"Network.Protocol.Uri\"]",
          "name": "decode",
          "package": "salvia-protocol",
          "signature": "String -\u003e String",
          "source": "src/Network-Protocol-Uri-Encode.html#decode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Encode.html#v:decode\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:decode\"]"
        },
        "index": {
          "description": "URI decode string",
          "hierarchy": "Network Protocol Uri Encode",
          "module": "Network.Protocol.Uri.Encode",
          "name": "decode",
          "normalized": "String-\u003eString",
          "package": "salvia-protocol",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Encode.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURI encode a string.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Encode\",\"Network.Protocol.Uri\"]",
          "name": "encode",
          "package": "salvia-protocol",
          "signature": "String -\u003e String",
          "source": "src/Network-Protocol-Uri-Encode.html#encode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Encode.html#v:encode\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:encode\"]"
        },
        "index": {
          "description": "URI encode string",
          "hierarchy": "Network Protocol Uri Encode",
          "module": "Network.Protocol.Uri.Encode",
          "name": "encode",
          "normalized": "String-\u003eString",
          "package": "salvia-protocol",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Encode.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding and encoding as a label.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Encode\",\"Network.Protocol.Uri\"]",
          "name": "encoded",
          "package": "salvia-protocol",
          "signature": "String :\u003c-\u003e: String",
          "source": "src/Network-Protocol-Uri-Encode.html#encoded",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Encode.html#v:encoded\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:encoded\"]"
        },
        "index": {
          "description": "Decoding and encoding as label",
          "hierarchy": "Network Protocol Uri Encode",
          "module": "Network.Protocol.Uri.Encode",
          "name": "encoded",
          "normalized": "String-\u003eString",
          "package": "salvia-protocol",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Encode.html#v:encoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "Parser",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "Parser",
          "package": "salvia-protocol",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "_pSlashSegments",
          "package": "salvia-protocol",
          "signature": "GenParser Char st [PathSegment]",
          "source": "src/Network-Protocol-Uri-Parser.html#_pSlashSegments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "_pSlashSegments",
          "normalized": "GenParser Char a[PathSegment]",
          "package": "salvia-protocol",
          "partial": "Slash Segments",
          "signature": "GenParser Char st[PathSegment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:_pSlashSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the host part of the URI.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Parser\",\"Network.Protocol.Uri\"]",
          "name": "host",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e String",
          "source": "src/Network-Protocol-Uri-Parser.html#host",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:host\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:host\"]"
        },
        "index": {
          "description": "Access the host part of the URI",
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "host",
          "normalized": "Uri-\u003eString",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pAbsoluteUri",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Uri",
          "source": "src/Network-Protocol-Uri-Parser.html#pAbsoluteUri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pAbsoluteUri",
          "package": "salvia-protocol",
          "partial": "Absolute Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pAbsoluteUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pAlpha",
          "package": "salvia-protocol",
          "signature": "CharParser st Char",
          "source": "src/Network-Protocol-Uri-Parser.html#pAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pAlpha",
          "package": "salvia-protocol",
          "partial": "Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pAlphanum",
          "package": "salvia-protocol",
          "signature": "CharParser st Char",
          "source": "src/Network-Protocol-Uri-Parser.html#pAlphanum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pAlphanum",
          "package": "salvia-protocol",
          "partial": "Alphanum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pAlphanum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pAuthority",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Authority",
          "source": "src/Network-Protocol-Uri-Parser.html#pAuthority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pAuthority",
          "package": "salvia-protocol",
          "partial": "Authority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pDecOctet",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Int",
          "source": "src/Network-Protocol-Uri-Parser.html#pDecOctet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pDecOctet",
          "package": "salvia-protocol",
          "partial": "Dec Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pDecOctet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pDigit",
          "package": "salvia-protocol",
          "signature": "CharParser st Char",
          "source": "src/Network-Protocol-Uri-Parser.html#pDigit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pDigit",
          "package": "salvia-protocol",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pDomainlabel",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pDomainlabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pDomainlabel",
          "package": "salvia-protocol",
          "partial": "Domainlabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pDomainlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pFragment",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pFragment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pFragment",
          "package": "salvia-protocol",
          "partial": "Fragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pGenDelims",
          "package": "salvia-protocol",
          "signature": "CharParser st Char",
          "source": "src/Network-Protocol-Uri-Parser.html#pGenDelims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pGenDelims",
          "package": "salvia-protocol",
          "partial": "Gen Delims",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pGenDelims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pHex",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pHex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pHex",
          "package": "salvia-protocol",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pHost",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Host",
          "source": "src/Network-Protocol-Uri-Parser.html#pHost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pHost",
          "package": "salvia-protocol",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pHostname",
          "package": "salvia-protocol",
          "signature": "GenParser Char st [String]",
          "source": "src/Network-Protocol-Uri-Parser.html#pHostname",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pHostname",
          "normalized": "GenParser Char a[String]",
          "package": "salvia-protocol",
          "partial": "Hostname",
          "signature": "GenParser Char st[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pHostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pIPv4address",
          "package": "salvia-protocol",
          "signature": "GenParser Char st [Int]",
          "source": "src/Network-Protocol-Uri-Parser.html#pIPv4address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pIPv4address",
          "normalized": "GenParser Char a[Int]",
          "package": "salvia-protocol",
          "partial": "IPv",
          "signature": "GenParser Char st[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pIPv4address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPath",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Path",
          "source": "src/Network-Protocol-Uri-Parser.html#pPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPath",
          "package": "salvia-protocol",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPathAbempty",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Path",
          "source": "src/Network-Protocol-Uri-Parser.html#pPathAbempty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPathAbempty",
          "package": "salvia-protocol",
          "partial": "Path Abempty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pPathAbempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPathAbsolute",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Path",
          "source": "src/Network-Protocol-Uri-Parser.html#pPathAbsolute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPathAbsolute",
          "package": "salvia-protocol",
          "partial": "Path Absolute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pPathAbsolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPathEmpty",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Path",
          "source": "src/Network-Protocol-Uri-Parser.html#pPathEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPathEmpty",
          "package": "salvia-protocol",
          "partial": "Path Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pPathEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPathNoscheme",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Path",
          "source": "src/Network-Protocol-Uri-Parser.html#pPathNoscheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPathNoscheme",
          "package": "salvia-protocol",
          "partial": "Path Noscheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pPathNoscheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPathRootless",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Path",
          "source": "src/Network-Protocol-Uri-Parser.html#pPathRootless",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPathRootless",
          "package": "salvia-protocol",
          "partial": "Path Rootless",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pPathRootless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPchar",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pPchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPchar",
          "package": "salvia-protocol",
          "partial": "Pchar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pPchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPctEncoded",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pPctEncoded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPctEncoded",
          "package": "salvia-protocol",
          "partial": "Pct Encoded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pPctEncoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPort",
          "package": "salvia-protocol",
          "signature": "GenParser Char st (Maybe Port)",
          "source": "src/Network-Protocol-Uri-Parser.html#pPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pPort",
          "package": "salvia-protocol",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pQuery",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pQuery",
          "package": "salvia-protocol",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pRegName",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pRegName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pRegName",
          "package": "salvia-protocol",
          "partial": "Reg Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pRegName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pRelativePart",
          "package": "salvia-protocol",
          "signature": "GenParser Char st (Query -\u003e Fragment -\u003e Uri)",
          "source": "src/Network-Protocol-Uri-Parser.html#pRelativePart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pRelativePart",
          "normalized": "GenParser Char a(Query-\u003eFragment-\u003eUri)",
          "package": "salvia-protocol",
          "partial": "Relative Part",
          "signature": "GenParser Char st(Query-\u003eFragment-\u003eUri)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pRelativePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pRelativeRef",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Uri",
          "source": "src/Network-Protocol-Uri-Parser.html#pRelativeRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pRelativeRef",
          "package": "salvia-protocol",
          "partial": "Relative Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pRelativeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pReserved",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Char",
          "source": "src/Network-Protocol-Uri-Parser.html#pReserved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pReserved",
          "package": "salvia-protocol",
          "partial": "Reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pReserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pScheme",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pScheme",
          "package": "salvia-protocol",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pSegment",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pSegment",
          "package": "salvia-protocol",
          "partial": "Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pSegmentNz",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pSegmentNz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pSegmentNz",
          "package": "salvia-protocol",
          "partial": "Segment Nz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pSegmentNz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pSegmentNzNc",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pSegmentNzNc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pSegmentNzNc",
          "package": "salvia-protocol",
          "partial": "Segment Nz Nc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pSegmentNzNc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pSubDelims",
          "package": "salvia-protocol",
          "signature": "CharParser st Char",
          "source": "src/Network-Protocol-Uri-Parser.html#pSubDelims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pSubDelims",
          "package": "salvia-protocol",
          "partial": "Sub Delims",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pSubDelims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pUnreserved",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Char",
          "source": "src/Network-Protocol-Uri-Parser.html#pUnreserved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pUnreserved",
          "package": "salvia-protocol",
          "partial": "Unreserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pUnreserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pUri",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Uri",
          "source": "src/Network-Protocol-Uri-Parser.html#pUri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pUri",
          "package": "salvia-protocol",
          "partial": "Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pUriReference",
          "package": "salvia-protocol",
          "signature": "GenParser Char st Uri",
          "source": "src/Network-Protocol-Uri-Parser.html#pUriReference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pUriReference",
          "package": "salvia-protocol",
          "partial": "Uri Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pUriReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Parser",
          "name": "pUserinfo",
          "package": "salvia-protocol",
          "signature": "GenParser Char st String",
          "source": "src/Network-Protocol-Uri-Parser.html#pUserinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pUserinfo",
          "package": "salvia-protocol",
          "partial": "Userinfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pUserinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse string into a URI and only accept absolute URIs.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Parser\",\"Network.Protocol.Uri\"]",
          "name": "parseAbsoluteUri",
          "package": "salvia-protocol",
          "signature": "String -\u003e Either ParseError Uri",
          "source": "src/Network-Protocol-Uri-Parser.html#parseAbsoluteUri",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:parseAbsoluteUri\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:parseAbsoluteUri\"]"
        },
        "index": {
          "description": "Parse string into URI and only accept absolute URIs",
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "parseAbsoluteUri",
          "normalized": "String-\u003eEither ParseError Uri",
          "package": "salvia-protocol",
          "partial": "Absolute Uri",
          "signature": "String-\u003eEither ParseError Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:parseAbsoluteUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse string into an authority.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Parser\",\"Network.Protocol.Uri\"]",
          "name": "parseAuthority",
          "package": "salvia-protocol",
          "signature": "String -\u003e Either ParseError Authority",
          "source": "src/Network-Protocol-Uri-Parser.html#parseAuthority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:parseAuthority\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:parseAuthority\"]"
        },
        "index": {
          "description": "Parse string into an authority",
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "parseAuthority",
          "normalized": "String-\u003eEither ParseError Authority",
          "package": "salvia-protocol",
          "partial": "Authority",
          "signature": "String-\u003eEither ParseError Authority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:parseAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse string into a host.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Parser\",\"Network.Protocol.Uri\"]",
          "name": "parseHost",
          "package": "salvia-protocol",
          "signature": "String -\u003e Either ParseError Host",
          "source": "src/Network-Protocol-Uri-Parser.html#parseHost",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:parseHost\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:parseHost\"]"
        },
        "index": {
          "description": "Parse string into host",
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "parseHost",
          "normalized": "String-\u003eEither ParseError Host",
          "package": "salvia-protocol",
          "partial": "Host",
          "signature": "String-\u003eEither ParseError Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:parseHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse string into a path.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Parser\",\"Network.Protocol.Uri\"]",
          "name": "parsePath",
          "package": "salvia-protocol",
          "signature": "String -\u003e Either ParseError Path",
          "source": "src/Network-Protocol-Uri-Parser.html#parsePath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:parsePath\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:parsePath\"]"
        },
        "index": {
          "description": "Parse string into path",
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "parsePath",
          "normalized": "String-\u003eEither ParseError Path",
          "package": "salvia-protocol",
          "partial": "Path",
          "signature": "String-\u003eEither ParseError Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:parsePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse string into a URI.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Parser\",\"Network.Protocol.Uri\"]",
          "name": "parseUri",
          "package": "salvia-protocol",
          "signature": "String -\u003e Either ParseError Uri",
          "source": "src/Network-Protocol-Uri-Parser.html#parseUri",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:parseUri\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:parseUri\"]"
        },
        "index": {
          "description": "Parse string into URI",
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "parseUri",
          "normalized": "String-\u003eEither ParseError Uri",
          "package": "salvia-protocol",
          "partial": "Uri",
          "signature": "String-\u003eEither ParseError Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:parseUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the path part of the URI. The query will be properly decoded when\n reading and encoded when writing.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Parser\",\"Network.Protocol.Uri\"]",
          "name": "path",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e FilePath",
          "source": "src/Network-Protocol-Uri-Parser.html#path",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:path\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:path\"]"
        },
        "index": {
          "description": "Access the path part of the URI The query will be properly decoded when reading and encoded when writing",
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "path",
          "normalized": "Uri-\u003eFilePath",
          "package": "salvia-protocol",
          "signature": "Uri-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the path and query parts of the URI as a single string. The string\n will will be properly decoded when reading and encoded when writing.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Parser\",\"Network.Protocol.Uri\"]",
          "name": "pathAndQuery",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e String",
          "source": "src/Network-Protocol-Uri-Parser.html#pathAndQuery",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pathAndQuery\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:pathAndQuery\"]"
        },
        "index": {
          "description": "Access the path and query parts of the URI as single string The string will will be properly decoded when reading and encoded when writing",
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "pathAndQuery",
          "normalized": "Uri-\u003eString",
          "package": "salvia-protocol",
          "partial": "And Query",
          "signature": "Uri-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:pathAndQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse string into a URI and ignore all failures by returning an empty URI\n when parsing fails. Can be quite useful in situations that parse errors are\n unlikely.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Parser\",\"Network.Protocol.Uri\"]",
          "name": "toUri",
          "package": "salvia-protocol",
          "signature": "String -\u003e Uri",
          "source": "src/Network-Protocol-Uri-Parser.html#toUri",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:toUri\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:toUri\"]"
        },
        "index": {
          "description": "Parse string into URI and ignore all failures by returning an empty URI when parsing fails Can be quite useful in situations that parse errors are unlikely",
          "hierarchy": "Network Protocol Uri Parser",
          "module": "Network.Protocol.Uri.Parser",
          "name": "toUri",
          "normalized": "String-\u003eUri",
          "package": "salvia-protocol",
          "partial": "Uri",
          "signature": "String-\u003eUri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Parser.html#v:toUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Path",
          "name": "Path",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Path.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Path",
          "module": "Network.Protocol.Uri.Path",
          "name": "Path",
          "package": "salvia-protocol",
          "partial": "Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate and normalize two filepaths. \n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Path\",\"Network.Protocol.Uri\"]",
          "name": "(/+)",
          "package": "salvia-protocol",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/Network-Protocol-Uri-Path.html#%2F%2B",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#v:-47--43-\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:-47--43-\"]"
        },
        "index": {
          "description": "Concatenate and normalize two filepaths",
          "hierarchy": "Network Protocol Uri Path",
          "module": "Network.Protocol.Uri.Path",
          "name": "(/+) /+",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "salvia-protocol",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#v:-47--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the extension of a filename. \n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Path\",\"Network.Protocol.Uri\"]",
          "name": "extension",
          "package": "salvia-protocol",
          "signature": "FilePath :-\u003e Maybe String",
          "source": "src/Network-Protocol-Uri-Path.html#extension",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#v:extension\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:extension\"]"
        },
        "index": {
          "description": "Label to access the extension of filename",
          "hierarchy": "Network Protocol Uri Path",
          "module": "Network.Protocol.Uri.Path",
          "name": "extension",
          "normalized": "FilePath-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "FilePath-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#v:extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJail a filepath within a jail directory. \n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Path\",\"Network.Protocol.Uri\"]",
          "name": "jail",
          "package": "salvia-protocol",
          "signature": "FilePath-\u003e FilePath-\u003e Maybe FilePath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#v:jail\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:jail\"]"
        },
        "index": {
          "description": "Jail filepath within jail directory",
          "hierarchy": "Network Protocol Uri Path",
          "module": "Network.Protocol.Uri.Path",
          "name": "jail",
          "normalized": "FilePath-\u003eFilePath-\u003eMaybe FilePath",
          "package": "salvia-protocol",
          "signature": "FilePath-\u003eFilePath-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#v:jail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to guess the correct mime type for the input file based on the file\nextension.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Path\",\"Network.Protocol.Uri\"]",
          "name": "mimetype",
          "package": "salvia-protocol",
          "signature": "FilePath -\u003e Maybe String",
          "source": "src/Network-Protocol-Uri-Path.html#mimetype",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#v:mimetype\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:mimetype\"]"
        },
        "index": {
          "description": "Try to guess the correct mime type for the input file based on the file extension",
          "hierarchy": "Network Protocol Uri Path",
          "module": "Network.Protocol.Uri.Path",
          "name": "mimetype",
          "normalized": "FilePath-\u003eMaybe String",
          "package": "salvia-protocol",
          "signature": "FilePath-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#v:mimetype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize a path by removing or merging all dot or dot-dot segments and double\nslashes. \n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Path\",\"Network.Protocol.Uri\"]",
          "name": "normalize",
          "package": "salvia-protocol",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Network-Protocol-Uri-Path.html#normalize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#v:normalize\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:normalize\"]"
        },
        "index": {
          "description": "Normalize path by removing or merging all dot or dot-dot segments and double slashes",
          "hierarchy": "Network Protocol Uri Path",
          "module": "Network.Protocol.Uri.Path",
          "name": "normalize",
          "normalized": "FilePath-\u003eFilePath",
          "package": "salvia-protocol",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Path.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Printer",
          "name": "Printer",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Printer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Printer",
          "module": "Network.Protocol.Uri.Printer",
          "name": "Printer",
          "package": "salvia-protocol",
          "partial": "Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Printer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShowS version of intersperse.\n\u003c/p\u003e",
          "module": "Network.Protocol.Uri.Printer",
          "name": "intersperseS",
          "package": "salvia-protocol",
          "signature": "ShowS -\u003e [ShowS] -\u003e ShowS",
          "source": "src/Network-Protocol-Uri-Printer.html#intersperseS",
          "type": "function"
        },
        "index": {
          "description": "ShowS version of intersperse",
          "hierarchy": "Network Protocol Uri Printer",
          "module": "Network.Protocol.Uri.Printer",
          "name": "intersperseS",
          "normalized": "ShowS-\u003e[ShowS]-\u003eShowS",
          "package": "salvia-protocol",
          "signature": "ShowS-\u003e[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Printer.html#v:intersperseS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Printer",
          "name": "sc",
          "package": "salvia-protocol",
          "signature": "Char -\u003e ShowS",
          "source": "src/Network-Protocol-Uri-Printer.html#sc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Printer",
          "module": "Network.Protocol.Uri.Printer",
          "name": "sc",
          "normalized": "Char-\u003eShowS",
          "package": "salvia-protocol",
          "signature": "Char-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Printer.html#v:sc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Printer",
          "name": "ss",
          "package": "salvia-protocol",
          "signature": "String -\u003e ShowS",
          "source": "src/Network-Protocol-Uri-Printer.html#ss",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Printer",
          "module": "Network.Protocol.Uri.Printer",
          "name": "ss",
          "normalized": "String-\u003eShowS",
          "package": "salvia-protocol",
          "signature": "String-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Printer.html#v:ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Query",
          "name": "Query",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Query.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Query",
          "module": "Network.Protocol.Uri.Query",
          "name": "Query",
          "package": "salvia-protocol",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Query",
          "name": "Parameters",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Query.html#Parameters",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Query",
          "module": "Network.Protocol.Uri.Query",
          "name": "Parameters",
          "package": "salvia-protocol",
          "partial": "Parameters",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Query.html#t:Parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric label for accessing key value pairs encoded in a string.\n\u003c/p\u003e",
          "module": "Network.Protocol.Uri.Query",
          "name": "keyValues",
          "package": "salvia-protocol",
          "signature": "String -\u003e String -\u003e String :\u003c-\u003e: Parameters",
          "source": "src/Network-Protocol-Uri-Query.html#keyValues",
          "type": "function"
        },
        "index": {
          "description": "Generic label for accessing key value pairs encoded in string",
          "hierarchy": "Network Protocol Uri Query",
          "module": "Network.Protocol.Uri.Query",
          "name": "keyValues",
          "normalized": "String-\u003eString-\u003eString-\u003eParameters",
          "package": "salvia-protocol",
          "partial": "Values",
          "signature": "String-\u003eString-\u003eString-\u003eParameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Query.html#v:keyValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric lens to parse/print a string as query parameters.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Query\",\"Network.Protocol.Uri\"]",
          "name": "params",
          "package": "salvia-protocol",
          "signature": "String :\u003c-\u003e: Parameters",
          "source": "src/Network-Protocol-Uri-Query.html#params",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Query.html#v:params\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:params\"]"
        },
        "index": {
          "description": "Generic lens to parse print string as query parameters",
          "hierarchy": "Network Protocol Uri Query",
          "module": "Network.Protocol.Uri.Query",
          "name": "params",
          "normalized": "String-\u003eParameters",
          "package": "salvia-protocol",
          "signature": "String-\u003eParameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Query.html#v:params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the query parameters form a URI.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Query\",\"Network.Protocol.Uri\"]",
          "name": "queryParams",
          "package": "salvia-protocol",
          "signature": "Uri :-\u003e Parameters",
          "source": "src/Network-Protocol-Uri-Query.html#queryParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Query.html#v:queryParams\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:queryParams\"]"
        },
        "index": {
          "description": "Fetch the query parameters form URI",
          "hierarchy": "Network Protocol Uri Query",
          "module": "Network.Protocol.Uri.Query",
          "name": "queryParams",
          "normalized": "Uri-\u003eParameters",
          "package": "salvia-protocol",
          "partial": "Params",
          "signature": "Uri-\u003eParameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Query.html#v:queryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Query",
          "name": "trim",
          "package": "salvia-protocol",
          "signature": "String -\u003e String",
          "source": "src/Network-Protocol-Uri-Query.html#trim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Query",
          "module": "Network.Protocol.Uri.Query",
          "name": "trim",
          "normalized": "String-\u003eString",
          "package": "salvia-protocol",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Query.html#v:trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric label for accessing lists of values encoded in a string.\n\u003c/p\u003e",
          "module": "Network.Protocol.Uri.Query",
          "name": "values",
          "package": "salvia-protocol",
          "signature": "String -\u003e String :\u003c-\u003e: [String]",
          "source": "src/Network-Protocol-Uri-Query.html#values",
          "type": "function"
        },
        "index": {
          "description": "Generic label for accessing lists of values encoded in string",
          "hierarchy": "Network Protocol Uri Query",
          "module": "Network.Protocol.Uri.Query",
          "name": "values",
          "normalized": "String-\u003eString-\u003e[String]",
          "package": "salvia-protocol",
          "signature": "String-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Query.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri.Remap",
          "name": "Remap",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Remap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol Uri Remap",
          "module": "Network.Protocol.Uri.Remap",
          "name": "Remap",
          "package": "salvia-protocol",
          "partial": "Remap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Remap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap one URI to another using a URI mapping scheme. A URI mapping scheme is\n simply a pair of URIs of which only the host part, port number and path will\n be taken into account when mapping.\n\u003c/p\u003e",
          "module": "[\"Network.Protocol.Uri.Remap\",\"Network.Protocol.Uri\"]",
          "name": "remap",
          "package": "salvia-protocol",
          "signature": "(Uri, Uri) -\u003e Uri -\u003e Maybe Uri",
          "source": "src/Network-Protocol-Uri-Remap.html#remap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Remap.html#v:remap\",\"http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:remap\"]"
        },
        "index": {
          "description": "Map one URI to another using URI mapping scheme URI mapping scheme is simply pair of URIs of which only the host part port number and path will be taken into account when mapping",
          "hierarchy": "Network Protocol Uri Remap",
          "module": "Network.Protocol.Uri.Remap",
          "name": "remap",
          "normalized": "(Uri,Uri)-\u003eUri-\u003eMaybe Uri",
          "package": "salvia-protocol",
          "signature": "(Uri,Uri)-\u003eUri-\u003eMaybe Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri-Remap.html#v:remap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSee rfc2396 for more info. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Protocol.Uri",
          "name": "Uri",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri.html",
          "type": "module"
        },
        "index": {
          "description": "See rfc2396 for more info",
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Uri",
          "package": "salvia-protocol",
          "partial": "Uri",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Authority",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Authority",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Authority",
          "package": "salvia-protocol",
          "partial": "Authority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Domain",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Domain",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Domain",
          "package": "salvia-protocol",
          "partial": "Domain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Fragment",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Fragment",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Fragment",
          "package": "salvia-protocol",
          "partial": "Fragment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Hash",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Hash",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Hash",
          "package": "salvia-protocol",
          "partial": "Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Host",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Host",
          "package": "salvia-protocol",
          "partial": "Host",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "IPv4",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#IPv4",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "IPv4",
          "package": "salvia-protocol",
          "partial": "IPv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:IPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Parameters",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Query.html#Parameters",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Parameters",
          "package": "salvia-protocol",
          "partial": "Parameters",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Path",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Path",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Path",
          "package": "salvia-protocol",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "PathSegment",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#PathSegment",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "PathSegment",
          "package": "salvia-protocol",
          "partial": "Path Segment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:PathSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Port",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Port",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Port",
          "package": "salvia-protocol",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Query",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Query",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Query",
          "package": "salvia-protocol",
          "partial": "Query",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "RegName",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#RegName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "RegName",
          "package": "salvia-protocol",
          "partial": "Reg Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:RegName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Scheme",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Scheme",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Scheme",
          "package": "salvia-protocol",
          "partial": "Scheme",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Uri",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#Uri",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Uri",
          "package": "salvia-protocol",
          "partial": "Uri",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:Uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "UserInfo",
          "package": "salvia-protocol",
          "source": "src/Network-Protocol-Uri-Data.html#UserInfo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "UserInfo",
          "package": "salvia-protocol",
          "partial": "User Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#t:UserInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Authority",
          "package": "salvia-protocol",
          "signature": "Authority UserInfo Host (Maybe Port)",
          "source": "src/Network-Protocol-Uri-Data.html#Authority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Authority",
          "package": "salvia-protocol",
          "partial": "Authority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Domain",
          "package": "salvia-protocol",
          "signature": "Domain [String]",
          "source": "src/Network-Protocol-Uri-Data.html#Domain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Domain",
          "normalized": "Domain[String]",
          "package": "salvia-protocol",
          "partial": "Domain",
          "signature": "Domain[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:Domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Hostname",
          "package": "salvia-protocol",
          "signature": "Hostname Domain",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Hostname",
          "package": "salvia-protocol",
          "partial": "Hostname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:Hostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "IP",
          "package": "salvia-protocol",
          "signature": "IP IPv4",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "IP",
          "package": "salvia-protocol",
          "partial": "IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:IP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Path",
          "package": "salvia-protocol",
          "signature": "Path [PathSegment]",
          "source": "src/Network-Protocol-Uri-Data.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Path",
          "normalized": "Path[PathSegment]",
          "package": "salvia-protocol",
          "partial": "Path",
          "signature": "Path[PathSegment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "RegName",
          "package": "salvia-protocol",
          "signature": "RegName RegName",
          "source": "src/Network-Protocol-Uri-Data.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "RegName",
          "package": "salvia-protocol",
          "partial": "Reg Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:RegName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.Uri",
          "name": "Uri",
          "package": "salvia-protocol",
          "signature": "Uri Bool Scheme Authority Path Query Fragment",
          "source": "src/Network-Protocol-Uri-Data.html#Uri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol Uri",
          "module": "Network.Protocol.Uri",
          "name": "Uri",
          "package": "salvia-protocol",
          "partial": "Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-protocol/docs/Network-Protocol-Uri.html#v:Uri"
      }
    }
  ]
]