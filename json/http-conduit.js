[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains everything you need to initiate HTTP connections.  If\n you want a simple interface based on URLs, you can use \u003ccode\u003e\u003ca\u003esimpleHttp\u003c/a\u003e\u003c/code\u003e. If you\n want raw power, \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e is the underlying workhorse of this package. Some\n examples:\n\u003c/p\u003e\u003cpre\u003e -- Just download an HTML document and print it.\n import Network.HTTP.Conduit\n import qualified Data.ByteString.Lazy as L\n\n main = simpleHttp \"http://www.haskell.org/\" \u003e\u003e= L.putStr\n\u003c/pre\u003e\u003cp\u003eThis example uses interleaved IO to write the response body to a file in\n constant memory space.\n\u003c/p\u003e\u003cpre\u003e import Data.Conduit.Binary (sinkFile)\n import Network.HTTP.Conduit\n import qualified Data.Conduit as C\n\n main :: IO ()\n main = do\n      request \u003c- parseUrl \"http://google.com/\"\n      withManager $ \\manager -\u003e do\n          response \u003c- http request manager\n          responseBody response C.$$+- sinkFile \"google.html\"\n\u003c/pre\u003e\u003cp\u003eThe following headers are automatically set by this module, and should not\n be added to \u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Cookie\n\u003c/li\u003e\u003cli\u003e Content-Length\n\u003c/li\u003e\u003cli\u003e Transfer-Encoding\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote: In previous versions, the Host header would be set by this module in\n all cases. Starting from 1.6.1, if a Host header is present in\n \u003ccode\u003erequestHeaders\u003c/code\u003e, it will be used in place of the header this module would\n have generated. This can be useful for calling a server which utilizes\n virtual hosting.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ecookieJar\u003c/a\u003e\u003c/code\u003e If you want to supply cookies with your request:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import Network.HTTP.Conduit\n import Network\n import Data.Time.Clock\n import Data.Time.Calendar\n import qualified Control.Exception as E\n\n past :: UTCTime\n past = UTCTime (ModifiedJulianDay 56200) (secondsToDiffTime 0)\n\n future :: UTCTime\n future = UTCTime (ModifiedJulianDay 562000) (secondsToDiffTime 0)\n\n cookie :: Cookie\n cookie = Cookie { cookie_name = \"password_hash\"\n                 , cookie_value = \"abf472c35f8297fbcabf2911230001234fd2\"\n                 , cookie_expiry_time = future\n                 , cookie_domain = \"example.com\"\n                 , cookie_path = \"/\"\n                 , cookie_creation_time = past\n                 , cookie_last_access_time = past\n                 , cookie_persistent = False\n                 , cookie_host_only = False\n                 , cookie_secure_only = False\n                 , cookie_http_only = False\n                 }\n\n main = withSocketsDo $ do\n      request' \u003c- parseUrl \"http://example.com/secret-page\"\n      let request = request' { cookieJar = Just $ createCookieJar [cookie] }\n      E.catch (withManager $ httpLbs request)\n              (\\(StatusCodeException s _ _) -\u003e\n                if statusCode==403 then putStrLn \"login failed\" else return ())\n\u003c/pre\u003e\u003cp\u003eAny network code on Windows requires some initialization, and the network\n library provides withSocketsDo to perform it. Therefore, proper usage of\n this library will always involve calling that function at some point.  The\n best approach is to simply call them at the beginning of your main function,\n such as:\n\u003c/p\u003e\u003cpre\u003e import Network.HTTP.Conduit\n import qualified Data.ByteString.Lazy as L\n import Network (withSocketsDo)\n\n main = withSocketsDo\n      $ simpleHttp \"http://www.haskell.org/\" \u003e\u003e= L.putStr\n\n Cookies are implemented according to RFC 6265.\n\u003c/pre\u003e\u003cp\u003eNote that by default, the functions in this package will throw exceptions\n for non-2xx status codes. If you would like to avoid this, you should use\n \u003ccode\u003e\u003ca\u003echeckStatus\u003c/a\u003e\u003c/code\u003e, e.g.:\n\u003c/p\u003e\u003cpre\u003e import Data.Conduit.Binary (sinkFile)\n import Network.HTTP.Conduit\n import qualified Data.Conduit as C\n import Network\n\n main :: IO ()\n main = withSocketsDo $ do\n      request' \u003c- parseUrl \"http://www.yesodweb.com/does-not-exist\"\n      let request = request' { checkStatus = \\_ _ -\u003e Nothing }\n      res \u003c- withManager $ httpLbs request\n      print res\n\u003c/pre\u003e\u003cp\u003eBy default, when connecting to websites using HTTPS, functions in this\n package will throw an exception if the TLS certificate doesn't validate. To\n continue the HTTPS transaction even if the TLS cerficate validation fails,\n you should use \u003ccode\u003emkManagerSetttings\u003c/code\u003e as follows:\n\u003c/p\u003e\u003cpre\u003e import Network.Connection (TLSSettings (..))\n import Network.HTTP.Conduit\n\n main :: IO ()\n main = do\n     request \u003c- parseUrl \"https://github.com/\"\n     let settings = mkManagerSettings (TLSSettingsSimple True False False) Nothing\n     res \u003c- withManagerSettings settings $ httpLbs request\n     print res\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Conduit.html",
        "fct-type": "module",
        "title": "Conduit"
      },
      "index": {
        "description": "This module contains everything you need to initiate HTTP connections If you want simple interface based on URLs you can use simpleHttp If you want raw power http is the underlying workhorse of this package Some examples Just download an HTML document and print it import Network.HTTP.Conduit import qualified Data.ByteString.Lazy as main simpleHttp http www.haskell.org L.putStr This example uses interleaved IO to write the response body to file in constant memory space import Data.Conduit.Binary sinkFile import Network.HTTP.Conduit import qualified Data.Conduit as main IO main do request parseUrl http google.com withManager manager do response http request manager responseBody response sinkFile google.html The following headers are automatically set by this module and should not be added to requestHeaders Cookie Content-Length Transfer-Encoding Note In previous versions the Host header would be set by this module in all cases Starting from if Host header is present in requestHeaders it will be used in place of the header this module would have generated This can be useful for calling server which utilizes virtual hosting Use cookieJar If you want to supply cookies with your request LANGUAGE OverloadedStrings import Network.HTTP.Conduit import Network import Data.Time.Clock import Data.Time.Calendar import qualified Control.Exception as past UTCTime past UTCTime ModifiedJulianDay secondsToDiffTime future UTCTime future UTCTime ModifiedJulianDay secondsToDiffTime cookie Cookie cookie Cookie cookie name password hash cookie value abf472c35f8297fbcabf2911230001234fd2 cookie expiry time future cookie domain example.com cookie path cookie creation time past cookie last access time past cookie persistent False cookie host only False cookie secure only False cookie http only False main withSocketsDo do request parseUrl http example.com secret-page let request request cookieJar Just createCookieJar cookie E.catch withManager httpLbs request StatusCodeException if statusCode then putStrLn login failed else return Any network code on Windows requires some initialization and the network library provides withSocketsDo to perform it Therefore proper usage of this library will always involve calling that function at some point The best approach is to simply call them at the beginning of your main function such as import Network.HTTP.Conduit import qualified Data.ByteString.Lazy as import Network withSocketsDo main withSocketsDo simpleHttp http www.haskell.org L.putStr Cookies are implemented according to RFC Note that by default the functions in this package will throw exceptions for non-2xx status codes If you would like to avoid this you should use checkStatus e.g import Data.Conduit.Binary sinkFile import Network.HTTP.Conduit import qualified Data.Conduit as import Network main IO main withSocketsDo do request parseUrl http www.yesodweb.com does-not-exist let request request checkStatus Nothing res withManager httpLbs request print res By default when connecting to websites using HTTPS functions in this package will throw an exception if the TLS certificate doesn validate To continue the HTTPS transaction even if the TLS cerficate validation fails you should use mkManagerSetttings as follows import Network.Connection TLSSettings import Network.HTTP.Conduit main IO main do request parseUrl https github.com let settings mkManagerSettings TLSSettingsSimple True False False Nothing res withManagerSettings settings httpLbs request print res",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "Conduit",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#t:Cookie",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Cookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "Cookie",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#t:CookieJar",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CookieJar"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "CookieJar",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Cookie Jar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#t:HttpException",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "HttpException"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "HttpException",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Http Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#t:Manager",
      "description": {
        "fct-descr": "\u003cp\u003eKeeps track of open connections for keep-alive.\n\u003c/p\u003e\u003cp\u003eIf possible, you should share a single \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e between multiple threads and requests.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Manager"
      },
      "index": {
        "description": "Keeps track of open connections for keep-alive If possible you should share single Manager between multiple threads and requests Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "Manager",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#t:ManagerSettings",
      "description": {
        "fct-descr": "\u003cp\u003eSettings for a \u003ccode\u003eManager\u003c/code\u003e. Please use the \u003ccode\u003edefaultManagerSettings\u003c/code\u003e function and then modify\n individual settings. For more information, see \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ManagerSettings"
      },
      "index": {
        "description": "Settings for Manager Please use the defaultManagerSettings function and then modify individual settings For more information see http www.yesodweb.com book settings-types Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "ManagerSettings",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Manager Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#t:Proxy",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a HTTP proxy, consisting of a hostname and port number.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Proxy"
      },
      "index": {
        "description": "Define HTTP proxy consisting of hostname and port number",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "Proxy",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eAll information on how to connect to a host and what should be sent in the\n HTTP request.\n\u003c/p\u003e\u003cp\u003eIf you simply wish to download from a URL, see \u003ccode\u003eparseUrl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe constructor for this data type is not exposed. Instead, you should use\n either the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e method to retrieve a default instance, or \u003ccode\u003eparseUrl\u003c/code\u003e to\n construct from a URL, and then use the records below to make modifications.\n This approach allows http-client to add configuration options without\n breaking backwards compatibility.\n\u003c/p\u003e\u003cp\u003eFor example, to construct a POST request, you could do something like:\n\u003c/p\u003e\u003cpre\u003e initReq \u003c- parseUrl \"http://www.example.com/path\"\n let req = initReq\n             { method = \"POST\"\n             }\n\u003c/pre\u003e\u003cp\u003eFor more information, please see\n \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "All information on how to connect to host and what should be sent in the HTTP request If you simply wish to download from URL see parseUrl The constructor for this data type is not exposed Instead you should use either the def method to retrieve default instance or parseUrl to construct from URL and then use the records below to make modifications This approach allows http-client to add configuration options without breaking backwards compatibility For example to construct POST request you could do something like initReq parseUrl http www.example.com path let req initReq method POST For more information please see http www.yesodweb.com book settings-types Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "Request",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#t:RequestBody",
      "description": {
        "fct-descr": "\u003cp\u003eWhen using one of the \u003ccode\u003e\u003ca\u003eRequestBodyStream\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eRequestBodyStreamChunked\u003c/a\u003e\u003c/code\u003e\n constructors, you must ensure that the \u003ccode\u003e\u003ca\u003eGivesPopper\u003c/a\u003e\u003c/code\u003e can be called multiple\n times.  Usually this is not a problem.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRequestBodyStreamChunked\u003c/a\u003e\u003c/code\u003e will send a chunked request body. Note that\n not all servers support this. Only use \u003ccode\u003e\u003ca\u003eRequestBodyStreamChunked\u003c/a\u003e\u003c/code\u003e if you\n know the server you're sending to supports chunked request bodies.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RequestBody"
      },
      "index": {
        "description": "When using one of the RequestBodyStream RequestBodyStreamChunked constructors you must ensure that the GivesPopper can be called multiple times Usually this is not problem The RequestBodyStreamChunked will send chunked request body Note that not all servers support this Only use RequestBodyStreamChunked if you know the server you re sending to supports chunked request bodies Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "RequestBody",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Request Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#t:Response",
      "description": {
        "fct-descr": "\u003cp\u003eA simple representation of the HTTP response.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "simple representation of the HTTP response Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "Response",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:Cookie",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Cookie",
        "fct-type": "function",
        "title": "Cookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "Cookie",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:ExpectedBlankAfter100Continue",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ExpectedBlankAfter100Continue",
        "fct-type": "function",
        "title": "ExpectedBlankAfter100Continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "ExpectedBlankAfter100Continue",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Expected Blank After Continue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:FailedConnectionException",
      "description": {
        "fct-descr": "\u003cp\u003ehost/port\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "FailedConnectionException String Int",
        "fct-type": "function",
        "title": "FailedConnectionException"
      },
      "index": {
        "description": "host port",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "FailedConnectionException",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Failed Connection Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:HandshakeFailed",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "HandshakeFailed",
        "fct-type": "function",
        "title": "HandshakeFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "HandshakeFailed",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Handshake Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:HttpParserException",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "HttpParserException String",
        "fct-type": "function",
        "title": "HttpParserException"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "HttpParserException",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Http Parser Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:IncompleteHeaders",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "IncompleteHeaders",
        "fct-type": "function",
        "title": "IncompleteHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "IncompleteHeaders",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Incomplete Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:InternalIOException",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "InternalIOException IOException",
        "fct-type": "function",
        "title": "InternalIOException"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "InternalIOException",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Internal IOException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:InvalidChunkHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eSince 1.9.4\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "InvalidChunkHeaders",
        "fct-type": "function",
        "title": "InvalidChunkHeaders"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "InvalidChunkHeaders",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Invalid Chunk Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:InvalidHeader",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "InvalidHeader ByteString",
        "fct-type": "function",
        "title": "InvalidHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "InvalidHeader",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Invalid Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:InvalidStatusLine",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "InvalidStatusLine ByteString",
        "fct-type": "function",
        "title": "InvalidStatusLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "InvalidStatusLine",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Invalid Status Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:InvalidUrlException",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "InvalidUrlException String String",
        "fct-type": "function",
        "title": "InvalidUrlException"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "InvalidUrlException",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Invalid Url Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:NoResponseDataReceived",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "NoResponseDataReceived",
        "fct-type": "function",
        "title": "NoResponseDataReceived"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "NoResponseDataReceived",
        "normalized": "",
        "package": "http-conduit",
        "partial": "No Response Data Received",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:OverlongHeaders",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "OverlongHeaders",
        "fct-type": "function",
        "title": "OverlongHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "OverlongHeaders",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Overlong Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:Proxy",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Proxy",
        "fct-type": "function",
        "title": "Proxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "Proxy",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:ProxyConnectException",
      "description": {
        "fct-descr": "\u003cp\u003ehost/port\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ProxyConnectException ByteString Int (Either ByteString HttpException)",
        "fct-type": "function",
        "title": "ProxyConnectException"
      },
      "index": {
        "description": "host port",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "ProxyConnectException",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Proxy Connect Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:RequestBodyBS",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "RequestBodyBS !ByteString",
        "fct-type": "function",
        "title": "RequestBodyBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "RequestBodyBS",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Request Body BS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:RequestBodyBuilder",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "RequestBodyBuilder !Int64 !Builder",
        "fct-type": "function",
        "title": "RequestBodyBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "RequestBodyBuilder",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Request Body Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:RequestBodyLBS",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "RequestBodyLBS !ByteString",
        "fct-type": "function",
        "title": "RequestBodyLBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "RequestBodyLBS",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Request Body LBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:RequestBodyStream",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "RequestBodyStream !Int64 !(GivesPopper ())",
        "fct-type": "function",
        "title": "RequestBodyStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "RequestBodyStream",
        "normalized": "RequestBodyStream Int(GivesPopper())",
        "package": "http-conduit",
        "partial": "Request Body Stream",
        "signature": "RequestBodyStream Int(GivesPopper())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:RequestBodyStreamChunked",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "RequestBodyStreamChunked !(GivesPopper ())",
        "fct-type": "function",
        "title": "RequestBodyStreamChunked"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "RequestBodyStreamChunked",
        "normalized": "RequestBodyStreamChunked(GivesPopper())",
        "package": "http-conduit",
        "partial": "Request Body Stream Chunked",
        "signature": "RequestBodyStreamChunked(GivesPopper())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:ResponseBodyTooShort",
      "description": {
        "fct-descr": "\u003cp\u003eExpected size/actual size.\n\u003c/p\u003e\u003cp\u003eSince 1.9.4\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ResponseBodyTooShort Word64 Word64",
        "fct-type": "function",
        "title": "ResponseBodyTooShort"
      },
      "index": {
        "description": "Expected size actual size Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "ResponseBodyTooShort",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Response Body Too Short",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:ResponseTimeout",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ResponseTimeout",
        "fct-type": "function",
        "title": "ResponseTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "ResponseTimeout",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Response Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:StatusCodeException",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "StatusCodeException Status ResponseHeaders CookieJar",
        "fct-type": "function",
        "title": "StatusCodeException"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "StatusCodeException",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Status Code Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:TlsException",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "TlsException SomeException",
        "fct-type": "function",
        "title": "TlsException"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "TlsException",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Tls Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:TlsNotSupported",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "TlsNotSupported",
        "fct-type": "function",
        "title": "TlsNotSupported"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "TlsNotSupported",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Tls Not Supported",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:TooManyRedirects",
      "description": {
        "fct-descr": "\u003cp\u003eList of encountered responses containing redirects in reverse chronological order; including last redirect, which triggered the exception and was not followed.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "TooManyRedirects [Response ByteString]",
        "fct-type": "function",
        "title": "TooManyRedirects"
      },
      "index": {
        "description": "List of encountered responses containing redirects in reverse chronological order including last redirect which triggered the exception and was not followed",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "TooManyRedirects",
        "normalized": "TooManyRedirects[Response ByteString]",
        "package": "http-conduit",
        "partial": "Too Many Redirects",
        "signature": "TooManyRedirects[Response ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:TooManyRetries",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "TooManyRetries",
        "fct-type": "function",
        "title": "TooManyRetries"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "TooManyRetries",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Too Many Retries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:UnparseableRedirect",
      "description": {
        "fct-descr": "\u003cp\u003eResponse containing unparseable redirect.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "UnparseableRedirect (Response ByteString)",
        "fct-type": "function",
        "title": "UnparseableRedirect"
      },
      "index": {
        "description": "Response containing unparseable redirect",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "UnparseableRedirect",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Unparseable Redirect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:addProxy",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a proxy to the Request so that the Request when executed will use\n the provided proxy.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ByteString -\u003e Int -\u003e Request -\u003e Request",
        "fct-type": "function",
        "title": "addProxy"
      },
      "index": {
        "description": "Add proxy to the Request so that the Request when executed will use the provided proxy Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "addProxy",
        "normalized": "ByteString-\u003eInt-\u003eRequest-\u003eRequest",
        "package": "http-conduit",
        "partial": "Proxy",
        "signature": "ByteString-\u003eInt-\u003eRequest-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:alwaysDecompress",
      "description": {
        "fct-descr": "\u003cp\u003eAlways decompress a compressed stream.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ByteString -\u003e Bool",
        "fct-type": "function",
        "title": "alwaysDecompress"
      },
      "index": {
        "description": "Always decompress compressed stream",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "alwaysDecompress",
        "normalized": "ByteString-\u003eBool",
        "package": "http-conduit",
        "partial": "Decompress",
        "signature": "ByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:applyBasicAuth",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a Basic Auth header (with the specified user name and password) to the\n given Request. Ignore error handling:\n\u003c/p\u003e\u003cpre\u003e  applyBasicAuth \"user\" \"pass\" $ fromJust $ parseUrl url\n\u003c/pre\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ByteString -\u003e ByteString -\u003e Request -\u003e Request",
        "fct-type": "function",
        "title": "applyBasicAuth"
      },
      "index": {
        "description": "Add Basic Auth header with the specified user name and password to the given Request Ignore error handling applyBasicAuth user pass fromJust parseUrl url Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "applyBasicAuth",
        "normalized": "ByteString-\u003eByteString-\u003eRequest-\u003eRequest",
        "package": "http-conduit",
        "partial": "Basic Auth",
        "signature": "ByteString-\u003eByteString-\u003eRequest-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:browserDecompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress a compressed stream unless the content-type is 'application/x-tar'.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ByteString -\u003e Bool",
        "fct-type": "function",
        "title": "browserDecompress"
      },
      "index": {
        "description": "Decompress compressed stream unless the content-type is application x-tar",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "browserDecompress",
        "normalized": "ByteString-\u003eBool",
        "package": "http-conduit",
        "partial": "Decompress",
        "signature": "ByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:checkStatus",
      "description": {
        "fct-descr": "\u003cp\u003eCheck the status code. Note that this will run after all redirects are\n performed. Default: return a \u003ccode\u003eStatusCodeException\u003c/code\u003e on non-2XX responses.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException",
        "fct-type": "function",
        "title": "checkStatus"
      },
      "index": {
        "description": "Check the status code Note that this will run after all redirects are performed Default return StatusCodeException on non-2XX responses Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "checkStatus",
        "normalized": "Request-\u003eStatus-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException",
        "package": "http-conduit",
        "partial": "Status",
        "signature": "Request-\u003eStatus-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:closeManager",
      "description": {
        "fct-descr": "\u003cp\u003eClose all connections in a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this doesn't affect currently in-flight connections,\n meaning you can safely use it without hurting any queries you may\n have concurrently running.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Manager -\u003e IO ()",
        "fct-type": "function",
        "title": "closeManager"
      },
      "index": {
        "description": "Close all connections in Manager Note that this doesn affect currently in-flight connections meaning you can safely use it without hurting any queries you may have concurrently running Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "closeManager",
        "normalized": "Manager-\u003eIO()",
        "package": "http-conduit",
        "partial": "Manager",
        "signature": "Manager-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:conduitManagerSettings",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ManagerSettings",
        "fct-source": "src/Network-HTTP-Conduit.html#conduitManagerSettings",
        "fct-type": "function",
        "title": "conduitManagerSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "conduitManagerSettings",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Manager Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookieJar",
      "description": {
        "fct-descr": "\u003cp\u003eA user-defined cookie jar.\n If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, no cookie handling will take place, \"Cookie\" headers\n in \u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e will be sent raw, and \u003ccode\u003e\u003ca\u003eresponseCookieJar\u003c/a\u003e\u003c/code\u003e will be\n empty.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Maybe CookieJar",
        "fct-type": "function",
        "title": "cookieJar"
      },
      "index": {
        "description": "user-defined cookie jar If Nothing no cookie handling will take place Cookie headers in requestHeaders will be sent raw and responseCookieJar will be empty Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookieJar",
        "normalized": "Request-\u003eMaybe CookieJar",
        "package": "http-conduit",
        "partial": "Jar",
        "signature": "Request-\u003eMaybe CookieJar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_creation_time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "UTCTime",
        "fct-type": "function",
        "title": "cookie_creation_time"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_creation_time",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_domain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "cookie_domain"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_domain",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_expiry_time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "UTCTime",
        "fct-type": "function",
        "title": "cookie_expiry_time"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_expiry_time",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_host_only",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "cookie_host_only"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_host_only",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_http_only",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "cookie_http_only"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_http_only",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_last_access_time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "UTCTime",
        "fct-type": "function",
        "title": "cookie_last_access_time"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_last_access_time",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "cookie_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_name",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_path",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "cookie_path"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_path",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_persistent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "cookie_persistent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_persistent",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_secure_only",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "cookie_secure_only"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_secure_only",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:cookie_value",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "cookie_value"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "cookie_value",
        "normalized": "",
        "package": "http-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:createCookieJar",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "[Cookie] -\u003e CookieJar",
        "fct-type": "function",
        "title": "createCookieJar"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "createCookieJar",
        "normalized": "[Cookie]-\u003eCookieJar",
        "package": "http-conduit",
        "partial": "Cookie Jar",
        "signature": "[Cookie]-\u003eCookieJar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate to specify whether gzipped data should be\n decompressed on the fly (see \u003ccode\u003ealwaysDecompress\u003c/code\u003e and\n \u003ccode\u003ebrowserDecompress\u003c/code\u003e). Argument is the mime type.\n Default: browserDecompress.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e ByteString -\u003e Bool",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Predicate to specify whether gzipped data should be decompressed on the fly see alwaysDecompress and browserDecompress Argument is the mime type Default browserDecompress Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "decompress",
        "normalized": "Request-\u003eByteString-\u003eBool",
        "package": "http-conduit",
        "partial": "",
        "signature": "Request-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:destroyCookieJar",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "CookieJar -\u003e [Cookie]",
        "fct-type": "function",
        "title": "destroyCookieJar"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "destroyCookieJar",
        "normalized": "CookieJar-\u003e[Cookie]",
        "package": "http-conduit",
        "partial": "Cookie Jar",
        "signature": "CookieJar-\u003e[Cookie]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:getConnectionWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eWraps the calls for getting new connections. This can be useful for\n instituting some kind of timeouts. The first argument is the value of\n \u003ccode\u003eresponseTimeout\u003c/code\u003e. Second argument is the exception to be thrown on\n failure.\n\u003c/p\u003e\u003cp\u003eDefault: If \u003ccode\u003eresponseTimeout\u003c/code\u003e is \u003ccode\u003eNothing\u003c/code\u003e, does nothing. Otherwise,\n institutes timeout, and returns remaining time for \u003ccode\u003eresponseTimeout\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Maybe Int -\u003e HttpException -\u003e IO (ConnRelease, Connection, ManagedConn) -\u003e IO (Maybe Int, (ConnRelease, Connection, ManagedConn))",
        "fct-type": "function",
        "title": "getConnectionWrapper"
      },
      "index": {
        "description": "Wraps the calls for getting new connections This can be useful for instituting some kind of timeouts The first argument is the value of responseTimeout Second argument is the exception to be thrown on failure Default If responseTimeout is Nothing does nothing Otherwise institutes timeout and returns remaining time for responseTimeout Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "getConnectionWrapper",
        "normalized": "Request-\u003eMaybe Int-\u003eHttpException-\u003eIO(ConnRelease,Connection,ManagedConn)-\u003eIO(Maybe Int,(ConnRelease,Connection,ManagedConn))",
        "package": "http-conduit",
        "partial": "Connection Wrapper",
        "signature": "Request-\u003eMaybe Int-\u003eHttpException-\u003eIO(ConnRelease,Connection,ManagedConn)-\u003eIO(Maybe Int,(ConnRelease,Connection,ManagedConn))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:getRedirectedRequest",
      "description": {
        "fct-descr": "\u003cp\u003eIf a request is a redirection (status code 3xx) this function will create\n a new request from the old request, the server headers returned with the\n redirection, and the redirection code itself. This function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if the code is not a 3xx, there is no \u003ccode\u003elocation\u003c/code\u003e header included, or if the\n redirected response couldn't be parsed with \u003ccode\u003e\u003ca\u003eparseUrl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf a user of this library wants to know the url chain that results from a\n specific request, that user has to re-implement the redirect-following logic\n themselves. An example of that might look like this:\n\u003c/p\u003e\u003cpre\u003e myHttp req man = do\n    (res, redirectRequests) \u003c- (`runStateT` []) $\n         'httpRedirect'\n             9000\n             (\\req' -\u003e do\n                res \u003c- http req'{redirectCount=0} man\n                modify (\\rqs -\u003e req' : rqs)\n                return (res, getRedirectedRequest req' (responseHeaders res) (responseCookieJar res) (W.statusCode (responseStatus res))\n                )\n             'lift'\n             req\n    applyCheckStatus (checkStatus req) res\n    return redirectRequests\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e ResponseHeaders -\u003e CookieJar -\u003e Int -\u003e Maybe Request",
        "fct-type": "function",
        "title": "getRedirectedRequest"
      },
      "index": {
        "description": "If request is redirection status code xx this function will create new request from the old request the server headers returned with the redirection and the redirection code itself This function returns Nothing if the code is not xx there is no location header included or if the redirected response couldn be parsed with parseUrl If user of this library wants to know the url chain that results from specific request that user has to re-implement the redirect-following logic themselves An example of that might look like this myHttp req man do res redirectRequests runStateT httpRedirect req do res http req redirectCount man modify rqs req rqs return res getRedirectedRequest req responseHeaders res responseCookieJar res W.statusCode responseStatus res lift req applyCheckStatus checkStatus req res return redirectRequests",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "getRedirectedRequest",
        "normalized": "Request-\u003eResponseHeaders-\u003eCookieJar-\u003eInt-\u003eMaybe Request",
        "package": "http-conduit",
        "partial": "Redirected Request",
        "signature": "Request-\u003eResponseHeaders-\u003eCookieJar-\u003eInt-\u003eMaybe Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:host",
      "description": {
        "fct-descr": "\u003cp\u003eRequested host name, used for both the IP address to connect to and\n the \u003ccode\u003ehost\u003c/code\u003e request header.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e ByteString",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "Requested host name used for both the IP address to connect to and the host request header Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "host",
        "normalized": "Request-\u003eByteString",
        "package": "http-conduit",
        "partial": "",
        "signature": "Request-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:hostAddress",
      "description": {
        "fct-descr": "\u003cp\u003eOptional resolved host address. May not be used by all backends.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Maybe HostAddress",
        "fct-type": "function",
        "title": "hostAddress"
      },
      "index": {
        "description": "Optional resolved host address May not be used by all backends Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "hostAddress",
        "normalized": "Request-\u003eMaybe HostAddress",
        "package": "http-conduit",
        "partial": "Address",
        "signature": "Request-\u003eMaybe HostAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:http",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Manager -\u003e m (Response (ResumableSource m ByteString))",
        "fct-type": "function",
        "title": "http"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "http",
        "normalized": "Request-\u003eManager-\u003ea(Response(ResumableSource a ByteString))",
        "package": "http-conduit",
        "partial": "",
        "signature": "Request-\u003eManager-\u003em(Response(ResumableSource m ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:httpLbs",
      "description": {
        "fct-descr": "\u003cp\u003eDownload the specified \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e, returning the results as a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e for the common case where you simply\n want the response data as a simple datatype. If you want more power, such as\n interleaved actions on the response body during download, you'll need to use\n \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e directly. This function is defined as:\n\u003c/p\u003e\u003cpre\u003ehttpLbs = \u003ccode\u003e\u003ca\u003elbsResponse\u003c/a\u003e\u003c/code\u003e \u003c=\u003c \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eEven though the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e contains a lazy bytestring, this\n function does \u003cem\u003enot\u003c/em\u003e utilize lazy I/O, and therefore the entire\n response body will live in memory. If you want constant memory\n usage, you'll need to use \u003ccode\u003econduit\u003c/code\u003e packages's\n \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e returned by \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: Unlike previous versions, this function will perform redirects, as\n specified by the \u003ccode\u003e\u003ca\u003eredirectCount\u003c/a\u003e\u003c/code\u003e setting.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Manager -\u003e m (Response ByteString)",
        "fct-source": "src/Network-HTTP-Conduit.html#httpLbs",
        "fct-type": "function",
        "title": "httpLbs"
      },
      "index": {
        "description": "Download the specified Request returning the results as Response This is simplified version of http for the common case where you simply want the response data as simple datatype If you want more power such as interleaved actions on the response body during download you ll need to use http directly This function is defined as httpLbs lbsResponse http Even though the Response contains lazy bytestring this function does not utilize lazy and therefore the entire response body will live in memory If you want constant memory usage you ll need to use conduit packages Source returned by http Note Unlike previous versions this function will perform redirects as specified by the redirectCount setting",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "httpLbs",
        "normalized": "Request-\u003eManager-\u003ea(Response ByteString)",
        "package": "http-conduit",
        "partial": "Lbs",
        "signature": "Request-\u003eManager-\u003em(Response ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:lbsResponse",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Response (ResumableSource m ByteString) -\u003e m (Response ByteString)",
        "fct-source": "src/Network-HTTP-Conduit.html#lbsResponse",
        "fct-type": "function",
        "title": "lbsResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "lbsResponse",
        "normalized": "Response(ResumableSource a ByteString)-\u003ea(Response ByteString)",
        "package": "http-conduit",
        "partial": "Response",
        "signature": "Response(ResumableSource m ByteString)-\u003em(Response ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:managerConnCount",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of connections to a single host to keep alive. Default: 10.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ManagerSettings -\u003e Int",
        "fct-type": "function",
        "title": "managerConnCount"
      },
      "index": {
        "description": "Number of connections to single host to keep alive Default Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "managerConnCount",
        "normalized": "ManagerSettings-\u003eInt",
        "package": "http-conduit",
        "partial": "Conn Count",
        "signature": "ManagerSettings-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:managerResponseTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eDefault timeout (in microseconds) to be applied to requests which do\n not provide a timeout value.\n\u003c/p\u003e\u003cp\u003eDefault is 5 seconds\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ManagerSettings -\u003e Maybe Int",
        "fct-type": "function",
        "title": "managerResponseTimeout"
      },
      "index": {
        "description": "Default timeout in microseconds to be applied to requests which do not provide timeout value Default is seconds Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "managerResponseTimeout",
        "normalized": "ManagerSettings-\u003eMaybe Int",
        "package": "http-conduit",
        "partial": "Response Timeout",
        "signature": "ManagerSettings-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:managerTlsConnection",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a TLS connection. Default behavior: throw an exception that TLS is not supported.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ManagerSettings -\u003e IO (Maybe HostAddress -\u003e String -\u003e Int -\u003e IO Connection)",
        "fct-type": "function",
        "title": "managerTlsConnection"
      },
      "index": {
        "description": "Create TLS connection Default behavior throw an exception that TLS is not supported Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "managerTlsConnection",
        "normalized": "ManagerSettings-\u003eIO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
        "package": "http-conduit",
        "partial": "Tls Connection",
        "signature": "ManagerSettings-\u003eIO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:method",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP request method, eg GET, POST.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Method",
        "fct-type": "function",
        "title": "method"
      },
      "index": {
        "description": "HTTP request method eg GET POST Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "method",
        "normalized": "Request-\u003eMethod",
        "package": "http-conduit",
        "partial": "",
        "signature": "Request-\u003eMethod"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:mkManagerSettings",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "TLSSettings -\u003e Maybe SockSettings -\u003e ManagerSettings",
        "fct-type": "function",
        "title": "mkManagerSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "mkManagerSettings",
        "normalized": "TLSSettings-\u003eMaybe SockSettings-\u003eManagerSettings",
        "package": "http-conduit",
        "partial": "Manager Settings",
        "signature": "TLSSettings-\u003eMaybe SockSettings-\u003eManagerSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:newManager",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e. You may manually call \u003ccode\u003e\u003ca\u003ecloseManager\u003c/a\u003e\u003c/code\u003e to shut it down,\n or allow the \u003ccode\u003eManager\u003c/code\u003e to be shut down automatically based on garbage\n collection.\n\u003c/p\u003e\u003cp\u003eCreating a new \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e is a relatively expensive operation, you are\n advised to share a single \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e between requests instead.\n\u003c/p\u003e\u003cp\u003eThe first argument to this function is often \u003ccode\u003e\u003ca\u003edefaultManagerSettings\u003c/a\u003e\u003c/code\u003e,\n though add-on libraries may provide a recommended replacement.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ManagerSettings -\u003e IO Manager",
        "fct-type": "function",
        "title": "newManager"
      },
      "index": {
        "description": "Create Manager You may manually call closeManager to shut it down or allow the Manager to be shut down automatically based on garbage collection Creating new Manager is relatively expensive operation you are advised to share single Manager between requests instead The first argument to this function is often defaultManagerSettings though add-on libraries may provide recommended replacement Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "newManager",
        "normalized": "ManagerSettings-\u003eIO Manager",
        "package": "http-conduit",
        "partial": "Manager",
        "signature": "ManagerSettings-\u003eIO Manager"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:parseUrl",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a URL into a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis defaults some of the values in \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e, such as setting \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e to\n GET and \u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince this function uses \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e, the return monad can be anything that is\n an instance of \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "String -\u003e m Request",
        "fct-type": "function",
        "title": "parseUrl"
      },
      "index": {
        "description": "Convert URL into Request This defaults some of the values in Request such as setting method to GET and requestHeaders to Since this function uses Failure the return monad can be anything that is an instance of Failure such as IO or Maybe Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "parseUrl",
        "normalized": "String-\u003ea Request",
        "package": "http-conduit",
        "partial": "Url",
        "signature": "String-\u003em Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:path",
      "description": {
        "fct-descr": "\u003cp\u003eEverything from the host to the query string.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e ByteString",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "Everything from the host to the query string Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "path",
        "normalized": "Request-\u003eByteString",
        "package": "http-conduit",
        "partial": "",
        "signature": "Request-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:port",
      "description": {
        "fct-descr": "\u003cp\u003eThe port to connect to. Also used for generating the \u003ccode\u003ehost\u003c/code\u003e request header.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Int",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "The port to connect to Also used for generating the host request header Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "port",
        "normalized": "Request-\u003eInt",
        "package": "http-conduit",
        "partial": "",
        "signature": "Request-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:proxy",
      "description": {
        "fct-descr": "\u003cp\u003eOptional HTTP proxy.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Maybe Proxy",
        "fct-type": "function",
        "title": "proxy"
      },
      "index": {
        "description": "Optional HTTP proxy Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "proxy",
        "normalized": "Request-\u003eMaybe Proxy",
        "package": "http-conduit",
        "partial": "",
        "signature": "Request-\u003eMaybe Proxy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:proxyHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe host name of the HTTP proxy.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "!ByteString",
        "fct-type": "function",
        "title": "proxyHost"
      },
      "index": {
        "description": "The host name of the HTTP proxy",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "proxyHost",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:proxyPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe port number of the HTTP proxy.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "!Int",
        "fct-type": "function",
        "title": "proxyPort"
      },
      "index": {
        "description": "The port number of the HTTP proxy",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "proxyPort",
        "normalized": "",
        "package": "http-conduit",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:queryString",
      "description": {
        "fct-descr": "\u003cp\u003eQuery string appended to the path.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e ByteString",
        "fct-type": "function",
        "title": "queryString"
      },
      "index": {
        "description": "Query string appended to the path Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "queryString",
        "normalized": "Request-\u003eByteString",
        "package": "http-conduit",
        "partial": "String",
        "signature": "Request-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:rawBody",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003eTrue\u003c/code\u003e, a chunked and/or gzipped body will not be\n decoded. Use with caution.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Bool",
        "fct-type": "function",
        "title": "rawBody"
      },
      "index": {
        "description": "If True chunked and or gzipped body will not be decoded Use with caution Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "rawBody",
        "normalized": "Request-\u003eBool",
        "package": "http-conduit",
        "partial": "Body",
        "signature": "Request-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:redirectCount",
      "description": {
        "fct-descr": "\u003cp\u003eHow many redirects to follow when getting a resource. 0 means follow\n no redirects. Default value: 10.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Int",
        "fct-type": "function",
        "title": "redirectCount"
      },
      "index": {
        "description": "How many redirects to follow when getting resource means follow no redirects Default value Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "redirectCount",
        "normalized": "Request-\u003eInt",
        "package": "http-conduit",
        "partial": "Count",
        "signature": "Request-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:requestBody",
      "description": {
        "fct-descr": "\u003cp\u003eRequest body to be sent to the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e RequestBody",
        "fct-type": "function",
        "title": "requestBody"
      },
      "index": {
        "description": "Request body to be sent to the server Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "requestBody",
        "normalized": "Request-\u003eRequestBody",
        "package": "http-conduit",
        "partial": "Body",
        "signature": "Request-\u003eRequestBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:requestBodySource",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Int64 -\u003e Source (ResourceT IO) ByteString -\u003e RequestBody",
        "fct-type": "function",
        "title": "requestBodySource"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "requestBodySource",
        "normalized": "Int-\u003eSource(ResourceT IO)ByteString-\u003eRequestBody",
        "package": "http-conduit",
        "partial": "Body Source",
        "signature": "Int-\u003eSource(ResourceT IO)ByteString-\u003eRequestBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:requestBodySourceChunked",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Source (ResourceT IO) ByteString -\u003e RequestBody",
        "fct-type": "function",
        "title": "requestBodySourceChunked"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "requestBodySourceChunked",
        "normalized": "Source(ResourceT IO)ByteString-\u003eRequestBody",
        "package": "http-conduit",
        "partial": "Body Source Chunked",
        "signature": "Source(ResourceT IO)ByteString-\u003eRequestBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:requestBodySourceChunkedIO",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Source IO ByteString -\u003e RequestBody",
        "fct-type": "function",
        "title": "requestBodySourceChunkedIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "requestBodySourceChunkedIO",
        "normalized": "Source IO ByteString-\u003eRequestBody",
        "package": "http-conduit",
        "partial": "Body Source Chunked IO",
        "signature": "Source IO ByteString-\u003eRequestBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:requestBodySourceIO",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Int64 -\u003e Source IO ByteString -\u003e RequestBody",
        "fct-type": "function",
        "title": "requestBodySourceIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "requestBodySourceIO",
        "normalized": "Int-\u003eSource IO ByteString-\u003eRequestBody",
        "package": "http-conduit",
        "partial": "Body Source IO",
        "signature": "Int-\u003eSource IO ByteString-\u003eRequestBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:requestHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eCustom HTTP request headers\n\u003c/p\u003e\u003cp\u003eThe Content-Length and Transfer-Encoding headers are set automatically\n by this module, and shall not be added to \u003ccode\u003erequestHeaders\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf not provided by the user, \u003ccode\u003eHost\u003c/code\u003e will automatically be set based on\n the \u003ccode\u003ehost\u003c/code\u003e and \u003ccode\u003eport\u003c/code\u003e fields.\n\u003c/p\u003e\u003cp\u003eMoreover, the Accept-Encoding header is set implicitly to gzip for\n convenience by default. This behaviour can be overridden if needed, by\n setting the header explicitly to a different value. In order to omit the\n Accept-Header altogether, set it to the empty string \"\". If you need an\n empty Accept-Header (i.e. requesting the identity encoding), set it to a\n non-empty white-space string, e.g. \" \". See RFC 2616 section 14.3 for\n details about the semantics of the Accept-Header field. If you request a\n content-encoding not supported by this module, you will have to decode\n it yourself (see also the \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e field).\n\u003c/p\u003e\u003cp\u003eNote: Multiple header fields with the same field-name will result in\n multiple header fields being sent and therefore it's the responsibility\n of the client code to ensure that the rules from RFC 2616 section 4.2\n are honoured.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e RequestHeaders",
        "fct-type": "function",
        "title": "requestHeaders"
      },
      "index": {
        "description": "Custom HTTP request headers The Content-Length and Transfer-Encoding headers are set automatically by this module and shall not be added to requestHeaders If not provided by the user Host will automatically be set based on the host and port fields Moreover the Accept-Encoding header is set implicitly to gzip for convenience by default This behaviour can be overridden if needed by setting the header explicitly to different value In order to omit the Accept-Header altogether set it to the empty string If you need an empty Accept-Header i.e requesting the identity encoding set it to non-empty white-space string e.g See RFC section for details about the semantics of the Accept-Header field If you request content-encoding not supported by this module you will have to decode it yourself see also the decompress field Note Multiple header fields with the same field-name will result in multiple header fields being sent and therefore it the responsibility of the client code to ensure that the rules from RFC section are honoured Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "requestHeaders",
        "normalized": "Request-\u003eRequestHeaders",
        "package": "http-conduit",
        "partial": "Headers",
        "signature": "Request-\u003eRequestHeaders"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:responseBody",
      "description": {
        "fct-descr": "\u003cp\u003eResponse body sent by the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Response body -\u003e body",
        "fct-type": "function",
        "title": "responseBody"
      },
      "index": {
        "description": "Response body sent by the server Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "responseBody",
        "normalized": "Response a-\u003ea",
        "package": "http-conduit",
        "partial": "Body",
        "signature": "Response body-\u003ebody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:responseCookieJar",
      "description": {
        "fct-descr": "\u003cp\u003eCookies set on the client after interacting with the server. If\n cookies have been disabled by setting \u003ccode\u003e\u003ca\u003ecookieJar\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eNothing\u003c/code\u003e, then\n this will always be empty.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Response body -\u003e CookieJar",
        "fct-type": "function",
        "title": "responseCookieJar"
      },
      "index": {
        "description": "Cookies set on the client after interacting with the server If cookies have been disabled by setting cookieJar to Nothing then this will always be empty Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "responseCookieJar",
        "normalized": "Response a-\u003eCookieJar",
        "package": "http-conduit",
        "partial": "Cookie Jar",
        "signature": "Response body-\u003eCookieJar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:responseHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eResponse headers sent by the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Response body -\u003e ResponseHeaders",
        "fct-type": "function",
        "title": "responseHeaders"
      },
      "index": {
        "description": "Response headers sent by the server Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "responseHeaders",
        "normalized": "Response a-\u003eResponseHeaders",
        "package": "http-conduit",
        "partial": "Headers",
        "signature": "Response body-\u003eResponseHeaders"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:responseStatus",
      "description": {
        "fct-descr": "\u003cp\u003eStatus code of the response.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Response body -\u003e Status",
        "fct-type": "function",
        "title": "responseStatus"
      },
      "index": {
        "description": "Status code of the response Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "responseStatus",
        "normalized": "Response a-\u003eStatus",
        "package": "http-conduit",
        "partial": "Status",
        "signature": "Response body-\u003eStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:responseTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of microseconds to wait for a response. If \u003ccode\u003eNothing\u003c/code\u003e, will wait\n indefinitely. Default: 5 seconds.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Maybe Int",
        "fct-type": "function",
        "title": "responseTimeout"
      },
      "index": {
        "description": "Number of microseconds to wait for response If Nothing will wait indefinitely Default seconds Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "responseTimeout",
        "normalized": "Request-\u003eMaybe Int",
        "package": "http-conduit",
        "partial": "Timeout",
        "signature": "Request-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:responseVersion",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP version used by the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Response body -\u003e HttpVersion",
        "fct-type": "function",
        "title": "responseVersion"
      },
      "index": {
        "description": "HTTP version used by the server Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "responseVersion",
        "normalized": "Response a-\u003eHttpVersion",
        "package": "http-conduit",
        "partial": "Version",
        "signature": "Response body-\u003eHttpVersion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:secure",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to use HTTPS (ie, SSL).\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "Request -\u003e Bool",
        "fct-type": "function",
        "title": "secure"
      },
      "index": {
        "description": "Whether to use HTTPS ie SSL Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "secure",
        "normalized": "Request-\u003eBool",
        "package": "http-conduit",
        "partial": "",
        "signature": "Request-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:simpleHttp",
      "description": {
        "fct-descr": "\u003cp\u003eDownload the specified URL, following any redirects, and\n return the response body.\n\u003c/p\u003e\u003cp\u003eThis function will \u003ccode\u003ethrowIO\u003c/code\u003e an \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e for any\n response with a non-2xx status code (besides 3xx redirects up\n to a limit of 10 redirects). It uses \u003ccode\u003e\u003ca\u003eparseUrl\u003c/a\u003e\u003c/code\u003e to parse the\n input. This function essentially wraps \u003ccode\u003e\u003ca\u003ehttpLbs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: Even though this function returns a lazy bytestring, it\n does \u003cem\u003enot\u003c/em\u003e utilize lazy I/O, and therefore the entire response\n body will live in memory. If you want constant memory usage,\n you'll need to use the \u003ccode\u003econduit\u003c/code\u003e package and \u003ccode\u003e\u003ca\u003ehttp\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e\u003cp\u003eNote: This function creates a new \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e. It should be avoided\n in production code.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "String -\u003e m ByteString",
        "fct-source": "src/Network-HTTP-Conduit.html#simpleHttp",
        "fct-type": "function",
        "title": "simpleHttp"
      },
      "index": {
        "description": "Download the specified URL following any redirects and return the response body This function will throwIO an HttpException for any response with non-2xx status code besides xx redirects up to limit of redirects It uses parseUrl to parse the input This function essentially wraps httpLbs Note Even though this function returns lazy bytestring it does not utilize lazy and therefore the entire response body will live in memory If you want constant memory usage you ll need to use the conduit package and http directly Note This function creates new Manager It should be avoided in production code",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "simpleHttp",
        "normalized": "String-\u003ea ByteString",
        "package": "http-conduit",
        "partial": "Http",
        "signature": "String-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:urlEncodedBody",
      "description": {
        "fct-descr": "\u003cp\u003eAdd url-encoded parameters to the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis sets a new \u003ccode\u003e\u003ca\u003erequestBody\u003c/a\u003e\u003c/code\u003e, adds a content-type request header and\n changes the \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e to POST.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "[(ByteString, ByteString)] -\u003e Request -\u003e Request",
        "fct-type": "function",
        "title": "urlEncodedBody"
      },
      "index": {
        "description": "Add url-encoded parameters to the Request This sets new requestBody adds content-type request header and changes the method to POST Since",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "urlEncodedBody",
        "normalized": "[(ByteString,ByteString)]-\u003eRequest-\u003eRequest",
        "package": "http-conduit",
        "partial": "Encoded Body",
        "signature": "[(ByteString,ByteString)]-\u003eRequest-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:withManager",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "(Manager -\u003e ResourceT m a) -\u003e m a",
        "fct-source": "src/Network-HTTP-Conduit.html#withManager",
        "fct-type": "function",
        "title": "withManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "withManager",
        "normalized": "(Manager-\u003eResourceT a b)-\u003ea b",
        "package": "http-conduit",
        "partial": "Manager",
        "signature": "(Manager-\u003eResourceT m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit/docs/Network-HTTP-Conduit.html#v:withManagerSettings",
      "description": {
        "fct-module": "Network.HTTP.Conduit",
        "fct-package": "http-conduit",
        "fct-signature": "ManagerSettings -\u003e (Manager -\u003e ResourceT m a) -\u003e m a",
        "fct-source": "src/Network-HTTP-Conduit.html#withManagerSettings",
        "fct-type": "function",
        "title": "withManagerSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit",
        "module": "Network.HTTP.Conduit",
        "name": "withManagerSettings",
        "normalized": "ManagerSettings-\u003e(Manager-\u003eResourceT a b)-\u003ea b",
        "package": "http-conduit",
        "partial": "Manager Settings",
        "signature": "ManagerSettings-\u003e(Manager-\u003eResourceT m a)-\u003em a"
      }
    }
  }
]