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
        "word": "snap-server"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e datatype, which you can use to configure the\nSnap HTTP server.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "Config",
          "package": "snap-server",
          "source": "src/Snap-Http-Server-Config.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the Config datatype which you can use to configure the Snap HTTP server",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "Config",
          "package": "snap-server",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record type which represents partial configurations (for \u003ccode\u003ehttpServe\u003c/code\u003e)\n by wrapping all of its fields in a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e. Values of this type are usually\n constructed via its \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance by doing something like:\n\u003c/p\u003e\u003cpre\u003e setPort 1234 mempty\n\u003c/pre\u003e\u003cp\u003eAny fields which are unspecified in the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e passed to \u003ccode\u003ehttpServe\u003c/code\u003e (and\n this is the norm) are filled in with default values from \u003ccode\u003e\u003ca\u003edefaultConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "Config",
          "package": "snap-server",
          "source": "src/Snap-Internal-Http-Server-Config.html#Config",
          "type": "data"
        },
        "index": {
          "description": "record type which represents partial configurations for httpServe by wrapping all of its fields in Maybe Values of this type are usually constructed via its Monoid instance by doing something like setPort mempty Any fields which are unspecified in the Config passed to httpServe and this is the norm are filled in with default values from defaultConfig",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "Config",
          "package": "snap-server",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing the configuration of a logging target\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "ConfigLog",
          "package": "snap-server",
          "source": "src/Snap-Internal-Http-Server-Config.html#ConfigLog",
          "type": "data"
        },
        "index": {
          "description": "Data type representing the configuration of logging target",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "ConfigLog",
          "package": "snap-server",
          "partial": "Config Log",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#t:ConfigLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArguments passed to \u003ccode\u003e\u003ca\u003esetStartupHook\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "StartupInfo",
          "package": "snap-server",
          "source": "src/Snap-Internal-Http-Server-Config.html#StartupInfo",
          "type": "data"
        },
        "index": {
          "description": "Arguments passed to setStartupHook",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "StartupInfo",
          "package": "snap-server",
          "partial": "Startup Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#t:StartupInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog to text file\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "ConfigFileLog",
          "package": "snap-server",
          "signature": "ConfigFileLog FilePath",
          "source": "src/Snap-Internal-Http-Server-Config.html#ConfigLog",
          "type": "function"
        },
        "index": {
          "description": "log to text file",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "ConfigFileLog",
          "package": "snap-server",
          "partial": "Config File Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:ConfigFileLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog custom IO handler\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "ConfigIoLog",
          "package": "snap-server",
          "signature": "ConfigIoLog (ByteString -\u003e IO ())",
          "source": "src/Snap-Internal-Http-Server-Config.html#ConfigLog",
          "type": "function"
        },
        "index": {
          "description": "log custom IO handler",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "ConfigIoLog",
          "normalized": "ConfigIoLog(ByteString-\u003eIO())",
          "package": "snap-server",
          "partial": "Config Io Log",
          "signature": "ConfigIoLog(ByteString-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:ConfigIoLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno logging\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "ConfigNoLog",
          "package": "snap-server",
          "signature": "ConfigNoLog",
          "source": "src/Snap-Internal-Http-Server-Config.html#ConfigLog",
          "type": "function"
        },
        "index": {
          "description": "no logging",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "ConfigNoLog",
          "package": "snap-server",
          "partial": "Config No Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:ConfigNoLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e obtained from parsing command-line options, using the\n default Snap \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e set.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, the locale is read from the \u003ccode\u003eLANG\u003c/code\u003e environment variable.\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "commandLineConfig",
          "package": "snap-server",
          "signature": "Config m a-\u003e IO (Config m a)",
          "type": "function"
        },
        "index": {
          "description": "Returns Config obtained from parsing command-line options using the default Snap OptDescr set On Unix systems the locale is read from the LANG environment variable",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "commandLineConfig",
          "normalized": "Config a b-\u003eIO(Config a b)",
          "package": "snap-server",
          "partial": "Line Config",
          "signature": "Config m a-\u003eIO(Config m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:commandLineConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "completeConfig",
          "package": "snap-server",
          "signature": "Config m a -\u003e IO (Config m a)",
          "source": "src/Snap-Internal-Http-Server-Config.html#completeConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "completeConfig",
          "normalized": "Config a b-\u003eIO(Config a b)",
          "package": "snap-server",
          "partial": "Config",
          "signature": "Config m a-\u003eIO(Config m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:completeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese are the default values for the options\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "defaultConfig",
          "package": "snap-server",
          "signature": "Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "These are the default values for the options",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "defaultConfig",
          "package": "snap-server",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a completely empty \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e. Equivalent to \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e from\n \u003ccode\u003eConfig'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "emptyConfig",
          "package": "snap-server",
          "signature": "Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#emptyConfig",
          "type": "function"
        },
        "index": {
          "description": "Returns completely empty Config Equivalent to mempty from Config Monoid instance",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "emptyConfig",
          "package": "snap-server",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:emptyConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e obtained from parsing command-line options, using the\n default Snap \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e set as well as a list of user OptDescrs. User\n OptDescrs use the \"other\" field (accessible using \u003ccode\u003e\u003ca\u003egetOther\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003esetOther\u003c/a\u003e\u003c/code\u003e) to store additional command-line option state. These are\n combined using a user-defined combining function.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, the locale is read from the \u003ccode\u003eLANG\u003c/code\u003e environment variable.\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "extendedCommandLineConfig",
          "package": "snap-server",
          "signature": "[OptDescr (Maybe (Config m a))]-\u003e (a -\u003e a -\u003e a)-\u003e Config m a-\u003e IO (Config m a)",
          "type": "function"
        },
        "index": {
          "description": "Returns Config obtained from parsing command-line options using the default Snap OptDescr set as well as list of user OptDescrs User OptDescrs use the other field accessible using getOther and setOther to store additional command-line option state These are combined using user-defined combining function On Unix systems the locale is read from the LANG environment variable",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "extendedCommandLineConfig",
          "normalized": "[OptDescr(Maybe(Config a b))]-\u003e(b-\u003eb-\u003eb)-\u003eConfig a b-\u003eIO(Config a b)",
          "package": "snap-server",
          "partial": "Command Line Config",
          "signature": "[OptDescr(Maybe(Config m a))]-\u003e(a-\u003ea-\u003ea)-\u003eConfig m a-\u003eIO(Config m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:extendedCommandLineConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "fmapOpt",
          "package": "snap-server",
          "signature": "(a -\u003e b) -\u003e OptDescr a -\u003e OptDescr b",
          "source": "src/Snap-Internal-Http-Server-Config.html#fmapOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "fmapOpt",
          "normalized": "(a-\u003eb)-\u003eOptDescr a-\u003eOptDescr b",
          "package": "snap-server",
          "partial": "Opt",
          "signature": "(a-\u003eb)-\u003eOptDescr a-\u003eOptDescr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:fmapOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the access log\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getAccessLog",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe ConfigLog",
          "source": "src/Snap-Internal-Http-Server-Config.html#getAccessLog",
          "type": "function"
        },
        "index": {
          "description": "Path to the access log",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getAccessLog",
          "normalized": "Config a b-\u003eMaybe ConfigLog",
          "package": "snap-server",
          "partial": "Access Log",
          "signature": "Config m a-\u003eMaybe ConfigLog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getAccessLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the address to bind to (for http)\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getBind",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe ByteString",
          "source": "src/Snap-Internal-Http-Server-Config.html#getBind",
          "type": "function"
        },
        "index": {
          "description": "Returns the address to bind to for http",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getBind",
          "normalized": "Config a b-\u003eMaybe ByteString",
          "package": "snap-server",
          "partial": "Bind",
          "signature": "Config m a-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set and set to True, compression is turned on when applicable\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getCompression",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe Bool",
          "source": "src/Snap-Internal-Http-Server-Config.html#getCompression",
          "type": "function"
        },
        "index": {
          "description": "If set and set to True compression is turned on when applicable",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getCompression",
          "normalized": "Config a b-\u003eMaybe Bool",
          "package": "snap-server",
          "partial": "Compression",
          "signature": "Config m a-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "getDefaultTimeout",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe Int",
          "source": "src/Snap-Internal-Http-Server-Config.html#getDefaultTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getDefaultTimeout",
          "normalized": "Config a b-\u003eMaybe Int",
          "package": "snap-server",
          "partial": "Default Timeout",
          "signature": "Config m a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getDefaultTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA MonadSnap action to handle 500 errors\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getErrorHandler",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe (SomeException -\u003e m ())",
          "source": "src/Snap-Internal-Http-Server-Config.html#getErrorHandler",
          "type": "function"
        },
        "index": {
          "description": "MonadSnap action to handle errors",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getErrorHandler",
          "normalized": "Config a b-\u003eMaybe(SomeException-\u003ea())",
          "package": "snap-server",
          "partial": "Error Handler",
          "signature": "Config m a-\u003eMaybe(SomeException-\u003em())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the error log\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getErrorLog",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe ConfigLog",
          "source": "src/Snap-Internal-Http-Server-Config.html#getErrorLog",
          "type": "function"
        },
        "index": {
          "description": "Path to the error log",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getErrorLog",
          "normalized": "Config a b-\u003eMaybe ConfigLog",
          "package": "snap-server",
          "partial": "Error Log",
          "signature": "Config m a-\u003eMaybe ConfigLog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getErrorLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hostname of the HTTP server. This field has the same format as an HTTP\n \u003ccode\u003eHost\u003c/code\u003e header; if a \u003ccode\u003eHost\u003c/code\u003e header came in with the request, we use that,\n otherwise we default to this value specified in the configuration.\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getHostname",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe ByteString",
          "source": "src/Snap-Internal-Http-Server-Config.html#getHostname",
          "type": "function"
        },
        "index": {
          "description": "The hostname of the HTTP server This field has the same format as an HTTP Host header if Host header came in with the request we use that otherwise we default to this value specified in the configuration",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getHostname",
          "normalized": "Config a b-\u003eMaybe ByteString",
          "package": "snap-server",
          "partial": "Hostname",
          "signature": "Config m a-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getHostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the locale to use. Locales are used on Unix only, to set the\n \u003ccode\u003eLANG\u003c/code\u003e/\u003ccode\u003eLC_ALL\u003c/code\u003e/etc. environment variable. For instance if you set the\n locale to \"\u003ccode\u003een_US\u003c/code\u003e\", we'll set the relevant environment variables to\n \"\u003ccode\u003een_US.UTF-8\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getLocale",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe String",
          "source": "src/Snap-Internal-Http-Server-Config.html#getLocale",
          "type": "function"
        },
        "index": {
          "description": "Gets the locale to use Locales are used on Unix only to set the LANG LC ALL etc environment variable For instance if you set the locale to en US we ll set the relevant environment variables to en US.UTF-8",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getLocale",
          "normalized": "Config a b-\u003eMaybe String",
          "package": "snap-server",
          "partial": "Locale",
          "signature": "Config m a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "getOther",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe a",
          "source": "src/Snap-Internal-Http-Server-Config.html#getOther",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getOther",
          "normalized": "Config a b-\u003eMaybe b",
          "package": "snap-server",
          "partial": "Other",
          "signature": "Config m a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the port to listen on (for http)\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getPort",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe Int",
          "source": "src/Snap-Internal-Http-Server-Config.html#getPort",
          "type": "function"
        },
        "index": {
          "description": "Returns the port to listen on for http",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getPort",
          "normalized": "Config a b-\u003eMaybe Int",
          "package": "snap-server",
          "partial": "Port",
          "signature": "Config m a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "getProxyType",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe ProxyType",
          "source": "src/Snap-Internal-Http-Server-Config.html#getProxyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getProxyType",
          "normalized": "Config a b-\u003eMaybe ProxyType",
          "package": "snap-server",
          "partial": "Proxy Type",
          "signature": "Config m a-\u003eMaybe ProxyType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getProxyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the address to bind to (for https)\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getSSLBind",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe ByteString",
          "source": "src/Snap-Internal-Http-Server-Config.html#getSSLBind",
          "type": "function"
        },
        "index": {
          "description": "Returns the address to bind to for https",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getSSLBind",
          "normalized": "Config a b-\u003eMaybe ByteString",
          "package": "snap-server",
          "partial": "SSLBind",
          "signature": "Config m a-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getSSLBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the SSL certificate file\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getSSLCert",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe FilePath",
          "source": "src/Snap-Internal-Http-Server-Config.html#getSSLCert",
          "type": "function"
        },
        "index": {
          "description": "Path to the SSL certificate file",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getSSLCert",
          "normalized": "Config a b-\u003eMaybe FilePath",
          "package": "snap-server",
          "partial": "SSLCert",
          "signature": "Config m a-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getSSLCert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the SSL key file\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getSSLKey",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe FilePath",
          "source": "src/Snap-Internal-Http-Server-Config.html#getSSLKey",
          "type": "function"
        },
        "index": {
          "description": "Path to the SSL key file",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getSSLKey",
          "normalized": "Config a b-\u003eMaybe FilePath",
          "package": "snap-server",
          "partial": "SSLKey",
          "signature": "Config m a-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getSSLKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the port to listen on (for https)\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getSSLPort",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe Int",
          "source": "src/Snap-Internal-Http-Server-Config.html#getSSLPort",
          "type": "function"
        },
        "index": {
          "description": "Returns the port to listen on for https",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getSSLPort",
          "normalized": "Config a b-\u003eMaybe Int",
          "package": "snap-server",
          "partial": "SSLPort",
          "signature": "Config m a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getSSLPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "getStartupConfig",
          "package": "snap-server",
          "signature": "StartupInfo m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#getStartupConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getStartupConfig",
          "normalized": "StartupInfo a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Startup Config",
          "signature": "StartupInfo m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getStartupConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA startup hook is run after the server initializes but before user request\n processing begins. The server passes, through a \u003ccode\u003e\u003ca\u003eStartupInfo\u003c/a\u003e\u003c/code\u003e object, the\n startup hook a list of the sockets it is listening on and the final \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e\n object completed after command-line processing.\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getStartupHook",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe (StartupInfo m a -\u003e IO ())",
          "source": "src/Snap-Internal-Http-Server-Config.html#getStartupHook",
          "type": "function"
        },
        "index": {
          "description": "startup hook is run after the server initializes but before user request processing begins The server passes through StartupInfo object the startup hook list of the sockets it is listening on and the final Config object completed after command-line processing",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getStartupHook",
          "normalized": "Config a b-\u003eMaybe(StartupInfo a b-\u003eIO())",
          "package": "snap-server",
          "partial": "Startup Hook",
          "signature": "Config m a-\u003eMaybe(StartupInfo m a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getStartupHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe the \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003es opened by the server. There will be two \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003es for SSL connections, and one otherwise.\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getStartupSockets",
          "package": "snap-server",
          "signature": "StartupInfo m a -\u003e [Socket]",
          "source": "src/Snap-Internal-Http-Server-Config.html#getStartupSockets",
          "type": "function"
        },
        "index": {
          "description": "The the Socket opened by the server There will be two Socket for SSL connections and one otherwise",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getStartupSockets",
          "normalized": "StartupInfo a b-\u003e[Socket]",
          "package": "snap-server",
          "partial": "Startup Sockets",
          "signature": "StartupInfo m a-\u003e[Socket]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getStartupSockets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to write server status updates to stderr\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "getVerbose",
          "package": "snap-server",
          "signature": "Config m a -\u003e Maybe Bool",
          "source": "src/Snap-Internal-Http-Server-Config.html#getVerbose",
          "type": "function"
        },
        "index": {
          "description": "Whether to write server status updates to stderr",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "getVerbose",
          "normalized": "Config a b-\u003eMaybe Bool",
          "package": "snap-server",
          "partial": "Verbose",
          "signature": "Config m a-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a description of the snap command line options suitable for use\n with \u003ca\u003eSystem.Console.GetOpt\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Config",
          "name": "optDescrs",
          "package": "snap-server",
          "signature": "Config m a-\u003e [OptDescr (Maybe (Config m a))]",
          "type": "function"
        },
        "index": {
          "description": "Returns description of the snap command line options suitable for use with System.Console.GetOpt",
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "optDescrs",
          "normalized": "Config a b-\u003e[OptDescr(Maybe(Config a b))]",
          "package": "snap-server",
          "partial": "Descrs",
          "signature": "Config m a-\u003e[OptDescr(Maybe(Config m a))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:optDescrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setAccessLog",
          "package": "snap-server",
          "signature": "ConfigLog -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setAccessLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setAccessLog",
          "normalized": "ConfigLog-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Access Log",
          "signature": "ConfigLog-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setAccessLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setBind",
          "package": "snap-server",
          "signature": "ByteString -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setBind",
          "normalized": "ByteString-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Bind",
          "signature": "ByteString-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setCompression",
          "package": "snap-server",
          "signature": "Bool -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setCompression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setCompression",
          "normalized": "Bool-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Compression",
          "signature": "Bool-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setDefaultTimeout",
          "package": "snap-server",
          "signature": "Int -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setDefaultTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setDefaultTimeout",
          "normalized": "Int-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Default Timeout",
          "signature": "Int-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setDefaultTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setErrorHandler",
          "package": "snap-server",
          "signature": "(SomeException -\u003e m ()) -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setErrorHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setErrorHandler",
          "normalized": "(SomeException-\u003ea())-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Error Handler",
          "signature": "(SomeException-\u003em())-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setErrorLog",
          "package": "snap-server",
          "signature": "ConfigLog -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setErrorLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setErrorLog",
          "normalized": "ConfigLog-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Error Log",
          "signature": "ConfigLog-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setErrorLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setHostname",
          "package": "snap-server",
          "signature": "ByteString -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setHostname",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setHostname",
          "normalized": "ByteString-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Hostname",
          "signature": "ByteString-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setHostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setLocale",
          "package": "snap-server",
          "signature": "String -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setLocale",
          "normalized": "String-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Locale",
          "signature": "String-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setOther",
          "package": "snap-server",
          "signature": "a -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setOther",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setOther",
          "normalized": "a-\u003eConfig b a-\u003eConfig b a",
          "package": "snap-server",
          "partial": "Other",
          "signature": "a-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setPort",
          "package": "snap-server",
          "signature": "Int -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setPort",
          "normalized": "Int-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Port",
          "signature": "Int-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setProxyType",
          "package": "snap-server",
          "signature": "ProxyType -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setProxyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setProxyType",
          "normalized": "ProxyType-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Proxy Type",
          "signature": "ProxyType-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setProxyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setSSLBind",
          "package": "snap-server",
          "signature": "ByteString -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setSSLBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setSSLBind",
          "normalized": "ByteString-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "SSLBind",
          "signature": "ByteString-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setSSLBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setSSLCert",
          "package": "snap-server",
          "signature": "FilePath -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setSSLCert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setSSLCert",
          "normalized": "FilePath-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "SSLCert",
          "signature": "FilePath-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setSSLCert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setSSLKey",
          "package": "snap-server",
          "signature": "FilePath -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setSSLKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setSSLKey",
          "normalized": "FilePath-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "SSLKey",
          "signature": "FilePath-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setSSLKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setSSLPort",
          "package": "snap-server",
          "signature": "Int -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setSSLPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setSSLPort",
          "normalized": "Int-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "SSLPort",
          "signature": "Int-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setSSLPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setStartupHook",
          "package": "snap-server",
          "signature": "(StartupInfo m a -\u003e IO ()) -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setStartupHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setStartupHook",
          "normalized": "(StartupInfo a b-\u003eIO())-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Startup Hook",
          "signature": "(StartupInfo m a-\u003eIO())-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setStartupHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Config",
          "name": "setVerbose",
          "package": "snap-server",
          "signature": "Bool -\u003e Config m a -\u003e Config m a",
          "source": "src/Snap-Internal-Http-Server-Config.html#setVerbose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Http Server Config",
          "module": "Snap.Http.Server.Config",
          "name": "setVerbose",
          "normalized": "Bool-\u003eConfig a b-\u003eConfig a b",
          "package": "snap-server",
          "partial": "Verbose",
          "signature": "Bool-\u003eConfig m a-\u003eConfig m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Snap HTTP server is a high performance, epoll-enabled, iteratee-based\n web server library written in Haskell. Together with the \u003ccode\u003esnap-core\u003c/code\u003e\n library upon which it depends, it provides a clean and efficient Haskell\n programming interface to the HTTP protocol.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Http.Server",
          "name": "Server",
          "package": "snap-server",
          "source": "src/Snap-Http-Server.html",
          "type": "module"
        },
        "index": {
          "description": "The Snap HTTP server is high performance epoll-enabled iteratee-based web server library written in Haskell Together with the snap-core library upon which it depends it provides clean and efficient Haskell programming interface to the HTTP protocol",
          "hierarchy": "Snap Http Server",
          "module": "Snap.Http.Server",
          "name": "Server",
          "package": "snap-server",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts serving HTTP requests using the given handler, with settings from\n the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e passed in. This function never returns; to shut down the HTTP\n server, kill the controlling thread.\n\u003c/p\u003e",
          "module": "Snap.Http.Server",
          "name": "httpServe",
          "package": "snap-server",
          "signature": "Config Snap a -\u003e Snap () -\u003e IO ()",
          "source": "src/Snap-Http-Server.html#httpServe",
          "type": "function"
        },
        "index": {
          "description": "Starts serving HTTP requests using the given handler with settings from the Config passed in This function never returns to shut down the HTTP server kill the controlling thread",
          "hierarchy": "Snap Http Server",
          "module": "Snap.Http.Server",
          "name": "httpServe",
          "normalized": "Config Snap a-\u003eSnap()-\u003eIO()",
          "package": "snap-server",
          "partial": "Serve",
          "signature": "Config Snap a-\u003eSnap()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#v:httpServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts serving HTTP using the given handler. The configuration is read\n from the options given on the command-line, as returned by\n \u003ccode\u003e\u003ca\u003ecommandLineConfig\u003c/a\u003e\u003c/code\u003e. This function never returns; to shut down the HTTP\n server, kill the controlling thread.\n\u003c/p\u003e",
          "module": "Snap.Http.Server",
          "name": "quickHttpServe",
          "package": "snap-server",
          "signature": "Snap () -\u003e IO ()",
          "source": "src/Snap-Http-Server.html#quickHttpServe",
          "type": "function"
        },
        "index": {
          "description": "Starts serving HTTP using the given handler The configuration is read from the options given on the command-line as returned by commandLineConfig This function never returns to shut down the HTTP server kill the controlling thread",
          "hierarchy": "Snap Http Server",
          "module": "Snap.Http.Server",
          "name": "quickHttpServe",
          "normalized": "Snap()-\u003eIO()",
          "package": "snap-server",
          "partial": "Http Serve",
          "signature": "Snap()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#v:quickHttpServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a string like \"en_US\", this sets the locale to \"en_US.UTF-8\".\n This doesn't work on Windows.\n\u003c/p\u003e",
          "module": "Snap.Http.Server",
          "name": "setUnicodeLocale",
          "package": "snap-server",
          "signature": "String -\u003e IO ()",
          "source": "src/Snap-Http-Server.html#setUnicodeLocale",
          "type": "function"
        },
        "index": {
          "description": "Given string like en US this sets the locale to en US.UTF-8 This doesn work on Windows",
          "hierarchy": "Snap Http Server",
          "module": "Snap.Http.Server",
          "name": "setUnicodeLocale",
          "normalized": "String-\u003eIO()",
          "package": "snap-server",
          "partial": "Unicode Locale",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#v:setUnicodeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts serving HTTP requests using the given handler. This function never\n returns; to shut down the HTTP server, kill the controlling thread.\n\u003c/p\u003e\u003cp\u003eThis function is like \u003ccode\u003e\u003ca\u003ehttpServe\u003c/a\u003e\u003c/code\u003e except it doesn't setup compression,\n reverse proxy address translation (via \u003ccode\u003e\u003ca\u003ebehindProxy\u003c/a\u003e\u003c/code\u003e), or\n the error handler; this allows it to be used from \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Http.Server",
          "name": "simpleHttpServe",
          "package": "snap-server",
          "signature": "Config m a -\u003e Snap () -\u003e IO ()",
          "source": "src/Snap-Http-Server.html#simpleHttpServe",
          "type": "function"
        },
        "index": {
          "description": "Starts serving HTTP requests using the given handler This function never returns to shut down the HTTP server kill the controlling thread This function is like httpServe except it doesn setup compression reverse proxy address translation via behindProxy or the error handler this allows it to be used from MonadSnap",
          "hierarchy": "Snap Http Server",
          "module": "Snap.Http.Server",
          "name": "simpleHttpServe",
          "normalized": "Config a b-\u003eSnap()-\u003eIO()",
          "package": "snap-server",
          "partial": "Http Serve",
          "signature": "Config m a-\u003eSnap()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#v:simpleHttpServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA short string describing the Snap server version\n\u003c/p\u003e",
          "module": "Snap.Http.Server",
          "name": "snapServerVersion",
          "package": "snap-server",
          "signature": "ByteString",
          "source": "src/Snap-Http-Server.html#snapServerVersion",
          "type": "function"
        },
        "index": {
          "description": "short string describing the Snap server version",
          "hierarchy": "Snap Http Server",
          "module": "Snap.Http.Server",
          "name": "snapServerVersion",
          "package": "snap-server",
          "partial": "Server Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#v:snapServerVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FastLogger",
          "name": "FastLogger",
          "package": "snap-server",
          "source": "src/System-FastLogger.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FastLogger",
          "module": "System.FastLogger",
          "name": "FastLogger",
          "package": "snap-server",
          "partial": "Fast Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds the state for a logger.\n\u003c/p\u003e",
          "module": "System.FastLogger",
          "name": "Logger",
          "package": "snap-server",
          "source": "src/System-FastLogger.html#Logger",
          "type": "data"
        },
        "index": {
          "description": "Holds the state for logger",
          "hierarchy": "System FastLogger",
          "module": "System.FastLogger",
          "name": "Logger",
          "package": "snap-server",
          "partial": "Logger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#t:Logger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepares a log message in \"combined\" format.\n\u003c/p\u003e",
          "module": "System.FastLogger",
          "name": "combinedLogEntry",
          "package": "snap-server",
          "signature": "ByteString-\u003e Maybe ByteString-\u003e ByteString-\u003e Int-\u003e Maybe Int64-\u003e Maybe ByteString-\u003e ByteString-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Prepares log message in combined format",
          "hierarchy": "System FastLogger",
          "module": "System.FastLogger",
          "name": "combinedLogEntry",
          "normalized": "ByteString-\u003eMaybe ByteString-\u003eByteString-\u003eInt-\u003eMaybe Int-\u003eMaybe ByteString-\u003eByteString-\u003eIO ByteString",
          "package": "snap-server",
          "partial": "Log Entry",
          "signature": "ByteString-\u003eMaybe ByteString-\u003eByteString-\u003eInt-\u003eMaybe Int-\u003eMaybe ByteString-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:combinedLogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends out a log message verbatim with a newline appended. Note:\n if you want a fancy log message you'll have to format it yourself\n (or use \u003ccode\u003e\u003ca\u003ecombinedLogEntry\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.FastLogger",
          "name": "logMsg",
          "package": "snap-server",
          "signature": "Logger -\u003e ByteString -\u003e IO ()",
          "source": "src/System-FastLogger.html#logMsg",
          "type": "function"
        },
        "index": {
          "description": "Sends out log message verbatim with newline appended Note if you want fancy log message you ll have to format it yourself or use combinedLogEntry",
          "hierarchy": "System FastLogger",
          "module": "System.FastLogger",
          "name": "logMsg",
          "normalized": "Logger-\u003eByteString-\u003eIO()",
          "package": "snap-server",
          "partial": "Msg",
          "signature": "Logger-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:logMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new logger, logging to the given file. If the file argument is\n \"-\", then log to stdout; if it's \"stderr\" then we log to stderr,\n otherwise we log to a regular file in append mode. The file is closed and\n re-opened every 15 minutes to facilitate external log rotation.\n\u003c/p\u003e",
          "module": "System.FastLogger",
          "name": "newLogger",
          "package": "snap-server",
          "signature": "FilePath-\u003e IO Logger",
          "type": "function"
        },
        "index": {
          "description": "Creates new logger logging to the given file If the file argument is then log to stdout if it stderr then we log to stderr otherwise we log to regular file in append mode The file is closed and re-opened every minutes to facilitate external log rotation",
          "hierarchy": "System FastLogger",
          "module": "System.FastLogger",
          "name": "newLogger",
          "normalized": "FilePath-\u003eIO Logger",
          "package": "snap-server",
          "partial": "Logger",
          "signature": "FilePath-\u003eIO Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:newLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewLogger\u003c/a\u003e\u003c/code\u003e, but uses a custom error action if the logger needs to\n print an error message of its own (for instance, if it can't open the\n output file.)\n\u003c/p\u003e",
          "module": "System.FastLogger",
          "name": "newLoggerWithCustomErrorFunction",
          "package": "snap-server",
          "signature": "(ByteString -\u003e IO ())-\u003e FilePath-\u003e IO Logger",
          "type": "function"
        },
        "index": {
          "description": "Like newLogger but uses custom error action if the logger needs to print an error message of its own for instance if it can open the output file",
          "hierarchy": "System FastLogger",
          "module": "System.FastLogger",
          "name": "newLoggerWithCustomErrorFunction",
          "normalized": "(ByteString-\u003eIO())-\u003eFilePath-\u003eIO Logger",
          "package": "snap-server",
          "partial": "Logger With Custom Error Function",
          "signature": "(ByteString-\u003eIO())-\u003eFilePath-\u003eIO Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:newLoggerWithCustomErrorFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKills a logger thread, causing any unwritten contents to be\n flushed out to disk\n\u003c/p\u003e",
          "module": "System.FastLogger",
          "name": "stopLogger",
          "package": "snap-server",
          "signature": "Logger -\u003e IO ()",
          "source": "src/System-FastLogger.html#stopLogger",
          "type": "function"
        },
        "index": {
          "description": "Kills logger thread causing any unwritten contents to be flushed out to disk",
          "hierarchy": "System FastLogger",
          "module": "System.FastLogger",
          "name": "stopLogger",
          "normalized": "Logger-\u003eIO()",
          "package": "snap-server",
          "partial": "Logger",
          "signature": "Logger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:stopLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepares a log message with the time prepended.\n\u003c/p\u003e",
          "module": "System.FastLogger",
          "name": "timestampedLogEntry",
          "package": "snap-server",
          "signature": "ByteString -\u003e IO ByteString",
          "source": "src/System-FastLogger.html#timestampedLogEntry",
          "type": "function"
        },
        "index": {
          "description": "Prepares log message with the time prepended",
          "hierarchy": "System FastLogger",
          "module": "System.FastLogger",
          "name": "timestampedLogEntry",
          "normalized": "ByteString-\u003eIO ByteString",
          "package": "snap-server",
          "partial": "Log Entry",
          "signature": "ByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:timestampedLogEntry"
      }
    }
  ]
]