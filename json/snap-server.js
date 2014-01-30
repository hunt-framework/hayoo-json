[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e datatype, which you can use to configure the\nSnap HTTP server.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "module",
        "fct-source": "src/Snap-Http-Server-Config.html",
        "fct-type": "module",
        "title": "Config"
      },
      "index": {
        "description": "This module exports the Config datatype which you can use to configure the Snap HTTP server",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "Config",
        "normalized": "",
        "package": "snap-server",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eA record type which represents partial configurations (for \u003ccode\u003ehttpServe\u003c/code\u003e)\n by wrapping all of its fields in a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e. Values of this type are usually\n constructed via its \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance by doing something like:\n\u003c/p\u003e\u003cpre\u003e setPort 1234 mempty\n\u003c/pre\u003e\u003cp\u003eAny fields which are unspecified in the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e passed to \u003ccode\u003ehttpServe\u003c/code\u003e (and\n this is the norm) are filled in with default values from \u003ccode\u003e\u003ca\u003edefaultConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "data",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "record type which represents partial configurations for httpServe by wrapping all of its fields in Maybe Values of this type are usually constructed via its Monoid instance by doing something like setPort mempty Any fields which are unspecified in the Config passed to httpServe and this is the norm are filled in with default values from defaultConfig",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "Config",
        "normalized": "",
        "package": "snap-server",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#t:ConfigLog",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing the configuration of a logging target\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "data",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#ConfigLog",
        "fct-type": "data",
        "title": "ConfigLog"
      },
      "index": {
        "description": "Data type representing the configuration of logging target",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "ConfigLog",
        "normalized": "",
        "package": "snap-server",
        "partial": "Config Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#t:StartupInfo",
      "description": {
        "fct-descr": "\u003cp\u003eArguments passed to \u003ccode\u003e\u003ca\u003esetStartupHook\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "data",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#StartupInfo",
        "fct-type": "data",
        "title": "StartupInfo"
      },
      "index": {
        "description": "Arguments passed to setStartupHook",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "StartupInfo",
        "normalized": "",
        "package": "snap-server",
        "partial": "Startup Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:ConfigFileLog",
      "description": {
        "fct-descr": "\u003cp\u003elog to text file\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "ConfigFileLog FilePath",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#ConfigLog",
        "fct-type": "function",
        "title": "ConfigFileLog"
      },
      "index": {
        "description": "log to text file",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "ConfigFileLog",
        "normalized": "",
        "package": "snap-server",
        "partial": "Config File Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:ConfigIoLog",
      "description": {
        "fct-descr": "\u003cp\u003elog custom IO handler\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "ConfigIoLog (ByteString -\u003e IO ())",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#ConfigLog",
        "fct-type": "function",
        "title": "ConfigIoLog"
      },
      "index": {
        "description": "log custom IO handler",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "ConfigIoLog",
        "normalized": "ConfigIoLog(ByteString-\u003eIO())",
        "package": "snap-server",
        "partial": "Config Io Log",
        "signature": "ConfigIoLog(ByteString-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:ConfigNoLog",
      "description": {
        "fct-descr": "\u003cp\u003eno logging\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "ConfigNoLog",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#ConfigLog",
        "fct-type": "function",
        "title": "ConfigNoLog"
      },
      "index": {
        "description": "no logging",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "ConfigNoLog",
        "normalized": "",
        "package": "snap-server",
        "partial": "Config No Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:commandLineConfig",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e obtained from parsing command-line options, using the\n default Snap \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e set.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, the locale is read from the \u003ccode\u003eLANG\u003c/code\u003e environment variable.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a-\u003e IO (Config m a)",
        "fct-type": "function",
        "title": "commandLineConfig"
      },
      "index": {
        "description": "Returns Config obtained from parsing command-line options using the default Snap OptDescr set On Unix systems the locale is read from the LANG environment variable",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "commandLineConfig",
        "normalized": "Config a b-\u003eIO(Config a b)",
        "package": "snap-server",
        "partial": "Line Config",
        "signature": "Config m a-\u003eIO(Config m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:completeConfig",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e IO (Config m a)",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#completeConfig",
        "fct-type": "function",
        "title": "completeConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "completeConfig",
        "normalized": "Config a b-\u003eIO(Config a b)",
        "package": "snap-server",
        "partial": "Config",
        "signature": "Config m a-\u003eIO(Config m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eThese are the default values for the options\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "These are the default values for the options",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "defaultConfig",
        "normalized": "",
        "package": "snap-server",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:emptyConfig",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a completely empty \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e. Equivalent to \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e from\n \u003ccode\u003eConfig'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#emptyConfig",
        "fct-type": "function",
        "title": "emptyConfig"
      },
      "index": {
        "description": "Returns completely empty Config Equivalent to mempty from Config Monoid instance",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "emptyConfig",
        "normalized": "",
        "package": "snap-server",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:extendedCommandLineConfig",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e obtained from parsing command-line options, using the\n default Snap \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e set as well as a list of user OptDescrs. User\n OptDescrs use the \"other\" field (accessible using \u003ccode\u003e\u003ca\u003egetOther\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003esetOther\u003c/a\u003e\u003c/code\u003e) to store additional command-line option state. These are\n combined using a user-defined combining function.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, the locale is read from the \u003ccode\u003eLANG\u003c/code\u003e environment variable.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "[OptDescr (Maybe (Config m a))]-\u003e (a -\u003e a -\u003e a)-\u003e Config m a-\u003e IO (Config m a)",
        "fct-type": "function",
        "title": "extendedCommandLineConfig"
      },
      "index": {
        "description": "Returns Config obtained from parsing command-line options using the default Snap OptDescr set as well as list of user OptDescrs User OptDescrs use the other field accessible using getOther and setOther to store additional command-line option state These are combined using user-defined combining function On Unix systems the locale is read from the LANG environment variable",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "extendedCommandLineConfig",
        "normalized": "[OptDescr(Maybe(Config a b))]-\u003e(b-\u003eb-\u003eb)-\u003eConfig a b-\u003eIO(Config a b)",
        "package": "snap-server",
        "partial": "Command Line Config",
        "signature": "[OptDescr(Maybe(Config m a))]-\u003e(a-\u003ea-\u003ea)-\u003eConfig m a-\u003eIO(Config m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:fmapOpt",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "(a -\u003e b) -\u003e OptDescr a -\u003e OptDescr b",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#fmapOpt",
        "fct-type": "function",
        "title": "fmapOpt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "fmapOpt",
        "normalized": "(a-\u003eb)-\u003eOptDescr a-\u003eOptDescr b",
        "package": "snap-server",
        "partial": "Opt",
        "signature": "(a-\u003eb)-\u003eOptDescr a-\u003eOptDescr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getAccessLog",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the access log\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe ConfigLog",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getAccessLog",
        "fct-type": "function",
        "title": "getAccessLog"
      },
      "index": {
        "description": "Path to the access log",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getAccessLog",
        "normalized": "Config a b-\u003eMaybe ConfigLog",
        "package": "snap-server",
        "partial": "Access Log",
        "signature": "Config m a-\u003eMaybe ConfigLog"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getBind",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the address to bind to (for http)\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe ByteString",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getBind",
        "fct-type": "function",
        "title": "getBind"
      },
      "index": {
        "description": "Returns the address to bind to for http",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getBind",
        "normalized": "Config a b-\u003eMaybe ByteString",
        "package": "snap-server",
        "partial": "Bind",
        "signature": "Config m a-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getCompression",
      "description": {
        "fct-descr": "\u003cp\u003eIf set and set to True, compression is turned on when applicable\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe Bool",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getCompression",
        "fct-type": "function",
        "title": "getCompression"
      },
      "index": {
        "description": "If set and set to True compression is turned on when applicable",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getCompression",
        "normalized": "Config a b-\u003eMaybe Bool",
        "package": "snap-server",
        "partial": "Compression",
        "signature": "Config m a-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getDefaultTimeout",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe Int",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getDefaultTimeout",
        "fct-type": "function",
        "title": "getDefaultTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getDefaultTimeout",
        "normalized": "Config a b-\u003eMaybe Int",
        "package": "snap-server",
        "partial": "Default Timeout",
        "signature": "Config m a-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getErrorHandler",
      "description": {
        "fct-descr": "\u003cp\u003eA MonadSnap action to handle 500 errors\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe (SomeException -\u003e m ())",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getErrorHandler",
        "fct-type": "function",
        "title": "getErrorHandler"
      },
      "index": {
        "description": "MonadSnap action to handle errors",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getErrorHandler",
        "normalized": "Config a b-\u003eMaybe(SomeException-\u003ea())",
        "package": "snap-server",
        "partial": "Error Handler",
        "signature": "Config m a-\u003eMaybe(SomeException-\u003em())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getErrorLog",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the error log\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe ConfigLog",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getErrorLog",
        "fct-type": "function",
        "title": "getErrorLog"
      },
      "index": {
        "description": "Path to the error log",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getErrorLog",
        "normalized": "Config a b-\u003eMaybe ConfigLog",
        "package": "snap-server",
        "partial": "Error Log",
        "signature": "Config m a-\u003eMaybe ConfigLog"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getHostname",
      "description": {
        "fct-descr": "\u003cp\u003eThe hostname of the HTTP server. This field has the same format as an HTTP\n \u003ccode\u003eHost\u003c/code\u003e header; if a \u003ccode\u003eHost\u003c/code\u003e header came in with the request, we use that,\n otherwise we default to this value specified in the configuration.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe ByteString",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getHostname",
        "fct-type": "function",
        "title": "getHostname"
      },
      "index": {
        "description": "The hostname of the HTTP server This field has the same format as an HTTP Host header if Host header came in with the request we use that otherwise we default to this value specified in the configuration",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getHostname",
        "normalized": "Config a b-\u003eMaybe ByteString",
        "package": "snap-server",
        "partial": "Hostname",
        "signature": "Config m a-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getLocale",
      "description": {
        "fct-descr": "\u003cp\u003eGets the locale to use. Locales are used on Unix only, to set the\n \u003ccode\u003eLANG\u003c/code\u003e/\u003ccode\u003eLC_ALL\u003c/code\u003e/etc. environment variable. For instance if you set the\n locale to \"\u003ccode\u003een_US\u003c/code\u003e\", we'll set the relevant environment variables to\n \"\u003ccode\u003een_US.UTF-8\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe String",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getLocale",
        "fct-type": "function",
        "title": "getLocale"
      },
      "index": {
        "description": "Gets the locale to use Locales are used on Unix only to set the LANG LC ALL etc environment variable For instance if you set the locale to en US we ll set the relevant environment variables to en US.UTF-8",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getLocale",
        "normalized": "Config a b-\u003eMaybe String",
        "package": "snap-server",
        "partial": "Locale",
        "signature": "Config m a-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getOther",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getOther",
        "fct-type": "function",
        "title": "getOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getOther",
        "normalized": "Config a b-\u003eMaybe b",
        "package": "snap-server",
        "partial": "Other",
        "signature": "Config m a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getPort",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the port to listen on (for http)\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe Int",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getPort",
        "fct-type": "function",
        "title": "getPort"
      },
      "index": {
        "description": "Returns the port to listen on for http",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getPort",
        "normalized": "Config a b-\u003eMaybe Int",
        "package": "snap-server",
        "partial": "Port",
        "signature": "Config m a-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getProxyType",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe ProxyType",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getProxyType",
        "fct-type": "function",
        "title": "getProxyType"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getProxyType",
        "normalized": "Config a b-\u003eMaybe ProxyType",
        "package": "snap-server",
        "partial": "Proxy Type",
        "signature": "Config m a-\u003eMaybe ProxyType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getSSLBind",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the address to bind to (for https)\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe ByteString",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getSSLBind",
        "fct-type": "function",
        "title": "getSSLBind"
      },
      "index": {
        "description": "Returns the address to bind to for https",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getSSLBind",
        "normalized": "Config a b-\u003eMaybe ByteString",
        "package": "snap-server",
        "partial": "SSLBind",
        "signature": "Config m a-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getSSLCert",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the SSL certificate file\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe FilePath",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getSSLCert",
        "fct-type": "function",
        "title": "getSSLCert"
      },
      "index": {
        "description": "Path to the SSL certificate file",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getSSLCert",
        "normalized": "Config a b-\u003eMaybe FilePath",
        "package": "snap-server",
        "partial": "SSLCert",
        "signature": "Config m a-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getSSLKey",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the SSL key file\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe FilePath",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getSSLKey",
        "fct-type": "function",
        "title": "getSSLKey"
      },
      "index": {
        "description": "Path to the SSL key file",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getSSLKey",
        "normalized": "Config a b-\u003eMaybe FilePath",
        "package": "snap-server",
        "partial": "SSLKey",
        "signature": "Config m a-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getSSLPort",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the port to listen on (for https)\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe Int",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getSSLPort",
        "fct-type": "function",
        "title": "getSSLPort"
      },
      "index": {
        "description": "Returns the port to listen on for https",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getSSLPort",
        "normalized": "Config a b-\u003eMaybe Int",
        "package": "snap-server",
        "partial": "SSLPort",
        "signature": "Config m a-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getStartupConfig",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "StartupInfo m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getStartupConfig",
        "fct-type": "function",
        "title": "getStartupConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getStartupConfig",
        "normalized": "StartupInfo a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Startup Config",
        "signature": "StartupInfo m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getStartupHook",
      "description": {
        "fct-descr": "\u003cp\u003eA startup hook is run after the server initializes but before user request\n processing begins. The server passes, through a \u003ccode\u003e\u003ca\u003eStartupInfo\u003c/a\u003e\u003c/code\u003e object, the\n startup hook a list of the sockets it is listening on and the final \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e\n object completed after command-line processing.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe (StartupInfo m a -\u003e IO ())",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getStartupHook",
        "fct-type": "function",
        "title": "getStartupHook"
      },
      "index": {
        "description": "startup hook is run after the server initializes but before user request processing begins The server passes through StartupInfo object the startup hook list of the sockets it is listening on and the final Config object completed after command-line processing",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getStartupHook",
        "normalized": "Config a b-\u003eMaybe(StartupInfo a b-\u003eIO())",
        "package": "snap-server",
        "partial": "Startup Hook",
        "signature": "Config m a-\u003eMaybe(StartupInfo m a-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getStartupSockets",
      "description": {
        "fct-descr": "\u003cp\u003eThe the \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003es opened by the server. There will be two \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003es for SSL connections, and one otherwise.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "StartupInfo m a -\u003e [Socket]",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getStartupSockets",
        "fct-type": "function",
        "title": "getStartupSockets"
      },
      "index": {
        "description": "The the Socket opened by the server There will be two Socket for SSL connections and one otherwise",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getStartupSockets",
        "normalized": "StartupInfo a b-\u003e[Socket]",
        "package": "snap-server",
        "partial": "Startup Sockets",
        "signature": "StartupInfo m a-\u003e[Socket]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:getVerbose",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to write server status updates to stderr\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Maybe Bool",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#getVerbose",
        "fct-type": "function",
        "title": "getVerbose"
      },
      "index": {
        "description": "Whether to write server status updates to stderr",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "getVerbose",
        "normalized": "Config a b-\u003eMaybe Bool",
        "package": "snap-server",
        "partial": "Verbose",
        "signature": "Config m a-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:optDescrs",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a description of the snap command line options suitable for use\n with \u003ca\u003eSystem.Console.GetOpt\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Config m a-\u003e [OptDescr (Maybe (Config m a))]",
        "fct-type": "function",
        "title": "optDescrs"
      },
      "index": {
        "description": "Returns description of the snap command line options suitable for use with System.Console.GetOpt",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "optDescrs",
        "normalized": "Config a b-\u003e[OptDescr(Maybe(Config a b))]",
        "package": "snap-server",
        "partial": "Descrs",
        "signature": "Config m a-\u003e[OptDescr(Maybe(Config m a))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setAccessLog",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "ConfigLog -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setAccessLog",
        "fct-type": "function",
        "title": "setAccessLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setAccessLog",
        "normalized": "ConfigLog-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Access Log",
        "signature": "ConfigLog-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setBind",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "ByteString -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setBind",
        "fct-type": "function",
        "title": "setBind"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setBind",
        "normalized": "ByteString-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Bind",
        "signature": "ByteString-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setCompression",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Bool -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setCompression",
        "fct-type": "function",
        "title": "setCompression"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setCompression",
        "normalized": "Bool-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Compression",
        "signature": "Bool-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setDefaultTimeout",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Int -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setDefaultTimeout",
        "fct-type": "function",
        "title": "setDefaultTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setDefaultTimeout",
        "normalized": "Int-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Default Timeout",
        "signature": "Int-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setErrorHandler",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "(SomeException -\u003e m ()) -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setErrorHandler",
        "fct-type": "function",
        "title": "setErrorHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setErrorHandler",
        "normalized": "(SomeException-\u003ea())-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Error Handler",
        "signature": "(SomeException-\u003em())-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setErrorLog",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "ConfigLog -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setErrorLog",
        "fct-type": "function",
        "title": "setErrorLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setErrorLog",
        "normalized": "ConfigLog-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Error Log",
        "signature": "ConfigLog-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setHostname",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "ByteString -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setHostname",
        "fct-type": "function",
        "title": "setHostname"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setHostname",
        "normalized": "ByteString-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Hostname",
        "signature": "ByteString-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setLocale",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "String -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setLocale",
        "fct-type": "function",
        "title": "setLocale"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setLocale",
        "normalized": "String-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Locale",
        "signature": "String-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setOther",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "a -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setOther",
        "fct-type": "function",
        "title": "setOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setOther",
        "normalized": "a-\u003eConfig b a-\u003eConfig b a",
        "package": "snap-server",
        "partial": "Other",
        "signature": "a-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setPort",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Int -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setPort",
        "fct-type": "function",
        "title": "setPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setPort",
        "normalized": "Int-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Port",
        "signature": "Int-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setProxyType",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "ProxyType -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setProxyType",
        "fct-type": "function",
        "title": "setProxyType"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setProxyType",
        "normalized": "ProxyType-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Proxy Type",
        "signature": "ProxyType-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setSSLBind",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "ByteString -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setSSLBind",
        "fct-type": "function",
        "title": "setSSLBind"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setSSLBind",
        "normalized": "ByteString-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "SSLBind",
        "signature": "ByteString-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setSSLCert",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "FilePath -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setSSLCert",
        "fct-type": "function",
        "title": "setSSLCert"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setSSLCert",
        "normalized": "FilePath-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "SSLCert",
        "signature": "FilePath-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setSSLKey",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "FilePath -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setSSLKey",
        "fct-type": "function",
        "title": "setSSLKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setSSLKey",
        "normalized": "FilePath-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "SSLKey",
        "signature": "FilePath-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setSSLPort",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Int -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setSSLPort",
        "fct-type": "function",
        "title": "setSSLPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setSSLPort",
        "normalized": "Int-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "SSLPort",
        "signature": "Int-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setStartupHook",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "(StartupInfo m a -\u003e IO ()) -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setStartupHook",
        "fct-type": "function",
        "title": "setStartupHook"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setStartupHook",
        "normalized": "(StartupInfo a b-\u003eIO())-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Startup Hook",
        "signature": "(StartupInfo m a-\u003eIO())-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server-Config.html#v:setVerbose",
      "description": {
        "fct-module": "Snap.Http.Server.Config",
        "fct-package": "snap-server",
        "fct-signature": "Bool -\u003e Config m a -\u003e Config m a",
        "fct-source": "src/Snap-Internal-Http-Server-Config.html#setVerbose",
        "fct-type": "function",
        "title": "setVerbose"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Http Server Config",
        "module": "Snap.Http.Server.Config",
        "name": "setVerbose",
        "normalized": "Bool-\u003eConfig a b-\u003eConfig a b",
        "package": "snap-server",
        "partial": "Verbose",
        "signature": "Bool-\u003eConfig m a-\u003eConfig m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Snap HTTP server is a high performance, epoll-enabled, iteratee-based\n web server library written in Haskell. Together with the \u003ccode\u003esnap-core\u003c/code\u003e\n library upon which it depends, it provides a clean and efficient Haskell\n programming interface to the HTTP protocol.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Http.Server",
        "fct-package": "snap-server",
        "fct-signature": "module",
        "fct-source": "src/Snap-Http-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "The Snap HTTP server is high performance epoll-enabled iteratee-based web server library written in Haskell Together with the snap-core library upon which it depends it provides clean and efficient Haskell programming interface to the HTTP protocol",
        "hierarchy": "Snap Http Server",
        "module": "Snap.Http.Server",
        "name": "Server",
        "normalized": "",
        "package": "snap-server",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#v:httpServe",
      "description": {
        "fct-descr": "\u003cp\u003eStarts serving HTTP requests using the given handler, with settings from\n the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e passed in. This function never returns; to shut down the HTTP\n server, kill the controlling thread.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server",
        "fct-package": "snap-server",
        "fct-signature": "Config Snap a -\u003e Snap () -\u003e IO ()",
        "fct-source": "src/Snap-Http-Server.html#httpServe",
        "fct-type": "function",
        "title": "httpServe"
      },
      "index": {
        "description": "Starts serving HTTP requests using the given handler with settings from the Config passed in This function never returns to shut down the HTTP server kill the controlling thread",
        "hierarchy": "Snap Http Server",
        "module": "Snap.Http.Server",
        "name": "httpServe",
        "normalized": "Config Snap a-\u003eSnap()-\u003eIO()",
        "package": "snap-server",
        "partial": "Serve",
        "signature": "Config Snap a-\u003eSnap()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#v:quickHttpServe",
      "description": {
        "fct-descr": "\u003cp\u003eStarts serving HTTP using the given handler. The configuration is read\n from the options given on the command-line, as returned by\n \u003ccode\u003e\u003ca\u003ecommandLineConfig\u003c/a\u003e\u003c/code\u003e. This function never returns; to shut down the HTTP\n server, kill the controlling thread.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server",
        "fct-package": "snap-server",
        "fct-signature": "Snap () -\u003e IO ()",
        "fct-source": "src/Snap-Http-Server.html#quickHttpServe",
        "fct-type": "function",
        "title": "quickHttpServe"
      },
      "index": {
        "description": "Starts serving HTTP using the given handler The configuration is read from the options given on the command-line as returned by commandLineConfig This function never returns to shut down the HTTP server kill the controlling thread",
        "hierarchy": "Snap Http Server",
        "module": "Snap.Http.Server",
        "name": "quickHttpServe",
        "normalized": "Snap()-\u003eIO()",
        "package": "snap-server",
        "partial": "Http Serve",
        "signature": "Snap()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#v:setUnicodeLocale",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a string like \"en_US\", this sets the locale to \"en_US.UTF-8\".\n This doesn't work on Windows.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server",
        "fct-package": "snap-server",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Snap-Http-Server.html#setUnicodeLocale",
        "fct-type": "function",
        "title": "setUnicodeLocale"
      },
      "index": {
        "description": "Given string like en US this sets the locale to en US.UTF-8 This doesn work on Windows",
        "hierarchy": "Snap Http Server",
        "module": "Snap.Http.Server",
        "name": "setUnicodeLocale",
        "normalized": "String-\u003eIO()",
        "package": "snap-server",
        "partial": "Unicode Locale",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#v:simpleHttpServe",
      "description": {
        "fct-descr": "\u003cp\u003eStarts serving HTTP requests using the given handler. This function never\n returns; to shut down the HTTP server, kill the controlling thread.\n\u003c/p\u003e\u003cp\u003eThis function is like \u003ccode\u003e\u003ca\u003ehttpServe\u003c/a\u003e\u003c/code\u003e except it doesn't setup compression,\n reverse proxy address translation (via \u003ccode\u003e\u003ca\u003ebehindProxy\u003c/a\u003e\u003c/code\u003e), or\n the error handler; this allows it to be used from \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server",
        "fct-package": "snap-server",
        "fct-signature": "Config m a -\u003e Snap () -\u003e IO ()",
        "fct-source": "src/Snap-Http-Server.html#simpleHttpServe",
        "fct-type": "function",
        "title": "simpleHttpServe"
      },
      "index": {
        "description": "Starts serving HTTP requests using the given handler This function never returns to shut down the HTTP server kill the controlling thread This function is like httpServe except it doesn setup compression reverse proxy address translation via behindProxy or the error handler this allows it to be used from MonadSnap",
        "hierarchy": "Snap Http Server",
        "module": "Snap.Http.Server",
        "name": "simpleHttpServe",
        "normalized": "Config a b-\u003eSnap()-\u003eIO()",
        "package": "snap-server",
        "partial": "Http Serve",
        "signature": "Config m a-\u003eSnap()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/Snap-Http-Server.html#v:snapServerVersion",
      "description": {
        "fct-descr": "\u003cp\u003eA short string describing the Snap server version\n\u003c/p\u003e",
        "fct-module": "Snap.Http.Server",
        "fct-package": "snap-server",
        "fct-signature": "ByteString",
        "fct-source": "src/Snap-Http-Server.html#snapServerVersion",
        "fct-type": "function",
        "title": "snapServerVersion"
      },
      "index": {
        "description": "short string describing the Snap server version",
        "hierarchy": "Snap Http Server",
        "module": "Snap.Http.Server",
        "name": "snapServerVersion",
        "normalized": "",
        "package": "snap-server",
        "partial": "Server Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#",
      "description": {
        "fct-module": "System.FastLogger",
        "fct-package": "snap-server",
        "fct-signature": "module",
        "fct-source": "src/System-FastLogger.html",
        "fct-type": "module",
        "title": "FastLogger"
      },
      "index": {
        "description": "",
        "hierarchy": "System FastLogger",
        "module": "System.FastLogger",
        "name": "FastLogger",
        "normalized": "",
        "package": "snap-server",
        "partial": "Fast Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#t:Logger",
      "description": {
        "fct-descr": "\u003cp\u003eHolds the state for a logger.\n\u003c/p\u003e",
        "fct-module": "System.FastLogger",
        "fct-package": "snap-server",
        "fct-signature": "data",
        "fct-source": "src/System-FastLogger.html#Logger",
        "fct-type": "data",
        "title": "Logger"
      },
      "index": {
        "description": "Holds the state for logger",
        "hierarchy": "System FastLogger",
        "module": "System.FastLogger",
        "name": "Logger",
        "normalized": "",
        "package": "snap-server",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:combinedLogEntry",
      "description": {
        "fct-descr": "\u003cp\u003ePrepares a log message in \"combined\" format.\n\u003c/p\u003e",
        "fct-module": "System.FastLogger",
        "fct-package": "snap-server",
        "fct-signature": "ByteString-\u003e Maybe ByteString-\u003e ByteString-\u003e Int-\u003e Maybe Int64-\u003e Maybe ByteString-\u003e ByteString-\u003e IO ByteString",
        "fct-type": "function",
        "title": "combinedLogEntry"
      },
      "index": {
        "description": "Prepares log message in combined format",
        "hierarchy": "System FastLogger",
        "module": "System.FastLogger",
        "name": "combinedLogEntry",
        "normalized": "ByteString-\u003eMaybe ByteString-\u003eByteString-\u003eInt-\u003eMaybe Int-\u003eMaybe ByteString-\u003eByteString-\u003eIO ByteString",
        "package": "snap-server",
        "partial": "Log Entry",
        "signature": "ByteString-\u003eMaybe ByteString-\u003eByteString-\u003eInt-\u003eMaybe Int-\u003eMaybe ByteString-\u003eByteString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:logMsg",
      "description": {
        "fct-descr": "\u003cp\u003eSends out a log message verbatim with a newline appended. Note:\n if you want a fancy log message you'll have to format it yourself\n (or use \u003ccode\u003e\u003ca\u003ecombinedLogEntry\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.FastLogger",
        "fct-package": "snap-server",
        "fct-signature": "Logger -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-FastLogger.html#logMsg",
        "fct-type": "function",
        "title": "logMsg"
      },
      "index": {
        "description": "Sends out log message verbatim with newline appended Note if you want fancy log message you ll have to format it yourself or use combinedLogEntry",
        "hierarchy": "System FastLogger",
        "module": "System.FastLogger",
        "name": "logMsg",
        "normalized": "Logger-\u003eByteString-\u003eIO()",
        "package": "snap-server",
        "partial": "Msg",
        "signature": "Logger-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:newLogger",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new logger, logging to the given file. If the file argument is\n \"-\", then log to stdout; if it's \"stderr\" then we log to stderr,\n otherwise we log to a regular file in append mode. The file is closed and\n re-opened every 15 minutes to facilitate external log rotation.\n\u003c/p\u003e",
        "fct-module": "System.FastLogger",
        "fct-package": "snap-server",
        "fct-signature": "FilePath-\u003e IO Logger",
        "fct-type": "function",
        "title": "newLogger"
      },
      "index": {
        "description": "Creates new logger logging to the given file If the file argument is then log to stdout if it stderr then we log to stderr otherwise we log to regular file in append mode The file is closed and re-opened every minutes to facilitate external log rotation",
        "hierarchy": "System FastLogger",
        "module": "System.FastLogger",
        "name": "newLogger",
        "normalized": "FilePath-\u003eIO Logger",
        "package": "snap-server",
        "partial": "Logger",
        "signature": "FilePath-\u003eIO Logger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:newLoggerWithCustomErrorFunction",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewLogger\u003c/a\u003e\u003c/code\u003e, but uses a custom error action if the logger needs to\n print an error message of its own (for instance, if it can't open the\n output file.)\n\u003c/p\u003e",
        "fct-module": "System.FastLogger",
        "fct-package": "snap-server",
        "fct-signature": "(ByteString -\u003e IO ())-\u003e FilePath-\u003e IO Logger",
        "fct-type": "function",
        "title": "newLoggerWithCustomErrorFunction"
      },
      "index": {
        "description": "Like newLogger but uses custom error action if the logger needs to print an error message of its own for instance if it can open the output file",
        "hierarchy": "System FastLogger",
        "module": "System.FastLogger",
        "name": "newLoggerWithCustomErrorFunction",
        "normalized": "(ByteString-\u003eIO())-\u003eFilePath-\u003eIO Logger",
        "package": "snap-server",
        "partial": "Logger With Custom Error Function",
        "signature": "(ByteString-\u003eIO())-\u003eFilePath-\u003eIO Logger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:stopLogger",
      "description": {
        "fct-descr": "\u003cp\u003eKills a logger thread, causing any unwritten contents to be\n flushed out to disk\n\u003c/p\u003e",
        "fct-module": "System.FastLogger",
        "fct-package": "snap-server",
        "fct-signature": "Logger -\u003e IO ()",
        "fct-source": "src/System-FastLogger.html#stopLogger",
        "fct-type": "function",
        "title": "stopLogger"
      },
      "index": {
        "description": "Kills logger thread causing any unwritten contents to be flushed out to disk",
        "hierarchy": "System FastLogger",
        "module": "System.FastLogger",
        "name": "stopLogger",
        "normalized": "Logger-\u003eIO()",
        "package": "snap-server",
        "partial": "Logger",
        "signature": "Logger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-server/docs/System-FastLogger.html#v:timestampedLogEntry",
      "description": {
        "fct-descr": "\u003cp\u003ePrepares a log message with the time prepended.\n\u003c/p\u003e",
        "fct-module": "System.FastLogger",
        "fct-package": "snap-server",
        "fct-signature": "ByteString -\u003e IO ByteString",
        "fct-source": "src/System-FastLogger.html#timestampedLogEntry",
        "fct-type": "function",
        "title": "timestampedLogEntry"
      },
      "index": {
        "description": "Prepares log message with the time prepended",
        "hierarchy": "System FastLogger",
        "module": "System.FastLogger",
        "name": "timestampedLogEntry",
        "normalized": "ByteString-\u003eIO ByteString",
        "package": "snap-server",
        "partial": "Log Entry",
        "signature": "ByteString-\u003eIO ByteString"
      }
    }
  }
]