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
        "word": "aws-sign4"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Aws.Sign4",
          "name": "Sign4",
          "package": "aws-sign4",
          "source": "src/Aws-Sign4.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "Sign4",
          "package": "aws-sign4",
          "partial": "Sign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignature v4 generator parameters\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "Sign4",
          "package": "aws-sign4",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "data"
        },
        "index": {
          "description": "Signature v4 generator parameters",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "Sign4",
          "package": "aws-sign4",
          "partial": "Sign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#t:Sign4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Aws.Sign4",
          "name": "Sign4",
          "package": "aws-sign4",
          "signature": "Sign4",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "Sign4",
          "package": "aws-sign4",
          "partial": "Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:Sign4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Aws.Sign4",
          "name": "iso8601BasicUtcDate",
          "package": "aws-sign4",
          "signature": "String",
          "source": "src/Aws-Sign4.html#iso8601BasicUtcDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "iso8601BasicUtcDate",
          "package": "aws-sign4",
          "partial": "Basic Utc Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:iso8601BasicUtcDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate authorization header (s4Authz) and intermediate steps for\n diagnostics and validation (s4StringToSign,s4canonicalRequest) from the\n Sign4 parameters.\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4Authz",
          "package": "aws-sign4",
          "signature": "Sign4 -\u003e ByteString",
          "source": "src/Aws-Sign4.html#s4Authz",
          "type": "function"
        },
        "index": {
          "description": "Generate authorization header s4Authz and intermediate steps for diagnostics and validation s4StringToSign s4canonicalRequest from the Sign4 parameters",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4Authz",
          "normalized": "Sign-\u003eByteString",
          "package": "aws-sign4",
          "partial": "Authz",
          "signature": "Sign-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4Authz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBody of request\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4Body",
          "package": "aws-sign4",
          "signature": "ByteString",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "Body of request",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4Body",
          "package": "aws-sign4",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate authorization header (s4Authz) and intermediate steps for\n diagnostics and validation (s4StringToSign,s4canonicalRequest) from the\n Sign4 parameters.\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4CanonicalRequest",
          "package": "aws-sign4",
          "signature": "Sign4 -\u003e ByteString",
          "source": "src/Aws-Sign4.html#s4CanonicalRequest",
          "type": "function"
        },
        "index": {
          "description": "Generate authorization header s4Authz and intermediate steps for diagnostics and validation s4StringToSign s4canonicalRequest from the Sign4 parameters",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4CanonicalRequest",
          "normalized": "Sign-\u003eByteString",
          "package": "aws-sign4",
          "partial": "Canonical Request",
          "signature": "Sign-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4CanonicalRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonical headers (internally calculated)\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4CnclHeaders",
          "package": "aws-sign4",
          "signature": "Maybe ByteString",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "Canonical headers internally calculated",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4CnclHeaders",
          "package": "aws-sign4",
          "partial": "Cncl Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4CnclHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAWS credentials used to sign the request\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4Credentials",
          "package": "aws-sign4",
          "signature": "Credentials",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "AWS credentials used to sign the request",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4Credentials",
          "package": "aws-sign4",
          "partial": "Credentials",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4Credentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edate/time stamp for request\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4Date",
          "package": "aws-sign4",
          "signature": "UTCTime",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "date time stamp for request",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4Date",
          "package": "aws-sign4",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eservice id: \u003ca\u003eets\u003c/a\u003e for Elastic Transcode\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4Endpoint",
          "package": "aws-sign4",
          "signature": "ByteString",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "service id ets for Elastic Transcode",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4Endpoint",
          "package": "aws-sign4",
          "partial": "Endpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4Endpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe request headers\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4Headers",
          "package": "aws-sign4",
          "signature": "RequestHeaders",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "The request headers",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4Headers",
          "package": "aws-sign4",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP request method\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4Method",
          "package": "aws-sign4",
          "signature": "Method",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "HTTP request method",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4Method",
          "package": "aws-sign4",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURI path component (excluding host & query)\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4Path",
          "package": "aws-sign4",
          "signature": "ByteString",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "URI path component excluding host query",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4Path",
          "package": "aws-sign4",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed query string information\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4Query",
          "package": "aws-sign4",
          "signature": "Query",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "Parsed query string information",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4Query",
          "package": "aws-sign4",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eservice id: ets =\u003e Elastic Transcode\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4Service",
          "package": "aws-sign4",
          "signature": "ByteString",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "service id ets Elastic Transcode",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4Service",
          "package": "aws-sign4",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4Service"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned headers    (internally calculated)\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4SgndHeaders",
          "package": "aws-sign4",
          "signature": "Maybe ByteString",
          "source": "src/Aws-Sign4.html#Sign4",
          "type": "function"
        },
        "index": {
          "description": "Signed headers internally calculated",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4SgndHeaders",
          "package": "aws-sign4",
          "partial": "Sgnd Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4SgndHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate authorization header (s4Authz) and intermediate steps for\n diagnostics and validation (s4StringToSign,s4canonicalRequest) from the\n Sign4 parameters.\n\u003c/p\u003e",
          "module": "Aws.Sign4",
          "name": "s4StringToSign",
          "package": "aws-sign4",
          "signature": "Sign4 -\u003e ByteString",
          "source": "src/Aws-Sign4.html#s4StringToSign",
          "type": "function"
        },
        "index": {
          "description": "Generate authorization header s4Authz and intermediate steps for diagnostics and validation s4StringToSign s4canonicalRequest from the Sign4 parameters",
          "hierarchy": "Aws Sign4",
          "module": "Aws.Sign4",
          "name": "s4StringToSign",
          "normalized": "Sign-\u003eByteString",
          "package": "aws-sign4",
          "partial": "String To Sign",
          "signature": "Sign-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aws-sign4/docs/Aws-Sign4.html#v:s4StringToSign"
      }
    }
  ]
]