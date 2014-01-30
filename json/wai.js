[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal constructors and helper functions. Note that no guarantees are\n given for stability of these interfaces.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Internal constructors and helper functions Note that no guarantees are given for stability of these interfaces",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "wai",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#t:FilePart",
      "description": {
        "fct-descr": "\u003cp\u003eInformation on which part to be sent.\n   Sophisticated application handles Range (and If-Range) then\n   create \u003ccode\u003e\u003ca\u003eFilePart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Internal.html#FilePart",
        "fct-type": "data",
        "title": "FilePart"
      },
      "index": {
        "description": "Information on which part to be sent Sophisticated application handles Range and If-Range then create FilePart",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "FilePart",
        "normalized": "",
        "package": "wai",
        "partial": "File Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eInformation on the request sent by the client. This abstracts away the\n details of the underlying implementation.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "Information on the request sent by the client This abstracts away the details of the underlying implementation",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "Request",
        "normalized": "",
        "package": "wai",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#t:RequestBodyLength",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of the request body. In the case of chunked bodies, the size will\n not be known.\n\u003c/p\u003e\u003cp\u003eSince 1.4.0\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Internal.html#RequestBodyLength",
        "fct-type": "data",
        "title": "RequestBodyLength"
      },
      "index": {
        "description": "The size of the request body In the case of chunked bodies the size will not be known Since",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "RequestBodyLength",
        "normalized": "",
        "package": "wai",
        "partial": "Request Body Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#t:Response",
      "description": {
        "fct-descr": "\u003cp\u003eThe strange structure of the third field or ResponseSource is to allow for\n exception-safe resource allocation. As an example:\n\u003c/p\u003e\u003cpre\u003e app :: Application\n app _ = return $ ResponseSource status200 [] $ \\f -\u003e bracket\n     (putStrLn \"Allocation\" \u003e\u003e return 5)\n     (\\i -\u003e putStrLn $ \"Cleaning up: \" ++ show i)\n     (\\_ -\u003e f $ do\n         yield $ Chunk $ fromByteString \"Hello \"\n         yield $ Chunk $ fromByteString \"World!\")\n\u003c/pre\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Internal.html#Response",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "The strange structure of the third field or ResponseSource is to allow for exception-safe resource allocation As an example app Application app return ResponseSource status200 bracket putStrLn Allocation return putStrLn Cleaning up show do yield Chunk fromByteString Hello yield Chunk fromByteString World",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "Response",
        "normalized": "",
        "package": "wai",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#t:WithSource",
      "description": {
        "fct-descr": "\u003cp\u003eAuxiliary type for \u003ccode\u003e\u003ca\u003eResponseSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Internal.html#WithSource",
        "fct-type": "type",
        "title": "WithSource"
      },
      "index": {
        "description": "Auxiliary type for ResponseSource",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "WithSource",
        "normalized": "",
        "package": "wai",
        "partial": "With Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:ChunkedBody",
      "description": {
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "ChunkedBody",
        "fct-source": "src/Network-Wai-Internal.html#RequestBodyLength",
        "fct-type": "function",
        "title": "ChunkedBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "ChunkedBody",
        "normalized": "",
        "package": "wai",
        "partial": "Chunked Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:FilePart",
      "description": {
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "FilePart",
        "fct-source": "src/Network-Wai-Internal.html#FilePart",
        "fct-type": "function",
        "title": "FilePart"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "FilePart",
        "normalized": "",
        "package": "wai",
        "partial": "File Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:KnownLength",
      "description": {
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "KnownLength Word64",
        "fct-source": "src/Network-Wai-Internal.html#RequestBodyLength",
        "fct-type": "function",
        "title": "KnownLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "KnownLength",
        "normalized": "",
        "package": "wai",
        "partial": "Known Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:Request",
      "description": {
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Request",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "Request",
        "normalized": "",
        "package": "wai",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:ResponseBuilder",
      "description": {
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "ResponseBuilder Status ResponseHeaders Builder",
        "fct-source": "src/Network-Wai-Internal.html#Response",
        "fct-type": "function",
        "title": "ResponseBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "ResponseBuilder",
        "normalized": "",
        "package": "wai",
        "partial": "Response Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:ResponseFile",
      "description": {
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "ResponseFile Status ResponseHeaders FilePath (Maybe FilePart)",
        "fct-source": "src/Network-Wai-Internal.html#Response",
        "fct-type": "function",
        "title": "ResponseFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "ResponseFile",
        "normalized": "",
        "package": "wai",
        "partial": "Response File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:ResponseSource",
      "description": {
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "ResponseSource Status ResponseHeaders (forall b.  WithSource IO (Flush Builder) b)",
        "fct-source": "src/Network-Wai-Internal.html#Response",
        "fct-type": "function",
        "title": "ResponseSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "ResponseSource",
        "normalized": "",
        "package": "wai",
        "partial": "Response Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:filePartByteCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Integer",
        "fct-source": "src/Network-Wai-Internal.html#FilePart",
        "fct-type": "function",
        "title": "filePartByteCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "filePartByteCount",
        "normalized": "",
        "package": "wai",
        "partial": "Part Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:filePartFileSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Integer",
        "fct-source": "src/Network-Wai-Internal.html#FilePart",
        "fct-type": "function",
        "title": "filePartFileSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "filePartFileSize",
        "normalized": "",
        "package": "wai",
        "partial": "Part File Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:filePartOffset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Integer",
        "fct-source": "src/Network-Wai-Internal.html#FilePart",
        "fct-type": "function",
        "title": "filePartOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "filePartOffset",
        "normalized": "",
        "package": "wai",
        "partial": "Part Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:httpVersion",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP version such as 1.1.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "HttpVersion",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "httpVersion"
      },
      "index": {
        "description": "HTTP version such as",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "httpVersion",
        "normalized": "",
        "package": "wai",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:isSecure",
      "description": {
        "fct-descr": "\u003cp\u003eWas this request made over an SSL connection?\n\u003c/p\u003e\u003cp\u003eNote that this value will \u003cem\u003enot\u003c/em\u003e tell you if the client originally made\n this request over SSL, but rather whether the current connection is SSL.\n The distinction lies with reverse proxies. In many cases, the client will\n connect to a load balancer over SSL, but connect to the WAI handler\n without SSL. In such a case, \u003ccode\u003eisSecure\u003c/code\u003e will be \u003ccode\u003eFalse\u003c/code\u003e, but from a user\n perspective, there is a secure connection.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Bool",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "isSecure"
      },
      "index": {
        "description": "Was this request made over an SSL connection Note that this value will not tell you if the client originally made this request over SSL but rather whether the current connection is SSL The distinction lies with reverse proxies In many cases the client will connect to load balancer over SSL but connect to the WAI handler without SSL In such case isSecure will be False but from user perspective there is secure connection",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "isSecure",
        "normalized": "",
        "package": "wai",
        "partial": "Secure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:pathInfo",
      "description": {
        "fct-descr": "\u003cp\u003ePath info in individual pieces- the url without a hostname/port and without a query string, split on forward slashes,\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "[Text]",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "pathInfo"
      },
      "index": {
        "description": "Path info in individual pieces the url without hostname port and without query string split on forward slashes",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "pathInfo",
        "normalized": "[Text]",
        "package": "wai",
        "partial": "Info",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:queryString",
      "description": {
        "fct-descr": "\u003cp\u003eParsed query string information\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Query",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "queryString"
      },
      "index": {
        "description": "Parsed query string information",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "queryString",
        "normalized": "",
        "package": "wai",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:rawPathInfo",
      "description": {
        "fct-descr": "\u003cp\u003eExtra path information sent by the client. The meaning varies slightly\n depending on backend; in a standalone server setting, this is most likely\n all information after the domain name. In a CGI application, this would be\n the information following the path to the CGI executable itself.\n Do not modify this raw value- modify pathInfo instead.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "rawPathInfo"
      },
      "index": {
        "description": "Extra path information sent by the client The meaning varies slightly depending on backend in standalone server setting this is most likely all information after the domain name In CGI application this would be the information following the path to the CGI executable itself Do not modify this raw value modify pathInfo instead",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "rawPathInfo",
        "normalized": "",
        "package": "wai",
        "partial": "Path Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:rawQueryString",
      "description": {
        "fct-descr": "\u003cp\u003eIf no query string was specified, this should be empty. This value\n \u003cem\u003ewill\u003c/em\u003e include the leading question mark.\n Do not modify this raw value- modify queryString instead.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "rawQueryString"
      },
      "index": {
        "description": "If no query string was specified this should be empty This value will include the leading question mark Do not modify this raw value modify queryString instead",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "rawQueryString",
        "normalized": "",
        "package": "wai",
        "partial": "Query String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:remoteHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe client's host information.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "SockAddr",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "remoteHost"
      },
      "index": {
        "description": "The client host information",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "remoteHost",
        "normalized": "",
        "package": "wai",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestBody",
      "description": {
        "fct-descr": "\u003cp\u003eA request body provided as \u003ccode\u003eSource\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Source IO ByteString",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "requestBody"
      },
      "index": {
        "description": "request body provided as Source",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "requestBody",
        "normalized": "",
        "package": "wai",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestBodyLength",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of the request body. In the case of a chunked request body, this may be unknown.\n\u003c/p\u003e\u003cp\u003eSince 1.4.0\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "RequestBodyLength",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "requestBodyLength"
      },
      "index": {
        "description": "The size of the request body In the case of chunked request body this may be unknown Since",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "requestBodyLength",
        "normalized": "",
        "package": "wai",
        "partial": "Body Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestHeaderHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe value of the Host header in a HTTP request.\n\u003c/p\u003e\u003cp\u003eSince 2.0.0\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "requestHeaderHost"
      },
      "index": {
        "description": "The value of the Host header in HTTP request Since",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "requestHeaderHost",
        "normalized": "",
        "package": "wai",
        "partial": "Header Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestHeaderRange",
      "description": {
        "fct-descr": "\u003cp\u003eThe value of the Range header in a HTTP request.\n\u003c/p\u003e\u003cp\u003eSince 2.0.0\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "requestHeaderRange"
      },
      "index": {
        "description": "The value of the Range header in HTTP request Since",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "requestHeaderRange",
        "normalized": "",
        "package": "wai",
        "partial": "Header Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eA list of header (a pair of key and value) in an HTTP request.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "RequestHeaders",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "requestHeaders"
      },
      "index": {
        "description": "list of header pair of key and value in an HTTP request",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "requestHeaders",
        "normalized": "",
        "package": "wai",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestMethod",
      "description": {
        "fct-descr": "\u003cp\u003eRequest method such as GET.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Method",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "requestMethod"
      },
      "index": {
        "description": "Request method such as GET",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "requestMethod",
        "normalized": "",
        "package": "wai",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:vault",
      "description": {
        "fct-descr": "\u003cp\u003eA location for arbitrary data to be shared by applications and middleware.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Internal",
        "fct-package": "wai",
        "fct-signature": "Vault",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "function",
        "title": "vault"
      },
      "index": {
        "description": "location for arbitrary data to be shared by applications and middleware",
        "hierarchy": "Network Wai Internal",
        "module": "Network.Wai.Internal",
        "name": "vault",
        "normalized": "",
        "package": "wai",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a generic web application interface. It is a common\nprotocol between web servers and web applications.\n\u003c/p\u003e\u003cp\u003eThe overriding design principles here are performance and generality . To\naddress performance, this library is built on top of the conduit and\nblaze-builder packages.  The advantages of conduits over lazy IO have been\ndebated elsewhere and so will not be addressed here.  However, helper functions\nlike \u003ccode\u003e\u003ca\u003eresponseLBS\u003c/a\u003e\u003c/code\u003e allow you to continue using lazy IO if you so desire.\n\u003c/p\u003e\u003cp\u003eGenerality is achieved by removing many variables commonly found in similar\nprojects that are not universal to all servers. The goal is that the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\nobject contains only data which is meaningful in all circumstances.\n\u003c/p\u003e\u003cp\u003ePlease remember when using this package that, while your application may\ncompile without a hitch against many different servers, there are other\nconsiderations to be taken when moving to a new backend. For example, if you\ntransfer from a CGI application to a FastCGI one, you might suddenly find you\nhave a memory leak. Conversely, a FastCGI application would be well served to\npreload all templates from disk when first starting; this would kill the\nperformance of a CGI application.\n\u003c/p\u003e\u003cp\u003eThis package purposely provides very little functionality. You can find various\nmiddlewares, backends and utilities on Hackage. Some of the most commonly used\ninclude:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ewarp\u003c/dt\u003e\u003cdd\u003e \u003ca\u003ehttp://hackage.haskell.org/package/warp\u003c/a\u003e\n\u003c/dd\u003e\u003cdt\u003ewai-extra\u003c/dt\u003e\u003cdd\u003e \u003ca\u003ehttp://hackage.haskell.org/package/wai-extra\u003c/a\u003e\n\u003c/dd\u003e\u003cdt\u003ewai-test\u003c/dt\u003e\u003cdd\u003e \u003ca\u003ehttp://hackage.haskell.org/package/wai-test\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai.html",
        "fct-type": "module",
        "title": "Wai"
      },
      "index": {
        "description": "This module defines generic web application interface It is common protocol between web servers and web applications The overriding design principles here are performance and generality To address performance this library is built on top of the conduit and blaze-builder packages The advantages of conduits over lazy IO have been debated elsewhere and so will not be addressed here However helper functions like responseLBS allow you to continue using lazy IO if you so desire Generality is achieved by removing many variables commonly found in similar projects that are not universal to all servers The goal is that the Request object contains only data which is meaningful in all circumstances Please remember when using this package that while your application may compile without hitch against many different servers there are other considerations to be taken when moving to new backend For example if you transfer from CGI application to FastCGI one you might suddenly find you have memory leak Conversely FastCGI application would be well served to preload all templates from disk when first starting this would kill the performance of CGI application This package purposely provides very little functionality You can find various middlewares backends and utilities on Hackage Some of the most commonly used include warp http hackage.haskell.org package warp wai-extra http hackage.haskell.org package wai-extra wai-test http hackage.haskell.org package wai-test",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "Wai",
        "normalized": "",
        "package": "wai",
        "partial": "Wai",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:Application",
      "description": {
        "fct-descr": "\u003cp\u003eThe WAI application.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai.html#Application",
        "fct-type": "type",
        "title": "Application"
      },
      "index": {
        "description": "The WAI application",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "Application",
        "normalized": "",
        "package": "wai",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:FilePart",
      "description": {
        "fct-descr": "\u003cp\u003eInformation on which part to be sent.\n   Sophisticated application handles Range (and If-Range) then\n   create \u003ccode\u003e\u003ca\u003eFilePart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Internal.html#FilePart",
        "fct-type": "data",
        "title": "FilePart"
      },
      "index": {
        "description": "Information on which part to be sent Sophisticated application handles Range and If-Range then create FilePart",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "FilePart",
        "normalized": "",
        "package": "wai",
        "partial": "File Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:Middleware",
      "description": {
        "fct-descr": "\u003cp\u003eMiddleware is a component that sits between the server and application. It\n can do such tasks as GZIP encoding or response caching. What follows is the\n general definition of middleware, though a middleware author should feel\n free to modify this.\n\u003c/p\u003e\u003cp\u003eAs an example of an alternate type for middleware, suppose you write a\n function to load up session information. The session information is simply a\n string map [(String, String)]. A logical type signatures for this middleware\n might be:\n\u003c/p\u003e\u003cpre\u003e loadSession :: ([(String, String)] -\u003e Application) -\u003e Application\u003c/pre\u003e\u003cp\u003eHere, instead of taking a standard \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e as its first argument, the\n middleware takes a function which consumes the session information as well.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai.html#Middleware",
        "fct-type": "type",
        "title": "Middleware"
      },
      "index": {
        "description": "Middleware is component that sits between the server and application It can do such tasks as GZIP encoding or response caching What follows is the general definition of middleware though middleware author should feel free to modify this As an example of an alternate type for middleware suppose you write function to load up session information The session information is simply string map String String logical type signatures for this middleware might be loadSession String String Application Application Here instead of taking standard Application as its first argument the middleware takes function which consumes the session information as well",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "Middleware",
        "normalized": "",
        "package": "wai",
        "partial": "Middleware",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eInformation on the request sent by the client. This abstracts away the\n details of the underlying implementation.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Internal.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "Information on the request sent by the client This abstracts away the details of the underlying implementation",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "Request",
        "normalized": "",
        "package": "wai",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:RequestBodyLength",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of the request body. In the case of chunked bodies, the size will\n not be known.\n\u003c/p\u003e\u003cp\u003eSince 1.4.0\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Internal.html#RequestBodyLength",
        "fct-type": "data",
        "title": "RequestBodyLength"
      },
      "index": {
        "description": "The size of the request body In the case of chunked bodies the size will not be known Since",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "RequestBodyLength",
        "normalized": "",
        "package": "wai",
        "partial": "Request Body Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:Response",
      "description": {
        "fct-descr": "\u003cp\u003eThe strange structure of the third field or ResponseSource is to allow for\n exception-safe resource allocation. As an example:\n\u003c/p\u003e\u003cpre\u003e app :: Application\n app _ = return $ ResponseSource status200 [] $ \\f -\u003e bracket\n     (putStrLn \"Allocation\" \u003e\u003e return 5)\n     (\\i -\u003e putStrLn $ \"Cleaning up: \" ++ show i)\n     (\\_ -\u003e f $ do\n         yield $ Chunk $ fromByteString \"Hello \"\n         yield $ Chunk $ fromByteString \"World!\")\n\u003c/pre\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Internal.html#Response",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "The strange structure of the third field or ResponseSource is to allow for exception-safe resource allocation As an example app Application app return ResponseSource status200 bracket putStrLn Allocation return putStrLn Cleaning up show do yield Chunk fromByteString Hello yield Chunk fromByteString World",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "Response",
        "normalized": "",
        "package": "wai",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:WithSource",
      "description": {
        "fct-descr": "\u003cp\u003eAuxiliary type for \u003ccode\u003e\u003ca\u003eResponseSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Internal.html#WithSource",
        "fct-type": "type",
        "title": "WithSource"
      },
      "index": {
        "description": "Auxiliary type for ResponseSource",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "WithSource",
        "normalized": "",
        "package": "wai",
        "partial": "With Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:ChunkedBody",
      "description": {
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "ChunkedBody",
        "fct-source": "src/Network-Wai-Internal.html#RequestBodyLength",
        "fct-type": "function",
        "title": "ChunkedBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "ChunkedBody",
        "normalized": "",
        "package": "wai",
        "partial": "Chunked Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:FilePart",
      "description": {
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "FilePart",
        "fct-source": "src/Network-Wai-Internal.html#FilePart",
        "fct-type": "function",
        "title": "FilePart"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "FilePart",
        "normalized": "",
        "package": "wai",
        "partial": "File Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:KnownLength",
      "description": {
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "KnownLength Word64",
        "fct-source": "src/Network-Wai-Internal.html#RequestBodyLength",
        "fct-type": "function",
        "title": "KnownLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "KnownLength",
        "normalized": "",
        "package": "wai",
        "partial": "Known Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:defaultRequest",
      "description": {
        "fct-descr": "\u003cp\u003eA default, blank request.\n\u003c/p\u003e\u003cp\u003eSince 2.0.0\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request",
        "fct-source": "src/Network-Wai.html#defaultRequest",
        "fct-type": "function",
        "title": "defaultRequest"
      },
      "index": {
        "description": "default blank request Since",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "defaultRequest",
        "normalized": "",
        "package": "wai",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:filePartByteCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Integer",
        "fct-source": "src/Network-Wai-Internal.html#FilePart",
        "fct-type": "function",
        "title": "filePartByteCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "filePartByteCount",
        "normalized": "",
        "package": "wai",
        "partial": "Part Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:filePartFileSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Integer",
        "fct-source": "src/Network-Wai-Internal.html#FilePart",
        "fct-type": "function",
        "title": "filePartFileSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "filePartFileSize",
        "normalized": "",
        "package": "wai",
        "partial": "Part File Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:filePartOffset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Integer",
        "fct-source": "src/Network-Wai-Internal.html#FilePart",
        "fct-type": "function",
        "title": "filePartOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "filePartOffset",
        "normalized": "",
        "package": "wai",
        "partial": "Part Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:httpVersion",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP version such as 1.1.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e HttpVersion",
        "fct-source": "src/Network-Wai-Internal.html#httpVersion",
        "fct-type": "function",
        "title": "httpVersion"
      },
      "index": {
        "description": "HTTP version such as",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "httpVersion",
        "normalized": "Request-\u003eHttpVersion",
        "package": "wai",
        "partial": "Version",
        "signature": "Request-\u003eHttpVersion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:isSecure",
      "description": {
        "fct-descr": "\u003cp\u003eWas this request made over an SSL connection?\n\u003c/p\u003e\u003cp\u003eNote that this value will \u003cem\u003enot\u003c/em\u003e tell you if the client originally made\n this request over SSL, but rather whether the current connection is SSL.\n The distinction lies with reverse proxies. In many cases, the client will\n connect to a load balancer over SSL, but connect to the WAI handler\n without SSL. In such a case, \u003ccode\u003eisSecure\u003c/code\u003e will be \u003ccode\u003eFalse\u003c/code\u003e, but from a user\n perspective, there is a secure connection.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e Bool",
        "fct-source": "src/Network-Wai-Internal.html#isSecure",
        "fct-type": "function",
        "title": "isSecure"
      },
      "index": {
        "description": "Was this request made over an SSL connection Note that this value will not tell you if the client originally made this request over SSL but rather whether the current connection is SSL The distinction lies with reverse proxies In many cases the client will connect to load balancer over SSL but connect to the WAI handler without SSL In such case isSecure will be False but from user perspective there is secure connection",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "isSecure",
        "normalized": "Request-\u003eBool",
        "package": "wai",
        "partial": "Secure",
        "signature": "Request-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:lazyRequestBody",
      "description": {
        "fct-descr": "\u003cp\u003eGet the request body as a lazy ByteString. This uses lazy I/O under the\n surface, and therefore all typical warnings regarding lazy I/O apply.\n\u003c/p\u003e\u003cp\u003eSince 1.4.1\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e IO ByteString",
        "fct-source": "src/Network-Wai.html#lazyRequestBody",
        "fct-type": "function",
        "title": "lazyRequestBody"
      },
      "index": {
        "description": "Get the request body as lazy ByteString This uses lazy under the surface and therefore all typical warnings regarding lazy apply Since",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "lazyRequestBody",
        "normalized": "Request-\u003eIO ByteString",
        "package": "wai",
        "partial": "Request Body",
        "signature": "Request-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:pathInfo",
      "description": {
        "fct-descr": "\u003cp\u003ePath info in individual pieces- the url without a hostname/port and without a query string, split on forward slashes,\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e [Text]",
        "fct-source": "src/Network-Wai-Internal.html#pathInfo",
        "fct-type": "function",
        "title": "pathInfo"
      },
      "index": {
        "description": "Path info in individual pieces the url without hostname port and without query string split on forward slashes",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "pathInfo",
        "normalized": "Request-\u003e[Text]",
        "package": "wai",
        "partial": "Info",
        "signature": "Request-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:queryString",
      "description": {
        "fct-descr": "\u003cp\u003eParsed query string information\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e Query",
        "fct-source": "src/Network-Wai-Internal.html#queryString",
        "fct-type": "function",
        "title": "queryString"
      },
      "index": {
        "description": "Parsed query string information",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "queryString",
        "normalized": "Request-\u003eQuery",
        "package": "wai",
        "partial": "String",
        "signature": "Request-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:rawPathInfo",
      "description": {
        "fct-descr": "\u003cp\u003eExtra path information sent by the client. The meaning varies slightly\n depending on backend; in a standalone server setting, this is most likely\n all information after the domain name. In a CGI application, this would be\n the information following the path to the CGI executable itself.\n Do not modify this raw value- modify pathInfo instead.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e ByteString",
        "fct-source": "src/Network-Wai-Internal.html#rawPathInfo",
        "fct-type": "function",
        "title": "rawPathInfo"
      },
      "index": {
        "description": "Extra path information sent by the client The meaning varies slightly depending on backend in standalone server setting this is most likely all information after the domain name In CGI application this would be the information following the path to the CGI executable itself Do not modify this raw value modify pathInfo instead",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "rawPathInfo",
        "normalized": "Request-\u003eByteString",
        "package": "wai",
        "partial": "Path Info",
        "signature": "Request-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:rawQueryString",
      "description": {
        "fct-descr": "\u003cp\u003eIf no query string was specified, this should be empty. This value\n \u003cem\u003ewill\u003c/em\u003e include the leading question mark.\n Do not modify this raw value- modify queryString instead.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e ByteString",
        "fct-source": "src/Network-Wai-Internal.html#rawQueryString",
        "fct-type": "function",
        "title": "rawQueryString"
      },
      "index": {
        "description": "If no query string was specified this should be empty This value will include the leading question mark Do not modify this raw value modify queryString instead",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "rawQueryString",
        "normalized": "Request-\u003eByteString",
        "package": "wai",
        "partial": "Query String",
        "signature": "Request-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:remoteHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe client's host information.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e SockAddr",
        "fct-source": "src/Network-Wai-Internal.html#remoteHost",
        "fct-type": "function",
        "title": "remoteHost"
      },
      "index": {
        "description": "The client host information",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "remoteHost",
        "normalized": "Request-\u003eSockAddr",
        "package": "wai",
        "partial": "Host",
        "signature": "Request-\u003eSockAddr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestBody",
      "description": {
        "fct-descr": "\u003cp\u003eA request body provided as \u003ccode\u003eSource\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e Source IO ByteString",
        "fct-source": "src/Network-Wai-Internal.html#requestBody",
        "fct-type": "function",
        "title": "requestBody"
      },
      "index": {
        "description": "request body provided as Source",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "requestBody",
        "normalized": "Request-\u003eSource IO ByteString",
        "package": "wai",
        "partial": "Body",
        "signature": "Request-\u003eSource IO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestBodyLength",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of the request body. In the case of a chunked request body, this may be unknown.\n\u003c/p\u003e\u003cp\u003eSince 1.4.0\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e RequestBodyLength",
        "fct-source": "src/Network-Wai-Internal.html#requestBodyLength",
        "fct-type": "function",
        "title": "requestBodyLength"
      },
      "index": {
        "description": "The size of the request body In the case of chunked request body this may be unknown Since",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "requestBodyLength",
        "normalized": "Request-\u003eRequestBodyLength",
        "package": "wai",
        "partial": "Body Length",
        "signature": "Request-\u003eRequestBodyLength"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestHeaderHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe value of the Host header in a HTTP request.\n\u003c/p\u003e\u003cp\u003eSince 2.0.0\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e Maybe ByteString",
        "fct-source": "src/Network-Wai-Internal.html#requestHeaderHost",
        "fct-type": "function",
        "title": "requestHeaderHost"
      },
      "index": {
        "description": "The value of the Host header in HTTP request Since",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "requestHeaderHost",
        "normalized": "Request-\u003eMaybe ByteString",
        "package": "wai",
        "partial": "Header Host",
        "signature": "Request-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestHeaderRange",
      "description": {
        "fct-descr": "\u003cp\u003eThe value of the Range header in a HTTP request.\n\u003c/p\u003e\u003cp\u003eSince 2.0.0\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e Maybe ByteString",
        "fct-source": "src/Network-Wai-Internal.html#requestHeaderRange",
        "fct-type": "function",
        "title": "requestHeaderRange"
      },
      "index": {
        "description": "The value of the Range header in HTTP request Since",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "requestHeaderRange",
        "normalized": "Request-\u003eMaybe ByteString",
        "package": "wai",
        "partial": "Header Range",
        "signature": "Request-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eA list of header (a pair of key and value) in an HTTP request.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e RequestHeaders",
        "fct-source": "src/Network-Wai-Internal.html#requestHeaders",
        "fct-type": "function",
        "title": "requestHeaders"
      },
      "index": {
        "description": "list of header pair of key and value in an HTTP request",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "requestHeaders",
        "normalized": "Request-\u003eRequestHeaders",
        "package": "wai",
        "partial": "Headers",
        "signature": "Request-\u003eRequestHeaders"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestMethod",
      "description": {
        "fct-descr": "\u003cp\u003eRequest method such as GET.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e Method",
        "fct-source": "src/Network-Wai-Internal.html#requestMethod",
        "fct-type": "function",
        "title": "requestMethod"
      },
      "index": {
        "description": "Request method such as GET",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "requestMethod",
        "normalized": "Request-\u003eMethod",
        "package": "wai",
        "partial": "Method",
        "signature": "Request-\u003eMethod"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome questions and answers about the usage of \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e here:\n\u003c/p\u003e\u003cp\u003eQ1. Shouldn't it be at the user's discretion to use Builders internally and\n then create a stream of ByteStrings?\n\u003c/p\u003e\u003cp\u003eA1. That would be less efficient, as we wouldn't get cheap concatenation\n with the response headers.\n\u003c/p\u003e\u003cp\u003eQ2. Isn't it really inefficient to convert from ByteString to Builder, and\n then right back to ByteString?\n\u003c/p\u003e\u003cp\u003eA2. No. If the ByteStrings are small, then they will be copied into a larger\n buffer, which should be a performance gain overall (less system calls). If\n they are already large, then blaze-builder uses an InsertByteString\n instruction to avoid copying.\n\u003c/p\u003e\u003cp\u003eQ3. Doesn't this prevent us from creating comet-style servers, since data\n will be cached?\n\u003c/p\u003e\u003cp\u003eA3. You can force blaze-builder to output a ByteString before it is an\n optimal size by sending a flush command.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Status -\u003e ResponseHeaders -\u003e Builder -\u003e Response",
        "fct-source": "src/Network-Wai.html#responseBuilder",
        "fct-type": "function",
        "title": "responseBuilder"
      },
      "index": {
        "description": "Creating Response from Builder Some questions and answers about the usage of Builder here Q1 Shouldn it be at the user discretion to use Builders internally and then create stream of ByteStrings A1 That would be less efficient as we wouldn get cheap concatenation with the response headers Q2 Isn it really inefficient to convert from ByteString to Builder and then right back to ByteString A2 No If the ByteStrings are small then they will be copied into larger buffer which should be performance gain overall less system calls If they are already large then blaze-builder uses an InsertByteString instruction to avoid copying Q3 Doesn this prevent us from creating comet-style servers since data will be cached A3 You can force blaze-builder to output ByteString before it is an optimal size by sending flush command",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "responseBuilder",
        "normalized": "Status-\u003eResponseHeaders-\u003eBuilder-\u003eResponse",
        "package": "wai",
        "partial": "Builder",
        "signature": "Status-\u003eResponseHeaders-\u003eBuilder-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from a file.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Status -\u003e ResponseHeaders -\u003e FilePath -\u003e Maybe FilePart -\u003e Response",
        "fct-source": "src/Network-Wai.html#responseFile",
        "fct-type": "function",
        "title": "responseFile"
      },
      "index": {
        "description": "Creating Response from file",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "responseFile",
        "normalized": "Status-\u003eResponseHeaders-\u003eFilePath-\u003eMaybe FilePart-\u003eResponse",
        "package": "wai",
        "partial": "File",
        "signature": "Status-\u003eResponseHeaders-\u003eFilePath-\u003eMaybe FilePart-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eAccessing \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Response -\u003e ResponseHeaders",
        "fct-source": "src/Network-Wai.html#responseHeaders",
        "fct-type": "function",
        "title": "responseHeaders"
      },
      "index": {
        "description": "Accessing Status in Response",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "responseHeaders",
        "normalized": "Response-\u003eResponseHeaders",
        "package": "wai",
        "partial": "Headers",
        "signature": "Response-\u003eResponseHeaders"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseLBS",
      "description": {
        "fct-descr": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. This is a wrapper for\n   \u003ccode\u003e\u003ca\u003eresponseBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Status -\u003e ResponseHeaders -\u003e ByteString -\u003e Response",
        "fct-source": "src/Network-Wai.html#responseLBS",
        "fct-type": "function",
        "title": "responseLBS"
      },
      "index": {
        "description": "Creating Response from ByteString This is wrapper for responseBuilder",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "responseLBS",
        "normalized": "Status-\u003eResponseHeaders-\u003eByteString-\u003eResponse",
        "package": "wai",
        "partial": "LBS",
        "signature": "Status-\u003eResponseHeaders-\u003eByteString-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseSource",
      "description": {
        "fct-descr": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Status -\u003e ResponseHeaders -\u003e Source IO (Flush Builder) -\u003e Response",
        "fct-source": "src/Network-Wai.html#responseSource",
        "fct-type": "function",
        "title": "responseSource"
      },
      "index": {
        "description": "Creating Response from Source",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "responseSource",
        "normalized": "Status-\u003eResponseHeaders-\u003eSource IO(Flush Builder)-\u003eResponse",
        "package": "wai",
        "partial": "Source",
        "signature": "Status-\u003eResponseHeaders-\u003eSource IO(Flush Builder)-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseSourceBracket",
      "description": {
        "fct-descr": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with allocated resource safely released.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The first argument is an action to allocate resource.\n\u003c/li\u003e\u003cli\u003e The second argument is a function to release the resource.\n\u003c/li\u003e\u003cli\u003e The third argument is a function to create\n     (\u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eResponseHeaders\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eFlush\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e))\n     from the resource.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "IO a -\u003e (a -\u003e IO ()) -\u003e (a -\u003e IO (Status, ResponseHeaders, Source IO (Flush Builder))) -\u003e IO Response",
        "fct-source": "src/Network-Wai.html#responseSourceBracket",
        "fct-type": "function",
        "title": "responseSourceBracket"
      },
      "index": {
        "description": "Creating Response with allocated resource safely released The first argument is an action to allocate resource The second argument is function to release the resource The third argument is function to create Status ResponseHeaders Source IO Flush Builder from the resource",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "responseSourceBracket",
        "normalized": "IO a-\u003e(a-\u003eIO())-\u003e(a-\u003eIO(Status,ResponseHeaders,Source IO(Flush Builder)))-\u003eIO Response",
        "package": "wai",
        "partial": "Source Bracket",
        "signature": "IO a-\u003e(a-\u003eIO())-\u003e(a-\u003eIO(Status,ResponseHeaders,Source IO(Flush Builder)))-\u003eIO Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseStatus",
      "description": {
        "fct-descr": "\u003cp\u003eAccessing \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Response -\u003e Status",
        "fct-source": "src/Network-Wai.html#responseStatus",
        "fct-type": "function",
        "title": "responseStatus"
      },
      "index": {
        "description": "Accessing Status in Response",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "responseStatus",
        "normalized": "Response-\u003eStatus",
        "package": "wai",
        "partial": "Status",
        "signature": "Response-\u003eStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseToSource",
      "description": {
        "fct-descr": "\u003cp\u003eConverting the body information in \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eSource\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Response -\u003e (Status, ResponseHeaders, WithSource IO (Flush Builder) b)",
        "fct-source": "src/Network-Wai.html#responseToSource",
        "fct-type": "function",
        "title": "responseToSource"
      },
      "index": {
        "description": "Converting the body information in Response to Source",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "responseToSource",
        "normalized": "Response-\u003e(Status,ResponseHeaders,WithSource IO(Flush Builder)a)",
        "package": "wai",
        "partial": "To Source",
        "signature": "Response-\u003e(Status,ResponseHeaders,WithSource IO(Flush Builder)b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:vault",
      "description": {
        "fct-descr": "\u003cp\u003eA location for arbitrary data to be shared by applications and middleware.\n\u003c/p\u003e",
        "fct-module": "Network.Wai",
        "fct-package": "wai",
        "fct-signature": "Request -\u003e Vault",
        "fct-source": "src/Network-Wai-Internal.html#vault",
        "fct-type": "function",
        "title": "vault"
      },
      "index": {
        "description": "location for arbitrary data to be shared by applications and middleware",
        "hierarchy": "Network Wai",
        "module": "Network.Wai",
        "name": "vault",
        "normalized": "Request-\u003eVault",
        "package": "wai",
        "partial": "",
        "signature": "Request-\u003eVault"
      }
    }
  }
]