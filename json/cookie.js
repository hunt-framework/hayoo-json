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
        "word": "cookie"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "Cookie",
          "package": "cookie",
          "source": "src/Web-Cookie.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "Cookie",
          "package": "cookie",
          "partial": "Cookie",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "Cookies",
          "package": "cookie",
          "source": "src/Web-Cookie.html#Cookies",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "Cookies",
          "package": "cookie",
          "partial": "Cookies",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#t:Cookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTextual cookies. Functions assume UTF8 encoding.\n\u003c/p\u003e",
          "module": "Web.Cookie",
          "name": "CookiesText",
          "package": "cookie",
          "source": "src/Web-Cookie.html#CookiesText",
          "type": "type"
        },
        "index": {
          "description": "Textual cookies Functions assume UTF8 encoding",
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "CookiesText",
          "package": "cookie",
          "partial": "Cookies Text",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#t:CookiesText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "SetCookie",
          "package": "cookie",
          "source": "src/Web-Cookie.html#SetCookie",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "SetCookie",
          "package": "cookie",
          "partial": "Set Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#t:SetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
          "module": "Web.Cookie",
          "name": "def",
          "package": "cookie",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "The default value for this type",
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "def",
          "package": "cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "expiresFormat",
          "package": "cookie",
          "signature": "String",
          "source": "src/Web-Cookie.html#expiresFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "expiresFormat",
          "package": "cookie",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:expiresFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e for a cookie.\n\u003c/p\u003e",
          "module": "Web.Cookie",
          "name": "formatCookieExpires",
          "package": "cookie",
          "signature": "UTCTime -\u003e ByteString",
          "source": "src/Web-Cookie.html#formatCookieExpires",
          "type": "function"
        },
        "index": {
          "description": "Format UTCTime for cookie",
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "formatCookieExpires",
          "normalized": "UTCTime-\u003eByteString",
          "package": "cookie",
          "partial": "Cookie Expires",
          "signature": "UTCTime-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:formatCookieExpires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "parseCookieExpires",
          "package": "cookie",
          "signature": "ByteString -\u003e Maybe UTCTime",
          "source": "src/Web-Cookie.html#parseCookieExpires",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "parseCookieExpires",
          "normalized": "ByteString-\u003eMaybe UTCTime",
          "package": "cookie",
          "partial": "Cookie Expires",
          "signature": "ByteString-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:parseCookieExpires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the value of a \"Cookie\" request header into key/value pairs.\n\u003c/p\u003e",
          "module": "Web.Cookie",
          "name": "parseCookies",
          "package": "cookie",
          "signature": "ByteString -\u003e Cookies",
          "source": "src/Web-Cookie.html#parseCookies",
          "type": "function"
        },
        "index": {
          "description": "Decode the value of Cookie request header into key value pairs",
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "parseCookies",
          "normalized": "ByteString-\u003eCookies",
          "package": "cookie",
          "partial": "Cookies",
          "signature": "ByteString-\u003eCookies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:parseCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "parseCookiesText",
          "package": "cookie",
          "signature": "ByteString -\u003e CookiesText",
          "source": "src/Web-Cookie.html#parseCookiesText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "parseCookiesText",
          "normalized": "ByteString-\u003eCookiesText",
          "package": "cookie",
          "partial": "Cookies Text",
          "signature": "ByteString-\u003eCookiesText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:parseCookiesText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "parseSetCookie",
          "package": "cookie",
          "signature": "ByteString -\u003e SetCookie",
          "source": "src/Web-Cookie.html#parseSetCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "parseSetCookie",
          "normalized": "ByteString-\u003eSetCookie",
          "package": "cookie",
          "partial": "Set Cookie",
          "signature": "ByteString-\u003eSetCookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:parseSetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "renderCookies",
          "package": "cookie",
          "signature": "Cookies -\u003e Builder",
          "source": "src/Web-Cookie.html#renderCookies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "renderCookies",
          "normalized": "Cookies-\u003eBuilder",
          "package": "cookie",
          "partial": "Cookies",
          "signature": "Cookies-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:renderCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "renderCookiesText",
          "package": "cookie",
          "signature": "CookiesText -\u003e Builder",
          "source": "src/Web-Cookie.html#renderCookiesText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "renderCookiesText",
          "normalized": "CookiesText-\u003eBuilder",
          "package": "cookie",
          "partial": "Cookies Text",
          "signature": "CookiesText-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:renderCookiesText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "renderSetCookie",
          "package": "cookie",
          "signature": "SetCookie -\u003e Builder",
          "source": "src/Web-Cookie.html#renderSetCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "renderSetCookie",
          "normalized": "SetCookie-\u003eBuilder",
          "package": "cookie",
          "partial": "Set Cookie",
          "signature": "SetCookie-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:renderSetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "setCookieDomain",
          "package": "cookie",
          "signature": "SetCookie -\u003e Maybe ByteString",
          "source": "src/Web-Cookie.html#setCookieDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "setCookieDomain",
          "normalized": "SetCookie-\u003eMaybe ByteString",
          "package": "cookie",
          "partial": "Cookie Domain",
          "signature": "SetCookie-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:setCookieDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "setCookieExpires",
          "package": "cookie",
          "signature": "SetCookie -\u003e Maybe UTCTime",
          "source": "src/Web-Cookie.html#setCookieExpires",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "setCookieExpires",
          "normalized": "SetCookie-\u003eMaybe UTCTime",
          "package": "cookie",
          "partial": "Cookie Expires",
          "signature": "SetCookie-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:setCookieExpires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "setCookieHttpOnly",
          "package": "cookie",
          "signature": "SetCookie -\u003e Bool",
          "source": "src/Web-Cookie.html#setCookieHttpOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "setCookieHttpOnly",
          "normalized": "SetCookie-\u003eBool",
          "package": "cookie",
          "partial": "Cookie Http Only",
          "signature": "SetCookie-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:setCookieHttpOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "setCookieMaxAge",
          "package": "cookie",
          "signature": "SetCookie -\u003e Maybe DiffTime",
          "source": "src/Web-Cookie.html#setCookieMaxAge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "setCookieMaxAge",
          "normalized": "SetCookie-\u003eMaybe DiffTime",
          "package": "cookie",
          "partial": "Cookie Max Age",
          "signature": "SetCookie-\u003eMaybe DiffTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:setCookieMaxAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "setCookieName",
          "package": "cookie",
          "signature": "SetCookie -\u003e ByteString",
          "source": "src/Web-Cookie.html#setCookieName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "setCookieName",
          "normalized": "SetCookie-\u003eByteString",
          "package": "cookie",
          "partial": "Cookie Name",
          "signature": "SetCookie-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:setCookieName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "setCookiePath",
          "package": "cookie",
          "signature": "SetCookie -\u003e Maybe ByteString",
          "source": "src/Web-Cookie.html#setCookiePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "setCookiePath",
          "normalized": "SetCookie-\u003eMaybe ByteString",
          "package": "cookie",
          "partial": "Cookie Path",
          "signature": "SetCookie-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:setCookiePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "setCookieSecure",
          "package": "cookie",
          "signature": "SetCookie -\u003e Bool",
          "source": "src/Web-Cookie.html#setCookieSecure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "setCookieSecure",
          "normalized": "SetCookie-\u003eBool",
          "package": "cookie",
          "partial": "Cookie Secure",
          "signature": "SetCookie-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:setCookieSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Cookie",
          "name": "setCookieValue",
          "package": "cookie",
          "signature": "SetCookie -\u003e ByteString",
          "source": "src/Web-Cookie.html#setCookieValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Cookie",
          "module": "Web.Cookie",
          "name": "setCookieValue",
          "normalized": "SetCookie-\u003eByteString",
          "package": "cookie",
          "partial": "Cookie Value",
          "signature": "SetCookie-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookie/docs/Web-Cookie.html#v:setCookieValue"
      }
    }
  ]
]