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
        "word": "wai"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal constructors and helper functions. Note that no guarantees are\n given for stability of these interfaces.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Internal",
          "name": "Internal",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal constructors and helper functions Note that no guarantees are given for stability of these interfaces",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "Internal",
          "package": "wai",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on which part to be sent.\n   Sophisticated application handles Range (and If-Range) then\n   create \u003ccode\u003e\u003ca\u003eFilePart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "FilePart",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html#FilePart",
          "type": "data"
        },
        "index": {
          "description": "Information on which part to be sent Sophisticated application handles Range and If-Range then create FilePart",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "FilePart",
          "package": "wai",
          "partial": "File Part",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#t:FilePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on the request sent by the client. This abstracts away the\n details of the underlying implementation.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "Request",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "data"
        },
        "index": {
          "description": "Information on the request sent by the client This abstracts away the details of the underlying implementation",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "Request",
          "package": "wai",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the request body. In the case of chunked bodies, the size will\n not be known.\n\u003c/p\u003e\u003cp\u003eSince 1.4.0\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "RequestBodyLength",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html#RequestBodyLength",
          "type": "data"
        },
        "index": {
          "description": "The size of the request body In the case of chunked bodies the size will not be known Since",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "RequestBodyLength",
          "package": "wai",
          "partial": "Request Body Length",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#t:RequestBodyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strange structure of the third field or ResponseSource is to allow for\n exception-safe resource allocation. As an example:\n\u003c/p\u003e\u003cpre\u003e app :: Application\n app _ = return $ ResponseSource status200 [] $ \\f -\u003e bracket\n     (putStrLn \"Allocation\" \u003e\u003e return 5)\n     (\\i -\u003e putStrLn $ \"Cleaning up: \" ++ show i)\n     (\\_ -\u003e f $ do\n         yield $ Chunk $ fromByteString \"Hello \"\n         yield $ Chunk $ fromByteString \"World!\")\n\u003c/pre\u003e",
          "module": "Network.Wai.Internal",
          "name": "Response",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html#Response",
          "type": "data"
        },
        "index": {
          "description": "The strange structure of the third field or ResponseSource is to allow for exception-safe resource allocation As an example app Application app return ResponseSource status200 bracket putStrLn Allocation return putStrLn Cleaning up show do yield Chunk fromByteString Hello yield Chunk fromByteString World",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "Response",
          "package": "wai",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuxiliary type for \u003ccode\u003e\u003ca\u003eResponseSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "WithSource",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html#WithSource",
          "type": "type"
        },
        "index": {
          "description": "Auxiliary type for ResponseSource",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "WithSource",
          "package": "wai",
          "partial": "With Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#t:WithSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Wai.Internal\",\"Network.Wai\"]",
          "name": "ChunkedBody",
          "package": "wai",
          "signature": "ChunkedBody",
          "source": "src/Network-Wai-Internal.html#RequestBodyLength",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:ChunkedBody\",\"http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:ChunkedBody\"]"
        },
        "index": {
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "ChunkedBody",
          "package": "wai",
          "partial": "Chunked Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:ChunkedBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Wai.Internal\",\"Network.Wai\"]",
          "name": "FilePart",
          "package": "wai",
          "signature": "FilePart",
          "source": "src/Network-Wai-Internal.html#FilePart",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:FilePart\",\"http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:FilePart\"]"
        },
        "index": {
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "FilePart",
          "package": "wai",
          "partial": "File Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:FilePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Wai.Internal\",\"Network.Wai\"]",
          "name": "KnownLength",
          "package": "wai",
          "signature": "KnownLength Word64",
          "source": "src/Network-Wai-Internal.html#RequestBodyLength",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:KnownLength\",\"http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:KnownLength\"]"
        },
        "index": {
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "KnownLength",
          "package": "wai",
          "partial": "Known Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:KnownLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Internal",
          "name": "Request",
          "package": "wai",
          "signature": "Request",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "Request",
          "package": "wai",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Internal",
          "name": "ResponseBuilder",
          "package": "wai",
          "signature": "ResponseBuilder Status ResponseHeaders Builder",
          "source": "src/Network-Wai-Internal.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "ResponseBuilder",
          "package": "wai",
          "partial": "Response Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:ResponseBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Internal",
          "name": "ResponseFile",
          "package": "wai",
          "signature": "ResponseFile Status ResponseHeaders FilePath (Maybe FilePart)",
          "source": "src/Network-Wai-Internal.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "ResponseFile",
          "package": "wai",
          "partial": "Response File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:ResponseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Internal",
          "name": "ResponseSource",
          "package": "wai",
          "signature": "ResponseSource Status ResponseHeaders (forall b.  WithSource IO (Flush Builder) b)",
          "source": "src/Network-Wai-Internal.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "ResponseSource",
          "package": "wai",
          "partial": "Response Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:ResponseSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Wai.Internal\",\"Network.Wai\"]",
          "name": "filePartByteCount",
          "package": "wai",
          "signature": "Integer",
          "source": "src/Network-Wai-Internal.html#FilePart",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:filePartByteCount\",\"http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:filePartByteCount\"]"
        },
        "index": {
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "filePartByteCount",
          "package": "wai",
          "partial": "Part Byte Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:filePartByteCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Wai.Internal\",\"Network.Wai\"]",
          "name": "filePartFileSize",
          "package": "wai",
          "signature": "Integer",
          "source": "src/Network-Wai-Internal.html#FilePart",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:filePartFileSize\",\"http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:filePartFileSize\"]"
        },
        "index": {
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "filePartFileSize",
          "package": "wai",
          "partial": "Part File Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:filePartFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Wai.Internal\",\"Network.Wai\"]",
          "name": "filePartOffset",
          "package": "wai",
          "signature": "Integer",
          "source": "src/Network-Wai-Internal.html#FilePart",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:filePartOffset\",\"http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:filePartOffset\"]"
        },
        "index": {
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "filePartOffset",
          "package": "wai",
          "partial": "Part Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:filePartOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP version such as 1.1.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "httpVersion",
          "package": "wai",
          "signature": "HttpVersion",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "HTTP version such as",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "httpVersion",
          "package": "wai",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:httpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWas this request made over an SSL connection?\n\u003c/p\u003e\u003cp\u003eNote that this value will \u003cem\u003enot\u003c/em\u003e tell you if the client originally made\n this request over SSL, but rather whether the current connection is SSL.\n The distinction lies with reverse proxies. In many cases, the client will\n connect to a load balancer over SSL, but connect to the WAI handler\n without SSL. In such a case, \u003ccode\u003eisSecure\u003c/code\u003e will be \u003ccode\u003eFalse\u003c/code\u003e, but from a user\n perspective, there is a secure connection.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "isSecure",
          "package": "wai",
          "signature": "Bool",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Was this request made over an SSL connection Note that this value will not tell you if the client originally made this request over SSL but rather whether the current connection is SSL The distinction lies with reverse proxies In many cases the client will connect to load balancer over SSL but connect to the WAI handler without SSL In such case isSecure will be False but from user perspective there is secure connection",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "isSecure",
          "package": "wai",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:isSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath info in individual pieces- the url without a hostname/port and without a query string, split on forward slashes,\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "pathInfo",
          "package": "wai",
          "signature": "[Text]",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Path info in individual pieces the url without hostname port and without query string split on forward slashes",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "pathInfo",
          "normalized": "[Text]",
          "package": "wai",
          "partial": "Info",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:pathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed query string information\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "queryString",
          "package": "wai",
          "signature": "Query",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Parsed query string information",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "queryString",
          "package": "wai",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra path information sent by the client. The meaning varies slightly\n depending on backend; in a standalone server setting, this is most likely\n all information after the domain name. In a CGI application, this would be\n the information following the path to the CGI executable itself.\n Do not modify this raw value- modify pathInfo instead.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "rawPathInfo",
          "package": "wai",
          "signature": "ByteString",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Extra path information sent by the client The meaning varies slightly depending on backend in standalone server setting this is most likely all information after the domain name In CGI application this would be the information following the path to the CGI executable itself Do not modify this raw value modify pathInfo instead",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "rawPathInfo",
          "package": "wai",
          "partial": "Path Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:rawPathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf no query string was specified, this should be empty. This value\n \u003cem\u003ewill\u003c/em\u003e include the leading question mark.\n Do not modify this raw value- modify queryString instead.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "rawQueryString",
          "package": "wai",
          "signature": "ByteString",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "If no query string was specified this should be empty This value will include the leading question mark Do not modify this raw value modify queryString instead",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "rawQueryString",
          "package": "wai",
          "partial": "Query String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:rawQueryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe client's host information.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "remoteHost",
          "package": "wai",
          "signature": "SockAddr",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The client host information",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "remoteHost",
          "package": "wai",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:remoteHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA request body provided as \u003ccode\u003eSource\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "requestBody",
          "package": "wai",
          "signature": "Source IO ByteString",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "request body provided as Source",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "requestBody",
          "package": "wai",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the request body. In the case of a chunked request body, this may be unknown.\n\u003c/p\u003e\u003cp\u003eSince 1.4.0\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "requestBodyLength",
          "package": "wai",
          "signature": "RequestBodyLength",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The size of the request body In the case of chunked request body this may be unknown Since",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "requestBodyLength",
          "package": "wai",
          "partial": "Body Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestBodyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value of the Host header in a HTTP request.\n\u003c/p\u003e\u003cp\u003eSince 2.0.0\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "requestHeaderHost",
          "package": "wai",
          "signature": "Maybe ByteString",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The value of the Host header in HTTP request Since",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "requestHeaderHost",
          "package": "wai",
          "partial": "Header Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestHeaderHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value of the Range header in a HTTP request.\n\u003c/p\u003e\u003cp\u003eSince 2.0.0\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "requestHeaderRange",
          "package": "wai",
          "signature": "Maybe ByteString",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The value of the Range header in HTTP request Since",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "requestHeaderRange",
          "package": "wai",
          "partial": "Header Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestHeaderRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of header (a pair of key and value) in an HTTP request.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "requestHeaders",
          "package": "wai",
          "signature": "RequestHeaders",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "list of header pair of key and value in an HTTP request",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "requestHeaders",
          "package": "wai",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest method such as GET.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "requestMethod",
          "package": "wai",
          "signature": "Method",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Request method such as GET",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "requestMethod",
          "package": "wai",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:requestMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location for arbitrary data to be shared by applications and middleware.\n\u003c/p\u003e",
          "module": "Network.Wai.Internal",
          "name": "vault",
          "package": "wai",
          "signature": "Vault",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "description": "location for arbitrary data to be shared by applications and middleware",
          "hierarchy": "Network Wai Internal",
          "module": "Network.Wai.Internal",
          "name": "vault",
          "package": "wai",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai-Internal.html#v:vault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a generic web application interface. It is a common\nprotocol between web servers and web applications.\n\u003c/p\u003e\u003cp\u003eThe overriding design principles here are performance and generality . To\naddress performance, this library is built on top of the conduit and\nblaze-builder packages.  The advantages of conduits over lazy IO have been\ndebated elsewhere and so will not be addressed here.  However, helper functions\nlike \u003ccode\u003e\u003ca\u003eresponseLBS\u003c/a\u003e\u003c/code\u003e allow you to continue using lazy IO if you so desire.\n\u003c/p\u003e\u003cp\u003eGenerality is achieved by removing many variables commonly found in similar\nprojects that are not universal to all servers. The goal is that the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\nobject contains only data which is meaningful in all circumstances.\n\u003c/p\u003e\u003cp\u003ePlease remember when using this package that, while your application may\ncompile without a hitch against many different servers, there are other\nconsiderations to be taken when moving to a new backend. For example, if you\ntransfer from a CGI application to a FastCGI one, you might suddenly find you\nhave a memory leak. Conversely, a FastCGI application would be well served to\npreload all templates from disk when first starting; this would kill the\nperformance of a CGI application.\n\u003c/p\u003e\u003cp\u003eThis package purposely provides very little functionality. You can find various\nmiddlewares, backends and utilities on Hackage. Some of the most commonly used\ninclude:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ewarp\u003c/dt\u003e\u003cdd\u003e \u003ca\u003ehttp://hackage.haskell.org/package/warp\u003c/a\u003e\n\u003c/dd\u003e\u003cdt\u003ewai-extra\u003c/dt\u003e\u003cdd\u003e \u003ca\u003ehttp://hackage.haskell.org/package/wai-extra\u003c/a\u003e\n\u003c/dd\u003e\u003cdt\u003ewai-test\u003c/dt\u003e\u003cdd\u003e \u003ca\u003ehttp://hackage.haskell.org/package/wai-test\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Network.Wai",
          "name": "Wai",
          "package": "wai",
          "source": "src/Network-Wai.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines generic web application interface It is common protocol between web servers and web applications The overriding design principles here are performance and generality To address performance this library is built on top of the conduit and blaze-builder packages The advantages of conduits over lazy IO have been debated elsewhere and so will not be addressed here However helper functions like responseLBS allow you to continue using lazy IO if you so desire Generality is achieved by removing many variables commonly found in similar projects that are not universal to all servers The goal is that the Request object contains only data which is meaningful in all circumstances Please remember when using this package that while your application may compile without hitch against many different servers there are other considerations to be taken when moving to new backend For example if you transfer from CGI application to FastCGI one you might suddenly find you have memory leak Conversely FastCGI application would be well served to preload all templates from disk when first starting this would kill the performance of CGI application This package purposely provides very little functionality You can find various middlewares backends and utilities on Hackage Some of the most commonly used include warp http hackage.haskell.org package warp wai-extra http hackage.haskell.org package wai-extra wai-test http hackage.haskell.org package wai-test",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Wai",
          "package": "wai",
          "partial": "Wai",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe WAI application.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "Application",
          "package": "wai",
          "source": "src/Network-Wai.html#Application",
          "type": "type"
        },
        "index": {
          "description": "The WAI application",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Application",
          "package": "wai",
          "partial": "Application",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on which part to be sent.\n   Sophisticated application handles Range (and If-Range) then\n   create \u003ccode\u003e\u003ca\u003eFilePart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "FilePart",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html#FilePart",
          "type": "data"
        },
        "index": {
          "description": "Information on which part to be sent Sophisticated application handles Range and If-Range then create FilePart",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "FilePart",
          "package": "wai",
          "partial": "File Part",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:FilePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMiddleware is a component that sits between the server and application. It\n can do such tasks as GZIP encoding or response caching. What follows is the\n general definition of middleware, though a middleware author should feel\n free to modify this.\n\u003c/p\u003e\u003cp\u003eAs an example of an alternate type for middleware, suppose you write a\n function to load up session information. The session information is simply a\n string map [(String, String)]. A logical type signatures for this middleware\n might be:\n\u003c/p\u003e\u003cpre\u003e loadSession :: ([(String, String)] -\u003e Application) -\u003e Application\u003c/pre\u003e\u003cp\u003eHere, instead of taking a standard \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e as its first argument, the\n middleware takes a function which consumes the session information as well.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "Middleware",
          "package": "wai",
          "source": "src/Network-Wai.html#Middleware",
          "type": "type"
        },
        "index": {
          "description": "Middleware is component that sits between the server and application It can do such tasks as GZIP encoding or response caching What follows is the general definition of middleware though middleware author should feel free to modify this As an example of an alternate type for middleware suppose you write function to load up session information The session information is simply string map String String logical type signatures for this middleware might be loadSession String String Application Application Here instead of taking standard Application as its first argument the middleware takes function which consumes the session information as well",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Middleware",
          "package": "wai",
          "partial": "Middleware",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:Middleware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on the request sent by the client. This abstracts away the\n details of the underlying implementation.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "Request",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html#Request",
          "type": "data"
        },
        "index": {
          "description": "Information on the request sent by the client This abstracts away the details of the underlying implementation",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Request",
          "package": "wai",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the request body. In the case of chunked bodies, the size will\n not be known.\n\u003c/p\u003e\u003cp\u003eSince 1.4.0\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "RequestBodyLength",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html#RequestBodyLength",
          "type": "data"
        },
        "index": {
          "description": "The size of the request body In the case of chunked bodies the size will not be known Since",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "RequestBodyLength",
          "package": "wai",
          "partial": "Request Body Length",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:RequestBodyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strange structure of the third field or ResponseSource is to allow for\n exception-safe resource allocation. As an example:\n\u003c/p\u003e\u003cpre\u003e app :: Application\n app _ = return $ ResponseSource status200 [] $ \\f -\u003e bracket\n     (putStrLn \"Allocation\" \u003e\u003e return 5)\n     (\\i -\u003e putStrLn $ \"Cleaning up: \" ++ show i)\n     (\\_ -\u003e f $ do\n         yield $ Chunk $ fromByteString \"Hello \"\n         yield $ Chunk $ fromByteString \"World!\")\n\u003c/pre\u003e",
          "module": "Network.Wai",
          "name": "Response",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html#Response",
          "type": "data"
        },
        "index": {
          "description": "The strange structure of the third field or ResponseSource is to allow for exception-safe resource allocation As an example app Application app return ResponseSource status200 bracket putStrLn Allocation return putStrLn Cleaning up show do yield Chunk fromByteString Hello yield Chunk fromByteString World",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Response",
          "package": "wai",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuxiliary type for \u003ccode\u003e\u003ca\u003eResponseSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "WithSource",
          "package": "wai",
          "source": "src/Network-Wai-Internal.html#WithSource",
          "type": "type"
        },
        "index": {
          "description": "Auxiliary type for ResponseSource",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "WithSource",
          "package": "wai",
          "partial": "With Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#t:WithSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default, blank request.\n\u003c/p\u003e\u003cp\u003eSince 2.0.0\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "defaultRequest",
          "package": "wai",
          "signature": "Request",
          "source": "src/Network-Wai.html#defaultRequest",
          "type": "function"
        },
        "index": {
          "description": "default blank request Since",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "defaultRequest",
          "package": "wai",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:defaultRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP version such as 1.1.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "httpVersion",
          "package": "wai",
          "signature": "Request -\u003e HttpVersion",
          "source": "src/Network-Wai-Internal.html#httpVersion",
          "type": "function"
        },
        "index": {
          "description": "HTTP version such as",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "httpVersion",
          "normalized": "Request-\u003eHttpVersion",
          "package": "wai",
          "partial": "Version",
          "signature": "Request-\u003eHttpVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:httpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWas this request made over an SSL connection?\n\u003c/p\u003e\u003cp\u003eNote that this value will \u003cem\u003enot\u003c/em\u003e tell you if the client originally made\n this request over SSL, but rather whether the current connection is SSL.\n The distinction lies with reverse proxies. In many cases, the client will\n connect to a load balancer over SSL, but connect to the WAI handler\n without SSL. In such a case, \u003ccode\u003eisSecure\u003c/code\u003e will be \u003ccode\u003eFalse\u003c/code\u003e, but from a user\n perspective, there is a secure connection.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "isSecure",
          "package": "wai",
          "signature": "Request -\u003e Bool",
          "source": "src/Network-Wai-Internal.html#isSecure",
          "type": "function"
        },
        "index": {
          "description": "Was this request made over an SSL connection Note that this value will not tell you if the client originally made this request over SSL but rather whether the current connection is SSL The distinction lies with reverse proxies In many cases the client will connect to load balancer over SSL but connect to the WAI handler without SSL In such case isSecure will be False but from user perspective there is secure connection",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "isSecure",
          "normalized": "Request-\u003eBool",
          "package": "wai",
          "partial": "Secure",
          "signature": "Request-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:isSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the request body as a lazy ByteString. This uses lazy I/O under the\n surface, and therefore all typical warnings regarding lazy I/O apply.\n\u003c/p\u003e\u003cp\u003eSince 1.4.1\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "lazyRequestBody",
          "package": "wai",
          "signature": "Request -\u003e IO ByteString",
          "source": "src/Network-Wai.html#lazyRequestBody",
          "type": "function"
        },
        "index": {
          "description": "Get the request body as lazy ByteString This uses lazy under the surface and therefore all typical warnings regarding lazy apply Since",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "lazyRequestBody",
          "normalized": "Request-\u003eIO ByteString",
          "package": "wai",
          "partial": "Request Body",
          "signature": "Request-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:lazyRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath info in individual pieces- the url without a hostname/port and without a query string, split on forward slashes,\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "pathInfo",
          "package": "wai",
          "signature": "Request -\u003e [Text]",
          "source": "src/Network-Wai-Internal.html#pathInfo",
          "type": "function"
        },
        "index": {
          "description": "Path info in individual pieces the url without hostname port and without query string split on forward slashes",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "pathInfo",
          "normalized": "Request-\u003e[Text]",
          "package": "wai",
          "partial": "Info",
          "signature": "Request-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:pathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed query string information\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "queryString",
          "package": "wai",
          "signature": "Request -\u003e Query",
          "source": "src/Network-Wai-Internal.html#queryString",
          "type": "function"
        },
        "index": {
          "description": "Parsed query string information",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "queryString",
          "normalized": "Request-\u003eQuery",
          "package": "wai",
          "partial": "String",
          "signature": "Request-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra path information sent by the client. The meaning varies slightly\n depending on backend; in a standalone server setting, this is most likely\n all information after the domain name. In a CGI application, this would be\n the information following the path to the CGI executable itself.\n Do not modify this raw value- modify pathInfo instead.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "rawPathInfo",
          "package": "wai",
          "signature": "Request -\u003e ByteString",
          "source": "src/Network-Wai-Internal.html#rawPathInfo",
          "type": "function"
        },
        "index": {
          "description": "Extra path information sent by the client The meaning varies slightly depending on backend in standalone server setting this is most likely all information after the domain name In CGI application this would be the information following the path to the CGI executable itself Do not modify this raw value modify pathInfo instead",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "rawPathInfo",
          "normalized": "Request-\u003eByteString",
          "package": "wai",
          "partial": "Path Info",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:rawPathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf no query string was specified, this should be empty. This value\n \u003cem\u003ewill\u003c/em\u003e include the leading question mark.\n Do not modify this raw value- modify queryString instead.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "rawQueryString",
          "package": "wai",
          "signature": "Request -\u003e ByteString",
          "source": "src/Network-Wai-Internal.html#rawQueryString",
          "type": "function"
        },
        "index": {
          "description": "If no query string was specified this should be empty This value will include the leading question mark Do not modify this raw value modify queryString instead",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "rawQueryString",
          "normalized": "Request-\u003eByteString",
          "package": "wai",
          "partial": "Query String",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:rawQueryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe client's host information.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "remoteHost",
          "package": "wai",
          "signature": "Request -\u003e SockAddr",
          "source": "src/Network-Wai-Internal.html#remoteHost",
          "type": "function"
        },
        "index": {
          "description": "The client host information",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "remoteHost",
          "normalized": "Request-\u003eSockAddr",
          "package": "wai",
          "partial": "Host",
          "signature": "Request-\u003eSockAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:remoteHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA request body provided as \u003ccode\u003eSource\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "requestBody",
          "package": "wai",
          "signature": "Request -\u003e Source IO ByteString",
          "source": "src/Network-Wai-Internal.html#requestBody",
          "type": "function"
        },
        "index": {
          "description": "request body provided as Source",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "requestBody",
          "normalized": "Request-\u003eSource IO ByteString",
          "package": "wai",
          "partial": "Body",
          "signature": "Request-\u003eSource IO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the request body. In the case of a chunked request body, this may be unknown.\n\u003c/p\u003e\u003cp\u003eSince 1.4.0\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "requestBodyLength",
          "package": "wai",
          "signature": "Request -\u003e RequestBodyLength",
          "source": "src/Network-Wai-Internal.html#requestBodyLength",
          "type": "function"
        },
        "index": {
          "description": "The size of the request body In the case of chunked request body this may be unknown Since",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "requestBodyLength",
          "normalized": "Request-\u003eRequestBodyLength",
          "package": "wai",
          "partial": "Body Length",
          "signature": "Request-\u003eRequestBodyLength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestBodyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value of the Host header in a HTTP request.\n\u003c/p\u003e\u003cp\u003eSince 2.0.0\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "requestHeaderHost",
          "package": "wai",
          "signature": "Request -\u003e Maybe ByteString",
          "source": "src/Network-Wai-Internal.html#requestHeaderHost",
          "type": "function"
        },
        "index": {
          "description": "The value of the Host header in HTTP request Since",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "requestHeaderHost",
          "normalized": "Request-\u003eMaybe ByteString",
          "package": "wai",
          "partial": "Header Host",
          "signature": "Request-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestHeaderHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value of the Range header in a HTTP request.\n\u003c/p\u003e\u003cp\u003eSince 2.0.0\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "requestHeaderRange",
          "package": "wai",
          "signature": "Request -\u003e Maybe ByteString",
          "source": "src/Network-Wai-Internal.html#requestHeaderRange",
          "type": "function"
        },
        "index": {
          "description": "The value of the Range header in HTTP request Since",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "requestHeaderRange",
          "normalized": "Request-\u003eMaybe ByteString",
          "package": "wai",
          "partial": "Header Range",
          "signature": "Request-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestHeaderRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of header (a pair of key and value) in an HTTP request.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "requestHeaders",
          "package": "wai",
          "signature": "Request -\u003e RequestHeaders",
          "source": "src/Network-Wai-Internal.html#requestHeaders",
          "type": "function"
        },
        "index": {
          "description": "list of header pair of key and value in an HTTP request",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "requestHeaders",
          "normalized": "Request-\u003eRequestHeaders",
          "package": "wai",
          "partial": "Headers",
          "signature": "Request-\u003eRequestHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest method such as GET.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "requestMethod",
          "package": "wai",
          "signature": "Request -\u003e Method",
          "source": "src/Network-Wai-Internal.html#requestMethod",
          "type": "function"
        },
        "index": {
          "description": "Request method such as GET",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "requestMethod",
          "normalized": "Request-\u003eMethod",
          "package": "wai",
          "partial": "Method",
          "signature": "Request-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:requestMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome questions and answers about the usage of \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e here:\n\u003c/p\u003e\u003cp\u003eQ1. Shouldn't it be at the user's discretion to use Builders internally and\n then create a stream of ByteStrings?\n\u003c/p\u003e\u003cp\u003eA1. That would be less efficient, as we wouldn't get cheap concatenation\n with the response headers.\n\u003c/p\u003e\u003cp\u003eQ2. Isn't it really inefficient to convert from ByteString to Builder, and\n then right back to ByteString?\n\u003c/p\u003e\u003cp\u003eA2. No. If the ByteStrings are small, then they will be copied into a larger\n buffer, which should be a performance gain overall (less system calls). If\n they are already large, then blaze-builder uses an InsertByteString\n instruction to avoid copying.\n\u003c/p\u003e\u003cp\u003eQ3. Doesn't this prevent us from creating comet-style servers, since data\n will be cached?\n\u003c/p\u003e\u003cp\u003eA3. You can force blaze-builder to output a ByteString before it is an\n optimal size by sending a flush command.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "responseBuilder",
          "package": "wai",
          "signature": "Status -\u003e ResponseHeaders -\u003e Builder -\u003e Response",
          "source": "src/Network-Wai.html#responseBuilder",
          "type": "function"
        },
        "index": {
          "description": "Creating Response from Builder Some questions and answers about the usage of Builder here Q1 Shouldn it be at the user discretion to use Builders internally and then create stream of ByteStrings A1 That would be less efficient as we wouldn get cheap concatenation with the response headers Q2 Isn it really inefficient to convert from ByteString to Builder and then right back to ByteString A2 No If the ByteStrings are small then they will be copied into larger buffer which should be performance gain overall less system calls If they are already large then blaze-builder uses an InsertByteString instruction to avoid copying Q3 Doesn this prevent us from creating comet-style servers since data will be cached A3 You can force blaze-builder to output ByteString before it is an optimal size by sending flush command",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "responseBuilder",
          "normalized": "Status-\u003eResponseHeaders-\u003eBuilder-\u003eResponse",
          "package": "wai",
          "partial": "Builder",
          "signature": "Status-\u003eResponseHeaders-\u003eBuilder-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from a file.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "responseFile",
          "package": "wai",
          "signature": "Status -\u003e ResponseHeaders -\u003e FilePath -\u003e Maybe FilePart -\u003e Response",
          "source": "src/Network-Wai.html#responseFile",
          "type": "function"
        },
        "index": {
          "description": "Creating Response from file",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "responseFile",
          "normalized": "Status-\u003eResponseHeaders-\u003eFilePath-\u003eMaybe FilePart-\u003eResponse",
          "package": "wai",
          "partial": "File",
          "signature": "Status-\u003eResponseHeaders-\u003eFilePath-\u003eMaybe FilePart-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessing \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "responseHeaders",
          "package": "wai",
          "signature": "Response -\u003e ResponseHeaders",
          "source": "src/Network-Wai.html#responseHeaders",
          "type": "function"
        },
        "index": {
          "description": "Accessing Status in Response",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "responseHeaders",
          "normalized": "Response-\u003eResponseHeaders",
          "package": "wai",
          "partial": "Headers",
          "signature": "Response-\u003eResponseHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. This is a wrapper for\n   \u003ccode\u003e\u003ca\u003eresponseBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "responseLBS",
          "package": "wai",
          "signature": "Status -\u003e ResponseHeaders -\u003e ByteString -\u003e Response",
          "source": "src/Network-Wai.html#responseLBS",
          "type": "function"
        },
        "index": {
          "description": "Creating Response from ByteString This is wrapper for responseBuilder",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "responseLBS",
          "normalized": "Status-\u003eResponseHeaders-\u003eByteString-\u003eResponse",
          "package": "wai",
          "partial": "LBS",
          "signature": "Status-\u003eResponseHeaders-\u003eByteString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "responseSource",
          "package": "wai",
          "signature": "Status -\u003e ResponseHeaders -\u003e Source IO (Flush Builder) -\u003e Response",
          "source": "src/Network-Wai.html#responseSource",
          "type": "function"
        },
        "index": {
          "description": "Creating Response from Source",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "responseSource",
          "normalized": "Status-\u003eResponseHeaders-\u003eSource IO(Flush Builder)-\u003eResponse",
          "package": "wai",
          "partial": "Source",
          "signature": "Status-\u003eResponseHeaders-\u003eSource IO(Flush Builder)-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with allocated resource safely released.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The first argument is an action to allocate resource.\n\u003c/li\u003e\u003cli\u003e The second argument is a function to release the resource.\n\u003c/li\u003e\u003cli\u003e The third argument is a function to create\n     (\u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eResponseHeaders\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eFlush\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e))\n     from the resource.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Wai",
          "name": "responseSourceBracket",
          "package": "wai",
          "signature": "IO a -\u003e (a -\u003e IO ()) -\u003e (a -\u003e IO (Status, ResponseHeaders, Source IO (Flush Builder))) -\u003e IO Response",
          "source": "src/Network-Wai.html#responseSourceBracket",
          "type": "function"
        },
        "index": {
          "description": "Creating Response with allocated resource safely released The first argument is an action to allocate resource The second argument is function to release the resource The third argument is function to create Status ResponseHeaders Source IO Flush Builder from the resource",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "responseSourceBracket",
          "normalized": "IO a-\u003e(a-\u003eIO())-\u003e(a-\u003eIO(Status,ResponseHeaders,Source IO(Flush Builder)))-\u003eIO Response",
          "package": "wai",
          "partial": "Source Bracket",
          "signature": "IO a-\u003e(a-\u003eIO())-\u003e(a-\u003eIO(Status,ResponseHeaders,Source IO(Flush Builder)))-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseSourceBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessing \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "responseStatus",
          "package": "wai",
          "signature": "Response -\u003e Status",
          "source": "src/Network-Wai.html#responseStatus",
          "type": "function"
        },
        "index": {
          "description": "Accessing Status in Response",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "responseStatus",
          "normalized": "Response-\u003eStatus",
          "package": "wai",
          "partial": "Status",
          "signature": "Response-\u003eStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting the body information in \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eSource\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "responseToSource",
          "package": "wai",
          "signature": "Response -\u003e (Status, ResponseHeaders, WithSource IO (Flush Builder) b)",
          "source": "src/Network-Wai.html#responseToSource",
          "type": "function"
        },
        "index": {
          "description": "Converting the body information in Response to Source",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "responseToSource",
          "normalized": "Response-\u003e(Status,ResponseHeaders,WithSource IO(Flush Builder)a)",
          "package": "wai",
          "partial": "To Source",
          "signature": "Response-\u003e(Status,ResponseHeaders,WithSource IO(Flush Builder)b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:responseToSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location for arbitrary data to be shared by applications and middleware.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "vault",
          "package": "wai",
          "signature": "Request -\u003e Vault",
          "source": "src/Network-Wai-Internal.html#vault",
          "type": "function"
        },
        "index": {
          "description": "location for arbitrary data to be shared by applications and middleware",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "vault",
          "normalized": "Request-\u003eVault",
          "package": "wai",
          "signature": "Request-\u003eVault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai/docs/Network-Wai.html#v:vault"
      }
    }
  ]
]