[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Decode.html#",
      "description": {
        "fct-module": "Network.DNS.Decode",
        "fct-package": "dns",
        "fct-signature": "module",
        "fct-source": "src/Network-DNS-Decode.html",
        "fct-type": "module",
        "title": "Decode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Decode",
        "module": "Network.DNS.Decode",
        "name": "Decode",
        "normalized": "",
        "package": "dns",
        "partial": "Decode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Decode.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eParsing DNS data.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Decode",
        "fct-package": "dns",
        "fct-signature": "ByteString -\u003e Either String DNSFormat",
        "fct-source": "src/Network-DNS-Decode.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Parsing DNS data",
        "hierarchy": "Network DNS Decode",
        "module": "Network.DNS.Decode",
        "name": "decode",
        "normalized": "ByteString-\u003eEither String DNSFormat",
        "package": "dns",
        "partial": "",
        "signature": "ByteString-\u003eEither String DNSFormat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Decode.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceiving DNS data from \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e and parse it.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Decode",
        "fct-package": "dns",
        "fct-signature": "Socket -\u003e IO DNSFormat",
        "fct-source": "src/Network-DNS-Decode.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receiving DNS data from Socket and parse it",
        "hierarchy": "Network DNS Decode",
        "module": "Network.DNS.Decode",
        "name": "receive",
        "normalized": "Socket-\u003eIO DNSFormat",
        "package": "dns",
        "partial": "",
        "signature": "Socket-\u003eIO DNSFormat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Encode.html#",
      "description": {
        "fct-module": "Network.DNS.Encode",
        "fct-package": "dns",
        "fct-signature": "module",
        "fct-source": "src/Network-DNS-Encode.html",
        "fct-type": "module",
        "title": "Encode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Encode",
        "module": "Network.DNS.Encode",
        "name": "Encode",
        "normalized": "",
        "package": "dns",
        "partial": "Encode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Encode.html#v:composeQuery",
      "description": {
        "fct-descr": "\u003cp\u003eComposing query. First argument is a number to identify response.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Encode",
        "fct-package": "dns",
        "fct-signature": "Int -\u003e [Question] -\u003e ByteString",
        "fct-source": "src/Network-DNS-Encode.html#composeQuery",
        "fct-type": "function",
        "title": "composeQuery"
      },
      "index": {
        "description": "Composing query First argument is number to identify response",
        "hierarchy": "Network DNS Encode",
        "module": "Network.DNS.Encode",
        "name": "composeQuery",
        "normalized": "Int-\u003e[Question]-\u003eByteString",
        "package": "dns",
        "partial": "Query",
        "signature": "Int-\u003e[Question]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Encode.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eComposing DNS data.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Encode",
        "fct-package": "dns",
        "fct-signature": "DNSFormat -\u003e ByteString",
        "fct-source": "src/Network-DNS-Encode.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Composing DNS data",
        "hierarchy": "Network DNS Encode",
        "module": "Network.DNS.Encode",
        "name": "encode",
        "normalized": "DNSFormat-\u003eByteString",
        "package": "dns",
        "partial": "",
        "signature": "DNSFormat-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, high-level DNS lookup functions.\n\u003c/p\u003e\u003cp\u003eAll of the lookup functions necessary run in IO, since they\n   interact with the network. The return types are similar, but\n   differ in what can be returned from a successful lookup.\n\u003c/p\u003e\u003cp\u003eWe can think of the return type as \"either what I asked for, or\n   an error\". For example, the \u003ccode\u003e\u003ca\u003elookupA\u003c/a\u003e\u003c/code\u003e function, if successful,\n   will return a list of \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003elookupMX\u003c/a\u003e\u003c/code\u003e function will\n   instead return a list of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eDomain\u003c/a\u003e\u003c/code\u003e,Int)\u003c/code\u003e pairs, where each pair\n   represents a hostname and its associated priority.\n\u003c/p\u003e\u003cp\u003eThe order of multiple results may not be consistent between\n   lookups. If you require consistent results, apply\n   \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e to the returned list.\n\u003c/p\u003e\u003cp\u003eThe errors that can occur are the same for all lookups. Namely:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Timeout\n\u003c/li\u003e\u003cli\u003e Wrong sequence number (foul play?)\n\u003c/li\u003e\u003cli\u003e Unexpected data in the response\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf an error occurs, you should be able to pattern match on the\n   \u003ccode\u003e\u003ca\u003eDNSError\u003c/a\u003e\u003c/code\u003e constructor to determine which of these is the case.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: A result of \"no records\" is not considered an\n   error. If you perform, say, an 'AAAA' lookup for a domain with\n   no such records, the \"success\" result would be \u003ccode\u003eRight []\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe perform a successful lookup of \"www.example.com\":\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.example.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupA resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [93.184.216.119]\n\u003c/pre\u003e\u003cp\u003eThe only error that we can easily cause is a timeout. We do this\n   by creating and utilizing a \u003ccode\u003e\u003ca\u003eResolvConf\u003c/a\u003e\u003c/code\u003e which has a timeout of\n   one millisecond:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.example.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet badrc = defaultResolvConf { resolvTimeout = 1 }\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed badrc\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupA resolver hostname\n\u003c/code\u003e\u003c/strong\u003eLeft TimeoutExpired\n\u003c/pre\u003e\u003cp\u003eAs is the convention, successful results will always be wrapped\n   in a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e, while errors will be wrapped in a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor convenience, you may wish to enable GHC's OverloadedStrings\n   extension. This will allow you to avoid calling\n   \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e on each domain name. See\n   \u003ca\u003ehttp://www.haskell.org/ghc/docs/7.6.3/html/users_guide/type-class-extensions.html#overloaded-strings\u003c/a\u003e\n   for more information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "module",
        "fct-source": "src/Network-DNS-Lookup.html",
        "fct-type": "module",
        "title": "Lookup"
      },
      "index": {
        "description": "Simple high-level DNS lookup functions All of the lookup functions necessary run in IO since they interact with the network The return types are similar but differ in what can be returned from successful lookup We can think of the return type as either what asked for or an error For example the lookupA function if successful will return list of IPv4 The lookupMX function will instead return list of Domain Int pairs where each pair represents hostname and its associated priority The order of multiple results may not be consistent between lookups If you require consistent results apply sort to the returned list The errors that can occur are the same for all lookups Namely Timeout Wrong sequence number foul play Unexpected data in the response If an error occurs you should be able to pattern match on the DNSError constructor to determine which of these is the case Note result of no records is not considered an error If you perform say an AAAA lookup for domain with no such records the success result would be Right We perform successful lookup of www.example.com let hostname Data.ByteString.Char8.pack www.example.com rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupA resolver hostname Right The only error that we can easily cause is timeout We do this by creating and utilizing ResolvConf which has timeout of one millisecond let hostname Data.ByteString.Char8.pack www.example.com let badrc defaultResolvConf resolvTimeout rs makeResolvSeed badrc withResolver rs resolver lookupA resolver hostname Left TimeoutExpired As is the convention successful results will always be wrapped in Right while errors will be wrapped in Left For convenience you may wish to enable GHC OverloadedStrings extension This will allow you to avoid calling pack on each domain name See http www.haskell.org ghc docs html users guide type-class-extensions.html overloaded-strings for more information",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "Lookup",
        "normalized": "",
        "package": "dns",
        "partial": "Lookup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupA",
      "description": {
        "fct-descr": "\u003cp\u003eLook up all 'A' records for the given hostname.\n\u003c/p\u003e\u003cp\u003eA straightforward example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.mew.org\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupA resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [202.232.15.101]\n\u003c/pre\u003e\u003cp\u003eThis function will also follow a CNAME and resolve its target if\n   one exists for the queries hostname:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.kame.net\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupA resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [203.178.141.194]\n\u003c/pre\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [IPv4])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupA",
        "fct-type": "function",
        "title": "lookupA"
      },
      "index": {
        "description": "Look up all records for the given hostname straightforward example let hostname Data.ByteString.Char8.pack www.mew.org rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupA resolver hostname Right This function will also follow CNAME and resolve its target if one exists for the queries hostname let hostname Data.ByteString.Char8.pack www.kame.net rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupA resolver hostname Right",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupA",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
        "package": "dns",
        "partial": "",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupAAAA",
      "description": {
        "fct-descr": "\u003cp\u003eLook up all (IPv6) 'AAAA' records for the given hostname.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.mew.org\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupAAAA resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [2001:240:11e:c00:00:00:00:101]\n\u003c/pre\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [IPv6])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupAAAA",
        "fct-type": "function",
        "title": "lookupAAAA"
      },
      "index": {
        "description": "Look up all IPv6 AAAA records for the given hostname Examples let hostname Data.ByteString.Char8.pack www.mew.org rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupAAAA resolver hostname Right c00",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupAAAA",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
        "package": "dns",
        "partial": "AAAA",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupAAAAviaMX",
      "description": {
        "fct-descr": "\u003cp\u003eLook up all 'MX' records for the given hostname, and then\n   resolve their hostnames to IPv6 addresses by calling\n   \u003ccode\u003e\u003ca\u003elookupAAAA\u003c/a\u003e\u003c/code\u003e. The priorities are not retained.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [IPv6])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupAAAAviaMX",
        "fct-type": "function",
        "title": "lookupAAAAviaMX"
      },
      "index": {
        "description": "Look up all MX records for the given hostname and then resolve their hostnames to IPv6 addresses by calling lookupAAAA The priorities are not retained",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupAAAAviaMX",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
        "package": "dns",
        "partial": "AAAAvia MX",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupAviaMX",
      "description": {
        "fct-descr": "\u003cp\u003eLook up all 'MX' records for the given hostname, and then\n   resolve their hostnames to IPv4 addresses by calling\n   \u003ccode\u003e\u003ca\u003elookupA\u003c/a\u003e\u003c/code\u003e. The priorities are not retained.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.List (sort)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"mixi.jp\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eips \u003c- withResolver rs $ \\resolver -\u003e lookupAviaMX resolver hostname\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap sort ips\n\u003c/code\u003e\u003c/strong\u003eRight [202.32.29.4,202.32.29.5]\n\u003c/pre\u003e\u003cp\u003eSince there is more than one result, it is necessary to sort the\n   list in order to check for equality.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [IPv4])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupAviaMX",
        "fct-type": "function",
        "title": "lookupAviaMX"
      },
      "index": {
        "description": "Look up all MX records for the given hostname and then resolve their hostnames to IPv4 addresses by calling lookupA The priorities are not retained Examples import Data.List sort let hostname Data.ByteString.Char8.pack mixi.jp rs makeResolvSeed defaultResolvConf ips withResolver rs resolver lookupAviaMX resolver hostname fmap sort ips Right Since there is more than one result it is necessary to sort the list in order to check for equality",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupAviaMX",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
        "package": "dns",
        "partial": "Avia MX",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupMX",
      "description": {
        "fct-descr": "\u003cp\u003eLook up all 'MX' records for the given hostname. Two parts\n   constitute an MX record: a hostname , and an integer priority. We\n   therefore return each record as a \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eDomain\u003c/a\u003e\u003c/code\u003e, Int)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn this first example, we look up the MX for the domain\n   \"example.com\". It has no MX (to prevent a deluge of spam from\n   examples posted on the internet). But remember, \"no results\" is\n   still a successful result.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"example.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupMX resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight []\n\u003c/pre\u003e\u003cp\u003eThe domain \"mew.org\" does however have a single MX:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"mew.org\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupMX resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [(\"mail.mew.org.\",10)]\n\u003c/pre\u003e\u003cp\u003eAlso note that all hostnames are returned with a trailing dot to\n   indicate the DNS root.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [(Domain, Int)])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupMX",
        "fct-type": "function",
        "title": "lookupMX"
      },
      "index": {
        "description": "Look up all MX records for the given hostname Two parts constitute an MX record hostname and an integer priority We therefore return each record as Domain Int In this first example we look up the MX for the domain example.com It has no MX to prevent deluge of spam from examples posted on the internet But remember no results is still successful result let hostname Data.ByteString.Char8.pack example.com rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupMX resolver hostname Right The domain mew.org does however have single MX let hostname Data.ByteString.Char8.pack mew.org rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupMX resolver hostname Right mail.mew.org Also note that all hostnames are returned with trailing dot to indicate the DNS root",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupMX",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[(Domain,Int)])",
        "package": "dns",
        "partial": "MX",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[(Domain,Int)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupNS",
      "description": {
        "fct-descr": "\u003cp\u003eLook up all 'NS' records for the given hostname. The results\n   are taken from the ANSWER section of the response (as opposed to\n   AUTHORITY). For details, see e.g.\n   \u003ca\u003ehttp://www.zytrax.com/books/dns/ch15/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere will typically be more than one name server for a\n   domain. It is therefore extra important to sort the results if\n   you prefer them to be at all deterministic.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.List (sort)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"mew.org\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ens \u003c- withResolver rs $ \\resolver -\u003e lookupNS resolver hostname\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap sort ns\n\u003c/code\u003e\u003c/strong\u003eRight [\"ns1.mew.org.\",\"ns2.mew.org.\"]\n\u003c/pre\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [Domain])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupNS",
        "fct-type": "function",
        "title": "lookupNS"
      },
      "index": {
        "description": "Look up all NS records for the given hostname The results are taken from the ANSWER section of the response as opposed to AUTHORITY For details see e.g http www.zytrax.com books dns ch15 There will typically be more than one name server for domain It is therefore extra important to sort the results if you prefer them to be at all deterministic Examples import Data.List sort let hostname Data.ByteString.Char8.pack mew.org rs makeResolvSeed defaultResolvConf ns withResolver rs resolver lookupNS resolver hostname fmap sort ns Right ns1.mew.org ns2.mew.org",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupNS",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
        "package": "dns",
        "partial": "NS",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupNSAuth",
      "description": {
        "fct-descr": "\u003cp\u003eLook up all 'NS' records for the given hostname. The results\n   are taken from the AUTHORITY section of the response and not the\n   usual ANSWER (use \u003ccode\u003e\u003ca\u003elookupNS\u003c/a\u003e\u003c/code\u003e for that). For details, see e.g.\n   \u003ca\u003ehttp://www.zytrax.com/books/dns/ch15/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere will typically be more than one name server for a\n   domain. It is therefore extra important to sort the results if\n   you prefer them to be at all deterministic.\n\u003c/p\u003e\u003cp\u003eFor an example, we can look up the nameservers for\n   \"example.com\" from one of the root servers, a.gtld-servers.net,\n   the IP address of which was found beforehand:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.List (sort)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"example.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet ri = RCHostName \"192.5.6.30\" -- a.gtld-servers.net\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet rc = defaultResolvConf { resolvInfo = ri }\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed rc\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ens \u003c- withResolver rs $ \\resolver -\u003e lookupNSAuth resolver hostname\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap sort ns\n\u003c/code\u003e\u003c/strong\u003eRight [\"a.iana-servers.net.\",\"b.iana-servers.net.\"]\n\u003c/pre\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [Domain])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupNSAuth",
        "fct-type": "function",
        "title": "lookupNSAuth"
      },
      "index": {
        "description": "Look up all NS records for the given hostname The results are taken from the AUTHORITY section of the response and not the usual ANSWER use lookupNS for that For details see e.g http www.zytrax.com books dns ch15 There will typically be more than one name server for domain It is therefore extra important to sort the results if you prefer them to be at all deterministic For an example we can look up the nameservers for example.com from one of the root servers a.gtld-servers.net the IP address of which was found beforehand import Data.List sort let hostname Data.ByteString.Char8.pack example.com let ri RCHostName a.gtld-servers.net let rc defaultResolvConf resolvInfo ri rs makeResolvSeed rc ns withResolver rs resolver lookupNSAuth resolver hostname fmap sort ns Right a.iana-servers.net b.iana-servers.net",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupNSAuth",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
        "package": "dns",
        "partial": "NSAuth",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupPTR",
      "description": {
        "fct-descr": "\u003cp\u003eLook up all 'PTR' records for the given hostname. To perform a\n   reverse lookup on an IP address, you must first reverse its\n   octets and then append the suffix \".in-addr.arpa.\"\n\u003c/p\u003e\u003cp\u003eWe look up the PTR associated with the IP address\n   210.130.137.80, i.e., 80.137.130.210.in-addr.arpa:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"80.137.130.210.in-addr.arpa\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupPTR resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [\"www-v4.iij.ad.jp.\"]\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elookupRDNS\u003c/a\u003e\u003c/code\u003e function is more suited to this particular task.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [Domain])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupPTR",
        "fct-type": "function",
        "title": "lookupPTR"
      },
      "index": {
        "description": "Look up all PTR records for the given hostname To perform reverse lookup on an IP address you must first reverse its octets and then append the suffix in-addr.arpa We look up the PTR associated with the IP address i.e in-addr.arpa let hostname Data.ByteString.Char8.pack in-addr.arpa rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupPTR resolver hostname Right www-v4.iij.ad.jp The lookupRDNS function is more suited to this particular task",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupPTR",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
        "package": "dns",
        "partial": "PTR",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupRDNS",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient wrapper around \u003ccode\u003e\u003ca\u003elookupPTR\u003c/a\u003e\u003c/code\u003e to perform a reverse lookup\n   on a single IP address.\n\u003c/p\u003e\u003cp\u003eWe repeat the example from \u003ccode\u003e\u003ca\u003elookupPTR\u003c/a\u003e\u003c/code\u003e, except now we pass the IP\n   address directly:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"210.130.137.80\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupRDNS resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [\"www-v4.iij.ad.jp.\"]\n\u003c/pre\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [Domain])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupRDNS",
        "fct-type": "function",
        "title": "lookupRDNS"
      },
      "index": {
        "description": "Convenient wrapper around lookupPTR to perform reverse lookup on single IP address We repeat the example from lookupPTR except now we pass the IP address directly let hostname Data.ByteString.Char8.pack rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupRDNS resolver hostname Right www-v4.iij.ad.jp",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupRDNS",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
        "package": "dns",
        "partial": "RDNS",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupSRV",
      "description": {
        "fct-descr": "\u003cp\u003eLook up all 'SRV' records for the given hostname. A SRV record\n   comprises four fields,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Priority (lower is more-preferred)\n\u003c/li\u003e\u003cli\u003e Weight (relative frequency with which to use this record\n       amongst all results with the same priority)\n\u003c/li\u003e\u003cli\u003e Port (the port on which the service is offered)\n\u003c/li\u003e\u003cli\u003e Target (the hostname on which the service is offered)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe first three are integral, and the target is another DNS\n   hostname. We therefore return a four-tuple\n   \u003ccode\u003e(Int,Int,Int,\u003ccode\u003e\u003ca\u003eDomain\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"_sip._tcp.cisco.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupSRV resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [(1,0,5060,\"vcsgw.cisco.com.\")]\n\u003c/pre\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [(Int, Int, Int, Domain)])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupSRV",
        "fct-type": "function",
        "title": "lookupSRV"
      },
      "index": {
        "description": "Look up all SRV records for the given hostname SRV record comprises four fields Priority lower is more-preferred Weight relative frequency with which to use this record amongst all results with the same priority Port the port on which the service is offered Target the hostname on which the service is offered The first three are integral and the target is another DNS hostname We therefore return four-tuple Int Int Int Domain Examples let hostname Data.ByteString.Char8.pack sip tcp.cisco.com rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupSRV resolver hostname Right vcsgw.cisco.com",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupSRV",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[(Int,Int,Int,Domain)])",
        "package": "dns",
        "partial": "SRV",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[(Int,Int,Int,Domain)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupTXT",
      "description": {
        "fct-descr": "\u003cp\u003eLook up all 'TXT' records for the given hostname. The results\n   are free-form \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eTwo common uses for 'TXT' records are\n   \u003ca\u003ehttp://en.wikipedia.org/wiki/Sender_Policy_Framework\u003c/a\u003e and\n   \u003ca\u003ehttp://en.wikipedia.org/wiki/DomainKeys_Identified_Mail\u003c/a\u003e. As an\n   example, we find the SPF record for \"mew.org\":\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"mew.org\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupTXT resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [\"v=spf1 +mx -all\"]\n\u003c/pre\u003e",
        "fct-module": "Network.DNS.Lookup",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [ByteString])",
        "fct-source": "src/Network-DNS-Lookup.html#lookupTXT",
        "fct-type": "function",
        "title": "lookupTXT"
      },
      "index": {
        "description": "Look up all TXT records for the given hostname The results are free-form ByteString Two common uses for TXT records are http en.wikipedia.org wiki Sender Policy Framework and http en.wikipedia.org wiki DomainKeys Identified Mail As an example we find the SPF record for mew.org let hostname Data.ByteString.Char8.pack mew.org rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupTXT resolver hostname Right spf1 mx all",
        "hierarchy": "Network DNS Lookup",
        "module": "Network.DNS.Lookup",
        "name": "lookupTXT",
        "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[ByteString])",
        "package": "dns",
        "partial": "TXT",
        "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDNS Resolver and generic (lower-level) lookup functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "module",
        "fct-source": "src/Network-DNS-Resolver.html",
        "fct-type": "module",
        "title": "Resolver"
      },
      "index": {
        "description": "DNS Resolver and generic lower-level lookup functions",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "Resolver",
        "normalized": "",
        "package": "dns",
        "partial": "Resolver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#t:FileOrNumericHost",
      "description": {
        "fct-descr": "\u003cp\u003eUnion type for \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHostName\u003c/a\u003e\u003c/code\u003e. Specify \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to\n   \"resolv.conf\" or numeric IP address in \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e form.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: Only numeric IP addresses are valid \u003ccode\u003eRCHostName\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eExample (using Google's public DNS cache):\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet cache = RCHostName \"8.8.8.8\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Resolver.html#FileOrNumericHost",
        "fct-type": "data",
        "title": "FileOrNumericHost"
      },
      "index": {
        "description": "Union type for FilePath and HostName Specify FilePath to resolv.conf or numeric IP address in String form Warning Only numeric IP addresses are valid RCHostName Example using Google public DNS cache let cache RCHostName",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "FileOrNumericHost",
        "normalized": "",
        "package": "dns",
        "partial": "File Or Numeric Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#t:ResolvConf",
      "description": {
        "fct-descr": "\u003cp\u003eType for resolver configuration. The easiest way to construct a\n   \u003ccode\u003eResolvConf\u003c/code\u003e object is to modify the \u003ccode\u003e\u003ca\u003edefaultResolvConf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Resolver.html#ResolvConf",
        "fct-type": "data",
        "title": "ResolvConf"
      },
      "index": {
        "description": "Type for resolver configuration The easiest way to construct ResolvConf object is to modify the defaultResolvConf",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "ResolvConf",
        "normalized": "",
        "package": "dns",
        "partial": "Resolv Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#t:ResolvSeed",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract data type of DNS Resolver seed\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Resolver.html#ResolvSeed",
        "fct-type": "data",
        "title": "ResolvSeed"
      },
      "index": {
        "description": "Abstract data type of DNS Resolver seed",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "ResolvSeed",
        "normalized": "",
        "package": "dns",
        "partial": "Resolv Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#t:Resolver",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract data type of DNS Resolver\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Resolver.html#Resolver",
        "fct-type": "data",
        "title": "Resolver"
      },
      "index": {
        "description": "Abstract data type of DNS Resolver",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "Resolver",
        "normalized": "",
        "package": "dns",
        "partial": "Resolver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:RCFilePath",
      "description": {
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "RCFilePath FilePath",
        "fct-source": "src/Network-DNS-Resolver.html#FileOrNumericHost",
        "fct-type": "function",
        "title": "RCFilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "RCFilePath",
        "normalized": "",
        "package": "dns",
        "partial": "RCFile Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:RCHostName",
      "description": {
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "RCHostName HostName",
        "fct-source": "src/Network-DNS-Resolver.html#FileOrNumericHost",
        "fct-type": "function",
        "title": "RCHostName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "RCHostName",
        "normalized": "",
        "package": "dns",
        "partial": "RCHost Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:ResolvConf",
      "description": {
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "ResolvConf",
        "fct-source": "src/Network-DNS-Resolver.html#ResolvConf",
        "fct-type": "function",
        "title": "ResolvConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "ResolvConf",
        "normalized": "",
        "package": "dns",
        "partial": "Resolv Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:Resolver",
      "description": {
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "Resolver",
        "fct-source": "src/Network-DNS-Resolver.html#Resolver",
        "fct-type": "function",
        "title": "Resolver"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "Resolver",
        "normalized": "",
        "package": "dns",
        "partial": "Resolver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:defaultResolvConf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a default \u003ccode\u003e\u003ca\u003eResolvConf\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eresolvInfo\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRCFilePath\u003c/a\u003e\u003c/code\u003e \"/etc/resolv.conf\".\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eresolvTimeout\u003c/a\u003e\u003c/code\u003e is 3,000,000 micro seconds.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eresolvBufsize\u003c/a\u003e\u003c/code\u003e is 512. (obsoleted)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample (use Google's public DNS cache instead of resolv.conf):\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet cache = RCHostName \"8.8.8.8\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet rc = defaultResolvConf { resolvInfo = cache }\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "ResolvConf",
        "fct-source": "src/Network-DNS-Resolver.html#defaultResolvConf",
        "fct-type": "function",
        "title": "defaultResolvConf"
      },
      "index": {
        "description": "Return default ResolvConf resolvInfo is RCFilePath etc resolv.conf resolvTimeout is micro seconds resolvBufsize is obsoleted Example use Google public DNS cache instead of resolv.conf let cache RCHostName let rc defaultResolvConf resolvInfo cache",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "defaultResolvConf",
        "normalized": "",
        "package": "dns",
        "partial": "Resolv Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:dnsBufsize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "Integer",
        "fct-source": "src/Network-DNS-Resolver.html#Resolver",
        "fct-type": "function",
        "title": "dnsBufsize"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "dnsBufsize",
        "normalized": "",
        "package": "dns",
        "partial": "Bufsize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:dnsSock",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "Socket",
        "fct-source": "src/Network-DNS-Resolver.html#Resolver",
        "fct-type": "function",
        "title": "dnsSock"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "dnsSock",
        "normalized": "",
        "package": "dns",
        "partial": "Sock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:dnsTimeout",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "Int",
        "fct-source": "src/Network-DNS-Resolver.html#Resolver",
        "fct-type": "function",
        "title": "dnsTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "dnsTimeout",
        "normalized": "",
        "package": "dns",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:genId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "IO Int",
        "fct-source": "src/Network-DNS-Resolver.html#Resolver",
        "fct-type": "function",
        "title": "genId"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "genId",
        "normalized": "",
        "package": "dns",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up resource records for a domain, collecting the results\n   from the ANSWER section of the response.\n\u003c/p\u003e\u003cp\u003eWe repeat an example from \u003ca\u003eNetwork.DNS.Lookup\u003c/a\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.example.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookup resolver hostname A\n\u003c/code\u003e\u003c/strong\u003eRight [93.184.216.119]\n\u003c/pre\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e TYPE -\u003e IO (Either DNSError [RDATA])",
        "fct-source": "src/Network-DNS-Resolver.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Look up resource records for domain collecting the results from the ANSWER section of the response We repeat an example from Network.DNS.Lookup let hostname Data.ByteString.Char8.pack www.example.com rs makeResolvSeed defaultResolvConf withResolver rs resolver lookup resolver hostname Right",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "lookup",
        "normalized": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError[RDATA])",
        "package": "dns",
        "partial": "",
        "signature": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError[RDATA])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:lookupAuth",
      "description": {
        "fct-descr": "\u003cp\u003eLook up resource records for a domain, collecting the results\n   from the AUTHORITY section of the response.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e TYPE -\u003e IO (Either DNSError [RDATA])",
        "fct-source": "src/Network-DNS-Resolver.html#lookupAuth",
        "fct-type": "function",
        "title": "lookupAuth"
      },
      "index": {
        "description": "Look up resource records for domain collecting the results from the AUTHORITY section of the response",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "lookupAuth",
        "normalized": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError[RDATA])",
        "package": "dns",
        "partial": "Auth",
        "signature": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError[RDATA])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:lookupRaw",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a name and return the entire DNS Response. Sample output\n   is included below, however it is \u003cem\u003enot\u003c/em\u003e tested -- the sequence\n   number is unpredictable (it has to be!).\n\u003c/p\u003e\u003cp\u003eThe example code:\n\u003c/p\u003e\u003cpre\u003e\n   let hostname = Data.ByteString.Char8.pack \"www.example.com\"\n   rs \u003c- makeResolvSeed defaultResolvConf\n   withResolver rs $ resolver -\u003e lookupRaw resolver hostname A\n\u003c/pre\u003e\u003cp\u003eAnd the (formatted) expected output:\n\u003c/p\u003e\u003cpre\u003e\n   Right (DNSFormat\n           { header = DNSHeader\n                        { identifier = 1,\n                          flags = DNSFlags\n                                    { qOrR = QR_Response,\n                                      opcode = OP_STD,\n                                      authAnswer = False,\n                                      trunCation = False,\n                                      recDesired = True,\n                                      recAvailable = True,\n                                      rcode = NoErr },\n                          qdCount = 1,\n                          anCount = 1,\n                          nsCount = 0,\n                          arCount = 0},\n             question = [Question { qname = \"www.example.com.\",\n                                    qtype = A}],\n             answer = [ResourceRecord {rrname = \"www.example.com.\",\n                                       rrtype = A,\n                                       rrttl = 800,\n                                       rdlen = 4,\n                                       rdata = 93.184.216.119}],\n             authority = [],\n             additional = []})\n\u003c/pre\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "Resolver -\u003e Domain -\u003e TYPE -\u003e IO (Either DNSError DNSFormat)",
        "fct-source": "src/Network-DNS-Resolver.html#lookupRaw",
        "fct-type": "function",
        "title": "lookupRaw"
      },
      "index": {
        "description": "Look up name and return the entire DNS Response Sample output is included below however it is not tested the sequence number is unpredictable it has to be The example code let hostname Data.ByteString.Char8.pack www.example.com rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupRaw resolver hostname And the formatted expected output Right DNSFormat header DNSHeader identifier flags DNSFlags qOrR QR Response opcode OP STD authAnswer False trunCation False recDesired True recAvailable True rcode NoErr qdCount anCount nsCount arCount question Question qname www.example.com qtype answer ResourceRecord rrname www.example.com rrtype rrttl rdlen rdata authority additional",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "lookupRaw",
        "normalized": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError DNSFormat)",
        "package": "dns",
        "partial": "Raw",
        "signature": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError DNSFormat)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:makeResolvSeed",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eResolvSeed\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eResolvConf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "ResolvConf -\u003e IO ResolvSeed",
        "fct-source": "src/Network-DNS-Resolver.html#makeResolvSeed",
        "fct-type": "function",
        "title": "makeResolvSeed"
      },
      "index": {
        "description": "Make ResolvSeed from ResolvConf Examples rs makeResolvSeed defaultResolvConf",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "makeResolvSeed",
        "normalized": "ResolvConf-\u003eIO ResolvSeed",
        "package": "dns",
        "partial": "Resolv Seed",
        "signature": "ResolvConf-\u003eIO ResolvSeed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:resolvBufsize",
      "description": {
        "fct-descr": "\u003cp\u003eThis field was obsoleted.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "Integer",
        "fct-source": "src/Network-DNS-Resolver.html#ResolvConf",
        "fct-type": "function",
        "title": "resolvBufsize"
      },
      "index": {
        "description": "This field was obsoleted",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "resolvBufsize",
        "normalized": "",
        "package": "dns",
        "partial": "Bufsize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:resolvInfo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "FileOrNumericHost",
        "fct-source": "src/Network-DNS-Resolver.html#ResolvConf",
        "fct-type": "function",
        "title": "resolvInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "resolvInfo",
        "normalized": "",
        "package": "dns",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:resolvTimeout",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "Int",
        "fct-source": "src/Network-DNS-Resolver.html#ResolvConf",
        "fct-type": "function",
        "title": "resolvTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "resolvTimeout",
        "normalized": "",
        "package": "dns",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:withResolver",
      "description": {
        "fct-descr": "\u003cp\u003eGiving a thread-safe \u003ccode\u003e\u003ca\u003eResolver\u003c/a\u003e\u003c/code\u003e to the function of the second\n   argument. \u003ccode\u003e\u003ca\u003ewithResolver\u003c/a\u003e\u003c/code\u003e should be passed to \u003ccode\u003eforkIO\u003c/code\u003e. For\n   examples, see \u003ca\u003eNetwork.DNS.Lookup\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Resolver",
        "fct-package": "dns",
        "fct-signature": "ResolvSeed -\u003e (Resolver -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-DNS-Resolver.html#withResolver",
        "fct-type": "function",
        "title": "withResolver"
      },
      "index": {
        "description": "Giving thread-safe Resolver to the function of the second argument withResolver should be passed to forkIO For examples see Network.DNS.Lookup",
        "hierarchy": "Network DNS Resolver",
        "module": "Network.DNS.Resolver",
        "name": "withResolver",
        "normalized": "ResolvSeed-\u003e(Resolver-\u003eIO a)-\u003eIO a",
        "package": "dns",
        "partial": "Resolver",
        "signature": "ResolvSeed-\u003e(Resolver-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for DNS Query and Response.\n   For more information, see \u003ca\u003ehttp://www.ietf.org/rfc/rfc1035\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "module",
        "fct-source": "src/Network-DNS-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Data types for DNS Query and Response For more information see http www.ietf.org rfc rfc1035",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "Types",
        "normalized": "",
        "package": "dns",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:DNSError",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumeration of all possible DNS errors that can occur.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#DNSError",
        "fct-type": "data",
        "title": "DNSError"
      },
      "index": {
        "description": "An enumeration of all possible DNS errors that can occur",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "DNSError",
        "normalized": "",
        "package": "dns",
        "partial": "DNSError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:DNSFlags",
      "description": {
        "fct-descr": "\u003cp\u003eRaw data format for the flags of DNS Query and Response.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#DNSFlags",
        "fct-type": "data",
        "title": "DNSFlags"
      },
      "index": {
        "description": "Raw data format for the flags of DNS Query and Response",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "DNSFlags",
        "normalized": "",
        "package": "dns",
        "partial": "DNSFlags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:DNSFormat",
      "description": {
        "fct-descr": "\u003cp\u003eRaw data format for DNS Query and Response.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#DNSFormat",
        "fct-type": "data",
        "title": "DNSFormat"
      },
      "index": {
        "description": "Raw data format for DNS Query and Response",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "DNSFormat",
        "normalized": "",
        "package": "dns",
        "partial": "DNSFormat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:DNSHeader",
      "description": {
        "fct-descr": "\u003cp\u003eRaw data format for the header of DNS Query and Response.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#DNSHeader",
        "fct-type": "data",
        "title": "DNSHeader"
      },
      "index": {
        "description": "Raw data format for the header of DNS Query and Response",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "DNSHeader",
        "normalized": "",
        "package": "dns",
        "partial": "DNSHeader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:Domain",
      "description": {
        "fct-descr": "\u003cp\u003eType for domain.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "type",
        "fct-source": "src/Network-DNS-Internal.html#Domain",
        "fct-type": "type",
        "title": "Domain"
      },
      "index": {
        "description": "Type for domain",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "Domain",
        "normalized": "",
        "package": "dns",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:OPCODE",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#OPCODE",
        "fct-type": "data",
        "title": "OPCODE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "OPCODE",
        "normalized": "",
        "package": "dns",
        "partial": "OPCODE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:QorR",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#QorR",
        "fct-type": "data",
        "title": "QorR"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "QorR",
        "normalized": "",
        "package": "dns",
        "partial": "Qor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:Question",
      "description": {
        "fct-descr": "\u003cp\u003eRaw data format for DNS questions.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#Question",
        "fct-type": "data",
        "title": "Question"
      },
      "index": {
        "description": "Raw data format for DNS questions",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "Question",
        "normalized": "",
        "package": "dns",
        "partial": "Question",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:RCODE",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#RCODE",
        "fct-type": "data",
        "title": "RCODE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RCODE",
        "normalized": "",
        "package": "dns",
        "partial": "RCODE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:RDATA",
      "description": {
        "fct-descr": "\u003cp\u003eRaw data format for each type.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "data",
        "title": "RDATA"
      },
      "index": {
        "description": "Raw data format for each type",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RDATA",
        "normalized": "",
        "package": "dns",
        "partial": "RDATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:ResourceRecord",
      "description": {
        "fct-descr": "\u003cp\u003eRaw data format for resource records.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#ResourceRecord",
        "fct-type": "data",
        "title": "ResourceRecord"
      },
      "index": {
        "description": "Raw data format for resource records",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "ResourceRecord",
        "normalized": "",
        "package": "dns",
        "partial": "Resource Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:TYPE",
      "description": {
        "fct-descr": "\u003cp\u003eTypes for resource records.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "data",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "data",
        "title": "TYPE"
      },
      "index": {
        "description": "Types for resource records",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "TYPE",
        "normalized": "",
        "package": "dns",
        "partial": "TYPE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:A",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "A",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "function",
        "title": "A"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "A",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:AAAA",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "AAAA",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "function",
        "title": "AAAA"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "AAAA",
        "normalized": "",
        "package": "dns",
        "partial": "AAAA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:CNAME",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "CNAME",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "function",
        "title": "CNAME"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "CNAME",
        "normalized": "",
        "package": "dns",
        "partial": "CNAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:DNSFlags",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "DNSFlags",
        "fct-source": "src/Network-DNS-Internal.html#DNSFlags",
        "fct-type": "function",
        "title": "DNSFlags"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "DNSFlags",
        "normalized": "",
        "package": "dns",
        "partial": "DNSFlags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:DNSFormat",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "DNSFormat",
        "fct-source": "src/Network-DNS-Internal.html#DNSFormat",
        "fct-type": "function",
        "title": "DNSFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "DNSFormat",
        "normalized": "",
        "package": "dns",
        "partial": "DNSFormat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:DNSHeader",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "DNSHeader",
        "fct-source": "src/Network-DNS-Internal.html#DNSHeader",
        "fct-type": "function",
        "title": "DNSHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "DNSHeader",
        "normalized": "",
        "package": "dns",
        "partial": "DNSHeader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:FormatErr",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "FormatErr",
        "fct-source": "src/Network-DNS-Internal.html#RCODE",
        "fct-type": "function",
        "title": "FormatErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "FormatErr",
        "normalized": "",
        "package": "dns",
        "partial": "Format Err",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:MX",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "MX",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "function",
        "title": "MX"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "MX",
        "normalized": "",
        "package": "dns",
        "partial": "MX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:NS",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "NS",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "function",
        "title": "NS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "NS",
        "normalized": "",
        "package": "dns",
        "partial": "NS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:NameErr",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "NameErr",
        "fct-source": "src/Network-DNS-Internal.html#RCODE",
        "fct-type": "function",
        "title": "NameErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "NameErr",
        "normalized": "",
        "package": "dns",
        "partial": "Name Err",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:NoErr",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "NoErr",
        "fct-source": "src/Network-DNS-Internal.html#RCODE",
        "fct-type": "function",
        "title": "NoErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "NoErr",
        "normalized": "",
        "package": "dns",
        "partial": "No Err",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:NotImpl",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "NotImpl",
        "fct-source": "src/Network-DNS-Internal.html#RCODE",
        "fct-type": "function",
        "title": "NotImpl"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "NotImpl",
        "normalized": "",
        "package": "dns",
        "partial": "Not Impl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:OP_INV",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "OP_INV",
        "fct-source": "src/Network-DNS-Internal.html#OPCODE",
        "fct-type": "function",
        "title": "OP_INV"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "OP_INV",
        "normalized": "",
        "package": "dns",
        "partial": "OP INV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:OP_SSR",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "OP_SSR",
        "fct-source": "src/Network-DNS-Internal.html#OPCODE",
        "fct-type": "function",
        "title": "OP_SSR"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "OP_SSR",
        "normalized": "",
        "package": "dns",
        "partial": "OP SSR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:OP_STD",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "OP_STD",
        "fct-source": "src/Network-DNS-Internal.html#OPCODE",
        "fct-type": "function",
        "title": "OP_STD"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "OP_STD",
        "normalized": "",
        "package": "dns",
        "partial": "OP STD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:PTR",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "PTR",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "function",
        "title": "PTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "PTR",
        "normalized": "",
        "package": "dns",
        "partial": "PTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:QR_Query",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "QR_Query",
        "fct-source": "src/Network-DNS-Internal.html#QorR",
        "fct-type": "function",
        "title": "QR_Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "QR_Query",
        "normalized": "",
        "package": "dns",
        "partial": "QR Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:QR_Response",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "QR_Response",
        "fct-source": "src/Network-DNS-Internal.html#QorR",
        "fct-type": "function",
        "title": "QR_Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "QR_Response",
        "normalized": "",
        "package": "dns",
        "partial": "QR Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:Question",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Question",
        "fct-source": "src/Network-DNS-Internal.html#Question",
        "fct-type": "function",
        "title": "Question"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "Question",
        "normalized": "",
        "package": "dns",
        "partial": "Question",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_A",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RD_A IPv4",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "function",
        "title": "RD_A"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RD_A",
        "normalized": "",
        "package": "dns",
        "partial": "RD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_AAAA",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RD_AAAA IPv6",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "function",
        "title": "RD_AAAA"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RD_AAAA",
        "normalized": "",
        "package": "dns",
        "partial": "RD AAAA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_CNAME",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RD_CNAME Domain",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "function",
        "title": "RD_CNAME"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RD_CNAME",
        "normalized": "",
        "package": "dns",
        "partial": "RD CNAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_MX",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RD_MX Int Domain",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "function",
        "title": "RD_MX"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RD_MX",
        "normalized": "",
        "package": "dns",
        "partial": "RD MX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_NS",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RD_NS Domain",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "function",
        "title": "RD_NS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RD_NS",
        "normalized": "",
        "package": "dns",
        "partial": "RD NS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_OTH",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RD_OTH [Int]",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "function",
        "title": "RD_OTH"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RD_OTH",
        "normalized": "RD_OTH[Int]",
        "package": "dns",
        "partial": "RD OTH",
        "signature": "RD_OTH[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_PTR",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RD_PTR Domain",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "function",
        "title": "RD_PTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RD_PTR",
        "normalized": "",
        "package": "dns",
        "partial": "RD PTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_SOA",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RD_SOA Domain Domain Int Int Int Int Int",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "function",
        "title": "RD_SOA"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RD_SOA",
        "normalized": "",
        "package": "dns",
        "partial": "RD SOA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_SRV",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RD_SRV Int Int Int Domain",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "function",
        "title": "RD_SRV"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RD_SRV",
        "normalized": "",
        "package": "dns",
        "partial": "RD SRV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_TXT",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RD_TXT ByteString",
        "fct-source": "src/Network-DNS-Internal.html#RDATA",
        "fct-type": "function",
        "title": "RD_TXT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "RD_TXT",
        "normalized": "",
        "package": "dns",
        "partial": "RD TXT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:Refused",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Refused",
        "fct-source": "src/Network-DNS-Internal.html#RCODE",
        "fct-type": "function",
        "title": "Refused"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "Refused",
        "normalized": "",
        "package": "dns",
        "partial": "Refused",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:ResourceRecord",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "ResourceRecord",
        "fct-source": "src/Network-DNS-Internal.html#ResourceRecord",
        "fct-type": "function",
        "title": "ResourceRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "ResourceRecord",
        "normalized": "",
        "package": "dns",
        "partial": "Resource Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:SOA",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "SOA",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "function",
        "title": "SOA"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "SOA",
        "normalized": "",
        "package": "dns",
        "partial": "SOA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:SRV",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "SRV",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "function",
        "title": "SRV"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "SRV",
        "normalized": "",
        "package": "dns",
        "partial": "SRV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:SequenceNumberMismatch",
      "description": {
        "fct-descr": "\u003cp\u003eThe sequence number of the answer doesn't match our query. This\n   could indicate foul play.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "SequenceNumberMismatch",
        "fct-source": "src/Network-DNS-Internal.html#DNSError",
        "fct-type": "function",
        "title": "SequenceNumberMismatch"
      },
      "index": {
        "description": "The sequence number of the answer doesn match our query This could indicate foul play",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "SequenceNumberMismatch",
        "normalized": "",
        "package": "dns",
        "partial": "Sequence Number Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:ServFail",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "ServFail",
        "fct-source": "src/Network-DNS-Internal.html#RCODE",
        "fct-type": "function",
        "title": "ServFail"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "ServFail",
        "normalized": "",
        "package": "dns",
        "partial": "Serv Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:TXT",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "TXT",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "function",
        "title": "TXT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "TXT",
        "normalized": "",
        "package": "dns",
        "partial": "TXT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:TimeoutExpired",
      "description": {
        "fct-descr": "\u003cp\u003eThe request simply timed out.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "TimeoutExpired",
        "fct-source": "src/Network-DNS-Internal.html#DNSError",
        "fct-type": "function",
        "title": "TimeoutExpired"
      },
      "index": {
        "description": "The request simply timed out",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "TimeoutExpired",
        "normalized": "",
        "package": "dns",
        "partial": "Timeout Expired",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:UNKNOWN",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "UNKNOWN Int",
        "fct-source": "src/Network-DNS-Internal.html#TYPE",
        "fct-type": "function",
        "title": "UNKNOWN"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "UNKNOWN",
        "normalized": "",
        "package": "dns",
        "partial": "UNKNOWN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:UnexpectedRDATA",
      "description": {
        "fct-descr": "\u003cp\u003eThe answer has the correct sequence number, but returned an\n   unexpected RDATA format.\n\u003c/p\u003e",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "UnexpectedRDATA",
        "fct-source": "src/Network-DNS-Internal.html#DNSError",
        "fct-type": "function",
        "title": "UnexpectedRDATA"
      },
      "index": {
        "description": "The answer has the correct sequence number but returned an unexpected RDATA format",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "UnexpectedRDATA",
        "normalized": "",
        "package": "dns",
        "partial": "Unexpected RDATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:additional",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "[ResourceRecord]",
        "fct-source": "src/Network-DNS-Internal.html#DNSFormat",
        "fct-type": "function",
        "title": "additional"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "additional",
        "normalized": "[ResourceRecord]",
        "package": "dns",
        "partial": "",
        "signature": "[ResourceRecord]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:anCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Int",
        "fct-source": "src/Network-DNS-Internal.html#DNSHeader",
        "fct-type": "function",
        "title": "anCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "anCount",
        "normalized": "",
        "package": "dns",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:answer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "[ResourceRecord]",
        "fct-source": "src/Network-DNS-Internal.html#DNSFormat",
        "fct-type": "function",
        "title": "answer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "answer",
        "normalized": "[ResourceRecord]",
        "package": "dns",
        "partial": "",
        "signature": "[ResourceRecord]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:arCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Int",
        "fct-source": "src/Network-DNS-Internal.html#DNSHeader",
        "fct-type": "function",
        "title": "arCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "arCount",
        "normalized": "",
        "package": "dns",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:authAnswer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Bool",
        "fct-source": "src/Network-DNS-Internal.html#DNSFlags",
        "fct-type": "function",
        "title": "authAnswer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "authAnswer",
        "normalized": "",
        "package": "dns",
        "partial": "Answer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:authority",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "[ResourceRecord]",
        "fct-source": "src/Network-DNS-Internal.html#DNSFormat",
        "fct-type": "function",
        "title": "authority"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "authority",
        "normalized": "[ResourceRecord]",
        "package": "dns",
        "partial": "",
        "signature": "[ResourceRecord]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:flags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "DNSFlags",
        "fct-source": "src/Network-DNS-Internal.html#DNSHeader",
        "fct-type": "function",
        "title": "flags"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "flags",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:header",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "DNSHeader",
        "fct-source": "src/Network-DNS-Internal.html#DNSFormat",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "header",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:identifier",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Int",
        "fct-source": "src/Network-DNS-Internal.html#DNSHeader",
        "fct-type": "function",
        "title": "identifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "identifier",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:intToType",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Int -\u003e TYPE",
        "fct-source": "src/Network-DNS-Internal.html#intToType",
        "fct-type": "function",
        "title": "intToType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "intToType",
        "normalized": "Int-\u003eTYPE",
        "package": "dns",
        "partial": "To Type",
        "signature": "Int-\u003eTYPE"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:nsCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Int",
        "fct-source": "src/Network-DNS-Internal.html#DNSHeader",
        "fct-type": "function",
        "title": "nsCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "nsCount",
        "normalized": "",
        "package": "dns",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:opcode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "OPCODE",
        "fct-source": "src/Network-DNS-Internal.html#DNSFlags",
        "fct-type": "function",
        "title": "opcode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "opcode",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:qOrR",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "QorR",
        "fct-source": "src/Network-DNS-Internal.html#DNSFlags",
        "fct-type": "function",
        "title": "qOrR"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "qOrR",
        "normalized": "",
        "package": "dns",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:qdCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Int",
        "fct-source": "src/Network-DNS-Internal.html#DNSHeader",
        "fct-type": "function",
        "title": "qdCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "qdCount",
        "normalized": "",
        "package": "dns",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:qname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Domain",
        "fct-source": "src/Network-DNS-Internal.html#Question",
        "fct-type": "function",
        "title": "qname"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "qname",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:qtype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "TYPE",
        "fct-source": "src/Network-DNS-Internal.html#Question",
        "fct-type": "function",
        "title": "qtype"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "qtype",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:question",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "[Question]",
        "fct-source": "src/Network-DNS-Internal.html#DNSFormat",
        "fct-type": "function",
        "title": "question"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "question",
        "normalized": "[Question]",
        "package": "dns",
        "partial": "",
        "signature": "[Question]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rcode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RCODE",
        "fct-source": "src/Network-DNS-Internal.html#DNSFlags",
        "fct-type": "function",
        "title": "rcode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "rcode",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rdata",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "RDATA",
        "fct-source": "src/Network-DNS-Internal.html#ResourceRecord",
        "fct-type": "function",
        "title": "rdata"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "rdata",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rdlen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Int",
        "fct-source": "src/Network-DNS-Internal.html#ResourceRecord",
        "fct-type": "function",
        "title": "rdlen"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "rdlen",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:recAvailable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Bool",
        "fct-source": "src/Network-DNS-Internal.html#DNSFlags",
        "fct-type": "function",
        "title": "recAvailable"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "recAvailable",
        "normalized": "",
        "package": "dns",
        "partial": "Available",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:recDesired",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Bool",
        "fct-source": "src/Network-DNS-Internal.html#DNSFlags",
        "fct-type": "function",
        "title": "recDesired"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "recDesired",
        "normalized": "",
        "package": "dns",
        "partial": "Desired",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:responseA",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Int -\u003e Question -\u003e IPv4 -\u003e DNSFormat",
        "fct-source": "src/Network-DNS-Internal.html#responseA",
        "fct-type": "function",
        "title": "responseA"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "responseA",
        "normalized": "Int-\u003eQuestion-\u003eIPv-\u003eDNSFormat",
        "package": "dns",
        "partial": "",
        "signature": "Int-\u003eQuestion-\u003eIPv-\u003eDNSFormat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:responseAAAA",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Int -\u003e Question -\u003e IPv6 -\u003e DNSFormat",
        "fct-source": "src/Network-DNS-Internal.html#responseAAAA",
        "fct-type": "function",
        "title": "responseAAAA"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "responseAAAA",
        "normalized": "Int-\u003eQuestion-\u003eIPv-\u003eDNSFormat",
        "package": "dns",
        "partial": "AAAA",
        "signature": "Int-\u003eQuestion-\u003eIPv-\u003eDNSFormat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rrname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Domain",
        "fct-source": "src/Network-DNS-Internal.html#ResourceRecord",
        "fct-type": "function",
        "title": "rrname"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "rrname",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rrttl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Int",
        "fct-source": "src/Network-DNS-Internal.html#ResourceRecord",
        "fct-type": "function",
        "title": "rrttl"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "rrttl",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rrtype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "TYPE",
        "fct-source": "src/Network-DNS-Internal.html#ResourceRecord",
        "fct-type": "function",
        "title": "rrtype"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "rrtype",
        "normalized": "",
        "package": "dns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:toType",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "String -\u003e TYPE",
        "fct-source": "src/Network-DNS-Internal.html#toType",
        "fct-type": "function",
        "title": "toType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "toType",
        "normalized": "String-\u003eTYPE",
        "package": "dns",
        "partial": "Type",
        "signature": "String-\u003eTYPE"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:trunCation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "Bool",
        "fct-source": "src/Network-DNS-Internal.html#DNSFlags",
        "fct-type": "function",
        "title": "trunCation"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "trunCation",
        "normalized": "",
        "package": "dns",
        "partial": "Cation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:typeToInt",
      "description": {
        "fct-module": "Network.DNS.Types",
        "fct-package": "dns",
        "fct-signature": "TYPE -\u003e Int",
        "fct-source": "src/Network-DNS-Internal.html#typeToInt",
        "fct-type": "function",
        "title": "typeToInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DNS Types",
        "module": "Network.DNS.Types",
        "name": "typeToInt",
        "normalized": "TYPE-\u003eInt",
        "package": "dns",
        "partial": "To Int",
        "signature": "TYPE-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA thread-safe DNS library for both clients and servers written\n   in pure Haskell.\n   The Network.DNS module re-exports all other exposed modules for\n   convenience.\n   Applications will most likely use the high-level interface, while\n   library/daemon authors may need to use the lower-level one.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.DNS",
        "fct-package": "dns",
        "fct-signature": "module",
        "fct-source": "src/Network-DNS.html",
        "fct-type": "module",
        "title": "DNS"
      },
      "index": {
        "description": "thread-safe DNS library for both clients and servers written in pure Haskell The Network.DNS module re-exports all other exposed modules for convenience Applications will most likely use the high-level interface while library daemon authors may need to use the lower-level one",
        "hierarchy": "Network DNS",
        "module": "Network.DNS",
        "name": "DNS",
        "normalized": "",
        "package": "dns",
        "partial": "DNS",
        "signature": ""
      }
    }
  }
]