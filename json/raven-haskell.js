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
        "word": "raven-haskell"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStructured data interfaces from Sentry core:\n   \u003ca\u003ehttp://sentry.readthedocs.org/en/latest/developer/interfaces/index.html#provided-interfaces\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "Interfaces",
          "package": "raven-haskell",
          "source": "src/System-Log-Raven-Interfaces.html",
          "type": "module"
        },
        "index": {
          "description": "Structured data interfaces from Sentry core http sentry.readthedocs.org en latest developer interfaces index.html provided-interfaces",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "Interfaces",
          "package": "raven-haskell",
          "partial": "Interfaces",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional and optionally parsed HTTP query\n\u003c/p\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "HttpArgs",
          "package": "raven-haskell",
          "source": "src/System-Log-Raven-Interfaces.html#HttpArgs",
          "type": "data"
        },
        "index": {
          "description": "Optional and optionally parsed HTTP query",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "HttpArgs",
          "package": "raven-haskell",
          "partial": "Http Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#t:HttpArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mandatory field.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "(.=:)",
          "package": "raven-haskell",
          "signature": "String -\u003e v -\u003e [(String, Value)]",
          "source": "src/System-Log-Raven-Interfaces.html#.%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "mandatory field",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "(.=:) .=:",
          "normalized": "String-\u003ea-\u003e[(String,Value)]",
          "package": "raven-haskell",
          "signature": "String-\u003ev-\u003e[(String,Value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:.-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Interfaces",
          "name": "EmptyArgs",
          "package": "raven-haskell",
          "signature": "EmptyArgs",
          "source": "src/System-Log-Raven-Interfaces.html#HttpArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "EmptyArgs",
          "package": "raven-haskell",
          "partial": "Empty Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:EmptyArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Interfaces",
          "name": "QueryArgs",
          "package": "raven-haskell",
          "signature": "QueryArgs [(String, String)]",
          "source": "src/System-Log-Raven-Interfaces.html#HttpArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "QueryArgs",
          "normalized": "QueryArgs[(String,String)]",
          "package": "raven-haskell",
          "partial": "Query Args",
          "signature": "QueryArgs[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:QueryArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Interfaces",
          "name": "RawArgs",
          "package": "raven-haskell",
          "signature": "RawArgs String",
          "source": "src/System-Log-Raven-Interfaces.html#HttpArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "RawArgs",
          "package": "raven-haskell",
          "partial": "Raw Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:RawArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'sentry.interfaces.Exception':\n   A standard exception with a mandatory value argument,\n   and optional type and``module`` argument describing\n   the exception class type and module namespace.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "exception",
          "package": "raven-haskell",
          "signature": "String-\u003e Maybe String-\u003e Maybe String-\u003e SentryRecord-\u003e SentryRecord",
          "type": "function"
        },
        "index": {
          "description": "sentry.interfaces.Exception standard exception with mandatory value argument and optional type and module argument describing the exception class type and module namespace",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "exception",
          "normalized": "String-\u003eMaybe String-\u003eMaybe String-\u003eSentryRecord-\u003eSentryRecord",
          "package": "raven-haskell",
          "signature": "String-\u003eMaybe String-\u003eMaybe String-\u003eSentryRecord-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON object with optional fields removed.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "fields",
          "package": "raven-haskell",
          "signature": "[[(String, Value)]] -\u003e HashMap String Value",
          "source": "src/System-Log-Raven-Interfaces.html#fields",
          "type": "function"
        },
        "index": {
          "description": "JSON object with optional fields removed",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "fields",
          "normalized": "[[(String,Value)]]-\u003eHashMap String Value",
          "package": "raven-haskell",
          "signature": "[[(String,Value)]]-\u003eHashMap String Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional dict-like field.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "fromAssoc",
          "package": "raven-haskell",
          "signature": "String -\u003e [(String, String)] -\u003e [(String, Value)]",
          "source": "src/System-Log-Raven-Interfaces.html#fromAssoc",
          "type": "function"
        },
        "index": {
          "description": "Optional dict-like field",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "fromAssoc",
          "normalized": "String-\u003e[(String,String)]-\u003e[(String,Value)]",
          "package": "raven-haskell",
          "partial": "Assoc",
          "signature": "String-\u003e[(String,String)]-\u003e[(String,Value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:fromAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional simple field.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "fromMaybe",
          "package": "raven-haskell",
          "signature": "String -\u003e Maybe v -\u003e [(String, Value)]",
          "source": "src/System-Log-Raven-Interfaces.html#fromMaybe",
          "type": "function"
        },
        "index": {
          "description": "Optional simple field",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "fromMaybe",
          "normalized": "String-\u003eMaybe a-\u003e[(String,Value)]",
          "package": "raven-haskell",
          "partial": "Maybe",
          "signature": "String-\u003eMaybe v-\u003e[(String,Value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:fromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'sentry.interfaces.Http':\n   The Request information is stored in the Http interface.\n\u003c/p\u003e\u003cp\u003eSentry will explicitly look for REMOTE_ADDR in env for things\n   which require an IP address.\n\u003c/p\u003e\u003cp\u003eThe data variable should only contain the request body\n   (not the query string). It can either be a dictionary\n   (for standard HTTP requests) or a raw request body.\n\u003c/p\u003e\u003cpre\u003e import System.Log.RavenInterfaces as SI\n let upd = SI.http\n             \"http://absolute.uri/foo\"\n             \"POST\"\n             (SI.QueryArgs [(\"foo\", \"bar\")])\n             (Just \"hello=world\")\n             (Just \"foo=bar\")\n             [(\"Content-Type\", \"text/html\")]\n             [(\"REMOTE_ADDR\", \"127.1.0.1\")]\n\u003c/pre\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "http",
          "package": "raven-haskell",
          "signature": "String-\u003e String-\u003e HttpArgs-\u003e Maybe String-\u003e Maybe String-\u003e [(String, String)]-\u003e [(String, String)]-\u003e SentryRecord-\u003e SentryRecord",
          "type": "function"
        },
        "index": {
          "description": "sentry.interfaces.Http The Request information is stored in the Http interface Sentry will explicitly look for REMOTE ADDR in env for things which require an IP address The data variable should only contain the request body not the query string It can either be dictionary for standard HTTP requests or raw request body import System.Log.RavenInterfaces as SI let upd SI.http http absolute.uri foo POST SI.QueryArgs foo bar Just hello world Just foo bar Content-Type text html REMOTE ADDR",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "http",
          "normalized": "String-\u003eString-\u003eHttpArgs-\u003eMaybe String-\u003eMaybe String-\u003e[(String,String)]-\u003e[(String,String)]-\u003eSentryRecord-\u003eSentryRecord",
          "package": "raven-haskell",
          "signature": "String-\u003eString-\u003eHttpArgs-\u003eMaybe String-\u003eMaybe String-\u003e[(String,String)]-\u003e[(String,String)]-\u003eSentryRecord-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric interface helper.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "interface",
          "package": "raven-haskell",
          "signature": "String -\u003e v -\u003e SentryRecord -\u003e SentryRecord",
          "source": "src/System-Log-Raven-Interfaces.html#interface",
          "type": "function"
        },
        "index": {
          "description": "Generic interface helper",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "interface",
          "normalized": "String-\u003ea-\u003eSentryRecord-\u003eSentryRecord",
          "package": "raven-haskell",
          "signature": "String-\u003ev-\u003eSentryRecord-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'sentry.interfaces.Message':\n   A standard message consisting of a message arg, and an optional params\n   arg for formatting.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "message",
          "package": "raven-haskell",
          "signature": "String-\u003e [Value]-\u003e SentryRecord-\u003e SentryRecord",
          "type": "function"
        },
        "index": {
          "description": "sentry.interfaces.Message standard message consisting of message arg and an optional params arg for formatting",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "message",
          "normalized": "String-\u003e[Value]-\u003eSentryRecord-\u003eSentryRecord",
          "package": "raven-haskell",
          "signature": "String-\u003e[Value]-\u003eSentryRecord-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'sentry.interfaces.Query':\n   A SQL query with an optional string describing the SQL driver, engine.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "query",
          "package": "raven-haskell",
          "signature": "Maybe String-\u003e String-\u003e SentryRecord-\u003e SentryRecord",
          "type": "function"
        },
        "index": {
          "description": "sentry.interfaces.Query SQL query with an optional string describing the SQL driver engine",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "query",
          "normalized": "Maybe String-\u003eString-\u003eSentryRecord-\u003eSentryRecord",
          "package": "raven-haskell",
          "signature": "Maybe String-\u003eString-\u003eSentryRecord-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'sentry.interfaces.User':\n   An interface which describes the authenticated User for a request.\n\u003c/p\u003e\u003cpre\u003e let upd = SI.user \"unique_id\" [ (\"username\", \"my_user\")\n                               , (\"email\", \"foo@example.com\") ]\n\u003c/pre\u003e",
          "module": "System.Log.Raven.Interfaces",
          "name": "user",
          "package": "raven-haskell",
          "signature": "String-\u003e [(String, String)]-\u003e SentryRecord-\u003e SentryRecord",
          "type": "function"
        },
        "index": {
          "description": "sentry.interfaces.User An interface which describes the authenticated User for request let upd SI.user unique id username my user email foo@example.com",
          "hierarchy": "System Log Raven Interfaces",
          "module": "System.Log.Raven.Interfaces",
          "name": "user",
          "normalized": "String-\u003e[(String,String)]-\u003eSentryRecord-\u003eSentryRecord",
          "package": "raven-haskell",
          "signature": "String-\u003e[(String,String)]-\u003eSentryRecord-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Interfaces.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDummy &#171;transports&#187; for debugging purposes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Log.Raven.Transport.Debug",
          "name": "Debug",
          "package": "raven-haskell",
          "source": "src/System-Log-Raven-Transport-Debug.html",
          "type": "module"
        },
        "index": {
          "description": "Dummy transports for debugging purposes",
          "hierarchy": "System Log Raven Transport Debug",
          "module": "System.Log.Raven.Transport.Debug",
          "name": "Debug",
          "package": "raven-haskell",
          "partial": "Debug",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Transport-Debug.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog-like output with very few data shown.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Transport.Debug",
          "name": "briefRecord",
          "package": "raven-haskell",
          "signature": "SentrySettings -\u003e SentryRecord -\u003e IO ()",
          "source": "src/System-Log-Raven-Transport-Debug.html#briefRecord",
          "type": "function"
        },
        "index": {
          "description": "Log-like output with very few data shown",
          "hierarchy": "System Log Raven Transport Debug",
          "module": "System.Log.Raven.Transport.Debug",
          "name": "briefRecord",
          "normalized": "SentrySettings-\u003eSentryRecord-\u003eIO()",
          "package": "raven-haskell",
          "partial": "Record",
          "signature": "SentrySettings-\u003eSentryRecord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Transport-Debug.html#v:briefRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch event record into an *empty* \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.\n   Make sure you take it's contents before next message!\n\u003c/p\u003e",
          "module": "System.Log.Raven.Transport.Debug",
          "name": "catchRecord",
          "package": "raven-haskell",
          "signature": "MVar SentryRecord -\u003e SentrySettings -\u003e SentryRecord -\u003e IO ()",
          "source": "src/System-Log-Raven-Transport-Debug.html#catchRecord",
          "type": "function"
        },
        "index": {
          "description": "Catch event record into an empty MVar Make sure you take it contents before next message",
          "hierarchy": "System Log Raven Transport Debug",
          "module": "System.Log.Raven.Transport.Debug",
          "name": "catchRecord",
          "normalized": "MVar SentryRecord-\u003eSentrySettings-\u003eSentryRecord-\u003eIO()",
          "package": "raven-haskell",
          "partial": "Record",
          "signature": "MVar SentryRecord-\u003eSentrySettings-\u003eSentryRecord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Transport-Debug.html#v:catchRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump all glory details.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Transport.Debug",
          "name": "dumpRecord",
          "package": "raven-haskell",
          "signature": "SentrySettings -\u003e SentryRecord -\u003e IO ()",
          "source": "src/System-Log-Raven-Transport-Debug.html#dumpRecord",
          "type": "function"
        },
        "index": {
          "description": "Dump all glory details",
          "hierarchy": "System Log Raven Transport Debug",
          "module": "System.Log.Raven.Transport.Debug",
          "name": "dumpRecord",
          "normalized": "SentrySettings-\u003eSentryRecord-\u003eIO()",
          "package": "raven-haskell",
          "partial": "Record",
          "signature": "SentrySettings-\u003eSentryRecord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Transport-Debug.html#v:dumpRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHTTPS-capable transport using http-conduit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Log.Raven.Transport.HttpConduit",
          "name": "HttpConduit",
          "package": "raven-haskell",
          "source": "src/System-Log-Raven-Transport-HttpConduit.html",
          "type": "module"
        },
        "index": {
          "description": "HTTPS-capable transport using http-conduit",
          "hierarchy": "System Log Raven Transport HttpConduit",
          "module": "System.Log.Raven.Transport.HttpConduit",
          "name": "HttpConduit",
          "package": "raven-haskell",
          "partial": "Http Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Transport-HttpConduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Transport.HttpConduit",
          "name": "sendRecord",
          "package": "raven-haskell",
          "signature": "SentrySettings -\u003e SentryRecord -\u003e IO ()",
          "source": "src/System-Log-Raven-Transport-HttpConduit.html#sendRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Transport HttpConduit",
          "module": "System.Log.Raven.Transport.HttpConduit",
          "name": "sendRecord",
          "normalized": "SentrySettings-\u003eSentryRecord-\u003eIO()",
          "package": "raven-haskell",
          "partial": "Record",
          "signature": "SentrySettings-\u003eSentryRecord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Transport-HttpConduit.html#v:sendRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal representation of event record and related facilities.\n   Keep this under a pillow when writing custom wrappers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Log.Raven.Types",
          "name": "Types",
          "package": "raven-haskell",
          "source": "src/System-Log-Raven-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Internal representation of event record and related facilities Keep this under pillow when writing custom wrappers",
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "Types",
          "package": "raven-haskell",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSentry log levels. Custom levels should be configured in Sentry or sending messages will fail.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Types",
          "name": "SentryLevel",
          "package": "raven-haskell",
          "source": "src/System-Log-Raven-Types.html#SentryLevel",
          "type": "data"
        },
        "index": {
          "description": "Sentry log levels Custom levels should be configured in Sentry or sending messages will fail",
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "SentryLevel",
          "package": "raven-haskell",
          "partial": "Sentry Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#t:SentryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent packet to be sent. See detailed field descriptions in\n   \u003ca\u003ehttp://sentry.readthedocs.org/en/latest/developer/client/index.html#building-the-json-packet\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Types",
          "name": "SentryRecord",
          "package": "raven-haskell",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "data"
        },
        "index": {
          "description": "Event packet to be sent See detailed field descriptions in http sentry.readthedocs.org en latest developer client index.html building-the-json-packet",
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "SentryRecord",
          "package": "raven-haskell",
          "partial": "Sentry Record",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#t:SentryRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMisc settings packaged for easier operations.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Types",
          "name": "SentryService",
          "package": "raven-haskell",
          "source": "src/System-Log-Raven-Types.html#SentryService",
          "type": "data"
        },
        "index": {
          "description": "Misc settings packaged for easier operations",
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "SentryService",
          "package": "raven-haskell",
          "partial": "Sentry Service",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#t:SentryService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSentry client settings parsed from a DSN.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Types",
          "name": "SentrySettings",
          "package": "raven-haskell",
          "source": "src/System-Log-Raven-Types.html#SentrySettings",
          "type": "data"
        },
        "index": {
          "description": "Sentry client settings parsed from DSN",
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "SentrySettings",
          "package": "raven-haskell",
          "partial": "Sentry Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#t:SentrySettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "Custom",
          "package": "raven-haskell",
          "signature": "Custom String",
          "source": "src/System-Log-Raven-Types.html#SentryLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "Custom",
          "package": "raven-haskell",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "Debug",
          "package": "raven-haskell",
          "signature": "Debug",
          "source": "src/System-Log-Raven-Types.html#SentryLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "Debug",
          "package": "raven-haskell",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "Error",
          "package": "raven-haskell",
          "signature": "Error",
          "source": "src/System-Log-Raven-Types.html#SentryLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "Error",
          "package": "raven-haskell",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "Fatal",
          "package": "raven-haskell",
          "signature": "Fatal",
          "source": "src/System-Log-Raven-Types.html#SentryLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "Fatal",
          "package": "raven-haskell",
          "partial": "Fatal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:Fatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "Info",
          "package": "raven-haskell",
          "signature": "Info",
          "source": "src/System-Log-Raven-Types.html#SentryLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "Info",
          "package": "raven-haskell",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "SentryDisabled",
          "package": "raven-haskell",
          "signature": "SentryDisabled",
          "source": "src/System-Log-Raven-Types.html#SentrySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "SentryDisabled",
          "package": "raven-haskell",
          "partial": "Sentry Disabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:SentryDisabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "SentryRecord",
          "package": "raven-haskell",
          "signature": "SentryRecord",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "SentryRecord",
          "package": "raven-haskell",
          "partial": "Sentry Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:SentryRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "SentryService",
          "package": "raven-haskell",
          "signature": "SentryService",
          "source": "src/System-Log-Raven-Types.html#SentryService",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "SentryService",
          "package": "raven-haskell",
          "partial": "Sentry Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:SentryService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "SentrySettings",
          "package": "raven-haskell",
          "signature": "SentrySettings",
          "source": "src/System-Log-Raven-Types.html#SentrySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "SentrySettings",
          "package": "raven-haskell",
          "partial": "Sentry Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:SentrySettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "Warning",
          "package": "raven-haskell",
          "signature": "Warning",
          "source": "src/System-Log-Raven-Types.html#SentryLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "Warning",
          "package": "raven-haskell",
          "partial": "Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:Warning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssemble http endpoint URL from settings.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Types",
          "name": "endpointURL",
          "package": "raven-haskell",
          "signature": "SentrySettings -\u003e Maybe String",
          "source": "src/System-Log-Raven-Types.html#endpointURL",
          "type": "function"
        },
        "index": {
          "description": "Assemble http endpoint URL from settings",
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "endpointURL",
          "normalized": "SentrySettings-\u003eMaybe String",
          "package": "raven-haskell",
          "partial": "URL",
          "signature": "SentrySettings-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:endpointURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a service DSN into a settings. Format is:\n\u003c/p\u003e\u003cpre\u003e {PROTOCOL}://{PUBLIC_KEY}:{SECRET_KEY}@{HOST}{PATH}/{PROJECT_ID}\n\u003c/pre\u003e",
          "module": "System.Log.Raven.Types",
          "name": "fromDSN",
          "package": "raven-haskell",
          "signature": "String -\u003e SentrySettings",
          "source": "src/System-Log-Raven-Types.html#fromDSN",
          "type": "function"
        },
        "index": {
          "description": "Transforms service DSN into settings Format is PROTOCOL PUBLIC KEY SECRET KEY HOST PATH PROJECT ID",
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "fromDSN",
          "normalized": "String-\u003eSentrySettings",
          "package": "raven-haskell",
          "partial": "DSN",
          "signature": "String-\u003eSentrySettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:fromDSN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a record with all required fields filled in.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Types",
          "name": "newRecord",
          "package": "raven-haskell",
          "signature": "String -\u003e String -\u003e String -\u003e SentryLevel -\u003e String -\u003e SentryRecord",
          "source": "src/System-Log-Raven-Types.html#newRecord",
          "type": "function"
        },
        "index": {
          "description": "Initialize record with all required fields filled in",
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "newRecord",
          "normalized": "String-\u003eString-\u003eString-\u003eSentryLevel-\u003eString-\u003eSentryRecord",
          "package": "raven-haskell",
          "partial": "Record",
          "signature": "String-\u003eString-\u003eString-\u003eSentryLevel-\u003eString-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:newRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "sentryPrivateKey",
          "package": "raven-haskell",
          "signature": "String",
          "source": "src/System-Log-Raven-Types.html#SentrySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "sentryPrivateKey",
          "package": "raven-haskell",
          "partial": "Private Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:sentryPrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "sentryProjectId",
          "package": "raven-haskell",
          "signature": "String",
          "source": "src/System-Log-Raven-Types.html#SentrySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "sentryProjectId",
          "package": "raven-haskell",
          "partial": "Project Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:sentryProjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "sentryPublicKey",
          "package": "raven-haskell",
          "signature": "String",
          "source": "src/System-Log-Raven-Types.html#SentrySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "sentryPublicKey",
          "package": "raven-haskell",
          "partial": "Public Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:sentryPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "sentryURI",
          "package": "raven-haskell",
          "signature": "String",
          "source": "src/System-Log-Raven-Types.html#SentrySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "sentryURI",
          "package": "raven-haskell",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:sentryURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "serviceDefaults",
          "package": "raven-haskell",
          "signature": "SentryRecord -\u003e SentryRecord",
          "source": "src/System-Log-Raven-Types.html#SentryService",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "serviceDefaults",
          "normalized": "SentryRecord-\u003eSentryRecord",
          "package": "raven-haskell",
          "partial": "Defaults",
          "signature": "SentryRecord-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:serviceDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "serviceFallback",
          "package": "raven-haskell",
          "signature": "SentryRecord -\u003e IO ()",
          "source": "src/System-Log-Raven-Types.html#SentryService",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "serviceFallback",
          "normalized": "SentryRecord-\u003eIO()",
          "package": "raven-haskell",
          "partial": "Fallback",
          "signature": "SentryRecord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:serviceFallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "serviceSettings",
          "package": "raven-haskell",
          "signature": "SentrySettings",
          "source": "src/System-Log-Raven-Types.html#SentryService",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "serviceSettings",
          "package": "raven-haskell",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:serviceSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "serviceTransport",
          "package": "raven-haskell",
          "signature": "SentrySettings -\u003e SentryRecord -\u003e IO ()",
          "source": "src/System-Log-Raven-Types.html#SentryService",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "serviceTransport",
          "normalized": "SentrySettings-\u003eSentryRecord-\u003eIO()",
          "package": "raven-haskell",
          "partial": "Transport",
          "signature": "SentrySettings-\u003eSentryRecord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:serviceTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srCulprit",
          "package": "raven-haskell",
          "signature": "Maybe String",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srCulprit",
          "package": "raven-haskell",
          "partial": "Culprit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srCulprit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srEventId",
          "package": "raven-haskell",
          "signature": "String",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srEventId",
          "package": "raven-haskell",
          "partial": "Event Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srEventId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srExtra",
          "package": "raven-haskell",
          "signature": "Assoc",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srExtra",
          "package": "raven-haskell",
          "partial": "Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srInterfaces",
          "package": "raven-haskell",
          "signature": "HashMap String Value",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srInterfaces",
          "package": "raven-haskell",
          "partial": "Interfaces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srInterfaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srLevel",
          "package": "raven-haskell",
          "signature": "SentryLevel",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srLevel",
          "package": "raven-haskell",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srLogger",
          "package": "raven-haskell",
          "signature": "String",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srLogger",
          "package": "raven-haskell",
          "partial": "Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srMessage",
          "package": "raven-haskell",
          "signature": "String",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srMessage",
          "package": "raven-haskell",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srModules",
          "package": "raven-haskell",
          "signature": "Assoc",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srModules",
          "package": "raven-haskell",
          "partial": "Modules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srPlatform",
          "package": "raven-haskell",
          "signature": "Maybe String",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srPlatform",
          "package": "raven-haskell",
          "partial": "Platform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srPlatform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srServerName",
          "package": "raven-haskell",
          "signature": "Maybe String",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srServerName",
          "package": "raven-haskell",
          "partial": "Server Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srServerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srTags",
          "package": "raven-haskell",
          "signature": "Assoc",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srTags",
          "package": "raven-haskell",
          "partial": "Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Raven.Types",
          "name": "srTimestamp",
          "package": "raven-haskell",
          "signature": "String",
          "source": "src/System-Log-Raven-Types.html#SentryRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Raven Types",
          "module": "System.Log.Raven.Types",
          "name": "srTimestamp",
          "package": "raven-haskell",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven-Types.html#v:srTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRaven is a client for Sentry event server (\u003ca\u003ehttps://www.getsentry.com/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eStart by initializing the raven \u003ccode\u003eService\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e l \u003c- initRaven\n          \"https://pub:priv@sentry.hostname.tld:8443/sentry/example_project\"\n          id\n          sendRecord\n          stderrFallback\n\u003c/pre\u003e\u003cp\u003eSend events using \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e register l \"my.logger.name\" Debug \"Hi there!\" id\n\u003c/pre\u003e\u003cp\u003eTags and stuff can be added using register update functions.\n\u003c/p\u003e\u003cpre\u003e import Data.HashMap.Strict as HM\n let tags r = r { srTags = HM.insert \"spam\" \"sausage\"\n                         . HM.insert \"eggs\" \"bacon\"\n                         . srTags r }\n lt \u003c- initRaven dsn tags sendRecord stderrFallback\n\n let culprit r = r { srCulprit = \"my.module.function.name\" }\n register lt \"test.culprit\" Error \"It's a trap!\" culprit\n let extra r = r { srExtra = HM.insert \"fnord\" \"42\" $ srExtra r }\n register lt \"test.extra\" Info \"Test with tags and extra, please ignore.\"\n\u003c/pre\u003e\u003cp\u003eThe core package provides only general interface for sending events which\n   could be wrapped to adapt it to your needs.\n\u003c/p\u003e\u003cpre\u003e let debug msg = forkIO $ register l \"my.logger.name\" Debug msg (culprit . extra)\n debug \"Async stuff too.\"\n\u003c/pre\u003e\u003cp\u003eThere are some little helpers to compose your own updaters.\n   You can use them both in \u003ccode\u003e\u003ca\u003einitRaven\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e l \u003c- initRaven dsn ( tags [ (\"spam\", \"sausage\"\n                           , (\"eggs\", \"bacon\") ]\n                    . extra [ (\"more\", \"stuff\") ]\n                    )\n                    sendRecord stderrFallback\n\n register l \"test.helpers\" Info \"yup, i'm here.\" $ culprit \"java.lang.NotReally\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Log.Raven",
          "name": "Raven",
          "package": "raven-haskell",
          "source": "src/System-Log-Raven.html",
          "type": "module"
        },
        "index": {
          "description": "Raven is client for Sentry event server https www.getsentry.com Start by initializing the raven Service initRaven https pub priv@sentry.hostname.tld sentry example project id sendRecord stderrFallback Send events using register function register my.logger.name Debug Hi there id Tags and stuff can be added using register update functions import Data.HashMap.Strict as HM let tags srTags HM.insert spam sausage HM.insert eggs bacon srTags lt initRaven dsn tags sendRecord stderrFallback let culprit srCulprit my.module.function.name register lt test.culprit Error It trap culprit let extra srExtra HM.insert fnord srExtra register lt test.extra Info Test with tags and extra please ignore The core package provides only general interface for sending events which could be wrapped to adapt it to your needs let debug msg forkIO register my.logger.name Debug msg culprit extra debug Async stuff too There are some little helpers to compose your own updaters You can use them both in initRaven and register initRaven dsn tags spam sausage eggs bacon extra more stuff sendRecord stderrFallback register test.helpers Info yup here culprit java.lang.NotReally",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "Raven",
          "package": "raven-haskell",
          "partial": "Raven",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet culprit field.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "culprit",
          "package": "raven-haskell",
          "signature": "String -\u003e SentryRecord -\u003e SentryRecord",
          "source": "src/System-Log-Raven.html#culprit",
          "type": "function"
        },
        "index": {
          "description": "Set culprit field",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "culprit",
          "normalized": "String-\u003eSentryRecord-\u003eSentryRecord",
          "package": "raven-haskell",
          "signature": "String-\u003eSentryRecord-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:culprit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisabled service that ignores incoming events.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "disabledRaven",
          "package": "raven-haskell",
          "signature": "IO SentryService",
          "source": "src/System-Log-Raven.html#disabledRaven",
          "type": "function"
        },
        "index": {
          "description": "Disabled service that ignores incoming events",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "disabledRaven",
          "package": "raven-haskell",
          "partial": "Raven",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:disabledRaven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCrash and burn with record data.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "errorFallback",
          "package": "raven-haskell",
          "signature": "SentryRecord -\u003e IO ()",
          "source": "src/System-Log-Raven.html#errorFallback",
          "type": "function"
        },
        "index": {
          "description": "Crash and burn with record data",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "errorFallback",
          "normalized": "SentryRecord-\u003eIO()",
          "package": "raven-haskell",
          "partial": "Fallback",
          "signature": "SentryRecord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:errorFallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd record extra information.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "extra",
          "package": "raven-haskell",
          "signature": "[(String, String)] -\u003e SentryRecord -\u003e SentryRecord",
          "source": "src/System-Log-Raven.html#extra",
          "type": "function"
        },
        "index": {
          "description": "Add record extra information",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "extra",
          "normalized": "[(String,String)]-\u003eSentryRecord-\u003eSentryRecord",
          "package": "raven-haskell",
          "signature": "[(String,String)]-\u003eSentryRecord-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:extra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize event service.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "initRaven",
          "package": "raven-haskell",
          "signature": "String-\u003e (SentryRecord -\u003e SentryRecord)-\u003e (SentrySettings -\u003e SentryRecord -\u003e IO ())-\u003e (SentryRecord -\u003e IO ())-\u003e IO SentryService",
          "type": "function"
        },
        "index": {
          "description": "Initialize event service",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "initRaven",
          "normalized": "String-\u003e(SentryRecord-\u003eSentryRecord)-\u003e(SentrySettings-\u003eSentryRecord-\u003eIO())-\u003e(SentryRecord-\u003eIO())-\u003eIO SentryService",
          "package": "raven-haskell",
          "partial": "Raven",
          "signature": "String-\u003e(SentryRecord-\u003eSentryRecord)-\u003e(SentrySettings-\u003eSentryRecord-\u003eIO())-\u003e(SentryRecord-\u003eIO())-\u003eIO SentryService",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:initRaven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord an event using logging service.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "record",
          "package": "raven-haskell",
          "signature": "String-\u003e SentryLevel-\u003e String-\u003e (SentryRecord -\u003e SentryRecord)-\u003e IO SentryRecord",
          "type": "function"
        },
        "index": {
          "description": "Record an event using logging service",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "record",
          "normalized": "String-\u003eSentryLevel-\u003eString-\u003e(SentryRecord-\u003eSentryRecord)-\u003eIO SentryRecord",
          "package": "raven-haskell",
          "signature": "String-\u003eSentryLevel-\u003eString-\u003e(SentryRecord-\u003eSentryRecord)-\u003eIO SentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON-encode record data.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "recordLBS",
          "package": "raven-haskell",
          "signature": "SentryRecord -\u003e ByteString",
          "source": "src/System-Log-Raven.html#recordLBS",
          "type": "function"
        },
        "index": {
          "description": "JSON-encode record data",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "recordLBS",
          "normalized": "SentryRecord-\u003eByteString",
          "package": "raven-haskell",
          "partial": "LBS",
          "signature": "SentryRecord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:recordLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk service to store an event.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "register",
          "package": "raven-haskell",
          "signature": "SentryService-\u003e String-\u003e SentryLevel-\u003e String-\u003e (SentryRecord -\u003e SentryRecord)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Ask service to store an event",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "register",
          "normalized": "SentryService-\u003eString-\u003eSentryLevel-\u003eString-\u003e(SentryRecord-\u003eSentryRecord)-\u003eIO()",
          "package": "raven-haskell",
          "signature": "SentryService-\u003eString-\u003eSentryLevel-\u003eString-\u003e(SentryRecord-\u003eSentryRecord)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore recording errors.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "silentFallback",
          "package": "raven-haskell",
          "signature": "SentryRecord -\u003e IO ()",
          "source": "src/System-Log-Raven.html#silentFallback",
          "type": "function"
        },
        "index": {
          "description": "Ignore recording errors",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "silentFallback",
          "normalized": "SentryRecord-\u003eIO()",
          "package": "raven-haskell",
          "partial": "Fallback",
          "signature": "SentryRecord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:silentFallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow basic message on stderr.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "stderrFallback",
          "package": "raven-haskell",
          "signature": "SentryRecord -\u003e IO ()",
          "source": "src/System-Log-Raven.html#stderrFallback",
          "type": "function"
        },
        "index": {
          "description": "Show basic message on stderr",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "stderrFallback",
          "normalized": "SentryRecord-\u003eIO()",
          "package": "raven-haskell",
          "partial": "Fallback",
          "signature": "SentryRecord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:stderrFallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd record tags.\n\u003c/p\u003e",
          "module": "System.Log.Raven",
          "name": "tags",
          "package": "raven-haskell",
          "signature": "[(String, String)] -\u003e SentryRecord -\u003e SentryRecord",
          "source": "src/System-Log-Raven.html#tags",
          "type": "function"
        },
        "index": {
          "description": "Add record tags",
          "hierarchy": "System Log Raven",
          "module": "System.Log.Raven",
          "name": "tags",
          "normalized": "[(String,String)]-\u003eSentryRecord-\u003eSentryRecord",
          "package": "raven-haskell",
          "signature": "[(String,String)]-\u003eSentryRecord-\u003eSentryRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell/docs/System-Log-Raven.html#v:tags"
      }
    }
  ]
]