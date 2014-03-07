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
        "word": "riak"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic support for the Riak decentralized data store.\n\u003c/p\u003e\u003cp\u003eWhen storing and retrieving data, the functions in this module do\n not perform any encoding or decoding of data, nor do they resolve\n conflicts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Basic",
          "name": "Basic",
          "package": "riak",
          "source": "src/Network-Riak-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Basic support for the Riak decentralized data store When storing and retrieving data the functions in this module do not perform any encoding or decoding of data nor do they resolve conflicts",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "Basic",
          "package": "riak",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Basic",
          "name": "Client",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Client",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "Client",
          "package": "riak",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA client identifier.  This is used by the Riak cluster when\n logging vector clock changes, and should be unique for each client.\n\u003c/p\u003e",
          "module": "Network.Riak.Basic",
          "name": "ClientID",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#ClientID",
          "type": "type"
        },
        "index": {
          "description": "client identifier This is used by the Riak cluster when logging vector clock changes and should be unique for each client",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "ClientID",
          "package": "riak",
          "partial": "Client ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#t:ClientID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA connection to a Riak server.\n\u003c/p\u003e",
          "module": "Network.Riak.Basic",
          "name": "Connection",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "connection to Riak server",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "Connection",
          "package": "riak",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA read/write quorum.  The quantity of replicas that must respond\n to a read or write request before it is considered successful. This\n is defined as a bucket property or as one of the relevant\n parameters to a single request (\u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eW\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eDW\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eRW\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Network.Riak.Basic",
          "name": "Quorum",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Quorum",
          "type": "data"
        },
        "index": {
          "description": "read write quorum The quantity of replicas that must respond to read or write request before it is considered successful This is defined as bucket property or as one of the relevant parameters to single request DW RW",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "Quorum",
          "package": "riak",
          "partial": "Quorum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#t:Quorum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccess after all servers have responded.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Types\",\"Network.Riak\"]",
          "name": "All",
          "package": "riak",
          "signature": "All",
          "source": "src/Network-Riak-Types-Internal.html#Quorum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:All\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:All\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:All\"]"
        },
        "index": {
          "description": "Success after all servers have responded",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "All",
          "package": "riak",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Types\",\"Network.Riak\"]",
          "name": "Client",
          "package": "riak",
          "signature": "Client",
          "source": "src/Network-Riak-Types-Internal.html#Client",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:Client\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:Client\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:Client\"]"
        },
        "index": {
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "Client",
          "package": "riak",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "Connection",
          "package": "riak",
          "signature": "Connection",
          "source": "src/Network-Riak-Types-Internal.html#Connection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:Connection\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:Connection\"]"
        },
        "index": {
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "Connection",
          "package": "riak",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the default quorum settings for the bucket.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Types\",\"Network.Riak\"]",
          "name": "Default",
          "package": "riak",
          "signature": "Default",
          "source": "src/Network-Riak-Types-Internal.html#Quorum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:Default\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:Default\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:Default\"]"
        },
        "index": {
          "description": "Use the default quorum settings for the bucket",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "Default",
          "package": "riak",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccess after one server has responded.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Types\",\"Network.Riak\"]",
          "name": "One",
          "package": "riak",
          "signature": "One",
          "source": "src/Network-Riak-Types-Internal.html#Quorum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:One\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:One\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:One\"]"
        },
        "index": {
          "description": "Success after one server has responded",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "One",
          "package": "riak",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccess after a quorum of servers has responded.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Types\",\"Network.Riak\"]",
          "name": "Quorum",
          "package": "riak",
          "signature": "Quorum",
          "source": "src/Network-Riak-Types-Internal.html#Quorum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:Quorum\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:Quorum\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:Quorum\"]"
        },
        "index": {
          "description": "Success after quorum of servers has responded",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "Quorum",
          "package": "riak",
          "partial": "Quorum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:Quorum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient identifier.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Types\",\"Network.Riak\"]",
          "name": "clientID",
          "package": "riak",
          "signature": "ClientID",
          "source": "src/Network-Riak-Types-Internal.html#Client",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:clientID\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:clientID\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:clientID\"]"
        },
        "index": {
          "description": "Client identifier",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "clientID",
          "package": "riak",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:clientID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceived data that has not yet been consumed.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "connBuffer",
          "package": "riak",
          "signature": "IORef ByteString",
          "source": "src/Network-Riak-Types-Internal.html#Connection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:connBuffer\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:connBuffer\"]"
        },
        "index": {
          "description": "Received data that has not yet been consumed",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "connBuffer",
          "package": "riak",
          "partial": "Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:connBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration we connected with.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "connClient",
          "package": "riak",
          "signature": "Client",
          "source": "src/Network-Riak-Types-Internal.html#Connection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:connClient\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:connClient\"]"
        },
        "index": {
          "description": "The configuration we connected with",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "connClient",
          "package": "riak",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:connClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "connSock",
          "package": "riak",
          "signature": "Socket",
          "source": "src/Network-Riak-Types-Internal.html#Connection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:connSock\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:connSock\"]"
        },
        "index": {
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "connSock",
          "package": "riak",
          "partial": "Sock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:connSock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to a server.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Connection\",\"Network.Riak\"]",
          "name": "connect",
          "package": "riak",
          "signature": "Client -\u003e IO Connection",
          "source": "src/Network-Riak-Connection-Internal.html#connect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:connect\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#v:connect\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:connect\"]"
        },
        "index": {
          "description": "Connect to server",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "connect",
          "normalized": "Client-\u003eIO Connection",
          "package": "riak",
          "signature": "Client-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault client configuration.  Talks to localhost, port 8087,\n with a randomly chosen client ID.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Connection\",\"Network.Riak\"]",
          "name": "defaultClient",
          "package": "riak",
          "signature": "Client",
          "source": "src/Network-Riak-Connection-Internal.html#defaultClient",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:defaultClient\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#v:defaultClient\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:defaultClient\"]"
        },
        "index": {
          "description": "Default client configuration Talks to localhost port with randomly chosen client ID",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "defaultClient",
          "package": "riak",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:defaultClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a value.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "delete",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e RW -\u003e IO ()",
          "source": "src/Network-Riak-Basic.html#delete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:delete\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:delete\"]"
        },
        "index": {
          "description": "Delete value",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "delete",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eRW-\u003eIO()",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eRW-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisconnect from a server.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Connection\",\"Network.Riak\"]",
          "name": "disconnect",
          "package": "riak",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Network-Riak-Connection-Internal.html#disconnect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:disconnect\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#v:disconnect\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:disconnect\"]"
        },
        "index": {
          "description": "Disconnect from server",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "disconnect",
          "normalized": "Connection-\u003eIO()",
          "package": "riak",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "foldKeys",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e (a -\u003e Key -\u003e IO a) -\u003e a -\u003e IO a",
          "source": "src/Network-Riak-Basic.html#foldKeys",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:foldKeys\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:foldKeys\"]"
        },
        "index": {
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "foldKeys",
          "normalized": "Connection-\u003eBucket-\u003e(a-\u003eKey-\u003eIO a)-\u003ea-\u003eIO a",
          "package": "riak",
          "partial": "Keys",
          "signature": "Connection-\u003eBucket-\u003e(a-\u003eKey-\u003eIO a)-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:foldKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a value.  This may return multiple conflicting siblings.\n Choosing among them is your responsibility.\n\u003c/p\u003e",
          "module": "Network.Riak.Basic",
          "name": "get",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e R -\u003e IO (Maybe (Seq Content, VClock))",
          "source": "src/Network-Riak-Basic.html#get",
          "type": "function"
        },
        "index": {
          "description": "Retrieve value This may return multiple conflicting siblings Choosing among them is your responsibility",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "get",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eIO(Maybe(Seq Content,VClock))",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eIO(Maybe(Seq Content,VClock))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the properties of a bucket.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "getBucket",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e IO BucketProps",
          "source": "src/Network-Riak-Basic.html#getBucket",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:getBucket\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:getBucket\"]"
        },
        "index": {
          "description": "Retrieve the properties of bucket",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "getBucket",
          "normalized": "Connection-\u003eBucket-\u003eIO BucketProps",
          "package": "riak",
          "partial": "Bucket",
          "signature": "Connection-\u003eBucket-\u003eIO BucketProps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:getBucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind out from the server what client ID this connection is using.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "getClientID",
          "package": "riak",
          "signature": "Connection -\u003e IO ClientID",
          "source": "src/Network-Riak-Basic.html#getClientID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:getClientID\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:getClientID\"]"
        },
        "index": {
          "description": "Find out from the server what client ID this connection is using",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "getClientID",
          "normalized": "Connection-\u003eIO ClientID",
          "package": "riak",
          "partial": "Client ID",
          "signature": "Connection-\u003eIO ClientID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:getClientID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve information about the server.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "getServerInfo",
          "package": "riak",
          "signature": "Connection -\u003e IO ServerInfo",
          "source": "src/Network-Riak-Basic.html#getServerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:getServerInfo\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:getServerInfo\"]"
        },
        "index": {
          "description": "Retrieve information about the server",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "getServerInfo",
          "normalized": "Connection-\u003eIO ServerInfo",
          "package": "riak",
          "partial": "Server Info",
          "signature": "Connection-\u003eIO ServerInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:getServerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the server to connect to.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Types\",\"Network.Riak\"]",
          "name": "host",
          "package": "riak",
          "signature": "HostName",
          "source": "src/Network-Riak-Types-Internal.html#Client",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:host\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:host\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:host\"]"
        },
        "index": {
          "description": "Name of the server to connect to",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "host",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "listBuckets",
          "package": "riak",
          "signature": "Connection -\u003e IO (Seq Bucket)",
          "source": "src/Network-Riak-Basic.html#listBuckets",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:listBuckets\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:listBuckets\"]"
        },
        "index": {
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "listBuckets",
          "normalized": "Connection-\u003eIO(Seq Bucket)",
          "package": "riak",
          "partial": "Buckets",
          "signature": "Connection-\u003eIO(Seq Bucket)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:listBuckets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eMapReduce\u003c/a\u003e\u003c/code\u003e job.  Its result is consumed via a strict left\n fold.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "mapReduce",
          "package": "riak",
          "signature": "Connection -\u003e Job -\u003e (a -\u003e MapReduce -\u003e a) -\u003e a -\u003e IO a",
          "source": "src/Network-Riak-Basic.html#mapReduce",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:mapReduce\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:mapReduce\"]"
        },
        "index": {
          "description": "Run MapReduce job Its result is consumed via strict left fold",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "mapReduce",
          "normalized": "Connection-\u003eJob-\u003e(a-\u003eMapReduce-\u003ea)-\u003ea-\u003eIO a",
          "package": "riak",
          "partial": "Reduce",
          "signature": "Connection-\u003eJob-\u003e(a-\u003eMapReduce-\u003ea)-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:mapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to see if the connection to the server is alive.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "ping",
          "package": "riak",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Network-Riak-Basic.html#ping",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:ping\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:ping\"]"
        },
        "index": {
          "description": "Check to see if the connection to the server is alive",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "ping",
          "normalized": "Connection-\u003eIO()",
          "package": "riak",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort number to connect to (default is 8087).\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak.Types\",\"Network.Riak\"]",
          "name": "port",
          "package": "riak",
          "signature": "ServiceName",
          "source": "src/Network-Riak-Types-Internal.html#Client",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:port\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:port\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:port\"]"
        },
        "index": {
          "description": "Port number to connect to default is",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "port",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a single value.  This may return multiple conflicting\n siblings.  Choosing among them, and storing a new value, is your\n responsibility.\n\u003c/p\u003e\u003cp\u003eYou should \u003cem\u003eonly\u003c/em\u003e supply \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e if you are sure\n that the given bucket+key combination does not already exist.  If\n you omit a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e but the bucket+key \u003cem\u003edoes\u003c/em\u003e exist, your value\n will not be stored.\n\u003c/p\u003e",
          "module": "Network.Riak.Basic",
          "name": "put",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e Maybe VClock -\u003e Content -\u003e W -\u003e DW -\u003e IO (Seq Content, VClock)",
          "source": "src/Network-Riak-Basic.html#put",
          "type": "function"
        },
        "index": {
          "description": "Store single value This may return multiple conflicting siblings Choosing among them and storing new value is your responsibility You should only supply Nothing as VClock if you are sure that the given bucket key combination does not already exist If you omit VClock but the bucket key does exist your value will not be stored",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "put",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003eContent-\u003eW-\u003eDW-\u003eIO(Seq Content,VClock)",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003eContent-\u003eW-\u003eDW-\u003eIO(Seq Content,VClock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a single value, without the possibility of conflict\n resolution.\n\u003c/p\u003e\u003cp\u003eYou should \u003cem\u003eonly\u003c/em\u003e supply \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e if you are sure\n that the given bucket+key combination does not already exist.  If\n you omit a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e but the bucket+key \u003cem\u003edoes\u003c/em\u003e exist, your value\n will not be stored, and you will not be notified.\n\u003c/p\u003e",
          "module": "Network.Riak.Basic",
          "name": "put_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e Maybe VClock -\u003e Content -\u003e W -\u003e DW -\u003e IO ()",
          "source": "src/Network-Riak-Basic.html#put_",
          "type": "function"
        },
        "index": {
          "description": "Store single value without the possibility of conflict resolution You should only supply Nothing as VClock if you are sure that the given bucket key combination does not already exist If you omit VClock but the bucket key does exist your value will not be stored and you will not be notified",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "put_",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003eContent-\u003eW-\u003eDW-\u003eIO()",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003eContent-\u003eW-\u003eDW-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore new properties for a bucket.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.Basic\",\"Network.Riak\"]",
          "name": "setBucket",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e BucketProps -\u003e IO ()",
          "source": "src/Network-Riak-Basic.html#setBucket",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:setBucket\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:setBucket\"]"
        },
        "index": {
          "description": "Store new properties for bucket",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "setBucket",
          "normalized": "Connection-\u003eBucket-\u003eBucketProps-\u003eIO()",
          "package": "riak",
          "partial": "Bucket",
          "signature": "Connection-\u003eBucket-\u003eBucketProps-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:setBucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell the server our client ID.\n\u003c/p\u003e",
          "module": "Network.Riak.Basic",
          "name": "setClientID",
          "package": "riak",
          "signature": "Connection -\u003e ClientID -\u003e IO ()",
          "source": "src/Network-Riak-Connection-Internal.html#setClientID",
          "type": "function"
        },
        "index": {
          "description": "Tell the server our client ID",
          "hierarchy": "Network Riak Basic",
          "module": "Network.Riak.Basic",
          "name": "setClientID",
          "normalized": "Connection-\u003eClientID-\u003eIO()",
          "package": "riak",
          "partial": "Client ID",
          "signature": "Connection-\u003eClientID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Basic.html#v:setClientID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA high-performance striped pooling abstraction for managing\n connections to a Riak cluster. This is a thin wrapper around\n \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Connection.Pool",
          "name": "Pool",
          "package": "riak",
          "source": "src/Network-Riak-Connection-Pool.html",
          "type": "module"
        },
        "index": {
          "description": "high-performance striped pooling abstraction for managing connections to Riak cluster This is thin wrapper around Pool",
          "hierarchy": "Network Riak Connection Pool",
          "module": "Network.Riak.Connection.Pool",
          "name": "Pool",
          "package": "riak",
          "partial": "Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection-Pool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pool of connections to a Riak server.\n\u003c/p\u003e\u003cp\u003eThis pool is \"striped\", i.e. it consists of several sub-pools\n that are managed independently.\n\u003c/p\u003e\u003cp\u003eThe total number of connections that can possibly be open at once\n is \u003ccode\u003e\u003ca\u003emaxConnections\u003c/a\u003e\u003c/code\u003e * \u003ccode\u003e\u003ca\u003enumStripes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection.Pool",
          "name": "Pool",
          "package": "riak",
          "source": "src/Network-Riak-Connection-Pool.html#Pool",
          "type": "data"
        },
        "index": {
          "description": "pool of connections to Riak server This pool is striped i.e it consists of several sub-pools that are managed independently The total number of connections that can possibly be open at once is maxConnections numStripes",
          "hierarchy": "Network Riak Connection Pool",
          "module": "Network.Riak.Connection.Pool",
          "name": "Pool",
          "package": "riak",
          "partial": "Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection-Pool.html#t:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient specification.  The client ID is ignored, and always\n regenerated automatically for each new connection.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection.Pool",
          "name": "client",
          "package": "riak",
          "signature": "Pool -\u003e Client",
          "source": "src/Network-Riak-Connection-Pool.html#client",
          "type": "function"
        },
        "index": {
          "description": "Client specification The client ID is ignored and always regenerated automatically for each new connection",
          "hierarchy": "Network Riak Connection Pool",
          "module": "Network.Riak.Connection.Pool",
          "name": "client",
          "normalized": "Pool-\u003eClient",
          "package": "riak",
          "signature": "Pool-\u003eClient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection-Pool.html#v:client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new connection pool.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection.Pool",
          "name": "create",
          "package": "riak",
          "signature": "Client-\u003e Int-\u003e NominalDiffTime-\u003e Int-\u003e IO Pool",
          "type": "function"
        },
        "index": {
          "description": "Create new connection pool",
          "hierarchy": "Network Riak Connection Pool",
          "module": "Network.Riak.Connection.Pool",
          "name": "create",
          "normalized": "Client-\u003eInt-\u003eNominalDiffTime-\u003eInt-\u003eIO Pool",
          "package": "riak",
          "signature": "Client-\u003eInt-\u003eNominalDiffTime-\u003eInt-\u003eIO Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection-Pool.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAmount of time for which an unused connection is kept open.  The\n smallest acceptable value is 0.5 seconds.\n\u003c/p\u003e\u003cp\u003eThe elapsed time before closing may be a little longer than\n requested, as the reaper thread wakes at 1-second intervals.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection.Pool",
          "name": "idleTime",
          "package": "riak",
          "signature": "Pool -\u003e NominalDiffTime",
          "source": "src/Network-Riak-Connection-Pool.html#idleTime",
          "type": "function"
        },
        "index": {
          "description": "Amount of time for which an unused connection is kept open The smallest acceptable value is seconds The elapsed time before closing may be little longer than requested as the reaper thread wakes at second intervals",
          "hierarchy": "Network Riak Connection Pool",
          "module": "Network.Riak.Connection.Pool",
          "name": "idleTime",
          "normalized": "Pool-\u003eNominalDiffTime",
          "package": "riak",
          "partial": "Time",
          "signature": "Pool-\u003eNominalDiffTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection-Pool.html#v:idleTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of connections to keep open per stripe.  The\n smallest acceptable value is 1.\n\u003c/p\u003e\u003cp\u003eRequests for connections will block if this limit is reached on a\n single stripe, even if other stripes have idle connections\n available.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection.Pool",
          "name": "maxConnections",
          "package": "riak",
          "signature": "Pool -\u003e Int",
          "source": "src/Network-Riak-Connection-Pool.html#maxConnections",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of connections to keep open per stripe The smallest acceptable value is Requests for connections will block if this limit is reached on single stripe even if other stripes have idle connections available",
          "hierarchy": "Network Riak Connection Pool",
          "module": "Network.Riak.Connection.Pool",
          "name": "maxConnections",
          "normalized": "Pool-\u003eInt",
          "package": "riak",
          "partial": "Connections",
          "signature": "Pool-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection-Pool.html#v:maxConnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStripe count.  The number of distinct sub-pools to maintain.  The\n smallest acceptable value is 1.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection.Pool",
          "name": "numStripes",
          "package": "riak",
          "signature": "Pool -\u003e Int",
          "source": "src/Network-Riak-Connection-Pool.html#numStripes",
          "type": "function"
        },
        "index": {
          "description": "Stripe count The number of distinct sub-pools to maintain The smallest acceptable value is",
          "hierarchy": "Network Riak Connection Pool",
          "module": "Network.Riak.Connection.Pool",
          "name": "numStripes",
          "normalized": "Pool-\u003eInt",
          "package": "riak",
          "partial": "Stripes",
          "signature": "Pool-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection-Pool.html#v:numStripes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily take a connection from a \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e, perform an action\n with it, and return it to the pool afterwards.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the pool has a connection available, it is used\n   immediately.\n\u003c/li\u003e\u003cli\u003e Otherwise, if the maximum number of connections has not been\n   reached, a new connection is created and used.\n\u003c/li\u003e\u003cli\u003e If the maximum number of connections has been reached, this\n   function blocks until a connection becomes available, then that\n   connection is used.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the action throws an exception of any type, the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e is\n destroyed, and not returned to the pool.\n\u003c/p\u003e\u003cp\u003eIt probably goes without saying that you should never call\n \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e on a connection, as doing so will cause a subsequent\n user (who expects the connection to be valid) to throw an exception.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection.Pool",
          "name": "withConnection",
          "package": "riak",
          "signature": "Pool -\u003e (Connection -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Riak-Connection-Pool.html#withConnection",
          "type": "function"
        },
        "index": {
          "description": "Temporarily take connection from Pool perform an action with it and return it to the pool afterwards If the pool has connection available it is used immediately Otherwise if the maximum number of connections has not been reached new connection is created and used If the maximum number of connections has been reached this function blocks until connection becomes available then that connection is used If the action throws an exception of any type the Connection is destroyed and not returned to the pool It probably goes without saying that you should never call disconnect on connection as doing so will cause subsequent user who expects the connection to be valid to throw an exception",
          "hierarchy": "Network Riak Connection Pool",
          "module": "Network.Riak.Connection.Pool",
          "name": "withConnection",
          "normalized": "Pool-\u003e(Connection-\u003eIO a)-\u003eIO a",
          "package": "riak",
          "partial": "Connection",
          "signature": "Pool-\u003e(Connection-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection-Pool.html#v:withConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level network connection management.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Connection",
          "name": "Connection",
          "package": "riak",
          "source": "src/Network-Riak-Connection.html",
          "type": "module"
        },
        "index": {
          "description": "Low-level network connection management",
          "hierarchy": "Network Riak Connection",
          "module": "Network.Riak.Connection",
          "name": "Connection",
          "package": "riak",
          "partial": "Connection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a request to the server, and receive its response.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection",
          "name": "exchange",
          "package": "riak",
          "signature": "Connection -\u003e req -\u003e IO resp",
          "source": "src/Network-Riak-Connection-Internal.html#exchange",
          "type": "function"
        },
        "index": {
          "description": "Send request to the server and receive its response",
          "hierarchy": "Network Riak Connection",
          "module": "Network.Riak.Connection",
          "name": "exchange",
          "normalized": "Connection-\u003ea-\u003eIO b",
          "package": "riak",
          "signature": "Connection-\u003ereq-\u003eIO resp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#v:exchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a request to the server, and receive its response (which may\n be empty).\n\u003c/p\u003e",
          "module": "Network.Riak.Connection",
          "name": "exchangeMaybe",
          "package": "riak",
          "signature": "Connection -\u003e req -\u003e IO (Maybe resp)",
          "source": "src/Network-Riak-Connection-Internal.html#exchangeMaybe",
          "type": "function"
        },
        "index": {
          "description": "Send request to the server and receive its response which may be empty",
          "hierarchy": "Network Riak Connection",
          "module": "Network.Riak.Connection",
          "name": "exchangeMaybe",
          "normalized": "Connection-\u003ea-\u003eIO(Maybe b)",
          "package": "riak",
          "partial": "Maybe",
          "signature": "Connection-\u003ereq-\u003eIO(Maybe resp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#v:exchangeMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a request to the server, and receive its response, but do\n not decode it.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection",
          "name": "exchange_",
          "package": "riak",
          "signature": "Connection -\u003e req -\u003e IO ()",
          "source": "src/Network-Riak-Connection-Internal.html#exchange_",
          "type": "function"
        },
        "index": {
          "description": "Send request to the server and receive its response but do not decode it",
          "hierarchy": "Network Riak Connection",
          "module": "Network.Riak.Connection",
          "name": "exchange_",
          "normalized": "Connection-\u003ea-\u003eIO()",
          "package": "riak",
          "signature": "Connection-\u003ereq-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#v:exchange_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random client ID.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection",
          "name": "makeClientID",
          "package": "riak",
          "signature": "IO ClientID",
          "source": "src/Network-Riak-Connection-Internal.html#makeClientID",
          "type": "function"
        },
        "index": {
          "description": "Generate random client ID",
          "hierarchy": "Network Riak Connection",
          "module": "Network.Riak.Connection",
          "name": "makeClientID",
          "package": "riak",
          "partial": "Client ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#v:makeClientID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a series of requests to the server, back to back, and\n receive a response for each request sent.  The sending and\n receiving will be overlapped if possible, to improve concurrency\n and reduce latency.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection",
          "name": "pipeline",
          "package": "riak",
          "signature": "Connection -\u003e [req] -\u003e IO [resp]",
          "source": "src/Network-Riak-Connection-Internal.html#pipeline",
          "type": "function"
        },
        "index": {
          "description": "Send series of requests to the server back to back and receive response for each request sent The sending and receiving will be overlapped if possible to improve concurrency and reduce latency",
          "hierarchy": "Network Riak Connection",
          "module": "Network.Riak.Connection",
          "name": "pipeline",
          "normalized": "Connection-\u003e[a]-\u003eIO[b]",
          "package": "riak",
          "signature": "Connection-\u003e[req]-\u003eIO[resp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#v:pipeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a series of requests to the server, back to back, and\n receive a response for each request sent (the responses may be\n empty).  The sending and receiving will be overlapped if possible,\n to improve concurrency and reduce latency.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection",
          "name": "pipelineMaybe",
          "package": "riak",
          "signature": "Connection -\u003e [req] -\u003e IO [Maybe resp]",
          "source": "src/Network-Riak-Connection-Internal.html#pipelineMaybe",
          "type": "function"
        },
        "index": {
          "description": "Send series of requests to the server back to back and receive response for each request sent the responses may be empty The sending and receiving will be overlapped if possible to improve concurrency and reduce latency",
          "hierarchy": "Network Riak Connection",
          "module": "Network.Riak.Connection",
          "name": "pipelineMaybe",
          "normalized": "Connection-\u003e[a]-\u003eIO[Maybe b]",
          "package": "riak",
          "partial": "Maybe",
          "signature": "Connection-\u003e[req]-\u003eIO[Maybe resp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#v:pipelineMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a series of requests to the server, back to back, and\n receive (but do not decode) a response for each request sent.  The\n sending and receiving will be overlapped if possible, to improve\n concurrency and reduce latency.\n\u003c/p\u003e",
          "module": "Network.Riak.Connection",
          "name": "pipeline_",
          "package": "riak",
          "signature": "Connection -\u003e [req] -\u003e IO ()",
          "source": "src/Network-Riak-Connection-Internal.html#pipeline_",
          "type": "function"
        },
        "index": {
          "description": "Send series of requests to the server back to back and receive but do not decode response for each request sent The sending and receiving will be overlapped if possible to improve concurrency and reduce latency",
          "hierarchy": "Network Riak Connection",
          "module": "Network.Riak.Connection",
          "name": "pipeline_",
          "normalized": "Connection-\u003e[a]-\u003eIO()",
          "package": "riak",
          "signature": "Connection-\u003e[req]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Connection.html#v:pipeline_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level content and link types and functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Content",
          "name": "Content",
          "package": "riak",
          "source": "src/Network-Riak-Content.html",
          "type": "module"
        },
        "index": {
          "description": "Low-level content and link types and functions",
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "Content",
          "package": "riak",
          "partial": "Content",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "Content",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "Content",
          "package": "riak",
          "partial": "Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "Link",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "Link",
          "package": "riak",
          "partial": "Link",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#t:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "Content",
          "package": "riak",
          "signature": "Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "Content",
          "package": "riak",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "Link",
          "package": "riak",
          "signature": "Link",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "Link",
          "package": "riak",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContent encoded as \u003ccode\u003eapplication/octet-stream\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Riak.Content",
          "name": "binary",
          "package": "riak",
          "signature": "ByteString -\u003e Content",
          "source": "src/Network-Riak-Content.html#binary",
          "type": "function"
        },
        "index": {
          "description": "Content encoded as application octet-stream",
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "binary",
          "normalized": "ByteString-\u003eContent",
          "package": "riak",
          "signature": "ByteString-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "bucket",
          "package": "riak",
          "signature": "(Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "bucket",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:bucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "charset",
          "package": "riak",
          "signature": "(Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "charset",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:charset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "content_encoding",
          "package": "riak",
          "signature": "(Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "content_encoding",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:content_encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "content_type",
          "package": "riak",
          "signature": "(Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "content_type",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:content_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty piece of content.\n\u003c/p\u003e",
          "module": "Network.Riak.Content",
          "name": "empty",
          "package": "riak",
          "signature": "Content",
          "source": "src/Network-Riak-Content.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty piece of content",
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "empty",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "indexes",
          "package": "riak",
          "signature": "(Seq Pair)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "indexes",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:indexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContent encoded as \u003ccode\u003eapplication/json\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Riak.Content",
          "name": "json",
          "package": "riak",
          "signature": "a -\u003e Content",
          "source": "src/Network-Riak-Content.html#json",
          "type": "function"
        },
        "index": {
          "description": "Content encoded as application json",
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "json",
          "normalized": "a-\u003eContent",
          "package": "riak",
          "signature": "a-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "key",
          "package": "riak",
          "signature": "(Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "key",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "last_mod",
          "package": "riak",
          "signature": "(Maybe Word32)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "last_mod",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:last_mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "last_mod_usecs",
          "package": "riak",
          "signature": "(Maybe Word32)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "last_mod_usecs",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:last_mod_usecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a link.\n\u003c/p\u003e",
          "module": "Network.Riak.Content",
          "name": "link",
          "package": "riak",
          "signature": "Bucket -\u003e Key -\u003e Tag -\u003e Link",
          "source": "src/Network-Riak-Content.html#link",
          "type": "function"
        },
        "index": {
          "description": "Create link",
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "link",
          "normalized": "Bucket-\u003eKey-\u003eTag-\u003eLink",
          "package": "riak",
          "signature": "Bucket-\u003eKey-\u003eTag-\u003eLink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "links",
          "package": "riak",
          "signature": "(Seq Link)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "links",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:links"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "tag",
          "package": "riak",
          "signature": "(Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "tag",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "usermeta",
          "package": "riak",
          "signature": "(Seq Pair)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "usermeta",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:usermeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "value",
          "package": "riak",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "value",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Content",
          "name": "vtag",
          "package": "riak",
          "signature": "(Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Content",
          "module": "Network.Riak.Content",
          "name": "vtag",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Content.html#v:vtag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for debug logging.  The code in this package only works if\n the package was built with the \u003ccode\u003e-fdebug\u003c/code\u003e flag.  Otherwise, they are\n all no-ops.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Debug",
          "name": "Debug",
          "package": "riak",
          "source": "src/Network-Riak-Debug.html",
          "type": "module"
        },
        "index": {
          "description": "Support for debug logging The code in this package only works if the package was built with the fdebug flag Otherwise they are all no-ops",
          "hierarchy": "Network Riak Debug",
          "module": "Network.Riak.Debug",
          "name": "Debug",
          "package": "riak",
          "partial": "Debug",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Debug.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a debug message, if debugging is enabled.\n\u003c/p\u003e",
          "module": "Network.Riak.Debug",
          "name": "debug",
          "package": "riak",
          "signature": "String-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Print debug message if debugging is enabled",
          "hierarchy": "Network Riak Debug",
          "module": "Network.Riak.Debug",
          "name": "debug",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "riak",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Debug.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a debug message, and information about some values.  If the\n debug level is greater than 1, print the values themselves.\n\u003c/p\u003e",
          "module": "Network.Riak.Debug",
          "name": "debugValues",
          "package": "riak",
          "signature": "String -\u003e String -\u003e [a] -\u003e IO ()",
          "source": "src/Network-Riak-Debug.html#debugValues",
          "type": "function"
        },
        "index": {
          "description": "Print debug message and information about some values If the debug level is greater than print the values themselves",
          "hierarchy": "Network Riak Debug",
          "module": "Network.Riak.Debug",
          "name": "debugValues",
          "normalized": "String-\u003eString-\u003e[a]-\u003eIO()",
          "package": "riak",
          "partial": "Values",
          "signature": "String-\u003eString-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Debug.html#v:debugValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current debugging level.  This is established once by reading\n the \u003ccode\u003eRIAK_DEBUG\u003c/code\u003e environment variable.\n\u003c/p\u003e",
          "module": "Network.Riak.Debug",
          "name": "level",
          "package": "riak",
          "signature": "Int",
          "source": "src/Network-Riak-Debug.html#level",
          "type": "function"
        },
        "index": {
          "description": "The current debugging level This is established once by reading the RIAK DEBUG environment variable",
          "hierarchy": "Network Riak Debug",
          "module": "Network.Riak.Debug",
          "name": "level",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Debug.html#v:level"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e to log to (\u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e is the default).\n\u003c/p\u003e",
          "module": "Network.Riak.Debug",
          "name": "setHandle",
          "package": "riak",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Network-Riak-Debug.html#setHandle",
          "type": "function"
        },
        "index": {
          "description": "Set the Handle to log to stderr is the default",
          "hierarchy": "Network Riak Debug",
          "module": "Network.Riak.Debug",
          "name": "setHandle",
          "normalized": "Handle-\u003eIO()",
          "package": "riak",
          "partial": "Handle",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Debug.html#v:setHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e value.  Show the entire value if the debug level\n is above 1, just the tag otherwise.\n\u003c/p\u003e",
          "module": "Network.Riak.Debug",
          "name": "showM",
          "package": "riak",
          "signature": "a -\u003e String",
          "source": "src/Network-Riak-Debug.html#showM",
          "type": "function"
        },
        "index": {
          "description": "Show Tagged value Show the entire value if the debug level is above just the tag otherwise",
          "hierarchy": "Network Riak Debug",
          "module": "Network.Riak.Debug",
          "name": "showM",
          "normalized": "a-\u003eString",
          "package": "riak",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Debug.html#v:showM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for REST-safe name handling.\n\u003c/p\u003e\u003cp\u003eRiak's protocol buffer (PBC) API will accept unescaped bucket,\n link, and key names.  Its REST API does not unescape names, so it\n is possible to use the PBC API to construct names that cannot be\n accessed via the REST API (e.g. containing an embedded slash or\n other URL-unsafe octet).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Escape",
          "name": "Escape",
          "package": "riak",
          "source": "src/Network-Riak-Escape.html",
          "type": "module"
        },
        "index": {
          "description": "Support for REST-safe name handling Riak protocol buffer PBC API will accept unescaped bucket link and key names Its REST API does not unescape names so it is possible to use the PBC API to construct names that cannot be accessed via the REST API e.g containing an embedded slash or other URL-unsafe octet",
          "hierarchy": "Network Riak Escape",
          "module": "Network.Riak.Escape",
          "name": "Escape",
          "package": "riak",
          "partial": "Escape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Escape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of string-like types that can be URL-escaped and\n unescaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Escape",
          "name": "Escape",
          "package": "riak",
          "source": "src/Network-Riak-Escape.html#Escape",
          "type": "class"
        },
        "index": {
          "description": "The class of string-like types that can be URL-escaped and unescaped",
          "hierarchy": "Network Riak Escape",
          "module": "Network.Riak.Escape",
          "name": "Escape",
          "package": "riak",
          "partial": "Escape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Escape.html#t:Escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL-escape a string.\n\u003c/p\u003e",
          "module": "Network.Riak.Escape",
          "name": "escape",
          "package": "riak",
          "signature": "e -\u003e ByteString",
          "source": "src/Network-Riak-Escape.html#escape",
          "type": "method"
        },
        "index": {
          "description": "URL-escape string",
          "hierarchy": "Network Riak Escape",
          "module": "Network.Riak.Escape",
          "name": "escape",
          "normalized": "a-\u003eByteString",
          "package": "riak",
          "signature": "e-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Escape.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL-unescape a string that is presumed to be properly escaped.\n If the string is invalid, an error will be thrown that cannot be\n caught from pure code.\n\u003c/p\u003e",
          "module": "Network.Riak.Escape",
          "name": "unescape",
          "package": "riak",
          "signature": "ByteString -\u003e e",
          "source": "src/Network-Riak-Escape.html#unescape",
          "type": "function"
        },
        "index": {
          "description": "URL-unescape string that is presumed to be properly escaped If the string is invalid an error will be thrown that cannot be caught from pure code",
          "hierarchy": "Network Riak Escape",
          "module": "Network.Riak.Escape",
          "name": "unescape",
          "normalized": "ByteString-\u003ea",
          "package": "riak",
          "signature": "ByteString-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Escape.html#v:unescape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL-unescape a string.\n\u003c/p\u003e",
          "module": "Network.Riak.Escape",
          "name": "unescape'",
          "package": "riak",
          "signature": "ByteString -\u003e Either String e",
          "source": "src/Network-Riak-Escape.html#unescape%27",
          "type": "method"
        },
        "index": {
          "description": "URL-unescape string",
          "hierarchy": "Network Riak Escape",
          "module": "Network.Riak.Escape",
          "name": "unescape'",
          "normalized": "ByteString-\u003eEither String a",
          "package": "riak",
          "signature": "ByteString-\u003eEither String e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Escape.html#v:unescape-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUseful functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Functions",
          "name": "Functions",
          "package": "riak",
          "source": "src/Network-Riak-Functions.html",
          "type": "module"
        },
        "index": {
          "description": "Useful functions",
          "hierarchy": "Network Riak Functions",
          "module": "Network.Riak.Functions",
          "name": "Functions",
          "package": "riak",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Functions",
          "name": "lazy",
          "package": "riak",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Riak-Functions.html#lazy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Functions",
          "module": "Network.Riak.Functions",
          "name": "lazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "riak",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Functions.html#v:lazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Functions",
          "name": "mapEither",
          "package": "riak",
          "signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e Either a b -\u003e Either c d",
          "source": "src/Network-Riak-Functions.html#mapEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Functions",
          "module": "Network.Riak.Functions",
          "name": "mapEither",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
          "package": "riak",
          "partial": "Either",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003eEither a b-\u003eEither c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Functions.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Functions",
          "name": "strict",
          "package": "riak",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Riak-Functions.html#strict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Functions",
          "module": "Network.Riak.Functions",
          "name": "strict",
          "normalized": "ByteString-\u003eByteString",
          "package": "riak",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Functions.html#v:strict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows storage and retrieval of JSON-encoded data.\n\u003c/p\u003e\u003cp\u003eFunctions automatically resolve conflicts using \u003ccode\u003e\u003ca\u003eResolvable\u003c/a\u003e\u003c/code\u003e\n instances.  For instance, if a \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e returns three siblings, a\n winner will be chosen using \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e.  If a \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e results in a\n conflict, a winner will be chosen using \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e, and the winner\n will be \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e; this will be repeated until either no conflict\n occurs or the process has been repeated too many times.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "source": "src/Network-Riak-JSON-Resolvable.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows storage and retrieval of JSON-encoded data Functions automatically resolve conflicts using Resolvable instances For instance if get returns three siblings winner will be chosen using resolve If put results in conflict winner will be chosen using resolve and the winner will be put this will be repeated until either no conflict occurs or the process has been repeated too many times",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "partial": "Resolvable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomated conflict resolution failed.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "ResolutionFailure",
          "package": "riak",
          "source": "src/Network-Riak-Resolvable-Internal.html#ResolutionFailure",
          "type": "data"
        },
        "index": {
          "description": "Automated conflict resolution failed",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "ResolutionFailure",
          "package": "riak",
          "partial": "Resolution Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#t:ResolutionFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can automatically resolve a vector clock conflict\n between two or more versions of a value.\n\u003c/p\u003e\u003cp\u003eInstances must be symmetric in their behaviour, such that the\n following law is obeyed:\n\u003c/p\u003e\u003cpre\u003e resolve a b == resolve b a\n\u003c/pre\u003e\u003cp\u003eOtherwise, there are no restrictions on the behaviour of \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e.\n The result may be \u003ccode\u003ea\u003c/code\u003e, \u003ccode\u003eb\u003c/code\u003e, a value derived from \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, or\n something else.\n\u003c/p\u003e\u003cp\u003eIf several conflicting siblings are found, \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e will be\n applied over all of them using a fold, to yield a single\n \"winner\".\n\u003c/p\u003e",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "source": "src/Network-Riak-Resolvable-Internal.html#Resolvable",
          "type": "class"
        },
        "index": {
          "description": "type that can automatically resolve vector clock conflict between two or more versions of value Instances must be symmetric in their behaviour such that the following law is obeyed resolve resolve Otherwise there are no restrictions on the behaviour of resolve The result may be value derived from and or something else If several conflicting siblings are found resolve will be applied over all of them using fold to yield single winner",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "partial": "Resolvable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#t:Resolvable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToo many attempts were made to resolve a conflict, with each\n attempt resulting in another conflict.\n\u003c/p\u003e\u003cp\u003eThe number of retries that the library will attempt is high\n (64). This makes it extremely unlikely that this exception will\n be thrown during normal application operation.  Instead, this\n exception is most likely to be thrown as a result of a bug in\n your application code, for example if your \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e function\n is misbehaving.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.JSON.Resolvable\",\"Network.Riak.Resolvable\",\"Network.Riak.Value.Resolvable\"]",
          "name": "RetriesExceeded",
          "package": "riak",
          "signature": "RetriesExceeded",
          "source": "src/Network-Riak-Resolvable-Internal.html#ResolutionFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:RetriesExceeded\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Resolvable.html#v:RetriesExceeded\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:RetriesExceeded\"]"
        },
        "index": {
          "description": "Too many attempts were made to resolve conflict with each attempt resulting in another conflict The number of retries that the library will attempt is high This makes it extremely unlikely that this exception will be thrown during normal application operation Instead this exception is most likely to be thrown as result of bug in your application code for example if your resolve function is misbehaving",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "RetriesExceeded",
          "package": "riak",
          "partial": "Retries Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:RetriesExceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a single value.  If conflicting values are returned,\n \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e is used to choose a winner.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.JSON.Resolvable\",\"Network.Riak\"]",
          "name": "get",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e R -\u003e IO (Maybe (c, VClock))",
          "source": "src/Network-Riak-JSON-Resolvable.html#get",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:get\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:get\"]"
        },
        "index": {
          "description": "Retrieve single value If conflicting values are returned resolve is used to choose winner",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "get",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eIO(Maybe(a,VClock))",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eIO(Maybe(c,VClock))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve multiple values.  If conflicting values are returned for\n a key, \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e is used to choose a winner.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.JSON.Resolvable\",\"Network.Riak\"]",
          "name": "getMany",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [Key] -\u003e R -\u003e IO [Maybe (c, VClock)]",
          "source": "src/Network-Riak-JSON-Resolvable.html#getMany",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:getMany\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:getMany\"]"
        },
        "index": {
          "description": "Retrieve multiple values If conflicting values are returned for key resolve is used to choose winner",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "getMany",
          "normalized": "Connection-\u003eBucket-\u003e[Key]-\u003eR-\u003eIO[Maybe(a,VClock)]",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[Key]-\u003eR-\u003eIO[Maybe(c,VClock)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:getMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a single value.  The value, if any, is retrieved using\n \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e; conflict resolution is performed if necessary.  The\n modification function is called on the resulting value, and its\n result is stored using \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, which may again perform conflict\n resolution.\n\u003c/p\u003e\u003cp\u003eThe result of this function is whatever was returned by \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e,\n along with the auxiliary value returned by the modification\n function.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e phase of this function gives up due to apparently\n being stuck in a conflict resolution loop, it will throw a\n \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.JSON.Resolvable\",\"Network.Riak.Value.Resolvable\",\"Network.Riak\"]",
          "name": "modify",
          "package": "riak",
          "signature": "Connection-\u003e Bucket-\u003e Key-\u003e R-\u003e W-\u003e DW-\u003e (Maybe a -\u003e IO (a, b))-\u003e IO (a, b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:modify\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:modify\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:modify\"]"
        },
        "index": {
          "description": "Modify single value The value if any is retrieved using get conflict resolution is performed if necessary The modification function is called on the resulting value and its result is stored using put which may again perform conflict resolution The result of this function is whatever was returned by put along with the auxiliary value returned by the modification function If the put phase of this function gives up due to apparently being stuck in conflict resolution loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "modify",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eW-\u003eDW-\u003e(Maybe a-\u003eIO(a,b))-\u003eIO(a,b)",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eW-\u003eDW-\u003e(Maybe a-\u003eIO(a,b))-\u003eIO(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a single value.  The value, if any, is retrieved using\n \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e; conflict resolution is performed if necessary.  The\n modification function is called on the resulting value, and its\n result is stored using \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, which may again perform conflict\n resolution.\n\u003c/p\u003e\u003cp\u003eThe result of this function is whatever was returned by \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e phase of this function gives up due to apparently\n being stuck in a conflict resolution loop, it will throw a\n \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.JSON.Resolvable\",\"Network.Riak\"]",
          "name": "modify_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e R -\u003e W -\u003e DW -\u003e (Maybe a -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Riak-JSON-Resolvable.html#modify_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:modify_\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:modify_\"]"
        },
        "index": {
          "description": "Modify single value The value if any is retrieved using get conflict resolution is performed if necessary The modification function is called on the resulting value and its result is stored using put which may again perform conflict resolution The result of this function is whatever was returned by put If the put phase of this function gives up due to apparently being stuck in conflict resolution loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "modify_",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eW-\u003eDW-\u003e(Maybe a-\u003eIO a)-\u003eIO a",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eW-\u003eDW-\u003e(Maybe a-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:modify_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a single value, automatically resolving any vector clock\n conflicts that arise.  A single invocation of this function may\n involve several roundtrips to the server to resolve conflicts.\n\u003c/p\u003e\u003cp\u003eIf a conflict arises, a winner will be chosen using \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e, and\n the winner will be stored; this will be repeated until no conflict\n occurs or a (fairly large) number of retries has been attempted\n without success.\n\u003c/p\u003e\u003cp\u003eIf this function gives up due to apparently being stuck in a\n conflict resolution loop, it will throw a \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e\n exception.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.JSON.Resolvable\",\"Network.Riak\"]",
          "name": "put",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e Maybe VClock -\u003e c -\u003e W -\u003e DW -\u003e IO (c, VClock)",
          "source": "src/Network-Riak-JSON-Resolvable.html#put",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:put\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:put\"]"
        },
        "index": {
          "description": "Store single value automatically resolving any vector clock conflicts that arise single invocation of this function may involve several roundtrips to the server to resolve conflicts If conflict arises winner will be chosen using resolve and the winner will be stored this will be repeated until no conflict occurs or fairly large number of retries has been attempted without success If this function gives up due to apparently being stuck in conflict resolution loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "put",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ea-\u003eW-\u003eDW-\u003eIO(a,VClock)",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ec-\u003eW-\u003eDW-\u003eIO(c,VClock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore multiple values, resolving any vector clock conflicts that\n arise.  A single invocation of this function may involve several\n roundtrips to the server to resolve conflicts.\n\u003c/p\u003e\u003cp\u003eIf any conflicts arise, a winner will be chosen in each case using\n \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e, and the winners will be stored; this will be repeated\n until either no conflicts occur or a (fairly large) number of\n retries has been attempted without success.\n\u003c/p\u003e\u003cp\u003eFor each original value to be stored, the final value that was\n stored at the end of any conflict resolution is returned.\n\u003c/p\u003e\u003cp\u003eIf this function gives up due to apparently being stuck in a loop,\n it will throw a \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "[\"Network.Riak.JSON.Resolvable\",\"Network.Riak\"]",
          "name": "putMany",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [(Key, Maybe VClock, c)] -\u003e W -\u003e DW -\u003e IO [(c, VClock)]",
          "source": "src/Network-Riak-JSON-Resolvable.html#putMany",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:putMany\",\"http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:putMany\"]"
        },
        "index": {
          "description": "Store multiple values resolving any vector clock conflicts that arise single invocation of this function may involve several roundtrips to the server to resolve conflicts If any conflicts arise winner will be chosen in each case using resolve and the winners will be stored this will be repeated until either no conflicts occur or fairly large number of retries has been attempted without success For each original value to be stored the final value that was stored at the end of any conflict resolution is returned If this function gives up due to apparently being stuck in loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "putMany",
          "normalized": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,a)]-\u003eW-\u003eDW-\u003eIO[(a,VClock)]",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,c)]-\u003eW-\u003eDW-\u003eIO[(c,VClock)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:putMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore multiple values, resolving any vector clock conflicts that\n arise.  A single invocation of this function may involve several\n roundtrips to the server to resolve conflicts.\n\u003c/p\u003e\u003cp\u003eIf any conflicts arise, a winner will be chosen in each case using\n \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e, and the winners will be stored; this will be repeated\n until either no conflicts occur or a (fairly large) number of\n retries has been attempted without success.\n\u003c/p\u003e\u003cp\u003eIf this function gives up due to apparently being stuck in a loop,\n it will throw a \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "putMany_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [(Key, Maybe VClock, c)] -\u003e W -\u003e DW -\u003e IO ()",
          "source": "src/Network-Riak-JSON-Resolvable.html#putMany_",
          "type": "function"
        },
        "index": {
          "description": "Store multiple values resolving any vector clock conflicts that arise single invocation of this function may involve several roundtrips to the server to resolve conflicts If any conflicts arise winner will be chosen in each case using resolve and the winners will be stored this will be repeated until either no conflicts occur or fairly large number of retries has been attempted without success If this function gives up due to apparently being stuck in loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "putMany_",
          "normalized": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,a)]-\u003eW-\u003eDW-\u003eIO()",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,c)]-\u003eW-\u003eDW-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:putMany_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a single value, automatically resolving any vector clock\n conflicts that arise.  A single invocation of this function may\n involve several roundtrips to the server to resolve conflicts.\n\u003c/p\u003e\u003cp\u003eIf a conflict arises, a winner will be chosen using \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e, and\n the winner will be stored; this will be repeated until no conflict\n occurs or a (fairly large) number of retries has been attempted\n without success.\n\u003c/p\u003e\u003cp\u003eIf this function gives up due to apparently being stuck in a\n conflict resolution loop, it will throw a \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e\n exception.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "put_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e Maybe VClock -\u003e c -\u003e W -\u003e DW -\u003e IO ()",
          "source": "src/Network-Riak-JSON-Resolvable.html#put_",
          "type": "function"
        },
        "index": {
          "description": "Store single value automatically resolving any vector clock conflicts that arise single invocation of this function may involve several roundtrips to the server to resolve conflicts If conflict arises winner will be chosen using resolve and the winner will be stored this will be repeated until no conflict occurs or fairly large number of retries has been attempted without success If this function gives up due to apparently being stuck in conflict resolution loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "put_",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ea-\u003eW-\u003eDW-\u003eIO()",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ec-\u003eW-\u003eDW-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve a conflict between two values.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "resolve",
          "package": "riak",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Network-Riak-Resolvable-Internal.html#resolve",
          "type": "method"
        },
        "index": {
          "description": "Resolve conflict between two values",
          "hierarchy": "Network Riak JSON Resolvable",
          "module": "Network.Riak.JSON.Resolvable",
          "name": "resolve",
          "normalized": "a-\u003ea-\u003ea",
          "package": "riak",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON-Resolvable.html#v:resolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows storage and retrieval of JSON-encoded data.\n\u003c/p\u003e\u003cp\u003eThe functions in this module do not perform any conflict resolution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.JSON",
          "name": "JSON",
          "package": "riak",
          "source": "src/Network-Riak-JSON.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows storage and retrieval of JSON-encoded data The functions in this module do not perform any conflict resolution",
          "hierarchy": "Network Riak JSON",
          "module": "Network.Riak.JSON",
          "name": "JSON",
          "package": "riak",
          "partial": "JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.JSON",
          "name": "JSON",
          "package": "riak",
          "source": "src/Network-Riak-JSON.html#JSON",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak JSON",
          "module": "Network.Riak.JSON",
          "name": "JSON",
          "package": "riak",
          "partial": "JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a value.  This may return multiple conflicting siblings.\n Choosing among them is your responsibility.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON",
          "name": "get",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e R -\u003e IO (Maybe ([c], VClock))",
          "source": "src/Network-Riak-JSON.html#get",
          "type": "function"
        },
        "index": {
          "description": "Retrieve value This may return multiple conflicting siblings Choosing among them is your responsibility",
          "hierarchy": "Network Riak JSON",
          "module": "Network.Riak.JSON",
          "name": "get",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eIO(Maybe([a],VClock))",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eIO(Maybe([c],VClock))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.JSON",
          "name": "getMany",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [Key] -\u003e R -\u003e IO [Maybe ([c], VClock)]",
          "source": "src/Network-Riak-JSON.html#getMany",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak JSON",
          "module": "Network.Riak.JSON",
          "name": "getMany",
          "normalized": "Connection-\u003eBucket-\u003e[Key]-\u003eR-\u003eIO[Maybe([a],VClock)]",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[Key]-\u003eR-\u003eIO[Maybe([c],VClock)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON.html#v:getMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up a value so that it will be encoded and decoded as JSON\n when converted to/from \u003ccode\u003eContent\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON",
          "name": "json",
          "package": "riak",
          "signature": "a -\u003e JSON a",
          "source": "src/Network-Riak-JSON.html#json",
          "type": "function"
        },
        "index": {
          "description": "Wrap up value so that it will be encoded and decoded as JSON when converted to from Content",
          "hierarchy": "Network Riak JSON",
          "module": "Network.Riak.JSON",
          "name": "json",
          "normalized": "a-\u003eJSON a",
          "package": "riak",
          "signature": "a-\u003eJSON a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e-wrapped value.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON",
          "name": "plain",
          "package": "riak",
          "signature": "JSON a -\u003e a",
          "source": "src/Network-Riak-JSON.html#plain",
          "type": "function"
        },
        "index": {
          "description": "Unwrap JSON wrapped value",
          "hierarchy": "Network Riak JSON",
          "module": "Network.Riak.JSON",
          "name": "plain",
          "normalized": "JSON a-\u003ea",
          "package": "riak",
          "signature": "JSON a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON.html#v:plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a single value.  This may return multiple conflicting\n siblings.  Choosing among them, and storing a new value, is your\n responsibility.\n\u003c/p\u003e\u003cp\u003eYou should \u003cem\u003eonly\u003c/em\u003e supply \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e if you are sure\n that the given bucket+key combination does not already exist.  If\n you omit a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e but the bucket+key \u003cem\u003edoes\u003c/em\u003e exist, your value\n will not be stored.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON",
          "name": "put",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e Maybe VClock -\u003e c -\u003e W -\u003e DW -\u003e IO ([c], VClock)",
          "source": "src/Network-Riak-JSON.html#put",
          "type": "function"
        },
        "index": {
          "description": "Store single value This may return multiple conflicting siblings Choosing among them and storing new value is your responsibility You should only supply Nothing as VClock if you are sure that the given bucket key combination does not already exist If you omit VClock but the bucket key does exist your value will not be stored",
          "hierarchy": "Network Riak JSON",
          "module": "Network.Riak.JSON",
          "name": "put",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ea-\u003eW-\u003eDW-\u003eIO([a],VClock)",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ec-\u003eW-\u003eDW-\u003eIO([c],VClock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore many values.  This may return multiple conflicting siblings\n for each value stored.  Choosing among them, and storing a new\n value in each case, is your responsibility.\n\u003c/p\u003e\u003cp\u003eYou should \u003cem\u003eonly\u003c/em\u003e supply \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e if you are sure\n that the given bucket+key combination does not already exist.  If\n you omit a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e but the bucket+key \u003cem\u003edoes\u003c/em\u003e exist, your value\n will not be stored.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON",
          "name": "putMany",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [(Key, Maybe VClock, c)] -\u003e W -\u003e DW -\u003e IO [([c], VClock)]",
          "source": "src/Network-Riak-JSON.html#putMany",
          "type": "function"
        },
        "index": {
          "description": "Store many values This may return multiple conflicting siblings for each value stored Choosing among them and storing new value in each case is your responsibility You should only supply Nothing as VClock if you are sure that the given bucket key combination does not already exist If you omit VClock but the bucket key does exist your value will not be stored",
          "hierarchy": "Network Riak JSON",
          "module": "Network.Riak.JSON",
          "name": "putMany",
          "normalized": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,a)]-\u003eW-\u003eDW-\u003eIO[([a],VClock)]",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,c)]-\u003eW-\u003eDW-\u003eIO[([c],VClock)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON.html#v:putMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore many values, without the possibility of conflict\n resolution.\n\u003c/p\u003e\u003cp\u003eYou should \u003cem\u003eonly\u003c/em\u003e supply \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e if you are sure\n that the given bucket+key combination does not already exist.  If\n you omit a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e but the bucket+key \u003cem\u003edoes\u003c/em\u003e exist, your value\n will not be stored, and you will not be notified.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON",
          "name": "putMany_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [(Key, Maybe VClock, c)] -\u003e W -\u003e DW -\u003e IO ()",
          "source": "src/Network-Riak-JSON.html#putMany_",
          "type": "function"
        },
        "index": {
          "description": "Store many values without the possibility of conflict resolution You should only supply Nothing as VClock if you are sure that the given bucket key combination does not already exist If you omit VClock but the bucket key does exist your value will not be stored and you will not be notified",
          "hierarchy": "Network Riak JSON",
          "module": "Network.Riak.JSON",
          "name": "putMany_",
          "normalized": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,a)]-\u003eW-\u003eDW-\u003eIO()",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,c)]-\u003eW-\u003eDW-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON.html#v:putMany_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a single value, without the possibility of conflict\n resolution.\n\u003c/p\u003e\u003cp\u003eYou should \u003cem\u003eonly\u003c/em\u003e supply \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e if you are sure\n that the given bucket+key combination does not already exist.  If\n you omit a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e but the bucket+key \u003cem\u003edoes\u003c/em\u003e exist, your value\n will not be stored, and you will not be notified.\n\u003c/p\u003e",
          "module": "Network.Riak.JSON",
          "name": "put_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e Maybe VClock -\u003e c -\u003e W -\u003e DW -\u003e IO ()",
          "source": "src/Network-Riak-JSON.html#put_",
          "type": "function"
        },
        "index": {
          "description": "Store single value without the possibility of conflict resolution You should only supply Nothing as VClock if you are sure that the given bucket key combination does not already exist If you omit VClock but the bucket key does exist your value will not be stored and you will not be notified",
          "hierarchy": "Network Riak JSON",
          "module": "Network.Riak.JSON",
          "name": "put_",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ea-\u003eW-\u003eDW-\u003eIO()",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ec-\u003eW-\u003eDW-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-JSON.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSmart constructors for Riak types.  These functions correctly\n URL-escape bucket, key, and link names.  You should thus use them\n in preference to the raw data constructors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Request",
          "name": "Request",
          "package": "riak",
          "source": "src/Network-Riak-Request.html",
          "type": "module"
        },
        "index": {
          "description": "Smart constructors for Riak types These functions correctly URL-escape bucket key and link names You should thus use them in preference to the raw data constructors",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "Request",
          "package": "riak",
          "partial": "Request",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "DeleteRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "DeleteRequest",
          "package": "riak",
          "partial": "Delete Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:DeleteRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "GetBucketRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "GetBucketRequest",
          "package": "riak",
          "partial": "Get Bucket Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:GetBucketRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "GetClientIDRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "GetClientIDRequest",
          "package": "riak",
          "partial": "Get Client IDRequest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:GetClientIDRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "GetRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "GetRequest",
          "package": "riak",
          "partial": "Get Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:GetRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "GetServerInfoRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "GetServerInfoRequest",
          "package": "riak",
          "partial": "Get Server Info Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:GetServerInfoRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "Link",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "Link",
          "package": "riak",
          "partial": "Link",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "ListBucketsRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "ListBucketsRequest",
          "package": "riak",
          "partial": "List Buckets Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:ListBucketsRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "ListKeysRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "ListKeysRequest",
          "package": "riak",
          "partial": "List Keys Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:ListKeysRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "MapReduceRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "MapReduceRequest",
          "package": "riak",
          "partial": "Map Reduce Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:MapReduceRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "PingRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "PingRequest",
          "package": "riak",
          "partial": "Ping Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:PingRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "PutRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "PutRequest",
          "package": "riak",
          "partial": "Put Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:PutRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Request",
          "name": "SetBucketRequest",
          "package": "riak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "SetBucketRequest",
          "package": "riak",
          "partial": "Set Bucket Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#t:SetBucketRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a delete request.  The bucket and key names are URL-escaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "delete",
          "package": "riak",
          "signature": "Bucket -\u003e Key -\u003e RW -\u003e DeleteRequest",
          "source": "src/Network-Riak-Request.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Create delete request The bucket and key names are URL-escaped",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "delete",
          "normalized": "Bucket-\u003eKey-\u003eRW-\u003eDeleteRequest",
          "package": "riak",
          "signature": "Bucket-\u003eKey-\u003eRW-\u003eDeleteRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a get request.  The bucket and key names are URL-escaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "get",
          "package": "riak",
          "signature": "Bucket -\u003e Key -\u003e R -\u003e GetRequest",
          "source": "src/Network-Riak-Request.html#get",
          "type": "function"
        },
        "index": {
          "description": "Create get request The bucket and key names are URL-escaped",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "get",
          "normalized": "Bucket-\u003eKey-\u003eR-\u003eGetRequest",
          "package": "riak",
          "signature": "Bucket-\u003eKey-\u003eR-\u003eGetRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a get-bucket request.  The bucket name is URL-escaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "getBucket",
          "package": "riak",
          "signature": "Bucket -\u003e GetBucketRequest",
          "source": "src/Network-Riak-Request.html#getBucket",
          "type": "function"
        },
        "index": {
          "description": "Create get-bucket request The bucket name is URL-escaped",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "getBucket",
          "normalized": "Bucket-\u003eGetBucketRequest",
          "package": "riak",
          "partial": "Bucket",
          "signature": "Bucket-\u003eGetBucketRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:getBucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a client-ID request.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "getClientID",
          "package": "riak",
          "signature": "GetClientIDRequest",
          "source": "src/Network-Riak-Request.html#getClientID",
          "type": "function"
        },
        "index": {
          "description": "Create client-ID request",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "getClientID",
          "package": "riak",
          "partial": "Client ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:getClientID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a server-info request.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "getServerInfo",
          "package": "riak",
          "signature": "GetServerInfoRequest",
          "source": "src/Network-Riak-Request.html#getServerInfo",
          "type": "function"
        },
        "index": {
          "description": "Create server-info request",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "getServerInfo",
          "package": "riak",
          "partial": "Server Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:getServerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a link.  The bucket and key names are URL-escaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "link",
          "package": "riak",
          "signature": "Bucket -\u003e Key -\u003e Tag -\u003e Link",
          "source": "src/Network-Riak-Request.html#link",
          "type": "function"
        },
        "index": {
          "description": "Create link The bucket and key names are URL-escaped",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "link",
          "normalized": "Bucket-\u003eKey-\u003eTag-\u003eLink",
          "package": "riak",
          "signature": "Bucket-\u003eKey-\u003eTag-\u003eLink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list-buckets request.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "listBuckets",
          "package": "riak",
          "signature": "ListBucketsRequest",
          "source": "src/Network-Riak-Request.html#listBuckets",
          "type": "function"
        },
        "index": {
          "description": "Create list-buckets request",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "listBuckets",
          "package": "riak",
          "partial": "Buckets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:listBuckets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list-keys request.  The bucket name is URL-escaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "listKeys",
          "package": "riak",
          "signature": "Bucket -\u003e ListKeysRequest",
          "source": "src/Network-Riak-Request.html#listKeys",
          "type": "function"
        },
        "index": {
          "description": "Create list-keys request The bucket name is URL-escaped",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "listKeys",
          "normalized": "Bucket-\u003eListKeysRequest",
          "package": "riak",
          "partial": "Keys",
          "signature": "Bucket-\u003eListKeysRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:listKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a map-reduce request.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "mapReduce",
          "package": "riak",
          "signature": "Job -\u003e MapReduceRequest",
          "source": "src/Network-Riak-Request.html#mapReduce",
          "type": "function"
        },
        "index": {
          "description": "Create map-reduce request",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "mapReduce",
          "normalized": "Job-\u003eMapReduceRequest",
          "package": "riak",
          "partial": "Reduce",
          "signature": "Job-\u003eMapReduceRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:mapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a ping request.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "ping",
          "package": "riak",
          "signature": "PingRequest",
          "source": "src/Network-Riak-Request.html#ping",
          "type": "function"
        },
        "index": {
          "description": "Create ping request",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "ping",
          "package": "riak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a put request.  The bucket and key names are URL-escaped.\n Any \u003ccode\u003eLink\u003c/code\u003e values inside the \u003ccode\u003e\u003ca\u003eContent\u003c/a\u003e\u003c/code\u003e are assumed to have been\n constructed with the \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e function, and hence \u003cem\u003enot\u003c/em\u003e escaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "put",
          "package": "riak",
          "signature": "Bucket -\u003e Key -\u003e Maybe VClock -\u003e Content -\u003e W -\u003e DW -\u003e Bool -\u003e PutRequest",
          "source": "src/Network-Riak-Request.html#put",
          "type": "function"
        },
        "index": {
          "description": "Create put request The bucket and key names are URL-escaped Any Link values inside the Content are assumed to have been constructed with the link function and hence not escaped",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "put",
          "normalized": "Bucket-\u003eKey-\u003eMaybe VClock-\u003eContent-\u003eW-\u003eDW-\u003eBool-\u003ePutRequest",
          "package": "riak",
          "signature": "Bucket-\u003eKey-\u003eMaybe VClock-\u003eContent-\u003eW-\u003eDW-\u003eBool-\u003ePutRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a set-bucket request.  The bucket name is URL-escaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Request",
          "name": "setBucket",
          "package": "riak",
          "signature": "Bucket -\u003e BucketProps -\u003e SetBucketRequest",
          "source": "src/Network-Riak-Request.html#setBucket",
          "type": "function"
        },
        "index": {
          "description": "Create set-bucket request The bucket name is URL-escaped",
          "hierarchy": "Network Riak Request",
          "module": "Network.Riak.Request",
          "name": "setBucket",
          "normalized": "Bucket-\u003eBucketProps-\u003eSetBucketRequest",
          "package": "riak",
          "partial": "Bucket",
          "signature": "Bucket-\u003eBucketProps-\u003eSetBucketRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Request.html#v:setBucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStorage and retrieval of data with automatic conflict resolution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "source": "src/Network-Riak-Resolvable.html",
          "type": "module"
        },
        "index": {
          "description": "Storage and retrieval of data with automatic conflict resolution",
          "hierarchy": "Network Riak Resolvable",
          "module": "Network.Riak.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "partial": "Resolvable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Resolvable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomated conflict resolution failed.\n\u003c/p\u003e",
          "module": "Network.Riak.Resolvable",
          "name": "ResolutionFailure",
          "package": "riak",
          "source": "src/Network-Riak-Resolvable-Internal.html#ResolutionFailure",
          "type": "data"
        },
        "index": {
          "description": "Automated conflict resolution failed",
          "hierarchy": "Network Riak Resolvable",
          "module": "Network.Riak.Resolvable",
          "name": "ResolutionFailure",
          "package": "riak",
          "partial": "Resolution Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Resolvable.html#t:ResolutionFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can automatically resolve a vector clock conflict\n between two or more versions of a value.\n\u003c/p\u003e\u003cp\u003eInstances must be symmetric in their behaviour, such that the\n following law is obeyed:\n\u003c/p\u003e\u003cpre\u003e resolve a b == resolve b a\n\u003c/pre\u003e\u003cp\u003eOtherwise, there are no restrictions on the behaviour of \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e.\n The result may be \u003ccode\u003ea\u003c/code\u003e, \u003ccode\u003eb\u003c/code\u003e, a value derived from \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, or\n something else.\n\u003c/p\u003e\u003cp\u003eIf several conflicting siblings are found, \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e will be\n applied over all of them using a fold, to yield a single\n \"winner\".\n\u003c/p\u003e",
          "module": "Network.Riak.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "source": "src/Network-Riak-Resolvable-Internal.html#Resolvable",
          "type": "class"
        },
        "index": {
          "description": "type that can automatically resolve vector clock conflict between two or more versions of value Instances must be symmetric in their behaviour such that the following law is obeyed resolve resolve Otherwise there are no restrictions on the behaviour of resolve The result may be value derived from and or something else If several conflicting siblings are found resolve will be applied over all of them using fold to yield single winner",
          "hierarchy": "Network Riak Resolvable",
          "module": "Network.Riak.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "partial": "Resolvable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Resolvable.html#t:Resolvable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper that uses the \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e method of a type's\n \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance to perform vector clock conflict resolution.\n\u003c/p\u003e",
          "module": "Network.Riak.Resolvable",
          "name": "ResolvableMonoid",
          "package": "riak",
          "source": "src/Network-Riak-Resolvable-Internal.html#ResolvableMonoid",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper that uses the mappend method of type Monoid instance to perform vector clock conflict resolution",
          "hierarchy": "Network Riak Resolvable",
          "module": "Network.Riak.Resolvable",
          "name": "ResolvableMonoid",
          "package": "riak",
          "partial": "Resolvable Monoid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Resolvable.html#t:ResolvableMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Resolvable",
          "name": "RM",
          "package": "riak",
          "signature": "RM",
          "source": "src/Network-Riak-Resolvable-Internal.html#ResolvableMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Resolvable",
          "module": "Network.Riak.Resolvable",
          "name": "RM",
          "package": "riak",
          "partial": "RM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Resolvable.html#v:RM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve a conflict between two values.\n\u003c/p\u003e",
          "module": "Network.Riak.Resolvable",
          "name": "resolve",
          "package": "riak",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Network-Riak-Resolvable-Internal.html#resolve",
          "type": "method"
        },
        "index": {
          "description": "Resolve conflict between two values",
          "hierarchy": "Network Riak Resolvable",
          "module": "Network.Riak.Resolvable",
          "name": "resolve",
          "normalized": "a-\u003ea-\u003ea",
          "package": "riak",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Resolvable.html#v:resolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Resolvable",
          "name": "unRM",
          "package": "riak",
          "signature": "a",
          "source": "src/Network-Riak-Resolvable-Internal.html#ResolvableMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Resolvable",
          "module": "Network.Riak.Resolvable",
          "name": "unRM",
          "package": "riak",
          "partial": "RM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Resolvable.html#v:unRM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSmart deconstructors for Riak types.  These functions correctly\n URL-unescape bucket, key, and link names.  You should thus use them\n in preference to direct pattern matching against raw data\n constructors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Response",
          "name": "Response",
          "package": "riak",
          "source": "src/Network-Riak-Response.html",
          "type": "module"
        },
        "index": {
          "description": "Smart deconstructors for Riak types These functions correctly URL-unescape bucket key and link names You should thus use them in preference to direct pattern matching against raw data constructors",
          "hierarchy": "Network Riak Response",
          "module": "Network.Riak.Response",
          "name": "Response",
          "package": "riak",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a get response.  Bucket and key names in links are\n URL-unescaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Response",
          "name": "get",
          "package": "riak",
          "signature": "Maybe GetResponse -\u003e Maybe (Seq Content, VClock)",
          "source": "src/Network-Riak-Response.html#get",
          "type": "function"
        },
        "index": {
          "description": "Construct get response Bucket and key names in links are URL-unescaped",
          "hierarchy": "Network Riak Response",
          "module": "Network.Riak.Response",
          "name": "get",
          "normalized": "Maybe GetResponse-\u003eMaybe(Seq Content,VClock)",
          "package": "riak",
          "signature": "Maybe GetResponse-\u003eMaybe(Seq Content,VClock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Response.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Response",
          "name": "getBucket",
          "package": "riak",
          "signature": "GetBucketResponse -\u003e BucketProps",
          "source": "src/Network-Riak-Response.html#getBucket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Response",
          "module": "Network.Riak.Response",
          "name": "getBucket",
          "normalized": "GetBucketResponse-\u003eBucketProps",
          "package": "riak",
          "partial": "Bucket",
          "signature": "GetBucketResponse-\u003eBucketProps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Response.html#v:getBucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Response",
          "name": "getClientID",
          "package": "riak",
          "signature": "GetClientIDResponse -\u003e ClientID",
          "source": "src/Network-Riak-Response.html#getClientID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Response",
          "module": "Network.Riak.Response",
          "name": "getClientID",
          "normalized": "GetClientIDResponse-\u003eClientID",
          "package": "riak",
          "partial": "Client ID",
          "signature": "GetClientIDResponse-\u003eClientID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Response.html#v:getClientID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a list-buckets response.  Bucket names are unescaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Response",
          "name": "listBuckets",
          "package": "riak",
          "signature": "ListBucketsResponse -\u003e Seq Bucket",
          "source": "src/Network-Riak-Response.html#listBuckets",
          "type": "function"
        },
        "index": {
          "description": "Construct list-buckets response Bucket names are unescaped",
          "hierarchy": "Network Riak Response",
          "module": "Network.Riak.Response",
          "name": "listBuckets",
          "normalized": "ListBucketsResponse-\u003eSeq Bucket",
          "package": "riak",
          "partial": "Buckets",
          "signature": "ListBucketsResponse-\u003eSeq Bucket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Response.html#v:listBuckets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a put response.  Bucket and key names in links are\n URL-unescaped.\n\u003c/p\u003e",
          "module": "Network.Riak.Response",
          "name": "put",
          "package": "riak",
          "signature": "PutResponse -\u003e (Seq Content, VClock)",
          "source": "src/Network-Riak-Response.html#put",
          "type": "function"
        },
        "index": {
          "description": "Construct put response Bucket and key names in links are URL-unescaped",
          "hierarchy": "Network Riak Response",
          "module": "Network.Riak.Response",
          "name": "put",
          "normalized": "PutResponse-\u003e(Seq Content,VClock)",
          "package": "riak",
          "signature": "PutResponse-\u003e(Seq Content,VClock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Response.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL-unescape the names of keys and buckets in the links of a\n \u003ccode\u003e\u003ca\u003eContent\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Network.Riak.Response",
          "name": "unescapeLinks",
          "package": "riak",
          "signature": "Content -\u003e Content",
          "source": "src/Network-Riak-Response.html#unescapeLinks",
          "type": "function"
        },
        "index": {
          "description": "URL-unescape the names of keys and buckets in the links of Content value",
          "hierarchy": "Network Riak Response",
          "module": "Network.Riak.Response",
          "name": "unescapeLinks",
          "normalized": "Content-\u003eContent",
          "package": "riak",
          "partial": "Links",
          "signature": "Content-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Response.html#v:unescapeLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Types",
          "name": "Types",
          "package": "riak",
          "source": "src/Network-Riak-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Basic types",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Types",
          "package": "riak",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bucket is a container and keyspace for data stored in Riak,\n with a set of common properties for its contents (the number of\n replicas, for instance).\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "Bucket",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Bucket",
          "type": "type"
        },
        "index": {
          "description": "Bucket is container and keyspace for data stored in Riak with set of common properties for its contents the number of replicas for instance",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Bucket",
          "package": "riak",
          "partial": "Bucket",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Bucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "Client",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Client",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Client",
          "package": "riak",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA client identifier.  This is used by the Riak cluster when\n logging vector clock changes, and should be unique for each client.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "ClientID",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#ClientID",
          "type": "type"
        },
        "index": {
          "description": "client identifier This is used by the Riak cluster when logging vector clock changes and should be unique for each client",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "ClientID",
          "package": "riak",
          "partial": "Client ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:ClientID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA connection to a Riak server.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "Connection",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "connection to Riak server",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Connection",
          "package": "riak",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDurable write quorum.  How many replicas to commit to durable\n storage before returning a successful response.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "DW",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#DW",
          "type": "type"
        },
        "index": {
          "description": "Durable write quorum How many replicas to commit to durable storage before returning successful response",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "DW",
          "package": "riak",
          "partial": "DW",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:DW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "Exchange",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Exchange",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Exchange",
          "package": "riak",
          "partial": "Exchange",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Exchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specification of a MapReduce\n job. \u003ca\u003ehttp://wiki.basho.com/MapReduce.html\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "Job",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Job",
          "type": "data"
        },
        "index": {
          "description": "specification of MapReduce job http wiki.basho.com MapReduce.html",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Job",
          "package": "riak",
          "partial": "Job",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Job"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeys are unique object identifiers in Riak and are scoped within\n buckets.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "Key",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Key",
          "type": "type"
        },
        "index": {
          "description": "Keys are unique object identifiers in Riak and are scoped within buckets",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Key",
          "package": "riak",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifier for an inbound or outbound message.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "MessageTag",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "data"
        },
        "index": {
          "description": "An identifier for an inbound or outbound message",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "MessageTag",
          "package": "riak",
          "partial": "Message Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:MessageTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA read/write quorum.  The quantity of replicas that must respond\n to a read or write request before it is considered successful. This\n is defined as a bucket property or as one of the relevant\n parameters to a single request (\u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eW\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eDW\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eRW\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "Quorum",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Quorum",
          "type": "data"
        },
        "index": {
          "description": "read write quorum The quantity of replicas that must respond to read or write request before it is considered successful This is defined as bucket property or as one of the relevant parameters to single request DW RW",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Quorum",
          "package": "riak",
          "partial": "Quorum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Quorum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead quorum.  How many replicas need to agree when retrieving a\n value.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "R",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#R",
          "type": "type"
        },
        "index": {
          "description": "Read quorum How many replicas need to agree when retrieving value",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "R",
          "package": "riak",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead/write quorum.  How many replicas need to collaborate when\n deleting a value.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "RW",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#RW",
          "type": "type"
        },
        "index": {
          "description": "Read write quorum How many replicas need to collaborate when deleting value",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "RW",
          "package": "riak",
          "partial": "RW",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:RW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA message representing a request from client to server.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "Request",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Request",
          "type": "class"
        },
        "index": {
          "description": "message representing request from client to server",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Request",
          "package": "riak",
          "partial": "Request",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA message representing a response from server to client.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "Response",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Response",
          "type": "class"
        },
        "index": {
          "description": "message representing response from server to client",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Response",
          "package": "riak",
          "partial": "Response",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main Riak exception type.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "RiakException",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#RiakException",
          "type": "data"
        },
        "index": {
          "description": "The main Riak exception type",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "RiakException",
          "package": "riak",
          "partial": "Riak Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:RiakException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn application-specific identifier for a link.  See\n \u003ca\u003ehttp://wiki.basho.com/Links.html\u003c/a\u003e for details.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "Tag",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Tag",
          "type": "type"
        },
        "index": {
          "description": "An application-specific identifier for link See http wiki.basho.com Links.html for details",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Tag",
          "package": "riak",
          "partial": "Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessages are tagged.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "Tagged",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Tagged",
          "type": "class"
        },
        "index": {
          "description": "Messages are tagged",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Tagged",
          "package": "riak",
          "partial": "Tagged",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:Tagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper that keeps Riak vector clocks opaque.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "VClock",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#VClock",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper that keeps Riak vector clocks opaque",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "VClock",
          "package": "riak",
          "partial": "VClock",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:VClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite quorum.  How many replicas to write to before returning a\n successful response.\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "W",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#W",
          "type": "type"
        },
        "index": {
          "description": "Write quorum How many replicas to write to before returning successful response",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "W",
          "package": "riak",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#t:W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "DeleteRequest",
          "package": "riak",
          "signature": "DeleteRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "DeleteRequest",
          "package": "riak",
          "partial": "Delete Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:DeleteRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "DeleteResponse",
          "package": "riak",
          "signature": "DeleteResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "DeleteResponse",
          "package": "riak",
          "partial": "Delete Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:DeleteResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "Erlang",
          "package": "riak",
          "signature": "Erlang ByteString",
          "source": "src/Network-Riak-Types-Internal.html#Job",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "Erlang",
          "package": "riak",
          "partial": "Erlang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:Erlang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "ErrorResponse",
          "package": "riak",
          "signature": "ErrorResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "ErrorResponse",
          "package": "riak",
          "partial": "Error Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:ErrorResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "GetBucketRequest",
          "package": "riak",
          "signature": "GetBucketRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "GetBucketRequest",
          "package": "riak",
          "partial": "Get Bucket Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:GetBucketRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "GetBucketResponse",
          "package": "riak",
          "signature": "GetBucketResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "GetBucketResponse",
          "package": "riak",
          "partial": "Get Bucket Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:GetBucketResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "GetClientIDRequest",
          "package": "riak",
          "signature": "GetClientIDRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "GetClientIDRequest",
          "package": "riak",
          "partial": "Get Client IDRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:GetClientIDRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "GetClientIDResponse",
          "package": "riak",
          "signature": "GetClientIDResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "GetClientIDResponse",
          "package": "riak",
          "partial": "Get Client IDResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:GetClientIDResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "GetRequest",
          "package": "riak",
          "signature": "GetRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "GetRequest",
          "package": "riak",
          "partial": "Get Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:GetRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "GetResponse",
          "package": "riak",
          "signature": "GetResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "GetResponse",
          "package": "riak",
          "partial": "Get Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:GetResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "GetServerInfoRequest",
          "package": "riak",
          "signature": "GetServerInfoRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "GetServerInfoRequest",
          "package": "riak",
          "partial": "Get Server Info Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:GetServerInfoRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "GetServerInfoResponse",
          "package": "riak",
          "signature": "GetServerInfoResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "GetServerInfoResponse",
          "package": "riak",
          "partial": "Get Server Info Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:GetServerInfoResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "JSON",
          "package": "riak",
          "signature": "JSON ByteString",
          "source": "src/Network-Riak-Types-Internal.html#Job",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "JSON",
          "package": "riak",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "ListBucketsRequest",
          "package": "riak",
          "signature": "ListBucketsRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "ListBucketsRequest",
          "package": "riak",
          "partial": "List Buckets Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:ListBucketsRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "ListBucketsResponse",
          "package": "riak",
          "signature": "ListBucketsResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "ListBucketsResponse",
          "package": "riak",
          "partial": "List Buckets Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:ListBucketsResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "ListKeysRequest",
          "package": "riak",
          "signature": "ListKeysRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "ListKeysRequest",
          "package": "riak",
          "partial": "List Keys Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:ListKeysRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "ListKeysResponse",
          "package": "riak",
          "signature": "ListKeysResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "ListKeysResponse",
          "package": "riak",
          "partial": "List Keys Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:ListKeysResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "MapReduceRequest",
          "package": "riak",
          "signature": "MapReduceRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "MapReduceRequest",
          "package": "riak",
          "partial": "Map Reduce Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:MapReduceRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "MapReduceResponse",
          "package": "riak",
          "signature": "MapReduceResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "MapReduceResponse",
          "package": "riak",
          "partial": "Map Reduce Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:MapReduceResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "PingRequest",
          "package": "riak",
          "signature": "PingRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "PingRequest",
          "package": "riak",
          "partial": "Ping Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:PingRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "PingResponse",
          "package": "riak",
          "signature": "PingResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "PingResponse",
          "package": "riak",
          "partial": "Ping Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:PingResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "PutRequest",
          "package": "riak",
          "signature": "PutRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "PutRequest",
          "package": "riak",
          "partial": "Put Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:PutRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "PutResponse",
          "package": "riak",
          "signature": "PutResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "PutResponse",
          "package": "riak",
          "partial": "Put Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:PutResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "SetBucketRequest",
          "package": "riak",
          "signature": "SetBucketRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "SetBucketRequest",
          "package": "riak",
          "partial": "Set Bucket Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:SetBucketRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "SetBucketResponse",
          "package": "riak",
          "signature": "SetBucketResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "SetBucketResponse",
          "package": "riak",
          "partial": "Set Bucket Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:SetBucketResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "SetClientIDRequest",
          "package": "riak",
          "signature": "SetClientIDRequest",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "SetClientIDRequest",
          "package": "riak",
          "partial": "Set Client IDRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:SetClientIDRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "SetClientIDResponse",
          "package": "riak",
          "signature": "SetClientIDResponse",
          "source": "src/Network-Riak-Types-Internal.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "SetClientIDResponse",
          "package": "riak",
          "partial": "Set Client IDResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:SetClientIDResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "VClock",
          "package": "riak",
          "signature": "VClock",
          "source": "src/Network-Riak-Types-Internal.html#VClock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "VClock",
          "package": "riak",
          "partial": "VClock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:VClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  (This is really only useful for\n printing the raw vclock string.)\n\u003c/p\u003e",
          "module": "Network.Riak.Types",
          "name": "fromVClock",
          "package": "riak",
          "signature": "ByteString",
          "source": "src/Network-Riak-Types-Internal.html#VClock",
          "type": "function"
        },
        "index": {
          "description": "Unwrap the ByteString This is really only useful for printing the raw vclock string",
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "fromVClock",
          "package": "riak",
          "partial": "VClock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:fromVClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Types",
          "name": "messageTag",
          "package": "riak",
          "signature": "messageTag",
          "source": "src/Network-Riak-Types-Internal.html#messageTag",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Riak Types",
          "module": "Network.Riak.Types",
          "name": "messageTag",
          "package": "riak",
          "partial": "Tag",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Types.html#v:messageTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows storage and retrieval of data encoded using the\n \u003ccode\u003e\u003ca\u003eIsContent\u003c/a\u003e\u003c/code\u003e typeclass.  This provides access to more of Riak's\n storage features than JSON, e.g. links.\n\u003c/p\u003e\u003cp\u003eFunctions automatically resolve conflicts using \u003ccode\u003e\u003ca\u003eResolvable\u003c/a\u003e\u003c/code\u003e\n instances.  For instance, if a \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e returns three siblings, a\n winner will be chosen using \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e.  If a \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e results in a\n conflict, a winner will be chosen using \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e, and the winner\n will be \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e; this will be repeated until either no conflict\n occurs or the process has been repeated too many times.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "source": "src/Network-Riak-Value-Resolvable.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows storage and retrieval of data encoded using the IsContent typeclass This provides access to more of Riak storage features than JSON e.g links Functions automatically resolve conflicts using Resolvable instances For instance if get returns three siblings winner will be chosen using resolve If put results in conflict winner will be chosen using resolve and the winner will be put this will be repeated until either no conflict occurs or the process has been repeated too many times",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "partial": "Resolvable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Value.Resolvable",
          "name": "IsContent",
          "package": "riak",
          "source": "src/Network-Riak-Value.html#IsContent",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "IsContent",
          "package": "riak",
          "partial": "Is Content",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#t:IsContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomated conflict resolution failed.\n\u003c/p\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "ResolutionFailure",
          "package": "riak",
          "source": "src/Network-Riak-Resolvable-Internal.html#ResolutionFailure",
          "type": "data"
        },
        "index": {
          "description": "Automated conflict resolution failed",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "ResolutionFailure",
          "package": "riak",
          "partial": "Resolution Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#t:ResolutionFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can automatically resolve a vector clock conflict\n between two or more versions of a value.\n\u003c/p\u003e\u003cp\u003eInstances must be symmetric in their behaviour, such that the\n following law is obeyed:\n\u003c/p\u003e\u003cpre\u003e resolve a b == resolve b a\n\u003c/pre\u003e\u003cp\u003eOtherwise, there are no restrictions on the behaviour of \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e.\n The result may be \u003ccode\u003ea\u003c/code\u003e, \u003ccode\u003eb\u003c/code\u003e, a value derived from \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, or\n something else.\n\u003c/p\u003e\u003cp\u003eIf several conflicting siblings are found, \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e will be\n applied over all of them using a fold, to yield a single\n \"winner\".\n\u003c/p\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "source": "src/Network-Riak-Resolvable-Internal.html#Resolvable",
          "type": "class"
        },
        "index": {
          "description": "type that can automatically resolve vector clock conflict between two or more versions of value Instances must be symmetric in their behaviour such that the following law is obeyed resolve resolve Otherwise there are no restrictions on the behaviour of resolve The result may be value derived from and or something else If several conflicting siblings are found resolve will be applied over all of them using fold to yield single winner",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "Resolvable",
          "package": "riak",
          "partial": "Resolvable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#t:Resolvable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a single value.  If conflicting values are returned, the\n \u003ccode\u003e\u003ca\u003eResolvable\u003c/a\u003e\u003c/code\u003e is used to choose a winner.\n\u003c/p\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "get",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e R -\u003e IO (Maybe (a, VClock))",
          "source": "src/Network-Riak-Value-Resolvable.html#get",
          "type": "function"
        },
        "index": {
          "description": "Retrieve single value If conflicting values are returned the Resolvable is used to choose winner",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "get",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eIO(Maybe(a,VClock))",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eIO(Maybe(a,VClock))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve multiple values.  If conflicting values are returned for\n a key, the \u003ccode\u003e\u003ca\u003eResolvable\u003c/a\u003e\u003c/code\u003e is used to choose a winner.\n\u003c/p\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "getMany",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [Key] -\u003e R -\u003e IO [Maybe (a, VClock)]",
          "source": "src/Network-Riak-Value-Resolvable.html#getMany",
          "type": "function"
        },
        "index": {
          "description": "Retrieve multiple values If conflicting values are returned for key the Resolvable is used to choose winner",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "getMany",
          "normalized": "Connection-\u003eBucket-\u003e[Key]-\u003eR-\u003eIO[Maybe(a,VClock)]",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[Key]-\u003eR-\u003eIO[Maybe(a,VClock)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:getMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a single value.  The value, if any, is retrieved using\n \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e; conflict resolution is performed if necessary.  The\n modification function is called on the resulting value, and its\n result is stored using \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, which may again perform conflict\n resolution.\n\u003c/p\u003e\u003cp\u003eThe result of this function is whatever was returned by \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e phase of this function gives up due to apparently\n being stuck in a conflict resolution loop, it will throw a\n \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "modify_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e R -\u003e W -\u003e DW -\u003e (Maybe a -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Riak-Value-Resolvable.html#modify_",
          "type": "function"
        },
        "index": {
          "description": "Modify single value The value if any is retrieved using get conflict resolution is performed if necessary The modification function is called on the resulting value and its result is stored using put which may again perform conflict resolution The result of this function is whatever was returned by put If the put phase of this function gives up due to apparently being stuck in conflict resolution loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "modify_",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eW-\u003eDW-\u003e(Maybe a-\u003eIO a)-\u003eIO a",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eW-\u003eDW-\u003e(Maybe a-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:modify_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Value.Resolvable",
          "name": "parseContent",
          "package": "riak",
          "signature": "Content -\u003e Parser c",
          "source": "src/Network-Riak-Value.html#parseContent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "parseContent",
          "normalized": "Content-\u003eParser a",
          "package": "riak",
          "partial": "Content",
          "signature": "Content-\u003eParser c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:parseContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a single value, automatically resolving any vector clock\n conflicts that arise.  A single invocation of this function may\n involve several roundtrips to the server to resolve conflicts.\n\u003c/p\u003e\u003cp\u003eIf a conflict arises, a winner will be chosen using \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e, and\n the winner will be stored; this will be repeated until no conflict\n occurs or a (fairly large) number of retries has been attempted\n without success.\n\u003c/p\u003e\u003cp\u003eIf this function gives up due to apparently being stuck in a\n conflict resolution loop, it will throw a \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e\n exception.\n\u003c/p\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "put",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e Maybe VClock -\u003e a -\u003e W -\u003e DW -\u003e IO (a, VClock)",
          "source": "src/Network-Riak-Value-Resolvable.html#put",
          "type": "function"
        },
        "index": {
          "description": "Store single value automatically resolving any vector clock conflicts that arise single invocation of this function may involve several roundtrips to the server to resolve conflicts If conflict arises winner will be chosen using resolve and the winner will be stored this will be repeated until no conflict occurs or fairly large number of retries has been attempted without success If this function gives up due to apparently being stuck in conflict resolution loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "put",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ea-\u003eW-\u003eDW-\u003eIO(a,VClock)",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ea-\u003eW-\u003eDW-\u003eIO(a,VClock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore multiple values, resolving any vector clock conflicts that\n arise.  A single invocation of this function may involve several\n roundtrips to the server to resolve conflicts.\n\u003c/p\u003e\u003cp\u003eIf any conflicts arise, a winner will be chosen in each case using\n \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e, and the winners will be stored; this will be repeated\n until either no conflicts occur or a (fairly large) number of\n retries has been attempted without success.\n\u003c/p\u003e\u003cp\u003eFor each original value to be stored, the final value that was\n stored at the end of any conflict resolution is returned.\n\u003c/p\u003e\u003cp\u003eIf this function gives up due to apparently being stuck in a loop,\n it will throw a \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "putMany",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [(Key, Maybe VClock, a)] -\u003e W -\u003e DW -\u003e IO [(a, VClock)]",
          "source": "src/Network-Riak-Value-Resolvable.html#putMany",
          "type": "function"
        },
        "index": {
          "description": "Store multiple values resolving any vector clock conflicts that arise single invocation of this function may involve several roundtrips to the server to resolve conflicts If any conflicts arise winner will be chosen in each case using resolve and the winners will be stored this will be repeated until either no conflicts occur or fairly large number of retries has been attempted without success For each original value to be stored the final value that was stored at the end of any conflict resolution is returned If this function gives up due to apparently being stuck in loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "putMany",
          "normalized": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,a)]-\u003eW-\u003eDW-\u003eIO[(a,VClock)]",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,a)]-\u003eW-\u003eDW-\u003eIO[(a,VClock)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:putMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore multiple values, resolving any vector clock conflicts that\n arise.  A single invocation of this function may involve several\n roundtrips to the server to resolve conflicts.\n\u003c/p\u003e\u003cp\u003eIf any conflicts arise, a winner will be chosen in each case using\n \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e, and the winners will be stored; this will be repeated\n until either no conflicts occur or a (fairly large) number of\n retries has been attempted without success.\n\u003c/p\u003e\u003cp\u003eIf this function gives up due to apparently being stuck in a loop,\n it will throw a \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "putMany_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [(Key, Maybe VClock, a)] -\u003e W -\u003e DW -\u003e IO ()",
          "source": "src/Network-Riak-Value-Resolvable.html#putMany_",
          "type": "function"
        },
        "index": {
          "description": "Store multiple values resolving any vector clock conflicts that arise single invocation of this function may involve several roundtrips to the server to resolve conflicts If any conflicts arise winner will be chosen in each case using resolve and the winners will be stored this will be repeated until either no conflicts occur or fairly large number of retries has been attempted without success If this function gives up due to apparently being stuck in loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "putMany_",
          "normalized": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,a)]-\u003eW-\u003eDW-\u003eIO()",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,a)]-\u003eW-\u003eDW-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:putMany_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a single value, automatically resolving any vector clock\n conflicts that arise.  A single invocation of this function may\n involve several roundtrips to the server to resolve conflicts.\n\u003c/p\u003e\u003cp\u003eIf a conflict arises, a winner will be chosen using \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e, and\n the winner will be stored; this will be repeated until no conflict\n occurs or a (fairly large) number of retries has been attempted\n without success.\n\u003c/p\u003e\u003cp\u003eIf this function gives up due to apparently being stuck in a\n conflict resolution loop, it will throw a \u003ccode\u003e\u003ca\u003eResolutionFailure\u003c/a\u003e\u003c/code\u003e\n exception.\n\u003c/p\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "put_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e Maybe VClock -\u003e a -\u003e W -\u003e DW -\u003e IO ()",
          "source": "src/Network-Riak-Value-Resolvable.html#put_",
          "type": "function"
        },
        "index": {
          "description": "Store single value automatically resolving any vector clock conflicts that arise single invocation of this function may involve several roundtrips to the server to resolve conflicts If conflict arises winner will be chosen using resolve and the winner will be stored this will be repeated until no conflict occurs or fairly large number of retries has been attempted without success If this function gives up due to apparently being stuck in conflict resolution loop it will throw ResolutionFailure exception",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "put_",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ea-\u003eW-\u003eDW-\u003eIO()",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ea-\u003eW-\u003eDW-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve a conflict between two values.\n\u003c/p\u003e",
          "module": "Network.Riak.Value.Resolvable",
          "name": "resolve",
          "package": "riak",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Network-Riak-Resolvable-Internal.html#resolve",
          "type": "method"
        },
        "index": {
          "description": "Resolve conflict between two values",
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "resolve",
          "normalized": "a-\u003ea-\u003ea",
          "package": "riak",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:resolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Value.Resolvable",
          "name": "toContent",
          "package": "riak",
          "signature": "c -\u003e Content",
          "source": "src/Network-Riak-Value.html#toContent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Riak Value Resolvable",
          "module": "Network.Riak.Value.Resolvable",
          "name": "toContent",
          "normalized": "a-\u003eContent",
          "package": "riak",
          "partial": "Content",
          "signature": "c-\u003eContent",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value-Resolvable.html#v:toContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows storage and retrieval of data using the\n \u003ccode\u003e\u003ca\u003eIsContent\u003c/a\u003e\u003c/code\u003e typeclass.  This provides access to more of Riak's\n storage features than JSON, e.g. links.\n\u003c/p\u003e\u003cp\u003eThe functions in this module do not perform any conflict resolution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Riak.Value",
          "name": "Value",
          "package": "riak",
          "source": "src/Network-Riak-Value.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows storage and retrieval of data using the IsContent typeclass This provides access to more of Riak storage features than JSON e.g links The functions in this module do not perform any conflict resolution",
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "Value",
          "package": "riak",
          "partial": "Value",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Value",
          "name": "IsContent",
          "package": "riak",
          "source": "src/Network-Riak-Value.html#IsContent",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "IsContent",
          "package": "riak",
          "partial": "Is Content",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#t:IsContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Value",
          "name": "fromContent",
          "package": "riak",
          "signature": "Content -\u003e Maybe c",
          "source": "src/Network-Riak-Value.html#fromContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "fromContent",
          "normalized": "Content-\u003eMaybe a",
          "package": "riak",
          "partial": "Content",
          "signature": "Content-\u003eMaybe c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#v:fromContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a value.  This may return multiple conflicting siblings.\n Choosing among them is your responsibility.\n\u003c/p\u003e",
          "module": "Network.Riak.Value",
          "name": "get",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e R -\u003e IO (Maybe ([c], VClock))",
          "source": "src/Network-Riak-Value.html#get",
          "type": "function"
        },
        "index": {
          "description": "Retrieve value This may return multiple conflicting siblings Choosing among them is your responsibility",
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "get",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eIO(Maybe([a],VClock))",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eR-\u003eIO(Maybe([c],VClock))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Value",
          "name": "getMany",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [Key] -\u003e R -\u003e IO [Maybe ([c], VClock)]",
          "source": "src/Network-Riak-Value.html#getMany",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "getMany",
          "normalized": "Connection-\u003eBucket-\u003e[Key]-\u003eR-\u003eIO[Maybe([a],VClock)]",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[Key]-\u003eR-\u003eIO[Maybe([c],VClock)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#v:getMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Value",
          "name": "parseContent",
          "package": "riak",
          "signature": "Content -\u003e Parser c",
          "source": "src/Network-Riak-Value.html#parseContent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "parseContent",
          "normalized": "Content-\u003eParser a",
          "package": "riak",
          "partial": "Content",
          "signature": "Content-\u003eParser c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#v:parseContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a single value.  This may return multiple conflicting\n siblings.  Choosing among them, and storing a new value, is your\n responsibility.\n\u003c/p\u003e\u003cp\u003eYou should \u003cem\u003eonly\u003c/em\u003e supply \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e if you are sure\n that the given bucket+key combination does not already exist.  If\n you omit a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e but the bucket+key \u003cem\u003edoes\u003c/em\u003e exist, your value\n will not be stored.\n\u003c/p\u003e",
          "module": "Network.Riak.Value",
          "name": "put",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e Maybe VClock -\u003e c -\u003e W -\u003e DW -\u003e IO ([c], VClock)",
          "source": "src/Network-Riak-Value.html#put",
          "type": "function"
        },
        "index": {
          "description": "Store single value This may return multiple conflicting siblings Choosing among them and storing new value is your responsibility You should only supply Nothing as VClock if you are sure that the given bucket key combination does not already exist If you omit VClock but the bucket key does exist your value will not be stored",
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "put",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ea-\u003eW-\u003eDW-\u003eIO([a],VClock)",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ec-\u003eW-\u003eDW-\u003eIO([c],VClock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore many values.  This may return multiple conflicting siblings\n for each value stored.  Choosing among them, and storing a new\n value in each case, is your responsibility.\n\u003c/p\u003e\u003cp\u003eYou should \u003cem\u003eonly\u003c/em\u003e supply \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e if you are sure\n that the given bucket+key combination does not already exist.  If\n you omit a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e but the bucket+key \u003cem\u003edoes\u003c/em\u003e exist, your value\n will not be stored.\n\u003c/p\u003e",
          "module": "Network.Riak.Value",
          "name": "putMany",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [(Key, Maybe VClock, c)] -\u003e W -\u003e DW -\u003e IO [([c], VClock)]",
          "source": "src/Network-Riak-Value.html#putMany",
          "type": "function"
        },
        "index": {
          "description": "Store many values This may return multiple conflicting siblings for each value stored Choosing among them and storing new value in each case is your responsibility You should only supply Nothing as VClock if you are sure that the given bucket key combination does not already exist If you omit VClock but the bucket key does exist your value will not be stored",
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "putMany",
          "normalized": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,a)]-\u003eW-\u003eDW-\u003eIO[([a],VClock)]",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,c)]-\u003eW-\u003eDW-\u003eIO[([c],VClock)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#v:putMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore many values, without the possibility of conflict\n resolution.\n\u003c/p\u003e\u003cp\u003eYou should \u003cem\u003eonly\u003c/em\u003e supply \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e if you are sure\n that the given bucket+key combination does not already exist.  If\n you omit a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e but the bucket+key \u003cem\u003edoes\u003c/em\u003e exist, your value\n will not be stored, and you will not be notified.\n\u003c/p\u003e",
          "module": "Network.Riak.Value",
          "name": "putMany_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e [(Key, Maybe VClock, c)] -\u003e W -\u003e DW -\u003e IO ()",
          "source": "src/Network-Riak-Value.html#putMany_",
          "type": "function"
        },
        "index": {
          "description": "Store many values without the possibility of conflict resolution You should only supply Nothing as VClock if you are sure that the given bucket key combination does not already exist If you omit VClock but the bucket key does exist your value will not be stored and you will not be notified",
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "putMany_",
          "normalized": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,a)]-\u003eW-\u003eDW-\u003eIO()",
          "package": "riak",
          "partial": "Many",
          "signature": "Connection-\u003eBucket-\u003e[(Key,Maybe VClock,c)]-\u003eW-\u003eDW-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#v:putMany_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a single value, without the possibility of conflict\n resolution.\n\u003c/p\u003e\u003cp\u003eYou should \u003cem\u003eonly\u003c/em\u003e supply \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e if you are sure\n that the given bucket+key combination does not already exist.  If\n you omit a \u003ccode\u003e\u003ca\u003eVClock\u003c/a\u003e\u003c/code\u003e but the bucket+key \u003cem\u003edoes\u003c/em\u003e exist, your value\n will not be stored, and you will not be notified.\n\u003c/p\u003e",
          "module": "Network.Riak.Value",
          "name": "put_",
          "package": "riak",
          "signature": "Connection -\u003e Bucket -\u003e Key -\u003e Maybe VClock -\u003e c -\u003e W -\u003e DW -\u003e IO ()",
          "source": "src/Network-Riak-Value.html#put_",
          "type": "function"
        },
        "index": {
          "description": "Store single value without the possibility of conflict resolution You should only supply Nothing as VClock if you are sure that the given bucket key combination does not already exist If you omit VClock but the bucket key does exist your value will not be stored and you will not be notified",
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "put_",
          "normalized": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ea-\u003eW-\u003eDW-\u003eIO()",
          "package": "riak",
          "signature": "Connection-\u003eBucket-\u003eKey-\u003eMaybe VClock-\u003ec-\u003eW-\u003eDW-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak.Value",
          "name": "toContent",
          "package": "riak",
          "signature": "c -\u003e Content",
          "source": "src/Network-Riak-Value.html#toContent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Riak Value",
          "module": "Network.Riak.Value",
          "name": "toContent",
          "normalized": "a-\u003eContent",
          "package": "riak",
          "partial": "Content",
          "signature": "c-\u003eContent",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak-Value.html#v:toContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA client for the Riak decentralized data store.\n\u003c/p\u003e\u003cp\u003eThe functions in this module use JSON as the storage\n representation, and automatically perform conflict resolution\n during storage and retrieval.\n\u003c/p\u003e\u003cp\u003eThis library is organized to allow a tradeoff between power\n and ease of use.  If you would like a different degree of\n automation with storage and conflict resolution, you may want to\n use one of the following modules (ranked from easiest to most\n tricky to use):\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eNetwork.Riak.JSON.Resolvable\u003c/dt\u003e\u003cdd\u003e JSON for storage, automatic conflict\n resolution.  (This module actually re-exports its definitions.)\n This is the easiest module to work with.\n\u003c/dd\u003e\u003cdt\u003eNetwork.Riak.JSON\u003c/dt\u003e\u003cdd\u003e JSON for storage, manual conflict resolution.\n\u003c/dd\u003e\u003cdt\u003eNetwork.Riak.Value.Resolvable\u003c/dt\u003e\u003cdd\u003e More complex (but still automatic)\n storage, automatic conflict resolution.\n\u003c/dd\u003e\u003cdt\u003eNetwork.Riak.Value\u003c/dt\u003e\u003cdd\u003e More complex (but still automatic) storage,\n manual conflict resolution.\n\u003c/dd\u003e\u003cdt\u003eNetwork.Riak.Basic\u003c/dt\u003e\u003cdd\u003e manual storage, manual conflict resolution.\n This is the most demanding module to work with, as you must encode\n and decode data yourself, and handle all conflict resolution\n yourself.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Network.Riak",
          "name": "Riak",
          "package": "riak",
          "source": "src/Network-Riak.html",
          "type": "module"
        },
        "index": {
          "description": "client for the Riak decentralized data store The functions in this module use JSON as the storage representation and automatically perform conflict resolution during storage and retrieval This library is organized to allow tradeoff between power and ease of use If you would like different degree of automation with storage and conflict resolution you may want to use one of the following modules ranked from easiest to most tricky to use Network.Riak.JSON.Resolvable JSON for storage automatic conflict resolution This module actually re-exports its definitions This is the easiest module to work with Network.Riak.JSON JSON for storage manual conflict resolution Network.Riak.Value.Resolvable More complex but still automatic storage automatic conflict resolution Network.Riak.Value More complex but still automatic storage manual conflict resolution Network.Riak.Basic manual storage manual conflict resolution This is the most demanding module to work with as you must encode and decode data yourself and handle all conflict resolution yourself",
          "hierarchy": "Network Riak",
          "module": "Network.Riak",
          "name": "Riak",
          "package": "riak",
          "partial": "Riak",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Riak",
          "name": "Client",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Client",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Riak",
          "module": "Network.Riak",
          "name": "Client",
          "package": "riak",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA client identifier.  This is used by the Riak cluster when\n logging vector clock changes, and should be unique for each client.\n\u003c/p\u003e",
          "module": "Network.Riak",
          "name": "ClientID",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#ClientID",
          "type": "type"
        },
        "index": {
          "description": "client identifier This is used by the Riak cluster when logging vector clock changes and should be unique for each client",
          "hierarchy": "Network Riak",
          "module": "Network.Riak",
          "name": "ClientID",
          "package": "riak",
          "partial": "Client ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak.html#t:ClientID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA connection to a Riak server.\n\u003c/p\u003e",
          "module": "Network.Riak",
          "name": "Connection",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "connection to Riak server",
          "hierarchy": "Network Riak",
          "module": "Network.Riak",
          "name": "Connection",
          "package": "riak",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA read/write quorum.  The quantity of replicas that must respond\n to a read or write request before it is considered successful. This\n is defined as a bucket property or as one of the relevant\n parameters to a single request (\u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eW\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eDW\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eRW\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Network.Riak",
          "name": "Quorum",
          "package": "riak",
          "source": "src/Network-Riak-Types-Internal.html#Quorum",
          "type": "data"
        },
        "index": {
          "description": "read write quorum The quantity of replicas that must respond to read or write request before it is considered successful This is defined as bucket property or as one of the relevant parameters to single request DW RW",
          "hierarchy": "Network Riak",
          "module": "Network.Riak",
          "name": "Quorum",
          "package": "riak",
          "partial": "Quorum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak.html#t:Quorum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can automatically resolve a vector clock conflict\n between two or more versions of a value.\n\u003c/p\u003e\u003cp\u003eInstances must be symmetric in their behaviour, such that the\n following law is obeyed:\n\u003c/p\u003e\u003cpre\u003e resolve a b == resolve b a\n\u003c/pre\u003e\u003cp\u003eOtherwise, there are no restrictions on the behaviour of \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e.\n The result may be \u003ccode\u003ea\u003c/code\u003e, \u003ccode\u003eb\u003c/code\u003e, a value derived from \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, or\n something else.\n\u003c/p\u003e\u003cp\u003eIf several conflicting siblings are found, \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e will be\n applied over all of them using a fold, to yield a single\n \"winner\".\n\u003c/p\u003e",
          "module": "Network.Riak",
          "name": "Resolvable",
          "package": "riak",
          "source": "src/Network-Riak-Resolvable-Internal.html#Resolvable",
          "type": "class"
        },
        "index": {
          "description": "type that can automatically resolve vector clock conflict between two or more versions of value Instances must be symmetric in their behaviour such that the following law is obeyed resolve resolve Otherwise there are no restrictions on the behaviour of resolve The result may be value derived from and or something else If several conflicting siblings are found resolve will be applied over all of them using fold to yield single winner",
          "hierarchy": "Network Riak",
          "module": "Network.Riak",
          "name": "Resolvable",
          "package": "riak",
          "partial": "Resolvable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak.html#t:Resolvable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve a conflict between two values.\n\u003c/p\u003e",
          "module": "Network.Riak",
          "name": "resolve",
          "package": "riak",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Network-Riak-Resolvable-Internal.html#resolve",
          "type": "method"
        },
        "index": {
          "description": "Resolve conflict between two values",
          "hierarchy": "Network Riak",
          "module": "Network.Riak",
          "name": "resolve",
          "normalized": "a-\u003ea-\u003ea",
          "package": "riak",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/riak/docs/Network-Riak.html#v:resolve"
      }
    }
  ]
]