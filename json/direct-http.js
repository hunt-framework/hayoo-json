[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides facilities for implementing webservers, in a\n   servelet-like style.  The general philosophy is that direct-http makes\n   as few decisions as possible for the user code, allowing such things as\n   URL routing and virtual-host policies to be implemented in any desired\n   fashion.  It focuses on providing a robust transport layer which can\n   integrate well with any higher layer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP.html",
        "fct-type": "module",
        "title": "HTTP"
      },
      "index": {
        "description": "This module provides facilities for implementing webservers in servelet-like style The general philosophy is that direct-http makes as few decisions as possible for the user code allowing such things as URL routing and virtual-host policies to be implemented in any desired fashion It focuses on providing robust transport layer which can integrate well with any higher layer",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HTTP",
        "normalized": "",
        "package": "direct-http",
        "partial": "HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:Cookie",
      "description": {
        "fct-descr": "\u003cp\u003eAn object representing a cookie (a small piece of information, mostly\n   metadata, stored by a user-agent on behalf of the server), either one\n   received as part of the request or one to be sent as part of the\n   response.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP.html#Cookie",
        "fct-type": "data",
        "title": "Cookie"
      },
      "index": {
        "description": "An object representing cookie small piece of information mostly metadata stored by user-agent on behalf of the server either one received as part of the request or one to be sent as part of the response",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "Cookie",
        "normalized": "",
        "package": "direct-http",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:HTTP",
      "description": {
        "fct-descr": "\u003cp\u003eThe monad within which each single request from a client is handled.\n\u003c/p\u003e\u003cp\u003eNote that there is an instance \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eHTTP\u003c/a\u003e\u003c/code\u003e, so that\n   exceptions can be thrown, caught, and otherwise manipulated with the\n   lifted primitives from lifted-base's \u003ccode\u003e\u003ca\u003eLifted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP.html#HTTP",
        "fct-type": "type",
        "title": "HTTP"
      },
      "index": {
        "description": "The monad within which each single request from client is handled Note that there is an instance MonadBaseControl IO HTTP so that exceptions can be thrown caught and otherwise manipulated with the lifted primitives from lifted-base Lifted",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HTTP",
        "normalized": "",
        "package": "direct-http",
        "partial": "HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:HTTPException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception originating within the HTTP infrastructure or the web server.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP.html#HTTPException",
        "fct-type": "data",
        "title": "HTTPException"
      },
      "index": {
        "description": "An exception originating within the HTTP infrastructure or the web server",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HTTPException",
        "normalized": "",
        "package": "direct-http",
        "partial": "HTTPException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:HTTPListenSocketParameters",
      "description": {
        "fct-descr": "\u003cp\u003eA record used to configure an individual port listener and its socket as\n   part of the general server configuration.  Consists of a host address and\n   port number to bind the socket to, and a flag indicating whether the\n   listener should use the secure version of the protocol.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP.html#HTTPListenSocketParameters",
        "fct-type": "data",
        "title": "HTTPListenSocketParameters"
      },
      "index": {
        "description": "record used to configure an individual port listener and its socket as part of the general server configuration Consists of host address and port number to bind the socket to and flag indicating whether the listener should use the secure version of the protocol",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HTTPListenSocketParameters",
        "normalized": "",
        "package": "direct-http",
        "partial": "HTTPListen Socket Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:HTTPServerParameters",
      "description": {
        "fct-descr": "\u003cp\u003eA record used to configure the server.  Broken informally into the four\n   categories of logging, job-control, concurrency, and networking.  For\n   logging, the configuration contains optional paths to files for the\n   access and error logs (if these are omitted, logging is not done).  For\n   job-control, it contains a flag indicating whether to run as a daemon,\n   and optionally the names of a Unix user and/or group to switch to in the\n   process of daemonization.  For concurrency, it contains a forking\n   primitive such as \u003ccode\u003eforkIO\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e.  Finally, for networking, it\n   contains a list of parameters for ports to listen on, each of which has\n   its own sub-configuration record.\n\u003c/p\u003e\u003cp\u003eNotice that checking the value of the Host: header, and implementing\n   virtual-host policies, is not done by direct-http but rather is up to the\n   user of the library; hence, there is no information in the configuration\n   about the hostnames to accept from the user-agent.\n\u003c/p\u003e\u003cp\u003eIf the access logfile path is not Nothing, \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e opens this\n   logfile in append mode and uses it to log all accesses; otherwise, access\n   is not logged.\n\u003c/p\u003e\u003cp\u003eIf the error logfile path is not Nothing, \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e opens this logfile\n   in append mode and uses it to log all errors; otherwise, if not\n   daemonizing, errors are logged to standard output; if daemonizing, errors\n   are not logged.\n\u003c/p\u003e\u003cp\u003eIf the daemonize flag is True, \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e closes the standard IO\n   streams and moves the process into the background, doing all the usual\n   Unix things to make it run as a daemon henceforth.  This is optional\n   because it might be useful to turn it off for debugging purposes.\n\u003c/p\u003e\u003cp\u003eThe forking primitive is typically either \u003ccode\u003eforkIO\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e, and is\n   used by \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e both to create listener threads, and to create\n   connection threads.  It is valid to use a custom primitive, such as one\n   that attempts to pool OS threads, but it must actually provide\n   concurrency - otherwise there will be a deadlock. There is no support for\n   single-threaded operation.\n\u003c/p\u003e\u003cp\u003eNotice that we take the forking primitive in terms of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, even though\n   we actually lift it (with \u003ccode\u003e\u003ca\u003eliftBaseDiscard\u003c/a\u003e\u003c/code\u003e).  This is because\n   lifted-base, as of this writing and its version 0.1.1, only supports\n   \u003ccode\u003eforkIO\u003c/code\u003e and not \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe loop never returns, but will terminate the program with status 0 if\n   and when it ever has no child threads alive; child threads for this\n   purpose are those created through \u003ccode\u003e\u003ca\u003ehttpFork\u003c/a\u003e\u003c/code\u003e, which means all\n   listener-socket and connection threads created by \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e, as well\n   as any threads created by client code through \u003ccode\u003e\u003ca\u003ehttpFork\u003c/a\u003e\u003c/code\u003e, but not threads\n   created by client code through other mechanisms.\n\u003c/p\u003e\u003cp\u003eThe author of direct-http has made no effort to implement custom\n   thread-pooling forking primitives, but has attempted not to preclude\n   them.  If anyone attempts to implement such a thing, feedback is hereby\n   solicited.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP.html#HTTPServerParameters",
        "fct-type": "data",
        "title": "HTTPServerParameters"
      },
      "index": {
        "description": "record used to configure the server Broken informally into the four categories of logging job-control concurrency and networking For logging the configuration contains optional paths to files for the access and error logs if these are omitted logging is not done For job-control it contains flag indicating whether to run as daemon and optionally the names of Unix user and or group to switch to in the process of daemonization For concurrency it contains forking primitive such as forkIO or forkOS Finally for networking it contains list of parameters for ports to listen on each of which has its own sub-configuration record Notice that checking the value of the Host header and implementing virtual-host policies is not done by direct-http but rather is up to the user of the library hence there is no information in the configuration about the hostnames to accept from the user-agent If the access logfile path is not Nothing acceptLoop opens this logfile in append mode and uses it to log all accesses otherwise access is not logged If the error logfile path is not Nothing acceptLoop opens this logfile in append mode and uses it to log all errors otherwise if not daemonizing errors are logged to standard output if daemonizing errors are not logged If the daemonize flag is True acceptLoop closes the standard IO streams and moves the process into the background doing all the usual Unix things to make it run as daemon henceforth This is optional because it might be useful to turn it off for debugging purposes The forking primitive is typically either forkIO or forkOS and is used by acceptLoop both to create listener threads and to create connection threads It is valid to use custom primitive such as one that attempts to pool OS threads but it must actually provide concurrency otherwise there will be deadlock There is no support for single-threaded operation Notice that we take the forking primitive in terms of IO even though we actually lift it with liftBaseDiscard This is because lifted-base as of this writing and its version only supports forkIO and not forkOS The loop never returns but will terminate the program with status if and when it ever has no child threads alive child threads for this purpose are those created through httpFork which means all listener-socket and connection threads created by acceptLoop as well as any threads created by client code through httpFork but not threads created by client code through other mechanisms The author of direct-http has made no effort to implement custom thread-pooling forking primitives but has attempted not to preclude them If anyone attempts to implement such thing feedback is hereby solicited",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HTTPServerParameters",
        "normalized": "",
        "package": "direct-http",
        "partial": "HTTPServer Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:HTTPState",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque type representing the state of the HTTP server during a single\n   connection from a client.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP.html#HTTPState",
        "fct-type": "data",
        "title": "HTTPState"
      },
      "index": {
        "description": "An opaque type representing the state of the HTTP server during single connection from client",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HTTPState",
        "normalized": "",
        "package": "direct-http",
        "partial": "HTTPState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:Header",
      "description": {
        "fct-descr": "\u003cp\u003eHeaders are classified by HTTP/1.1 as request headers, response headers,\n   entity headers, or general headers.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "data",
        "title": "Header"
      },
      "index": {
        "description": "Headers are classified by HTTP as request headers response headers entity headers or general headers",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "Header",
        "normalized": "",
        "package": "direct-http",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#t:MonadHTTP",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monads within which the HTTP calls are valid.  You may wish\n   to create your own monad implementing this class.  Note that the\n   prerequisite is \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e m, which is similar to\n   \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e m, but with, among other things, more capability for\n   exception handling.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "class",
        "fct-source": "src/Network-HTTP.html#MonadHTTP",
        "fct-type": "class",
        "title": "MonadHTTP"
      },
      "index": {
        "description": "The class of monads within which the HTTP calls are valid You may wish to create your own monad implementing this class Note that the prerequisite is MonadBaseControl IO which is similar to MonadIO but with among other things more capability for exception handling",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "MonadHTTP",
        "normalized": "",
        "package": "direct-http",
        "partial": "Monad HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:Cookie",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Cookie",
        "fct-source": "src/Network-HTTP.html#Cookie",
        "fct-type": "function",
        "title": "Cookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "Cookie",
        "normalized": "",
        "package": "direct-http",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:CookieNameInvalid",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception thrown by operations which are given cookie names that do not\n   meet the appropriate syntax requirements.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "CookieNameInvalid String",
        "fct-source": "src/Network-HTTP.html#HTTPException",
        "fct-type": "function",
        "title": "CookieNameInvalid"
      },
      "index": {
        "description": "An exception thrown by operations which are given cookie names that do not meet the appropriate syntax requirements",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "CookieNameInvalid",
        "normalized": "",
        "package": "direct-http",
        "partial": "Cookie Name Invalid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HTTPListenSocketParameters",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HTTPListenSocketParameters",
        "fct-source": "src/Network-HTTP.html#HTTPListenSocketParameters",
        "fct-type": "function",
        "title": "HTTPListenSocketParameters"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HTTPListenSocketParameters",
        "normalized": "",
        "package": "direct-http",
        "partial": "HTTPListen Socket Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HTTPServerParameters",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HTTPServerParameters",
        "fct-source": "src/Network-HTTP.html#HTTPServerParameters",
        "fct-type": "function",
        "title": "HTTPServerParameters"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HTTPServerParameters",
        "normalized": "",
        "package": "direct-http",
        "partial": "HTTPServer Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAccept",
      "description": {
        "fct-descr": "\u003cp\u003eRequest headers\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpAccept",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpAccept"
      },
      "index": {
        "description": "Request headers",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpAccept",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Accept",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAcceptCharset",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpAcceptCharset",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpAcceptCharset"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpAcceptCharset",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Accept Charset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAcceptEncoding",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpAcceptEncoding",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpAcceptEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpAcceptEncoding",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Accept Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAcceptLanguage",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpAcceptLanguage",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpAcceptLanguage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpAcceptLanguage",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Accept Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAcceptRanges",
      "description": {
        "fct-descr": "\u003cp\u003eResponse headers\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpAcceptRanges",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpAcceptRanges"
      },
      "index": {
        "description": "Response headers",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpAcceptRanges",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Accept Ranges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAge",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpAge",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpAge"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpAge",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Age",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAllow",
      "description": {
        "fct-descr": "\u003cp\u003eEntity headers\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpAllow",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpAllow"
      },
      "index": {
        "description": "Entity headers",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpAllow",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Allow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpAuthorization",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpAuthorization",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpAuthorization"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpAuthorization",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Authorization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpCacheControl",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral headers\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpCacheControl",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpCacheControl"
      },
      "index": {
        "description": "General headers",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpCacheControl",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Cache Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpConnection",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpConnection",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpConnection",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentEncoding",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpContentEncoding",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpContentEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpContentEncoding",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Content Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentLanguage",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpContentLanguage",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpContentLanguage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpContentLanguage",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Content Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentLength",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpContentLength",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpContentLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpContentLength",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Content Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentLocation",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpContentLocation",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpContentLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpContentLocation",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Content Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentMD5",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpContentMD5",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpContentMD5"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpContentMD5",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Content MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentRange",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpContentRange",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpContentRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpContentRange",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Content Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpContentType",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpContentType",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpContentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpContentType",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpCookie",
      "description": {
        "fct-descr": "\u003cp\u003eNonstandard headers\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpCookie",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpCookie"
      },
      "index": {
        "description": "Nonstandard headers",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpCookie",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpDate",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpDate",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpDate",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpETag",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpETag",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpETag"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpETag",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http ETag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpExpect",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpExpect",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpExpect"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpExpect",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Expect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpExpires",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpExpires",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpExpires"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpExpires",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Expires",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpExtensionHeader",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpExtensionHeader ByteString",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpExtensionHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpExtensionHeader",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Extension Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpFrom",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpFrom",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpFrom",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpHost",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpHost",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpHost",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpIfMatch",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpIfMatch",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpIfMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpIfMatch",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http If Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpIfModifiedSince",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpIfModifiedSince",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpIfModifiedSince"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpIfModifiedSince",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http If Modified Since",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpIfNoneMatch",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpIfNoneMatch",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpIfNoneMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpIfNoneMatch",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http If None Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpIfRange",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpIfRange",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpIfRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpIfRange",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http If Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpIfUnmodifiedSince",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpIfUnmodifiedSince",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpIfUnmodifiedSince"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpIfUnmodifiedSince",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http If Unmodified Since",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpLastModified",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpLastModified",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpLastModified"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpLastModified",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Last Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpLocation",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpLocation",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpLocation",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpMaxForwards",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpMaxForwards",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpMaxForwards"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpMaxForwards",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Max Forwards",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpPragma",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpPragma",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpPragma"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpPragma",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Pragma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpProxyAuthenticate",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpProxyAuthenticate",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpProxyAuthenticate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpProxyAuthenticate",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Proxy Authenticate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpProxyAuthorization",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpProxyAuthorization",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpProxyAuthorization"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpProxyAuthorization",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Proxy Authorization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpRange",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpRange",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpRange",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpReferrer",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpReferrer",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpReferrer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpReferrer",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Referrer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpRetryAfter",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpRetryAfter",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpRetryAfter"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpRetryAfter",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Retry After",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpServer",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpServer",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpServer",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpSetCookie",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpSetCookie",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpSetCookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpSetCookie",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Set Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpTE",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpTE",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpTE",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpTrailer",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpTrailer",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpTrailer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpTrailer",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Trailer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpTransferEncoding",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpTransferEncoding",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpTransferEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpTransferEncoding",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Transfer Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpUpgrade",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpUpgrade",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpUpgrade"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpUpgrade",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Upgrade",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpUserAgent",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpUserAgent",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpUserAgent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpUserAgent",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http User Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpVary",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpVary",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpVary"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpVary",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Vary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpVia",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpVia",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpVia"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpVia",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Via",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpWWWAuthenticate",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpWWWAuthenticate",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpWWWAuthenticate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpWWWAuthenticate",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http WWWAuthenticate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:HttpWarning",
      "description": {
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HttpWarning",
        "fct-source": "src/Network-HTTP.html#Header",
        "fct-type": "function",
        "title": "HttpWarning"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "HttpWarning",
        "normalized": "",
        "package": "direct-http",
        "partial": "Http Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:NoConnection",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception thrown by operations which expect a connection to\n   exist (as it always does within a handler), when none does.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "NoConnection",
        "fct-source": "src/Network-HTTP.html#HTTPException",
        "fct-type": "function",
        "title": "NoConnection"
      },
      "index": {
        "description": "An exception thrown by operations which expect connection to exist as it always does within handler when none does",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "NoConnection",
        "normalized": "",
        "package": "direct-http",
        "partial": "No Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:NotAResponseHeader",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception thrown by operations which are given a header that does not\n   meet their requirement of being valid in a response.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "NotAResponseHeader Header",
        "fct-source": "src/Network-HTTP.html#HTTPException",
        "fct-type": "function",
        "title": "NotAResponseHeader"
      },
      "index": {
        "description": "An exception thrown by operations which are given header that does not meet their requirement of being valid in response",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "NotAResponseHeader",
        "normalized": "",
        "package": "direct-http",
        "partial": "Not AResponse Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:OutputAlreadyClosed",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception thrown by operations which produce output when output has\n   been closed, as by \u003ccode\u003e\u003ca\u003ehttpCloseOutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "OutputAlreadyClosed",
        "fct-source": "src/Network-HTTP.html#HTTPException",
        "fct-type": "function",
        "title": "OutputAlreadyClosed"
      },
      "index": {
        "description": "An exception thrown by operations which produce output when output has been closed as by httpCloseOutput",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "OutputAlreadyClosed",
        "normalized": "",
        "package": "direct-http",
        "partial": "Output Already Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:OutputIncomplete",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception thrown when output is closed, as by \u003ccode\u003e\u003ca\u003ehttpCloseOutput\u003c/a\u003e\u003c/code\u003e,\n   when the response headers imply that there will be a certain amount\n   of data and there is not.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "OutputIncomplete",
        "fct-source": "src/Network-HTTP.html#HTTPException",
        "fct-type": "function",
        "title": "OutputIncomplete"
      },
      "index": {
        "description": "An exception thrown when output is closed as by httpCloseOutput when the response headers imply that there will be certain amount of data and there is not",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "OutputIncomplete",
        "normalized": "",
        "package": "direct-http",
        "partial": "Output Incomplete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:ResponseHeadersAlreadySent",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception thrown by operations which require the response headers not\n   to have been sent yet.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "ResponseHeadersAlreadySent",
        "fct-source": "src/Network-HTTP.html#HTTPException",
        "fct-type": "function",
        "title": "ResponseHeadersAlreadySent"
      },
      "index": {
        "description": "An exception thrown by operations which require the response headers not to have been sent yet",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "ResponseHeadersAlreadySent",
        "normalized": "",
        "package": "direct-http",
        "partial": "Response Headers Already Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:ResponseHeadersNotModifiable",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception thrown by operations which require the response headers\n   to still be modifiable.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "ResponseHeadersNotModifiable",
        "fct-source": "src/Network-HTTP.html#HTTPException",
        "fct-type": "function",
        "title": "ResponseHeadersNotModifiable"
      },
      "index": {
        "description": "An exception thrown by operations which require the response headers to still be modifiable",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "ResponseHeadersNotModifiable",
        "normalized": "",
        "package": "direct-http",
        "partial": "Response Headers Not Modifiable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:acceptLoop",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a server parameters record and a handler, and concurrently accepts\n   requests from user agents, forking with the primitive specified by the\n   parameters and invoking the handler in the forked thread inside the\n   \u003ccode\u003e\u003ca\u003eHTTP\u003c/a\u003e\u003c/code\u003e monad for each request.\n\u003c/p\u003e\u003cp\u003eNote that although there is no mechanism to substitute another type of\n   monad for HTTP, you can enter your own monad within the handler, much as\n   you would enter your own monad within IO.  You simply have to implement\n   the \u003ccode\u003e\u003ca\u003eMonadHTTP\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eAny exceptions not caught within the handler are caught by\n   \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e, and cause the termination of that handler, but not\n   of the connection or the accept loop.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "HTTPServerParameters-\u003e HTTP ()-\u003e IO ()",
        "fct-type": "function",
        "title": "acceptLoop"
      },
      "index": {
        "description": "Takes server parameters record and handler and concurrently accepts requests from user agents forking with the primitive specified by the parameters and invoking the handler in the forked thread inside the HTTP monad for each request Note that although there is no mechanism to substitute another type of monad for HTTP you can enter your own monad within the handler much as you would enter your own monad within IO You simply have to implement the MonadHTTP class Any exceptions not caught within the handler are caught by acceptLoop and cause the termination of that handler but not of the connection or the accept loop",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "acceptLoop",
        "normalized": "HTTPServerParameters-\u003eHTTP()-\u003eIO()",
        "package": "direct-http",
        "partial": "Loop",
        "signature": "HTTPServerParameters-\u003eHTTP()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieComment",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP.html#Cookie",
        "fct-type": "function",
        "title": "cookieComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "cookieComment",
        "normalized": "",
        "package": "direct-http",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieDomain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP.html#Cookie",
        "fct-type": "function",
        "title": "cookieDomain"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "cookieDomain",
        "normalized": "",
        "package": "direct-http",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieMaxAge",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Network-HTTP.html#Cookie",
        "fct-type": "function",
        "title": "cookieMaxAge"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "cookieMaxAge",
        "normalized": "",
        "package": "direct-http",
        "partial": "Max Age",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP.html#Cookie",
        "fct-type": "function",
        "title": "cookieName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "cookieName",
        "normalized": "",
        "package": "direct-http",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookiePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP.html#Cookie",
        "fct-type": "function",
        "title": "cookiePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "cookiePath",
        "normalized": "",
        "package": "direct-http",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieSecure",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Bool",
        "fct-source": "src/Network-HTTP.html#Cookie",
        "fct-type": "function",
        "title": "cookieSecure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "cookieSecure",
        "normalized": "",
        "package": "direct-http",
        "partial": "Secure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP.html#Cookie",
        "fct-type": "function",
        "title": "cookieValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "cookieValue",
        "normalized": "",
        "package": "direct-http",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:cookieVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Int",
        "fct-source": "src/Network-HTTP.html#Cookie",
        "fct-type": "function",
        "title": "cookieVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "cookieVersion",
        "normalized": "",
        "package": "direct-http",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getAllCookies",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e objects provided by the user agent in accordance \n   RFC 2109.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m [Cookie]",
        "fct-source": "src/Network-HTTP.html#getAllCookies",
        "fct-type": "function",
        "title": "getAllCookies"
      },
      "index": {
        "description": "Returns all Cookie objects provided by the user agent in accordance RFC",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getAllCookies",
        "normalized": "a[Cookie]",
        "package": "direct-http",
        "partial": "All Cookies",
        "signature": "m[Cookie]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getAllRequestHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an association list of name-value pairs of all the HTTP/1.1 request\n   or entity headers from the user agent.  If some of these headers are to be\n   provided after the content as specified by the Trailer header, this is\n   potentially time-consuming.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m [(Header, String)]",
        "fct-source": "src/Network-HTTP.html#getAllRequestHeaders",
        "fct-type": "function",
        "title": "getAllRequestHeaders"
      },
      "index": {
        "description": "Returns an association list of name-value pairs of all the HTTP request or entity headers from the user agent If some of these headers are to be provided after the content as specified by the Trailer header this is potentially time-consuming",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getAllRequestHeaders",
        "normalized": "a[(Header,String)]",
        "package": "direct-http",
        "partial": "All Request Headers",
        "signature": "m[(Header,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getContentLength",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the request content length, if this is knowable without actually\n   receiving the content - in particular, if the Content-Length header was\n   used.  Otherwise, returns Nothing.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m (Maybe Int)",
        "fct-source": "src/Network-HTTP.html#getContentLength",
        "fct-type": "function",
        "title": "getContentLength"
      },
      "index": {
        "description": "Return the request content length if this is knowable without actually receiving the content in particular if the Content-Length header was used Otherwise returns Nothing",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getContentLength",
        "normalized": "",
        "package": "direct-http",
        "partial": "Content Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getContentType",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the request content type, as provided by the user agent.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m (Maybe String)",
        "fct-source": "src/Network-HTTP.html#getContentType",
        "fct-type": "function",
        "title": "getContentType"
      },
      "index": {
        "description": "Return the request content type as provided by the user agent",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getContentType",
        "normalized": "",
        "package": "direct-http",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getCookie",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e object for the given name, if the user agent provided one\n   in accordance with RFC 2109.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String-\u003e m (Maybe Cookie)",
        "fct-type": "function",
        "title": "getCookie"
      },
      "index": {
        "description": "Returns Cookie object for the given name if the user agent provided one in accordance with RFC",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getCookie",
        "normalized": "String-\u003ea(Maybe Cookie)",
        "package": "direct-http",
        "partial": "Cookie",
        "signature": "String-\u003em(Maybe Cookie)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getCookieValue",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience method; as \u003ccode\u003e\u003ca\u003egetCookie\u003c/a\u003e\u003c/code\u003e, but returns only the value of the\n   cookie rather than a \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String-\u003e m (Maybe String)",
        "fct-type": "function",
        "title": "getCookieValue"
      },
      "index": {
        "description": "convenience method as getCookie but returns only the value of the cookie rather than Cookie object",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getCookieValue",
        "normalized": "String-\u003ea(Maybe String)",
        "package": "direct-http",
        "partial": "Cookie Value",
        "signature": "String-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getHTTPState",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the opaque \u003ccode\u003e\u003ca\u003eHTTPState\u003c/a\u003e\u003c/code\u003e object representing the state of\n   the HTTP server.\n   Should not be called directly by user code, except implementations of\n   \u003ccode\u003e\u003ca\u003eMonadHTTP\u003c/a\u003e\u003c/code\u003e; exported so that\n   user monads can implement the interface.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m HTTPState",
        "fct-source": "src/Network-HTTP.html#getHTTPState",
        "fct-type": "method",
        "title": "getHTTPState"
      },
      "index": {
        "description": "Returns the opaque HTTPState object representing the state of the HTTP server Should not be called directly by user code except implementations of MonadHTTP exported so that user monads can implement the interface",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getHTTPState",
        "normalized": "",
        "package": "direct-http",
        "partial": "HTTPState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getRemoteAddress",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the remote address, which includes both host and port information.\n   They are provided in the aggregate like this because it is the most\n   internet-protocol-agnostic representation.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m SockAddr",
        "fct-source": "src/Network-HTTP.html#getRemoteAddress",
        "fct-type": "function",
        "title": "getRemoteAddress"
      },
      "index": {
        "description": "Return the remote address which includes both host and port information They are provided in the aggregate like this because it is the most internet-protocol-agnostic representation",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getRemoteAddress",
        "normalized": "",
        "package": "direct-http",
        "partial": "Remote Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getRequestHeader",
      "description": {
        "fct-descr": "\u003cp\u003eQueries the value from the user agent of the given HTTP/1.1 header.  If\n   the header is to be provided after the content as specified by the\n   Trailer header, this is potentially time-consuming.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Header-\u003e m (Maybe String)",
        "fct-type": "function",
        "title": "getRequestHeader"
      },
      "index": {
        "description": "Queries the value from the user agent of the given HTTP header If the header is to be provided after the content as specified by the Trailer header this is potentially time-consuming",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getRequestHeader",
        "normalized": "Header-\u003ea(Maybe String)",
        "package": "direct-http",
        "partial": "Request Header",
        "signature": "Header-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getRequestMethod",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the request method.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m String",
        "fct-source": "src/Network-HTTP.html#getRequestMethod",
        "fct-type": "function",
        "title": "getRequestMethod"
      },
      "index": {
        "description": "Return the request method",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getRequestMethod",
        "normalized": "",
        "package": "direct-http",
        "partial": "Request Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getRequestURI",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the request URI.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m String",
        "fct-source": "src/Network-HTTP.html#getRequestURI",
        "fct-type": "function",
        "title": "getRequestURI"
      },
      "index": {
        "description": "Return the request URI",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getRequestURI",
        "normalized": "",
        "package": "direct-http",
        "partial": "Request URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getResponseHeader",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the value of the given header which will be or has been sent with\n   the response headers.  If the header is not an HTTP/1.1 or extension\n   response, entity, or general header, ie, is not valid as part of a\n   response, causes a \u003ccode\u003e\u003ca\u003eNotAResponseHeader\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Header-\u003e m (Maybe String)",
        "fct-type": "function",
        "title": "getResponseHeader"
      },
      "index": {
        "description": "Returns the value of the given header which will be or has been sent with the response headers If the header is not an HTTP or extension response entity or general header ie is not valid as part of response causes NotAResponseHeader exception",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getResponseHeader",
        "normalized": "Header-\u003ea(Maybe String)",
        "package": "direct-http",
        "partial": "Response Header",
        "signature": "Header-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getResponseStatus",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the response status which will be or has been sent with the response\n   headers.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m Int",
        "fct-type": "function",
        "title": "getResponseStatus"
      },
      "index": {
        "description": "Returns the response status which will be or has been sent with the response headers",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getResponseStatus",
        "normalized": "",
        "package": "direct-http",
        "partial": "Response Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:getServerAddress",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the server address and port, as a \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e.  Useful\n   for implementing virtual-hosting policies.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m SockAddr",
        "fct-source": "src/Network-HTTP.html#getServerAddress",
        "fct-type": "function",
        "title": "getServerAddress"
      },
      "index": {
        "description": "Return the server address and port as SockAddr Useful for implementing virtual-hosting policies",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "getServerAddress",
        "normalized": "",
        "package": "direct-http",
        "partial": "Server Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpCloseOutput",
      "description": {
        "fct-descr": "\u003cp\u003eInforms the web server and the user agent that the request has completed.\n   As side-effects, the response headers are sent if they have not yet been,\n   any unread input is discarded and no more can be read, and any unsent\n   output is sent.  This is implicitly called, if it has not already been,\n   after the handler returns; it may be useful within a handler if the\n   handler wishes to return results and then perform time-consuming\n   computations before exiting.  If output has already been closed, causes an\n   \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.  If the response headers imply that there\n   will be a certain amount of data and there is not, causes an\n   \u003ccode\u003e\u003ca\u003eOutputIncomplete\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m ()",
        "fct-source": "src/Network-HTTP.html#httpCloseOutput",
        "fct-type": "function",
        "title": "httpCloseOutput"
      },
      "index": {
        "description": "Informs the web server and the user agent that the request has completed As side-effects the response headers are sent if they have not yet been any unread input is discarded and no more can be read and any unsent output is sent This is implicitly called if it has not already been after the handler returns it may be useful within handler if the handler wishes to return results and then perform time-consuming computations before exiting If output has already been closed causes an OutputAlreadyClosed exception If the response headers imply that there will be certain amount of data and there is not causes an OutputIncomplete exception",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "httpCloseOutput",
        "normalized": "a()",
        "package": "direct-http",
        "partial": "Close Output",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpFork",
      "description": {
        "fct-descr": "\u003cp\u003eForks a thread to run the given action, using the forking primitive that\n   was passed in the configuration to \u003ccode\u003e\u003ca\u003eacceptLoop\u003c/a\u003e\u003c/code\u003e, and additionally\n   registers that thread with the main server thread, which has the sole\n   effect and purpose of causing the server to not exit until and unless the\n   child thread does.  All of the listener-socket and connection threads\n   created by the server go through this function.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m () -\u003e m ThreadId",
        "fct-source": "src/Network-HTTP.html#httpFork",
        "fct-type": "function",
        "title": "httpFork"
      },
      "index": {
        "description": "Forks thread to run the given action using the forking primitive that was passed in the configuration to acceptLoop and additionally registers that thread with the main server thread which has the sole effect and purpose of causing the server to not exit until and unless the child thread does All of the listener-socket and connection threads created by the server go through this function",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "httpFork",
        "normalized": "a()-\u003ea ThreadId",
        "package": "direct-http",
        "partial": "Fork",
        "signature": "m()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpGet",
      "description": {
        "fct-descr": "\u003cp\u003eReads up to a specified amount of data from the content of the HTTP\n   request, if any, and interprets it as binary data.  If input has been\n   closed, returns an empty bytestring.  If no input is immediately\n   available, blocks until there is some.  If output has been closed, causes\n   an \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Int -\u003e m ByteString",
        "fct-source": "src/Network-HTTP.html#httpGet",
        "fct-type": "function",
        "title": "httpGet"
      },
      "index": {
        "description": "Reads up to specified amount of data from the content of the HTTP request if any and interprets it as binary data If input has been closed returns an empty bytestring If no input is immediately available blocks until there is some If output has been closed causes an OutputAlreadyClosed exception",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "httpGet",
        "normalized": "Int-\u003ea ByteString",
        "package": "direct-http",
        "partial": "Get",
        "signature": "Int-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eReads all remaining data from the content of the HTTP request, if any,\n   and interprets it as binary data.  Blocks until all input has been\n   read.  If input has been closed, returns an empty bytestring.  If output\n   has been closed, causes an \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m ByteString",
        "fct-source": "src/Network-HTTP.html#httpGetContents",
        "fct-type": "function",
        "title": "httpGetContents"
      },
      "index": {
        "description": "Reads all remaining data from the content of the HTTP request if any and interprets it as binary data Blocks until all input has been read If input has been closed returns an empty bytestring If output has been closed causes an OutputAlreadyClosed exception",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "httpGetContents",
        "normalized": "",
        "package": "direct-http",
        "partial": "Get Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpGetNonBlocking",
      "description": {
        "fct-descr": "\u003cp\u003eReads up to a specified amount of data from the content of the HTTP\n   request, if any, and interprets it as binary data.  If input has been\n   closed, returns an empty bytestring.  If insufficient input is available,\n   returns any input which is immediately available, or an empty bytestring\n   if there is none, never blocking.  If output has been closed, causes an\n   \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Int -\u003e m ByteString",
        "fct-source": "src/Network-HTTP.html#httpGetNonBlocking",
        "fct-type": "function",
        "title": "httpGetNonBlocking"
      },
      "index": {
        "description": "Reads up to specified amount of data from the content of the HTTP request if any and interprets it as binary data If input has been closed returns an empty bytestring If insufficient input is available returns any input which is immediately available or an empty bytestring if there is none never blocking If output has been closed causes an OutputAlreadyClosed exception",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "httpGetNonBlocking",
        "normalized": "Int-\u003ea ByteString",
        "package": "direct-http",
        "partial": "Get Non Blocking",
        "signature": "Int-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpIsReadable",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether the content of the HTTP request potentially has data\n   remaining, either in the buffer or yet to be read.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m Bool",
        "fct-source": "src/Network-HTTP.html#httpIsReadable",
        "fct-type": "function",
        "title": "httpIsReadable"
      },
      "index": {
        "description": "Returns whether the content of the HTTP request potentially has data remaining either in the buffer or yet to be read",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "httpIsReadable",
        "normalized": "",
        "package": "direct-http",
        "partial": "Is Readable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpIsWritable",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether it is possible to write more data; ie, whether output has\n   not yet been closed as by \u003ccode\u003e\u003ca\u003ehttpCloseOutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m Bool",
        "fct-source": "src/Network-HTTP.html#httpIsWritable",
        "fct-type": "function",
        "title": "httpIsWritable"
      },
      "index": {
        "description": "Returns whether it is possible to write more data ie whether output has not yet been closed as by httpCloseOutput",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "httpIsWritable",
        "normalized": "",
        "package": "direct-http",
        "partial": "Is Writable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpLog",
      "description": {
        "fct-descr": "\u003cp\u003eLogs a message using the web server's logging facility, prefixed with a\n   timestamp.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-HTTP.html#httpLog",
        "fct-type": "function",
        "title": "httpLog"
      },
      "index": {
        "description": "Logs message using the web server logging facility prefixed with timestamp",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "httpLog",
        "normalized": "String-\u003ea()",
        "package": "direct-http",
        "partial": "Log",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpPut",
      "description": {
        "fct-descr": "\u003cp\u003eAppends data, interpreted as binary, to the content of the HTTP response.\n   Makes the response headers no longer modifiable, effective immediately.\n   If output has already been closed, causes an \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e\n   exception.  If the response Transfer-Encoding as set in the response\n   headers is \u003ca\u003eidentity\u003c/a\u003e or omitted, and the response Content-Length is\n   omitted, data is buffered until output is closed, then sent all at once\n   with an appropriate Content-Length header.  Otherwise - that is, if there\n   is a Transfer-Encoding other than \u003ca\u003eidentity\u003c/a\u003e set, or if Content-Length is\n   set - data is sent immediately.  If Content-Length is set, and the\n   provided data would cause the cumulative data sent to exceed that length,\n   causes an \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.  At the time that data is\n   actually sent, if the response headers have not been sent, first sends\n   them.\n\u003c/p\u003e\u003cp\u003eIn other words, there are effectively three modes of operation for output.\n   The first, simplest mode is used if the handler does nothing special.  In\n   this mode output is buffered and sent all at once; headers are not sent\n   until this time.  In this mode \u003ccode\u003e\u003ca\u003ehttpCloseOutput\u003c/a\u003e\u003c/code\u003e may be useful to force\n   output to be sent before the handler returns, perhaps so that additional\n   time-consuming processing can be done.  This mode is easiest to use, in the\n   sense that it requires no support on the handler's part, but probably the\n   second mode should always be used instead.\n\u003c/p\u003e\u003cp\u003eThe second mode is used if the handler sets a Transfer-Encoding, for\n   example \u003ca\u003echunked\u003c/a\u003e, and no Content-Length.  In this case headers are sent\n   immediately upon the first \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehttpPutStr\u003c/a\u003e\u003c/code\u003e, and output is sent\n   as it is provided.  Output in this mode is transformed by \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e into\n   the appropriate transfer encoding.  Thus handler code need only specify a\n   transfer encoding, not actually implement that encoding itself.  This mode\n   is advantageous to allow user agents to begin displaying partial content as\n   it is received, and particularly useful when the content is quite large\n   or takes significant time to generate.  If you are unsure which mode to\n   use, it should probably be this one.\n\u003c/p\u003e\u003cp\u003eThe third mode is used if the handler sets a Content-Length and no\n   Transfer-Encoding.  In this case headers are again sent immediately upon\n   the first \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehttpPutStr\u003c/a\u003e\u003c/code\u003e, and output is again sent as it is\n   provided.  Output in this mode is not transformed.  This may be more\n   efficient than the second mode if output is generated in many small pieces,\n   as it avoids computing and sending the length tags of the \u003ca\u003echunked\u003c/a\u003e\n   encoding.  However, it requires the content length to be known in advance\n   of actually sending any content.  It may be useful if you wish to have\n   direct-http validate that the handler is well-behaved in sending a binary\n   object of known size with no \u003ca\u003egarbage\u003c/a\u003e inserted by spurious additional\n   puts.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "ByteString -\u003e m ()",
        "fct-source": "src/Network-HTTP.html#httpPut",
        "fct-type": "function",
        "title": "httpPut"
      },
      "index": {
        "description": "Appends data interpreted as binary to the content of the HTTP response Makes the response headers no longer modifiable effective immediately If output has already been closed causes an OutputAlreadyClosed exception If the response Transfer-Encoding as set in the response headers is identity or omitted and the response Content-Length is omitted data is buffered until output is closed then sent all at once with an appropriate Content-Length header Otherwise that is if there is Transfer-Encoding other than identity set or if Content-Length is set data is sent immediately If Content-Length is set and the provided data would cause the cumulative data sent to exceed that length causes an OutputAlreadyClosed exception At the time that data is actually sent if the response headers have not been sent first sends them In other words there are effectively three modes of operation for output The first simplest mode is used if the handler does nothing special In this mode output is buffered and sent all at once headers are not sent until this time In this mode httpCloseOutput may be useful to force output to be sent before the handler returns perhaps so that additional time-consuming processing can be done This mode is easiest to use in the sense that it requires no support on the handler part but probably the second mode should always be used instead The second mode is used if the handler sets Transfer-Encoding for example chunked and no Content-Length In this case headers are sent immediately upon the first httpPut or httpPutStr and output is sent as it is provided Output in this mode is transformed by httpPut into the appropriate transfer encoding Thus handler code need only specify transfer encoding not actually implement that encoding itself This mode is advantageous to allow user agents to begin displaying partial content as it is received and particularly useful when the content is quite large or takes significant time to generate If you are unsure which mode to use it should probably be this one The third mode is used if the handler sets Content-Length and no Transfer-Encoding In this case headers are again sent immediately upon the first httpPut or httpPutStr and output is again sent as it is provided Output in this mode is not transformed This may be more efficient than the second mode if output is generated in many small pieces as it avoids computing and sending the length tags of the chunked encoding However it requires the content length to be known in advance of actually sending any content It may be useful if you wish to have direct-http validate that the handler is well-behaved in sending binary object of known size with no garbage inserted by spurious additional puts",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "httpPut",
        "normalized": "ByteString-\u003ea()",
        "package": "direct-http",
        "partial": "Put",
        "signature": "ByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:httpPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eAppends text, encoded as UTF8, to the content of the HTTP response.  In\n   all respects this behaves as \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e, but for the fact that it takes\n   text rather than binary data.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-HTTP.html#httpPutStr",
        "fct-type": "function",
        "title": "httpPutStr"
      },
      "index": {
        "description": "Appends text encoded as UTF8 to the content of the HTTP response In all respects this behaves as httpPut but for the fact that it takes text rather than binary data",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "httpPutStr",
        "normalized": "String-\u003ea()",
        "package": "direct-http",
        "partial": "Put Str",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:listenSocketParametersAddress",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "SockAddr",
        "fct-source": "src/Network-HTTP.html#HTTPListenSocketParameters",
        "fct-type": "function",
        "title": "listenSocketParametersAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "listenSocketParametersAddress",
        "normalized": "",
        "package": "direct-http",
        "partial": "Socket Parameters Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:listenSocketParametersSecure",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Bool",
        "fct-source": "src/Network-HTTP.html#HTTPListenSocketParameters",
        "fct-type": "function",
        "title": "listenSocketParametersSecure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "listenSocketParametersSecure",
        "normalized": "",
        "package": "direct-http",
        "partial": "Socket Parameters Secure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:mkCookie",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a cookie with the given parameters.  Version is set to 1.\n   Constructing the cookie does not cause it to be set; to do that, call \u003ccode\u003e\u003ca\u003esetCookie\u003c/a\u003e\u003c/code\u003e\n   on it.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String-\u003e String-\u003e Maybe String-\u003e Maybe String-\u003e Maybe Int-\u003e Bool-\u003e Cookie",
        "fct-type": "function",
        "title": "mkCookie"
      },
      "index": {
        "description": "Constructs cookie with the given parameters Version is set to Constructing the cookie does not cause it to be set to do that call setCookie on it",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "mkCookie",
        "normalized": "String-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eMaybe Int-\u003eBool-\u003eCookie",
        "package": "direct-http",
        "partial": "Cookie",
        "signature": "String-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eMaybe Int-\u003eBool-\u003eCookie"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:mkSimpleCookie",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a cookie with the given name and value.  Version is set to 1;\n   path, domain, and maximum age are set to \u003ccode\u003eNothing\u003c/code\u003e; and the secure flag is\n   set to \u003ccode\u003eFalse\u003c/code\u003e.  Constructing the cookie does not cause it to be set; to do\n   that, call \u003ccode\u003e\u003ca\u003esetCookie\u003c/a\u003e\u003c/code\u003e on it.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String-\u003e String-\u003e Cookie",
        "fct-type": "function",
        "title": "mkSimpleCookie"
      },
      "index": {
        "description": "Constructs cookie with the given name and value Version is set to path domain and maximum age are set to Nothing and the secure flag is set to False Constructing the cookie does not cause it to be set to do that call setCookie on it",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "mkSimpleCookie",
        "normalized": "String-\u003eString-\u003eCookie",
        "package": "direct-http",
        "partial": "Simple Cookie",
        "signature": "String-\u003eString-\u003eCookie"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:permanentRedirect",
      "description": {
        "fct-descr": "\u003cp\u003eSets the HTTP/1.1 return status to 301 and sets the \u003ccode\u003e\u003ca\u003eHttpLocation\u003c/a\u003e\u003c/code\u003e header\n   to the provided URL.  This has the effect of issuing a permanent redirect\n   to the user agent.  Permanent redirects, as opposed to temporary redirects,\n   may cause bookmarks or incoming links to be updated.  If the response\n   headers have already been sent, or are no longer modifiable (because of a\n   call to \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String-\u003e m ()",
        "fct-type": "function",
        "title": "permanentRedirect"
      },
      "index": {
        "description": "Sets the HTTP return status to and sets the HttpLocation header to the provided URL This has the effect of issuing permanent redirect to the user agent Permanent redirects as opposed to temporary redirects may cause bookmarks or incoming links to be updated If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "permanentRedirect",
        "normalized": "String-\u003ea()",
        "package": "direct-http",
        "partial": "Redirect",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:responseHeadersModifiable",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether the response headers are modifiable, a prerequisite of\n   which is that they have not already been sent.  (They might not be\n   modifiable because of a call to \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar.)\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m Bool",
        "fct-source": "src/Network-HTTP.html#responseHeadersModifiable",
        "fct-type": "function",
        "title": "responseHeadersModifiable"
      },
      "index": {
        "description": "Returns whether the response headers are modifiable prerequisite of which is that they have not already been sent They might not be modifiable because of call to httpPut or similar",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "responseHeadersModifiable",
        "normalized": "",
        "package": "direct-http",
        "partial": "Headers Modifiable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:responseHeadersSent",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether the response headers have been sent, regardless of whether\n   they are modifiable (they might not be because of a call to \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or\n   similar).\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m Bool",
        "fct-source": "src/Network-HTTP.html#responseHeadersSent",
        "fct-type": "function",
        "title": "responseHeadersSent"
      },
      "index": {
        "description": "Returns whether the response headers have been sent regardless of whether they are modifiable they might not be because of call to httpPut or similar",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "responseHeadersSent",
        "normalized": "",
        "package": "direct-http",
        "partial": "Headers Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:seeOtherRedirect",
      "description": {
        "fct-descr": "\u003cp\u003eSets the HTTP/1.1 return status to 303 and sets the \u003ccode\u003e\u003ca\u003eHttpLocation\u003c/a\u003e\u003c/code\u003e header\n   to the provided URL.  This has the effect of issuing a see-other or\n   \u003ca\u003etemporary\u003c/a\u003e redirect to the user agent.  Temporary redirects, as opposed to\n   permanent redirects, do not cause bookmarks or incoming links to be\n   updated.  If the response headers have already been sent, or are no longer\n   modifiable (because of a call to \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a\n   \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String-\u003e m ()",
        "fct-type": "function",
        "title": "seeOtherRedirect"
      },
      "index": {
        "description": "Sets the HTTP return status to and sets the HttpLocation header to the provided URL This has the effect of issuing see-other or temporary redirect to the user agent Temporary redirects as opposed to permanent redirects do not cause bookmarks or incoming links to be updated If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "seeOtherRedirect",
        "normalized": "String-\u003ea()",
        "package": "direct-http",
        "partial": "Other Redirect",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:sendResponseHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eEnsures that the response headers have been sent.  If they are already\n   sent, does nothing.  If output has already been closed, causes an\n   \u003ccode\u003e\u003ca\u003eOutputAlreadyClosed\u003c/a\u003e\u003c/code\u003e exception.  Note that if the buffered identity\n   output mode (the first mode of operation described for \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e) is\n   to be used, this function implies that there is no additional content\n   beyond what has already been sent.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "m ()",
        "fct-source": "src/Network-HTTP.html#sendResponseHeaders",
        "fct-type": "function",
        "title": "sendResponseHeaders"
      },
      "index": {
        "description": "Ensures that the response headers have been sent If they are already sent does nothing If output has already been closed causes an OutputAlreadyClosed exception Note that if the buffered identity output mode the first mode of operation described for httpPut is to be used this function implies that there is no additional content beyond what has already been sent",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "sendResponseHeaders",
        "normalized": "a()",
        "package": "direct-http",
        "partial": "Response Headers",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersAccessLogPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Network-HTTP.html#HTTPServerParameters",
        "fct-type": "function",
        "title": "serverParametersAccessLogPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "serverParametersAccessLogPath",
        "normalized": "",
        "package": "direct-http",
        "partial": "Parameters Access Log Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersDaemonize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Bool",
        "fct-source": "src/Network-HTTP.html#HTTPServerParameters",
        "fct-type": "function",
        "title": "serverParametersDaemonize"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "serverParametersDaemonize",
        "normalized": "",
        "package": "direct-http",
        "partial": "Parameters Daemonize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersErrorLogPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Network-HTTP.html#HTTPServerParameters",
        "fct-type": "function",
        "title": "serverParametersErrorLogPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "serverParametersErrorLogPath",
        "normalized": "",
        "package": "direct-http",
        "partial": "Parameters Error Log Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersForkPrimitive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "IO () -\u003e IO ThreadId",
        "fct-source": "src/Network-HTTP.html#HTTPServerParameters",
        "fct-type": "function",
        "title": "serverParametersForkPrimitive"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "serverParametersForkPrimitive",
        "normalized": "IO()-\u003eIO ThreadId",
        "package": "direct-http",
        "partial": "Parameters Fork Primitive",
        "signature": "IO()-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersGroupToChangeTo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP.html#HTTPServerParameters",
        "fct-type": "function",
        "title": "serverParametersGroupToChangeTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "serverParametersGroupToChangeTo",
        "normalized": "",
        "package": "direct-http",
        "partial": "Parameters Group To Change To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersListenSockets",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "[HTTPListenSocketParameters]",
        "fct-source": "src/Network-HTTP.html#HTTPServerParameters",
        "fct-type": "function",
        "title": "serverParametersListenSockets"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "serverParametersListenSockets",
        "normalized": "[HTTPListenSocketParameters]",
        "package": "direct-http",
        "partial": "Parameters Listen Sockets",
        "signature": "[HTTPListenSocketParameters]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:serverParametersUserToChangeTo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP.html#HTTPServerParameters",
        "fct-type": "function",
        "title": "serverParametersUserToChangeTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "serverParametersUserToChangeTo",
        "normalized": "",
        "package": "direct-http",
        "partial": "Parameters User To Change To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:setCookie",
      "description": {
        "fct-descr": "\u003cp\u003eCauses the user agent to record the given cookie and send it back with\n   future loads of this page.  Does not take effect instantly, but rather\n   when headers are sent.  Cookies are set in accordance with RFC 2109.\n   If an \u003ccode\u003e\u003ca\u003eHttpCookie\u003c/a\u003e\u003c/code\u003e header is set for this request by a call to\n   \u003ccode\u003e\u003ca\u003esetResponseHeader\u003c/a\u003e\u003c/code\u003e, this function has no effect.  If the response headers\n   have already been sent, or are no longer modifiable (because of a call to\n   \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.\n   If the name is not a possible name for a cookie, causes a \u003ccode\u003e\u003ca\u003eCookieNameInvalid\u003c/a\u003e\u003c/code\u003e\n   exception.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Cookie-\u003e m ()",
        "fct-type": "function",
        "title": "setCookie"
      },
      "index": {
        "description": "Causes the user agent to record the given cookie and send it back with future loads of this page Does not take effect instantly but rather when headers are sent Cookies are set in accordance with RFC If an HttpCookie header is set for this request by call to setResponseHeader this function has no effect If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception If the name is not possible name for cookie causes CookieNameInvalid exception",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "setCookie",
        "normalized": "Cookie-\u003ea()",
        "package": "direct-http",
        "partial": "Cookie",
        "signature": "Cookie-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:setResponseHeader",
      "description": {
        "fct-descr": "\u003cp\u003eSets the given response header to the given string value, overriding any\n   value which has previously been set.  If the response headers have\n   already been sent, or are no longer modifiable (because of a call to\n   \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.  If the header is not an\n   HTTP/1.1 or extension response, entity, or general header, ie, is not\n   valid as part of a response, causes a \u003ccode\u003e\u003ca\u003eNotAResponseHeader\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e\u003cp\u003eIf a value is set for the \u003ccode\u003e\u003ca\u003eHttpSetCookie\u003c/a\u003e\u003c/code\u003e header, this overrides all\n   cookies set for this request with \u003ccode\u003e\u003ca\u003esetCookie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Header-\u003e String-\u003e m ()",
        "fct-type": "function",
        "title": "setResponseHeader"
      },
      "index": {
        "description": "Sets the given response header to the given string value overriding any value which has previously been set If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception If the header is not an HTTP or extension response entity or general header ie is not valid as part of response causes NotAResponseHeader exception If value is set for the HttpSetCookie header this overrides all cookies set for this request with setCookie",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "setResponseHeader",
        "normalized": "Header-\u003eString-\u003ea()",
        "package": "direct-http",
        "partial": "Response Header",
        "signature": "Header-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:setResponseStatus",
      "description": {
        "fct-descr": "\u003cp\u003eSets the response status which will be sent with the response headers.  If\n   the response headers have already been sent, or are no longer modifiable\n   (because of a call to \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a\n   \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Int-\u003e m ()",
        "fct-type": "function",
        "title": "setResponseStatus"
      },
      "index": {
        "description": "Sets the response status which will be sent with the response headers If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "setResponseStatus",
        "normalized": "Int-\u003ea()",
        "package": "direct-http",
        "partial": "Response Status",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:unsetCookie",
      "description": {
        "fct-descr": "\u003cp\u003eCauses the user agent to unset any cookie applicable to this page with the\n   given name.  Does not take effect instantly, but rather when headers are\n   sent.  If an \u003ccode\u003e\u003ca\u003eHttpCookie\u003c/a\u003e\u003c/code\u003e header is set for this request by a call to\n   \u003ccode\u003e\u003ca\u003esetResponseHeader\u003c/a\u003e\u003c/code\u003e, this function has no effect.  If the response headers\n   have already been sent, or are no longer modifiable (because of a call to\n   \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.\n   If the name is not a possible name for a cookie, causes a\n   \u003ccode\u003e\u003ca\u003eCookieNameInvalid\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "String-\u003e m ()",
        "fct-type": "function",
        "title": "unsetCookie"
      },
      "index": {
        "description": "Causes the user agent to unset any cookie applicable to this page with the given name Does not take effect instantly but rather when headers are sent If an HttpCookie header is set for this request by call to setResponseHeader this function has no effect If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception If the name is not possible name for cookie causes CookieNameInvalid exception",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "unsetCookie",
        "normalized": "String-\u003ea()",
        "package": "direct-http",
        "partial": "Cookie",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-http/docs/Network-HTTP.html#v:unsetResponseHeader",
      "description": {
        "fct-descr": "\u003cp\u003eCauses the given \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e response header not to be sent, overriding\n   any value which has previously been set.  If the response headers have\n   already been sent, or are no longer modifiable (because of a call to\n   \u003ccode\u003e\u003ca\u003ehttpPut\u003c/a\u003e\u003c/code\u003e or similar), causes a \u003ccode\u003e\u003ca\u003eResponseHeadersAlreadySent\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eResponseHeadersNotModifiable\u003c/a\u003e\u003c/code\u003e exception.  If\n   the header is not an HTTP/1.1 or extension response or entity header, ie,\n   is not valid as part of a response, causes a \u003ccode\u003e\u003ca\u003eNotAResponseHeader\u003c/a\u003e\u003c/code\u003e\n   exception.\n\u003c/p\u003e\u003cp\u003eDoes not prevent the \u003ccode\u003e\u003ca\u003eHttpSetCookie\u003c/a\u003e\u003c/code\u003e header from being sent if cookies\n   have been set for this request with \u003ccode\u003e\u003ca\u003esetCookie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP",
        "fct-package": "direct-http",
        "fct-signature": "Header-\u003e m ()",
        "fct-type": "function",
        "title": "unsetResponseHeader"
      },
      "index": {
        "description": "Causes the given Header response header not to be sent overriding any value which has previously been set If the response headers have already been sent or are no longer modifiable because of call to httpPut or similar causes ResponseHeadersAlreadySent or ResponseHeadersNotModifiable exception If the header is not an HTTP or extension response or entity header ie is not valid as part of response causes NotAResponseHeader exception Does not prevent the HttpSetCookie header from being sent if cookies have been set for this request with setCookie",
        "hierarchy": "Network HTTP",
        "module": "Network.HTTP",
        "name": "unsetResponseHeader",
        "normalized": "Header-\u003ea()",
        "package": "direct-http",
        "partial": "Response Header",
        "signature": "Header-\u003em()"
      }
    }
  }
]