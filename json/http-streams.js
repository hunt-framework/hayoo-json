[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eOverview\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA simple HTTP client library, using the Snap Framework's \u003ccode\u003eio-streams\u003c/code\u003e\n library to handle the streaming I/O. The \u003ccode\u003ehttp-streams\u003c/code\u003e API is designed\n for ease of use when querying web services and dealing with the result.\n\u003c/p\u003e\u003cp\u003eGiven:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import System.IO.Streams (InputStream, OutputStream, stdout)\n import qualified System.IO.Streams as Streams\n import qualified Data.ByteString as S\n\u003c/pre\u003e\u003cp\u003eand this library:\n\u003c/p\u003e\u003cpre\u003e import Network.Http.Client\n\u003c/pre\u003e\u003cp\u003ethe underlying API is straight-forward. In particular, constructing the\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e to send is quick and to the point:\n\u003c/p\u003e\u003cpre\u003e\n main :: IO ()\n main = do\n     c \u003c- \u003ccode\u003e\u003ca\u003eopenConnection\u003c/a\u003e\u003c/code\u003e \"www.example.com\" 80\n\n     q \u003c- \u003ccode\u003e\u003ca\u003ebuildRequest\u003c/a\u003e\u003c/code\u003e $ do\n         \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e GET \"/\"\n         \u003ccode\u003e\u003ca\u003esetAccept\u003c/a\u003e\u003c/code\u003e \"text/html\"\n\n     \u003ccode\u003e\u003ca\u003esendRequest\u003c/a\u003e\u003c/code\u003e c q \u003ccode\u003e\u003ca\u003eemptyBody\u003c/a\u003e\u003c/code\u003e\n\n     \u003ccode\u003e\u003ca\u003ereceiveResponse\u003c/a\u003e\u003c/code\u003e c (\\p i -\u003e do\n         xm \u003c- Streams.read i\n         case xm of\n             Just x    -\u003e S.putStr x\n             Nothing   -\u003e \"\")\n\n     \u003ccode\u003e\u003ca\u003ecloseConnection\u003c/a\u003e\u003c/code\u003e c\n\u003c/pre\u003e\u003cp\u003ewhich would print the first chunk of the response back from the\n server. Obviously in real usage you'll do something more interesting\n with the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e in the handler function, and consume the entire\n response body from the InputStream ByteString.\n\u003c/p\u003e\u003cp\u003eBecause this is all happening in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (the defining feature of\n \u003ccode\u003eio-streams\u003c/code\u003e!), you can ensure resource cleanup on normal or\n abnormal termination by using \u003ccode\u003eControl.Exception\u003c/code\u003e's standard\n \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e function; see \u003ccode\u003e\u003ca\u003ecloseConnection\u003c/a\u003e\u003c/code\u003e for an\n example. For the common case we have a utility function which\n wraps \u003ccode\u003ebracket\u003c/code\u003e for you:\n\u003c/p\u003e\u003cpre\u003e\n foo :: IO ByteString\n foo = \u003ccode\u003e\u003ca\u003ewithConnection\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eopenConnection\u003c/a\u003e\u003c/code\u003e \"www.example.com\" 80) doStuff\n\n doStuff :: Connection -\u003e IO ByteString\n\u003c/pre\u003e\u003cp\u003eThere are also a set of convenience APIs that do just that, along with\n the tedious bits like parsing URLs. For example, to do an HTTP GET and\n stream the response body to stdout, you can simply do:\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e \"http://www.example.com/file.txt\" (\\p i -\u003e Streams.connect i stdout)\n\u003c/pre\u003e\u003cp\u003ewhich on the one hand is \"easy\" while on the other exposes the the\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e and InputStream for you to read from. Of course, messing\n around with URLs is all a bit inefficient, so if you already have e.g.\n hostname and path, or if you need more control over the request being\n created, then the underlying \u003ccode\u003ehttp-streams\u003c/code\u003e API is simple enough to use\n directly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "module",
        "fct-source": "src/Network-Http-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "Overview simple HTTP client library using the Snap Framework io-streams library to handle the streaming The http-streams API is designed for ease of use when querying web services and dealing with the result Given LANGUAGE OverloadedStrings import System.IO.Streams InputStream OutputStream stdout import qualified System.IO.Streams as Streams import qualified Data.ByteString as and this library import Network.Http.Client the underlying API is straight-forward In particular constructing the Request to send is quick and to the point main IO main do openConnection www.example.com buildRequest do http GET setAccept text html sendRequest emptyBody receiveResponse do xm Streams.read case xm of Just S.putStr Nothing closeConnection which would print the first chunk of the response back from the server Obviously in real usage you ll do something more interesting with the Response in the handler function and consume the entire response body from the InputStream ByteString Because this is all happening in IO the defining feature of io-streams you can ensure resource cleanup on normal or abnormal termination by using Control.Exception standard bracket function see closeConnection for an example For the common case we have utility function which wraps bracket for you foo IO ByteString foo withConnection openConnection www.example.com doStuff doStuff Connection IO ByteString There are also set of convenience APIs that do just that along with the tedious bits like parsing URLs For example to do an HTTP GET and stream the response body to stdout you can simply do get http www.example.com file.txt Streams.connect stdout which on the one hand is easy while on the other exposes the the Response and InputStream for you to read from Of course messing around with URLs is all bit inefficient so if you already have e.g hostname and path or if you need more control over the request being created then the underlying http-streams API is simple enough to use directly",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "Client",
        "normalized": "",
        "package": "http-streams",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eA connection to a web server.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "data",
        "fct-source": "src/Network-Http-Connection.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "connection to web server",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "Connection",
        "normalized": "",
        "package": "http-streams",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:ContentType",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "ContentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "ContentType",
        "normalized": "",
        "package": "http-streams",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:Headers",
      "description": {
        "fct-descr": "\u003cp\u003eThe map of headers in a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e. Note that HTTP\n header field names are case insensitive, so if you call \u003ccode\u003esetHeader\u003c/code\u003e\n on a field that's already defined but with a different capitalization\n you will replace the existing value.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Headers"
      },
      "index": {
        "description": "The map of headers in Request or Response Note that HTTP header field names are case insensitive so if you call setHeader on field that already defined but with different capitalization you will replace the existing value",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "Headers",
        "normalized": "",
        "package": "http-streams",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:Hostname",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Hostname"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "Hostname",
        "normalized": "",
        "package": "http-streams",
        "partial": "Hostname",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:HttpClientError",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "data",
        "fct-source": "src/Network-Http-Inconvenience.html#HttpClientError",
        "fct-type": "data",
        "title": "HttpClientError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "HttpClientError",
        "normalized": "",
        "package": "http-streams",
        "partial": "Http Client Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:Method",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP Methods, as per RFC 2616\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Method"
      },
      "index": {
        "description": "HTTP Methods as per RFC",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "Method",
        "normalized": "",
        "package": "http-streams",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:Port",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Port"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "Port",
        "normalized": "",
        "package": "http-streams",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eA description of the request that will be sent to the server. Note\n unlike other HTTP libraries, the request body is \u003cem\u003enot\u003c/em\u003e a part of this\n object; that will be streamed out by you when actually sending the\n request with \u003ccode\u003esendRequest\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e has a useful \u003ccode\u003eShow\u003c/code\u003e instance that will output the request\n line and headers (as it will be sent over the wire but with the \u003ccode\u003e\\r\u003c/code\u003e\n characters stripped) which can be handy for debugging.\n\u003c/p\u003e\u003cp\u003eNote that the actual \u003ccode\u003eHost:\u003c/code\u003e header is not set until the request is sent,\n so you will not see it in the Show instance (unless you call \u003ccode\u003esetHostname\u003c/code\u003e\n to override the value inherited from the \u003ccode\u003eConnection\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "description of the request that will be sent to the server Note unlike other HTTP libraries the request body is not part of this object that will be streamed out by you when actually sending the request with sendRequest Request has useful Show instance that will output the request line and headers as it will be sent over the wire but with the characters stripped which can be handy for debugging Note that the actual Host header is not set until the request is sent so you will not see it in the Show instance unless you call setHostname to override the value inherited from the Connection",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "Request",
        "normalized": "",
        "package": "http-streams",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:RequestBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eThe RequestBuilder monad allows you to abuse do-notation to\n conveniently setup a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RequestBuilder"
      },
      "index": {
        "description": "The RequestBuilder monad allows you to abuse do-notation to conveniently setup Request object",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "RequestBuilder",
        "normalized": "",
        "package": "http-streams",
        "partial": "Request Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:Response",
      "description": {
        "fct-descr": "\u003cp\u003eA description of the response received from the server. Note\n unlike other HTTP libraries, the response body is \u003cem\u003enot\u003c/em\u003e a part\n of this object; that will be streamed in by you when calling\n \u003ccode\u003ereceiveResponse\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e has a \u003ccode\u003eShow\u003c/code\u003e instance that will output\n the status line and response headers as they were received from the\n server.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "description of the response received from the server Note unlike other HTTP libraries the response body is not part of this object that will be streamed in by you when calling receiveResponse Like Request Response has Show instance that will output the status line and response headers as they were received from the server",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "Response",
        "normalized": "",
        "package": "http-streams",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:StatusCode",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "StatusCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "StatusCode",
        "normalized": "",
        "package": "http-streams",
        "partial": "Status Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:TooManyRedirects",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "data",
        "fct-source": "src/Network-Http-Inconvenience.html#TooManyRedirects",
        "fct-type": "data",
        "title": "TooManyRedirects"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "TooManyRedirects",
        "normalized": "",
        "package": "http-streams",
        "partial": "Too Many Redirects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:URL",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "type",
        "fct-source": "src/Network-Http-Inconvenience.html#URL",
        "fct-type": "type",
        "title": "URL"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "URL",
        "normalized": "",
        "package": "http-streams",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#t:UnexpectedCompression",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "data",
        "fct-source": "src/Network-Http-ResponseParser.html#UnexpectedCompression",
        "fct-type": "data",
        "title": "UnexpectedCompression"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "UnexpectedCompression",
        "normalized": "",
        "package": "http-streams",
        "partial": "Unexpected Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:CONNECT",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "CONNECT",
        "fct-type": "function",
        "title": "CONNECT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "CONNECT",
        "normalized": "",
        "package": "http-streams",
        "partial": "CONNECT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:DELETE",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "DELETE",
        "fct-type": "function",
        "title": "DELETE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "DELETE",
        "normalized": "",
        "package": "http-streams",
        "partial": "DELETE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:GET",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "GET",
        "fct-type": "function",
        "title": "GET"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "GET",
        "normalized": "",
        "package": "http-streams",
        "partial": "GET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:HEAD",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "HEAD",
        "fct-type": "function",
        "title": "HEAD"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "HEAD",
        "normalized": "",
        "package": "http-streams",
        "partial": "HEAD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:Method",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Method ByteString",
        "fct-type": "function",
        "title": "Method"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "Method",
        "normalized": "",
        "package": "http-streams",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:OPTIONS",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "OPTIONS",
        "fct-type": "function",
        "title": "OPTIONS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "OPTIONS",
        "normalized": "",
        "package": "http-streams",
        "partial": "OPTIONS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:PATCH",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "PATCH",
        "fct-type": "function",
        "title": "PATCH"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "PATCH",
        "normalized": "",
        "package": "http-streams",
        "partial": "PATCH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:POST",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "POST",
        "fct-type": "function",
        "title": "POST"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "POST",
        "normalized": "",
        "package": "http-streams",
        "partial": "POST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:PUT",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "PUT",
        "fct-type": "function",
        "title": "PUT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "PUT",
        "normalized": "",
        "package": "http-streams",
        "partial": "PUT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:TRACE",
      "description": {
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "TRACE",
        "fct-type": "function",
        "title": "TRACE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "TRACE",
        "normalized": "",
        "package": "http-streams",
        "partial": "TRACE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:baselineContextSSL",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a basic SSL context. This is the SSL context used if you make an\n \u003ccode\u003e\"https://\"\u003c/code\u003e request using one of the convenience functions. It\n configures OpenSSL to use the default set of ciphers.\n\u003c/p\u003e\u003cp\u003eOn Linux systems, this function also configures OpenSSL to verify\n certificates using the system certificates stored in \u003ccode\u003e/etc/ssl/certs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn other systems, \u003cem\u003eno certificate validation is performed\u003c/em\u003e by the\n generated \u003ccode\u003e\u003ca\u003eSSLContext\u003c/a\u003e\u003c/code\u003e because there is no canonical place to find\n the set of system certificates. When using this library on a\n non-Linux system, you are encouraged to install the system\n certificates somewhere and create your own \u003ccode\u003e\u003ca\u003eSSLContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "IO SSLContext",
        "fct-source": "src/Network-Http-Inconvenience.html#baselineContextSSL",
        "fct-type": "function",
        "title": "baselineContextSSL"
      },
      "index": {
        "description": "Creates basic SSL context This is the SSL context used if you make an https request using one of the convenience functions It configures OpenSSL to use the default set of ciphers On Linux systems this function also configures OpenSSL to verify certificates using the system certificates stored in etc ssl certs On other systems no certificate validation is performed by the generated SSLContext because there is no canonical place to find the set of system certificates When using this library on non-Linux system you are encouraged to install the system certificates somewhere and create your own SSLContext",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "baselineContextSSL",
        "normalized": "",
        "package": "http-streams",
        "partial": "Context SSL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:buildRequest",
      "description": {
        "fct-descr": "\u003cp\u003eRun a RequestBuilder, yielding a Request object you can use on the\n given connection.\n\u003c/p\u003e\u003cpre\u003e     q \u003c- buildRequest $ do\n         http POST \"/api/v1/messages\"\n         setContentType \"application/json\"\n         setHostname \"clue.example.com\" 80\n         setAccept \"text/html\"\n         setHeader \"X-WhoDoneIt\" \"The Butler\"\n\u003c/pre\u003e\u003cp\u003eObviously it's up to you to later actually \u003cem\u003esend\u003c/em\u003e JSON data.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "RequestBuilder α -\u003e IO Request",
        "fct-type": "function",
        "title": "buildRequest"
      },
      "index": {
        "description": "Run RequestBuilder yielding Request object you can use on the given connection buildRequest do http POST api v1 messages setContentType application json setHostname clue.example.com setAccept text html setHeader X-WhoDoneIt The Butler Obviously it up to you to later actually send JSON data",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "buildRequest",
        "normalized": "RequestBuilder a-\u003eIO Request",
        "package": "http-streams",
        "partial": "Request",
        "signature": "RequestBuilder α-\u003eIO Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:closeConnection",
      "description": {
        "fct-descr": "\u003cp\u003eShutdown the connection. You need to call this release the\n underlying socket file descriptor and related network resources. To\n do so reliably, use this in conjunction with \u003ccode\u003e\u003ca\u003eopenConnection\u003c/a\u003e\u003c/code\u003e in a\n call to \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e --\n -- Make connection, cleaning up afterward\n --\n\n foo :: IO ByteString\n foo = bracket\n    (openConnection \"localhost\" 80)\n    (closeConnection)\n    (doStuff)\n\n --\n -- Actually use Connection to send Request and receive Response\n --\n\n doStuff :: Connection -\u003e IO ByteString\n\u003c/pre\u003e\u003cp\u003eor, just use \u003ccode\u003e\u003ca\u003ewithConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhile returning a ByteString is probably the most common use case,\n you could conceivably do more processing of the response in \u003ccode\u003edoStuff\u003c/code\u003e\n and have it and \u003ccode\u003efoo\u003c/code\u003e return a different type.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Network-Http-Connection.html#closeConnection",
        "fct-type": "function",
        "title": "closeConnection"
      },
      "index": {
        "description": "Shutdown the connection You need to call this release the underlying socket file descriptor and related network resources To do so reliably use this in conjunction with openConnection in call to bracket Make connection cleaning up afterward foo IO ByteString foo bracket openConnection localhost closeConnection doStuff Actually use Connection to send Request and receive Response doStuff Connection IO ByteString or just use withConnection While returning ByteString is probably the most common use case you could conceivably do more processing of the response in doStuff and have it and foo return different type",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "closeConnection",
        "normalized": "Connection-\u003eIO()",
        "package": "http-streams",
        "partial": "Connection",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:concatHandler",
      "description": {
        "fct-descr": "\u003cp\u003eSometimes you just want the entire response body as a single blob.\n This function concatonates all the bytes from the response into a\n ByteString. If using the main \u003ccode\u003ehttp-streams\u003c/code\u003e API, you would use it\n as follows:\n\u003c/p\u003e\u003cpre\u003e    ...\n    x' \u003c- receiveResponse c concatHandler\n    ...\n\u003c/pre\u003e\u003cp\u003eThe methods in the convenience API all take a function to handle the\n response; this function is passed directly to the \u003ccode\u003e\u003ca\u003ereceiveResponse\u003c/a\u003e\u003c/code\u003e\n call underlying the request. Thus this utility function can be used\n for \u003ccode\u003eget\u003c/code\u003e as well:\n\u003c/p\u003e\u003cpre\u003e    x' \u003c- get \"http://www.example.com/document.txt\" concatHandler\n\u003c/pre\u003e\u003cp\u003eEither way, the usual caveats about allocating a\n single object from streaming I/O apply: do not use this if you are\n not absolutely certain that the response body will fit in a\n reasonable amount of memory.\n\u003c/p\u003e\u003cp\u003eNote that this function makes no discrimination based on the\n response's HTTP status code. You're almost certainly better off\n writing your own handler function.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Response -\u003e InputStream ByteString -\u003e IO ByteString",
        "fct-source": "src/Network-Http-Connection.html#concatHandler",
        "fct-type": "function",
        "title": "concatHandler"
      },
      "index": {
        "description": "Sometimes you just want the entire response body as single blob This function concatonates all the bytes from the response into ByteString If using the main http-streams API you would use it as follows receiveResponse concatHandler The methods in the convenience API all take function to handle the response this function is passed directly to the receiveResponse call underlying the request Thus this utility function can be used for get as well get http www.example.com document.txt concatHandler Either way the usual caveats about allocating single object from streaming apply do not use this if you are not absolutely certain that the response body will fit in reasonable amount of memory Note that this function makes no discrimination based on the response HTTP status code You re almost certainly better off writing your own handler function",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "concatHandler",
        "normalized": "Response-\u003eInputStream ByteString-\u003eIO ByteString",
        "package": "http-streams",
        "partial": "Handler",
        "signature": "Response-\u003eInputStream ByteString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:concatHandler-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA special case of \u003ccode\u003e\u003ca\u003econcatHandler\u003c/a\u003e\u003c/code\u003e, this function will return the\n entire response body as a single ByteString, but will throw\n \u003ccode\u003e\u003ca\u003eHttpClientError\u003c/a\u003e\u003c/code\u003e if the response status code was other than \u003ccode\u003e2xx\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Response -\u003e InputStream ByteString -\u003e IO ByteString",
        "fct-source": "src/Network-Http-Inconvenience.html#concatHandler%27",
        "fct-type": "function",
        "title": "concatHandler'"
      },
      "index": {
        "description": "special case of concatHandler this function will return the entire response body as single ByteString but will throw HttpClientError if the response status code was other than xx",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "concatHandler'",
        "normalized": "Response-\u003eInputStream ByteString-\u003eIO ByteString",
        "package": "http-streams",
        "partial": "Handler'",
        "signature": "Response-\u003eInputStream ByteString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:debugHandler",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the response headers and response body to \u003ccode\u003estdout\u003c/code\u003e. You can\n use this with \u003ccode\u003e\u003ca\u003ereceiveResponse\u003c/a\u003e\u003c/code\u003e or one of the convenience functions\n when testing. For example, doing:\n\u003c/p\u003e\u003cpre\u003e     c \u003c- openConnection \"kernel.operationaldynamics.com\" 58080\n\n     q \u003c- buildRequest $ do\n         http GET \"/time\"\n\n     sendRequest c q emptyBody\n\n     receiveResponse c debugHandler\n\u003c/pre\u003e\u003cp\u003ewould print out:\n\u003c/p\u003e\u003cpre\u003e HTTP/1.1 200 OK\n Transfer-Encoding: chunked\n Content-Type: text/plain\n Vary: Accept-Encoding\n Server: Snap/0.9.2.4\n Content-Encoding: gzip\n Date: Mon, 21 Jan 2013 06:13:37 GMT\n\n Mon 21 Jan 13, 06:13:37.303Z\n\u003c/pre\u003e\u003cp\u003eor thereabouts.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Response -\u003e InputStream ByteString -\u003e IO ()",
        "fct-source": "src/Network-Http-Connection.html#debugHandler",
        "fct-type": "function",
        "title": "debugHandler"
      },
      "index": {
        "description": "Print the response headers and response body to stdout You can use this with receiveResponse or one of the convenience functions when testing For example doing openConnection kernel.operationaldynamics.com buildRequest do http GET time sendRequest emptyBody receiveResponse debugHandler would print out HTTP OK Transfer-Encoding chunked Content-Type text plain Vary Accept-Encoding Server Snap Content-Encoding gzip Date Mon Jan GMT Mon Jan or thereabouts",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "debugHandler",
        "normalized": "Response-\u003eInputStream ByteString-\u003eIO()",
        "package": "http-streams",
        "partial": "Handler",
        "signature": "Response-\u003eInputStream ByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:emptyBody",
      "description": {
        "fct-descr": "\u003cp\u003eUse this for the common case of the HTTP methods that only send\n headers and which have no entity body, i.e. \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e requests.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "OutputStream Builder -\u003e IO ()",
        "fct-source": "src/Network-Http-Connection.html#emptyBody",
        "fct-type": "function",
        "title": "emptyBody"
      },
      "index": {
        "description": "Use this for the common case of the HTTP methods that only send headers and which have no entity body i.e GET requests",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "emptyBody",
        "normalized": "OutputStream Builder-\u003eIO()",
        "package": "http-streams",
        "partial": "Body",
        "signature": "OutputStream Builder-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:encodedFormBody",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify name/value pairs to be sent to the server in the manner\n used by web browsers when submitting a form via a POST request.\n Parameters will be URL encoded per RFC 2396 and combined into a\n single string which will be sent as the body of your request.\n\u003c/p\u003e\u003cp\u003eYou use this partially applied:\n\u003c/p\u003e\u003cpre\u003e     let nvs = [(\"name\",\"Kermit\"),\n                (\"type\",\"frog\")]\n                (\"role\",\"stagehand\")]\n\n     sendRequest c q (encodedFormBody nvs)\n\u003c/pre\u003e\u003cp\u003eNote that it's going to be up to you to call \u003ccode\u003e\u003ca\u003esetContentType\u003c/a\u003e\u003c/code\u003e with\n a value of \u003ccode\u003e\"application/x-www-form-urlencoded\"\u003c/code\u003e when building the\n Request object; the \u003ccode\u003e\u003ca\u003epostForm\u003c/a\u003e\u003c/code\u003e convenience (which uses this\n \u003ccode\u003eencodedFormBody\u003c/code\u003e function) takes care of this for you, obviously.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "[(ByteString, ByteString)] -\u003e OutputStream Builder -\u003e IO ()",
        "fct-source": "src/Network-Http-Inconvenience.html#encodedFormBody",
        "fct-type": "function",
        "title": "encodedFormBody"
      },
      "index": {
        "description": "Specify name value pairs to be sent to the server in the manner used by web browsers when submitting form via POST request Parameters will be URL encoded per RFC and combined into single string which will be sent as the body of your request You use this partially applied let nvs name Kermit type frog role stagehand sendRequest encodedFormBody nvs Note that it going to be up to you to call setContentType with value of application x-www-form-urlencoded when building the Request object the postForm convenience which uses this encodedFormBody function takes care of this for you obviously",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "encodedFormBody",
        "normalized": "[(ByteString,ByteString)]-\u003eOutputStream Builder-\u003eIO()",
        "package": "http-streams",
        "partial": "Form Body",
        "signature": "[(ByteString,ByteString)]-\u003eOutputStream Builder-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:establishConnection",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a URL, work out whether it is normal or secure, and then\n open the connection to the webserver including setting the\n appropriate default port if one was not specified in the URL. This\n is what powers the convenience API, but you may find it useful in\n composing your own similar functions.\n\u003c/p\u003e\u003cp\u003eFor example (on the assumption that your server behaves when given\n an absolute URI as the request path), this will open a connection\n to server \u003ccode\u003ewww.example.com\u003c/code\u003e port \u003ccode\u003e443\u003c/code\u003e and request \u003ccode\u003e/photo.jpg\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e     let url = \"https://www.example.com/photo.jpg\"\n\n     c \u003c- establishConnection url\n     q \u003c- buildRequest $ do\n         http GET url\n     ...\n\u003c/pre\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "URL -\u003e IO Connection",
        "fct-source": "src/Network-Http-Inconvenience.html#establishConnection",
        "fct-type": "function",
        "title": "establishConnection"
      },
      "index": {
        "description": "Given URL work out whether it is normal or secure and then open the connection to the webserver including setting the appropriate default port if one was not specified in the URL This is what powers the convenience API but you may find it useful in composing your own similar functions For example on the assumption that your server behaves when given an absolute URI as the request path this will open connection to server www.example.com port and request photo.jpg let url https www.example.com photo.jpg establishConnection url buildRequest do http GET url",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "establishConnection",
        "normalized": "URL-\u003eIO Connection",
        "package": "http-streams",
        "partial": "Connection",
        "signature": "URL-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:fileBody",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a local file to be sent to the server as the body of the\n request.\n\u003c/p\u003e\u003cp\u003eYou use this partially applied:\n\u003c/p\u003e\u003cpre\u003e     sendRequest c q (fileBody \"/etc/passwd\")\n\u003c/pre\u003e\u003cp\u003eNote that the type of \u003ccode\u003e(fileBody \"/path/to/file\")\u003c/code\u003e is just what\n you need for the third argument to \u003ccode\u003e\u003ca\u003esendRequest\u003c/a\u003e\u003c/code\u003e, namely\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t filePath \"hello.txt\"\n\u003c/code\u003e\u003c/strong\u003e:: OutputStream Builder -\u003e IO ()\n\u003c/pre\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "FilePath -\u003e OutputStream Builder -\u003e IO ()",
        "fct-source": "src/Network-Http-Connection.html#fileBody",
        "fct-type": "function",
        "title": "fileBody"
      },
      "index": {
        "description": "Specify local file to be sent to the server as the body of the request You use this partially applied sendRequest fileBody etc passwd Note that the type of fileBody path to file is just what you need for the third argument to sendRequest namely filePath hello.txt OutputStream Builder IO",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "fileBody",
        "normalized": "FilePath-\u003eOutputStream Builder-\u003eIO()",
        "package": "http-streams",
        "partial": "Body",
        "signature": "FilePath-\u003eOutputStream Builder-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eIssue an HTTP GET request and pass the resultant response to the\n supplied handler function. This code will silently follow redirects,\n to a maximum depth of 5 hops.\n\u003c/p\u003e\u003cp\u003eThe handler function is as for \u003ccode\u003e\u003ca\u003ereceiveResponse\u003c/a\u003e\u003c/code\u003e, so you can use one\n of the supplied convenience handlers if you're in a hurry:\n\u003c/p\u003e\u003cpre\u003e     x' \u003c- get \"http://www.bbc.co.uk/news/\" concatHandler\n\u003c/pre\u003e\u003cp\u003eBut as ever the disadvantage of doing this is that you're not doing\n anything intelligent with the HTTP response status code. If you want\n an exception raised in the event of a non \u003ccode\u003e2xx\u003c/code\u003e response, you can use:\n\u003c/p\u003e\u003cpre\u003e     x' \u003c- get \"http://www.bbc.co.uk/news/\" concatHandler'\n\u003c/pre\u003e\u003cp\u003ebut for anything more refined you'll find it easy to simply write\n your own handler function.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eTooManyRedirects\u003c/a\u003e\u003c/code\u003e if more than 5 redirects are thrown.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "URL-\u003e (Response -\u003e InputStream ByteString -\u003e IO β)-\u003e IO β",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Issue an HTTP GET request and pass the resultant response to the supplied handler function This code will silently follow redirects to maximum depth of hops The handler function is as for receiveResponse so you can use one of the supplied convenience handlers if you re in hurry get http www.bbc.co.uk news concatHandler But as ever the disadvantage of doing this is that you re not doing anything intelligent with the HTTP response status code If you want an exception raised in the event of non xx response you can use get http www.bbc.co.uk news concatHandler but for anything more refined you ll find it easy to simply write your own handler function Throws TooManyRedirects if more than redirects are thrown",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "get",
        "normalized": "URL-\u003e(Response-\u003eInputStream ByteString-\u003eIO a)-\u003eIO a",
        "package": "http-streams",
        "partial": "",
        "signature": "URL-\u003e(Response-\u003eInputStream ByteString-\u003eIO β)-\u003eIO β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:getHeader",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a header in the response. HTTP header field names are\n case-insensitive, so you can specify the name to lookup however you\n like. If the header is not present \u003ccode\u003eNothing\u003c/code\u003e will be returned.\n\u003c/p\u003e\u003cpre\u003e     let n = case getHeader p \"Content-Length\" of\n                Just x' -\u003e read x' :: Int\n                Nothing -\u003e 0\n\u003c/pre\u003e\u003cp\u003ewhich of course is essentially what goes on inside the client library when\n it receives a response from the server and has to figure out how many bytes\n to read.\n\u003c/p\u003e\u003cp\u003eThere is a fair bit of complexity in some of the other HTTP response\n fields, so there are a number of specialized functions for reading\n those values where we've found them useful.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Response -\u003e ByteString -\u003e Maybe ByteString",
        "fct-type": "function",
        "title": "getHeader"
      },
      "index": {
        "description": "Lookup header in the response HTTP header field names are case-insensitive so you can specify the name to lookup however you like If the header is not present Nothing will be returned let case getHeader Content-Length of Just read Int Nothing which of course is essentially what goes on inside the client library when it receives response from the server and has to figure out how many bytes to read There is fair bit of complexity in some of the other HTTP response fields so there are number of specialized functions for reading those values where we ve found them useful",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "getHeader",
        "normalized": "Response-\u003eByteString-\u003eMaybe ByteString",
        "package": "http-streams",
        "partial": "Header",
        "signature": "Response-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:getHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eGet the Headers from a Request or Response. Most people do not need\n this; for most cases you just need to get a header or two from the\n response, for which you can use \u003ccode\u003e\u003ca\u003egetHeader\u003c/a\u003e\u003c/code\u003e. On the other hand, if you\n do need to poke around in the raw headers,\n\u003c/p\u003e\u003cpre\u003e import Network.Http.Types\u003c/pre\u003e\u003cp\u003ewill give you functions like \u003ccode\u003e\u003ca\u003elookupHeader\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eupdateHeader\u003c/a\u003e\u003c/code\u003e to to\n work with.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "τ -\u003e Headers",
        "fct-type": "function",
        "title": "getHeaders"
      },
      "index": {
        "description": "Get the Headers from Request or Response Most people do not need this for most cases you just need to get header or two from the response for which you can use getHeader On the other hand if you do need to poke around in the raw headers import Network.Http.Types will give you functions like lookupHeader and updateHeader to to work with",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "getHeaders",
        "normalized": "a-\u003eHeaders",
        "package": "http-streams",
        "partial": "Headers",
        "signature": "τ-\u003eHeaders"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:getHeadersFull",
      "description": {
        "fct-descr": "\u003cp\u003eGet the headers that will be sent with this request. You likely won't\n need this but there are some corner cases where people need to make\n calculations based on all the headers before they go out over the wire.\n\u003c/p\u003e\u003cp\u003eIf you'd like the request headers as an association list, import the header\n functions:\n\u003c/p\u003e\u003cpre\u003e import Network.Http.Types\n\u003c/pre\u003e\u003cp\u003ethen use \u003ccode\u003e\u003ca\u003eretreiveHeaders\u003c/a\u003e\u003c/code\u003e as follows:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet kvs = retreiveHeaders $ getHeadersFull c q\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t kvs\n\u003c/code\u003e\u003c/strong\u003e:: [(ByteString, ByteString)]\n\u003c/pre\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Connection -\u003e Request -\u003e Headers",
        "fct-source": "src/Network-Http-Connection.html#getHeadersFull",
        "fct-type": "function",
        "title": "getHeadersFull"
      },
      "index": {
        "description": "Get the headers that will be sent with this request You likely won need this but there are some corner cases where people need to make calculations based on all the headers before they go out over the wire If you like the request headers as an association list import the header functions import Network.Http.Types then use retreiveHeaders as follows let kvs retreiveHeaders getHeadersFull kvs ByteString ByteString",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "getHeadersFull",
        "normalized": "Connection-\u003eRequest-\u003eHeaders",
        "package": "http-streams",
        "partial": "Headers Full",
        "signature": "Connection-\u003eRequest-\u003eHeaders"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:getHostname",
      "description": {
        "fct-descr": "\u003cp\u003eGet the virtual hostname that will be used as the \u003ccode\u003eHost:\u003c/code\u003e header in\n the HTTP 1.1 request. Per RFC 2616 &#167; 14.23, this will be of the form \u003ccode\u003ehostname:port\u003c/code\u003e if the port number is other than the default, ie 80\n for HTTP.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Connection -\u003e Request -\u003e ByteString",
        "fct-source": "src/Network-Http-Connection.html#getHostname",
        "fct-type": "function",
        "title": "getHostname"
      },
      "index": {
        "description": "Get the virtual hostname that will be used as the Host header in the HTTP request Per RFC this will be of the form hostname port if the port number is other than the default ie for HTTP",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "getHostname",
        "normalized": "Connection-\u003eRequest-\u003eByteString",
        "package": "http-streams",
        "partial": "Hostname",
        "signature": "Connection-\u003eRequest-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:getRequestHeaders",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use retrieveHeaders . getHeadersFull instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Connection -\u003e Request -\u003e [(ByteString, ByteString)]",
        "fct-source": "src/Network-Http-Connection.html#getRequestHeaders",
        "fct-type": "function",
        "title": "getRequestHeaders"
      },
      "index": {
        "description": "Deprecated use retrieveHeaders getHeadersFull instead",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "getRequestHeaders",
        "normalized": "Connection-\u003eRequest-\u003e[(ByteString,ByteString)]",
        "package": "http-streams",
        "partial": "Request Headers",
        "signature": "Connection-\u003eRequest-\u003e[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:getStatusCode",
      "description": {
        "fct-descr": "\u003cp\u003eGet the HTTP response status code.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Response -\u003e StatusCode",
        "fct-type": "function",
        "title": "getStatusCode"
      },
      "index": {
        "description": "Get the HTTP response status code",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "getStatusCode",
        "normalized": "Response-\u003eStatusCode",
        "package": "http-streams",
        "partial": "Status Code",
        "signature": "Response-\u003eStatusCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:getStatusMessage",
      "description": {
        "fct-descr": "\u003cp\u003eGet the HTTP response status message. Keep in mind that this is\n \u003cem\u003enot\u003c/em\u003e normative; whereas \u003ccode\u003e\u003ca\u003egetStatusCode\u003c/a\u003e\u003c/code\u003e values are authoritative.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Response -\u003e ByteString",
        "fct-type": "function",
        "title": "getStatusMessage"
      },
      "index": {
        "description": "Get the HTTP response status message Keep in mind that this is not normative whereas getStatusCode values are authoritative",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "getStatusMessage",
        "normalized": "Response-\u003eByteString",
        "package": "http-streams",
        "partial": "Status Message",
        "signature": "Response-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:http",
      "description": {
        "fct-descr": "\u003cp\u003eBegin constructing a Request, starting with the request line.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Method -\u003e ByteString -\u003e RequestBuilder ()",
        "fct-type": "function",
        "title": "http"
      },
      "index": {
        "description": "Begin constructing Request starting with the request line",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "http",
        "normalized": "Method-\u003eByteString-\u003eRequestBuilder()",
        "package": "http-streams",
        "partial": "",
        "signature": "Method-\u003eByteString-\u003eRequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:inputStreamBody",
      "description": {
        "fct-descr": "\u003cp\u003eRead from a pre-existing \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e and pipe that through to the\n connection to the server. This is useful in the general case where\n something else has handed you stream to read from and you want to use\n it as the entity body for the request.\n\u003c/p\u003e\u003cp\u003eYou use this partially applied:\n\u003c/p\u003e\u003cpre\u003e     i \u003c- getStreamFromVault                    -- magic, clearly\n     sendRequest c q (inputStreamBody i)\n\u003c/pre\u003e\u003cp\u003eThis function maps \u003ca\u003eBuilder.fromByteString\u003c/a\u003e over the input, which will\n be efficient if the ByteString chunks are large.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "InputStream ByteString -\u003e OutputStream Builder -\u003e IO ()",
        "fct-source": "src/Network-Http-Connection.html#inputStreamBody",
        "fct-type": "function",
        "title": "inputStreamBody"
      },
      "index": {
        "description": "Read from pre-existing InputStream and pipe that through to the connection to the server This is useful in the general case where something else has handed you stream to read from and you want to use it as the entity body for the request You use this partially applied getStreamFromVault magic clearly sendRequest inputStreamBody This function maps Builder.fromByteString over the input which will be efficient if the ByteString chunks are large",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "inputStreamBody",
        "normalized": "InputStream ByteString-\u003eOutputStream Builder-\u003eIO()",
        "package": "http-streams",
        "partial": "Stream Body",
        "signature": "InputStream ByteString-\u003eOutputStream Builder-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:jsonHandler",
      "description": {
        "fct-descr": "\u003cp\u003eIf you're working with a data stream that is in \u003ccode\u003eapplication/json\u003c/code\u003e,\n then chances are you're using \u003ccode\u003eaeson\u003c/code\u003e to handle the JSON to Haskell\n decoding. If so, then this helper function might be of use.\n\u003c/p\u003e\u003cpre\u003e     v \u003c- get \"http://api.example.com/v1/\" jsonHandler\n\u003c/pre\u003e\u003cp\u003eThis function feeds the input body to the \u003ccode\u003e\u003ca\u003ejson'\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003eattoparsec\u003c/code\u003e Parser in order to get the aeson Value type. This is then\n marshalled to your type represeting the source data, via the FromJSON\n typeclass.\n\u003c/p\u003e\u003cp\u003eThe above example was actually insufficient; when working with\n \u003ccode\u003eaeson\u003c/code\u003e you need to fix the type so it knows what FromJSON instance\n to use. Let's say you're getting Person objects, then it would be\n\u003c/p\u003e\u003cpre\u003e     v \u003c- get \"http://api.example.com/v1/person/461\" jsonHandler :: IO Person\n\u003c/pre\u003e\u003cp\u003eassuming your Person type had a FromJSON instance, of course.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis function parses a single top level JSON object or array, which\n is all you're supposed to get if it's a valid document. People do\n all kinds of crazy things though, so beware. Also, this function (like the\n \u003ca\u003econcatHander\u003c/a\u003e convenience) loads the entire response into memory; it's\n not \u003cem\u003estreaming\u003c/em\u003e; if you're receiving a document which is (say) a very\n long array of objects then you may want to implement your own\n handler function, perhaps using \u003ca\u003eStreams.parserToInputStream\u003c/a\u003e and\n the \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e combinators directly &#8212; with a result type of\n InputStream Value, perhaps &#8212; by which you could then iterate over\n the Values one at a time in constant space.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Response -\u003e InputStream ByteString -\u003e IO α",
        "fct-source": "src/Network-Http-Inconvenience.html#jsonHandler",
        "fct-type": "function",
        "title": "jsonHandler"
      },
      "index": {
        "description": "If you re working with data stream that is in application json then chances are you re using aeson to handle the JSON to Haskell decoding If so then this helper function might be of use get http api.example.com v1 jsonHandler This function feeds the input body to the json attoparsec Parser in order to get the aeson Value type This is then marshalled to your type represeting the source data via the FromJSON typeclass The above example was actually insufficient when working with aeson you need to fix the type so it knows what FromJSON instance to use Let say you re getting Person objects then it would be get http api.example.com v1 person jsonHandler IO Person assuming your Person type had FromJSON instance of course Note This function parses single top level JSON object or array which is all you re supposed to get if it valid document People do all kinds of crazy things though so beware Also this function like the concatHander convenience loads the entire response into memory it not streaming if you re receiving document which is say very long array of objects then you may want to implement your own handler function perhaps using Streams.parserToInputStream and the Parser combinators directly with result type of InputStream Value perhaps by which you could then iterate over the Values one at time in constant space",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "jsonHandler",
        "normalized": "Response-\u003eInputStream ByteString-\u003eIO a",
        "package": "http-streams",
        "partial": "Handler",
        "signature": "Response-\u003eInputStream ByteString-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:makeConnection",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a raw Connection object from the given parts. This is\n primarily of use when teseting, for example:\n\u003c/p\u003e\u003cpre\u003e fakeConnection :: IO Connection\n fakeConnection = do\n     o  \u003c- Streams.nullOutput\n     i  \u003c- Streams.nullInput\n     c  \u003c- makeConnection \"www.example.com\" (return()) o i\n     return c\n\u003c/pre\u003e\u003cp\u003eis an idiom we use frequently in testing and benchmarking, usually\n replacing the InputStream with something like:\n\u003c/p\u003e\u003cpre\u003e     x' \u003c- S.readFile \"properly-formatted-response.txt\"\n     i  \u003c- Streams.fromByteString x'\n\u003c/pre\u003e\u003cp\u003eIf you're going to do that, keep in mind that you \u003cem\u003emust\u003c/em\u003e have CR-LF\n pairs after each header line and between the header and body to\n be compliant with the HTTP protocol; otherwise, parsers will\n reject your message.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "ByteString-\u003e IO ()-\u003e OutputStream ByteString-\u003e InputStream ByteString-\u003e IO Connection",
        "fct-type": "function",
        "title": "makeConnection"
      },
      "index": {
        "description": "Create raw Connection object from the given parts This is primarily of use when teseting for example fakeConnection IO Connection fakeConnection do Streams.nullOutput Streams.nullInput makeConnection www.example.com return return is an idiom we use frequently in testing and benchmarking usually replacing the InputStream with something like S.readFile properly-formatted-response.txt Streams.fromByteString If you re going to do that keep in mind that you must have CR-LF pairs after each header line and between the header and body to be compliant with the HTTP protocol otherwise parsers will reject your message",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "makeConnection",
        "normalized": "ByteString-\u003eIO()-\u003eOutputStream ByteString-\u003eInputStream ByteString-\u003eIO Connection",
        "package": "http-streams",
        "partial": "Connection",
        "signature": "ByteString-\u003eIO()-\u003eOutputStream ByteString-\u003eInputStream ByteString-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:modifyContextSSL",
      "description": {
        "fct-descr": "\u003cp\u003eModify the context being used to configure the SSL tunnel used by\n the convenience API functions to make \u003ccode\u003ehttps:\u003cem/\u003e\u003c/code\u003e connections. The\n default is that setup by \u003ccode\u003e\u003ca\u003ebaselineContextSSL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "(SSLContext -\u003e IO SSLContext) -\u003e IO ()",
        "fct-source": "src/Network-Http-Inconvenience.html#modifyContextSSL",
        "fct-type": "function",
        "title": "modifyContextSSL"
      },
      "index": {
        "description": "Modify the context being used to configure the SSL tunnel used by the convenience API functions to make https connections The default is that setup by baselineContextSSL",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "modifyContextSSL",
        "normalized": "(SSLContext-\u003eIO SSLContext)-\u003eIO()",
        "package": "http-streams",
        "partial": "Context SSL",
        "signature": "(SSLContext-\u003eIO SSLContext)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:openConnection",
      "description": {
        "fct-descr": "\u003cp\u003eIn order to make a request you first establish the TCP\n connection to the server over which to send it.\n\u003c/p\u003e\u003cp\u003eOrdinarily you would supply the host part of the URL here and it will\n be used as the value of the HTTP 1.1 \u003ccode\u003eHost:\u003c/code\u003e field. However, you can\n specify any server name or IP addresss and set the \u003ccode\u003eHost:\u003c/code\u003e value\n later with \u003ccode\u003e\u003ca\u003esetHostname\u003c/a\u003e\u003c/code\u003e when building the\n request.\n\u003c/p\u003e\u003cp\u003eUsage is as follows:\n\u003c/p\u003e\u003cpre\u003e     c \u003c- openConnection \"localhost\" 80\n     ...\n     closeConnection c\n\u003c/pre\u003e\u003cp\u003eMore likely, you'll use \u003ccode\u003e\u003ca\u003ewithConnection\u003c/a\u003e\u003c/code\u003e to wrap the call in order\n to ensure finalization.\n\u003c/p\u003e\u003cp\u003eHTTP pipelining is supported; you can reuse the connection to a\n web server, but it's up to you to ensure you match the number of\n requests sent to the number of responses read, and to process those\n responses in order. This is all assuming that the \u003cem\u003eserver\u003c/em\u003e supports\n pipelining; be warned that not all do. Web browsers go to\n extraordinary lengths to probe this; you probably only want to do\n pipelining under controlled conditions. Otherwise just open a new\n connection for subsequent requests.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Hostname -\u003e Port -\u003e IO Connection",
        "fct-source": "src/Network-Http-Connection.html#openConnection",
        "fct-type": "function",
        "title": "openConnection"
      },
      "index": {
        "description": "In order to make request you first establish the TCP connection to the server over which to send it Ordinarily you would supply the host part of the URL here and it will be used as the value of the HTTP Host field However you can specify any server name or IP addresss and set the Host value later with setHostname when building the request Usage is as follows openConnection localhost closeConnection More likely you ll use withConnection to wrap the call in order to ensure finalization HTTP pipelining is supported you can reuse the connection to web server but it up to you to ensure you match the number of requests sent to the number of responses read and to process those responses in order This is all assuming that the server supports pipelining be warned that not all do Web browsers go to extraordinary lengths to probe this you probably only want to do pipelining under controlled conditions Otherwise just open new connection for subsequent requests",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "openConnection",
        "normalized": "Hostname-\u003ePort-\u003eIO Connection",
        "package": "http-streams",
        "partial": "Connection",
        "signature": "Hostname-\u003ePort-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:openConnectionSSL",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a secure connection to a web server.\n\u003c/p\u003e\u003cp\u003eYou need to wrap this (and subsequent code using this connection)\n within a call to \u003ccode\u003e\u003ca\u003ewithOpenSSL\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import OpenSSL (withOpenSSL)\n\n main :: IO ()\n main = withOpenSSL $ do\n     ctx \u003c- baselineContextSSL\n     c \u003c- openConnectionSSL ctx \"api.github.com\" 443\n     ...\n     closeConnection c\n\u003c/pre\u003e\u003cp\u003eIf you want to tune the parameters used in making SSL connections,\n manually specify certificates, etc, then setup your own context:\n\u003c/p\u003e\u003cpre\u003e import OpenSSL.Session (SSLContext)\n import qualified OpenSSL.Session as SSL\n\n     ...\n     ctx \u003c- SSL.context\n     ...\n\u003c/pre\u003e\u003cp\u003eSee \u003ca\u003eOpenSSL.Session\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eCrypto is as provided by the system \u003ccode\u003eopenssl\u003c/code\u003e library, as wrapped\n by the \u003ccode\u003eHsOpenSSL\u003c/code\u003e package and \u003ccode\u003eopenssl-streams\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "SSLContext -\u003e Hostname -\u003e Port -\u003e IO Connection",
        "fct-source": "src/Network-Http-Connection.html#openConnectionSSL",
        "fct-type": "function",
        "title": "openConnectionSSL"
      },
      "index": {
        "description": "Open secure connection to web server You need to wrap this and subsequent code using this connection within call to withOpenSSL import OpenSSL withOpenSSL main IO main withOpenSSL do ctx baselineContextSSL openConnectionSSL ctx api.github.com closeConnection If you want to tune the parameters used in making SSL connections manually specify certificates etc then setup your own context import OpenSSL.Session SSLContext import qualified OpenSSL.Session as SSL ctx SSL.context See OpenSSL.Session Crypto is as provided by the system openssl library as wrapped by the HsOpenSSL package and openssl-streams",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "openConnectionSSL",
        "normalized": "SSLContext-\u003eHostname-\u003ePort-\u003eIO Connection",
        "package": "http-streams",
        "partial": "Connection SSL",
        "signature": "SSLContext-\u003eHostname-\u003ePort-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:post",
      "description": {
        "fct-descr": "\u003cp\u003eSend content to a server via an HTTP POST request. Use this\n function if you have an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e with the body content.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "URL-\u003e ContentType-\u003e (OutputStream Builder -\u003e IO α)-\u003e (Response -\u003e InputStream ByteString -\u003e IO β)-\u003e IO β",
        "fct-type": "function",
        "title": "post"
      },
      "index": {
        "description": "Send content to server via an HTTP POST request Use this function if you have an OutputStream with the body content",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "post",
        "normalized": "URL-\u003eContentType-\u003e(OutputStream Builder-\u003eIO a)-\u003e(Response-\u003eInputStream ByteString-\u003eIO b)-\u003eIO b",
        "package": "http-streams",
        "partial": "",
        "signature": "URL-\u003eContentType-\u003e(OutputStream Builder-\u003eIO α)-\u003e(Response-\u003eInputStream ByteString-\u003eIO β)-\u003eIO β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:postForm",
      "description": {
        "fct-descr": "\u003cp\u003eSend form data to a server via an HTTP POST request. This is the\n usual use case; most services expect the body to be MIME type\n \u003ccode\u003eapplication/x-www-form-urlencoded\u003c/code\u003e as this is what conventional\n web browsers send on form submission. If you want to POST to a URL\n with an arbitrary Content-Type, use \u003ccode\u003e\u003ca\u003epost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "URL-\u003e [(ByteString, ByteString)]-\u003e (Response -\u003e InputStream ByteString -\u003e IO β)-\u003e IO β",
        "fct-type": "function",
        "title": "postForm"
      },
      "index": {
        "description": "Send form data to server via an HTTP POST request This is the usual use case most services expect the body to be MIME type application x-www-form-urlencoded as this is what conventional web browsers send on form submission If you want to POST to URL with an arbitrary Content-Type use post",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "postForm",
        "normalized": "URL-\u003e[(ByteString,ByteString)]-\u003e(Response-\u003eInputStream ByteString-\u003eIO a)-\u003eIO a",
        "package": "http-streams",
        "partial": "Form",
        "signature": "URL-\u003e[(ByteString,ByteString)]-\u003e(Response-\u003eInputStream ByteString-\u003eIO β)-\u003eIO β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003ePlace content on the server at the given URL via an HTTP PUT\n request, specifying the content type and a function to write the\n content to the supplied \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e. You might see:\n\u003c/p\u003e\u003cpre\u003e     put \"http://s3.example.com/bucket42/object149\" \"text/plain\"\n         (fileBody \"hello.txt\") (\\p i -\u003e do\n             putStr $ show p\n             Streams.connect i stdout)\n\u003c/pre\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "URL-\u003e ContentType-\u003e (OutputStream Builder -\u003e IO α)-\u003e (Response -\u003e InputStream ByteString -\u003e IO β)-\u003e IO β",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Place content on the server at the given URL via an HTTP PUT request specifying the content type and function to write the content to the supplied OutputStream You might see put http s3.example.com bucket42 object149 text plain fileBody hello.txt do putStr show Streams.connect stdout",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "put",
        "normalized": "URL-\u003eContentType-\u003e(OutputStream Builder-\u003eIO a)-\u003e(Response-\u003eInputStream ByteString-\u003eIO b)-\u003eIO b",
        "package": "http-streams",
        "partial": "",
        "signature": "URL-\u003eContentType-\u003e(OutputStream Builder-\u003eIO α)-\u003e(Response-\u003eInputStream ByteString-\u003eIO β)-\u003eIO β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:receiveResponse",
      "description": {
        "fct-descr": "\u003cp\u003eHandle the response coming back from the server. This function\n hands control to a handler function you supply, passing you the\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e object with the response headers and an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e\n containing the entity body.\n\u003c/p\u003e\u003cp\u003eFor example, if you just wanted to print the first chunk of the\n content from the server:\n\u003c/p\u003e\u003cpre\u003e     receiveResponse c (\\p i -\u003e do\n         m \u003c- Streams.read i\n         case m of\n             Just bytes -\u003e putStr bytes\n             Nothing    -\u003e return ())\n\u003c/pre\u003e\u003cp\u003eObviously, you can do more sophisticated things with the\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, which is the whole point of having an \u003ccode\u003eio-streams\u003c/code\u003e\n based HTTP client library.\n\u003c/p\u003e\u003cp\u003eThe final value from the handler function is the return value of\n \u003ccode\u003ereceiveResponse\u003c/code\u003e, if you need it.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eUnexpectedCompression\u003c/a\u003e\u003c/code\u003e if it doesn't know how to handle the\n compression format used in the response.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Connection -\u003e (Response -\u003e InputStream ByteString -\u003e IO β) -\u003e IO β",
        "fct-source": "src/Network-Http-Connection.html#receiveResponse",
        "fct-type": "function",
        "title": "receiveResponse"
      },
      "index": {
        "description": "Handle the response coming back from the server This function hands control to handler function you supply passing you the Response object with the response headers and an InputStream containing the entity body For example if you just wanted to print the first chunk of the content from the server receiveResponse do Streams.read case of Just bytes putStr bytes Nothing return Obviously you can do more sophisticated things with the InputStream which is the whole point of having an io-streams based HTTP client library The final value from the handler function is the return value of receiveResponse if you need it Throws UnexpectedCompression if it doesn know how to handle the compression format used in the response",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "receiveResponse",
        "normalized": "Connection-\u003e(Response-\u003eInputStream ByteString-\u003eIO a)-\u003eIO a",
        "package": "http-streams",
        "partial": "Response",
        "signature": "Connection-\u003e(Response-\u003eInputStream ByteString-\u003eIO β)-\u003eIO β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:receiveResponseRaw",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a specialized variant of \u003ccode\u003e\u003ca\u003ereceiveResponse\u003c/a\u003e\u003c/code\u003e that \u003cem\u003eexplicitly\u003c/em\u003e does\n not handle the content encoding of the response body stream (it will not\n decompress anything). Unless you really want the raw gzipped content coming\n down from the server, use \u003ccode\u003ereceiveResponse\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Connection -\u003e (Response -\u003e InputStream ByteString -\u003e IO β) -\u003e IO β",
        "fct-source": "src/Network-Http-Connection.html#receiveResponseRaw",
        "fct-type": "function",
        "title": "receiveResponseRaw"
      },
      "index": {
        "description": "This is specialized variant of receiveResponse that explicitly does not handle the content encoding of the response body stream it will not decompress anything Unless you really want the raw gzipped content coming down from the server use receiveResponse",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "receiveResponseRaw",
        "normalized": "Connection-\u003e(Response-\u003eInputStream ByteString-\u003eIO a)-\u003eIO a",
        "package": "http-streams",
        "partial": "Response Raw",
        "signature": "Connection-\u003e(Response-\u003eInputStream ByteString-\u003eIO β)-\u003eIO β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:sendRequest",
      "description": {
        "fct-descr": "\u003cp\u003eHaving composed a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object with the headers and metadata for\n this connection, you can now send the request to the server, along\n with the entity body, if there is one. For the rather common case of\n HTTP requests like \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e that don't send data, use \u003ccode\u003e\u003ca\u003eemptyBody\u003c/a\u003e\u003c/code\u003e as the\n output stream:\n\u003c/p\u003e\u003cpre\u003e     sendRequest c q emptyBody\n\u003c/pre\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePOST\u003c/a\u003e\u003c/code\u003e requests, you can use \u003ccode\u003e\u003ca\u003efileBody\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003einputStreamBody\u003c/a\u003e\u003c/code\u003e to send content to the server, or you can work with\n the \u003ccode\u003eio-streams\u003c/code\u003e API directly:\n\u003c/p\u003e\u003cpre\u003e     sendRequest c q (\\o -\u003e\n         Streams.write (Just (Builder.fromString \"Hello World\\n\")) o)\n\u003c/pre\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Connection -\u003e Request -\u003e (OutputStream Builder -\u003e IO α) -\u003e IO α",
        "fct-source": "src/Network-Http-Connection.html#sendRequest",
        "fct-type": "function",
        "title": "sendRequest"
      },
      "index": {
        "description": "Having composed Request object with the headers and metadata for this connection you can now send the request to the server along with the entity body if there is one For the rather common case of HTTP requests like GET that don send data use emptyBody as the output stream sendRequest emptyBody For PUT and POST requests you can use fileBody or inputStreamBody to send content to the server or you can work with the io-streams API directly sendRequest Streams.write Just Builder.fromString Hello World",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "sendRequest",
        "normalized": "Connection-\u003eRequest-\u003e(OutputStream Builder-\u003eIO a)-\u003eIO a",
        "package": "http-streams",
        "partial": "Request",
        "signature": "Connection-\u003eRequest-\u003e(OutputStream Builder-\u003eIO α)-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:setAccept",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate the content type you are willing to receive in a reply\n from the server. For more complex \u003ccode\u003eAccept:\u003c/code\u003e headers, use\n \u003ccode\u003e\u003ca\u003esetAccept'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "ByteString -\u003e RequestBuilder ()",
        "fct-type": "function",
        "title": "setAccept"
      },
      "index": {
        "description": "Indicate the content type you are willing to receive in reply from the server For more complex Accept headers use setAccept",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "setAccept",
        "normalized": "ByteString-\u003eRequestBuilder()",
        "package": "http-streams",
        "partial": "Accept",
        "signature": "ByteString-\u003eRequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:setAccept-39-",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate the content types you are willing to receive in a reply\n from the server in order of preference. A call of the form:\n\u003c/p\u003e\u003cpre\u003e         setAccept' [(\"text/html\", 1.0),\n                     (\"application/xml\", 0.8),\n                     (\"*/*\", 0)]\n\u003c/pre\u003e\u003cp\u003ewill result in an \u003ccode\u003eAccept:\u003c/code\u003e header value of\n \u003ccode\u003etext/html; q=1.0, application/xml; q=0.8, */*; q=0.0\u003c/code\u003e as you\n would expect.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "[(ByteString, Float)] -\u003e RequestBuilder ()",
        "fct-type": "function",
        "title": "setAccept'"
      },
      "index": {
        "description": "Indicate the content types you are willing to receive in reply from the server in order of preference call of the form setAccept text html application xml will result in an Accept header value of text html application xml as you would expect",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "setAccept'",
        "normalized": "[(ByteString,Float)]-\u003eRequestBuilder()",
        "package": "http-streams",
        "partial": "Accept'",
        "signature": "[(ByteString,Float)]-\u003eRequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:setAuthorizationBasic",
      "description": {
        "fct-descr": "\u003cp\u003eSet username and password credentials per the HTTP basic\n authentication method.\n\u003c/p\u003e\u003cpre\u003e         setAuthorizationBasic \"Aladdin\" \"open sesame\"\n\u003c/pre\u003e\u003cp\u003ewill result in an \u003ccode\u003eAuthorization:\u003c/code\u003e header value of\n \u003ccode\u003eBasic QWxhZGRpbjpvcGVuIHNlc2FtZQ==\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBasic authentication does \u003cem\u003enot\u003c/em\u003e use a message digest function to\n encipher the password; the above string is only base-64 encoded and\n is thus plain-text visible to any observer on the wire and all\n caches and servers at the other end, making basic authentication\n completely insecure. A number of web services, however, use SSL to\n encrypt the connection that then use HTTP basic authentication to\n validate requests. Keep in mind in these cases the secret is still\n sent to the servers on the other side and passes in clear through\n all layers after the SSL termination. Do \u003cem\u003enot\u003c/em\u003e use basic\n authentication to protect secure or user-originated privacy-sensitve\n information.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "ByteString -\u003e ByteString -\u003e RequestBuilder ()",
        "fct-type": "function",
        "title": "setAuthorizationBasic"
      },
      "index": {
        "description": "Set username and password credentials per the HTTP basic authentication method setAuthorizationBasic Aladdin open sesame will result in an Authorization header value of Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ Basic authentication does not use message digest function to encipher the password the above string is only base-64 encoded and is thus plain-text visible to any observer on the wire and all caches and servers at the other end making basic authentication completely insecure number of web services however use SSL to encrypt the connection that then use HTTP basic authentication to validate requests Keep in mind in these cases the secret is still sent to the servers on the other side and passes in clear through all layers after the SSL termination Do not use basic authentication to protect secure or user-originated privacy-sensitve information",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "setAuthorizationBasic",
        "normalized": "ByteString-\u003eByteString-\u003eRequestBuilder()",
        "package": "http-streams",
        "partial": "Authorization Basic",
        "signature": "ByteString-\u003eByteString-\u003eRequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:setContentLength",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the length of the request body, in bytes.\n\u003c/p\u003e\u003cp\u003eRFC 2616 requires that we either send a \u003ccode\u003eContent-Length\u003c/code\u003e header or\n use \u003ccode\u003eTransfer-Encoding: chunked\u003c/code\u003e. If you know the exact size ahead\n of time, then call this function; the body content will still be\n streamed out by \u003ccode\u003eio-streams\u003c/code\u003e in more-or-less constant space.\n\u003c/p\u003e\u003cp\u003eThis function is special: in a PUT or POST request, \u003ccode\u003ehttp-streams\u003c/code\u003e\n will assume chunked transfer-encoding \u003cem\u003eunless\u003c/em\u003e you specify a content\n length here, in which case you need to ensure your body function\n writes precisely that many bytes.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Int64 -\u003e RequestBuilder ()",
        "fct-type": "function",
        "title": "setContentLength"
      },
      "index": {
        "description": "Specify the length of the request body in bytes RFC requires that we either send Content-Length header or use Transfer-Encoding chunked If you know the exact size ahead of time then call this function the body content will still be streamed out by io-streams in more-or-less constant space This function is special in PUT or POST request http-streams will assume chunked transfer-encoding unless you specify content length here in which case you need to ensure your body function writes precisely that many bytes",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "setContentLength",
        "normalized": "Int-\u003eRequestBuilder()",
        "package": "http-streams",
        "partial": "Content Length",
        "signature": "Int-\u003eRequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:setContentType",
      "description": {
        "fct-descr": "\u003cp\u003eSet the MIME type corresponding to the body of the request you are\n sending. Defaults to \u003ccode\u003e\"text/plain\"\u003c/code\u003e, so usually you need to set\n this if \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003eting.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "ContentType -\u003e RequestBuilder ()",
        "fct-type": "function",
        "title": "setContentType"
      },
      "index": {
        "description": "Set the MIME type corresponding to the body of the request you are sending Defaults to text plain so usually you need to set this if PUT ting",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "setContentType",
        "normalized": "ContentType-\u003eRequestBuilder()",
        "package": "http-streams",
        "partial": "Content Type",
        "signature": "ContentType-\u003eRequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:setExpectContinue",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify that this request should set the expectation that the\n server needs to approve the request before you send it.\n\u003c/p\u003e\u003cp\u003eThis function is special: in a PUT or POST request, \u003ccode\u003ehttp-streams\u003c/code\u003e\n will wait for the server to reply with an HTTP/1.1 100 Continue\n status before sending the entity body. This is handled internally;\n you will get the real response (be it successful 2xx, client error,\n 4xx, or server error 5xx) in \u003ccode\u003ereceiveResponse\u003c/code\u003e. In theory, it\n should be 417 if the expectation failed.\n\u003c/p\u003e\u003cp\u003eOnly bother with this if you know the service you're talking to\n requires clients to send an \u003ccode\u003eExpect: 100-continue\u003c/code\u003e header and will\n handle it properly. Most servers don't do any precondition checking,\n automatically send an intermediate 100 response, and then just read\n the body regardless, making this a bit of a no-op in most cases.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "RequestBuilder ()",
        "fct-type": "function",
        "title": "setExpectContinue"
      },
      "index": {
        "description": "Specify that this request should set the expectation that the server needs to approve the request before you send it This function is special in PUT or POST request http-streams will wait for the server to reply with an HTTP Continue status before sending the entity body This is handled internally you will get the real response be it successful xx client error xx or server error xx in receiveResponse In theory it should be if the expectation failed Only bother with this if you know the service you re talking to requires clients to send an Expect continue header and will handle it properly Most servers don do any precondition checking automatically send an intermediate response and then just read the body regardless making this bit of no-op in most cases",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "setExpectContinue",
        "normalized": "RequestBuilder()",
        "package": "http-streams",
        "partial": "Expect Continue",
        "signature": "RequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:setHeader",
      "description": {
        "fct-descr": "\u003cp\u003eSet a generic header to be sent in the HTTP request. The other\n methods in the RequestBuilder API are expressed in terms of this\n function, but we recommend you use them where offered for their\n stronger types.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "ByteString -\u003e ByteString -\u003e RequestBuilder ()",
        "fct-type": "function",
        "title": "setHeader"
      },
      "index": {
        "description": "Set generic header to be sent in the HTTP request The other methods in the RequestBuilder API are expressed in terms of this function but we recommend you use them where offered for their stronger types",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "setHeader",
        "normalized": "ByteString-\u003eByteString-\u003eRequestBuilder()",
        "package": "http-streams",
        "partial": "Header",
        "signature": "ByteString-\u003eByteString-\u003eRequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:setHostname",
      "description": {
        "fct-descr": "\u003cp\u003eSet the [virtual] hostname for the request. In ordinary conditions\n you won't need to call this, as the \u003ccode\u003eHost:\u003c/code\u003e header is a required\n header in HTTP 1.1 and is set directly from the name of the server\n you connected to when calling \u003ccode\u003e\u003ca\u003eopenConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "Hostname -\u003e Port -\u003e RequestBuilder ()",
        "fct-type": "function",
        "title": "setHostname"
      },
      "index": {
        "description": "Set the virtual hostname for the request In ordinary conditions you won need to call this as the Host header is required header in HTTP and is set directly from the name of the server you connected to when calling openConnection",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "setHostname",
        "normalized": "Hostname-\u003ePort-\u003eRequestBuilder()",
        "package": "http-streams",
        "partial": "Hostname",
        "signature": "Hostname-\u003ePort-\u003eRequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:setTransferEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eOverride the default setting about how the entity body will be sent.\n\u003c/p\u003e\u003cp\u003eThis function is special: this explicitly sets the \u003ccode\u003eTransfer-Encoding:\u003c/code\u003e\n header to \u003ccode\u003echunked\u003c/code\u003e and will instruct the library to actually tranfer the\n body as a stream (\u003ca\u003echunked transfer encoding\u003c/a\u003e). See \u003ccode\u003e\u003ca\u003esetContentLength\u003c/a\u003e\u003c/code\u003e for\n forcing the opposite. You \u003cem\u003ereally\u003c/em\u003e won't need this in normal operation, but\n some people are control freaks.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "RequestBuilder ()",
        "fct-type": "function",
        "title": "setTransferEncoding"
      },
      "index": {
        "description": "Override the default setting about how the entity body will be sent This function is special this explicitly sets the Transfer-Encoding header to chunked and will instruct the library to actually tranfer the body as stream chunked transfer encoding See setContentLength for forcing the opposite You really won need this in normal operation but some people are control freaks",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "setTransferEncoding",
        "normalized": "RequestBuilder()",
        "package": "http-streams",
        "partial": "Transfer Encoding",
        "signature": "RequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-streams/docs/Network-Http-Client.html#v:withConnection",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an \u003ccode\u003eIO\u003c/code\u003e action producing a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e, and a computation\n that needs one, runs the computation, cleaning up the\n \u003ccode\u003eConnection\u003c/code\u003e afterwards.\n\u003c/p\u003e\u003cpre\u003e     x \u003c- withConnection (openConnection \"s3.example.com\" 80) $ (\\c -\u003e do\n         q \u003c- buildRequest $ do\n             http GET \"/bucket42/object/149\"\n         sendRequest c q emptyBody\n         ...\n         return \"blah\")\n\u003c/pre\u003e\u003cp\u003ewhich can make the code making an HTTP request a lot more\n straight-forward.\n\u003c/p\u003e\u003cp\u003eWraps \u003ccode\u003eControl.Exception\u003c/code\u003e's \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Http.Client",
        "fct-package": "http-streams",
        "fct-signature": "IO Connection -\u003e (Connection -\u003e IO γ) -\u003e IO γ",
        "fct-source": "src/Network-Http-Connection.html#withConnection",
        "fct-type": "function",
        "title": "withConnection"
      },
      "index": {
        "description": "Given an IO action producing Connection and computation that needs one runs the computation cleaning up the Connection afterwards withConnection openConnection s3.example.com do buildRequest do http GET bucket42 object sendRequest emptyBody return blah which can make the code making an HTTP request lot more straight-forward Wraps Control.Exception bracket",
        "hierarchy": "Network Http Client",
        "module": "Network.Http.Client",
        "name": "withConnection",
        "normalized": "IO Connection-\u003e(Connection-\u003eIO a)-\u003eIO a",
        "package": "http-streams",
        "partial": "Connection",
        "signature": "IO Connection-\u003e(Connection-\u003eIO γ)-\u003eIO γ"
      }
    }
  }
]