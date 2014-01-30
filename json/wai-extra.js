[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Handler-CGI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBackend for Common Gateway Interface. Almost all users should use the\n \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Handler.CGI",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Handler-CGI.html",
        "fct-type": "module",
        "title": "CGI"
      },
      "index": {
        "description": "Backend for Common Gateway Interface Almost all users should use the run function",
        "hierarchy": "Network Wai Handler CGI",
        "module": "Network.Wai.Handler.CGI",
        "name": "CGI",
        "normalized": "",
        "package": "wai-extra",
        "partial": "CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Handler-CGI.html#v:requestBodyFunc",
      "description": {
        "fct-module": "Network.Wai.Handler.CGI",
        "fct-package": "wai-extra",
        "fct-signature": "(Int -\u003e IO (Maybe ByteString)) -\u003e Int -\u003e Source IO ByteString",
        "fct-source": "src/Network-Wai-Handler-CGI.html#requestBodyFunc",
        "fct-type": "function",
        "title": "requestBodyFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Handler CGI",
        "module": "Network.Wai.Handler.CGI",
        "name": "requestBodyFunc",
        "normalized": "(Int-\u003eIO(Maybe ByteString))-\u003eInt-\u003eSource IO ByteString",
        "package": "wai-extra",
        "partial": "Body Func",
        "signature": "(Int-\u003eIO(Maybe ByteString))-\u003eInt-\u003eSource IO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Handler-CGI.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRun an application using CGI.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Handler.CGI",
        "fct-package": "wai-extra",
        "fct-signature": "Application -\u003e IO ()",
        "fct-source": "src/Network-Wai-Handler-CGI.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Run an application using CGI",
        "hierarchy": "Network Wai Handler CGI",
        "module": "Network.Wai.Handler.CGI",
        "name": "run",
        "normalized": "Application-\u003eIO()",
        "package": "wai-extra",
        "partial": "",
        "signature": "Application-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Handler-CGI.html#v:runGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eA generic CGI helper, which allows other backends (FastCGI and SCGI) to\n use the same code as CGI. Most users will not need this function, and can\n stick with \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunSendfile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Handler.CGI",
        "fct-package": "wai-extra",
        "fct-signature": "[(String, String)]-\u003e (Int -\u003e Source IO ByteString)-\u003e (ByteString -\u003e IO ())-\u003e Maybe ByteString-\u003e Application-\u003e IO ()",
        "fct-type": "function",
        "title": "runGeneric"
      },
      "index": {
        "description": "generic CGI helper which allows other backends FastCGI and SCGI to use the same code as CGI Most users will not need this function and can stick with run or runSendfile",
        "hierarchy": "Network Wai Handler CGI",
        "module": "Network.Wai.Handler.CGI",
        "name": "runGeneric",
        "normalized": "[(String,String)]-\u003e(Int-\u003eSource IO ByteString)-\u003e(ByteString-\u003eIO())-\u003eMaybe ByteString-\u003eApplication-\u003eIO()",
        "package": "wai-extra",
        "partial": "Generic",
        "signature": "[(String,String)]-\u003e(Int-\u003eSource IO ByteString)-\u003e(ByteString-\u003eIO())-\u003eMaybe ByteString-\u003eApplication-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Handler-CGI.html#v:runSendfile",
      "description": {
        "fct-descr": "\u003cp\u003eSome web servers provide an optimization for sending files via a sendfile\n system call via a special header. To use this feature, provide that header\n name here.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Handler.CGI",
        "fct-package": "wai-extra",
        "fct-signature": "ByteString-\u003e Application-\u003e IO ()",
        "fct-type": "function",
        "title": "runSendfile"
      },
      "index": {
        "description": "Some web servers provide an optimization for sending files via sendfile system call via special header To use this feature provide that header name here",
        "hierarchy": "Network Wai Handler CGI",
        "module": "Network.Wai.Handler.CGI",
        "name": "runSendfile",
        "normalized": "ByteString-\u003eApplication-\u003eIO()",
        "package": "wai-extra",
        "partial": "Sendfile",
        "signature": "ByteString-\u003eApplication-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-AcceptOverride.html#",
      "description": {
        "fct-module": "Network.Wai.Middleware.AcceptOverride",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-AcceptOverride.html",
        "fct-type": "module",
        "title": "AcceptOverride"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware AcceptOverride",
        "module": "Network.Wai.Middleware.AcceptOverride",
        "name": "AcceptOverride",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Accept Override",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-AcceptOverride.html#v:acceptOverride",
      "description": {
        "fct-module": "Network.Wai.Middleware.AcceptOverride",
        "fct-package": "wai-extra",
        "fct-signature": "Middleware",
        "fct-source": "src/Network-Wai-Middleware-AcceptOverride.html#acceptOverride",
        "fct-type": "function",
        "title": "acceptOverride"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware AcceptOverride",
        "module": "Network.Wai.Middleware.AcceptOverride",
        "name": "acceptOverride",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Override",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Autohead.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatically produce responses to HEAD requests based on the underlying\n applications GET response.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Middleware.Autohead",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-Autohead.html",
        "fct-type": "module",
        "title": "Autohead"
      },
      "index": {
        "description": "Automatically produce responses to HEAD requests based on the underlying applications GET response",
        "hierarchy": "Network Wai Middleware Autohead",
        "module": "Network.Wai.Middleware.Autohead",
        "name": "Autohead",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Autohead",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Autohead.html#v:autohead",
      "description": {
        "fct-module": "Network.Wai.Middleware.Autohead",
        "fct-package": "wai-extra",
        "fct-signature": "Middleware",
        "fct-source": "src/Network-Wai-Middleware-Autohead.html#autohead",
        "fct-type": "function",
        "title": "autohead"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Autohead",
        "module": "Network.Wai.Middleware.Autohead",
        "name": "autohead",
        "normalized": "",
        "package": "wai-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-CleanPath.html#",
      "description": {
        "fct-module": "Network.Wai.Middleware.CleanPath",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-CleanPath.html",
        "fct-type": "module",
        "title": "CleanPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware CleanPath",
        "module": "Network.Wai.Middleware.CleanPath",
        "name": "CleanPath",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Clean Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-CleanPath.html#v:cleanPath",
      "description": {
        "fct-module": "Network.Wai.Middleware.CleanPath",
        "fct-package": "wai-extra",
        "fct-signature": "([Text] -\u003e Either ByteString [Text]) -\u003e ByteString -\u003e ([Text] -\u003e Application) -\u003e Application",
        "fct-source": "src/Network-Wai-Middleware-CleanPath.html#cleanPath",
        "fct-type": "function",
        "title": "cleanPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware CleanPath",
        "module": "Network.Wai.Middleware.CleanPath",
        "name": "cleanPath",
        "normalized": "([Text]-\u003eEither ByteString[Text])-\u003eByteString-\u003e([Text]-\u003eApplication)-\u003eApplication",
        "package": "wai-extra",
        "partial": "Path",
        "signature": "([Text]-\u003eEither ByteString[Text])-\u003eByteString-\u003e([Text]-\u003eApplication)-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatic gzip compression of responses.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-Gzip.html",
        "fct-type": "module",
        "title": "Gzip"
      },
      "index": {
        "description": "Automatic gzip compression of responses",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "Gzip",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Gzip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#t:GzipFiles",
      "description": {
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Middleware-Gzip.html#GzipFiles",
        "fct-type": "data",
        "title": "GzipFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "GzipFiles",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Gzip Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#t:GzipSettings",
      "description": {
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Middleware-Gzip.html#GzipSettings",
        "fct-type": "data",
        "title": "GzipSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "GzipSettings",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Gzip Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:GzipCacheFolder",
      "description": {
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "GzipCacheFolder FilePath",
        "fct-source": "src/Network-Wai-Middleware-Gzip.html#GzipFiles",
        "fct-type": "function",
        "title": "GzipCacheFolder"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "GzipCacheFolder",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Gzip Cache Folder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:GzipCompress",
      "description": {
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "GzipCompress",
        "fct-source": "src/Network-Wai-Middleware-Gzip.html#GzipFiles",
        "fct-type": "function",
        "title": "GzipCompress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "GzipCompress",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Gzip Compress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:GzipIgnore",
      "description": {
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "GzipIgnore",
        "fct-source": "src/Network-Wai-Middleware-Gzip.html#GzipFiles",
        "fct-type": "function",
        "title": "GzipIgnore"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "GzipIgnore",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Gzip Ignore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:def",
      "description": {
        "fct-descr": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "def"
      },
      "index": {
        "description": "The default value for this type",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "def",
        "normalized": "",
        "package": "wai-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:defaultCheckMime",
      "description": {
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "ByteString -\u003e Bool",
        "fct-source": "src/Network-Wai-Middleware-Gzip.html#defaultCheckMime",
        "fct-type": "function",
        "title": "defaultCheckMime"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "defaultCheckMime",
        "normalized": "ByteString-\u003eBool",
        "package": "wai-extra",
        "partial": "Check Mime",
        "signature": "ByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:gzip",
      "description": {
        "fct-descr": "\u003cp\u003eUse gzip to compress the body of the response.\n\u003c/p\u003e\u003cp\u003eAnalyzes the \"Accept-Encoding\" header from the client to determine\n if gzip is supported.\n\u003c/p\u003e\u003cp\u003ePossible future enhancements:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Only compress if the response is above a certain size.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "GzipSettings -\u003e Middleware",
        "fct-source": "src/Network-Wai-Middleware-Gzip.html#gzip",
        "fct-type": "function",
        "title": "gzip"
      },
      "index": {
        "description": "Use gzip to compress the body of the response Analyzes the Accept-Encoding header from the client to determine if gzip is supported Possible future enhancements Only compress if the response is above certain size",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "gzip",
        "normalized": "GzipSettings-\u003eMiddleware",
        "package": "wai-extra",
        "partial": "",
        "signature": "GzipSettings-\u003eMiddleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:gzipCheckMime",
      "description": {
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "GzipSettings -\u003e ByteString -\u003e Bool",
        "fct-source": "src/Network-Wai-Middleware-Gzip.html#gzipCheckMime",
        "fct-type": "function",
        "title": "gzipCheckMime"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "gzipCheckMime",
        "normalized": "GzipSettings-\u003eByteString-\u003eBool",
        "package": "wai-extra",
        "partial": "Check Mime",
        "signature": "GzipSettings-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Gzip.html#v:gzipFiles",
      "description": {
        "fct-module": "Network.Wai.Middleware.Gzip",
        "fct-package": "wai-extra",
        "fct-signature": "GzipSettings -\u003e GzipFiles",
        "fct-source": "src/Network-Wai-Middleware-Gzip.html#gzipFiles",
        "fct-type": "function",
        "title": "gzipFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Gzip",
        "module": "Network.Wai.Middleware.Gzip",
        "name": "gzipFiles",
        "normalized": "GzipSettings-\u003eGzipFiles",
        "package": "wai-extra",
        "partial": "Files",
        "signature": "GzipSettings-\u003eGzipFiles"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements HTTP Basic Authentication.\n\u003c/p\u003e\u003cp\u003eThis module may add digest authentication in the future.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Middleware.HttpAuth",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-HttpAuth.html",
        "fct-type": "module",
        "title": "HttpAuth"
      },
      "index": {
        "description": "Implements HTTP Basic Authentication This module may add digest authentication in the future",
        "hierarchy": "Network Wai Middleware HttpAuth",
        "module": "Network.Wai.Middleware.HttpAuth",
        "name": "HttpAuth",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Http Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#t:AuthSettings",
      "description": {
        "fct-descr": "\u003cp\u003eAuthentication settings. This value is an instance of \u003ccode\u003eIsString\u003c/code\u003e, so the\n recommended approach to create a value is to provide a string literal (which\n will be the realm) and then overriding individual fields.\n\u003c/p\u003e\u003cpre\u003e \"My Realm\" { authIsProtected = someFunc } :: AuthSettings\n\u003c/pre\u003e\u003cp\u003eSince 1.3.4\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.HttpAuth",
        "fct-package": "wai-extra",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Middleware-HttpAuth.html#AuthSettings",
        "fct-type": "data",
        "title": "AuthSettings"
      },
      "index": {
        "description": "Authentication settings This value is an instance of IsString so the recommended approach to create value is to provide string literal which will be the realm and then overriding individual fields My Realm authIsProtected someFunc AuthSettings Since",
        "hierarchy": "Network Wai Middleware HttpAuth",
        "module": "Network.Wai.Middleware.HttpAuth",
        "name": "AuthSettings",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Auth Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#t:CheckCreds",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a given username and password is valid.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.HttpAuth",
        "fct-package": "wai-extra",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Middleware-HttpAuth.html#CheckCreds",
        "fct-type": "type",
        "title": "CheckCreds"
      },
      "index": {
        "description": "Check if given username and password is valid",
        "hierarchy": "Network Wai Middleware HttpAuth",
        "module": "Network.Wai.Middleware.HttpAuth",
        "name": "CheckCreds",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Check Creds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#v:authIsProtected",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if access to the requested resource is restricted.\n\u003c/p\u003e\u003cp\u003eDefault: always returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.3.4\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.HttpAuth",
        "fct-package": "wai-extra",
        "fct-signature": "AuthSettings -\u003e Request -\u003e IO Bool",
        "fct-source": "src/Network-Wai-Middleware-HttpAuth.html#authIsProtected",
        "fct-type": "function",
        "title": "authIsProtected"
      },
      "index": {
        "description": "Determine if access to the requested resource is restricted Default always returns True Since",
        "hierarchy": "Network Wai Middleware HttpAuth",
        "module": "Network.Wai.Middleware.HttpAuth",
        "name": "authIsProtected",
        "normalized": "AuthSettings-\u003eRequest-\u003eIO Bool",
        "package": "wai-extra",
        "partial": "Is Protected",
        "signature": "AuthSettings-\u003eRequest-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#v:authOnNoAuth",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the realm and returns an appropriate 401 response when\n authentication is not provided.\n\u003c/p\u003e\u003cp\u003eSince 1.3.4\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.HttpAuth",
        "fct-package": "wai-extra",
        "fct-signature": "AuthSettings -\u003e ByteString -\u003e Application",
        "fct-source": "src/Network-Wai-Middleware-HttpAuth.html#authOnNoAuth",
        "fct-type": "function",
        "title": "authOnNoAuth"
      },
      "index": {
        "description": "Takes the realm and returns an appropriate response when authentication is not provided Since",
        "hierarchy": "Network Wai Middleware HttpAuth",
        "module": "Network.Wai.Middleware.HttpAuth",
        "name": "authOnNoAuth",
        "normalized": "AuthSettings-\u003eByteString-\u003eApplication",
        "package": "wai-extra",
        "partial": "On No Auth",
        "signature": "AuthSettings-\u003eByteString-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#v:authRealm",
      "description": {
        "fct-descr": "\u003cp\u003eSince 1.3.4\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.HttpAuth",
        "fct-package": "wai-extra",
        "fct-signature": "AuthSettings -\u003e ByteString",
        "fct-source": "src/Network-Wai-Middleware-HttpAuth.html#authRealm",
        "fct-type": "function",
        "title": "authRealm"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Network Wai Middleware HttpAuth",
        "module": "Network.Wai.Middleware.HttpAuth",
        "name": "authRealm",
        "normalized": "AuthSettings-\u003eByteString",
        "package": "wai-extra",
        "partial": "Realm",
        "signature": "AuthSettings-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-HttpAuth.html#v:basicAuth",
      "description": {
        "fct-descr": "\u003cp\u003ePerform basic authentication.\n\u003c/p\u003e\u003cpre\u003e basicAuth (\\u p -\u003e return $ u == \"michael\" && p == \"mypass\") \"My Realm\"\n\u003c/pre\u003e\u003cp\u003eSince 1.3.4\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.HttpAuth",
        "fct-package": "wai-extra",
        "fct-signature": "CheckCreds -\u003e AuthSettings -\u003e Middleware",
        "fct-source": "src/Network-Wai-Middleware-HttpAuth.html#basicAuth",
        "fct-type": "function",
        "title": "basicAuth"
      },
      "index": {
        "description": "Perform basic authentication basicAuth return michael mypass My Realm Since",
        "hierarchy": "Network Wai Middleware HttpAuth",
        "module": "Network.Wai.Middleware.HttpAuth",
        "name": "basicAuth",
        "normalized": "CheckCreds-\u003eAuthSettings-\u003eMiddleware",
        "package": "wai-extra",
        "partial": "Auth",
        "signature": "CheckCreds-\u003eAuthSettings-\u003eMiddleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Jsonp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatic wrapping of JSON responses to convert into JSONP.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Middleware.Jsonp",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-Jsonp.html",
        "fct-type": "module",
        "title": "Jsonp"
      },
      "index": {
        "description": "Automatic wrapping of JSON responses to convert into JSONP",
        "hierarchy": "Network Wai Middleware Jsonp",
        "module": "Network.Wai.Middleware.Jsonp",
        "name": "Jsonp",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Jsonp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Jsonp.html#v:jsonp",
      "description": {
        "fct-descr": "\u003cp\u003eWrap json responses in a jsonp callback.\n\u003c/p\u003e\u003cp\u003eBasically, if the user requested a \"text/javascript\" and supplied a\n \"callback\" GET parameter, ask the application for an\n \"application/json\" response, then convert that into a JSONP response,\n having a content type of \"text/javascript\" and calling the specified\n callback function.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Jsonp",
        "fct-package": "wai-extra",
        "fct-signature": "Middleware",
        "fct-source": "src/Network-Wai-Middleware-Jsonp.html#jsonp",
        "fct-type": "function",
        "title": "jsonp"
      },
      "index": {
        "description": "Wrap json responses in jsonp callback Basically if the user requested text javascript and supplied callback GET parameter ask the application for an application json response then convert that into JSONP response having content type of text javascript and calling the specified callback function",
        "hierarchy": "Network Wai Middleware Jsonp",
        "module": "Network.Wai.Middleware.Jsonp",
        "name": "jsonp",
        "normalized": "",
        "package": "wai-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-MethodOverride.html#",
      "description": {
        "fct-module": "Network.Wai.Middleware.MethodOverride",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-MethodOverride.html",
        "fct-type": "module",
        "title": "MethodOverride"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware MethodOverride",
        "module": "Network.Wai.Middleware.MethodOverride",
        "name": "MethodOverride",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Method Override",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-MethodOverride.html#v:methodOverride",
      "description": {
        "fct-descr": "\u003cp\u003eAllows overriding of the HTTP request method via the _method query string\n parameter.\n\u003c/p\u003e\u003cp\u003eThis middleware only applies when the initial request method is POST. This\n allow submitting of normal HTML forms, without worries of semantics\n mismatches in the HTTP spec.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.MethodOverride",
        "fct-package": "wai-extra",
        "fct-signature": "Middleware",
        "fct-source": "src/Network-Wai-Middleware-MethodOverride.html#methodOverride",
        "fct-type": "function",
        "title": "methodOverride"
      },
      "index": {
        "description": "Allows overriding of the HTTP request method via the method query string parameter This middleware only applies when the initial request method is POST This allow submitting of normal HTML forms without worries of semantics mismatches in the HTTP spec",
        "hierarchy": "Network Wai Middleware MethodOverride",
        "module": "Network.Wai.Middleware.MethodOverride",
        "name": "methodOverride",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Override",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-MethodOverridePost.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eChanges the request-method via first post-parameter _method.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Middleware.MethodOverridePost",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-MethodOverridePost.html",
        "fct-type": "module",
        "title": "MethodOverridePost"
      },
      "index": {
        "description": "Changes the request-method via first post-parameter method",
        "hierarchy": "Network Wai Middleware MethodOverridePost",
        "module": "Network.Wai.Middleware.MethodOverridePost",
        "name": "MethodOverridePost",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Method Override Post",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-MethodOverridePost.html#v:methodOverridePost",
      "description": {
        "fct-descr": "\u003cp\u003eAllows overriding of the HTTP request method via the _method post string parameter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Looks for the Content-Type requestHeader.\n\u003c/li\u003e\u003cli\u003e If the header is set to application/x-www-form-urlencoded\n and the first POST parameter is _method\n then it changes the request-method to the value of that\n parameter.\n\u003c/li\u003e\u003cli\u003e This middleware only applies when the initial request method is POST.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Wai.Middleware.MethodOverridePost",
        "fct-package": "wai-extra",
        "fct-signature": "Middleware",
        "fct-source": "src/Network-Wai-Middleware-MethodOverridePost.html#methodOverridePost",
        "fct-type": "function",
        "title": "methodOverridePost"
      },
      "index": {
        "description": "Allows overriding of the HTTP request method via the method post string parameter Looks for the Content-Type requestHeader If the header is set to application x-www-form-urlencoded and the first POST parameter is method then it changes the request-method to the value of that parameter This middleware only applies when the initial request method is POST",
        "hierarchy": "Network Wai Middleware MethodOverridePost",
        "module": "Network.Wai.Middleware.MethodOverridePost",
        "name": "methodOverridePost",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Override Post",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html",
        "fct-type": "module",
        "title": "RequestLogger"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "RequestLogger",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Request Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:Callback",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#Callback",
        "fct-type": "type",
        "title": "Callback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "Callback",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:Destination",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#Destination",
        "fct-type": "data",
        "title": "Destination"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "Destination",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Destination",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:IPAddrSource",
      "description": {
        "fct-descr": "\u003cp\u003eSource from which the IP source address of the client is obtained.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IPAddrSource"
      },
      "index": {
        "description": "Source from which the IP source address of the client is obtained",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "IPAddrSource",
        "normalized": "",
        "package": "wai-extra",
        "partial": "IPAddr Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:OutputFormat",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#OutputFormat",
        "fct-type": "data",
        "title": "OutputFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "OutputFormat",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Output Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:OutputFormatter",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#OutputFormatter",
        "fct-type": "type",
        "title": "OutputFormatter"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "OutputFormatter",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Output Formatter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#t:RequestLoggerSettings",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#RequestLoggerSettings",
        "fct-type": "data",
        "title": "RequestLoggerSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "RequestLoggerSettings",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Request Logger Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:Apache",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "Apache IPAddrSource",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#OutputFormat",
        "fct-type": "function",
        "title": "Apache"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "Apache",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Apache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:Callback",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "Callback Callback",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#Destination",
        "fct-type": "function",
        "title": "Callback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "Callback",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:CustomOutputFormat",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "CustomOutputFormat OutputFormatter",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#OutputFormat",
        "fct-type": "function",
        "title": "CustomOutputFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "CustomOutputFormat",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Custom Output Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:Detailed",
      "description": {
        "fct-descr": "\u003cp\u003euse colors?\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "Detailed Bool",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#OutputFormat",
        "fct-type": "function",
        "title": "Detailed"
      },
      "index": {
        "description": "use colors",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "Detailed",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Detailed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:FromFallback",
      "description": {
        "fct-descr": "\u003cp\u003eFrom the peer address if header is not found.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "FromFallback",
        "fct-type": "function",
        "title": "FromFallback"
      },
      "index": {
        "description": "From the peer address if header is not found",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "FromFallback",
        "normalized": "",
        "package": "wai-extra",
        "partial": "From Fallback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:FromHeader",
      "description": {
        "fct-descr": "\u003cp\u003eFrom X-Real-IP: or X-Forwarded-For: in the HTTP header.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "FromHeader",
        "fct-type": "function",
        "title": "FromHeader"
      },
      "index": {
        "description": "From X-Real-IP or X-Forwarded-For in the HTTP header",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "FromHeader",
        "normalized": "",
        "package": "wai-extra",
        "partial": "From Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:FromSocket",
      "description": {
        "fct-descr": "\u003cp\u003eFrom the peer address of the HTTP connection.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "FromSocket",
        "fct-type": "function",
        "title": "FromSocket"
      },
      "index": {
        "description": "From the peer address of the HTTP connection",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "FromSocket",
        "normalized": "",
        "package": "wai-extra",
        "partial": "From Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:Handle",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "Handle Handle",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#Destination",
        "fct-type": "function",
        "title": "Handle"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "Handle",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:Logger",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "Logger LoggerSet",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#Destination",
        "fct-type": "function",
        "title": "Logger"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "Logger",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:autoFlush",
      "description": {
        "fct-descr": "\u003cp\u003eOnly applies when using the \u003ccode\u003eHandle\u003c/code\u003e constructor for \u003ccode\u003edestination\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDefault value: \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "RequestLoggerSettings -\u003e Bool",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#autoFlush",
        "fct-type": "function",
        "title": "autoFlush"
      },
      "index": {
        "description": "Only applies when using the Handle constructor for destination Default value True",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "autoFlush",
        "normalized": "RequestLoggerSettings-\u003eBool",
        "package": "wai-extra",
        "partial": "Flush",
        "signature": "RequestLoggerSettings-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:destination",
      "description": {
        "fct-descr": "\u003cp\u003eDefault: \u003ccode\u003eHandle\u003c/code\u003e \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "RequestLoggerSettings -\u003e Destination",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#destination",
        "fct-type": "function",
        "title": "destination"
      },
      "index": {
        "description": "Default Handle stdout",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "destination",
        "normalized": "RequestLoggerSettings-\u003eDestination",
        "package": "wai-extra",
        "partial": "",
        "signature": "RequestLoggerSettings-\u003eDestination"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:logStdout",
      "description": {
        "fct-descr": "\u003cp\u003eProduction request logger middleware.\n Implemented on top of \u003ca\u003elogCallback\u003c/a\u003e, but prints to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "Middleware",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#logStdout",
        "fct-type": "function",
        "title": "logStdout"
      },
      "index": {
        "description": "Production request logger middleware Implemented on top of logCallback but prints to stdout",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "logStdout",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Stdout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:logStdoutDev",
      "description": {
        "fct-descr": "\u003cp\u003eDevelopment request logger middleware.\n Implemented on top of \u003ca\u003elogCallbackDev\u003c/a\u003e, but prints to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFlushes \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e on each request, which would be inefficient in production use.\n Use \u003ca\u003elogStdout\u003c/a\u003e in production.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "Middleware",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#logStdoutDev",
        "fct-type": "function",
        "title": "logStdoutDev"
      },
      "index": {
        "description": "Development request logger middleware Implemented on top of logCallbackDev but prints to stdout Flushes stdout on each request which would be inefficient in production use Use logStdout in production",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "logStdoutDev",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Stdout Dev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:mkRequestLogger",
      "description": {
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "RequestLoggerSettings -\u003e IO Middleware",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#mkRequestLogger",
        "fct-type": "function",
        "title": "mkRequestLogger"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "mkRequestLogger",
        "normalized": "RequestLoggerSettings-\u003eIO Middleware",
        "package": "wai-extra",
        "partial": "Request Logger",
        "signature": "RequestLoggerSettings-\u003eIO Middleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-RequestLogger.html#v:outputFormat",
      "description": {
        "fct-descr": "\u003cp\u003eDefault value: \u003ccode\u003eDetailed\u003c/code\u003e \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.RequestLogger",
        "fct-package": "wai-extra",
        "fct-signature": "RequestLoggerSettings -\u003e OutputFormat",
        "fct-source": "src/Network-Wai-Middleware-RequestLogger.html#outputFormat",
        "fct-type": "function",
        "title": "outputFormat"
      },
      "index": {
        "description": "Default value Detailed True",
        "hierarchy": "Network Wai Middleware RequestLogger",
        "module": "Network.Wai.Middleware.RequestLogger",
        "name": "outputFormat",
        "normalized": "RequestLoggerSettings-\u003eOutputFormat",
        "package": "wai-extra",
        "partial": "Format",
        "signature": "RequestLoggerSettings-\u003eOutputFormat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Rewrite.html#",
      "description": {
        "fct-module": "Network.Wai.Middleware.Rewrite",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-Rewrite.html",
        "fct-type": "module",
        "title": "Rewrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Rewrite",
        "module": "Network.Wai.Middleware.Rewrite",
        "name": "Rewrite",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Rewrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Rewrite.html#v:rewrite",
      "description": {
        "fct-descr": "\u003cp\u003erewrite based on your own conversion rules\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Rewrite",
        "fct-package": "wai-extra",
        "fct-signature": "([Text] -\u003e RequestHeaders -\u003e IO [Text]) -\u003e Middleware",
        "fct-source": "src/Network-Wai-Middleware-Rewrite.html#rewrite",
        "fct-type": "function",
        "title": "rewrite"
      },
      "index": {
        "description": "rewrite based on your own conversion rules",
        "hierarchy": "Network Wai Middleware Rewrite",
        "module": "Network.Wai.Middleware.Rewrite",
        "name": "rewrite",
        "normalized": "([Text]-\u003eRequestHeaders-\u003eIO[Text])-\u003eMiddleware",
        "package": "wai-extra",
        "partial": "",
        "signature": "([Text]-\u003eRequestHeaders-\u003eIO[Text])-\u003eMiddleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Rewrite.html#v:rewritePure",
      "description": {
        "fct-descr": "\u003cp\u003erewrite based on your own conversion rules\n Example convert function:\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Rewrite",
        "fct-package": "wai-extra",
        "fct-signature": "([Text] -\u003e RequestHeaders -\u003e [Text]) -\u003e Middleware",
        "fct-source": "src/Network-Wai-Middleware-Rewrite.html#rewritePure",
        "fct-type": "function",
        "title": "rewritePure"
      },
      "index": {
        "description": "rewrite based on your own conversion rules Example convert function",
        "hierarchy": "Network Wai Middleware Rewrite",
        "module": "Network.Wai.Middleware.Rewrite",
        "name": "rewritePure",
        "normalized": "([Text]-\u003eRequestHeaders-\u003e[Text])-\u003eMiddleware",
        "package": "wai-extra",
        "partial": "Pure",
        "signature": "([Text]-\u003eRequestHeaders-\u003e[Text])-\u003eMiddleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Vhost.html#",
      "description": {
        "fct-module": "Network.Wai.Middleware.Vhost",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-Vhost.html",
        "fct-type": "module",
        "title": "Vhost"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Vhost",
        "module": "Network.Wai.Middleware.Vhost",
        "name": "Vhost",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Vhost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Vhost.html#v:redirectTo",
      "description": {
        "fct-module": "Network.Wai.Middleware.Vhost",
        "fct-package": "wai-extra",
        "fct-signature": "ByteString -\u003e Response",
        "fct-source": "src/Network-Wai-Middleware-Vhost.html#redirectTo",
        "fct-type": "function",
        "title": "redirectTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Vhost",
        "module": "Network.Wai.Middleware.Vhost",
        "name": "redirectTo",
        "normalized": "ByteString-\u003eResponse",
        "package": "wai-extra",
        "partial": "To",
        "signature": "ByteString-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Vhost.html#v:redirectToLogged",
      "description": {
        "fct-module": "Network.Wai.Middleware.Vhost",
        "fct-package": "wai-extra",
        "fct-signature": "(Text -\u003e IO ()) -\u003e ByteString -\u003e IO Response",
        "fct-source": "src/Network-Wai-Middleware-Vhost.html#redirectToLogged",
        "fct-type": "function",
        "title": "redirectToLogged"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Vhost",
        "module": "Network.Wai.Middleware.Vhost",
        "name": "redirectToLogged",
        "normalized": "(Text-\u003eIO())-\u003eByteString-\u003eIO Response",
        "package": "wai-extra",
        "partial": "To Logged",
        "signature": "(Text-\u003eIO())-\u003eByteString-\u003eIO Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Vhost.html#v:redirectWWW",
      "description": {
        "fct-module": "Network.Wai.Middleware.Vhost",
        "fct-package": "wai-extra",
        "fct-signature": "Text -\u003e Application -\u003e Application",
        "fct-source": "src/Network-Wai-Middleware-Vhost.html#redirectWWW",
        "fct-type": "function",
        "title": "redirectWWW"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Vhost",
        "module": "Network.Wai.Middleware.Vhost",
        "name": "redirectWWW",
        "normalized": "Text-\u003eApplication-\u003eApplication",
        "package": "wai-extra",
        "partial": "WWW",
        "signature": "Text-\u003eApplication-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Middleware-Vhost.html#v:vhost",
      "description": {
        "fct-module": "Network.Wai.Middleware.Vhost",
        "fct-package": "wai-extra",
        "fct-signature": "[(Request -\u003e Bool, Application)] -\u003e Application -\u003e Application",
        "fct-source": "src/Network-Wai-Middleware-Vhost.html#vhost",
        "fct-type": "function",
        "title": "vhost"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Vhost",
        "module": "Network.Wai.Middleware.Vhost",
        "name": "vhost",
        "normalized": "[(Request-\u003eBool,Application)]-\u003eApplication-\u003eApplication",
        "package": "wai-extra",
        "partial": "",
        "signature": "[(Request-\u003eBool,Application)]-\u003eApplication-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome helpers for parsing data out of a raw WAI \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "Some helpers for parsing data out of raw WAI Request",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#t:BackEnd",
      "description": {
        "fct-descr": "\u003cp\u003eA file uploading backend. Takes the parameter name, file name, and content\n type, and returns a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e for storing the contents.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Parse.html#BackEnd",
        "fct-type": "type",
        "title": "BackEnd"
      },
      "index": {
        "description": "file uploading backend Takes the parameter name file name and content type and returns Sink for storing the contents",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "BackEnd",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Back End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#t:File",
      "description": {
        "fct-descr": "\u003cp\u003ePost parameter name and associated file information.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Parse.html#File",
        "fct-type": "type",
        "title": "File"
      },
      "index": {
        "description": "Post parameter name and associated file information",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "File",
        "normalized": "",
        "package": "wai-extra",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#t:FileInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation on an uploaded file.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Parse.html#FileInfo",
        "fct-type": "data",
        "title": "FileInfo"
      },
      "index": {
        "description": "Information on an uploaded file",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "FileInfo",
        "normalized": "",
        "package": "wai-extra",
        "partial": "File Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#t:Param",
      "description": {
        "fct-descr": "\u003cp\u003ePost parameter name and value.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Parse.html#Param",
        "fct-type": "type",
        "title": "Param"
      },
      "index": {
        "description": "Post parameter name and value",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "Param",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#t:RequestBodyType",
      "description": {
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Parse.html#RequestBodyType",
        "fct-type": "data",
        "title": "RequestBodyType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "RequestBodyType",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Request Body Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:FileInfo",
      "description": {
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "FileInfo",
        "fct-source": "src/Network-Wai-Parse.html#FileInfo",
        "fct-type": "function",
        "title": "FileInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "FileInfo",
        "normalized": "",
        "package": "wai-extra",
        "partial": "File Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:Multipart",
      "description": {
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "Multipart ByteString",
        "fct-source": "src/Network-Wai-Parse.html#RequestBodyType",
        "fct-type": "function",
        "title": "Multipart"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "Multipart",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Multipart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:UrlEncoded",
      "description": {
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "UrlEncoded",
        "fct-source": "src/Network-Wai-Parse.html#RequestBodyType",
        "fct-type": "function",
        "title": "UrlEncoded"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "UrlEncoded",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Url Encoded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:conduitRequestBody",
      "description": {
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "BackEnd y -\u003e RequestBodyType -\u003e Conduit ByteString IO (Either Param (File y))",
        "fct-source": "src/Network-Wai-Parse.html#conduitRequestBody",
        "fct-type": "function",
        "title": "conduitRequestBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "conduitRequestBody",
        "normalized": "BackEnd a-\u003eRequestBodyType-\u003eConduit ByteString IO(Either Param(File a))",
        "package": "wai-extra",
        "partial": "Request Body",
        "signature": "BackEnd y-\u003eRequestBodyType-\u003eConduit ByteString IO(Either Param(File y))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:fileContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "c",
        "fct-source": "src/Network-Wai-Parse.html#FileInfo",
        "fct-type": "function",
        "title": "fileContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "fileContent",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:fileContentType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Wai-Parse.html#FileInfo",
        "fct-type": "function",
        "title": "fileContentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "fileContentType",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:fileName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Wai-Parse.html#FileInfo",
        "fct-type": "function",
        "title": "fileName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "fileName",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:getRequestBodyType",
      "description": {
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "Request -\u003e Maybe RequestBodyType",
        "fct-source": "src/Network-Wai-Parse.html#getRequestBodyType",
        "fct-type": "function",
        "title": "getRequestBodyType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "getRequestBodyType",
        "normalized": "Request-\u003eMaybe RequestBodyType",
        "package": "wai-extra",
        "partial": "Request Body Type",
        "signature": "Request-\u003eMaybe RequestBodyType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:lbsBackEnd",
      "description": {
        "fct-descr": "\u003cp\u003eStore uploaded files in memory\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "ignored1 -\u003e ignored2 -\u003e Sink ByteString m ByteString",
        "fct-source": "src/Network-Wai-Parse.html#lbsBackEnd",
        "fct-type": "function",
        "title": "lbsBackEnd"
      },
      "index": {
        "description": "Store uploaded files in memory",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "lbsBackEnd",
        "normalized": "a-\u003ea-\u003eSink ByteString b ByteString",
        "package": "wai-extra",
        "partial": "Back End",
        "signature": "ignored-\u003eignored-\u003eSink ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:parseContentType",
      "description": {
        "fct-descr": "\u003cp\u003eParse a content type value, turning a single \u003ccode\u003eByteString\u003c/code\u003e into the actual\n content type and a list of pairs of attributes.\n\u003c/p\u003e\u003cp\u003eSince 1.3.2\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "ByteString -\u003e (ByteString, [(ByteString, ByteString)])",
        "fct-source": "src/Network-Wai-Parse.html#parseContentType",
        "fct-type": "function",
        "title": "parseContentType"
      },
      "index": {
        "description": "Parse content type value turning single ByteString into the actual content type and list of pairs of attributes Since",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "parseContentType",
        "normalized": "ByteString-\u003e(ByteString,[(ByteString,ByteString)])",
        "package": "wai-extra",
        "partial": "Content Type",
        "signature": "ByteString-\u003e(ByteString,[(ByteString,ByteString)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:parseHttpAccept",
      "description": {
        "fct-descr": "\u003cp\u003eParse the HTTP accept string to determine supported content types.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "ByteString -\u003e [ByteString]",
        "fct-source": "src/Network-Wai-Parse.html#parseHttpAccept",
        "fct-type": "function",
        "title": "parseHttpAccept"
      },
      "index": {
        "description": "Parse the HTTP accept string to determine supported content types",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "parseHttpAccept",
        "normalized": "ByteString-\u003e[ByteString]",
        "package": "wai-extra",
        "partial": "Http Accept",
        "signature": "ByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:parseRequestBody",
      "description": {
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "BackEnd y -\u003e Request -\u003e IO ([Param], [File y])",
        "fct-source": "src/Network-Wai-Parse.html#parseRequestBody",
        "fct-type": "function",
        "title": "parseRequestBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "parseRequestBody",
        "normalized": "BackEnd a-\u003eRequest-\u003eIO([Param],[File a])",
        "package": "wai-extra",
        "partial": "Request Body",
        "signature": "BackEnd y-\u003eRequest-\u003eIO([Param],[File y])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:sinkRequestBody",
      "description": {
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "BackEnd y -\u003e RequestBodyType -\u003e Sink ByteString IO ([Param], [File y])",
        "fct-source": "src/Network-Wai-Parse.html#sinkRequestBody",
        "fct-type": "function",
        "title": "sinkRequestBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "sinkRequestBody",
        "normalized": "BackEnd a-\u003eRequestBodyType-\u003eSink ByteString IO([Param],[File a])",
        "package": "wai-extra",
        "partial": "Request Body",
        "signature": "BackEnd y-\u003eRequestBodyType-\u003eSink ByteString IO([Param],[File y])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:tempFileBackEnd",
      "description": {
        "fct-descr": "\u003cp\u003eSave uploaded files on disk as temporary files\n\u003c/p\u003e\u003cp\u003eNote: starting with version 2.0, it is the responsibility of the caller to\n remove any temp files created by using this backend.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "InternalState -\u003e ignored1 -\u003e ignored2 -\u003e Sink ByteString IO FilePath",
        "fct-source": "src/Network-Wai-Parse.html#tempFileBackEnd",
        "fct-type": "function",
        "title": "tempFileBackEnd"
      },
      "index": {
        "description": "Save uploaded files on disk as temporary files Note starting with version it is the responsibility of the caller to remove any temp files created by using this backend",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "tempFileBackEnd",
        "normalized": "InternalState-\u003ea-\u003ea-\u003eSink ByteString IO FilePath",
        "package": "wai-extra",
        "partial": "File Back End",
        "signature": "InternalState-\u003eignored-\u003eignored-\u003eSink ByteString IO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-Parse.html#v:tempFileBackEndOpts",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003etempFileSink\u003c/code\u003e, but use configurable temp folders and patterns.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Parse",
        "fct-package": "wai-extra",
        "fct-signature": "IO FilePath-\u003e String-\u003e InternalState-\u003e ignored1-\u003e ignored2-\u003e Sink ByteString IO FilePath",
        "fct-type": "function",
        "title": "tempFileBackEndOpts"
      },
      "index": {
        "description": "Same as tempFileSink but use configurable temp folders and patterns",
        "hierarchy": "Network Wai Parse",
        "module": "Network.Wai.Parse",
        "name": "tempFileBackEndOpts",
        "normalized": "IO FilePath-\u003eString-\u003eInternalState-\u003ea-\u003ea-\u003eSink ByteString IO FilePath",
        "package": "wai-extra",
        "partial": "File Back End Opts",
        "signature": "IO FilePath-\u003eString-\u003eInternalState-\u003eignored-\u003eignored-\u003eSink ByteString IO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module gives you a way to mount applications under sub-URIs.\nFor example:\n\u003c/p\u003e\u003cpre\u003e bugsApp, helpdeskApp, apiV1, apiV2, mainApp :: Application\n\n myApp :: Application\n myApp = mapUrls $\n       mount \"bugs\"     bugsApp\n   \u003c|\u003e mount \"helpdesk\" helpdeskApp\n   \u003c|\u003e mount \"api\"\n           (   mount \"v1\" apiV1\n           \u003c|\u003e mount \"v2\" apiV2\n           )\n   \u003c|\u003e mountRoot mainApp\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.UrlMap",
        "fct-package": "wai-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-UrlMap.html",
        "fct-type": "module",
        "title": "UrlMap"
      },
      "index": {
        "description": "This module gives you way to mount applications under sub-URIs For example bugsApp helpdeskApp apiV1 apiV2 mainApp Application myApp Application myApp mapUrls mount bugs bugsApp mount helpdesk helpdeskApp mount api mount v1 apiV1 mount v2 apiV2 mountRoot mainApp",
        "hierarchy": "Network Wai UrlMap",
        "module": "Network.Wai.UrlMap",
        "name": "UrlMap",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Url Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#t:UrlMap",
      "description": {
        "fct-module": "Network.Wai.UrlMap",
        "fct-package": "wai-extra",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-UrlMap.html#UrlMap",
        "fct-type": "type",
        "title": "UrlMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai UrlMap",
        "module": "Network.Wai.UrlMap",
        "name": "UrlMap",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Url Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#t:UrlMap-39-",
      "description": {
        "fct-module": "Network.Wai.UrlMap",
        "fct-package": "wai-extra",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-UrlMap.html#UrlMap%27",
        "fct-type": "data",
        "title": "UrlMap'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai UrlMap",
        "module": "Network.Wai.UrlMap",
        "name": "UrlMap'",
        "normalized": "",
        "package": "wai-extra",
        "partial": "Url Map'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#v:mapUrls",
      "description": {
        "fct-module": "Network.Wai.UrlMap",
        "fct-package": "wai-extra",
        "fct-signature": "UrlMap -\u003e Application",
        "fct-source": "src/Network-Wai-UrlMap.html#mapUrls",
        "fct-type": "function",
        "title": "mapUrls"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai UrlMap",
        "module": "Network.Wai.UrlMap",
        "name": "mapUrls",
        "normalized": "UrlMap-\u003eApplication",
        "package": "wai-extra",
        "partial": "Urls",
        "signature": "UrlMap-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#v:mount",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function like mount', but for mounting things under a single\n path segment.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.UrlMap",
        "fct-package": "wai-extra",
        "fct-signature": "Text -\u003e a -\u003e UrlMap",
        "fct-source": "src/Network-Wai-UrlMap.html#mount",
        "fct-type": "function",
        "title": "mount"
      },
      "index": {
        "description": "convenience function like mount but for mounting things under single path segment",
        "hierarchy": "Network Wai UrlMap",
        "module": "Network.Wai.UrlMap",
        "name": "mount",
        "normalized": "Text-\u003ea-\u003eUrlMap",
        "package": "wai-extra",
        "partial": "",
        "signature": "Text-\u003ea-\u003eUrlMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#v:mount-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMount an application under a given path. The ToApplication typeclass gives\n you the option to pass either an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e or an \u003ccode\u003e\u003ca\u003eUrlMap\u003c/a\u003e\u003c/code\u003e\n as the second argument.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.UrlMap",
        "fct-package": "wai-extra",
        "fct-signature": "Path -\u003e a -\u003e UrlMap",
        "fct-source": "src/Network-Wai-UrlMap.html#mount%27",
        "fct-type": "function",
        "title": "mount'"
      },
      "index": {
        "description": "Mount an application under given path The ToApplication typeclass gives you the option to pass either an Application or an UrlMap as the second argument",
        "hierarchy": "Network Wai UrlMap",
        "module": "Network.Wai.UrlMap",
        "name": "mount'",
        "normalized": "Path-\u003ea-\u003eUrlMap",
        "package": "wai-extra",
        "partial": "",
        "signature": "Path-\u003ea-\u003eUrlMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-extra/docs/Network-Wai-UrlMap.html#v:mountRoot",
      "description": {
        "fct-descr": "\u003cp\u003eMount something at the root. Use this for the last application in the\n block, to avoid 500 errors from none of the applications matching.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.UrlMap",
        "fct-package": "wai-extra",
        "fct-signature": "a -\u003e UrlMap",
        "fct-source": "src/Network-Wai-UrlMap.html#mountRoot",
        "fct-type": "function",
        "title": "mountRoot"
      },
      "index": {
        "description": "Mount something at the root Use this for the last application in the block to avoid errors from none of the applications matching",
        "hierarchy": "Network Wai UrlMap",
        "module": "Network.Wai.UrlMap",
        "name": "mountRoot",
        "normalized": "a-\u003eUrlMap",
        "package": "wai-extra",
        "partial": "Root",
        "signature": "a-\u003eUrlMap"
      }
    }
  }
]