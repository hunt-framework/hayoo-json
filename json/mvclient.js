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
        "word": "mvclient"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the low-level interface for communicating with a\n    metaverse server.  It handles the details of packet encoding, accounting,\n    handshaking, and so on.\n\u003c/p\u003e\u003cp\u003eIn general, you should try to use the higher-level functions in the\n    \u003ca\u003eNetwork.Metaverse\u003c/a\u003e module as often as possible, and fall down to this\n    level only when there is no other option.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Metaverse.Circuit",
          "name": "Circuit",
          "package": "mvclient",
          "source": "src/Network-Metaverse-Circuit.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the low-level interface for communicating with metaverse server It handles the details of packet encoding accounting handshaking and so on In general you should try to use the higher-level functions in the Network.Metaverse module as often as possible and fall down to this level only when there is no other option",
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "Circuit",
          "package": "mvclient",
          "partial": "Circuit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eCircuit\u003c/code\u003e is a connection to a metaverse server.  One connects to\n    the server using the information given from the login server, via\n    \u003ccode\u003e\u003ca\u003ecircuitConnect\u003c/a\u003e\u003c/code\u003e.  Messages are then sent and received by operating\n    on the circuit, until it is closed with \u003ccode\u003e\u003ca\u003ecircuitClose\u003c/a\u003e\u003c/code\u003e or by a\n    network timeout.\n\u003c/p\u003e",
          "module": "Network.Metaverse.Circuit",
          "name": "Circuit",
          "package": "mvclient",
          "source": "src/Network-Metaverse-Circuit.html#Circuit",
          "type": "data"
        },
        "index": {
          "description": "Circuit is connection to metaverse server One connects to the server using the information given from the login server via circuitConnect Messages are then sent and received by operating on the circuit until it is closed with circuitClose or by network timeout",
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "Circuit",
          "package": "mvclient",
          "partial": "Circuit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#t:Circuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the agent UUID associated with this circuit.\n\u003c/p\u003e",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitAgentID",
          "package": "mvclient",
          "signature": "Circuit -\u003e UUID",
          "source": "src/Network-Metaverse-Circuit.html#circuitAgentID",
          "type": "function"
        },
        "index": {
          "description": "Gives the agent UUID associated with this circuit",
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitAgentID",
          "normalized": "Circuit-\u003eUUID",
          "package": "mvclient",
          "partial": "Agent ID",
          "signature": "Circuit-\u003eUUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#v:circuitAgentID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses a circuit, terminating its threads, closing its network resources,\n    and cleaning up after it.\n\u003c/p\u003e",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitClose",
          "package": "mvclient",
          "signature": "Circuit-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Closes circuit terminating its threads closing its network resources and cleaning up after it",
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitClose",
          "normalized": "Circuit-\u003eIO()",
          "package": "mvclient",
          "partial": "Close",
          "signature": "Circuit-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#v:circuitClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the circuit code, a 32-bit integer, associated with this circuit.\n        This is only rarely used, but it occasionally needed.\n\u003c/p\u003e",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitCode",
          "package": "mvclient",
          "signature": "Circuit -\u003e Word32",
          "source": "src/Network-Metaverse-Circuit.html#circuitCode",
          "type": "function"
        },
        "index": {
          "description": "Gives the circuit code bit integer associated with this circuit This is only rarely used but it occasionally needed",
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitCode",
          "normalized": "Circuit-\u003eWord",
          "package": "mvclient",
          "partial": "Code",
          "signature": "Circuit-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#v:circuitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects to a circuit, using connection information given in the login\n    token provided.  This sets up all the accounting and other data structures\n    associated with the circuit and gets it all started.\n\u003c/p\u003e",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitConnect",
          "package": "mvclient",
          "signature": "MVToken-\u003e IO Circuit",
          "type": "function"
        },
        "index": {
          "description": "Connects to circuit using connection information given in the login token provided This sets up all the accounting and other data structures associated with the circuit and gets it all started",
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitConnect",
          "normalized": "MVToken-\u003eIO Circuit",
          "package": "mvclient",
          "partial": "Connect",
          "signature": "MVToken-\u003eIO Circuit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#v:circuitConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the channel used to provide incoming packets from the server.\n        In general it is not used directly, but rather in conjunction with\n        \u003ccode\u003e\u003ca\u003edupChan\u003c/a\u003e\u003c/code\u003e so that each piece of the client can operate independently\n        with respect to all of the others.\n\u003c/p\u003e\u003cp\u003eWhen the circuit is closed, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is written to this channel.\n\u003c/p\u003e",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitIncoming",
          "package": "mvclient",
          "signature": "Circuit -\u003e Chan (Maybe PacketBody)",
          "source": "src/Network-Metaverse-Circuit.html#circuitIncoming",
          "type": "function"
        },
        "index": {
          "description": "Gives the channel used to provide incoming packets from the server In general it is not used directly but rather in conjunction with dupChan so that each piece of the client can operate independently with respect to all of the others When the circuit is closed Nothing is written to this channel",
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitIncoming",
          "normalized": "Circuit-\u003eChan(Maybe PacketBody)",
          "package": "mvclient",
          "partial": "Incoming",
          "signature": "Circuit-\u003eChan(Maybe PacketBody)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#v:circuitIncoming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metaverse.Circuit",
          "name": "circuitIsClosed",
          "package": "mvclient",
          "signature": "Circuit -\u003e IO Bool",
          "source": "src/Network-Metaverse-Circuit.html#circuitIsClosed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitIsClosed",
          "normalized": "Circuit-\u003eIO Bool",
          "package": "mvclient",
          "partial": "Is Closed",
          "signature": "Circuit-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#v:circuitIsClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a packet to the server, but does not wait for a response.\n\u003c/p\u003e",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitSend",
          "package": "mvclient",
          "signature": "Circuit-\u003e Bool-\u003e PacketBody-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sends packet to the server but does not wait for response",
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitSend",
          "normalized": "Circuit-\u003eBool-\u003ePacketBody-\u003eIO()",
          "package": "mvclient",
          "partial": "Send",
          "signature": "Circuit-\u003eBool-\u003ePacketBody-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#v:circuitSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a packet to the server, and waits for acknowledgement.\n\u003c/p\u003e",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitSendSync",
          "package": "mvclient",
          "signature": "Circuit -\u003e PacketBody -\u003e IO Bool",
          "source": "src/Network-Metaverse-Circuit.html#circuitSendSync",
          "type": "function"
        },
        "index": {
          "description": "Sends packet to the server and waits for acknowledgement",
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitSendSync",
          "normalized": "Circuit-\u003ePacketBody-\u003eIO Bool",
          "package": "mvclient",
          "partial": "Send Sync",
          "signature": "Circuit-\u003ePacketBody-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#v:circuitSendSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the session UUID associated with this circuit.\n\u003c/p\u003e",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitSessionID",
          "package": "mvclient",
          "signature": "Circuit -\u003e UUID",
          "source": "src/Network-Metaverse-Circuit.html#circuitSessionID",
          "type": "function"
        },
        "index": {
          "description": "Gives the session UUID associated with this circuit",
          "hierarchy": "Network Metaverse Circuit",
          "module": "Network.Metaverse.Circuit",
          "name": "circuitSessionID",
          "normalized": "Circuit-\u003eUUID",
          "package": "mvclient",
          "partial": "Session ID",
          "signature": "Circuit-\u003eUUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Circuit.html#v:circuitSessionID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the XML-RPC based login protocol provided\n    by Linden Labs' Second Life system.  Since Linden Labs' login requires\n    SSL which is not widely implemented in Haskell, this requires an stunnel\n    proxy listening on port 8001 of localhost.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Metaverse.Login",
          "name": "Login",
          "package": "mvclient",
          "source": "src/Network-Metaverse-Login.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the XML-RPC based login protocol provided by Linden Labs Second Life system Since Linden Labs login requires SSL which is not widely implemented in Haskell this requires an stunnel proxy listening on port of localhost",
          "hierarchy": "Network Metaverse Login",
          "module": "Network.Metaverse.Login",
          "name": "Login",
          "package": "mvclient",
          "partial": "Login",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Login.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metaverse.Login",
          "name": "MVToken",
          "package": "mvclient",
          "source": "src/Network-Metaverse-Login.html#MVToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Metaverse Login",
          "module": "Network.Metaverse.Login",
          "name": "MVToken",
          "package": "mvclient",
          "partial": "MVToken",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Login.html#t:MVToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metaverse.Login",
          "name": "MVToken",
          "package": "mvclient",
          "signature": "MVToken",
          "source": "src/Network-Metaverse-Login.html#MVToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metaverse Login",
          "module": "Network.Metaverse.Login",
          "name": "MVToken",
          "package": "mvclient",
          "partial": "MVToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Login.html#v:MVToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metaverse.Login",
          "name": "loginXmlRpc",
          "package": "mvclient",
          "signature": "String -\u003e String -\u003e String -\u003e IO MVToken",
          "source": "src/Network-Metaverse-Login.html#loginXmlRpc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metaverse Login",
          "module": "Network.Metaverse.Login",
          "name": "loginXmlRpc",
          "normalized": "String-\u003eString-\u003eString-\u003eIO MVToken",
          "package": "mvclient",
          "partial": "Xml Rpc",
          "signature": "String-\u003eString-\u003eString-\u003eIO MVToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Login.html#v:loginXmlRpc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metaverse.Login",
          "name": "tokenAgentID",
          "package": "mvclient",
          "signature": "UUID",
          "source": "src/Network-Metaverse-Login.html#MVToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metaverse Login",
          "module": "Network.Metaverse.Login",
          "name": "tokenAgentID",
          "package": "mvclient",
          "partial": "Agent ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Login.html#v:tokenAgentID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metaverse.Login",
          "name": "tokenCircuitCode",
          "package": "mvclient",
          "signature": "Word32",
          "source": "src/Network-Metaverse-Login.html#MVToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metaverse Login",
          "module": "Network.Metaverse.Login",
          "name": "tokenCircuitCode",
          "package": "mvclient",
          "partial": "Circuit Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Login.html#v:tokenCircuitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metaverse.Login",
          "name": "tokenSessionID",
          "package": "mvclient",
          "signature": "UUID",
          "source": "src/Network-Metaverse-Login.html#MVToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metaverse Login",
          "module": "Network.Metaverse.Login",
          "name": "tokenSessionID",
          "package": "mvclient",
          "partial": "Session ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Login.html#v:tokenSessionID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metaverse.Login",
          "name": "tokenSimIP",
          "package": "mvclient",
          "signature": "String",
          "source": "src/Network-Metaverse-Login.html#MVToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metaverse Login",
          "module": "Network.Metaverse.Login",
          "name": "tokenSimIP",
          "package": "mvclient",
          "partial": "Sim IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Login.html#v:tokenSimIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metaverse.Login",
          "name": "tokenSimPort",
          "package": "mvclient",
          "signature": "Word16",
          "source": "src/Network-Metaverse-Login.html#MVToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metaverse Login",
          "module": "Network.Metaverse.Login",
          "name": "tokenSimPort",
          "package": "mvclient",
          "partial": "Sim Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-Login.html#v:tokenSimPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {},
        "index": {
          "hierarchy": "getContentsFromDoc",
          "module": "getContentsFromDoc"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse-PacketTypes.html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the high-level interface to the system.  At this point, it's not\n    intended to be a replacement for the low-level interface, but rather just\n    a set of convenient functions that work when they do what you want.  In\n    the future, this module may grow into a general-purpose replacement to the\n    low-level interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Metaverse",
          "name": "Metaverse",
          "package": "mvclient",
          "source": "src/Network-Metaverse.html",
          "type": "module"
        },
        "index": {
          "description": "This is the high-level interface to the system At this point it not intended to be replacement for the low-level interface but rather just set of convenient functions that work when they do what you want In the future this module may grow into general-purpose replacement to the low-level interface",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "Metaverse",
          "package": "mvclient",
          "partial": "Metaverse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA method of speaking.  This controls the distance within which other tasks\n    and avatars will hear the communication.  Other avatar's clients will also\n    typically display an indication if a communication is a whisper or shout.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "ChatMethod",
          "package": "mvclient",
          "source": "src/Network-Metaverse.html#ChatMethod",
          "type": "data"
        },
        "index": {
          "description": "method of speaking This controls the distance within which other tasks and avatars will hear the communication Other avatar clients will also typically display an indication if communication is whisper or shout",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "ChatMethod",
          "package": "mvclient",
          "partial": "Chat Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#t:ChatMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudible within 20 meters\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "Say",
          "package": "mvclient",
          "signature": "Say",
          "source": "src/Network-Metaverse.html#ChatMethod",
          "type": "function"
        },
        "index": {
          "description": "Audible within meters",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "Say",
          "package": "mvclient",
          "partial": "Say",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:Say"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudible within 100 meters\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "Shout",
          "package": "mvclient",
          "signature": "Shout",
          "source": "src/Network-Metaverse.html#ChatMethod",
          "type": "function"
        },
        "index": {
          "description": "Audible within meters",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "Shout",
          "package": "mvclient",
          "partial": "Shout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:Shout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudible within 10 meters\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "Whisper",
          "package": "mvclient",
          "signature": "Whisper",
          "source": "src/Network-Metaverse.html#ChatMethod",
          "type": "function"
        },
        "index": {
          "description": "Audible within meters",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "Whisper",
          "package": "mvclient",
          "partial": "Whisper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:Whisper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccepts a friendship offer from another avatar.  This requires having a\n    UUID for the offer, usually obtained from the \u003ccode\u003e\u003ca\u003eImprovedInstantMessage\u003c/a\u003e\u003c/code\u003e\n    packet bearing the friendship offer.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "acceptFriendship",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Accepts friendship offer from another avatar This requires having UUID for the offer usually obtained from the ImprovedInstantMessage packet bearing the friendship offer",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "acceptFriendship",
          "normalized": "Circuit-\u003eUUID-\u003eIO()",
          "package": "mvclient",
          "partial": "Friendship",
          "signature": "Circuit-\u003eUUID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:acceptFriendship"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccepts a group invitation sent to this avatar.  This requires a UUID for\n    the invitation, which is normally obtained from the\n    \u003ccode\u003e\u003ca\u003eImprovedInstantMessage\u003c/a\u003e\u003c/code\u003e packet carrying the group invitation.\n\u003c/p\u003e\u003cp\u003eNote that if the invitation had a cost associated, then accepting it will\n    cost money, so be careful about automatically accepting invitations.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "acceptGroupInvite",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e UUID-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Accepts group invitation sent to this avatar This requires UUID for the invitation which is normally obtained from the ImprovedInstantMessage packet carrying the group invitation Note that if the invitation had cost associated then accepting it will cost money so be careful about automatically accepting invitations",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "acceptGroupInvite",
          "normalized": "Circuit-\u003eUUID-\u003eUUID-\u003eIO()",
          "package": "mvclient",
          "partial": "Group Invite",
          "signature": "Circuit-\u003eUUID-\u003eUUID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:acceptGroupInvite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a group member to a role.  The member must already belong to the\n    group.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "addGroupRole",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e UUID-\u003e UUID-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Adds group member to role The member must already belong to the group",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "addGroupRole",
          "normalized": "Circuit-\u003eUUID-\u003eUUID-\u003eUUID-\u003eIO()",
          "package": "mvclient",
          "partial": "Group Role",
          "signature": "Circuit-\u003eUUID-\u003eUUID-\u003eUUID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:addGroupRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an agent key to a matching first and last name.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "agentKey2Name",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e IO (Maybe (String, String))",
          "type": "function"
        },
        "index": {
          "description": "Converts an agent key to matching first and last name",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "agentKey2Name",
          "normalized": "Circuit-\u003eUUID-\u003eIO(Maybe(String,String))",
          "package": "mvclient",
          "partial": "Key Name",
          "signature": "Circuit-\u003eUUID-\u003eIO(Maybe(String,String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:agentKey2Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an agent name to a key, by searching in the directory and\n    looking for a matching agent.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "agentName2Key",
          "package": "mvclient",
          "signature": "Circuit-\u003e String-\u003e String-\u003e IO (Maybe UUID)",
          "type": "function"
        },
        "index": {
          "description": "Converts an agent name to key by searching in the directory and looking for matching agent",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "agentName2Key",
          "normalized": "Circuit-\u003eString-\u003eString-\u003eIO(Maybe UUID)",
          "package": "mvclient",
          "partial": "Name Key",
          "signature": "Circuit-\u003eString-\u003eString-\u003eIO(Maybe UUID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:agentName2Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimits bandwidths in a sensible way for a bot: that is, a non-graphical\n    viewer that does not need to render the scene.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "botThrottle",
          "package": "mvclient",
          "signature": "Circuit-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Limits bandwidths in sensible way for bot that is non-graphical viewer that does not need to render the scene",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "botThrottle",
          "normalized": "Circuit-\u003eIO()",
          "package": "mvclient",
          "partial": "Throttle",
          "signature": "Circuit-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:botThrottle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a sequence of bytes in the form used for packets into a Haskell\n    String.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "bytesToString",
          "package": "mvclient",
          "signature": "ByteString -\u003e String",
          "source": "src/Network-Metaverse.html#bytesToString",
          "type": "function"
        },
        "index": {
          "description": "Converts sequence of bytes in the form used for packets into Haskell String",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "bytesToString",
          "normalized": "ByteString-\u003eString",
          "package": "mvclient",
          "partial": "To String",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:bytesToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a group member from a role.  If the group member is not in that\n    role or the group, has no effect.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "delGroupRole",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e UUID-\u003e UUID-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Removes group member from role If the group member is not in that role or the group has no effect",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "delGroupRole",
          "normalized": "Circuit-\u003eUUID-\u003eUUID-\u003eUUID-\u003eIO()",
          "package": "mvclient",
          "partial": "Group Role",
          "signature": "Circuit-\u003eUUID-\u003eUUID-\u003eUUID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:delGroupRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBans a given avatar from the current estate.  This requires that the avatar\n    logged in on the circuit be an estate manager for the estate.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "estateBan",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Bans given avatar from the current estate This requires that the avatar logged in on the circuit be an estate manager for the estate",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "estateBan",
          "normalized": "Circuit-\u003eUUID-\u003eIO()",
          "package": "mvclient",
          "partial": "Ban",
          "signature": "Circuit-\u003eUUID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:estateBan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbans a given avatar from the current estate.  This requires that the\n    avatar logged in on the circuit be an estate manager for the estate.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "estateUnban",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Unbans given avatar from the current estate This requires that the avatar logged in on the circuit be an estate manager for the estate",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "estateUnban",
          "normalized": "Circuit-\u003eUUID-\u003eIO()",
          "package": "mvclient",
          "partial": "Unban",
          "signature": "Circuit-\u003eUUID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:estateUnban"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a packet, and expects another packet (or packets) in response.  This\n    is a common pattern for many kinds of communication.  It's implemented by\n    duplicating \u003ccode\u003e\u003ca\u003ecircuitIncoming\u003c/a\u003e\u003c/code\u003e so that we can look ahead for responses while\n    still leaving other packets for independent tasks.\n\u003c/p\u003e\u003cp\u003eThe handler should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when the packet it received was not\n    the response it expected (or did not complete the response), and a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n    value when the response is complete.  In turn, \u003ccode\u003eexpectResponse\u003c/code\u003e returns\n    \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the circuit is closed before the response is complete, and\n    a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value once the response is complete.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "expectResponse",
          "package": "mvclient",
          "signature": "Circuit-\u003e PacketBody-\u003e (PacketBody -\u003e IO (Maybe a))-\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Sends packet and expects another packet or packets in response This is common pattern for many kinds of communication It implemented by duplicating circuitIncoming so that we can look ahead for responses while still leaving other packets for independent tasks The handler should return Nothing when the packet it received was not the response it expected or did not complete the response and Just value when the response is complete In turn expectResponse returns Nothing if the circuit is closed before the response is complete and Just value once the response is complete",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "expectResponse",
          "normalized": "Circuit-\u003ePacketBody-\u003e(PacketBody-\u003eIO(Maybe a))-\u003eIO(Maybe a)",
          "package": "mvclient",
          "partial": "Response",
          "signature": "Circuit-\u003ePacketBody-\u003e(PacketBody-\u003eIO(Maybe a))-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:expectResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequests this avatar's current balance of virtual currency.  If the\n    balance is not available or the circuit is closed before it is received,\n    the result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "getBalance",
          "package": "mvclient",
          "signature": "Circuit-\u003e IO (Maybe Int)",
          "type": "function"
        },
        "index": {
          "description": "Requests this avatar current balance of virtual currency If the balance is not available or the circuit is closed before it is received the result is Nothing",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "getBalance",
          "normalized": "Circuit-\u003eIO(Maybe Int)",
          "package": "mvclient",
          "partial": "Balance",
          "signature": "Circuit-\u003eIO(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:getBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a list of members in a group.  Returns Nothing if such a list is\n    not available (generally because the request could not be sent, or the\n    circuit was closed before a reply was received.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "getGroupMembers",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e IO (Maybe [UUID])",
          "type": "function"
        },
        "index": {
          "description": "Retrieves list of members in group Returns Nothing if such list is not available generally because the request could not be sent or the circuit was closed before reply was received",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "getGroupMembers",
          "normalized": "Circuit-\u003eUUID-\u003eIO(Maybe[UUID])",
          "package": "mvclient",
          "partial": "Group Members",
          "signature": "Circuit-\u003eUUID-\u003eIO(Maybe[UUID])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:getGroupMembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a list of role names and their UUIDs in a group.  Returns Nothing\n    if such a list is not available (generally because the request could not\n    be sent, or the circuit was closed before a reply was received.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "getGroupRoles",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e IO (Maybe [(String, UUID)])",
          "type": "function"
        },
        "index": {
          "description": "Retrieves list of role names and their UUIDs in group Returns Nothing if such list is not available generally because the request could not be sent or the circuit was closed before reply was received",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "getGroupRoles",
          "normalized": "Circuit-\u003eUUID-\u003eIO(Maybe[(String,UUID)])",
          "package": "mvclient",
          "partial": "Group Roles",
          "signature": "Circuit-\u003eUUID-\u003eIO(Maybe[(String,UUID)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:getGroupRoles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePays money to another avatar.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "giveMoney",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Pays money to another avatar",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "giveMoney",
          "normalized": "Circuit-\u003eUUID-\u003eInt-\u003eIO()",
          "package": "mvclient",
          "partial": "Money",
          "signature": "Circuit-\u003eUUID-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:giveMoney"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a group key to a matching group name.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "groupKey2Name",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e IO (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Converts group key to matching group name",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "groupKey2Name",
          "normalized": "Circuit-\u003eUUID-\u003eIO(Maybe String)",
          "package": "mvclient",
          "partial": "Key Name",
          "signature": "Circuit-\u003eUUID-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:groupKey2Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCaptures the general pattern of handling packets from a circuit channel\n    such as \u003ccode\u003e\u003ca\u003ecircuitIncoming\u003c/a\u003e\u003c/code\u003e or a duplicate.  The handler should return\n    \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to continue processing packets, or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e to finish with a\n    result of \u003ccode\u003ex\u003c/code\u003e.  If the circuit is closed before a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value is returned,\n    then the result of \u003ccode\u003ehandlePackets\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "handlePackets",
          "package": "mvclient",
          "signature": "Chan (Maybe PacketBody)-\u003e (PacketBody -\u003e IO (Maybe a))-\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Captures the general pattern of handling packets from circuit channel such as circuitIncoming or duplicate The handler should return Nothing to continue processing packets or Just to finish with result of If the circuit is closed before Just value is returned then the result of handlePackets is Nothing",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "handlePackets",
          "normalized": "Chan(Maybe PacketBody)-\u003e(PacketBody-\u003eIO(Maybe a))-\u003eIO(Maybe a)",
          "package": "mvclient",
          "partial": "Packets",
          "signature": "Chan(Maybe PacketBody)-\u003e(PacketBody-\u003eIO(Maybe a))-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:handlePackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of handlePackets for handlers that don't finish early.  This\n    will keep retrieving packets from the given channel and passing them off\n    to the handler until the circuit is closed.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "handlePackets_",
          "package": "mvclient",
          "signature": "Chan (Maybe PacketBody)-\u003e (PacketBody -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "version of handlePackets for handlers that don finish early This will keep retrieving packets from the given channel and passing them off to the handler until the circuit is closed",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "handlePackets_",
          "normalized": "Chan(Maybe PacketBody)-\u003e(PacketBody-\u003eIO())-\u003eIO()",
          "package": "mvclient",
          "partial": "Packets",
          "signature": "Chan(Maybe PacketBody)-\u003e(PacketBody-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:handlePackets_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvites an avatar to join a group.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "inviteToGroup",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e UUID-\u003e UUID-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Invites an avatar to join group",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "inviteToGroup",
          "normalized": "Circuit-\u003eUUID-\u003eUUID-\u003eUUID-\u003eIO()",
          "package": "mvclient",
          "partial": "To Group",
          "signature": "Circuit-\u003eUUID-\u003eUUID-\u003eUUID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:inviteToGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogs in to a Second Life simulator being tunneled through port 8001 on\n    localhost.  Tunneling is very important, as we don't use SSL here, but\n    Second Life requires it.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "login",
          "package": "mvclient",
          "signature": "String-\u003e String-\u003e String-\u003e IO Circuit",
          "type": "function"
        },
        "index": {
          "description": "Logs in to Second Life simulator being tunneled through port on localhost Tunneling is very important as we don use SSL here but Second Life requires it",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "login",
          "normalized": "String-\u003eString-\u003eString-\u003eIO Circuit",
          "package": "mvclient",
          "signature": "String-\u003eString-\u003eString-\u003eIO Circuit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:login"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends an ordinary message to normal chat.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "say",
          "package": "mvclient",
          "signature": "Circuit-\u003e String-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Sends an ordinary message to normal chat",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "say",
          "normalized": "Circuit-\u003eString-\u003eIO Bool",
          "package": "mvclient",
          "signature": "Circuit-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:say"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a message requesting the throttling of certain kinds of data from the\n    server.  This can be used to save some network bandwidth and processing\n    time.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "sendAgentThrottle",
          "package": "mvclient",
          "signature": "Circuit-\u003e Float-\u003e Float-\u003e Float-\u003e Float-\u003e Float-\u003e Float-\u003e Float-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sends message requesting the throttling of certain kinds of data from the server This can be used to save some network bandwidth and processing time",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "sendAgentThrottle",
          "normalized": "Circuit-\u003eFloat-\u003eFloat-\u003eFloat-\u003eFloat-\u003eFloat-\u003eFloat-\u003eFloat-\u003eIO()",
          "package": "mvclient",
          "partial": "Agent Throttle",
          "signature": "Circuit-\u003eFloat-\u003eFloat-\u003eFloat-\u003eFloat-\u003eFloat-\u003eFloat-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:sendAgentThrottle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends an agent update message to the sim.  This message updates the sim\n    on the agent's idea of its current location, direction it is facing, etc.\n    These are not sent automatically, and not sending them will tend to make\n    the agent non-physical.  However, they are not required to remain logged\n    in, so some bots may not wish to bother with them.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "sendAgentUpdate",
          "package": "mvclient",
          "signature": "Circuit-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sends an agent update message to the sim This message updates the sim on the agent idea of its current location direction it is facing etc These are not sent automatically and not sending them will tend to make the agent non-physical However they are not required to remain logged in so some bots may not wish to bother with them",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "sendAgentUpdate",
          "normalized": "Circuit-\u003eIO()",
          "package": "mvclient",
          "partial": "Agent Update",
          "signature": "Circuit-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:sendAgentUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a chat communication.  This is a more general function: for specific\n    forms, see \u003ccode\u003e\u003ca\u003esay\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshout\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ewhisper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "sendChat",
          "package": "mvclient",
          "signature": "Circuit-\u003e Int-\u003e ChatMethod-\u003e String-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Sends chat communication This is more general function for specific forms see say shout and whisper",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "sendChat",
          "normalized": "Circuit-\u003eInt-\u003eChatMethod-\u003eString-\u003eIO Bool",
          "package": "mvclient",
          "partial": "Chat",
          "signature": "Circuit-\u003eInt-\u003eChatMethod-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:sendChat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends an instant message (IM) to another avatar.  Waits for the sim to\n    acknowledge receipt of the message, and returns True if it was received,\n    or False if the message could not be sent.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "sendSimpleIM",
          "package": "mvclient",
          "signature": "Circuit-\u003e UUID-\u003e String-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Sends an instant message IM to another avatar Waits for the sim to acknowledge receipt of the message and returns True if it was received or False if the message could not be sent",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "sendSimpleIM",
          "normalized": "Circuit-\u003eUUID-\u003eString-\u003eIO Bool",
          "package": "mvclient",
          "partial": "Simple IM",
          "signature": "Circuit-\u003eUUID-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:sendSimpleIM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets variables that control region terrain.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "setTerrainVariables",
          "package": "mvclient",
          "signature": "Circuit-\u003e Float-\u003e Float-\u003e Float-\u003e Bool-\u003e Bool-\u003e Float-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets variables that control region terrain",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "setTerrainVariables",
          "normalized": "Circuit-\u003eFloat-\u003eFloat-\u003eFloat-\u003eBool-\u003eBool-\u003eFloat-\u003eIO()",
          "package": "mvclient",
          "partial": "Terrain Variables",
          "signature": "Circuit-\u003eFloat-\u003eFloat-\u003eFloat-\u003eBool-\u003eBool-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:setTerrainVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a shout to normal chat.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "shout",
          "package": "mvclient",
          "signature": "Circuit-\u003e String-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Sends shout to normal chat",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "shout",
          "normalized": "Circuit-\u003eString-\u003eIO Bool",
          "package": "mvclient",
          "signature": "Circuit-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:shout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Haskell String into a sequence of bytes suitable to send in a\n    packet.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "stringToBytes",
          "package": "mvclient",
          "signature": "String -\u003e ByteString",
          "source": "src/Network-Metaverse.html#stringToBytes",
          "type": "function"
        },
        "index": {
          "description": "Converts Haskell String into sequence of bytes suitable to send in packet",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "stringToBytes",
          "normalized": "String-\u003eByteString",
          "package": "mvclient",
          "partial": "To Bytes",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:stringToBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a whisper to normal chat.\n\u003c/p\u003e",
          "module": "Network.Metaverse",
          "name": "whisper",
          "package": "mvclient",
          "signature": "Circuit-\u003e String-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Sends whisper to normal chat",
          "hierarchy": "Network Metaverse",
          "module": "Network.Metaverse",
          "name": "whisper",
          "normalized": "Circuit-\u003eString-\u003eIO Bool",
          "package": "mvclient",
          "signature": "Circuit-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mvclient/docs/Network-Metaverse.html#v:whisper"
      }
    }
  ]
]