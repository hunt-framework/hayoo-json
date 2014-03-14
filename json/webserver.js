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
        "word": "webserver"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Date",
          "name": "Date",
          "package": "webserver",
          "source": "src/Network-Web-Date.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Web Date",
          "module": "Network.Web.Date",
          "name": "Date",
          "package": "webserver",
          "partial": "Date",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Date.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Date",
          "name": "HttpDate",
          "package": "webserver",
          "source": "src/Network-Web-Date.html#HttpDate",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Web Date",
          "module": "Network.Web.Date",
          "name": "HttpDate",
          "package": "webserver",
          "partial": "Http Date",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Date.html#t:HttpDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Date",
          "name": "parseDate",
          "package": "webserver",
          "signature": "ByteString -\u003e Maybe UTCTime",
          "source": "src/Network-Web-Date.html#parseDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Date",
          "module": "Network.Web.Date",
          "name": "parseDate",
          "normalized": "ByteString-\u003eMaybe UTCTime",
          "package": "webserver",
          "partial": "Date",
          "signature": "ByteString-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Date.html#v:parseDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Date",
          "name": "utcToDate",
          "package": "webserver",
          "signature": "UTCTime -\u003e HttpDate",
          "source": "src/Network-Web-Date.html#utcToDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Date",
          "module": "Network.Web.Date",
          "name": "utcToDate",
          "normalized": "UTCTime-\u003eHttpDate",
          "package": "webserver",
          "partial": "To Date",
          "signature": "UTCTime-\u003eHttpDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Date.html#v:utcToDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHTTP library for HTTP server.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Web.HTTP",
          "name": "HTTP",
          "package": "webserver",
          "source": "src/Network-Web-HTTP.html",
          "type": "module"
        },
        "index": {
          "description": "HTTP library for HTTP server",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "HTTP",
          "package": "webserver",
          "partial": "HTTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class to abstract \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "Comm",
          "package": "webserver",
          "source": "src/Network-Web-HTTP.html#Comm",
          "type": "class"
        },
        "index": {
          "description": "class to abstract Request and Response",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "Comm",
          "package": "webserver",
          "partial": "Comm",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#t:Comm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type for Key-values of HTTP header.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "Fields",
          "package": "webserver",
          "source": "src/Network-Web-HTTP.html#Fields",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type for Key-values of HTTP header",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "Fields",
          "package": "webserver",
          "partial": "Fields",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#t:Fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type of HTTP request.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "Request",
          "package": "webserver",
          "source": "src/Network-Web-HTTP.html#Request",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type of HTTP request",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "Request",
          "package": "webserver",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type of HTTP response.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "Response",
          "package": "webserver",
          "source": "src/Network-Web-HTTP.html#Response",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type of HTTP response",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "Response",
          "package": "webserver",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.HTTP",
          "name": "fromFields",
          "package": "webserver",
          "signature": "Fields -\u003e [(FieldKey, FieldValue)]",
          "source": "src/Network-Web-HTTP.html#fromFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "fromFields",
          "normalized": "Fields-\u003e[(FieldKey,FieldValue)]",
          "package": "webserver",
          "partial": "Fields",
          "signature": "Fields-\u003e[(FieldKey,FieldValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:fromFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserting the HTTP field.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "insertField",
          "package": "webserver",
          "signature": "FieldKey -\u003e FieldValue -\u003e a -\u003e a",
          "source": "src/Network-Web-HTTP.html#insertField",
          "type": "function"
        },
        "index": {
          "description": "Inserting the HTTP field",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "insertField",
          "normalized": "FieldKey-\u003eFieldValue-\u003ea-\u003ea",
          "package": "webserver",
          "partial": "Field",
          "signature": "FieldKey-\u003eFieldValue-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:insertField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserting the HTTP field.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "insertField'",
          "package": "webserver",
          "signature": "FieldKey -\u003e FieldValue -\u003e Fields -\u003e Fields",
          "source": "src/Network-Web-HTTP.html#insertField%27",
          "type": "function"
        },
        "index": {
          "description": "Inserting the HTTP field",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "insertField'",
          "normalized": "FieldKey-\u003eFieldValue-\u003eFields-\u003eFields",
          "package": "webserver",
          "partial": "Field'",
          "signature": "FieldKey-\u003eFieldValue-\u003eFields-\u003eFields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:insertField-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooking up the HTTP field value.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "lookupField",
          "package": "webserver",
          "signature": "FieldKey -\u003e a -\u003e Maybe FieldValue",
          "source": "src/Network-Web-HTTP.html#lookupField",
          "type": "function"
        },
        "index": {
          "description": "Looking up the HTTP field value",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "lookupField",
          "normalized": "FieldKey-\u003ea-\u003eMaybe FieldValue",
          "package": "webserver",
          "partial": "Field",
          "signature": "FieldKey-\u003ea-\u003eMaybe FieldValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:lookupField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooking up the HTTP field value.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "lookupField'",
          "package": "webserver",
          "signature": "FieldKey -\u003e Fields -\u003e Maybe FieldValue",
          "source": "src/Network-Web-HTTP.html#lookupField%27",
          "type": "function"
        },
        "index": {
          "description": "Looking up the HTTP field value",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "lookupField'",
          "normalized": "FieldKey-\u003eFields-\u003eMaybe FieldValue",
          "package": "webserver",
          "partial": "Field'",
          "signature": "FieldKey-\u003eFields-\u003eMaybe FieldValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:lookupField-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to make \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "makeResponse",
          "package": "webserver",
          "signature": "Status -\u003e [(FieldKey, FieldValue)] -\u003e Response",
          "source": "src/Network-Web-HTTP.html#makeResponse",
          "type": "function"
        },
        "index": {
          "description": "function to make Response",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "makeResponse",
          "normalized": "Status-\u003e[(FieldKey,FieldValue)]-\u003eResponse",
          "package": "webserver",
          "partial": "Response",
          "signature": "Status-\u003e[(FieldKey,FieldValue)]-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:makeResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to make \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "makeResponse2",
          "package": "webserver",
          "signature": "Status -\u003e Maybe ByteString -\u003e Maybe Integer -\u003e [(FieldKey, FieldValue)] -\u003e Response",
          "source": "src/Network-Web-HTTP.html#makeResponse2",
          "type": "function"
        },
        "index": {
          "description": "function to make Response",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "makeResponse2",
          "normalized": "Status-\u003eMaybe ByteString-\u003eMaybe Integer-\u003e[(FieldKey,FieldValue)]-\u003eResponse",
          "package": "webserver",
          "partial": "Response",
          "signature": "Status-\u003eMaybe ByteString-\u003eMaybe Integer-\u003e[(FieldKey,FieldValue)]-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:makeResponse2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to make \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "makeResponse3",
          "package": "webserver",
          "signature": "Status -\u003e Maybe ByteString -\u003e Maybe Integer -\u003e Fields -\u003e Response",
          "source": "src/Network-Web-HTTP.html#makeResponse3",
          "type": "function"
        },
        "index": {
          "description": "function to make Response",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "makeResponse3",
          "normalized": "Status-\u003eMaybe ByteString-\u003eMaybe Integer-\u003eFields-\u003eResponse",
          "package": "webserver",
          "partial": "Response",
          "signature": "Status-\u003eMaybe ByteString-\u003eMaybe Integer-\u003eFields-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:makeResponse3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceiving HTTP request from \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n  If request is broken, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "receive",
          "package": "webserver",
          "signature": "Handle -\u003e IO (Maybe Request)",
          "source": "src/Network-Web-HTTP.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receiving HTTP request from Handle If request is broken Nothing is returned",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "receive",
          "normalized": "Handle-\u003eIO(Maybe Request)",
          "package": "webserver",
          "signature": "Handle-\u003eIO(Maybe Request)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing HTTP header from \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n  This function is useful to parse CGI output.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "receiveFields",
          "package": "webserver",
          "signature": "Handle -\u003e IO Fields",
          "source": "src/Network-Web-HTTP.html#receiveFields",
          "type": "function"
        },
        "index": {
          "description": "Parsing HTTP header from Handle This function is useful to parse CGI output",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "receiveFields",
          "normalized": "Handle-\u003eIO Fields",
          "package": "webserver",
          "partial": "Fields",
          "signature": "Handle-\u003eIO Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:receiveFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntity body if exists\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "reqBody",
          "package": "webserver",
          "signature": "Request -\u003e Maybe ByteString",
          "source": "src/Network-Web-HTTP.html#reqBody",
          "type": "function"
        },
        "index": {
          "description": "Entity body if exists",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "reqBody",
          "normalized": "Request-\u003eMaybe ByteString",
          "package": "webserver",
          "partial": "Body",
          "signature": "Request-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:reqBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey-values of request header\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "reqFields",
          "package": "webserver",
          "signature": "Request -\u003e Fields",
          "source": "src/Network-Web-HTTP.html#reqFields",
          "type": "function"
        },
        "index": {
          "description": "Key-values of request header",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "reqFields",
          "normalized": "Request-\u003eFields",
          "package": "webserver",
          "partial": "Fields",
          "signature": "Request-\u003eFields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:reqFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of entity body from Content-Length:\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "reqLength",
          "package": "webserver",
          "signature": "Request -\u003e Integer",
          "source": "src/Network-Web-HTTP.html#reqLength",
          "type": "function"
        },
        "index": {
          "description": "Length of entity body from Content-Length",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "reqLength",
          "normalized": "Request-\u003eInteger",
          "package": "webserver",
          "partial": "Length",
          "signature": "Request-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:reqLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest method\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "reqMethod",
          "package": "webserver",
          "signature": "Request -\u003e Method",
          "source": "src/Network-Web-HTTP.html#reqMethod",
          "type": "function"
        },
        "index": {
          "description": "Request method",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "reqMethod",
          "normalized": "Request-\u003eMethod",
          "package": "webserver",
          "partial": "Method",
          "signature": "Request-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:reqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURI parsed from absolute URL or relative URL with the Host: field\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "reqURI",
          "package": "webserver",
          "signature": "Request -\u003e URI",
          "source": "src/Network-Web-HTTP.html#reqURI",
          "type": "function"
        },
        "index": {
          "description": "URI parsed from absolute URL or relative URL with the Host field",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "reqURI",
          "normalized": "Request-\u003eURI",
          "package": "webserver",
          "partial": "URI",
          "signature": "Request-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:reqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP version\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "reqVersion",
          "package": "webserver",
          "signature": "Request -\u003e Version",
          "source": "src/Network-Web-HTTP.html#reqVersion",
          "type": "function"
        },
        "index": {
          "description": "HTTP version",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "reqVersion",
          "normalized": "Request-\u003eVersion",
          "package": "webserver",
          "partial": "Version",
          "signature": "Request-\u003eVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:reqVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSending HTTP response to \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n  If \u003ccode\u003e\u003ca\u003eKeep\u003c/a\u003e\u003c/code\u003e is specified, the HTTP connection\n  will be kept. If \u003ccode\u003e\u003ca\u003eClose\u003c/a\u003e\u003c/code\u003e is specified, the connection will be closed.\n  \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e should be copied from \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "respond",
          "package": "webserver",
          "signature": "Handle -\u003e Version -\u003e Persist -\u003e Response -\u003e IO ()",
          "source": "src/Network-Web-HTTP.html#respond",
          "type": "function"
        },
        "index": {
          "description": "Sending HTTP response to Handle If Keep is specified the HTTP connection will be kept If Close is specified the connection will be closed Version should be copied from Request",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "respond",
          "normalized": "Handle-\u003eVersion-\u003ePersist-\u003eResponse-\u003eIO()",
          "package": "webserver",
          "signature": "Handle-\u003eVersion-\u003ePersist-\u003eResponse-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:respond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.HTTP",
          "name": "rspBody",
          "package": "webserver",
          "signature": "Response -\u003e Maybe ByteString",
          "source": "src/Network-Web-HTTP.html#rspBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "rspBody",
          "normalized": "Response-\u003eMaybe ByteString",
          "package": "webserver",
          "partial": "Body",
          "signature": "Response-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:rspBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.HTTP",
          "name": "rspFields",
          "package": "webserver",
          "signature": "Response -\u003e Fields",
          "source": "src/Network-Web-HTTP.html#rspFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "rspFields",
          "normalized": "Response-\u003eFields",
          "package": "webserver",
          "partial": "Fields",
          "signature": "Response-\u003eFields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:rspFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.HTTP",
          "name": "rspLength",
          "package": "webserver",
          "signature": "Response -\u003e Maybe Integer",
          "source": "src/Network-Web-HTTP.html#rspLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "rspLength",
          "normalized": "Response-\u003eMaybe Integer",
          "package": "webserver",
          "partial": "Length",
          "signature": "Response-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:rspLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.HTTP",
          "name": "rspLogMsg",
          "package": "webserver",
          "signature": "Response -\u003e String",
          "source": "src/Network-Web-HTTP.html#rspLogMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "rspLogMsg",
          "normalized": "Response-\u003eString",
          "package": "webserver",
          "partial": "Log Msg",
          "signature": "Response-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:rspLogMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse status\n\u003c/p\u003e",
          "module": "Network.Web.HTTP",
          "name": "rspStatus",
          "package": "webserver",
          "signature": "Response -\u003e Status",
          "source": "src/Network-Web-HTTP.html#rspStatus",
          "type": "function"
        },
        "index": {
          "description": "Response status",
          "hierarchy": "Network Web HTTP",
          "module": "Network.Web.HTTP",
          "name": "rspStatus",
          "normalized": "Response-\u003eStatus",
          "package": "webserver",
          "partial": "Status",
          "signature": "Response-\u003eStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-HTTP.html#v:rspStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParameters of HTTP.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Web.Params",
          "name": "Params",
          "package": "webserver",
          "source": "src/Network-Web-Params.html",
          "type": "module"
        },
        "index": {
          "description": "Parameters of HTTP",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Params",
          "package": "webserver",
          "partial": "Params",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for Content-Type.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "CT",
          "package": "webserver",
          "source": "src/Network-Web-Params.html#CT",
          "type": "type"
        },
        "index": {
          "description": "The type for Content-Type",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "CT",
          "package": "webserver",
          "partial": "CT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#t:CT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField key of HTTP header.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "FieldKey",
          "package": "webserver",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "data"
        },
        "index": {
          "description": "Field key of HTTP header",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FieldKey",
          "package": "webserver",
          "partial": "Field Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#t:FieldKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField value of HTTP header.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "FieldValue",
          "package": "webserver",
          "source": "src/Network-Web-Params.html#FieldValue",
          "type": "type"
        },
        "index": {
          "description": "Field value of HTTP header",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FieldValue",
          "package": "webserver",
          "partial": "Field Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#t:FieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethods of HTTP.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "Method",
          "package": "webserver",
          "source": "src/Network-Web-Params.html#Method",
          "type": "data"
        },
        "index": {
          "description": "Methods of HTTP",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Method",
          "package": "webserver",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for persist connection or not\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "Persist",
          "package": "webserver",
          "source": "src/Network-Web-Params.html#Persist",
          "type": "data"
        },
        "index": {
          "description": "The type for persist connection or not",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Persist",
          "package": "webserver",
          "partial": "Persist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#t:Persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExceptions for Web server\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "ServerException",
          "package": "webserver",
          "source": "src/Network-Web-Params.html#ServerException",
          "type": "data"
        },
        "index": {
          "description": "Exceptions for Web server",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "ServerException",
          "package": "webserver",
          "partial": "Server Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#t:ServerException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus of HTTP.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "Status",
          "package": "webserver",
          "source": "src/Network-Web-Params.html#Status",
          "type": "data"
        },
        "index": {
          "description": "Status of HTTP",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Status",
          "package": "webserver",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersions of HTTP.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "Version",
          "package": "webserver",
          "source": "src/Network-Web-Params.html#Version",
          "type": "data"
        },
        "index": {
          "description": "Versions of HTTP",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Version",
          "package": "webserver",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "Accepted",
          "package": "webserver",
          "signature": "Accepted",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Accepted",
          "package": "webserver",
          "partial": "Accepted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:Accepted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "BadGateway",
          "package": "webserver",
          "signature": "BadGateway",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "BadGateway",
          "package": "webserver",
          "partial": "Bad Gateway",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:BadGateway"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "BadRequest",
          "package": "webserver",
          "signature": "BadRequest",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "BadRequest",
          "package": "webserver",
          "partial": "Bad Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:BadRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "CONNECT",
          "package": "webserver",
          "signature": "CONNECT",
          "source": "src/Network-Web-Params.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "CONNECT",
          "package": "webserver",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "Close",
          "package": "webserver",
          "signature": "Close",
          "source": "src/Network-Web-Params.html#Persist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Close",
          "package": "webserver",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:Close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "Conflict",
          "package": "webserver",
          "signature": "Conflict",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Conflict",
          "package": "webserver",
          "partial": "Conflict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:Conflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "Continue",
          "package": "webserver",
          "signature": "Continue",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Continue",
          "package": "webserver",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "Created",
          "package": "webserver",
          "signature": "Created",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Created",
          "package": "webserver",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:Created"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "DELETE",
          "package": "webserver",
          "signature": "DELETE",
          "source": "src/Network-Web-Params.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "DELETE",
          "package": "webserver",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "ExpectationFailed",
          "package": "webserver",
          "signature": "ExpectationFailed",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "ExpectationFailed",
          "package": "webserver",
          "partial": "Expectation Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:ExpectationFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkAccept",
          "package": "webserver",
          "signature": "FkAccept",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkAccept",
          "package": "webserver",
          "partial": "Fk Accept",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esent by client\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "FkAcceptEncoding",
          "package": "webserver",
          "signature": "FkAcceptEncoding",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "description": "sent by client",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkAcceptEncoding",
          "package": "webserver",
          "partial": "Fk Accept Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkAcceptEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkAcceptLanguage",
          "package": "webserver",
          "signature": "FkAcceptLanguage",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkAcceptLanguage",
          "package": "webserver",
          "partial": "Fk Accept Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkAcceptLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkCacheControl",
          "package": "webserver",
          "signature": "FkCacheControl",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkCacheControl",
          "package": "webserver",
          "partial": "Fk Cache Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkCacheControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkConnection",
          "package": "webserver",
          "signature": "FkConnection",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkConnection",
          "package": "webserver",
          "partial": "Fk Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturned by server\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "FkContentEncoding",
          "package": "webserver",
          "signature": "FkContentEncoding",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "description": "returned by server",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkContentEncoding",
          "package": "webserver",
          "partial": "Fk Content Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkContentEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkContentLength",
          "package": "webserver",
          "signature": "FkContentLength",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkContentLength",
          "package": "webserver",
          "partial": "Fk Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkContentRange",
          "package": "webserver",
          "signature": "FkContentRange",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkContentRange",
          "package": "webserver",
          "partial": "Fk Content Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkContentRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkContentType",
          "package": "webserver",
          "signature": "FkContentType",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkContentType",
          "package": "webserver",
          "partial": "Fk Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkCookie",
          "package": "webserver",
          "signature": "FkCookie",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkCookie",
          "package": "webserver",
          "partial": "Fk Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkDate",
          "package": "webserver",
          "signature": "FkDate",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkDate",
          "package": "webserver",
          "partial": "Fk Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkHost",
          "package": "webserver",
          "signature": "FkHost",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkHost",
          "package": "webserver",
          "partial": "Fk Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkIfModifiedSince",
          "package": "webserver",
          "signature": "FkIfModifiedSince",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkIfModifiedSince",
          "package": "webserver",
          "partial": "Fk If Modified Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkIfModifiedSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkIfRange",
          "package": "webserver",
          "signature": "FkIfRange",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkIfRange",
          "package": "webserver",
          "partial": "Fk If Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkIfRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkIfUnmodifiedSince",
          "package": "webserver",
          "signature": "FkIfUnmodifiedSince",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkIfUnmodifiedSince",
          "package": "webserver",
          "partial": "Fk If Unmodified Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkIfUnmodifiedSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkLastModified",
          "package": "webserver",
          "signature": "FkLastModified",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkLastModified",
          "package": "webserver",
          "partial": "Fk Last Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkLastModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkLocation",
          "package": "webserver",
          "signature": "FkLocation",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkLocation",
          "package": "webserver",
          "partial": "Fk Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkOther",
          "package": "webserver",
          "signature": "FkOther ByteString",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkOther",
          "package": "webserver",
          "partial": "Fk Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkRange",
          "package": "webserver",
          "signature": "FkRange",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkRange",
          "package": "webserver",
          "partial": "Fk Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkServer",
          "package": "webserver",
          "signature": "FkServer",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkServer",
          "package": "webserver",
          "partial": "Fk Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkSetCookie2",
          "package": "webserver",
          "signature": "FkSetCookie2",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkSetCookie2",
          "package": "webserver",
          "partial": "Fk Set Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkSetCookie2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkStatus",
          "package": "webserver",
          "signature": "FkStatus",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkStatus",
          "package": "webserver",
          "partial": "Fk Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "FkTransferEncoding",
          "package": "webserver",
          "signature": "FkTransferEncoding",
          "source": "src/Network-Web-Params.html#FieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "FkTransferEncoding",
          "package": "webserver",
          "partial": "Fk Transfer Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:FkTransferEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "Forbidden",
          "package": "webserver",
          "signature": "Forbidden",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Forbidden",
          "package": "webserver",
          "partial": "Forbidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:Forbidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "Found",
          "package": "webserver",
          "signature": "Found",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Found",
          "package": "webserver",
          "partial": "Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:Found"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "GET",
          "package": "webserver",
          "signature": "GET",
          "source": "src/Network-Web-Params.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "GET",
          "package": "webserver",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "GatewayTimeout",
          "package": "webserver",
          "signature": "GatewayTimeout",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "GatewayTimeout",
          "package": "webserver",
          "partial": "Gateway Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:GatewayTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "Gone",
          "package": "webserver",
          "signature": "Gone",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Gone",
          "package": "webserver",
          "partial": "Gone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:Gone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "HEAD",
          "package": "webserver",
          "signature": "HEAD",
          "source": "src/Network-Web-Params.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "HEAD",
          "package": "webserver",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "HTTP10",
          "package": "webserver",
          "signature": "HTTP10",
          "source": "src/Network-Web-Params.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "HTTP10",
          "package": "webserver",
          "partial": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:HTTP10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "HTTP11",
          "package": "webserver",
          "signature": "HTTP11",
          "source": "src/Network-Web-Params.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "HTTP11",
          "package": "webserver",
          "partial": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:HTTP11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "HTTPVersionNotSupported",
          "package": "webserver",
          "signature": "HTTPVersionNotSupported",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "HTTPVersionNotSupported",
          "package": "webserver",
          "partial": "HTTPVersion Not Supported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:HTTPVersionNotSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "InternalServerError",
          "package": "webserver",
          "signature": "InternalServerError",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "InternalServerError",
          "package": "webserver",
          "partial": "Internal Server Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:InternalServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "Keep",
          "package": "webserver",
          "signature": "Keep",
          "source": "src/Network-Web-Params.html#Persist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Keep",
          "package": "webserver",
          "partial": "Keep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:Keep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "LengthRequired",
          "package": "webserver",
          "signature": "LengthRequired",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "LengthRequired",
          "package": "webserver",
          "partial": "Length Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:LengthRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "MethodNotAllowed",
          "package": "webserver",
          "signature": "MethodNotAllowed",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "MethodNotAllowed",
          "package": "webserver",
          "partial": "Method Not Allowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:MethodNotAllowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "MovedPermanently",
          "package": "webserver",
          "signature": "MovedPermanently",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "MovedPermanently",
          "package": "webserver",
          "partial": "Moved Permanently",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:MovedPermanently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "MultipleChoices",
          "package": "webserver",
          "signature": "MultipleChoices",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "MultipleChoices",
          "package": "webserver",
          "partial": "Multiple Choices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:MultipleChoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "NoContent",
          "package": "webserver",
          "signature": "NoContent",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "NoContent",
          "package": "webserver",
          "partial": "No Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:NoContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "NonAuthoritativeInformation",
          "package": "webserver",
          "signature": "NonAuthoritativeInformation",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "NonAuthoritativeInformation",
          "package": "webserver",
          "partial": "Non Authoritative Information",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:NonAuthoritativeInformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "NotAcceptable",
          "package": "webserver",
          "signature": "NotAcceptable",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "NotAcceptable",
          "package": "webserver",
          "partial": "Not Acceptable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:NotAcceptable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "NotFound",
          "package": "webserver",
          "signature": "NotFound",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "NotFound",
          "package": "webserver",
          "partial": "Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:NotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "NotImplemented",
          "package": "webserver",
          "signature": "NotImplemented",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "NotImplemented",
          "package": "webserver",
          "partial": "Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:NotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "NotModified",
          "package": "webserver",
          "signature": "NotModified",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "NotModified",
          "package": "webserver",
          "partial": "Not Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:NotModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "OK",
          "package": "webserver",
          "signature": "OK",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "OK",
          "package": "webserver",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "POST",
          "package": "webserver",
          "signature": "POST",
          "source": "src/Network-Web-Params.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "POST",
          "package": "webserver",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "PUT",
          "package": "webserver",
          "signature": "PUT",
          "source": "src/Network-Web-Params.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "PUT",
          "package": "webserver",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "PartialContent",
          "package": "webserver",
          "signature": "PartialContent Integer Integer",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "PartialContent",
          "package": "webserver",
          "partial": "Partial Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:PartialContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "PaymentRequired",
          "package": "webserver",
          "signature": "PaymentRequired",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "PaymentRequired",
          "package": "webserver",
          "partial": "Payment Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:PaymentRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "PerUnknown",
          "package": "webserver",
          "signature": "PerUnknown",
          "source": "src/Network-Web-Params.html#Persist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "PerUnknown",
          "package": "webserver",
          "partial": "Per Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:PerUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "PreconditionFailed",
          "package": "webserver",
          "signature": "PreconditionFailed",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "PreconditionFailed",
          "package": "webserver",
          "partial": "Precondition Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:PreconditionFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "ProxyAuthenticationRequired",
          "package": "webserver",
          "signature": "ProxyAuthenticationRequired",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "ProxyAuthenticationRequired",
          "package": "webserver",
          "partial": "Proxy Authentication Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:ProxyAuthenticationRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "RequestEntityTooLarge",
          "package": "webserver",
          "signature": "RequestEntityTooLarge",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "RequestEntityTooLarge",
          "package": "webserver",
          "partial": "Request Entity Too Large",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:RequestEntityTooLarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "RequestTimeout",
          "package": "webserver",
          "signature": "RequestTimeout",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "RequestTimeout",
          "package": "webserver",
          "partial": "Request Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:RequestTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "RequestURITooLarge",
          "package": "webserver",
          "signature": "RequestURITooLarge",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "RequestURITooLarge",
          "package": "webserver",
          "partial": "Request URIToo Large",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:RequestURITooLarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "RequestedRangeNotSatisfiable",
          "package": "webserver",
          "signature": "RequestedRangeNotSatisfiable",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "RequestedRangeNotSatisfiable",
          "package": "webserver",
          "partial": "Requested Range Not Satisfiable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:RequestedRangeNotSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "ResetContent",
          "package": "webserver",
          "signature": "ResetContent",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "ResetContent",
          "package": "webserver",
          "partial": "Reset Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:ResetContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "SeeOther",
          "package": "webserver",
          "signature": "SeeOther",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "SeeOther",
          "package": "webserver",
          "partial": "See Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:SeeOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "ServiceUnavailable",
          "package": "webserver",
          "signature": "ServiceUnavailable",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "ServiceUnavailable",
          "package": "webserver",
          "partial": "Service Unavailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:ServiceUnavailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "SwitchingProtocols",
          "package": "webserver",
          "signature": "SwitchingProtocols",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "SwitchingProtocols",
          "package": "webserver",
          "partial": "Switching Protocols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:SwitchingProtocols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "TRACE",
          "package": "webserver",
          "signature": "TRACE",
          "source": "src/Network-Web-Params.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "TRACE",
          "package": "webserver",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "TemporaryRedirect",
          "package": "webserver",
          "signature": "TemporaryRedirect",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "TemporaryRedirect",
          "package": "webserver",
          "partial": "Temporary Redirect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:TemporaryRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "TerminatedByClient",
          "package": "webserver",
          "signature": "TerminatedByClient",
          "source": "src/Network-Web-Params.html#ServerException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "TerminatedByClient",
          "package": "webserver",
          "partial": "Terminated By Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:TerminatedByClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "TimeOut",
          "package": "webserver",
          "signature": "TimeOut",
          "source": "src/Network-Web-Params.html#ServerException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "TimeOut",
          "package": "webserver",
          "partial": "Time Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:TimeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "Unauthorized",
          "package": "webserver",
          "signature": "Unauthorized",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "Unauthorized",
          "package": "webserver",
          "partial": "Unauthorized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:Unauthorized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "UnknownMethod",
          "package": "webserver",
          "signature": "UnknownMethod",
          "source": "src/Network-Web-Params.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "UnknownMethod",
          "package": "webserver",
          "partial": "Unknown Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:UnknownMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "UnsupportedMediaType",
          "package": "webserver",
          "signature": "UnsupportedMediaType",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "UnsupportedMediaType",
          "package": "webserver",
          "partial": "Unsupported Media Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:UnsupportedMediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "UseProxy",
          "package": "webserver",
          "signature": "UseProxy",
          "source": "src/Network-Web-Params.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "UseProxy",
          "package": "webserver",
          "partial": "Use Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:UseProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturning \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for 4xx and 5xx.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "badStatus",
          "package": "webserver",
          "signature": "Status -\u003e Bool",
          "source": "src/Network-Web-Params.html#badStatus",
          "type": "function"
        },
        "index": {
          "description": "Returning True for xx and xx",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "badStatus",
          "normalized": "Status-\u003eBool",
          "package": "webserver",
          "partial": "Status",
          "signature": "Status-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:badStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting \u003ccode\u003e\u003ca\u003eFieldKey\u003c/a\u003e\u003c/code\u003e to field key.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "fromFieldKey",
          "package": "webserver",
          "signature": "FieldKey -\u003e ByteString",
          "source": "src/Network-Web-Params.html#fromFieldKey",
          "type": "function"
        },
        "index": {
          "description": "Converting FieldKey to field key",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "fromFieldKey",
          "normalized": "FieldKey-\u003eByteString",
          "package": "webserver",
          "partial": "Field Key",
          "signature": "FieldKey-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:fromFieldKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "fromPersist",
          "package": "webserver",
          "signature": "Persist -\u003e ByteString",
          "source": "src/Network-Web-Params.html#fromPersist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "fromPersist",
          "normalized": "Persist-\u003eByteString",
          "package": "webserver",
          "partial": "Persist",
          "signature": "Persist-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:fromPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "fromStatus",
          "package": "webserver",
          "signature": "Status -\u003e ByteString",
          "source": "src/Network-Web-Params.html#fromStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "fromStatus",
          "normalized": "Status-\u003eByteString",
          "package": "webserver",
          "partial": "Status",
          "signature": "Status-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:fromStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "fromVersion",
          "package": "webserver",
          "signature": "Version -\u003e ByteString",
          "source": "src/Network-Web-Params.html#fromVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "fromVersion",
          "normalized": "Version-\u003eByteString",
          "package": "webserver",
          "partial": "Version",
          "signature": "Version-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:fromVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelecting a value of Content-Type from a file suffix.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "selectContentType",
          "package": "webserver",
          "signature": "String -\u003e CT",
          "source": "src/Network-Web-Params.html#selectContentType",
          "type": "function"
        },
        "index": {
          "description": "Selecting value of Content-Type from file suffix",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "selectContentType",
          "normalized": "String-\u003eCT",
          "package": "webserver",
          "partial": "Content Type",
          "signature": "String-\u003eCT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:selectContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value for text/html.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "textHtml",
          "package": "webserver",
          "signature": "CT",
          "source": "src/Network-Web-Params.html#textHtml",
          "type": "function"
        },
        "index": {
          "description": "The value for text html",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "textHtml",
          "package": "webserver",
          "partial": "Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:textHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting field key to \u003ccode\u003e\u003ca\u003eFieldKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "toFieldKey",
          "package": "webserver",
          "signature": "ByteString -\u003e FieldKey",
          "source": "src/Network-Web-Params.html#toFieldKey",
          "type": "function"
        },
        "index": {
          "description": "Converting field key to FieldKey",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "toFieldKey",
          "normalized": "ByteString-\u003eFieldKey",
          "package": "webserver",
          "partial": "Field Key",
          "signature": "ByteString-\u003eFieldKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:toFieldKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "toMethod",
          "package": "webserver",
          "signature": "ByteString -\u003e Method",
          "source": "src/Network-Web-Params.html#toMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "toMethod",
          "normalized": "ByteString-\u003eMethod",
          "package": "webserver",
          "partial": "Method",
          "signature": "ByteString-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:toMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "toPersist",
          "package": "webserver",
          "signature": "ByteString -\u003e Persist",
          "source": "src/Network-Web-Params.html#toPersist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "toPersist",
          "normalized": "ByteString-\u003ePersist",
          "package": "webserver",
          "partial": "Persist",
          "signature": "ByteString-\u003ePersist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:toPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting numeric status to \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.Params",
          "name": "toStatus",
          "package": "webserver",
          "signature": "ByteString -\u003e Maybe Status",
          "source": "src/Network-Web-Params.html#toStatus",
          "type": "function"
        },
        "index": {
          "description": "Converting numeric status to Status",
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "toStatus",
          "normalized": "ByteString-\u003eMaybe Status",
          "package": "webserver",
          "partial": "Status",
          "signature": "ByteString-\u003eMaybe Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:toStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Params",
          "name": "toVersion",
          "package": "webserver",
          "signature": "ByteString -\u003e Version",
          "source": "src/Network-Web-Params.html#toVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Params",
          "module": "Network.Web.Params",
          "name": "toVersion",
          "normalized": "ByteString-\u003eVersion",
          "package": "webserver",
          "partial": "Version",
          "signature": "ByteString-\u003eVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Params.html#v:toVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreating basic \u003ccode\u003e\u003ca\u003eWebServer\u003c/a\u003e\u003c/code\u003e.\n  Created \u003ccode\u003e\u003ca\u003eWebServer\u003c/a\u003e\u003c/code\u003e can handle GET / HEAD / POST;\n  OK, Not Found, Not Modified, Moved Permanently, etc;\n  partial getting; language negotication;\n  CGI, chunked data for CGI output;\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Web.Server.Basic",
          "name": "Basic",
          "package": "webserver",
          "source": "src/Network-Web-Server-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Creating basic WebServer Created WebServer can handle GET HEAD POST OK Not Found Not Modified Moved Permanently etc partial getting language negotication CGI chunked data for CGI output",
          "hierarchy": "Network Web Server Basic",
          "module": "Network.Web.Server.Basic",
          "name": "Basic",
          "package": "webserver",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eWebServer\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eBasicConfig\u003c/a\u003e\u003c/code\u003e.\n  The created \u003ccode\u003e\u003ca\u003eWebServer\u003c/a\u003e\u003c/code\u003e can handle GET / HEAD / POST;\n  OK, Not Found, Not Modified, Moved Permanently, etc;\n  partial getting; language negotication;\n  CGI, chunked data for CGI output;\n  If http://example.com/path does not exist but\n  http://example.com/path/ exists, the created \u003ccode\u003e\u003ca\u003eWebServer\u003c/a\u003e\u003c/code\u003e\n  redirects it. http://example.com/path/ is mapped to\n  /somewhere/path/ by \u003ccode\u003e\u003ca\u003emapper\u003c/a\u003e\u003c/code\u003e and index.html and index.html.en\n  automatically added and try to read by \u003ccode\u003e\u003ca\u003eobtain\u003c/a\u003e\u003c/code\u003e.\n  If Accept-Language is \u003ca\u003exx\u003c/a\u003e and \u003ca\u003eyy\u003c/a\u003e in order,\n  index.html.xx, index.html.yy, index.html and index.html.en\n  are tried. The created \u003ccode\u003e\u003ca\u003eWebServer\u003c/a\u003e\u003c/code\u003e does not dynamically\n  make index.html for a directory even if index.html does not\n  exist for security reasons.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Basic",
          "name": "basicServer",
          "package": "webserver",
          "signature": "BasicConfig -\u003e WebServer",
          "source": "src/Network-Web-Server-Basic.html#basicServer",
          "type": "function"
        },
        "index": {
          "description": "Creating WebServer with BasicConfig The created WebServer can handle GET HEAD POST OK Not Found Not Modified Moved Permanently etc partial getting language negotication CGI chunked data for CGI output If http example.com path does not exist but http example.com path exists the created WebServer redirects it http example.com path is mapped to somewhere path by mapper and index.html and index.html.en automatically added and try to read by obtain If Accept-Language is xx and yy in order index.html.xx index.html.yy index.html and index.html.en are tried The created WebServer does not dynamically make index.html for directory even if index.html does not exist for security reasons",
          "hierarchy": "Network Web Server Basic",
          "module": "Network.Web.Server.Basic",
          "name": "basicServer",
          "normalized": "BasicConfig-\u003eWebServer",
          "package": "webserver",
          "partial": "Server",
          "signature": "BasicConfig-\u003eWebServer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Basic.html#v:basicServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an HTTP server, using a default BasicConfig.\n  If you need to perform IO in the site mapping function (e.g. to check for the existence of files), use \u003ccode\u003e\u003ca\u003eserveHTTPMapIO\u003c/a\u003e\u003c/code\u003e,\n\u003c/p\u003e",
          "module": "Network.Web.Server.Basic",
          "name": "serveHTTP",
          "package": "webserver",
          "signature": "Maybe FilePath-\u003e Int-\u003e ByteString-\u003e (Request -\u003e Path)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Run an HTTP server using default BasicConfig If you need to perform IO in the site mapping function e.g to check for the existence of files use serveHTTPMapIO",
          "hierarchy": "Network Web Server Basic",
          "module": "Network.Web.Server.Basic",
          "name": "serveHTTP",
          "normalized": "Maybe FilePath-\u003eInt-\u003eByteString-\u003e(Request-\u003ePath)-\u003eIO()",
          "package": "webserver",
          "partial": "HTTP",
          "signature": "Maybe FilePath-\u003eInt-\u003eByteString-\u003e(Request-\u003ePath)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Basic.html#v:serveHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an HTTP server, using a default BasicConfig.\n  Can perform IO in the site mapping function.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Basic",
          "name": "serveHTTPMapIO",
          "package": "webserver",
          "signature": "Maybe FilePath-\u003e Int-\u003e ByteString-\u003e (Request -\u003e IO Path)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Run an HTTP server using default BasicConfig Can perform IO in the site mapping function",
          "hierarchy": "Network Web Server Basic",
          "module": "Network.Web.Server.Basic",
          "name": "serveHTTPMapIO",
          "normalized": "Maybe FilePath-\u003eInt-\u003eByteString-\u003e(Request-\u003eIO Path)-\u003eIO()",
          "package": "webserver",
          "partial": "HTTPMap IO",
          "signature": "Maybe FilePath-\u003eInt-\u003eByteString-\u003e(Request-\u003eIO Path)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Basic.html#v:serveHTTPMapIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Server.CGI",
          "name": "CGI",
          "package": "webserver",
          "source": "src/Network-Web-Server-CGI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Web Server CGI",
          "module": "Network.Web.Server.CGI",
          "name": "CGI",
          "package": "webserver",
          "partial": "CGI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-CGI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Server.CGI",
          "name": "tryGetCGI",
          "package": "webserver",
          "signature": "BasicConfig -\u003e Request -\u003e CGI -\u003e IO (Maybe Response)",
          "source": "src/Network-Web-Server-CGI.html#tryGetCGI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Server CGI",
          "module": "Network.Web.Server.CGI",
          "name": "tryGetCGI",
          "normalized": "BasicConfig-\u003eRequest-\u003eCGI-\u003eIO(Maybe Response)",
          "package": "webserver",
          "partial": "Get CGI",
          "signature": "BasicConfig-\u003eRequest-\u003eCGI-\u003eIO(Maybe Response)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-CGI.html#v:tryGetCGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Server.Lang",
          "name": "Lang",
          "package": "webserver",
          "source": "src/Network-Web-Server-Lang.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Web Server Lang",
          "module": "Network.Web.Server.Lang",
          "name": "Lang",
          "package": "webserver",
          "partial": "Lang",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Lang.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Server.Lang",
          "name": "parseLang",
          "package": "webserver",
          "signature": "String -\u003e [String]",
          "source": "src/Network-Web-Server-Lang.html#parseLang",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Server Lang",
          "module": "Network.Web.Server.Lang",
          "name": "parseLang",
          "normalized": "String-\u003e[String]",
          "package": "webserver",
          "partial": "Lang",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Lang.html#v:parseLang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Server.Params",
          "name": "Params",
          "package": "webserver",
          "source": "src/Network-Web-Server-Params.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "Params",
          "package": "webserver",
          "partial": "Params",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration for the basic web server.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "BasicConfig",
          "package": "webserver",
          "source": "src/Network-Web-Server-Params.html#BasicConfig",
          "type": "data"
        },
        "index": {
          "description": "The configuration for the basic web server",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "BasicConfig",
          "package": "webserver",
          "partial": "Basic Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#t:BasicConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal information of CGI converted from \u003ccode\u003eURI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "CGI",
          "package": "webserver",
          "source": "src/Network-Web-Server-Params.html#CGI",
          "type": "data"
        },
        "index": {
          "description": "Internal information of CGI converted from URI",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "CGI",
          "package": "webserver",
          "partial": "CGI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#t:CGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl information of how to handle \u003ccode\u003eURI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "Path",
          "package": "webserver",
          "source": "src/Network-Web-Server-Params.html#Path",
          "type": "data"
        },
        "index": {
          "description": "Control information of how to handle URI",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "Path",
          "package": "webserver",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Server.Params",
          "name": "BasicConfig",
          "package": "webserver",
          "signature": "BasicConfig",
          "source": "src/Network-Web-Server-Params.html#BasicConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "BasicConfig",
          "package": "webserver",
          "partial": "Basic Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:BasicConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Server.Params",
          "name": "CGI",
          "package": "webserver",
          "signature": "CGI",
          "source": "src/Network-Web-Server-Params.html#CGI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "CGI",
          "package": "webserver",
          "partial": "CGI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:CGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eURI\u003c/code\u003e is converted into a resource (typically a file).\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "File",
          "package": "webserver",
          "signature": "File FilePath",
          "source": "src/Network-Web-Server-Params.html#Path",
          "type": "function"
        },
        "index": {
          "description": "URI is converted into resource typically file",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "File",
          "package": "webserver",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eURI\u003c/code\u003e is converted into a handler callback\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "Handler",
          "package": "webserver",
          "signature": "Handler (IO Response)",
          "source": "src/Network-Web-Server-Params.html#Path",
          "type": "function"
        },
        "index": {
          "description": "URI is converted into handler callback",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "Handler",
          "package": "webserver",
          "partial": "Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eURI\u003c/code\u003e cannot be converted into any resources.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "None",
          "package": "webserver",
          "signature": "None",
          "source": "src/Network-Web-Server-Params.html#Path",
          "type": "function"
        },
        "index": {
          "description": "URI cannot be converted into any resources",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "None",
          "package": "webserver",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eURI\u003c/code\u003e is converted into CGI.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "PathCGI",
          "package": "webserver",
          "signature": "PathCGI CGI",
          "source": "src/Network-Web-Server-Params.html#Path",
          "type": "function"
        },
        "index": {
          "description": "URI is converted into CGI",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "PathCGI",
          "package": "webserver",
          "partial": "Path CGI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:PathCGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault \u003ccode\u003e\u003ca\u003eBasicConfig\u003c/a\u003e\u003c/code\u003e, with \u003ccode\u003e\u003ca\u003eobtain\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003einfo\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eserverName\u003c/a\u003e\u003c/code\u003e filled in.\n  It is necessary to override the \u003ccode\u003e\u003ca\u003emapper\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etcpInfo\u003c/a\u003e\u003c/code\u003e fields\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "defaultConfig",
          "package": "webserver",
          "signature": "BasicConfig",
          "source": "src/Network-Web-Server-Params.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Default BasicConfig with obtain info and serverName filled in It is necessary to override the mapper and tcpInfo fields",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "defaultConfig",
          "package": "webserver",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size and modification time of a file, if possible.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "defaultInfo",
          "package": "webserver",
          "signature": "FilePath -\u003e IO (Maybe (Integer, UTCTime))",
          "source": "src/Network-Web-Server-Params.html#defaultInfo",
          "type": "function"
        },
        "index": {
          "description": "Get the size and modification time of file if possible",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "defaultInfo",
          "normalized": "FilePath-\u003eIO(Maybe(Integer,UTCTime))",
          "package": "webserver",
          "partial": "Info",
          "signature": "FilePath-\u003eIO(Maybe(Integer,UTCTime))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:defaultInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a data slice from a file as a lazy bytestring.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "defaultObtain",
          "package": "webserver",
          "signature": "FilePath -\u003e Maybe (Integer, Integer) -\u003e IO ByteString",
          "source": "src/Network-Web-Server-Params.html#defaultObtain",
          "type": "function"
        },
        "index": {
          "description": "Obtain data slice from file as lazy bytestring",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "defaultObtain",
          "normalized": "FilePath-\u003eMaybe(Integer,Integer)-\u003eIO ByteString",
          "package": "webserver",
          "partial": "Obtain",
          "signature": "FilePath-\u003eMaybe(Integer,Integer)-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:defaultObtain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to return the size of the resource and\n   its modification time if exists.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "info",
          "package": "webserver",
          "signature": "FilePath -\u003e IO (Maybe (Integer, UTCTime))",
          "source": "src/Network-Web-Server-Params.html#BasicConfig",
          "type": "function"
        },
        "index": {
          "description": "function to return the size of the resource and its modification time if exists",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "info",
          "normalized": "FilePath-\u003eIO(Maybe(Integer,UTCTime))",
          "package": "webserver",
          "signature": "FilePath-\u003eIO(Maybe(Integer,UTCTime))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapper from \u003ccode\u003eURI\u003c/code\u003e to \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "mapper",
          "package": "webserver",
          "signature": "Request -\u003e IO Path",
          "source": "src/Network-Web-Server-Params.html#BasicConfig",
          "type": "function"
        },
        "index": {
          "description": "mapper from URI to Path",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "mapper",
          "normalized": "Request-\u003eIO Path",
          "package": "webserver",
          "signature": "Request-\u003eIO Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:mapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResource obtaining function. The second argument is\n   (offset of the resource, and length from the offset).\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "obtain",
          "package": "webserver",
          "signature": "FilePath -\u003e Maybe (Integer, Integer) -\u003e IO ByteString",
          "source": "src/Network-Web-Server-Params.html#BasicConfig",
          "type": "function"
        },
        "index": {
          "description": "Resource obtaining function The second argument is offset of the resource and length from the offset",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "obtain",
          "normalized": "FilePath-\u003eMaybe(Integer,Integer)-\u003eIO ByteString",
          "package": "webserver",
          "signature": "FilePath-\u003eMaybe(Integer,Integer)-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:obtain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path information.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "pathInfo",
          "package": "webserver",
          "signature": "String",
          "source": "src/Network-Web-Server-Params.html#CGI",
          "type": "function"
        },
        "index": {
          "description": "path information",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "pathInfo",
          "package": "webserver",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:pathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA program path to be executed.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "progPath",
          "package": "webserver",
          "signature": "FilePath",
          "source": "src/Network-Web-Server-Params.html#CGI",
          "type": "function"
        },
        "index": {
          "description": "program path to be executed",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "progPath",
          "package": "webserver",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:progPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query string.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "queryString",
          "package": "webserver",
          "signature": "String",
          "source": "src/Network-Web-Server-Params.html#CGI",
          "type": "function"
        },
        "index": {
          "description": "query string",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "queryString",
          "package": "webserver",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA script name.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "scriptName",
          "package": "webserver",
          "signature": "String",
          "source": "src/Network-Web-Server-Params.html#CGI",
          "type": "function"
        },
        "index": {
          "description": "script name",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "scriptName",
          "package": "webserver",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:scriptName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA server name specified the Server: field.\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "serverName",
          "package": "webserver",
          "signature": "ByteString",
          "source": "src/Network-Web-Server-Params.html#BasicConfig",
          "type": "function"
        },
        "index": {
          "description": "server name specified the Server field",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "serverName",
          "package": "webserver",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:serverName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTCPInfo\u003c/a\u003e\u003c/code\u003e for passing CGI. (See c10k library.)\n\u003c/p\u003e",
          "module": "Network.Web.Server.Params",
          "name": "tcpInfo",
          "package": "webserver",
          "signature": "TCPInfo",
          "source": "src/Network-Web-Server-Params.html#BasicConfig",
          "type": "function"
        },
        "index": {
          "description": "TCPInfo for passing CGI See c10k library",
          "hierarchy": "Network Web Server Params",
          "module": "Network.Web.Server.Params",
          "name": "tcpInfo",
          "package": "webserver",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Params.html#v:tcpInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Server.Range",
          "name": "Range",
          "package": "webserver",
          "source": "src/Network-Web-Server-Range.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Web Server Range",
          "module": "Network.Web.Server.Range",
          "name": "Range",
          "package": "webserver",
          "partial": "Range",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Range.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Server.Range",
          "name": "skipAndSize",
          "package": "webserver",
          "signature": "String -\u003e Integer -\u003e Maybe (Integer, Integer)",
          "source": "src/Network-Web-Server-Range.html#skipAndSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Server Range",
          "module": "Network.Web.Server.Range",
          "name": "skipAndSize",
          "normalized": "String-\u003eInteger-\u003eMaybe(Integer,Integer)",
          "package": "webserver",
          "partial": "And Size",
          "signature": "String-\u003eInteger-\u003eMaybe(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server-Range.html#v:skipAndSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHTTP server library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Web.Server",
          "name": "Server",
          "package": "webserver",
          "source": "src/Network-Web-Server.html",
          "type": "module"
        },
        "index": {
          "description": "HTTP server library",
          "hierarchy": "Network Web Server",
          "module": "Network.Web.Server",
          "name": "Server",
          "package": "webserver",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration for \u003ccode\u003e\u003ca\u003econnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.Server",
          "name": "WebConfig",
          "package": "webserver",
          "source": "src/Network-Web-Server.html#WebConfig",
          "type": "data"
        },
        "index": {
          "description": "The configuration for connection",
          "hierarchy": "Network Web Server",
          "module": "Network.Web.Server",
          "name": "WebConfig",
          "package": "webserver",
          "partial": "Web Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server.html#t:WebConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for HTTP server.\n\u003c/p\u003e",
          "module": "Network.Web.Server",
          "name": "WebServer",
          "package": "webserver",
          "source": "src/Network-Web-Server.html#WebServer",
          "type": "type"
        },
        "index": {
          "description": "The type for HTTP server",
          "hierarchy": "Network Web Server",
          "module": "Network.Web.Server",
          "name": "WebServer",
          "package": "webserver",
          "partial": "Web Server",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server.html#t:WebServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.Server",
          "name": "WebConfig",
          "package": "webserver",
          "signature": "WebConfig",
          "source": "src/Network-Web-Server.html#WebConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web Server",
          "module": "Network.Web.Server",
          "name": "WebConfig",
          "package": "webserver",
          "partial": "Web Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server.html#v:WebConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook to be called when access succeeds.\n\u003c/p\u003e",
          "module": "Network.Web.Server",
          "name": "accessHook",
          "package": "webserver",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-Web-Server.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "hook to be called when access succeeds",
          "hierarchy": "Network Web Server",
          "module": "Network.Web.Server",
          "name": "accessHook",
          "normalized": "String-\u003eIO()",
          "package": "webserver",
          "partial": "Hook",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server.html#v:accessHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook to be called when an HTTP connection is closed.\n\u003c/p\u003e",
          "module": "Network.Web.Server",
          "name": "closedHook",
          "package": "webserver",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-Web-Server.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "hook to be called when an HTTP connection is closed",
          "hierarchy": "Network Web Server",
          "module": "Network.Web.Server",
          "name": "closedHook",
          "normalized": "String-\u003eIO()",
          "package": "webserver",
          "partial": "Hook",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server.html#v:closedHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to run an \u003ccode\u003e\u003ca\u003eWebServer\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e should be mode by\n  converting an accepted socket.\n  Keep-alive / termination of HTTP 1.0 and HTTP 1.1 is correctly handled.\n  So, \u003ccode\u003e\u003ca\u003eWebServer\u003c/a\u003e\u003c/code\u003e need not to handle the Connection: header in response.\n  The Date: header is automatically added in response.\n\u003c/p\u003e",
          "module": "Network.Web.Server",
          "name": "connection",
          "package": "webserver",
          "signature": "Handle -\u003e WebServer -\u003e WebConfig -\u003e IO ()",
          "source": "src/Network-Web-Server.html#connection",
          "type": "function"
        },
        "index": {
          "description": "function to run an WebServer Handle should be mode by converting an accepted socket Keep-alive termination of HTTP and HTTP is correctly handled So WebServer need not to handle the Connection header in response The Date header is automatically added in response",
          "hierarchy": "Network Web Server",
          "module": "Network.Web.Server",
          "name": "connection",
          "normalized": "Handle-\u003eWebServer-\u003eWebConfig-\u003eIO()",
          "package": "webserver",
          "signature": "Handle-\u003eWebServer-\u003eWebConfig-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server.html#v:connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time to unblock receiving an HTTP request in seconds.\n\u003c/p\u003e",
          "module": "Network.Web.Server",
          "name": "connectionTimer",
          "package": "webserver",
          "signature": "Int",
          "source": "src/Network-Web-Server.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "time to unblock receiving an HTTP request in seconds",
          "hierarchy": "Network Web Server",
          "module": "Network.Web.Server",
          "name": "connectionTimer",
          "package": "webserver",
          "partial": "Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server.html#v:connectionTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook to be called when an access error occurs.\n\u003c/p\u003e",
          "module": "Network.Web.Server",
          "name": "errorHook",
          "package": "webserver",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-Web-Server.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "hook to be called when an access error occurs",
          "hierarchy": "Network Web Server",
          "module": "Network.Web.Server",
          "name": "errorHook",
          "normalized": "String-\u003eIO()",
          "package": "webserver",
          "partial": "Hook",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server.html#v:errorHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook to be called when a fatal error occurs.\n\u003c/p\u003e",
          "module": "Network.Web.Server",
          "name": "fatalErrorHook",
          "package": "webserver",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-Web-Server.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "hook to be called when fatal error occurs",
          "hierarchy": "Network Web Server",
          "module": "Network.Web.Server",
          "name": "fatalErrorHook",
          "normalized": "String-\u003eIO()",
          "package": "webserver",
          "partial": "Error Hook",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-Server.html#v:fatalErrorHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for URI\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Web.URI",
          "name": "URI",
          "package": "webserver",
          "source": "src/Network-Web-URI.html",
          "type": "module"
        },
        "index": {
          "description": "Parser for URI",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "URI",
          "package": "webserver",
          "partial": "URI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type for URI\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "URI",
          "package": "webserver",
          "source": "src/Network-Web-URI.html#URI",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type for URI",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "URI",
          "package": "webserver",
          "partial": "URI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#t:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type for URI Authority\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "URIAuth",
          "package": "webserver",
          "source": "src/Network-Web-URI.html#URIAuth",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type for URI Authority",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "URIAuth",
          "package": "webserver",
          "partial": "URIAuth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#t:URIAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking whether or not URI starts with \"http:\u003cem/\u003e\".\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "isAbsoluteURI",
          "package": "webserver",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Network-Web-URI.html#isAbsoluteURI",
          "type": "function"
        },
        "index": {
          "description": "Checking whether or not URI starts with http",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "isAbsoluteURI",
          "normalized": "ByteString-\u003eBool",
          "package": "webserver",
          "partial": "Absolute URI",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:isAbsoluteURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing URI.\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "parseURI",
          "package": "webserver",
          "signature": "ByteString -\u003e Maybe URI",
          "source": "src/Network-Web-URI.html#parseURI",
          "type": "function"
        },
        "index": {
          "description": "Parsing URI",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "parseURI",
          "normalized": "ByteString-\u003eMaybe URI",
          "package": "webserver",
          "partial": "URI",
          "signature": "ByteString-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:parseURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaking a URL string from \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "toURL",
          "package": "webserver",
          "signature": "URI -\u003e ByteString",
          "source": "src/Network-Web-URI.html#toURL",
          "type": "function"
        },
        "index": {
          "description": "Making URL string from URI",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "toURL",
          "normalized": "URI-\u003eByteString",
          "package": "webserver",
          "partial": "URL",
          "signature": "URI-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:toURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaking a URL string from \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e without port and parameters.\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "toURLPath",
          "package": "webserver",
          "signature": "URI -\u003e ByteString",
          "source": "src/Network-Web-URI.html#toURLPath",
          "type": "function"
        },
        "index": {
          "description": "Making URL string from URI without port and parameters",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "toURLPath",
          "normalized": "URI-\u003eByteString",
          "package": "webserver",
          "partial": "URLPath",
          "signature": "URI-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:toURLPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaking a URL string from \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e without port.\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "toURLwoPort",
          "package": "webserver",
          "signature": "URI -\u003e ByteString",
          "source": "src/Network-Web-URI.html#toURLwoPort",
          "type": "function"
        },
        "index": {
          "description": "Making URL string from URI without port",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "toURLwoPort",
          "normalized": "URI-\u003eByteString",
          "package": "webserver",
          "partial": "URLwo Port",
          "signature": "URI-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:toURLwoPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding the %XX encoding.\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "unEscapeByteString",
          "package": "webserver",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Web-URI.html#unEscapeByteString",
          "type": "function"
        },
        "index": {
          "description": "Decoding the XX encoding",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "unEscapeByteString",
          "normalized": "ByteString-\u003eByteString",
          "package": "webserver",
          "partial": "Escape Byte String",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:unEscapeByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding the %XX encoding.\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "unEscapeString",
          "package": "webserver",
          "signature": "String -\u003e String",
          "source": "src/Network-Web-URI.html#unEscapeString",
          "type": "function"
        },
        "index": {
          "description": "Decoding the XX encoding",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "unEscapeString",
          "normalized": "String-\u003eString",
          "package": "webserver",
          "partial": "Escape String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:unEscapeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.URI",
          "name": "uriAuthority",
          "package": "webserver",
          "signature": "URI -\u003e Maybe URIAuth",
          "source": "src/Network-Web-URI.html#uriAuthority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "uriAuthority",
          "normalized": "URI-\u003eMaybe URIAuth",
          "package": "webserver",
          "partial": "Authority",
          "signature": "URI-\u003eMaybe URIAuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:uriAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.URI",
          "name": "uriFragment",
          "package": "webserver",
          "signature": "URI -\u003e ByteString",
          "source": "src/Network-Web-URI.html#uriFragment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "uriFragment",
          "normalized": "URI-\u003eByteString",
          "package": "webserver",
          "partial": "Fragment",
          "signature": "URI-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:uriFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting a hostname from \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "uriHostName",
          "package": "webserver",
          "signature": "URI -\u003e ByteString",
          "source": "src/Network-Web-URI.html#uriHostName",
          "type": "function"
        },
        "index": {
          "description": "Getting hostname from URI",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "uriHostName",
          "normalized": "URI-\u003eByteString",
          "package": "webserver",
          "partial": "Host Name",
          "signature": "URI-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:uriHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.URI",
          "name": "uriPath",
          "package": "webserver",
          "signature": "URI -\u003e ByteString",
          "source": "src/Network-Web-URI.html#uriPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "uriPath",
          "normalized": "URI-\u003eByteString",
          "package": "webserver",
          "partial": "Path",
          "signature": "URI-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:uriPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.URI",
          "name": "uriPort",
          "package": "webserver",
          "signature": "URIAuth -\u003e ByteString",
          "source": "src/Network-Web-URI.html#uriPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "uriPort",
          "normalized": "URIAuth-\u003eByteString",
          "package": "webserver",
          "partial": "Port",
          "signature": "URIAuth-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:uriPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting a port number from \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Web.URI",
          "name": "uriPortNumber",
          "package": "webserver",
          "signature": "URI -\u003e ByteString",
          "source": "src/Network-Web-URI.html#uriPortNumber",
          "type": "function"
        },
        "index": {
          "description": "Getting port number from URI",
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "uriPortNumber",
          "normalized": "URI-\u003eByteString",
          "package": "webserver",
          "partial": "Port Number",
          "signature": "URI-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:uriPortNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.URI",
          "name": "uriQuery",
          "package": "webserver",
          "signature": "URI -\u003e ByteString",
          "source": "src/Network-Web-URI.html#uriQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "uriQuery",
          "normalized": "URI-\u003eByteString",
          "package": "webserver",
          "partial": "Query",
          "signature": "URI-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:uriQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.URI",
          "name": "uriRegName",
          "package": "webserver",
          "signature": "URIAuth -\u003e ByteString",
          "source": "src/Network-Web-URI.html#uriRegName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "uriRegName",
          "normalized": "URIAuth-\u003eByteString",
          "package": "webserver",
          "partial": "Reg Name",
          "signature": "URIAuth-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:uriRegName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.URI",
          "name": "uriScheme",
          "package": "webserver",
          "signature": "URI -\u003e ByteString",
          "source": "src/Network-Web-URI.html#uriScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "uriScheme",
          "normalized": "URI-\u003eByteString",
          "package": "webserver",
          "partial": "Scheme",
          "signature": "URI-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:uriScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Web.URI",
          "name": "uriUserInfo",
          "package": "webserver",
          "signature": "URIAuth -\u003e ByteString",
          "source": "src/Network-Web-URI.html#uriUserInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Web URI",
          "module": "Network.Web.URI",
          "name": "uriUserInfo",
          "normalized": "URIAuth-\u003eByteString",
          "package": "webserver",
          "partial": "User Info",
          "signature": "URIAuth-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webserver/docs/Network-Web-URI.html#v:uriUserInfo"
      }
    }
  ]
]