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
        "word": "wai-session"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Session.Map",
          "name": "Map",
          "package": "wai-session",
          "source": "src/Network-Wai-Session-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Session Map",
          "module": "Network.Wai.Session.Map",
          "name": "Map",
          "package": "wai-session",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-session/docs/Network-Wai-Session-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple session store based on threadsafe \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003es and\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.  This only works if your application server remains\n running (such as with warp).  All data is lost when the server\n terminates (bad for CGI).\n\u003c/p\u003e\u003cp\u003eWARNING: This session is vulnerable to sidejacking,\n use with TLS for security.\n\u003c/p\u003e",
          "module": "Network.Wai.Session.Map",
          "name": "mapStore",
          "package": "wai-session",
          "signature": "IO ByteString-\u003e IO (SessionStore m k v)",
          "type": "function"
        },
        "index": {
          "description": "Simple session store based on threadsafe IORef and Map This only works if your application server remains running such as with warp All data is lost when the server terminates bad for CGI WARNING This session is vulnerable to sidejacking use with TLS for security",
          "hierarchy": "Network Wai Session Map",
          "module": "Network.Wai.Session.Map",
          "name": "mapStore",
          "normalized": "IO ByteString-\u003eIO(SessionStore a b c)",
          "package": "wai-session",
          "partial": "Store",
          "signature": "IO ByteString-\u003eIO(SessionStore m k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-session/docs/Network-Wai-Session-Map.html#v:mapStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore using simple session ID generator based on time and \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Session.Map",
          "name": "mapStore_",
          "package": "wai-session",
          "signature": "IO (SessionStore m k v)",
          "source": "src/Network-Wai-Session-Map.html#mapStore_",
          "type": "function"
        },
        "index": {
          "description": "Store using simple session ID generator based on time and Unique",
          "hierarchy": "Network Wai Session Map",
          "module": "Network.Wai.Session.Map",
          "name": "mapStore_",
          "package": "wai-session",
          "partial": "Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-session/docs/Network-Wai-Session-Map.html#v:mapStore_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Session",
          "name": "Session",
          "package": "wai-session",
          "source": "src/Network-Wai-Session.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Session",
          "module": "Network.Wai.Session",
          "name": "Session",
          "package": "wai-session",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-session/docs/Network-Wai-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representing a single session (a lookup, insert pair)\n\u003c/p\u003e",
          "module": "Network.Wai.Session",
          "name": "Session",
          "package": "wai-session",
          "source": "src/Network-Wai-Session.html#Session",
          "type": "type"
        },
        "index": {
          "description": "Type representing single session lookup insert pair",
          "hierarchy": "Network Wai Session",
          "module": "Network.Wai.Session",
          "name": "Session",
          "package": "wai-session",
          "partial": "Session",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-session/docs/Network-Wai-Session.html#t:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSessionStore\u003c/a\u003e\u003c/code\u003e takes in the contents of the cookie (if there was one)\n and returns a (\u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action to get new contents for cookie) pair\n\u003c/p\u003e",
          "module": "Network.Wai.Session",
          "name": "SessionStore",
          "package": "wai-session",
          "source": "src/Network-Wai-Session.html#SessionStore",
          "type": "type"
        },
        "index": {
          "description": "SessionStore takes in the contents of the cookie if there was one and returns Session IO action to get new contents for cookie pair",
          "hierarchy": "Network Wai Session",
          "module": "Network.Wai.Session",
          "name": "SessionStore",
          "package": "wai-session",
          "partial": "Session Store",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-session/docs/Network-Wai-Session.html#t:SessionStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple session ID generator based on time and \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eUseful for session stores that use session IDs.\n\u003c/p\u003e",
          "module": "Network.Wai.Session",
          "name": "genSessionId",
          "package": "wai-session",
          "signature": "IO ByteString",
          "source": "src/Network-Wai-Session.html#genSessionId",
          "type": "function"
        },
        "index": {
          "description": "Simple session ID generator based on time and Unique Useful for session stores that use session IDs",
          "hierarchy": "Network Wai Session",
          "module": "Network.Wai.Session",
          "name": "genSessionId",
          "package": "wai-session",
          "partial": "Session Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-session/docs/Network-Wai-Session.html#v:genSessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFully parameterised middleware for cookie-based sessions\n\u003c/p\u003e",
          "module": "Network.Wai.Session",
          "name": "withSession",
          "package": "wai-session",
          "signature": "SessionStore m k v-\u003e ByteString-\u003e SetCookie-\u003e Key (Session m k v)-\u003e Middleware",
          "type": "function"
        },
        "index": {
          "description": "Fully parameterised middleware for cookie-based sessions",
          "hierarchy": "Network Wai Session",
          "module": "Network.Wai.Session",
          "name": "withSession",
          "normalized": "SessionStore a b c-\u003eByteString-\u003eSetCookie-\u003eKey(Session a b c)-\u003eMiddleware",
          "package": "wai-session",
          "partial": "Session",
          "signature": "SessionStore m k v-\u003eByteString-\u003eSetCookie-\u003eKey(Session m k v)-\u003eMiddleware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-session/docs/Network-Wai-Session.html#v:withSession"
      }
    }
  ]
]