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
        "word": "sockaddr"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConverting an address in \u003ccode\u003eSockAddr\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SockAddr",
          "name": "SockAddr",
          "package": "sockaddr",
          "source": "src/Network-SockAddr.html",
          "type": "module"
        },
        "index": {
          "description": "Converting an address in SockAddr",
          "hierarchy": "Network SockAddr",
          "module": "Network.SockAddr",
          "name": "SockAddr",
          "package": "sockaddr",
          "partial": "Sock Addr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sockaddr/docs/Network-SockAddr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003eSockAddr\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e. If the address is\n   an IPv4-embedded IPv6 address, the IPv4 is extracted.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Network.Socket\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eas \u003c- getAddrInfo (Just defaultHints) (Just \"example.org\") (Just \"http\")\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap (showSockAddr.addrAddress) as\n\u003c/code\u003e\u003c/strong\u003e[\"93.184.216.119\",\"93.184.216.119\",\"2606:2800:220:6d:26bf:1447:1097:aa7\",\"2606:2800:220:6d:26bf:1447:1097:aa7\"]\n\u003c/pre\u003e",
          "module": "Network.SockAddr",
          "name": "showSockAddr",
          "package": "sockaddr",
          "signature": "SockAddr -\u003e String",
          "source": "src/Network-SockAddr.html#showSockAddr",
          "type": "function"
        },
        "index": {
          "description": "Convert SockAddr to String If the address is an IPv4-embedded IPv6 address the IPv4 is extracted import Network.Socket as getAddrInfo Just defaultHints Just example.org Just http map showSockAddr.addrAddress as bf aa7 bf aa7",
          "hierarchy": "Network SockAddr",
          "module": "Network.SockAddr",
          "name": "showSockAddr",
          "normalized": "SockAddr-\u003eString",
          "package": "sockaddr",
          "partial": "Sock Addr",
          "signature": "SockAddr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sockaddr/docs/Network-SockAddr.html#v:showSockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003eSockAddr\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. If the address is\n   an IPv4-embedded IPv6 address, the IPv4 is extracted.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Network.Socket\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eas \u003c- getAddrInfo (Just defaultHints) (Just \"localhost\") (Just \"http\")\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap (showSockAddrBS.addrAddress) as\n\u003c/code\u003e\u003c/strong\u003e[\"127.0.0.1\",\"::1\",\"fe80:0:0:0:0:0:0:1\"]\n\u003c/pre\u003e",
          "module": "Network.SockAddr",
          "name": "showSockAddrBS",
          "package": "sockaddr",
          "signature": "SockAddr -\u003e ByteString",
          "source": "src/Network-SockAddr.html#showSockAddrBS",
          "type": "function"
        },
        "index": {
          "description": "Convert SockAddr to ByteString If the address is an IPv4-embedded IPv6 address the IPv4 is extracted import Network.Socket as getAddrInfo Just defaultHints Just localhost Just http map showSockAddrBS.addrAddress as fe80",
          "hierarchy": "Network SockAddr",
          "module": "Network.SockAddr",
          "name": "showSockAddrBS",
          "normalized": "SockAddr-\u003eByteString",
          "package": "sockaddr",
          "partial": "Sock Addr BS",
          "signature": "SockAddr-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sockaddr/docs/Network-SockAddr.html#v:showSockAddrBS"
      }
    }
  ]
]