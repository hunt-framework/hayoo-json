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
        "word": "http-common"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types used in HTTP communications. This modules is re-exported by\n both \u003ca\u003eNetwork.Http.Client\u003c/a\u003e and \u003ca\u003ePipes.Http.Client\u003c/a\u003e, so if you're using\n either of those you don't need to explicitly import this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Http.Types",
          "name": "Types",
          "package": "http-common",
          "source": "src/Network-Http-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Basic types used in HTTP communications This modules is re-exported by both Network.Http.Client and Pipes.Http.Client so if you re using either of those you don need to explicitly import this module",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Types",
          "package": "http-common",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "ContentEncoding",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#ContentEncoding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "ContentEncoding",
          "package": "http-common",
          "partial": "Content Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:ContentEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "ContentType",
          "package": "http-common",
          "source": "src/Network-Http-RequestBuilder.html#ContentType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "ContentType",
          "package": "http-common",
          "partial": "Content Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "EntityBody",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#EntityBody",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "EntityBody",
          "package": "http-common",
          "partial": "Entity Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:EntityBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "ExpectMode",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#ExpectMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "ExpectMode",
          "package": "http-common",
          "partial": "Expect Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:ExpectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe map of headers in a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e. Note that HTTP\n header field names are case insensitive, so if you call \u003ccode\u003esetHeader\u003c/code\u003e\n on a field that's already defined but with a different capitalization\n you will replace the existing value.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "Headers",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#Headers",
          "type": "data"
        },
        "index": {
          "description": "The map of headers in Request or Response Note that HTTP header field names are case insensitive so if you call setHeader on field that already defined but with different capitalization you will replace the existing value",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Headers",
          "package": "http-common",
          "partial": "Headers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Hostname",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#Hostname",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Hostname",
          "package": "http-common",
          "partial": "Hostname",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:Hostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "HttpParseException",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#HttpParseException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "HttpParseException",
          "package": "http-common",
          "partial": "Http Parse Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:HttpParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessors common to both the outbound and return sides of an HTTP\n connection.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "HttpType",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#HttpType",
          "type": "class"
        },
        "index": {
          "description": "Accessors common to both the outbound and return sides of an HTTP connection",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "HttpType",
          "package": "http-common",
          "partial": "Http Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:HttpType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP Methods, as per RFC 2616\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "Method",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "data"
        },
        "index": {
          "description": "HTTP Methods as per RFC",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Method",
          "package": "http-common",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Port",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#Port",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Port",
          "package": "http-common",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of the request that will be sent to the server. Note\n unlike other HTTP libraries, the request body is \u003cem\u003enot\u003c/em\u003e a part of this\n object; that will be streamed out by you when actually sending the\n request with \u003ccode\u003esendRequest\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e has a useful \u003ccode\u003eShow\u003c/code\u003e instance that will output the request\n line and headers (as it will be sent over the wire but with the \u003ccode\u003e\\r\u003c/code\u003e\n characters stripped) which can be handy for debugging.\n\u003c/p\u003e\u003cp\u003eNote that the actual \u003ccode\u003eHost:\u003c/code\u003e header is not set until the request is sent,\n so you will not see it in the Show instance (unless you call \u003ccode\u003esetHostname\u003c/code\u003e\n to override the value inherited from the \u003ccode\u003eConnection\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "Request",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#Request",
          "type": "data"
        },
        "index": {
          "description": "description of the request that will be sent to the server Note unlike other HTTP libraries the request body is not part of this object that will be streamed out by you when actually sending the request with sendRequest Request has useful Show instance that will output the request line and headers as it will be sent over the wire but with the characters stripped which can be handy for debugging Note that the actual Host header is not set until the request is sent so you will not see it in the Show instance unless you call setHostname to override the value inherited from the Connection",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Request",
          "package": "http-common",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RequestBuilder monad allows you to abuse do-notation to\n conveniently setup a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "RequestBuilder",
          "package": "http-common",
          "source": "src/Network-Http-RequestBuilder.html#RequestBuilder",
          "type": "data"
        },
        "index": {
          "description": "The RequestBuilder monad allows you to abuse do-notation to conveniently setup Request object",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "RequestBuilder",
          "package": "http-common",
          "partial": "Request Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:RequestBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of the response received from the server. Note\n unlike other HTTP libraries, the response body is \u003cem\u003enot\u003c/em\u003e a part\n of this object; that will be streamed in by you when calling\n \u003ccode\u003ereceiveResponse\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e has a \u003ccode\u003eShow\u003c/code\u003e instance that will output\n the status line and response headers as they were received from the\n server.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "Response",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#Response",
          "type": "data"
        },
        "index": {
          "description": "description of the response received from the server Note unlike other HTTP libraries the response body is not part of this object that will be streamed in by you when calling receiveResponse Like Request Response has Show instance that will output the status line and response headers as they were received from the server",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Response",
          "package": "http-common",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "StatusCode",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#StatusCode",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "StatusCode",
          "package": "http-common",
          "partial": "Status Code",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:StatusCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "TransferEncoding",
          "package": "http-common",
          "source": "src/Network-Http-Internal.html#TransferEncoding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "TransferEncoding",
          "package": "http-common",
          "partial": "Transfer Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#t:TransferEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "CONNECT",
          "package": "http-common",
          "signature": "CONNECT",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "CONNECT",
          "package": "http-common",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Chunked",
          "package": "http-common",
          "signature": "Chunked",
          "source": "src/Network-Http-Internal.html#TransferEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Chunked",
          "package": "http-common",
          "partial": "Chunked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:Chunked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Chunking",
          "package": "http-common",
          "signature": "Chunking",
          "source": "src/Network-Http-Internal.html#EntityBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Chunking",
          "package": "http-common",
          "partial": "Chunking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:Chunking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Continue",
          "package": "http-common",
          "signature": "Continue",
          "source": "src/Network-Http-Internal.html#ExpectMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Continue",
          "package": "http-common",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "DELETE",
          "package": "http-common",
          "signature": "DELETE",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "DELETE",
          "package": "http-common",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Deflate",
          "package": "http-common",
          "signature": "Deflate",
          "source": "src/Network-Http-Internal.html#ContentEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Deflate",
          "package": "http-common",
          "partial": "Deflate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:Deflate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Empty",
          "package": "http-common",
          "signature": "Empty",
          "source": "src/Network-Http-Internal.html#EntityBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Empty",
          "package": "http-common",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "GET",
          "package": "http-common",
          "signature": "GET",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "GET",
          "package": "http-common",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Gzip",
          "package": "http-common",
          "signature": "Gzip",
          "source": "src/Network-Http-Internal.html#ContentEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Gzip",
          "package": "http-common",
          "partial": "Gzip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:Gzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "HEAD",
          "package": "http-common",
          "signature": "HEAD",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "HEAD",
          "package": "http-common",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "HttpParseException",
          "package": "http-common",
          "signature": "HttpParseException String",
          "source": "src/Network-Http-Internal.html#HttpParseException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "HttpParseException",
          "package": "http-common",
          "partial": "Http Parse Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:HttpParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Identity",
          "package": "http-common",
          "signature": "Identity",
          "source": "src/Network-Http-Internal.html#ContentEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Identity",
          "package": "http-common",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Method",
          "package": "http-common",
          "signature": "Method ByteString",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Method",
          "package": "http-common",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "None",
          "package": "http-common",
          "signature": "None",
          "source": "src/Network-Http-Internal.html#TransferEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "None",
          "package": "http-common",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Normal",
          "package": "http-common",
          "signature": "Normal",
          "source": "src/Network-Http-Internal.html#ExpectMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Normal",
          "package": "http-common",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "OPTIONS",
          "package": "http-common",
          "signature": "OPTIONS",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "OPTIONS",
          "package": "http-common",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "PATCH",
          "package": "http-common",
          "signature": "PATCH",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "PATCH",
          "package": "http-common",
          "partial": "PATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:PATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "POST",
          "package": "http-common",
          "signature": "POST",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "POST",
          "package": "http-common",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "PUT",
          "package": "http-common",
          "signature": "PUT",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "PUT",
          "package": "http-common",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "Static",
          "package": "http-common",
          "signature": "Static Int64",
          "source": "src/Network-Http-Internal.html#EntityBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "Static",
          "package": "http-common",
          "partial": "Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:Static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "TRACE",
          "package": "http-common",
          "signature": "TRACE",
          "source": "src/Network-Http-Internal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "TRACE",
          "package": "http-common",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of field-name,field-value pairs, construct a Headers map.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "buildHeaders",
          "package": "http-common",
          "signature": "[(ByteString, ByteString)] -\u003e Headers",
          "source": "src/Network-Http-Internal.html#buildHeaders",
          "type": "function"
        },
        "index": {
          "description": "Given list of field-name field-value pairs construct Headers map",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "buildHeaders",
          "normalized": "[(ByteString,ByteString)]-\u003eHeaders",
          "package": "http-common",
          "partial": "Headers",
          "signature": "[(ByteString,ByteString)]-\u003eHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:buildHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a RequestBuilder, yielding a Request object you can use on the\n given connection.\n\u003c/p\u003e\u003cpre\u003e     q \u003c- buildRequest $ do\n         http POST \"/api/v1/messages\"\n         setContentType \"application/json\"\n         setHostname \"clue.example.com\" 80\n         setAccept \"text/html\"\n         setHeader \"X-WhoDoneIt\" \"The Butler\"\n\u003c/pre\u003e\u003cp\u003eObviously it's up to you to later actually \u003cem\u003esend\u003c/em\u003e JSON data.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "buildRequest",
          "package": "http-common",
          "signature": "RequestBuilder α -\u003e IO Request",
          "source": "src/Network-Http-RequestBuilder.html#buildRequest",
          "type": "function"
        },
        "index": {
          "description": "Run RequestBuilder yielding Request object you can use on the given connection buildRequest do http POST api v1 messages setContentType application json setHostname clue.example.com setAccept text html setHeader X-WhoDoneIt The Butler Obviously it up to you to later actually send JSON data",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "buildRequest",
          "normalized": "RequestBuilder a-\u003eIO Request",
          "package": "http-common",
          "partial": "Request",
          "signature": "RequestBuilder α-\u003eIO Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:buildRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "emptyHeaders",
          "package": "http-common",
          "signature": "Headers",
          "source": "src/Network-Http-Internal.html#emptyHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "emptyHeaders",
          "package": "http-common",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:emptyHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a header in the response. HTTP header field names are\n case-insensitive, so you can specify the name to lookup however you\n like. If the header is not present \u003ccode\u003eNothing\u003c/code\u003e will be returned.\n\u003c/p\u003e\u003cpre\u003e     let n = case getHeader p \"Content-Length\" of\n                Just x' -\u003e read x' :: Int\n                Nothing -\u003e 0\n\u003c/pre\u003e\u003cp\u003ewhich of course is essentially what goes on inside the client library when\n it receives a response from the server and has to figure out how many bytes\n to read.\n\u003c/p\u003e\u003cp\u003eThere is a fair bit of complexity in some of the other HTTP response\n fields, so there are a number of specialized functions for reading\n those values where we've found them useful.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "getHeader",
          "package": "http-common",
          "signature": "Response -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Network-Http-Internal.html#getHeader",
          "type": "function"
        },
        "index": {
          "description": "Lookup header in the response HTTP header field names are case-insensitive so you can specify the name to lookup however you like If the header is not present Nothing will be returned let case getHeader Content-Length of Just read Int Nothing which of course is essentially what goes on inside the client library when it receives response from the server and has to figure out how many bytes to read There is fair bit of complexity in some of the other HTTP response fields so there are number of specialized functions for reading those values where we ve found them useful",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "getHeader",
          "normalized": "Response-\u003eByteString-\u003eMaybe ByteString",
          "package": "http-common",
          "partial": "Header",
          "signature": "Response-\u003eByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:getHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the Headers from a Request or Response. Most people do not need\n this; for most cases you just need to get a header or two from the\n response, for which you can use \u003ccode\u003e\u003ca\u003egetHeader\u003c/a\u003e\u003c/code\u003e. On the other hand, if you\n do need to poke around in the raw headers,\n\u003c/p\u003e\u003cpre\u003e import Network.Http.Types\u003c/pre\u003e\u003cp\u003ewill give you functions like \u003ccode\u003e\u003ca\u003elookupHeader\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eupdateHeader\u003c/a\u003e\u003c/code\u003e to to\n work with.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "getHeaders",
          "package": "http-common",
          "signature": "τ -\u003e Headers",
          "source": "src/Network-Http-Internal.html#getHeaders",
          "type": "method"
        },
        "index": {
          "description": "Get the Headers from Request or Response Most people do not need this for most cases you just need to get header or two from the response for which you can use getHeader On the other hand if you do need to poke around in the raw headers import Network.Http.Types will give you functions like lookupHeader and updateHeader to to work with",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "getHeaders",
          "normalized": "a-\u003eHeaders",
          "package": "http-common",
          "partial": "Headers",
          "signature": "τ-\u003eHeaders",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:getHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the HTTP response status code.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "getStatusCode",
          "package": "http-common",
          "signature": "Response -\u003e StatusCode",
          "source": "src/Network-Http-Internal.html#getStatusCode",
          "type": "function"
        },
        "index": {
          "description": "Get the HTTP response status code",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "getStatusCode",
          "normalized": "Response-\u003eStatusCode",
          "package": "http-common",
          "partial": "Status Code",
          "signature": "Response-\u003eStatusCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:getStatusCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the HTTP response status message. Keep in mind that this is\n \u003cem\u003enot\u003c/em\u003e normative; whereas \u003ccode\u003e\u003ca\u003egetStatusCode\u003c/a\u003e\u003c/code\u003e values are authoritative.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "getStatusMessage",
          "package": "http-common",
          "signature": "Response -\u003e ByteString",
          "source": "src/Network-Http-Internal.html#getStatusMessage",
          "type": "function"
        },
        "index": {
          "description": "Get the HTTP response status message Keep in mind that this is not normative whereas getStatusCode values are authoritative",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "getStatusMessage",
          "normalized": "Response-\u003eByteString",
          "package": "http-common",
          "partial": "Status Message",
          "signature": "Response-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:getStatusMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin constructing a Request, starting with the request line.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "http",
          "package": "http-common",
          "signature": "Method -\u003e ByteString -\u003e RequestBuilder ()",
          "source": "src/Network-Http-RequestBuilder.html#http",
          "type": "function"
        },
        "index": {
          "description": "Begin constructing Request starting with the request line",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "http",
          "normalized": "Method-\u003eByteString-\u003eRequestBuilder()",
          "package": "http-common",
          "signature": "Method-\u003eByteString-\u003eRequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Http.Types",
          "name": "lookupHeader",
          "package": "http-common",
          "signature": "Headers -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Network-Http-Internal.html#lookupHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "lookupHeader",
          "normalized": "Headers-\u003eByteString-\u003eMaybe ByteString",
          "package": "http-common",
          "partial": "Header",
          "signature": "Headers-\u003eByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:lookupHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a header from the map. If a field with that name is not present,\n then this will have no effect.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "removeHeader",
          "package": "http-common",
          "signature": "Headers -\u003e ByteString -\u003e Headers",
          "source": "src/Network-Http-Internal.html#removeHeader",
          "type": "function"
        },
        "index": {
          "description": "Remove header from the map If field with that name is not present then this will have no effect",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "removeHeader",
          "normalized": "Headers-\u003eByteString-\u003eHeaders",
          "package": "http-common",
          "partial": "Header",
          "signature": "Headers-\u003eByteString-\u003eHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:removeHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the headers as a field-name,field-value association list.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "retrieveHeaders",
          "package": "http-common",
          "signature": "Headers -\u003e [(ByteString, ByteString)]",
          "source": "src/Network-Http-Internal.html#retrieveHeaders",
          "type": "function"
        },
        "index": {
          "description": "Get the headers as field-name field-value association list",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "retrieveHeaders",
          "normalized": "Headers-\u003e[(ByteString,ByteString)]",
          "package": "http-common",
          "partial": "Headers",
          "signature": "Headers-\u003e[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:retrieveHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate the content type you are willing to receive in a reply\n from the server. For more complex \u003ccode\u003eAccept:\u003c/code\u003e headers, use\n \u003ccode\u003e\u003ca\u003esetAccept'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "setAccept",
          "package": "http-common",
          "signature": "ByteString -\u003e RequestBuilder ()",
          "source": "src/Network-Http-RequestBuilder.html#setAccept",
          "type": "function"
        },
        "index": {
          "description": "Indicate the content type you are willing to receive in reply from the server For more complex Accept headers use setAccept",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "setAccept",
          "normalized": "ByteString-\u003eRequestBuilder()",
          "package": "http-common",
          "partial": "Accept",
          "signature": "ByteString-\u003eRequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:setAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate the content types you are willing to receive in a reply\n from the server in order of preference. A call of the form:\n\u003c/p\u003e\u003cpre\u003e         setAccept' [(\"text/html\", 1.0),\n                     (\"application/xml\", 0.8),\n                     (\"*/*\", 0)]\n\u003c/pre\u003e\u003cp\u003ewill result in an \u003ccode\u003eAccept:\u003c/code\u003e header value of\n \u003ccode\u003etext/html; q=1.0, application/xml; q=0.8, */*; q=0.0\u003c/code\u003e as you\n would expect.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "setAccept'",
          "package": "http-common",
          "signature": "[(ByteString, Float)] -\u003e RequestBuilder ()",
          "source": "src/Network-Http-RequestBuilder.html#setAccept%27",
          "type": "function"
        },
        "index": {
          "description": "Indicate the content types you are willing to receive in reply from the server in order of preference call of the form setAccept text html application xml will result in an Accept header value of text html application xml as you would expect",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "setAccept'",
          "normalized": "[(ByteString,Float)]-\u003eRequestBuilder()",
          "package": "http-common",
          "partial": "Accept'",
          "signature": "[(ByteString,Float)]-\u003eRequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:setAccept-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet username and password credentials per the HTTP basic\n authentication method.\n\u003c/p\u003e\u003cpre\u003e         setAuthorizationBasic \"Aladdin\" \"open sesame\"\n\u003c/pre\u003e\u003cp\u003ewill result in an \u003ccode\u003eAuthorization:\u003c/code\u003e header value of\n \u003ccode\u003eBasic QWxhZGRpbjpvcGVuIHNlc2FtZQ==\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBasic authentication does \u003cem\u003enot\u003c/em\u003e use a message digest function to\n encipher the password; the above string is only base-64 encoded and\n is thus plain-text visible to any observer on the wire and all\n caches and servers at the other end, making basic authentication\n completely insecure. A number of web services, however, use SSL to\n encrypt the connection that then use HTTP basic authentication to\n validate requests. Keep in mind in these cases the secret is still\n sent to the servers on the other side and passes in clear through\n all layers after the SSL termination. Do \u003cem\u003enot\u003c/em\u003e use basic\n authentication to protect secure or user-originated privacy-sensitve\n information.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "setAuthorizationBasic",
          "package": "http-common",
          "signature": "ByteString -\u003e ByteString -\u003e RequestBuilder ()",
          "source": "src/Network-Http-RequestBuilder.html#setAuthorizationBasic",
          "type": "function"
        },
        "index": {
          "description": "Set username and password credentials per the HTTP basic authentication method setAuthorizationBasic Aladdin open sesame will result in an Authorization header value of Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ Basic authentication does not use message digest function to encipher the password the above string is only base-64 encoded and is thus plain-text visible to any observer on the wire and all caches and servers at the other end making basic authentication completely insecure number of web services however use SSL to encrypt the connection that then use HTTP basic authentication to validate requests Keep in mind in these cases the secret is still sent to the servers on the other side and passes in clear through all layers after the SSL termination Do not use basic authentication to protect secure or user-originated privacy-sensitve information",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "setAuthorizationBasic",
          "normalized": "ByteString-\u003eByteString-\u003eRequestBuilder()",
          "package": "http-common",
          "partial": "Authorization Basic",
          "signature": "ByteString-\u003eByteString-\u003eRequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:setAuthorizationBasic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the length of the request body, in bytes.\n\u003c/p\u003e\u003cp\u003eRFC 2616 requires that we either send a \u003ccode\u003eContent-Length\u003c/code\u003e header or\n use \u003ccode\u003eTransfer-Encoding: chunked\u003c/code\u003e. If you know the exact size ahead\n of time, then call this function; the body content will still be\n streamed out by \u003ccode\u003eio-streams\u003c/code\u003e in more-or-less constant space.\n\u003c/p\u003e\u003cp\u003eThis function is special: in a PUT or POST request, \u003ccode\u003ehttp-streams\u003c/code\u003e\n will assume chunked transfer-encoding \u003cem\u003eunless\u003c/em\u003e you specify a content\n length here, in which case you need to ensure your body function\n writes precisely that many bytes.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "setContentLength",
          "package": "http-common",
          "signature": "Int64 -\u003e RequestBuilder ()",
          "source": "src/Network-Http-RequestBuilder.html#setContentLength",
          "type": "function"
        },
        "index": {
          "description": "Specify the length of the request body in bytes RFC requires that we either send Content-Length header or use Transfer-Encoding chunked If you know the exact size ahead of time then call this function the body content will still be streamed out by io-streams in more-or-less constant space This function is special in PUT or POST request http-streams will assume chunked transfer-encoding unless you specify content length here in which case you need to ensure your body function writes precisely that many bytes",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "setContentLength",
          "normalized": "Int-\u003eRequestBuilder()",
          "package": "http-common",
          "partial": "Content Length",
          "signature": "Int-\u003eRequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:setContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the MIME type corresponding to the body of the request you are\n sending. Defaults to \u003ccode\u003e\"text/plain\"\u003c/code\u003e, so usually you need to set\n this if \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003eting.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "setContentType",
          "package": "http-common",
          "signature": "ContentType -\u003e RequestBuilder ()",
          "source": "src/Network-Http-RequestBuilder.html#setContentType",
          "type": "function"
        },
        "index": {
          "description": "Set the MIME type corresponding to the body of the request you are sending Defaults to text plain so usually you need to set this if PUT ting",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "setContentType",
          "normalized": "ContentType-\u003eRequestBuilder()",
          "package": "http-common",
          "partial": "Content Type",
          "signature": "ContentType-\u003eRequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:setContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify that this request should set the expectation that the\n server needs to approve the request before you send it.\n\u003c/p\u003e\u003cp\u003eThis function is special: in a PUT or POST request, \u003ccode\u003ehttp-streams\u003c/code\u003e\n will wait for the server to reply with an HTTP/1.1 100 Continue\n status before sending the entity body. This is handled internally;\n you will get the real response (be it successful 2xx, client error,\n 4xx, or server error 5xx) in \u003ccode\u003ereceiveResponse\u003c/code\u003e. In theory, it\n should be 417 if the expectation failed.\n\u003c/p\u003e\u003cp\u003eOnly bother with this if you know the service you're talking to\n requires clients to send an \u003ccode\u003eExpect: 100-continue\u003c/code\u003e header and will\n handle it properly. Most servers don't do any precondition checking,\n automatically send an intermediate 100 response, and then just read\n the body regardless, making this a bit of a no-op in most cases.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "setExpectContinue",
          "package": "http-common",
          "signature": "RequestBuilder ()",
          "source": "src/Network-Http-RequestBuilder.html#setExpectContinue",
          "type": "function"
        },
        "index": {
          "description": "Specify that this request should set the expectation that the server needs to approve the request before you send it This function is special in PUT or POST request http-streams will wait for the server to reply with an HTTP Continue status before sending the entity body This is handled internally you will get the real response be it successful xx client error xx or server error xx in receiveResponse In theory it should be if the expectation failed Only bother with this if you know the service you re talking to requires clients to send an Expect continue header and will handle it properly Most servers don do any precondition checking automatically send an intermediate response and then just read the body regardless making this bit of no-op in most cases",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "setExpectContinue",
          "normalized": "RequestBuilder()",
          "package": "http-common",
          "partial": "Expect Continue",
          "signature": "RequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:setExpectContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a generic header to be sent in the HTTP request. The other\n methods in the RequestBuilder API are expressed in terms of this\n function, but we recommend you use them where offered for their\n stronger types.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "setHeader",
          "package": "http-common",
          "signature": "ByteString -\u003e ByteString -\u003e RequestBuilder ()",
          "source": "src/Network-Http-RequestBuilder.html#setHeader",
          "type": "function"
        },
        "index": {
          "description": "Set generic header to be sent in the HTTP request The other methods in the RequestBuilder API are expressed in terms of this function but we recommend you use them where offered for their stronger types",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "setHeader",
          "normalized": "ByteString-\u003eByteString-\u003eRequestBuilder()",
          "package": "http-common",
          "partial": "Header",
          "signature": "ByteString-\u003eByteString-\u003eRequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the [virtual] hostname for the request. In ordinary conditions\n you won't need to call this, as the \u003ccode\u003eHost:\u003c/code\u003e header is a required\n header in HTTP 1.1 and is set directly from the name of the server\n you connected to when calling \u003ccode\u003e\u003ca\u003eopenConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "setHostname",
          "package": "http-common",
          "signature": "Hostname -\u003e Port -\u003e RequestBuilder ()",
          "source": "src/Network-Http-RequestBuilder.html#setHostname",
          "type": "function"
        },
        "index": {
          "description": "Set the virtual hostname for the request In ordinary conditions you won need to call this as the Host header is required header in HTTP and is set directly from the name of the server you connected to when calling openConnection",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "setHostname",
          "normalized": "Hostname-\u003ePort-\u003eRequestBuilder()",
          "package": "http-common",
          "partial": "Hostname",
          "signature": "Hostname-\u003ePort-\u003eRequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:setHostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride the default setting about how the entity body will be sent.\n\u003c/p\u003e\u003cp\u003eThis function is special: this explicitly sets the \u003ccode\u003eTransfer-Encoding:\u003c/code\u003e\n header to \u003ccode\u003echunked\u003c/code\u003e and will instruct the library to actually tranfer the\n body as a stream (\u003ca\u003echunked transfer encoding\u003c/a\u003e). See \u003ccode\u003e\u003ca\u003esetContentLength\u003c/a\u003e\u003c/code\u003e for\n forcing the opposite. You \u003cem\u003ereally\u003c/em\u003e won't need this in normal operation, but\n some people are control freaks.\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "setTransferEncoding",
          "package": "http-common",
          "signature": "RequestBuilder ()",
          "source": "src/Network-Http-RequestBuilder.html#setTransferEncoding",
          "type": "function"
        },
        "index": {
          "description": "Override the default setting about how the entity body will be sent This function is special this explicitly sets the Transfer-Encoding header to chunked and will instruct the library to actually tranfer the body as stream chunked transfer encoding See setContentLength for forcing the opposite You really won need this in normal operation but some people are control freaks",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "setTransferEncoding",
          "normalized": "RequestBuilder()",
          "package": "http-common",
          "partial": "Transfer Encoding",
          "signature": "RequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:setTransferEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a header field to the specified value. This will overwrite\n any existing value for the field. Remember that HTTP fields names\n are case insensitive!\n\u003c/p\u003e",
          "module": "Network.Http.Types",
          "name": "updateHeader",
          "package": "http-common",
          "signature": "Headers -\u003e ByteString -\u003e ByteString -\u003e Headers",
          "source": "src/Network-Http-Internal.html#updateHeader",
          "type": "function"
        },
        "index": {
          "description": "Set header field to the specified value This will overwrite any existing value for the field Remember that HTTP fields names are case insensitive",
          "hierarchy": "Network Http Types",
          "module": "Network.Http.Types",
          "name": "updateHeader",
          "normalized": "Headers-\u003eByteString-\u003eByteString-\u003eHeaders",
          "package": "http-common",
          "partial": "Header",
          "signature": "Headers-\u003eByteString-\u003eByteString-\u003eHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-common/docs/Network-Http-Types.html#v:updateHeader"
      }
    }
  ]
]