[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#",
      "description": {
        "fct-module": "Network.HTTP.Server.HtmlForm",
        "fct-package": "http-server",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Server-HtmlForm.html",
        "fct-type": "module",
        "title": "HtmlForm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server HtmlForm",
        "module": "Network.HTTP.Server.HtmlForm",
        "name": "HtmlForm",
        "normalized": "",
        "package": "http-server",
        "partial": "Html Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#t:FormFields",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstraction of a map mapping form fields to their values.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.HtmlForm",
        "fct-package": "http-server",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Server-HtmlForm.html#FormFields",
        "fct-type": "data",
        "title": "FormFields"
      },
      "index": {
        "description": "An abstraction of map mapping form fields to their values",
        "hierarchy": "Network HTTP Server HtmlForm",
        "module": "Network.HTTP.Server.HtmlForm",
        "name": "FormFields",
        "normalized": "",
        "package": "http-server",
        "partial": "Form Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:fieldNames",
      "description": {
        "fct-descr": "\u003cp\u003eThe names of the fields that were posted.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.HtmlForm",
        "fct-package": "http-server",
        "fct-signature": "FormFields -\u003e [String]",
        "fct-source": "src/Network-HTTP-Server-HtmlForm.html#fieldNames",
        "fct-type": "function",
        "title": "fieldNames"
      },
      "index": {
        "description": "The names of the fields that were posted",
        "hierarchy": "Network HTTP Server HtmlForm",
        "module": "Network.HTTP.Server.HtmlForm",
        "name": "fieldNames",
        "normalized": "FormFields-\u003e[String]",
        "package": "http-server",
        "partial": "Names",
        "signature": "FormFields-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:fromRequest",
      "description": {
        "fct-descr": "\u003cp\u003eTry to parse the body of a request.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.HtmlForm",
        "fct-package": "http-server",
        "fct-signature": "Request String -\u003e Maybe FormFields",
        "fct-source": "src/Network-HTTP-Server-HtmlForm.html#fromRequest",
        "fct-type": "function",
        "title": "fromRequest"
      },
      "index": {
        "description": "Try to parse the body of request",
        "hierarchy": "Network HTTP Server HtmlForm",
        "module": "Network.HTTP.Server.HtmlForm",
        "name": "fromRequest",
        "normalized": "Request String-\u003eMaybe FormFields",
        "package": "http-server",
        "partial": "Request",
        "signature": "Request String-\u003eMaybe FormFields"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:hasField",
      "description": {
        "fct-descr": "\u003cp\u003eDo we have the given field?\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.HtmlForm",
        "fct-package": "http-server",
        "fct-signature": "FormFields -\u003e String -\u003e Bool",
        "fct-source": "src/Network-HTTP-Server-HtmlForm.html#hasField",
        "fct-type": "function",
        "title": "hasField"
      },
      "index": {
        "description": "Do we have the given field",
        "hierarchy": "Network HTTP Server HtmlForm",
        "module": "Network.HTTP.Server.HtmlForm",
        "name": "hasField",
        "normalized": "FormFields-\u003eString-\u003eBool",
        "package": "http-server",
        "partial": "Field",
        "signature": "FormFields-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:lookupRead",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a field value and try to parse it.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.HtmlForm",
        "fct-package": "http-server",
        "fct-signature": "FormFields -\u003e String -\u003e Maybe a",
        "fct-source": "src/Network-HTTP-Server-HtmlForm.html#lookupRead",
        "fct-type": "function",
        "title": "lookupRead"
      },
      "index": {
        "description": "Lookup field value and try to parse it",
        "hierarchy": "Network HTTP Server HtmlForm",
        "module": "Network.HTTP.Server.HtmlForm",
        "name": "lookupRead",
        "normalized": "FormFields-\u003eString-\u003eMaybe a",
        "package": "http-server",
        "partial": "Read",
        "signature": "FormFields-\u003eString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:lookupString",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a field value as a string.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.HtmlForm",
        "fct-package": "http-server",
        "fct-signature": "FormFields -\u003e String -\u003e Maybe String",
        "fct-source": "src/Network-HTTP-Server-HtmlForm.html#lookupString",
        "fct-type": "function",
        "title": "lookupString"
      },
      "index": {
        "description": "Lookup field value as string",
        "hierarchy": "Network HTTP Server HtmlForm",
        "module": "Network.HTTP.Server.HtmlForm",
        "name": "lookupString",
        "normalized": "FormFields-\u003eString-\u003eMaybe String",
        "package": "http-server",
        "partial": "String",
        "signature": "FormFields-\u003eString-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eThe fields as pairs of strings.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.HtmlForm",
        "fct-package": "http-server",
        "fct-signature": "FormFields -\u003e [(String, String)]",
        "fct-source": "src/Network-HTTP-Server-HtmlForm.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "The fields as pairs of strings",
        "hierarchy": "Network HTTP Server HtmlForm",
        "module": "Network.HTTP.Server.HtmlForm",
        "name": "toList",
        "normalized": "FormFields-\u003e[(String,String)]",
        "package": "http-server",
        "partial": "List",
        "signature": "FormFields-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Server-Logger.html",
        "fct-type": "module",
        "title": "Logger"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "Logger",
        "normalized": "",
        "package": "http-server",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#t:LogItem",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Server-Logger.html#LogItem",
        "fct-type": "data",
        "title": "LogItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "LogItem",
        "normalized": "",
        "package": "http-server",
        "partial": "Log Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#t:LogType",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Server-Logger.html#LogType",
        "fct-type": "data",
        "title": "LogType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "LogType",
        "normalized": "",
        "package": "http-server",
        "partial": "Log Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#t:Logger",
      "description": {
        "fct-descr": "\u003cp\u003eA type used by the server to report various events.\n Useful for debugging.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Server-Logger.html#Logger",
        "fct-type": "data",
        "title": "Logger"
      },
      "index": {
        "description": "type used by the server to report various events Useful for debugging",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "Logger",
        "normalized": "",
        "package": "http-server",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:Debug",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Debug",
        "fct-source": "src/Network-HTTP-Server-Logger.html#LogType",
        "fct-type": "function",
        "title": "Debug"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "Debug",
        "normalized": "",
        "package": "http-server",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:Error",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Error",
        "fct-source": "src/Network-HTTP-Server-Logger.html#LogType",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "Error",
        "normalized": "",
        "package": "http-server",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:Info",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Info Int",
        "fct-source": "src/Network-HTTP-Server-Logger.html#LogType",
        "fct-type": "function",
        "title": "Info"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "Info",
        "normalized": "",
        "package": "http-server",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:LogItem",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "LogItem",
        "fct-source": "src/Network-HTTP-Server-Logger.html#LogItem",
        "fct-type": "function",
        "title": "LogItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "LogItem",
        "normalized": "",
        "package": "http-server",
        "partial": "Log Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:Logger",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Logger",
        "fct-source": "src/Network-HTTP-Server-Logger.html#Logger",
        "fct-type": "function",
        "title": "Logger"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "Logger",
        "normalized": "",
        "package": "http-server",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:Warning",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Warning",
        "fct-source": "src/Network-HTTP-Server-Logger.html#LogType",
        "fct-type": "function",
        "title": "Warning"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "Warning",
        "normalized": "",
        "package": "http-server",
        "partial": "Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:filterLog",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Maybe Int -\u003e (LogType -\u003e Bool) -\u003e [LogItem] -\u003e [LogItem]",
        "fct-source": "src/Network-HTTP-Server-Logger.html#filterLog",
        "fct-type": "function",
        "title": "filterLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "filterLog",
        "normalized": "Maybe Int-\u003e(LogType-\u003eBool)-\u003e[LogItem]-\u003e[LogItem]",
        "package": "http-server",
        "partial": "Log",
        "signature": "Maybe Int-\u003e(LogType-\u003eBool)-\u003e[LogItem]-\u003e[LogItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:getLog",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Maybe Int -\u003e (LogType -\u003e Bool) -\u003e IO [LogItem]",
        "fct-source": "src/Network-HTTP-Server-Logger.html#Logger",
        "fct-type": "function",
        "title": "getLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "getLog",
        "normalized": "Maybe Int-\u003e(LogType-\u003eBool)-\u003eIO[LogItem]",
        "package": "http-server",
        "partial": "Log",
        "signature": "Maybe Int-\u003e(LogType-\u003eBool)-\u003eIO[LogItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:item_data",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Server-Logger.html#LogItem",
        "fct-type": "function",
        "title": "item_data"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "item_data",
        "normalized": "",
        "package": "http-server",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:item_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "LogType",
        "fct-source": "src/Network-HTTP-Server-Logger.html#LogItem",
        "fct-type": "function",
        "title": "item_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "item_type",
        "normalized": "",
        "package": "http-server",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:logDebug",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Server-Logger.html#Logger",
        "fct-type": "function",
        "title": "logDebug"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "logDebug",
        "normalized": "String-\u003eIO()",
        "package": "http-server",
        "partial": "Debug",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:logError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Server-Logger.html#Logger",
        "fct-type": "function",
        "title": "logError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "logError",
        "normalized": "String-\u003eIO()",
        "package": "http-server",
        "partial": "Error",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:logInfo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Int -\u003e String -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Server-Logger.html#Logger",
        "fct-type": "function",
        "title": "logInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "logInfo",
        "normalized": "Int-\u003eString-\u003eIO()",
        "package": "http-server",
        "partial": "Info",
        "signature": "Int-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:logWarning",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Server-Logger.html#Logger",
        "fct-type": "function",
        "title": "logWarning"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "logWarning",
        "normalized": "String-\u003eIO()",
        "package": "http-server",
        "partial": "Warning",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:quietLogger",
      "description": {
        "fct-descr": "\u003cp\u003eA logger that does not report anything.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Logger",
        "fct-source": "src/Network-HTTP-Server-Logger.html#quietLogger",
        "fct-type": "function",
        "title": "quietLogger"
      },
      "index": {
        "description": "logger that does not report anything",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "quietLogger",
        "normalized": "",
        "package": "http-server",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:readLogItem",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "String -\u003e Maybe LogItem",
        "fct-source": "src/Network-HTTP-Server-Logger.html#readLogItem",
        "fct-type": "function",
        "title": "readLogItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "readLogItem",
        "normalized": "String-\u003eMaybe LogItem",
        "package": "http-server",
        "partial": "Log Item",
        "signature": "String-\u003eMaybe LogItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:showLogItem",
      "description": {
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "LogItem -\u003e String",
        "fct-source": "src/Network-HTTP-Server-Logger.html#showLogItem",
        "fct-type": "function",
        "title": "showLogItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "showLogItem",
        "normalized": "LogItem-\u003eString",
        "package": "http-server",
        "partial": "Log Item",
        "signature": "LogItem-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:stdLogger",
      "description": {
        "fct-descr": "\u003cp\u003eA logger that uses the standard output and standard error.\n Text is UTF8 encoded.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Logger",
        "fct-source": "src/Network-HTTP-Server-Logger.html#stdLogger",
        "fct-type": "function",
        "title": "stdLogger"
      },
      "index": {
        "description": "logger that uses the standard output and standard error Text is UTF8 encoded",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "stdLogger",
        "normalized": "",
        "package": "http-server",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:utf8Logger",
      "description": {
        "fct-descr": "\u003cp\u003eA logger that uses the given handles for output and errors.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Logger",
        "fct-package": "http-server",
        "fct-signature": "Handle -\u003e Handle -\u003e Logger",
        "fct-source": "src/Network-HTTP-Server-Logger.html#utf8Logger",
        "fct-type": "function",
        "title": "utf8Logger"
      },
      "index": {
        "description": "logger that uses the given handles for output and errors",
        "hierarchy": "Network HTTP Server Logger",
        "module": "Network.HTTP.Server.Logger",
        "name": "utf8Logger",
        "normalized": "Handle-\u003eHandle-\u003eLogger",
        "package": "http-server",
        "partial": "Logger",
        "signature": "Handle-\u003eHandle-\u003eLogger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#",
      "description": {
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Server-Response.html",
        "fct-type": "module",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "Response",
        "normalized": "",
        "package": "http-server",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#t:StatusCode",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP/1.1 status codes\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "data",
        "title": "StatusCode"
      },
      "index": {
        "description": "HTTP status codes",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "StatusCode",
        "normalized": "",
        "package": "http-server",
        "partial": "Status Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Accepted",
      "description": {
        "fct-descr": "\u003cp\u003e202\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "Accepted",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "Accepted"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "Accepted",
        "normalized": "",
        "package": "http-server",
        "partial": "Accepted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:BadGateway",
      "description": {
        "fct-descr": "\u003cp\u003e502\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "BadGateway",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "BadGateway"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "BadGateway",
        "normalized": "",
        "package": "http-server",
        "partial": "Bad Gateway",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:BadRequest",
      "description": {
        "fct-descr": "\u003cp\u003e400\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "BadRequest",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "BadRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "BadRequest",
        "normalized": "",
        "package": "http-server",
        "partial": "Bad Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Conflict",
      "description": {
        "fct-descr": "\u003cp\u003e409\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "Conflict",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "Conflict"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "Conflict",
        "normalized": "",
        "package": "http-server",
        "partial": "Conflict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Continue",
      "description": {
        "fct-descr": "\u003cp\u003e100\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "Continue",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "Continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "Continue",
        "normalized": "",
        "package": "http-server",
        "partial": "Continue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Created",
      "description": {
        "fct-descr": "\u003cp\u003e201\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "Created",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "Created"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "Created",
        "normalized": "",
        "package": "http-server",
        "partial": "Created",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:ExpectationFailed",
      "description": {
        "fct-descr": "\u003cp\u003e417\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "ExpectationFailed",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "ExpectationFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "ExpectationFailed",
        "normalized": "",
        "package": "http-server",
        "partial": "Expectation Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Forbidden",
      "description": {
        "fct-descr": "\u003cp\u003e403\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "Forbidden",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "Forbidden"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "Forbidden",
        "normalized": "",
        "package": "http-server",
        "partial": "Forbidden",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Found",
      "description": {
        "fct-descr": "\u003cp\u003e302\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "Found",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "Found"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "Found",
        "normalized": "",
        "package": "http-server",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:GatewayTimeout",
      "description": {
        "fct-descr": "\u003cp\u003e504\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "GatewayTimeout",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "GatewayTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "GatewayTimeout",
        "normalized": "",
        "package": "http-server",
        "partial": "Gateway Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Gone",
      "description": {
        "fct-descr": "\u003cp\u003e410\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "Gone",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "Gone"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "Gone",
        "normalized": "",
        "package": "http-server",
        "partial": "Gone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:HTTPVersionNotSupported",
      "description": {
        "fct-descr": "\u003cp\u003e505\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "HTTPVersionNotSupported",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "HTTPVersionNotSupported"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "HTTPVersionNotSupported",
        "normalized": "",
        "package": "http-server",
        "partial": "HTTPVersion Not Supported",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:InternalServerError",
      "description": {
        "fct-descr": "\u003cp\u003e500\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "InternalServerError",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "InternalServerError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "InternalServerError",
        "normalized": "",
        "package": "http-server",
        "partial": "Internal Server Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:LengthRequired",
      "description": {
        "fct-descr": "\u003cp\u003e411\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "LengthRequired",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "LengthRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "LengthRequired",
        "normalized": "",
        "package": "http-server",
        "partial": "Length Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:MethodNotAllowed",
      "description": {
        "fct-descr": "\u003cp\u003e405\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "MethodNotAllowed",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "MethodNotAllowed"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "MethodNotAllowed",
        "normalized": "",
        "package": "http-server",
        "partial": "Method Not Allowed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:MovedPermanently",
      "description": {
        "fct-descr": "\u003cp\u003e301\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "MovedPermanently",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "MovedPermanently"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "MovedPermanently",
        "normalized": "",
        "package": "http-server",
        "partial": "Moved Permanently",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:MultipleChoices",
      "description": {
        "fct-descr": "\u003cp\u003e300\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "MultipleChoices",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "MultipleChoices"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "MultipleChoices",
        "normalized": "",
        "package": "http-server",
        "partial": "Multiple Choices",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NoContent",
      "description": {
        "fct-descr": "\u003cp\u003e204\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "NoContent",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "NoContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "NoContent",
        "normalized": "",
        "package": "http-server",
        "partial": "No Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NonAuthoritativeInformation",
      "description": {
        "fct-descr": "\u003cp\u003e203  \n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "NonAuthoritativeInformation",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "NonAuthoritativeInformation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "NonAuthoritativeInformation",
        "normalized": "",
        "package": "http-server",
        "partial": "Non Authoritative Information",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NotAcceptable",
      "description": {
        "fct-descr": "\u003cp\u003e406\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "NotAcceptable",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "NotAcceptable"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "NotAcceptable",
        "normalized": "",
        "package": "http-server",
        "partial": "Not Acceptable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NotFound",
      "description": {
        "fct-descr": "\u003cp\u003e404\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "NotFound",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "NotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "NotFound",
        "normalized": "",
        "package": "http-server",
        "partial": "Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NotImplemented",
      "description": {
        "fct-descr": "\u003cp\u003e501\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "NotImplemented",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "NotImplemented"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "NotImplemented",
        "normalized": "",
        "package": "http-server",
        "partial": "Not Implemented",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NotModified",
      "description": {
        "fct-descr": "\u003cp\u003e304\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "NotModified",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "NotModified"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "NotModified",
        "normalized": "",
        "package": "http-server",
        "partial": "Not Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:OK",
      "description": {
        "fct-descr": "\u003cp\u003e200\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "OK",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "OK"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "OK",
        "normalized": "",
        "package": "http-server",
        "partial": "OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:PartialContent",
      "description": {
        "fct-descr": "\u003cp\u003e206\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "PartialContent",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "PartialContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "PartialContent",
        "normalized": "",
        "package": "http-server",
        "partial": "Partial Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:PaymentRequired",
      "description": {
        "fct-descr": "\u003cp\u003e402\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "PaymentRequired",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "PaymentRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "PaymentRequired",
        "normalized": "",
        "package": "http-server",
        "partial": "Payment Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:PreconditionFailed",
      "description": {
        "fct-descr": "\u003cp\u003e412\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "PreconditionFailed",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "PreconditionFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "PreconditionFailed",
        "normalized": "",
        "package": "http-server",
        "partial": "Precondition Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:ProxyAuthenticationRequired",
      "description": {
        "fct-descr": "\u003cp\u003e407\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "ProxyAuthenticationRequired",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "ProxyAuthenticationRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "ProxyAuthenticationRequired",
        "normalized": "",
        "package": "http-server",
        "partial": "Proxy Authentication Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:RequestEntityTooLarge",
      "description": {
        "fct-descr": "\u003cp\u003e413\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "RequestEntityTooLarge",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "RequestEntityTooLarge"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "RequestEntityTooLarge",
        "normalized": "",
        "package": "http-server",
        "partial": "Request Entity Too Large",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:RequestTimeout",
      "description": {
        "fct-descr": "\u003cp\u003e408\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "RequestTimeout",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "RequestTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "RequestTimeout",
        "normalized": "",
        "package": "http-server",
        "partial": "Request Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:RequestURITooLong",
      "description": {
        "fct-descr": "\u003cp\u003e414\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "RequestURITooLong",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "RequestURITooLong"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "RequestURITooLong",
        "normalized": "",
        "package": "http-server",
        "partial": "Request URIToo Long",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:RequestedRangeNotSatisfiable",
      "description": {
        "fct-descr": "\u003cp\u003e416\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "RequestedRangeNotSatisfiable",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "RequestedRangeNotSatisfiable"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "RequestedRangeNotSatisfiable",
        "normalized": "",
        "package": "http-server",
        "partial": "Requested Range Not Satisfiable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:ResetContent",
      "description": {
        "fct-descr": "\u003cp\u003e205\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "ResetContent",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "ResetContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "ResetContent",
        "normalized": "",
        "package": "http-server",
        "partial": "Reset Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:SeeOther",
      "description": {
        "fct-descr": "\u003cp\u003e303\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "SeeOther",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "SeeOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "SeeOther",
        "normalized": "",
        "package": "http-server",
        "partial": "See Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:ServiceUnavailable",
      "description": {
        "fct-descr": "\u003cp\u003e503\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "ServiceUnavailable",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "ServiceUnavailable"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "ServiceUnavailable",
        "normalized": "",
        "package": "http-server",
        "partial": "Service Unavailable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:SwitchingProtocols",
      "description": {
        "fct-descr": "\u003cp\u003e101\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "SwitchingProtocols",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "SwitchingProtocols"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "SwitchingProtocols",
        "normalized": "",
        "package": "http-server",
        "partial": "Switching Protocols",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:TemporaryRedirect",
      "description": {
        "fct-descr": "\u003cp\u003e307\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "TemporaryRedirect",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "TemporaryRedirect"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "TemporaryRedirect",
        "normalized": "",
        "package": "http-server",
        "partial": "Temporary Redirect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Unauthorized",
      "description": {
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "Unauthorized",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "Unauthorized"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "Unauthorized",
        "normalized": "",
        "package": "http-server",
        "partial": "Unauthorized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:UnsupportedMediaType",
      "description": {
        "fct-descr": "\u003cp\u003e415\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "UnsupportedMediaType",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "UnsupportedMediaType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "UnsupportedMediaType",
        "normalized": "",
        "package": "http-server",
        "partial": "Unsupported Media Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:UseProxy",
      "description": {
        "fct-descr": "\u003cp\u003e305\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "UseProxy",
        "fct-source": "src/Network-HTTP-Server-Response.html#StatusCode",
        "fct-type": "function",
        "title": "UseProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "UseProxy",
        "normalized": "",
        "package": "http-server",
        "partial": "Use Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:err_response",
      "description": {
        "fct-descr": "\u003cp\u003eMake a simple response with the given status and body.\n Intended to be used for (bad) errors.\n Adds a \u003ca\u003eclose\u003c/a\u003e header.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "StatusCode -\u003e Response a",
        "fct-source": "src/Network-HTTP-Server-Response.html#err_response",
        "fct-type": "function",
        "title": "err_response"
      },
      "index": {
        "description": "Make simple response with the given status and body Intended to be used for bad errors Adds close header",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "err_response",
        "normalized": "StatusCode-\u003eResponse a",
        "package": "http-server",
        "partial": "",
        "signature": "StatusCode-\u003eResponse a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:reason",
      "description": {
        "fct-descr": "\u003cp\u003eA brief description of what happend.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "StatusCode -\u003e String",
        "fct-source": "src/Network-HTTP-Server-Response.html#reason",
        "fct-type": "function",
        "title": "reason"
      },
      "index": {
        "description": "brief description of what happend",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "reason",
        "normalized": "StatusCode-\u003eString",
        "package": "http-server",
        "partial": "",
        "signature": "StatusCode-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:respond",
      "description": {
        "fct-descr": "\u003cp\u003eMake a simple response with the given status and body.\n No headers or body.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "StatusCode -\u003e Response a",
        "fct-source": "src/Network-HTTP-Server-Response.html#respond",
        "fct-type": "function",
        "title": "respond"
      },
      "index": {
        "description": "Make simple response with the given status and body No headers or body",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "respond",
        "normalized": "StatusCode-\u003eResponse a",
        "package": "http-server",
        "partial": "",
        "signature": "StatusCode-\u003eResponse a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:statusCodeTriplet",
      "description": {
        "fct-module": "Network.HTTP.Server.Response",
        "fct-package": "http-server",
        "fct-signature": "StatusCode -\u003e (Int, Int, Int)",
        "fct-source": "src/Network-HTTP-Server-Response.html#statusCodeTriplet",
        "fct-type": "function",
        "title": "statusCodeTriplet"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server Response",
        "module": "Network.HTTP.Server.Response",
        "name": "statusCodeTriplet",
        "normalized": "StatusCode-\u003e(Int,Int,Int)",
        "package": "http-server",
        "partial": "Code Triplet",
        "signature": "StatusCode-\u003e(Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "Server",
        "normalized": "",
        "package": "http-server",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eServer configuration.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Server.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Server configuration",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "Config",
        "normalized": "",
        "package": "http-server",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eHandlers invoked to process requests.\n The type parameter is for the type of the payload in the body.\n It is a variation on string of some sort (e.g., String, ByteString, etc.)\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Server.html#Handler",
        "fct-type": "type",
        "title": "Handler"
      },
      "index": {
        "description": "Handlers invoked to process requests The type parameter is for the type of the payload in the body It is variation on string of some sort e.g String ByteString etc",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "Handler",
        "normalized": "",
        "package": "http-server",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#t:Request",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "Request",
        "normalized": "",
        "package": "http-server",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#t:RequestMethod",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RequestMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "RequestMethod",
        "normalized": "",
        "package": "http-server",
        "partial": "Request Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#t:Response",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "Response",
        "normalized": "",
        "package": "http-server",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:CONNECT",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "CONNECT",
        "fct-type": "function",
        "title": "CONNECT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "CONNECT",
        "normalized": "",
        "package": "http-server",
        "partial": "CONNECT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:Config",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "Config",
        "fct-source": "src/Network-HTTP-Server.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "Config",
        "normalized": "",
        "package": "http-server",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:Custom",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "Custom String",
        "fct-type": "function",
        "title": "Custom"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "Custom",
        "normalized": "",
        "package": "http-server",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:DELETE",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "DELETE",
        "fct-type": "function",
        "title": "DELETE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "DELETE",
        "normalized": "",
        "package": "http-server",
        "partial": "DELETE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:GET",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "GET",
        "fct-type": "function",
        "title": "GET"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "GET",
        "normalized": "",
        "package": "http-server",
        "partial": "GET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:HEAD",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "HEAD",
        "fct-type": "function",
        "title": "HEAD"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "HEAD",
        "normalized": "",
        "package": "http-server",
        "partial": "HEAD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:OPTIONS",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "OPTIONS",
        "fct-type": "function",
        "title": "OPTIONS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "OPTIONS",
        "normalized": "",
        "package": "http-server",
        "partial": "OPTIONS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:POST",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "POST",
        "fct-type": "function",
        "title": "POST"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "POST",
        "normalized": "",
        "package": "http-server",
        "partial": "POST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:PUT",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "PUT",
        "fct-type": "function",
        "title": "PUT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "PUT",
        "normalized": "",
        "package": "http-server",
        "partial": "PUT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:Request",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "Request",
        "normalized": "",
        "package": "http-server",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:Response",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "Response",
        "fct-type": "function",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "Response",
        "normalized": "",
        "package": "http-server",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:TRACE",
      "description": {
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "TRACE",
        "fct-type": "function",
        "title": "TRACE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "TRACE",
        "normalized": "",
        "package": "http-server",
        "partial": "TRACE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eSome default options for a server:\n no logging output, listen on \"localhost:8000\".\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "Config",
        "fct-source": "src/Network-HTTP-Server.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "Some default options for server no logging output listen on localhost",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "defaultConfig",
        "normalized": "",
        "package": "http-server",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rqBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "rqBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "rqBody",
        "normalized": "",
        "package": "http-server",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rqHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "[Header]",
        "fct-type": "function",
        "title": "rqHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "rqHeaders",
        "normalized": "[Header]",
        "package": "http-server",
        "partial": "Headers",
        "signature": "[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rqMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "RequestMethod",
        "fct-type": "function",
        "title": "rqMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "rqMethod",
        "normalized": "",
        "package": "http-server",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rqURI",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "URI",
        "fct-type": "function",
        "title": "rqURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "rqURI",
        "normalized": "",
        "package": "http-server",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rspBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "rspBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "rspBody",
        "normalized": "",
        "package": "http-server",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rspCode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "ResponseCode",
        "fct-type": "function",
        "title": "rspCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "rspCode",
        "normalized": "",
        "package": "http-server",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rspHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "[Header]",
        "fct-type": "function",
        "title": "rspHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "rspHeaders",
        "normalized": "[Header]",
        "package": "http-server",
        "partial": "Headers",
        "signature": "[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rspReason",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "rspReason"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "rspReason",
        "normalized": "",
        "package": "http-server",
        "partial": "Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:server",
      "description": {
        "fct-descr": "\u003cp\u003eStart a server with the default configuration, and the given handler.\n  Requests are handled in separate threads.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "Handler a -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Server.html#server",
        "fct-type": "function",
        "title": "server"
      },
      "index": {
        "description": "Start server with the default configuration and the given handler Requests are handled in separate threads",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "server",
        "normalized": "Handler a-\u003eIO()",
        "package": "http-server",
        "partial": "",
        "signature": "Handler a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:serverWith",
      "description": {
        "fct-descr": "\u003cp\u003eStart a server with the given configuration and handler.\n  Requests are handled in separate threads.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "Config -\u003e Handler a -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Server.html#serverWith",
        "fct-type": "function",
        "title": "serverWith"
      },
      "index": {
        "description": "Start server with the given configuration and handler Requests are handled in separate threads",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "serverWith",
        "normalized": "Config-\u003eHandler a-\u003eIO()",
        "package": "http-server",
        "partial": "With",
        "signature": "Config-\u003eHandler a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:srvHost",
      "description": {
        "fct-descr": "\u003cp\u003eHost name to bind to.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "HostName",
        "fct-source": "src/Network-HTTP-Server.html#Config",
        "fct-type": "function",
        "title": "srvHost"
      },
      "index": {
        "description": "Host name to bind to",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "srvHost",
        "normalized": "",
        "package": "http-server",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:srvLog",
      "description": {
        "fct-descr": "\u003cp\u003eServer reports what's going on here.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "Logger",
        "fct-source": "src/Network-HTTP-Server.html#Config",
        "fct-type": "function",
        "title": "srvLog"
      },
      "index": {
        "description": "Server reports what going on here",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "srvLog",
        "normalized": "",
        "package": "http-server",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:srvPort",
      "description": {
        "fct-descr": "\u003cp\u003ePort to listen on.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Server",
        "fct-package": "http-server",
        "fct-signature": "PortNumber",
        "fct-source": "src/Network-HTTP-Server.html#Config",
        "fct-type": "function",
        "title": "srvPort"
      },
      "index": {
        "description": "Port to listen on",
        "hierarchy": "Network HTTP Server",
        "module": "Network.HTTP.Server",
        "name": "srvPort",
        "normalized": "",
        "package": "http-server",
        "partial": "Port",
        "signature": ""
      }
    }
  }
]