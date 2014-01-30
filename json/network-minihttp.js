[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a very basic HTTP client. At the moment, it doesn't\n   even handle redirects for you.\n\u003c/p\u003e\u003cp\u003eNote that, in order to use SSL, you need to have the root CA certificates\n   in a PEM file in \u003ccode\u003e\u003cem\u003eetc\u003c/em\u003essh/certs.pem\u003c/code\u003e and you need to have wrapped your\n   main function in \u003ccode\u003eOpenSSL.withOpenSSL\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.MiniHTTP.Client",
        "fct-package": "network-minihttp",
        "fct-signature": "module",
        "fct-source": "src/Network-MiniHTTP-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "This module contains very basic HTTP client At the moment it doesn even handle redirects for you Note that in order to use SSL you need to have the root CA certificates in PEM file in etc ssh certs.pem and you need to have wrapped your main function in OpenSSL.withOpenSSL",
        "hierarchy": "Network MiniHTTP Client",
        "module": "Network.MiniHTTP.Client",
        "name": "Client",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Client.html#v:connection",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a connection to the correct host for the given URL. (i.e.\n   resolve the hostname and create a TCP connection to the correct port).\n\u003c/p\u003e\u003cp\u003eNote that the DNS resolution (if any) doesn't block the whole process.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Client",
        "fct-package": "network-minihttp",
        "fct-signature": "URL -\u003e IO Socket",
        "fct-source": "src/Network-MiniHTTP-Client.html#connection",
        "fct-type": "function",
        "title": "connection"
      },
      "index": {
        "description": "Construct connection to the correct host for the given URL i.e resolve the hostname and create TCP connection to the correct port Note that the DNS resolution if any doesn block the whole process",
        "hierarchy": "Network MiniHTTP Client",
        "module": "Network.MiniHTTP.Client",
        "name": "connection",
        "normalized": "URL-\u003eIO Socket",
        "package": "network-minihttp",
        "partial": "",
        "signature": "URL-\u003eIO Socket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Client.html#v:fetchBasic",
      "description": {
        "fct-descr": "\u003cp\u003eFetch an HTTP(S) entity.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Client",
        "fct-package": "network-minihttp",
        "fct-signature": "Headers-\u003e URL-\u003e IO (Connection, Reply, Maybe Source)",
        "fct-type": "function",
        "title": "fetchBasic"
      },
      "index": {
        "description": "Fetch an HTTP entity",
        "hierarchy": "Network MiniHTTP Client",
        "module": "Network.MiniHTTP.Client",
        "name": "fetchBasic",
        "normalized": "Headers-\u003eURL-\u003eIO(Connection,Reply,Maybe Source)",
        "package": "network-minihttp",
        "partial": "Basic",
        "signature": "Headers-\u003eURL-\u003eIO(Connection,Reply,Maybe Source)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Client.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003eA lower level HTTP client, but it allows you to perform POSTs etc\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Client",
        "fct-package": "network-minihttp",
        "fct-signature": "Connection-\u003e Request-\u003e Maybe Source-\u003e IO (Maybe (Reply, Maybe Source))",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "lower level HTTP client but it allows you to perform POSTs etc",
        "hierarchy": "Network MiniHTTP Client",
        "module": "Network.MiniHTTP.Client",
        "name": "request",
        "normalized": "Connection-\u003eRequest-\u003eMaybe Source-\u003eIO(Maybe(Reply,Maybe Source))",
        "package": "network-minihttp",
        "partial": "",
        "signature": "Connection-\u003eRequest-\u003eMaybe Source-\u003eIO(Maybe(Reply,Maybe Source))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Client.html#v:transport",
      "description": {
        "fct-descr": "\u003cp\u003eSetup the transport (i.e. SSL) for the given URL. In the case of a HTTP\n   scheme, this just wraps the socket in a Connection.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Client",
        "fct-package": "network-minihttp",
        "fct-signature": "URL -\u003e Socket -\u003e IO Connection",
        "fct-source": "src/Network-MiniHTTP-Client.html#transport",
        "fct-type": "function",
        "title": "transport"
      },
      "index": {
        "description": "Setup the transport i.e SSL for the given URL In the case of HTTP scheme this just wraps the socket in Connection",
        "hierarchy": "Network MiniHTTP Client",
        "module": "Network.MiniHTTP.Client",
        "name": "transport",
        "normalized": "URL-\u003eSocket-\u003eIO Connection",
        "package": "network-minihttp",
        "partial": "",
        "signature": "URL-\u003eSocket-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains many helper functions, as well the code for \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e,\n   which is a pretty important structure\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "module",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html",
        "fct-type": "module",
        "title": "HTTPConnection"
      },
      "index": {
        "description": "This module contains many helper functions as well the code for Source which is pretty important structure",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "HTTPConnection",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "HTTPConnection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#t:Source",
      "description": {
        "fct-descr": "\u003cp\u003eA source is a stream of data, like a lazy data structure, but without\n   some of the dangers that such entail. A source returns a \u003ccode\u003e\u003ca\u003eSourceResult\u003c/a\u003e\u003c/code\u003e\n   each time you evaluate it.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "type",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#Source",
        "fct-type": "type",
        "title": "Source"
      },
      "index": {
        "description": "source is stream of data like lazy data structure but without some of the dangers that such entail source returns SourceResult each time you evaluate it",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "Source",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#t:SourceResult",
      "description": {
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#SourceResult",
        "fct-type": "data",
        "title": "SourceResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "SourceResult",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Source Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:SourceData",
      "description": {
        "fct-descr": "\u003cp\u003esome data\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "SourceData ByteString",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#SourceResult",
        "fct-type": "function",
        "title": "SourceData"
      },
      "index": {
        "description": "some data",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "SourceData",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Source Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:SourceEOF",
      "description": {
        "fct-descr": "\u003cp\u003eend of data\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "SourceEOF",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#SourceResult",
        "fct-type": "function",
        "title": "SourceEOF"
      },
      "index": {
        "description": "end of data",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "SourceEOF",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Source EOF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:SourceError",
      "description": {
        "fct-descr": "\u003cp\u003eerror - please don't read this source again\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "SourceError",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#SourceResult",
        "fct-type": "function",
        "title": "SourceError"
      },
      "index": {
        "description": "error please don read this source again",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "SourceError",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Source Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:bsSource",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a source from a ByteString\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString -\u003e IO Source",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#bsSource",
        "fct-type": "function",
        "title": "bsSource"
      },
      "index": {
        "description": "Construct source from ByteString",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "bsSource",
        "normalized": "ByteString-\u003eIO Source",
        "package": "network-minihttp",
        "partial": "Source",
        "signature": "ByteString-\u003eIO Source"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:connChunkedSource",
      "description": {
        "fct-descr": "\u003cp\u003eA source which reads an HTTP chunked reply from a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Connection -\u003e IO Source",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#connChunkedSource",
        "fct-type": "function",
        "title": "connChunkedSource"
      },
      "index": {
        "description": "source which reads an HTTP chunked reply from Connection",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "connChunkedSource",
        "normalized": "Connection-\u003eIO Source",
        "package": "network-minihttp",
        "partial": "Chunked Source",
        "signature": "Connection-\u003eIO Source"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:connEOFSource",
      "description": {
        "fct-descr": "\u003cp\u003eA source which reads from the given \u003ccode\u003eConnection\u003c/code\u003e until the connection\n   signals end-of-file.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Connection -\u003e IO Source",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#connEOFSource",
        "fct-type": "function",
        "title": "connEOFSource"
      },
      "index": {
        "description": "source which reads from the given Connection until the connection signals end-of-file",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "connEOFSource",
        "normalized": "Connection-\u003eIO Source",
        "package": "network-minihttp",
        "partial": "EOFSource",
        "signature": "Connection-\u003eIO Source"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:connSource",
      "description": {
        "fct-descr": "\u003cp\u003eA source which reads from a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Int64-\u003e ByteString-\u003e Connection-\u003e IO Source",
        "fct-type": "function",
        "title": "connSource"
      },
      "index": {
        "description": "source which reads from Connection",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "connSource",
        "normalized": "Int-\u003eByteString-\u003eConnection-\u003eIO Source",
        "package": "network-minihttp",
        "partial": "Source",
        "signature": "Int-\u003eByteString-\u003eConnection-\u003eIO Source"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:hSource",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a source from a Handle\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "(Int64, Int64)-\u003e Handle-\u003e IO Source",
        "fct-type": "function",
        "title": "hSource"
      },
      "index": {
        "description": "Construct source from Handle",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "hSource",
        "normalized": "(Int,Int)-\u003eHandle-\u003eIO Source",
        "package": "network-minihttp",
        "partial": "Source",
        "signature": "(Int,Int)-\u003eHandle-\u003eIO Source"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:maybeRead",
      "description": {
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString -\u003e Maybe a",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#maybeRead",
        "fct-type": "function",
        "title": "maybeRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "maybeRead",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "network-minihttp",
        "partial": "Read",
        "signature": "ByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:nullSource",
      "description": {
        "fct-descr": "\u003cp\u003eA source with no data (e.g. \u003ccode\u003e\u003cem\u003edev\u003c/em\u003enull\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Source",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#nullSource",
        "fct-type": "function",
        "title": "nullSource"
      },
      "index": {
        "description": "source with no data e.g dev null",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "nullSource",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:readIG",
      "description": {
        "fct-descr": "\u003cp\u003eRun an incremental parser from the network\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Connection-\u003e Int-\u003e Int-\u003e Get a a-\u003e IO (Maybe a)",
        "fct-type": "function",
        "title": "readIG"
      },
      "index": {
        "description": "Run an incremental parser from the network",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "readIG",
        "normalized": "Connection-\u003eInt-\u003eInt-\u003eGet a a-\u003eIO(Maybe a)",
        "package": "network-minihttp",
        "partial": "IG",
        "signature": "Connection-\u003eInt-\u003eInt-\u003eGet a a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:sourceDrain",
      "description": {
        "fct-descr": "\u003cp\u003eRead a source until it returns \u003ccode\u003e\u003ca\u003eSourceEOF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Source -\u003e IO ()",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#sourceDrain",
        "fct-type": "function",
        "title": "sourceDrain"
      },
      "index": {
        "description": "Read source until it returns SourceEOF",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "sourceDrain",
        "normalized": "Source-\u003eIO()",
        "package": "network-minihttp",
        "partial": "Drain",
        "signature": "Source-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:sourceIG",
      "description": {
        "fct-descr": "\u003cp\u003eRun an incremental parser from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Source-\u003e Int-\u003e Get a a-\u003e IO (Maybe a)",
        "fct-type": "function",
        "title": "sourceIG"
      },
      "index": {
        "description": "Run an incremental parser from Source",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "sourceIG",
        "normalized": "Source-\u003eInt-\u003eGet a a-\u003eIO(Maybe a)",
        "package": "network-minihttp",
        "partial": "IG",
        "signature": "Source-\u003eInt-\u003eGet a a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:sourceToBS",
      "description": {
        "fct-descr": "\u003cp\u003eTake, at most, the first n bytes from a Source and return a strict\n   ByteString. Returns Nothing on error. (A short read is not an error)\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Int -\u003e Source -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#sourceToBS",
        "fct-type": "function",
        "title": "sourceToBS"
      },
      "index": {
        "description": "Take at most the first bytes from Source and return strict ByteString Returns Nothing on error short read is not an error",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "sourceToBS",
        "normalized": "Int-\u003eSource-\u003eIO(Maybe ByteString)",
        "package": "network-minihttp",
        "partial": "To BS",
        "signature": "Int-\u003eSource-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:sourceToLBS",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a source to a lazy ByteString\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Source -\u003e IO ByteString",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#sourceToLBS",
        "fct-type": "function",
        "title": "sourceToLBS"
      },
      "index": {
        "description": "Convert source to lazy ByteString",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "sourceToLBS",
        "normalized": "Source-\u003eIO ByteString",
        "package": "network-minihttp",
        "partial": "To LBS",
        "signature": "Source-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:sslToBaseConnection",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an SSL connection to a BaseConnection for Network.Connection\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "SSL -\u003e BaseConnection",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#sslToBaseConnection",
        "fct-type": "function",
        "title": "sslToBaseConnection"
      },
      "index": {
        "description": "Convert an SSL connection to BaseConnection for Network.Connection",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "sslToBaseConnection",
        "normalized": "SSL-\u003eBaseConnection",
        "package": "network-minihttp",
        "partial": "To Base Connection",
        "signature": "SSL-\u003eBaseConnection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:streamSource",
      "description": {
        "fct-descr": "\u003cp\u003eStream a source to a connection while not enqueuing more than lowWater\n   bytes in the outbound queue (not inc the kernel buffer)\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Int -\u003e Connection -\u003e Source -\u003e IO Bool",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#streamSource",
        "fct-type": "function",
        "title": "streamSource"
      },
      "index": {
        "description": "Stream source to connection while not enqueuing more than lowWater bytes in the outbound queue not inc the kernel buffer",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "streamSource",
        "normalized": "Int-\u003eConnection-\u003eSource-\u003eIO Bool",
        "package": "network-minihttp",
        "partial": "Source",
        "signature": "Int-\u003eConnection-\u003eSource-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:streamSourceChunked",
      "description": {
        "fct-descr": "\u003cp\u003eStream a source to a connection, with chunked encoding, while not\n   enqueuing more than lowWater bytes in the outbound queue (not inc the\n   kernel buffer)\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.HTTPConnection",
        "fct-package": "network-minihttp",
        "fct-signature": "Int -\u003e Connection -\u003e Source -\u003e IO Bool",
        "fct-source": "src/Network-MiniHTTP-HTTPConnection.html#streamSourceChunked",
        "fct-type": "function",
        "title": "streamSourceChunked"
      },
      "index": {
        "description": "Stream source to connection with chunked encoding while not enqueuing more than lowWater bytes in the outbound queue not inc the kernel buffer",
        "hierarchy": "Network MiniHTTP HTTPConnection",
        "module": "Network.MiniHTTP.HTTPConnection",
        "name": "streamSourceChunked",
        "normalized": "Int-\u003eConnection-\u003eSource-\u003eIO Bool",
        "package": "network-minihttp",
        "partial": "Source Chunked",
        "signature": "Int-\u003eConnection-\u003eSource-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module serialises and deserialises HTTP headers. It contains Haskell\n   representations of request and replies and can transform them to, and from,\n   the HTTP wire format.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "module",
        "fct-source": "src/Network-MiniHTTP-Marshal.html",
        "fct-type": "module",
        "title": "Marshal"
      },
      "index": {
        "description": "This module serialises and deserialises HTTP headers It contains Haskell representations of request and replies and can transform them to and from the HTTP wire format",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Marshal",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Marshal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Cookie",
      "description": {
        "fct-descr": "\u003cp\u003eA HTTP Cookie. See \u003ca\u003ehttp://en.wikipedia.org/wiki/HTTP_cookie\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Cookie",
        "fct-type": "data",
        "title": "Cookie"
      },
      "index": {
        "description": "HTTP Cookie See http en.wikipedia.org wiki HTTP cookie",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Cookie",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Headers",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP headers, see RFC 2616 section 14\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "data",
        "title": "Headers"
      },
      "index": {
        "description": "HTTP headers see RFC section",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Headers",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:MediaType",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "type",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#MediaType",
        "fct-type": "type",
        "title": "MediaType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "MediaType",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Media Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Method",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of valid methods, see RFC 2616 section 5.1\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Method",
        "fct-type": "data",
        "title": "Method"
      },
      "index": {
        "description": "The list of valid methods see RFC section",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Method",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Range",
      "description": {
        "fct-descr": "\u003cp\u003eA HTTP range\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Range",
        "fct-type": "data",
        "title": "Range"
      },
      "index": {
        "description": "HTTP range",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Range",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Reply",
      "description": {
        "fct-descr": "\u003cp\u003eA HTTP reply\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Reply",
        "fct-type": "data",
        "title": "Reply"
      },
      "index": {
        "description": "HTTP reply",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Reply",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eA HTTP request\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "HTTP request",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Request",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:CONNECT",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "CONNECT",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Method",
        "fct-type": "function",
        "title": "CONNECT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "CONNECT",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "CONNECT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:Cookie",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Cookie",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Cookie",
        "fct-type": "function",
        "title": "Cookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Cookie",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:DELETE",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "DELETE",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Method",
        "fct-type": "function",
        "title": "DELETE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "DELETE",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "DELETE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:GET",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "GET",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Method",
        "fct-type": "function",
        "title": "GET"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "GET",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "GET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:HEAD",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "HEAD",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Method",
        "fct-type": "function",
        "title": "HEAD"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "HEAD",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "HEAD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:Headers",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Headers",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "Headers"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Headers",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:OPTIONS",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "OPTIONS",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Method",
        "fct-type": "function",
        "title": "OPTIONS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "OPTIONS",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "OPTIONS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:POST",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "POST",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Method",
        "fct-type": "function",
        "title": "POST"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "POST",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "POST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:PUT",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "PUT",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Method",
        "fct-type": "function",
        "title": "PUT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "PUT",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "PUT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:RangeFrom",
      "description": {
        "fct-descr": "\u003cp\u003eeverything from the given byte onwards\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "RangeFrom Int64",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Range",
        "fct-type": "function",
        "title": "RangeFrom"
      },
      "index": {
        "description": "everything from the given byte onwards",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "RangeFrom",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Range From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:RangeOf",
      "description": {
        "fct-descr": "\u003cp\u003ethe bytes in the given range, inclusive\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "RangeOf Int64 Int64",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Range",
        "fct-type": "function",
        "title": "RangeOf"
      },
      "index": {
        "description": "the bytes in the given range inclusive",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "RangeOf",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Range Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:RangeSuffix",
      "description": {
        "fct-descr": "\u003cp\u003ethe final n bytes\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "RangeSuffix Int64",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Range",
        "fct-type": "function",
        "title": "RangeSuffix"
      },
      "index": {
        "description": "the final bytes",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "RangeSuffix",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Range Suffix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:Reply",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Reply",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Reply",
        "fct-type": "function",
        "title": "Reply"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Reply",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:Request",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Request",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "Request",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:TRACE",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "TRACE",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Method",
        "fct-type": "function",
        "title": "TRACE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "TRACE",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "TRACE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookieDomain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Cookie",
        "fct-type": "function",
        "title": "cookieDomain"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "cookieDomain",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookieExpires",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Cookie",
        "fct-type": "function",
        "title": "cookieExpires"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "cookieExpires",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Expires",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookieName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Cookie",
        "fct-type": "function",
        "title": "cookieName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "cookieName",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookiePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Cookie",
        "fct-type": "function",
        "title": "cookiePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "cookiePath",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookieSecure",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Bool",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Cookie",
        "fct-type": "function",
        "title": "cookieSecure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "cookieSecure",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Secure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookieValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Cookie",
        "fct-type": "function",
        "title": "cookieValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "cookieValue",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:emptyCookie",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Cookie",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#emptyCookie",
        "fct-type": "function",
        "title": "emptyCookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "emptyCookie",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:emptyHeaders",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Headers",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#emptyHeaders",
        "fct-type": "function",
        "title": "emptyHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "emptyHeaders",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAccept",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe [(MediaType, Int)]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpAccept"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpAccept",
        "normalized": "Maybe[(MediaType,Int)]",
        "package": "network-minihttp",
        "partial": "Accept",
        "signature": "Maybe[(MediaType,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAcceptCharset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe [(String, Int)]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpAcceptCharset"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpAcceptCharset",
        "normalized": "Maybe[(String,Int)]",
        "package": "network-minihttp",
        "partial": "Accept Charset",
        "signature": "Maybe[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAcceptEncoding",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe [(String, Int)]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpAcceptEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpAcceptEncoding",
        "normalized": "Maybe[(String,Int)]",
        "package": "network-minihttp",
        "partial": "Accept Encoding",
        "signature": "Maybe[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAcceptLanguage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe [(String, Int)]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpAcceptLanguage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpAcceptLanguage",
        "normalized": "Maybe[(String,Int)]",
        "package": "network-minihttp",
        "partial": "Accept Language",
        "signature": "Maybe[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAcceptRanges",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Bool",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpAcceptRanges"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpAcceptRanges",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Accept Ranges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAge",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe Int64",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpAge"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpAge",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Age",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAllow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe [Method]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpAllow"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpAllow",
        "normalized": "Maybe[Method]",
        "package": "network-minihttp",
        "partial": "Allow",
        "signature": "Maybe[Method]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAuthorization",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpAuthorization"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpAuthorization",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Authorization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpConnection",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "[String]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpConnection",
        "normalized": "[String]",
        "package": "network-minihttp",
        "partial": "Connection",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpConnectionClose",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Bool",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpConnectionClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpConnectionClose",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Connection Close",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentEncodings",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "[String]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpContentEncodings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpContentEncodings",
        "normalized": "[String]",
        "package": "network-minihttp",
        "partial": "Content Encodings",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentLanguage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe [String]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpContentLanguage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpContentLanguage",
        "normalized": "Maybe[String]",
        "package": "network-minihttp",
        "partial": "Content Language",
        "signature": "Maybe[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe Int64",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpContentLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpContentLength",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Content Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentLocation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpContentLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpContentLocation",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Content Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentRange",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe (Maybe (Int64, Int64), Maybe Int64)",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpContentRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpContentRange",
        "normalized": "Maybe(Maybe(Int,Int),Maybe Int)",
        "package": "network-minihttp",
        "partial": "Content Range",
        "signature": "Maybe(Maybe(Int,Int),Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe MediaType",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpContentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpContentType",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpCookie",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "[Cookie]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpCookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpCookie",
        "normalized": "[Cookie]",
        "package": "network-minihttp",
        "partial": "Cookie",
        "signature": "[Cookie]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpDate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpDate",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpETag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe (Bool, ByteString)",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpETag"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpETag",
        "normalized": "Maybe(Bool,ByteString)",
        "package": "network-minihttp",
        "partial": "ETag",
        "signature": "Maybe(Bool,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpExpires",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpExpires"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpExpires",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Expires",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpHost",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpIfMatch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe (Either () [ByteString])",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpIfMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpIfMatch",
        "normalized": "Maybe(Either()[ByteString])",
        "package": "network-minihttp",
        "partial": "If Match",
        "signature": "Maybe(Either()[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpIfModifiedSince",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpIfModifiedSince"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpIfModifiedSince",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "If Modified Since",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpIfNoneMatch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe (Either () [(Bool, ByteString)])",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpIfNoneMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpIfNoneMatch",
        "normalized": "Maybe(Either()[(Bool,ByteString)])",
        "package": "network-minihttp",
        "partial": "If None Match",
        "signature": "Maybe(Either()[(Bool,ByteString)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpIfRange",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe (Either ByteString UTCTime)",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpIfRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpIfRange",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "If Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpIfUnmodifiedSince",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpIfUnmodifiedSince"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpIfUnmodifiedSince",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "If Unmodified Since",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpKeepAlive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpKeepAlive"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpKeepAlive",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Keep Alive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpLastModified",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpLastModified"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpLastModified",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Last Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpLocation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpLocation",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpOtherHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Map ByteString ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpOtherHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpOtherHeaders",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Other Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpPragma",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe [(String, Maybe String)]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpPragma"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpPragma",
        "normalized": "Maybe[(String,Maybe String)]",
        "package": "network-minihttp",
        "partial": "Pragma",
        "signature": "Maybe[(String,Maybe String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpProxyAuthenticate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpProxyAuthenticate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpProxyAuthenticate",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Proxy Authenticate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpProxyAuthorization",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpProxyAuthorization"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpProxyAuthorization",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Proxy Authorization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpRange",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe [Range]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpRange",
        "normalized": "Maybe[Range]",
        "package": "network-minihttp",
        "partial": "Range",
        "signature": "Maybe[Range]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpReferer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpReferer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpReferer",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Referer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpRetryAfter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe Int64",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpRetryAfter"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpRetryAfter",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Retry After",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpServer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpServer",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpSetCookie",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "[Cookie]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpSetCookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpSetCookie",
        "normalized": "[Cookie]",
        "package": "network-minihttp",
        "partial": "Set Cookie",
        "signature": "[Cookie]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpTrailer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe [String]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpTrailer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpTrailer",
        "normalized": "Maybe[String]",
        "package": "network-minihttp",
        "partial": "Trailer",
        "signature": "Maybe[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpTransferEncoding",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "[String]",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpTransferEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpTransferEncoding",
        "normalized": "[String]",
        "package": "network-minihttp",
        "partial": "Transfer Encoding",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpUserAgent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpUserAgent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpUserAgent",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "User Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpWWWAuthenticate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Headers",
        "fct-type": "function",
        "title": "httpWWWAuthenticate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "httpWWWAuthenticate",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "WWWAuthenticate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:parseChunkHeader",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "m Int64",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#parseChunkHeader",
        "fct-type": "function",
        "title": "parseChunkHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "parseChunkHeader",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Chunk Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:parseReply",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "m Reply",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#parseReply",
        "fct-type": "function",
        "title": "parseReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "parseReply",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:parseRequest",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "m Request",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#parseRequest",
        "fct-type": "function",
        "title": "parseRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "parseRequest",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:putReply",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Reply -\u003e Put",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#putReply",
        "fct-type": "function",
        "title": "putReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "putReply",
        "normalized": "Reply-\u003ePut",
        "package": "network-minihttp",
        "partial": "Reply",
        "signature": "Reply-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:putRequest",
      "description": {
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Request -\u003e Put",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#putRequest",
        "fct-type": "function",
        "title": "putRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "putRequest",
        "normalized": "Request-\u003ePut",
        "package": "network-minihttp",
        "partial": "Request",
        "signature": "Request-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:replyHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Headers",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Reply",
        "fct-type": "function",
        "title": "replyHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "replyHeaders",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:replyMajor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Int",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Reply",
        "fct-type": "function",
        "title": "replyMajor"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "replyMajor",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Major",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:replyMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "String",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Reply",
        "fct-type": "function",
        "title": "replyMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "replyMessage",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:replyMinor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Int",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Reply",
        "fct-type": "function",
        "title": "replyMinor"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "replyMinor",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Minor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:replyStatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Int",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Reply",
        "fct-type": "function",
        "title": "replyStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "replyStatus",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:reqHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Headers",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Request",
        "fct-type": "function",
        "title": "reqHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "reqHeaders",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:reqMajor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Int",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Request",
        "fct-type": "function",
        "title": "reqMajor"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "reqMajor",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Major",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:reqMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Method",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Request",
        "fct-type": "function",
        "title": "reqMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "reqMethod",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:reqMinor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Int",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Request",
        "fct-type": "function",
        "title": "reqMinor"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "reqMinor",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Minor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:reqUrl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "RelativeURL",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#Request",
        "fct-type": "function",
        "title": "reqUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "reqUrl",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:statusToMessage",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a status code to a message (e.g. 200 -\u003e \u003ca\u003eOK\u003c/a\u003e)\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Marshal",
        "fct-package": "network-minihttp",
        "fct-signature": "Int -\u003e String",
        "fct-source": "src/Network-MiniHTTP-Marshal.html#statusToMessage",
        "fct-type": "function",
        "title": "statusToMessage"
      },
      "index": {
        "description": "Convert status code to message e.g OK",
        "hierarchy": "Network MiniHTTP Marshal",
        "module": "Network.MiniHTTP.Marshal",
        "name": "statusToMessage",
        "normalized": "Int-\u003eString",
        "package": "network-minihttp",
        "partial": "To Message",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains support for the OpenID authentication standard. See\n   \u003ca\u003ehttp://www.openid.net\u003c/a\u003e for details of the protocol. At the moment, only the\n   basic v2 authentication is supported. Also, we only support OpenID 2.0\n   HTML discovery, not Yadis nor XRI.\n\u003c/p\u003e\u003cp\u003eOnly DH-SHA1 is used for the cryptography. This used to be SHA256, but\n   Yahoo doesn't support it (boo!)\n\u003c/p\u003e\u003cp\u003eReferences in this module are to the OpenID v2 spec\n      \u003ca\u003ehttp://openid.net/specs/openid-authentication-2_0.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "module",
        "fct-source": "src/Network-MiniHTTP-OpenID.html",
        "fct-type": "module",
        "title": "OpenID"
      },
      "index": {
        "description": "This module contains support for the OpenID authentication standard See http www.openid.net for details of the protocol At the moment only the basic v2 authentication is supported Also we only support OpenID HTML discovery not Yadis nor XRI Only DH-SHA1 is used for the cryptography This used to be SHA256 but Yahoo doesn support it boo References in this module are to the OpenID v2 spec http openid.net specs openid-authentication-2 html",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "OpenID",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Open ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#t:CheckIDType",
      "description": {
        "fct-descr": "\u003cp\u003eThere are two types of checkid calls.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#CheckIDType",
        "fct-type": "data",
        "title": "CheckIDType"
      },
      "index": {
        "description": "There are two types of checkid calls",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "CheckIDType",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Check IDType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#t:Handle",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of an OpenID handle. Handles are used to identify sessions\n   between the consumer and OP.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#Handle",
        "fct-type": "data",
        "title": "Handle"
      },
      "index": {
        "description": "The type of an OpenID handle Handles are used to identify sessions between the consumer and OP",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "Handle",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of a key.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "The type of key",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "Key",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#t:OpenIDDiscovery",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the result of Discovery: the OP local identity and the server HTTP\n   endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#OpenIDDiscovery",
        "fct-type": "data",
        "title": "OpenIDDiscovery"
      },
      "index": {
        "description": "This is the result of Discovery the OP local identity and the server HTTP endpoint",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "OpenIDDiscovery",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Open IDDiscovery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:CheckIDImmediate",
      "description": {
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "CheckIDImmediate",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#CheckIDType",
        "fct-type": "function",
        "title": "CheckIDImmediate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "CheckIDImmediate",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Check IDImmediate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:CheckIDSetup",
      "description": {
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "CheckIDSetup",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#CheckIDType",
        "fct-type": "function",
        "title": "CheckIDSetup"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "CheckIDSetup",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Check IDSetup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:OpenIDDiscovery",
      "description": {
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "OpenIDDiscovery",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#OpenIDDiscovery",
        "fct-type": "function",
        "title": "OpenIDDiscovery"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "OpenIDDiscovery",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Open IDDiscovery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:associate",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an association with a discovered OP and return either an error\n   message or a handle, a key and the number of seconds from now when the\n   handle will expire.\n\u003c/p\u003e\u003cp\u003eInternally this uses a cache so \u003ccode\u003e\u003ca\u003eassociate\u003c/a\u003e\u003c/code\u003e may not actually involve an\n   HTTP request to the OP.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "OpenIDDiscovery -\u003e IO (Handle, Key)",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#associate",
        "fct-type": "function",
        "title": "associate"
      },
      "index": {
        "description": "Perform an association with discovered OP and return either an error message or handle key and the number of seconds from now when the handle will expire Internally this uses cache so associate may not actually involve an HTTP request to the OP",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "associate",
        "normalized": "OpenIDDiscovery-\u003eIO(Handle,Key)",
        "package": "network-minihttp",
        "partial": "",
        "signature": "OpenIDDiscovery-\u003eIO(Handle,Key)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:checkID",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a checkid call\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "CheckIDType-\u003e URL-\u003e OpenIDDiscovery-\u003e Handle-\u003e ByteString-\u003e Maybe ByteString-\u003e URL",
        "fct-type": "function",
        "title": "checkID"
      },
      "index": {
        "description": "Construct checkid call",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "checkID",
        "normalized": "CheckIDType-\u003eURL-\u003eOpenIDDiscovery-\u003eHandle-\u003eByteString-\u003eMaybe ByteString-\u003eURL",
        "package": "network-minihttp",
        "partial": "ID",
        "signature": "CheckIDType-\u003eURL-\u003eOpenIDDiscovery-\u003eHandle-\u003eByteString-\u003eMaybe ByteString-\u003eURL"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:discover",
      "description": {
        "fct-descr": "\u003cp\u003eUse HTML discovery to find the OpenID information for a given URL\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "URL -\u003e IO OpenIDDiscovery",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#discover",
        "fct-type": "function",
        "title": "discover"
      },
      "index": {
        "description": "Use HTML discovery to find the OpenID information for given URL",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "discover",
        "normalized": "URL-\u003eIO OpenIDDiscovery",
        "package": "network-minihttp",
        "partial": "",
        "signature": "URL-\u003eIO OpenIDDiscovery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:discoveryLocalID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#OpenIDDiscovery",
        "fct-type": "function",
        "title": "discoveryLocalID"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "discoveryLocalID",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Local ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:discoveryProvider",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "URL",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#OpenIDDiscovery",
        "fct-type": "function",
        "title": "discoveryProvider"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "discoveryProvider",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Provider",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:findKey",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a key given the hostname of the OP and the handle. Generally used\n   after an indirect request to check a signature from an OP.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString -\u003e Handle -\u003e STM (Maybe Key)",
        "fct-source": "src/Network-MiniHTTP-OpenID.html#findKey",
        "fct-type": "function",
        "title": "findKey"
      },
      "index": {
        "description": "Lookup key given the hostname of the OP and the handle Generally used after an indirect request to check signature from an OP",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "findKey",
        "normalized": "ByteString-\u003eHandle-\u003eSTM(Maybe Key)",
        "package": "network-minihttp",
        "partial": "Key",
        "signature": "ByteString-\u003eHandle-\u003eSTM(Maybe Key)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:processCheckIDReply",
      "description": {
        "fct-module": "Network.MiniHTTP.OpenID",
        "fct-package": "network-minihttp",
        "fct-signature": "Map ByteString ByteString-\u003e IO (Either String ByteString)",
        "fct-type": "function",
        "title": "processCheckIDReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP OpenID",
        "module": "Network.MiniHTTP.OpenID",
        "name": "processCheckIDReply",
        "normalized": "Map ByteString ByteString-\u003eIO(Either String ByteString)",
        "package": "network-minihttp",
        "partial": "Check IDReply",
        "signature": "Map ByteString ByteString-\u003eIO(Either String ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for writing webservers. These servers\n   process requests in a state monad pipeline and several useful actions are\n   provided herein.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003eexamples/test.hs\u003c/code\u003e for an example of how to use this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "module",
        "fct-source": "src/Network-MiniHTTP-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "This module contains functions for writing webservers These servers process requests in state monad pipeline and several useful actions are provided herein See examples test.hs for an example of how to use this module",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "Server",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#t:DispatchMatch",
      "description": {
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-Server.html#DispatchMatch",
        "fct-type": "data",
        "title": "DispatchMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "DispatchMatch",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Dispatch Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#t:WebMonad",
      "description": {
        "fct-descr": "\u003cp\u003eThe processing monad\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "type",
        "fct-source": "src/Network-MiniHTTP-Server.html#WebMonad",
        "fct-type": "type",
        "title": "WebMonad"
      },
      "index": {
        "description": "The processing monad",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "WebMonad",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Web Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#t:WebState",
      "description": {
        "fct-descr": "\u003cp\u003eProcessing a request involves running a number of actions in a StateT monad\n   where the state for that monad is this record. This contains both a\n   \u003ccode\u003eSource\u003c/code\u003e and a \u003ca\u003eHandle\u003c/a\u003e element. Often something will fill in the \u003ca\u003eHandle\u003c/a\u003e\n   and expect later processing to convert it to a \u003ca\u003eSource\u003c/a\u003e. Somehow, you have\n   to end up with a \u003ca\u003eSource\u003c/a\u003e, however.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-Server.html#WebState",
        "fct-type": "data",
        "title": "WebState"
      },
      "index": {
        "description": "Processing request involves running number of actions in StateT monad where the state for that monad is this record This contains both Source and Handle element Often something will fill in the Handle and expect later processing to convert it to Source Somehow you have to end up with Source however",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "WebState",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Web State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:Exact",
      "description": {
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Exact ByteString",
        "fct-source": "src/Network-MiniHTTP-Server.html#DispatchMatch",
        "fct-type": "function",
        "title": "Exact"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "Exact",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Exact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:Prefix",
      "description": {
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Prefix ByteString",
        "fct-source": "src/Network-MiniHTTP-Server.html#DispatchMatch",
        "fct-type": "function",
        "title": "Prefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "Prefix",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:WebState",
      "description": {
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "WebState",
        "fct-source": "src/Network-MiniHTTP-Server.html#WebState",
        "fct-type": "function",
        "title": "WebState"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "WebState",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Web State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:dispatchOnURL",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an, optional, helper function which you might find useful. The\n   serving fuctions both expect a \u003ca\u003eWebMonad\u003c/a\u003e action which is called to\n   process each request. In general you have to write that and dispatch based\n   on the client's request.\n\u003c/p\u003e\u003cp\u003eThis might save you some work: it tries each of the elements in the list\n   in turn. As soon as one matches it runs the given action to process the\n   request.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "[(DispatchMatch, WebMonad ())]-\u003e WebMonad ()",
        "fct-type": "function",
        "title": "dispatchOnURL"
      },
      "index": {
        "description": "This is an optional helper function which you might find useful The serving fuctions both expect WebMonad action which is called to process each request In general you have to write that and dispatch based on the client request This might save you some work it tries each of the elements in the list in turn As soon as one matches it runs the given action to process the request",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "dispatchOnURL",
        "normalized": "[(DispatchMatch,WebMonad())]-\u003eWebMonad()",
        "package": "network-minihttp",
        "partial": "On URL",
        "signature": "[(DispatchMatch,WebMonad())]-\u003eWebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:errorPage",
      "description": {
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "String -\u003e WebMonad ()",
        "fct-source": "src/Network-MiniHTTP-Server.html#errorPage",
        "fct-type": "function",
        "title": "errorPage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "errorPage",
        "normalized": "String-\u003eWebMonad()",
        "package": "network-minihttp",
        "partial": "Page",
        "signature": "String-\u003eWebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:getGET",
      "description": {
        "fct-descr": "\u003cp\u003eGet the arguments to a GET request\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "WebMonad (Map ByteString ByteString)",
        "fct-source": "src/Network-MiniHTTP-Server.html#getGET",
        "fct-type": "function",
        "title": "getGET"
      },
      "index": {
        "description": "Get the arguments to GET request",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "getGET",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "GET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:getPOST",
      "description": {
        "fct-descr": "\u003cp\u003eGet the arguments to a POST request\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Int-\u003e WebMonad (Map ByteString ByteString)",
        "fct-type": "function",
        "title": "getPOST"
      },
      "index": {
        "description": "Get the arguments to POST request",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "getPOST",
        "normalized": "Int-\u003eWebMonad(Map ByteString ByteString)",
        "package": "network-minihttp",
        "partial": "POST",
        "signature": "Int-\u003eWebMonad(Map ByteString ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:getPayload",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the client's request payload (if any)\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "WebMonad (Maybe Source)",
        "fct-source": "src/Network-MiniHTTP-Server.html#getPayload",
        "fct-type": "function",
        "title": "getPayload"
      },
      "index": {
        "description": "Return the client request payload if any",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "getPayload",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:getReply",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current reply\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "WebMonad Reply",
        "fct-source": "src/Network-MiniHTTP-Server.html#getReply",
        "fct-type": "function",
        "title": "getReply"
      },
      "index": {
        "description": "Return the current reply",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "getReply",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:getRequest",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the request\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "WebMonad Request",
        "fct-source": "src/Network-MiniHTTP-Server.html#getRequest",
        "fct-type": "function",
        "title": "getRequest"
      },
      "index": {
        "description": "Return the request",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "getRequest",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:handleConditionalRequest",
      "description": {
        "fct-descr": "\u003cp\u003eThis handles the If-*Matches and If-*Modified conditional headers. It takes\n   its information from the Last-Modified and ETag headers of the current\n   reply. Note that, for the purposes of ETag matching, a reply without\n   an ETag header is considered not to exist from the point of view of,\n   say, If-Matches: *.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "WebMonad ()",
        "fct-source": "src/Network-MiniHTTP-Server.html#handleConditionalRequest",
        "fct-type": "function",
        "title": "handleConditionalRequest"
      },
      "index": {
        "description": "This handles the If Matches and If Modified conditional headers It takes its information from the Last-Modified and ETag headers of the current reply Note that for the purposes of ETag matching reply without an ETag header is considered not to exist from the point of view of say If-Matches",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "handleConditionalRequest",
        "normalized": "WebMonad()",
        "package": "network-minihttp",
        "partial": "Conditional Request",
        "signature": "WebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:handleDecoration",
      "description": {
        "fct-descr": "\u003cp\u003eAt the moment, this just adds the header Server: Network.MiniHTTP\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "WebMonad ()",
        "fct-source": "src/Network-MiniHTTP-Server.html#handleDecoration",
        "fct-type": "function",
        "title": "handleDecoration"
      },
      "index": {
        "description": "At the moment this just adds the header Server Network.MiniHTTP",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "handleDecoration",
        "normalized": "WebMonad()",
        "package": "network-minihttp",
        "partial": "Decoration",
        "signature": "WebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:handleFromFilesystem",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a very simple handler which deals with requests by returning the\n   requested file from the filesystem. It sets a Handle in the state and sets\n   the Content-Type, Content-Length and Last-Modified headers\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "FilePath-\u003e WebMonad ()",
        "fct-type": "function",
        "title": "handleFromFilesystem"
      },
      "index": {
        "description": "This is very simple handler which deals with requests by returning the requested file from the filesystem It sets Handle in the state and sets the Content-Type Content-Length and Last-Modified headers",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "handleFromFilesystem",
        "normalized": "FilePath-\u003eWebMonad()",
        "package": "network-minihttp",
        "partial": "From Filesystem",
        "signature": "FilePath-\u003eWebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:handleHandleToSource",
      "description": {
        "fct-descr": "\u003cp\u003eIf the current state includes a Handle, this turns it into a Source\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "WebMonad ()",
        "fct-source": "src/Network-MiniHTTP-Server.html#handleHandleToSource",
        "fct-type": "function",
        "title": "handleHandleToSource"
      },
      "index": {
        "description": "If the current state includes Handle this turns it into Source",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "handleHandleToSource",
        "normalized": "WebMonad()",
        "package": "network-minihttp",
        "partial": "Handle To Source",
        "signature": "WebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:handleRangeRequests",
      "description": {
        "fct-descr": "\u003cp\u003eThis handles Range requests and also translates from Handles to Sources.\n   If the WebMonad has a Handle at this point, then we can construct sources\n   from any subrange of the file. (We also assume that Content-Length is\n   correctly set.)\n\u003c/p\u003e\u003cp\u003eSee RFC 2616, section 14.35\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "WebMonad ()",
        "fct-source": "src/Network-MiniHTTP-Server.html#handleRangeRequests",
        "fct-type": "function",
        "title": "handleRangeRequests"
      },
      "index": {
        "description": "This handles Range requests and also translates from Handles to Sources If the WebMonad has Handle at this point then we can construct sources from any subrange of the file We also assume that Content-Length is correctly set See RFC section",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "handleRangeRequests",
        "normalized": "WebMonad()",
        "package": "network-minihttp",
        "partial": "Range Requests",
        "signature": "WebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:serveHTTP",
      "description": {
        "fct-descr": "\u003cp\u003eStart an IPv4 HTTP server\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Int-\u003e WebMonad ()-\u003e IO ()",
        "fct-type": "function",
        "title": "serveHTTP"
      },
      "index": {
        "description": "Start an IPv4 HTTP server",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "serveHTTP",
        "normalized": "Int-\u003eWebMonad()-\u003eIO()",
        "package": "network-minihttp",
        "partial": "HTTP",
        "signature": "Int-\u003eWebMonad()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:serveHTTPS",
      "description": {
        "fct-descr": "\u003cp\u003eStart an IPv4 HTTPS server. Plese remember to have wrapped your main\n   function in \u003ccode\u003eOpenSSL.withOpenSSL\u003c/code\u003e otherwise you'll probably crash the\n   process.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Int-\u003e FilePath-\u003e FilePath-\u003e WebMonad ()-\u003e IO ()",
        "fct-type": "function",
        "title": "serveHTTPS"
      },
      "index": {
        "description": "Start an IPv4 HTTPS server Plese remember to have wrapped your main function in OpenSSL.withOpenSSL otherwise you ll probably crash the process",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "serveHTTPS",
        "normalized": "Int-\u003eFilePath-\u003eFilePath-\u003eWebMonad()-\u003eIO()",
        "package": "network-minihttp",
        "partial": "HTTPS",
        "signature": "Int-\u003eFilePath-\u003eFilePath-\u003eWebMonad()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:setCookie",
      "description": {
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Cookie -\u003e WebMonad ()",
        "fct-source": "src/Network-MiniHTTP-Server.html#setCookie",
        "fct-type": "function",
        "title": "setCookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "setCookie",
        "normalized": "Cookie-\u003eWebMonad()",
        "package": "network-minihttp",
        "partial": "Cookie",
        "signature": "Cookie-\u003eWebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:setHeader",
      "description": {
        "fct-descr": "\u003cp\u003eSet a header in the current reply. Because of the way records work, you use\n   this function like this:\n\u003c/p\u003e\u003cpre\u003e setHeader $ \\h -\u003e h { httpSomeHeader = Just value }\n\u003c/pre\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "(Headers -\u003e Headers) -\u003e WebMonad ()",
        "fct-source": "src/Network-MiniHTTP-Server.html#setHeader",
        "fct-type": "function",
        "title": "setHeader"
      },
      "index": {
        "description": "Set header in the current reply Because of the way records work you use this function like this setHeader httpSomeHeader Just value",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "setHeader",
        "normalized": "(Headers-\u003eHeaders)-\u003eWebMonad()",
        "package": "network-minihttp",
        "partial": "Header",
        "signature": "(Headers-\u003eHeaders)-\u003eWebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:setReply",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current reply to be a reply with the given status code, the\n   default message for that status code, an empty body and an empty set of\n   headers.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Int -\u003e WebMonad ()",
        "fct-source": "src/Network-MiniHTTP-Server.html#setReply",
        "fct-type": "function",
        "title": "setReply"
      },
      "index": {
        "description": "Set the current reply to be reply with the given status code the default message for that status code an empty body and an empty set of headers",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "setReply",
        "normalized": "Int-\u003eWebMonad()",
        "package": "network-minihttp",
        "partial": "Reply",
        "signature": "Int-\u003eWebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsAction",
      "description": {
        "fct-descr": "\u003cp\u003ean action to be performed before sending the reply\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe (IO ())",
        "fct-source": "src/Network-MiniHTTP-Server.html#WebState",
        "fct-type": "function",
        "title": "wsAction"
      },
      "index": {
        "description": "an action to be performed before sending the reply",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "wsAction",
        "normalized": "Maybe(IO())",
        "package": "network-minihttp",
        "partial": "Action",
        "signature": "Maybe(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsBody",
      "description": {
        "fct-descr": "\u003cp\u003ethe client's payload\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe Source",
        "fct-source": "src/Network-MiniHTTP-Server.html#WebState",
        "fct-type": "function",
        "title": "wsBody"
      },
      "index": {
        "description": "the client payload",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "wsBody",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsHandle",
      "description": {
        "fct-descr": "\u003cp\u003ethe current handle\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe Handle",
        "fct-source": "src/Network-MiniHTTP-Server.html#WebState",
        "fct-type": "function",
        "title": "wsHandle"
      },
      "index": {
        "description": "the current handle",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "wsHandle",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsMimeTypes",
      "description": {
        "fct-descr": "\u003cp\u003ethe system mime types db, mapping file extensions\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Map ByteString MediaType",
        "fct-source": "src/Network-MiniHTTP-Server.html#WebState",
        "fct-type": "function",
        "title": "wsMimeTypes"
      },
      "index": {
        "description": "the system mime types db mapping file extensions",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "wsMimeTypes",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Mime Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsReply",
      "description": {
        "fct-descr": "\u003cp\u003ethe current reply\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Reply",
        "fct-source": "src/Network-MiniHTTP-Server.html#WebState",
        "fct-type": "function",
        "title": "wsReply"
      },
      "index": {
        "description": "the current reply",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "wsReply",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsRequest",
      "description": {
        "fct-descr": "\u003cp\u003ethe original request\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Request",
        "fct-source": "src/Network-MiniHTTP-Server.html#WebState",
        "fct-type": "function",
        "title": "wsRequest"
      },
      "index": {
        "description": "the original request",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "wsRequest",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsSource",
      "description": {
        "fct-descr": "\u003cp\u003ethe current source\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Server",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe Source",
        "fct-source": "src/Network-MiniHTTP-Server.html#WebState",
        "fct-type": "function",
        "title": "wsSource"
      },
      "index": {
        "description": "the current source",
        "hierarchy": "Network MiniHTTP Server",
        "module": "Network.MiniHTTP.Server",
        "name": "wsSource",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Session.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic session support. Sessions are (currently) just maps of strings to\n   strings which are serialised and sent to the client using a Cookie.\n   Serialised, they should be less than 4K, so the sum of all your strings in\n   the map should be \u003c 3900 bytes to be safe.\n\u003c/p\u003e\u003cp\u003eThe cookies are HMACed and encrypted so that the client can't inspect nor\n   alter them. The key is, by default, generated randomly every time the\n   server starts. If you want the cookies to be reusable across restarts or\n   servers you need to set the key yourself.\n\u003c/p\u003e\u003cp\u003eAlso, by the default, the cookies are set to expire when the browser\n   session ends.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.MiniHTTP.Session",
        "fct-package": "network-minihttp",
        "fct-signature": "module",
        "fct-source": "src/Network-MiniHTTP-Session.html",
        "fct-type": "module",
        "title": "Session"
      },
      "index": {
        "description": "Basic session support Sessions are currently just maps of strings to strings which are serialised and sent to the client using Cookie Serialised they should be less than so the sum of all your strings in the map should be bytes to be safe The cookies are HMACed and encrypted so that the client can inspect nor alter them The key is by default generated randomly every time the server starts If you want the cookies to be reusable across restarts or servers you need to set the key yourself Also by the default the cookies are set to expire when the browser session ends",
        "hierarchy": "Network MiniHTTP Session",
        "module": "Network.MiniHTTP.Session",
        "name": "Session",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Session.html#v:addSession",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a key value pair to the session\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Session",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString -\u003e ByteString -\u003e WebMonad ()",
        "fct-source": "src/Network-MiniHTTP-Session.html#addSession",
        "fct-type": "function",
        "title": "addSession"
      },
      "index": {
        "description": "Add key value pair to the session",
        "hierarchy": "Network MiniHTTP Session",
        "module": "Network.MiniHTTP.Session",
        "name": "addSession",
        "normalized": "ByteString-\u003eByteString-\u003eWebMonad()",
        "package": "network-minihttp",
        "partial": "Session",
        "signature": "ByteString-\u003eByteString-\u003eWebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Session.html#v:getSession",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current session. If the user didn't present a cookie, or the\n   cookie is invalid, an empty map is returned.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Session",
        "fct-package": "network-minihttp",
        "fct-signature": "WebMonad (Map ByteString ByteString)",
        "fct-source": "src/Network-MiniHTTP-Session.html#getSession",
        "fct-type": "function",
        "title": "getSession"
      },
      "index": {
        "description": "Return the current session If the user didn present cookie or the cookie is invalid an empty map is returned",
        "hierarchy": "Network MiniHTTP Session",
        "module": "Network.MiniHTTP.Session",
        "name": "getSession",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Session.html#v:putSession",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current session. This alters the headers of the current request,\n   so future actions which reset the headers (like \u003ccode\u003e\u003ca\u003esetReply\u003c/a\u003e\u003c/code\u003e) will undo\n   this.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Session",
        "fct-package": "network-minihttp",
        "fct-signature": "Map ByteString ByteString -\u003e WebMonad ()",
        "fct-source": "src/Network-MiniHTTP-Session.html#putSession",
        "fct-type": "function",
        "title": "putSession"
      },
      "index": {
        "description": "Set the current session This alters the headers of the current request so future actions which reset the headers like setReply will undo this",
        "hierarchy": "Network MiniHTTP Session",
        "module": "Network.MiniHTTP.Session",
        "name": "putSession",
        "normalized": "Map ByteString ByteString-\u003eWebMonad()",
        "package": "network-minihttp",
        "partial": "Session",
        "signature": "Map ByteString ByteString-\u003eWebMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Session.html#v:setSessionSecretKey",
      "description": {
        "fct-descr": "\u003cp\u003eSet the secret key used to HMAC and encrypt the session cookies.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.Session",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString -\u003e STM ()",
        "fct-source": "src/Network-MiniHTTP-Session.html#setSessionSecretKey",
        "fct-type": "function",
        "title": "setSessionSecretKey"
      },
      "index": {
        "description": "Set the secret key used to HMAC and encrypt the session cookies",
        "hierarchy": "Network MiniHTTP Session",
        "module": "Network.MiniHTTP.Session",
        "name": "setSessionSecretKey",
        "normalized": "ByteString-\u003eSTM()",
        "package": "network-minihttp",
        "partial": "Session Secret Key",
        "signature": "ByteString-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a structure for representing web URLs. We don't try\n   to be a fully general URI parser (so no \u003ccode\u003emailto:\u003c/code\u003e etc), but it's a lot\n   better than \u003ca\u003eNetwork.URI\u003c/a\u003e for dealing with HTTP(S)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "module",
        "fct-source": "src/Network-MiniHTTP-URL.html",
        "fct-type": "module",
        "title": "URL"
      },
      "index": {
        "description": "This module contains structure for representing web URLs We don try to be fully general URI parser so no mailto etc but it lot better than Network.URI for dealing with HTTP",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "URL",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#t:Host",
      "description": {
        "fct-descr": "\u003cp\u003eThe host where the resource can be found\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-URL.html#Host",
        "fct-type": "data",
        "title": "Host"
      },
      "index": {
        "description": "The host where the resource can be found",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "Host",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#t:RelativeURL",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a relative URL. It just copies (and renames) the last three\n   members of URL. However, it's good to keep these two different types of\n   URL apart in the type system.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-URL.html#RelativeURL",
        "fct-type": "data",
        "title": "RelativeURL"
      },
      "index": {
        "description": "This is relative URL It just copies and renames the last three members of URL However it good to keep these two different types of URL apart in the type system",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "RelativeURL",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Relative URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#t:Scheme",
      "description": {
        "fct-descr": "\u003cp\u003eThe transport layer to be used\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-URL.html#Scheme",
        "fct-type": "data",
        "title": "Scheme"
      },
      "index": {
        "description": "The transport layer to be used",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "Scheme",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Scheme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#t:URL",
      "description": {
        "fct-descr": "\u003cp\u003eA web URL\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "data",
        "fct-source": "src/Network-MiniHTTP-URL.html#URL",
        "fct-type": "data",
        "title": "URL"
      },
      "index": {
        "description": "web URL",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "URL",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:HTTP",
      "description": {
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "HTTP",
        "fct-source": "src/Network-MiniHTTP-URL.html#Scheme",
        "fct-type": "function",
        "title": "HTTP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "HTTP",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:HTTPS",
      "description": {
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "HTTPS",
        "fct-source": "src/Network-MiniHTTP-URL.html#Scheme",
        "fct-type": "function",
        "title": "HTTPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "HTTPS",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "HTTPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:Hostname",
      "description": {
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Hostname ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#Host",
        "fct-type": "function",
        "title": "Hostname"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "Hostname",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Hostname",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:IPv4Literal",
      "description": {
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "IPv4Literal HostAddress",
        "fct-source": "src/Network-MiniHTTP-URL.html#Host",
        "fct-type": "function",
        "title": "IPv4Literal"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "IPv4Literal",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "IPv Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:IPv6Literal",
      "description": {
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "IPv6Literal HostAddress6",
        "fct-source": "src/Network-MiniHTTP-URL.html#Host",
        "fct-type": "function",
        "title": "IPv6Literal"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "IPv6Literal",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "IPv Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:RelativeURL",
      "description": {
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "RelativeURL",
        "fct-source": "src/Network-MiniHTTP-URL.html#RelativeURL",
        "fct-type": "function",
        "title": "RelativeURL"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "RelativeURL",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Relative URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:URL",
      "description": {
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "URL",
        "fct-source": "src/Network-MiniHTTP-URL.html#URL",
        "fct-type": "function",
        "title": "URL"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "URL",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eParse a URL\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString -\u003e Maybe URL",
        "fct-source": "src/Network-MiniHTTP-URL.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Parse URL",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "parse",
        "normalized": "ByteString-\u003eMaybe URL",
        "package": "network-minihttp",
        "partial": "",
        "signature": "ByteString-\u003eMaybe URL"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:parseArguments",
      "description": {
        "fct-descr": "\u003cp\u003eParse just an arguments map. Can be useful for POST requests. Warning: it\n   occurs to be that the arguments in a POST request might include unescaped\n   '#' symbols. In a URL that would be illegal, but the parser may need to be\n   reworked for that.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString -\u003e Maybe (Map ByteString ByteString)",
        "fct-source": "src/Network-MiniHTTP-URL.html#parseArguments",
        "fct-type": "function",
        "title": "parseArguments"
      },
      "index": {
        "description": "Parse just an arguments map Can be useful for POST requests Warning it occurs to be that the arguments in POST request might include unescaped symbols In URL that would be illegal but the parser may need to be reworked for that",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "parseArguments",
        "normalized": "ByteString-\u003eMaybe(Map ByteString ByteString)",
        "package": "network-minihttp",
        "partial": "Arguments",
        "signature": "ByteString-\u003eMaybe(Map ByteString ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:parseRelative",
      "description": {
        "fct-descr": "\u003cp\u003eParse a relative URL\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString -\u003e Maybe RelativeURL",
        "fct-source": "src/Network-MiniHTTP-URL.html#parseRelative",
        "fct-type": "function",
        "title": "parseRelative"
      },
      "index": {
        "description": "Parse relative URL",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "parseRelative",
        "normalized": "ByteString-\u003eMaybe RelativeURL",
        "package": "network-minihttp",
        "partial": "Relative",
        "signature": "ByteString-\u003eMaybe RelativeURL"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:rurlArguments",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Map ByteString ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#RelativeURL",
        "fct-type": "function",
        "title": "rurlArguments"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "rurlArguments",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Arguments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:rurlFragment",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#RelativeURL",
        "fct-type": "function",
        "title": "rurlFragment"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "rurlFragment",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Fragment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:rurlPath",
      "description": {
        "fct-descr": "\u003cp\u003edoes not include leading \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#RelativeURL",
        "fct-type": "function",
        "title": "rurlPath"
      },
      "index": {
        "description": "does not include leading",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "rurlPath",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:serialise",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a URL to a ByteString. It's the same as \u003ca\u003eshow\u003c/a\u003e, except for the\n   type of the return.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "URL -\u003e ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#serialise",
        "fct-type": "function",
        "title": "serialise"
      },
      "index": {
        "description": "Convert URL to ByteString It the same as show except for the type of the return",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "serialise",
        "normalized": "URL-\u003eByteString",
        "package": "network-minihttp",
        "partial": "",
        "signature": "URL-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:serialiseArguments",
      "description": {
        "fct-descr": "\u003cp\u003eSerialise just an arguments map. Can be useful for POST requests.\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Map ByteString ByteString -\u003e ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#serialiseArguments",
        "fct-type": "function",
        "title": "serialiseArguments"
      },
      "index": {
        "description": "Serialise just an arguments map Can be useful for POST requests",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "serialiseArguments",
        "normalized": "Map ByteString ByteString-\u003eByteString",
        "package": "network-minihttp",
        "partial": "Arguments",
        "signature": "Map ByteString ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:serialiseRelative",
      "description": {
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "RelativeURL -\u003e ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#serialiseRelative",
        "fct-type": "function",
        "title": "serialiseRelative"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "serialiseRelative",
        "normalized": "RelativeURL-\u003eByteString",
        "package": "network-minihttp",
        "partial": "Relative",
        "signature": "RelativeURL-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:toRelative",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a relative URL from a URL\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "URL -\u003e RelativeURL",
        "fct-source": "src/Network-MiniHTTP-URL.html#toRelative",
        "fct-type": "function",
        "title": "toRelative"
      },
      "index": {
        "description": "Extract relative URL from URL",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "toRelative",
        "normalized": "URL-\u003eRelativeURL",
        "package": "network-minihttp",
        "partial": "Relative",
        "signature": "URL-\u003eRelativeURL"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlArguments",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Map ByteString ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#URL",
        "fct-type": "function",
        "title": "urlArguments"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "urlArguments",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Arguments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlFragment",
      "description": {
        "fct-descr": "\u003cp\u003edoesn't include '#'\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#URL",
        "fct-type": "function",
        "title": "urlFragment"
      },
      "index": {
        "description": "doesn include",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "urlFragment",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Fragment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Host",
        "fct-source": "src/Network-MiniHTTP-URL.html#URL",
        "fct-type": "function",
        "title": "urlHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "urlHost",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#URL",
        "fct-type": "function",
        "title": "urlPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "urlPassword",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlPath",
      "description": {
        "fct-descr": "\u003cp\u003edoes not include leading \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#URL",
        "fct-type": "function",
        "title": "urlPath"
      },
      "index": {
        "description": "does not include leading",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "urlPath",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlPort",
      "description": {
        "fct-descr": "\u003cp\u003edefaults based on the scheme\n\u003c/p\u003e",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Int",
        "fct-source": "src/Network-MiniHTTP-URL.html#URL",
        "fct-type": "function",
        "title": "urlPort"
      },
      "index": {
        "description": "defaults based on the scheme",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "urlPort",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlScheme",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Scheme",
        "fct-source": "src/Network-MiniHTTP-URL.html#URL",
        "fct-type": "function",
        "title": "urlScheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "urlScheme",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "Scheme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlUser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MiniHTTP.URL",
        "fct-package": "network-minihttp",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-MiniHTTP-URL.html#URL",
        "fct-type": "function",
        "title": "urlUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MiniHTTP URL",
        "module": "Network.MiniHTTP.URL",
        "name": "urlUser",
        "normalized": "",
        "package": "network-minihttp",
        "partial": "User",
        "signature": ""
      }
    }
  }
]