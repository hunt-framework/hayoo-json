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
        "word": "direct-http"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides facilities for implementing webservers, in a\n   servelet-like style.  The general philosophy is that direct-http makes\n   as few decisions as possible for the user code, allowing such things as\n   URL routing and virtual-host policies to be implemented in any desired\n   fashion.  It focuses on providing a robust transport layer which can\n   integrate well with any higher layer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP",
          "name": "HTTP",
          "package": "direct-http",
          "source": "src/Network-HTTP.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides facilities for implementing webservers in servelet-like style The general philosophy is that direct-http makes as few decisions as possible for the user code allowing such things as URL routing and virtual-host policies to be implemented in any desired fashion It focuses on providing robust transport layer which can integrate well with any higher layer",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HTTP",
          "package": "direct-http",
          "partial": "HTTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn object representing a cookie (a small piece of information, mostly\n   metadata, stored by a user-agent on behalf of the server), either one\n   received as part of the request or one to be sent as part of the\n   response.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "Cookie",
          "package": "direct-http",
          "source": "src/Network-HTTP.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "An object representing cookie small piece of information mostly metadata stored by user-agent on behalf of the server either one received as part of the request or one to be sent as part of the response",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "Cookie",
          "package": "direct-http",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad within which each single request from a client is handled.\n\u003c/p\u003e\u003cp\u003eNote that there is an instance \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eHTTP\u003c/a\u003e\u003c/code\u003e, so that\n   exceptions can be thrown, caught, and otherwise manipulated with the\n   lifted primitives from lifted-base's \u003ccode\u003e\u003ca\u003eLifted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "HTTP",
          "package": "direct-http",
          "source": "src/Network-HTTP.html#HTTP",
          "type": "type"
        },
        "index": {
          "description": "The monad within which each single request from client is handled Note that there is an instance MonadBaseControl IO HTTP so that exceptions can be thrown caught and otherwise manipulated with the lifted primitives from lifted-base Lifted",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HTTP",
          "package": "direct-http",
          "partial": "HTTP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:HTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception originating within the HTTP infrastructure or the web server.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "HTTPException",
          "package": "direct-http",
          "source": "src/Network-HTTP.html#HTTPException",
          "type": "data"
        },
        "index": {
          "description": "An exception originating within the HTTP infrastructure or the web server",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HTTPException",
          "package": "direct-http",
          "partial": "HTTPException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:HTTPException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record used to configure an individual port listener and its socket as\n   part of the general server configuration.  Consists of a host address and\n   port number to bind the socket to, and a flag indicating whether the\n   listener should use the secure version of the protocol.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "HTTPListenSocketParameters",
          "package": "direct-http",
          "source": "src/Network-HTTP.html#HTTPListenSocketParameters",
          "type": "data"
        },
        "index": {
          "description": "record used to configure an individual port listener and its socket as part of the general server configuration Consists of host address and port number to bind the socket to and flag indicating whether the listener should use the secure version of the protocol",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HTTPListenSocketParameters",
          "package": "direct-http",
          "partial": "HTTPListen Socket Parameters",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:HTTPListenSocketParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record used to configure the server.  Broken informally into the four\n   categories of logging, job-control, concurrency, and networking.  For\n   logging, the configuration contains optional paths to files for the\n   access and error logs (if these are omitted, logging is not done).  For\n   job-control, it contains a flag indicating whether to run as a daemon,\n   and optionally the names of a Unix user and/or group to switch to in the\n   process of daemonization.  For concurrency, it contains a forking\n   primitive such as \u003ccode\u003eforkIO\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e.  Finally, for networking, it\n   contains a list of parameters for ports to listen on, each of which has\n   its own sub-configuration record.\n\u003c/p\u003e\u003cp\u003eNotice that checking the value of the Host: header, and implementing\n   virtual-host policies, is not done by direct-http but rather is up to the\n   user of the library; hence, there is no information in the configuration\n   about the hostnames to accept from the user-agent.\n\u003c/p\u003e\u003cp\u003eIf the access logfile path is not Nothing, \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e opens this\n   logfile in append mode and uses it to log all accesses; otherwise, access\n   is not logged.\n\u003c/p\u003e\u003cp\u003eIf the error logfile path is not Nothing, \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e opens this logfile\n   in append mode and uses it to log all errors; otherwise, if not\n   daemonizing, errors are logged to standard output; if daemonizing, errors\n   are not logged.\n\u003c/p\u003e\u003cp\u003eIf the daemonize flag is True, \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e closes the standard IO\n   streams and moves the process into the background, doing all the usual\n   Unix things to make it run as a daemon henceforth.  This is optional\n   because it might be useful to turn it off for debugging purposes.\n\u003c/p\u003e\u003cp\u003eThe forking primitive is typically either \u003ccode\u003eforkIO\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e, and is\n   used by \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e both to create listener threads, and to create\n   connection threads.  It is valid to use a custom primitive, such as one\n   that attempts to pool OS threads, but it must actually provide\n   concurrency - otherwise there will be a deadlock. There is no support for\n   single-threaded operation.\n\u003c/p\u003e\u003cp\u003eNotice that we take the forking primitive in terms of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, even though\n   we actually lift it (with \u003ccode\u003e\u003ca\u003eliftBaseDiscard\u003c/a\u003e\u003c/code\u003e).  This is because\n   lifted-base, as of this writing and its version 0.1.1, only supports\n   \u003ccode\u003eforkIO\u003c/code\u003e and not \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe loop never returns, but will terminate the program with status 0 if\n   and when it ever has no child threads alive; child threads for this\n   purpose are those created through \u003ccode\u003e\u003ca\u003ehttpFork\u003c/a\u003e\u003c/code\u003e, which means all\n   listener-socket and connection threads created by \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e, as well\n   as any threads created by client code through \u003ccode\u003e\u003ca\u003ehttpFork\u003c/a\u003e\u003c/code\u003e, but not threads\n   created by client code through other mechanisms.\n\u003c/p\u003e\u003cp\u003eThe author of direct-http has made no effort to implement custom\n   thread-pooling forking primitives, but has attempted not to preclude\n   them.  If anyone attempts to implement such a thing, feedback is hereby\n   solicited.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "HTTPServerParameters",
          "package": "direct-http",
          "source": "src/Network-HTTP.html#HTTPServerParameters",
          "type": "data"
        },
        "index": {
          "description": "record used to configure the server Broken informally into the four categories of logging job-control concurrency and networking For logging the configuration contains optional paths to files for the access and error logs if these are omitted logging is not done For job-control it contains flag indicating whether to run as daemon and optionally the names of Unix user and or group to switch to in the process of daemonization For concurrency it contains forking primitive such as forkIO or forkOS Finally for networking it contains list of parameters for ports to listen on each of which has its own sub-configuration record Notice that checking the value of the Host header and implementing virtual-host policies is not done by direct-http but rather is up to the user of the library hence there is no information in the configuration about the hostnames to accept from the user-agent If the access logfile path is not Nothing acceptLoop opens this logfile in append mode and uses it to log all accesses otherwise access is not logged If the error logfile path is not Nothing acceptLoop opens this logfile in append mode and uses it to log all errors otherwise if not daemonizing errors are logged to standard output if daemonizing errors are not logged If the daemonize flag is True acceptLoop closes the standard IO streams and moves the process into the background doing all the usual Unix things to make it run as daemon henceforth This is optional because it might be useful to turn it off for debugging purposes The forking primitive is typically either forkIO or forkOS and is used by acceptLoop both to create listener threads and to create connection threads It is valid to use custom primitive such as one that attempts to pool OS threads but it must actually provide concurrency otherwise there will be deadlock There is no support for single-threaded operation Notice that we take the forking primitive in terms of IO even though we actually lift it with liftBaseDiscard This is because lifted-base as of this writing and its version only supports forkIO and not forkOS The loop never returns but will terminate the program with status if and when it ever has no child threads alive child threads for this purpose are those created through httpFork which means all listener-socket and connection threads created by acceptLoop as well as any threads created by client code through httpFork but not threads created by client code through other mechanisms The author of direct-http has made no effort to implement custom thread-pooling forking primitives but has attempted not to preclude them If anyone attempts to implement such thing feedback is hereby solicited",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HTTPServerParameters",
          "package": "direct-http",
          "partial": "HTTPServer Parameters",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:HTTPServerParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque type representing the state of the HTTP server during a single\n   connection from a client.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "HTTPState",
          "package": "direct-http",
          "source": "src/Network-HTTP.html#HTTPState",
          "type": "data"
        },
        "index": {
          "description": "An opaque type representing the state of the HTTP server during single connection from client",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HTTPState",
          "package": "direct-http",
          "partial": "HTTPState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:HTTPState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeaders are classified by HTTP/1.1 as request headers, response headers,\n   entity headers, or general headers.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "Header",
          "package": "direct-http",
          "source": "src/Network-HTTP.html#Header",
          "type": "data"
        },
        "index": {
          "description": "Headers are classified by HTTP as request headers response headers entity headers or general headers",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "Header",
          "package": "direct-http",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monads within which the HTTP calls are valid.  You may wish\n   to create your own monad implementing this class.  Note that the\n   prerequisite is \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e m, which is similar to\n   \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e m, but with, among other things, more capability for\n   exception handling.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "MonadHTTP",
          "package": "direct-http",
          "source": "src/Network-HTTP.html#MonadHTTP",
          "type": "class"
        },
        "index": {
          "description": "The class of monads within which the HTTP calls are valid You may wish to create your own monad implementing this class Note that the prerequisite is MonadBaseControl IO which is similar to MonadIO but with among other things more capability for exception handling",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "MonadHTTP",
          "package": "direct-http",
          "partial": "Monad HTTP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:MonadHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "Cookie",
          "package": "direct-http",
          "signature": "Cookie",
          "source": "src/Network-HTTP.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "Cookie",
          "package": "direct-http",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception thrown by operations which are given cookie names that do not\n   meet the appropriate syntax requirements.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "CookieNameInvalid",
          "package": "direct-http",
          "signature": "CookieNameInvalid String",
          "source": "src/Network-HTTP.html#HTTPException",
          "type": "function"
        },
        "index": {
          "description": "An exception thrown by operations which are given cookie names that do not meet the appropriate syntax requirements",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "CookieNameInvalid",
          "package": "direct-http",
          "partial": "Cookie Name Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:CookieNameInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HTTPListenSocketParameters",
          "package": "direct-http",
          "signature": "HTTPListenSocketParameters",
          "source": "src/Network-HTTP.html#HTTPListenSocketParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HTTPListenSocketParameters",
          "package": "direct-http",
          "partial": "HTTPListen Socket Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HTTPListenSocketParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HTTPServerParameters",
          "package": "direct-http",
          "signature": "HTTPServerParameters",
          "source": "src/Network-HTTP.html#HTTPServerParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HTTPServerParameters",
          "package": "direct-http",
          "partial": "HTTPServer Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HTTPServerParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest headers\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "HttpAccept",
          "package": "direct-http",
          "signature": "HttpAccept",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "description": "Request headers",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpAccept",
          "package": "direct-http",
          "partial": "Http Accept",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpAcceptCharset",
          "package": "direct-http",
          "signature": "HttpAcceptCharset",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpAcceptCharset",
          "package": "direct-http",
          "partial": "Http Accept Charset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAcceptCharset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpAcceptEncoding",
          "package": "direct-http",
          "signature": "HttpAcceptEncoding",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpAcceptEncoding",
          "package": "direct-http",
          "partial": "Http Accept Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAcceptEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpAcceptLanguage",
          "package": "direct-http",
          "signature": "HttpAcceptLanguage",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpAcceptLanguage",
          "package": "direct-http",
          "partial": "Http Accept Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAcceptLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse headers\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "HttpAcceptRanges",
          "package": "direct-http",
          "signature": "HttpAcceptRanges",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "description": "Response headers",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpAcceptRanges",
          "package": "direct-http",
          "partial": "Http Accept Ranges",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAcceptRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpAge",
          "package": "direct-http",
          "signature": "HttpAge",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpAge",
          "package": "direct-http",
          "partial": "Http Age",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntity headers\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "HttpAllow",
          "package": "direct-http",
          "signature": "HttpAllow",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "description": "Entity headers",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpAllow",
          "package": "direct-http",
          "partial": "Http Allow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAllow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpAuthorization",
          "package": "direct-http",
          "signature": "HttpAuthorization",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpAuthorization",
          "package": "direct-http",
          "partial": "Http Authorization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAuthorization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral headers\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "HttpCacheControl",
          "package": "direct-http",
          "signature": "HttpCacheControl",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "description": "General headers",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpCacheControl",
          "package": "direct-http",
          "partial": "Http Cache Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpCacheControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpConnection",
          "package": "direct-http",
          "signature": "HttpConnection",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpConnection",
          "package": "direct-http",
          "partial": "Http Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpContentEncoding",
          "package": "direct-http",
          "signature": "HttpContentEncoding",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpContentEncoding",
          "package": "direct-http",
          "partial": "Http Content Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpContentLanguage",
          "package": "direct-http",
          "signature": "HttpContentLanguage",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpContentLanguage",
          "package": "direct-http",
          "partial": "Http Content Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpContentLength",
          "package": "direct-http",
          "signature": "HttpContentLength",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpContentLength",
          "package": "direct-http",
          "partial": "Http Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpContentLocation",
          "package": "direct-http",
          "signature": "HttpContentLocation",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpContentLocation",
          "package": "direct-http",
          "partial": "Http Content Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpContentMD5",
          "package": "direct-http",
          "signature": "HttpContentMD5",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpContentMD5",
          "package": "direct-http",
          "partial": "Http Content MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentMD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpContentRange",
          "package": "direct-http",
          "signature": "HttpContentRange",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpContentRange",
          "package": "direct-http",
          "partial": "Http Content Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpContentType",
          "package": "direct-http",
          "signature": "HttpContentType",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpContentType",
          "package": "direct-http",
          "partial": "Http Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNonstandard headers\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "HttpCookie",
          "package": "direct-http",
          "signature": "HttpCookie",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "description": "Nonstandard headers",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpCookie",
          "package": "direct-http",
          "partial": "Http Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpDate",
          "package": "direct-http",
          "signature": "HttpDate",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpDate",
          "package": "direct-http",
          "partial": "Http Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpETag",
          "package": "direct-http",
          "signature": "HttpETag",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpETag",
          "package": "direct-http",
          "partial": "Http ETag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpETag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpExpect",
          "package": "direct-http",
          "signature": "HttpExpect",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpExpect",
          "package": "direct-http",
          "partial": "Http Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpExpires",
          "package": "direct-http",
          "signature": "HttpExpires",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpExpires",
          "package": "direct-http",
          "partial": "Http Expires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpExpires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpExtensionHeader",
          "package": "direct-http",
          "signature": "HttpExtensionHeader ByteString",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpExtensionHeader",
          "package": "direct-http",
          "partial": "Http Extension Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpExtensionHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpFrom",
          "package": "direct-http",
          "signature": "HttpFrom",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpFrom",
          "package": "direct-http",
          "partial": "Http From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpHost",
          "package": "direct-http",
          "signature": "HttpHost",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpHost",
          "package": "direct-http",
          "partial": "Http Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpIfMatch",
          "package": "direct-http",
          "signature": "HttpIfMatch",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpIfMatch",
          "package": "direct-http",
          "partial": "Http If Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpIfMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpIfModifiedSince",
          "package": "direct-http",
          "signature": "HttpIfModifiedSince",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpIfModifiedSince",
          "package": "direct-http",
          "partial": "Http If Modified Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpIfModifiedSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpIfNoneMatch",
          "package": "direct-http",
          "signature": "HttpIfNoneMatch",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpIfNoneMatch",
          "package": "direct-http",
          "partial": "Http If None Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpIfNoneMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpIfRange",
          "package": "direct-http",
          "signature": "HttpIfRange",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpIfRange",
          "package": "direct-http",
          "partial": "Http If Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpIfRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpIfUnmodifiedSince",
          "package": "direct-http",
          "signature": "HttpIfUnmodifiedSince",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpIfUnmodifiedSince",
          "package": "direct-http",
          "partial": "Http If Unmodified Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpIfUnmodifiedSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpLastModified",
          "package": "direct-http",
          "signature": "HttpLastModified",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpLastModified",
          "package": "direct-http",
          "partial": "Http Last Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpLastModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpLocation",
          "package": "direct-http",
          "signature": "HttpLocation",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpLocation",
          "package": "direct-http",
          "partial": "Http Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpMaxForwards",
          "package": "direct-http",
          "signature": "HttpMaxForwards",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpMaxForwards",
          "package": "direct-http",
          "partial": "Http Max Forwards",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpMaxForwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpPragma",
          "package": "direct-http",
          "signature": "HttpPragma",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpPragma",
          "package": "direct-http",
          "partial": "Http Pragma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpPragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpProxyAuthenticate",
          "package": "direct-http",
          "signature": "HttpProxyAuthenticate",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpProxyAuthenticate",
          "package": "direct-http",
          "partial": "Http Proxy Authenticate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpProxyAuthenticate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpProxyAuthorization",
          "package": "direct-http",
          "signature": "HttpProxyAuthorization",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpProxyAuthorization",
          "package": "direct-http",
          "partial": "Http Proxy Authorization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpProxyAuthorization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpRange",
          "package": "direct-http",
          "signature": "HttpRange",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpRange",
          "package": "direct-http",
          "partial": "Http Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpReferrer",
          "package": "direct-http",
          "signature": "HttpReferrer",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpReferrer",
          "package": "direct-http",
          "partial": "Http Referrer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpReferrer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpRetryAfter",
          "package": "direct-http",
          "signature": "HttpRetryAfter",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpRetryAfter",
          "package": "direct-http",
          "partial": "Http Retry After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpRetryAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpServer",
          "package": "direct-http",
          "signature": "HttpServer",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpServer",
          "package": "direct-http",
          "partial": "Http Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpSetCookie",
          "package": "direct-http",
          "signature": "HttpSetCookie",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpSetCookie",
          "package": "direct-http",
          "partial": "Http Set Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpSetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpTE",
          "package": "direct-http",
          "signature": "HttpTE",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpTE",
          "package": "direct-http",
          "partial": "Http TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpTrailer",
          "package": "direct-http",
          "signature": "HttpTrailer",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpTrailer",
          "package": "direct-http",
          "partial": "Http Trailer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpTrailer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpTransferEncoding",
          "package": "direct-http",
          "signature": "HttpTransferEncoding",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpTransferEncoding",
          "package": "direct-http",
          "partial": "Http Transfer Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpTransferEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpUpgrade",
          "package": "direct-http",
          "signature": "HttpUpgrade",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpUpgrade",
          "package": "direct-http",
          "partial": "Http Upgrade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpUpgrade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpUserAgent",
          "package": "direct-http",
          "signature": "HttpUserAgent",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpUserAgent",
          "package": "direct-http",
          "partial": "Http User Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpUserAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpVary",
          "package": "direct-http",
          "signature": "HttpVary",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpVary",
          "package": "direct-http",
          "partial": "Http Vary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpVary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpVia",
          "package": "direct-http",
          "signature": "HttpVia",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpVia",
          "package": "direct-http",
          "partial": "Http Via",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpVia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpWWWAuthenticate",
          "package": "direct-http",
          "signature": "HttpWWWAuthenticate",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpWWWAuthenticate",
          "package": "direct-http",
          "partial": "Http WWWAuthenticate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpWWWAuthenticate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "HttpWarning",
          "package": "direct-http",
          "signature": "HttpWarning",
          "source": "src/Network-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "HttpWarning",
          "package": "direct-http",
          "partial": "Http Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception thrown by operations which expect a connection to\n   exist (as it always does within a handler), when none does.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "NoConnection",
          "package": "direct-http",
          "signature": "NoConnection",
          "source": "src/Network-HTTP.html#HTTPException",
          "type": "function"
        },
        "index": {
          "description": "An exception thrown by operations which expect connection to exist as it always does within handler when none does",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "NoConnection",
          "package": "direct-http",
          "partial": "No Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:NoConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception thrown by operations which are given a header that does not\n   meet their requirement of being valid in a response.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "NotAResponseHeader",
          "package": "direct-http",
          "signature": "NotAResponseHeader Header",
          "source": "src/Network-HTTP.html#HTTPException",
          "type": "function"
        },
        "index": {
          "description": "An exception thrown by operations which are given header that does not meet their requirement of being valid in response",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "NotAResponseHeader",
          "package": "direct-http",
          "partial": "Not AResponse Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:NotAResponseHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception thrown by operations which produce output when output has\n   been closed, as by \u003ccode\u003e\u003ca\u003ehttpCloseOutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "OutputAlreadyClosed",
          "package": "direct-http",
          "signature": "OutputAlreadyClosed",
          "source": "src/Network-HTTP.html#HTTPException",
          "type": "function"
        },
        "index": {
          "description": "An exception thrown by operations which produce output when output has been closed as by httpCloseOutput",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "OutputAlreadyClosed",
          "package": "direct-http",
          "partial": "Output Already Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:OutputAlreadyClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception thrown when output is closed, as by \u003ccode\u003e\u003ca\u003ehttpCloseOutput\u003c/a\u003e\u003c/code\u003e,\n   when the response headers imply that there will be a certain amount\n   of data and there is not.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "OutputIncomplete",
          "package": "direct-http",
          "signature": "OutputIncomplete",
          "source": "src/Network-HTTP.html#HTTPException",
          "type": "function"
        },
        "index": {
          "description": "An exception thrown when output is closed as by httpCloseOutput when the response headers imply that there will be certain amount of data and there is not",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "OutputIncomplete",
          "package": "direct-http",
          "partial": "Output Incomplete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:OutputIncomplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception thrown by operations which require the response headers not\n   to have been sent yet.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "ResponseHeadersAlreadySent",
          "package": "direct-http",
          "signature": "ResponseHeadersAlreadySent",
          "source": "src/Network-HTTP.html#HTTPException",
          "type": "function"
        },
        "index": {
          "description": "An exception thrown by operations which require the response headers not to have been sent yet",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "ResponseHeadersAlreadySent",
          "package": "direct-http",
          "partial": "Response Headers Already Sent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:ResponseHeadersAlreadySent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception thrown by operations which require the response headers\n   to still be modifiable.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "ResponseHeadersNotModifiable",
          "package": "direct-http",
          "signature": "ResponseHeadersNotModifiable",
          "source": "src/Network-HTTP.html#HTTPException",
          "type": "function"
        },
        "index": {
          "description": "An exception thrown by operations which require the response headers to still be modifiable",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "ResponseHeadersNotModifiable",
          "package": "direct-http",
          "partial": "Response Headers Not Modifiable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:ResponseHeadersNotModifiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a server parameters record and a handler, and concurrently accepts\n   requests from user agents, forking with the primitive specified by the\n   parameters and invoking the handler in the forked thread inside the\n   \u003ccode\u003e\u003ca\u003eHTTP\u003c/a\u003e\u003c/code\u003e monad for each request.\n\u003c/p\u003e\u003cp\u003eNote that although there is no mechanism to substitute another type of\n   monad for HTTP, you can enter your own monad within the handler, much as\n   you would enter your own monad within IO.  You simply have to implement\n   the \u003ccode\u003e\u003ca\u003eMonadHTTP\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eAny exceptions not caught within the handler are caught by\n   \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e, and cause the termination of that handler, but not\n   of the connection or the accept loop.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "acceptLoop",
          "package": "direct-http",
          "signature": "HTTPServerParameters-\u003e HTTP ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Takes server parameters record and handler and concurrently accepts requests from user agents forking with the primitive specified by the parameters and invoking the handler in the forked thread inside the HTTP monad for each request Note that although there is no mechanism to substitute another type of monad for HTTP you can enter your own monad within the handler much as you would enter your own monad within IO You simply have to implement the MonadHTTP class Any exceptions not caught within the handler are caught by acceptLoop and cause the termination of that handler but not of the connection or the accept loop",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "acceptLoop",
          "normalized": "HTTPServerParameters-\u003eHTTP()-\u003eIO()",
          "package": "direct-http",
          "partial": "Loop",
          "signature": "HTTPServerParameters-\u003eHTTP()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:acceptLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "cookieComment",
          "package": "direct-http",
          "signature": "Maybe String",
          "source": "src/Network-HTTP.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "cookieComment",
          "package": "direct-http",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "cookieDomain",
          "package": "direct-http",
          "signature": "Maybe String",
          "source": "src/Network-HTTP.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "cookieDomain",
          "package": "direct-http",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "cookieMaxAge",
          "package": "direct-http",
          "signature": "Maybe Int",
          "source": "src/Network-HTTP.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "cookieMaxAge",
          "package": "direct-http",
          "partial": "Max Age",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieMaxAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "cookieName",
          "package": "direct-http",
          "signature": "String",
          "source": "src/Network-HTTP.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "cookieName",
          "package": "direct-http",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "cookiePath",
          "package": "direct-http",
          "signature": "Maybe String",
          "source": "src/Network-HTTP.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "cookiePath",
          "package": "direct-http",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookiePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "cookieSecure",
          "package": "direct-http",
          "signature": "Bool",
          "source": "src/Network-HTTP.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "cookieSecure",
          "package": "direct-http",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "cookieValue",
          "package": "direct-http",
          "signature": "String",
          "source": "src/Network-HTTP.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "cookieValue",
          "package": "direct-http",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "cookieVersion",
          "package": "direct-http",
          "signature": "Int",
          "source": "src/Network-HTTP.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "cookieVersion",
          "package": "direct-http",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e objects provided by the user agent in accordance \n   RFC 2109.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getAllCookies",
          "package": "direct-http",
          "signature": "m [Cookie]",
          "source": "src/Network-HTTP.html#getAllCookies",
          "type": "function"
        },
        "index": {
          "description": "Returns all Cookie objects provided by the user agent in accordance RFC",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getAllCookies",
          "normalized": "a[Cookie]",
          "package": "direct-http",
          "partial": "All Cookies",
          "signature": "m[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getAllCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an association list of name-value pairs of all the HTTP/1.1 request\n   or entity headers from the user agent.  If some of these headers are to be\n   provided after the content as specified by the Trailer header, this is\n   potentially time-consuming.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getAllRequestHeaders",
          "package": "direct-http",
          "signature": "m [(Header, String)]",
          "source": "src/Network-HTTP.html#getAllRequestHeaders",
          "type": "function"
        },
        "index": {
          "description": "Returns an association list of name-value pairs of all the HTTP request or entity headers from the user agent If some of these headers are to be provided after the content as specified by the Trailer header this is potentially time-consuming",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getAllRequestHeaders",
          "normalized": "a[(Header,String)]",
          "package": "direct-http",
          "partial": "All Request Headers",
          "signature": "m[(Header,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getAllRequestHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the request content length, if this is knowable without actually\n   receiving the content - in particular, if the Content-Length header was\n   used.  Otherwise, returns Nothing.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getContentLength",
          "package": "direct-http",
          "signature": "m (Maybe Int)",
          "source": "src/Network-HTTP.html#getContentLength",
          "type": "function"
        },
        "index": {
          "description": "Return the request content length if this is knowable without actually receiving the content in particular if the Content-Length header was used Otherwise returns Nothing",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getContentLength",
          "package": "direct-http",
          "partial": "Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the request content type, as provided by the user agent.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getContentType",
          "package": "direct-http",
          "signature": "m (Maybe String)",
          "source": "src/Network-HTTP.html#getContentType",
          "type": "function"
        },
        "index": {
          "description": "Return the request content type as provided by the user agent",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getContentType",
          "package": "direct-http",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e object for the given name, if the user agent provided one\n   in accordance with RFC 2109.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getCookie",
          "package": "direct-http",
          "signature": "String-\u003e m (Maybe Cookie)",
          "type": "function"
        },
        "index": {
          "description": "Returns Cookie object for the given name if the user agent provided one in accordance with RFC",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getCookie",
          "normalized": "String-\u003ea(Maybe Cookie)",
          "package": "direct-http",
          "partial": "Cookie",
          "signature": "String-\u003em(Maybe Cookie)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience method; as \u003ccode\u003e\u003ca\u003egetCookie\u003c/a\u003e\u003c/code\u003e, but returns only the value of the\n   cookie rather than a \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getCookieValue",
          "package": "direct-http",
          "signature": "String-\u003e m (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "convenience method as getCookie but returns only the value of the cookie rather than Cookie object",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getCookieValue",
          "normalized": "String-\u003ea(Maybe String)",
          "package": "direct-http",
          "partial": "Cookie Value",
          "signature": "String-\u003em(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getCookieValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the opaque \u003ccode\u003e\u003ca\u003eHTTPState\u003c/a\u003e\u003c/code\u003e object representing the state of\n   the HTTP server.\n   Should not be called directly by user code, except implementations of\n   \u003ccode\u003e\u003ca\u003eMonadHTTP\u003c/a\u003e\u003c/code\u003e; exported so that\n   user monads can implement the interface.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getHTTPState",
          "package": "direct-http",
          "signature": "m HTTPState",
          "source": "src/Network-HTTP.html#getHTTPState",
          "type": "method"
        },
        "index": {
          "description": "Returns the opaque HTTPState object representing the state of the HTTP server Should not be called directly by user code except implementations of MonadHTTP exported so that user monads can implement the interface",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getHTTPState",
          "package": "direct-http",
          "partial": "HTTPState",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getHTTPState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the remote address, which includes both host and port information.\n   They are provided in the aggregate like this because it is the most\n   internet-protocol-agnostic representation.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getRemoteAddress",
          "package": "direct-http",
          "signature": "m SockAddr",
          "source": "src/Network-HTTP.html#getRemoteAddress",
          "type": "function"
        },
        "index": {
          "description": "Return the remote address which includes both host and port information They are provided in the aggregate like this because it is the most internet-protocol-agnostic representation",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getRemoteAddress",
          "package": "direct-http",
          "partial": "Remote Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getRemoteAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries the value from the user agent of the given HTTP/1.1 header.  If\n   the header is to be provided after the content as specified by the\n   Trailer header, this is potentially time-consuming.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getRequestHeader",
          "package": "direct-http",
          "signature": "Header-\u003e m (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Queries the value from the user agent of the given HTTP header If the header is to be provided after the content as specified by the Trailer header this is potentially time-consuming",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getRequestHeader",
          "normalized": "Header-\u003ea(Maybe String)",
          "package": "direct-http",
          "partial": "Request Header",
          "signature": "Header-\u003em(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getRequestHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the request method.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getRequestMethod",
          "package": "direct-http",
          "signature": "m String",
          "source": "src/Network-HTTP.html#getRequestMethod",
          "type": "function"
        },
        "index": {
          "description": "Return the request method",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getRequestMethod",
          "package": "direct-http",
          "partial": "Request Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getRequestMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the request URI.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getRequestURI",
          "package": "direct-http",
          "signature": "m String",
          "source": "src/Network-HTTP.html#getRequestURI",
          "type": "function"
        },
        "index": {
          "description": "Return the request URI",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getRequestURI",
          "package": "direct-http",
          "partial": "Request URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getRequestURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value of the given header which will be or has been sent with\n   the response headers.  If the header is not an HTTP/1.1 or extension\n   response, entity, or general header, ie, is not valid as part of a\n   response, causes a \u003ccode\u003e\u003ca\u003eNotAResponseHeader\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getResponseHeader",
          "package": "direct-http",
          "signature": "Header-\u003e m (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Returns the value of the given header which will be or has been sent with the response headers If the header is not an HTTP or extension response entity or general header ie is not valid as part of response causes NotAResponseHeader exception",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getResponseHeader",
          "normalized": "Header-\u003ea(Maybe String)",
          "package": "direct-http",
          "partial": "Response Header",
          "signature": "Header-\u003em(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getResponseHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the response status which will be or has been sent with the response\n   headers.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getResponseStatus",
          "package": "direct-http",
          "signature": "m Int",
          "type": "function"
        },
        "index": {
          "description": "Returns the response status which will be or has been sent with the response headers",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getResponseStatus",
          "package": "direct-http",
          "partial": "Response Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getResponseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the server address and port, as a \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e.  Useful\n   for implementing virtual-hosting policies.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "getServerAddress",
          "package": "direct-http",
          "signature": "m SockAddr",
          "source": "src/Network-HTTP.html#getServerAddress",
          "type": "function"
        },
        "index": {
          "description": "Return the server address and port as SockAddr Useful for implementing virtual-hosting policies",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "getServerAddress",
          "package": "direct-http",
          "partial": "Server Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getServerAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms the web server and the user agent that the request has completed.\n   As side-effects, the response headers are sent if they have not yet been,\n   any unread input is discarded and no more can be read, and any unsent\n   output is sent.  This is implicitly called, if it has not already been,\n   after the handler returns; it may be useful within a handler if the\n   handler wishes to return results and then perform time-consuming\n   computations before exiting.  If output has already been closed, causes an\n   \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.  If the response headers imply that there\n   will be a certain amount of data and there is not, causes an\n   \u003ccode\u003e\u003ca\u003eOutputIncomplete\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "httpCloseOutput",
          "package": "direct-http",
          "signature": "m ()",
          "source": "src/Network-HTTP.html#httpCloseOutput",
          "type": "function"
        },
        "index": {
          "description": "Informs the web server and the user agent that the request has completed As side-effects the response headers are sent if they have not yet been any unread input is discarded and no more can be read and any unsent output is sent This is implicitly called if it has not already been after the handler returns it may be useful within handler if the handler wishes to return results and then perform time-consuming computations before exiting If output has already been closed causes an OutputAlreadyClosed exception If the response headers imply that there will be certain amount of data and there is not causes an OutputIncomplete exception",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "httpCloseOutput",
          "normalized": "a()",
          "package": "direct-http",
          "partial": "Close Output",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpCloseOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForks a thread to run the given action, using the forking primitive that\n   was passed in the configuration to \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e, and additionally\n   registers that thread with the main server thread, which has the sole\n   effect and purpose of causing the server to not exit until and unless the\n   child thread does.  All of the listener-socket and connection threads\n   created by the server go through this function.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "httpFork",
          "package": "direct-http",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/Network-HTTP.html#httpFork",
          "type": "function"
        },
        "index": {
          "description": "Forks thread to run the given action using the forking primitive that was passed in the configuration to acceptLoop and additionally registers that thread with the main server thread which has the sole effect and purpose of causing the server to not exit until and unless the child thread does All of the listener-socket and connection threads created by the server go through this function",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "httpFork",
          "normalized": "a()-\u003ea ThreadId",
          "package": "direct-http",
          "partial": "Fork",
          "signature": "m()-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads up to a specified amount of data from the content of the HTTP\n   request, if any, and interprets it as binary data.  If input has been\n   closed, returns an empty bytestring.  If no input is immediately\n   available, blocks until there is some.  If output has been closed, causes\n   an \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "httpGet",
          "package": "direct-http",
          "signature": "Int -\u003e m ByteString",
          "source": "src/Network-HTTP.html#httpGet",
          "type": "function"
        },
        "index": {
          "description": "Reads up to specified amount of data from the content of the HTTP request if any and interprets it as binary data If input has been closed returns an empty bytestring If no input is immediately available blocks until there is some If output has been closed causes an OutputAlreadyClosed exception",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "httpGet",
          "normalized": "Int-\u003ea ByteString",
          "package": "direct-http",
          "partial": "Get",
          "signature": "Int-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads all remaining data from the content of the HTTP request, if any,\n   and interprets it as binary data.  Blocks until all input has been\n   read.  If input has been closed, returns an empty bytestring.  If output\n   has been closed, causes an \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "httpGetContents",
          "package": "direct-http",
          "signature": "m ByteString",
          "source": "src/Network-HTTP.html#httpGetContents",
          "type": "function"
        },
        "index": {
          "description": "Reads all remaining data from the content of the HTTP request if any and interprets it as binary data Blocks until all input has been read If input has been closed returns an empty bytestring If output has been closed causes an OutputAlreadyClosed exception",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "httpGetContents",
          "package": "direct-http",
          "partial": "Get Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads up to a specified amount of data from the content of the HTTP\n   request, if any, and interprets it as binary data.  If input has been\n   closed, returns an empty bytestring.  If insufficient input is available,\n   returns any input which is immediately available, or an empty bytestring\n   if there is none, never blocking.  If output has been closed, causes an\n   \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "httpGetNonBlocking",
          "package": "direct-http",
          "signature": "Int -\u003e m ByteString",
          "source": "src/Network-HTTP.html#httpGetNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "Reads up to specified amount of data from the content of the HTTP request if any and interprets it as binary data If input has been closed returns an empty bytestring If insufficient input is available returns any input which is immediately available or an empty bytestring if there is none never blocking If output has been closed causes an OutputAlreadyClosed exception",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "httpGetNonBlocking",
          "normalized": "Int-\u003ea ByteString",
          "package": "direct-http",
          "partial": "Get Non Blocking",
          "signature": "Int-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the content of the HTTP request potentially has data\n   remaining, either in the buffer or yet to be read.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "httpIsReadable",
          "package": "direct-http",
          "signature": "m Bool",
          "source": "src/Network-HTTP.html#httpIsReadable",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the content of the HTTP request potentially has data remaining either in the buffer or yet to be read",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "httpIsReadable",
          "package": "direct-http",
          "partial": "Is Readable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpIsReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether it is possible to write more data; ie, whether output has\n   not yet been closed as by \u003ccode\u003e\u003ca\u003ehttpCloseOutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "httpIsWritable",
          "package": "direct-http",
          "signature": "m Bool",
          "source": "src/Network-HTTP.html#httpIsWritable",
          "type": "function"
        },
        "index": {
          "description": "Returns whether it is possible to write more data ie whether output has not yet been closed as by httpCloseOutput",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "httpIsWritable",
          "package": "direct-http",
          "partial": "Is Writable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpIsWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogs a message using the web server's logging facility, prefixed with a\n   timestamp.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "httpLog",
          "package": "direct-http",
          "signature": "String -\u003e m ()",
          "source": "src/Network-HTTP.html#httpLog",
          "type": "function"
        },
        "index": {
          "description": "Logs message using the web server logging facility prefixed with timestamp",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "httpLog",
          "normalized": "String-\u003ea()",
          "package": "direct-http",
          "partial": "Log",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends data, interpreted as binary, to the content of the HTTP response.\n   Makes the response headers no longer modifiable, effective immediately.\n   If output has already been closed, causes an \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e\n   exception.  If the response Transfer-Encoding as set in the response\n   headers is \u003ca\u003eidentity\u003c/a\u003e or omitted, and the response Content-Length is\n   omitted, data is buffered until output is closed, then sent all at once\n   with an appropriate Content-Length header.  Otherwise - that is, if there\n   is a Transfer-Encoding other than \u003ca\u003eidentity\u003c/a\u003e set, or if Content-Length is\n   set - data is sent immediately.  If Content-Length is set, and the\n   provided data would cause the cumulative data sent to exceed that length,\n   causes an \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.  At the time that data is\n   actually sent, if the response headers have not been sent, first sends\n   them.\n\u003c/p\u003e\u003cp\u003eIn other words, there are effectively three modes of operation for output.\n   The first, simplest mode is used if the handler does nothing special.  In\n   this mode output is buffered and sent all at once; headers are not sent\n   until this time.  In this mode \u003ccode\u003e\u003ca\u003ehttpCloseOutput\u003c/a\u003e\u003c/code\u003e may be useful to force\n   output to be sent before the handler returns, perhaps so that additional\n   time-consuming processing can be done.  This mode is easiest to use, in the\n   sense that it requires no support on the handler's part, but probably the\n   second mode should always be used instead.\n\u003c/p\u003e\u003cp\u003eThe second mode is used if the handler sets a Transfer-Encoding, for\n   example \u003ca\u003echunked\u003c/a\u003e, and no Content-Length.  In this case headers are sent\n   immediately upon the first \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehttpPutStr\u003c/a\u003e\u003c/code\u003e, and output is sent\n   as it is provided.  Output in this mode is transformed by \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e into\n   the appropriate transfer encoding.  Thus handler code need only specify a\n   transfer encoding, not actually implement that encoding itself.  This mode\n   is advantageous to allow user agents to begin displaying partial content as\n   it is received, and particularly useful when the content is quite large\n   or takes significant time to generate.  If you are unsure which mode to\n   use, it should probably be this one.\n\u003c/p\u003e\u003cp\u003eThe third mode is used if the handler sets a Content-Length and no\n   Transfer-Encoding.  In this case headers are again sent immediately upon\n   the first \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehttpPutStr\u003c/a\u003e\u003c/code\u003e, and output is again sent as it is\n   provided.  Output in this mode is not transformed.  This may be more\n   efficient than the second mode if output is generated in many small pieces,\n   as it avoids computing and sending the length tags of the \u003ca\u003echunked\u003c/a\u003e\n   encoding.  However, it requires the content length to be known in advance\n   of actually sending any content.  It may be useful if you wish to have\n   direct-http validate that the handler is well-behaved in sending a binary\n   object of known size with no \u003ca\u003egarbage\u003c/a\u003e inserted by spurious additional\n   puts.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "httpPut",
          "package": "direct-http",
          "signature": "ByteString -\u003e m ()",
          "source": "src/Network-HTTP.html#httpPut",
          "type": "function"
        },
        "index": {
          "description": "Appends data interpreted as binary to the content of the HTTP response Makes the response headers no longer modifiable effective immediately If output has already been closed causes an OutputAlreadyClosed exception If the response Transfer-Encoding as set in the response headers is identity or omitted and the response Content-Length is omitted data is buffered until output is closed then sent all at once with an appropriate Content-Length header Otherwise that is if there is Transfer-Encoding other than identity set or if Content-Length is set data is sent immediately If Content-Length is set and the provided data would cause the cumulative data sent to exceed that length causes an OutputAlreadyClosed exception At the time that data is actually sent if the response headers have not been sent first sends them In other words there are effectively three modes of operation for output The first simplest mode is used if the handler does nothing special In this mode output is buffered and sent all at once headers are not sent until this time In this mode httpCloseOutput may be useful to force output to be sent before the handler returns perhaps so that additional time-consuming processing can be done This mode is easiest to use in the sense that it requires no support on the handler part but probably the second mode should always be used instead The second mode is used if the handler sets Transfer-Encoding for example chunked and no Content-Length In this case headers are sent immediately upon the first httpPut or httpPutStr and output is sent as it is provided Output in this mode is transformed by httpPut into the appropriate transfer encoding Thus handler code need only specify transfer encoding not actually implement that encoding itself This mode is advantageous to allow user agents to begin displaying partial content as it is received and particularly useful when the content is quite large or takes significant time to generate If you are unsure which mode to use it should probably be this one The third mode is used if the handler sets Content-Length and no Transfer-Encoding In this case headers are again sent immediately upon the first httpPut or httpPutStr and output is again sent as it is provided Output in this mode is not transformed This may be more efficient than the second mode if output is generated in many small pieces as it avoids computing and sending the length tags of the chunked encoding However it requires the content length to be known in advance of actually sending any content It may be useful if you wish to have direct-http validate that the handler is well-behaved in sending binary object of known size with no garbage inserted by spurious additional puts",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "httpPut",
          "normalized": "ByteString-\u003ea()",
          "package": "direct-http",
          "partial": "Put",
          "signature": "ByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends text, encoded as UTF8, to the content of the HTTP response.  In\n   all respects this behaves as \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e, but for the fact that it takes\n   text rather than binary data.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "httpPutStr",
          "package": "direct-http",
          "signature": "String -\u003e m ()",
          "source": "src/Network-HTTP.html#httpPutStr",
          "type": "function"
        },
        "index": {
          "description": "Appends text encoded as UTF8 to the content of the HTTP response In all respects this behaves as httpPut but for the fact that it takes text rather than binary data",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "httpPutStr",
          "normalized": "String-\u003ea()",
          "package": "direct-http",
          "partial": "Put Str",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "listenSocketParametersAddress",
          "package": "direct-http",
          "signature": "SockAddr",
          "source": "src/Network-HTTP.html#HTTPListenSocketParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "listenSocketParametersAddress",
          "package": "direct-http",
          "partial": "Socket Parameters Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:listenSocketParametersAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "listenSocketParametersSecure",
          "package": "direct-http",
          "signature": "Bool",
          "source": "src/Network-HTTP.html#HTTPListenSocketParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "listenSocketParametersSecure",
          "package": "direct-http",
          "partial": "Socket Parameters Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:listenSocketParametersSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a cookie with the given parameters.  Version is set to 1.\n   Constructing the cookie does not cause it to be set; to do that, call \u003ccode\u003e\u003ca\u003esetCookie\u003c/a\u003e\u003c/code\u003e\n   on it.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "mkCookie",
          "package": "direct-http",
          "signature": "String-\u003e String-\u003e Maybe String-\u003e Maybe String-\u003e Maybe Int-\u003e Bool-\u003e Cookie",
          "type": "function"
        },
        "index": {
          "description": "Constructs cookie with the given parameters Version is set to Constructing the cookie does not cause it to be set to do that call setCookie on it",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "mkCookie",
          "normalized": "String-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eMaybe Int-\u003eBool-\u003eCookie",
          "package": "direct-http",
          "partial": "Cookie",
          "signature": "String-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eMaybe Int-\u003eBool-\u003eCookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:mkCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a cookie with the given name and value.  Version is set to 1;\n   path, domain, and maximum age are set to \u003ccode\u003eNothing\u003c/code\u003e; and the secure flag is\n   set to \u003ccode\u003eFalse\u003c/code\u003e.  Constructing the cookie does not cause it to be set; to do\n   that, call \u003ccode\u003e\u003ca\u003esetCookie\u003c/a\u003e\u003c/code\u003e on it.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "mkSimpleCookie",
          "package": "direct-http",
          "signature": "String-\u003e String-\u003e Cookie",
          "type": "function"
        },
        "index": {
          "description": "Constructs cookie with the given name and value Version is set to path domain and maximum age are set to Nothing and the secure flag is set to False Constructing the cookie does not cause it to be set to do that call setCookie on it",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "mkSimpleCookie",
          "normalized": "String-\u003eString-\u003eCookie",
          "package": "direct-http",
          "partial": "Simple Cookie",
          "signature": "String-\u003eString-\u003eCookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:mkSimpleCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the HTTP/1.1 return status to 301 and sets the \u003ccode\u003e\u003ca\u003eHttpLocation\u003c/a\u003e\u003c/code\u003e header\n   to the provided URL.  This has the effect of issuing a permanent redirect\n   to the user agent.  Permanent redirects, as opposed to temporary redirects,\n   may cause bookmarks or incoming links to be updated.  If the response\n   headers have already been sent, or are no longer modifiable (because of a\n   call to \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "permanentRedirect",
          "package": "direct-http",
          "signature": "String-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the HTTP return status to and sets the HttpLocation header to the provided URL This has the effect of issuing permanent redirect to the user agent Permanent redirects as opposed to temporary redirects may cause bookmarks or incoming links to be updated If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "permanentRedirect",
          "normalized": "String-\u003ea()",
          "package": "direct-http",
          "partial": "Redirect",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:permanentRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the response headers are modifiable, a prerequisite of\n   which is that they have not already been sent.  (They might not be\n   modifiable because of a call to \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar.)\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "responseHeadersModifiable",
          "package": "direct-http",
          "signature": "m Bool",
          "source": "src/Network-HTTP.html#responseHeadersModifiable",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the response headers are modifiable prerequisite of which is that they have not already been sent They might not be modifiable because of call to httpPut or similar",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "responseHeadersModifiable",
          "package": "direct-http",
          "partial": "Headers Modifiable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:responseHeadersModifiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the response headers have been sent, regardless of whether\n   they are modifiable (they might not be because of a call to \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or\n   similar).\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "responseHeadersSent",
          "package": "direct-http",
          "signature": "m Bool",
          "source": "src/Network-HTTP.html#responseHeadersSent",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the response headers have been sent regardless of whether they are modifiable they might not be because of call to httpPut or similar",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "responseHeadersSent",
          "package": "direct-http",
          "partial": "Headers Sent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:responseHeadersSent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the HTTP/1.1 return status to 303 and sets the \u003ccode\u003e\u003ca\u003eHttpLocation\u003c/a\u003e\u003c/code\u003e header\n   to the provided URL.  This has the effect of issuing a see-other or\n   \u003ca\u003etemporary\u003c/a\u003e redirect to the user agent.  Temporary redirects, as opposed to\n   permanent redirects, do not cause bookmarks or incoming links to be\n   updated.  If the response headers have already been sent, or are no longer\n   modifiable (because of a call to \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a\n   \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "seeOtherRedirect",
          "package": "direct-http",
          "signature": "String-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the HTTP return status to and sets the HttpLocation header to the provided URL This has the effect of issuing see-other or temporary redirect to the user agent Temporary redirects as opposed to permanent redirects do not cause bookmarks or incoming links to be updated If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "seeOtherRedirect",
          "normalized": "String-\u003ea()",
          "package": "direct-http",
          "partial": "Other Redirect",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:seeOtherRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsures that the response headers have been sent.  If they are already\n   sent, does nothing.  If output has already been closed, causes an\n   \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.  Note that if the buffered identity\n   output mode (the first mode of operation described for \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e) is\n   to be used, this function implies that there is no additional content\n   beyond what has already been sent.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "sendResponseHeaders",
          "package": "direct-http",
          "signature": "m ()",
          "source": "src/Network-HTTP.html#sendResponseHeaders",
          "type": "function"
        },
        "index": {
          "description": "Ensures that the response headers have been sent If they are already sent does nothing If output has already been closed causes an OutputAlreadyClosed exception Note that if the buffered identity output mode the first mode of operation described for httpPut is to be used this function implies that there is no additional content beyond what has already been sent",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "sendResponseHeaders",
          "normalized": "a()",
          "package": "direct-http",
          "partial": "Response Headers",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:sendResponseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "serverParametersAccessLogPath",
          "package": "direct-http",
          "signature": "Maybe FilePath",
          "source": "src/Network-HTTP.html#HTTPServerParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "serverParametersAccessLogPath",
          "package": "direct-http",
          "partial": "Parameters Access Log Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersAccessLogPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "serverParametersDaemonize",
          "package": "direct-http",
          "signature": "Bool",
          "source": "src/Network-HTTP.html#HTTPServerParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "serverParametersDaemonize",
          "package": "direct-http",
          "partial": "Parameters Daemonize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersDaemonize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "serverParametersErrorLogPath",
          "package": "direct-http",
          "signature": "Maybe FilePath",
          "source": "src/Network-HTTP.html#HTTPServerParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "serverParametersErrorLogPath",
          "package": "direct-http",
          "partial": "Parameters Error Log Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersErrorLogPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "serverParametersForkPrimitive",
          "package": "direct-http",
          "signature": "IO () -\u003e IO ThreadId",
          "source": "src/Network-HTTP.html#HTTPServerParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "serverParametersForkPrimitive",
          "normalized": "IO()-\u003eIO ThreadId",
          "package": "direct-http",
          "partial": "Parameters Fork Primitive",
          "signature": "IO()-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersForkPrimitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "serverParametersGroupToChangeTo",
          "package": "direct-http",
          "signature": "Maybe String",
          "source": "src/Network-HTTP.html#HTTPServerParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "serverParametersGroupToChangeTo",
          "package": "direct-http",
          "partial": "Parameters Group To Change To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersGroupToChangeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "serverParametersListenSockets",
          "package": "direct-http",
          "signature": "[HTTPListenSocketParameters]",
          "source": "src/Network-HTTP.html#HTTPServerParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "serverParametersListenSockets",
          "normalized": "[HTTPListenSocketParameters]",
          "package": "direct-http",
          "partial": "Parameters Listen Sockets",
          "signature": "[HTTPListenSocketParameters]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersListenSockets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP",
          "name": "serverParametersUserToChangeTo",
          "package": "direct-http",
          "signature": "Maybe String",
          "source": "src/Network-HTTP.html#HTTPServerParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "serverParametersUserToChangeTo",
          "package": "direct-http",
          "partial": "Parameters User To Change To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersUserToChangeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCauses the user agent to record the given cookie and send it back with\n   future loads of this page.  Does not take effect instantly, but rather\n   when headers are sent.  Cookies are set in accordance with RFC 2109.\n   If an \u003ccode\u003e\u003ca\u003eHttpCookie\u003c/a\u003e\u003c/code\u003e header is set for this request by a call to\n   \u003ccode\u003e\u003ca\u003esetResponseHeader\u003c/a\u003e\u003c/code\u003e, this function has no effect.  If the response headers\n   have already been sent, or are no longer modifiable (because of a call to\n   \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.\n   If the name is not a possible name for a cookie, causes a \u003ccode\u003e\u003ca\u003eCookieNameInvalid\u003c/a\u003e\u003c/code\u003e\n   exception.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "setCookie",
          "package": "direct-http",
          "signature": "Cookie-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Causes the user agent to record the given cookie and send it back with future loads of this page Does not take effect instantly but rather when headers are sent Cookies are set in accordance with RFC If an HttpCookie header is set for this request by call to setResponseHeader this function has no effect If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception If the name is not possible name for cookie causes CookieNameInvalid exception",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "setCookie",
          "normalized": "Cookie-\u003ea()",
          "package": "direct-http",
          "partial": "Cookie",
          "signature": "Cookie-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:setCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the given response header to the given string value, overriding any\n   value which has previously been set.  If the response headers have\n   already been sent, or are no longer modifiable (because of a call to\n   \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.  If the header is not an\n   HTTP/1.1 or extension response, entity, or general header, ie, is not\n   valid as part of a response, causes a \u003ccode\u003e\u003ca\u003eNotAResponseHeader\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e\u003cp\u003eIf a value is set for the \u003ccode\u003e\u003ca\u003eHttpSetCookie\u003c/a\u003e\u003c/code\u003e header, this overrides all\n   cookies set for this request with \u003ccode\u003e\u003ca\u003esetCookie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "setResponseHeader",
          "package": "direct-http",
          "signature": "Header-\u003e String-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the given response header to the given string value overriding any value which has previously been set If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception If the header is not an HTTP or extension response entity or general header ie is not valid as part of response causes NotAResponseHeader exception If value is set for the HttpSetCookie header this overrides all cookies set for this request with setCookie",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "setResponseHeader",
          "normalized": "Header-\u003eString-\u003ea()",
          "package": "direct-http",
          "partial": "Response Header",
          "signature": "Header-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:setResponseHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the response status which will be sent with the response headers.  If\n   the response headers have already been sent, or are no longer modifiable\n   (because of a call to \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a\n   \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "setResponseStatus",
          "package": "direct-http",
          "signature": "Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the response status which will be sent with the response headers If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "setResponseStatus",
          "normalized": "Int-\u003ea()",
          "package": "direct-http",
          "partial": "Response Status",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:setResponseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCauses the user agent to unset any cookie applicable to this page with the\n   given name.  Does not take effect instantly, but rather when headers are\n   sent.  If an \u003ccode\u003e\u003ca\u003eHttpCookie\u003c/a\u003e\u003c/code\u003e header is set for this request by a call to\n   \u003ccode\u003e\u003ca\u003esetResponseHeader\u003c/a\u003e\u003c/code\u003e, this function has no effect.  If the response headers\n   have already been sent, or are no longer modifiable (because of a call to\n   \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.\n   If the name is not a possible name for a cookie, causes a\n   \u003ccode\u003e\u003ca\u003eCookieNameInvalid\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "unsetCookie",
          "package": "direct-http",
          "signature": "String-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Causes the user agent to unset any cookie applicable to this page with the given name Does not take effect instantly but rather when headers are sent If an HttpCookie header is set for this request by call to setResponseHeader this function has no effect If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception If the name is not possible name for cookie causes CookieNameInvalid exception",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "unsetCookie",
          "normalized": "String-\u003ea()",
          "package": "direct-http",
          "partial": "Cookie",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:unsetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCauses the given \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e response header not to be sent, overriding\n   any value which has previously been set.  If the response headers have\n   already been sent, or are no longer modifiable (because of a call to\n   \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.  If\n   the header is not an HTTP/1.1 or extension response or entity header, ie,\n   is not valid as part of a response, causes a \u003ccode\u003e\u003ca\u003eNotAResponseHeader\u003c/a\u003e\u003c/code\u003e\n   exception.\n\u003c/p\u003e\u003cp\u003eDoes not prevent the \u003ccode\u003e\u003ca\u003eHttpSetCookie\u003c/a\u003e\u003c/code\u003e header from being sent if cookies\n   have been set for this request with \u003ccode\u003e\u003ca\u003esetCookie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP",
          "name": "unsetResponseHeader",
          "package": "direct-http",
          "signature": "Header-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Causes the given Header response header not to be sent overriding any value which has previously been set If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception If the header is not an HTTP or extension response or entity header ie is not valid as part of response causes NotAResponseHeader exception Does not prevent the HttpSetCookie header from being sent if cookies have been set for this request with setCookie",
          "hierarchy": "Network HTTP",
          "module": "Network.HTTP",
          "name": "unsetResponseHeader",
          "normalized": "Header-\u003ea()",
          "package": "direct-http",
          "partial": "Response Header",
          "signature": "Header-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:unsetResponseHeader"
      }
    }
  ]
]