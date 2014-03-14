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
        "word": "network-minihttp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a very basic HTTP client. At the moment, it doesn't\n   even handle redirects for you.\n\u003c/p\u003e\u003cp\u003eNote that, in order to use SSL, you need to have the root CA certificates\n   in a PEM file in \u003ccode\u003e\u003cem\u003eetc\u003c/em\u003essh/certs.pem\u003c/code\u003e and you need to have wrapped your\n   main function in \u003ccode\u003eOpenSSL.withOpenSSL\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MiniHTTP.Client",
          "name": "Client",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Client.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains very basic HTTP client At the moment it doesn even handle redirects for you Note that in order to use SSL you need to have the root CA certificates in PEM file in etc ssh certs.pem and you need to have wrapped your main function in OpenSSL.withOpenSSL",
          "hierarchy": "Network MiniHTTP Client",
          "module": "Network.MiniHTTP.Client",
          "name": "Client",
          "package": "network-minihttp",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a connection to the correct host for the given URL. (i.e.\n   resolve the hostname and create a TCP connection to the correct port).\n\u003c/p\u003e\u003cp\u003eNote that the DNS resolution (if any) doesn't block the whole process.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Client",
          "name": "connection",
          "package": "network-minihttp",
          "signature": "URL -\u003e IO Socket",
          "source": "src/Network-MiniHTTP-Client.html#connection",
          "type": "function"
        },
        "index": {
          "description": "Construct connection to the correct host for the given URL i.e resolve the hostname and create TCP connection to the correct port Note that the DNS resolution if any doesn block the whole process",
          "hierarchy": "Network MiniHTTP Client",
          "module": "Network.MiniHTTP.Client",
          "name": "connection",
          "normalized": "URL-\u003eIO Socket",
          "package": "network-minihttp",
          "signature": "URL-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Client.html#v:connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch an HTTP(S) entity.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Client",
          "name": "fetchBasic",
          "package": "network-minihttp",
          "signature": "Headers-\u003e URL-\u003e IO (Connection, Reply, Maybe Source)",
          "type": "function"
        },
        "index": {
          "description": "Fetch an HTTP entity",
          "hierarchy": "Network MiniHTTP Client",
          "module": "Network.MiniHTTP.Client",
          "name": "fetchBasic",
          "normalized": "Headers-\u003eURL-\u003eIO(Connection,Reply,Maybe Source)",
          "package": "network-minihttp",
          "partial": "Basic",
          "signature": "Headers-\u003eURL-\u003eIO(Connection,Reply,Maybe Source)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Client.html#v:fetchBasic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lower level HTTP client, but it allows you to perform POSTs etc\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Client",
          "name": "request",
          "package": "network-minihttp",
          "signature": "Connection-\u003e Request-\u003e Maybe Source-\u003e IO (Maybe (Reply, Maybe Source))",
          "type": "function"
        },
        "index": {
          "description": "lower level HTTP client but it allows you to perform POSTs etc",
          "hierarchy": "Network MiniHTTP Client",
          "module": "Network.MiniHTTP.Client",
          "name": "request",
          "normalized": "Connection-\u003eRequest-\u003eMaybe Source-\u003eIO(Maybe(Reply,Maybe Source))",
          "package": "network-minihttp",
          "signature": "Connection-\u003eRequest-\u003eMaybe Source-\u003eIO(Maybe(Reply,Maybe Source))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Client.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetup the transport (i.e. SSL) for the given URL. In the case of a HTTP\n   scheme, this just wraps the socket in a Connection.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Client",
          "name": "transport",
          "package": "network-minihttp",
          "signature": "URL -\u003e Socket -\u003e IO Connection",
          "source": "src/Network-MiniHTTP-Client.html#transport",
          "type": "function"
        },
        "index": {
          "description": "Setup the transport i.e SSL for the given URL In the case of HTTP scheme this just wraps the socket in Connection",
          "hierarchy": "Network MiniHTTP Client",
          "module": "Network.MiniHTTP.Client",
          "name": "transport",
          "normalized": "URL-\u003eSocket-\u003eIO Connection",
          "package": "network-minihttp",
          "signature": "URL-\u003eSocket-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Client.html#v:transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains many helper functions, as well the code for \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e,\n   which is a pretty important structure\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "HTTPConnection",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-HTTPConnection.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains many helper functions as well the code for Source which is pretty important structure",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "HTTPConnection",
          "package": "network-minihttp",
          "partial": "HTTPConnection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source is a stream of data, like a lazy data structure, but without\n   some of the dangers that such entail. A source returns a \u003ccode\u003e\u003ca\u003eSourceResult\u003c/a\u003e\u003c/code\u003e\n   each time you evaluate it.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "Source",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#Source",
          "type": "type"
        },
        "index": {
          "description": "source is stream of data like lazy data structure but without some of the dangers that such entail source returns SourceResult each time you evaluate it",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "Source",
          "package": "network-minihttp",
          "partial": "Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "SourceResult",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#SourceResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "SourceResult",
          "package": "network-minihttp",
          "partial": "Source Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#t:SourceResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esome data\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "SourceData",
          "package": "network-minihttp",
          "signature": "SourceData ByteString",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#SourceResult",
          "type": "function"
        },
        "index": {
          "description": "some data",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "SourceData",
          "package": "network-minihttp",
          "partial": "Source Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:SourceData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eend of data\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "SourceEOF",
          "package": "network-minihttp",
          "signature": "SourceEOF",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#SourceResult",
          "type": "function"
        },
        "index": {
          "description": "end of data",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "SourceEOF",
          "package": "network-minihttp",
          "partial": "Source EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:SourceEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eerror - please don't read this source again\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "SourceError",
          "package": "network-minihttp",
          "signature": "SourceError",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#SourceResult",
          "type": "function"
        },
        "index": {
          "description": "error please don read this source again",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "SourceError",
          "package": "network-minihttp",
          "partial": "Source Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:SourceError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a source from a ByteString\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "bsSource",
          "package": "network-minihttp",
          "signature": "ByteString -\u003e IO Source",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#bsSource",
          "type": "function"
        },
        "index": {
          "description": "Construct source from ByteString",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "bsSource",
          "normalized": "ByteString-\u003eIO Source",
          "package": "network-minihttp",
          "partial": "Source",
          "signature": "ByteString-\u003eIO Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:bsSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source which reads an HTTP chunked reply from a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "connChunkedSource",
          "package": "network-minihttp",
          "signature": "Connection -\u003e IO Source",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#connChunkedSource",
          "type": "function"
        },
        "index": {
          "description": "source which reads an HTTP chunked reply from Connection",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "connChunkedSource",
          "normalized": "Connection-\u003eIO Source",
          "package": "network-minihttp",
          "partial": "Chunked Source",
          "signature": "Connection-\u003eIO Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:connChunkedSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source which reads from the given \u003ccode\u003eConnection\u003c/code\u003e until the connection\n   signals end-of-file.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "connEOFSource",
          "package": "network-minihttp",
          "signature": "Connection -\u003e IO Source",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#connEOFSource",
          "type": "function"
        },
        "index": {
          "description": "source which reads from the given Connection until the connection signals end-of-file",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "connEOFSource",
          "normalized": "Connection-\u003eIO Source",
          "package": "network-minihttp",
          "partial": "EOFSource",
          "signature": "Connection-\u003eIO Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:connEOFSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source which reads from a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "connSource",
          "package": "network-minihttp",
          "signature": "Int64-\u003e ByteString-\u003e Connection-\u003e IO Source",
          "type": "function"
        },
        "index": {
          "description": "source which reads from Connection",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "connSource",
          "normalized": "Int-\u003eByteString-\u003eConnection-\u003eIO Source",
          "package": "network-minihttp",
          "partial": "Source",
          "signature": "Int-\u003eByteString-\u003eConnection-\u003eIO Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:connSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a source from a Handle\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "hSource",
          "package": "network-minihttp",
          "signature": "(Int64, Int64)-\u003e Handle-\u003e IO Source",
          "type": "function"
        },
        "index": {
          "description": "Construct source from Handle",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "hSource",
          "normalized": "(Int,Int)-\u003eHandle-\u003eIO Source",
          "package": "network-minihttp",
          "partial": "Source",
          "signature": "(Int,Int)-\u003eHandle-\u003eIO Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:hSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "maybeRead",
          "package": "network-minihttp",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#maybeRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "maybeRead",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "network-minihttp",
          "partial": "Read",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:maybeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source with no data (e.g. \u003ccode\u003e\u003cem\u003edev\u003c/em\u003enull\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "nullSource",
          "package": "network-minihttp",
          "signature": "Source",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#nullSource",
          "type": "function"
        },
        "index": {
          "description": "source with no data e.g dev null",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "nullSource",
          "package": "network-minihttp",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:nullSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an incremental parser from the network\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "readIG",
          "package": "network-minihttp",
          "signature": "Connection-\u003e Int-\u003e Int-\u003e Get a a-\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Run an incremental parser from the network",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "readIG",
          "normalized": "Connection-\u003eInt-\u003eInt-\u003eGet a a-\u003eIO(Maybe a)",
          "package": "network-minihttp",
          "partial": "IG",
          "signature": "Connection-\u003eInt-\u003eInt-\u003eGet a a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:readIG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a source until it returns \u003ccode\u003e\u003ca\u003eSourceEOF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "sourceDrain",
          "package": "network-minihttp",
          "signature": "Source -\u003e IO ()",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#sourceDrain",
          "type": "function"
        },
        "index": {
          "description": "Read source until it returns SourceEOF",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "sourceDrain",
          "normalized": "Source-\u003eIO()",
          "package": "network-minihttp",
          "partial": "Drain",
          "signature": "Source-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:sourceDrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an incremental parser from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "sourceIG",
          "package": "network-minihttp",
          "signature": "Source-\u003e Int-\u003e Get a a-\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Run an incremental parser from Source",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "sourceIG",
          "normalized": "Source-\u003eInt-\u003eGet a a-\u003eIO(Maybe a)",
          "package": "network-minihttp",
          "partial": "IG",
          "signature": "Source-\u003eInt-\u003eGet a a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:sourceIG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake, at most, the first n bytes from a Source and return a strict\n   ByteString. Returns Nothing on error. (A short read is not an error)\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "sourceToBS",
          "package": "network-minihttp",
          "signature": "Int -\u003e Source -\u003e IO (Maybe ByteString)",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#sourceToBS",
          "type": "function"
        },
        "index": {
          "description": "Take at most the first bytes from Source and return strict ByteString Returns Nothing on error short read is not an error",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "sourceToBS",
          "normalized": "Int-\u003eSource-\u003eIO(Maybe ByteString)",
          "package": "network-minihttp",
          "partial": "To BS",
          "signature": "Int-\u003eSource-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:sourceToBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a source to a lazy ByteString\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "sourceToLBS",
          "package": "network-minihttp",
          "signature": "Source -\u003e IO ByteString",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#sourceToLBS",
          "type": "function"
        },
        "index": {
          "description": "Convert source to lazy ByteString",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "sourceToLBS",
          "normalized": "Source-\u003eIO ByteString",
          "package": "network-minihttp",
          "partial": "To LBS",
          "signature": "Source-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:sourceToLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an SSL connection to a BaseConnection for Network.Connection\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "sslToBaseConnection",
          "package": "network-minihttp",
          "signature": "SSL -\u003e BaseConnection",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#sslToBaseConnection",
          "type": "function"
        },
        "index": {
          "description": "Convert an SSL connection to BaseConnection for Network.Connection",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "sslToBaseConnection",
          "normalized": "SSL-\u003eBaseConnection",
          "package": "network-minihttp",
          "partial": "To Base Connection",
          "signature": "SSL-\u003eBaseConnection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:sslToBaseConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream a source to a connection while not enqueuing more than lowWater\n   bytes in the outbound queue (not inc the kernel buffer)\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "streamSource",
          "package": "network-minihttp",
          "signature": "Int -\u003e Connection -\u003e Source -\u003e IO Bool",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#streamSource",
          "type": "function"
        },
        "index": {
          "description": "Stream source to connection while not enqueuing more than lowWater bytes in the outbound queue not inc the kernel buffer",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "streamSource",
          "normalized": "Int-\u003eConnection-\u003eSource-\u003eIO Bool",
          "package": "network-minihttp",
          "partial": "Source",
          "signature": "Int-\u003eConnection-\u003eSource-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:streamSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream a source to a connection, with chunked encoding, while not\n   enqueuing more than lowWater bytes in the outbound queue (not inc the\n   kernel buffer)\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "streamSourceChunked",
          "package": "network-minihttp",
          "signature": "Int -\u003e Connection -\u003e Source -\u003e IO Bool",
          "source": "src/Network-MiniHTTP-HTTPConnection.html#streamSourceChunked",
          "type": "function"
        },
        "index": {
          "description": "Stream source to connection with chunked encoding while not enqueuing more than lowWater bytes in the outbound queue not inc the kernel buffer",
          "hierarchy": "Network MiniHTTP HTTPConnection",
          "module": "Network.MiniHTTP.HTTPConnection",
          "name": "streamSourceChunked",
          "normalized": "Int-\u003eConnection-\u003eSource-\u003eIO Bool",
          "package": "network-minihttp",
          "partial": "Source Chunked",
          "signature": "Int-\u003eConnection-\u003eSource-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-HTTPConnection.html#v:streamSourceChunked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module serialises and deserialises HTTP headers. It contains Haskell\n   representations of request and replies and can transform them to, and from,\n   the HTTP wire format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Marshal",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Marshal.html",
          "type": "module"
        },
        "index": {
          "description": "This module serialises and deserialises HTTP headers It contains Haskell representations of request and replies and can transform them to and from the HTTP wire format",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Marshal",
          "package": "network-minihttp",
          "partial": "Marshal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA HTTP Cookie. See \u003ca\u003ehttp://en.wikipedia.org/wiki/HTTP_cookie\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Cookie",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Marshal.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "HTTP Cookie See http en.wikipedia.org wiki HTTP cookie",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Cookie",
          "package": "network-minihttp",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP headers, see RFC 2616 section 14\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Headers",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "data"
        },
        "index": {
          "description": "HTTP headers see RFC section",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Headers",
          "package": "network-minihttp",
          "partial": "Headers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "MediaType",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Marshal.html#MediaType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "MediaType",
          "package": "network-minihttp",
          "partial": "Media Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:MediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of valid methods, see RFC 2616 section 5.1\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Method",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Marshal.html#Method",
          "type": "data"
        },
        "index": {
          "description": "The list of valid methods see RFC section",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Method",
          "package": "network-minihttp",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA HTTP range\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Range",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Marshal.html#Range",
          "type": "data"
        },
        "index": {
          "description": "HTTP range",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Range",
          "package": "network-minihttp",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA HTTP reply\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Reply",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Marshal.html#Reply",
          "type": "data"
        },
        "index": {
          "description": "HTTP reply",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Reply",
          "package": "network-minihttp",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA HTTP request\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Request",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Marshal.html#Request",
          "type": "data"
        },
        "index": {
          "description": "HTTP request",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Request",
          "package": "network-minihttp",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "CONNECT",
          "package": "network-minihttp",
          "signature": "CONNECT",
          "source": "src/Network-MiniHTTP-Marshal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "CONNECT",
          "package": "network-minihttp",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "Cookie",
          "package": "network-minihttp",
          "signature": "Cookie",
          "source": "src/Network-MiniHTTP-Marshal.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Cookie",
          "package": "network-minihttp",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "DELETE",
          "package": "network-minihttp",
          "signature": "DELETE",
          "source": "src/Network-MiniHTTP-Marshal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "DELETE",
          "package": "network-minihttp",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "GET",
          "package": "network-minihttp",
          "signature": "GET",
          "source": "src/Network-MiniHTTP-Marshal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "GET",
          "package": "network-minihttp",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "HEAD",
          "package": "network-minihttp",
          "signature": "HEAD",
          "source": "src/Network-MiniHTTP-Marshal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "HEAD",
          "package": "network-minihttp",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "Headers",
          "package": "network-minihttp",
          "signature": "Headers",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Headers",
          "package": "network-minihttp",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "OPTIONS",
          "package": "network-minihttp",
          "signature": "OPTIONS",
          "source": "src/Network-MiniHTTP-Marshal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "OPTIONS",
          "package": "network-minihttp",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "POST",
          "package": "network-minihttp",
          "signature": "POST",
          "source": "src/Network-MiniHTTP-Marshal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "POST",
          "package": "network-minihttp",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "PUT",
          "package": "network-minihttp",
          "signature": "PUT",
          "source": "src/Network-MiniHTTP-Marshal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "PUT",
          "package": "network-minihttp",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeverything from the given byte onwards\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "RangeFrom",
          "package": "network-minihttp",
          "signature": "RangeFrom Int64",
          "source": "src/Network-MiniHTTP-Marshal.html#Range",
          "type": "function"
        },
        "index": {
          "description": "everything from the given byte onwards",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "RangeFrom",
          "package": "network-minihttp",
          "partial": "Range From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:RangeFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe bytes in the given range, inclusive\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "RangeOf",
          "package": "network-minihttp",
          "signature": "RangeOf Int64 Int64",
          "source": "src/Network-MiniHTTP-Marshal.html#Range",
          "type": "function"
        },
        "index": {
          "description": "the bytes in the given range inclusive",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "RangeOf",
          "package": "network-minihttp",
          "partial": "Range Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:RangeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe final n bytes\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "RangeSuffix",
          "package": "network-minihttp",
          "signature": "RangeSuffix Int64",
          "source": "src/Network-MiniHTTP-Marshal.html#Range",
          "type": "function"
        },
        "index": {
          "description": "the final bytes",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "RangeSuffix",
          "package": "network-minihttp",
          "partial": "Range Suffix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:RangeSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "Reply",
          "package": "network-minihttp",
          "signature": "Reply",
          "source": "src/Network-MiniHTTP-Marshal.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Reply",
          "package": "network-minihttp",
          "partial": "Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "Request",
          "package": "network-minihttp",
          "signature": "Request",
          "source": "src/Network-MiniHTTP-Marshal.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "Request",
          "package": "network-minihttp",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "TRACE",
          "package": "network-minihttp",
          "signature": "TRACE",
          "source": "src/Network-MiniHTTP-Marshal.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "TRACE",
          "package": "network-minihttp",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookieDomain",
          "package": "network-minihttp",
          "signature": "Maybe String",
          "source": "src/Network-MiniHTTP-Marshal.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookieDomain",
          "package": "network-minihttp",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookieDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookieExpires",
          "package": "network-minihttp",
          "signature": "Maybe UTCTime",
          "source": "src/Network-MiniHTTP-Marshal.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookieExpires",
          "package": "network-minihttp",
          "partial": "Expires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookieExpires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookieName",
          "package": "network-minihttp",
          "signature": "ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookieName",
          "package": "network-minihttp",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookieName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookiePath",
          "package": "network-minihttp",
          "signature": "Maybe String",
          "source": "src/Network-MiniHTTP-Marshal.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookiePath",
          "package": "network-minihttp",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookiePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookieSecure",
          "package": "network-minihttp",
          "signature": "Bool",
          "source": "src/Network-MiniHTTP-Marshal.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookieSecure",
          "package": "network-minihttp",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookieSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookieValue",
          "package": "network-minihttp",
          "signature": "ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "cookieValue",
          "package": "network-minihttp",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:cookieValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "emptyCookie",
          "package": "network-minihttp",
          "signature": "Cookie",
          "source": "src/Network-MiniHTTP-Marshal.html#emptyCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "emptyCookie",
          "package": "network-minihttp",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:emptyCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "emptyHeaders",
          "package": "network-minihttp",
          "signature": "Headers",
          "source": "src/Network-MiniHTTP-Marshal.html#emptyHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "emptyHeaders",
          "package": "network-minihttp",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:emptyHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAccept",
          "package": "network-minihttp",
          "signature": "Maybe [(MediaType, Int)]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAccept",
          "normalized": "Maybe[(MediaType,Int)]",
          "package": "network-minihttp",
          "partial": "Accept",
          "signature": "Maybe[(MediaType,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAcceptCharset",
          "package": "network-minihttp",
          "signature": "Maybe [(String, Int)]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAcceptCharset",
          "normalized": "Maybe[(String,Int)]",
          "package": "network-minihttp",
          "partial": "Accept Charset",
          "signature": "Maybe[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAcceptCharset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAcceptEncoding",
          "package": "network-minihttp",
          "signature": "Maybe [(String, Int)]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAcceptEncoding",
          "normalized": "Maybe[(String,Int)]",
          "package": "network-minihttp",
          "partial": "Accept Encoding",
          "signature": "Maybe[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAcceptEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAcceptLanguage",
          "package": "network-minihttp",
          "signature": "Maybe [(String, Int)]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAcceptLanguage",
          "normalized": "Maybe[(String,Int)]",
          "package": "network-minihttp",
          "partial": "Accept Language",
          "signature": "Maybe[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAcceptLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAcceptRanges",
          "package": "network-minihttp",
          "signature": "Bool",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAcceptRanges",
          "package": "network-minihttp",
          "partial": "Accept Ranges",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAcceptRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAge",
          "package": "network-minihttp",
          "signature": "Maybe Int64",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAge",
          "package": "network-minihttp",
          "partial": "Age",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAllow",
          "package": "network-minihttp",
          "signature": "Maybe [Method]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAllow",
          "normalized": "Maybe[Method]",
          "package": "network-minihttp",
          "partial": "Allow",
          "signature": "Maybe[Method]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAllow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAuthorization",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpAuthorization",
          "package": "network-minihttp",
          "partial": "Authorization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpAuthorization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpConnection",
          "package": "network-minihttp",
          "signature": "[String]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpConnection",
          "normalized": "[String]",
          "package": "network-minihttp",
          "partial": "Connection",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpConnectionClose",
          "package": "network-minihttp",
          "signature": "Bool",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpConnectionClose",
          "package": "network-minihttp",
          "partial": "Connection Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpConnectionClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentEncodings",
          "package": "network-minihttp",
          "signature": "[String]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentEncodings",
          "normalized": "[String]",
          "package": "network-minihttp",
          "partial": "Content Encodings",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentEncodings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentLanguage",
          "package": "network-minihttp",
          "signature": "Maybe [String]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentLanguage",
          "normalized": "Maybe[String]",
          "package": "network-minihttp",
          "partial": "Content Language",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentLength",
          "package": "network-minihttp",
          "signature": "Maybe Int64",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentLength",
          "package": "network-minihttp",
          "partial": "Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentLocation",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentLocation",
          "package": "network-minihttp",
          "partial": "Content Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentRange",
          "package": "network-minihttp",
          "signature": "Maybe (Maybe (Int64, Int64), Maybe Int64)",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentRange",
          "normalized": "Maybe(Maybe(Int,Int),Maybe Int)",
          "package": "network-minihttp",
          "partial": "Content Range",
          "signature": "Maybe(Maybe(Int,Int),Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentType",
          "package": "network-minihttp",
          "signature": "Maybe MediaType",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpContentType",
          "package": "network-minihttp",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpCookie",
          "package": "network-minihttp",
          "signature": "[Cookie]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpCookie",
          "normalized": "[Cookie]",
          "package": "network-minihttp",
          "partial": "Cookie",
          "signature": "[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpDate",
          "package": "network-minihttp",
          "signature": "Maybe UTCTime",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpDate",
          "package": "network-minihttp",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpETag",
          "package": "network-minihttp",
          "signature": "Maybe (Bool, ByteString)",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpETag",
          "normalized": "Maybe(Bool,ByteString)",
          "package": "network-minihttp",
          "partial": "ETag",
          "signature": "Maybe(Bool,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpETag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpExpires",
          "package": "network-minihttp",
          "signature": "Maybe UTCTime",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpExpires",
          "package": "network-minihttp",
          "partial": "Expires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpExpires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpHost",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpHost",
          "package": "network-minihttp",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpIfMatch",
          "package": "network-minihttp",
          "signature": "Maybe (Either () [ByteString])",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpIfMatch",
          "normalized": "Maybe(Either()[ByteString])",
          "package": "network-minihttp",
          "partial": "If Match",
          "signature": "Maybe(Either()[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpIfMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpIfModifiedSince",
          "package": "network-minihttp",
          "signature": "Maybe UTCTime",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpIfModifiedSince",
          "package": "network-minihttp",
          "partial": "If Modified Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpIfModifiedSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpIfNoneMatch",
          "package": "network-minihttp",
          "signature": "Maybe (Either () [(Bool, ByteString)])",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpIfNoneMatch",
          "normalized": "Maybe(Either()[(Bool,ByteString)])",
          "package": "network-minihttp",
          "partial": "If None Match",
          "signature": "Maybe(Either()[(Bool,ByteString)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpIfNoneMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpIfRange",
          "package": "network-minihttp",
          "signature": "Maybe (Either ByteString UTCTime)",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpIfRange",
          "package": "network-minihttp",
          "partial": "If Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpIfRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpIfUnmodifiedSince",
          "package": "network-minihttp",
          "signature": "Maybe UTCTime",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpIfUnmodifiedSince",
          "package": "network-minihttp",
          "partial": "If Unmodified Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpIfUnmodifiedSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpKeepAlive",
          "package": "network-minihttp",
          "signature": "Maybe Int",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpKeepAlive",
          "package": "network-minihttp",
          "partial": "Keep Alive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpKeepAlive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpLastModified",
          "package": "network-minihttp",
          "signature": "Maybe UTCTime",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpLastModified",
          "package": "network-minihttp",
          "partial": "Last Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpLastModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpLocation",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpLocation",
          "package": "network-minihttp",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpOtherHeaders",
          "package": "network-minihttp",
          "signature": "Map ByteString ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpOtherHeaders",
          "package": "network-minihttp",
          "partial": "Other Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpOtherHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpPragma",
          "package": "network-minihttp",
          "signature": "Maybe [(String, Maybe String)]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpPragma",
          "normalized": "Maybe[(String,Maybe String)]",
          "package": "network-minihttp",
          "partial": "Pragma",
          "signature": "Maybe[(String,Maybe String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpPragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpProxyAuthenticate",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpProxyAuthenticate",
          "package": "network-minihttp",
          "partial": "Proxy Authenticate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpProxyAuthenticate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpProxyAuthorization",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpProxyAuthorization",
          "package": "network-minihttp",
          "partial": "Proxy Authorization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpProxyAuthorization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpRange",
          "package": "network-minihttp",
          "signature": "Maybe [Range]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpRange",
          "normalized": "Maybe[Range]",
          "package": "network-minihttp",
          "partial": "Range",
          "signature": "Maybe[Range]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpReferer",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpReferer",
          "package": "network-minihttp",
          "partial": "Referer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpReferer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpRetryAfter",
          "package": "network-minihttp",
          "signature": "Maybe Int64",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpRetryAfter",
          "package": "network-minihttp",
          "partial": "Retry After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpRetryAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpServer",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpServer",
          "package": "network-minihttp",
          "partial": "Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpSetCookie",
          "package": "network-minihttp",
          "signature": "[Cookie]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpSetCookie",
          "normalized": "[Cookie]",
          "package": "network-minihttp",
          "partial": "Set Cookie",
          "signature": "[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpSetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpTrailer",
          "package": "network-minihttp",
          "signature": "Maybe [String]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpTrailer",
          "normalized": "Maybe[String]",
          "package": "network-minihttp",
          "partial": "Trailer",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpTrailer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpTransferEncoding",
          "package": "network-minihttp",
          "signature": "[String]",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpTransferEncoding",
          "normalized": "[String]",
          "package": "network-minihttp",
          "partial": "Transfer Encoding",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpTransferEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpUserAgent",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpUserAgent",
          "package": "network-minihttp",
          "partial": "User Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpUserAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpWWWAuthenticate",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-Marshal.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "httpWWWAuthenticate",
          "package": "network-minihttp",
          "partial": "WWWAuthenticate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:httpWWWAuthenticate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "parseChunkHeader",
          "package": "network-minihttp",
          "signature": "m Int64",
          "source": "src/Network-MiniHTTP-Marshal.html#parseChunkHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "parseChunkHeader",
          "package": "network-minihttp",
          "partial": "Chunk Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:parseChunkHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "parseReply",
          "package": "network-minihttp",
          "signature": "m Reply",
          "source": "src/Network-MiniHTTP-Marshal.html#parseReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "parseReply",
          "package": "network-minihttp",
          "partial": "Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:parseReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "parseRequest",
          "package": "network-minihttp",
          "signature": "m Request",
          "source": "src/Network-MiniHTTP-Marshal.html#parseRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "parseRequest",
          "package": "network-minihttp",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:parseRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "putReply",
          "package": "network-minihttp",
          "signature": "Reply -\u003e Put",
          "source": "src/Network-MiniHTTP-Marshal.html#putReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "putReply",
          "normalized": "Reply-\u003ePut",
          "package": "network-minihttp",
          "partial": "Reply",
          "signature": "Reply-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:putReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "putRequest",
          "package": "network-minihttp",
          "signature": "Request -\u003e Put",
          "source": "src/Network-MiniHTTP-Marshal.html#putRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "putRequest",
          "normalized": "Request-\u003ePut",
          "package": "network-minihttp",
          "partial": "Request",
          "signature": "Request-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:putRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "replyHeaders",
          "package": "network-minihttp",
          "signature": "Headers",
          "source": "src/Network-MiniHTTP-Marshal.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "replyHeaders",
          "package": "network-minihttp",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:replyHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "replyMajor",
          "package": "network-minihttp",
          "signature": "Int",
          "source": "src/Network-MiniHTTP-Marshal.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "replyMajor",
          "package": "network-minihttp",
          "partial": "Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:replyMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "replyMessage",
          "package": "network-minihttp",
          "signature": "String",
          "source": "src/Network-MiniHTTP-Marshal.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "replyMessage",
          "package": "network-minihttp",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:replyMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "replyMinor",
          "package": "network-minihttp",
          "signature": "Int",
          "source": "src/Network-MiniHTTP-Marshal.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "replyMinor",
          "package": "network-minihttp",
          "partial": "Minor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:replyMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "replyStatus",
          "package": "network-minihttp",
          "signature": "Int",
          "source": "src/Network-MiniHTTP-Marshal.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "replyStatus",
          "package": "network-minihttp",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:replyStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "reqHeaders",
          "package": "network-minihttp",
          "signature": "Headers",
          "source": "src/Network-MiniHTTP-Marshal.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "reqHeaders",
          "package": "network-minihttp",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:reqHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "reqMajor",
          "package": "network-minihttp",
          "signature": "Int",
          "source": "src/Network-MiniHTTP-Marshal.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "reqMajor",
          "package": "network-minihttp",
          "partial": "Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:reqMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "reqMethod",
          "package": "network-minihttp",
          "signature": "Method",
          "source": "src/Network-MiniHTTP-Marshal.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "reqMethod",
          "package": "network-minihttp",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:reqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "reqMinor",
          "package": "network-minihttp",
          "signature": "Int",
          "source": "src/Network-MiniHTTP-Marshal.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "reqMinor",
          "package": "network-minihttp",
          "partial": "Minor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:reqMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Marshal",
          "name": "reqUrl",
          "package": "network-minihttp",
          "signature": "RelativeURL",
          "source": "src/Network-MiniHTTP-Marshal.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "reqUrl",
          "package": "network-minihttp",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:reqUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a status code to a message (e.g. 200 -\u003e \u003ca\u003eOK\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Marshal",
          "name": "statusToMessage",
          "package": "network-minihttp",
          "signature": "Int -\u003e String",
          "source": "src/Network-MiniHTTP-Marshal.html#statusToMessage",
          "type": "function"
        },
        "index": {
          "description": "Convert status code to message e.g OK",
          "hierarchy": "Network MiniHTTP Marshal",
          "module": "Network.MiniHTTP.Marshal",
          "name": "statusToMessage",
          "normalized": "Int-\u003eString",
          "package": "network-minihttp",
          "partial": "To Message",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Marshal.html#v:statusToMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains support for the OpenID authentication standard. See\n   \u003ca\u003ehttp://www.openid.net\u003c/a\u003e for details of the protocol. At the moment, only the\n   basic v2 authentication is supported. Also, we only support OpenID 2.0\n   HTML discovery, not Yadis nor XRI.\n\u003c/p\u003e\u003cp\u003eOnly DH-SHA1 is used for the cryptography. This used to be SHA256, but\n   Yahoo doesn't support it (boo!)\n\u003c/p\u003e\u003cp\u003eReferences in this module are to the OpenID v2 spec\n      \u003ca\u003ehttp://openid.net/specs/openid-authentication-2_0.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MiniHTTP.OpenID",
          "name": "OpenID",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-OpenID.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains support for the OpenID authentication standard See http www.openid.net for details of the protocol At the moment only the basic v2 authentication is supported Also we only support OpenID HTML discovery not Yadis nor XRI Only DH-SHA1 is used for the cryptography This used to be SHA256 but Yahoo doesn support it boo References in this module are to the OpenID v2 spec http openid.net specs openid-authentication-2 html",
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "OpenID",
          "package": "network-minihttp",
          "partial": "Open ID",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are two types of checkid calls.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.OpenID",
          "name": "CheckIDType",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-OpenID.html#CheckIDType",
          "type": "data"
        },
        "index": {
          "description": "There are two types of checkid calls",
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "CheckIDType",
          "package": "network-minihttp",
          "partial": "Check IDType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#t:CheckIDType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of an OpenID handle. Handles are used to identify sessions\n   between the consumer and OP.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.OpenID",
          "name": "Handle",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-OpenID.html#Handle",
          "type": "data"
        },
        "index": {
          "description": "The type of an OpenID handle Handles are used to identify sessions between the consumer and OP",
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "Handle",
          "package": "network-minihttp",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a key.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.OpenID",
          "name": "Key",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-OpenID.html#Key",
          "type": "data"
        },
        "index": {
          "description": "The type of key",
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "Key",
          "package": "network-minihttp",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the result of Discovery: the OP local identity and the server HTTP\n   endpoint.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.OpenID",
          "name": "OpenIDDiscovery",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-OpenID.html#OpenIDDiscovery",
          "type": "data"
        },
        "index": {
          "description": "This is the result of Discovery the OP local identity and the server HTTP endpoint",
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "OpenIDDiscovery",
          "package": "network-minihttp",
          "partial": "Open IDDiscovery",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#t:OpenIDDiscovery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.OpenID",
          "name": "CheckIDImmediate",
          "package": "network-minihttp",
          "signature": "CheckIDImmediate",
          "source": "src/Network-MiniHTTP-OpenID.html#CheckIDType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "CheckIDImmediate",
          "package": "network-minihttp",
          "partial": "Check IDImmediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:CheckIDImmediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.OpenID",
          "name": "CheckIDSetup",
          "package": "network-minihttp",
          "signature": "CheckIDSetup",
          "source": "src/Network-MiniHTTP-OpenID.html#CheckIDType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "CheckIDSetup",
          "package": "network-minihttp",
          "partial": "Check IDSetup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:CheckIDSetup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.OpenID",
          "name": "OpenIDDiscovery",
          "package": "network-minihttp",
          "signature": "OpenIDDiscovery",
          "source": "src/Network-MiniHTTP-OpenID.html#OpenIDDiscovery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "OpenIDDiscovery",
          "package": "network-minihttp",
          "partial": "Open IDDiscovery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:OpenIDDiscovery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an association with a discovered OP and return either an error\n   message or a handle, a key and the number of seconds from now when the\n   handle will expire.\n\u003c/p\u003e\u003cp\u003eInternally this uses a cache so \u003ccode\u003e\u003ca\u003eassociate\u003c/a\u003e\u003c/code\u003e may not actually involve an\n   HTTP request to the OP.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.OpenID",
          "name": "associate",
          "package": "network-minihttp",
          "signature": "OpenIDDiscovery -\u003e IO (Handle, Key)",
          "source": "src/Network-MiniHTTP-OpenID.html#associate",
          "type": "function"
        },
        "index": {
          "description": "Perform an association with discovered OP and return either an error message or handle key and the number of seconds from now when the handle will expire Internally this uses cache so associate may not actually involve an HTTP request to the OP",
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "associate",
          "normalized": "OpenIDDiscovery-\u003eIO(Handle,Key)",
          "package": "network-minihttp",
          "signature": "OpenIDDiscovery-\u003eIO(Handle,Key)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:associate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a checkid call\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.OpenID",
          "name": "checkID",
          "package": "network-minihttp",
          "signature": "CheckIDType-\u003e URL-\u003e OpenIDDiscovery-\u003e Handle-\u003e ByteString-\u003e Maybe ByteString-\u003e URL",
          "type": "function"
        },
        "index": {
          "description": "Construct checkid call",
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "checkID",
          "normalized": "CheckIDType-\u003eURL-\u003eOpenIDDiscovery-\u003eHandle-\u003eByteString-\u003eMaybe ByteString-\u003eURL",
          "package": "network-minihttp",
          "partial": "ID",
          "signature": "CheckIDType-\u003eURL-\u003eOpenIDDiscovery-\u003eHandle-\u003eByteString-\u003eMaybe ByteString-\u003eURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:checkID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse HTML discovery to find the OpenID information for a given URL\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.OpenID",
          "name": "discover",
          "package": "network-minihttp",
          "signature": "URL -\u003e IO OpenIDDiscovery",
          "source": "src/Network-MiniHTTP-OpenID.html#discover",
          "type": "function"
        },
        "index": {
          "description": "Use HTML discovery to find the OpenID information for given URL",
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "discover",
          "normalized": "URL-\u003eIO OpenIDDiscovery",
          "package": "network-minihttp",
          "signature": "URL-\u003eIO OpenIDDiscovery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:discover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.OpenID",
          "name": "discoveryLocalID",
          "package": "network-minihttp",
          "signature": "Maybe String",
          "source": "src/Network-MiniHTTP-OpenID.html#OpenIDDiscovery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "discoveryLocalID",
          "package": "network-minihttp",
          "partial": "Local ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:discoveryLocalID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.OpenID",
          "name": "discoveryProvider",
          "package": "network-minihttp",
          "signature": "URL",
          "source": "src/Network-MiniHTTP-OpenID.html#OpenIDDiscovery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "discoveryProvider",
          "package": "network-minihttp",
          "partial": "Provider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:discoveryProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a key given the hostname of the OP and the handle. Generally used\n   after an indirect request to check a signature from an OP.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.OpenID",
          "name": "findKey",
          "package": "network-minihttp",
          "signature": "ByteString -\u003e Handle -\u003e STM (Maybe Key)",
          "source": "src/Network-MiniHTTP-OpenID.html#findKey",
          "type": "function"
        },
        "index": {
          "description": "Lookup key given the hostname of the OP and the handle Generally used after an indirect request to check signature from an OP",
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "findKey",
          "normalized": "ByteString-\u003eHandle-\u003eSTM(Maybe Key)",
          "package": "network-minihttp",
          "partial": "Key",
          "signature": "ByteString-\u003eHandle-\u003eSTM(Maybe Key)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:findKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.OpenID",
          "name": "processCheckIDReply",
          "package": "network-minihttp",
          "signature": "Map ByteString ByteString-\u003e IO (Either String ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP OpenID",
          "module": "Network.MiniHTTP.OpenID",
          "name": "processCheckIDReply",
          "normalized": "Map ByteString ByteString-\u003eIO(Either String ByteString)",
          "package": "network-minihttp",
          "partial": "Check IDReply",
          "signature": "Map ByteString ByteString-\u003eIO(Either String ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-OpenID.html#v:processCheckIDReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for writing webservers. These servers\n   process requests in a state monad pipeline and several useful actions are\n   provided herein.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003eexamples/test.hs\u003c/code\u003e for an example of how to use this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "Server",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Server.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for writing webservers These servers process requests in state monad pipeline and several useful actions are provided herein See examples test.hs for an example of how to use this module",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "Server",
          "package": "network-minihttp",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Server",
          "name": "DispatchMatch",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Server.html#DispatchMatch",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "DispatchMatch",
          "package": "network-minihttp",
          "partial": "Dispatch Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#t:DispatchMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe processing monad\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "WebMonad",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Server.html#WebMonad",
          "type": "type"
        },
        "index": {
          "description": "The processing monad",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "WebMonad",
          "package": "network-minihttp",
          "partial": "Web Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#t:WebMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcessing a request involves running a number of actions in a StateT monad\n   where the state for that monad is this record. This contains both a\n   \u003ccode\u003eSource\u003c/code\u003e and a \u003ca\u003eHandle\u003c/a\u003e element. Often something will fill in the \u003ca\u003eHandle\u003c/a\u003e\n   and expect later processing to convert it to a \u003ca\u003eSource\u003c/a\u003e. Somehow, you have\n   to end up with a \u003ca\u003eSource\u003c/a\u003e, however.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "WebState",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Server.html#WebState",
          "type": "data"
        },
        "index": {
          "description": "Processing request involves running number of actions in StateT monad where the state for that monad is this record This contains both Source and Handle element Often something will fill in the Handle and expect later processing to convert it to Source Somehow you have to end up with Source however",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "WebState",
          "package": "network-minihttp",
          "partial": "Web State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#t:WebState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Server",
          "name": "Exact",
          "package": "network-minihttp",
          "signature": "Exact ByteString",
          "source": "src/Network-MiniHTTP-Server.html#DispatchMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "Exact",
          "package": "network-minihttp",
          "partial": "Exact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:Exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Server",
          "name": "Prefix",
          "package": "network-minihttp",
          "signature": "Prefix ByteString",
          "source": "src/Network-MiniHTTP-Server.html#DispatchMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "Prefix",
          "package": "network-minihttp",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Server",
          "name": "WebState",
          "package": "network-minihttp",
          "signature": "WebState",
          "source": "src/Network-MiniHTTP-Server.html#WebState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "WebState",
          "package": "network-minihttp",
          "partial": "Web State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:WebState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an, optional, helper function which you might find useful. The\n   serving fuctions both expect a \u003ca\u003eWebMonad\u003c/a\u003e action which is called to\n   process each request. In general you have to write that and dispatch based\n   on the client's request.\n\u003c/p\u003e\u003cp\u003eThis might save you some work: it tries each of the elements in the list\n   in turn. As soon as one matches it runs the given action to process the\n   request.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "dispatchOnURL",
          "package": "network-minihttp",
          "signature": "[(DispatchMatch, WebMonad ())]-\u003e WebMonad ()",
          "type": "function"
        },
        "index": {
          "description": "This is an optional helper function which you might find useful The serving fuctions both expect WebMonad action which is called to process each request In general you have to write that and dispatch based on the client request This might save you some work it tries each of the elements in the list in turn As soon as one matches it runs the given action to process the request",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "dispatchOnURL",
          "normalized": "[(DispatchMatch,WebMonad())]-\u003eWebMonad()",
          "package": "network-minihttp",
          "partial": "On URL",
          "signature": "[(DispatchMatch,WebMonad())]-\u003eWebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:dispatchOnURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Server",
          "name": "errorPage",
          "package": "network-minihttp",
          "signature": "String -\u003e WebMonad ()",
          "source": "src/Network-MiniHTTP-Server.html#errorPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "errorPage",
          "normalized": "String-\u003eWebMonad()",
          "package": "network-minihttp",
          "partial": "Page",
          "signature": "String-\u003eWebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:errorPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the arguments to a GET request\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "getGET",
          "package": "network-minihttp",
          "signature": "WebMonad (Map ByteString ByteString)",
          "source": "src/Network-MiniHTTP-Server.html#getGET",
          "type": "function"
        },
        "index": {
          "description": "Get the arguments to GET request",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "getGET",
          "package": "network-minihttp",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:getGET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the arguments to a POST request\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "getPOST",
          "package": "network-minihttp",
          "signature": "Int-\u003e WebMonad (Map ByteString ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Get the arguments to POST request",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "getPOST",
          "normalized": "Int-\u003eWebMonad(Map ByteString ByteString)",
          "package": "network-minihttp",
          "partial": "POST",
          "signature": "Int-\u003eWebMonad(Map ByteString ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:getPOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the client's request payload (if any)\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "getPayload",
          "package": "network-minihttp",
          "signature": "WebMonad (Maybe Source)",
          "source": "src/Network-MiniHTTP-Server.html#getPayload",
          "type": "function"
        },
        "index": {
          "description": "Return the client request payload if any",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "getPayload",
          "package": "network-minihttp",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:getPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current reply\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "getReply",
          "package": "network-minihttp",
          "signature": "WebMonad Reply",
          "source": "src/Network-MiniHTTP-Server.html#getReply",
          "type": "function"
        },
        "index": {
          "description": "Return the current reply",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "getReply",
          "package": "network-minihttp",
          "partial": "Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:getReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the request\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "getRequest",
          "package": "network-minihttp",
          "signature": "WebMonad Request",
          "source": "src/Network-MiniHTTP-Server.html#getRequest",
          "type": "function"
        },
        "index": {
          "description": "Return the request",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "getRequest",
          "package": "network-minihttp",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:getRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis handles the If-*Matches and If-*Modified conditional headers. It takes\n   its information from the Last-Modified and ETag headers of the current\n   reply. Note that, for the purposes of ETag matching, a reply without\n   an ETag header is considered not to exist from the point of view of,\n   say, If-Matches: *.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "handleConditionalRequest",
          "package": "network-minihttp",
          "signature": "WebMonad ()",
          "source": "src/Network-MiniHTTP-Server.html#handleConditionalRequest",
          "type": "function"
        },
        "index": {
          "description": "This handles the If Matches and If Modified conditional headers It takes its information from the Last-Modified and ETag headers of the current reply Note that for the purposes of ETag matching reply without an ETag header is considered not to exist from the point of view of say If-Matches",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "handleConditionalRequest",
          "normalized": "WebMonad()",
          "package": "network-minihttp",
          "partial": "Conditional Request",
          "signature": "WebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:handleConditionalRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt the moment, this just adds the header Server: Network.MiniHTTP\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "handleDecoration",
          "package": "network-minihttp",
          "signature": "WebMonad ()",
          "source": "src/Network-MiniHTTP-Server.html#handleDecoration",
          "type": "function"
        },
        "index": {
          "description": "At the moment this just adds the header Server Network.MiniHTTP",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "handleDecoration",
          "normalized": "WebMonad()",
          "package": "network-minihttp",
          "partial": "Decoration",
          "signature": "WebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:handleDecoration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a very simple handler which deals with requests by returning the\n   requested file from the filesystem. It sets a Handle in the state and sets\n   the Content-Type, Content-Length and Last-Modified headers\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "handleFromFilesystem",
          "package": "network-minihttp",
          "signature": "FilePath-\u003e WebMonad ()",
          "type": "function"
        },
        "index": {
          "description": "This is very simple handler which deals with requests by returning the requested file from the filesystem It sets Handle in the state and sets the Content-Type Content-Length and Last-Modified headers",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "handleFromFilesystem",
          "normalized": "FilePath-\u003eWebMonad()",
          "package": "network-minihttp",
          "partial": "From Filesystem",
          "signature": "FilePath-\u003eWebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:handleFromFilesystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current state includes a Handle, this turns it into a Source\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "handleHandleToSource",
          "package": "network-minihttp",
          "signature": "WebMonad ()",
          "source": "src/Network-MiniHTTP-Server.html#handleHandleToSource",
          "type": "function"
        },
        "index": {
          "description": "If the current state includes Handle this turns it into Source",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "handleHandleToSource",
          "normalized": "WebMonad()",
          "package": "network-minihttp",
          "partial": "Handle To Source",
          "signature": "WebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:handleHandleToSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis handles Range requests and also translates from Handles to Sources.\n   If the WebMonad has a Handle at this point, then we can construct sources\n   from any subrange of the file. (We also assume that Content-Length is\n   correctly set.)\n\u003c/p\u003e\u003cp\u003eSee RFC 2616, section 14.35\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "handleRangeRequests",
          "package": "network-minihttp",
          "signature": "WebMonad ()",
          "source": "src/Network-MiniHTTP-Server.html#handleRangeRequests",
          "type": "function"
        },
        "index": {
          "description": "This handles Range requests and also translates from Handles to Sources If the WebMonad has Handle at this point then we can construct sources from any subrange of the file We also assume that Content-Length is correctly set See RFC section",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "handleRangeRequests",
          "normalized": "WebMonad()",
          "package": "network-minihttp",
          "partial": "Range Requests",
          "signature": "WebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:handleRangeRequests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart an IPv4 HTTP server\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "serveHTTP",
          "package": "network-minihttp",
          "signature": "Int-\u003e WebMonad ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Start an IPv4 HTTP server",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "serveHTTP",
          "normalized": "Int-\u003eWebMonad()-\u003eIO()",
          "package": "network-minihttp",
          "partial": "HTTP",
          "signature": "Int-\u003eWebMonad()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:serveHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart an IPv4 HTTPS server. Plese remember to have wrapped your main\n   function in \u003ccode\u003eOpenSSL.withOpenSSL\u003c/code\u003e otherwise you'll probably crash the\n   process.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "serveHTTPS",
          "package": "network-minihttp",
          "signature": "Int-\u003e FilePath-\u003e FilePath-\u003e WebMonad ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Start an IPv4 HTTPS server Plese remember to have wrapped your main function in OpenSSL.withOpenSSL otherwise you ll probably crash the process",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "serveHTTPS",
          "normalized": "Int-\u003eFilePath-\u003eFilePath-\u003eWebMonad()-\u003eIO()",
          "package": "network-minihttp",
          "partial": "HTTPS",
          "signature": "Int-\u003eFilePath-\u003eFilePath-\u003eWebMonad()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:serveHTTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.Server",
          "name": "setCookie",
          "package": "network-minihttp",
          "signature": "Cookie -\u003e WebMonad ()",
          "source": "src/Network-MiniHTTP-Server.html#setCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "setCookie",
          "normalized": "Cookie-\u003eWebMonad()",
          "package": "network-minihttp",
          "partial": "Cookie",
          "signature": "Cookie-\u003eWebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:setCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a header in the current reply. Because of the way records work, you use\n   this function like this:\n\u003c/p\u003e\u003cpre\u003e setHeader $ \\h -\u003e h { httpSomeHeader = Just value }\n\u003c/pre\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "setHeader",
          "package": "network-minihttp",
          "signature": "(Headers -\u003e Headers) -\u003e WebMonad ()",
          "source": "src/Network-MiniHTTP-Server.html#setHeader",
          "type": "function"
        },
        "index": {
          "description": "Set header in the current reply Because of the way records work you use this function like this setHeader httpSomeHeader Just value",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "setHeader",
          "normalized": "(Headers-\u003eHeaders)-\u003eWebMonad()",
          "package": "network-minihttp",
          "partial": "Header",
          "signature": "(Headers-\u003eHeaders)-\u003eWebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current reply to be a reply with the given status code, the\n   default message for that status code, an empty body and an empty set of\n   headers.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "setReply",
          "package": "network-minihttp",
          "signature": "Int -\u003e WebMonad ()",
          "source": "src/Network-MiniHTTP-Server.html#setReply",
          "type": "function"
        },
        "index": {
          "description": "Set the current reply to be reply with the given status code the default message for that status code an empty body and an empty set of headers",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "setReply",
          "normalized": "Int-\u003eWebMonad()",
          "package": "network-minihttp",
          "partial": "Reply",
          "signature": "Int-\u003eWebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:setReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean action to be performed before sending the reply\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "wsAction",
          "package": "network-minihttp",
          "signature": "Maybe (IO ())",
          "source": "src/Network-MiniHTTP-Server.html#WebState",
          "type": "function"
        },
        "index": {
          "description": "an action to be performed before sending the reply",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "wsAction",
          "normalized": "Maybe(IO())",
          "package": "network-minihttp",
          "partial": "Action",
          "signature": "Maybe(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe client's payload\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "wsBody",
          "package": "network-minihttp",
          "signature": "Maybe Source",
          "source": "src/Network-MiniHTTP-Server.html#WebState",
          "type": "function"
        },
        "index": {
          "description": "the client payload",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "wsBody",
          "package": "network-minihttp",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current handle\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "wsHandle",
          "package": "network-minihttp",
          "signature": "Maybe Handle",
          "source": "src/Network-MiniHTTP-Server.html#WebState",
          "type": "function"
        },
        "index": {
          "description": "the current handle",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "wsHandle",
          "package": "network-minihttp",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe system mime types db, mapping file extensions\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "wsMimeTypes",
          "package": "network-minihttp",
          "signature": "Map ByteString MediaType",
          "source": "src/Network-MiniHTTP-Server.html#WebState",
          "type": "function"
        },
        "index": {
          "description": "the system mime types db mapping file extensions",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "wsMimeTypes",
          "package": "network-minihttp",
          "partial": "Mime Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsMimeTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current reply\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "wsReply",
          "package": "network-minihttp",
          "signature": "Reply",
          "source": "src/Network-MiniHTTP-Server.html#WebState",
          "type": "function"
        },
        "index": {
          "description": "the current reply",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "wsReply",
          "package": "network-minihttp",
          "partial": "Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe original request\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "wsRequest",
          "package": "network-minihttp",
          "signature": "Request",
          "source": "src/Network-MiniHTTP-Server.html#WebState",
          "type": "function"
        },
        "index": {
          "description": "the original request",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "wsRequest",
          "package": "network-minihttp",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current source\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Server",
          "name": "wsSource",
          "package": "network-minihttp",
          "signature": "Maybe Source",
          "source": "src/Network-MiniHTTP-Server.html#WebState",
          "type": "function"
        },
        "index": {
          "description": "the current source",
          "hierarchy": "Network MiniHTTP Server",
          "module": "Network.MiniHTTP.Server",
          "name": "wsSource",
          "package": "network-minihttp",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Server.html#v:wsSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic session support. Sessions are (currently) just maps of strings to\n   strings which are serialised and sent to the client using a Cookie.\n   Serialised, they should be less than 4K, so the sum of all your strings in\n   the map should be \u003c 3900 bytes to be safe.\n\u003c/p\u003e\u003cp\u003eThe cookies are HMACed and encrypted so that the client can't inspect nor\n   alter them. The key is, by default, generated randomly every time the\n   server starts. If you want the cookies to be reusable across restarts or\n   servers you need to set the key yourself.\n\u003c/p\u003e\u003cp\u003eAlso, by the default, the cookies are set to expire when the browser\n   session ends.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MiniHTTP.Session",
          "name": "Session",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-Session.html",
          "type": "module"
        },
        "index": {
          "description": "Basic session support Sessions are currently just maps of strings to strings which are serialised and sent to the client using Cookie Serialised they should be less than so the sum of all your strings in the map should be bytes to be safe The cookies are HMACed and encrypted so that the client can inspect nor alter them The key is by default generated randomly every time the server starts If you want the cookies to be reusable across restarts or servers you need to set the key yourself Also by the default the cookies are set to expire when the browser session ends",
          "hierarchy": "Network MiniHTTP Session",
          "module": "Network.MiniHTTP.Session",
          "name": "Session",
          "package": "network-minihttp",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a key value pair to the session\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Session",
          "name": "addSession",
          "package": "network-minihttp",
          "signature": "ByteString -\u003e ByteString -\u003e WebMonad ()",
          "source": "src/Network-MiniHTTP-Session.html#addSession",
          "type": "function"
        },
        "index": {
          "description": "Add key value pair to the session",
          "hierarchy": "Network MiniHTTP Session",
          "module": "Network.MiniHTTP.Session",
          "name": "addSession",
          "normalized": "ByteString-\u003eByteString-\u003eWebMonad()",
          "package": "network-minihttp",
          "partial": "Session",
          "signature": "ByteString-\u003eByteString-\u003eWebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Session.html#v:addSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current session. If the user didn't present a cookie, or the\n   cookie is invalid, an empty map is returned.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Session",
          "name": "getSession",
          "package": "network-minihttp",
          "signature": "WebMonad (Map ByteString ByteString)",
          "source": "src/Network-MiniHTTP-Session.html#getSession",
          "type": "function"
        },
        "index": {
          "description": "Return the current session If the user didn present cookie or the cookie is invalid an empty map is returned",
          "hierarchy": "Network MiniHTTP Session",
          "module": "Network.MiniHTTP.Session",
          "name": "getSession",
          "package": "network-minihttp",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Session.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current session. This alters the headers of the current request,\n   so future actions which reset the headers (like \u003ccode\u003e\u003ca\u003esetReply\u003c/a\u003e\u003c/code\u003e) will undo\n   this.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Session",
          "name": "putSession",
          "package": "network-minihttp",
          "signature": "Map ByteString ByteString -\u003e WebMonad ()",
          "source": "src/Network-MiniHTTP-Session.html#putSession",
          "type": "function"
        },
        "index": {
          "description": "Set the current session This alters the headers of the current request so future actions which reset the headers like setReply will undo this",
          "hierarchy": "Network MiniHTTP Session",
          "module": "Network.MiniHTTP.Session",
          "name": "putSession",
          "normalized": "Map ByteString ByteString-\u003eWebMonad()",
          "package": "network-minihttp",
          "partial": "Session",
          "signature": "Map ByteString ByteString-\u003eWebMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Session.html#v:putSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the secret key used to HMAC and encrypt the session cookies.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.Session",
          "name": "setSessionSecretKey",
          "package": "network-minihttp",
          "signature": "ByteString -\u003e STM ()",
          "source": "src/Network-MiniHTTP-Session.html#setSessionSecretKey",
          "type": "function"
        },
        "index": {
          "description": "Set the secret key used to HMAC and encrypt the session cookies",
          "hierarchy": "Network MiniHTTP Session",
          "module": "Network.MiniHTTP.Session",
          "name": "setSessionSecretKey",
          "normalized": "ByteString-\u003eSTM()",
          "package": "network-minihttp",
          "partial": "Session Secret Key",
          "signature": "ByteString-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-Session.html#v:setSessionSecretKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a structure for representing web URLs. We don't try\n   to be a fully general URI parser (so no \u003ccode\u003emailto:\u003c/code\u003e etc), but it's a lot\n   better than \u003ca\u003eNetwork.URI\u003c/a\u003e for dealing with HTTP(S)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "URL",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-URL.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains structure for representing web URLs We don try to be fully general URI parser so no mailto etc but it lot better than Network.URI for dealing with HTTP",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "URL",
          "package": "network-minihttp",
          "partial": "URL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe host where the resource can be found\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "Host",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-URL.html#Host",
          "type": "data"
        },
        "index": {
          "description": "The host where the resource can be found",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "Host",
          "package": "network-minihttp",
          "partial": "Host",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a relative URL. It just copies (and renames) the last three\n   members of URL. However, it's good to keep these two different types of\n   URL apart in the type system.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "RelativeURL",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-URL.html#RelativeURL",
          "type": "data"
        },
        "index": {
          "description": "This is relative URL It just copies and renames the last three members of URL However it good to keep these two different types of URL apart in the type system",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "RelativeURL",
          "package": "network-minihttp",
          "partial": "Relative URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#t:RelativeURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe transport layer to be used\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "Scheme",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-URL.html#Scheme",
          "type": "data"
        },
        "index": {
          "description": "The transport layer to be used",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "Scheme",
          "package": "network-minihttp",
          "partial": "Scheme",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#t:Scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA web URL\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "URL",
          "package": "network-minihttp",
          "source": "src/Network-MiniHTTP-URL.html#URL",
          "type": "data"
        },
        "index": {
          "description": "web URL",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "URL",
          "package": "network-minihttp",
          "partial": "URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#t:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "HTTP",
          "package": "network-minihttp",
          "signature": "HTTP",
          "source": "src/Network-MiniHTTP-URL.html#Scheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "HTTP",
          "package": "network-minihttp",
          "partial": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:HTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "HTTPS",
          "package": "network-minihttp",
          "signature": "HTTPS",
          "source": "src/Network-MiniHTTP-URL.html#Scheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "HTTPS",
          "package": "network-minihttp",
          "partial": "HTTPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:HTTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "Hostname",
          "package": "network-minihttp",
          "signature": "Hostname ByteString",
          "source": "src/Network-MiniHTTP-URL.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "Hostname",
          "package": "network-minihttp",
          "partial": "Hostname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:Hostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "IPv4Literal",
          "package": "network-minihttp",
          "signature": "IPv4Literal HostAddress",
          "source": "src/Network-MiniHTTP-URL.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "IPv4Literal",
          "package": "network-minihttp",
          "partial": "IPv Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:IPv4Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "IPv6Literal",
          "package": "network-minihttp",
          "signature": "IPv6Literal HostAddress6",
          "source": "src/Network-MiniHTTP-URL.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "IPv6Literal",
          "package": "network-minihttp",
          "partial": "IPv Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:IPv6Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "RelativeURL",
          "package": "network-minihttp",
          "signature": "RelativeURL",
          "source": "src/Network-MiniHTTP-URL.html#RelativeURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "RelativeURL",
          "package": "network-minihttp",
          "partial": "Relative URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:RelativeURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "URL",
          "package": "network-minihttp",
          "signature": "URL",
          "source": "src/Network-MiniHTTP-URL.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "URL",
          "package": "network-minihttp",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a URL\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "parse",
          "package": "network-minihttp",
          "signature": "ByteString -\u003e Maybe URL",
          "source": "src/Network-MiniHTTP-URL.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parse URL",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "parse",
          "normalized": "ByteString-\u003eMaybe URL",
          "package": "network-minihttp",
          "signature": "ByteString-\u003eMaybe URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse just an arguments map. Can be useful for POST requests. Warning: it\n   occurs to be that the arguments in a POST request might include unescaped\n   '#' symbols. In a URL that would be illegal, but the parser may need to be\n   reworked for that.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "parseArguments",
          "package": "network-minihttp",
          "signature": "ByteString -\u003e Maybe (Map ByteString ByteString)",
          "source": "src/Network-MiniHTTP-URL.html#parseArguments",
          "type": "function"
        },
        "index": {
          "description": "Parse just an arguments map Can be useful for POST requests Warning it occurs to be that the arguments in POST request might include unescaped symbols In URL that would be illegal but the parser may need to be reworked for that",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "parseArguments",
          "normalized": "ByteString-\u003eMaybe(Map ByteString ByteString)",
          "package": "network-minihttp",
          "partial": "Arguments",
          "signature": "ByteString-\u003eMaybe(Map ByteString ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:parseArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a relative URL\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "parseRelative",
          "package": "network-minihttp",
          "signature": "ByteString -\u003e Maybe RelativeURL",
          "source": "src/Network-MiniHTTP-URL.html#parseRelative",
          "type": "function"
        },
        "index": {
          "description": "Parse relative URL",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "parseRelative",
          "normalized": "ByteString-\u003eMaybe RelativeURL",
          "package": "network-minihttp",
          "partial": "Relative",
          "signature": "ByteString-\u003eMaybe RelativeURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:parseRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "rurlArguments",
          "package": "network-minihttp",
          "signature": "Map ByteString ByteString",
          "source": "src/Network-MiniHTTP-URL.html#RelativeURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "rurlArguments",
          "package": "network-minihttp",
          "partial": "Arguments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:rurlArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "rurlFragment",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-URL.html#RelativeURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "rurlFragment",
          "package": "network-minihttp",
          "partial": "Fragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:rurlFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoes not include leading \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "rurlPath",
          "package": "network-minihttp",
          "signature": "ByteString",
          "source": "src/Network-MiniHTTP-URL.html#RelativeURL",
          "type": "function"
        },
        "index": {
          "description": "does not include leading",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "rurlPath",
          "package": "network-minihttp",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:rurlPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a URL to a ByteString. It's the same as \u003ca\u003eshow\u003c/a\u003e, except for the\n   type of the return.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "serialise",
          "package": "network-minihttp",
          "signature": "URL -\u003e ByteString",
          "source": "src/Network-MiniHTTP-URL.html#serialise",
          "type": "function"
        },
        "index": {
          "description": "Convert URL to ByteString It the same as show except for the type of the return",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "serialise",
          "normalized": "URL-\u003eByteString",
          "package": "network-minihttp",
          "signature": "URL-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:serialise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialise just an arguments map. Can be useful for POST requests.\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "serialiseArguments",
          "package": "network-minihttp",
          "signature": "Map ByteString ByteString -\u003e ByteString",
          "source": "src/Network-MiniHTTP-URL.html#serialiseArguments",
          "type": "function"
        },
        "index": {
          "description": "Serialise just an arguments map Can be useful for POST requests",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "serialiseArguments",
          "normalized": "Map ByteString ByteString-\u003eByteString",
          "package": "network-minihttp",
          "partial": "Arguments",
          "signature": "Map ByteString ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:serialiseArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "serialiseRelative",
          "package": "network-minihttp",
          "signature": "RelativeURL -\u003e ByteString",
          "source": "src/Network-MiniHTTP-URL.html#serialiseRelative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "serialiseRelative",
          "normalized": "RelativeURL-\u003eByteString",
          "package": "network-minihttp",
          "partial": "Relative",
          "signature": "RelativeURL-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:serialiseRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a relative URL from a URL\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "toRelative",
          "package": "network-minihttp",
          "signature": "URL -\u003e RelativeURL",
          "source": "src/Network-MiniHTTP-URL.html#toRelative",
          "type": "function"
        },
        "index": {
          "description": "Extract relative URL from URL",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "toRelative",
          "normalized": "URL-\u003eRelativeURL",
          "package": "network-minihttp",
          "partial": "Relative",
          "signature": "URL-\u003eRelativeURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:toRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "urlArguments",
          "package": "network-minihttp",
          "signature": "Map ByteString ByteString",
          "source": "src/Network-MiniHTTP-URL.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "urlArguments",
          "package": "network-minihttp",
          "partial": "Arguments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoesn't include '#'\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "urlFragment",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-URL.html#URL",
          "type": "function"
        },
        "index": {
          "description": "doesn include",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "urlFragment",
          "package": "network-minihttp",
          "partial": "Fragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "urlHost",
          "package": "network-minihttp",
          "signature": "Host",
          "source": "src/Network-MiniHTTP-URL.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "urlHost",
          "package": "network-minihttp",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "urlPassword",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-URL.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "urlPassword",
          "package": "network-minihttp",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoes not include leading \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "urlPath",
          "package": "network-minihttp",
          "signature": "ByteString",
          "source": "src/Network-MiniHTTP-URL.html#URL",
          "type": "function"
        },
        "index": {
          "description": "does not include leading",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "urlPath",
          "package": "network-minihttp",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefaults based on the scheme\n\u003c/p\u003e",
          "module": "Network.MiniHTTP.URL",
          "name": "urlPort",
          "package": "network-minihttp",
          "signature": "Int",
          "source": "src/Network-MiniHTTP-URL.html#URL",
          "type": "function"
        },
        "index": {
          "description": "defaults based on the scheme",
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "urlPort",
          "package": "network-minihttp",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "urlScheme",
          "package": "network-minihttp",
          "signature": "Scheme",
          "source": "src/Network-MiniHTTP-URL.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "urlScheme",
          "package": "network-minihttp",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MiniHTTP.URL",
          "name": "urlUser",
          "package": "network-minihttp",
          "signature": "Maybe ByteString",
          "source": "src/Network-MiniHTTP-URL.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MiniHTTP URL",
          "module": "Network.MiniHTTP.URL",
          "name": "urlUser",
          "package": "network-minihttp",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-minihttp/docs/Network-MiniHTTP-URL.html#v:urlUser"
      }
    }
  ]
]