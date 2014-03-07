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
        "word": "http-client-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFrontend support for using http-client with conduit. Intended for use with\n higher-level libraries like http-conduit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Client.Conduit",
          "name": "Conduit",
          "package": "http-client-conduit",
          "source": "src/Network-HTTP-Client-Conduit.html",
          "type": "module"
        },
        "index": {
          "description": "Frontend support for using http-client with conduit Intended for use with higher-level libraries like http-conduit",
          "hierarchy": "Network HTTP Client Conduit",
          "module": "Network.HTTP.Client.Conduit",
          "name": "Conduit",
          "package": "http-client-conduit",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-client-conduit/docs/Network-HTTP-Client-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Conduit",
          "name": "bodyReaderSource",
          "package": "http-client-conduit",
          "signature": "BodyReader -\u003e Producer m ByteString",
          "source": "src/Network-HTTP-Client-Conduit.html#bodyReaderSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Conduit",
          "module": "Network.HTTP.Client.Conduit",
          "name": "bodyReaderSource",
          "normalized": "BodyReader-\u003eProducer a ByteString",
          "package": "http-client-conduit",
          "partial": "Reader Source",
          "signature": "BodyReader-\u003eProducer m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-conduit/docs/Network-HTTP-Client-Conduit.html#v:bodyReaderSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Conduit",
          "name": "http",
          "package": "http-client-conduit",
          "signature": "Request -\u003e Manager -\u003e m (Response (ResumableSource m ByteString))",
          "source": "src/Network-HTTP-Client-Conduit.html#http",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Conduit",
          "module": "Network.HTTP.Client.Conduit",
          "name": "http",
          "normalized": "Request-\u003eManager-\u003ea(Response(ResumableSource a ByteString))",
          "package": "http-client-conduit",
          "signature": "Request-\u003eManager-\u003em(Response(ResumableSource m ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-conduit/docs/Network-HTTP-Client-Conduit.html#v:http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Conduit",
          "name": "requestBodySource",
          "package": "http-client-conduit",
          "signature": "Int64 -\u003e Source (ResourceT IO) ByteString -\u003e RequestBody",
          "source": "src/Network-HTTP-Client-Conduit.html#requestBodySource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Conduit",
          "module": "Network.HTTP.Client.Conduit",
          "name": "requestBodySource",
          "normalized": "Int-\u003eSource(ResourceT IO)ByteString-\u003eRequestBody",
          "package": "http-client-conduit",
          "partial": "Body Source",
          "signature": "Int-\u003eSource(ResourceT IO)ByteString-\u003eRequestBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-conduit/docs/Network-HTTP-Client-Conduit.html#v:requestBodySource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Conduit",
          "name": "requestBodySourceChunked",
          "package": "http-client-conduit",
          "signature": "Source (ResourceT IO) ByteString -\u003e RequestBody",
          "source": "src/Network-HTTP-Client-Conduit.html#requestBodySourceChunked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Conduit",
          "module": "Network.HTTP.Client.Conduit",
          "name": "requestBodySourceChunked",
          "normalized": "Source(ResourceT IO)ByteString-\u003eRequestBody",
          "package": "http-client-conduit",
          "partial": "Body Source Chunked",
          "signature": "Source(ResourceT IO)ByteString-\u003eRequestBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-conduit/docs/Network-HTTP-Client-Conduit.html#v:requestBodySourceChunked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Conduit",
          "name": "requestBodySourceChunkedIO",
          "package": "http-client-conduit",
          "signature": "Source IO ByteString -\u003e RequestBody",
          "source": "src/Network-HTTP-Client-Conduit.html#requestBodySourceChunkedIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Conduit",
          "module": "Network.HTTP.Client.Conduit",
          "name": "requestBodySourceChunkedIO",
          "normalized": "Source IO ByteString-\u003eRequestBody",
          "package": "http-client-conduit",
          "partial": "Body Source Chunked IO",
          "signature": "Source IO ByteString-\u003eRequestBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-conduit/docs/Network-HTTP-Client-Conduit.html#v:requestBodySourceChunkedIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Conduit",
          "name": "requestBodySourceIO",
          "package": "http-client-conduit",
          "signature": "Int64 -\u003e Source IO ByteString -\u003e RequestBody",
          "source": "src/Network-HTTP-Client-Conduit.html#requestBodySourceIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Conduit",
          "module": "Network.HTTP.Client.Conduit",
          "name": "requestBodySourceIO",
          "normalized": "Int-\u003eSource IO ByteString-\u003eRequestBody",
          "package": "http-client-conduit",
          "partial": "Body Source IO",
          "signature": "Int-\u003eSource IO ByteString-\u003eRequestBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-conduit/docs/Network-HTTP-Client-Conduit.html#v:requestBodySourceIO"
      }
    }
  ]
]