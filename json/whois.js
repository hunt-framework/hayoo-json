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
        "word": "whois"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Whois",
          "name": "Whois",
          "package": "whois",
          "source": "src/Network-Whois.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Whois",
          "module": "Network.Whois",
          "name": "Whois",
          "package": "whois",
          "partial": "Whois",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Whois",
          "name": "WhoisServer",
          "package": "whois",
          "source": "src/Network-Whois.html#WhoisServer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Whois",
          "module": "Network.Whois",
          "name": "WhoisServer",
          "package": "whois",
          "partial": "Whois Server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#t:WhoisServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Whois",
          "name": "WhoisServer",
          "package": "whois",
          "signature": "WhoisServer",
          "source": "src/Network-Whois.html#WhoisServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Whois",
          "module": "Network.Whois",
          "name": "WhoisServer",
          "package": "whois",
          "partial": "Whois Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:WhoisServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Whois",
          "name": "hostname",
          "package": "whois",
          "signature": "String",
          "source": "src/Network-Whois.html#WhoisServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Whois",
          "module": "Network.Whois",
          "name": "hostname",
          "package": "whois",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:hostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Whois",
          "name": "port",
          "package": "whois",
          "signature": "Int",
          "source": "src/Network-Whois.html#WhoisServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Whois",
          "module": "Network.Whois",
          "name": "port",
          "package": "whois",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Whois",
          "name": "query",
          "package": "whois",
          "signature": "String",
          "source": "src/Network-Whois.html#WhoisServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Whois",
          "module": "Network.Whois",
          "name": "query",
          "package": "whois",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an IP address or domain name, attempt to figure out which whois server\n  to use. If we're given a domain name, this is (except in some special cases)\n  usually \u003ctld\u003e.whois-servers.net. If we're given an IP address, we default to\n  a transient server (ARIN), which can give us referral servers to try.\n\u003c/p\u003e\u003cpre\u003e serverFor \"192.0.2.123\"            -- WhoisServer \"whois.arin.net\" 43 \"n + \"\n\u003c/pre\u003e",
          "module": "Network.Whois",
          "name": "serverFor",
          "package": "whois",
          "signature": "String -\u003e Maybe WhoisServer",
          "source": "src/Network-Whois.html#serverFor",
          "type": "function"
        },
        "index": {
          "description": "Given an IP address or domain name attempt to figure out which whois server to use If we re given domain name this is except in some special cases usually tld whois-servers.net If we re given an IP address we default to transient server ARIN which can give us referral servers to try serverFor WhoisServer whois.arin.net",
          "hierarchy": "Network Whois",
          "module": "Network.Whois",
          "name": "serverFor",
          "normalized": "String-\u003eMaybe WhoisServer",
          "package": "whois",
          "partial": "For",
          "signature": "String-\u003eMaybe WhoisServer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:serverFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whois information. \n\u003c/p\u003e",
          "module": "Network.Whois",
          "name": "whois",
          "package": "whois",
          "signature": "String -\u003e IO (Maybe String, Maybe String)",
          "source": "src/Network-Whois.html#whois",
          "type": "function"
        },
        "index": {
          "description": "Returns whois information",
          "hierarchy": "Network Whois",
          "module": "Network.Whois",
          "name": "whois",
          "normalized": "String-\u003eIO(Maybe String,Maybe String)",
          "package": "whois",
          "signature": "String-\u003eIO(Maybe String,Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:whois"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whois information from a particular server. \n\u003c/p\u003e",
          "module": "Network.Whois",
          "name": "whois1",
          "package": "whois",
          "signature": "String -\u003e WhoisServer -\u003e IO (Maybe String)",
          "source": "src/Network-Whois.html#whois1",
          "type": "function"
        },
        "index": {
          "description": "Returns whois information from particular server",
          "hierarchy": "Network Whois",
          "module": "Network.Whois",
          "name": "whois1",
          "normalized": "String-\u003eWhoisServer-\u003eIO(Maybe String)",
          "package": "whois",
          "signature": "String-\u003eWhoisServer-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:whois1"
      }
    }
  ]
]