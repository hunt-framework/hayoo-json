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
        "word": "http-client"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNote that this is essentially the \"kitchen sink\" export module,\n including many functions intended only to be used internally by this\n package. No API stability is guaranteed for this module. If you see\n functions here which you believe should be promoted to a stable API, please\n contact the author.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "Internal",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Note that this is essentially the kitchen sink export module including many functions intended only to be used internally by this package No API stability is guaranteed for this module If you see functions here which you believe should be promoted to stable API please contact the author",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Internal",
          "package": "http-client",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstraction for representing an incoming response body coming from the\n server. Data provided by this abstraction has already been gunzipped and\n de-chunked, and respects any content-length headers present.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "BodyReader",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#BodyReader",
          "type": "data"
        },
        "index": {
          "description": "An abstraction for representing an incoming response body coming from the server Data provided by this abstraction has already been gunzipped and de-chunked and respects any content-length headers present Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "BodyReader",
          "package": "http-client",
          "partial": "Body Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:BodyReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHostname or resolved host address.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "ConnHost",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#ConnHost",
          "type": "data"
        },
        "index": {
          "description": "Hostname or resolved host address",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ConnHost",
          "package": "http-client",
          "partial": "Conn Host",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:ConnHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eConnKey\u003c/code\u003e consists of a hostname, a port and a \u003ccode\u003eBool\u003c/code\u003e\n specifying whether to use SSL.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "ConnKey",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#ConnKey",
          "type": "data"
        },
        "index": {
          "description": "ConnKey consists of hostname port and Bool specifying whether to use SSL",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ConnKey",
          "package": "http-client",
          "partial": "Conn Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:ConnKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "ConnRelease",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#ConnRelease",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ConnRelease",
          "package": "http-client",
          "partial": "Conn Release",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:ConnRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "ConnReuse",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#ConnReuse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ConnReuse",
          "package": "http-client",
          "partial": "Conn Reuse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:ConnReuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "Connection",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Connection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Connection",
          "package": "http-client",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "Cookie",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Cookie",
          "package": "http-client",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "CookieJar",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#CookieJar",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "CookieJar",
          "package": "http-client",
          "partial": "Cookie Jar",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:CookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function which will provide a \u003ccode\u003e\u003ca\u003ePopper\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eNeedsPopper\u003c/a\u003e\u003c/code\u003e. This\n seemingly convoluted structure allows for creation of request bodies which\n allocate scarce resources in an exception safe manner.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "GivesPopper",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#GivesPopper",
          "type": "type"
        },
        "index": {
          "description": "function which will provide Popper to NeedsPopper This seemingly convoluted structure allows for creation of request bodies which allocate scarce resources in an exception safe manner Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "GivesPopper",
          "package": "http-client",
          "partial": "Gives Popper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:GivesPopper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "HttpException",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "HttpException",
          "package": "http-client",
          "partial": "Http Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:HttpException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "ManagedConn",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#ManagedConn",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ManagedConn",
          "package": "http-client",
          "partial": "Managed Conn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:ManagedConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeeps track of open connections for keep-alive.\n\u003c/p\u003e\u003cp\u003eIf possible, you should share a single \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e between multiple threads and requests.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "Manager",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "data"
        },
        "index": {
          "description": "Keeps track of open connections for keep-alive If possible you should share single Manager between multiple threads and requests Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Manager",
          "package": "http-client",
          "partial": "Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:Manager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings for a \u003ccode\u003eManager\u003c/code\u003e. Please use the \u003ccode\u003edefaultManagerSettings\u003c/code\u003e function and then modify\n individual settings. For more information, see \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "ManagerSettings",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#ManagerSettings",
          "type": "data"
        },
        "index": {
          "description": "Settings for Manager Please use the defaultManagerSettings function and then modify individual settings For more information see http www.yesodweb.com book settings-types Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ManagerSettings",
          "package": "http-client",
          "partial": "Manager Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:ManagerSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function which must be provided with a \u003ccode\u003e\u003ca\u003ePopper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "NeedsPopper",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#NeedsPopper",
          "type": "type"
        },
        "index": {
          "description": "function which must be provided with Popper Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "NeedsPopper",
          "package": "http-client",
          "partial": "Needs Popper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:NeedsPopper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "NonEmptyList",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#NonEmptyList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "NonEmptyList",
          "package": "http-client",
          "partial": "Non Empty List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:NonEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function which generates successive chunks of a request body, provider a\n single empty bytestring when no more data is available.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "Popper",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Popper",
          "type": "type"
        },
        "index": {
          "description": "function which generates successive chunks of request body provider single empty bytestring when no more data is available Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Popper",
          "package": "http-client",
          "partial": "Popper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:Popper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a HTTP proxy, consisting of a hostname and port number.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "Proxy",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Proxy",
          "type": "data"
        },
        "index": {
          "description": "Define HTTP proxy consisting of hostname and port number",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Proxy",
          "package": "http-client",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll information on how to connect to a host and what should be sent in the\n HTTP request.\n\u003c/p\u003e\u003cp\u003eIf you simply wish to download from a URL, see \u003ccode\u003eparseUrl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe constructor for this data type is not exposed. Instead, you should use\n either the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e method to retrieve a default instance, or \u003ccode\u003eparseUrl\u003c/code\u003e to\n construct from a URL, and then use the records below to make modifications.\n This approach allows http-client to add configuration options without\n breaking backwards compatibility.\n\u003c/p\u003e\u003cp\u003eFor example, to construct a POST request, you could do something like:\n\u003c/p\u003e\u003cpre\u003e initReq \u003c- parseUrl \"http://www.example.com/path\"\n let req = initReq\n             { method = \"POST\"\n             }\n\u003c/pre\u003e\u003cp\u003eFor more information, please see\n \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "Request",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "data"
        },
        "index": {
          "description": "All information on how to connect to host and what should be sent in the HTTP request If you simply wish to download from URL see parseUrl The constructor for this data type is not exposed Instead you should use either the def method to retrieve default instance or parseUrl to construct from URL and then use the records below to make modifications This approach allows http-client to add configuration options without breaking backwards compatibility For example to construct POST request you could do something like initReq parseUrl http www.example.com path let req initReq method POST For more information please see http www.yesodweb.com book settings-types Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Request",
          "package": "http-client",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen using one of the \u003ccode\u003e\u003ca\u003eRequestBodyStream\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eRequestBodyStreamChunked\u003c/a\u003e\u003c/code\u003e\n constructors, you must ensure that the \u003ccode\u003e\u003ca\u003eGivesPopper\u003c/a\u003e\u003c/code\u003e can be called multiple\n times.  Usually this is not a problem.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRequestBodyStreamChunked\u003c/a\u003e\u003c/code\u003e will send a chunked request body. Note that\n not all servers support this. Only use \u003ccode\u003e\u003ca\u003eRequestBodyStreamChunked\u003c/a\u003e\u003c/code\u003e if you\n know the server you're sending to supports chunked request bodies.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "RequestBody",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#RequestBody",
          "type": "data"
        },
        "index": {
          "description": "When using one of the RequestBodyStream RequestBodyStreamChunked constructors you must ensure that the GivesPopper can be called multiple times Usually this is not problem The RequestBodyStreamChunked will send chunked request body Note that not all servers support this Only use RequestBodyStreamChunked if you know the server you re sending to supports chunked request bodies Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "RequestBody",
          "package": "http-client",
          "partial": "Request Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:RequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple representation of the HTTP response.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "Response",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Response",
          "type": "data"
        },
        "index": {
          "description": "simple representation of the HTTP response Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Response",
          "package": "http-client",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "ResponseClose",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#ResponseClose",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ResponseClose",
          "package": "http-client",
          "partial": "Response Close",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:ResponseClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "StatusHeaders",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#StatusHeaders",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "StatusHeaders",
          "package": "http-client",
          "partial": "Status Headers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#t:StatusHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "(\u003c\u003e)",
          "package": "http-client",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Network-HTTP-Client-Util.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "http-client",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "BodyReader",
          "package": "http-client",
          "signature": "BodyReader",
          "source": "src/Network-HTTP-Client-Types.html#BodyReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "BodyReader",
          "package": "http-client",
          "partial": "Body Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:BodyReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "CJ",
          "package": "http-client",
          "signature": "CJ",
          "source": "src/Network-HTTP-Client-Types.html#CookieJar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "CJ",
          "package": "http-client",
          "partial": "CJ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:CJ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "ConnKey",
          "package": "http-client",
          "signature": "ConnKey !ConnHost !Int !Bool",
          "source": "src/Network-HTTP-Client-Types.html#ConnKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ConnKey",
          "package": "http-client",
          "partial": "Conn Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ConnKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "Connection",
          "package": "http-client",
          "signature": "Connection",
          "source": "src/Network-HTTP-Client-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Connection",
          "package": "http-client",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "Cons",
          "package": "http-client",
          "signature": "Cons !a !Int !UTCTime !(NonEmptyList a)",
          "source": "src/Network-HTTP-Client-Types.html#NonEmptyList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Cons",
          "package": "http-client",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "Cookie",
          "package": "http-client",
          "signature": "Cookie",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Cookie\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:Cookie\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Cookie",
          "package": "http-client",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "DontReuse",
          "package": "http-client",
          "signature": "DontReuse",
          "source": "src/Network-HTTP-Client-Types.html#ConnReuse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "DontReuse",
          "package": "http-client",
          "partial": "Dont Reuse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:DontReuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "ExpectedBlankAfter100Continue",
          "package": "http-client",
          "signature": "ExpectedBlankAfter100Continue",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ExpectedBlankAfter100Continue\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:ExpectedBlankAfter100Continue\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ExpectedBlankAfter100Continue",
          "package": "http-client",
          "partial": "Expected Blank After Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ExpectedBlankAfter100Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehost/port\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "FailedConnectionException",
          "package": "http-client",
          "signature": "FailedConnectionException String Int",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:FailedConnectionException\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:FailedConnectionException\"]"
        },
        "index": {
          "description": "host port",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "FailedConnectionException",
          "package": "http-client",
          "partial": "Failed Connection Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:FailedConnectionException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "Fresh",
          "package": "http-client",
          "signature": "Fresh",
          "source": "src/Network-HTTP-Client-Types.html#ManagedConn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Fresh",
          "package": "http-client",
          "partial": "Fresh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Fresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "HandshakeFailed",
          "package": "http-client",
          "signature": "HandshakeFailed",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:HandshakeFailed\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:HandshakeFailed\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "HandshakeFailed",
          "package": "http-client",
          "partial": "Handshake Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:HandshakeFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "HostAddress",
          "package": "http-client",
          "signature": "HostAddress !HostAddress",
          "source": "src/Network-HTTP-Client-Types.html#ConnHost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "HostAddress",
          "package": "http-client",
          "partial": "Host Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:HostAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "HostName",
          "package": "http-client",
          "signature": "HostName !Text",
          "source": "src/Network-HTTP-Client-Types.html#ConnHost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "HostName",
          "package": "http-client",
          "partial": "Host Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:HostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "HttpParserException",
          "package": "http-client",
          "signature": "HttpParserException String",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:HttpParserException\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:HttpParserException\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "HttpParserException",
          "package": "http-client",
          "partial": "Http Parser Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:HttpParserException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "IncompleteHeaders",
          "package": "http-client",
          "signature": "IncompleteHeaders",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:IncompleteHeaders\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:IncompleteHeaders\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "IncompleteHeaders",
          "package": "http-client",
          "partial": "Incomplete Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:IncompleteHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "InternalIOException",
          "package": "http-client",
          "signature": "InternalIOException IOException",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:InternalIOException\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:InternalIOException\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "InternalIOException",
          "package": "http-client",
          "partial": "Internal IOException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:InternalIOException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince 1.9.4\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "InvalidChunkHeaders",
          "package": "http-client",
          "signature": "InvalidChunkHeaders",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:InvalidChunkHeaders\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:InvalidChunkHeaders\"]"
        },
        "index": {
          "description": "Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "InvalidChunkHeaders",
          "package": "http-client",
          "partial": "Invalid Chunk Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:InvalidChunkHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "InvalidHeader",
          "package": "http-client",
          "signature": "InvalidHeader ByteString",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:InvalidHeader\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:InvalidHeader\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "InvalidHeader",
          "package": "http-client",
          "partial": "Invalid Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:InvalidHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "InvalidStatusLine",
          "package": "http-client",
          "signature": "InvalidStatusLine ByteString",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:InvalidStatusLine\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:InvalidStatusLine\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "InvalidStatusLine",
          "package": "http-client",
          "partial": "Invalid Status Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:InvalidStatusLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "InvalidUrlException",
          "package": "http-client",
          "signature": "InvalidUrlException String String",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:InvalidUrlException\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:InvalidUrlException\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "InvalidUrlException",
          "package": "http-client",
          "partial": "Invalid Url Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:InvalidUrlException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "Manager",
          "package": "http-client",
          "signature": "Manager",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Manager",
          "package": "http-client",
          "partial": "Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Manager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "ManagerSettings",
          "package": "http-client",
          "signature": "ManagerSettings",
          "source": "src/Network-HTTP-Client-Types.html#ManagerSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ManagerSettings",
          "package": "http-client",
          "partial": "Manager Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ManagerSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "NoResponseDataReceived",
          "package": "http-client",
          "signature": "NoResponseDataReceived",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:NoResponseDataReceived\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:NoResponseDataReceived\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "NoResponseDataReceived",
          "package": "http-client",
          "partial": "No Response Data Received",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:NoResponseDataReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "One",
          "package": "http-client",
          "signature": "One !a !UTCTime",
          "source": "src/Network-HTTP-Client-Types.html#NonEmptyList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "One",
          "package": "http-client",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "OverlongHeaders",
          "package": "http-client",
          "signature": "OverlongHeaders",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:OverlongHeaders\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:OverlongHeaders\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "OverlongHeaders",
          "package": "http-client",
          "partial": "Overlong Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:OverlongHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "Proxy",
          "package": "http-client",
          "signature": "Proxy",
          "source": "src/Network-HTTP-Client-Types.html#Proxy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Proxy\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:Proxy\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Proxy",
          "package": "http-client",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehost/port\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "ProxyConnectException",
          "package": "http-client",
          "signature": "ProxyConnectException ByteString Int (Either ByteString HttpException)",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ProxyConnectException\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:ProxyConnectException\"]"
        },
        "index": {
          "description": "host port",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ProxyConnectException",
          "package": "http-client",
          "partial": "Proxy Connect Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ProxyConnectException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "Request",
          "package": "http-client",
          "signature": "Request",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Request",
          "package": "http-client",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "RequestBodyBS",
          "package": "http-client",
          "signature": "RequestBodyBS !ByteString",
          "source": "src/Network-HTTP-Client-Types.html#RequestBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:RequestBodyBS\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:RequestBodyBS\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "RequestBodyBS",
          "package": "http-client",
          "partial": "Request Body BS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:RequestBodyBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "RequestBodyBuilder",
          "package": "http-client",
          "signature": "RequestBodyBuilder !Int64 !Builder",
          "source": "src/Network-HTTP-Client-Types.html#RequestBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:RequestBodyBuilder\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:RequestBodyBuilder\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "RequestBodyBuilder",
          "package": "http-client",
          "partial": "Request Body Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:RequestBodyBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "RequestBodyLBS",
          "package": "http-client",
          "signature": "RequestBodyLBS !ByteString",
          "source": "src/Network-HTTP-Client-Types.html#RequestBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:RequestBodyLBS\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:RequestBodyLBS\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "RequestBodyLBS",
          "package": "http-client",
          "partial": "Request Body LBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:RequestBodyLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "RequestBodyStream",
          "package": "http-client",
          "signature": "RequestBodyStream !Int64 !(GivesPopper ())",
          "source": "src/Network-HTTP-Client-Types.html#RequestBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:RequestBodyStream\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:RequestBodyStream\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "RequestBodyStream",
          "normalized": "RequestBodyStream Int(GivesPopper())",
          "package": "http-client",
          "partial": "Request Body Stream",
          "signature": "RequestBodyStream Int(GivesPopper())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:RequestBodyStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "RequestBodyStreamChunked",
          "package": "http-client",
          "signature": "RequestBodyStreamChunked !(GivesPopper ())",
          "source": "src/Network-HTTP-Client-Types.html#RequestBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:RequestBodyStreamChunked\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:RequestBodyStreamChunked\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "RequestBodyStreamChunked",
          "normalized": "RequestBodyStreamChunked(GivesPopper())",
          "package": "http-client",
          "partial": "Request Body Stream Chunked",
          "signature": "RequestBodyStreamChunked(GivesPopper())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:RequestBodyStreamChunked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "Response",
          "package": "http-client",
          "signature": "Response",
          "source": "src/Network-HTTP-Client-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Response",
          "package": "http-client",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpected size/actual size.\n\u003c/p\u003e\u003cp\u003eSince 1.9.4\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "ResponseBodyTooShort",
          "package": "http-client",
          "signature": "ResponseBodyTooShort Word64 Word64",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ResponseBodyTooShort\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:ResponseBodyTooShort\"]"
        },
        "index": {
          "description": "Expected size actual size Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ResponseBodyTooShort",
          "package": "http-client",
          "partial": "Response Body Too Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ResponseBodyTooShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "ResponseClose",
          "package": "http-client",
          "signature": "ResponseClose",
          "source": "src/Network-HTTP-Client-Types.html#ResponseClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ResponseClose",
          "package": "http-client",
          "partial": "Response Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ResponseClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "ResponseTimeout",
          "package": "http-client",
          "signature": "ResponseTimeout",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ResponseTimeout\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:ResponseTimeout\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "ResponseTimeout",
          "package": "http-client",
          "partial": "Response Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:ResponseTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "Reuse",
          "package": "http-client",
          "signature": "Reuse",
          "source": "src/Network-HTTP-Client-Types.html#ConnReuse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Reuse",
          "package": "http-client",
          "partial": "Reuse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Reuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "Reused",
          "package": "http-client",
          "signature": "Reused",
          "source": "src/Network-HTTP-Client-Types.html#ManagedConn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "Reused",
          "package": "http-client",
          "partial": "Reused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:Reused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "StatusCodeException",
          "package": "http-client",
          "signature": "StatusCodeException Status ResponseHeaders CookieJar",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:StatusCodeException\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:StatusCodeException\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "StatusCodeException",
          "package": "http-client",
          "partial": "Status Code Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:StatusCodeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "StatusHeaders",
          "package": "http-client",
          "signature": "StatusHeaders !Status !HttpVersion !RequestHeaders",
          "source": "src/Network-HTTP-Client-Types.html#StatusHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "StatusHeaders",
          "package": "http-client",
          "partial": "Status Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:StatusHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "TlsException",
          "package": "http-client",
          "signature": "TlsException SomeException",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:TlsException\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:TlsException\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "TlsException",
          "package": "http-client",
          "partial": "Tls Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:TlsException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "TlsNotSupported",
          "package": "http-client",
          "signature": "TlsNotSupported",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:TlsNotSupported\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:TlsNotSupported\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "TlsNotSupported",
          "package": "http-client",
          "partial": "Tls Not Supported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:TlsNotSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of encountered responses containing redirects in reverse chronological order; including last redirect, which triggered the exception and was not followed.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "TooManyRedirects",
          "package": "http-client",
          "signature": "TooManyRedirects [Response ByteString]",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:TooManyRedirects\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:TooManyRedirects\"]"
        },
        "index": {
          "description": "List of encountered responses containing redirects in reverse chronological order including last redirect which triggered the exception and was not followed",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "TooManyRedirects",
          "normalized": "TooManyRedirects[Response ByteString]",
          "package": "http-client",
          "partial": "Too Many Redirects",
          "signature": "TooManyRedirects[Response ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:TooManyRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "TooManyRetries",
          "package": "http-client",
          "signature": "TooManyRetries",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:TooManyRetries\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:TooManyRetries\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "TooManyRetries",
          "package": "http-client",
          "partial": "Too Many Retries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:TooManyRetries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse containing unparseable redirect.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "UnparseableRedirect",
          "package": "http-client",
          "signature": "UnparseableRedirect (Response ByteString)",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:UnparseableRedirect\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:UnparseableRedirect\"]"
        },
        "index": {
          "description": "Response containing unparseable redirect",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "UnparseableRedirect",
          "package": "http-client",
          "partial": "Unparseable Redirect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:UnparseableRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a proxy to the Request so that the Request when executed will use\n the provided proxy.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "addProxy",
          "package": "http-client",
          "signature": "ByteString -\u003e Int -\u003e Request -\u003e Request",
          "source": "src/Network-HTTP-Client-Request.html#addProxy",
          "type": "function"
        },
        "index": {
          "description": "Add proxy to the Request so that the Request when executed will use the provided proxy Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "addProxy",
          "normalized": "ByteString-\u003eInt-\u003eRequest-\u003eRequest",
          "package": "http-client",
          "partial": "Proxy",
          "signature": "ByteString-\u003eInt-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:addProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways decompress a compressed stream.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "alwaysDecompress",
          "package": "http-client",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Network-HTTP-Client-Request.html#alwaysDecompress",
          "type": "function"
        },
        "index": {
          "description": "Always decompress compressed stream",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "alwaysDecompress",
          "normalized": "ByteString-\u003eBool",
          "package": "http-client",
          "partial": "Decompress",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:alwaysDecompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a Basic Auth header (with the specified user name and password) to the\n given Request. Ignore error handling:\n\u003c/p\u003e\u003cpre\u003e  applyBasicAuth \"user\" \"pass\" $ fromJust $ parseUrl url\n\u003c/pre\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "applyBasicAuth",
          "package": "http-client",
          "signature": "ByteString -\u003e ByteString -\u003e Request -\u003e Request",
          "source": "src/Network-HTTP-Client-Request.html#applyBasicAuth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:applyBasicAuth\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:applyBasicAuth\"]"
        },
        "index": {
          "description": "Add Basic Auth header with the specified user name and password to the given Request Ignore error handling applyBasicAuth user pass fromJust parseUrl url Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "applyBasicAuth",
          "normalized": "ByteString-\u003eByteString-\u003eRequest-\u003eRequest",
          "package": "http-client",
          "partial": "Basic Auth",
          "signature": "ByteString-\u003eByteString-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:applyBasicAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply 'Request'\\'s \u003ccode\u003e\u003ca\u003echeckStatus\u003c/a\u003e\u003c/code\u003e and return resulting exception if any.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "applyCheckStatus",
          "package": "http-client",
          "signature": "(Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException) -\u003e Response BodyReader -\u003e IO (Maybe SomeException)",
          "source": "src/Network-HTTP-Client-Core.html#applyCheckStatus",
          "type": "function"
        },
        "index": {
          "description": "Apply Request checkStatus and return resulting exception if any",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "applyCheckStatus",
          "normalized": "(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)-\u003eResponse BodyReader-\u003eIO(Maybe SomeException)",
          "package": "http-client",
          "partial": "Check Status",
          "signature": "(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)-\u003eResponse BodyReader-\u003eIO(Maybe SomeException)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:applyCheckStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "brAddCleanup",
          "package": "http-client",
          "signature": "IO () -\u003e BodyReader -\u003e BodyReader",
          "source": "src/Network-HTTP-Client-Body.html#brAddCleanup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "brAddCleanup",
          "normalized": "IO()-\u003eBodyReader-\u003eBodyReader",
          "package": "http-client",
          "partial": "Add Cleanup",
          "signature": "IO()-\u003eBodyReader-\u003eBodyReader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:brAddCleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "brComplete",
          "package": "http-client",
          "signature": "(IO Bool)",
          "source": "src/Network-HTTP-Client-Types.html#BodyReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "brComplete",
          "package": "http-client",
          "partial": "Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:brComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrictly consume all remaining chunks of data from the stream.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "brConsume",
          "package": "http-client",
          "signature": "BodyReader -\u003e IO [ByteString]",
          "source": "src/Network-HTTP-Client-Body.html#brConsume",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:brConsume\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:brConsume\"]"
        },
        "index": {
          "description": "Strictly consume all remaining chunks of data from the stream Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "brConsume",
          "normalized": "BodyReader-\u003eIO[ByteString]",
          "package": "http-client",
          "partial": "Consume",
          "signature": "BodyReader-\u003eIO[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:brConsume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "brEmpty",
          "package": "http-client",
          "signature": "BodyReader",
          "source": "src/Network-HTTP-Client-Body.html#brEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "brEmpty",
          "package": "http-client",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:brEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a single chunk of data from the response body, or an empty\n bytestring if no more data is available.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "brRead",
          "package": "http-client",
          "signature": "(IO ByteString)",
          "source": "src/Network-HTTP-Client-Types.html#BodyReader",
          "type": "function"
        },
        "index": {
          "description": "Get single chunk of data from the response body or an empty bytestring if no more data is available Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "brRead",
          "package": "http-client",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:brRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "brReadSome",
          "package": "http-client",
          "signature": "BodyReader -\u003e Int -\u003e IO ByteString",
          "source": "src/Network-HTTP-Client-Body.html#brReadSome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "brReadSome",
          "normalized": "BodyReader-\u003eInt-\u003eIO ByteString",
          "package": "http-client",
          "partial": "Read Some",
          "signature": "BodyReader-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:brReadSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress a compressed stream unless the content-type is 'application/x-tar'.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "browserDecompress",
          "package": "http-client",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Network-HTTP-Client-Request.html#browserDecompress",
          "type": "function"
        },
        "index": {
          "description": "Decompress compressed stream unless the content-type is application x-tar",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "browserDecompress",
          "normalized": "ByteString-\u003eBool",
          "package": "http-client",
          "partial": "Decompress",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:browserDecompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the status code. Note that this will run after all redirects are\n performed. Default: return a \u003ccode\u003eStatusCodeException\u003c/code\u003e on non-2XX responses.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "checkStatus",
          "package": "http-client",
          "signature": "Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Check the status code Note that this will run after all redirects are performed Default return StatusCodeException on non-2XX responses Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "checkStatus",
          "normalized": "Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException",
          "package": "http-client",
          "partial": "Status",
          "signature": "Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:checkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose all connections in a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this doesn't affect currently in-flight connections,\n meaning you can safely use it without hurting any queries you may\n have concurrently running.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "closeManager",
          "package": "http-client",
          "signature": "Manager -\u003e IO ()",
          "source": "src/Network-HTTP-Client-Manager.html#closeManager",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:closeManager\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:closeManager\"]"
        },
        "index": {
          "description": "Close all connections in Manager Note that this doesn affect currently in-flight connections meaning you can safely use it without hurting any queries you may have concurrently running Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "closeManager",
          "normalized": "Manager-\u003eIO()",
          "package": "http-client",
          "partial": "Manager",
          "signature": "Manager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:closeManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis corresponds to the algorithm described in Section 5.4 \"The Cookie Header\"\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "computeCookieString",
          "package": "http-client",
          "signature": "Request-\u003e CookieJar-\u003e UTCTime-\u003e Bool-\u003e (ByteString, CookieJar)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:computeCookieString\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:computeCookieString\"]"
        },
        "index": {
          "description": "This corresponds to the algorithm described in Section The Cookie Header",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "computeCookieString",
          "normalized": "Request-\u003eCookieJar-\u003eUTCTime-\u003eBool-\u003e(ByteString,CookieJar)",
          "package": "http-client",
          "partial": "Cookie String",
          "signature": "Request-\u003eCookieJar-\u003eUTCTime-\u003eBool-\u003e(ByteString,CookieJar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:computeCookieString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionClose",
          "package": "http-client",
          "signature": "(IO ())",
          "source": "src/Network-HTTP-Client-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionClose",
          "normalized": "(IO())",
          "package": "http-client",
          "partial": "Close",
          "signature": "(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:connectionClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf no more data, return empty.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionRead",
          "package": "http-client",
          "signature": "(IO ByteString)",
          "source": "src/Network-HTTP-Client-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "If no more data return empty",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionRead",
          "package": "http-client",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:connectionRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionReadLine",
          "package": "http-client",
          "signature": "Connection -\u003e IO ByteString",
          "source": "src/Network-HTTP-Client-Connection.html#connectionReadLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionReadLine",
          "normalized": "Connection-\u003eIO ByteString",
          "package": "http-client",
          "partial": "Read Line",
          "signature": "Connection-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:connectionReadLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionReadLineWith",
          "package": "http-client",
          "signature": "Connection -\u003e ByteString -\u003e IO ByteString",
          "source": "src/Network-HTTP-Client-Connection.html#connectionReadLineWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionReadLineWith",
          "normalized": "Connection-\u003eByteString-\u003eIO ByteString",
          "package": "http-client",
          "partial": "Read Line With",
          "signature": "Connection-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:connectionReadLineWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn data to be read next time.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionUnread",
          "package": "http-client",
          "signature": "(ByteString -\u003e IO ())",
          "source": "src/Network-HTTP-Client-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "Return data to be read next time",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionUnread",
          "normalized": "(ByteString-\u003eIO())",
          "package": "http-client",
          "partial": "Unread",
          "signature": "(ByteString-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:connectionUnread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend data to server\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionWrite",
          "package": "http-client",
          "signature": "(ByteString -\u003e IO ())",
          "source": "src/Network-HTTP-Client-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "Send data to server",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "connectionWrite",
          "normalized": "(ByteString-\u003eIO())",
          "package": "http-client",
          "partial": "Write",
          "signature": "(ByteString-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:connectionWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA user-defined cookie jar.\n If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, no cookie handling will take place, \"Cookie\" headers\n in \u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e will be sent raw, and \u003ccode\u003e\u003ca\u003eresponseCookieJar\u003c/a\u003e\u003c/code\u003e will be\n empty.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookieJar",
          "package": "http-client",
          "signature": "Maybe CookieJar",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "user-defined cookie jar If Nothing no cookie handling will take place Cookie headers in requestHeaders will be sent raw and responseCookieJar will be empty Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookieJar",
          "package": "http-client",
          "partial": "Jar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_creation_time",
          "package": "http-client",
          "signature": "UTCTime",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_creation_time\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_creation_time\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_creation_time",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_creation_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_domain",
          "package": "http-client",
          "signature": "ByteString",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_domain\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_domain\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_domain",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_expiry_time",
          "package": "http-client",
          "signature": "UTCTime",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_expiry_time\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_expiry_time\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_expiry_time",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_expiry_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_host_only",
          "package": "http-client",
          "signature": "Bool",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_host_only\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_host_only\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_host_only",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_host_only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_http_only",
          "package": "http-client",
          "signature": "Bool",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_http_only\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_http_only\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_http_only",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_http_only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_last_access_time",
          "package": "http-client",
          "signature": "UTCTime",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_last_access_time\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_last_access_time\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_last_access_time",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_last_access_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_name",
          "package": "http-client",
          "signature": "ByteString",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_name\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_name\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_name",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_path",
          "package": "http-client",
          "signature": "ByteString",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_path\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_path\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_path",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_persistent",
          "package": "http-client",
          "signature": "Bool",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_persistent\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_persistent\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_persistent",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_persistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_secure_only",
          "package": "http-client",
          "signature": "Bool",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_secure_only\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_secure_only\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_secure_only",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_secure_only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "cookie_value",
          "package": "http-client",
          "signature": "ByteString",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_value\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookie_value\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "cookie_value",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:cookie_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "createCookieJar",
          "package": "http-client",
          "signature": "[Cookie] -\u003e CookieJar",
          "source": "src/Network-HTTP-Client-Cookies.html#createCookieJar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:createCookieJar\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:createCookieJar\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "createCookieJar",
          "normalized": "[Cookie]-\u003eCookieJar",
          "package": "http-client",
          "partial": "Cookie Jar",
          "signature": "[Cookie]-\u003eCookieJar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:createCookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to specify whether gzipped data should be\n decompressed on the fly (see \u003ccode\u003ealwaysDecompress\u003c/code\u003e and\n \u003ccode\u003ebrowserDecompress\u003c/code\u003e). Argument is the mime type.\n Default: browserDecompress.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "decompress",
          "package": "http-client",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Predicate to specify whether gzipped data should be decompressed on the fly see alwaysDecompress and browserDecompress Argument is the mime type Default browserDecompress Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "decompress",
          "normalized": "ByteString-\u003eBool",
          "package": "http-client",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value for \u003ccode\u003eManagerSettings\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "defaultManagerSettings",
          "package": "http-client",
          "signature": "ManagerSettings",
          "source": "src/Network-HTTP-Client-Manager.html#defaultManagerSettings",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:defaultManagerSettings\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:defaultManagerSettings\"]"
        },
        "index": {
          "description": "Default value for ManagerSettings Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "defaultManagerSettings",
          "package": "http-client",
          "partial": "Manager Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:defaultManagerSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis corresponds to the subcomponent algorithm entitled \"Paths\" detailed\n in section 5.1.4\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "defaultPath",
          "package": "http-client",
          "signature": "Request -\u003e ByteString",
          "source": "src/Network-HTTP-Client-Cookies.html#defaultPath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:defaultPath\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:defaultPath\"]"
        },
        "index": {
          "description": "This corresponds to the subcomponent algorithm entitled Paths detailed in section",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "defaultPath",
          "normalized": "Request-\u003eByteString",
          "package": "http-client",
          "partial": "Path",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:defaultPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "destroyCookieJar",
          "package": "http-client",
          "signature": "CookieJar -\u003e [Cookie]",
          "source": "src/Network-HTTP-Client-Cookies.html#destroyCookieJar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:destroyCookieJar\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:destroyCookieJar\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "destroyCookieJar",
          "normalized": "CookieJar-\u003e[Cookie]",
          "package": "http-client",
          "partial": "Cookie Jar",
          "signature": "CookieJar-\u003e[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:destroyCookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis corresponds to the subcomponent algorithm entitled \"Domain Matching\" detailed\n in section 5.1.3\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "domainMatches",
          "package": "http-client",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Network-HTTP-Client-Cookies.html#domainMatches",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:domainMatches\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:domainMatches\"]"
        },
        "index": {
          "description": "This corresponds to the subcomponent algorithm entitled Domain Matching detailed in section",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "domainMatches",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "http-client",
          "partial": "Matches",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:domainMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor testing\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "dummyConnection",
          "package": "http-client",
          "signature": "[ByteString]-\u003e IO (Connection, IO [ByteString], IO [ByteString])",
          "type": "function"
        },
        "index": {
          "description": "For testing",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "dummyConnection",
          "normalized": "[ByteString]-\u003eIO(Connection,IO[ByteString],IO[ByteString])",
          "package": "http-client",
          "partial": "Connection",
          "signature": "[ByteString]-\u003eIO(Connection,IO[ByteString],IO[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:dummyConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis corresponds to the eviction algorithm described in Section 5.3 \"Storage Model\"\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "evictExpiredCookies",
          "package": "http-client",
          "signature": "CookieJar-\u003e UTCTime-\u003e CookieJar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:evictExpiredCookies\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:evictExpiredCookies\"]"
        },
        "index": {
          "description": "This corresponds to the eviction algorithm described in Section Storage Model",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "evictExpiredCookies",
          "normalized": "CookieJar-\u003eUTCTime-\u003eCookieJar",
          "package": "http-client",
          "partial": "Expired Cookies",
          "signature": "CookieJar-\u003eUTCTime-\u003eCookieJar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:evictExpiredCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "expose",
          "package": "http-client",
          "signature": "[Cookie]",
          "source": "src/Network-HTTP-Client-Types.html#CookieJar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "expose",
          "normalized": "[Cookie]",
          "package": "http-client",
          "signature": "[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:expose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an exception to be thrown if the connection for the given request\n fails.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "failedConnectionException",
          "package": "http-client",
          "signature": "Request -\u003e HttpException",
          "source": "src/Network-HTTP-Client-Manager.html#failedConnectionException",
          "type": "function"
        },
        "index": {
          "description": "Create an exception to be thrown if the connection for the given request fails",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "failedConnectionException",
          "normalized": "Request-\u003eHttpException",
          "package": "http-client",
          "partial": "Connection Exception",
          "signature": "Request-\u003eHttpException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:failedConnectionException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "fromStrict",
          "package": "http-client",
          "signature": "ByteString -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert strict ByteString into lazy ByteString",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "fromStrict",
          "normalized": "ByteString-\u003eByteString",
          "package": "http-client",
          "partial": "Strict",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:fromStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a SetCookie into a Cookie, if it is valid\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "generateCookie",
          "package": "http-client",
          "signature": "SetCookie-\u003e Request-\u003e UTCTime-\u003e Bool-\u003e Maybe Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:generateCookie\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:generateCookie\"]"
        },
        "index": {
          "description": "Turn SetCookie into Cookie if it is valid",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "generateCookie",
          "normalized": "SetCookie-\u003eRequest-\u003eUTCTime-\u003eBool-\u003eMaybe Cookie",
          "package": "http-client",
          "partial": "Cookie",
          "signature": "SetCookie-\u003eRequest-\u003eUTCTime-\u003eBool-\u003eMaybe Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:generateCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "getConn",
          "package": "http-client",
          "signature": "Request -\u003e Manager -\u003e IO (ConnRelease, Connection, ManagedConn)",
          "source": "src/Network-HTTP-Client-Manager.html#getConn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "getConn",
          "normalized": "Request-\u003eManager-\u003eIO(ConnRelease,Connection,ManagedConn)",
          "package": "http-client",
          "partial": "Conn",
          "signature": "Request-\u003eManager-\u003eIO(ConnRelease,Connection,ManagedConn)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:getConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps the calls for getting new connections. This can be useful for\n instituting some kind of timeouts. The first argument is the value of\n \u003ccode\u003eresponseTimeout\u003c/code\u003e. Second argument is the exception to be thrown on\n failure.\n\u003c/p\u003e\u003cp\u003eDefault: If \u003ccode\u003eresponseTimeout\u003c/code\u003e is \u003ccode\u003eNothing\u003c/code\u003e, does nothing. Otherwise,\n institutes timeout, and returns remaining time for \u003ccode\u003eresponseTimeout\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "getConnectionWrapper",
          "package": "http-client",
          "signature": "Maybe Int -\u003e HttpException -\u003e IO (ConnRelease, Connection, ManagedConn) -\u003e IO (Maybe Int, (ConnRelease, Connection, ManagedConn))",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Wraps the calls for getting new connections This can be useful for instituting some kind of timeouts The first argument is the value of responseTimeout Second argument is the exception to be thrown on failure Default If responseTimeout is Nothing does nothing Otherwise institutes timeout and returns remaining time for responseTimeout Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "getConnectionWrapper",
          "normalized": "Maybe Int-\u003eHttpException-\u003eIO(ConnRelease,Connection,ManagedConn)-\u003eIO(Maybe Int,(ConnRelease,Connection,ManagedConn))",
          "package": "http-client",
          "partial": "Connection Wrapper",
          "signature": "Maybe Int-\u003eHttpException-\u003eIO(ConnRelease,Connection,ManagedConn)-\u003eIO(Maybe Int,(ConnRelease,Connection,ManagedConn))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:getConnectionWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a request is a redirection (status code 3xx) this function will create\n a new request from the old request, the server headers returned with the\n redirection, and the redirection code itself. This function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if the code is not a 3xx, there is no \u003ccode\u003elocation\u003c/code\u003e header included, or if the\n redirected response couldn't be parsed with \u003ccode\u003e\u003ca\u003eparseUrl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf a user of this library wants to know the url chain that results from a\n specific request, that user has to re-implement the redirect-following logic\n themselves. An example of that might look like this:\n\u003c/p\u003e\u003cpre\u003e myHttp req man = do\n    (res, redirectRequests) \u003c- (`runStateT` []) $\n         'httpRedirect'\n             9000\n             (\\req' -\u003e do\n                res \u003c- http req'{redirectCount=0} man\n                modify (\\rqs -\u003e req' : rqs)\n                return (res, getRedirectedRequest req' (responseHeaders res) (responseCookieJar res) (W.statusCode (responseStatus res))\n                )\n             'lift'\n             req\n    applyCheckStatus (checkStatus req) res\n    return redirectRequests\n\u003c/pre\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "getRedirectedRequest",
          "package": "http-client",
          "signature": "Request -\u003e ResponseHeaders -\u003e CookieJar -\u003e Int -\u003e Maybe Request",
          "source": "src/Network-HTTP-Client-Response.html#getRedirectedRequest",
          "type": "function"
        },
        "index": {
          "description": "If request is redirection status code xx this function will create new request from the old request the server headers returned with the redirection and the redirection code itself This function returns Nothing if the code is not xx there is no location header included or if the redirected response couldn be parsed with parseUrl If user of this library wants to know the url chain that results from specific request that user has to re-implement the redirect-following logic themselves An example of that might look like this myHttp req man do res redirectRequests runStateT httpRedirect req do res http req redirectCount man modify rqs req rqs return res getRedirectedRequest req responseHeaders res responseCookieJar res W.statusCode responseStatus res lift req applyCheckStatus checkStatus req res return redirectRequests",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "getRedirectedRequest",
          "normalized": "Request-\u003eResponseHeaders-\u003eCookieJar-\u003eInt-\u003eMaybe Request",
          "package": "http-client",
          "partial": "Redirected Request",
          "signature": "Request-\u003eResponseHeaders-\u003eCookieJar-\u003eInt-\u003eMaybe Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:getRedirectedRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "getResponse",
          "package": "http-client",
          "signature": "ConnRelease -\u003e Maybe Int -\u003e Request -\u003e Connection -\u003e IO (Response BodyReader)",
          "source": "src/Network-HTTP-Client-Response.html#getResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "getResponse",
          "normalized": "ConnRelease-\u003eMaybe Int-\u003eRequest-\u003eConnection-\u003eIO(Response BodyReader)",
          "package": "http-client",
          "partial": "Response",
          "signature": "ConnRelease-\u003eMaybe Int-\u003eRequest-\u003eConnection-\u003eIO(Response BodyReader)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:getResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e from the request.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "getUri",
          "package": "http-client",
          "signature": "Request -\u003e URI",
          "source": "src/Network-HTTP-Client-Request.html#getUri",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:getUri\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:getUri\"]"
        },
        "index": {
          "description": "Extract URI from the request Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "getUri",
          "normalized": "Request-\u003eURI",
          "package": "http-client",
          "partial": "Uri",
          "signature": "Request-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:getUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that a shorter \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e may be returned\n if there are not enough bytes immediately available to satisfy the\n whole request.  \u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e only blocks if there is no data\n available, and EOF has not yet been reached.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "hGetSome",
          "package": "http-client",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Like hGet except that shorter ByteString may be returned if there are not enough bytes immediately available to satisfy the whole request hGetSome only blocks if there is no data available and EOF has not yet been reached",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "hGetSome",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "http-client",
          "partial": "Get Some",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:hGetSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "hasNoBody",
          "package": "http-client",
          "signature": "ByteString-\u003e Int-\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "hasNoBody",
          "normalized": "ByteString-\u003eInt-\u003eBool",
          "package": "http-client",
          "partial": "No Body",
          "signature": "ByteString-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:hasNoBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequested host name, used for both the IP address to connect to and\n the \u003ccode\u003ehost\u003c/code\u003e request header.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "host",
          "package": "http-client",
          "signature": "ByteString",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Requested host name used for both the IP address to connect to and the host request header Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "host",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional resolved host address. May not be used by all backends.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "hostAddress",
          "package": "http-client",
          "signature": "Maybe HostAddress",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Optional resolved host address May not be used by all backends Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "hostAddress",
          "package": "http-client",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:hostAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience wrapper around \u003ccode\u003e\u003ca\u003ewithResponse\u003c/a\u003e\u003c/code\u003e which reads in the entire\n response body and immediately closes the connection. Note that this function\n performs fully strict I/O, and only uses a lazy ByteString in its response\n for memory efficiency. If you are anticipating a large response body, you\n are encouraged to use \u003ccode\u003e\u003ca\u003ewithResponse\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebrRead\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "httpLbs",
          "package": "http-client",
          "signature": "Request -\u003e Manager -\u003e IO (Response ByteString)",
          "source": "src/Network-HTTP-Client-Core.html#httpLbs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:httpLbs\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:httpLbs\"]"
        },
        "index": {
          "description": "convenience wrapper around withResponse which reads in the entire response body and immediately closes the connection Note that this function performs fully strict and only uses lazy ByteString in its response for memory efficiency If you are anticipating large response body you are encouraged to use withResponse and brRead instead Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "httpLbs",
          "normalized": "Request-\u003eManager-\u003eIO(Response ByteString)",
          "package": "http-client",
          "partial": "Lbs",
          "signature": "Request-\u003eManager-\u003eIO(Response ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:httpLbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e without any redirect following.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "httpRaw",
          "package": "http-client",
          "signature": "Request -\u003e Manager -\u003e IO (Response BodyReader)",
          "source": "src/Network-HTTP-Client-Core.html#httpRaw",
          "type": "function"
        },
        "index": {
          "description": "Get Response without any redirect following",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "httpRaw",
          "normalized": "Request-\u003eManager-\u003eIO(Response BodyReader)",
          "package": "http-client",
          "partial": "Raw",
          "signature": "Request-\u003eManager-\u003eIO(Response BodyReader)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:httpRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect loop\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "httpRedirect",
          "package": "http-client",
          "signature": "Int-\u003e (Request -\u003e IO (Response BodyReader, Maybe Request))-\u003e Request-\u003e IO (Response BodyReader)",
          "type": "function"
        },
        "index": {
          "description": "Redirect loop",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "httpRedirect",
          "normalized": "Int-\u003e(Request-\u003eIO(Response BodyReader,Maybe Request))-\u003eRequest-\u003eIO(Response BodyReader)",
          "package": "http-client",
          "partial": "Redirect",
          "signature": "Int-\u003e(Request-\u003eIO(Response BodyReader,Maybe Request))-\u003eRequest-\u003eIO(Response BodyReader)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:httpRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a cookie created by generateCookie into the cookie jar (or not if it shouldn't be allowed in)\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "insertCheckedCookie",
          "package": "http-client",
          "signature": "Cookie-\u003e CookieJar-\u003e Bool-\u003e CookieJar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:insertCheckedCookie\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:insertCheckedCookie\"]"
        },
        "index": {
          "description": "Insert cookie created by generateCookie into the cookie jar or not if it shouldn be allowed in",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "insertCheckedCookie",
          "normalized": "Cookie-\u003eCookieJar-\u003eBool-\u003eCookieJar",
          "package": "http-client",
          "partial": "Checked Cookie",
          "signature": "Cookie-\u003eCookieJar-\u003eBool-\u003eCookieJar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:insertCheckedCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis applies the \u003ccode\u003e\u003ca\u003ecomputeCookieString\u003c/a\u003e\u003c/code\u003e to a given Request\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "insertCookiesIntoRequest",
          "package": "http-client",
          "signature": "Request-\u003e CookieJar-\u003e UTCTime-\u003e (Request, CookieJar)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:insertCookiesIntoRequest\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:insertCookiesIntoRequest\"]"
        },
        "index": {
          "description": "This applies the computeCookieString to given Request",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "insertCookiesIntoRequest",
          "normalized": "Request-\u003eCookieJar-\u003eUTCTime-\u003e(Request,CookieJar)",
          "package": "http-client",
          "partial": "Cookies Into Request",
          "signature": "Request-\u003eCookieJar-\u003eUTCTime-\u003e(Request,CookieJar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:insertCookiesIntoRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "isIpAddress",
          "package": "http-client",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Network-HTTP-Client-Cookies.html#isIpAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:isIpAddress\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:isIpAddress\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "isIpAddress",
          "normalized": "ByteString-\u003eBool",
          "package": "http-client",
          "partial": "Ip Address",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:isIpAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e that has a \u003ccode\u003eSource\u003c/code\u003e body to one with a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e body.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "lbsResponse",
          "package": "http-client",
          "signature": "Response BodyReader -\u003e IO (Response ByteString)",
          "source": "src/Network-HTTP-Client-Response.html#lbsResponse",
          "type": "function"
        },
        "index": {
          "description": "Convert Response that has Source body to one with lazy ByteString body",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "lbsResponse",
          "normalized": "Response BodyReader-\u003eIO(Response ByteString)",
          "package": "http-client",
          "partial": "Response",
          "signature": "Response BodyReader-\u003eIO(Response ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:lbsResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNothing\u003c/code\u003e indicates that the manager is closed.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "mConns",
          "package": "http-client",
          "signature": "(IORef (Maybe (Map ConnKey (NonEmptyList Connection))))",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "function"
        },
        "index": {
          "description": "Nothing indicates that the manager is closed",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "mConns",
          "package": "http-client",
          "partial": "Conns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:mConns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a per-\u003ccode\u003eConnKey\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "mMaxConns",
          "package": "http-client",
          "signature": "Int",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "function"
        },
        "index": {
          "description": "This is per ConnKey value",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "mMaxConns",
          "package": "http-client",
          "partial": "Max Conns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:mMaxConns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "mRawConnection",
          "package": "http-client",
          "signature": "(Maybe HostAddress -\u003e String -\u003e Int -\u003e IO Connection)",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "mRawConnection",
          "normalized": "(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "package": "http-client",
          "partial": "Raw Connection",
          "signature": "(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:mRawConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopied from \u003ccode\u003e\u003ca\u003emanagerResponseTimeout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "mResponseTimeout",
          "package": "http-client",
          "signature": "(Maybe Int)",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "function"
        },
        "index": {
          "description": "Copied from managerResponseTimeout",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "mResponseTimeout",
          "package": "http-client",
          "partial": "Response Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:mResponseTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "mRetryableException",
          "package": "http-client",
          "signature": "(SomeException -\u003e Bool)",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "mRetryableException",
          "normalized": "(SomeException-\u003eBool)",
          "package": "http-client",
          "partial": "Retryable Exception",
          "signature": "(SomeException-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:mRetryableException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "mTlsConnection",
          "package": "http-client",
          "signature": "(Maybe HostAddress -\u003e String -\u003e Int -\u003e IO Connection)",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "mTlsConnection",
          "normalized": "(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "package": "http-client",
          "partial": "Tls Connection",
          "signature": "(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:mTlsConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "mTlsProxyConnection",
          "package": "http-client",
          "signature": "(ByteString -\u003e (Connection -\u003e IO ()) -\u003e Maybe HostAddress -\u003e String -\u003e Int -\u003e IO Connection)",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "mTlsProxyConnection",
          "normalized": "(ByteString-\u003e(Connection-\u003eIO())-\u003eMaybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "package": "http-client",
          "partial": "Tls Proxy Connection",
          "signature": "(ByteString-\u003e(Connection-\u003eIO())-\u003eMaybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:mTlsProxyConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "mWrapIOException",
          "package": "http-client",
          "signature": "(forall a.  IO a -\u003e IO a)",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "mWrapIOException",
          "normalized": "(a b IO c-\u003eIO c)",
          "package": "http-client",
          "partial": "Wrap IOException",
          "signature": "(forall a. IO a-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:mWrapIOException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "makeChunkedReader",
          "package": "http-client",
          "signature": "Bool-\u003e Connection-\u003e IO BodyReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "makeChunkedReader",
          "normalized": "Bool-\u003eConnection-\u003eIO BodyReader",
          "package": "http-client",
          "partial": "Chunked Reader",
          "signature": "Bool-\u003eConnection-\u003eIO BodyReader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:makeChunkedReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "makeConnection",
          "package": "http-client",
          "signature": "IO ByteString-\u003e (ByteString -\u003e IO ())-\u003e IO ()-\u003e IO Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "makeConnection",
          "normalized": "IO ByteString-\u003e(ByteString-\u003eIO())-\u003eIO()-\u003eIO Connection",
          "package": "http-client",
          "partial": "Connection",
          "signature": "IO ByteString-\u003e(ByteString-\u003eIO())-\u003eIO()-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:makeConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "makeGzipReader",
          "package": "http-client",
          "signature": "BodyReader -\u003e IO BodyReader",
          "source": "src/Network-HTTP-Client-Body.html#makeGzipReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "makeGzipReader",
          "normalized": "BodyReader-\u003eIO BodyReader",
          "package": "http-client",
          "partial": "Gzip Reader",
          "signature": "BodyReader-\u003eIO BodyReader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:makeGzipReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "makeLengthReader",
          "package": "http-client",
          "signature": "Int -\u003e Connection -\u003e IO BodyReader",
          "source": "src/Network-HTTP-Client-Body.html#makeLengthReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "makeLengthReader",
          "normalized": "Int-\u003eConnection-\u003eIO BodyReader",
          "package": "http-client",
          "partial": "Length Reader",
          "signature": "Int-\u003eConnection-\u003eIO BodyReader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:makeLengthReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "makeUnlimitedReader",
          "package": "http-client",
          "signature": "Connection -\u003e IO BodyReader",
          "source": "src/Network-HTTP-Client-Body.html#makeUnlimitedReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "makeUnlimitedReader",
          "normalized": "Connection-\u003eIO BodyReader",
          "package": "http-client",
          "partial": "Unlimited Reader",
          "signature": "Connection-\u003eIO BodyReader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:makeUnlimitedReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of connections to a single host to keep alive. Default: 10.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerConnCount",
          "package": "http-client",
          "signature": "Int",
          "source": "src/Network-HTTP-Client-Types.html#ManagerSettings",
          "type": "function"
        },
        "index": {
          "description": "Number of connections to single host to keep alive Default Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerConnCount",
          "package": "http-client",
          "partial": "Conn Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:managerConnCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an insecure connection.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n FIXME in the future, combine managerTlsConnection and managerTlsProxyConnection\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerRawConnection",
          "package": "http-client",
          "signature": "(IO (Maybe HostAddress -\u003e String -\u003e Int -\u003e IO Connection))",
          "source": "src/Network-HTTP-Client-Types.html#ManagerSettings",
          "type": "function"
        },
        "index": {
          "description": "Create an insecure connection Since FIXME in the future combine managerTlsConnection and managerTlsProxyConnection",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerRawConnection",
          "normalized": "(IO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection))",
          "package": "http-client",
          "partial": "Raw Connection",
          "signature": "(IO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:managerRawConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault timeout (in microseconds) to be applied to requests which do\n not provide a timeout value.\n\u003c/p\u003e\u003cp\u003eDefault is 5 seconds\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerResponseTimeout",
          "package": "http-client",
          "signature": "(Maybe Int)",
          "source": "src/Network-HTTP-Client-Types.html#ManagerSettings",
          "type": "function"
        },
        "index": {
          "description": "Default timeout in microseconds to be applied to requests which do not provide timeout value Default is seconds Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerResponseTimeout",
          "package": "http-client",
          "partial": "Response Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:managerResponseTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExceptions for which we should retry our request if we were reusing an\n already open connection. In the case of IOExceptions, for example, we\n assume that the connection was closed on the server and therefore open a\n new one.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerRetryableException",
          "package": "http-client",
          "signature": "(SomeException -\u003e Bool)",
          "source": "src/Network-HTTP-Client-Types.html#ManagerSettings",
          "type": "function"
        },
        "index": {
          "description": "Exceptions for which we should retry our request if we were reusing an already open connection In the case of IOExceptions for example we assume that the connection was closed on the server and therefore open new one Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerRetryableException",
          "normalized": "(SomeException-\u003eBool)",
          "package": "http-client",
          "partial": "Retryable Exception",
          "signature": "(SomeException-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:managerRetryableException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a TLS connection. Default behavior: throw an exception that TLS is not supported.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerTlsConnection",
          "package": "http-client",
          "signature": "(IO (Maybe HostAddress -\u003e String -\u003e Int -\u003e IO Connection))",
          "source": "src/Network-HTTP-Client-Types.html#ManagerSettings",
          "type": "function"
        },
        "index": {
          "description": "Create TLS connection Default behavior throw an exception that TLS is not supported Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerTlsConnection",
          "normalized": "(IO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection))",
          "package": "http-client",
          "partial": "Tls Connection",
          "signature": "(IO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:managerTlsConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a TLS proxy connection. Default behavior: throw an exception that TLS is not supported.\n\u003c/p\u003e\u003cp\u003eSince 0.2.2\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerTlsProxyConnection",
          "package": "http-client",
          "signature": "(IO (ByteString -\u003e (Connection -\u003e IO ()) -\u003e Maybe HostAddress -\u003e String -\u003e Int -\u003e IO Connection))",
          "source": "src/Network-HTTP-Client-Types.html#ManagerSettings",
          "type": "function"
        },
        "index": {
          "description": "Create TLS proxy connection Default behavior throw an exception that TLS is not supported Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerTlsProxyConnection",
          "normalized": "(IO(ByteString-\u003e(Connection-\u003eIO())-\u003eMaybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection))",
          "package": "http-client",
          "partial": "Tls Proxy Connection",
          "signature": "(IO(ByteString-\u003e(Connection-\u003eIO())-\u003eMaybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:managerTlsProxyConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction wrapped around all attempted \u003ccode\u003eRequest\u003c/code\u003es, usually used to wrap\n up exceptions in library-specific types.\n\u003c/p\u003e\u003cp\u003eDefault: wrap all \u003ccode\u003eIOException\u003c/code\u003es in the \u003ccode\u003eInternalIOException\u003c/code\u003e constructor.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerWrapIOException",
          "package": "http-client",
          "signature": "(forall a.  IO a -\u003e IO a)",
          "source": "src/Network-HTTP-Client-Types.html#ManagerSettings",
          "type": "function"
        },
        "index": {
          "description": "Action wrapped around all attempted Request usually used to wrap up exceptions in library-specific types Default wrap all IOException in the InternalIOException constructor Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "managerWrapIOException",
          "normalized": "(a b IO c-\u003eIO c)",
          "package": "http-client",
          "partial": "Wrap IOException",
          "signature": "(forall a. IO a-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:managerWrapIOException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP request method, eg GET, POST.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "method",
          "package": "http-client",
          "signature": "Method",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "HTTP request method eg GET POST Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "method",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "needsGunzip",
          "package": "http-client",
          "signature": "Request-\u003e [Header]-\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "needsGunzip",
          "normalized": "Request-\u003e[Header]-\u003eBool",
          "package": "http-client",
          "partial": "Gunzip",
          "signature": "Request-\u003e[Header]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:needsGunzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e. You may manually call \u003ccode\u003e\u003ca\u003ecloseManager\u003c/a\u003e\u003c/code\u003e to shut it down,\n or allow the \u003ccode\u003eManager\u003c/code\u003e to be shut down automatically based on garbage\n collection.\n\u003c/p\u003e\u003cp\u003eCreating a new \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e is a relatively expensive operation, you are\n advised to share a single \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e between requests instead.\n\u003c/p\u003e\u003cp\u003eThe first argument to this function is often \u003ccode\u003e\u003ca\u003edefaultManagerSettings\u003c/a\u003e\u003c/code\u003e,\n though add-on libraries may provide a recommended replacement.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "newManager",
          "package": "http-client",
          "signature": "ManagerSettings -\u003e IO Manager",
          "source": "src/Network-HTTP-Client-Manager.html#newManager",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:newManager\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:newManager\"]"
        },
        "index": {
          "description": "Create Manager You may manually call closeManager to shut it down or allow the Manager to be shut down automatically based on garbage collection Creating new Manager is relatively expensive operation you are advised to share single Manager between requests instead The first argument to this function is often defaultManagerSettings though add-on libraries may provide recommended replacement Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "newManager",
          "normalized": "ManagerSettings-\u003eIO Manager",
          "package": "http-client",
          "partial": "Manager",
          "signature": "ManagerSettings-\u003eIO Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:newManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "openSocketConnection",
          "package": "http-client",
          "signature": "Maybe HostAddress-\u003e String-\u003e Int-\u003e IO Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "openSocketConnection",
          "normalized": "Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection",
          "package": "http-client",
          "partial": "Socket Connection",
          "signature": "Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:openSocketConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "parseStatusHeaders",
          "package": "http-client",
          "signature": "Connection -\u003e IO StatusHeaders",
          "source": "src/Network-HTTP-Client-Headers.html#parseStatusHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "parseStatusHeaders",
          "normalized": "Connection-\u003eIO StatusHeaders",
          "package": "http-client",
          "partial": "Status Headers",
          "signature": "Connection-\u003eIO StatusHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:parseStatusHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a URL into a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis defaults some of the values in \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e, such as setting \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e to\n GET and \u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince this function uses \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e, the return monad can be anything that is\n an instance of \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "parseUrl",
          "package": "http-client",
          "signature": "String -\u003e m Request",
          "source": "src/Network-HTTP-Client-Request.html#parseUrl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:parseUrl\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:parseUrl\"]"
        },
        "index": {
          "description": "Convert URL into Request This defaults some of the values in Request such as setting method to GET and requestHeaders to Since this function uses Failure the return monad can be anything that is an instance of Failure such as IO or Maybe Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "parseUrl",
          "normalized": "String-\u003ea Request",
          "package": "http-client",
          "partial": "Url",
          "signature": "String-\u003em Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:parseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEverything from the host to the query string.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "path",
          "package": "http-client",
          "signature": "ByteString",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Everything from the host to the query string Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "path",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis corresponds to the subcomponent algorithm entitled \"Path-Match\" detailed\n in section 5.1.4\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "pathMatches",
          "package": "http-client",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Network-HTTP-Client-Cookies.html#pathMatches",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:pathMatches\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:pathMatches\"]"
        },
        "index": {
          "description": "This corresponds to the subcomponent algorithm entitled Path-Match detailed in section",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "pathMatches",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "http-client",
          "partial": "Matches",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:pathMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe port to connect to. Also used for generating the \u003ccode\u003ehost\u003c/code\u003e request header.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "port",
          "package": "http-client",
          "signature": "Int",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The port to connect to Also used for generating the host request header Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "port",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional HTTP proxy.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "proxy",
          "package": "http-client",
          "signature": "Maybe Proxy",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Optional HTTP proxy Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "proxy",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe host name of the HTTP proxy.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "proxyHost",
          "package": "http-client",
          "signature": "ByteString",
          "source": "src/Network-HTTP-Client-Types.html#Proxy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:proxyHost\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:proxyHost\"]"
        },
        "index": {
          "description": "The host name of the HTTP proxy",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "proxyHost",
          "package": "http-client",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:proxyHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe port number of the HTTP proxy.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "proxyPort",
          "package": "http-client",
          "signature": "Int",
          "source": "src/Network-HTTP-Client-Types.html#Proxy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:proxyPort\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:proxyPort\"]"
        },
        "index": {
          "description": "The port number of the HTTP proxy",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "proxyPort",
          "package": "http-client",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:proxyPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery string appended to the path.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "queryString",
          "package": "http-client",
          "signature": "ByteString",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Query string appended to the path Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "queryString",
          "package": "http-client",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003eTrue\u003c/code\u003e, a chunked and/or gzipped body will not be\n decoded. Use with caution.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "rawBody",
          "package": "http-client",
          "signature": "Bool",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "If True chunked and or gzipped body will not be decoded Use with caution Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "rawBody",
          "package": "http-client",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:rawBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "readDec",
          "package": "http-client",
          "signature": "String -\u003e Maybe i",
          "source": "src/Network-HTTP-Client-Util.html#readDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "readDec",
          "normalized": "String-\u003eMaybe a",
          "package": "http-client",
          "partial": "Dec",
          "signature": "String-\u003eMaybe i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:readDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis corresponds to the algorithm described in Section 5.3 \"Storage Model\"\n This function consists of calling \u003ccode\u003e\u003ca\u003egenerateCookie\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003einsertCheckedCookie\u003c/a\u003e\u003c/code\u003e.\n Use this function if you plan to do both in a row.\n \u003ccode\u003e\u003ca\u003egenerateCookie\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einsertCheckedCookie\u003c/a\u003e\u003c/code\u003e are only provided for more fine-grained control.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "receiveSetCookie",
          "package": "http-client",
          "signature": "SetCookie-\u003e Request-\u003e UTCTime-\u003e Bool-\u003e CookieJar-\u003e CookieJar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:receiveSetCookie\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:receiveSetCookie\"]"
        },
        "index": {
          "description": "This corresponds to the algorithm described in Section Storage Model This function consists of calling generateCookie followed by insertCheckedCookie Use this function if you plan to do both in row generateCookie and insertCheckedCookie are only provided for more fine-grained control",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "receiveSetCookie",
          "normalized": "SetCookie-\u003eRequest-\u003eUTCTime-\u003eBool-\u003eCookieJar-\u003eCookieJar",
          "package": "http-client",
          "partial": "Set Cookie",
          "signature": "SetCookie-\u003eRequest-\u003eUTCTime-\u003eBool-\u003eCookieJar-\u003eCookieJar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:receiveSetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many redirects to follow when getting a resource. 0 means follow\n no redirects. Default value: 10.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "redirectCount",
          "package": "http-client",
          "signature": "Int",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "How many redirects to follow when getting resource means follow no redirects Default value Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "redirectCount",
          "package": "http-client",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:redirectCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "removeExistingCookieFromCookieJar",
          "package": "http-client",
          "signature": "Cookie -\u003e CookieJar -\u003e (Maybe Cookie, CookieJar)",
          "source": "src/Network-HTTP-Client-Cookies.html#removeExistingCookieFromCookieJar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:removeExistingCookieFromCookieJar\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:removeExistingCookieFromCookieJar\"]"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "removeExistingCookieFromCookieJar",
          "normalized": "Cookie-\u003eCookieJar-\u003e(Maybe Cookie,CookieJar)",
          "package": "http-client",
          "partial": "Existing Cookie From Cookie Jar",
          "signature": "Cookie-\u003eCookieJar-\u003e(Maybe Cookie,CookieJar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:removeExistingCookieFromCookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest body to be sent to the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "requestBody",
          "package": "http-client",
          "signature": "RequestBody",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Request body to be sent to the server Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "requestBody",
          "package": "http-client",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:requestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "requestBuilder",
          "package": "http-client",
          "signature": "Request -\u003e Connection -\u003e IO ()",
          "source": "src/Network-HTTP-Client-Request.html#requestBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "requestBuilder",
          "normalized": "Request-\u003eConnection-\u003eIO()",
          "package": "http-client",
          "partial": "Builder",
          "signature": "Request-\u003eConnection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:requestBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom HTTP request headers\n\u003c/p\u003e\u003cp\u003eThe Content-Length and Transfer-Encoding headers are set automatically\n by this module, and shall not be added to \u003ccode\u003erequestHeaders\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf not provided by the user, \u003ccode\u003eHost\u003c/code\u003e will automatically be set based on\n the \u003ccode\u003ehost\u003c/code\u003e and \u003ccode\u003eport\u003c/code\u003e fields.\n\u003c/p\u003e\u003cp\u003eMoreover, the Accept-Encoding header is set implicitly to gzip for\n convenience by default. This behaviour can be overridden if needed, by\n setting the header explicitly to a different value. In order to omit the\n Accept-Header altogether, set it to the empty string \"\". If you need an\n empty Accept-Header (i.e. requesting the identity encoding), set it to a\n non-empty white-space string, e.g. \" \". See RFC 2616 section 14.3 for\n details about the semantics of the Accept-Header field. If you request a\n content-encoding not supported by this module, you will have to decode\n it yourself (see also the \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e field).\n\u003c/p\u003e\u003cp\u003eNote: Multiple header fields with the same field-name will result in\n multiple header fields being sent and therefore it's the responsibility\n of the client code to ensure that the rules from RFC 2616 section 4.2\n are honoured.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "requestHeaders",
          "package": "http-client",
          "signature": "RequestHeaders",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Custom HTTP request headers The Content-Length and Transfer-Encoding headers are set automatically by this module and shall not be added to requestHeaders If not provided by the user Host will automatically be set based on the host and port fields Moreover the Accept-Encoding header is set implicitly to gzip for convenience by default This behaviour can be overridden if needed by setting the header explicitly to different value In order to omit the Accept-Header altogether set it to the empty string If you need an empty Accept-Header i.e requesting the identity encoding set it to non-empty white-space string e.g See RFC section for details about the semantics of the Accept-Header field If you request content-encoding not supported by this module you will have to decode it yourself see also the decompress field Note Multiple header fields with the same field-name will result in multiple header fields being sent and therefore it the responsibility of the client code to ensure that the rules from RFC section are honoured Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "requestHeaders",
          "package": "http-client",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:requestHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse body sent by the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseBody",
          "package": "http-client",
          "signature": "body",
          "source": "src/Network-HTTP-Client-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "Response body sent by the server Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseBody",
          "package": "http-client",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose any open resources associated with the given \u003ccode\u003eResponse\u003c/code\u003e. In general,\n this will either close an active \u003ccode\u003eConnection\u003c/code\u003e or return it to the \u003ccode\u003eManager\u003c/code\u003e\n to be reused.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "responseClose",
          "package": "http-client",
          "signature": "Response a -\u003e IO ()",
          "source": "src/Network-HTTP-Client-Core.html#responseClose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseClose\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:responseClose\"]"
        },
        "index": {
          "description": "Close any open resources associated with the given Response In general this will either close an active Connection or return it to the Manager to be reused Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseClose",
          "normalized": "Response a-\u003eIO()",
          "package": "http-client",
          "partial": "Close",
          "signature": "Response a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReleases any resource held by this response. If the response body\n has not been fully read yet, doing so after this call will likely\n be impossible.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseClose'",
          "package": "http-client",
          "signature": "ResponseClose",
          "source": "src/Network-HTTP-Client-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "Releases any resource held by this response If the response body has not been fully read yet doing so after this call will likely be impossible Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseClose'",
          "package": "http-client",
          "partial": "Close'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseClose-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookies set on the client after interacting with the server. If\n cookies have been disabled by setting \u003ccode\u003e\u003ca\u003ecookieJar\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eNothing\u003c/code\u003e, then\n this will always be empty.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseCookieJar",
          "package": "http-client",
          "signature": "CookieJar",
          "source": "src/Network-HTTP-Client-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "Cookies set on the client after interacting with the server If cookies have been disabled by setting cookieJar to Nothing then this will always be empty Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseCookieJar",
          "package": "http-client",
          "partial": "Cookie Jar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseCookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse headers sent by the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseHeaders",
          "package": "http-client",
          "signature": "ResponseHeaders",
          "source": "src/Network-HTTP-Client-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "Response headers sent by the server Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseHeaders",
          "package": "http-client",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most low-level function for initiating an HTTP request.\n\u003c/p\u003e\u003cp\u003eThe first argument to this function gives a full specification\n on the request: the host to connect to, whether to use SSL,\n headers, etc. Please see \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e for full details.  The\n second argument specifies which \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e should be used.\n\u003c/p\u003e\u003cp\u003eThis function then returns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with a\n \u003ccode\u003e\u003ca\u003eBodyReader\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e contains the status code\n and headers that were sent back to us, and the\n \u003ccode\u003e\u003ca\u003eBodyReader\u003c/a\u003e\u003c/code\u003e contains the body of the request.  Note\n that this \u003ccode\u003e\u003ca\u003eBodyReader\u003c/a\u003e\u003c/code\u003e allows you to have fully\n interleaved IO actions during your HTTP download, making it\n possible to download very large responses in constant memory.\n\u003c/p\u003e\u003cp\u003eAn important note: the response body returned by this function represents a\n live HTTP connection. As such, if you do not use the response body, an open\n socket will be retained indefinitely. You must be certain to call\n \u003ccode\u003e\u003ca\u003eresponseClose\u003c/a\u003e\u003c/code\u003e on this response to free up resources.\n\u003c/p\u003e\u003cp\u003eThis function automatically performs any necessary redirects, as specified\n by the \u003ccode\u003e\u003ca\u003eredirectCount\u003c/a\u003e\u003c/code\u003e setting.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "responseOpen",
          "package": "http-client",
          "signature": "Request -\u003e Manager -\u003e IO (Response BodyReader)",
          "source": "src/Network-HTTP-Client-Core.html#responseOpen",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseOpen\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:responseOpen\"]"
        },
        "index": {
          "description": "The most low-level function for initiating an HTTP request The first argument to this function gives full specification on the request the host to connect to whether to use SSL headers etc Please see Request for full details The second argument specifies which Manager should be used This function then returns Response with BodyReader The Response contains the status code and headers that were sent back to us and the BodyReader contains the body of the request Note that this BodyReader allows you to have fully interleaved IO actions during your HTTP download making it possible to download very large responses in constant memory An important note the response body returned by this function represents live HTTP connection As such if you do not use the response body an open socket will be retained indefinitely You must be certain to call responseClose on this response to free up resources This function automatically performs any necessary redirects as specified by the redirectCount setting Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseOpen",
          "normalized": "Request-\u003eManager-\u003eIO(Response BodyReader)",
          "package": "http-client",
          "partial": "Open",
          "signature": "Request-\u003eManager-\u003eIO(Response BodyReader)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus code of the response.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseStatus",
          "package": "http-client",
          "signature": "Status",
          "source": "src/Network-HTTP-Client-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "Status code of the response Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseStatus",
          "package": "http-client",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of microseconds to wait for a response. If \u003ccode\u003eNothing\u003c/code\u003e, will wait\n indefinitely. Default: 5 seconds.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseTimeout",
          "package": "http-client",
          "signature": "Maybe Int",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Number of microseconds to wait for response If Nothing will wait indefinitely Default seconds Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseTimeout",
          "package": "http-client",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP version used by the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseVersion",
          "package": "http-client",
          "signature": "HttpVersion",
          "source": "src/Network-HTTP-Client-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "HTTP version used by the server Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "responseVersion",
          "package": "http-client",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:responseVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Internal",
          "name": "runResponseClose",
          "package": "http-client",
          "signature": "IO ()",
          "source": "src/Network-HTTP-Client-Types.html#ResponseClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "runResponseClose",
          "normalized": "IO()",
          "package": "http-client",
          "partial": "Response Close",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:runResponseClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to use HTTPS (ie, SSL).\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "secure",
          "package": "http-client",
          "signature": "Bool",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Whether to use HTTPS ie SSL Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "secure",
          "package": "http-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:secure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e, then add it to the request.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "setUri",
          "package": "http-client",
          "signature": "Request -\u003e URI -\u003e m Request",
          "source": "src/Network-HTTP-Client-Request.html#setUri",
          "type": "function"
        },
        "index": {
          "description": "Validate URI then add it to the request",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "setUri",
          "normalized": "Request-\u003eURI-\u003ea Request",
          "package": "http-client",
          "partial": "Uri",
          "signature": "Request-\u003eURI-\u003em Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:setUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e to the request. If it is absolute (includes a host name), add\n it as per \u003ccode\u003e\u003ca\u003esetUri\u003c/a\u003e\u003c/code\u003e; if it is relative, merge it with the existing request.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "setUriRelative",
          "package": "http-client",
          "signature": "Request -\u003e URI -\u003e m Request",
          "source": "src/Network-HTTP-Client-Request.html#setUriRelative",
          "type": "function"
        },
        "index": {
          "description": "Add URI to the request If it is absolute includes host name add it as per setUri if it is relative merge it with the existing request",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "setUriRelative",
          "normalized": "Request-\u003eURI-\u003ea Request",
          "package": "http-client",
          "partial": "Uri Relative",
          "signature": "Request-\u003eURI-\u003em Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:setUriRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis applies \u003ccode\u003e\u003ca\u003ereceiveSetCookie\u003c/a\u003e\u003c/code\u003e to a given Response\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "updateCookieJar",
          "package": "http-client",
          "signature": "Response a-\u003e Request-\u003e UTCTime-\u003e CookieJar-\u003e (CookieJar, Response a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:updateCookieJar\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:updateCookieJar\"]"
        },
        "index": {
          "description": "This applies receiveSetCookie to given Response",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "updateCookieJar",
          "normalized": "Response a-\u003eRequest-\u003eUTCTime-\u003eCookieJar-\u003e(CookieJar,Response a)",
          "package": "http-client",
          "partial": "Cookie Jar",
          "signature": "Response a-\u003eRequest-\u003eUTCTime-\u003eCookieJar-\u003e(CookieJar,Response a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:updateCookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd url-encoded parameters to the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis sets a new \u003ccode\u003e\u003ca\u003erequestBody\u003c/a\u003e\u003c/code\u003e, adds a content-type request header and\n changes the \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e to POST.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "urlEncodedBody",
          "package": "http-client",
          "signature": "[(ByteString, ByteString)] -\u003e Request -\u003e Request",
          "source": "src/Network-HTTP-Client-Request.html#urlEncodedBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:urlEncodedBody\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:urlEncodedBody\"]"
        },
        "index": {
          "description": "Add url-encoded parameters to the Request This sets new requestBody adds content-type request header and changes the method to POST Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "urlEncodedBody",
          "normalized": "[(ByteString,ByteString)]-\u003eRequest-\u003eRequest",
          "package": "http-client",
          "partial": "Encoded Body",
          "signature": "[(ByteString,ByteString)]-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:urlEncodedBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMagic value to be placed in a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e to indicate that we should use the\n timeout value in the \u003ccode\u003eManager\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.9.3\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Internal",
          "name": "useDefaultTimeout",
          "package": "http-client",
          "signature": "Maybe Int",
          "source": "src/Network-HTTP-Client-Request.html#useDefaultTimeout",
          "type": "function"
        },
        "index": {
          "description": "Magic value to be placed in Request to indicate that we should use the timeout value in the Manager Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "useDefaultTimeout",
          "package": "http-client",
          "partial": "Default Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:useDefaultTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate, use and close a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "withManager",
          "package": "http-client",
          "signature": "ManagerSettings -\u003e (Manager -\u003e IO a) -\u003e IO a",
          "source": "src/Network-HTTP-Client-Manager.html#withManager",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:withManager\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:withManager\"]"
        },
        "index": {
          "description": "Create use and close Manager Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "withManager",
          "normalized": "ManagerSettings-\u003e(Manager-\u003eIO a)-\u003eIO a",
          "package": "http-client",
          "partial": "Manager",
          "signature": "ManagerSettings-\u003e(Manager-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:withManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a \u003ccode\u003eRequest\u003c/code\u003e using a connection acquired from the given \u003ccode\u003eManager\u003c/code\u003e,\n and then provide the \u003ccode\u003eResponse\u003c/code\u003e to the given function. This function is\n fully exception safe, guaranteeing that the response will be closed when the\n inner function exits. It is defined as:\n\u003c/p\u003e\u003cpre\u003e withResponse req man f = bracket (responseOpen req man) responseClose f\n\u003c/pre\u003e\u003cp\u003eIt is recommended that you use this function in place of explicit calls to\n \u003ccode\u003e\u003ca\u003eresponseOpen\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eresponseClose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou will need to use functions such as \u003ccode\u003e\u003ca\u003ebrRead\u003c/a\u003e\u003c/code\u003e to consume the response\n body.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Client.Internal\",\"Network.HTTP.Client\"]",
          "name": "withResponse",
          "package": "http-client",
          "signature": "Request -\u003e Manager -\u003e (Response BodyReader -\u003e IO a) -\u003e IO a",
          "source": "src/Network-HTTP-Client-Core.html#withResponse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:withResponse\",\"http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:withResponse\"]"
        },
        "index": {
          "description": "Perform Request using connection acquired from the given Manager and then provide the Response to the given function This function is fully exception safe guaranteeing that the response will be closed when the inner function exits It is defined as withResponse req man bracket responseOpen req man responseClose It is recommended that you use this function in place of explicit calls to responseOpen and responseClose You will need to use functions such as brRead to consume the response body Since",
          "hierarchy": "Network HTTP Client Internal",
          "module": "Network.HTTP.Client.Internal",
          "name": "withResponse",
          "normalized": "Request-\u003eManager-\u003e(Response BodyReader-\u003eIO a)-\u003eIO a",
          "package": "http-client",
          "partial": "Response",
          "signature": "Request-\u003eManager-\u003e(Response BodyReader-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client-Internal.html#v:withResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the main entry point for using http-client. Used by itself, this\n module provides low-level access for streaming request and response bodies,\n and only non-secure HTTP connections. Helper packages such as http-conduit\n provided higher level streaming approaches, while other helper packages like\n http-client-tls provide secure connections.\n\u003c/p\u003e\u003cp\u003eThere are three core components to be understood here: requests, responses,\n and managers. A \u003ccode\u003eManager\u003c/code\u003e keeps track of open connections to various hosts,\n and when requested, will provide either an existing open connection or\n create a new connection on demand. A \u003ccode\u003eManager\u003c/code\u003e also automatically reaps\n connections which have been unused for a certain period of time. A \u003ccode\u003eManager\u003c/code\u003e\n allows for more efficient HTTP usage by allowing for keep-alive connections.\n Secure HTTP connections can be allowed by modifying the settings used for\n creating a manager. The simplest way to create a \u003ccode\u003eManager\u003c/code\u003e is with:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003enewManager\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultManagerSettings\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eor using the \u003ccode\u003ebracket\u003c/code\u003e pattern with\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ewithManager\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultManagerSettings\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe next core component is a \u003ccode\u003eRequest\u003c/code\u003e, which represents a single HTTP\n request to be sent to a specific server. \u003ccode\u003eRequest\u003c/code\u003es allow for many settings\n to control exact how they function, but usually the simplest approach for\n creating a \u003ccode\u003eRequest\u003c/code\u003e is to use \u003ccode\u003e\u003ca\u003eparseUrl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFinally, a \u003ccode\u003eResponse\u003c/code\u003e is the result of sending a single \u003ccode\u003eRequest\u003c/code\u003e to a\n server, over a connection which was acquired from a \u003ccode\u003eManager\u003c/code\u003e. Note that you\n must close the response when you're done with it to ensure that the\n connection is recycled to the \u003ccode\u003eManager\u003c/code\u003e to either be used by another\n request, or to be reaped. Usage of \u003ccode\u003ewithResponse\u003c/code\u003e will ensure that this\n happens automatically.\n\u003c/p\u003e\u003cp\u003eHelper packages may provide replacements for various recommendations listed\n above. For example, if using http-client-tls, instead of using\n \u003ccode\u003e\u003ca\u003edefaultManagerSettings\u003c/a\u003e\u003c/code\u003e, you would want to use \u003ccode\u003etlsManagerSettings\u003c/code\u003e. Be\n sure to read the relevant helper library documentation for more information.\n\u003c/p\u003e\u003cp\u003eA note on exceptions: for the most part, all actions that perform I/O should\n be assumed to throw an \u003ccode\u003eHttpException\u003c/code\u003e in the event of some problem, and all\n pure functions will be total. For example, \u003ccode\u003ewithResponse\u003c/code\u003e, \u003ccode\u003ehttpLbs\u003c/code\u003e, and\n \u003ccode\u003ebrRead\u003c/code\u003e can all throw exceptions. Functions like \u003ccode\u003eresponseStatus\u003c/code\u003e and\n \u003ccode\u003eapplyBasicAuth\u003c/code\u003e are guaranteed to be total (or there's a bug in the\n library).\n\u003c/p\u003e\u003cp\u003eOne thing to be cautioned about: the type of \u003ccode\u003eparseUrl\u003c/code\u003e allows it to work in\n different monads. If used in the \u003ccode\u003eIO\u003c/code\u003e monad, it will throw an exception in\n the case of an invalid URI. In addition, if you leverage the \u003ccode\u003eIsString\u003c/code\u003e\n instance of the \u003ccode\u003eRequest\u003c/code\u003e value via \u003ccode\u003eOverloadedStrings\u003c/code\u003e, an invalid URI will\n result in a partial value. Caveat emptor!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Client",
          "name": "Client",
          "package": "http-client",
          "source": "src/Network-HTTP-Client.html",
          "type": "module"
        },
        "index": {
          "description": "This is the main entry point for using http-client Used by itself this module provides low-level access for streaming request and response bodies and only non-secure HTTP connections Helper packages such as http-conduit provided higher level streaming approaches while other helper packages like http-client-tls provide secure connections There are three core components to be understood here requests responses and managers Manager keeps track of open connections to various hosts and when requested will provide either an existing open connection or create new connection on demand Manager also automatically reaps connections which have been unused for certain period of time Manager allows for more efficient HTTP usage by allowing for keep-alive connections Secure HTTP connections can be allowed by modifying the settings used for creating manager The simplest way to create Manager is with newManager defaultManagerSettings or using the bracket pattern with withManager defaultManagerSettings The next core component is Request which represents single HTTP request to be sent to specific server Request allow for many settings to control exact how they function but usually the simplest approach for creating Request is to use parseUrl Finally Response is the result of sending single Request to server over connection which was acquired from Manager Note that you must close the response when you re done with it to ensure that the connection is recycled to the Manager to either be used by another request or to be reaped Usage of withResponse will ensure that this happens automatically Helper packages may provide replacements for various recommendations listed above For example if using http-client-tls instead of using defaultManagerSettings you would want to use tlsManagerSettings Be sure to read the relevant helper library documentation for more information note on exceptions for the most part all actions that perform should be assumed to throw an HttpException in the event of some problem and all pure functions will be total For example withResponse httpLbs and brRead can all throw exceptions Functions like responseStatus and applyBasicAuth are guaranteed to be total or there bug in the library One thing to be cautioned about the type of parseUrl allows it to work in different monads If used in the IO monad it will throw an exception in the case of an invalid URI In addition if you leverage the IsString instance of the Request value via OverloadedStrings an invalid URI will result in partial value Caveat emptor",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "Client",
          "package": "http-client",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstraction for representing an incoming response body coming from the\n server. Data provided by this abstraction has already been gunzipped and\n de-chunked, and respects any content-length headers present.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "BodyReader",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#BodyReader",
          "type": "data"
        },
        "index": {
          "description": "An abstraction for representing an incoming response body coming from the server Data provided by this abstraction has already been gunzipped and de-chunked and respects any content-length headers present Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "BodyReader",
          "package": "http-client",
          "partial": "Body Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:BodyReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client",
          "name": "Cookie",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Cookie",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "Cookie",
          "package": "http-client",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client",
          "name": "CookieJar",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#CookieJar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "CookieJar",
          "package": "http-client",
          "partial": "Cookie Jar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:CookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function which will provide a \u003ccode\u003e\u003ca\u003ePopper\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eNeedsPopper\u003c/a\u003e\u003c/code\u003e. This\n seemingly convoluted structure allows for creation of request bodies which\n allocate scarce resources in an exception safe manner.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "GivesPopper",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#GivesPopper",
          "type": "type"
        },
        "index": {
          "description": "function which will provide Popper to NeedsPopper This seemingly convoluted structure allows for creation of request bodies which allocate scarce resources in an exception safe manner Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "GivesPopper",
          "package": "http-client",
          "partial": "Gives Popper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:GivesPopper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client",
          "name": "HttpException",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#HttpException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "HttpException",
          "package": "http-client",
          "partial": "Http Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:HttpException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeeps track of open connections for keep-alive.\n\u003c/p\u003e\u003cp\u003eIf possible, you should share a single \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e between multiple threads and requests.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "Manager",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Manager",
          "type": "data"
        },
        "index": {
          "description": "Keeps track of open connections for keep-alive If possible you should share single Manager between multiple threads and requests Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "Manager",
          "package": "http-client",
          "partial": "Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:Manager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings for a \u003ccode\u003eManager\u003c/code\u003e. Please use the \u003ccode\u003edefaultManagerSettings\u003c/code\u003e function and then modify\n individual settings. For more information, see \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "ManagerSettings",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#ManagerSettings",
          "type": "data"
        },
        "index": {
          "description": "Settings for Manager Please use the defaultManagerSettings function and then modify individual settings For more information see http www.yesodweb.com book settings-types Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "ManagerSettings",
          "package": "http-client",
          "partial": "Manager Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:ManagerSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function which must be provided with a \u003ccode\u003e\u003ca\u003ePopper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "NeedsPopper",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#NeedsPopper",
          "type": "type"
        },
        "index": {
          "description": "function which must be provided with Popper Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "NeedsPopper",
          "package": "http-client",
          "partial": "Needs Popper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:NeedsPopper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function which generates successive chunks of a request body, provider a\n single empty bytestring when no more data is available.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "Popper",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Popper",
          "type": "type"
        },
        "index": {
          "description": "function which generates successive chunks of request body provider single empty bytestring when no more data is available Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "Popper",
          "package": "http-client",
          "partial": "Popper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:Popper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a HTTP proxy, consisting of a hostname and port number.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "Proxy",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Proxy",
          "type": "data"
        },
        "index": {
          "description": "Define HTTP proxy consisting of hostname and port number",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "Proxy",
          "package": "http-client",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll information on how to connect to a host and what should be sent in the\n HTTP request.\n\u003c/p\u003e\u003cp\u003eIf you simply wish to download from a URL, see \u003ccode\u003eparseUrl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe constructor for this data type is not exposed. Instead, you should use\n either the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e method to retrieve a default instance, or \u003ccode\u003eparseUrl\u003c/code\u003e to\n construct from a URL, and then use the records below to make modifications.\n This approach allows http-client to add configuration options without\n breaking backwards compatibility.\n\u003c/p\u003e\u003cp\u003eFor example, to construct a POST request, you could do something like:\n\u003c/p\u003e\u003cpre\u003e initReq \u003c- parseUrl \"http://www.example.com/path\"\n let req = initReq\n             { method = \"POST\"\n             }\n\u003c/pre\u003e\u003cp\u003eFor more information, please see\n \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "Request",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Request",
          "type": "data"
        },
        "index": {
          "description": "All information on how to connect to host and what should be sent in the HTTP request If you simply wish to download from URL see parseUrl The constructor for this data type is not exposed Instead you should use either the def method to retrieve default instance or parseUrl to construct from URL and then use the records below to make modifications This approach allows http-client to add configuration options without breaking backwards compatibility For example to construct POST request you could do something like initReq parseUrl http www.example.com path let req initReq method POST For more information please see http www.yesodweb.com book settings-types Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "Request",
          "package": "http-client",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen using one of the \u003ccode\u003e\u003ca\u003eRequestBodyStream\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eRequestBodyStreamChunked\u003c/a\u003e\u003c/code\u003e\n constructors, you must ensure that the \u003ccode\u003e\u003ca\u003eGivesPopper\u003c/a\u003e\u003c/code\u003e can be called multiple\n times.  Usually this is not a problem.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRequestBodyStreamChunked\u003c/a\u003e\u003c/code\u003e will send a chunked request body. Note that\n not all servers support this. Only use \u003ccode\u003e\u003ca\u003eRequestBodyStreamChunked\u003c/a\u003e\u003c/code\u003e if you\n know the server you're sending to supports chunked request bodies.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "RequestBody",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#RequestBody",
          "type": "data"
        },
        "index": {
          "description": "When using one of the RequestBodyStream RequestBodyStreamChunked constructors you must ensure that the GivesPopper can be called multiple times Usually this is not problem The RequestBodyStreamChunked will send chunked request body Note that not all servers support this Only use RequestBodyStreamChunked if you know the server you re sending to supports chunked request bodies Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "RequestBody",
          "package": "http-client",
          "partial": "Request Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:RequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple representation of the HTTP response.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "Response",
          "package": "http-client",
          "source": "src/Network-HTTP-Client-Types.html#Response",
          "type": "data"
        },
        "index": {
          "description": "simple representation of the HTTP response Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "Response",
          "package": "http-client",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a single chunk of data from the response body, or an empty\n bytestring if no more data is available.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "brRead",
          "package": "http-client",
          "signature": "BodyReader -\u003e IO ByteString",
          "source": "src/Network-HTTP-Client-Types.html#brRead",
          "type": "function"
        },
        "index": {
          "description": "Get single chunk of data from the response body or an empty bytestring if no more data is available Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "brRead",
          "normalized": "BodyReader-\u003eIO ByteString",
          "package": "http-client",
          "partial": "Read",
          "signature": "BodyReader-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:brRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the status code. Note that this will run after all redirects are\n performed. Default: return a \u003ccode\u003eStatusCodeException\u003c/code\u003e on non-2XX responses.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "checkStatus",
          "package": "http-client",
          "signature": "Request -\u003e Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException",
          "source": "src/Network-HTTP-Client-Types.html#checkStatus",
          "type": "function"
        },
        "index": {
          "description": "Check the status code Note that this will run after all redirects are performed Default return StatusCodeException on non-2XX responses Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "checkStatus",
          "normalized": "Request-\u003eStatus-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException",
          "package": "http-client",
          "partial": "Status",
          "signature": "Request-\u003eStatus-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:checkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA user-defined cookie jar.\n If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, no cookie handling will take place, \"Cookie\" headers\n in \u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e will be sent raw, and \u003ccode\u003e\u003ca\u003eresponseCookieJar\u003c/a\u003e\u003c/code\u003e will be\n empty.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "cookieJar",
          "package": "http-client",
          "signature": "Request -\u003e Maybe CookieJar",
          "source": "src/Network-HTTP-Client-Types.html#cookieJar",
          "type": "function"
        },
        "index": {
          "description": "user-defined cookie jar If Nothing no cookie handling will take place Cookie headers in requestHeaders will be sent raw and responseCookieJar will be empty Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "cookieJar",
          "normalized": "Request-\u003eMaybe CookieJar",
          "package": "http-client",
          "partial": "Jar",
          "signature": "Request-\u003eMaybe CookieJar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:cookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to specify whether gzipped data should be\n decompressed on the fly (see \u003ccode\u003ealwaysDecompress\u003c/code\u003e and\n \u003ccode\u003ebrowserDecompress\u003c/code\u003e). Argument is the mime type.\n Default: browserDecompress.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "decompress",
          "package": "http-client",
          "signature": "Request -\u003e ByteString -\u003e Bool",
          "source": "src/Network-HTTP-Client-Types.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Predicate to specify whether gzipped data should be decompressed on the fly see alwaysDecompress and browserDecompress Argument is the mime type Default browserDecompress Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "decompress",
          "normalized": "Request-\u003eByteString-\u003eBool",
          "package": "http-client",
          "signature": "Request-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequested host name, used for both the IP address to connect to and\n the \u003ccode\u003ehost\u003c/code\u003e request header.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "host",
          "package": "http-client",
          "signature": "Request -\u003e ByteString",
          "source": "src/Network-HTTP-Client-Types.html#host",
          "type": "function"
        },
        "index": {
          "description": "Requested host name used for both the IP address to connect to and the host request header Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "host",
          "normalized": "Request-\u003eByteString",
          "package": "http-client",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of connections to a single host to keep alive. Default: 10.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "managerConnCount",
          "package": "http-client",
          "signature": "ManagerSettings -\u003e Int",
          "source": "src/Network-HTTP-Client-Types.html#managerConnCount",
          "type": "function"
        },
        "index": {
          "description": "Number of connections to single host to keep alive Default Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "managerConnCount",
          "normalized": "ManagerSettings-\u003eInt",
          "package": "http-client",
          "partial": "Conn Count",
          "signature": "ManagerSettings-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:managerConnCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an insecure connection.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n FIXME in the future, combine managerTlsConnection and managerTlsProxyConnection\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "managerRawConnection",
          "package": "http-client",
          "signature": "ManagerSettings -\u003e IO (Maybe HostAddress -\u003e String -\u003e Int -\u003e IO Connection)",
          "source": "src/Network-HTTP-Client-Types.html#managerRawConnection",
          "type": "function"
        },
        "index": {
          "description": "Create an insecure connection Since FIXME in the future combine managerTlsConnection and managerTlsProxyConnection",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "managerRawConnection",
          "normalized": "ManagerSettings-\u003eIO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "package": "http-client",
          "partial": "Raw Connection",
          "signature": "ManagerSettings-\u003eIO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:managerRawConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault timeout (in microseconds) to be applied to requests which do\n not provide a timeout value.\n\u003c/p\u003e\u003cp\u003eDefault is 5 seconds\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "managerResponseTimeout",
          "package": "http-client",
          "signature": "ManagerSettings -\u003e Maybe Int",
          "source": "src/Network-HTTP-Client-Types.html#managerResponseTimeout",
          "type": "function"
        },
        "index": {
          "description": "Default timeout in microseconds to be applied to requests which do not provide timeout value Default is seconds Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "managerResponseTimeout",
          "normalized": "ManagerSettings-\u003eMaybe Int",
          "package": "http-client",
          "partial": "Response Timeout",
          "signature": "ManagerSettings-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:managerResponseTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExceptions for which we should retry our request if we were reusing an\n already open connection. In the case of IOExceptions, for example, we\n assume that the connection was closed on the server and therefore open a\n new one.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "managerRetryableException",
          "package": "http-client",
          "signature": "ManagerSettings -\u003e SomeException -\u003e Bool",
          "source": "src/Network-HTTP-Client-Types.html#managerRetryableException",
          "type": "function"
        },
        "index": {
          "description": "Exceptions for which we should retry our request if we were reusing an already open connection In the case of IOExceptions for example we assume that the connection was closed on the server and therefore open new one Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "managerRetryableException",
          "normalized": "ManagerSettings-\u003eSomeException-\u003eBool",
          "package": "http-client",
          "partial": "Retryable Exception",
          "signature": "ManagerSettings-\u003eSomeException-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:managerRetryableException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a TLS connection. Default behavior: throw an exception that TLS is not supported.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "managerTlsConnection",
          "package": "http-client",
          "signature": "ManagerSettings -\u003e IO (Maybe HostAddress -\u003e String -\u003e Int -\u003e IO Connection)",
          "source": "src/Network-HTTP-Client-Types.html#managerTlsConnection",
          "type": "function"
        },
        "index": {
          "description": "Create TLS connection Default behavior throw an exception that TLS is not supported Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "managerTlsConnection",
          "normalized": "ManagerSettings-\u003eIO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "package": "http-client",
          "partial": "Tls Connection",
          "signature": "ManagerSettings-\u003eIO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:managerTlsConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction wrapped around all attempted \u003ccode\u003eRequest\u003c/code\u003es, usually used to wrap\n up exceptions in library-specific types.\n\u003c/p\u003e\u003cp\u003eDefault: wrap all \u003ccode\u003eIOException\u003c/code\u003es in the \u003ccode\u003eInternalIOException\u003c/code\u003e constructor.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "managerWrapIOException",
          "package": "http-client",
          "signature": "ManagerSettings -\u003e forall a.  IO a -\u003e IO a",
          "source": "src/Network-HTTP-Client-Types.html#managerWrapIOException",
          "type": "function"
        },
        "index": {
          "description": "Action wrapped around all attempted Request usually used to wrap up exceptions in library-specific types Default wrap all IOException in the InternalIOException constructor Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "managerWrapIOException",
          "normalized": "ManagerSettings-\u003ea b IO c-\u003eIO c",
          "package": "http-client",
          "partial": "Wrap IOException",
          "signature": "ManagerSettings-\u003eforall a. IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:managerWrapIOException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP request method, eg GET, POST.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "method",
          "package": "http-client",
          "signature": "Request -\u003e Method",
          "source": "src/Network-HTTP-Client-Types.html#method",
          "type": "function"
        },
        "index": {
          "description": "HTTP request method eg GET POST Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "method",
          "normalized": "Request-\u003eMethod",
          "package": "http-client",
          "signature": "Request-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEverything from the host to the query string.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "path",
          "package": "http-client",
          "signature": "Request -\u003e ByteString",
          "source": "src/Network-HTTP-Client-Types.html#path",
          "type": "function"
        },
        "index": {
          "description": "Everything from the host to the query string Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "path",
          "normalized": "Request-\u003eByteString",
          "package": "http-client",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe port to connect to. Also used for generating the \u003ccode\u003ehost\u003c/code\u003e request header.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "port",
          "package": "http-client",
          "signature": "Request -\u003e Int",
          "source": "src/Network-HTTP-Client-Types.html#port",
          "type": "function"
        },
        "index": {
          "description": "The port to connect to Also used for generating the host request header Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "port",
          "normalized": "Request-\u003eInt",
          "package": "http-client",
          "signature": "Request-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional HTTP proxy.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "proxy",
          "package": "http-client",
          "signature": "Request -\u003e Maybe Proxy",
          "source": "src/Network-HTTP-Client-Types.html#proxy",
          "type": "function"
        },
        "index": {
          "description": "Optional HTTP proxy Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "proxy",
          "normalized": "Request-\u003eMaybe Proxy",
          "package": "http-client",
          "signature": "Request-\u003eMaybe Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery string appended to the path.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "queryString",
          "package": "http-client",
          "signature": "Request -\u003e ByteString",
          "source": "src/Network-HTTP-Client-Types.html#queryString",
          "type": "function"
        },
        "index": {
          "description": "Query string appended to the path Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "queryString",
          "normalized": "Request-\u003eByteString",
          "package": "http-client",
          "partial": "String",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many redirects to follow when getting a resource. 0 means follow\n no redirects. Default value: 10.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "redirectCount",
          "package": "http-client",
          "signature": "Request -\u003e Int",
          "source": "src/Network-HTTP-Client-Types.html#redirectCount",
          "type": "function"
        },
        "index": {
          "description": "How many redirects to follow when getting resource means follow no redirects Default value Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "redirectCount",
          "normalized": "Request-\u003eInt",
          "package": "http-client",
          "partial": "Count",
          "signature": "Request-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:redirectCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest body to be sent to the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "requestBody",
          "package": "http-client",
          "signature": "Request -\u003e RequestBody",
          "source": "src/Network-HTTP-Client-Types.html#requestBody",
          "type": "function"
        },
        "index": {
          "description": "Request body to be sent to the server Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "requestBody",
          "normalized": "Request-\u003eRequestBody",
          "package": "http-client",
          "partial": "Body",
          "signature": "Request-\u003eRequestBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:requestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom HTTP request headers\n\u003c/p\u003e\u003cp\u003eThe Content-Length and Transfer-Encoding headers are set automatically\n by this module, and shall not be added to \u003ccode\u003erequestHeaders\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf not provided by the user, \u003ccode\u003eHost\u003c/code\u003e will automatically be set based on\n the \u003ccode\u003ehost\u003c/code\u003e and \u003ccode\u003eport\u003c/code\u003e fields.\n\u003c/p\u003e\u003cp\u003eMoreover, the Accept-Encoding header is set implicitly to gzip for\n convenience by default. This behaviour can be overridden if needed, by\n setting the header explicitly to a different value. In order to omit the\n Accept-Header altogether, set it to the empty string \"\". If you need an\n empty Accept-Header (i.e. requesting the identity encoding), set it to a\n non-empty white-space string, e.g. \" \". See RFC 2616 section 14.3 for\n details about the semantics of the Accept-Header field. If you request a\n content-encoding not supported by this module, you will have to decode\n it yourself (see also the \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e field).\n\u003c/p\u003e\u003cp\u003eNote: Multiple header fields with the same field-name will result in\n multiple header fields being sent and therefore it's the responsibility\n of the client code to ensure that the rules from RFC 2616 section 4.2\n are honoured.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "requestHeaders",
          "package": "http-client",
          "signature": "Request -\u003e RequestHeaders",
          "source": "src/Network-HTTP-Client-Types.html#requestHeaders",
          "type": "function"
        },
        "index": {
          "description": "Custom HTTP request headers The Content-Length and Transfer-Encoding headers are set automatically by this module and shall not be added to requestHeaders If not provided by the user Host will automatically be set based on the host and port fields Moreover the Accept-Encoding header is set implicitly to gzip for convenience by default This behaviour can be overridden if needed by setting the header explicitly to different value In order to omit the Accept-Header altogether set it to the empty string If you need an empty Accept-Header i.e requesting the identity encoding set it to non-empty white-space string e.g See RFC section for details about the semantics of the Accept-Header field If you request content-encoding not supported by this module you will have to decode it yourself see also the decompress field Note Multiple header fields with the same field-name will result in multiple header fields being sent and therefore it the responsibility of the client code to ensure that the rules from RFC section are honoured Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "requestHeaders",
          "normalized": "Request-\u003eRequestHeaders",
          "package": "http-client",
          "partial": "Headers",
          "signature": "Request-\u003eRequestHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:requestHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse body sent by the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "responseBody",
          "package": "http-client",
          "signature": "Response body -\u003e body",
          "source": "src/Network-HTTP-Client-Types.html#responseBody",
          "type": "function"
        },
        "index": {
          "description": "Response body sent by the server Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "responseBody",
          "normalized": "Response a-\u003ea",
          "package": "http-client",
          "partial": "Body",
          "signature": "Response body-\u003ebody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:responseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookies set on the client after interacting with the server. If\n cookies have been disabled by setting \u003ccode\u003e\u003ca\u003ecookieJar\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eNothing\u003c/code\u003e, then\n this will always be empty.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "responseCookieJar",
          "package": "http-client",
          "signature": "Response body -\u003e CookieJar",
          "source": "src/Network-HTTP-Client-Types.html#responseCookieJar",
          "type": "function"
        },
        "index": {
          "description": "Cookies set on the client after interacting with the server If cookies have been disabled by setting cookieJar to Nothing then this will always be empty Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "responseCookieJar",
          "normalized": "Response a-\u003eCookieJar",
          "package": "http-client",
          "partial": "Cookie Jar",
          "signature": "Response body-\u003eCookieJar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:responseCookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse headers sent by the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "responseHeaders",
          "package": "http-client",
          "signature": "Response body -\u003e ResponseHeaders",
          "source": "src/Network-HTTP-Client-Types.html#responseHeaders",
          "type": "function"
        },
        "index": {
          "description": "Response headers sent by the server Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "responseHeaders",
          "normalized": "Response a-\u003eResponseHeaders",
          "package": "http-client",
          "partial": "Headers",
          "signature": "Response body-\u003eResponseHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:responseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus code of the response.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "responseStatus",
          "package": "http-client",
          "signature": "Response body -\u003e Status",
          "source": "src/Network-HTTP-Client-Types.html#responseStatus",
          "type": "function"
        },
        "index": {
          "description": "Status code of the response Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "responseStatus",
          "normalized": "Response a-\u003eStatus",
          "package": "http-client",
          "partial": "Status",
          "signature": "Response body-\u003eStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:responseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of microseconds to wait for a response. If \u003ccode\u003eNothing\u003c/code\u003e, will wait\n indefinitely. Default: 5 seconds.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "responseTimeout",
          "package": "http-client",
          "signature": "Request -\u003e Maybe Int",
          "source": "src/Network-HTTP-Client-Types.html#responseTimeout",
          "type": "function"
        },
        "index": {
          "description": "Number of microseconds to wait for response If Nothing will wait indefinitely Default seconds Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "responseTimeout",
          "normalized": "Request-\u003eMaybe Int",
          "package": "http-client",
          "partial": "Timeout",
          "signature": "Request-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:responseTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP version used by the server.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "responseVersion",
          "package": "http-client",
          "signature": "Response body -\u003e HttpVersion",
          "source": "src/Network-HTTP-Client-Types.html#responseVersion",
          "type": "function"
        },
        "index": {
          "description": "HTTP version used by the server Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "responseVersion",
          "normalized": "Response a-\u003eHttpVersion",
          "package": "http-client",
          "partial": "Version",
          "signature": "Response body-\u003eHttpVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:responseVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to use HTTPS (ie, SSL).\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Network.HTTP.Client",
          "name": "secure",
          "package": "http-client",
          "signature": "Request -\u003e Bool",
          "source": "src/Network-HTTP-Client-Types.html#secure",
          "type": "function"
        },
        "index": {
          "description": "Whether to use HTTPS ie SSL Since",
          "hierarchy": "Network HTTP Client",
          "module": "Network.HTTP.Client",
          "name": "secure",
          "normalized": "Request-\u003eBool",
          "package": "http-client",
          "signature": "Request-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client/docs/Network-HTTP-Client.html#v:secure"
      }
    }
  ]
]