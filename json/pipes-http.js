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
        "word": "pipes-http"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere is an example GET request that streams the response body to standard\n   output:\n\u003c/p\u003e\u003cpre\u003e import Pipes\n import Pipes.HTTP\n import qualified Pipes.ByteString as PB  -- from `pipes-bytestring`\n\n main = do\n     req \u003c- parseUrl \"https://www.example.com\"\n     withManager tlsManagerSettings $ \\m -\u003e\n         withHTTP req m $ \\resp -\u003e\n             runEffect $ responseBody resp \u003e-\u003e PB.stdout\n\u003c/pre\u003e\u003cp\u003eHere is an example POST request that also streams the request body from\n   standard input:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Pipes\n import Pipes.HTTP\n import qualified Pipes.ByteString as PB\n\n main = do\n     req \u003c- parseUrl \"https://www.example.com\"\n     let req' = req\n             { method = \"POST\"\n             , requestBody = stream PB.stdin\n             }\n     withManager tlsManagerSettings $ \\m -\u003e\n         withHTTP req' m $ \\resp -\u003e\n             runEffect $ responseBody resp \u003e-\u003e PB.stdout\n\u003c/pre\u003e\u003cp\u003eFor non-streaming request bodies, study the \u003ccode\u003e\u003ca\u003eRequestBody\u003c/a\u003e\u003c/code\u003e type, which also\n accepts strict / lazy bytestrings or builders.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.HTTP",
          "name": "HTTP",
          "package": "pipes-http",
          "source": "src/Pipes-HTTP.html",
          "type": "module"
        },
        "index": {
          "description": "Here is an example GET request that streams the response body to standard output import Pipes import Pipes.HTTP import qualified Pipes.ByteString as PB from pipes-bytestring main do req parseUrl https www.example.com withManager tlsManagerSettings withHTTP req resp runEffect responseBody resp PB.stdout Here is an example POST request that also streams the request body from standard input LANGUAGE OverloadedStrings import Pipes import Pipes.HTTP import qualified Pipes.ByteString as PB main do req parseUrl https www.example.com let req req method POST requestBody stream PB.stdin withManager tlsManagerSettings withHTTP req resp runEffect responseBody resp PB.stdout For non-streaming request bodies study the RequestBody type which also accepts strict lazy bytestrings or builders",
          "hierarchy": "Pipes HTTP",
          "module": "Pipes.HTTP",
          "name": "HTTP",
          "package": "pipes-http",
          "partial": "HTTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-http/docs/Pipes-HTTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eRequestBody\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003estream\u003c/a\u003e\u003c/code\u003e is more flexible than \u003ccode\u003e\u003ca\u003estreamN\u003c/a\u003e\u003c/code\u003e, but requires the server to support\n    chunked transfer encoding.\n\u003c/p\u003e",
          "module": "Pipes.HTTP",
          "name": "stream",
          "package": "pipes-http",
          "signature": "Producer ByteString IO () -\u003e RequestBody",
          "source": "src/Pipes-HTTP.html#stream",
          "type": "function"
        },
        "index": {
          "description": "Create RequestBody from Producer stream is more flexible than streamN but requires the server to support chunked transfer encoding",
          "hierarchy": "Pipes HTTP",
          "module": "Pipes.HTTP",
          "name": "stream",
          "normalized": "Producer ByteString IO()-\u003eRequestBody",
          "package": "pipes-http",
          "signature": "Producer ByteString IO()-\u003eRequestBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-http/docs/Pipes-HTTP.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eRequestBody\u003c/a\u003e\u003c/code\u003e from a content length and \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.HTTP",
          "name": "streamN",
          "package": "pipes-http",
          "signature": "Int64 -\u003e Producer ByteString IO () -\u003e RequestBody",
          "source": "src/Pipes-HTTP.html#streamN",
          "type": "function"
        },
        "index": {
          "description": "Create RequestBody from content length and Producer",
          "hierarchy": "Pipes HTTP",
          "module": "Pipes.HTTP",
          "name": "streamN",
          "normalized": "Int-\u003eProducer ByteString IO()-\u003eRequestBody",
          "package": "pipes-http",
          "signature": "Int-\u003eProducer ByteString IO()-\u003eRequestBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-http/docs/Pipes-HTTP.html#v:streamN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend an HTTP \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and wait for an HTTP \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.HTTP",
          "name": "withHTTP",
          "package": "pipes-http",
          "signature": "Request-\u003e Manager-\u003e (Response (Producer ByteString IO ()) -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Send an HTTP Request and wait for an HTTP Response",
          "hierarchy": "Pipes HTTP",
          "module": "Pipes.HTTP",
          "name": "withHTTP",
          "normalized": "Request-\u003eManager-\u003e(Response(Producer ByteString IO())-\u003eIO a)-\u003eIO a",
          "package": "pipes-http",
          "partial": "HTTP",
          "signature": "Request-\u003eManager-\u003e(Response(Producer ByteString IO())-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-http/docs/Pipes-HTTP.html#v:withHTTP"
      }
    }
  ]
]