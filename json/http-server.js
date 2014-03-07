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
        "word": "http-server"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "HtmlForm",
          "package": "http-server",
          "source": "src/Network-HTTP-Server-HtmlForm.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP Server HtmlForm",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "HtmlForm",
          "package": "http-server",
          "partial": "Html Form",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstraction of a map mapping form fields to their values.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "FormFields",
          "package": "http-server",
          "source": "src/Network-HTTP-Server-HtmlForm.html#FormFields",
          "type": "data"
        },
        "index": {
          "description": "An abstraction of map mapping form fields to their values",
          "hierarchy": "Network HTTP Server HtmlForm",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "FormFields",
          "package": "http-server",
          "partial": "Form Fields",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#t:FormFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe names of the fields that were posted.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "fieldNames",
          "package": "http-server",
          "signature": "FormFields -\u003e [String]",
          "source": "src/Network-HTTP-Server-HtmlForm.html#fieldNames",
          "type": "function"
        },
        "index": {
          "description": "The names of the fields that were posted",
          "hierarchy": "Network HTTP Server HtmlForm",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "fieldNames",
          "normalized": "FormFields-\u003e[String]",
          "package": "http-server",
          "partial": "Names",
          "signature": "FormFields-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:fieldNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse the body of a request.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "fromRequest",
          "package": "http-server",
          "signature": "Request String -\u003e Maybe FormFields",
          "source": "src/Network-HTTP-Server-HtmlForm.html#fromRequest",
          "type": "function"
        },
        "index": {
          "description": "Try to parse the body of request",
          "hierarchy": "Network HTTP Server HtmlForm",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "fromRequest",
          "normalized": "Request String-\u003eMaybe FormFields",
          "package": "http-server",
          "partial": "Request",
          "signature": "Request String-\u003eMaybe FormFields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:fromRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we have the given field?\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "hasField",
          "package": "http-server",
          "signature": "FormFields -\u003e String -\u003e Bool",
          "source": "src/Network-HTTP-Server-HtmlForm.html#hasField",
          "type": "function"
        },
        "index": {
          "description": "Do we have the given field",
          "hierarchy": "Network HTTP Server HtmlForm",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "hasField",
          "normalized": "FormFields-\u003eString-\u003eBool",
          "package": "http-server",
          "partial": "Field",
          "signature": "FormFields-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:hasField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a field value and try to parse it.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "lookupRead",
          "package": "http-server",
          "signature": "FormFields -\u003e String -\u003e Maybe a",
          "source": "src/Network-HTTP-Server-HtmlForm.html#lookupRead",
          "type": "function"
        },
        "index": {
          "description": "Lookup field value and try to parse it",
          "hierarchy": "Network HTTP Server HtmlForm",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "lookupRead",
          "normalized": "FormFields-\u003eString-\u003eMaybe a",
          "package": "http-server",
          "partial": "Read",
          "signature": "FormFields-\u003eString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:lookupRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a field value as a string.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "lookupString",
          "package": "http-server",
          "signature": "FormFields -\u003e String -\u003e Maybe String",
          "source": "src/Network-HTTP-Server-HtmlForm.html#lookupString",
          "type": "function"
        },
        "index": {
          "description": "Lookup field value as string",
          "hierarchy": "Network HTTP Server HtmlForm",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "lookupString",
          "normalized": "FormFields-\u003eString-\u003eMaybe String",
          "package": "http-server",
          "partial": "String",
          "signature": "FormFields-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:lookupString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fields as pairs of strings.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "toList",
          "package": "http-server",
          "signature": "FormFields -\u003e [(String, String)]",
          "source": "src/Network-HTTP-Server-HtmlForm.html#toList",
          "type": "function"
        },
        "index": {
          "description": "The fields as pairs of strings",
          "hierarchy": "Network HTTP Server HtmlForm",
          "module": "Network.HTTP.Server.HtmlForm",
          "name": "toList",
          "normalized": "FormFields-\u003e[(String,String)]",
          "package": "http-server",
          "partial": "List",
          "signature": "FormFields-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-HtmlForm.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "Logger",
          "package": "http-server",
          "source": "src/Network-HTTP-Server-Logger.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "Logger",
          "package": "http-server",
          "partial": "Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "LogItem",
          "package": "http-server",
          "source": "src/Network-HTTP-Server-Logger.html#LogItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "LogItem",
          "package": "http-server",
          "partial": "Log Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#t:LogItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "LogType",
          "package": "http-server",
          "source": "src/Network-HTTP-Server-Logger.html#LogType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "LogType",
          "package": "http-server",
          "partial": "Log Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#t:LogType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type used by the server to report various events.\n Useful for debugging.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Logger",
          "name": "Logger",
          "package": "http-server",
          "source": "src/Network-HTTP-Server-Logger.html#Logger",
          "type": "data"
        },
        "index": {
          "description": "type used by the server to report various events Useful for debugging",
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "Logger",
          "package": "http-server",
          "partial": "Logger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#t:Logger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "Debug",
          "package": "http-server",
          "signature": "Debug",
          "source": "src/Network-HTTP-Server-Logger.html#LogType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "Debug",
          "package": "http-server",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "Error",
          "package": "http-server",
          "signature": "Error",
          "source": "src/Network-HTTP-Server-Logger.html#LogType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "Error",
          "package": "http-server",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "Info",
          "package": "http-server",
          "signature": "Info Int",
          "source": "src/Network-HTTP-Server-Logger.html#LogType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "Info",
          "package": "http-server",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "LogItem",
          "package": "http-server",
          "signature": "LogItem",
          "source": "src/Network-HTTP-Server-Logger.html#LogItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "LogItem",
          "package": "http-server",
          "partial": "Log Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:LogItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "Logger",
          "package": "http-server",
          "signature": "Logger",
          "source": "src/Network-HTTP-Server-Logger.html#Logger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "Logger",
          "package": "http-server",
          "partial": "Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:Logger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "Warning",
          "package": "http-server",
          "signature": "Warning",
          "source": "src/Network-HTTP-Server-Logger.html#LogType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "Warning",
          "package": "http-server",
          "partial": "Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:Warning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "filterLog",
          "package": "http-server",
          "signature": "Maybe Int -\u003e (LogType -\u003e Bool) -\u003e [LogItem] -\u003e [LogItem]",
          "source": "src/Network-HTTP-Server-Logger.html#filterLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "filterLog",
          "normalized": "Maybe Int-\u003e(LogType-\u003eBool)-\u003e[LogItem]-\u003e[LogItem]",
          "package": "http-server",
          "partial": "Log",
          "signature": "Maybe Int-\u003e(LogType-\u003eBool)-\u003e[LogItem]-\u003e[LogItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:filterLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "getLog",
          "package": "http-server",
          "signature": "Maybe Int -\u003e (LogType -\u003e Bool) -\u003e IO [LogItem]",
          "source": "src/Network-HTTP-Server-Logger.html#Logger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "getLog",
          "normalized": "Maybe Int-\u003e(LogType-\u003eBool)-\u003eIO[LogItem]",
          "package": "http-server",
          "partial": "Log",
          "signature": "Maybe Int-\u003e(LogType-\u003eBool)-\u003eIO[LogItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:getLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "item_data",
          "package": "http-server",
          "signature": "String",
          "source": "src/Network-HTTP-Server-Logger.html#LogItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "item_data",
          "package": "http-server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:item_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "item_type",
          "package": "http-server",
          "signature": "LogType",
          "source": "src/Network-HTTP-Server-Logger.html#LogItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "item_type",
          "package": "http-server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:item_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "logDebug",
          "package": "http-server",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-HTTP-Server-Logger.html#Logger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "logDebug",
          "normalized": "String-\u003eIO()",
          "package": "http-server",
          "partial": "Debug",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:logDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "logError",
          "package": "http-server",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-HTTP-Server-Logger.html#Logger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "logError",
          "normalized": "String-\u003eIO()",
          "package": "http-server",
          "partial": "Error",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:logError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "logInfo",
          "package": "http-server",
          "signature": "Int -\u003e String -\u003e IO ()",
          "source": "src/Network-HTTP-Server-Logger.html#Logger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "logInfo",
          "normalized": "Int-\u003eString-\u003eIO()",
          "package": "http-server",
          "partial": "Info",
          "signature": "Int-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:logInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "logWarning",
          "package": "http-server",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-HTTP-Server-Logger.html#Logger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "logWarning",
          "normalized": "String-\u003eIO()",
          "package": "http-server",
          "partial": "Warning",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:logWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logger that does not report anything.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Logger",
          "name": "quietLogger",
          "package": "http-server",
          "signature": "Logger",
          "source": "src/Network-HTTP-Server-Logger.html#quietLogger",
          "type": "function"
        },
        "index": {
          "description": "logger that does not report anything",
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "quietLogger",
          "package": "http-server",
          "partial": "Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:quietLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "readLogItem",
          "package": "http-server",
          "signature": "String -\u003e Maybe LogItem",
          "source": "src/Network-HTTP-Server-Logger.html#readLogItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "readLogItem",
          "normalized": "String-\u003eMaybe LogItem",
          "package": "http-server",
          "partial": "Log Item",
          "signature": "String-\u003eMaybe LogItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:readLogItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Logger",
          "name": "showLogItem",
          "package": "http-server",
          "signature": "LogItem -\u003e String",
          "source": "src/Network-HTTP-Server-Logger.html#showLogItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "showLogItem",
          "normalized": "LogItem-\u003eString",
          "package": "http-server",
          "partial": "Log Item",
          "signature": "LogItem-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:showLogItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logger that uses the standard output and standard error.\n Text is UTF8 encoded.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Logger",
          "name": "stdLogger",
          "package": "http-server",
          "signature": "Logger",
          "source": "src/Network-HTTP-Server-Logger.html#stdLogger",
          "type": "function"
        },
        "index": {
          "description": "logger that uses the standard output and standard error Text is UTF8 encoded",
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "stdLogger",
          "package": "http-server",
          "partial": "Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:stdLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logger that uses the given handles for output and errors.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Logger",
          "name": "utf8Logger",
          "package": "http-server",
          "signature": "Handle -\u003e Handle -\u003e Logger",
          "source": "src/Network-HTTP-Server-Logger.html#utf8Logger",
          "type": "function"
        },
        "index": {
          "description": "logger that uses the given handles for output and errors",
          "hierarchy": "Network HTTP Server Logger",
          "module": "Network.HTTP.Server.Logger",
          "name": "utf8Logger",
          "normalized": "Handle-\u003eHandle-\u003eLogger",
          "package": "http-server",
          "partial": "Logger",
          "signature": "Handle-\u003eHandle-\u003eLogger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Logger.html#v:utf8Logger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Response",
          "name": "Response",
          "package": "http-server",
          "source": "src/Network-HTTP-Server-Response.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "Response",
          "package": "http-server",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP/1.1 status codes\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "StatusCode",
          "package": "http-server",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "data"
        },
        "index": {
          "description": "HTTP status codes",
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "StatusCode",
          "package": "http-server",
          "partial": "Status Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#t:StatusCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e202\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "Accepted",
          "package": "http-server",
          "signature": "Accepted",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "Accepted",
          "package": "http-server",
          "partial": "Accepted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Accepted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e502\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "BadGateway",
          "package": "http-server",
          "signature": "BadGateway",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "BadGateway",
          "package": "http-server",
          "partial": "Bad Gateway",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:BadGateway"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e400\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "BadRequest",
          "package": "http-server",
          "signature": "BadRequest",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "BadRequest",
          "package": "http-server",
          "partial": "Bad Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:BadRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e409\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "Conflict",
          "package": "http-server",
          "signature": "Conflict",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "Conflict",
          "package": "http-server",
          "partial": "Conflict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Conflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e100\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "Continue",
          "package": "http-server",
          "signature": "Continue",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "Continue",
          "package": "http-server",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e201\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "Created",
          "package": "http-server",
          "signature": "Created",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "Created",
          "package": "http-server",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Created"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e417\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "ExpectationFailed",
          "package": "http-server",
          "signature": "ExpectationFailed",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "ExpectationFailed",
          "package": "http-server",
          "partial": "Expectation Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:ExpectationFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e403\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "Forbidden",
          "package": "http-server",
          "signature": "Forbidden",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "Forbidden",
          "package": "http-server",
          "partial": "Forbidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Forbidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e302\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "Found",
          "package": "http-server",
          "signature": "Found",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "Found",
          "package": "http-server",
          "partial": "Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Found"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e504\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "GatewayTimeout",
          "package": "http-server",
          "signature": "GatewayTimeout",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "GatewayTimeout",
          "package": "http-server",
          "partial": "Gateway Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:GatewayTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e410\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "Gone",
          "package": "http-server",
          "signature": "Gone",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "Gone",
          "package": "http-server",
          "partial": "Gone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Gone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e505\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "HTTPVersionNotSupported",
          "package": "http-server",
          "signature": "HTTPVersionNotSupported",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "HTTPVersionNotSupported",
          "package": "http-server",
          "partial": "HTTPVersion Not Supported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:HTTPVersionNotSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e500\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "InternalServerError",
          "package": "http-server",
          "signature": "InternalServerError",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "InternalServerError",
          "package": "http-server",
          "partial": "Internal Server Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:InternalServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e411\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "LengthRequired",
          "package": "http-server",
          "signature": "LengthRequired",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "LengthRequired",
          "package": "http-server",
          "partial": "Length Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:LengthRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e405\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "MethodNotAllowed",
          "package": "http-server",
          "signature": "MethodNotAllowed",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "MethodNotAllowed",
          "package": "http-server",
          "partial": "Method Not Allowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:MethodNotAllowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e301\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "MovedPermanently",
          "package": "http-server",
          "signature": "MovedPermanently",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "MovedPermanently",
          "package": "http-server",
          "partial": "Moved Permanently",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:MovedPermanently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e300\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "MultipleChoices",
          "package": "http-server",
          "signature": "MultipleChoices",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "MultipleChoices",
          "package": "http-server",
          "partial": "Multiple Choices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:MultipleChoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e204\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "NoContent",
          "package": "http-server",
          "signature": "NoContent",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "NoContent",
          "package": "http-server",
          "partial": "No Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NoContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e203  \n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "NonAuthoritativeInformation",
          "package": "http-server",
          "signature": "NonAuthoritativeInformation",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "NonAuthoritativeInformation",
          "package": "http-server",
          "partial": "Non Authoritative Information",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NonAuthoritativeInformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e406\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "NotAcceptable",
          "package": "http-server",
          "signature": "NotAcceptable",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "NotAcceptable",
          "package": "http-server",
          "partial": "Not Acceptable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NotAcceptable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e404\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "NotFound",
          "package": "http-server",
          "signature": "NotFound",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "NotFound",
          "package": "http-server",
          "partial": "Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e501\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "NotImplemented",
          "package": "http-server",
          "signature": "NotImplemented",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "NotImplemented",
          "package": "http-server",
          "partial": "Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e304\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "NotModified",
          "package": "http-server",
          "signature": "NotModified",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "NotModified",
          "package": "http-server",
          "partial": "Not Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:NotModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e200\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "OK",
          "package": "http-server",
          "signature": "OK",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "OK",
          "package": "http-server",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e206\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "PartialContent",
          "package": "http-server",
          "signature": "PartialContent",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "PartialContent",
          "package": "http-server",
          "partial": "Partial Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:PartialContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e402\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "PaymentRequired",
          "package": "http-server",
          "signature": "PaymentRequired",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "PaymentRequired",
          "package": "http-server",
          "partial": "Payment Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:PaymentRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e412\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "PreconditionFailed",
          "package": "http-server",
          "signature": "PreconditionFailed",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "PreconditionFailed",
          "package": "http-server",
          "partial": "Precondition Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:PreconditionFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e407\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "ProxyAuthenticationRequired",
          "package": "http-server",
          "signature": "ProxyAuthenticationRequired",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "ProxyAuthenticationRequired",
          "package": "http-server",
          "partial": "Proxy Authentication Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:ProxyAuthenticationRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e413\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "RequestEntityTooLarge",
          "package": "http-server",
          "signature": "RequestEntityTooLarge",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "RequestEntityTooLarge",
          "package": "http-server",
          "partial": "Request Entity Too Large",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:RequestEntityTooLarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e408\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "RequestTimeout",
          "package": "http-server",
          "signature": "RequestTimeout",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "RequestTimeout",
          "package": "http-server",
          "partial": "Request Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:RequestTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e414\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "RequestURITooLong",
          "package": "http-server",
          "signature": "RequestURITooLong",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "RequestURITooLong",
          "package": "http-server",
          "partial": "Request URIToo Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:RequestURITooLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e416\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "RequestedRangeNotSatisfiable",
          "package": "http-server",
          "signature": "RequestedRangeNotSatisfiable",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "RequestedRangeNotSatisfiable",
          "package": "http-server",
          "partial": "Requested Range Not Satisfiable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:RequestedRangeNotSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e205\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "ResetContent",
          "package": "http-server",
          "signature": "ResetContent",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "ResetContent",
          "package": "http-server",
          "partial": "Reset Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:ResetContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e303\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "SeeOther",
          "package": "http-server",
          "signature": "SeeOther",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "SeeOther",
          "package": "http-server",
          "partial": "See Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:SeeOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e503\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "ServiceUnavailable",
          "package": "http-server",
          "signature": "ServiceUnavailable",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "ServiceUnavailable",
          "package": "http-server",
          "partial": "Service Unavailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:ServiceUnavailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e101\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "SwitchingProtocols",
          "package": "http-server",
          "signature": "SwitchingProtocols",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "SwitchingProtocols",
          "package": "http-server",
          "partial": "Switching Protocols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:SwitchingProtocols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e307\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "TemporaryRedirect",
          "package": "http-server",
          "signature": "TemporaryRedirect",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "TemporaryRedirect",
          "package": "http-server",
          "partial": "Temporary Redirect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:TemporaryRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Response",
          "name": "Unauthorized",
          "package": "http-server",
          "signature": "Unauthorized",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "Unauthorized",
          "package": "http-server",
          "partial": "Unauthorized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:Unauthorized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e415\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "UnsupportedMediaType",
          "package": "http-server",
          "signature": "UnsupportedMediaType",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "UnsupportedMediaType",
          "package": "http-server",
          "partial": "Unsupported Media Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:UnsupportedMediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e305\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "UseProxy",
          "package": "http-server",
          "signature": "UseProxy",
          "source": "src/Network-HTTP-Server-Response.html#StatusCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "UseProxy",
          "package": "http-server",
          "partial": "Use Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:UseProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a simple response with the given status and body.\n Intended to be used for (bad) errors.\n Adds a \u003ca\u003eclose\u003c/a\u003e header.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "err_response",
          "package": "http-server",
          "signature": "StatusCode -\u003e Response a",
          "source": "src/Network-HTTP-Server-Response.html#err_response",
          "type": "function"
        },
        "index": {
          "description": "Make simple response with the given status and body Intended to be used for bad errors Adds close header",
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "err_response",
          "normalized": "StatusCode-\u003eResponse a",
          "package": "http-server",
          "signature": "StatusCode-\u003eResponse a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:err_response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA brief description of what happend.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "reason",
          "package": "http-server",
          "signature": "StatusCode -\u003e String",
          "source": "src/Network-HTTP-Server-Response.html#reason",
          "type": "function"
        },
        "index": {
          "description": "brief description of what happend",
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "reason",
          "normalized": "StatusCode-\u003eString",
          "package": "http-server",
          "signature": "StatusCode-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a simple response with the given status and body.\n No headers or body.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server.Response",
          "name": "respond",
          "package": "http-server",
          "signature": "StatusCode -\u003e Response a",
          "source": "src/Network-HTTP-Server-Response.html#respond",
          "type": "function"
        },
        "index": {
          "description": "Make simple response with the given status and body No headers or body",
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "respond",
          "normalized": "StatusCode-\u003eResponse a",
          "package": "http-server",
          "signature": "StatusCode-\u003eResponse a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:respond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server.Response",
          "name": "statusCodeTriplet",
          "package": "http-server",
          "signature": "StatusCode -\u003e (Int, Int, Int)",
          "source": "src/Network-HTTP-Server-Response.html#statusCodeTriplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server Response",
          "module": "Network.HTTP.Server.Response",
          "name": "statusCodeTriplet",
          "normalized": "StatusCode-\u003e(Int,Int,Int)",
          "package": "http-server",
          "partial": "Code Triplet",
          "signature": "StatusCode-\u003e(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server-Response.html#v:statusCodeTriplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "Server",
          "package": "http-server",
          "source": "src/Network-HTTP-Server.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "Server",
          "package": "http-server",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer configuration.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "Config",
          "package": "http-server",
          "source": "src/Network-HTTP-Server.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Server configuration",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "Config",
          "package": "http-server",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandlers invoked to process requests.\n The type parameter is for the type of the payload in the body.\n It is a variation on string of some sort (e.g., String, ByteString, etc.)\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "Handler",
          "package": "http-server",
          "source": "src/Network-HTTP-Server.html#Handler",
          "type": "type"
        },
        "index": {
          "description": "Handlers invoked to process requests The type parameter is for the type of the payload in the body It is variation on string of some sort e.g String ByteString etc",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "Handler",
          "package": "http-server",
          "partial": "Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP Request.\n The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of this type is used for message serialisation,\n which means no body data is output.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "Request",
          "package": "http-server",
          "type": "data"
        },
        "index": {
          "description": "An HTTP Request The Show instance of this type is used for message serialisation which means no body data is output",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "Request",
          "package": "http-server",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP request method, to be used in the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object.\n We are missing a few of the stranger methods, but these are\n not really necessary until we add full TLS.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "RequestMethod",
          "package": "http-server",
          "type": "data"
        },
        "index": {
          "description": "The HTTP request method to be used in the Request object We are missing few of the stranger methods but these are not really necessary until we add full TLS",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "RequestMethod",
          "package": "http-server",
          "partial": "Request Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#t:RequestMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP Response.\n The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of this type is used for message serialisation,\n which means no body data is output, additionally the output will\n show an HTTP version of 1.1 instead of the actual version returned\n by a server.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "Response",
          "package": "http-server",
          "type": "data"
        },
        "index": {
          "description": "An HTTP Response The Show instance of this type is used for message serialisation which means no body data is output additionally the output will show an HTTP version of instead of the actual version returned by server",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "Response",
          "package": "http-server",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "CONNECT",
          "package": "http-server",
          "signature": "CONNECT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "CONNECT",
          "package": "http-server",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "Config",
          "package": "http-server",
          "signature": "Config",
          "source": "src/Network-HTTP-Server.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "Config",
          "package": "http-server",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "Custom",
          "package": "http-server",
          "signature": "Custom String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "Custom",
          "package": "http-server",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "DELETE",
          "package": "http-server",
          "signature": "DELETE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "DELETE",
          "package": "http-server",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "GET",
          "package": "http-server",
          "signature": "GET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "GET",
          "package": "http-server",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "HEAD",
          "package": "http-server",
          "signature": "HEAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "HEAD",
          "package": "http-server",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "OPTIONS",
          "package": "http-server",
          "signature": "OPTIONS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "OPTIONS",
          "package": "http-server",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "POST",
          "package": "http-server",
          "signature": "POST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "POST",
          "package": "http-server",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "PUT",
          "package": "http-server",
          "signature": "PUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "PUT",
          "package": "http-server",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "Request",
          "package": "http-server",
          "signature": "Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "Request",
          "package": "http-server",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "Response",
          "package": "http-server",
          "signature": "Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "Response",
          "package": "http-server",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "TRACE",
          "package": "http-server",
          "signature": "TRACE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "TRACE",
          "package": "http-server",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome default options for a server:\n no logging output, listen on \"localhost:8000\".\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "defaultConfig",
          "package": "http-server",
          "signature": "Config",
          "source": "src/Network-HTTP-Server.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Some default options for server no logging output listen on localhost",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "defaultConfig",
          "package": "http-server",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "rqBody",
          "package": "http-server",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "rqBody",
          "package": "http-server",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rqBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "rqHeaders",
          "package": "http-server",
          "signature": "[Header]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "rqHeaders",
          "normalized": "[Header]",
          "package": "http-server",
          "partial": "Headers",
          "signature": "[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rqHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "rqMethod",
          "package": "http-server",
          "signature": "RequestMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "rqMethod",
          "package": "http-server",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emight need changing in future\n  1) to support \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e uri in OPTIONS request\n  2) transparent support for both relative\n     & absolute uris, although this should\n     already work (leave scheme & host parts empty).\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "rqURI",
          "package": "http-server",
          "signature": "URI",
          "type": "function"
        },
        "index": {
          "description": "might need changing in future to support uri in OPTIONS request transparent support for both relative absolute uris although this should already work leave scheme host parts empty",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "rqURI",
          "package": "http-server",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "rspBody",
          "package": "http-server",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "rspBody",
          "package": "http-server",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rspBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "rspCode",
          "package": "http-server",
          "signature": "ResponseCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "rspCode",
          "package": "http-server",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rspCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "rspHeaders",
          "package": "http-server",
          "signature": "[Header]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "rspHeaders",
          "normalized": "[Header]",
          "package": "http-server",
          "partial": "Headers",
          "signature": "[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rspHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Server",
          "name": "rspReason",
          "package": "http-server",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "rspReason",
          "package": "http-server",
          "partial": "Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:rspReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a server with the default configuration, and the given handler.\n  Requests are handled in separate threads.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "server",
          "package": "http-server",
          "signature": "Handler a -\u003e IO ()",
          "source": "src/Network-HTTP-Server.html#server",
          "type": "function"
        },
        "index": {
          "description": "Start server with the default configuration and the given handler Requests are handled in separate threads",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "server",
          "normalized": "Handler a-\u003eIO()",
          "package": "http-server",
          "signature": "Handler a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a server with the given configuration and handler.\n  Requests are handled in separate threads.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "serverWith",
          "package": "http-server",
          "signature": "Config -\u003e Handler a -\u003e IO ()",
          "source": "src/Network-HTTP-Server.html#serverWith",
          "type": "function"
        },
        "index": {
          "description": "Start server with the given configuration and handler Requests are handled in separate threads",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "serverWith",
          "normalized": "Config-\u003eHandler a-\u003eIO()",
          "package": "http-server",
          "partial": "With",
          "signature": "Config-\u003eHandler a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:serverWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost name to bind to.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "srvHost",
          "package": "http-server",
          "signature": "HostName",
          "source": "src/Network-HTTP-Server.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Host name to bind to",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "srvHost",
          "package": "http-server",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:srvHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer reports what's going on here.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "srvLog",
          "package": "http-server",
          "signature": "Logger",
          "source": "src/Network-HTTP-Server.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Server reports what going on here",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "srvLog",
          "package": "http-server",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:srvLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort to listen on.\n\u003c/p\u003e",
          "module": "Network.HTTP.Server",
          "name": "srvPort",
          "package": "http-server",
          "signature": "PortNumber",
          "source": "src/Network-HTTP-Server.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Port to listen on",
          "hierarchy": "Network HTTP Server",
          "module": "Network.HTTP.Server",
          "name": "srvPort",
          "package": "http-server",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-server/docs/Network-HTTP-Server.html#v:srvPort"
      }
    }
  ]
]