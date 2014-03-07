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
        "word": "secure-sockets"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Secure.Identity",
          "name": "Identity",
          "package": "secure-sockets",
          "source": "src/Network-Secure-Identity.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "Identity",
          "package": "secure-sockets",
          "partial": "Identity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identity, public or private.\n\u003c/p\u003e",
          "module": "Network.Secure.Identity",
          "name": "Identity",
          "package": "secure-sockets",
          "source": "src/Network-Secure-Identity.html#Identity",
          "type": "class"
        },
        "index": {
          "description": "An identity public or private",
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "Identity",
          "package": "secure-sockets",
          "partial": "Identity",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#t:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA local identity. This kind of identity can be used to\n authenticate \u003cem\u003eto\u003c/em\u003e remote ends of connections.\n\u003c/p\u003e",
          "module": "Network.Secure.Identity",
          "name": "LocalIdentity",
          "package": "secure-sockets",
          "source": "src/Network-Secure-Identity.html#LocalIdentity",
          "type": "data"
        },
        "index": {
          "description": "local identity This kind of identity can be used to authenticate to remote ends of connections",
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "LocalIdentity",
          "package": "secure-sockets",
          "partial": "Local Identity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#t:LocalIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe public identity of a peer. This kind of identity can be used\n to authenticate the remote ends of connections.\n\u003c/p\u003e",
          "module": "Network.Secure.Identity",
          "name": "PeerIdentity",
          "package": "secure-sockets",
          "source": "src/Network-Secure-Identity.html#PeerIdentity",
          "type": "data"
        },
        "index": {
          "description": "The public identity of peer This kind of identity can be used to authenticate the remote ends of connections",
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "PeerIdentity",
          "package": "secure-sockets",
          "partial": "Peer Identity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#t:PeerIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Secure.Identity",
          "name": "fromX509",
          "package": "secure-sockets",
          "signature": "X509 -\u003e IO PeerIdentity",
          "source": "src/Network-Secure-Identity.html#fromX509",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "fromX509",
          "normalized": "X-\u003eIO PeerIdentity",
          "package": "secure-sockets",
          "signature": "X-\u003eIO PeerIdentity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:fromX509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the description that was associated with the identity\n when it was created.\n\u003c/p\u003e",
          "module": "Network.Secure.Identity",
          "name": "identityName",
          "package": "secure-sockets",
          "signature": "a -\u003e String",
          "source": "src/Network-Secure-Identity.html#identityName",
          "type": "method"
        },
        "index": {
          "description": "Return the description that was associated with the identity when it was created",
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "identityName",
          "normalized": "a-\u003eString",
          "package": "secure-sockets",
          "partial": "Name",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:identityName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Secure.Identity",
          "name": "liKey",
          "package": "secure-sockets",
          "signature": "LocalIdentity -\u003e RSAKeyPair",
          "source": "src/Network-Secure-Identity.html#liKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "liKey",
          "normalized": "LocalIdentity-\u003eRSAKeyPair",
          "package": "secure-sockets",
          "partial": "Key",
          "signature": "LocalIdentity-\u003eRSAKeyPair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:liKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Secure.Identity",
          "name": "liX509",
          "package": "secure-sockets",
          "signature": "LocalIdentity -\u003e X509",
          "source": "src/Network-Secure-Identity.html#liX509",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "liX509",
          "normalized": "LocalIdentity-\u003eX",
          "package": "secure-sockets",
          "signature": "LocalIdentity-\u003eX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:liX509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new \u003ccode\u003e\u003ca\u003eLocalIdentity\u003c/a\u003e\u003c/code\u003e, giving it an identifying name and\n a validity period in days.\n\u003c/p\u003e\u003cp\u003eNote that this function may take quite a while to execute, as it is\n generating key material for the identity.\n\u003c/p\u003e",
          "module": "[\"Network.Secure.Identity\",\"Network.Secure\"]",
          "name": "newLocalIdentity",
          "package": "secure-sockets",
          "signature": "String -\u003e Int -\u003e m LocalIdentity",
          "source": "src/Network-Secure-Identity.html#newLocalIdentity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:newLocalIdentity\",\"http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:newLocalIdentity\"]"
        },
        "index": {
          "description": "Generate new LocalIdentity giving it an identifying name and validity period in days Note that this function may take quite while to execute as it is generating key material for the identity",
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "newLocalIdentity",
          "normalized": "String-\u003eInt-\u003ea LocalIdentity",
          "package": "secure-sockets",
          "partial": "Local Identity",
          "signature": "String-\u003eInt-\u003em LocalIdentity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:newLocalIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Secure.Identity",
          "name": "piX509",
          "package": "secure-sockets",
          "signature": "PeerIdentity -\u003e X509",
          "source": "src/Network-Secure-Identity.html#piX509",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "piX509",
          "normalized": "PeerIdentity-\u003eX",
          "package": "secure-sockets",
          "signature": "PeerIdentity-\u003eX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:piX509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead back an identity previously serialized with\n writeIdentity.\n\u003c/p\u003e",
          "module": "Network.Secure.Identity",
          "name": "readIdentity",
          "package": "secure-sockets",
          "signature": "ByteString -\u003e m a",
          "source": "src/Network-Secure-Identity.html#readIdentity",
          "type": "method"
        },
        "index": {
          "description": "Read back an identity previously serialized with writeIdentity",
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "readIdentity",
          "normalized": "ByteString-\u003ea b",
          "package": "secure-sockets",
          "partial": "Identity",
          "signature": "ByteString-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:readIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the public parts of a \u003ccode\u003e\u003ca\u003eLocalIdentity\u003c/a\u003e\u003c/code\u003e into a\n \u003ccode\u003e\u003ca\u003ePeerIdentity\u003c/a\u003e\u003c/code\u003e suitable for sharing with peers. The resulting\n \u003ccode\u003e\u003ca\u003ePeerIdentity\u003c/a\u003e\u003c/code\u003e will allow them to verify your identity when you\n authenticate using the corresponding \u003ccode\u003e\u003ca\u003eLocalIdentity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Secure.Identity\",\"Network.Secure\"]",
          "name": "toPeerIdentity",
          "package": "secure-sockets",
          "signature": "LocalIdentity -\u003e PeerIdentity",
          "source": "src/Network-Secure-Identity.html#toPeerIdentity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:toPeerIdentity\",\"http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:toPeerIdentity\"]"
        },
        "index": {
          "description": "Extract the public parts of LocalIdentity into PeerIdentity suitable for sharing with peers The resulting PeerIdentity will allow them to verify your identity when you authenticate using the corresponding LocalIdentity",
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "toPeerIdentity",
          "normalized": "LocalIdentity-\u003ePeerIdentity",
          "package": "secure-sockets",
          "partial": "Peer Identity",
          "signature": "LocalIdentity-\u003ePeerIdentity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:toPeerIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize an identity to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e for storage or\n transmission.\n\u003c/p\u003e",
          "module": "Network.Secure.Identity",
          "name": "writeIdentity",
          "package": "secure-sockets",
          "signature": "a -\u003e m ByteString",
          "source": "src/Network-Secure-Identity.html#writeIdentity",
          "type": "method"
        },
        "index": {
          "description": "Serialize an identity to ByteString for storage or transmission",
          "hierarchy": "Network Secure Identity",
          "module": "Network.Secure.Identity",
          "name": "writeIdentity",
          "normalized": "a-\u003eb ByteString",
          "package": "secure-sockets",
          "partial": "Identity",
          "signature": "a-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure-Identity.html#v:writeIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library simplifies the task of securely connecting two\n servers to each other. It closely mimicks the regular socket API,\n and adds the concept of identity: each communicating server has an\n identity, and connections can only be established between two\n servers who know each other and expect to be communicating.\n\u003c/p\u003e\u003cp\u003eUnder the hood, the library takes care of strongly authenticating\n the connection, and of encrypting all traffic. If you successfully\n establish a connection using this library, you have the guarantee\n that the connection is secure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Secure",
          "name": "Secure",
          "package": "secure-sockets",
          "source": "src/Network-Secure.html",
          "type": "module"
        },
        "index": {
          "description": "This library simplifies the task of securely connecting two servers to each other It closely mimicks the regular socket API and adds the concept of identity each communicating server has an identity and connections can only be established between two servers who know each other and expect to be communicating Under the hood the library takes care of strongly authenticating the connection and of encrypting all traffic If you successfully establish connection using this library you have the guarantee that the connection is secure",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "Secure",
          "package": "secure-sockets",
          "partial": "Secure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn established authenticated connection to a peer. It is\n guaranteed that all Connection objects are with a known peer, and\n that the connection is strongly encrypted.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "Connection",
          "package": "secure-sockets",
          "source": "src/Network-Secure-Connection.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "An established authenticated connection to peer It is guaranteed that all Connection objects are with known peer and that the connection is strongly encrypted",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "Connection",
          "package": "secure-sockets",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither a host name e.g., \u003ccode\u003e\"haskell.org\"\u003c/code\u003e or a numeric host\n address string consisting of a dotted decimal IPv4 address or an\n IPv6 address e.g., \u003ccode\u003e\"192.168.0.1\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "HostName",
          "package": "secure-sockets",
          "type": "type"
        },
        "index": {
          "description": "Either host name e.g haskell.org or numeric host address string consisting of dotted decimal IPv4 address or an IPv6 address e.g",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "HostName",
          "package": "secure-sockets",
          "partial": "Host Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#t:HostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identity, public or private.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "Identity",
          "package": "secure-sockets",
          "source": "src/Network-Secure-Identity.html#Identity",
          "type": "class"
        },
        "index": {
          "description": "An identity public or private",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "Identity",
          "package": "secure-sockets",
          "partial": "Identity",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#t:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA local identity. This kind of identity can be used to\n authenticate \u003cem\u003eto\u003c/em\u003e remote ends of connections.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "LocalIdentity",
          "package": "secure-sockets",
          "source": "src/Network-Secure-Identity.html#LocalIdentity",
          "type": "data"
        },
        "index": {
          "description": "local identity This kind of identity can be used to authenticate to remote ends of connections",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "LocalIdentity",
          "package": "secure-sockets",
          "partial": "Local Identity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#t:LocalIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe public identity of a peer. This kind of identity can be used\n to authenticate the remote ends of connections.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "PeerIdentity",
          "package": "secure-sockets",
          "source": "src/Network-Secure-Identity.html#PeerIdentity",
          "type": "data"
        },
        "index": {
          "description": "The public identity of peer This kind of identity can be used to authenticate the remote ends of connections",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "PeerIdentity",
          "package": "secure-sockets",
          "partial": "Peer Identity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#t:PeerIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Secure",
          "name": "ServiceName",
          "package": "secure-sockets",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "ServiceName",
          "package": "secure-sockets",
          "partial": "Service Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#t:ServiceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA server socket that accepts only secure connections.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "Socket",
          "package": "secure-sockets",
          "source": "src/Network-Secure-Connection.html#Socket",
          "type": "data"
        },
        "index": {
          "description": "server socket that accepts only secure connections",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "Socket",
          "package": "secure-sockets",
          "partial": "Socket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#t:Socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept one secure connection from a remote peer. The peer may\n authenticate as any of the given peer identities. A \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e is\n returned iff the autentication completes successfully.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "accept",
          "package": "secure-sockets",
          "signature": "LocalIdentity -\u003e [PeerIdentity] -\u003e Socket -\u003e IO Connection",
          "source": "src/Network-Secure-Connection.html#accept",
          "type": "function"
        },
        "index": {
          "description": "Accept one secure connection from remote peer The peer may authenticate as any of the given peer identities Connection is returned iff the autentication completes successfully",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "accept",
          "normalized": "LocalIdentity-\u003e[PeerIdentity]-\u003eSocket-\u003eIO Connection",
          "package": "secure-sockets",
          "signature": "LocalIdentity-\u003e[PeerIdentity]-\u003eSocket-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the connection. No other operations on \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003es should\n be used after closing it.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "close",
          "package": "secure-sockets",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Network-Secure-Connection.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close the connection No other operations on Connection should be used after closing it",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "close",
          "normalized": "Connection-\u003eIO()",
          "package": "secure-sockets",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect securely to the given host/port. The \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e is\n returned only if the peer accepts the given \u003ccode\u003e\u003ca\u003eLocalIdentity\u003c/a\u003e\u003c/code\u003e, and if\n the remote endpoint successfully authenticates as one of the given\n \u003ccode\u003e\u003ca\u003ePeerIdentity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "connect",
          "package": "secure-sockets",
          "signature": "LocalIdentity -\u003e [PeerIdentity] -\u003e (HostName, ServiceName) -\u003e IO Connection",
          "source": "src/Network-Secure-Connection.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Connect securely to the given host port The Connection is returned only if the peer accepts the given LocalIdentity and if the remote endpoint successfully authenticates as one of the given PeerIdentity",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "connect",
          "normalized": "LocalIdentity-\u003e[PeerIdentity]-\u003e(HostName,ServiceName)-\u003eIO Connection",
          "package": "secure-sockets",
          "signature": "LocalIdentity-\u003e[PeerIdentity]-\u003e(HostName,ServiceName)-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the description that was associated with the identity\n when it was created.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "identityName",
          "package": "secure-sockets",
          "signature": "a -\u003e String",
          "source": "src/Network-Secure-Identity.html#identityName",
          "type": "method"
        },
        "index": {
          "description": "Return the description that was associated with the identity when it was created",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "identityName",
          "normalized": "a-\u003eString",
          "package": "secure-sockets",
          "partial": "Name",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:identityName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new secure socket server, listening on the given\n address/port. The host may be \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to signify that the socket\n should listen on all available addresses.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "newServer",
          "package": "secure-sockets",
          "signature": "(Maybe HostName, ServiceName) -\u003e IO Socket",
          "source": "src/Network-Secure-Connection.html#newServer",
          "type": "function"
        },
        "index": {
          "description": "Create new secure socket server listening on the given address port The host may be Nothing to signify that the socket should listen on all available addresses",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "newServer",
          "normalized": "(Maybe HostName,ServiceName)-\u003eIO Socket",
          "package": "secure-sockets",
          "partial": "Server",
          "signature": "(Maybe HostName,ServiceName)-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:newServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003ePeerIdentity\u003c/a\u003e\u003c/code\u003e of the remote end of the connection.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "peer",
          "package": "secure-sockets",
          "signature": "Connection -\u003e PeerIdentity",
          "source": "src/Network-Secure-Connection.html#peer",
          "type": "function"
        },
        "index": {
          "description": "Return the PeerIdentity of the remote end of the connection",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "peer",
          "normalized": "Connection-\u003ePeerIdentity",
          "package": "secure-sockets",
          "signature": "Connection-\u003ePeerIdentity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:peer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead at most \u003ccode\u003en\u003c/code\u003e bytes from the given connection.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "read",
          "package": "secure-sockets",
          "signature": "Connection -\u003e Int -\u003e IO ByteString",
          "source": "src/Network-Secure-Connection.html#read",
          "type": "function"
        },
        "index": {
          "description": "Read at most bytes from the given connection",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "read",
          "normalized": "Connection-\u003eInt-\u003eIO ByteString",
          "package": "secure-sockets",
          "signature": "Connection-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead back an identity previously serialized with\n writeIdentity.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "readIdentity",
          "package": "secure-sockets",
          "signature": "ByteString -\u003e m a",
          "source": "src/Network-Secure-Identity.html#readIdentity",
          "type": "method"
        },
        "index": {
          "description": "Read back an identity previously serialized with writeIdentity",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "readIdentity",
          "normalized": "ByteString-\u003ea b",
          "package": "secure-sockets",
          "partial": "Identity",
          "signature": "ByteString-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:readIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead at most \u003ccode\u003en\u003c/code\u003e bytes from the given connection, into the given raw buffer.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "readPtr",
          "package": "secure-sockets",
          "signature": "Connection -\u003e Ptr a -\u003e Int -\u003e IO Int",
          "source": "src/Network-Secure-Connection.html#readPtr",
          "type": "function"
        },
        "index": {
          "description": "Read at most bytes from the given connection into the given raw buffer",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "readPtr",
          "normalized": "Connection-\u003ePtr a-\u003eInt-\u003eIO Int",
          "package": "secure-sockets",
          "partial": "Ptr",
          "signature": "Connection-\u003ePtr a-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:readPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend data to the connected peer.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "write",
          "package": "secure-sockets",
          "signature": "Connection -\u003e ByteString -\u003e IO ()",
          "source": "src/Network-Secure-Connection.html#write",
          "type": "function"
        },
        "index": {
          "description": "Send data to the connected peer",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "write",
          "normalized": "Connection-\u003eByteString-\u003eIO()",
          "package": "secure-sockets",
          "signature": "Connection-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize an identity to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e for storage or\n transmission.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "writeIdentity",
          "package": "secure-sockets",
          "signature": "a -\u003e m ByteString",
          "source": "src/Network-Secure-Identity.html#writeIdentity",
          "type": "method"
        },
        "index": {
          "description": "Serialize an identity to ByteString for storage or transmission",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "writeIdentity",
          "normalized": "a-\u003eb ByteString",
          "package": "secure-sockets",
          "partial": "Identity",
          "signature": "a-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:writeIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend data from the given raw pointer to the connected peer.\n\u003c/p\u003e",
          "module": "Network.Secure",
          "name": "writePtr",
          "package": "secure-sockets",
          "signature": "Connection -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Network-Secure-Connection.html#writePtr",
          "type": "function"
        },
        "index": {
          "description": "Send data from the given raw pointer to the connected peer",
          "hierarchy": "Network Secure",
          "module": "Network.Secure",
          "name": "writePtr",
          "normalized": "Connection-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "secure-sockets",
          "partial": "Ptr",
          "signature": "Connection-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/secure-sockets/docs/Network-Secure.html#v:writePtr"
      }
    }
  ]
]