[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#",
      "description": {
        "fct-module": "Network.Whois",
        "fct-package": "whois",
        "fct-signature": "module",
        "fct-source": "src/Network-Whois.html",
        "fct-type": "module",
        "title": "Whois"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Whois",
        "module": "Network.Whois",
        "name": "Whois",
        "normalized": "",
        "package": "whois",
        "partial": "Whois",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#t:WhoisServer",
      "description": {
        "fct-module": "Network.Whois",
        "fct-package": "whois",
        "fct-signature": "data",
        "fct-source": "src/Network-Whois.html#WhoisServer",
        "fct-type": "data",
        "title": "WhoisServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Whois",
        "module": "Network.Whois",
        "name": "WhoisServer",
        "normalized": "",
        "package": "whois",
        "partial": "Whois Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:WhoisServer",
      "description": {
        "fct-module": "Network.Whois",
        "fct-package": "whois",
        "fct-signature": "WhoisServer",
        "fct-source": "src/Network-Whois.html#WhoisServer",
        "fct-type": "function",
        "title": "WhoisServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Whois",
        "module": "Network.Whois",
        "name": "WhoisServer",
        "normalized": "",
        "package": "whois",
        "partial": "Whois Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:hostname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Whois",
        "fct-package": "whois",
        "fct-signature": "String",
        "fct-source": "src/Network-Whois.html#WhoisServer",
        "fct-type": "function",
        "title": "hostname"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Whois",
        "module": "Network.Whois",
        "name": "hostname",
        "normalized": "",
        "package": "whois",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:port",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Whois",
        "fct-package": "whois",
        "fct-signature": "Int",
        "fct-source": "src/Network-Whois.html#WhoisServer",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Whois",
        "module": "Network.Whois",
        "name": "port",
        "normalized": "",
        "package": "whois",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:query",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Whois",
        "fct-package": "whois",
        "fct-signature": "String",
        "fct-source": "src/Network-Whois.html#WhoisServer",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Whois",
        "module": "Network.Whois",
        "name": "query",
        "normalized": "",
        "package": "whois",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:serverFor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an IP address or domain name, attempt to figure out which whois server\n  to use. If we're given a domain name, this is (except in some special cases)\n  usually \u003ctld\u003e.whois-servers.net. If we're given an IP address, we default to\n  a transient server (ARIN), which can give us referral servers to try.\n\u003c/p\u003e\u003cpre\u003e serverFor \"192.0.2.123\"            -- WhoisServer \"whois.arin.net\" 43 \"n + \"\n\u003c/pre\u003e",
        "fct-module": "Network.Whois",
        "fct-package": "whois",
        "fct-signature": "String -\u003e Maybe WhoisServer",
        "fct-source": "src/Network-Whois.html#serverFor",
        "fct-type": "function",
        "title": "serverFor"
      },
      "index": {
        "description": "Given an IP address or domain name attempt to figure out which whois server to use If we re given domain name this is except in some special cases usually tld whois-servers.net If we re given an IP address we default to transient server ARIN which can give us referral servers to try serverFor WhoisServer whois.arin.net",
        "hierarchy": "Network Whois",
        "module": "Network.Whois",
        "name": "serverFor",
        "normalized": "String-\u003eMaybe WhoisServer",
        "package": "whois",
        "partial": "For",
        "signature": "String-\u003eMaybe WhoisServer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:whois",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whois information. \n\u003c/p\u003e",
        "fct-module": "Network.Whois",
        "fct-package": "whois",
        "fct-signature": "String -\u003e IO (Maybe String, Maybe String)",
        "fct-source": "src/Network-Whois.html#whois",
        "fct-type": "function",
        "title": "whois"
      },
      "index": {
        "description": "Returns whois information",
        "hierarchy": "Network Whois",
        "module": "Network.Whois",
        "name": "whois",
        "normalized": "String-\u003eIO(Maybe String,Maybe String)",
        "package": "whois",
        "partial": "",
        "signature": "String-\u003eIO(Maybe String,Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/whois/docs/Network-Whois.html#v:whois1",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whois information from a particular server. \n\u003c/p\u003e",
        "fct-module": "Network.Whois",
        "fct-package": "whois",
        "fct-signature": "String -\u003e WhoisServer -\u003e IO (Maybe String)",
        "fct-source": "src/Network-Whois.html#whois1",
        "fct-type": "function",
        "title": "whois1"
      },
      "index": {
        "description": "Returns whois information from particular server",
        "hierarchy": "Network Whois",
        "module": "Network.Whois",
        "name": "whois1",
        "normalized": "String-\u003eWhoisServer-\u003eIO(Maybe String)",
        "package": "whois",
        "partial": "",
        "signature": "String-\u003eWhoisServer-\u003eIO(Maybe String)"
      }
    }
  }
]