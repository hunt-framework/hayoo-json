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
        "word": "wai-extra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBackend for Common Gateway Interface. Almost all users should use the\n \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Handler.CGI",
          "name": "CGI",
          "package": "wai-extra",
          "source": "src/Network-Wai-Handler-CGI.html",
          "type": "module"
        },
        "index": {
          "description": "Backend for Common Gateway Interface Almost all users should use the run function",
          "hierarchy": "Network Wai Handler CGI",
          "module": "Network.Wai.Handler.CGI",
          "name": "CGI",
          "package": "wai-extra",
          "partial": "CGI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Handler-CGI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.CGI",
          "name": "requestBodyFunc",
          "package": "wai-extra",
          "signature": "(Int -\u003e IO (Maybe ByteString)) -\u003e Int -\u003e Source IO ByteString",
          "source": "src/Network-Wai-Handler-CGI.html#requestBodyFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler CGI",
          "module": "Network.Wai.Handler.CGI",
          "name": "requestBodyFunc",
          "normalized": "(Int-\u003eIO(Maybe ByteString))-\u003eInt-\u003eSource IO ByteString",
          "package": "wai-extra",
          "partial": "Body Func",
          "signature": "(Int-\u003eIO(Maybe ByteString))-\u003eInt-\u003eSource IO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Handler-CGI.html#v:requestBodyFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an application using CGI.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.CGI",
          "name": "run",
          "package": "wai-extra",
          "signature": "Application -\u003e IO ()",
          "source": "src/Network-Wai-Handler-CGI.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run an application using CGI",
          "hierarchy": "Network Wai Handler CGI",
          "module": "Network.Wai.Handler.CGI",
          "name": "run",
          "normalized": "Application-\u003eIO()",
          "package": "wai-extra",
          "signature": "Application-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Handler-CGI.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic CGI helper, which allows other backends (FastCGI and SCGI) to\n use the same code as CGI. Most users will not need this function, and can\n stick with \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunSendfile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.CGI",
          "name": "runGeneric",
          "package": "wai-extra",
          "signature": "[(String, String)]-\u003e (Int -\u003e Source IO ByteString)-\u003e (ByteString -\u003e IO ())-\u003e Maybe ByteString-\u003e Application-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "generic CGI helper which allows other backends FastCGI and SCGI to use the same code as CGI Most users will not need this function and can stick with run or runSendfile",
          "hierarchy": "Network Wai Handler CGI",
          "module": "Network.Wai.Handler.CGI",
          "name": "runGeneric",
          "normalized": "[(String,String)]-\u003e(Int-\u003eSource IO ByteString)-\u003e(ByteString-\u003eIO())-\u003eMaybe ByteString-\u003eApplication-\u003eIO()",
          "package": "wai-extra",
          "partial": "Generic",
          "signature": "[(String,String)]-\u003e(Int-\u003eSource IO ByteString)-\u003e(ByteString-\u003eIO())-\u003eMaybe ByteString-\u003eApplication-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Handler-CGI.html#v:runGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome web servers provide an optimization for sending files via a sendfile\n system call via a special header. To use this feature, provide that header\n name here.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.CGI",
          "name": "runSendfile",
          "package": "wai-extra",
          "signature": "ByteString-\u003e Application-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Some web servers provide an optimization for sending files via sendfile system call via special header To use this feature provide that header name here",
          "hierarchy": "Network Wai Handler CGI",
          "module": "Network.Wai.Handler.CGI",
          "name": "runSendfile",
          "normalized": "ByteString-\u003eApplication-\u003eIO()",
          "package": "wai-extra",
          "partial": "Sendfile",
          "signature": "ByteString-\u003eApplication-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Handler-CGI.html#v:runSendfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.AcceptOverride",
          "name": "AcceptOverride",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-AcceptOverride.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Middleware AcceptOverride",
          "module": "Network.Wai.Middleware.AcceptOverride",
          "name": "AcceptOverride",
          "package": "wai-extra",
          "partial": "Accept Override",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-AcceptOverride.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.AcceptOverride",
          "name": "acceptOverride",
          "package": "wai-extra",
          "signature": "Middleware",
          "source": "src/Network-Wai-Middleware-AcceptOverride.html#acceptOverride",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware AcceptOverride",
          "module": "Network.Wai.Middleware.AcceptOverride",
          "name": "acceptOverride",
          "package": "wai-extra",
          "partial": "Override",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-AcceptOverride.html#v:acceptOverride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatically produce responses to HEAD requests based on the underlying\n applications GET response.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Middleware.Autohead",
          "name": "Autohead",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-Autohead.html",
          "type": "module"
        },
        "index": {
          "description": "Automatically produce responses to HEAD requests based on the underlying applications GET response",
          "hierarchy": "Network Wai Middleware Autohead",
          "module": "Network.Wai.Middleware.Autohead",
          "name": "Autohead",
          "package": "wai-extra",
          "partial": "Autohead",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Autohead.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Autohead",
          "name": "autohead",
          "package": "wai-extra",
          "signature": "Middleware",
          "source": "src/Network-Wai-Middleware-Autohead.html#autohead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Autohead",
          "module": "Network.Wai.Middleware.Autohead",
          "name": "autohead",
          "package": "wai-extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Autohead.html#v:autohead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.CleanPath",
          "name": "CleanPath",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-CleanPath.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Middleware CleanPath",
          "module": "Network.Wai.Middleware.CleanPath",
          "name": "CleanPath",
          "package": "wai-extra",
          "partial": "Clean Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-CleanPath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.CleanPath",
          "name": "cleanPath",
          "package": "wai-extra",
          "signature": "([Text] -\u003e Either ByteString [Text]) -\u003e ByteString -\u003e ([Text] -\u003e Application) -\u003e Application",
          "source": "src/Network-Wai-Middleware-CleanPath.html#cleanPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware CleanPath",
          "module": "Network.Wai.Middleware.CleanPath",
          "name": "cleanPath",
          "normalized": "([Text]-\u003eEither ByteString[Text])-\u003eByteString-\u003e([Text]-\u003eApplication)-\u003eApplication",
          "package": "wai-extra",
          "partial": "Path",
          "signature": "([Text]-\u003eEither ByteString[Text])-\u003eByteString-\u003e([Text]-\u003eApplication)-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-CleanPath.html#v:cleanPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatic gzip compression of responses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "Gzip",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-Gzip.html",
          "type": "module"
        },
        "index": {
          "description": "Automatic gzip compression of responses",
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "Gzip",
          "package": "wai-extra",
          "partial": "Gzip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Gzip",
          "name": "GzipFiles",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-Gzip.html#GzipFiles",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "GzipFiles",
          "package": "wai-extra",
          "partial": "Gzip Files",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#t:GzipFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Gzip",
          "name": "GzipSettings",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-Gzip.html#GzipSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "GzipSettings",
          "package": "wai-extra",
          "partial": "Gzip Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#t:GzipSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Gzip",
          "name": "GzipCacheFolder",
          "package": "wai-extra",
          "signature": "GzipCacheFolder FilePath",
          "source": "src/Network-Wai-Middleware-Gzip.html#GzipFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "GzipCacheFolder",
          "package": "wai-extra",
          "partial": "Gzip Cache Folder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:GzipCacheFolder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Gzip",
          "name": "GzipCompress",
          "package": "wai-extra",
          "signature": "GzipCompress",
          "source": "src/Network-Wai-Middleware-Gzip.html#GzipFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "GzipCompress",
          "package": "wai-extra",
          "partial": "Gzip Compress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:GzipCompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Gzip",
          "name": "GzipIgnore",
          "package": "wai-extra",
          "signature": "GzipIgnore",
          "source": "src/Network-Wai-Middleware-Gzip.html#GzipFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "GzipIgnore",
          "package": "wai-extra",
          "partial": "Gzip Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:GzipIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "def",
          "package": "wai-extra",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "The default value for this type",
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "def",
          "package": "wai-extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Gzip",
          "name": "defaultCheckMime",
          "package": "wai-extra",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Network-Wai-Middleware-Gzip.html#defaultCheckMime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "defaultCheckMime",
          "normalized": "ByteString-\u003eBool",
          "package": "wai-extra",
          "partial": "Check Mime",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:defaultCheckMime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse gzip to compress the body of the response.\n\u003c/p\u003e\u003cp\u003eAnalyzes the \"Accept-Encoding\" header from the client to determine\n if gzip is supported.\n\u003c/p\u003e\u003cp\u003ePossible future enhancements:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Only compress if the response is above a certain size.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "gzip",
          "package": "wai-extra",
          "signature": "GzipSettings -\u003e Middleware",
          "source": "src/Network-Wai-Middleware-Gzip.html#gzip",
          "type": "function"
        },
        "index": {
          "description": "Use gzip to compress the body of the response Analyzes the Accept-Encoding header from the client to determine if gzip is supported Possible future enhancements Only compress if the response is above certain size",
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "gzip",
          "normalized": "GzipSettings-\u003eMiddleware",
          "package": "wai-extra",
          "signature": "GzipSettings-\u003eMiddleware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:gzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Gzip",
          "name": "gzipCheckMime",
          "package": "wai-extra",
          "signature": "GzipSettings -\u003e ByteString -\u003e Bool",
          "source": "src/Network-Wai-Middleware-Gzip.html#gzipCheckMime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "gzipCheckMime",
          "normalized": "GzipSettings-\u003eByteString-\u003eBool",
          "package": "wai-extra",
          "partial": "Check Mime",
          "signature": "GzipSettings-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:gzipCheckMime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Gzip",
          "name": "gzipFiles",
          "package": "wai-extra",
          "signature": "GzipSettings -\u003e GzipFiles",
          "source": "src/Network-Wai-Middleware-Gzip.html#gzipFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Gzip",
          "module": "Network.Wai.Middleware.Gzip",
          "name": "gzipFiles",
          "normalized": "GzipSettings-\u003eGzipFiles",
          "package": "wai-extra",
          "partial": "Files",
          "signature": "GzipSettings-\u003eGzipFiles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:gzipFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements HTTP Basic Authentication.\n\u003c/p\u003e\u003cp\u003eThis module may add digest authentication in the future.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "HttpAuth",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-HttpAuth.html",
          "type": "module"
        },
        "index": {
          "description": "Implements HTTP Basic Authentication This module may add digest authentication in the future",
          "hierarchy": "Network Wai Middleware HttpAuth",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "HttpAuth",
          "package": "wai-extra",
          "partial": "Http Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthentication settings. This value is an instance of \u003ccode\u003eIsString\u003c/code\u003e, so the\n recommended approach to create a value is to provide a string literal (which\n will be the realm) and then overriding individual fields.\n\u003c/p\u003e\u003cpre\u003e \"My Realm\" { authIsProtected = someFunc } :: AuthSettings\n\u003c/pre\u003e\u003cp\u003eSince 1.3.4\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "AuthSettings",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-HttpAuth.html#AuthSettings",
          "type": "data"
        },
        "index": {
          "description": "Authentication settings This value is an instance of IsString so the recommended approach to create value is to provide string literal which will be the realm and then overriding individual fields My Realm authIsProtected someFunc AuthSettings Since",
          "hierarchy": "Network Wai Middleware HttpAuth",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "AuthSettings",
          "package": "wai-extra",
          "partial": "Auth Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#t:AuthSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a given username and password is valid.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "CheckCreds",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-HttpAuth.html#CheckCreds",
          "type": "type"
        },
        "index": {
          "description": "Check if given username and password is valid",
          "hierarchy": "Network Wai Middleware HttpAuth",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "CheckCreds",
          "package": "wai-extra",
          "partial": "Check Creds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#t:CheckCreds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if access to the requested resource is restricted.\n\u003c/p\u003e\u003cp\u003eDefault: always returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.3.4\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "authIsProtected",
          "package": "wai-extra",
          "signature": "AuthSettings -\u003e Request -\u003e IO Bool",
          "source": "src/Network-Wai-Middleware-HttpAuth.html#authIsProtected",
          "type": "function"
        },
        "index": {
          "description": "Determine if access to the requested resource is restricted Default always returns True Since",
          "hierarchy": "Network Wai Middleware HttpAuth",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "authIsProtected",
          "normalized": "AuthSettings-\u003eRequest-\u003eIO Bool",
          "package": "wai-extra",
          "partial": "Is Protected",
          "signature": "AuthSettings-\u003eRequest-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#v:authIsProtected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the realm and returns an appropriate 401 response when\n authentication is not provided.\n\u003c/p\u003e\u003cp\u003eSince 1.3.4\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "authOnNoAuth",
          "package": "wai-extra",
          "signature": "AuthSettings -\u003e ByteString -\u003e Application",
          "source": "src/Network-Wai-Middleware-HttpAuth.html#authOnNoAuth",
          "type": "function"
        },
        "index": {
          "description": "Takes the realm and returns an appropriate response when authentication is not provided Since",
          "hierarchy": "Network Wai Middleware HttpAuth",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "authOnNoAuth",
          "normalized": "AuthSettings-\u003eByteString-\u003eApplication",
          "package": "wai-extra",
          "partial": "On No Auth",
          "signature": "AuthSettings-\u003eByteString-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#v:authOnNoAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince 1.3.4\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "authRealm",
          "package": "wai-extra",
          "signature": "AuthSettings -\u003e ByteString",
          "source": "src/Network-Wai-Middleware-HttpAuth.html#authRealm",
          "type": "function"
        },
        "index": {
          "description": "Since",
          "hierarchy": "Network Wai Middleware HttpAuth",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "authRealm",
          "normalized": "AuthSettings-\u003eByteString",
          "package": "wai-extra",
          "partial": "Realm",
          "signature": "AuthSettings-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#v:authRealm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform basic authentication.\n\u003c/p\u003e\u003cpre\u003e basicAuth (\\u p -\u003e return $ u == \"michael\" && p == \"mypass\") \"My Realm\"\n\u003c/pre\u003e\u003cp\u003eSince 1.3.4\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "basicAuth",
          "package": "wai-extra",
          "signature": "CheckCreds -\u003e AuthSettings -\u003e Middleware",
          "source": "src/Network-Wai-Middleware-HttpAuth.html#basicAuth",
          "type": "function"
        },
        "index": {
          "description": "Perform basic authentication basicAuth return michael mypass My Realm Since",
          "hierarchy": "Network Wai Middleware HttpAuth",
          "module": "Network.Wai.Middleware.HttpAuth",
          "name": "basicAuth",
          "normalized": "CheckCreds-\u003eAuthSettings-\u003eMiddleware",
          "package": "wai-extra",
          "partial": "Auth",
          "signature": "CheckCreds-\u003eAuthSettings-\u003eMiddleware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#v:basicAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatic wrapping of JSON responses to convert into JSONP.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Middleware.Jsonp",
          "name": "Jsonp",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-Jsonp.html",
          "type": "module"
        },
        "index": {
          "description": "Automatic wrapping of JSON responses to convert into JSONP",
          "hierarchy": "Network Wai Middleware Jsonp",
          "module": "Network.Wai.Middleware.Jsonp",
          "name": "Jsonp",
          "package": "wai-extra",
          "partial": "Jsonp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Jsonp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap json responses in a jsonp callback.\n\u003c/p\u003e\u003cp\u003eBasically, if the user requested a \"text/javascript\" and supplied a\n \"callback\" GET parameter, ask the application for an\n \"application/json\" response, then convert that into a JSONP response,\n having a content type of \"text/javascript\" and calling the specified\n callback function.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Jsonp",
          "name": "jsonp",
          "package": "wai-extra",
          "signature": "Middleware",
          "source": "src/Network-Wai-Middleware-Jsonp.html#jsonp",
          "type": "function"
        },
        "index": {
          "description": "Wrap json responses in jsonp callback Basically if the user requested text javascript and supplied callback GET parameter ask the application for an application json response then convert that into JSONP response having content type of text javascript and calling the specified callback function",
          "hierarchy": "Network Wai Middleware Jsonp",
          "module": "Network.Wai.Middleware.Jsonp",
          "name": "jsonp",
          "package": "wai-extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Jsonp.html#v:jsonp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.MethodOverride",
          "name": "MethodOverride",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-MethodOverride.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Middleware MethodOverride",
          "module": "Network.Wai.Middleware.MethodOverride",
          "name": "MethodOverride",
          "package": "wai-extra",
          "partial": "Method Override",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-MethodOverride.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows overriding of the HTTP request method via the _method query string\n parameter.\n\u003c/p\u003e\u003cp\u003eThis middleware only applies when the initial request method is POST. This\n allow submitting of normal HTML forms, without worries of semantics\n mismatches in the HTTP spec.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.MethodOverride",
          "name": "methodOverride",
          "package": "wai-extra",
          "signature": "Middleware",
          "source": "src/Network-Wai-Middleware-MethodOverride.html#methodOverride",
          "type": "function"
        },
        "index": {
          "description": "Allows overriding of the HTTP request method via the method query string parameter This middleware only applies when the initial request method is POST This allow submitting of normal HTML forms without worries of semantics mismatches in the HTTP spec",
          "hierarchy": "Network Wai Middleware MethodOverride",
          "module": "Network.Wai.Middleware.MethodOverride",
          "name": "methodOverride",
          "package": "wai-extra",
          "partial": "Override",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-MethodOverride.html#v:methodOverride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eChanges the request-method via first post-parameter _method.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Middleware.MethodOverridePost",
          "name": "MethodOverridePost",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-MethodOverridePost.html",
          "type": "module"
        },
        "index": {
          "description": "Changes the request-method via first post-parameter method",
          "hierarchy": "Network Wai Middleware MethodOverridePost",
          "module": "Network.Wai.Middleware.MethodOverridePost",
          "name": "MethodOverridePost",
          "package": "wai-extra",
          "partial": "Method Override Post",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-MethodOverridePost.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows overriding of the HTTP request method via the _method post string parameter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Looks for the Content-Type requestHeader.\n\u003c/li\u003e\u003cli\u003e If the header is set to application/x-www-form-urlencoded\n and the first POST parameter is _method\n then it changes the request-method to the value of that\n parameter.\n\u003c/li\u003e\u003cli\u003e This middleware only applies when the initial request method is POST.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Wai.Middleware.MethodOverridePost",
          "name": "methodOverridePost",
          "package": "wai-extra",
          "signature": "Middleware",
          "source": "src/Network-Wai-Middleware-MethodOverridePost.html#methodOverridePost",
          "type": "function"
        },
        "index": {
          "description": "Allows overriding of the HTTP request method via the method post string parameter Looks for the Content-Type requestHeader If the header is set to application x-www-form-urlencoded and the first POST parameter is method then it changes the request-method to the value of that parameter This middleware only applies when the initial request method is POST",
          "hierarchy": "Network Wai Middleware MethodOverridePost",
          "module": "Network.Wai.Middleware.MethodOverridePost",
          "name": "methodOverridePost",
          "package": "wai-extra",
          "partial": "Override Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-MethodOverridePost.html#v:methodOverridePost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "RequestLogger",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-RequestLogger.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "RequestLogger",
          "package": "wai-extra",
          "partial": "Request Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Callback",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#Callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Callback",
          "package": "wai-extra",
          "partial": "Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Destination",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#Destination",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Destination",
          "package": "wai-extra",
          "partial": "Destination",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:Destination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource from which the IP source address of the client is obtained.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "IPAddrSource",
          "package": "wai-extra",
          "type": "data"
        },
        "index": {
          "description": "Source from which the IP source address of the client is obtained",
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "IPAddrSource",
          "package": "wai-extra",
          "partial": "IPAddr Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:IPAddrSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "OutputFormat",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#OutputFormat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "OutputFormat",
          "package": "wai-extra",
          "partial": "Output Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:OutputFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "OutputFormatter",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#OutputFormatter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "OutputFormatter",
          "package": "wai-extra",
          "partial": "Output Formatter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:OutputFormatter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "RequestLoggerSettings",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#RequestLoggerSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "RequestLoggerSettings",
          "package": "wai-extra",
          "partial": "Request Logger Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:RequestLoggerSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Apache",
          "package": "wai-extra",
          "signature": "Apache IPAddrSource",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#OutputFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Apache",
          "package": "wai-extra",
          "partial": "Apache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:Apache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Callback",
          "package": "wai-extra",
          "signature": "Callback Callback",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#Destination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Callback",
          "package": "wai-extra",
          "partial": "Callback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "CustomOutputFormat",
          "package": "wai-extra",
          "signature": "CustomOutputFormat OutputFormatter",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#OutputFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "CustomOutputFormat",
          "package": "wai-extra",
          "partial": "Custom Output Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:CustomOutputFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse colors?\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Detailed",
          "package": "wai-extra",
          "signature": "Detailed Bool",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#OutputFormat",
          "type": "function"
        },
        "index": {
          "description": "use colors",
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Detailed",
          "package": "wai-extra",
          "partial": "Detailed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:Detailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom the peer address if header is not found.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "FromFallback",
          "package": "wai-extra",
          "signature": "FromFallback",
          "type": "function"
        },
        "index": {
          "description": "From the peer address if header is not found",
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "FromFallback",
          "package": "wai-extra",
          "partial": "From Fallback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:FromFallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom X-Real-IP: or X-Forwarded-For: in the HTTP header.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "FromHeader",
          "package": "wai-extra",
          "signature": "FromHeader",
          "type": "function"
        },
        "index": {
          "description": "From X-Real-IP or X-Forwarded-For in the HTTP header",
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "FromHeader",
          "package": "wai-extra",
          "partial": "From Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:FromHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom the peer address of the HTTP connection.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "FromSocket",
          "package": "wai-extra",
          "signature": "FromSocket",
          "type": "function"
        },
        "index": {
          "description": "From the peer address of the HTTP connection",
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "FromSocket",
          "package": "wai-extra",
          "partial": "From Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:FromSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Handle",
          "package": "wai-extra",
          "signature": "Handle Handle",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#Destination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Handle",
          "package": "wai-extra",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Logger",
          "package": "wai-extra",
          "signature": "Logger LoggerSet",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#Destination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "Logger",
          "package": "wai-extra",
          "partial": "Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:Logger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly applies when using the \u003ccode\u003eHandle\u003c/code\u003e constructor for \u003ccode\u003edestination\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDefault value: \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "autoFlush",
          "package": "wai-extra",
          "signature": "RequestLoggerSettings -\u003e Bool",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#autoFlush",
          "type": "function"
        },
        "index": {
          "description": "Only applies when using the Handle constructor for destination Default value True",
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "autoFlush",
          "normalized": "RequestLoggerSettings-\u003eBool",
          "package": "wai-extra",
          "partial": "Flush",
          "signature": "RequestLoggerSettings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:autoFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault: \u003ccode\u003eHandle\u003c/code\u003e \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "destination",
          "package": "wai-extra",
          "signature": "RequestLoggerSettings -\u003e Destination",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#destination",
          "type": "function"
        },
        "index": {
          "description": "Default Handle stdout",
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "destination",
          "normalized": "RequestLoggerSettings-\u003eDestination",
          "package": "wai-extra",
          "signature": "RequestLoggerSettings-\u003eDestination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:destination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduction request logger middleware.\n Implemented on top of \u003ca\u003elogCallback\u003c/a\u003e, but prints to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "logStdout",
          "package": "wai-extra",
          "signature": "Middleware",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#logStdout",
          "type": "function"
        },
        "index": {
          "description": "Production request logger middleware Implemented on top of logCallback but prints to stdout",
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "logStdout",
          "package": "wai-extra",
          "partial": "Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:logStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevelopment request logger middleware.\n Implemented on top of \u003ca\u003elogCallbackDev\u003c/a\u003e, but prints to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFlushes \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e on each request, which would be inefficient in production use.\n Use \u003ca\u003elogStdout\u003c/a\u003e in production.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "logStdoutDev",
          "package": "wai-extra",
          "signature": "Middleware",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#logStdoutDev",
          "type": "function"
        },
        "index": {
          "description": "Development request logger middleware Implemented on top of logCallbackDev but prints to stdout Flushes stdout on each request which would be inefficient in production use Use logStdout in production",
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "logStdoutDev",
          "package": "wai-extra",
          "partial": "Stdout Dev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:logStdoutDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "mkRequestLogger",
          "package": "wai-extra",
          "signature": "RequestLoggerSettings -\u003e IO Middleware",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#mkRequestLogger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "mkRequestLogger",
          "normalized": "RequestLoggerSettings-\u003eIO Middleware",
          "package": "wai-extra",
          "partial": "Request Logger",
          "signature": "RequestLoggerSettings-\u003eIO Middleware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:mkRequestLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value: \u003ccode\u003eDetailed\u003c/code\u003e \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "outputFormat",
          "package": "wai-extra",
          "signature": "RequestLoggerSettings -\u003e OutputFormat",
          "source": "src/Network-Wai-Middleware-RequestLogger.html#outputFormat",
          "type": "function"
        },
        "index": {
          "description": "Default value Detailed True",
          "hierarchy": "Network Wai Middleware RequestLogger",
          "module": "Network.Wai.Middleware.RequestLogger",
          "name": "outputFormat",
          "normalized": "RequestLoggerSettings-\u003eOutputFormat",
          "package": "wai-extra",
          "partial": "Format",
          "signature": "RequestLoggerSettings-\u003eOutputFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:outputFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Rewrite",
          "name": "Rewrite",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-Rewrite.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Rewrite",
          "module": "Network.Wai.Middleware.Rewrite",
          "name": "Rewrite",
          "package": "wai-extra",
          "partial": "Rewrite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Rewrite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erewrite based on your own conversion rules\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Rewrite",
          "name": "rewrite",
          "package": "wai-extra",
          "signature": "([Text] -\u003e RequestHeaders -\u003e IO [Text]) -\u003e Middleware",
          "source": "src/Network-Wai-Middleware-Rewrite.html#rewrite",
          "type": "function"
        },
        "index": {
          "description": "rewrite based on your own conversion rules",
          "hierarchy": "Network Wai Middleware Rewrite",
          "module": "Network.Wai.Middleware.Rewrite",
          "name": "rewrite",
          "normalized": "([Text]-\u003eRequestHeaders-\u003eIO[Text])-\u003eMiddleware",
          "package": "wai-extra",
          "signature": "([Text]-\u003eRequestHeaders-\u003eIO[Text])-\u003eMiddleware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Rewrite.html#v:rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erewrite based on your own conversion rules\n Example convert function:\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Rewrite",
          "name": "rewritePure",
          "package": "wai-extra",
          "signature": "([Text] -\u003e RequestHeaders -\u003e [Text]) -\u003e Middleware",
          "source": "src/Network-Wai-Middleware-Rewrite.html#rewritePure",
          "type": "function"
        },
        "index": {
          "description": "rewrite based on your own conversion rules Example convert function",
          "hierarchy": "Network Wai Middleware Rewrite",
          "module": "Network.Wai.Middleware.Rewrite",
          "name": "rewritePure",
          "normalized": "([Text]-\u003eRequestHeaders-\u003e[Text])-\u003eMiddleware",
          "package": "wai-extra",
          "partial": "Pure",
          "signature": "([Text]-\u003eRequestHeaders-\u003e[Text])-\u003eMiddleware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Rewrite.html#v:rewritePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Vhost",
          "name": "Vhost",
          "package": "wai-extra",
          "source": "src/Network-Wai-Middleware-Vhost.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Vhost",
          "module": "Network.Wai.Middleware.Vhost",
          "name": "Vhost",
          "package": "wai-extra",
          "partial": "Vhost",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Vhost.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Vhost",
          "name": "redirectTo",
          "package": "wai-extra",
          "signature": "ByteString -\u003e Response",
          "source": "src/Network-Wai-Middleware-Vhost.html#redirectTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Vhost",
          "module": "Network.Wai.Middleware.Vhost",
          "name": "redirectTo",
          "normalized": "ByteString-\u003eResponse",
          "package": "wai-extra",
          "partial": "To",
          "signature": "ByteString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Vhost.html#v:redirectTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Vhost",
          "name": "redirectToLogged",
          "package": "wai-extra",
          "signature": "(Text -\u003e IO ()) -\u003e ByteString -\u003e IO Response",
          "source": "src/Network-Wai-Middleware-Vhost.html#redirectToLogged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Vhost",
          "module": "Network.Wai.Middleware.Vhost",
          "name": "redirectToLogged",
          "normalized": "(Text-\u003eIO())-\u003eByteString-\u003eIO Response",
          "package": "wai-extra",
          "partial": "To Logged",
          "signature": "(Text-\u003eIO())-\u003eByteString-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Vhost.html#v:redirectToLogged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Vhost",
          "name": "redirectWWW",
          "package": "wai-extra",
          "signature": "Text -\u003e Application -\u003e Application",
          "source": "src/Network-Wai-Middleware-Vhost.html#redirectWWW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Vhost",
          "module": "Network.Wai.Middleware.Vhost",
          "name": "redirectWWW",
          "normalized": "Text-\u003eApplication-\u003eApplication",
          "package": "wai-extra",
          "partial": "WWW",
          "signature": "Text-\u003eApplication-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Vhost.html#v:redirectWWW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Vhost",
          "name": "vhost",
          "package": "wai-extra",
          "signature": "[(Request -\u003e Bool, Application)] -\u003e Application -\u003e Application",
          "source": "src/Network-Wai-Middleware-Vhost.html#vhost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Vhost",
          "module": "Network.Wai.Middleware.Vhost",
          "name": "vhost",
          "normalized": "[(Request-\u003eBool,Application)]-\u003eApplication-\u003eApplication",
          "package": "wai-extra",
          "signature": "[(Request-\u003eBool,Application)]-\u003eApplication-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Vhost.html#v:vhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome helpers for parsing data out of a raw WAI \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Parse",
          "name": "Parse",
          "package": "wai-extra",
          "source": "src/Network-Wai-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "Some helpers for parsing data out of raw WAI Request",
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "Parse",
          "package": "wai-extra",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file uploading backend. Takes the parameter name, file name, and content\n type, and returns a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e for storing the contents.\n\u003c/p\u003e",
          "module": "Network.Wai.Parse",
          "name": "BackEnd",
          "package": "wai-extra",
          "source": "src/Network-Wai-Parse.html#BackEnd",
          "type": "type"
        },
        "index": {
          "description": "file uploading backend Takes the parameter name file name and content type and returns Sink for storing the contents",
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "BackEnd",
          "package": "wai-extra",
          "partial": "Back End",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#t:BackEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePost parameter name and associated file information.\n\u003c/p\u003e",
          "module": "Network.Wai.Parse",
          "name": "File",
          "package": "wai-extra",
          "source": "src/Network-Wai-Parse.html#File",
          "type": "type"
        },
        "index": {
          "description": "Post parameter name and associated file information",
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "File",
          "package": "wai-extra",
          "partial": "File",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on an uploaded file.\n\u003c/p\u003e",
          "module": "Network.Wai.Parse",
          "name": "FileInfo",
          "package": "wai-extra",
          "source": "src/Network-Wai-Parse.html#FileInfo",
          "type": "data"
        },
        "index": {
          "description": "Information on an uploaded file",
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "FileInfo",
          "package": "wai-extra",
          "partial": "File Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#t:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePost parameter name and value.\n\u003c/p\u003e",
          "module": "Network.Wai.Parse",
          "name": "Param",
          "package": "wai-extra",
          "source": "src/Network-Wai-Parse.html#Param",
          "type": "type"
        },
        "index": {
          "description": "Post parameter name and value",
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "Param",
          "package": "wai-extra",
          "partial": "Param",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "RequestBodyType",
          "package": "wai-extra",
          "source": "src/Network-Wai-Parse.html#RequestBodyType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "RequestBodyType",
          "package": "wai-extra",
          "partial": "Request Body Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#t:RequestBodyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "FileInfo",
          "package": "wai-extra",
          "signature": "FileInfo",
          "source": "src/Network-Wai-Parse.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "FileInfo",
          "package": "wai-extra",
          "partial": "File Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "Multipart",
          "package": "wai-extra",
          "signature": "Multipart ByteString",
          "source": "src/Network-Wai-Parse.html#RequestBodyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "Multipart",
          "package": "wai-extra",
          "partial": "Multipart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:Multipart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "UrlEncoded",
          "package": "wai-extra",
          "signature": "UrlEncoded",
          "source": "src/Network-Wai-Parse.html#RequestBodyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "UrlEncoded",
          "package": "wai-extra",
          "partial": "Url Encoded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:UrlEncoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "conduitRequestBody",
          "package": "wai-extra",
          "signature": "BackEnd y -\u003e RequestBodyType -\u003e Conduit ByteString IO (Either Param (File y))",
          "source": "src/Network-Wai-Parse.html#conduitRequestBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "conduitRequestBody",
          "normalized": "BackEnd a-\u003eRequestBodyType-\u003eConduit ByteString IO(Either Param(File a))",
          "package": "wai-extra",
          "partial": "Request Body",
          "signature": "BackEnd y-\u003eRequestBodyType-\u003eConduit ByteString IO(Either Param(File y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:conduitRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "fileContent",
          "package": "wai-extra",
          "signature": "c",
          "source": "src/Network-Wai-Parse.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "fileContent",
          "package": "wai-extra",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:fileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "fileContentType",
          "package": "wai-extra",
          "signature": "ByteString",
          "source": "src/Network-Wai-Parse.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "fileContentType",
          "package": "wai-extra",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:fileContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "fileName",
          "package": "wai-extra",
          "signature": "ByteString",
          "source": "src/Network-Wai-Parse.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "fileName",
          "package": "wai-extra",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "getRequestBodyType",
          "package": "wai-extra",
          "signature": "Request -\u003e Maybe RequestBodyType",
          "source": "src/Network-Wai-Parse.html#getRequestBodyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "getRequestBodyType",
          "normalized": "Request-\u003eMaybe RequestBodyType",
          "package": "wai-extra",
          "partial": "Request Body Type",
          "signature": "Request-\u003eMaybe RequestBodyType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:getRequestBodyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore uploaded files in memory\n\u003c/p\u003e",
          "module": "Network.Wai.Parse",
          "name": "lbsBackEnd",
          "package": "wai-extra",
          "signature": "ignored1 -\u003e ignored2 -\u003e Sink ByteString m ByteString",
          "source": "src/Network-Wai-Parse.html#lbsBackEnd",
          "type": "function"
        },
        "index": {
          "description": "Store uploaded files in memory",
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "lbsBackEnd",
          "normalized": "a-\u003ea-\u003eSink ByteString b ByteString",
          "package": "wai-extra",
          "partial": "Back End",
          "signature": "ignored-\u003eignored-\u003eSink ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:lbsBackEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a content type value, turning a single \u003ccode\u003eByteString\u003c/code\u003e into the actual\n content type and a list of pairs of attributes.\n\u003c/p\u003e\u003cp\u003eSince 1.3.2\n\u003c/p\u003e",
          "module": "Network.Wai.Parse",
          "name": "parseContentType",
          "package": "wai-extra",
          "signature": "ByteString -\u003e (ByteString, [(ByteString, ByteString)])",
          "source": "src/Network-Wai-Parse.html#parseContentType",
          "type": "function"
        },
        "index": {
          "description": "Parse content type value turning single ByteString into the actual content type and list of pairs of attributes Since",
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "parseContentType",
          "normalized": "ByteString-\u003e(ByteString,[(ByteString,ByteString)])",
          "package": "wai-extra",
          "partial": "Content Type",
          "signature": "ByteString-\u003e(ByteString,[(ByteString,ByteString)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:parseContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the HTTP accept string to determine supported content types.\n\u003c/p\u003e",
          "module": "Network.Wai.Parse",
          "name": "parseHttpAccept",
          "package": "wai-extra",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Network-Wai-Parse.html#parseHttpAccept",
          "type": "function"
        },
        "index": {
          "description": "Parse the HTTP accept string to determine supported content types",
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "parseHttpAccept",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "wai-extra",
          "partial": "Http Accept",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:parseHttpAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "parseRequestBody",
          "package": "wai-extra",
          "signature": "BackEnd y -\u003e Request -\u003e IO ([Param], [File y])",
          "source": "src/Network-Wai-Parse.html#parseRequestBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "parseRequestBody",
          "normalized": "BackEnd a-\u003eRequest-\u003eIO([Param],[File a])",
          "package": "wai-extra",
          "partial": "Request Body",
          "signature": "BackEnd y-\u003eRequest-\u003eIO([Param],[File y])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:parseRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Parse",
          "name": "sinkRequestBody",
          "package": "wai-extra",
          "signature": "BackEnd y -\u003e RequestBodyType -\u003e Sink ByteString IO ([Param], [File y])",
          "source": "src/Network-Wai-Parse.html#sinkRequestBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "sinkRequestBody",
          "normalized": "BackEnd a-\u003eRequestBodyType-\u003eSink ByteString IO([Param],[File a])",
          "package": "wai-extra",
          "partial": "Request Body",
          "signature": "BackEnd y-\u003eRequestBodyType-\u003eSink ByteString IO([Param],[File y])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:sinkRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave uploaded files on disk as temporary files\n\u003c/p\u003e\u003cp\u003eNote: starting with version 2.0, it is the responsibility of the caller to\n remove any temp files created by using this backend.\n\u003c/p\u003e",
          "module": "Network.Wai.Parse",
          "name": "tempFileBackEnd",
          "package": "wai-extra",
          "signature": "InternalState -\u003e ignored1 -\u003e ignored2 -\u003e Sink ByteString IO FilePath",
          "source": "src/Network-Wai-Parse.html#tempFileBackEnd",
          "type": "function"
        },
        "index": {
          "description": "Save uploaded files on disk as temporary files Note starting with version it is the responsibility of the caller to remove any temp files created by using this backend",
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "tempFileBackEnd",
          "normalized": "InternalState-\u003ea-\u003ea-\u003eSink ByteString IO FilePath",
          "package": "wai-extra",
          "partial": "File Back End",
          "signature": "InternalState-\u003eignored-\u003eignored-\u003eSink ByteString IO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:tempFileBackEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003etempFileSink\u003c/code\u003e, but use configurable temp folders and patterns.\n\u003c/p\u003e",
          "module": "Network.Wai.Parse",
          "name": "tempFileBackEndOpts",
          "package": "wai-extra",
          "signature": "IO FilePath-\u003e String-\u003e InternalState-\u003e ignored1-\u003e ignored2-\u003e Sink ByteString IO FilePath",
          "type": "function"
        },
        "index": {
          "description": "Same as tempFileSink but use configurable temp folders and patterns",
          "hierarchy": "Network Wai Parse",
          "module": "Network.Wai.Parse",
          "name": "tempFileBackEndOpts",
          "normalized": "IO FilePath-\u003eString-\u003eInternalState-\u003ea-\u003ea-\u003eSink ByteString IO FilePath",
          "package": "wai-extra",
          "partial": "File Back End Opts",
          "signature": "IO FilePath-\u003eString-\u003eInternalState-\u003eignored-\u003eignored-\u003eSink ByteString IO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:tempFileBackEndOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module gives you a way to mount applications under sub-URIs.\nFor example:\n\u003c/p\u003e\u003cpre\u003e bugsApp, helpdeskApp, apiV1, apiV2, mainApp :: Application\n\n myApp :: Application\n myApp = mapUrls $\n       mount \"bugs\"     bugsApp\n   \u003c|\u003e mount \"helpdesk\" helpdeskApp\n   \u003c|\u003e mount \"api\"\n           (   mount \"v1\" apiV1\n           \u003c|\u003e mount \"v2\" apiV2\n           )\n   \u003c|\u003e mountRoot mainApp\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Wai.UrlMap",
          "name": "UrlMap",
          "package": "wai-extra",
          "source": "src/Network-Wai-UrlMap.html",
          "type": "module"
        },
        "index": {
          "description": "This module gives you way to mount applications under sub-URIs For example bugsApp helpdeskApp apiV1 apiV2 mainApp Application myApp Application myApp mapUrls mount bugs bugsApp mount helpdesk helpdeskApp mount api mount v1 apiV1 mount v2 apiV2 mountRoot mainApp",
          "hierarchy": "Network Wai UrlMap",
          "module": "Network.Wai.UrlMap",
          "name": "UrlMap",
          "package": "wai-extra",
          "partial": "Url Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.UrlMap",
          "name": "UrlMap",
          "package": "wai-extra",
          "source": "src/Network-Wai-UrlMap.html#UrlMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Wai UrlMap",
          "module": "Network.Wai.UrlMap",
          "name": "UrlMap",
          "package": "wai-extra",
          "partial": "Url Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#t:UrlMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.UrlMap",
          "name": "UrlMap'",
          "package": "wai-extra",
          "source": "src/Network-Wai-UrlMap.html#UrlMap%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Wai UrlMap",
          "module": "Network.Wai.UrlMap",
          "name": "UrlMap'",
          "package": "wai-extra",
          "partial": "Url Map'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#t:UrlMap-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.UrlMap",
          "name": "mapUrls",
          "package": "wai-extra",
          "signature": "UrlMap -\u003e Application",
          "source": "src/Network-Wai-UrlMap.html#mapUrls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai UrlMap",
          "module": "Network.Wai.UrlMap",
          "name": "mapUrls",
          "normalized": "UrlMap-\u003eApplication",
          "package": "wai-extra",
          "partial": "Urls",
          "signature": "UrlMap-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#v:mapUrls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function like mount', but for mounting things under a single\n path segment.\n\u003c/p\u003e",
          "module": "Network.Wai.UrlMap",
          "name": "mount",
          "package": "wai-extra",
          "signature": "Text -\u003e a -\u003e UrlMap",
          "source": "src/Network-Wai-UrlMap.html#mount",
          "type": "function"
        },
        "index": {
          "description": "convenience function like mount but for mounting things under single path segment",
          "hierarchy": "Network Wai UrlMap",
          "module": "Network.Wai.UrlMap",
          "name": "mount",
          "normalized": "Text-\u003ea-\u003eUrlMap",
          "package": "wai-extra",
          "signature": "Text-\u003ea-\u003eUrlMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#v:mount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMount an application under a given path. The ToApplication typeclass gives\n you the option to pass either an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e or an \u003ccode\u003e\u003ca\u003eUrlMap\u003c/a\u003e\u003c/code\u003e\n as the second argument.\n\u003c/p\u003e",
          "module": "Network.Wai.UrlMap",
          "name": "mount'",
          "package": "wai-extra",
          "signature": "Path -\u003e a -\u003e UrlMap",
          "source": "src/Network-Wai-UrlMap.html#mount%27",
          "type": "function"
        },
        "index": {
          "description": "Mount an application under given path The ToApplication typeclass gives you the option to pass either an Application or an UrlMap as the second argument",
          "hierarchy": "Network Wai UrlMap",
          "module": "Network.Wai.UrlMap",
          "name": "mount'",
          "normalized": "Path-\u003ea-\u003eUrlMap",
          "package": "wai-extra",
          "signature": "Path-\u003ea-\u003eUrlMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#v:mount-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMount something at the root. Use this for the last application in the\n block, to avoid 500 errors from none of the applications matching.\n\u003c/p\u003e",
          "module": "Network.Wai.UrlMap",
          "name": "mountRoot",
          "package": "wai-extra",
          "signature": "a -\u003e UrlMap",
          "source": "src/Network-Wai-UrlMap.html#mountRoot",
          "type": "function"
        },
        "index": {
          "description": "Mount something at the root Use this for the last application in the block to avoid errors from none of the applications matching",
          "hierarchy": "Network Wai UrlMap",
          "module": "Network.Wai.UrlMap",
          "name": "mountRoot",
          "normalized": "a-\u003eUrlMap",
          "package": "wai-extra",
          "partial": "Root",
          "signature": "a-\u003eUrlMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#v:mountRoot"
      }
    }
  ]
]