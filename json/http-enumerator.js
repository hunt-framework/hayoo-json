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
        "word": "http-enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains everything you need to initiate HTTP connections.  If\n you want a simple interface based on URLs, you can use \u003ccode\u003e\u003ca\u003esimpleHttp\u003c/a\u003e\u003c/code\u003e. If you\n want raw power, \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e is the underlying workhorse of this package. Some\n examples:\n\u003c/p\u003e\u003cpre\u003e -- Just download an HTML document and print it.\n import Network.HTTP.Enumerator\n import qualified Data.ByteString.Lazy as L\n\n main = simpleHttp \"http://www.haskell.org/\" \u003e\u003e= L.putStr\n\u003c/pre\u003e\u003cp\u003eThis example uses interleaved IO to write the response body to a file in\n constant memory space. By using \u003ccode\u003e\u003ca\u003ehttpRedirect\u003c/a\u003e\u003c/code\u003e, it will automatically\n follow 3xx redirects.\n\u003c/p\u003e\u003cpre\u003e import Data.Enumerator\n import Data.Enumerator.Binary\n import Network.HTTP.Enumerator\n import System.IO\n\n main :: IO ()\n main = withFile \"google.html\" WriteMode $ \\handle -\u003e do\n     request \u003c- parseUrl \"http://google.com/\"\n     withManager $ \\manager -\u003e do\n         run_ $ httpRedirect request (\\_ _ -\u003e iterHandle handle) manager\n\u003c/pre\u003e\u003cp\u003eThe following headers are automatically set by this module, and should not\n be added to \u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Content-Length\n\u003c/li\u003e\u003cli\u003e Host\n\u003c/li\u003e\u003cli\u003e Accept-Encoding (not currently set, but client usage of this variable \u003cem\u003ewill\u003c/em\u003e cause breakage).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAny network code on Windows requires some initialization, and the network\n library provides withSocketsDo to perform it. Therefore, proper usage of\n this library will always involve calling that function at some point.  The\n best approach is to simply call them at the beginning of your main function,\n such as:\n\u003c/p\u003e\u003cpre\u003e import Network.HTTP.Enumerator\n import qualified Data.ByteString.Lazy as L\n import Network (withSocketsDo)\n\n main = withSocketsDo\n      $ simpleHttp \"http://www.haskell.org/\" \u003e\u003e= L.putStr\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "Enumerator",
          "package": "http-enumerator",
          "source": "src/Network-HTTP-Enumerator.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains everything you need to initiate HTTP connections If you want simple interface based on URLs you can use simpleHttp If you want raw power http is the underlying workhorse of this package Some examples Just download an HTML document and print it import Network.HTTP.Enumerator import qualified Data.ByteString.Lazy as main simpleHttp http www.haskell.org L.putStr This example uses interleaved IO to write the response body to file in constant memory space By using httpRedirect it will automatically follow xx redirects import Data.Enumerator import Data.Enumerator.Binary import Network.HTTP.Enumerator import System.IO main IO main withFile google.html WriteMode handle do request parseUrl http google.com withManager manager do run httpRedirect request iterHandle handle manager The following headers are automatically set by this module and should not be added to requestHeaders Content-Length Host Accept-Encoding not currently set but client usage of this variable will cause breakage Any network code on Windows requires some initialization and the network library provides withSocketsDo to perform it Therefore proper usage of this library will always involve calling that function at some point The best approach is to simply call them at the beginning of your main function such as import Network.HTTP.Enumerator import qualified Data.ByteString.Lazy as import Network withSocketsDo main withSocketsDo simpleHttp http www.haskell.org L.putStr",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "Enumerator",
          "package": "http-enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "HttpException",
          "package": "http-enumerator",
          "source": "src/Network-HTTP-Enumerator.html#HttpException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "HttpException",
          "package": "http-enumerator",
          "partial": "Http Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#t:HttpException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeeps track of open connections for keep-alive.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "Manager",
          "package": "http-enumerator",
          "source": "src/Network-HTTP-Enumerator.html#Manager",
          "type": "data"
        },
        "index": {
          "description": "Keeps track of open connections for keep-alive",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "Manager",
          "package": "http-enumerator",
          "partial": "Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#t:Manager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a HTTP proxy, consisting of a hostname and port number.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "Proxy",
          "package": "http-enumerator",
          "source": "src/Network-HTTP-Enumerator.html#Proxy",
          "type": "data"
        },
        "index": {
          "description": "Define HTTP proxy consisting of hostname and port number",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "Proxy",
          "package": "http-enumerator",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll information on how to connect to a host and what should be sent in the\n HTTP request.\n\u003c/p\u003e\u003cp\u003eIf you simply wish to download from a URL, see \u003ccode\u003e\u003ca\u003eparseUrl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe constructor for this data type is not exposed. Instead, you should use\n either the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e method to retrieve a default instance, or \u003ccode\u003e\u003ca\u003eparseUrl\u003c/a\u003e\u003c/code\u003e to\n construct from a URL, and then use the records below to make modifications.\n This approach allows http-enumerator to add configuration options without\n breaking backwards compatibility.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "Request",
          "package": "http-enumerator",
          "source": "src/Network-HTTP-Enumerator.html#Request",
          "type": "data"
        },
        "index": {
          "description": "All information on how to connect to host and what should be sent in the HTTP request If you simply wish to download from URL see parseUrl The constructor for this data type is not exposed Instead you should use either the def method to retrieve default instance or parseUrl to construct from URL and then use the records below to make modifications This approach allows http-enumerator to add configuration options without breaking backwards compatibility",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "Request",
          "package": "http-enumerator",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen using the \u003ccode\u003e\u003ca\u003eRequestBodyEnum\u003c/a\u003e\u003c/code\u003e constructor and any function which calls\n \u003ccode\u003e\u003ca\u003eredirectIter\u003c/a\u003e\u003c/code\u003e, you must ensure that the \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e can be called multiple\n times.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRequestBodyEnumChunked\u003c/a\u003e\u003c/code\u003e will send a chunked request body, note\n that not all servers support this. Only use \u003ccode\u003e\u003ca\u003eRequestBodyEnumChunked\u003c/a\u003e\u003c/code\u003e\n if you know the server you're sending to supports chunked request\n bodies.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBody",
          "package": "http-enumerator",
          "source": "src/Network-HTTP-Enumerator.html#RequestBody",
          "type": "data"
        },
        "index": {
          "description": "When using the RequestBodyEnum constructor and any function which calls redirectIter you must ensure that the Enumerator can be called multiple times The RequestBodyEnumChunked will send chunked request body note that not all servers support this Only use RequestBodyEnumChunked if you know the server you re sending to supports chunked request bodies",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBody",
          "package": "http-enumerator",
          "partial": "Request Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#t:RequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple representation of the HTTP response created by \u003ccode\u003e\u003ca\u003elbsIter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "Response",
          "package": "http-enumerator",
          "source": "src/Network-HTTP-Enumerator.html#Response",
          "type": "data"
        },
        "index": {
          "description": "simple representation of the HTTP response created by lbsIter",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "Response",
          "package": "http-enumerator",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "HttpParserException",
          "package": "http-enumerator",
          "signature": "HttpParserException String",
          "source": "src/Network-HTTP-Enumerator.html#HttpException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "HttpParserException",
          "package": "http-enumerator",
          "partial": "Http Parser Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:HttpParserException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "InvalidUrlException",
          "package": "http-enumerator",
          "signature": "InvalidUrlException String String",
          "source": "src/Network-HTTP-Enumerator.html#HttpException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "InvalidUrlException",
          "package": "http-enumerator",
          "partial": "Invalid Url Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:InvalidUrlException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "Proxy",
          "package": "http-enumerator",
          "signature": "Proxy",
          "source": "src/Network-HTTP-Enumerator.html#Proxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "Proxy",
          "package": "http-enumerator",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBodyBS",
          "package": "http-enumerator",
          "signature": "RequestBodyBS ByteString",
          "source": "src/Network-HTTP-Enumerator.html#RequestBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBodyBS",
          "package": "http-enumerator",
          "partial": "Request Body BS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:RequestBodyBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBodyBuilder",
          "package": "http-enumerator",
          "signature": "RequestBodyBuilder Int64 Builder",
          "source": "src/Network-HTTP-Enumerator.html#RequestBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBodyBuilder",
          "package": "http-enumerator",
          "partial": "Request Body Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:RequestBodyBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBodyEnum",
          "package": "http-enumerator",
          "signature": "RequestBodyEnum Int64 (Enumerator Builder m ())",
          "source": "src/Network-HTTP-Enumerator.html#RequestBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBodyEnum",
          "normalized": "RequestBodyEnum Int(Enumerator Builder a())",
          "package": "http-enumerator",
          "partial": "Request Body Enum",
          "signature": "RequestBodyEnum Int(Enumerator Builder m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:RequestBodyEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBodyEnumChunked",
          "package": "http-enumerator",
          "signature": "RequestBodyEnumChunked (Enumerator Builder m ())",
          "source": "src/Network-HTTP-Enumerator.html#RequestBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBodyEnumChunked",
          "normalized": "RequestBodyEnumChunked(Enumerator Builder a())",
          "package": "http-enumerator",
          "partial": "Request Body Enum Chunked",
          "signature": "RequestBodyEnumChunked(Enumerator Builder m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:RequestBodyEnumChunked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBodyLBS",
          "package": "http-enumerator",
          "signature": "RequestBodyLBS ByteString",
          "source": "src/Network-HTTP-Enumerator.html#RequestBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "RequestBodyLBS",
          "package": "http-enumerator",
          "partial": "Request Body LBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:RequestBodyLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "Response",
          "package": "http-enumerator",
          "signature": "Response",
          "source": "src/Network-HTTP-Enumerator.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "Response",
          "package": "http-enumerator",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "StatusCodeException",
          "package": "http-enumerator",
          "signature": "StatusCodeException Int ByteString",
          "source": "src/Network-HTTP-Enumerator.html#HttpException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "StatusCodeException",
          "package": "http-enumerator",
          "partial": "Status Code Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:StatusCodeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "TooManyRedirects",
          "package": "http-enumerator",
          "signature": "TooManyRedirects",
          "source": "src/Network-HTTP-Enumerator.html#HttpException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "TooManyRedirects",
          "package": "http-enumerator",
          "partial": "Too Many Redirects",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:TooManyRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a proxy to the the Request so that the Request when executed will use\n the provided proxy.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "addProxy",
          "package": "http-enumerator",
          "signature": "ByteString -\u003e Int -\u003e Request m -\u003e Request m",
          "source": "src/Network-HTTP-Enumerator.html#addProxy",
          "type": "function"
        },
        "index": {
          "description": "Add proxy to the the Request so that the Request when executed will use the provided proxy",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "addProxy",
          "normalized": "ByteString-\u003eInt-\u003eRequest a-\u003eRequest a",
          "package": "http-enumerator",
          "partial": "Proxy",
          "signature": "ByteString-\u003eInt-\u003eRequest m-\u003eRequest m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:addProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways decompress a compressed stream.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "alwaysDecompress",
          "package": "http-enumerator",
          "signature": "ContentType -\u003e Bool",
          "source": "src/Network-HTTP-Enumerator.html#alwaysDecompress",
          "type": "function"
        },
        "index": {
          "description": "Always decompress compressed stream",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "alwaysDecompress",
          "normalized": "ContentType-\u003eBool",
          "package": "http-enumerator",
          "partial": "Decompress",
          "signature": "ContentType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:alwaysDecompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a Basic Auth header (with the specified user name and password) to the\n given Request. Ignore error handling:\n\u003c/p\u003e\u003cp\u003eapplyBasicAuth \"user\" \"pass\" $ fromJust $ parseUrl url\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "applyBasicAuth",
          "package": "http-enumerator",
          "signature": "ByteString -\u003e ByteString -\u003e Request m -\u003e Request m",
          "source": "src/Network-HTTP-Enumerator.html#applyBasicAuth",
          "type": "function"
        },
        "index": {
          "description": "Add Basic Auth header with the specified user name and password to the given Request Ignore error handling applyBasicAuth user pass fromJust parseUrl url",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "applyBasicAuth",
          "normalized": "ByteString-\u003eByteString-\u003eRequest a-\u003eRequest a",
          "package": "http-enumerator",
          "partial": "Basic Auth",
          "signature": "ByteString-\u003eByteString-\u003eRequest m-\u003eRequest m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:applyBasicAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress a compressed stream unless the content-type is 'application/x-tar'.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "browserDecompress",
          "package": "http-enumerator",
          "signature": "ContentType -\u003e Bool",
          "source": "src/Network-HTTP-Enumerator.html#browserDecompress",
          "type": "function"
        },
        "index": {
          "description": "Decompress compressed stream unless the content-type is application x-tar",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "browserDecompress",
          "normalized": "ContentType-\u003eBool",
          "package": "http-enumerator",
          "partial": "Decompress",
          "signature": "ContentType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:browserDecompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the server certificate is valid. Only relevant for HTTPS.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "checkCerts",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Ascii -\u003e [X509] -\u003e IO TLSCertificateUsage",
          "source": "src/Network-HTTP-Enumerator.html#checkCerts",
          "type": "function"
        },
        "index": {
          "description": "Check if the server certificate is valid Only relevant for HTTPS",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "checkCerts",
          "normalized": "Request a-\u003eAscii-\u003e[X]-\u003eIO TLSCertificateUsage",
          "package": "http-enumerator",
          "partial": "Certs",
          "signature": "Request m-\u003eAscii-\u003e[X]-\u003eIO TLSCertificateUsage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:checkCerts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose all connections in a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e. Afterwards, the \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e can be\n reused if desired.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "closeManager",
          "package": "http-enumerator",
          "signature": "Manager -\u003e IO ()",
          "source": "src/Network-HTTP-Enumerator.html#closeManager",
          "type": "function"
        },
        "index": {
          "description": "Close all connections in Manager Afterwards the Manager can be reused if desired",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "closeManager",
          "normalized": "Manager-\u003eIO()",
          "package": "http-enumerator",
          "partial": "Manager",
          "signature": "Manager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:closeManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to specify whether gzipped data should be decompressed on the fly.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "decompress",
          "package": "http-enumerator",
          "signature": "Request m -\u003e ContentType -\u003e Bool",
          "source": "src/Network-HTTP-Enumerator.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Predicate to specify whether gzipped data should be decompressed on the fly",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "decompress",
          "normalized": "Request a-\u003eContentType-\u003eBool",
          "package": "http-enumerator",
          "signature": "Request m-\u003eContentType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "def",
          "package": "http-enumerator",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "The default value for this type",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "def",
          "package": "http-enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "defaultCheckCerts",
          "package": "http-enumerator",
          "signature": "Ascii -\u003e [X509] -\u003e IO TLSCertificateUsage",
          "source": "src/Network-HTTP-Enumerator.html#defaultCheckCerts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "defaultCheckCerts",
          "normalized": "Ascii-\u003e[X]-\u003eIO TLSCertificateUsage",
          "package": "http-enumerator",
          "partial": "Check Certs",
          "signature": "Ascii-\u003e[X]-\u003eIO TLSCertificateUsage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:defaultCheckCerts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "host",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Ascii",
          "source": "src/Network-HTTP-Enumerator.html#host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "host",
          "normalized": "Request a-\u003eAscii",
          "package": "http-enumerator",
          "signature": "Request m-\u003eAscii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most low-level function for initiating an HTTP request.\n\u003c/p\u003e\u003cp\u003eThe first argument to this function gives a full specification on the\n request: the host to connect to, whether to use SSL, headers, etc. Please\n see \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e for full details.\n\u003c/p\u003e\u003cp\u003eThe second argument specifies how the response should be handled. It's a\n function that takes two arguments: the first is the HTTP status code of the\n response, and the second is a list of all response headers. This module\n exports \u003ccode\u003e\u003ca\u003elbsIter\u003c/a\u003e\u003c/code\u003e, which generates a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eNote that this allows you to have fully interleaved IO actions during your\n HTTP download, making it possible to download very large responses in\n constant memory.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "http",
          "package": "http-enumerator",
          "signature": "Request m -\u003e (Status -\u003e ResponseHeaders -\u003e Iteratee ByteString m a) -\u003e Manager -\u003e Iteratee ByteString m a",
          "source": "src/Network-HTTP-Enumerator.html#http",
          "type": "function"
        },
        "index": {
          "description": "The most low-level function for initiating an HTTP request The first argument to this function gives full specification on the request the host to connect to whether to use SSL headers etc Please see Request for full details The second argument specifies how the response should be handled It function that takes two arguments the first is the HTTP status code of the response and the second is list of all response headers This module exports lbsIter which generates Response value Note that this allows you to have fully interleaved IO actions during your HTTP download making it possible to download very large responses in constant memory",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "http",
          "normalized": "Request a-\u003e(Status-\u003eResponseHeaders-\u003eIteratee ByteString a b)-\u003eManager-\u003eIteratee ByteString a b",
          "package": "http-enumerator",
          "signature": "Request m-\u003e(Status-\u003eResponseHeaders-\u003eIteratee ByteString m a)-\u003eManager-\u003eIteratee ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownload the specified \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e, returning the results as a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e for the common case where you simply\n want the response data as a simple datatype. If you want more power, such as\n interleaved actions on the response body during download, you'll need to use\n \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e directly. This function is defined as:\n\u003c/p\u003e\u003cpre\u003ehttpLbs = http lbsIter\u003c/pre\u003e\u003cp\u003ePlease see \u003ccode\u003e\u003ca\u003elbsIter\u003c/a\u003e\u003c/code\u003e for more information on how the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e value is\n created.\n\u003c/p\u003e\u003cp\u003eEven though a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e contains a lazy bytestring, this function does\n \u003cem\u003enot\u003c/em\u003e utilize lazy I/O, and therefore the entire response body will live in\n memory. If you want constant memory usage, you'll need to write your own\n iteratee and use \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehttpRedirect\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "httpLbs",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Manager -\u003e m Response",
          "source": "src/Network-HTTP-Enumerator.html#httpLbs",
          "type": "function"
        },
        "index": {
          "description": "Download the specified Request returning the results as Response This is simplified version of http for the common case where you simply want the response data as simple datatype If you want more power such as interleaved actions on the response body during download you ll need to use http directly This function is defined as httpLbs http lbsIter Please see lbsIter for more information on how the Response value is created Even though Response contains lazy bytestring this function does not utilize lazy and therefore the entire response body will live in memory If you want constant memory usage you ll need to write your own iteratee and use http or httpRedirect directly",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "httpLbs",
          "normalized": "Request a-\u003eManager-\u003ea Response",
          "package": "http-enumerator",
          "partial": "Lbs",
          "signature": "Request m-\u003eManager-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:httpLbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownload the specified \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e, returning the results as a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n and automatically handling redirects.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of \u003ccode\u003e\u003ca\u003ehttpRedirect\u003c/a\u003e\u003c/code\u003e for the common case where you\n simply want the response data as a simple datatype. If you want more power,\n such as interleaved actions on the response body during download, you'll\n need to use \u003ccode\u003e\u003ca\u003ehttpRedirect\u003c/a\u003e\u003c/code\u003e directly. This function is defined as:\n\u003c/p\u003e\u003cpre\u003ehttpLbsRedirect = httpRedirect lbsIter\u003c/pre\u003e\u003cp\u003ePlease see \u003ccode\u003e\u003ca\u003elbsIter\u003c/a\u003e\u003c/code\u003e for more information on how the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e value is\n created.\n\u003c/p\u003e\u003cp\u003eEven though a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e contains a lazy bytestring, this function does\n \u003cem\u003enot\u003c/em\u003e utilize lazy I/O, and therefore the entire response body will live in\n memory. If you want constant memory usage, you'll need to write your own\n iteratee and use \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehttpRedirect\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "httpLbsRedirect",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Manager -\u003e m Response",
          "source": "src/Network-HTTP-Enumerator.html#httpLbsRedirect",
          "type": "function"
        },
        "index": {
          "description": "Download the specified Request returning the results as Response and automatically handling redirects This is simplified version of httpRedirect for the common case where you simply want the response data as simple datatype If you want more power such as interleaved actions on the response body during download you ll need to use httpRedirect directly This function is defined as httpLbsRedirect httpRedirect lbsIter Please see lbsIter for more information on how the Response value is created Even though Response contains lazy bytestring this function does not utilize lazy and therefore the entire response body will live in memory If you want constant memory usage you ll need to write your own iteratee and use http or httpRedirect directly",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "httpLbsRedirect",
          "normalized": "Request a-\u003eManager-\u003ea Response",
          "package": "http-enumerator",
          "partial": "Lbs Redirect",
          "signature": "Request m-\u003eManager-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:httpLbsRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e, but follows all 3xx redirect status codes that contain a\n location header.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "httpRedirect",
          "package": "http-enumerator",
          "signature": "Request m -\u003e (Status -\u003e ResponseHeaders -\u003e Iteratee ByteString m a) -\u003e Manager -\u003e Iteratee ByteString m a",
          "source": "src/Network-HTTP-Enumerator.html#httpRedirect",
          "type": "function"
        },
        "index": {
          "description": "Same as http but follows all xx redirect status codes that contain location header",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "httpRedirect",
          "normalized": "Request a-\u003e(Status-\u003eResponseHeaders-\u003eIteratee ByteString a b)-\u003eManager-\u003eIteratee ByteString a b",
          "package": "http-enumerator",
          "partial": "Redirect",
          "signature": "Request m-\u003e(Status-\u003eResponseHeaders-\u003eIteratee ByteString m a)-\u003eManager-\u003eIteratee ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:httpRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the HTTP response into a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eEven though a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e contains a lazy bytestring, this function does\n \u003cem\u003enot\u003c/em\u003e utilize lazy I/O, and therefore the entire response body will live in\n memory. If you want constant memory usage, you'll need to write your own\n iteratee and use \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehttpRedirect\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "lbsIter",
          "package": "http-enumerator",
          "signature": "Status -\u003e ResponseHeaders -\u003e Iteratee ByteString m Response",
          "source": "src/Network-HTTP-Enumerator.html#lbsIter",
          "type": "function"
        },
        "index": {
          "description": "Convert the HTTP response into Response value Even though Response contains lazy bytestring this function does not utilize lazy and therefore the entire response body will live in memory If you want constant memory usage you ll need to write your own iteratee and use http or httpRedirect directly",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "lbsIter",
          "normalized": "Status-\u003eResponseHeaders-\u003eIteratee ByteString a Response",
          "package": "http-enumerator",
          "partial": "Iter",
          "signature": "Status-\u003eResponseHeaders-\u003eIteratee ByteString m Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:lbsIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP request method, eg GET, POST.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "method",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Method",
          "source": "src/Network-HTTP-Enumerator.html#method",
          "type": "function"
        },
        "index": {
          "description": "HTTP request method eg GET POST",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "method",
          "normalized": "Request a-\u003eMethod",
          "package": "http-enumerator",
          "signature": "Request m-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e with no open connection.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "newManager",
          "package": "http-enumerator",
          "signature": "IO Manager",
          "source": "src/Network-HTTP-Enumerator.html#newManager",
          "type": "function"
        },
        "index": {
          "description": "Create new Manager with no open connection",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "newManager",
          "package": "http-enumerator",
          "partial": "Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:newManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a URL into a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis defaults some of the values in \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e, such as setting \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e to\n GET and \u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince this function uses \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e, the return monad can be anything that is\n an instance of \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "parseUrl",
          "package": "http-enumerator",
          "signature": "String -\u003e m (Request m')",
          "source": "src/Network-HTTP-Enumerator.html#parseUrl",
          "type": "function"
        },
        "index": {
          "description": "Convert URL into Request This defaults some of the values in Request such as setting method to GET and requestHeaders to Since this function uses Failure the return monad can be anything that is an instance of Failure such as IO or Maybe",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "parseUrl",
          "normalized": "String-\u003ea(Request b)",
          "package": "http-enumerator",
          "partial": "Url",
          "signature": "String-\u003em(Request m')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:parseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEverything from the host to the query string.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "path",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Ascii",
          "source": "src/Network-HTTP-Enumerator.html#path",
          "type": "function"
        },
        "index": {
          "description": "Everything from the host to the query string",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "path",
          "normalized": "Request a-\u003eAscii",
          "package": "http-enumerator",
          "signature": "Request m-\u003eAscii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "port",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Int",
          "source": "src/Network-HTTP-Enumerator.html#port",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "port",
          "normalized": "Request a-\u003eInt",
          "package": "http-enumerator",
          "signature": "Request m-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional HTTP proxy.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "proxy",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Maybe Proxy",
          "source": "src/Network-HTTP-Enumerator.html#proxy",
          "type": "function"
        },
        "index": {
          "description": "Optional HTTP proxy",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "proxy",
          "normalized": "Request a-\u003eMaybe Proxy",
          "package": "http-enumerator",
          "signature": "Request m-\u003eMaybe Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe host name of the HTTP proxy.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "proxyHost",
          "package": "http-enumerator",
          "signature": "Ascii",
          "source": "src/Network-HTTP-Enumerator.html#Proxy",
          "type": "function"
        },
        "index": {
          "description": "The host name of the HTTP proxy",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "proxyHost",
          "package": "http-enumerator",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:proxyHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe port numner of the HTTP proxy.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "proxyPort",
          "package": "http-enumerator",
          "signature": "Int",
          "source": "src/Network-HTTP-Enumerator.html#Proxy",
          "type": "function"
        },
        "index": {
          "description": "The port numner of the HTTP proxy",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "proxyPort",
          "package": "http-enumerator",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:proxyPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomatically escaped for your convenience.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "queryString",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Query",
          "source": "src/Network-HTTP-Enumerator.html#queryString",
          "type": "function"
        },
        "index": {
          "description": "Automatically escaped for your convenience",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "queryString",
          "normalized": "Request a-\u003eQuery",
          "package": "http-enumerator",
          "partial": "String",
          "signature": "Request m-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf True, a chunked and/or gzipped body will not be decoded. Use with caution.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "rawBody",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Bool",
          "source": "src/Network-HTTP-Enumerator.html#rawBody",
          "type": "function"
        },
        "index": {
          "description": "If True chunked and or gzipped body will not be decoded Use with caution",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "rawBody",
          "normalized": "Request a-\u003eBool",
          "package": "http-enumerator",
          "partial": "Body",
          "signature": "Request m-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:rawBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a request automatically follow 3xx redirects.\n\u003c/p\u003e\u003cp\u003eUsed internally by \u003ccode\u003e\u003ca\u003ehttpRedirect\u003c/a\u003e\u003c/code\u003e and family.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "redirectIter",
          "package": "http-enumerator",
          "signature": "Int-\u003e Request m-\u003e (Status -\u003e ResponseHeaders -\u003e Iteratee ByteString m a)-\u003e Manager-\u003e Status -\u003e ResponseHeaders -\u003e Iteratee ByteString m a",
          "type": "function"
        },
        "index": {
          "description": "Make request automatically follow xx redirects Used internally by httpRedirect and family",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "redirectIter",
          "normalized": "Int-\u003eRequest a-\u003e(Status-\u003eResponseHeaders-\u003eIteratee ByteString a b)-\u003eManager-\u003eStatus-\u003eResponseHeaders-\u003eIteratee ByteString a b",
          "package": "http-enumerator",
          "partial": "Iter",
          "signature": "Int-\u003eRequest m-\u003e(Status-\u003eResponseHeaders-\u003eIteratee ByteString m a)-\u003eManager-\u003eStatus-\u003eResponseHeaders-\u003eIteratee ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:redirectIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "requestBody",
          "package": "http-enumerator",
          "signature": "Request m -\u003e RequestBody m",
          "source": "src/Network-HTTP-Enumerator.html#requestBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "requestBody",
          "normalized": "Request a-\u003eRequestBody a",
          "package": "http-enumerator",
          "partial": "Body",
          "signature": "Request m-\u003eRequestBody m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:requestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "requestHeaders",
          "package": "http-enumerator",
          "signature": "Request m -\u003e RequestHeaders",
          "source": "src/Network-HTTP-Enumerator.html#requestHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "requestHeaders",
          "normalized": "Request a-\u003eRequestHeaders",
          "package": "http-enumerator",
          "partial": "Headers",
          "signature": "Request m-\u003eRequestHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:requestHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "responseBody",
          "package": "http-enumerator",
          "signature": "ByteString",
          "source": "src/Network-HTTP-Enumerator.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "responseBody",
          "package": "http-enumerator",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:responseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "responseHeaders",
          "package": "http-enumerator",
          "signature": "ResponseHeaders",
          "source": "src/Network-HTTP-Enumerator.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "responseHeaders",
          "package": "http-enumerator",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:responseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to use HTTPS (ie, SSL).\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "secure",
          "package": "http-enumerator",
          "signature": "Request m -\u003e Bool",
          "source": "src/Network-HTTP-Enumerator.html#secure",
          "type": "function"
        },
        "index": {
          "description": "Whether to use HTTPS ie SSL",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "secure",
          "normalized": "Request a-\u003eBool",
          "package": "http-enumerator",
          "signature": "Request m-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:secure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eparseUrl\u003c/a\u003e\u003c/code\u003e, with one distinction: this function will not attempt\n to parse the query string, but instead leave it with the path info. This can\n be useful if you need precise control of the rendering of the query string,\n such as using semicolons instead of ampersands.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "semiParseUrl",
          "package": "http-enumerator",
          "signature": "String -\u003e m (Request m')",
          "source": "src/Network-HTTP-Enumerator.html#semiParseUrl",
          "type": "function"
        },
        "index": {
          "description": "Same as parseUrl with one distinction this function will not attempt to parse the query string but instead leave it with the path info This can be useful if you need precise control of the rendering of the query string such as using semicolons instead of ampersands",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "semiParseUrl",
          "normalized": "String-\u003ea(Request b)",
          "package": "http-enumerator",
          "partial": "Parse Url",
          "signature": "String-\u003em(Request m')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:semiParseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownload the specified URL, following any redirects, and return the\n response body.\n\u003c/p\u003e\u003cp\u003eThis function will \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e an \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e for any response with a\n non-2xx status code. It uses \u003ccode\u003e\u003ca\u003eparseUrl\u003c/a\u003e\u003c/code\u003e to parse the input. This function\n essentially wraps \u003ccode\u003e\u003ca\u003ehttpLbsRedirect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: Even though this function returns a lazy bytestring, it does \u003cem\u003enot\u003c/em\u003e\n utilize lazy I/O, and therefore the entire response body will live in\n memory. If you want constant memory usage, you'll need to write your own\n iteratee and use \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehttpRedirect\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "simpleHttp",
          "package": "http-enumerator",
          "signature": "String -\u003e m ByteString",
          "source": "src/Network-HTTP-Enumerator.html#simpleHttp",
          "type": "function"
        },
        "index": {
          "description": "Download the specified URL following any redirects and return the response body This function will throwIO an HttpException for any response with non-2xx status code It uses parseUrl to parse the input This function essentially wraps httpLbsRedirect Note Even though this function returns lazy bytestring it does not utilize lazy and therefore the entire response body will live in memory If you want constant memory usage you ll need to write your own iteratee and use http or httpRedirect directly",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "simpleHttp",
          "normalized": "String-\u003ea ByteString",
          "package": "http-enumerator",
          "partial": "Http",
          "signature": "String-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:simpleHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Enumerator",
          "name": "statusCode",
          "package": "http-enumerator",
          "signature": "Int",
          "source": "src/Network-HTTP-Enumerator.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "statusCode",
          "package": "http-enumerator",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:statusCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd url-encoded paramters to the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis sets a new \u003ccode\u003e\u003ca\u003erequestBody\u003c/a\u003e\u003c/code\u003e, adds a content-type request header and\n changes the \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e to POST.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "urlEncodedBody",
          "package": "http-enumerator",
          "signature": "[(ByteString, ByteString)] -\u003e Request m' -\u003e Request m",
          "source": "src/Network-HTTP-Enumerator.html#urlEncodedBody",
          "type": "function"
        },
        "index": {
          "description": "Add url-encoded paramters to the Request This sets new requestBody adds content-type request header and changes the method to POST",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "urlEncodedBody",
          "normalized": "[(ByteString,ByteString)]-\u003eRequest a-\u003eRequest b",
          "package": "http-enumerator",
          "partial": "Encoded Body",
          "signature": "[(ByteString,ByteString)]-\u003eRequest m'-\u003eRequest m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:urlEncodedBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e, call the supplied function and then close it.\n\u003c/p\u003e",
          "module": "Network.HTTP.Enumerator",
          "name": "withManager",
          "package": "http-enumerator",
          "signature": "(Manager -\u003e m a) -\u003e m a",
          "source": "src/Network-HTTP-Enumerator.html#withManager",
          "type": "function"
        },
        "index": {
          "description": "Create new Manager call the supplied function and then close it",
          "hierarchy": "Network HTTP Enumerator",
          "module": "Network.HTTP.Enumerator",
          "name": "withManager",
          "normalized": "(Manager-\u003ea b)-\u003ea b",
          "package": "http-enumerator",
          "partial": "Manager",
          "signature": "(Manager-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-enumerator/docs/Network-HTTP-Enumerator.html#v:withManager"
      }
    }
  ]
]