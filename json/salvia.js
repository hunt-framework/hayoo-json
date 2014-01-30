[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Banner.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Banner",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Banner.html",
        "fct-type": "module",
        "title": "Banner"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Banner",
        "module": "Network.Salvia.Handler.Banner",
        "name": "Banner",
        "normalized": "",
        "package": "salvia",
        "partial": "Banner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Banner.html#v:hBanner",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehBanner\u003c/a\u003e\u003c/code\u003e handler adds the current date-/timestamp and a custom server name\nto the response headers.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Banner",
        "fct-package": "salvia",
        "fct-signature": "String-\u003e m ()",
        "fct-type": "function",
        "title": "hBanner"
      },
      "index": {
        "description": "The hBanner handler adds the current date timestamp and custom server name to the response headers",
        "hierarchy": "Network Salvia Handler Banner",
        "module": "Network.Salvia.Handler.Banner",
        "name": "hBanner",
        "normalized": "String-\u003ea()",
        "package": "salvia",
        "partial": "Banner",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Body.html",
        "fct-type": "module",
        "title": "Body"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "Body",
        "normalized": "",
        "package": "salvia",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hBodyStringUTF8",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but decodes it as UTF-8 to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "dir -\u003e m String",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hBodyStringUTF8",
        "fct-type": "function",
        "title": "hBodyStringUTF8"
      },
      "index": {
        "description": "Like the hRawBody but decodes it as UTF-8 to String",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hBodyStringUTF8",
        "normalized": "a-\u003eb String",
        "package": "salvia",
        "partial": "Body String UTF",
        "signature": "dir-\u003em String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hBodyText",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but is will handle proper decoding based on the charset\npart of the \u003ccode\u003e\u003ca\u003econtentType\u003c/a\u003e\u003c/code\u003e header line. When a valid encoding is found in the\n\u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e message it will be decoded with using the encodings package. The default\nencoding supplied as the function's argument can be used to specify what\nencoding to use in the absence of a proper encoding in the HTTP message itself.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "dir -\u003e String -\u003e m Text",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hBodyText",
        "fct-type": "function",
        "title": "hBodyText"
      },
      "index": {
        "description": "Like the hRawBody but is will handle proper decoding based on the charset part of the contentType header line When valid encoding is found in the Http message it will be decoded with using the encodings package The default encoding supplied as the function argument can be used to specify what encoding to use in the absence of proper encoding in the HTTP message itself",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hBodyText",
        "normalized": "a-\u003eString-\u003eb Text",
        "package": "salvia",
        "partial": "Body Text",
        "signature": "dir-\u003eString-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hParameters",
      "description": {
        "fct-descr": "\u003cp\u003eTry to parse the message body, as a result of \u003ccode\u003e\u003ca\u003ehBodyText\u003c/a\u003e\u003c/code\u003e, as URI encoded \u003ccode\u003e\u003ca\u003ePOST\u003c/a\u003e\u003c/code\u003e\nparameters. Returns as a URI \u003ccode\u003eParameter\u003c/code\u003e type or nothing when parsing fails.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "d -\u003e String -\u003e m Parameters",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hParameters",
        "fct-type": "function",
        "title": "hParameters"
      },
      "index": {
        "description": "Try to parse the message body as result of hBodyText as URI encoded POST parameters Returns as URI Parameter type or nothing when parsing fails",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hParameters",
        "normalized": "a-\u003eString-\u003eb Parameters",
        "package": "salvia",
        "partial": "Parameters",
        "signature": "d-\u003eString-\u003em Parameters"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRawBody",
      "description": {
        "fct-descr": "\u003cp\u003eFirst (possibly naive) handler to retreive the client request or server\nresponse body as a raw lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. This probably does not handle all\nthe quirks that the HTTP protocol specifies, but it does the job for now. When\na \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e header field is available only this fixed number of bytes\nwill read from the socket.  When neither the \u003ccode\u003e\u003ca\u003ekeepAlive\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e\nheader fields are available the entire payload of the request will be read from\nthe socket. The function is parametrized with a the direction of the HTTP\nmessage, client request or server response.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "d -\u003e m ByteString",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRawBody",
        "fct-type": "function",
        "title": "hRawBody"
      },
      "index": {
        "description": "First possibly naive handler to retreive the client request or server response body as raw lazy ByteString This probably does not handle all the quirks that the HTTP protocol specifies but it does the job for now When contentLength header field is available only this fixed number of bytes will read from the socket When neither the keepAlive and contentLength header fields are available the entire payload of the request will be read from the socket The function is parametrized with the direction of the HTTP message client request or server response",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hRawBody",
        "normalized": "a-\u003eb ByteString",
        "package": "salvia",
        "partial": "Raw Body",
        "signature": "d-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRawRequestBody",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "m ByteString",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRawRequestBody",
        "fct-type": "function",
        "title": "hRawRequestBody"
      },
      "index": {
        "description": "Like hRawBody but specifically for Http Request",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hRawRequestBody",
        "normalized": "",
        "package": "salvia",
        "partial": "Raw Request Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRawResponseBody",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "m ByteString",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRawResponseBody",
        "fct-type": "function",
        "title": "hRawResponseBody"
      },
      "index": {
        "description": "Like hRawBody but specifically for Http Request",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hRawResponseBody",
        "normalized": "",
        "package": "salvia",
        "partial": "Raw Response Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRequestBodyStringUTF8",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyStringUTF8\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "m String",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRequestBodyStringUTF8",
        "fct-type": "function",
        "title": "hRequestBodyStringUTF8"
      },
      "index": {
        "description": "Like hBodyStringUTF8 but specifically for Http Request",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hRequestBodyStringUTF8",
        "normalized": "",
        "package": "salvia",
        "partial": "Request Body String UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRequestBodyText",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyText\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m Text",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRequestBodyText",
        "fct-type": "function",
        "title": "hRequestBodyText"
      },
      "index": {
        "description": "Like hBodyText but specifically for Http Request",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hRequestBodyText",
        "normalized": "String-\u003ea Text",
        "package": "salvia",
        "partial": "Request Body Text",
        "signature": "String-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRequestParameters",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehParameters\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m Parameters",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRequestParameters",
        "fct-type": "function",
        "title": "hRequestParameters"
      },
      "index": {
        "description": "Like hParameters but specifically for HTTP Request",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hRequestParameters",
        "normalized": "String-\u003ea Parameters",
        "package": "salvia",
        "partial": "Request Parameters",
        "signature": "String-\u003em Parameters"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hResponseBodyStringUTF8",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyStringUTF8\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "m String",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hResponseBodyStringUTF8",
        "fct-type": "function",
        "title": "hResponseBodyStringUTF8"
      },
      "index": {
        "description": "Like hBodyStringUTF8 but specifically for Http Response",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hResponseBodyStringUTF8",
        "normalized": "",
        "package": "salvia",
        "partial": "Response Body String UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hResponseBodyText",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyText\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m Text",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hResponseBodyText",
        "fct-type": "function",
        "title": "hResponseBodyText"
      },
      "index": {
        "description": "Like hBodyText but specifically for Http Response",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hResponseBodyText",
        "normalized": "String-\u003ea Text",
        "package": "salvia",
        "partial": "Response Body Text",
        "signature": "String-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hResponseParameters",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehParameters\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Body",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m Parameters",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hResponseParameters",
        "fct-type": "function",
        "title": "hResponseParameters"
      },
      "index": {
        "description": "Like hParameters but specifically for HTTP Response",
        "hierarchy": "Network Salvia Handler Body",
        "module": "Network.Salvia.Handler.Body",
        "name": "hResponseParameters",
        "normalized": "String-\u003ea Parameters",
        "package": "salvia",
        "partial": "Response Parameters",
        "signature": "String-\u003em Parameters"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-CGI.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.CGI",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-CGI.html",
        "fct-type": "module",
        "title": "CGI"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler CGI",
        "module": "Network.Salvia.Handler.CGI",
        "name": "CGI",
        "normalized": "",
        "package": "salvia",
        "partial": "CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-CGI.html#v:hCGI",
      "description": {
        "fct-descr": "\u003cp\u003eHandler to run CGI scripts.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.CGI",
        "fct-package": "salvia",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-CGI.html#hCGI",
        "fct-type": "function",
        "title": "hCGI"
      },
      "index": {
        "description": "Handler to run CGI scripts",
        "hierarchy": "Network Salvia Handler CGI",
        "module": "Network.Salvia.Handler.CGI",
        "name": "hCGI",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "CGI",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Close.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Close",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Close.html",
        "fct-type": "module",
        "title": "Close"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Close",
        "module": "Network.Salvia.Handler.Close",
        "name": "Close",
        "normalized": "",
        "package": "salvia",
        "partial": "Close",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Close.html#v:emptyQueue",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty the send queue.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Close",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Close.html#emptyQueue",
        "fct-type": "function",
        "title": "emptyQueue"
      },
      "index": {
        "description": "Empty the send queue",
        "hierarchy": "Network Salvia Handler Close",
        "module": "Network.Salvia.Handler.Close",
        "name": "emptyQueue",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Queue",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Close.html#v:hCloseConn",
      "description": {
        "fct-descr": "\u003cp\u003eRun a handler once and close the connection afterwards.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Close",
        "fct-package": "salvia",
        "fct-signature": "m a -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Close.html#hCloseConn",
        "fct-type": "function",
        "title": "hCloseConn"
      },
      "index": {
        "description": "Run handler once and close the connection afterwards",
        "hierarchy": "Network Salvia Handler Close",
        "module": "Network.Salvia.Handler.Close",
        "name": "hCloseConn",
        "normalized": "a b-\u003ea()",
        "package": "salvia",
        "partial": "Close Conn",
        "signature": "m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Close.html#v:hKeepAlive",
      "description": {
        "fct-descr": "\u003cp\u003eRun a handler and keep the connection open for potential consecutive requests.\nThe connection will only be closed after a request finished and one or more of\nthe following criteria are met:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e There is no \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e set in the response headers. When this is the\n  case the connection cannot be kept alive.\n\u003c/li\u003e\u003cli\u003e The client has set the \u003ccode\u003e\u003ca\u003econnection\u003c/a\u003e\u003c/code\u003e header field to \u003ccode\u003eclose\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The connection has already been closed, possible due to IO errors.\n\u003c/li\u003e\u003cli\u003e The HTTP version is HTTP/1.0.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Salvia.Handler.Close",
        "fct-package": "salvia",
        "fct-signature": "m a -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Close.html#hKeepAlive",
        "fct-type": "function",
        "title": "hKeepAlive"
      },
      "index": {
        "description": "Run handler and keep the connection open for potential consecutive requests The connection will only be closed after request finished and one or more of the following criteria are met There is no contentLength set in the response headers When this is the case the connection cannot be kept alive The client has set the connection header field to close The connection has already been closed possible due to IO errors The HTTP version is HTTP",
        "hierarchy": "Network Salvia Handler Close",
        "module": "Network.Salvia.Handler.Close",
        "name": "hKeepAlive",
        "normalized": "a b-\u003ea()",
        "package": "salvia",
        "partial": "Keep Alive",
        "signature": "m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Cookie",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Cookie.html",
        "fct-type": "module",
        "title": "Cookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Cookie",
        "module": "Network.Salvia.Handler.Cookie",
        "name": "Cookie",
        "normalized": "",
        "package": "salvia",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hCookie",
      "description": {
        "fct-descr": "\u003cp\u003eTry to get the cookies from the HTTP \u003ccode\u003e\u003ca\u003ecookie\u003c/a\u003e\u003c/code\u003e request header. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Cookie",
        "fct-package": "salvia",
        "fct-signature": "m (Maybe Cookies)",
        "fct-source": "src/Network-Salvia-Handler-Cookie.html#hCookie",
        "fct-type": "function",
        "title": "hCookie"
      },
      "index": {
        "description": "Try to get the cookies from the HTTP cookie request header",
        "hierarchy": "Network Salvia Handler Cookie",
        "module": "Network.Salvia.Handler.Cookie",
        "name": "hCookie",
        "normalized": "",
        "package": "salvia",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hDelCookie",
      "description": {
        "fct-descr": "\u003cp\u003eDelete one cookie by removing it from the `Set-Cookie' header. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Cookie",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Cookie.html#hDelCookie",
        "fct-type": "function",
        "title": "hDelCookie"
      },
      "index": {
        "description": "Delete one cookie by removing it from the Set-Cookie header",
        "hierarchy": "Network Salvia Handler Cookie",
        "module": "Network.Salvia.Handler.Cookie",
        "name": "hDelCookie",
        "normalized": "String-\u003ea()",
        "package": "salvia",
        "partial": "Del Cookie",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hNewCookie",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient method for creating cookies that expire in the near future and are\nbound to the domain and port this server runs on. The path will be locked to\nroot. If the second argument is set, the cookie will be valid for all\nsubdomains.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Cookie",
        "fct-package": "salvia",
        "fct-signature": "t -\u003e Bool -\u003e m Cookie",
        "fct-source": "src/Network-Salvia-Handler-Cookie.html#hNewCookie",
        "fct-type": "function",
        "title": "hNewCookie"
      },
      "index": {
        "description": "Convenient method for creating cookies that expire in the near future and are bound to the domain and port this server runs on The path will be locked to root If the second argument is set the cookie will be valid for all subdomains",
        "hierarchy": "Network Salvia Handler Cookie",
        "module": "Network.Salvia.Handler.Cookie",
        "name": "hNewCookie",
        "normalized": "a-\u003eBool-\u003eb Cookie",
        "package": "salvia",
        "partial": "New Cookie",
        "signature": "t-\u003eBool-\u003em Cookie"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hSetCookie",
      "description": {
        "fct-descr": "\u003cp\u003eSet the `Set-Cookie` HTTP response header with the specified \u003ccode\u003e\u003ca\u003eCookies\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Cookie",
        "fct-package": "salvia",
        "fct-signature": "Cookies -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Cookie.html#hSetCookie",
        "fct-type": "function",
        "title": "hSetCookie"
      },
      "index": {
        "description": "Set the Set-Cookie HTTP response header with the specified Cookies",
        "hierarchy": "Network Salvia Handler Cookie",
        "module": "Network.Salvia.Handler.Cookie",
        "name": "hSetCookie",
        "normalized": "Cookies-\u003ea()",
        "package": "salvia",
        "partial": "Set Cookie",
        "signature": "Cookies-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Directory.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRendering of HTML directory listings. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Salvia.Handler.Directory",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Directory.html",
        "fct-type": "module",
        "title": "Directory"
      },
      "index": {
        "description": "Rendering of HTML directory listings",
        "hierarchy": "Network Salvia Handler Directory",
        "module": "Network.Salvia.Handler.Directory",
        "name": "Directory",
        "normalized": "",
        "package": "salvia",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Directory.html#v:hDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehDirectoryResource\u003c/a\u003e\u003c/code\u003e but uses the path from the current request URI.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Directory",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Directory.html#hDirectory",
        "fct-type": "function",
        "title": "hDirectory"
      },
      "index": {
        "description": "Like hDirectoryResource but uses the path from the current request URI",
        "hierarchy": "Network Salvia Handler Directory",
        "module": "Network.Salvia.Handler.Directory",
        "name": "hDirectory",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Directory",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Directory.html#v:hDirectoryResource",
      "description": {
        "fct-descr": "\u003cp\u003eServe a simple HTML directory listing for the specified directory on the\nfilesystem.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Directory",
        "fct-package": "salvia",
        "fct-signature": "FilePath-\u003e m ()",
        "fct-type": "function",
        "title": "hDirectoryResource"
      },
      "index": {
        "description": "Serve simple HTML directory listing for the specified directory on the filesystem",
        "hierarchy": "Network Salvia Handler Directory",
        "module": "Network.Salvia.Handler.Directory",
        "name": "hDirectoryResource",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "Directory Resource",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Dispatching",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html",
        "fct-type": "module",
        "title": "Dispatching"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Dispatching",
        "module": "Network.Salvia.Handler.Dispatching",
        "name": "Dispatching",
        "normalized": "",
        "package": "salvia",
        "partial": "Dispatching",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#t:Dispatcher",
      "description": {
        "fct-descr": "\u003cp\u003eThe dispatcher type takes one value to dispatch on and two handlers. The first\nhandler will be used when the predicate on the dispatch value returned \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nthe second (default) handler will be used when the predicate returs\n\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Dispatching",
        "fct-package": "salvia",
        "fct-signature": "type",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#Dispatcher",
        "fct-type": "type",
        "title": "Dispatcher"
      },
      "index": {
        "description": "The dispatcher type takes one value to dispatch on and two handlers The first handler will be used when the predicate on the dispatch value returned True the second default handler will be used when the predicate returs False",
        "hierarchy": "Network Salvia Handler Dispatching",
        "module": "Network.Salvia.Handler.Dispatching",
        "name": "Dispatcher",
        "normalized": "",
        "package": "salvia",
        "partial": "Dispatcher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#t:ListDispatcher",
      "description": {
        "fct-descr": "\u003cp\u003eA list dispatcher takes a mapping from dispatch values to handlers and one\ndefault fallback handler.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Dispatching",
        "fct-package": "salvia",
        "fct-signature": "type",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#ListDispatcher",
        "fct-type": "type",
        "title": "ListDispatcher"
      },
      "index": {
        "description": "list dispatcher takes mapping from dispatch values to handlers and one default fallback handler",
        "hierarchy": "Network Salvia Handler Dispatching",
        "module": "Network.Salvia.Handler.Dispatching",
        "name": "ListDispatcher",
        "normalized": "",
        "package": "salvia",
        "partial": "List Dispatcher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hDispatch",
      "description": {
        "fct-descr": "\u003cp\u003eDispatch on an arbitrary part of the context using an arbitrary predicate. When\nthe predicate returns true on the value selected with the \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e the first\nhandler will be invoked, otherwise the second handler will be used.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Dispatching",
        "fct-package": "salvia",
        "fct-signature": "d -\u003e (Http d :-\u003e b) -\u003e (c -\u003e b -\u003e Bool) -\u003e Dispatcher c m a",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#hDispatch",
        "fct-type": "function",
        "title": "hDispatch"
      },
      "index": {
        "description": "Dispatch on an arbitrary part of the context using an arbitrary predicate When the predicate returns true on the value selected with the Label the first handler will be invoked otherwise the second handler will be used",
        "hierarchy": "Network Salvia Handler Dispatching",
        "module": "Network.Salvia.Handler.Dispatching",
        "name": "hDispatch",
        "normalized": "a-\u003e(Http a-\u003eb)-\u003e(c-\u003eb-\u003eBool)-\u003eDispatcher c d e",
        "package": "salvia",
        "partial": "Dispatch",
        "signature": "d-\u003e(Http d-\u003eb)-\u003e(c-\u003eb-\u003eBool)-\u003eDispatcher c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hListDispatch",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a dispatcher function into a list dispatcher. This enables handler\nrouting based on arbitrary values from the context. When non of the predicates\nin the \u003ccode\u003e\u003ca\u003eListDispatcher\u003c/a\u003e\u003c/code\u003e type hold the default handler will be invoked.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Dispatching",
        "fct-package": "salvia",
        "fct-signature": "Dispatcher a m b -\u003e ListDispatcher a m b",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#hListDispatch",
        "fct-type": "function",
        "title": "hListDispatch"
      },
      "index": {
        "description": "Turns dispatcher function into list dispatcher This enables handler routing based on arbitrary values from the context When non of the predicates in the ListDispatcher type hold the default handler will be invoked",
        "hierarchy": "Network Salvia Handler Dispatching",
        "module": "Network.Salvia.Handler.Dispatching",
        "name": "hListDispatch",
        "normalized": "Dispatcher a b c-\u003eListDispatcher a b c",
        "package": "salvia",
        "partial": "List Dispatch",
        "signature": "Dispatcher a m b-\u003eListDispatcher a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hRequestDispatch",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehDispatch\u003c/a\u003e\u003c/code\u003e but always dispatches on a (part of) the `HTTP\nRequest' part of the context.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Dispatching",
        "fct-package": "salvia",
        "fct-signature": "(Http Request :-\u003e b) -\u003e (t -\u003e b -\u003e Bool) -\u003e Dispatcher t m c",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#hRequestDispatch",
        "fct-type": "function",
        "title": "hRequestDispatch"
      },
      "index": {
        "description": "Like the hDispatch but always dispatches on part of the HTTP Request part of the context",
        "hierarchy": "Network Salvia Handler Dispatching",
        "module": "Network.Salvia.Handler.Dispatching",
        "name": "hRequestDispatch",
        "normalized": "(Http Request-\u003ea)-\u003e(b-\u003ea-\u003eBool)-\u003eDispatcher b c d",
        "package": "salvia",
        "partial": "Request Dispatch",
        "signature": "(Http Request-\u003eb)-\u003e(t-\u003eb-\u003eBool)-\u003eDispatcher t m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hResponseDispatch",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehDispatch\u003c/a\u003e\u003c/code\u003e but always dispatches on a (part of) the `HTTP\nResponse' part of the context.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Dispatching",
        "fct-package": "salvia",
        "fct-signature": "(Http Response :-\u003e b) -\u003e (t -\u003e b -\u003e Bool) -\u003e Dispatcher t m c",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#hResponseDispatch",
        "fct-type": "function",
        "title": "hResponseDispatch"
      },
      "index": {
        "description": "Like the hDispatch but always dispatches on part of the HTTP Response part of the context",
        "hierarchy": "Network Salvia Handler Dispatching",
        "module": "Network.Salvia.Handler.Dispatching",
        "name": "hResponseDispatch",
        "normalized": "(Http Response-\u003ea)-\u003e(b-\u003ea-\u003eBool)-\u003eDispatcher b c d",
        "package": "salvia",
        "partial": "Response Dispatch",
        "signature": "(Http Response-\u003eb)-\u003e(t-\u003eb-\u003eBool)-\u003eDispatcher t m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Environment.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Environment",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Environment.html",
        "fct-type": "module",
        "title": "Environment"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Environment",
        "module": "Network.Salvia.Handler.Environment",
        "name": "Environment",
        "normalized": "",
        "package": "salvia",
        "partial": "Environment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Environment.html#v:hDefaultEnv",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the default handler environment. It takes care of request parsing\n(\u003ccode\u003e\u003ca\u003ehRequestParser\u003c/a\u003e\u003c/code\u003e), response printing (\u003ccode\u003e\u003ca\u003ehResponsePrinter\u003c/a\u003e\u003c/code\u003e), connection\nkeep-alives (\u003ccode\u003e\u003ca\u003ehKeepAlive\u003c/a\u003e\u003c/code\u003e), handling \u003ccode\u003e\u003ca\u003eHEAD\u003c/a\u003e\u003c/code\u003e requests (\u003ccode\u003e\u003ca\u003ehHead\u003c/a\u003e\u003c/code\u003e) and printing the\n`salvia-httpd` server banner (\u003ccode\u003e\u003ca\u003ehBanner\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Environment",
        "fct-package": "salvia",
        "fct-signature": "m ()-\u003e m ()",
        "fct-type": "function",
        "title": "hDefaultEnv"
      },
      "index": {
        "description": "This is the default handler environment It takes care of request parsing hRequestParser response printing hResponsePrinter connection keep-alives hKeepAlive handling HEAD requests hHead and printing the salvia-httpd server banner hBanner",
        "hierarchy": "Network Salvia Handler Environment",
        "module": "Network.Salvia.Handler.Environment",
        "name": "hDefaultEnv",
        "normalized": "a()-\u003ea()",
        "package": "salvia",
        "partial": "Default Env",
        "signature": "m()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Environment.html#v:hEnvNoKeepAlive",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehDefaultEnv\u003c/a\u003e\u003c/code\u003e but only serves one request per connection.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Environment",
        "fct-package": "salvia",
        "fct-signature": "m ()-\u003e m ()",
        "fct-type": "function",
        "title": "hEnvNoKeepAlive"
      },
      "index": {
        "description": "Like hDefaultEnv but only serves one request per connection",
        "hierarchy": "Network Salvia Handler Environment",
        "module": "Network.Salvia.Handler.Environment",
        "name": "hEnvNoKeepAlive",
        "normalized": "a()-\u003ea()",
        "package": "salvia",
        "partial": "Env No Keep Alive",
        "signature": "m()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Error",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Error",
        "module": "Network.Salvia.Handler.Error",
        "name": "Error",
        "normalized": "",
        "package": "salvia",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:catchIO",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function to easily catch IO errors.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Error",
        "fct-package": "salvia",
        "fct-signature": "IO a -\u003e a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Error.html#catchIO",
        "fct-type": "function",
        "title": "catchIO"
      },
      "index": {
        "description": "Utility function to easily catch IO errors",
        "hierarchy": "Network Salvia Handler Error",
        "module": "Network.Salvia.Handler.Error",
        "name": "catchIO",
        "normalized": "IO a-\u003ea-\u003eb a",
        "package": "salvia",
        "partial": "IO",
        "signature": "IO a-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hCustomError",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehError\u003c/a\u003e\u003c/code\u003e but with a custom error message.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Error",
        "fct-package": "salvia",
        "fct-signature": "Status -\u003e String -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Error.html#hCustomError",
        "fct-type": "function",
        "title": "hCustomError"
      },
      "index": {
        "description": "Like hError but with custom error message",
        "hierarchy": "Network Salvia Handler Error",
        "module": "Network.Salvia.Handler.Error",
        "name": "hCustomError",
        "normalized": "Status-\u003eString-\u003ea()",
        "package": "salvia",
        "partial": "Custom Error",
        "signature": "Status-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hError",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehError\u003c/a\u003e\u003c/code\u003e handler enables the creation of a default style of error\n responses for the specified HTTP \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e code.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Error",
        "fct-package": "salvia",
        "fct-signature": "Status -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Error.html#hError",
        "fct-type": "function",
        "title": "hError"
      },
      "index": {
        "description": "The hError handler enables the creation of default style of error responses for the specified HTTP Status code",
        "hierarchy": "Network Salvia Handler Error",
        "module": "Network.Salvia.Handler.Error",
        "name": "hError",
        "normalized": "Status-\u003ea()",
        "package": "salvia",
        "partial": "Error",
        "signature": "Status-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hIOError",
      "description": {
        "fct-descr": "\u003cp\u003eMap an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e to a default style error response.\n\u003c/p\u003e\u003cp\u003eThe mapping from an IO error to an error response is rather straightforward:\n\u003c/p\u003e\u003cpre\u003e  | isDoesNotExistError e = hError NotFound\n  | isAlreadyInUseError e = hError ServiceUnavailable\n  | isPermissionError   e = hError Forbidden\n  | True                  = hError InternalServerError\n\u003c/pre\u003e",
        "fct-module": "Network.Salvia.Handler.Error",
        "fct-package": "salvia",
        "fct-signature": "IOError -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Error.html#hIOError",
        "fct-type": "function",
        "title": "hIOError"
      },
      "index": {
        "description": "Map an IOError to default style error response The mapping from an IO error to an error response is rather straightforward isDoesNotExistError hError NotFound isAlreadyInUseError hError ServiceUnavailable isPermissionError hError Forbidden True hError InternalServerError",
        "hierarchy": "Network Salvia Handler Error",
        "module": "Network.Salvia.Handler.Error",
        "name": "hIOError",
        "normalized": "IOError-\u003ea()",
        "package": "salvia",
        "partial": "IOError",
        "signature": "IOError-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hSafeIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an handler with the result of an IO action. When the IO actions\n fails a default error handler will be executed.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Error",
        "fct-package": "salvia",
        "fct-signature": "IO a -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Error.html#hSafeIO",
        "fct-type": "function",
        "title": "hSafeIO"
      },
      "index": {
        "description": "Execute an handler with the result of an IO action When the IO actions fails default error handler will be executed",
        "hierarchy": "Network Salvia Handler Error",
        "module": "Network.Salvia.Handler.Error",
        "name": "hSafeIO",
        "normalized": "IO a-\u003e(a-\u003eb())-\u003eb()",
        "package": "salvia",
        "partial": "Safe IO",
        "signature": "IO a-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Extension.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Extension",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Extension.html",
        "fct-type": "module",
        "title": "Extension"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Extension",
        "module": "Network.Salvia.Handler.Extension",
        "name": "Extension",
        "normalized": "",
        "package": "salvia",
        "partial": "Extension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Extension.html#v:hExtension",
      "description": {
        "fct-descr": "\u003cp\u003eRequest dispatcher based on the request path file extenstion. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Extension",
        "fct-package": "salvia",
        "fct-signature": "Dispatcher (Maybe String) m a",
        "fct-source": "src/Network-Salvia-Handler-Extension.html#hExtension",
        "fct-type": "function",
        "title": "hExtension"
      },
      "index": {
        "description": "Request dispatcher based on the request path file extenstion",
        "hierarchy": "Network Salvia Handler Extension",
        "module": "Network.Salvia.Handler.Extension",
        "name": "hExtension",
        "normalized": "",
        "package": "salvia",
        "partial": "Extension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Extension.html#v:hExtensionRouter",
      "description": {
        "fct-descr": "\u003cp\u003eList dispatcher version of \u003ccode\u003e\u003ca\u003ehExtension\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Extension",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher (Maybe String) m a",
        "fct-source": "src/Network-Salvia-Handler-Extension.html#hExtensionRouter",
        "fct-type": "function",
        "title": "hExtensionRouter"
      },
      "index": {
        "description": "List dispatcher version of hExtension",
        "hierarchy": "Network Salvia Handler Extension",
        "module": "Network.Salvia.Handler.Extension",
        "name": "hExtensionRouter",
        "normalized": "",
        "package": "salvia",
        "partial": "Extension Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.File",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-File.html",
        "fct-type": "module",
        "title": "File"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler File",
        "module": "Network.Salvia.Handler.File",
        "name": "File",
        "normalized": "",
        "package": "salvia",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:fileMime",
      "description": {
        "fct-module": "Network.Salvia.Handler.File",
        "fct-package": "salvia",
        "fct-signature": "FilePath -\u003e Mime",
        "fct-source": "src/Network-Salvia-Handler-File.html#fileMime",
        "fct-type": "function",
        "title": "fileMime"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler File",
        "module": "Network.Salvia.Handler.File",
        "name": "fileMime",
        "normalized": "FilePath-\u003eMime",
        "package": "salvia",
        "partial": "Mime",
        "signature": "FilePath-\u003eMime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFileResource\u003c/a\u003e\u003c/code\u003e but uses the path of the current request URI.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.File",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-File.html#hFile",
        "fct-type": "function",
        "title": "hFile"
      },
      "index": {
        "description": "Like hFileResource but uses the path of the current request URI",
        "hierarchy": "Network Salvia Handler File",
        "module": "Network.Salvia.Handler.File",
        "name": "hFile",
        "normalized": "a()",
        "package": "salvia",
        "partial": "File",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFileFilter",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFileResourceFilter\u003c/a\u003e\u003c/code\u003e but uses the path of the current request URI.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.File",
        "fct-package": "salvia",
        "fct-signature": "(String -\u003e String) -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-File.html#hFileFilter",
        "fct-type": "function",
        "title": "hFileFilter"
      },
      "index": {
        "description": "Like hFileResourceFilter but uses the path of the current request URI",
        "hierarchy": "Network Salvia Handler File",
        "module": "Network.Salvia.Handler.File",
        "name": "hFileFilter",
        "normalized": "(String-\u003eString)-\u003ea()",
        "package": "salvia",
        "partial": "File Filter",
        "signature": "(String-\u003eString)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFileResource",
      "description": {
        "fct-descr": "\u003cp\u003eServe a file from the filesystem indicated by the specified filepath. When\nthere is some kind of \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e the \u003ccode\u003e\u003ca\u003ehSafeIO\u003c/a\u003e\u003c/code\u003e function will be used to produce a\ncorresponding error response. The \u003ccode\u003e\u003ca\u003econtentType\u003c/a\u003e\u003c/code\u003e will be the mime-type based on\nthe filename extension using the \u003ccode\u003e\u003ca\u003emimetype\u003c/a\u003e\u003c/code\u003e function. The \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e will\nbe set the file's size.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.File",
        "fct-package": "salvia",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-File.html#hFileResource",
        "fct-type": "function",
        "title": "hFileResource"
      },
      "index": {
        "description": "Serve file from the filesystem indicated by the specified filepath When there is some kind of IOError the hSafeIO function will be used to produce corresponding error response The contentType will be the mime-type based on the filename extension using the mimetype function The contentLength will be set the file size",
        "hierarchy": "Network Salvia Handler File",
        "module": "Network.Salvia.Handler.File",
        "name": "hFileResource",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "File Resource",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFileResourceFilter",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehFileResource\u003c/a\u003e\u003c/code\u003e handler, but with a custom filter over the content.\nThis function will assume the content is an UTF-8 encoded text file. Because of\nthe possibly unpredictable behavior of the filter, no \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e header\nwill be set using this handler.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.File",
        "fct-package": "salvia",
        "fct-signature": "(String -\u003e String) -\u003e FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-File.html#hFileResourceFilter",
        "fct-type": "function",
        "title": "hFileResourceFilter"
      },
      "index": {
        "description": "Like the hFileResource handler but with custom filter over the content This function will assume the content is an UTF-8 encoded text file Because of the possibly unpredictable behavior of the filter no contentLength header will be set using this handler",
        "hierarchy": "Network Salvia Handler File",
        "module": "Network.Salvia.Handler.File",
        "name": "hFileResourceFilter",
        "normalized": "(String-\u003eString)-\u003eFilePath-\u003ea()",
        "package": "salvia",
        "partial": "File Resource Filter",
        "signature": "(String-\u003eString)-\u003eFilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hResource",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a handler that is parametrized by a file resources into a regular handler\nthat utilizes the path part of the request URI as the resource identifier.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.File",
        "fct-package": "salvia",
        "fct-signature": "(FilePath -\u003e m a) -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-File.html#hResource",
        "fct-type": "function",
        "title": "hResource"
      },
      "index": {
        "description": "Turn handler that is parametrized by file resources into regular handler that utilizes the path part of the request URI as the resource identifier",
        "hierarchy": "Network Salvia Handler File",
        "module": "Network.Salvia.Handler.File",
        "name": "hResource",
        "normalized": "(FilePath-\u003ea b)-\u003ea b",
        "package": "salvia",
        "partial": "Resource",
        "signature": "(FilePath-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hUri",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a handler that is parametrized by a URI into a regular handler that\nutilizes the request URI as the resource identifier.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.File",
        "fct-package": "salvia",
        "fct-signature": "(Uri -\u003e m a) -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-File.html#hUri",
        "fct-type": "function",
        "title": "hUri"
      },
      "index": {
        "description": "Turn handler that is parametrized by URI into regular handler that utilizes the request URI as the resource identifier",
        "hierarchy": "Network Salvia Handler File",
        "module": "Network.Salvia.Handler.File",
        "name": "hUri",
        "normalized": "(Uri-\u003ea b)-\u003ea b",
        "package": "salvia",
        "partial": "Uri",
        "signature": "(Uri-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eServing parts of the local file system. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Salvia.Handler.FileSystem",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-FileSystem.html",
        "fct-type": "module",
        "title": "FileSystem"
      },
      "index": {
        "description": "Serving parts of the local file system",
        "hierarchy": "Network Salvia Handler FileSystem",
        "module": "Network.Salvia.Handler.FileSystem",
        "name": "FileSystem",
        "normalized": "",
        "package": "salvia",
        "partial": "File System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#v:hFileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eServe single directory by combining the \u003ccode\u003e\u003ca\u003ehDirectoryResource\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003ehFileResource\u003c/a\u003e\u003c/code\u003e handlers in the \u003ccode\u003e\u003ca\u003ehFileTypeDispatcher\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.FileSystem",
        "fct-package": "salvia",
        "fct-signature": "FilePath-\u003e m ()",
        "fct-type": "function",
        "title": "hFileSystem"
      },
      "index": {
        "description": "Serve single directory by combining the hDirectoryResource and hFileResource handlers in the hFileTypeDispatcher",
        "hierarchy": "Network Salvia Handler FileSystem",
        "module": "Network.Salvia.Handler.FileSystem",
        "name": "hFileSystem",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "File System",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#v:hFileSystemNoIndexes",
      "description": {
        "fct-descr": "\u003cp\u003eServe single directory like \u003ccode\u003e\u003ca\u003ehFileSystem\u003c/a\u003e\u003c/code\u003e but do not show directory indices.\nInstead of an directory index an \u003ccode\u003e\u003ca\u003eForbidden\u003c/a\u003e\u003c/code\u003e response will be created.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.FileSystem",
        "fct-package": "salvia",
        "fct-signature": "FilePath-\u003e m ()",
        "fct-type": "function",
        "title": "hFileSystemNoIndexes"
      },
      "index": {
        "description": "Serve single directory like hFileSystem but do not show directory indices Instead of an directory index an Forbidden response will be created",
        "hierarchy": "Network Salvia Handler FileSystem",
        "module": "Network.Salvia.Handler.FileSystem",
        "name": "hFileSystemNoIndexes",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "File System No Indexes",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#v:hFileTypeDispatcher",
      "description": {
        "fct-descr": "\u003cp\u003eDispatch based on file type; regular files or directories. The first handler\nspecified will be invoked in case the resource to be served is an directory,\nthe second handler otherwise. The path from the request URI will be appended to\nthe directory resource specified as a parameter, this new path will be used to\nlookup the real resource on the file system. Every request will be jailed in\nthe specified directory resource to prevent users from requesting arbitrary\nparts of the file system.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.FileSystem",
        "fct-package": "salvia",
        "fct-signature": "(FilePath -\u003e m ())-\u003e (FilePath -\u003e m ())-\u003e FilePath-\u003e m ()",
        "fct-type": "function",
        "title": "hFileTypeDispatcher"
      },
      "index": {
        "description": "Dispatch based on file type regular files or directories The first handler specified will be invoked in case the resource to be served is an directory the second handler otherwise The path from the request URI will be appended to the directory resource specified as parameter this new path will be used to lookup the real resource on the file system Every request will be jailed in the specified directory resource to prevent users from requesting arbitrary parts of the file system",
        "hierarchy": "Network Salvia Handler FileSystem",
        "module": "Network.Salvia.Handler.FileSystem",
        "name": "hFileTypeDispatcher",
        "normalized": "(FilePath-\u003ea())-\u003e(FilePath-\u003ea())-\u003eFilePath-\u003ea()",
        "package": "salvia",
        "partial": "File Type Dispatcher",
        "signature": "(FilePath-\u003em())-\u003e(FilePath-\u003em())-\u003eFilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Head.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Head",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Head.html",
        "fct-type": "module",
        "title": "Head"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Head",
        "module": "Network.Salvia.Handler.Head",
        "name": "Head",
        "normalized": "",
        "package": "salvia",
        "partial": "Head",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Head.html#v:hHead",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehHead\u003c/a\u003e\u003c/code\u003e handler makes sure no \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body is sent to the client\nwhen the request is an HTTP \u003ccode\u003e\u003ca\u003eHEAD\u003c/a\u003e\u003c/code\u003e request. In the case of a \u003ccode\u003e\u003ca\u003eHEAD\u003c/a\u003e\u003c/code\u003e request the\nspecified sub handler will be executed under the assumption that the request\nwas a \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e request, otherwise this handler will act as the identify function.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Head",
        "fct-package": "salvia",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Head.html#hHead",
        "fct-type": "function",
        "title": "hHead"
      },
      "index": {
        "description": "The hHead handler makes sure no HTTP Response body is sent to the client when the request is an HTTP HEAD request In the case of HEAD request the specified sub handler will be executed under the assumption that the request was GET request otherwise this handler will act as the identify function",
        "hierarchy": "Network Salvia Handler Head",
        "module": "Network.Salvia.Handler.Head",
        "name": "hHead",
        "normalized": "a b-\u003ea b",
        "package": "salvia",
        "partial": "Head",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Log",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Log.html",
        "fct-type": "module",
        "title": "Log"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Log",
        "module": "Network.Salvia.Handler.Log",
        "name": "Log",
        "normalized": "",
        "package": "salvia",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#v:hDumpRequest",
      "description": {
        "fct-descr": "\u003cp\u003eDump the request headers to the standard output, useful for debugging.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Log",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Log.html#hDumpRequest",
        "fct-type": "function",
        "title": "hDumpRequest"
      },
      "index": {
        "description": "Dump the request headers to the standard output useful for debugging",
        "hierarchy": "Network Salvia Handler Log",
        "module": "Network.Salvia.Handler.Log",
        "name": "hDumpRequest",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Dump Request",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#v:hDumpResponse",
      "description": {
        "fct-descr": "\u003cp\u003eDump the response headers to the standard output, useful for debugging.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Log",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Log.html#hDumpResponse",
        "fct-type": "function",
        "title": "hDumpResponse"
      },
      "index": {
        "description": "Dump the response headers to the standard output useful for debugging",
        "hierarchy": "Network Salvia Handler Log",
        "module": "Network.Salvia.Handler.Log",
        "name": "hDumpResponse",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Dump Response",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#v:hLog",
      "description": {
        "fct-descr": "\u003cp\u003eA simple logger that prints a summery of the request information to\nthe specified file handle.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Log",
        "fct-package": "salvia",
        "fct-signature": "Handle -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Log.html#hLog",
        "fct-type": "function",
        "title": "hLog"
      },
      "index": {
        "description": "simple logger that prints summery of the request information to the specified file handle",
        "hierarchy": "Network Salvia Handler Log",
        "module": "Network.Salvia.Handler.Log",
        "name": "hLog",
        "normalized": "Handle-\u003ea()",
        "package": "salvia",
        "partial": "Log",
        "signature": "Handle-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Method.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Method",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Method.html",
        "fct-type": "module",
        "title": "Method"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Method",
        "module": "Network.Salvia.Handler.Method",
        "name": "Method",
        "normalized": "",
        "package": "salvia",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Method.html#v:hMethod",
      "description": {
        "fct-descr": "\u003cp\u003eRequest dispatcher based on the HTTP request \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Method",
        "fct-package": "salvia",
        "fct-signature": "Dispatcher Method m a",
        "fct-source": "src/Network-Salvia-Handler-Method.html#hMethod",
        "fct-type": "function",
        "title": "hMethod"
      },
      "index": {
        "description": "Request dispatcher based on the HTTP request Method",
        "hierarchy": "Network Salvia Handler Method",
        "module": "Network.Salvia.Handler.Method",
        "name": "hMethod",
        "normalized": "",
        "package": "salvia",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Method.html#v:hMethodRouter",
      "description": {
        "fct-descr": "\u003cp\u003eRequest list dispatcher based on the \u003ccode\u003e\u003ca\u003ehMethod\u003c/a\u003e\u003c/code\u003e dispatcher. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Method",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher Method m ()",
        "fct-source": "src/Network-Salvia-Handler-Method.html#hMethodRouter",
        "fct-type": "function",
        "title": "hMethodRouter"
      },
      "index": {
        "description": "Request list dispatcher based on the hMethod dispatcher",
        "hierarchy": "Network Salvia Handler Method",
        "module": "Network.Salvia.Handler.Method",
        "name": "hMethodRouter",
        "normalized": "ListDispatcher Method a()",
        "package": "salvia",
        "partial": "Method Router",
        "signature": "ListDispatcher Method m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Parser",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Parser",
        "module": "Network.Salvia.Handler.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "salvia",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:hParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehParser\u003c/a\u003e\u003c/code\u003e handler is used to parse the raw \u003ccode\u003eHTTP\u003c/code\u003e message into the\n\u003ccode\u003eMessage\u003c/code\u003e data type. This handler is generally used as (one of) the first\nhandlers in a client or server environment. The first handler argument is\nexecuted when the message is invalid, possibly due to parser errors, and is\nparametrized with the error string. The second handler argument is executed\nwhen the message is valid. When the message could not be parsed within the time\nspecified with the first argument the function silently returns.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Parser",
        "fct-package": "salvia",
        "fct-signature": "(Http d -\u003e m b)-\u003e (String -\u003e Either String (Http d))-\u003e Int-\u003e (String -\u003e m a)-\u003e m a-\u003e m (Maybe a)",
        "fct-type": "function",
        "title": "hParser"
      },
      "index": {
        "description": "The hParser handler is used to parse the raw HTTP message into the Message data type This handler is generally used as one of the first handlers in client or server environment The first handler argument is executed when the message is invalid possibly due to parser errors and is parametrized with the error string The second handler argument is executed when the message is valid When the message could not be parsed within the time specified with the first argument the function silently returns",
        "hierarchy": "Network Salvia Handler Parser",
        "module": "Network.Salvia.Handler.Parser",
        "name": "hParser",
        "normalized": "(Http a-\u003eb c)-\u003e(String-\u003eEither String(Http a))-\u003eInt-\u003e(String-\u003eb d)-\u003eb d-\u003eb(Maybe d)",
        "package": "salvia",
        "partial": "Parser",
        "signature": "(Http d-\u003em b)-\u003e(String-\u003eEither String(Http d))-\u003eInt-\u003e(String-\u003em a)-\u003em a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:hRequestParser",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehParser\u003c/a\u003e\u003c/code\u003e but always parses \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003eRequests\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Parser",
        "fct-package": "salvia",
        "fct-signature": "Int-\u003e (String -\u003e m a)-\u003e m a-\u003e m (Maybe a)",
        "fct-type": "function",
        "title": "hRequestParser"
      },
      "index": {
        "description": "Like the hParser but always parses HTTP Requests",
        "hierarchy": "Network Salvia Handler Parser",
        "module": "Network.Salvia.Handler.Parser",
        "name": "hRequestParser",
        "normalized": "Int-\u003e(String-\u003ea b)-\u003ea b-\u003ea(Maybe b)",
        "package": "salvia",
        "partial": "Request Parser",
        "signature": "Int-\u003e(String-\u003em a)-\u003em a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:hResponseParser",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehParser\u003c/a\u003e\u003c/code\u003e but always parses \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Parser",
        "fct-package": "salvia",
        "fct-signature": "Int-\u003e (String -\u003e m a)-\u003e m a-\u003e m (Maybe a)",
        "fct-type": "function",
        "title": "hResponseParser"
      },
      "index": {
        "description": "Like the hParser but always parses HTTP Response",
        "hierarchy": "Network Salvia Handler Parser",
        "module": "Network.Salvia.Handler.Parser",
        "name": "hResponseParser",
        "normalized": "Int-\u003e(String-\u003ea b)-\u003ea b-\u003ea(Maybe b)",
        "package": "salvia",
        "partial": "Response Parser",
        "signature": "Int-\u003e(String-\u003em a)-\u003em a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:readNonEmptyLines",
      "description": {
        "fct-module": "Network.Salvia.Handler.Parser",
        "fct-package": "salvia",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "src/Network-Salvia-Handler-Parser.html#readNonEmptyLines",
        "fct-type": "function",
        "title": "readNonEmptyLines"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Parser",
        "module": "Network.Salvia.Handler.Parser",
        "name": "readNonEmptyLines",
        "normalized": "Handle-\u003eIO String",
        "package": "salvia",
        "partial": "Non Empty Lines",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Path",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Path.html",
        "fct-type": "module",
        "title": "Path"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Path",
        "module": "Network.Salvia.Handler.Path",
        "name": "Path",
        "normalized": "",
        "package": "salvia",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPath",
      "description": {
        "fct-descr": "\u003cp\u003eRequest dispatcher based on the request path. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Path",
        "fct-package": "salvia",
        "fct-signature": "Dispatcher String m a",
        "fct-source": "src/Network-Salvia-Handler-Path.html#hPath",
        "fct-type": "function",
        "title": "hPath"
      },
      "index": {
        "description": "Request dispatcher based on the request path",
        "hierarchy": "Network Salvia Handler Path",
        "module": "Network.Salvia.Handler.Path",
        "name": "hPath",
        "normalized": "",
        "package": "salvia",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPathRouter",
      "description": {
        "fct-descr": "\u003cp\u003eList dispatcher version of \u003ccode\u003e\u003ca\u003ehPath\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Path",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher String m a",
        "fct-source": "src/Network-Salvia-Handler-Path.html#hPathRouter",
        "fct-type": "function",
        "title": "hPathRouter"
      },
      "index": {
        "description": "List dispatcher version of hPath",
        "hierarchy": "Network Salvia Handler Path",
        "module": "Network.Salvia.Handler.Path",
        "name": "hPathRouter",
        "normalized": "",
        "package": "salvia",
        "partial": "Path Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eRequest dispatcher based on a prefix of the request path. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Path",
        "fct-package": "salvia",
        "fct-signature": "Dispatcher String m a",
        "fct-source": "src/Network-Salvia-Handler-Path.html#hPrefix",
        "fct-type": "function",
        "title": "hPrefix"
      },
      "index": {
        "description": "Request dispatcher based on prefix of the request path",
        "hierarchy": "Network Salvia Handler Path",
        "module": "Network.Salvia.Handler.Path",
        "name": "hPrefix",
        "normalized": "",
        "package": "salvia",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPrefixRouter",
      "description": {
        "fct-descr": "\u003cp\u003eList dispatcher version of \u003ccode\u003e\u003ca\u003ehPrefix\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Path",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher String m a",
        "fct-source": "src/Network-Salvia-Handler-Path.html#hPrefixRouter",
        "fct-type": "function",
        "title": "hPrefixRouter"
      },
      "index": {
        "description": "List dispatcher version of hPrefix",
        "hierarchy": "Network Salvia Handler Path",
        "module": "Network.Salvia.Handler.Path",
        "name": "hPrefixRouter",
        "normalized": "",
        "package": "salvia",
        "partial": "Prefix Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hQueryParameters",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to fetch the URI parameters from the request. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Path",
        "fct-package": "salvia",
        "fct-signature": "m Parameters",
        "fct-source": "src/Network-Salvia-Handler-Path.html#hQueryParameters",
        "fct-type": "function",
        "title": "hQueryParameters"
      },
      "index": {
        "description": "Helper function to fetch the URI parameters from the request",
        "hierarchy": "Network Salvia Handler Path",
        "module": "Network.Salvia.Handler.Path",
        "name": "hQueryParameters",
        "normalized": "",
        "package": "salvia",
        "partial": "Query Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Printer",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Printer.html",
        "fct-type": "module",
        "title": "Printer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Printer",
        "module": "Network.Salvia.Handler.Printer",
        "name": "Printer",
        "normalized": "",
        "package": "salvia",
        "partial": "Printer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eSend all the message headers directly over the socket.\n\u003c/p\u003e\u003cp\u003etodo: printer for rawResponse over response!!\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Printer",
        "fct-package": "salvia",
        "fct-signature": "d -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hFlushHeaders",
        "fct-type": "function",
        "title": "hFlushHeaders"
      },
      "index": {
        "description": "Send all the message headers directly over the socket todo printer for rawResponse over response",
        "hierarchy": "Network Salvia Handler Printer",
        "module": "Network.Salvia.Handler.Printer",
        "name": "hFlushHeaders",
        "normalized": "a-\u003eb()",
        "package": "salvia",
        "partial": "Flush Headers",
        "signature": "d-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushHeadersOnly",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFlushHeaders\u003c/a\u003e\u003c/code\u003e but does not print status line, can be useful for CGI mode.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Printer",
        "fct-package": "salvia",
        "fct-signature": "d -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hFlushHeadersOnly",
        "fct-type": "function",
        "title": "hFlushHeadersOnly"
      },
      "index": {
        "description": "Like hFlushHeaders but does not print status line can be useful for CGI mode",
        "hierarchy": "Network Salvia Handler Printer",
        "module": "Network.Salvia.Handler.Printer",
        "name": "hFlushHeadersOnly",
        "normalized": "a-\u003eb()",
        "package": "salvia",
        "partial": "Flush Headers Only",
        "signature": "d-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushQueue",
      "description": {
        "fct-descr": "\u003cp\u003eOne by one apply all enqueued send actions to the socket.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Printer",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hFlushQueue",
        "fct-type": "function",
        "title": "hFlushQueue"
      },
      "index": {
        "description": "One by one apply all enqueued send actions to the socket",
        "hierarchy": "Network Salvia Handler Printer",
        "module": "Network.Salvia.Handler.Printer",
        "name": "hFlushQueue",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Flush Queue",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushRequestHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFlushHeaders\u003c/a\u003e\u003c/code\u003e but specifically for the request headers.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Printer",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hFlushRequestHeaders",
        "fct-type": "function",
        "title": "hFlushRequestHeaders"
      },
      "index": {
        "description": "Like hFlushHeaders but specifically for the request headers",
        "hierarchy": "Network Salvia Handler Printer",
        "module": "Network.Salvia.Handler.Printer",
        "name": "hFlushRequestHeaders",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Flush Request Headers",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushResponseHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFlushHeaders\u003c/a\u003e\u003c/code\u003e but specifically for the response headers.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Printer",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hFlushResponseHeaders",
        "fct-type": "function",
        "title": "hFlushResponseHeaders"
      },
      "index": {
        "description": "Like hFlushHeaders but specifically for the response headers",
        "hierarchy": "Network Salvia Handler Printer",
        "module": "Network.Salvia.Handler.Printer",
        "name": "hFlushResponseHeaders",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Flush Response Headers",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hRequestPrinter",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehRequestPrinter\u003c/a\u003e\u003c/code\u003e handler prints the entire HTTP request including the\nheaders and the body to the socket towards the server. This handler is\ngenerally used as (one of) the last handler in a server environment.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Printer",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hRequestPrinter",
        "fct-type": "function",
        "title": "hRequestPrinter"
      },
      "index": {
        "description": "The hRequestPrinter handler prints the entire HTTP request including the headers and the body to the socket towards the server This handler is generally used as one of the last handler in server environment",
        "hierarchy": "Network Salvia Handler Printer",
        "module": "Network.Salvia.Handler.Printer",
        "name": "hRequestPrinter",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Request Printer",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hResponsePrinter",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehResponsePrinter\u003c/a\u003e\u003c/code\u003e handler prints the entire HTTP response including the\nheaders and the body to the socket towards the client. This handler is\ngenerally used as (one of) the last handler in a client environment.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Printer",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hResponsePrinter",
        "fct-type": "function",
        "title": "hResponsePrinter"
      },
      "index": {
        "description": "The hResponsePrinter handler prints the entire HTTP response including the headers and the body to the socket towards the client This handler is generally used as one of the last handler in client environment",
        "hierarchy": "Network Salvia Handler Printer",
        "module": "Network.Salvia.Handler.Printer",
        "name": "hResponsePrinter",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Response Printer",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Put",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Put.html",
        "fct-type": "module",
        "title": "Put"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Put",
        "module": "Network.Salvia.Handler.Put",
        "name": "Put",
        "normalized": "",
        "package": "salvia",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#v:hPutFileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a browseable filesystem handler (like \u003ccode\u003e\u003ca\u003ehFileSystem\u003c/a\u003e\u003c/code\u003e) but make all files\nwriteable by a \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e request. Files that do not exists will be created as long\nas the directory in which they will be created exists.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Put",
        "fct-package": "salvia",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Put.html#hPutFileSystem",
        "fct-type": "function",
        "title": "hPutFileSystem"
      },
      "index": {
        "description": "Create browseable filesystem handler like hFileSystem but make all files writeable by PUT request Files that do not exists will be created as long as the directory in which they will be created exists",
        "hierarchy": "Network Salvia Handler Put",
        "module": "Network.Salvia.Handler.Put",
        "name": "hPutFileSystem",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "Put File System",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#v:hPutResource",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes the \u003ccode\u003e\u003ca\u003ehStore\u003c/a\u003e\u003c/code\u003e handler when the request is a \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e request and invokes\nthe fallback handler otherwiser.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Put",
        "fct-package": "salvia",
        "fct-signature": "(FilePath -\u003e m ()) -\u003e FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Put.html#hPutResource",
        "fct-type": "function",
        "title": "hPutResource"
      },
      "index": {
        "description": "Invokes the hStore handler when the request is PUT request and invokes the fallback handler otherwiser",
        "hierarchy": "Network Salvia Handler Put",
        "module": "Network.Salvia.Handler.Put",
        "name": "hPutResource",
        "normalized": "(FilePath-\u003ea())-\u003eFilePath-\u003ea()",
        "package": "salvia",
        "partial": "Put Resource",
        "signature": "(FilePath-\u003em())-\u003eFilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#v:hStore",
      "description": {
        "fct-descr": "\u003cp\u003eThis handler takes a FilePath and will try to store the entire request body in\nthat file. When the request body could for some reason not be fetch a\n\u003ccode\u003e\u003ca\u003eBadRequest\u003c/a\u003e\u003c/code\u003e error response will be created. When an IO error occurs the\n\u003ccode\u003e\u003ca\u003ehIOError\u003c/a\u003e\u003c/code\u003e function is used to setup an apropriate response.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Put",
        "fct-package": "salvia",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Put.html#hStore",
        "fct-type": "function",
        "title": "hStore"
      },
      "index": {
        "description": "This handler takes FilePath and will try to store the entire request body in that file When the request body could for some reason not be fetch BadRequest error response will be created When an IO error occurs the hIOError function is used to setup an apropriate response",
        "hierarchy": "Network Salvia Handler Put",
        "module": "Network.Salvia.Handler.Put",
        "name": "hStore",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "Store",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Range",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Range.html",
        "fct-type": "module",
        "title": "Range"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Range",
        "module": "Network.Salvia.Handler.Range",
        "name": "Range",
        "normalized": "",
        "package": "salvia",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#t:Range",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP Range datatype.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Range",
        "fct-package": "salvia",
        "fct-signature": "data",
        "fct-source": "src/Network-Salvia-Handler-Range.html#Range",
        "fct-type": "data",
        "title": "Range"
      },
      "index": {
        "description": "HTTP Range datatype",
        "hierarchy": "Network Salvia Handler Range",
        "module": "Network.Salvia.Handler.Range",
        "name": "Range",
        "normalized": "",
        "package": "salvia",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:Range",
      "description": {
        "fct-module": "Network.Salvia.Handler.Range",
        "fct-package": "salvia",
        "fct-signature": "Range (Maybe Integer) (Maybe Integer) (Maybe Integer)",
        "fct-source": "src/Network-Salvia-Handler-Range.html#Range",
        "fct-type": "function",
        "title": "Range"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Range",
        "module": "Network.Salvia.Handler.Range",
        "name": "Range",
        "normalized": "",
        "package": "salvia",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:contentRange",
      "description": {
        "fct-descr": "\u003cp\u003eAccess the \u003cem\u003eContent-Range\u003c/em\u003e header field.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Range",
        "fct-package": "salvia",
        "fct-signature": "Http Response :-\u003e Maybe Range",
        "fct-source": "src/Network-Salvia-Handler-Range.html#contentRange",
        "fct-type": "function",
        "title": "contentRange"
      },
      "index": {
        "description": "Access the Content-Range header field",
        "hierarchy": "Network Salvia Handler Range",
        "module": "Network.Salvia.Handler.Range",
        "name": "contentRange",
        "normalized": "Http Response-\u003eMaybe Range",
        "package": "salvia",
        "partial": "Range",
        "signature": "Http Response-\u003eMaybe Range"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:range",
      "description": {
        "fct-descr": "\u003cp\u003eAccess the \u003cem\u003eRange\u003c/em\u003e header field.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Range",
        "fct-package": "salvia",
        "fct-signature": "Http Request :-\u003e Maybe Range",
        "fct-source": "src/Network-Salvia-Handler-Range.html#range",
        "fct-type": "function",
        "title": "range"
      },
      "index": {
        "description": "Access the Range header field",
        "hierarchy": "Network Salvia Handler Range",
        "module": "Network.Salvia.Handler.Range",
        "name": "range",
        "normalized": "Http Request-\u003eMaybe Range",
        "package": "salvia",
        "partial": "",
        "signature": "Http Request-\u003eMaybe Range"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:rangeL",
      "description": {
        "fct-descr": "\u003cp\u003eLens containing parser and pretty-printer for HTTP ranges.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Range",
        "fct-package": "salvia",
        "fct-signature": "String :\u003c-\u003e: Range",
        "fct-source": "src/Network-Salvia-Handler-Range.html#rangeL",
        "fct-type": "function",
        "title": "rangeL"
      },
      "index": {
        "description": "Lens containing parser and pretty-printer for HTTP ranges",
        "hierarchy": "Network Salvia Handler Range",
        "module": "Network.Salvia.Handler.Range",
        "name": "rangeL",
        "normalized": "String-\u003eRange",
        "package": "salvia",
        "partial": "",
        "signature": "String-\u003eRange"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Redirect.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Redirect",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Redirect.html",
        "fct-type": "module",
        "title": "Redirect"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Redirect",
        "module": "Network.Salvia.Handler.Redirect",
        "name": "Redirect",
        "normalized": "",
        "package": "salvia",
        "partial": "Redirect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Redirect.html#v:hRedirect",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect a client to another location by creating a \u003ccode\u003e\u003ca\u003eMovedPermanently\u003c/a\u003e\u003c/code\u003e response\nmessage with the specified \u003ccode\u003eURI\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003elocation\u003c/a\u003e\u003c/code\u003e header.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Redirect",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Redirect.html#hRedirect",
        "fct-type": "function",
        "title": "hRedirect"
      },
      "index": {
        "description": "Redirect client to another location by creating MovedPermanently response message with the specified URI in the location header",
        "hierarchy": "Network Salvia Handler Redirect",
        "module": "Network.Salvia.Handler.Redirect",
        "name": "hRedirect",
        "normalized": "String-\u003ea()",
        "package": "salvia",
        "partial": "Redirect",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.Rewrite",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html",
        "fct-type": "module",
        "title": "Rewrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler Rewrite",
        "module": "Network.Salvia.Handler.Rewrite",
        "name": "Rewrite",
        "normalized": "",
        "package": "salvia",
        "partial": "Rewrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hLocalRequest",
      "description": {
        "fct-descr": "\u003cp\u003eRun a handler in a local environment in which the \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e has\nbeen modified.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Rewrite",
        "fct-package": "salvia",
        "fct-signature": "(Http Request :-\u003e b) -\u003e (b -\u003e b) -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hLocalRequest",
        "fct-type": "function",
        "title": "hLocalRequest"
      },
      "index": {
        "description": "Run handler in local environment in which the HTTP Request has been modified",
        "hierarchy": "Network Salvia Handler Rewrite",
        "module": "Network.Salvia.Handler.Rewrite",
        "name": "hLocalRequest",
        "normalized": "(Http Request-\u003ea)-\u003e(a-\u003ea)-\u003eb c-\u003eb c",
        "package": "salvia",
        "partial": "Local Request",
        "signature": "(Http Request-\u003eb)-\u003e(b-\u003eb)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewrite",
      "description": {
        "fct-descr": "\u003cp\u003eRun an handler in a modified context in which the request \u003ccode\u003e\u003ca\u003eUri\u003c/a\u003e\u003c/code\u003e has been\nchanged by the specified modifier function. After the handler completes the \u003ccode\u003e\u003ca\u003eUri\u003c/a\u003e\u003c/code\u003e\nremains untouched.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Rewrite",
        "fct-package": "salvia",
        "fct-signature": "(Uri -\u003e Uri) -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hRewrite",
        "fct-type": "function",
        "title": "hRewrite"
      },
      "index": {
        "description": "Run an handler in modified context in which the request Uri has been changed by the specified modifier function After the handler completes the Uri remains untouched",
        "hierarchy": "Network Salvia Handler Rewrite",
        "module": "Network.Salvia.Handler.Rewrite",
        "name": "hRewrite",
        "normalized": "(Uri-\u003eUri)-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "Rewrite",
        "signature": "(Uri-\u003eUri)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewriteExt",
      "description": {
        "fct-descr": "\u003cp\u003eRun handler in a context with a modified file extension. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Rewrite",
        "fct-package": "salvia",
        "fct-signature": "(Maybe String -\u003e Maybe String) -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hRewriteExt",
        "fct-type": "function",
        "title": "hRewriteExt"
      },
      "index": {
        "description": "Run handler in context with modified file extension",
        "hierarchy": "Network Salvia Handler Rewrite",
        "module": "Network.Salvia.Handler.Rewrite",
        "name": "hRewriteExt",
        "normalized": "(Maybe String-\u003eMaybe String)-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "Rewrite Ext",
        "signature": "(Maybe String-\u003eMaybe String)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewriteHost",
      "description": {
        "fct-descr": "\u003cp\u003eRun handler in a context with a modified host. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Rewrite",
        "fct-package": "salvia",
        "fct-signature": "(String -\u003e String) -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hRewriteHost",
        "fct-type": "function",
        "title": "hRewriteHost"
      },
      "index": {
        "description": "Run handler in context with modified host",
        "hierarchy": "Network Salvia Handler Rewrite",
        "module": "Network.Salvia.Handler.Rewrite",
        "name": "hRewriteHost",
        "normalized": "(String-\u003eString)-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "Rewrite Host",
        "signature": "(String-\u003eString)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewritePath",
      "description": {
        "fct-descr": "\u003cp\u003eRun handler in a context with a modified path. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Rewrite",
        "fct-package": "salvia",
        "fct-signature": "(FilePath -\u003e FilePath) -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hRewritePath",
        "fct-type": "function",
        "title": "hRewritePath"
      },
      "index": {
        "description": "Run handler in context with modified path",
        "hierarchy": "Network Salvia Handler Rewrite",
        "module": "Network.Salvia.Handler.Rewrite",
        "name": "hRewritePath",
        "normalized": "(FilePath-\u003eFilePath)-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "Rewrite Path",
        "signature": "(FilePath-\u003eFilePath)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hWithDir",
      "description": {
        "fct-descr": "\u003cp\u003eRun handler in a context with a modified path. The specified prefix will be\nprepended to the path.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Rewrite",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hWithDir",
        "fct-type": "function",
        "title": "hWithDir"
      },
      "index": {
        "description": "Run handler in context with modified path The specified prefix will be prepended to the path",
        "hierarchy": "Network Salvia Handler Rewrite",
        "module": "Network.Salvia.Handler.Rewrite",
        "name": "hWithDir",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "With Dir",
        "signature": "String-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hWithoutDir",
      "description": {
        "fct-descr": "\u003cp\u003eRun handler in a context with a modified path. The specified prefix will be\nstripped from the path.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.Rewrite",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hWithoutDir",
        "fct-type": "function",
        "title": "hWithoutDir"
      },
      "index": {
        "description": "Run handler in context with modified path The specified prefix will be stripped from the path",
        "hierarchy": "Network Salvia Handler Rewrite",
        "module": "Network.Salvia.Handler.Rewrite",
        "name": "hWithoutDir",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "Without Dir",
        "signature": "String-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-VirtualHosting.html#",
      "description": {
        "fct-module": "Network.Salvia.Handler.VirtualHosting",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handler-VirtualHosting.html",
        "fct-type": "module",
        "title": "VirtualHosting"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handler VirtualHosting",
        "module": "Network.Salvia.Handler.VirtualHosting",
        "name": "VirtualHosting",
        "normalized": "",
        "package": "salvia",
        "partial": "Virtual Hosting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-VirtualHosting.html#v:hPortRouter",
      "description": {
        "fct-descr": "\u003cp\u003eDispatcher based on the port number of the \u003ccode\u003e\u003ca\u003ehostname\u003c/a\u003e\u003c/code\u003e request header. When no\nport number is available in the hostname header port 80 will be assumed.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.VirtualHosting",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher Int m b",
        "fct-source": "src/Network-Salvia-Handler-VirtualHosting.html#hPortRouter",
        "fct-type": "function",
        "title": "hPortRouter"
      },
      "index": {
        "description": "Dispatcher based on the port number of the hostname request header When no port number is available in the hostname header port will be assumed",
        "hierarchy": "Network Salvia Handler VirtualHosting",
        "module": "Network.Salvia.Handler.VirtualHosting",
        "name": "hPortRouter",
        "normalized": "",
        "package": "salvia",
        "partial": "Port Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-VirtualHosting.html#v:hVirtualHosting",
      "description": {
        "fct-descr": "\u003cp\u003eDispatcher based on the host part of the \u003ccode\u003e\u003ca\u003ehostname\u003c/a\u003e\u003c/code\u003e request header. Everything\nnot part of the real hostname (like the port number) will be ignored. When the\nexpected hostname starts with a dot (like \u003ca\u003e.mydomain.com\u003c/a\u003e)  this indicates that\nall sub-domains of this domain will match as well.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handler.VirtualHosting",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher String m b",
        "fct-source": "src/Network-Salvia-Handler-VirtualHosting.html#hVirtualHosting",
        "fct-type": "function",
        "title": "hVirtualHosting"
      },
      "index": {
        "description": "Dispatcher based on the host part of the hostname request header Everything not part of the real hostname like the port number will be ignored When the expected hostname starts with dot like mydomain.com this indicates that all sub-domains of this domain will match as well",
        "hierarchy": "Network Salvia Handler VirtualHosting",
        "module": "Network.Salvia.Handler.VirtualHosting",
        "name": "hVirtualHosting",
        "normalized": "",
        "package": "salvia",
        "partial": "Virtual Hosting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#",
      "description": {
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Handlers.html",
        "fct-type": "module",
        "title": "Handlers"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "Handlers",
        "normalized": "",
        "package": "salvia",
        "partial": "Handlers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#t:Dispatcher",
      "description": {
        "fct-descr": "\u003cp\u003eThe dispatcher type takes one value to dispatch on and two handlers. The first\nhandler will be used when the predicate on the dispatch value returned \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nthe second (default) handler will be used when the predicate returs\n\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "type",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#Dispatcher",
        "fct-type": "type",
        "title": "Dispatcher"
      },
      "index": {
        "description": "The dispatcher type takes one value to dispatch on and two handlers The first handler will be used when the predicate on the dispatch value returned True the second default handler will be used when the predicate returs False",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "Dispatcher",
        "normalized": "",
        "package": "salvia",
        "partial": "Dispatcher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#t:ListDispatcher",
      "description": {
        "fct-descr": "\u003cp\u003eA list dispatcher takes a mapping from dispatch values to handlers and one\ndefault fallback handler.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "type",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#ListDispatcher",
        "fct-type": "type",
        "title": "ListDispatcher"
      },
      "index": {
        "description": "list dispatcher takes mapping from dispatch values to handlers and one default fallback handler",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "ListDispatcher",
        "normalized": "",
        "package": "salvia",
        "partial": "List Dispatcher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#t:Range",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP Range datatype.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "data",
        "fct-source": "src/Network-Salvia-Handler-Range.html#Range",
        "fct-type": "data",
        "title": "Range"
      },
      "index": {
        "description": "HTTP Range datatype",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "Range",
        "normalized": "",
        "package": "salvia",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:Range",
      "description": {
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Range (Maybe Integer) (Maybe Integer) (Maybe Integer)",
        "fct-source": "src/Network-Salvia-Handler-Range.html#Range",
        "fct-type": "function",
        "title": "Range"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "Range",
        "normalized": "",
        "package": "salvia",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:contentRange",
      "description": {
        "fct-descr": "\u003cp\u003eAccess the \u003cem\u003eContent-Range\u003c/em\u003e header field.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Http Response :-\u003e Maybe Range",
        "fct-source": "src/Network-Salvia-Handler-Range.html#contentRange",
        "fct-type": "function",
        "title": "contentRange"
      },
      "index": {
        "description": "Access the Content-Range header field",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "contentRange",
        "normalized": "Http Response-\u003eMaybe Range",
        "package": "salvia",
        "partial": "Range",
        "signature": "Http Response-\u003eMaybe Range"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:fileMime",
      "description": {
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "FilePath -\u003e Mime",
        "fct-source": "src/Network-Salvia-Handler-File.html#fileMime",
        "fct-type": "function",
        "title": "fileMime"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "fileMime",
        "normalized": "FilePath-\u003eMime",
        "package": "salvia",
        "partial": "Mime",
        "signature": "FilePath-\u003eMime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hBanner",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehBanner\u003c/a\u003e\u003c/code\u003e handler adds the current date-/timestamp and a custom server name\nto the response headers.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "String-\u003e m ()",
        "fct-type": "function",
        "title": "hBanner"
      },
      "index": {
        "description": "The hBanner handler adds the current date timestamp and custom server name to the response headers",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hBanner",
        "normalized": "String-\u003ea()",
        "package": "salvia",
        "partial": "Banner",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hBodyStringUTF8",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but decodes it as UTF-8 to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "dir -\u003e m String",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hBodyStringUTF8",
        "fct-type": "function",
        "title": "hBodyStringUTF8"
      },
      "index": {
        "description": "Like the hRawBody but decodes it as UTF-8 to String",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hBodyStringUTF8",
        "normalized": "a-\u003eb String",
        "package": "salvia",
        "partial": "Body String UTF",
        "signature": "dir-\u003em String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hBodyText",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but is will handle proper decoding based on the charset\npart of the \u003ccode\u003e\u003ca\u003econtentType\u003c/a\u003e\u003c/code\u003e header line. When a valid encoding is found in the\n\u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e message it will be decoded with using the encodings package. The default\nencoding supplied as the function's argument can be used to specify what\nencoding to use in the absence of a proper encoding in the HTTP message itself.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "dir -\u003e String -\u003e m Text",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hBodyText",
        "fct-type": "function",
        "title": "hBodyText"
      },
      "index": {
        "description": "Like the hRawBody but is will handle proper decoding based on the charset part of the contentType header line When valid encoding is found in the Http message it will be decoded with using the encodings package The default encoding supplied as the function argument can be used to specify what encoding to use in the absence of proper encoding in the HTTP message itself",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hBodyText",
        "normalized": "a-\u003eString-\u003eb Text",
        "package": "salvia",
        "partial": "Body Text",
        "signature": "dir-\u003eString-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hCGI",
      "description": {
        "fct-descr": "\u003cp\u003eHandler to run CGI scripts.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-CGI.html#hCGI",
        "fct-type": "function",
        "title": "hCGI"
      },
      "index": {
        "description": "Handler to run CGI scripts",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hCGI",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "CGI",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hCloseConn",
      "description": {
        "fct-descr": "\u003cp\u003eRun a handler once and close the connection afterwards.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m a -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Close.html#hCloseConn",
        "fct-type": "function",
        "title": "hCloseConn"
      },
      "index": {
        "description": "Run handler once and close the connection afterwards",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hCloseConn",
        "normalized": "a b-\u003ea()",
        "package": "salvia",
        "partial": "Close Conn",
        "signature": "m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hCookie",
      "description": {
        "fct-descr": "\u003cp\u003eTry to get the cookies from the HTTP \u003ccode\u003e\u003ca\u003ecookie\u003c/a\u003e\u003c/code\u003e request header. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m (Maybe Cookies)",
        "fct-source": "src/Network-Salvia-Handler-Cookie.html#hCookie",
        "fct-type": "function",
        "title": "hCookie"
      },
      "index": {
        "description": "Try to get the cookies from the HTTP cookie request header",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hCookie",
        "normalized": "",
        "package": "salvia",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hCustomError",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehError\u003c/a\u003e\u003c/code\u003e but with a custom error message.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Status -\u003e String -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Error.html#hCustomError",
        "fct-type": "function",
        "title": "hCustomError"
      },
      "index": {
        "description": "Like hError but with custom error message",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hCustomError",
        "normalized": "Status-\u003eString-\u003ea()",
        "package": "salvia",
        "partial": "Custom Error",
        "signature": "Status-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDefaultEnv",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the default handler environment. It takes care of request parsing\n(\u003ccode\u003e\u003ca\u003ehRequestParser\u003c/a\u003e\u003c/code\u003e), response printing (\u003ccode\u003e\u003ca\u003ehResponsePrinter\u003c/a\u003e\u003c/code\u003e), connection\nkeep-alives (\u003ccode\u003e\u003ca\u003ehKeepAlive\u003c/a\u003e\u003c/code\u003e), handling \u003ccode\u003e\u003ca\u003eHEAD\u003c/a\u003e\u003c/code\u003e requests (\u003ccode\u003e\u003ca\u003ehHead\u003c/a\u003e\u003c/code\u003e) and printing the\n`salvia-httpd` server banner (\u003ccode\u003e\u003ca\u003ehBanner\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()-\u003e m ()",
        "fct-type": "function",
        "title": "hDefaultEnv"
      },
      "index": {
        "description": "This is the default handler environment It takes care of request parsing hRequestParser response printing hResponsePrinter connection keep-alives hKeepAlive handling HEAD requests hHead and printing the salvia-httpd server banner hBanner",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hDefaultEnv",
        "normalized": "a()-\u003ea()",
        "package": "salvia",
        "partial": "Default Env",
        "signature": "m()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDelCookie",
      "description": {
        "fct-descr": "\u003cp\u003eDelete one cookie by removing it from the `Set-Cookie' header. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Cookie.html#hDelCookie",
        "fct-type": "function",
        "title": "hDelCookie"
      },
      "index": {
        "description": "Delete one cookie by removing it from the Set-Cookie header",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hDelCookie",
        "normalized": "String-\u003ea()",
        "package": "salvia",
        "partial": "Del Cookie",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehDirectoryResource\u003c/a\u003e\u003c/code\u003e but uses the path from the current request URI.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Directory.html#hDirectory",
        "fct-type": "function",
        "title": "hDirectory"
      },
      "index": {
        "description": "Like hDirectoryResource but uses the path from the current request URI",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hDirectory",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Directory",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDirectoryResource",
      "description": {
        "fct-descr": "\u003cp\u003eServe a simple HTML directory listing for the specified directory on the\nfilesystem.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "FilePath-\u003e m ()",
        "fct-type": "function",
        "title": "hDirectoryResource"
      },
      "index": {
        "description": "Serve simple HTML directory listing for the specified directory on the filesystem",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hDirectoryResource",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "Directory Resource",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDispatch",
      "description": {
        "fct-descr": "\u003cp\u003eDispatch on an arbitrary part of the context using an arbitrary predicate. When\nthe predicate returns true on the value selected with the \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e the first\nhandler will be invoked, otherwise the second handler will be used.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "d -\u003e (Http d :-\u003e b) -\u003e (c -\u003e b -\u003e Bool) -\u003e Dispatcher c m a",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#hDispatch",
        "fct-type": "function",
        "title": "hDispatch"
      },
      "index": {
        "description": "Dispatch on an arbitrary part of the context using an arbitrary predicate When the predicate returns true on the value selected with the Label the first handler will be invoked otherwise the second handler will be used",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hDispatch",
        "normalized": "a-\u003e(Http a-\u003eb)-\u003e(c-\u003eb-\u003eBool)-\u003eDispatcher c d e",
        "package": "salvia",
        "partial": "Dispatch",
        "signature": "d-\u003e(Http d-\u003eb)-\u003e(c-\u003eb-\u003eBool)-\u003eDispatcher c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDumpRequest",
      "description": {
        "fct-descr": "\u003cp\u003eDump the request headers to the standard output, useful for debugging.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Log.html#hDumpRequest",
        "fct-type": "function",
        "title": "hDumpRequest"
      },
      "index": {
        "description": "Dump the request headers to the standard output useful for debugging",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hDumpRequest",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Dump Request",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDumpResponse",
      "description": {
        "fct-descr": "\u003cp\u003eDump the response headers to the standard output, useful for debugging.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Log.html#hDumpResponse",
        "fct-type": "function",
        "title": "hDumpResponse"
      },
      "index": {
        "description": "Dump the response headers to the standard output useful for debugging",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hDumpResponse",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Dump Response",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hEnvNoKeepAlive",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehDefaultEnv\u003c/a\u003e\u003c/code\u003e but only serves one request per connection.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()-\u003e m ()",
        "fct-type": "function",
        "title": "hEnvNoKeepAlive"
      },
      "index": {
        "description": "Like hDefaultEnv but only serves one request per connection",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hEnvNoKeepAlive",
        "normalized": "a()-\u003ea()",
        "package": "salvia",
        "partial": "Env No Keep Alive",
        "signature": "m()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hError",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehError\u003c/a\u003e\u003c/code\u003e handler enables the creation of a default style of error\n responses for the specified HTTP \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e code.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Status -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Error.html#hError",
        "fct-type": "function",
        "title": "hError"
      },
      "index": {
        "description": "The hError handler enables the creation of default style of error responses for the specified HTTP Status code",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hError",
        "normalized": "Status-\u003ea()",
        "package": "salvia",
        "partial": "Error",
        "signature": "Status-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hExtension",
      "description": {
        "fct-descr": "\u003cp\u003eRequest dispatcher based on the request path file extenstion. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Dispatcher (Maybe String) m a",
        "fct-source": "src/Network-Salvia-Handler-Extension.html#hExtension",
        "fct-type": "function",
        "title": "hExtension"
      },
      "index": {
        "description": "Request dispatcher based on the request path file extenstion",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hExtension",
        "normalized": "",
        "package": "salvia",
        "partial": "Extension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hExtensionRouter",
      "description": {
        "fct-descr": "\u003cp\u003eList dispatcher version of \u003ccode\u003e\u003ca\u003ehExtension\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher (Maybe String) m a",
        "fct-source": "src/Network-Salvia-Handler-Extension.html#hExtensionRouter",
        "fct-type": "function",
        "title": "hExtensionRouter"
      },
      "index": {
        "description": "List dispatcher version of hExtension",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hExtensionRouter",
        "normalized": "",
        "package": "salvia",
        "partial": "Extension Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFileResource\u003c/a\u003e\u003c/code\u003e but uses the path of the current request URI.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-File.html#hFile",
        "fct-type": "function",
        "title": "hFile"
      },
      "index": {
        "description": "Like hFileResource but uses the path of the current request URI",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFile",
        "normalized": "a()",
        "package": "salvia",
        "partial": "File",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileFilter",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFileResourceFilter\u003c/a\u003e\u003c/code\u003e but uses the path of the current request URI.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(String -\u003e String) -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-File.html#hFileFilter",
        "fct-type": "function",
        "title": "hFileFilter"
      },
      "index": {
        "description": "Like hFileResourceFilter but uses the path of the current request URI",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFileFilter",
        "normalized": "(String-\u003eString)-\u003ea()",
        "package": "salvia",
        "partial": "File Filter",
        "signature": "(String-\u003eString)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileResource",
      "description": {
        "fct-descr": "\u003cp\u003eServe a file from the filesystem indicated by the specified filepath. When\nthere is some kind of \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e the \u003ccode\u003e\u003ca\u003ehSafeIO\u003c/a\u003e\u003c/code\u003e function will be used to produce a\ncorresponding error response. The \u003ccode\u003e\u003ca\u003econtentType\u003c/a\u003e\u003c/code\u003e will be the mime-type based on\nthe filename extension using the \u003ccode\u003e\u003ca\u003emimetype\u003c/a\u003e\u003c/code\u003e function. The \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e will\nbe set the file's size.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-File.html#hFileResource",
        "fct-type": "function",
        "title": "hFileResource"
      },
      "index": {
        "description": "Serve file from the filesystem indicated by the specified filepath When there is some kind of IOError the hSafeIO function will be used to produce corresponding error response The contentType will be the mime-type based on the filename extension using the mimetype function The contentLength will be set the file size",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFileResource",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "File Resource",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileResourceFilter",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehFileResource\u003c/a\u003e\u003c/code\u003e handler, but with a custom filter over the content.\nThis function will assume the content is an UTF-8 encoded text file. Because of\nthe possibly unpredictable behavior of the filter, no \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e header\nwill be set using this handler.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(String -\u003e String) -\u003e FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-File.html#hFileResourceFilter",
        "fct-type": "function",
        "title": "hFileResourceFilter"
      },
      "index": {
        "description": "Like the hFileResource handler but with custom filter over the content This function will assume the content is an UTF-8 encoded text file Because of the possibly unpredictable behavior of the filter no contentLength header will be set using this handler",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFileResourceFilter",
        "normalized": "(String-\u003eString)-\u003eFilePath-\u003ea()",
        "package": "salvia",
        "partial": "File Resource Filter",
        "signature": "(String-\u003eString)-\u003eFilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eServe single directory by combining the \u003ccode\u003e\u003ca\u003ehDirectoryResource\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003ehFileResource\u003c/a\u003e\u003c/code\u003e handlers in the \u003ccode\u003e\u003ca\u003ehFileTypeDispatcher\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "FilePath-\u003e m ()",
        "fct-type": "function",
        "title": "hFileSystem"
      },
      "index": {
        "description": "Serve single directory by combining the hDirectoryResource and hFileResource handlers in the hFileTypeDispatcher",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFileSystem",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "File System",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileSystemNoIndexes",
      "description": {
        "fct-descr": "\u003cp\u003eServe single directory like \u003ccode\u003e\u003ca\u003ehFileSystem\u003c/a\u003e\u003c/code\u003e but do not show directory indices.\nInstead of an directory index an \u003ccode\u003e\u003ca\u003eForbidden\u003c/a\u003e\u003c/code\u003e response will be created.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "FilePath-\u003e m ()",
        "fct-type": "function",
        "title": "hFileSystemNoIndexes"
      },
      "index": {
        "description": "Serve single directory like hFileSystem but do not show directory indices Instead of an directory index an Forbidden response will be created",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFileSystemNoIndexes",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "File System No Indexes",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileTypeDispatcher",
      "description": {
        "fct-descr": "\u003cp\u003eDispatch based on file type; regular files or directories. The first handler\nspecified will be invoked in case the resource to be served is an directory,\nthe second handler otherwise. The path from the request URI will be appended to\nthe directory resource specified as a parameter, this new path will be used to\nlookup the real resource on the file system. Every request will be jailed in\nthe specified directory resource to prevent users from requesting arbitrary\nparts of the file system.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(FilePath -\u003e m ())-\u003e (FilePath -\u003e m ())-\u003e FilePath-\u003e m ()",
        "fct-type": "function",
        "title": "hFileTypeDispatcher"
      },
      "index": {
        "description": "Dispatch based on file type regular files or directories The first handler specified will be invoked in case the resource to be served is an directory the second handler otherwise The path from the request URI will be appended to the directory resource specified as parameter this new path will be used to lookup the real resource on the file system Every request will be jailed in the specified directory resource to prevent users from requesting arbitrary parts of the file system",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFileTypeDispatcher",
        "normalized": "(FilePath-\u003ea())-\u003e(FilePath-\u003ea())-\u003eFilePath-\u003ea()",
        "package": "salvia",
        "partial": "File Type Dispatcher",
        "signature": "(FilePath-\u003em())-\u003e(FilePath-\u003em())-\u003eFilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFlushHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eSend all the message headers directly over the socket.\n\u003c/p\u003e\u003cp\u003etodo: printer for rawResponse over response!!\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "d -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hFlushHeaders",
        "fct-type": "function",
        "title": "hFlushHeaders"
      },
      "index": {
        "description": "Send all the message headers directly over the socket todo printer for rawResponse over response",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFlushHeaders",
        "normalized": "a-\u003eb()",
        "package": "salvia",
        "partial": "Flush Headers",
        "signature": "d-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFlushHeadersOnly",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFlushHeaders\u003c/a\u003e\u003c/code\u003e but does not print status line, can be useful for CGI mode.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "d -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hFlushHeadersOnly",
        "fct-type": "function",
        "title": "hFlushHeadersOnly"
      },
      "index": {
        "description": "Like hFlushHeaders but does not print status line can be useful for CGI mode",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFlushHeadersOnly",
        "normalized": "a-\u003eb()",
        "package": "salvia",
        "partial": "Flush Headers Only",
        "signature": "d-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFlushQueue",
      "description": {
        "fct-descr": "\u003cp\u003eOne by one apply all enqueued send actions to the socket.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hFlushQueue",
        "fct-type": "function",
        "title": "hFlushQueue"
      },
      "index": {
        "description": "One by one apply all enqueued send actions to the socket",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFlushQueue",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Flush Queue",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFlushRequestHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFlushHeaders\u003c/a\u003e\u003c/code\u003e but specifically for the request headers.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hFlushRequestHeaders",
        "fct-type": "function",
        "title": "hFlushRequestHeaders"
      },
      "index": {
        "description": "Like hFlushHeaders but specifically for the request headers",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFlushRequestHeaders",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Flush Request Headers",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFlushResponseHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFlushHeaders\u003c/a\u003e\u003c/code\u003e but specifically for the response headers.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hFlushResponseHeaders",
        "fct-type": "function",
        "title": "hFlushResponseHeaders"
      },
      "index": {
        "description": "Like hFlushHeaders but specifically for the response headers",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hFlushResponseHeaders",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Flush Response Headers",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hHead",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehHead\u003c/a\u003e\u003c/code\u003e handler makes sure no \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body is sent to the client\nwhen the request is an HTTP \u003ccode\u003e\u003ca\u003eHEAD\u003c/a\u003e\u003c/code\u003e request. In the case of a \u003ccode\u003e\u003ca\u003eHEAD\u003c/a\u003e\u003c/code\u003e request the\nspecified sub handler will be executed under the assumption that the request\nwas a \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e request, otherwise this handler will act as the identify function.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Head.html#hHead",
        "fct-type": "function",
        "title": "hHead"
      },
      "index": {
        "description": "The hHead handler makes sure no HTTP Response body is sent to the client when the request is an HTTP HEAD request In the case of HEAD request the specified sub handler will be executed under the assumption that the request was GET request otherwise this handler will act as the identify function",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hHead",
        "normalized": "a b-\u003ea b",
        "package": "salvia",
        "partial": "Head",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hIOError",
      "description": {
        "fct-descr": "\u003cp\u003eMap an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e to a default style error response.\n\u003c/p\u003e\u003cp\u003eThe mapping from an IO error to an error response is rather straightforward:\n\u003c/p\u003e\u003cpre\u003e  | isDoesNotExistError e = hError NotFound\n  | isAlreadyInUseError e = hError ServiceUnavailable\n  | isPermissionError   e = hError Forbidden\n  | True                  = hError InternalServerError\n\u003c/pre\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "IOError -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Error.html#hIOError",
        "fct-type": "function",
        "title": "hIOError"
      },
      "index": {
        "description": "Map an IOError to default style error response The mapping from an IO error to an error response is rather straightforward isDoesNotExistError hError NotFound isAlreadyInUseError hError ServiceUnavailable isPermissionError hError Forbidden True hError InternalServerError",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hIOError",
        "normalized": "IOError-\u003ea()",
        "package": "salvia",
        "partial": "IOError",
        "signature": "IOError-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hKeepAlive",
      "description": {
        "fct-descr": "\u003cp\u003eRun a handler and keep the connection open for potential consecutive requests.\nThe connection will only be closed after a request finished and one or more of\nthe following criteria are met:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e There is no \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e set in the response headers. When this is the\n  case the connection cannot be kept alive.\n\u003c/li\u003e\u003cli\u003e The client has set the \u003ccode\u003e\u003ca\u003econnection\u003c/a\u003e\u003c/code\u003e header field to \u003ccode\u003eclose\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The connection has already been closed, possible due to IO errors.\n\u003c/li\u003e\u003cli\u003e The HTTP version is HTTP/1.0.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m a -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Close.html#hKeepAlive",
        "fct-type": "function",
        "title": "hKeepAlive"
      },
      "index": {
        "description": "Run handler and keep the connection open for potential consecutive requests The connection will only be closed after request finished and one or more of the following criteria are met There is no contentLength set in the response headers When this is the case the connection cannot be kept alive The client has set the connection header field to close The connection has already been closed possible due to IO errors The HTTP version is HTTP",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hKeepAlive",
        "normalized": "a b-\u003ea()",
        "package": "salvia",
        "partial": "Keep Alive",
        "signature": "m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hListDispatch",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a dispatcher function into a list dispatcher. This enables handler\nrouting based on arbitrary values from the context. When non of the predicates\nin the \u003ccode\u003e\u003ca\u003eListDispatcher\u003c/a\u003e\u003c/code\u003e type hold the default handler will be invoked.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Dispatcher a m b -\u003e ListDispatcher a m b",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#hListDispatch",
        "fct-type": "function",
        "title": "hListDispatch"
      },
      "index": {
        "description": "Turns dispatcher function into list dispatcher This enables handler routing based on arbitrary values from the context When non of the predicates in the ListDispatcher type hold the default handler will be invoked",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hListDispatch",
        "normalized": "Dispatcher a b c-\u003eListDispatcher a b c",
        "package": "salvia",
        "partial": "List Dispatch",
        "signature": "Dispatcher a m b-\u003eListDispatcher a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hLog",
      "description": {
        "fct-descr": "\u003cp\u003eA simple logger that prints a summery of the request information to\nthe specified file handle.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Handle -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Log.html#hLog",
        "fct-type": "function",
        "title": "hLog"
      },
      "index": {
        "description": "simple logger that prints summery of the request information to the specified file handle",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hLog",
        "normalized": "Handle-\u003ea()",
        "package": "salvia",
        "partial": "Log",
        "signature": "Handle-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hMethod",
      "description": {
        "fct-descr": "\u003cp\u003eRequest dispatcher based on the HTTP request \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Dispatcher Method m a",
        "fct-source": "src/Network-Salvia-Handler-Method.html#hMethod",
        "fct-type": "function",
        "title": "hMethod"
      },
      "index": {
        "description": "Request dispatcher based on the HTTP request Method",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hMethod",
        "normalized": "",
        "package": "salvia",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hMethodRouter",
      "description": {
        "fct-descr": "\u003cp\u003eRequest list dispatcher based on the \u003ccode\u003e\u003ca\u003ehMethod\u003c/a\u003e\u003c/code\u003e dispatcher. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher Method m ()",
        "fct-source": "src/Network-Salvia-Handler-Method.html#hMethodRouter",
        "fct-type": "function",
        "title": "hMethodRouter"
      },
      "index": {
        "description": "Request list dispatcher based on the hMethod dispatcher",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hMethodRouter",
        "normalized": "ListDispatcher Method a()",
        "package": "salvia",
        "partial": "Method Router",
        "signature": "ListDispatcher Method m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hNewCookie",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient method for creating cookies that expire in the near future and are\nbound to the domain and port this server runs on. The path will be locked to\nroot. If the second argument is set, the cookie will be valid for all\nsubdomains.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "t -\u003e Bool -\u003e m Cookie",
        "fct-source": "src/Network-Salvia-Handler-Cookie.html#hNewCookie",
        "fct-type": "function",
        "title": "hNewCookie"
      },
      "index": {
        "description": "Convenient method for creating cookies that expire in the near future and are bound to the domain and port this server runs on The path will be locked to root If the second argument is set the cookie will be valid for all subdomains",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hNewCookie",
        "normalized": "a-\u003eBool-\u003eb Cookie",
        "package": "salvia",
        "partial": "New Cookie",
        "signature": "t-\u003eBool-\u003em Cookie"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hParameters",
      "description": {
        "fct-descr": "\u003cp\u003eTry to parse the message body, as a result of \u003ccode\u003e\u003ca\u003ehBodyText\u003c/a\u003e\u003c/code\u003e, as URI encoded \u003ccode\u003e\u003ca\u003ePOST\u003c/a\u003e\u003c/code\u003e\nparameters. Returns as a URI \u003ccode\u003eParameter\u003c/code\u003e type or nothing when parsing fails.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "d -\u003e String -\u003e m Parameters",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hParameters",
        "fct-type": "function",
        "title": "hParameters"
      },
      "index": {
        "description": "Try to parse the message body as result of hBodyText as URI encoded POST parameters Returns as URI Parameter type or nothing when parsing fails",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hParameters",
        "normalized": "a-\u003eString-\u003eb Parameters",
        "package": "salvia",
        "partial": "Parameters",
        "signature": "d-\u003eString-\u003em Parameters"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehParser\u003c/a\u003e\u003c/code\u003e handler is used to parse the raw \u003ccode\u003eHTTP\u003c/code\u003e message into the\n\u003ccode\u003eMessage\u003c/code\u003e data type. This handler is generally used as (one of) the first\nhandlers in a client or server environment. The first handler argument is\nexecuted when the message is invalid, possibly due to parser errors, and is\nparametrized with the error string. The second handler argument is executed\nwhen the message is valid. When the message could not be parsed within the time\nspecified with the first argument the function silently returns.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(Http d -\u003e m b)-\u003e (String -\u003e Either String (Http d))-\u003e Int-\u003e (String -\u003e m a)-\u003e m a-\u003e m (Maybe a)",
        "fct-type": "function",
        "title": "hParser"
      },
      "index": {
        "description": "The hParser handler is used to parse the raw HTTP message into the Message data type This handler is generally used as one of the first handlers in client or server environment The first handler argument is executed when the message is invalid possibly due to parser errors and is parametrized with the error string The second handler argument is executed when the message is valid When the message could not be parsed within the time specified with the first argument the function silently returns",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hParser",
        "normalized": "(Http a-\u003eb c)-\u003e(String-\u003eEither String(Http a))-\u003eInt-\u003e(String-\u003eb d)-\u003eb d-\u003eb(Maybe d)",
        "package": "salvia",
        "partial": "Parser",
        "signature": "(Http d-\u003em b)-\u003e(String-\u003eEither String(Http d))-\u003eInt-\u003e(String-\u003em a)-\u003em a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPath",
      "description": {
        "fct-descr": "\u003cp\u003eRequest dispatcher based on the request path. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Dispatcher String m a",
        "fct-source": "src/Network-Salvia-Handler-Path.html#hPath",
        "fct-type": "function",
        "title": "hPath"
      },
      "index": {
        "description": "Request dispatcher based on the request path",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hPath",
        "normalized": "",
        "package": "salvia",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPathRouter",
      "description": {
        "fct-descr": "\u003cp\u003eList dispatcher version of \u003ccode\u003e\u003ca\u003ehPath\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher String m a",
        "fct-source": "src/Network-Salvia-Handler-Path.html#hPathRouter",
        "fct-type": "function",
        "title": "hPathRouter"
      },
      "index": {
        "description": "List dispatcher version of hPath",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hPathRouter",
        "normalized": "",
        "package": "salvia",
        "partial": "Path Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPortRouter",
      "description": {
        "fct-descr": "\u003cp\u003eDispatcher based on the port number of the \u003ccode\u003e\u003ca\u003ehostname\u003c/a\u003e\u003c/code\u003e request header. When no\nport number is available in the hostname header port 80 will be assumed.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher Int m b",
        "fct-source": "src/Network-Salvia-Handler-VirtualHosting.html#hPortRouter",
        "fct-type": "function",
        "title": "hPortRouter"
      },
      "index": {
        "description": "Dispatcher based on the port number of the hostname request header When no port number is available in the hostname header port will be assumed",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hPortRouter",
        "normalized": "",
        "package": "salvia",
        "partial": "Port Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eRequest dispatcher based on a prefix of the request path. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Dispatcher String m a",
        "fct-source": "src/Network-Salvia-Handler-Path.html#hPrefix",
        "fct-type": "function",
        "title": "hPrefix"
      },
      "index": {
        "description": "Request dispatcher based on prefix of the request path",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hPrefix",
        "normalized": "",
        "package": "salvia",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPrefixRouter",
      "description": {
        "fct-descr": "\u003cp\u003eList dispatcher version of \u003ccode\u003e\u003ca\u003ehPrefix\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher String m a",
        "fct-source": "src/Network-Salvia-Handler-Path.html#hPrefixRouter",
        "fct-type": "function",
        "title": "hPrefixRouter"
      },
      "index": {
        "description": "List dispatcher version of hPrefix",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hPrefixRouter",
        "normalized": "",
        "package": "salvia",
        "partial": "Prefix Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPutFileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a browseable filesystem handler (like \u003ccode\u003e\u003ca\u003ehFileSystem\u003c/a\u003e\u003c/code\u003e) but make all files\nwriteable by a \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e request. Files that do not exists will be created as long\nas the directory in which they will be created exists.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Put.html#hPutFileSystem",
        "fct-type": "function",
        "title": "hPutFileSystem"
      },
      "index": {
        "description": "Create browseable filesystem handler like hFileSystem but make all files writeable by PUT request Files that do not exists will be created as long as the directory in which they will be created exists",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hPutFileSystem",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "Put File System",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPutResource",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes the \u003ccode\u003e\u003ca\u003ehStore\u003c/a\u003e\u003c/code\u003e handler when the request is a \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e request and invokes\nthe fallback handler otherwiser.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(FilePath -\u003e m ()) -\u003e FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Put.html#hPutResource",
        "fct-type": "function",
        "title": "hPutResource"
      },
      "index": {
        "description": "Invokes the hStore handler when the request is PUT request and invokes the fallback handler otherwiser",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hPutResource",
        "normalized": "(FilePath-\u003ea())-\u003eFilePath-\u003ea()",
        "package": "salvia",
        "partial": "Put Resource",
        "signature": "(FilePath-\u003em())-\u003eFilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hQueryParameters",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to fetch the URI parameters from the request. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m Parameters",
        "fct-source": "src/Network-Salvia-Handler-Path.html#hQueryParameters",
        "fct-type": "function",
        "title": "hQueryParameters"
      },
      "index": {
        "description": "Helper function to fetch the URI parameters from the request",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hQueryParameters",
        "normalized": "",
        "package": "salvia",
        "partial": "Query Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRawBody",
      "description": {
        "fct-descr": "\u003cp\u003eFirst (possibly naive) handler to retreive the client request or server\nresponse body as a raw lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. This probably does not handle all\nthe quirks that the HTTP protocol specifies, but it does the job for now. When\na \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e header field is available only this fixed number of bytes\nwill read from the socket.  When neither the \u003ccode\u003e\u003ca\u003ekeepAlive\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e\nheader fields are available the entire payload of the request will be read from\nthe socket. The function is parametrized with a the direction of the HTTP\nmessage, client request or server response.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "d -\u003e m ByteString",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRawBody",
        "fct-type": "function",
        "title": "hRawBody"
      },
      "index": {
        "description": "First possibly naive handler to retreive the client request or server response body as raw lazy ByteString This probably does not handle all the quirks that the HTTP protocol specifies but it does the job for now When contentLength header field is available only this fixed number of bytes will read from the socket When neither the keepAlive and contentLength header fields are available the entire payload of the request will be read from the socket The function is parametrized with the direction of the HTTP message client request or server response",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRawBody",
        "normalized": "a-\u003eb ByteString",
        "package": "salvia",
        "partial": "Raw Body",
        "signature": "d-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRawRequestBody",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ByteString",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRawRequestBody",
        "fct-type": "function",
        "title": "hRawRequestBody"
      },
      "index": {
        "description": "Like hRawBody but specifically for Http Request",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRawRequestBody",
        "normalized": "",
        "package": "salvia",
        "partial": "Raw Request Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRawResponseBody",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ByteString",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRawResponseBody",
        "fct-type": "function",
        "title": "hRawResponseBody"
      },
      "index": {
        "description": "Like hRawBody but specifically for Http Request",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRawResponseBody",
        "normalized": "",
        "package": "salvia",
        "partial": "Raw Response Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRedirect",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect a client to another location by creating a \u003ccode\u003e\u003ca\u003eMovedPermanently\u003c/a\u003e\u003c/code\u003e response\nmessage with the specified \u003ccode\u003eURI\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003elocation\u003c/a\u003e\u003c/code\u003e header.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Redirect.html#hRedirect",
        "fct-type": "function",
        "title": "hRedirect"
      },
      "index": {
        "description": "Redirect client to another location by creating MovedPermanently response message with the specified URI in the location header",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRedirect",
        "normalized": "String-\u003ea()",
        "package": "salvia",
        "partial": "Redirect",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestBodyStringUTF8",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyStringUTF8\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m String",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRequestBodyStringUTF8",
        "fct-type": "function",
        "title": "hRequestBodyStringUTF8"
      },
      "index": {
        "description": "Like hBodyStringUTF8 but specifically for Http Request",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRequestBodyStringUTF8",
        "normalized": "",
        "package": "salvia",
        "partial": "Request Body String UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestBodyText",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyText\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m Text",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRequestBodyText",
        "fct-type": "function",
        "title": "hRequestBodyText"
      },
      "index": {
        "description": "Like hBodyText but specifically for Http Request",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRequestBodyText",
        "normalized": "String-\u003ea Text",
        "package": "salvia",
        "partial": "Request Body Text",
        "signature": "String-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestDispatch",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehDispatch\u003c/a\u003e\u003c/code\u003e but always dispatches on a (part of) the `HTTP\nRequest' part of the context.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(Http Request :-\u003e b) -\u003e (t -\u003e b -\u003e Bool) -\u003e Dispatcher t m c",
        "fct-source": "src/Network-Salvia-Handler-Dispatching.html#hRequestDispatch",
        "fct-type": "function",
        "title": "hRequestDispatch"
      },
      "index": {
        "description": "Like the hDispatch but always dispatches on part of the HTTP Request part of the context",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRequestDispatch",
        "normalized": "(Http Request-\u003ea)-\u003e(b-\u003ea-\u003eBool)-\u003eDispatcher b c d",
        "package": "salvia",
        "partial": "Request Dispatch",
        "signature": "(Http Request-\u003eb)-\u003e(t-\u003eb-\u003eBool)-\u003eDispatcher t m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestParameters",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehParameters\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m Parameters",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hRequestParameters",
        "fct-type": "function",
        "title": "hRequestParameters"
      },
      "index": {
        "description": "Like hParameters but specifically for HTTP Request",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRequestParameters",
        "normalized": "String-\u003ea Parameters",
        "package": "salvia",
        "partial": "Request Parameters",
        "signature": "String-\u003em Parameters"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestParser",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehParser\u003c/a\u003e\u003c/code\u003e but always parses \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003eRequests\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Int-\u003e (String -\u003e m a)-\u003e m a-\u003e m (Maybe a)",
        "fct-type": "function",
        "title": "hRequestParser"
      },
      "index": {
        "description": "Like the hParser but always parses HTTP Requests",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRequestParser",
        "normalized": "Int-\u003e(String-\u003ea b)-\u003ea b-\u003ea(Maybe b)",
        "package": "salvia",
        "partial": "Request Parser",
        "signature": "Int-\u003e(String-\u003em a)-\u003em a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestPrinter",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehRequestPrinter\u003c/a\u003e\u003c/code\u003e handler prints the entire HTTP request including the\nheaders and the body to the socket towards the server. This handler is\ngenerally used as (one of) the last handler in a server environment.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hRequestPrinter",
        "fct-type": "function",
        "title": "hRequestPrinter"
      },
      "index": {
        "description": "The hRequestPrinter handler prints the entire HTTP request including the headers and the body to the socket towards the server This handler is generally used as one of the last handler in server environment",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRequestPrinter",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Request Printer",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResource",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a handler that is parametrized by a file resources into a regular handler\nthat utilizes the path part of the request URI as the resource identifier.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(FilePath -\u003e m a) -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-File.html#hResource",
        "fct-type": "function",
        "title": "hResource"
      },
      "index": {
        "description": "Turn handler that is parametrized by file resources into regular handler that utilizes the path part of the request URI as the resource identifier",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hResource",
        "normalized": "(FilePath-\u003ea b)-\u003ea b",
        "package": "salvia",
        "partial": "Resource",
        "signature": "(FilePath-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResponseBodyStringUTF8",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyStringUTF8\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m String",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hResponseBodyStringUTF8",
        "fct-type": "function",
        "title": "hResponseBodyStringUTF8"
      },
      "index": {
        "description": "Like hBodyStringUTF8 but specifically for Http Response",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hResponseBodyStringUTF8",
        "normalized": "",
        "package": "salvia",
        "partial": "Response Body String UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResponseBodyText",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyText\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m Text",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hResponseBodyText",
        "fct-type": "function",
        "title": "hResponseBodyText"
      },
      "index": {
        "description": "Like hBodyText but specifically for Http Response",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hResponseBodyText",
        "normalized": "String-\u003ea Text",
        "package": "salvia",
        "partial": "Response Body Text",
        "signature": "String-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResponseParameters",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehParameters\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m Parameters",
        "fct-source": "src/Network-Salvia-Handler-Body.html#hResponseParameters",
        "fct-type": "function",
        "title": "hResponseParameters"
      },
      "index": {
        "description": "Like hParameters but specifically for HTTP Response",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hResponseParameters",
        "normalized": "String-\u003ea Parameters",
        "package": "salvia",
        "partial": "Response Parameters",
        "signature": "String-\u003em Parameters"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResponseParser",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehParser\u003c/a\u003e\u003c/code\u003e but always parses \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Int-\u003e (String -\u003e m a)-\u003e m a-\u003e m (Maybe a)",
        "fct-type": "function",
        "title": "hResponseParser"
      },
      "index": {
        "description": "Like the hParser but always parses HTTP Response",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hResponseParser",
        "normalized": "Int-\u003e(String-\u003ea b)-\u003ea b-\u003ea(Maybe b)",
        "package": "salvia",
        "partial": "Response Parser",
        "signature": "Int-\u003e(String-\u003em a)-\u003em a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResponsePrinter",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehResponsePrinter\u003c/a\u003e\u003c/code\u003e handler prints the entire HTTP response including the\nheaders and the body to the socket towards the client. This handler is\ngenerally used as (one of) the last handler in a client environment.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "m ()",
        "fct-source": "src/Network-Salvia-Handler-Printer.html#hResponsePrinter",
        "fct-type": "function",
        "title": "hResponsePrinter"
      },
      "index": {
        "description": "The hResponsePrinter handler prints the entire HTTP response including the headers and the body to the socket towards the client This handler is generally used as one of the last handler in client environment",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hResponsePrinter",
        "normalized": "a()",
        "package": "salvia",
        "partial": "Response Printer",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRewrite",
      "description": {
        "fct-descr": "\u003cp\u003eRun an handler in a modified context in which the request \u003ccode\u003e\u003ca\u003eUri\u003c/a\u003e\u003c/code\u003e has been\nchanged by the specified modifier function. After the handler completes the \u003ccode\u003e\u003ca\u003eUri\u003c/a\u003e\u003c/code\u003e\nremains untouched.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(Uri -\u003e Uri) -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hRewrite",
        "fct-type": "function",
        "title": "hRewrite"
      },
      "index": {
        "description": "Run an handler in modified context in which the request Uri has been changed by the specified modifier function After the handler completes the Uri remains untouched",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRewrite",
        "normalized": "(Uri-\u003eUri)-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "Rewrite",
        "signature": "(Uri-\u003eUri)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRewriteExt",
      "description": {
        "fct-descr": "\u003cp\u003eRun handler in a context with a modified file extension. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(Maybe String -\u003e Maybe String) -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hRewriteExt",
        "fct-type": "function",
        "title": "hRewriteExt"
      },
      "index": {
        "description": "Run handler in context with modified file extension",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRewriteExt",
        "normalized": "(Maybe String-\u003eMaybe String)-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "Rewrite Ext",
        "signature": "(Maybe String-\u003eMaybe String)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRewriteHost",
      "description": {
        "fct-descr": "\u003cp\u003eRun handler in a context with a modified host. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(String -\u003e String) -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hRewriteHost",
        "fct-type": "function",
        "title": "hRewriteHost"
      },
      "index": {
        "description": "Run handler in context with modified host",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRewriteHost",
        "normalized": "(String-\u003eString)-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "Rewrite Host",
        "signature": "(String-\u003eString)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRewritePath",
      "description": {
        "fct-descr": "\u003cp\u003eRun handler in a context with a modified path. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(FilePath -\u003e FilePath) -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hRewritePath",
        "fct-type": "function",
        "title": "hRewritePath"
      },
      "index": {
        "description": "Run handler in context with modified path",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hRewritePath",
        "normalized": "(FilePath-\u003eFilePath)-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "Rewrite Path",
        "signature": "(FilePath-\u003eFilePath)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hSafeIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an handler with the result of an IO action. When the IO actions\n fails a default error handler will be executed.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "IO a -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Error.html#hSafeIO",
        "fct-type": "function",
        "title": "hSafeIO"
      },
      "index": {
        "description": "Execute an handler with the result of an IO action When the IO actions fails default error handler will be executed",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hSafeIO",
        "normalized": "IO a-\u003e(a-\u003eb())-\u003eb()",
        "package": "salvia",
        "partial": "Safe IO",
        "signature": "IO a-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hSetCookie",
      "description": {
        "fct-descr": "\u003cp\u003eSet the `Set-Cookie` HTTP response header with the specified \u003ccode\u003e\u003ca\u003eCookies\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Cookies -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Cookie.html#hSetCookie",
        "fct-type": "function",
        "title": "hSetCookie"
      },
      "index": {
        "description": "Set the Set-Cookie HTTP response header with the specified Cookies",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hSetCookie",
        "normalized": "Cookies-\u003ea()",
        "package": "salvia",
        "partial": "Set Cookie",
        "signature": "Cookies-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hStore",
      "description": {
        "fct-descr": "\u003cp\u003eThis handler takes a FilePath and will try to store the entire request body in\nthat file. When the request body could for some reason not be fetch a\n\u003ccode\u003e\u003ca\u003eBadRequest\u003c/a\u003e\u003c/code\u003e error response will be created. When an IO error occurs the\n\u003ccode\u003e\u003ca\u003ehIOError\u003c/a\u003e\u003c/code\u003e function is used to setup an apropriate response.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/Network-Salvia-Handler-Put.html#hStore",
        "fct-type": "function",
        "title": "hStore"
      },
      "index": {
        "description": "This handler takes FilePath and will try to store the entire request body in that file When the request body could for some reason not be fetch BadRequest error response will be created When an IO error occurs the hIOError function is used to setup an apropriate response",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hStore",
        "normalized": "FilePath-\u003ea()",
        "package": "salvia",
        "partial": "Store",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hUri",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a handler that is parametrized by a URI into a regular handler that\nutilizes the request URI as the resource identifier.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "(Uri -\u003e m a) -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-File.html#hUri",
        "fct-type": "function",
        "title": "hUri"
      },
      "index": {
        "description": "Turn handler that is parametrized by URI into regular handler that utilizes the request URI as the resource identifier",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hUri",
        "normalized": "(Uri-\u003ea b)-\u003ea b",
        "package": "salvia",
        "partial": "Uri",
        "signature": "(Uri-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hVirtualHosting",
      "description": {
        "fct-descr": "\u003cp\u003eDispatcher based on the host part of the \u003ccode\u003e\u003ca\u003ehostname\u003c/a\u003e\u003c/code\u003e request header. Everything\nnot part of the real hostname (like the port number) will be ignored. When the\nexpected hostname starts with a dot (like \u003ca\u003e.mydomain.com\u003c/a\u003e)  this indicates that\nall sub-domains of this domain will match as well.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "ListDispatcher String m b",
        "fct-source": "src/Network-Salvia-Handler-VirtualHosting.html#hVirtualHosting",
        "fct-type": "function",
        "title": "hVirtualHosting"
      },
      "index": {
        "description": "Dispatcher based on the host part of the hostname request header Everything not part of the real hostname like the port number will be ignored When the expected hostname starts with dot like mydomain.com this indicates that all sub-domains of this domain will match as well",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hVirtualHosting",
        "normalized": "",
        "package": "salvia",
        "partial": "Virtual Hosting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hWithDir",
      "description": {
        "fct-descr": "\u003cp\u003eRun handler in a context with a modified path. The specified prefix will be\nprepended to the path.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hWithDir",
        "fct-type": "function",
        "title": "hWithDir"
      },
      "index": {
        "description": "Run handler in context with modified path The specified prefix will be prepended to the path",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hWithDir",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "With Dir",
        "signature": "String-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hWithoutDir",
      "description": {
        "fct-descr": "\u003cp\u003eRun handler in a context with a modified path. The specified prefix will be\nstripped from the path.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m a -\u003e m a",
        "fct-source": "src/Network-Salvia-Handler-Rewrite.html#hWithoutDir",
        "fct-type": "function",
        "title": "hWithoutDir"
      },
      "index": {
        "description": "Run handler in context with modified path The specified prefix will be stripped from the path",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "hWithoutDir",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "salvia",
        "partial": "Without Dir",
        "signature": "String-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:range",
      "description": {
        "fct-descr": "\u003cp\u003eAccess the \u003cem\u003eRange\u003c/em\u003e header field.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Http Request :-\u003e Maybe Range",
        "fct-source": "src/Network-Salvia-Handler-Range.html#range",
        "fct-type": "function",
        "title": "range"
      },
      "index": {
        "description": "Access the Range header field",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "range",
        "normalized": "Http Request-\u003eMaybe Range",
        "package": "salvia",
        "partial": "",
        "signature": "Http Request-\u003eMaybe Range"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:rangeL",
      "description": {
        "fct-descr": "\u003cp\u003eLens containing parser and pretty-printer for HTTP ranges.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "String :\u003c-\u003e: Range",
        "fct-source": "src/Network-Salvia-Handler-Range.html#rangeL",
        "fct-type": "function",
        "title": "rangeL"
      },
      "index": {
        "description": "Lens containing parser and pretty-printer for HTTP ranges",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "rangeL",
        "normalized": "String-\u003eRange",
        "package": "salvia",
        "partial": "",
        "signature": "String-\u003eRange"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:readNonEmptyLines",
      "description": {
        "fct-module": "Network.Salvia.Handlers",
        "fct-package": "salvia",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "src/Network-Salvia-Handler-Parser.html#readNonEmptyLines",
        "fct-type": "function",
        "title": "readNonEmptyLines"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Handlers",
        "module": "Network.Salvia.Handlers",
        "name": "readNonEmptyLines",
        "normalized": "Handle-\u003eIO String",
        "package": "salvia",
        "partial": "Non Empty Lines",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#",
      "description": {
        "fct-module": "Network.Salvia.Impl.Config",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Impl-Config.html",
        "fct-type": "module",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Config",
        "module": "Network.Salvia.Impl.Config",
        "name": "Config",
        "normalized": "",
        "package": "salvia",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eThe HTTP server configuration contains some network settings the server needs\nknow before being able to run. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Config",
        "fct-package": "salvia",
        "fct-signature": "data",
        "fct-source": "src/Network-Salvia-Impl-Config.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "The HTTP server configuration contains some network settings the server needs know before being able to run",
        "hierarchy": "Network Salvia Impl Config",
        "module": "Network.Salvia.Impl.Config",
        "name": "Config",
        "normalized": "",
        "package": "salvia",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:Config",
      "description": {
        "fct-module": "Network.Salvia.Impl.Config",
        "fct-package": "salvia",
        "fct-signature": "Config",
        "fct-source": "src/Network-Salvia-Impl-Config.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Config",
        "module": "Network.Salvia.Impl.Config",
        "name": "Config",
        "normalized": "",
        "package": "salvia",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:adminMail",
      "description": {
        "fct-descr": "\u003cp\u003eServer admin email address.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Config",
        "fct-package": "salvia",
        "fct-signature": "String",
        "fct-source": "src/Network-Salvia-Impl-Config.html#Config",
        "fct-type": "function",
        "title": "adminMail"
      },
      "index": {
        "description": "Server admin email address",
        "hierarchy": "Network Salvia Impl Config",
        "module": "Network.Salvia.Impl.Config",
        "name": "adminMail",
        "normalized": "",
        "package": "salvia",
        "partial": "Mail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:backlog",
      "description": {
        "fct-descr": "\u003cp\u003eTCP backlog.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Config",
        "fct-package": "salvia",
        "fct-signature": "Int",
        "fct-source": "src/Network-Salvia-Impl-Config.html#Config",
        "fct-type": "function",
        "title": "backlog"
      },
      "index": {
        "description": "TCP backlog",
        "hierarchy": "Network Salvia Impl Config",
        "module": "Network.Salvia.Impl.Config",
        "name": "backlog",
        "normalized": "",
        "package": "salvia",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eThe default server configuration sets some safe default values. The server will\nby default bind to 0.0.0.0 (\u003ccode\u003e\u003ca\u003eiNADDR_ANY\u003c/a\u003e\u003c/code\u003e) at port 8080. The default value for\nthe TCP backlog is 64.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Config",
        "fct-package": "salvia",
        "fct-signature": "Config",
        "fct-source": "src/Network-Salvia-Impl-Config.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "The default server configuration sets some safe default values The server will by default bind to iNADDR ANY at port The default value for the TCP backlog is",
        "hierarchy": "Network Salvia Impl Config",
        "module": "Network.Salvia.Impl.Config",
        "name": "defaultConfig",
        "normalized": "",
        "package": "salvia",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:hostname",
      "description": {
        "fct-descr": "\u003cp\u003eServer hostname.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Config",
        "fct-package": "salvia",
        "fct-signature": "String",
        "fct-source": "src/Network-Salvia-Impl-Config.html#Config",
        "fct-type": "function",
        "title": "hostname"
      },
      "index": {
        "description": "Server hostname",
        "hierarchy": "Network Salvia Impl Config",
        "module": "Network.Salvia.Impl.Config",
        "name": "hostname",
        "normalized": "",
        "package": "salvia",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:listenOn",
      "description": {
        "fct-descr": "\u003cp\u003eAddress port combinations to listen on.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Config",
        "fct-package": "salvia",
        "fct-signature": "[SockAddr]",
        "fct-source": "src/Network-Salvia-Impl-Config.html#Config",
        "fct-type": "function",
        "title": "listenOn"
      },
      "index": {
        "description": "Address port combinations to listen on",
        "hierarchy": "Network Salvia Impl Config",
        "module": "Network.Salvia.Impl.Config",
        "name": "listenOn",
        "normalized": "[SockAddr]",
        "package": "salvia",
        "partial": "On",
        "signature": "[SockAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#",
      "description": {
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Impl-Context.html",
        "fct-type": "module",
        "title": "Context"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "Context",
        "normalized": "",
        "package": "salvia",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#t:Context",
      "description": {
        "fct-descr": "\u003cp\u003eA generic handler context that contains all the information needed by the\nrequest handlers to perform their task and to set up a proper response. All the\nfields in the context are accessible using the first class labels defined\nbelow. \n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "data",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "data",
        "title": "Context"
      },
      "index": {
        "description": "generic handler context that contains all the information needed by the request handlers to perform their task and to set up proper response All the fields in the context are accessible using the first class labels defined below",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "Context",
        "normalized": "",
        "package": "salvia",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:Context",
      "description": {
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "Context"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "Context",
        "normalized": "",
        "package": "salvia",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cAdminMail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "String",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cAdminMail"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cAdminMail",
        "normalized": "",
        "package": "salvia",
        "partial": "Admin Mail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cClientAddr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "SockAddr",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cClientAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cClientAddr",
        "normalized": "",
        "package": "salvia",
        "partial": "Client Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cHandle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Handle",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cHandle",
        "normalized": "",
        "package": "salvia",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cListenOn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "[SockAddr]",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cListenOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cListenOn",
        "normalized": "[SockAddr]",
        "package": "salvia",
        "partial": "Listen On",
        "signature": "[SockAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cPayload",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "p",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cPayload"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cPayload",
        "normalized": "",
        "package": "salvia",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cQueue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "SendQueue",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cQueue",
        "normalized": "",
        "package": "salvia",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cRawRequest",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Http Request",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cRawRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cRawRequest",
        "normalized": "",
        "package": "salvia",
        "partial": "Raw Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cRawResponse",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Http Response",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cRawResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cRawResponse",
        "normalized": "",
        "package": "salvia",
        "partial": "Raw Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cRequest",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Http Request",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cRequest",
        "normalized": "",
        "package": "salvia",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cResponse",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Http Response",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cResponse",
        "normalized": "",
        "package": "salvia",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cServerAddr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "SockAddr",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cServerAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cServerAddr",
        "normalized": "",
        "package": "salvia",
        "partial": "Server Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cServerHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "String",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cServerHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cServerHost",
        "normalized": "",
        "package": "salvia",
        "partial": "Server Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cSocket",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Socket",
        "fct-source": "src/Network-Salvia-Impl-Context.html#Context",
        "fct-type": "function",
        "title": "_cSocket"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "_cSocket",
        "normalized": "",
        "package": "salvia",
        "partial": "Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cAdminMail",
      "description": {
        "fct-descr": "\u003cp\u003eThe mail address of the server adminstrator.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e String",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cAdminMail",
        "fct-type": "function",
        "title": "cAdminMail"
      },
      "index": {
        "description": "The mail address of the server adminstrator",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cAdminMail",
        "normalized": "Context a-\u003eString",
        "package": "salvia",
        "partial": "Admin Mail",
        "signature": "Context p-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cClientAddr",
      "description": {
        "fct-descr": "\u003cp\u003eClient address.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e SockAddr",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cClientAddr",
        "fct-type": "function",
        "title": "cClientAddr"
      },
      "index": {
        "description": "Client address",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cClientAddr",
        "normalized": "Context a-\u003eSockAddr",
        "package": "salvia",
        "partial": "Client Addr",
        "signature": "Context p-\u003eSockAddr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cHandle",
      "description": {
        "fct-descr": "\u003cp\u003eFile descriptor associated with socket for the connection to the peer.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e Handle",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cHandle",
        "fct-type": "function",
        "title": "cHandle"
      },
      "index": {
        "description": "File descriptor associated with socket for the connection to the peer",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cHandle",
        "normalized": "Context a-\u003eHandle",
        "package": "salvia",
        "partial": "Handle",
        "signature": "Context p-\u003eHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cListenOn",
      "description": {
        "fct-descr": "\u003cp\u003eThe socket address(es) the server is listening on.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e [SockAddr]",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cListenOn",
        "fct-type": "function",
        "title": "cListenOn"
      },
      "index": {
        "description": "The socket address es the server is listening on",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cListenOn",
        "normalized": "Context a-\u003e[SockAddr]",
        "package": "salvia",
        "partial": "Listen On",
        "signature": "Context p-\u003e[SockAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cPayload",
      "description": {
        "fct-descr": "\u003cp\u003eConnection wide payload.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e p",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cPayload",
        "fct-type": "function",
        "title": "cPayload"
      },
      "index": {
        "description": "Connection wide payload",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cPayload",
        "normalized": "Context a-\u003ea",
        "package": "salvia",
        "partial": "Payload",
        "signature": "Context p-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cQueue",
      "description": {
        "fct-descr": "\u003cp\u003eThe queue of send actions.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e SendQueue",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cQueue",
        "fct-type": "function",
        "title": "cQueue"
      },
      "index": {
        "description": "The queue of send actions",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cQueue",
        "normalized": "Context a-\u003eSendQueue",
        "package": "salvia",
        "partial": "Queue",
        "signature": "Context p-\u003eSendQueue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cRawRequest",
      "description": {
        "fct-descr": "\u003cp\u003eThe unaltered HTTP request header as received from a client.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e Http Request",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cRawRequest",
        "fct-type": "function",
        "title": "cRawRequest"
      },
      "index": {
        "description": "The unaltered HTTP request header as received from client",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cRawRequest",
        "normalized": "Context a-\u003eHttp Request",
        "package": "salvia",
        "partial": "Raw Request",
        "signature": "Context p-\u003eHttp Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cRawResponse",
      "description": {
        "fct-descr": "\u003cp\u003eThe plain HTTP response header unaffected by local rewriting.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e Http Response",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cRawResponse",
        "fct-type": "function",
        "title": "cRawResponse"
      },
      "index": {
        "description": "The plain HTTP response header unaffected by local rewriting",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cRawResponse",
        "normalized": "Context a-\u003eHttp Response",
        "package": "salvia",
        "partial": "Raw Response",
        "signature": "Context p-\u003eHttp Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cRequest",
      "description": {
        "fct-descr": "\u003cp\u003eThe HTTP request header.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e Http Request",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cRequest",
        "fct-type": "function",
        "title": "cRequest"
      },
      "index": {
        "description": "The HTTP request header",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cRequest",
        "normalized": "Context a-\u003eHttp Request",
        "package": "salvia",
        "partial": "Request",
        "signature": "Context p-\u003eHttp Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cResponse",
      "description": {
        "fct-descr": "\u003cp\u003eThe HTTP response header.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e Http Response",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cResponse",
        "fct-type": "function",
        "title": "cResponse"
      },
      "index": {
        "description": "The HTTP response header",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cResponse",
        "normalized": "Context a-\u003eHttp Response",
        "package": "salvia",
        "partial": "Response",
        "signature": "Context p-\u003eHttp Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cServerAddr",
      "description": {
        "fct-descr": "\u003cp\u003eServer address.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e SockAddr",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cServerAddr",
        "fct-type": "function",
        "title": "cServerAddr"
      },
      "index": {
        "description": "Server address",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cServerAddr",
        "normalized": "Context a-\u003eSockAddr",
        "package": "salvia",
        "partial": "Server Addr",
        "signature": "Context p-\u003eSockAddr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cServerHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe server hostname.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e String",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cServerHost",
        "fct-type": "function",
        "title": "cServerHost"
      },
      "index": {
        "description": "The server hostname",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cServerHost",
        "normalized": "Context a-\u003eString",
        "package": "salvia",
        "partial": "Server Host",
        "signature": "Context p-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cSocket",
      "description": {
        "fct-descr": "\u003cp\u003eRaw socket for connection to the peer.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Context",
        "fct-package": "salvia",
        "fct-signature": "Context p :-\u003e Socket",
        "fct-source": "src/Network-Salvia-Impl-Context.html#cSocket",
        "fct-type": "function",
        "title": "cSocket"
      },
      "index": {
        "description": "Raw socket for connection to the peer",
        "hierarchy": "Network Salvia Impl Context",
        "module": "Network.Salvia.Impl.Context",
        "name": "cSocket",
        "normalized": "Context a-\u003eSocket",
        "package": "salvia",
        "partial": "Socket",
        "signature": "Context p-\u003eSocket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Handler.html#",
      "description": {
        "fct-module": "Network.Salvia.Impl.Handler",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Impl-Handler.html",
        "fct-type": "module",
        "title": "Handler"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Handler",
        "module": "Network.Salvia.Impl.Handler",
        "name": "Handler",
        "normalized": "",
        "package": "salvia",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Handler.html#t:Handler",
      "description": {
        "fct-module": "Network.Salvia.Impl.Handler",
        "fct-package": "salvia",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Salvia-Impl-Handler.html#Handler",
        "fct-type": "newtype",
        "title": "Handler"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Handler",
        "module": "Network.Salvia.Impl.Handler",
        "name": "Handler",
        "normalized": "",
        "package": "salvia",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Handler.html#v:Handler",
      "description": {
        "fct-module": "Network.Salvia.Impl.Handler",
        "fct-package": "salvia",
        "fct-signature": "Handler",
        "fct-source": "src/Network-Salvia-Impl-Handler.html#Handler",
        "fct-type": "function",
        "title": "Handler"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Handler",
        "module": "Network.Salvia.Impl.Handler",
        "name": "Handler",
        "normalized": "",
        "package": "salvia",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Handler.html#v:runHandler",
      "description": {
        "fct-module": "Network.Salvia.Impl.Handler",
        "fct-package": "salvia",
        "fct-signature": "Handler p a -\u003e Context p -\u003e IO (a, Context p)",
        "fct-source": "src/Network-Salvia-Impl-Handler.html#runHandler",
        "fct-type": "function",
        "title": "runHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Handler",
        "module": "Network.Salvia.Impl.Handler",
        "name": "runHandler",
        "normalized": "Handler a b-\u003eContext a-\u003eIO(b,Context a)",
        "package": "salvia",
        "partial": "Handler",
        "signature": "Handler p a-\u003eContext p-\u003eIO(a,Context p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Handler.html#v:unHandler",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Salvia.Impl.Handler",
        "fct-package": "salvia",
        "fct-signature": "StateT (Context p) IO a",
        "fct-source": "src/Network-Salvia-Impl-Handler.html#Handler",
        "fct-type": "function",
        "title": "unHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Handler",
        "module": "Network.Salvia.Impl.Handler",
        "name": "unHandler",
        "normalized": "",
        "package": "salvia",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Server.html#",
      "description": {
        "fct-module": "Network.Salvia.Impl.Server",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Impl-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl Server",
        "module": "Network.Salvia.Impl.Server",
        "name": "Server",
        "normalized": "",
        "package": "salvia",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Server.html#v:start",
      "description": {
        "fct-descr": "\u003cp\u003etodo:\nStart a webserver with a specific server configuration and default handler. The\nserver will go into an infinite loop and will repeatedly accept client\nconnections on the address and port specified in the configuration. For every\nconnection the specified handler will be executed with the client address and\nsocket stored in the handler context.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Impl.Server",
        "fct-package": "salvia",
        "fct-signature": "Config -\u003e Handler p () -\u003e p -\u003e IO ()",
        "fct-source": "src/Network-Salvia-Impl-Server.html#start",
        "fct-type": "function",
        "title": "start"
      },
      "index": {
        "description": "todo Start webserver with specific server configuration and default handler The server will go into an infinite loop and will repeatedly accept client connections on the address and port specified in the configuration For every connection the specified handler will be executed with the client address and socket stored in the handler context",
        "hierarchy": "Network Salvia Impl Server",
        "module": "Network.Salvia.Impl.Server",
        "name": "start",
        "normalized": "Config-\u003eHandler a()-\u003ea-\u003eIO()",
        "package": "salvia",
        "partial": "",
        "signature": "Config-\u003eHandler p()-\u003ep-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl.html#",
      "description": {
        "fct-module": "Network.Salvia.Impl",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Impl.html",
        "fct-type": "module",
        "title": "Impl"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Impl",
        "module": "Network.Salvia.Impl",
        "name": "Impl",
        "normalized": "",
        "package": "salvia",
        "partial": "Impl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis interface module contains all the basic operations to access the server\ncontext. The interface is just of bunch of type classes that allow access to\nthe request and response objects. Most type classes allow access to the context\ninformation through lifted state computations. To dig deeper into the context\nobject you would probably want to use the derived \u003cem\u003efclabels\u003c/em\u003e accessors.\n\u003c/p\u003e\u003cp\u003eExample 1: To get the entire request object:\n\u003c/p\u003e\u003cpre\u003e do r \u003c- request get  -- Control.Monad.State.get\n\u003c/pre\u003e\u003cp\u003eExample 2: To get the request URI as a string:\n\u003c/p\u003e\u003cpre\u003e do r \u003c- request (getM uri) -- getM from Data.Record.Label\n\u003c/pre\u003e\u003cp\u003eExample 3: To get the query parameters and the \u003cem\u003eUser-Agent\u003c/em\u003e header:\n\u003c/p\u003e\u003cpre\u003e do request $\n      do q \u003c- getM (queryParams . asUri)  -- composed labels using the (.) from Control.Category.\n         u \u003c- header \"user-agent\"\n         return (q, u)\n\u003c/pre\u003e\u003cp\u003eExample 4: To set the \u003cem\u003eContent-Type\u003c/em\u003e and response status and send some string.\n\u003c/p\u003e\u003cpre\u003e do response $\n      do status =: BadRequest    -- the (=:) operator from Data.Record.Label\n         header \"content-type\" =: \"text/plain\"\n    send \"hello, world\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia-Interface.html",
        "fct-type": "module",
        "title": "Interface"
      },
      "index": {
        "description": "This interface module contains all the basic operations to access the server context The interface is just of bunch of type classes that allow access to the request and response objects Most type classes allow access to the context information through lifted state computations To dig deeper into the context object you would probably want to use the derived fclabels accessors Example To get the entire request object do request get Control.Monad.State.get Example To get the request URI as string do request getM uri getM from Data.Record.Label Example To get the query parameters and the User-Agent header do request do getM queryParams asUri composed labels using the from Control.Category header user-agent return Example To set the Content-Type and response status and send some string do response do status BadRequest the operator from Data.Record.Label header content-type text plain send hello world",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "Interface",
        "normalized": "",
        "package": "salvia",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:AddressM-39-",
      "description": {
        "fct-descr": "\u003cp\u003eType class alias indicating an instances for both \u003ccode\u003e\u003ca\u003eClientAddressM\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eServerAddressM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#AddressM%27",
        "fct-type": "class",
        "title": "AddressM'"
      },
      "index": {
        "description": "Type class alias indicating an instances for both ClientAddressM and ServerAddressM",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "AddressM'",
        "normalized": "",
        "package": "salvia",
        "partial": "Address M'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:BodyM",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#BodyM",
        "fct-type": "class",
        "title": "BodyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "BodyM",
        "normalized": "",
        "package": "salvia",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:ClientAddressM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eClientAddressM\u003c/a\u003e\u003c/code\u003e type class gives access to socket address of the\n client part of the connection.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#ClientAddressM",
        "fct-type": "class",
        "title": "ClientAddressM"
      },
      "index": {
        "description": "The ClientAddressM type class gives access to socket address of the client part of the connection",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "ClientAddressM",
        "normalized": "",
        "package": "salvia",
        "partial": "Client Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:Contains",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#Contains",
        "fct-type": "class",
        "title": "Contains"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "Contains",
        "normalized": "",
        "package": "salvia",
        "partial": "Contains",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:FlushM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFlushM\u003c/a\u003e\u003c/code\u003e type class can be used to flush the message headers and the\n message body directly over the wire to the other endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#FlushM",
        "fct-type": "class",
        "title": "FlushM"
      },
      "index": {
        "description": "The FlushM type class can be used to flush the message headers and the message body directly over the wire to the other endpoint",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "FlushM",
        "normalized": "",
        "package": "salvia",
        "partial": "Flush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:ForkM",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#ForkM",
        "fct-type": "class",
        "title": "ForkM"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "ForkM",
        "normalized": "",
        "package": "salvia",
        "partial": "Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:HandleM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHandleM\u003c/a\u003e\u003c/code\u003e type class allows access to the file handle, probabaly\n associated with the socket to the peer.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#HandleM",
        "fct-type": "class",
        "title": "HandleM"
      },
      "index": {
        "description": "The HandleM type class allows access to the file handle probabaly associated with the socket to the peer",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "HandleM",
        "normalized": "",
        "package": "salvia",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:HandleQueueM",
      "description": {
        "fct-descr": "\u003cp\u003etodo: comment:\n The \u003ccode\u003e\u003ca\u003eQueueM\u003c/a\u003e\u003c/code\u003e type class allows for queing actions for sending data values\n over the wire. Using a queue for collecting send actions instead of directly\n sending values over the socket allows for a more modular client or server\n layout.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#HandleQueueM",
        "fct-type": "class",
        "title": "HandleQueueM"
      },
      "index": {
        "description": "todo comment The QueueM type class allows for queing actions for sending data values over the wire Using queue for collecting send actions instead of directly sending values over the socket allows for more modular client or server layout",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "HandleQueueM",
        "normalized": "",
        "package": "salvia",
        "partial": "Handle Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:HttpM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHttpM\u003c/a\u003e\u003c/code\u003e type class indicates is parametrized with the directon\n (\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e) for which the implementation should be able to\n supply and modify the values. The \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e method allow for running arbitrary\n state computations over the request or response objects.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#HttpM",
        "fct-type": "class",
        "title": "HttpM"
      },
      "index": {
        "description": "The HttpM type class indicates is parametrized with the directon Request or Response for which the implementation should be able to supply and modify the values The http method allow for running arbitrary state computations over the request or response objects",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "HttpM",
        "normalized": "",
        "package": "salvia",
        "partial": "Http",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:HttpM-39-",
      "description": {
        "fct-descr": "\u003cp\u003eType class alias indicating an HttpM instance for both requests and\n responses.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#HttpM%27",
        "fct-type": "class",
        "title": "HttpM'"
      },
      "index": {
        "description": "Type class alias indicating an HttpM instance for both requests and responses",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "HttpM'",
        "normalized": "",
        "package": "salvia",
        "partial": "Http M'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:PayloadM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePayloadM\u003c/a\u003e\u003c/code\u003e type class provides access to the server payload. The\n payload can be an arbitrary piece of data that gets shared between all the\n handlers. Can be used to implement sessions and such. Heterogeneous lists\n implemented as right associated nested tuples can be used to store multiple\n pieces of information and still let individual handlers pick out the right\n thing they need. Picking the right pieces of information from the payload\n can be done with the \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e function from the \u003ccode\u003e\u003ca\u003eContains\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#PayloadM",
        "fct-type": "class",
        "title": "PayloadM"
      },
      "index": {
        "description": "The PayloadM type class provides access to the server payload The payload can be an arbitrary piece of data that gets shared between all the handlers Can be used to implement sessions and such Heterogeneous lists implemented as right associated nested tuples can be used to store multiple pieces of information and still let individual handlers pick out the right thing they need Picking the right pieces of information from the payload can be done with the select function from the Contains type class",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "PayloadM",
        "normalized": "",
        "package": "salvia",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:QueueM",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#QueueM",
        "fct-type": "class",
        "title": "QueueM"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "QueueM",
        "normalized": "",
        "package": "salvia",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:RawHttpM",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#RawHttpM",
        "fct-type": "class",
        "title": "RawHttpM"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "RawHttpM",
        "normalized": "",
        "package": "salvia",
        "partial": "Raw Http",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:RawHttpM-39-",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#RawHttpM%27",
        "fct-type": "class",
        "title": "RawHttpM'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "RawHttpM'",
        "normalized": "",
        "package": "salvia",
        "partial": "Raw Http M'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:SendAction",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "data",
        "fct-source": "src/Network-Salvia-Interface.html#SendAction",
        "fct-type": "data",
        "title": "SendAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "SendAction",
        "normalized": "",
        "package": "salvia",
        "partial": "Send Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:SendM",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#SendM",
        "fct-type": "class",
        "title": "SendM"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "SendM",
        "normalized": "",
        "package": "salvia",
        "partial": "Send",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:SendQueue",
      "description": {
        "fct-descr": "\u003cp\u003eThe send queue is an abstraction to make sure all data that belongs to the\nmessage body is sent after the response headers have been sent.  Instead of\nsending data to client directly over the socket from the context it is\npreferable to queue send actions in the context's send queue. The entire send\nqueue can be flushed to the client at once after the HTTP headers have been\nsent at the end of a request handler.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "type",
        "fct-source": "src/Network-Salvia-Interface.html#SendQueue",
        "fct-type": "type",
        "title": "SendQueue"
      },
      "index": {
        "description": "The send queue is an abstraction to make sure all data that belongs to the message body is sent after the response headers have been sent Instead of sending data to client directly over the socket from the context it is preferable to queue send actions in the context send queue The entire send queue can be flushed to the client at once after the HTTP headers have been sent at the end of request handler",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "SendQueue",
        "normalized": "",
        "package": "salvia",
        "partial": "Send Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:ServerAddressM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eServerAddressM\u003c/a\u003e\u003c/code\u003e type class gives access to socket address of the\n client part of the connection.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#ServerAddressM",
        "fct-type": "class",
        "title": "ServerAddressM"
      },
      "index": {
        "description": "The ServerAddressM type class gives access to socket address of the client part of the connection",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "ServerAddressM",
        "normalized": "",
        "package": "salvia",
        "partial": "Server Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:ServerM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eServerM\u003c/a\u003e\u003c/code\u003e type class can be used to acesss the static server\n configuration like the address/port combination the server listens on and\n the related hostname.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#ServerM",
        "fct-type": "class",
        "title": "ServerM"
      },
      "index": {
        "description": "The ServerM type class can be used to acesss the static server configuration like the address port combination the server listens on and the related hostname",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "ServerM",
        "normalized": "",
        "package": "salvia",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:SocketM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSocketM\u003c/a\u003e\u003c/code\u003e type class allows access to the raw socket.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#SocketM",
        "fct-type": "class",
        "title": "SocketM"
      },
      "index": {
        "description": "The SocketM type class allows access to the raw socket",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "SocketM",
        "normalized": "",
        "package": "salvia",
        "partial": "Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:SocketQueueM",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "class",
        "fct-source": "src/Network-Salvia-Interface.html#SocketQueueM",
        "fct-type": "class",
        "title": "SocketQueueM"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "SocketQueueM",
        "normalized": "",
        "package": "salvia",
        "partial": "Socket Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:-38-",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "a -\u003e b -\u003e (a, b)",
        "fct-source": "src/Network-Salvia-Interface.html#%26",
        "fct-type": "function",
        "title": "(&)"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "(&) &",
        "normalized": "a-\u003eb-\u003e(a,b)",
        "package": "salvia",
        "partial": "",
        "signature": "a-\u003eb-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:SendAction",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "SendAction ((Socket, Handle) -\u003e IO ())",
        "fct-source": "src/Network-Salvia-Interface.html#SendAction",
        "fct-type": "function",
        "title": "SendAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "SendAction",
        "normalized": "SendAction((Socket,Handle)-\u003eIO())",
        "package": "salvia",
        "partial": "Send Action",
        "signature": "SendAction((Socket,Handle)-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:admin",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "m String",
        "fct-source": "src/Network-Salvia-Interface.html#admin",
        "fct-type": "method",
        "title": "admin"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "admin",
        "normalized": "",
        "package": "salvia",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:body",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "dir -\u003e m ByteString",
        "fct-source": "src/Network-Salvia-Interface.html#body",
        "fct-type": "method",
        "title": "body"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "body",
        "normalized": "a-\u003eb ByteString",
        "package": "salvia",
        "partial": "",
        "signature": "dir-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:clientAddress",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "m SockAddr",
        "fct-source": "src/Network-Salvia-Interface.html#clientAddress",
        "fct-type": "method",
        "title": "clientAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "clientAddress",
        "normalized": "",
        "package": "salvia",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:dequeue",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "m (Maybe SendAction)",
        "fct-source": "src/Network-Salvia-Interface.html#dequeue",
        "fct-type": "method",
        "title": "dequeue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "dequeue",
        "normalized": "",
        "package": "salvia",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:enqueueHandle",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "(Handle -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/Network-Salvia-Interface.html#enqueueHandle",
        "fct-type": "method",
        "title": "enqueueHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "enqueueHandle",
        "normalized": "(Handle-\u003eIO())-\u003ea()",
        "package": "salvia",
        "partial": "Handle",
        "signature": "(Handle-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:enqueueSock",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "(Socket -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/Network-Salvia-Interface.html#enqueueSock",
        "fct-type": "method",
        "title": "enqueueSock"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "enqueueSock",
        "normalized": "(Socket-\u003eIO())-\u003ea()",
        "package": "salvia",
        "partial": "Sock",
        "signature": "(Socket-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:flushHeaders",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "dir -\u003e m ()",
        "fct-source": "src/Network-Salvia-Interface.html#flushHeaders",
        "fct-type": "method",
        "title": "flushHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "flushHeaders",
        "normalized": "a-\u003eb()",
        "package": "salvia",
        "partial": "Headers",
        "signature": "dir-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:flushQueue",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "dir -\u003e m ()",
        "fct-source": "src/Network-Salvia-Interface.html#flushQueue",
        "fct-type": "method",
        "title": "flushQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "flushQueue",
        "normalized": "a-\u003eb()",
        "package": "salvia",
        "partial": "Queue",
        "signature": "dir-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:forRequest",
      "description": {
        "fct-descr": "\u003cp\u003eStub request and response used to fill in type level gaps for message\n directions.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "Request",
        "fct-source": "src/Network-Salvia-Interface.html#forRequest",
        "fct-type": "function",
        "title": "forRequest"
      },
      "index": {
        "description": "Stub request and response used to fill in type level gaps for message directions",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "forRequest",
        "normalized": "",
        "package": "salvia",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:forResponse",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "Response",
        "fct-source": "src/Network-Salvia-Interface.html#forResponse",
        "fct-type": "function",
        "title": "forResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "forResponse",
        "normalized": "",
        "package": "salvia",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:forkM",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "m a -\u003e m (n a)",
        "fct-source": "src/Network-Salvia-Interface.html#forkM",
        "fct-type": "method",
        "title": "forkM"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "forkM",
        "normalized": "a b-\u003ea(c b)",
        "package": "salvia",
        "partial": "",
        "signature": "m a-\u003em(n a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:handle",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "m Handle",
        "fct-source": "src/Network-Salvia-Interface.html#handle",
        "fct-type": "method",
        "title": "handle"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "handle",
        "normalized": "",
        "package": "salvia",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:host",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "m String",
        "fct-source": "src/Network-Salvia-Interface.html#host",
        "fct-type": "method",
        "title": "host"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "host",
        "normalized": "",
        "package": "salvia",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:http",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "State (Http dir) a -\u003e m a",
        "fct-source": "src/Network-Salvia-Interface.html#http",
        "fct-type": "method",
        "title": "http"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "http",
        "normalized": "State(Http a)b-\u003ec b",
        "package": "salvia",
        "partial": "",
        "signature": "State(Http dir)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:listen",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "m [SockAddr]",
        "fct-source": "src/Network-Salvia-Interface.html#listen",
        "fct-type": "method",
        "title": "listen"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "listen",
        "normalized": "a[SockAddr]",
        "package": "salvia",
        "partial": "",
        "signature": "m[SockAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:payload",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "State q a -\u003e m a",
        "fct-source": "src/Network-Salvia-Interface.html#payload",
        "fct-type": "method",
        "title": "payload"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "payload",
        "normalized": "State a b-\u003ec b",
        "package": "salvia",
        "partial": "",
        "signature": "State q a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:rawHttp",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "State (Http dir) a -\u003e m a",
        "fct-source": "src/Network-Salvia-Interface.html#rawHttp",
        "fct-type": "method",
        "title": "rawHttp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "rawHttp",
        "normalized": "State(Http a)b-\u003ec b",
        "package": "salvia",
        "partial": "Http",
        "signature": "State(Http dir)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:rawRequest",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "State (Http Request) a -\u003e m a",
        "fct-source": "src/Network-Salvia-Interface.html#rawRequest",
        "fct-type": "function",
        "title": "rawRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "rawRequest",
        "normalized": "State(Http Request)a-\u003eb a",
        "package": "salvia",
        "partial": "Request",
        "signature": "State(Http Request)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:rawResponse",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "State (Http Response) a -\u003e m a",
        "fct-source": "src/Network-Salvia-Interface.html#rawResponse",
        "fct-type": "function",
        "title": "rawResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "rawResponse",
        "normalized": "State(Http Response)a-\u003eb a",
        "package": "salvia",
        "partial": "Response",
        "signature": "State(Http Response)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003eDirection specific aliases for the \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e method.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "State (Http Request) a -\u003e m a",
        "fct-source": "src/Network-Salvia-Interface.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "Direction specific aliases for the http method",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "request",
        "normalized": "State(Http Request)a-\u003eb a",
        "package": "salvia",
        "partial": "",
        "signature": "State(Http Request)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:response",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "State (Http Response) a -\u003e m a",
        "fct-source": "src/Network-Salvia-Interface.html#response",
        "fct-type": "function",
        "title": "response"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "response",
        "normalized": "State(Http Response)a-\u003eb a",
        "package": "salvia",
        "partial": "",
        "signature": "State(Http Response)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:select",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "a :-\u003e b",
        "fct-source": "src/Network-Salvia-Interface.html#select",
        "fct-type": "method",
        "title": "select"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "select",
        "normalized": "a-\u003eb",
        "package": "salvia",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue the action of sending one regular Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e over the wire\n to the other endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-Salvia-Interface.html#send",
        "fct-type": "method",
        "title": "send"
      },
      "index": {
        "description": "Enqueue the action of sending one regular Haskell String over the wire to the other endpoint",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "send",
        "normalized": "String-\u003ea()",
        "package": "salvia",
        "partial": "",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:sendBs",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue the action of sending one \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e over the wire to the\n other endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "ByteString -\u003e m ()",
        "fct-source": "src/Network-Salvia-Interface.html#sendBs",
        "fct-type": "method",
        "title": "sendBs"
      },
      "index": {
        "description": "Enqueue the action of sending one ByteString over the wire to the other endpoint",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "sendBs",
        "normalized": "ByteString-\u003ea()",
        "package": "salvia",
        "partial": "Bs",
        "signature": "ByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:serverAddress",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "m SockAddr",
        "fct-source": "src/Network-Salvia-Interface.html#serverAddress",
        "fct-type": "method",
        "title": "serverAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "serverAddress",
        "normalized": "",
        "package": "salvia",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:socket",
      "description": {
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "m Socket",
        "fct-source": "src/Network-Salvia-Interface.html#socket",
        "fct-type": "method",
        "title": "socket"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "socket",
        "normalized": "",
        "package": "salvia",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:spool",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue the action of spooling the entire contents of a file handle over\n the wire to the other endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "Handle -\u003e m ()",
        "fct-source": "src/Network-Salvia-Interface.html#spool",
        "fct-type": "function",
        "title": "spool"
      },
      "index": {
        "description": "Enqueue the action of spooling the entire contents of file handle over the wire to the other endpoint",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "spool",
        "normalized": "Handle-\u003ea()",
        "package": "salvia",
        "partial": "",
        "signature": "Handle-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:spoolWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003espool\u003c/a\u003e\u003c/code\u003e function but allows a custom filter over the contents.\n the wire to the other endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "(String -\u003e String) -\u003e Handle -\u003e m ()",
        "fct-source": "src/Network-Salvia-Interface.html#spoolWith",
        "fct-type": "method",
        "title": "spoolWith"
      },
      "index": {
        "description": "Like the spool function but allows custom filter over the contents the wire to the other endpoint",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "spoolWith",
        "normalized": "(String-\u003eString)-\u003eHandle-\u003ea()",
        "package": "salvia",
        "partial": "With",
        "signature": "(String-\u003eString)-\u003eHandle-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:spoolWithBs",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003espoolWith\u003c/a\u003e\u003c/code\u003e function but uses a direct \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e filter\n which might be more efficient.\n\u003c/p\u003e",
        "fct-module": "Network.Salvia.Interface",
        "fct-package": "salvia",
        "fct-signature": "(ByteString -\u003e ByteString) -\u003e Handle -\u003e m ()",
        "fct-source": "src/Network-Salvia-Interface.html#spoolWithBs",
        "fct-type": "method",
        "title": "spoolWithBs"
      },
      "index": {
        "description": "Like the spoolWith function but uses direct ByteString filter which might be more efficient",
        "hierarchy": "Network Salvia Interface",
        "module": "Network.Salvia.Interface",
        "name": "spoolWithBs",
        "normalized": "(ByteString-\u003eByteString)-\u003eHandle-\u003ea()",
        "package": "salvia",
        "partial": "With Bs",
        "signature": "(ByteString-\u003eByteString)-\u003eHandle-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia.html#",
      "description": {
        "fct-module": "Network.Salvia",
        "fct-package": "salvia",
        "fct-signature": "module",
        "fct-source": "src/Network-Salvia.html",
        "fct-type": "module",
        "title": "Salvia"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Salvia",
        "module": "Network.Salvia",
        "name": "Salvia",
        "normalized": "",
        "package": "salvia",
        "partial": "Salvia",
        "signature": ""
      }
    }
  }
]