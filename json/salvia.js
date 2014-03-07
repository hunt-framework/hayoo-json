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
        "word": "salvia"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Banner",
          "name": "Banner",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Banner.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Banner",
          "module": "Network.Salvia.Handler.Banner",
          "name": "Banner",
          "package": "salvia",
          "partial": "Banner",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Banner.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehBanner\u003c/a\u003e\u003c/code\u003e handler adds the current date-/timestamp and a custom server name\nto the response headers.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Banner\",\"Network.Salvia.Handlers\"]",
          "name": "hBanner",
          "package": "salvia",
          "signature": "String-\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Banner.html#v:hBanner\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hBanner\"]"
        },
        "index": {
          "description": "The hBanner handler adds the current date timestamp and custom server name to the response headers",
          "hierarchy": "Network Salvia Handler Banner",
          "module": "Network.Salvia.Handler.Banner",
          "name": "hBanner",
          "normalized": "String-\u003ea()",
          "package": "salvia",
          "partial": "Banner",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Banner.html#v:hBanner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Body",
          "name": "Body",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Body.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "Body",
          "package": "salvia",
          "partial": "Body",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but decodes it as UTF-8 to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hBodyStringUTF8",
          "package": "salvia",
          "signature": "dir -\u003e m String",
          "source": "src/Network-Salvia-Handler-Body.html#hBodyStringUTF8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hBodyStringUTF8\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hBodyStringUTF8\"]"
        },
        "index": {
          "description": "Like the hRawBody but decodes it as UTF-8 to String",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hBodyStringUTF8",
          "normalized": "a-\u003eb String",
          "package": "salvia",
          "partial": "Body String UTF",
          "signature": "dir-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hBodyStringUTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but is will handle proper decoding based on the charset\npart of the \u003ccode\u003e\u003ca\u003econtentType\u003c/a\u003e\u003c/code\u003e header line. When a valid encoding is found in the\n\u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e message it will be decoded with using the encodings package. The default\nencoding supplied as the function's argument can be used to specify what\nencoding to use in the absence of a proper encoding in the HTTP message itself.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hBodyText",
          "package": "salvia",
          "signature": "dir -\u003e String -\u003e m Text",
          "source": "src/Network-Salvia-Handler-Body.html#hBodyText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hBodyText\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hBodyText\"]"
        },
        "index": {
          "description": "Like the hRawBody but is will handle proper decoding based on the charset part of the contentType header line When valid encoding is found in the Http message it will be decoded with using the encodings package The default encoding supplied as the function argument can be used to specify what encoding to use in the absence of proper encoding in the HTTP message itself",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hBodyText",
          "normalized": "a-\u003eString-\u003eb Text",
          "package": "salvia",
          "partial": "Body Text",
          "signature": "dir-\u003eString-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hBodyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse the message body, as a result of \u003ccode\u003e\u003ca\u003ehBodyText\u003c/a\u003e\u003c/code\u003e, as URI encoded \u003ccode\u003e\u003ca\u003ePOST\u003c/a\u003e\u003c/code\u003e\nparameters. Returns as a URI \u003ccode\u003eParameter\u003c/code\u003e type or nothing when parsing fails.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hParameters",
          "package": "salvia",
          "signature": "d -\u003e String -\u003e m Parameters",
          "source": "src/Network-Salvia-Handler-Body.html#hParameters",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hParameters\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hParameters\"]"
        },
        "index": {
          "description": "Try to parse the message body as result of hBodyText as URI encoded POST parameters Returns as URI Parameter type or nothing when parsing fails",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hParameters",
          "normalized": "a-\u003eString-\u003eb Parameters",
          "package": "salvia",
          "partial": "Parameters",
          "signature": "d-\u003eString-\u003em Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst (possibly naive) handler to retreive the client request or server\nresponse body as a raw lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. This probably does not handle all\nthe quirks that the HTTP protocol specifies, but it does the job for now. When\na \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e header field is available only this fixed number of bytes\nwill read from the socket.  When neither the \u003ccode\u003e\u003ca\u003ekeepAlive\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e\nheader fields are available the entire payload of the request will be read from\nthe socket. The function is parametrized with a the direction of the HTTP\nmessage, client request or server response.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hRawBody",
          "package": "salvia",
          "signature": "d -\u003e m ByteString",
          "source": "src/Network-Salvia-Handler-Body.html#hRawBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRawBody\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRawBody\"]"
        },
        "index": {
          "description": "First possibly naive handler to retreive the client request or server response body as raw lazy ByteString This probably does not handle all the quirks that the HTTP protocol specifies but it does the job for now When contentLength header field is available only this fixed number of bytes will read from the socket When neither the keepAlive and contentLength header fields are available the entire payload of the request will be read from the socket The function is parametrized with the direction of the HTTP message client request or server response",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hRawBody",
          "normalized": "a-\u003eb ByteString",
          "package": "salvia",
          "partial": "Raw Body",
          "signature": "d-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRawBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hRawRequestBody",
          "package": "salvia",
          "signature": "m ByteString",
          "source": "src/Network-Salvia-Handler-Body.html#hRawRequestBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRawRequestBody\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRawRequestBody\"]"
        },
        "index": {
          "description": "Like hRawBody but specifically for Http Request",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hRawRequestBody",
          "package": "salvia",
          "partial": "Raw Request Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRawRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehRawBody\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hRawResponseBody",
          "package": "salvia",
          "signature": "m ByteString",
          "source": "src/Network-Salvia-Handler-Body.html#hRawResponseBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRawResponseBody\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRawResponseBody\"]"
        },
        "index": {
          "description": "Like hRawBody but specifically for Http Request",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hRawResponseBody",
          "package": "salvia",
          "partial": "Raw Response Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRawResponseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyStringUTF8\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hRequestBodyStringUTF8",
          "package": "salvia",
          "signature": "m String",
          "source": "src/Network-Salvia-Handler-Body.html#hRequestBodyStringUTF8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRequestBodyStringUTF8\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestBodyStringUTF8\"]"
        },
        "index": {
          "description": "Like hBodyStringUTF8 but specifically for Http Request",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hRequestBodyStringUTF8",
          "package": "salvia",
          "partial": "Request Body String UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRequestBodyStringUTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyText\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hRequestBodyText",
          "package": "salvia",
          "signature": "String -\u003e m Text",
          "source": "src/Network-Salvia-Handler-Body.html#hRequestBodyText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRequestBodyText\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestBodyText\"]"
        },
        "index": {
          "description": "Like hBodyText but specifically for Http Request",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hRequestBodyText",
          "normalized": "String-\u003ea Text",
          "package": "salvia",
          "partial": "Request Body Text",
          "signature": "String-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRequestBodyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehParameters\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hRequestParameters",
          "package": "salvia",
          "signature": "String -\u003e m Parameters",
          "source": "src/Network-Salvia-Handler-Body.html#hRequestParameters",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRequestParameters\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestParameters\"]"
        },
        "index": {
          "description": "Like hParameters but specifically for HTTP Request",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hRequestParameters",
          "normalized": "String-\u003ea Parameters",
          "package": "salvia",
          "partial": "Request Parameters",
          "signature": "String-\u003em Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hRequestParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyStringUTF8\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hResponseBodyStringUTF8",
          "package": "salvia",
          "signature": "m String",
          "source": "src/Network-Salvia-Handler-Body.html#hResponseBodyStringUTF8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hResponseBodyStringUTF8\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResponseBodyStringUTF8\"]"
        },
        "index": {
          "description": "Like hBodyStringUTF8 but specifically for Http Response",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hResponseBodyStringUTF8",
          "package": "salvia",
          "partial": "Response Body String UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hResponseBodyStringUTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehBodyText\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003e\u003ca\u003eHttp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hResponseBodyText",
          "package": "salvia",
          "signature": "String -\u003e m Text",
          "source": "src/Network-Salvia-Handler-Body.html#hResponseBodyText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hResponseBodyText\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResponseBodyText\"]"
        },
        "index": {
          "description": "Like hBodyText but specifically for Http Response",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hResponseBodyText",
          "normalized": "String-\u003ea Text",
          "package": "salvia",
          "partial": "Response Body Text",
          "signature": "String-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hResponseBodyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehParameters\u003c/a\u003e\u003c/code\u003e but specifically for \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Body\",\"Network.Salvia.Handlers\"]",
          "name": "hResponseParameters",
          "package": "salvia",
          "signature": "String -\u003e m Parameters",
          "source": "src/Network-Salvia-Handler-Body.html#hResponseParameters",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hResponseParameters\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResponseParameters\"]"
        },
        "index": {
          "description": "Like hParameters but specifically for HTTP Response",
          "hierarchy": "Network Salvia Handler Body",
          "module": "Network.Salvia.Handler.Body",
          "name": "hResponseParameters",
          "normalized": "String-\u003ea Parameters",
          "package": "salvia",
          "partial": "Response Parameters",
          "signature": "String-\u003em Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Body.html#v:hResponseParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.CGI",
          "name": "CGI",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-CGI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler CGI",
          "module": "Network.Salvia.Handler.CGI",
          "name": "CGI",
          "package": "salvia",
          "partial": "CGI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-CGI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler to run CGI scripts.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.CGI\",\"Network.Salvia.Handlers\"]",
          "name": "hCGI",
          "package": "salvia",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Network-Salvia-Handler-CGI.html#hCGI",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-CGI.html#v:hCGI\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hCGI\"]"
        },
        "index": {
          "description": "Handler to run CGI scripts",
          "hierarchy": "Network Salvia Handler CGI",
          "module": "Network.Salvia.Handler.CGI",
          "name": "hCGI",
          "normalized": "FilePath-\u003ea()",
          "package": "salvia",
          "partial": "CGI",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-CGI.html#v:hCGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Close",
          "name": "Close",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Close.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Close",
          "module": "Network.Salvia.Handler.Close",
          "name": "Close",
          "package": "salvia",
          "partial": "Close",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Close.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty the send queue.\n\u003c/p\u003e",
          "module": "Network.Salvia.Handler.Close",
          "name": "emptyQueue",
          "package": "salvia",
          "signature": "m ()",
          "source": "src/Network-Salvia-Handler-Close.html#emptyQueue",
          "type": "function"
        },
        "index": {
          "description": "Empty the send queue",
          "hierarchy": "Network Salvia Handler Close",
          "module": "Network.Salvia.Handler.Close",
          "name": "emptyQueue",
          "normalized": "a()",
          "package": "salvia",
          "partial": "Queue",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Close.html#v:emptyQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a handler once and close the connection afterwards.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Close\",\"Network.Salvia.Handlers\"]",
          "name": "hCloseConn",
          "package": "salvia",
          "signature": "m a -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Close.html#hCloseConn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Close.html#v:hCloseConn\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hCloseConn\"]"
        },
        "index": {
          "description": "Run handler once and close the connection afterwards",
          "hierarchy": "Network Salvia Handler Close",
          "module": "Network.Salvia.Handler.Close",
          "name": "hCloseConn",
          "normalized": "a b-\u003ea()",
          "package": "salvia",
          "partial": "Close Conn",
          "signature": "m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Close.html#v:hCloseConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a handler and keep the connection open for potential consecutive requests.\nThe connection will only be closed after a request finished and one or more of\nthe following criteria are met:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e There is no \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e set in the response headers. When this is the\n  case the connection cannot be kept alive.\n\u003c/li\u003e\u003cli\u003e The client has set the \u003ccode\u003e\u003ca\u003econnection\u003c/a\u003e\u003c/code\u003e header field to \u003ccode\u003eclose\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The connection has already been closed, possible due to IO errors.\n\u003c/li\u003e\u003cli\u003e The HTTP version is HTTP/1.0.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Network.Salvia.Handler.Close\",\"Network.Salvia.Handlers\"]",
          "name": "hKeepAlive",
          "package": "salvia",
          "signature": "m a -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Close.html#hKeepAlive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Close.html#v:hKeepAlive\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hKeepAlive\"]"
        },
        "index": {
          "description": "Run handler and keep the connection open for potential consecutive requests The connection will only be closed after request finished and one or more of the following criteria are met There is no contentLength set in the response headers When this is the case the connection cannot be kept alive The client has set the connection header field to close The connection has already been closed possible due to IO errors The HTTP version is HTTP",
          "hierarchy": "Network Salvia Handler Close",
          "module": "Network.Salvia.Handler.Close",
          "name": "hKeepAlive",
          "normalized": "a b-\u003ea()",
          "package": "salvia",
          "partial": "Keep Alive",
          "signature": "m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Close.html#v:hKeepAlive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Cookie",
          "name": "Cookie",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Cookie.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Cookie",
          "module": "Network.Salvia.Handler.Cookie",
          "name": "Cookie",
          "package": "salvia",
          "partial": "Cookie",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to get the cookies from the HTTP \u003ccode\u003e\u003ca\u003ecookie\u003c/a\u003e\u003c/code\u003e request header. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Cookie\",\"Network.Salvia.Handlers\"]",
          "name": "hCookie",
          "package": "salvia",
          "signature": "m (Maybe Cookies)",
          "source": "src/Network-Salvia-Handler-Cookie.html#hCookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hCookie\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hCookie\"]"
        },
        "index": {
          "description": "Try to get the cookies from the HTTP cookie request header",
          "hierarchy": "Network Salvia Handler Cookie",
          "module": "Network.Salvia.Handler.Cookie",
          "name": "hCookie",
          "package": "salvia",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete one cookie by removing it from the `Set-Cookie' header. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Cookie\",\"Network.Salvia.Handlers\"]",
          "name": "hDelCookie",
          "package": "salvia",
          "signature": "String -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Cookie.html#hDelCookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hDelCookie\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDelCookie\"]"
        },
        "index": {
          "description": "Delete one cookie by removing it from the Set-Cookie header",
          "hierarchy": "Network Salvia Handler Cookie",
          "module": "Network.Salvia.Handler.Cookie",
          "name": "hDelCookie",
          "normalized": "String-\u003ea()",
          "package": "salvia",
          "partial": "Del Cookie",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hDelCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient method for creating cookies that expire in the near future and are\nbound to the domain and port this server runs on. The path will be locked to\nroot. If the second argument is set, the cookie will be valid for all\nsubdomains.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Cookie\",\"Network.Salvia.Handlers\"]",
          "name": "hNewCookie",
          "package": "salvia",
          "signature": "t -\u003e Bool -\u003e m Cookie",
          "source": "src/Network-Salvia-Handler-Cookie.html#hNewCookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hNewCookie\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hNewCookie\"]"
        },
        "index": {
          "description": "Convenient method for creating cookies that expire in the near future and are bound to the domain and port this server runs on The path will be locked to root If the second argument is set the cookie will be valid for all subdomains",
          "hierarchy": "Network Salvia Handler Cookie",
          "module": "Network.Salvia.Handler.Cookie",
          "name": "hNewCookie",
          "normalized": "a-\u003eBool-\u003eb Cookie",
          "package": "salvia",
          "partial": "New Cookie",
          "signature": "t-\u003eBool-\u003em Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hNewCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the `Set-Cookie` HTTP response header with the specified \u003ccode\u003e\u003ca\u003eCookies\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Cookie\",\"Network.Salvia.Handlers\"]",
          "name": "hSetCookie",
          "package": "salvia",
          "signature": "Cookies -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Cookie.html#hSetCookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hSetCookie\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hSetCookie\"]"
        },
        "index": {
          "description": "Set the Set-Cookie HTTP response header with the specified Cookies",
          "hierarchy": "Network Salvia Handler Cookie",
          "module": "Network.Salvia.Handler.Cookie",
          "name": "hSetCookie",
          "normalized": "Cookies-\u003ea()",
          "package": "salvia",
          "partial": "Set Cookie",
          "signature": "Cookies-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Cookie.html#v:hSetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRendering of HTML directory listings. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Salvia.Handler.Directory",
          "name": "Directory",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Directory.html",
          "type": "module"
        },
        "index": {
          "description": "Rendering of HTML directory listings",
          "hierarchy": "Network Salvia Handler Directory",
          "module": "Network.Salvia.Handler.Directory",
          "name": "Directory",
          "package": "salvia",
          "partial": "Directory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Directory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehDirectoryResource\u003c/a\u003e\u003c/code\u003e but uses the path from the current request URI.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Directory\",\"Network.Salvia.Handlers\"]",
          "name": "hDirectory",
          "package": "salvia",
          "signature": "m ()",
          "source": "src/Network-Salvia-Handler-Directory.html#hDirectory",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Directory.html#v:hDirectory\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDirectory\"]"
        },
        "index": {
          "description": "Like hDirectoryResource but uses the path from the current request URI",
          "hierarchy": "Network Salvia Handler Directory",
          "module": "Network.Salvia.Handler.Directory",
          "name": "hDirectory",
          "normalized": "a()",
          "package": "salvia",
          "partial": "Directory",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Directory.html#v:hDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe a simple HTML directory listing for the specified directory on the\nfilesystem.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Directory\",\"Network.Salvia.Handlers\"]",
          "name": "hDirectoryResource",
          "package": "salvia",
          "signature": "FilePath-\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Directory.html#v:hDirectoryResource\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDirectoryResource\"]"
        },
        "index": {
          "description": "Serve simple HTML directory listing for the specified directory on the filesystem",
          "hierarchy": "Network Salvia Handler Directory",
          "module": "Network.Salvia.Handler.Directory",
          "name": "hDirectoryResource",
          "normalized": "FilePath-\u003ea()",
          "package": "salvia",
          "partial": "Directory Resource",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Directory.html#v:hDirectoryResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "Dispatching",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Dispatching.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Dispatching",
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "Dispatching",
          "package": "salvia",
          "partial": "Dispatching",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dispatcher type takes one value to dispatch on and two handlers. The first\nhandler will be used when the predicate on the dispatch value returned \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nthe second (default) handler will be used when the predicate returs\n\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "Dispatcher",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Dispatching.html#Dispatcher",
          "type": "type"
        },
        "index": {
          "description": "The dispatcher type takes one value to dispatch on and two handlers The first handler will be used when the predicate on the dispatch value returned True the second default handler will be used when the predicate returs False",
          "hierarchy": "Network Salvia Handler Dispatching",
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "Dispatcher",
          "package": "salvia",
          "partial": "Dispatcher",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#t:Dispatcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list dispatcher takes a mapping from dispatch values to handlers and one\ndefault fallback handler.\n\u003c/p\u003e",
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "ListDispatcher",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Dispatching.html#ListDispatcher",
          "type": "type"
        },
        "index": {
          "description": "list dispatcher takes mapping from dispatch values to handlers and one default fallback handler",
          "hierarchy": "Network Salvia Handler Dispatching",
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "ListDispatcher",
          "package": "salvia",
          "partial": "List Dispatcher",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#t:ListDispatcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatch on an arbitrary part of the context using an arbitrary predicate. When\nthe predicate returns true on the value selected with the \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e the first\nhandler will be invoked, otherwise the second handler will be used.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Dispatching\",\"Network.Salvia.Handlers\"]",
          "name": "hDispatch",
          "package": "salvia",
          "signature": "d -\u003e (Http d :-\u003e b) -\u003e (c -\u003e b -\u003e Bool) -\u003e Dispatcher c m a",
          "source": "src/Network-Salvia-Handler-Dispatching.html#hDispatch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hDispatch\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDispatch\"]"
        },
        "index": {
          "description": "Dispatch on an arbitrary part of the context using an arbitrary predicate When the predicate returns true on the value selected with the Label the first handler will be invoked otherwise the second handler will be used",
          "hierarchy": "Network Salvia Handler Dispatching",
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "hDispatch",
          "normalized": "a-\u003e(Http a-\u003eb)-\u003e(c-\u003eb-\u003eBool)-\u003eDispatcher c d e",
          "package": "salvia",
          "partial": "Dispatch",
          "signature": "d-\u003e(Http d-\u003eb)-\u003e(c-\u003eb-\u003eBool)-\u003eDispatcher c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a dispatcher function into a list dispatcher. This enables handler\nrouting based on arbitrary values from the context. When non of the predicates\nin the \u003ccode\u003e\u003ca\u003eListDispatcher\u003c/a\u003e\u003c/code\u003e type hold the default handler will be invoked.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Dispatching\",\"Network.Salvia.Handlers\"]",
          "name": "hListDispatch",
          "package": "salvia",
          "signature": "Dispatcher a m b -\u003e ListDispatcher a m b",
          "source": "src/Network-Salvia-Handler-Dispatching.html#hListDispatch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hListDispatch\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hListDispatch\"]"
        },
        "index": {
          "description": "Turns dispatcher function into list dispatcher This enables handler routing based on arbitrary values from the context When non of the predicates in the ListDispatcher type hold the default handler will be invoked",
          "hierarchy": "Network Salvia Handler Dispatching",
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "hListDispatch",
          "normalized": "Dispatcher a b c-\u003eListDispatcher a b c",
          "package": "salvia",
          "partial": "List Dispatch",
          "signature": "Dispatcher a m b-\u003eListDispatcher a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hListDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehDispatch\u003c/a\u003e\u003c/code\u003e but always dispatches on a (part of) the `HTTP\nRequest' part of the context.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Dispatching\",\"Network.Salvia.Handlers\"]",
          "name": "hRequestDispatch",
          "package": "salvia",
          "signature": "(Http Request :-\u003e b) -\u003e (t -\u003e b -\u003e Bool) -\u003e Dispatcher t m c",
          "source": "src/Network-Salvia-Handler-Dispatching.html#hRequestDispatch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hRequestDispatch\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestDispatch\"]"
        },
        "index": {
          "description": "Like the hDispatch but always dispatches on part of the HTTP Request part of the context",
          "hierarchy": "Network Salvia Handler Dispatching",
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "hRequestDispatch",
          "normalized": "(Http Request-\u003ea)-\u003e(b-\u003ea-\u003eBool)-\u003eDispatcher b c d",
          "package": "salvia",
          "partial": "Request Dispatch",
          "signature": "(Http Request-\u003eb)-\u003e(t-\u003eb-\u003eBool)-\u003eDispatcher t m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hRequestDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehDispatch\u003c/a\u003e\u003c/code\u003e but always dispatches on a (part of) the `HTTP\nResponse' part of the context.\n\u003c/p\u003e",
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "hResponseDispatch",
          "package": "salvia",
          "signature": "(Http Response :-\u003e b) -\u003e (t -\u003e b -\u003e Bool) -\u003e Dispatcher t m c",
          "source": "src/Network-Salvia-Handler-Dispatching.html#hResponseDispatch",
          "type": "function"
        },
        "index": {
          "description": "Like the hDispatch but always dispatches on part of the HTTP Response part of the context",
          "hierarchy": "Network Salvia Handler Dispatching",
          "module": "Network.Salvia.Handler.Dispatching",
          "name": "hResponseDispatch",
          "normalized": "(Http Response-\u003ea)-\u003e(b-\u003ea-\u003eBool)-\u003eDispatcher b c d",
          "package": "salvia",
          "partial": "Response Dispatch",
          "signature": "(Http Response-\u003eb)-\u003e(t-\u003eb-\u003eBool)-\u003eDispatcher t m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Dispatching.html#v:hResponseDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Environment",
          "name": "Environment",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Environment.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Environment",
          "module": "Network.Salvia.Handler.Environment",
          "name": "Environment",
          "package": "salvia",
          "partial": "Environment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Environment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the default handler environment. It takes care of request parsing\n(\u003ccode\u003e\u003ca\u003ehRequestParser\u003c/a\u003e\u003c/code\u003e), response printing (\u003ccode\u003e\u003ca\u003ehResponsePrinter\u003c/a\u003e\u003c/code\u003e), connection\nkeep-alives (\u003ccode\u003e\u003ca\u003ehKeepAlive\u003c/a\u003e\u003c/code\u003e), handling \u003ccode\u003e\u003ca\u003eHEAD\u003c/a\u003e\u003c/code\u003e requests (\u003ccode\u003e\u003ca\u003ehHead\u003c/a\u003e\u003c/code\u003e) and printing the\n`salvia-httpd` server banner (\u003ccode\u003e\u003ca\u003ehBanner\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Environment\",\"Network.Salvia.Handlers\"]",
          "name": "hDefaultEnv",
          "package": "salvia",
          "signature": "m ()-\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Environment.html#v:hDefaultEnv\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDefaultEnv\"]"
        },
        "index": {
          "description": "This is the default handler environment It takes care of request parsing hRequestParser response printing hResponsePrinter connection keep-alives hKeepAlive handling HEAD requests hHead and printing the salvia-httpd server banner hBanner",
          "hierarchy": "Network Salvia Handler Environment",
          "module": "Network.Salvia.Handler.Environment",
          "name": "hDefaultEnv",
          "normalized": "a()-\u003ea()",
          "package": "salvia",
          "partial": "Default Env",
          "signature": "m()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Environment.html#v:hDefaultEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehDefaultEnv\u003c/a\u003e\u003c/code\u003e but only serves one request per connection.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Environment\",\"Network.Salvia.Handlers\"]",
          "name": "hEnvNoKeepAlive",
          "package": "salvia",
          "signature": "m ()-\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Environment.html#v:hEnvNoKeepAlive\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hEnvNoKeepAlive\"]"
        },
        "index": {
          "description": "Like hDefaultEnv but only serves one request per connection",
          "hierarchy": "Network Salvia Handler Environment",
          "module": "Network.Salvia.Handler.Environment",
          "name": "hEnvNoKeepAlive",
          "normalized": "a()-\u003ea()",
          "package": "salvia",
          "partial": "Env No Keep Alive",
          "signature": "m()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Environment.html#v:hEnvNoKeepAlive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Error",
          "name": "Error",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Error",
          "module": "Network.Salvia.Handler.Error",
          "name": "Error",
          "package": "salvia",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function to easily catch IO errors.\n\u003c/p\u003e",
          "module": "Network.Salvia.Handler.Error",
          "name": "catchIO",
          "package": "salvia",
          "signature": "IO a -\u003e a -\u003e m a",
          "source": "src/Network-Salvia-Handler-Error.html#catchIO",
          "type": "function"
        },
        "index": {
          "description": "Utility function to easily catch IO errors",
          "hierarchy": "Network Salvia Handler Error",
          "module": "Network.Salvia.Handler.Error",
          "name": "catchIO",
          "normalized": "IO a-\u003ea-\u003eb a",
          "package": "salvia",
          "partial": "IO",
          "signature": "IO a-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:catchIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehError\u003c/a\u003e\u003c/code\u003e but with a custom error message.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Error\",\"Network.Salvia.Handlers\"]",
          "name": "hCustomError",
          "package": "salvia",
          "signature": "Status -\u003e String -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Error.html#hCustomError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hCustomError\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hCustomError\"]"
        },
        "index": {
          "description": "Like hError but with custom error message",
          "hierarchy": "Network Salvia Handler Error",
          "module": "Network.Salvia.Handler.Error",
          "name": "hCustomError",
          "normalized": "Status-\u003eString-\u003ea()",
          "package": "salvia",
          "partial": "Custom Error",
          "signature": "Status-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hCustomError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehError\u003c/a\u003e\u003c/code\u003e handler enables the creation of a default style of error\n responses for the specified HTTP \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e code.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Error\",\"Network.Salvia.Handlers\"]",
          "name": "hError",
          "package": "salvia",
          "signature": "Status -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Error.html#hError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hError\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hError\"]"
        },
        "index": {
          "description": "The hError handler enables the creation of default style of error responses for the specified HTTP Status code",
          "hierarchy": "Network Salvia Handler Error",
          "module": "Network.Salvia.Handler.Error",
          "name": "hError",
          "normalized": "Status-\u003ea()",
          "package": "salvia",
          "partial": "Error",
          "signature": "Status-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e to a default style error response.\n\u003c/p\u003e\u003cp\u003eThe mapping from an IO error to an error response is rather straightforward:\n\u003c/p\u003e\u003cpre\u003e  | isDoesNotExistError e = hError NotFound\n  | isAlreadyInUseError e = hError ServiceUnavailable\n  | isPermissionError   e = hError Forbidden\n  | True                  = hError InternalServerError\n\u003c/pre\u003e",
          "module": "[\"Network.Salvia.Handler.Error\",\"Network.Salvia.Handlers\"]",
          "name": "hIOError",
          "package": "salvia",
          "signature": "IOError -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Error.html#hIOError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hIOError\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hIOError\"]"
        },
        "index": {
          "description": "Map an IOError to default style error response The mapping from an IO error to an error response is rather straightforward isDoesNotExistError hError NotFound isAlreadyInUseError hError ServiceUnavailable isPermissionError hError Forbidden True hError InternalServerError",
          "hierarchy": "Network Salvia Handler Error",
          "module": "Network.Salvia.Handler.Error",
          "name": "hIOError",
          "normalized": "IOError-\u003ea()",
          "package": "salvia",
          "partial": "IOError",
          "signature": "IOError-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an handler with the result of an IO action. When the IO actions\n fails a default error handler will be executed.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Error\",\"Network.Salvia.Handlers\"]",
          "name": "hSafeIO",
          "package": "salvia",
          "signature": "IO a -\u003e (a -\u003e m ()) -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Error.html#hSafeIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hSafeIO\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hSafeIO\"]"
        },
        "index": {
          "description": "Execute an handler with the result of an IO action When the IO actions fails default error handler will be executed",
          "hierarchy": "Network Salvia Handler Error",
          "module": "Network.Salvia.Handler.Error",
          "name": "hSafeIO",
          "normalized": "IO a-\u003e(a-\u003eb())-\u003eb()",
          "package": "salvia",
          "partial": "Safe IO",
          "signature": "IO a-\u003e(a-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Error.html#v:hSafeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Extension",
          "name": "Extension",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Extension.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Extension",
          "module": "Network.Salvia.Handler.Extension",
          "name": "Extension",
          "package": "salvia",
          "partial": "Extension",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Extension.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest dispatcher based on the request path file extenstion. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Extension\",\"Network.Salvia.Handlers\"]",
          "name": "hExtension",
          "package": "salvia",
          "signature": "Dispatcher (Maybe String) m a",
          "source": "src/Network-Salvia-Handler-Extension.html#hExtension",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Extension.html#v:hExtension\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hExtension\"]"
        },
        "index": {
          "description": "Request dispatcher based on the request path file extenstion",
          "hierarchy": "Network Salvia Handler Extension",
          "module": "Network.Salvia.Handler.Extension",
          "name": "hExtension",
          "package": "salvia",
          "partial": "Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Extension.html#v:hExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList dispatcher version of \u003ccode\u003e\u003ca\u003ehExtension\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Extension\",\"Network.Salvia.Handlers\"]",
          "name": "hExtensionRouter",
          "package": "salvia",
          "signature": "ListDispatcher (Maybe String) m a",
          "source": "src/Network-Salvia-Handler-Extension.html#hExtensionRouter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Extension.html#v:hExtensionRouter\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hExtensionRouter\"]"
        },
        "index": {
          "description": "List dispatcher version of hExtension",
          "hierarchy": "Network Salvia Handler Extension",
          "module": "Network.Salvia.Handler.Extension",
          "name": "hExtensionRouter",
          "package": "salvia",
          "partial": "Extension Router",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Extension.html#v:hExtensionRouter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.File",
          "name": "File",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler File",
          "module": "Network.Salvia.Handler.File",
          "name": "File",
          "package": "salvia",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Salvia.Handler.File\",\"Network.Salvia.Handlers\"]",
          "name": "fileMime",
          "package": "salvia",
          "signature": "FilePath -\u003e Mime",
          "source": "src/Network-Salvia-Handler-File.html#fileMime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:fileMime\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:fileMime\"]"
        },
        "index": {
          "hierarchy": "Network Salvia Handler File",
          "module": "Network.Salvia.Handler.File",
          "name": "fileMime",
          "normalized": "FilePath-\u003eMime",
          "package": "salvia",
          "partial": "Mime",
          "signature": "FilePath-\u003eMime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:fileMime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFileResource\u003c/a\u003e\u003c/code\u003e but uses the path of the current request URI.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.File\",\"Network.Salvia.Handlers\"]",
          "name": "hFile",
          "package": "salvia",
          "signature": "m ()",
          "source": "src/Network-Salvia-Handler-File.html#hFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFile\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFile\"]"
        },
        "index": {
          "description": "Like hFileResource but uses the path of the current request URI",
          "hierarchy": "Network Salvia Handler File",
          "module": "Network.Salvia.Handler.File",
          "name": "hFile",
          "normalized": "a()",
          "package": "salvia",
          "partial": "File",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFileResourceFilter\u003c/a\u003e\u003c/code\u003e but uses the path of the current request URI.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.File\",\"Network.Salvia.Handlers\"]",
          "name": "hFileFilter",
          "package": "salvia",
          "signature": "(String -\u003e String) -\u003e m ()",
          "source": "src/Network-Salvia-Handler-File.html#hFileFilter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFileFilter\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileFilter\"]"
        },
        "index": {
          "description": "Like hFileResourceFilter but uses the path of the current request URI",
          "hierarchy": "Network Salvia Handler File",
          "module": "Network.Salvia.Handler.File",
          "name": "hFileFilter",
          "normalized": "(String-\u003eString)-\u003ea()",
          "package": "salvia",
          "partial": "File Filter",
          "signature": "(String-\u003eString)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFileFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe a file from the filesystem indicated by the specified filepath. When\nthere is some kind of \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e the \u003ccode\u003e\u003ca\u003ehSafeIO\u003c/a\u003e\u003c/code\u003e function will be used to produce a\ncorresponding error response. The \u003ccode\u003e\u003ca\u003econtentType\u003c/a\u003e\u003c/code\u003e will be the mime-type based on\nthe filename extension using the \u003ccode\u003e\u003ca\u003emimetype\u003c/a\u003e\u003c/code\u003e function. The \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e will\nbe set the file's size.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.File\",\"Network.Salvia.Handlers\"]",
          "name": "hFileResource",
          "package": "salvia",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Network-Salvia-Handler-File.html#hFileResource",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFileResource\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileResource\"]"
        },
        "index": {
          "description": "Serve file from the filesystem indicated by the specified filepath When there is some kind of IOError the hSafeIO function will be used to produce corresponding error response The contentType will be the mime-type based on the filename extension using the mimetype function The contentLength will be set the file size",
          "hierarchy": "Network Salvia Handler File",
          "module": "Network.Salvia.Handler.File",
          "name": "hFileResource",
          "normalized": "FilePath-\u003ea()",
          "package": "salvia",
          "partial": "File Resource",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFileResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehFileResource\u003c/a\u003e\u003c/code\u003e handler, but with a custom filter over the content.\nThis function will assume the content is an UTF-8 encoded text file. Because of\nthe possibly unpredictable behavior of the filter, no \u003ccode\u003e\u003ca\u003econtentLength\u003c/a\u003e\u003c/code\u003e header\nwill be set using this handler.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.File\",\"Network.Salvia.Handlers\"]",
          "name": "hFileResourceFilter",
          "package": "salvia",
          "signature": "(String -\u003e String) -\u003e FilePath -\u003e m ()",
          "source": "src/Network-Salvia-Handler-File.html#hFileResourceFilter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFileResourceFilter\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileResourceFilter\"]"
        },
        "index": {
          "description": "Like the hFileResource handler but with custom filter over the content This function will assume the content is an UTF-8 encoded text file Because of the possibly unpredictable behavior of the filter no contentLength header will be set using this handler",
          "hierarchy": "Network Salvia Handler File",
          "module": "Network.Salvia.Handler.File",
          "name": "hFileResourceFilter",
          "normalized": "(String-\u003eString)-\u003eFilePath-\u003ea()",
          "package": "salvia",
          "partial": "File Resource Filter",
          "signature": "(String-\u003eString)-\u003eFilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hFileResourceFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a handler that is parametrized by a file resources into a regular handler\nthat utilizes the path part of the request URI as the resource identifier.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.File\",\"Network.Salvia.Handlers\"]",
          "name": "hResource",
          "package": "salvia",
          "signature": "(FilePath -\u003e m a) -\u003e m a",
          "source": "src/Network-Salvia-Handler-File.html#hResource",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hResource\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResource\"]"
        },
        "index": {
          "description": "Turn handler that is parametrized by file resources into regular handler that utilizes the path part of the request URI as the resource identifier",
          "hierarchy": "Network Salvia Handler File",
          "module": "Network.Salvia.Handler.File",
          "name": "hResource",
          "normalized": "(FilePath-\u003ea b)-\u003ea b",
          "package": "salvia",
          "partial": "Resource",
          "signature": "(FilePath-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a handler that is parametrized by a URI into a regular handler that\nutilizes the request URI as the resource identifier.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.File\",\"Network.Salvia.Handlers\"]",
          "name": "hUri",
          "package": "salvia",
          "signature": "(Uri -\u003e m a) -\u003e m a",
          "source": "src/Network-Salvia-Handler-File.html#hUri",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hUri\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hUri\"]"
        },
        "index": {
          "description": "Turn handler that is parametrized by URI into regular handler that utilizes the request URI as the resource identifier",
          "hierarchy": "Network Salvia Handler File",
          "module": "Network.Salvia.Handler.File",
          "name": "hUri",
          "normalized": "(Uri-\u003ea b)-\u003ea b",
          "package": "salvia",
          "partial": "Uri",
          "signature": "(Uri-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-File.html#v:hUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eServing parts of the local file system. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Salvia.Handler.FileSystem",
          "name": "FileSystem",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-FileSystem.html",
          "type": "module"
        },
        "index": {
          "description": "Serving parts of the local file system",
          "hierarchy": "Network Salvia Handler FileSystem",
          "module": "Network.Salvia.Handler.FileSystem",
          "name": "FileSystem",
          "package": "salvia",
          "partial": "File System",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe single directory by combining the \u003ccode\u003e\u003ca\u003ehDirectoryResource\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003ehFileResource\u003c/a\u003e\u003c/code\u003e handlers in the \u003ccode\u003e\u003ca\u003ehFileTypeDispatcher\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.FileSystem\",\"Network.Salvia.Handlers\"]",
          "name": "hFileSystem",
          "package": "salvia",
          "signature": "FilePath-\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#v:hFileSystem\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileSystem\"]"
        },
        "index": {
          "description": "Serve single directory by combining the hDirectoryResource and hFileResource handlers in the hFileTypeDispatcher",
          "hierarchy": "Network Salvia Handler FileSystem",
          "module": "Network.Salvia.Handler.FileSystem",
          "name": "hFileSystem",
          "normalized": "FilePath-\u003ea()",
          "package": "salvia",
          "partial": "File System",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#v:hFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe single directory like \u003ccode\u003e\u003ca\u003ehFileSystem\u003c/a\u003e\u003c/code\u003e but do not show directory indices.\nInstead of an directory index an \u003ccode\u003e\u003ca\u003eForbidden\u003c/a\u003e\u003c/code\u003e response will be created.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.FileSystem\",\"Network.Salvia.Handlers\"]",
          "name": "hFileSystemNoIndexes",
          "package": "salvia",
          "signature": "FilePath-\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#v:hFileSystemNoIndexes\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileSystemNoIndexes\"]"
        },
        "index": {
          "description": "Serve single directory like hFileSystem but do not show directory indices Instead of an directory index an Forbidden response will be created",
          "hierarchy": "Network Salvia Handler FileSystem",
          "module": "Network.Salvia.Handler.FileSystem",
          "name": "hFileSystemNoIndexes",
          "normalized": "FilePath-\u003ea()",
          "package": "salvia",
          "partial": "File System No Indexes",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#v:hFileSystemNoIndexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatch based on file type; regular files or directories. The first handler\nspecified will be invoked in case the resource to be served is an directory,\nthe second handler otherwise. The path from the request URI will be appended to\nthe directory resource specified as a parameter, this new path will be used to\nlookup the real resource on the file system. Every request will be jailed in\nthe specified directory resource to prevent users from requesting arbitrary\nparts of the file system.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.FileSystem\",\"Network.Salvia.Handlers\"]",
          "name": "hFileTypeDispatcher",
          "package": "salvia",
          "signature": "(FilePath -\u003e m ())-\u003e (FilePath -\u003e m ())-\u003e FilePath-\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#v:hFileTypeDispatcher\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFileTypeDispatcher\"]"
        },
        "index": {
          "description": "Dispatch based on file type regular files or directories The first handler specified will be invoked in case the resource to be served is an directory the second handler otherwise The path from the request URI will be appended to the directory resource specified as parameter this new path will be used to lookup the real resource on the file system Every request will be jailed in the specified directory resource to prevent users from requesting arbitrary parts of the file system",
          "hierarchy": "Network Salvia Handler FileSystem",
          "module": "Network.Salvia.Handler.FileSystem",
          "name": "hFileTypeDispatcher",
          "normalized": "(FilePath-\u003ea())-\u003e(FilePath-\u003ea())-\u003eFilePath-\u003ea()",
          "package": "salvia",
          "partial": "File Type Dispatcher",
          "signature": "(FilePath-\u003em())-\u003e(FilePath-\u003em())-\u003eFilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-FileSystem.html#v:hFileTypeDispatcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Head",
          "name": "Head",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Head.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Head",
          "module": "Network.Salvia.Handler.Head",
          "name": "Head",
          "package": "salvia",
          "partial": "Head",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Head.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehHead\u003c/a\u003e\u003c/code\u003e handler makes sure no \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body is sent to the client\nwhen the request is an HTTP \u003ccode\u003e\u003ca\u003eHEAD\u003c/a\u003e\u003c/code\u003e request. In the case of a \u003ccode\u003e\u003ca\u003eHEAD\u003c/a\u003e\u003c/code\u003e request the\nspecified sub handler will be executed under the assumption that the request\nwas a \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e request, otherwise this handler will act as the identify function.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Head\",\"Network.Salvia.Handlers\"]",
          "name": "hHead",
          "package": "salvia",
          "signature": "m a -\u003e m a",
          "source": "src/Network-Salvia-Handler-Head.html#hHead",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Head.html#v:hHead\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hHead\"]"
        },
        "index": {
          "description": "The hHead handler makes sure no HTTP Response body is sent to the client when the request is an HTTP HEAD request In the case of HEAD request the specified sub handler will be executed under the assumption that the request was GET request otherwise this handler will act as the identify function",
          "hierarchy": "Network Salvia Handler Head",
          "module": "Network.Salvia.Handler.Head",
          "name": "hHead",
          "normalized": "a b-\u003ea b",
          "package": "salvia",
          "partial": "Head",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Head.html#v:hHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Log",
          "name": "Log",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Log.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Log",
          "module": "Network.Salvia.Handler.Log",
          "name": "Log",
          "package": "salvia",
          "partial": "Log",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump the request headers to the standard output, useful for debugging.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Log\",\"Network.Salvia.Handlers\"]",
          "name": "hDumpRequest",
          "package": "salvia",
          "signature": "m ()",
          "source": "src/Network-Salvia-Handler-Log.html#hDumpRequest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#v:hDumpRequest\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDumpRequest\"]"
        },
        "index": {
          "description": "Dump the request headers to the standard output useful for debugging",
          "hierarchy": "Network Salvia Handler Log",
          "module": "Network.Salvia.Handler.Log",
          "name": "hDumpRequest",
          "normalized": "a()",
          "package": "salvia",
          "partial": "Dump Request",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#v:hDumpRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump the response headers to the standard output, useful for debugging.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Log\",\"Network.Salvia.Handlers\"]",
          "name": "hDumpResponse",
          "package": "salvia",
          "signature": "m ()",
          "source": "src/Network-Salvia-Handler-Log.html#hDumpResponse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#v:hDumpResponse\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hDumpResponse\"]"
        },
        "index": {
          "description": "Dump the response headers to the standard output useful for debugging",
          "hierarchy": "Network Salvia Handler Log",
          "module": "Network.Salvia.Handler.Log",
          "name": "hDumpResponse",
          "normalized": "a()",
          "package": "salvia",
          "partial": "Dump Response",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#v:hDumpResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple logger that prints a summery of the request information to\nthe specified file handle.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Log\",\"Network.Salvia.Handlers\"]",
          "name": "hLog",
          "package": "salvia",
          "signature": "Handle -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Log.html#hLog",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#v:hLog\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hLog\"]"
        },
        "index": {
          "description": "simple logger that prints summery of the request information to the specified file handle",
          "hierarchy": "Network Salvia Handler Log",
          "module": "Network.Salvia.Handler.Log",
          "name": "hLog",
          "normalized": "Handle-\u003ea()",
          "package": "salvia",
          "partial": "Log",
          "signature": "Handle-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Log.html#v:hLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Method",
          "name": "Method",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Method.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Method",
          "module": "Network.Salvia.Handler.Method",
          "name": "Method",
          "package": "salvia",
          "partial": "Method",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Method.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest dispatcher based on the HTTP request \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Method\",\"Network.Salvia.Handlers\"]",
          "name": "hMethod",
          "package": "salvia",
          "signature": "Dispatcher Method m a",
          "source": "src/Network-Salvia-Handler-Method.html#hMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Method.html#v:hMethod\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hMethod\"]"
        },
        "index": {
          "description": "Request dispatcher based on the HTTP request Method",
          "hierarchy": "Network Salvia Handler Method",
          "module": "Network.Salvia.Handler.Method",
          "name": "hMethod",
          "package": "salvia",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Method.html#v:hMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest list dispatcher based on the \u003ccode\u003e\u003ca\u003ehMethod\u003c/a\u003e\u003c/code\u003e dispatcher. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Method\",\"Network.Salvia.Handlers\"]",
          "name": "hMethodRouter",
          "package": "salvia",
          "signature": "ListDispatcher Method m ()",
          "source": "src/Network-Salvia-Handler-Method.html#hMethodRouter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Method.html#v:hMethodRouter\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hMethodRouter\"]"
        },
        "index": {
          "description": "Request list dispatcher based on the hMethod dispatcher",
          "hierarchy": "Network Salvia Handler Method",
          "module": "Network.Salvia.Handler.Method",
          "name": "hMethodRouter",
          "normalized": "ListDispatcher Method a()",
          "package": "salvia",
          "partial": "Method Router",
          "signature": "ListDispatcher Method m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Method.html#v:hMethodRouter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Parser",
          "name": "Parser",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Parser",
          "module": "Network.Salvia.Handler.Parser",
          "name": "Parser",
          "package": "salvia",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehParser\u003c/a\u003e\u003c/code\u003e handler is used to parse the raw \u003ccode\u003eHTTP\u003c/code\u003e message into the\n\u003ccode\u003eMessage\u003c/code\u003e data type. This handler is generally used as (one of) the first\nhandlers in a client or server environment. The first handler argument is\nexecuted when the message is invalid, possibly due to parser errors, and is\nparametrized with the error string. The second handler argument is executed\nwhen the message is valid. When the message could not be parsed within the time\nspecified with the first argument the function silently returns.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Parser\",\"Network.Salvia.Handlers\"]",
          "name": "hParser",
          "package": "salvia",
          "signature": "(Http d -\u003e m b)-\u003e (String -\u003e Either String (Http d))-\u003e Int-\u003e (String -\u003e m a)-\u003e m a-\u003e m (Maybe a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:hParser\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hParser\"]"
        },
        "index": {
          "description": "The hParser handler is used to parse the raw HTTP message into the Message data type This handler is generally used as one of the first handlers in client or server environment The first handler argument is executed when the message is invalid possibly due to parser errors and is parametrized with the error string The second handler argument is executed when the message is valid When the message could not be parsed within the time specified with the first argument the function silently returns",
          "hierarchy": "Network Salvia Handler Parser",
          "module": "Network.Salvia.Handler.Parser",
          "name": "hParser",
          "normalized": "(Http a-\u003eb c)-\u003e(String-\u003eEither String(Http a))-\u003eInt-\u003e(String-\u003eb d)-\u003eb d-\u003eb(Maybe d)",
          "package": "salvia",
          "partial": "Parser",
          "signature": "(Http d-\u003em b)-\u003e(String-\u003eEither String(Http d))-\u003eInt-\u003e(String-\u003em a)-\u003em a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:hParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehParser\u003c/a\u003e\u003c/code\u003e but always parses \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003eRequests\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Parser\",\"Network.Salvia.Handlers\"]",
          "name": "hRequestParser",
          "package": "salvia",
          "signature": "Int-\u003e (String -\u003e m a)-\u003e m a-\u003e m (Maybe a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:hRequestParser\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestParser\"]"
        },
        "index": {
          "description": "Like the hParser but always parses HTTP Requests",
          "hierarchy": "Network Salvia Handler Parser",
          "module": "Network.Salvia.Handler.Parser",
          "name": "hRequestParser",
          "normalized": "Int-\u003e(String-\u003ea b)-\u003ea b-\u003ea(Maybe b)",
          "package": "salvia",
          "partial": "Request Parser",
          "signature": "Int-\u003e(String-\u003em a)-\u003em a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:hRequestParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003ehParser\u003c/a\u003e\u003c/code\u003e but always parses \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Parser\",\"Network.Salvia.Handlers\"]",
          "name": "hResponseParser",
          "package": "salvia",
          "signature": "Int-\u003e (String -\u003e m a)-\u003e m a-\u003e m (Maybe a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:hResponseParser\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResponseParser\"]"
        },
        "index": {
          "description": "Like the hParser but always parses HTTP Response",
          "hierarchy": "Network Salvia Handler Parser",
          "module": "Network.Salvia.Handler.Parser",
          "name": "hResponseParser",
          "normalized": "Int-\u003e(String-\u003ea b)-\u003ea b-\u003ea(Maybe b)",
          "package": "salvia",
          "partial": "Response Parser",
          "signature": "Int-\u003e(String-\u003em a)-\u003em a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:hResponseParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Salvia.Handler.Parser\",\"Network.Salvia.Handlers\"]",
          "name": "readNonEmptyLines",
          "package": "salvia",
          "signature": "Handle -\u003e IO String",
          "source": "src/Network-Salvia-Handler-Parser.html#readNonEmptyLines",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:readNonEmptyLines\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:readNonEmptyLines\"]"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Parser",
          "module": "Network.Salvia.Handler.Parser",
          "name": "readNonEmptyLines",
          "normalized": "Handle-\u003eIO String",
          "package": "salvia",
          "partial": "Non Empty Lines",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Parser.html#v:readNonEmptyLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Path",
          "name": "Path",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Path.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Path",
          "module": "Network.Salvia.Handler.Path",
          "name": "Path",
          "package": "salvia",
          "partial": "Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest dispatcher based on the request path. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Path\",\"Network.Salvia.Handlers\"]",
          "name": "hPath",
          "package": "salvia",
          "signature": "Dispatcher String m a",
          "source": "src/Network-Salvia-Handler-Path.html#hPath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPath\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPath\"]"
        },
        "index": {
          "description": "Request dispatcher based on the request path",
          "hierarchy": "Network Salvia Handler Path",
          "module": "Network.Salvia.Handler.Path",
          "name": "hPath",
          "package": "salvia",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList dispatcher version of \u003ccode\u003e\u003ca\u003ehPath\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Path\",\"Network.Salvia.Handlers\"]",
          "name": "hPathRouter",
          "package": "salvia",
          "signature": "ListDispatcher String m a",
          "source": "src/Network-Salvia-Handler-Path.html#hPathRouter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPathRouter\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPathRouter\"]"
        },
        "index": {
          "description": "List dispatcher version of hPath",
          "hierarchy": "Network Salvia Handler Path",
          "module": "Network.Salvia.Handler.Path",
          "name": "hPathRouter",
          "package": "salvia",
          "partial": "Path Router",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPathRouter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest dispatcher based on a prefix of the request path. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Path\",\"Network.Salvia.Handlers\"]",
          "name": "hPrefix",
          "package": "salvia",
          "signature": "Dispatcher String m a",
          "source": "src/Network-Salvia-Handler-Path.html#hPrefix",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPrefix\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPrefix\"]"
        },
        "index": {
          "description": "Request dispatcher based on prefix of the request path",
          "hierarchy": "Network Salvia Handler Path",
          "module": "Network.Salvia.Handler.Path",
          "name": "hPrefix",
          "package": "salvia",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList dispatcher version of \u003ccode\u003e\u003ca\u003ehPrefix\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Path\",\"Network.Salvia.Handlers\"]",
          "name": "hPrefixRouter",
          "package": "salvia",
          "signature": "ListDispatcher String m a",
          "source": "src/Network-Salvia-Handler-Path.html#hPrefixRouter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPrefixRouter\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPrefixRouter\"]"
        },
        "index": {
          "description": "List dispatcher version of hPrefix",
          "hierarchy": "Network Salvia Handler Path",
          "module": "Network.Salvia.Handler.Path",
          "name": "hPrefixRouter",
          "package": "salvia",
          "partial": "Prefix Router",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hPrefixRouter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to fetch the URI parameters from the request. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Path\",\"Network.Salvia.Handlers\"]",
          "name": "hQueryParameters",
          "package": "salvia",
          "signature": "m Parameters",
          "source": "src/Network-Salvia-Handler-Path.html#hQueryParameters",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hQueryParameters\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hQueryParameters\"]"
        },
        "index": {
          "description": "Helper function to fetch the URI parameters from the request",
          "hierarchy": "Network Salvia Handler Path",
          "module": "Network.Salvia.Handler.Path",
          "name": "hQueryParameters",
          "package": "salvia",
          "partial": "Query Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Path.html#v:hQueryParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Printer",
          "name": "Printer",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Printer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Printer",
          "module": "Network.Salvia.Handler.Printer",
          "name": "Printer",
          "package": "salvia",
          "partial": "Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend all the message headers directly over the socket.\n\u003c/p\u003e\u003cp\u003etodo: printer for rawResponse over response!!\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Printer\",\"Network.Salvia.Handlers\"]",
          "name": "hFlushHeaders",
          "package": "salvia",
          "signature": "d -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Printer.html#hFlushHeaders",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushHeaders\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFlushHeaders\"]"
        },
        "index": {
          "description": "Send all the message headers directly over the socket todo printer for rawResponse over response",
          "hierarchy": "Network Salvia Handler Printer",
          "module": "Network.Salvia.Handler.Printer",
          "name": "hFlushHeaders",
          "normalized": "a-\u003eb()",
          "package": "salvia",
          "partial": "Flush Headers",
          "signature": "d-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFlushHeaders\u003c/a\u003e\u003c/code\u003e but does not print status line, can be useful for CGI mode.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Printer\",\"Network.Salvia.Handlers\"]",
          "name": "hFlushHeadersOnly",
          "package": "salvia",
          "signature": "d -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Printer.html#hFlushHeadersOnly",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushHeadersOnly\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFlushHeadersOnly\"]"
        },
        "index": {
          "description": "Like hFlushHeaders but does not print status line can be useful for CGI mode",
          "hierarchy": "Network Salvia Handler Printer",
          "module": "Network.Salvia.Handler.Printer",
          "name": "hFlushHeadersOnly",
          "normalized": "a-\u003eb()",
          "package": "salvia",
          "partial": "Flush Headers Only",
          "signature": "d-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushHeadersOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne by one apply all enqueued send actions to the socket.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Printer\",\"Network.Salvia.Handlers\"]",
          "name": "hFlushQueue",
          "package": "salvia",
          "signature": "m ()",
          "source": "src/Network-Salvia-Handler-Printer.html#hFlushQueue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushQueue\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFlushQueue\"]"
        },
        "index": {
          "description": "One by one apply all enqueued send actions to the socket",
          "hierarchy": "Network Salvia Handler Printer",
          "module": "Network.Salvia.Handler.Printer",
          "name": "hFlushQueue",
          "normalized": "a()",
          "package": "salvia",
          "partial": "Flush Queue",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFlushHeaders\u003c/a\u003e\u003c/code\u003e but specifically for the request headers.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Printer\",\"Network.Salvia.Handlers\"]",
          "name": "hFlushRequestHeaders",
          "package": "salvia",
          "signature": "m ()",
          "source": "src/Network-Salvia-Handler-Printer.html#hFlushRequestHeaders",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushRequestHeaders\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFlushRequestHeaders\"]"
        },
        "index": {
          "description": "Like hFlushHeaders but specifically for the request headers",
          "hierarchy": "Network Salvia Handler Printer",
          "module": "Network.Salvia.Handler.Printer",
          "name": "hFlushRequestHeaders",
          "normalized": "a()",
          "package": "salvia",
          "partial": "Flush Request Headers",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushRequestHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehFlushHeaders\u003c/a\u003e\u003c/code\u003e but specifically for the response headers.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Printer\",\"Network.Salvia.Handlers\"]",
          "name": "hFlushResponseHeaders",
          "package": "salvia",
          "signature": "m ()",
          "source": "src/Network-Salvia-Handler-Printer.html#hFlushResponseHeaders",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushResponseHeaders\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hFlushResponseHeaders\"]"
        },
        "index": {
          "description": "Like hFlushHeaders but specifically for the response headers",
          "hierarchy": "Network Salvia Handler Printer",
          "module": "Network.Salvia.Handler.Printer",
          "name": "hFlushResponseHeaders",
          "normalized": "a()",
          "package": "salvia",
          "partial": "Flush Response Headers",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hFlushResponseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehRequestPrinter\u003c/a\u003e\u003c/code\u003e handler prints the entire HTTP request including the\nheaders and the body to the socket towards the server. This handler is\ngenerally used as (one of) the last handler in a server environment.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Printer\",\"Network.Salvia.Handlers\"]",
          "name": "hRequestPrinter",
          "package": "salvia",
          "signature": "m ()",
          "source": "src/Network-Salvia-Handler-Printer.html#hRequestPrinter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hRequestPrinter\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRequestPrinter\"]"
        },
        "index": {
          "description": "The hRequestPrinter handler prints the entire HTTP request including the headers and the body to the socket towards the server This handler is generally used as one of the last handler in server environment",
          "hierarchy": "Network Salvia Handler Printer",
          "module": "Network.Salvia.Handler.Printer",
          "name": "hRequestPrinter",
          "normalized": "a()",
          "package": "salvia",
          "partial": "Request Printer",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hRequestPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehResponsePrinter\u003c/a\u003e\u003c/code\u003e handler prints the entire HTTP response including the\nheaders and the body to the socket towards the client. This handler is\ngenerally used as (one of) the last handler in a client environment.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Printer\",\"Network.Salvia.Handlers\"]",
          "name": "hResponsePrinter",
          "package": "salvia",
          "signature": "m ()",
          "source": "src/Network-Salvia-Handler-Printer.html#hResponsePrinter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hResponsePrinter\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hResponsePrinter\"]"
        },
        "index": {
          "description": "The hResponsePrinter handler prints the entire HTTP response including the headers and the body to the socket towards the client This handler is generally used as one of the last handler in client environment",
          "hierarchy": "Network Salvia Handler Printer",
          "module": "Network.Salvia.Handler.Printer",
          "name": "hResponsePrinter",
          "normalized": "a()",
          "package": "salvia",
          "partial": "Response Printer",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Printer.html#v:hResponsePrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Put",
          "name": "Put",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Put.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Put",
          "module": "Network.Salvia.Handler.Put",
          "name": "Put",
          "package": "salvia",
          "partial": "Put",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a browseable filesystem handler (like \u003ccode\u003e\u003ca\u003ehFileSystem\u003c/a\u003e\u003c/code\u003e) but make all files\nwriteable by a \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e request. Files that do not exists will be created as long\nas the directory in which they will be created exists.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Put\",\"Network.Salvia.Handlers\"]",
          "name": "hPutFileSystem",
          "package": "salvia",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Put.html#hPutFileSystem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#v:hPutFileSystem\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPutFileSystem\"]"
        },
        "index": {
          "description": "Create browseable filesystem handler like hFileSystem but make all files writeable by PUT request Files that do not exists will be created as long as the directory in which they will be created exists",
          "hierarchy": "Network Salvia Handler Put",
          "module": "Network.Salvia.Handler.Put",
          "name": "hPutFileSystem",
          "normalized": "FilePath-\u003ea()",
          "package": "salvia",
          "partial": "Put File System",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#v:hPutFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvokes the \u003ccode\u003e\u003ca\u003ehStore\u003c/a\u003e\u003c/code\u003e handler when the request is a \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e request and invokes\nthe fallback handler otherwiser.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Put\",\"Network.Salvia.Handlers\"]",
          "name": "hPutResource",
          "package": "salvia",
          "signature": "(FilePath -\u003e m ()) -\u003e FilePath -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Put.html#hPutResource",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#v:hPutResource\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPutResource\"]"
        },
        "index": {
          "description": "Invokes the hStore handler when the request is PUT request and invokes the fallback handler otherwiser",
          "hierarchy": "Network Salvia Handler Put",
          "module": "Network.Salvia.Handler.Put",
          "name": "hPutResource",
          "normalized": "(FilePath-\u003ea())-\u003eFilePath-\u003ea()",
          "package": "salvia",
          "partial": "Put Resource",
          "signature": "(FilePath-\u003em())-\u003eFilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#v:hPutResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis handler takes a FilePath and will try to store the entire request body in\nthat file. When the request body could for some reason not be fetch a\n\u003ccode\u003e\u003ca\u003eBadRequest\u003c/a\u003e\u003c/code\u003e error response will be created. When an IO error occurs the\n\u003ccode\u003e\u003ca\u003ehIOError\u003c/a\u003e\u003c/code\u003e function is used to setup an apropriate response.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Put\",\"Network.Salvia.Handlers\"]",
          "name": "hStore",
          "package": "salvia",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Put.html#hStore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#v:hStore\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hStore\"]"
        },
        "index": {
          "description": "This handler takes FilePath and will try to store the entire request body in that file When the request body could for some reason not be fetch BadRequest error response will be created When an IO error occurs the hIOError function is used to setup an apropriate response",
          "hierarchy": "Network Salvia Handler Put",
          "module": "Network.Salvia.Handler.Put",
          "name": "hStore",
          "normalized": "FilePath-\u003ea()",
          "package": "salvia",
          "partial": "Store",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Put.html#v:hStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Range",
          "name": "Range",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Range.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Range",
          "module": "Network.Salvia.Handler.Range",
          "name": "Range",
          "package": "salvia",
          "partial": "Range",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP Range datatype.\n\u003c/p\u003e",
          "module": "Network.Salvia.Handler.Range",
          "name": "Range",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Range.html#Range",
          "type": "data"
        },
        "index": {
          "description": "HTTP Range datatype",
          "hierarchy": "Network Salvia Handler Range",
          "module": "Network.Salvia.Handler.Range",
          "name": "Range",
          "package": "salvia",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Salvia.Handler.Range\",\"Network.Salvia.Handlers\"]",
          "name": "Range",
          "package": "salvia",
          "signature": "Range (Maybe Integer) (Maybe Integer) (Maybe Integer)",
          "source": "src/Network-Salvia-Handler-Range.html#Range",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:Range\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:Range\"]"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Range",
          "module": "Network.Salvia.Handler.Range",
          "name": "Range",
          "package": "salvia",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eContent-Range\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Range\",\"Network.Salvia.Handlers\"]",
          "name": "contentRange",
          "package": "salvia",
          "signature": "Http Response :-\u003e Maybe Range",
          "source": "src/Network-Salvia-Handler-Range.html#contentRange",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:contentRange\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:contentRange\"]"
        },
        "index": {
          "description": "Access the Content-Range header field",
          "hierarchy": "Network Salvia Handler Range",
          "module": "Network.Salvia.Handler.Range",
          "name": "contentRange",
          "normalized": "Http Response-\u003eMaybe Range",
          "package": "salvia",
          "partial": "Range",
          "signature": "Http Response-\u003eMaybe Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:contentRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the \u003cem\u003eRange\u003c/em\u003e header field.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Range\",\"Network.Salvia.Handlers\"]",
          "name": "range",
          "package": "salvia",
          "signature": "Http Request :-\u003e Maybe Range",
          "source": "src/Network-Salvia-Handler-Range.html#range",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:range\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:range\"]"
        },
        "index": {
          "description": "Access the Range header field",
          "hierarchy": "Network Salvia Handler Range",
          "module": "Network.Salvia.Handler.Range",
          "name": "range",
          "normalized": "Http Request-\u003eMaybe Range",
          "package": "salvia",
          "signature": "Http Request-\u003eMaybe Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens containing parser and pretty-printer for HTTP ranges.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Range\",\"Network.Salvia.Handlers\"]",
          "name": "rangeL",
          "package": "salvia",
          "signature": "String :\u003c-\u003e: Range",
          "source": "src/Network-Salvia-Handler-Range.html#rangeL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:rangeL\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:rangeL\"]"
        },
        "index": {
          "description": "Lens containing parser and pretty-printer for HTTP ranges",
          "hierarchy": "Network Salvia Handler Range",
          "module": "Network.Salvia.Handler.Range",
          "name": "rangeL",
          "normalized": "String-\u003eRange",
          "package": "salvia",
          "signature": "String-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Range.html#v:rangeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Redirect",
          "name": "Redirect",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Redirect.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Redirect",
          "module": "Network.Salvia.Handler.Redirect",
          "name": "Redirect",
          "package": "salvia",
          "partial": "Redirect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Redirect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect a client to another location by creating a \u003ccode\u003e\u003ca\u003eMovedPermanently\u003c/a\u003e\u003c/code\u003e response\nmessage with the specified \u003ccode\u003eURI\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003elocation\u003c/a\u003e\u003c/code\u003e header.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Redirect\",\"Network.Salvia.Handlers\"]",
          "name": "hRedirect",
          "package": "salvia",
          "signature": "String -\u003e m ()",
          "source": "src/Network-Salvia-Handler-Redirect.html#hRedirect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Redirect.html#v:hRedirect\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRedirect\"]"
        },
        "index": {
          "description": "Redirect client to another location by creating MovedPermanently response message with the specified URI in the location header",
          "hierarchy": "Network Salvia Handler Redirect",
          "module": "Network.Salvia.Handler.Redirect",
          "name": "hRedirect",
          "normalized": "String-\u003ea()",
          "package": "salvia",
          "partial": "Redirect",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Redirect.html#v:hRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.Rewrite",
          "name": "Rewrite",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Rewrite.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler Rewrite",
          "module": "Network.Salvia.Handler.Rewrite",
          "name": "Rewrite",
          "package": "salvia",
          "partial": "Rewrite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a handler in a local environment in which the \u003ccode\u003eHTTP\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e has\nbeen modified.\n\u003c/p\u003e",
          "module": "Network.Salvia.Handler.Rewrite",
          "name": "hLocalRequest",
          "package": "salvia",
          "signature": "(Http Request :-\u003e b) -\u003e (b -\u003e b) -\u003e m a -\u003e m a",
          "source": "src/Network-Salvia-Handler-Rewrite.html#hLocalRequest",
          "type": "function"
        },
        "index": {
          "description": "Run handler in local environment in which the HTTP Request has been modified",
          "hierarchy": "Network Salvia Handler Rewrite",
          "module": "Network.Salvia.Handler.Rewrite",
          "name": "hLocalRequest",
          "normalized": "(Http Request-\u003ea)-\u003e(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "salvia",
          "partial": "Local Request",
          "signature": "(Http Request-\u003eb)-\u003e(b-\u003eb)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hLocalRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an handler in a modified context in which the request \u003ccode\u003e\u003ca\u003eUri\u003c/a\u003e\u003c/code\u003e has been\nchanged by the specified modifier function. After the handler completes the \u003ccode\u003e\u003ca\u003eUri\u003c/a\u003e\u003c/code\u003e\nremains untouched.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Rewrite\",\"Network.Salvia.Handlers\"]",
          "name": "hRewrite",
          "package": "salvia",
          "signature": "(Uri -\u003e Uri) -\u003e m a -\u003e m a",
          "source": "src/Network-Salvia-Handler-Rewrite.html#hRewrite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewrite\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRewrite\"]"
        },
        "index": {
          "description": "Run an handler in modified context in which the request Uri has been changed by the specified modifier function After the handler completes the Uri remains untouched",
          "hierarchy": "Network Salvia Handler Rewrite",
          "module": "Network.Salvia.Handler.Rewrite",
          "name": "hRewrite",
          "normalized": "(Uri-\u003eUri)-\u003ea b-\u003ea b",
          "package": "salvia",
          "partial": "Rewrite",
          "signature": "(Uri-\u003eUri)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun handler in a context with a modified file extension. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Rewrite\",\"Network.Salvia.Handlers\"]",
          "name": "hRewriteExt",
          "package": "salvia",
          "signature": "(Maybe String -\u003e Maybe String) -\u003e m a -\u003e m a",
          "source": "src/Network-Salvia-Handler-Rewrite.html#hRewriteExt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewriteExt\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRewriteExt\"]"
        },
        "index": {
          "description": "Run handler in context with modified file extension",
          "hierarchy": "Network Salvia Handler Rewrite",
          "module": "Network.Salvia.Handler.Rewrite",
          "name": "hRewriteExt",
          "normalized": "(Maybe String-\u003eMaybe String)-\u003ea b-\u003ea b",
          "package": "salvia",
          "partial": "Rewrite Ext",
          "signature": "(Maybe String-\u003eMaybe String)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewriteExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun handler in a context with a modified host. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Rewrite\",\"Network.Salvia.Handlers\"]",
          "name": "hRewriteHost",
          "package": "salvia",
          "signature": "(String -\u003e String) -\u003e m a -\u003e m a",
          "source": "src/Network-Salvia-Handler-Rewrite.html#hRewriteHost",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewriteHost\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRewriteHost\"]"
        },
        "index": {
          "description": "Run handler in context with modified host",
          "hierarchy": "Network Salvia Handler Rewrite",
          "module": "Network.Salvia.Handler.Rewrite",
          "name": "hRewriteHost",
          "normalized": "(String-\u003eString)-\u003ea b-\u003ea b",
          "package": "salvia",
          "partial": "Rewrite Host",
          "signature": "(String-\u003eString)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewriteHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun handler in a context with a modified path. \n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Rewrite\",\"Network.Salvia.Handlers\"]",
          "name": "hRewritePath",
          "package": "salvia",
          "signature": "(FilePath -\u003e FilePath) -\u003e m a -\u003e m a",
          "source": "src/Network-Salvia-Handler-Rewrite.html#hRewritePath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewritePath\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hRewritePath\"]"
        },
        "index": {
          "description": "Run handler in context with modified path",
          "hierarchy": "Network Salvia Handler Rewrite",
          "module": "Network.Salvia.Handler.Rewrite",
          "name": "hRewritePath",
          "normalized": "(FilePath-\u003eFilePath)-\u003ea b-\u003ea b",
          "package": "salvia",
          "partial": "Rewrite Path",
          "signature": "(FilePath-\u003eFilePath)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hRewritePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun handler in a context with a modified path. The specified prefix will be\nprepended to the path.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Rewrite\",\"Network.Salvia.Handlers\"]",
          "name": "hWithDir",
          "package": "salvia",
          "signature": "String -\u003e m a -\u003e m a",
          "source": "src/Network-Salvia-Handler-Rewrite.html#hWithDir",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hWithDir\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hWithDir\"]"
        },
        "index": {
          "description": "Run handler in context with modified path The specified prefix will be prepended to the path",
          "hierarchy": "Network Salvia Handler Rewrite",
          "module": "Network.Salvia.Handler.Rewrite",
          "name": "hWithDir",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "salvia",
          "partial": "With Dir",
          "signature": "String-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hWithDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun handler in a context with a modified path. The specified prefix will be\nstripped from the path.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.Rewrite\",\"Network.Salvia.Handlers\"]",
          "name": "hWithoutDir",
          "package": "salvia",
          "signature": "String -\u003e m a -\u003e m a",
          "source": "src/Network-Salvia-Handler-Rewrite.html#hWithoutDir",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hWithoutDir\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hWithoutDir\"]"
        },
        "index": {
          "description": "Run handler in context with modified path The specified prefix will be stripped from the path",
          "hierarchy": "Network Salvia Handler Rewrite",
          "module": "Network.Salvia.Handler.Rewrite",
          "name": "hWithoutDir",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "salvia",
          "partial": "Without Dir",
          "signature": "String-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-Rewrite.html#v:hWithoutDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.VirtualHosting",
          "name": "VirtualHosting",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-VirtualHosting.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler VirtualHosting",
          "module": "Network.Salvia.Handler.VirtualHosting",
          "name": "VirtualHosting",
          "package": "salvia",
          "partial": "Virtual Hosting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-VirtualHosting.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatcher based on the port number of the \u003ccode\u003e\u003ca\u003ehostname\u003c/a\u003e\u003c/code\u003e request header. When no\nport number is available in the hostname header port 80 will be assumed.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.VirtualHosting\",\"Network.Salvia.Handlers\"]",
          "name": "hPortRouter",
          "package": "salvia",
          "signature": "ListDispatcher Int m b",
          "source": "src/Network-Salvia-Handler-VirtualHosting.html#hPortRouter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-VirtualHosting.html#v:hPortRouter\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hPortRouter\"]"
        },
        "index": {
          "description": "Dispatcher based on the port number of the hostname request header When no port number is available in the hostname header port will be assumed",
          "hierarchy": "Network Salvia Handler VirtualHosting",
          "module": "Network.Salvia.Handler.VirtualHosting",
          "name": "hPortRouter",
          "package": "salvia",
          "partial": "Port Router",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-VirtualHosting.html#v:hPortRouter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatcher based on the host part of the \u003ccode\u003e\u003ca\u003ehostname\u003c/a\u003e\u003c/code\u003e request header. Everything\nnot part of the real hostname (like the port number) will be ignored. When the\nexpected hostname starts with a dot (like \u003ca\u003e.mydomain.com\u003c/a\u003e)  this indicates that\nall sub-domains of this domain will match as well.\n\u003c/p\u003e",
          "module": "[\"Network.Salvia.Handler.VirtualHosting\",\"Network.Salvia.Handlers\"]",
          "name": "hVirtualHosting",
          "package": "salvia",
          "signature": "ListDispatcher String m b",
          "source": "src/Network-Salvia-Handler-VirtualHosting.html#hVirtualHosting",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-VirtualHosting.html#v:hVirtualHosting\",\"http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#v:hVirtualHosting\"]"
        },
        "index": {
          "description": "Dispatcher based on the host part of the hostname request header Everything not part of the real hostname like the port number will be ignored When the expected hostname starts with dot like mydomain.com this indicates that all sub-domains of this domain will match as well",
          "hierarchy": "Network Salvia Handler VirtualHosting",
          "module": "Network.Salvia.Handler.VirtualHosting",
          "name": "hVirtualHosting",
          "package": "salvia",
          "partial": "Virtual Hosting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handler-VirtualHosting.html#v:hVirtualHosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handlers",
          "name": "Handlers",
          "package": "salvia",
          "source": "src/Network-Salvia-Handlers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handlers",
          "module": "Network.Salvia.Handlers",
          "name": "Handlers",
          "package": "salvia",
          "partial": "Handlers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dispatcher type takes one value to dispatch on and two handlers. The first\nhandler will be used when the predicate on the dispatch value returned \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nthe second (default) handler will be used when the predicate returs\n\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Salvia.Handlers",
          "name": "Dispatcher",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Dispatching.html#Dispatcher",
          "type": "type"
        },
        "index": {
          "description": "The dispatcher type takes one value to dispatch on and two handlers The first handler will be used when the predicate on the dispatch value returned True the second default handler will be used when the predicate returs False",
          "hierarchy": "Network Salvia Handlers",
          "module": "Network.Salvia.Handlers",
          "name": "Dispatcher",
          "package": "salvia",
          "partial": "Dispatcher",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#t:Dispatcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list dispatcher takes a mapping from dispatch values to handlers and one\ndefault fallback handler.\n\u003c/p\u003e",
          "module": "Network.Salvia.Handlers",
          "name": "ListDispatcher",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Dispatching.html#ListDispatcher",
          "type": "type"
        },
        "index": {
          "description": "list dispatcher takes mapping from dispatch values to handlers and one default fallback handler",
          "hierarchy": "Network Salvia Handlers",
          "module": "Network.Salvia.Handlers",
          "name": "ListDispatcher",
          "package": "salvia",
          "partial": "List Dispatcher",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#t:ListDispatcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP Range datatype.\n\u003c/p\u003e",
          "module": "Network.Salvia.Handlers",
          "name": "Range",
          "package": "salvia",
          "source": "src/Network-Salvia-Handler-Range.html#Range",
          "type": "data"
        },
        "index": {
          "description": "HTTP Range datatype",
          "hierarchy": "Network Salvia Handlers",
          "module": "Network.Salvia.Handlers",
          "name": "Range",
          "package": "salvia",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Handlers.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Config",
          "name": "Config",
          "package": "salvia",
          "source": "src/Network-Salvia-Impl-Config.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Config",
          "module": "Network.Salvia.Impl.Config",
          "name": "Config",
          "package": "salvia",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP server configuration contains some network settings the server needs\nknow before being able to run. \n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Config",
          "name": "Config",
          "package": "salvia",
          "source": "src/Network-Salvia-Impl-Config.html#Config",
          "type": "data"
        },
        "index": {
          "description": "The HTTP server configuration contains some network settings the server needs know before being able to run",
          "hierarchy": "Network Salvia Impl Config",
          "module": "Network.Salvia.Impl.Config",
          "name": "Config",
          "package": "salvia",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Config",
          "name": "Config",
          "package": "salvia",
          "signature": "Config",
          "source": "src/Network-Salvia-Impl-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Config",
          "module": "Network.Salvia.Impl.Config",
          "name": "Config",
          "package": "salvia",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer admin email address.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Config",
          "name": "adminMail",
          "package": "salvia",
          "signature": "String",
          "source": "src/Network-Salvia-Impl-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Server admin email address",
          "hierarchy": "Network Salvia Impl Config",
          "module": "Network.Salvia.Impl.Config",
          "name": "adminMail",
          "package": "salvia",
          "partial": "Mail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:adminMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTCP backlog.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Config",
          "name": "backlog",
          "package": "salvia",
          "signature": "Int",
          "source": "src/Network-Salvia-Impl-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "TCP backlog",
          "hierarchy": "Network Salvia Impl Config",
          "module": "Network.Salvia.Impl.Config",
          "name": "backlog",
          "package": "salvia",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:backlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default server configuration sets some safe default values. The server will\nby default bind to 0.0.0.0 (\u003ccode\u003e\u003ca\u003eiNADDR_ANY\u003c/a\u003e\u003c/code\u003e) at port 8080. The default value for\nthe TCP backlog is 64.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Config",
          "name": "defaultConfig",
          "package": "salvia",
          "signature": "Config",
          "source": "src/Network-Salvia-Impl-Config.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "The default server configuration sets some safe default values The server will by default bind to iNADDR ANY at port The default value for the TCP backlog is",
          "hierarchy": "Network Salvia Impl Config",
          "module": "Network.Salvia.Impl.Config",
          "name": "defaultConfig",
          "package": "salvia",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer hostname.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Config",
          "name": "hostname",
          "package": "salvia",
          "signature": "String",
          "source": "src/Network-Salvia-Impl-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Server hostname",
          "hierarchy": "Network Salvia Impl Config",
          "module": "Network.Salvia.Impl.Config",
          "name": "hostname",
          "package": "salvia",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:hostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddress port combinations to listen on.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Config",
          "name": "listenOn",
          "package": "salvia",
          "signature": "[SockAddr]",
          "source": "src/Network-Salvia-Impl-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Address port combinations to listen on",
          "hierarchy": "Network Salvia Impl Config",
          "module": "Network.Salvia.Impl.Config",
          "name": "listenOn",
          "normalized": "[SockAddr]",
          "package": "salvia",
          "partial": "On",
          "signature": "[SockAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Config.html#v:listenOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "Context",
          "package": "salvia",
          "source": "src/Network-Salvia-Impl-Context.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "Context",
          "package": "salvia",
          "partial": "Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic handler context that contains all the information needed by the\nrequest handlers to perform their task and to set up a proper response. All the\nfields in the context are accessible using the first class labels defined\nbelow. \n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "Context",
          "package": "salvia",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "data"
        },
        "index": {
          "description": "generic handler context that contains all the information needed by the request handlers to perform their task and to set up proper response All the fields in the context are accessible using the first class labels defined below",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "Context",
          "package": "salvia",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "Context",
          "package": "salvia",
          "signature": "Context",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "Context",
          "package": "salvia",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cAdminMail",
          "package": "salvia",
          "signature": "String",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cAdminMail",
          "package": "salvia",
          "partial": "Admin Mail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cAdminMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cClientAddr",
          "package": "salvia",
          "signature": "SockAddr",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cClientAddr",
          "package": "salvia",
          "partial": "Client Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cClientAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cHandle",
          "package": "salvia",
          "signature": "Handle",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cHandle",
          "package": "salvia",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cListenOn",
          "package": "salvia",
          "signature": "[SockAddr]",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cListenOn",
          "normalized": "[SockAddr]",
          "package": "salvia",
          "partial": "Listen On",
          "signature": "[SockAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cListenOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cPayload",
          "package": "salvia",
          "signature": "p",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cPayload",
          "package": "salvia",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cQueue",
          "package": "salvia",
          "signature": "SendQueue",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cQueue",
          "package": "salvia",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cRawRequest",
          "package": "salvia",
          "signature": "Http Request",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cRawRequest",
          "package": "salvia",
          "partial": "Raw Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cRawRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cRawResponse",
          "package": "salvia",
          "signature": "Http Response",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cRawResponse",
          "package": "salvia",
          "partial": "Raw Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cRawResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cRequest",
          "package": "salvia",
          "signature": "Http Request",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cRequest",
          "package": "salvia",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cResponse",
          "package": "salvia",
          "signature": "Http Response",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cResponse",
          "package": "salvia",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cServerAddr",
          "package": "salvia",
          "signature": "SockAddr",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cServerAddr",
          "package": "salvia",
          "partial": "Server Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cServerAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cServerHost",
          "package": "salvia",
          "signature": "String",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cServerHost",
          "package": "salvia",
          "partial": "Server Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cServerHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Context",
          "name": "_cSocket",
          "package": "salvia",
          "signature": "Socket",
          "source": "src/Network-Salvia-Impl-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "_cSocket",
          "package": "salvia",
          "partial": "Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:_cSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mail address of the server adminstrator.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cAdminMail",
          "package": "salvia",
          "signature": "Context p :-\u003e String",
          "source": "src/Network-Salvia-Impl-Context.html#cAdminMail",
          "type": "function"
        },
        "index": {
          "description": "The mail address of the server adminstrator",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cAdminMail",
          "normalized": "Context a-\u003eString",
          "package": "salvia",
          "partial": "Admin Mail",
          "signature": "Context p-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cAdminMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient address.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cClientAddr",
          "package": "salvia",
          "signature": "Context p :-\u003e SockAddr",
          "source": "src/Network-Salvia-Impl-Context.html#cClientAddr",
          "type": "function"
        },
        "index": {
          "description": "Client address",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cClientAddr",
          "normalized": "Context a-\u003eSockAddr",
          "package": "salvia",
          "partial": "Client Addr",
          "signature": "Context p-\u003eSockAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cClientAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile descriptor associated with socket for the connection to the peer.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cHandle",
          "package": "salvia",
          "signature": "Context p :-\u003e Handle",
          "source": "src/Network-Salvia-Impl-Context.html#cHandle",
          "type": "function"
        },
        "index": {
          "description": "File descriptor associated with socket for the connection to the peer",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cHandle",
          "normalized": "Context a-\u003eHandle",
          "package": "salvia",
          "partial": "Handle",
          "signature": "Context p-\u003eHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe socket address(es) the server is listening on.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cListenOn",
          "package": "salvia",
          "signature": "Context p :-\u003e [SockAddr]",
          "source": "src/Network-Salvia-Impl-Context.html#cListenOn",
          "type": "function"
        },
        "index": {
          "description": "The socket address es the server is listening on",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cListenOn",
          "normalized": "Context a-\u003e[SockAddr]",
          "package": "salvia",
          "partial": "Listen On",
          "signature": "Context p-\u003e[SockAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cListenOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection wide payload.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cPayload",
          "package": "salvia",
          "signature": "Context p :-\u003e p",
          "source": "src/Network-Salvia-Impl-Context.html#cPayload",
          "type": "function"
        },
        "index": {
          "description": "Connection wide payload",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cPayload",
          "normalized": "Context a-\u003ea",
          "package": "salvia",
          "partial": "Payload",
          "signature": "Context p-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe queue of send actions.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cQueue",
          "package": "salvia",
          "signature": "Context p :-\u003e SendQueue",
          "source": "src/Network-Salvia-Impl-Context.html#cQueue",
          "type": "function"
        },
        "index": {
          "description": "The queue of send actions",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cQueue",
          "normalized": "Context a-\u003eSendQueue",
          "package": "salvia",
          "partial": "Queue",
          "signature": "Context p-\u003eSendQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unaltered HTTP request header as received from a client.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cRawRequest",
          "package": "salvia",
          "signature": "Context p :-\u003e Http Request",
          "source": "src/Network-Salvia-Impl-Context.html#cRawRequest",
          "type": "function"
        },
        "index": {
          "description": "The unaltered HTTP request header as received from client",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cRawRequest",
          "normalized": "Context a-\u003eHttp Request",
          "package": "salvia",
          "partial": "Raw Request",
          "signature": "Context p-\u003eHttp Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cRawRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe plain HTTP response header unaffected by local rewriting.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cRawResponse",
          "package": "salvia",
          "signature": "Context p :-\u003e Http Response",
          "source": "src/Network-Salvia-Impl-Context.html#cRawResponse",
          "type": "function"
        },
        "index": {
          "description": "The plain HTTP response header unaffected by local rewriting",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cRawResponse",
          "normalized": "Context a-\u003eHttp Response",
          "package": "salvia",
          "partial": "Raw Response",
          "signature": "Context p-\u003eHttp Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cRawResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP request header.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cRequest",
          "package": "salvia",
          "signature": "Context p :-\u003e Http Request",
          "source": "src/Network-Salvia-Impl-Context.html#cRequest",
          "type": "function"
        },
        "index": {
          "description": "The HTTP request header",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cRequest",
          "normalized": "Context a-\u003eHttp Request",
          "package": "salvia",
          "partial": "Request",
          "signature": "Context p-\u003eHttp Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP response header.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cResponse",
          "package": "salvia",
          "signature": "Context p :-\u003e Http Response",
          "source": "src/Network-Salvia-Impl-Context.html#cResponse",
          "type": "function"
        },
        "index": {
          "description": "The HTTP response header",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cResponse",
          "normalized": "Context a-\u003eHttp Response",
          "package": "salvia",
          "partial": "Response",
          "signature": "Context p-\u003eHttp Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer address.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cServerAddr",
          "package": "salvia",
          "signature": "Context p :-\u003e SockAddr",
          "source": "src/Network-Salvia-Impl-Context.html#cServerAddr",
          "type": "function"
        },
        "index": {
          "description": "Server address",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cServerAddr",
          "normalized": "Context a-\u003eSockAddr",
          "package": "salvia",
          "partial": "Server Addr",
          "signature": "Context p-\u003eSockAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cServerAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server hostname.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cServerHost",
          "package": "salvia",
          "signature": "Context p :-\u003e String",
          "source": "src/Network-Salvia-Impl-Context.html#cServerHost",
          "type": "function"
        },
        "index": {
          "description": "The server hostname",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cServerHost",
          "normalized": "Context a-\u003eString",
          "package": "salvia",
          "partial": "Server Host",
          "signature": "Context p-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cServerHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw socket for connection to the peer.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Context",
          "name": "cSocket",
          "package": "salvia",
          "signature": "Context p :-\u003e Socket",
          "source": "src/Network-Salvia-Impl-Context.html#cSocket",
          "type": "function"
        },
        "index": {
          "description": "Raw socket for connection to the peer",
          "hierarchy": "Network Salvia Impl Context",
          "module": "Network.Salvia.Impl.Context",
          "name": "cSocket",
          "normalized": "Context a-\u003eSocket",
          "package": "salvia",
          "partial": "Socket",
          "signature": "Context p-\u003eSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Context.html#v:cSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Handler",
          "name": "Handler",
          "package": "salvia",
          "source": "src/Network-Salvia-Impl-Handler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Handler",
          "module": "Network.Salvia.Impl.Handler",
          "name": "Handler",
          "package": "salvia",
          "partial": "Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Handler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Handler",
          "name": "Handler",
          "package": "salvia",
          "source": "src/Network-Salvia-Impl-Handler.html#Handler",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Handler",
          "module": "Network.Salvia.Impl.Handler",
          "name": "Handler",
          "package": "salvia",
          "partial": "Handler",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Handler.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Handler",
          "name": "Handler",
          "package": "salvia",
          "signature": "Handler",
          "source": "src/Network-Salvia-Impl-Handler.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Handler",
          "module": "Network.Salvia.Impl.Handler",
          "name": "Handler",
          "package": "salvia",
          "partial": "Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Handler.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Handler",
          "name": "runHandler",
          "package": "salvia",
          "signature": "Handler p a -\u003e Context p -\u003e IO (a, Context p)",
          "source": "src/Network-Salvia-Impl-Handler.html#runHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Handler",
          "module": "Network.Salvia.Impl.Handler",
          "name": "runHandler",
          "normalized": "Handler a b-\u003eContext a-\u003eIO(b,Context a)",
          "package": "salvia",
          "partial": "Handler",
          "signature": "Handler p a-\u003eContext p-\u003eIO(a,Context p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Handler.html#v:runHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Handler",
          "name": "unHandler",
          "package": "salvia",
          "signature": "StateT (Context p) IO a",
          "source": "src/Network-Salvia-Impl-Handler.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Handler",
          "module": "Network.Salvia.Impl.Handler",
          "name": "unHandler",
          "package": "salvia",
          "partial": "Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Handler.html#v:unHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl.Server",
          "name": "Server",
          "package": "salvia",
          "source": "src/Network-Salvia-Impl-Server.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Impl Server",
          "module": "Network.Salvia.Impl.Server",
          "name": "Server",
          "package": "salvia",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etodo:\nStart a webserver with a specific server configuration and default handler. The\nserver will go into an infinite loop and will repeatedly accept client\nconnections on the address and port specified in the configuration. For every\nconnection the specified handler will be executed with the client address and\nsocket stored in the handler context.\n\u003c/p\u003e",
          "module": "Network.Salvia.Impl.Server",
          "name": "start",
          "package": "salvia",
          "signature": "Config -\u003e Handler p () -\u003e p -\u003e IO ()",
          "source": "src/Network-Salvia-Impl-Server.html#start",
          "type": "function"
        },
        "index": {
          "description": "todo Start webserver with specific server configuration and default handler The server will go into an infinite loop and will repeatedly accept client connections on the address and port specified in the configuration For every connection the specified handler will be executed with the client address and socket stored in the handler context",
          "hierarchy": "Network Salvia Impl Server",
          "module": "Network.Salvia.Impl.Server",
          "name": "start",
          "normalized": "Config-\u003eHandler a()-\u003ea-\u003eIO()",
          "package": "salvia",
          "signature": "Config-\u003eHandler p()-\u003ep-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl-Server.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Impl",
          "name": "Impl",
          "package": "salvia",
          "source": "src/Network-Salvia-Impl.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Impl",
          "module": "Network.Salvia.Impl",
          "name": "Impl",
          "package": "salvia",
          "partial": "Impl",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Impl.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis interface module contains all the basic operations to access the server\ncontext. The interface is just of bunch of type classes that allow access to\nthe request and response objects. Most type classes allow access to the context\ninformation through lifted state computations. To dig deeper into the context\nobject you would probably want to use the derived \u003cem\u003efclabels\u003c/em\u003e accessors.\n\u003c/p\u003e\u003cp\u003eExample 1: To get the entire request object:\n\u003c/p\u003e\u003cpre\u003e do r \u003c- request get  -- Control.Monad.State.get\n\u003c/pre\u003e\u003cp\u003eExample 2: To get the request URI as a string:\n\u003c/p\u003e\u003cpre\u003e do r \u003c- request (getM uri) -- getM from Data.Record.Label\n\u003c/pre\u003e\u003cp\u003eExample 3: To get the query parameters and the \u003cem\u003eUser-Agent\u003c/em\u003e header:\n\u003c/p\u003e\u003cpre\u003e do request $\n      do q \u003c- getM (queryParams . asUri)  -- composed labels using the (.) from Control.Category.\n         u \u003c- header \"user-agent\"\n         return (q, u)\n\u003c/pre\u003e\u003cp\u003eExample 4: To set the \u003cem\u003eContent-Type\u003c/em\u003e and response status and send some string.\n\u003c/p\u003e\u003cpre\u003e do response $\n      do status =: BadRequest    -- the (=:) operator from Data.Record.Label\n         header \"content-type\" =: \"text/plain\"\n    send \"hello, world\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Salvia.Interface",
          "name": "Interface",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html",
          "type": "module"
        },
        "index": {
          "description": "This interface module contains all the basic operations to access the server context The interface is just of bunch of type classes that allow access to the request and response objects Most type classes allow access to the context information through lifted state computations To dig deeper into the context object you would probably want to use the derived fclabels accessors Example To get the entire request object do request get Control.Monad.State.get Example To get the request URI as string do request getM uri getM from Data.Record.Label Example To get the query parameters and the User-Agent header do request do getM queryParams asUri composed labels using the from Control.Category header user-agent return Example To set the Content-Type and response status and send some string do response do status BadRequest the operator from Data.Record.Label header content-type text plain send hello world",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "Interface",
          "package": "salvia",
          "partial": "Interface",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class alias indicating an instances for both \u003ccode\u003e\u003ca\u003eClientAddressM\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eServerAddressM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "AddressM'",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#AddressM%27",
          "type": "class"
        },
        "index": {
          "description": "Type class alias indicating an instances for both ClientAddressM and ServerAddressM",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "AddressM'",
          "package": "salvia",
          "partial": "Address M'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:AddressM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "BodyM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#BodyM",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "BodyM",
          "package": "salvia",
          "partial": "Body",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:BodyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eClientAddressM\u003c/a\u003e\u003c/code\u003e type class gives access to socket address of the\n client part of the connection.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "ClientAddressM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#ClientAddressM",
          "type": "class"
        },
        "index": {
          "description": "The ClientAddressM type class gives access to socket address of the client part of the connection",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "ClientAddressM",
          "package": "salvia",
          "partial": "Client Address",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:ClientAddressM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "Contains",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#Contains",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "Contains",
          "package": "salvia",
          "partial": "Contains",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:Contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFlushM\u003c/a\u003e\u003c/code\u003e type class can be used to flush the message headers and the\n message body directly over the wire to the other endpoint.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "FlushM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#FlushM",
          "type": "class"
        },
        "index": {
          "description": "The FlushM type class can be used to flush the message headers and the message body directly over the wire to the other endpoint",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "FlushM",
          "package": "salvia",
          "partial": "Flush",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:FlushM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "ForkM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#ForkM",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "ForkM",
          "package": "salvia",
          "partial": "Fork",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:ForkM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHandleM\u003c/a\u003e\u003c/code\u003e type class allows access to the file handle, probabaly\n associated with the socket to the peer.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "HandleM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#HandleM",
          "type": "class"
        },
        "index": {
          "description": "The HandleM type class allows access to the file handle probabaly associated with the socket to the peer",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "HandleM",
          "package": "salvia",
          "partial": "Handle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:HandleM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etodo: comment:\n The \u003ccode\u003e\u003ca\u003eQueueM\u003c/a\u003e\u003c/code\u003e type class allows for queing actions for sending data values\n over the wire. Using a queue for collecting send actions instead of directly\n sending values over the socket allows for a more modular client or server\n layout.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "HandleQueueM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#HandleQueueM",
          "type": "class"
        },
        "index": {
          "description": "todo comment The QueueM type class allows for queing actions for sending data values over the wire Using queue for collecting send actions instead of directly sending values over the socket allows for more modular client or server layout",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "HandleQueueM",
          "package": "salvia",
          "partial": "Handle Queue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:HandleQueueM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHttpM\u003c/a\u003e\u003c/code\u003e type class indicates is parametrized with the directon\n (\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e) for which the implementation should be able to\n supply and modify the values. The \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e method allow for running arbitrary\n state computations over the request or response objects.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "HttpM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#HttpM",
          "type": "class"
        },
        "index": {
          "description": "The HttpM type class indicates is parametrized with the directon Request or Response for which the implementation should be able to supply and modify the values The http method allow for running arbitrary state computations over the request or response objects",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "HttpM",
          "package": "salvia",
          "partial": "Http",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:HttpM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class alias indicating an HttpM instance for both requests and\n responses.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "HttpM'",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#HttpM%27",
          "type": "class"
        },
        "index": {
          "description": "Type class alias indicating an HttpM instance for both requests and responses",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "HttpM'",
          "package": "salvia",
          "partial": "Http M'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:HttpM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePayloadM\u003c/a\u003e\u003c/code\u003e type class provides access to the server payload. The\n payload can be an arbitrary piece of data that gets shared between all the\n handlers. Can be used to implement sessions and such. Heterogeneous lists\n implemented as right associated nested tuples can be used to store multiple\n pieces of information and still let individual handlers pick out the right\n thing they need. Picking the right pieces of information from the payload\n can be done with the \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e function from the \u003ccode\u003e\u003ca\u003eContains\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "PayloadM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#PayloadM",
          "type": "class"
        },
        "index": {
          "description": "The PayloadM type class provides access to the server payload The payload can be an arbitrary piece of data that gets shared between all the handlers Can be used to implement sessions and such Heterogeneous lists implemented as right associated nested tuples can be used to store multiple pieces of information and still let individual handlers pick out the right thing they need Picking the right pieces of information from the payload can be done with the select function from the Contains type class",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "PayloadM",
          "package": "salvia",
          "partial": "Payload",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:PayloadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "QueueM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#QueueM",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "QueueM",
          "package": "salvia",
          "partial": "Queue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:QueueM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "RawHttpM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#RawHttpM",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "RawHttpM",
          "package": "salvia",
          "partial": "Raw Http",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:RawHttpM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "RawHttpM'",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#RawHttpM%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "RawHttpM'",
          "package": "salvia",
          "partial": "Raw Http M'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:RawHttpM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "SendAction",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#SendAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "SendAction",
          "package": "salvia",
          "partial": "Send Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:SendAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "SendM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#SendM",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "SendM",
          "package": "salvia",
          "partial": "Send",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:SendM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe send queue is an abstraction to make sure all data that belongs to the\nmessage body is sent after the response headers have been sent.  Instead of\nsending data to client directly over the socket from the context it is\npreferable to queue send actions in the context's send queue. The entire send\nqueue can be flushed to the client at once after the HTTP headers have been\nsent at the end of a request handler.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "SendQueue",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#SendQueue",
          "type": "type"
        },
        "index": {
          "description": "The send queue is an abstraction to make sure all data that belongs to the message body is sent after the response headers have been sent Instead of sending data to client directly over the socket from the context it is preferable to queue send actions in the context send queue The entire send queue can be flushed to the client at once after the HTTP headers have been sent at the end of request handler",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "SendQueue",
          "package": "salvia",
          "partial": "Send Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:SendQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eServerAddressM\u003c/a\u003e\u003c/code\u003e type class gives access to socket address of the\n client part of the connection.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "ServerAddressM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#ServerAddressM",
          "type": "class"
        },
        "index": {
          "description": "The ServerAddressM type class gives access to socket address of the client part of the connection",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "ServerAddressM",
          "package": "salvia",
          "partial": "Server Address",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:ServerAddressM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eServerM\u003c/a\u003e\u003c/code\u003e type class can be used to acesss the static server\n configuration like the address/port combination the server listens on and\n the related hostname.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "ServerM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#ServerM",
          "type": "class"
        },
        "index": {
          "description": "The ServerM type class can be used to acesss the static server configuration like the address port combination the server listens on and the related hostname",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "ServerM",
          "package": "salvia",
          "partial": "Server",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:ServerM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSocketM\u003c/a\u003e\u003c/code\u003e type class allows access to the raw socket.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "SocketM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#SocketM",
          "type": "class"
        },
        "index": {
          "description": "The SocketM type class allows access to the raw socket",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "SocketM",
          "package": "salvia",
          "partial": "Socket",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:SocketM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "SocketQueueM",
          "package": "salvia",
          "source": "src/Network-Salvia-Interface.html#SocketQueueM",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "SocketQueueM",
          "package": "salvia",
          "partial": "Socket Queue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#t:SocketQueueM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "(&)",
          "package": "salvia",
          "signature": "a -\u003e b -\u003e (a, b)",
          "source": "src/Network-Salvia-Interface.html#%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "(&) &",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "salvia",
          "signature": "a-\u003eb-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "SendAction",
          "package": "salvia",
          "signature": "SendAction ((Socket, Handle) -\u003e IO ())",
          "source": "src/Network-Salvia-Interface.html#SendAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "SendAction",
          "normalized": "SendAction((Socket,Handle)-\u003eIO())",
          "package": "salvia",
          "partial": "Send Action",
          "signature": "SendAction((Socket,Handle)-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:SendAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "admin",
          "package": "salvia",
          "signature": "m String",
          "source": "src/Network-Salvia-Interface.html#admin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "admin",
          "package": "salvia",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:admin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "body",
          "package": "salvia",
          "signature": "dir -\u003e m ByteString",
          "source": "src/Network-Salvia-Interface.html#body",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "body",
          "normalized": "a-\u003eb ByteString",
          "package": "salvia",
          "signature": "dir-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "clientAddress",
          "package": "salvia",
          "signature": "m SockAddr",
          "source": "src/Network-Salvia-Interface.html#clientAddress",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "clientAddress",
          "package": "salvia",
          "partial": "Address",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:clientAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "dequeue",
          "package": "salvia",
          "signature": "m (Maybe SendAction)",
          "source": "src/Network-Salvia-Interface.html#dequeue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "dequeue",
          "package": "salvia",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "enqueueHandle",
          "package": "salvia",
          "signature": "(Handle -\u003e IO ()) -\u003e m ()",
          "source": "src/Network-Salvia-Interface.html#enqueueHandle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "enqueueHandle",
          "normalized": "(Handle-\u003eIO())-\u003ea()",
          "package": "salvia",
          "partial": "Handle",
          "signature": "(Handle-\u003eIO())-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:enqueueHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "enqueueSock",
          "package": "salvia",
          "signature": "(Socket -\u003e IO ()) -\u003e m ()",
          "source": "src/Network-Salvia-Interface.html#enqueueSock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "enqueueSock",
          "normalized": "(Socket-\u003eIO())-\u003ea()",
          "package": "salvia",
          "partial": "Sock",
          "signature": "(Socket-\u003eIO())-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:enqueueSock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "flushHeaders",
          "package": "salvia",
          "signature": "dir -\u003e m ()",
          "source": "src/Network-Salvia-Interface.html#flushHeaders",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "flushHeaders",
          "normalized": "a-\u003eb()",
          "package": "salvia",
          "partial": "Headers",
          "signature": "dir-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:flushHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "flushQueue",
          "package": "salvia",
          "signature": "dir -\u003e m ()",
          "source": "src/Network-Salvia-Interface.html#flushQueue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "flushQueue",
          "normalized": "a-\u003eb()",
          "package": "salvia",
          "partial": "Queue",
          "signature": "dir-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:flushQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStub request and response used to fill in type level gaps for message\n directions.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "forRequest",
          "package": "salvia",
          "signature": "Request",
          "source": "src/Network-Salvia-Interface.html#forRequest",
          "type": "function"
        },
        "index": {
          "description": "Stub request and response used to fill in type level gaps for message directions",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "forRequest",
          "package": "salvia",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:forRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "forResponse",
          "package": "salvia",
          "signature": "Response",
          "source": "src/Network-Salvia-Interface.html#forResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "forResponse",
          "package": "salvia",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:forResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "forkM",
          "package": "salvia",
          "signature": "m a -\u003e m (n a)",
          "source": "src/Network-Salvia-Interface.html#forkM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "forkM",
          "normalized": "a b-\u003ea(c b)",
          "package": "salvia",
          "signature": "m a-\u003em(n a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:forkM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "handle",
          "package": "salvia",
          "signature": "m Handle",
          "source": "src/Network-Salvia-Interface.html#handle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "handle",
          "package": "salvia",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "host",
          "package": "salvia",
          "signature": "m String",
          "source": "src/Network-Salvia-Interface.html#host",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "host",
          "package": "salvia",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "http",
          "package": "salvia",
          "signature": "State (Http dir) a -\u003e m a",
          "source": "src/Network-Salvia-Interface.html#http",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "http",
          "normalized": "State(Http a)b-\u003ec b",
          "package": "salvia",
          "signature": "State(Http dir)a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "listen",
          "package": "salvia",
          "signature": "m [SockAddr]",
          "source": "src/Network-Salvia-Interface.html#listen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "listen",
          "normalized": "a[SockAddr]",
          "package": "salvia",
          "signature": "m[SockAddr]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "payload",
          "package": "salvia",
          "signature": "State q a -\u003e m a",
          "source": "src/Network-Salvia-Interface.html#payload",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "payload",
          "normalized": "State a b-\u003ec b",
          "package": "salvia",
          "signature": "State q a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:payload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "rawHttp",
          "package": "salvia",
          "signature": "State (Http dir) a -\u003e m a",
          "source": "src/Network-Salvia-Interface.html#rawHttp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "rawHttp",
          "normalized": "State(Http a)b-\u003ec b",
          "package": "salvia",
          "partial": "Http",
          "signature": "State(Http dir)a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:rawHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "rawRequest",
          "package": "salvia",
          "signature": "State (Http Request) a -\u003e m a",
          "source": "src/Network-Salvia-Interface.html#rawRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "rawRequest",
          "normalized": "State(Http Request)a-\u003eb a",
          "package": "salvia",
          "partial": "Request",
          "signature": "State(Http Request)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:rawRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "rawResponse",
          "package": "salvia",
          "signature": "State (Http Response) a -\u003e m a",
          "source": "src/Network-Salvia-Interface.html#rawResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "rawResponse",
          "normalized": "State(Http Response)a-\u003eb a",
          "package": "salvia",
          "partial": "Response",
          "signature": "State(Http Response)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:rawResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirection specific aliases for the \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e method.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "request",
          "package": "salvia",
          "signature": "State (Http Request) a -\u003e m a",
          "source": "src/Network-Salvia-Interface.html#request",
          "type": "function"
        },
        "index": {
          "description": "Direction specific aliases for the http method",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "request",
          "normalized": "State(Http Request)a-\u003eb a",
          "package": "salvia",
          "signature": "State(Http Request)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "response",
          "package": "salvia",
          "signature": "State (Http Response) a -\u003e m a",
          "source": "src/Network-Salvia-Interface.html#response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "response",
          "normalized": "State(Http Response)a-\u003eb a",
          "package": "salvia",
          "signature": "State(Http Response)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "select",
          "package": "salvia",
          "signature": "a :-\u003e b",
          "source": "src/Network-Salvia-Interface.html#select",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "select",
          "normalized": "a-\u003eb",
          "package": "salvia",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the action of sending one regular Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e over the wire\n to the other endpoint.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "send",
          "package": "salvia",
          "signature": "String -\u003e m ()",
          "source": "src/Network-Salvia-Interface.html#send",
          "type": "method"
        },
        "index": {
          "description": "Enqueue the action of sending one regular Haskell String over the wire to the other endpoint",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "send",
          "normalized": "String-\u003ea()",
          "package": "salvia",
          "signature": "String-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the action of sending one \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e over the wire to the\n other endpoint.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "sendBs",
          "package": "salvia",
          "signature": "ByteString -\u003e m ()",
          "source": "src/Network-Salvia-Interface.html#sendBs",
          "type": "method"
        },
        "index": {
          "description": "Enqueue the action of sending one ByteString over the wire to the other endpoint",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "sendBs",
          "normalized": "ByteString-\u003ea()",
          "package": "salvia",
          "partial": "Bs",
          "signature": "ByteString-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:sendBs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "serverAddress",
          "package": "salvia",
          "signature": "m SockAddr",
          "source": "src/Network-Salvia-Interface.html#serverAddress",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "serverAddress",
          "package": "salvia",
          "partial": "Address",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:serverAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Interface",
          "name": "socket",
          "package": "salvia",
          "signature": "m Socket",
          "source": "src/Network-Salvia-Interface.html#socket",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "socket",
          "package": "salvia",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the action of spooling the entire contents of a file handle over\n the wire to the other endpoint.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "spool",
          "package": "salvia",
          "signature": "Handle -\u003e m ()",
          "source": "src/Network-Salvia-Interface.html#spool",
          "type": "function"
        },
        "index": {
          "description": "Enqueue the action of spooling the entire contents of file handle over the wire to the other endpoint",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "spool",
          "normalized": "Handle-\u003ea()",
          "package": "salvia",
          "signature": "Handle-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:spool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003espool\u003c/a\u003e\u003c/code\u003e function but allows a custom filter over the contents.\n the wire to the other endpoint.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "spoolWith",
          "package": "salvia",
          "signature": "(String -\u003e String) -\u003e Handle -\u003e m ()",
          "source": "src/Network-Salvia-Interface.html#spoolWith",
          "type": "method"
        },
        "index": {
          "description": "Like the spool function but allows custom filter over the contents the wire to the other endpoint",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "spoolWith",
          "normalized": "(String-\u003eString)-\u003eHandle-\u003ea()",
          "package": "salvia",
          "partial": "With",
          "signature": "(String-\u003eString)-\u003eHandle-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:spoolWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003espoolWith\u003c/a\u003e\u003c/code\u003e function but uses a direct \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e filter\n which might be more efficient.\n\u003c/p\u003e",
          "module": "Network.Salvia.Interface",
          "name": "spoolWithBs",
          "package": "salvia",
          "signature": "(ByteString -\u003e ByteString) -\u003e Handle -\u003e m ()",
          "source": "src/Network-Salvia-Interface.html#spoolWithBs",
          "type": "method"
        },
        "index": {
          "description": "Like the spoolWith function but uses direct ByteString filter which might be more efficient",
          "hierarchy": "Network Salvia Interface",
          "module": "Network.Salvia.Interface",
          "name": "spoolWithBs",
          "normalized": "(ByteString-\u003eByteString)-\u003eHandle-\u003ea()",
          "package": "salvia",
          "partial": "With Bs",
          "signature": "(ByteString-\u003eByteString)-\u003eHandle-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia-Interface.html#v:spoolWithBs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia",
          "name": "Salvia",
          "package": "salvia",
          "source": "src/Network-Salvia.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia",
          "module": "Network.Salvia",
          "name": "Salvia",
          "package": "salvia",
          "partial": "Salvia",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia/docs/Network-Salvia.html#"
      }
    }
  ]
]