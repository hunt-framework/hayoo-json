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
        "word": "dns"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Decode",
          "name": "Decode",
          "package": "dns",
          "source": "src/Network-DNS-Decode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network DNS Decode",
          "module": "Network.DNS.Decode",
          "name": "Decode",
          "package": "dns",
          "partial": "Decode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Decode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing DNS data.\n\u003c/p\u003e",
          "module": "Network.DNS.Decode",
          "name": "decode",
          "package": "dns",
          "signature": "ByteString -\u003e Either String DNSFormat",
          "source": "src/Network-DNS-Decode.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Parsing DNS data",
          "hierarchy": "Network DNS Decode",
          "module": "Network.DNS.Decode",
          "name": "decode",
          "normalized": "ByteString-\u003eEither String DNSFormat",
          "package": "dns",
          "signature": "ByteString-\u003eEither String DNSFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Decode.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceiving DNS data from \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e and parse it.\n\u003c/p\u003e",
          "module": "Network.DNS.Decode",
          "name": "receive",
          "package": "dns",
          "signature": "Socket -\u003e IO DNSFormat",
          "source": "src/Network-DNS-Decode.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receiving DNS data from Socket and parse it",
          "hierarchy": "Network DNS Decode",
          "module": "Network.DNS.Decode",
          "name": "receive",
          "normalized": "Socket-\u003eIO DNSFormat",
          "package": "dns",
          "signature": "Socket-\u003eIO DNSFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Decode.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Encode",
          "name": "Encode",
          "package": "dns",
          "source": "src/Network-DNS-Encode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network DNS Encode",
          "module": "Network.DNS.Encode",
          "name": "Encode",
          "package": "dns",
          "partial": "Encode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Encode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposing query. First argument is a number to identify response.\n\u003c/p\u003e",
          "module": "Network.DNS.Encode",
          "name": "composeQuery",
          "package": "dns",
          "signature": "Int -\u003e [Question] -\u003e ByteString",
          "source": "src/Network-DNS-Encode.html#composeQuery",
          "type": "function"
        },
        "index": {
          "description": "Composing query First argument is number to identify response",
          "hierarchy": "Network DNS Encode",
          "module": "Network.DNS.Encode",
          "name": "composeQuery",
          "normalized": "Int-\u003e[Question]-\u003eByteString",
          "package": "dns",
          "partial": "Query",
          "signature": "Int-\u003e[Question]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Encode.html#v:composeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposing DNS data.\n\u003c/p\u003e",
          "module": "Network.DNS.Encode",
          "name": "encode",
          "package": "dns",
          "signature": "DNSFormat -\u003e ByteString",
          "source": "src/Network-DNS-Encode.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Composing DNS data",
          "hierarchy": "Network DNS Encode",
          "module": "Network.DNS.Encode",
          "name": "encode",
          "normalized": "DNSFormat-\u003eByteString",
          "package": "dns",
          "signature": "DNSFormat-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Encode.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, high-level DNS lookup functions.\n\u003c/p\u003e\u003cp\u003eAll of the lookup functions necessary run in IO, since they\n   interact with the network. The return types are similar, but\n   differ in what can be returned from a successful lookup.\n\u003c/p\u003e\u003cp\u003eWe can think of the return type as \"either what I asked for, or\n   an error\". For example, the \u003ccode\u003e\u003ca\u003elookupA\u003c/a\u003e\u003c/code\u003e function, if successful,\n   will return a list of \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003elookupMX\u003c/a\u003e\u003c/code\u003e function will\n   instead return a list of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eDomain\u003c/a\u003e\u003c/code\u003e,Int)\u003c/code\u003e pairs, where each pair\n   represents a hostname and its associated priority.\n\u003c/p\u003e\u003cp\u003eThe order of multiple results may not be consistent between\n   lookups. If you require consistent results, apply\n   \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e to the returned list.\n\u003c/p\u003e\u003cp\u003eThe errors that can occur are the same for all lookups. Namely:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Timeout\n\u003c/li\u003e\u003cli\u003e Wrong sequence number (foul play?)\n\u003c/li\u003e\u003cli\u003e Unexpected data in the response\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf an error occurs, you should be able to pattern match on the\n   \u003ccode\u003e\u003ca\u003eDNSError\u003c/a\u003e\u003c/code\u003e constructor to determine which of these is the case.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: A result of \"no records\" is not considered an\n   error. If you perform, say, an 'AAAA' lookup for a domain with\n   no such records, the \"success\" result would be \u003ccode\u003eRight []\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe perform a successful lookup of \"www.example.com\":\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.example.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupA resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [93.184.216.119]\n\u003c/pre\u003e\u003cp\u003eThe only error that we can easily cause is a timeout. We do this\n   by creating and utilizing a \u003ccode\u003e\u003ca\u003eResolvConf\u003c/a\u003e\u003c/code\u003e which has a timeout of\n   one millisecond:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.example.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet badrc = defaultResolvConf { resolvTimeout = 1 }\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed badrc\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupA resolver hostname\n\u003c/code\u003e\u003c/strong\u003eLeft TimeoutExpired\n\u003c/pre\u003e\u003cp\u003eAs is the convention, successful results will always be wrapped\n   in a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e, while errors will be wrapped in a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor convenience, you may wish to enable GHC's OverloadedStrings\n   extension. This will allow you to avoid calling\n   \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e on each domain name. See\n   \u003ca\u003ehttp://www.haskell.org/ghc/docs/7.6.3/html/users_guide/type-class-extensions.html#overloaded-strings\u003c/a\u003e\n   for more information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DNS.Lookup",
          "name": "Lookup",
          "package": "dns",
          "source": "src/Network-DNS-Lookup.html",
          "type": "module"
        },
        "index": {
          "description": "Simple high-level DNS lookup functions All of the lookup functions necessary run in IO since they interact with the network The return types are similar but differ in what can be returned from successful lookup We can think of the return type as either what asked for or an error For example the lookupA function if successful will return list of IPv4 The lookupMX function will instead return list of Domain Int pairs where each pair represents hostname and its associated priority The order of multiple results may not be consistent between lookups If you require consistent results apply sort to the returned list The errors that can occur are the same for all lookups Namely Timeout Wrong sequence number foul play Unexpected data in the response If an error occurs you should be able to pattern match on the DNSError constructor to determine which of these is the case Note result of no records is not considered an error If you perform say an AAAA lookup for domain with no such records the success result would be Right We perform successful lookup of www.example.com let hostname Data.ByteString.Char8.pack www.example.com rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupA resolver hostname Right The only error that we can easily cause is timeout We do this by creating and utilizing ResolvConf which has timeout of one millisecond let hostname Data.ByteString.Char8.pack www.example.com let badrc defaultResolvConf resolvTimeout rs makeResolvSeed badrc withResolver rs resolver lookupA resolver hostname Left TimeoutExpired As is the convention successful results will always be wrapped in Right while errors will be wrapped in Left For convenience you may wish to enable GHC OverloadedStrings extension This will allow you to avoid calling pack on each domain name See http www.haskell.org ghc docs html users guide type-class-extensions.html overloaded-strings for more information",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "Lookup",
          "package": "dns",
          "partial": "Lookup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up all 'A' records for the given hostname.\n\u003c/p\u003e\u003cp\u003eA straightforward example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.mew.org\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupA resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [202.232.15.101]\n\u003c/pre\u003e\u003cp\u003eThis function will also follow a CNAME and resolve its target if\n   one exists for the queries hostname:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.kame.net\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupA resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [203.178.141.194]\n\u003c/pre\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupA",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [IPv4])",
          "source": "src/Network-DNS-Lookup.html#lookupA",
          "type": "function"
        },
        "index": {
          "description": "Look up all records for the given hostname straightforward example let hostname Data.ByteString.Char8.pack www.mew.org rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupA resolver hostname Right This function will also follow CNAME and resolve its target if one exists for the queries hostname let hostname Data.ByteString.Char8.pack www.kame.net rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupA resolver hostname Right",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupA",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
          "package": "dns",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up all (IPv6) 'AAAA' records for the given hostname.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.mew.org\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupAAAA resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [2001:240:11e:c00:00:00:00:101]\n\u003c/pre\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupAAAA",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [IPv6])",
          "source": "src/Network-DNS-Lookup.html#lookupAAAA",
          "type": "function"
        },
        "index": {
          "description": "Look up all IPv6 AAAA records for the given hostname Examples let hostname Data.ByteString.Char8.pack www.mew.org rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupAAAA resolver hostname Right c00",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupAAAA",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
          "package": "dns",
          "partial": "AAAA",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupAAAA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up all 'MX' records for the given hostname, and then\n   resolve their hostnames to IPv6 addresses by calling\n   \u003ccode\u003e\u003ca\u003elookupAAAA\u003c/a\u003e\u003c/code\u003e. The priorities are not retained.\n\u003c/p\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupAAAAviaMX",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [IPv6])",
          "source": "src/Network-DNS-Lookup.html#lookupAAAAviaMX",
          "type": "function"
        },
        "index": {
          "description": "Look up all MX records for the given hostname and then resolve their hostnames to IPv6 addresses by calling lookupAAAA The priorities are not retained",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupAAAAviaMX",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
          "package": "dns",
          "partial": "AAAAvia MX",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupAAAAviaMX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up all 'MX' records for the given hostname, and then\n   resolve their hostnames to IPv4 addresses by calling\n   \u003ccode\u003e\u003ca\u003elookupA\u003c/a\u003e\u003c/code\u003e. The priorities are not retained.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.List (sort)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"mixi.jp\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eips \u003c- withResolver rs $ \\resolver -\u003e lookupAviaMX resolver hostname\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap sort ips\n\u003c/code\u003e\u003c/strong\u003eRight [202.32.29.4,202.32.29.5]\n\u003c/pre\u003e\u003cp\u003eSince there is more than one result, it is necessary to sort the\n   list in order to check for equality.\n\u003c/p\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupAviaMX",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [IPv4])",
          "source": "src/Network-DNS-Lookup.html#lookupAviaMX",
          "type": "function"
        },
        "index": {
          "description": "Look up all MX records for the given hostname and then resolve their hostnames to IPv4 addresses by calling lookupA The priorities are not retained Examples import Data.List sort let hostname Data.ByteString.Char8.pack mixi.jp rs makeResolvSeed defaultResolvConf ips withResolver rs resolver lookupAviaMX resolver hostname fmap sort ips Right Since there is more than one result it is necessary to sort the list in order to check for equality",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupAviaMX",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
          "package": "dns",
          "partial": "Avia MX",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[IPv])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupAviaMX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up all 'MX' records for the given hostname. Two parts\n   constitute an MX record: a hostname , and an integer priority. We\n   therefore return each record as a \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eDomain\u003c/a\u003e\u003c/code\u003e, Int)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn this first example, we look up the MX for the domain\n   \"example.com\". It has no MX (to prevent a deluge of spam from\n   examples posted on the internet). But remember, \"no results\" is\n   still a successful result.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"example.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupMX resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight []\n\u003c/pre\u003e\u003cp\u003eThe domain \"mew.org\" does however have a single MX:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"mew.org\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupMX resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [(\"mail.mew.org.\",10)]\n\u003c/pre\u003e\u003cp\u003eAlso note that all hostnames are returned with a trailing dot to\n   indicate the DNS root.\n\u003c/p\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupMX",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [(Domain, Int)])",
          "source": "src/Network-DNS-Lookup.html#lookupMX",
          "type": "function"
        },
        "index": {
          "description": "Look up all MX records for the given hostname Two parts constitute an MX record hostname and an integer priority We therefore return each record as Domain Int In this first example we look up the MX for the domain example.com It has no MX to prevent deluge of spam from examples posted on the internet But remember no results is still successful result let hostname Data.ByteString.Char8.pack example.com rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupMX resolver hostname Right The domain mew.org does however have single MX let hostname Data.ByteString.Char8.pack mew.org rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupMX resolver hostname Right mail.mew.org Also note that all hostnames are returned with trailing dot to indicate the DNS root",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupMX",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[(Domain,Int)])",
          "package": "dns",
          "partial": "MX",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[(Domain,Int)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupMX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up all 'NS' records for the given hostname. The results\n   are taken from the ANSWER section of the response (as opposed to\n   AUTHORITY). For details, see e.g.\n   \u003ca\u003ehttp://www.zytrax.com/books/dns/ch15/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere will typically be more than one name server for a\n   domain. It is therefore extra important to sort the results if\n   you prefer them to be at all deterministic.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.List (sort)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"mew.org\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ens \u003c- withResolver rs $ \\resolver -\u003e lookupNS resolver hostname\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap sort ns\n\u003c/code\u003e\u003c/strong\u003eRight [\"ns1.mew.org.\",\"ns2.mew.org.\"]\n\u003c/pre\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupNS",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [Domain])",
          "source": "src/Network-DNS-Lookup.html#lookupNS",
          "type": "function"
        },
        "index": {
          "description": "Look up all NS records for the given hostname The results are taken from the ANSWER section of the response as opposed to AUTHORITY For details see e.g http www.zytrax.com books dns ch15 There will typically be more than one name server for domain It is therefore extra important to sort the results if you prefer them to be at all deterministic Examples import Data.List sort let hostname Data.ByteString.Char8.pack mew.org rs makeResolvSeed defaultResolvConf ns withResolver rs resolver lookupNS resolver hostname fmap sort ns Right ns1.mew.org ns2.mew.org",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupNS",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
          "package": "dns",
          "partial": "NS",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up all 'NS' records for the given hostname. The results\n   are taken from the AUTHORITY section of the response and not the\n   usual ANSWER (use \u003ccode\u003e\u003ca\u003elookupNS\u003c/a\u003e\u003c/code\u003e for that). For details, see e.g.\n   \u003ca\u003ehttp://www.zytrax.com/books/dns/ch15/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere will typically be more than one name server for a\n   domain. It is therefore extra important to sort the results if\n   you prefer them to be at all deterministic.\n\u003c/p\u003e\u003cp\u003eFor an example, we can look up the nameservers for\n   \"example.com\" from one of the root servers, a.gtld-servers.net,\n   the IP address of which was found beforehand:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.List (sort)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"example.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet ri = RCHostName \"192.5.6.30\" -- a.gtld-servers.net\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet rc = defaultResolvConf { resolvInfo = ri }\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed rc\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ens \u003c- withResolver rs $ \\resolver -\u003e lookupNSAuth resolver hostname\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap sort ns\n\u003c/code\u003e\u003c/strong\u003eRight [\"a.iana-servers.net.\",\"b.iana-servers.net.\"]\n\u003c/pre\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupNSAuth",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [Domain])",
          "source": "src/Network-DNS-Lookup.html#lookupNSAuth",
          "type": "function"
        },
        "index": {
          "description": "Look up all NS records for the given hostname The results are taken from the AUTHORITY section of the response and not the usual ANSWER use lookupNS for that For details see e.g http www.zytrax.com books dns ch15 There will typically be more than one name server for domain It is therefore extra important to sort the results if you prefer them to be at all deterministic For an example we can look up the nameservers for example.com from one of the root servers a.gtld-servers.net the IP address of which was found beforehand import Data.List sort let hostname Data.ByteString.Char8.pack example.com let ri RCHostName a.gtld-servers.net let rc defaultResolvConf resolvInfo ri rs makeResolvSeed rc ns withResolver rs resolver lookupNSAuth resolver hostname fmap sort ns Right a.iana-servers.net b.iana-servers.net",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupNSAuth",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
          "package": "dns",
          "partial": "NSAuth",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupNSAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up all 'PTR' records for the given hostname. To perform a\n   reverse lookup on an IP address, you must first reverse its\n   octets and then append the suffix \".in-addr.arpa.\"\n\u003c/p\u003e\u003cp\u003eWe look up the PTR associated with the IP address\n   210.130.137.80, i.e., 80.137.130.210.in-addr.arpa:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"80.137.130.210.in-addr.arpa\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupPTR resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [\"www-v4.iij.ad.jp.\"]\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elookupRDNS\u003c/a\u003e\u003c/code\u003e function is more suited to this particular task.\n\u003c/p\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupPTR",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [Domain])",
          "source": "src/Network-DNS-Lookup.html#lookupPTR",
          "type": "function"
        },
        "index": {
          "description": "Look up all PTR records for the given hostname To perform reverse lookup on an IP address you must first reverse its octets and then append the suffix in-addr.arpa We look up the PTR associated with the IP address i.e in-addr.arpa let hostname Data.ByteString.Char8.pack in-addr.arpa rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupPTR resolver hostname Right www-v4.iij.ad.jp The lookupRDNS function is more suited to this particular task",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupPTR",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
          "package": "dns",
          "partial": "PTR",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupPTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient wrapper around \u003ccode\u003e\u003ca\u003elookupPTR\u003c/a\u003e\u003c/code\u003e to perform a reverse lookup\n   on a single IP address.\n\u003c/p\u003e\u003cp\u003eWe repeat the example from \u003ccode\u003e\u003ca\u003elookupPTR\u003c/a\u003e\u003c/code\u003e, except now we pass the IP\n   address directly:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"210.130.137.80\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupRDNS resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [\"www-v4.iij.ad.jp.\"]\n\u003c/pre\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupRDNS",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [Domain])",
          "source": "src/Network-DNS-Lookup.html#lookupRDNS",
          "type": "function"
        },
        "index": {
          "description": "Convenient wrapper around lookupPTR to perform reverse lookup on single IP address We repeat the example from lookupPTR except now we pass the IP address directly let hostname Data.ByteString.Char8.pack rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupRDNS resolver hostname Right www-v4.iij.ad.jp",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupRDNS",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
          "package": "dns",
          "partial": "RDNS",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[Domain])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupRDNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up all 'SRV' records for the given hostname. A SRV record\n   comprises four fields,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Priority (lower is more-preferred)\n\u003c/li\u003e\u003cli\u003e Weight (relative frequency with which to use this record\n       amongst all results with the same priority)\n\u003c/li\u003e\u003cli\u003e Port (the port on which the service is offered)\n\u003c/li\u003e\u003cli\u003e Target (the hostname on which the service is offered)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe first three are integral, and the target is another DNS\n   hostname. We therefore return a four-tuple\n   \u003ccode\u003e(Int,Int,Int,\u003ccode\u003e\u003ca\u003eDomain\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"_sip._tcp.cisco.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupSRV resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [(1,0,5060,\"vcsgw.cisco.com.\")]\n\u003c/pre\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupSRV",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [(Int, Int, Int, Domain)])",
          "source": "src/Network-DNS-Lookup.html#lookupSRV",
          "type": "function"
        },
        "index": {
          "description": "Look up all SRV records for the given hostname SRV record comprises four fields Priority lower is more-preferred Weight relative frequency with which to use this record amongst all results with the same priority Port the port on which the service is offered Target the hostname on which the service is offered The first three are integral and the target is another DNS hostname We therefore return four-tuple Int Int Int Domain Examples let hostname Data.ByteString.Char8.pack sip tcp.cisco.com rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupSRV resolver hostname Right vcsgw.cisco.com",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupSRV",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[(Int,Int,Int,Domain)])",
          "package": "dns",
          "partial": "SRV",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[(Int,Int,Int,Domain)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupSRV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up all 'TXT' records for the given hostname. The results\n   are free-form \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eTwo common uses for 'TXT' records are\n   \u003ca\u003ehttp://en.wikipedia.org/wiki/Sender_Policy_Framework\u003c/a\u003e and\n   \u003ca\u003ehttp://en.wikipedia.org/wiki/DomainKeys_Identified_Mail\u003c/a\u003e. As an\n   example, we find the SPF record for \"mew.org\":\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"mew.org\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookupTXT resolver hostname\n\u003c/code\u003e\u003c/strong\u003eRight [\"v=spf1 +mx -all\"]\n\u003c/pre\u003e",
          "module": "Network.DNS.Lookup",
          "name": "lookupTXT",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e IO (Either DNSError [ByteString])",
          "source": "src/Network-DNS-Lookup.html#lookupTXT",
          "type": "function"
        },
        "index": {
          "description": "Look up all TXT records for the given hostname The results are free-form ByteString Two common uses for TXT records are http en.wikipedia.org wiki Sender Policy Framework and http en.wikipedia.org wiki DomainKeys Identified Mail As an example we find the SPF record for mew.org let hostname Data.ByteString.Char8.pack mew.org rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupTXT resolver hostname Right spf1 mx all",
          "hierarchy": "Network DNS Lookup",
          "module": "Network.DNS.Lookup",
          "name": "lookupTXT",
          "normalized": "Resolver-\u003eDomain-\u003eIO(Either DNSError[ByteString])",
          "package": "dns",
          "partial": "TXT",
          "signature": "Resolver-\u003eDomain-\u003eIO(Either DNSError[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Lookup.html#v:lookupTXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDNS Resolver and generic (lower-level) lookup functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DNS.Resolver",
          "name": "Resolver",
          "package": "dns",
          "source": "src/Network-DNS-Resolver.html",
          "type": "module"
        },
        "index": {
          "description": "DNS Resolver and generic lower-level lookup functions",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "Resolver",
          "package": "dns",
          "partial": "Resolver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion type for \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHostName\u003c/a\u003e\u003c/code\u003e. Specify \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to\n   \"resolv.conf\" or numeric IP address in \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e form.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: Only numeric IP addresses are valid \u003ccode\u003eRCHostName\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eExample (using Google's public DNS cache):\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet cache = RCHostName \"8.8.8.8\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
          "module": "Network.DNS.Resolver",
          "name": "FileOrNumericHost",
          "package": "dns",
          "source": "src/Network-DNS-Resolver.html#FileOrNumericHost",
          "type": "data"
        },
        "index": {
          "description": "Union type for FilePath and HostName Specify FilePath to resolv.conf or numeric IP address in String form Warning Only numeric IP addresses are valid RCHostName Example using Google public DNS cache let cache RCHostName",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "FileOrNumericHost",
          "package": "dns",
          "partial": "File Or Numeric Host",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#t:FileOrNumericHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for resolver configuration. The easiest way to construct a\n   \u003ccode\u003eResolvConf\u003c/code\u003e object is to modify the \u003ccode\u003e\u003ca\u003edefaultResolvConf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "ResolvConf",
          "package": "dns",
          "source": "src/Network-DNS-Resolver.html#ResolvConf",
          "type": "data"
        },
        "index": {
          "description": "Type for resolver configuration The easiest way to construct ResolvConf object is to modify the defaultResolvConf",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "ResolvConf",
          "package": "dns",
          "partial": "Resolv Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#t:ResolvConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type of DNS Resolver seed.\n   When implementing a DNS cache, this should be re-used.\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "ResolvSeed",
          "package": "dns",
          "source": "src/Network-DNS-Resolver.html#ResolvSeed",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type of DNS Resolver seed When implementing DNS cache this should be re-used",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "ResolvSeed",
          "package": "dns",
          "partial": "Resolv Seed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#t:ResolvSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type of DNS Resolver\n   When implementing a DNS cache, this MUST NOT be re-used.\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "Resolver",
          "package": "dns",
          "source": "src/Network-DNS-Resolver.html#Resolver",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type of DNS Resolver When implementing DNS cache this MUST NOT be re-used",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "Resolver",
          "package": "dns",
          "partial": "Resolver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#t:Resolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path for \"resolv.conf\"\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "RCFilePath",
          "package": "dns",
          "signature": "RCFilePath FilePath",
          "source": "src/Network-DNS-Resolver.html#FileOrNumericHost",
          "type": "function"
        },
        "index": {
          "description": "path for resolv.conf",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "RCFilePath",
          "package": "dns",
          "partial": "RCFile Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:RCFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numeric IP address\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "RCHostName",
          "package": "dns",
          "signature": "RCHostName HostName",
          "source": "src/Network-DNS-Resolver.html#FileOrNumericHost",
          "type": "function"
        },
        "index": {
          "description": "numeric IP address",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "RCHostName",
          "package": "dns",
          "partial": "RCHost Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:RCHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Resolver",
          "name": "ResolvConf",
          "package": "dns",
          "signature": "ResolvConf",
          "source": "src/Network-DNS-Resolver.html#ResolvConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "ResolvConf",
          "package": "dns",
          "partial": "Resolv Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:ResolvConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Resolver",
          "name": "Resolver",
          "package": "dns",
          "signature": "Resolver",
          "source": "src/Network-DNS-Resolver.html#Resolver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "Resolver",
          "package": "dns",
          "partial": "Resolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:Resolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a default \u003ccode\u003e\u003ca\u003eResolvConf\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eresolvInfo\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRCFilePath\u003c/a\u003e\u003c/code\u003e \"/etc/resolv.conf\".\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eresolvTimeout\u003c/a\u003e\u003c/code\u003e is 3,000,000 micro seconds.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eresolvRetry\u003c/a\u003e\u003c/code\u003e is 3.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eresolvBufsize\u003c/a\u003e\u003c/code\u003e is 512. (obsoleted)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample (use Google's public DNS cache instead of resolv.conf):\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet cache = RCHostName \"8.8.8.8\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet rc = defaultResolvConf { resolvInfo = cache }\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
          "module": "Network.DNS.Resolver",
          "name": "defaultResolvConf",
          "package": "dns",
          "signature": "ResolvConf",
          "source": "src/Network-DNS-Resolver.html#defaultResolvConf",
          "type": "function"
        },
        "index": {
          "description": "Return default ResolvConf resolvInfo is RCFilePath etc resolv.conf resolvTimeout is micro seconds resolvRetry is resolvBufsize is obsoleted Example use Google public DNS cache instead of resolv.conf let cache RCHostName let rc defaultResolvConf resolvInfo cache",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "defaultResolvConf",
          "package": "dns",
          "partial": "Resolv Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:defaultResolvConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Resolver",
          "name": "dnsBufsize",
          "package": "dns",
          "signature": "Integer",
          "source": "src/Network-DNS-Resolver.html#Resolver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "dnsBufsize",
          "package": "dns",
          "partial": "Bufsize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:dnsBufsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Resolver",
          "name": "dnsRetry",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Resolver.html#Resolver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "dnsRetry",
          "package": "dns",
          "partial": "Retry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:dnsRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Resolver",
          "name": "dnsSock",
          "package": "dns",
          "signature": "Socket",
          "source": "src/Network-DNS-Resolver.html#Resolver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "dnsSock",
          "package": "dns",
          "partial": "Sock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:dnsSock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Resolver",
          "name": "dnsTimeout",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Resolver.html#Resolver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "dnsTimeout",
          "package": "dns",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:dnsTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract necessary information from \u003ccode\u003e\u003ca\u003eDNSFormat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "fromDNSFormat",
          "package": "dns",
          "signature": "DNSFormat -\u003e (DNSFormat -\u003e a) -\u003e Either DNSError a",
          "source": "src/Network-DNS-Resolver.html#fromDNSFormat",
          "type": "function"
        },
        "index": {
          "description": "Extract necessary information from DNSFormat",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "fromDNSFormat",
          "normalized": "DNSFormat-\u003e(DNSFormat-\u003ea)-\u003eEither DNSError a",
          "package": "dns",
          "partial": "DNSFormat",
          "signature": "DNSFormat-\u003e(DNSFormat-\u003ea)-\u003eEither DNSError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:fromDNSFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Resolver",
          "name": "genId",
          "package": "dns",
          "signature": "IO Int",
          "source": "src/Network-DNS-Resolver.html#Resolver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "genId",
          "package": "dns",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:genId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up resource records for a domain, collecting the results\n   from the ANSWER section of the response.\n\u003c/p\u003e\u003cp\u003eWe repeat an example from \u003ca\u003eNetwork.DNS.Lookup\u003c/a\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hostname = Data.ByteString.Char8.pack \"www.example.com\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithResolver rs $ \\resolver -\u003e lookup resolver hostname A\n\u003c/code\u003e\u003c/strong\u003eRight [93.184.216.119]\n\u003c/pre\u003e",
          "module": "Network.DNS.Resolver",
          "name": "lookup",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e TYPE -\u003e IO (Either DNSError [RDATA])",
          "source": "src/Network-DNS-Resolver.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Look up resource records for domain collecting the results from the ANSWER section of the response We repeat an example from Network.DNS.Lookup let hostname Data.ByteString.Char8.pack www.example.com rs makeResolvSeed defaultResolvConf withResolver rs resolver lookup resolver hostname Right",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "lookup",
          "normalized": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError[RDATA])",
          "package": "dns",
          "signature": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError[RDATA])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up resource records for a domain, collecting the results\n   from the AUTHORITY section of the response.\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "lookupAuth",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e TYPE -\u003e IO (Either DNSError [RDATA])",
          "source": "src/Network-DNS-Resolver.html#lookupAuth",
          "type": "function"
        },
        "index": {
          "description": "Look up resource records for domain collecting the results from the AUTHORITY section of the response",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "lookupAuth",
          "normalized": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError[RDATA])",
          "package": "dns",
          "partial": "Auth",
          "signature": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError[RDATA])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:lookupAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a name and return the entire DNS Response. Sample output\n   is included below, however it is \u003cem\u003enot\u003c/em\u003e tested -- the sequence\n   number is unpredictable (it has to be!).\n\u003c/p\u003e\u003cp\u003eThe example code:\n\u003c/p\u003e\u003cpre\u003e\n   let hostname = Data.ByteString.Char8.pack \"www.example.com\"\n   rs \u003c- makeResolvSeed defaultResolvConf\n   withResolver rs $ resolver -\u003e lookupRaw resolver hostname A\n\u003c/pre\u003e\u003cp\u003eAnd the (formatted) expected output:\n\u003c/p\u003e\u003cpre\u003e\n   Right (DNSFormat\n           { header = DNSHeader\n                        { identifier = 1,\n                          flags = DNSFlags\n                                    { qOrR = QR_Response,\n                                      opcode = OP_STD,\n                                      authAnswer = False,\n                                      trunCation = False,\n                                      recDesired = True,\n                                      recAvailable = True,\n                                      rcode = NoErr },\n                          qdCount = 1,\n                          anCount = 1,\n                          nsCount = 0,\n                          arCount = 0},\n             question = [Question { qname = \"www.example.com.\",\n                                    qtype = A}],\n             answer = [ResourceRecord {rrname = \"www.example.com.\",\n                                       rrtype = A,\n                                       rrttl = 800,\n                                       rdlen = 4,\n                                       rdata = 93.184.216.119}],\n             authority = [],\n             additional = []})\n\u003c/pre\u003e",
          "module": "Network.DNS.Resolver",
          "name": "lookupRaw",
          "package": "dns",
          "signature": "Resolver -\u003e Domain -\u003e TYPE -\u003e IO (Either DNSError DNSFormat)",
          "source": "src/Network-DNS-Resolver.html#lookupRaw",
          "type": "function"
        },
        "index": {
          "description": "Look up name and return the entire DNS Response Sample output is included below however it is not tested the sequence number is unpredictable it has to be The example code let hostname Data.ByteString.Char8.pack www.example.com rs makeResolvSeed defaultResolvConf withResolver rs resolver lookupRaw resolver hostname And the formatted expected output Right DNSFormat header DNSHeader identifier flags DNSFlags qOrR QR Response opcode OP STD authAnswer False trunCation False recDesired True recAvailable True rcode NoErr qdCount anCount nsCount arCount question Question qname www.example.com qtype answer ResourceRecord rrname www.example.com rrtype rrttl rdlen rdata authority additional",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "lookupRaw",
          "normalized": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError DNSFormat)",
          "package": "dns",
          "partial": "Raw",
          "signature": "Resolver-\u003eDomain-\u003eTYPE-\u003eIO(Either DNSError DNSFormat)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:lookupRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eResolvSeed\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eResolvConf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ers \u003c- makeResolvSeed defaultResolvConf\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
          "module": "Network.DNS.Resolver",
          "name": "makeResolvSeed",
          "package": "dns",
          "signature": "ResolvConf -\u003e IO ResolvSeed",
          "source": "src/Network-DNS-Resolver.html#makeResolvSeed",
          "type": "function"
        },
        "index": {
          "description": "Make ResolvSeed from ResolvConf Examples rs makeResolvSeed defaultResolvConf",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "makeResolvSeed",
          "normalized": "ResolvConf-\u003eIO ResolvSeed",
          "package": "dns",
          "partial": "Resolv Seed",
          "signature": "ResolvConf-\u003eIO ResolvSeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:makeResolvSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis field was obsoleted.\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "resolvBufsize",
          "package": "dns",
          "signature": "Integer",
          "source": "src/Network-DNS-Resolver.html#ResolvConf",
          "type": "function"
        },
        "index": {
          "description": "This field was obsoleted",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "resolvBufsize",
          "package": "dns",
          "partial": "Bufsize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:resolvBufsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Resolver",
          "name": "resolvInfo",
          "package": "dns",
          "signature": "FileOrNumericHost",
          "source": "src/Network-DNS-Resolver.html#ResolvConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "resolvInfo",
          "package": "dns",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:resolvInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of retries including the first try.\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "resolvRetry",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Resolver.html#ResolvConf",
          "type": "function"
        },
        "index": {
          "description": "The number of retries including the first try",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "resolvRetry",
          "package": "dns",
          "partial": "Retry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:resolvRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeout in micro seconds.\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "resolvTimeout",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Resolver.html#ResolvConf",
          "type": "function"
        },
        "index": {
          "description": "Timeout in micro seconds",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "resolvTimeout",
          "package": "dns",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:resolvTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiving a thread-safe \u003ccode\u003e\u003ca\u003eResolver\u003c/a\u003e\u003c/code\u003e to the function of the second\n   argument. A socket for UDP is opened inside and is surely closed.\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "withResolver",
          "package": "dns",
          "signature": "ResolvSeed -\u003e (Resolver -\u003e IO a) -\u003e IO a",
          "source": "src/Network-DNS-Resolver.html#withResolver",
          "type": "function"
        },
        "index": {
          "description": "Giving thread-safe Resolver to the function of the second argument socket for UDP is opened inside and is surely closed",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "withResolver",
          "normalized": "ResolvSeed-\u003e(Resolver-\u003eIO a)-\u003eIO a",
          "package": "dns",
          "partial": "Resolver",
          "signature": "ResolvSeed-\u003e(Resolver-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:withResolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiving thread-safe \u003ccode\u003e\u003ca\u003eResolver\u003c/a\u003e\u003c/code\u003es to the function of the second\n   argument. Sockets for UDP are opened inside and are surely closed.\n\u003c/p\u003e",
          "module": "Network.DNS.Resolver",
          "name": "withResolvers",
          "package": "dns",
          "signature": "[ResolvSeed] -\u003e ([Resolver] -\u003e IO a) -\u003e IO a",
          "source": "src/Network-DNS-Resolver.html#withResolvers",
          "type": "function"
        },
        "index": {
          "description": "Giving thread-safe Resolver to the function of the second argument Sockets for UDP are opened inside and are surely closed",
          "hierarchy": "Network DNS Resolver",
          "module": "Network.DNS.Resolver",
          "name": "withResolvers",
          "normalized": "[ResolvSeed]-\u003e([Resolver]-\u003eIO a)-\u003eIO a",
          "package": "dns",
          "partial": "Resolvers",
          "signature": "[ResolvSeed]-\u003e([Resolver]-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Resolver.html#v:withResolvers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for DNS Query and Response.\n   For more information, see \u003ca\u003ehttp://www.ietf.org/rfc/rfc1035\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DNS.Types",
          "name": "Types",
          "package": "dns",
          "source": "src/Network-DNS-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Data types for DNS Query and Response For more information see http www.ietf.org rfc rfc1035",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "Types",
          "package": "dns",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeration of all possible DNS errors that can occur.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "DNSError",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#DNSError",
          "type": "data"
        },
        "index": {
          "description": "An enumeration of all possible DNS errors that can occur",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "DNSError",
          "package": "dns",
          "partial": "DNSError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:DNSError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw data format for the flags of DNS Query and Response.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "DNSFlags",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#DNSFlags",
          "type": "data"
        },
        "index": {
          "description": "Raw data format for the flags of DNS Query and Response",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "DNSFlags",
          "package": "dns",
          "partial": "DNSFlags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:DNSFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw data format for DNS Query and Response.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "DNSFormat",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#DNSFormat",
          "type": "data"
        },
        "index": {
          "description": "Raw data format for DNS Query and Response",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "DNSFormat",
          "package": "dns",
          "partial": "DNSFormat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:DNSFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw data format for the header of DNS Query and Response.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "DNSHeader",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#DNSHeader",
          "type": "data"
        },
        "index": {
          "description": "Raw data format for the header of DNS Query and Response",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "DNSHeader",
          "package": "dns",
          "partial": "DNSHeader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:DNSHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for domain.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "Domain",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#Domain",
          "type": "type"
        },
        "index": {
          "description": "Type for domain",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "Domain",
          "package": "dns",
          "partial": "Domain",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:Domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "OPCODE",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#OPCODE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "OPCODE",
          "package": "dns",
          "partial": "OPCODE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:OPCODE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "QorR",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#QorR",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "QorR",
          "package": "dns",
          "partial": "Qor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:QorR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw data format for DNS questions.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "Question",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#Question",
          "type": "data"
        },
        "index": {
          "description": "Raw data format for DNS questions",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "Question",
          "package": "dns",
          "partial": "Question",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:Question"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RCODE",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#RCODE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RCODE",
          "package": "dns",
          "partial": "RCODE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:RCODE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw data format for each type.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "RDATA",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "data"
        },
        "index": {
          "description": "Raw data format for each type",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RDATA",
          "package": "dns",
          "partial": "RDATA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:RDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw data format for resource records.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "ResourceRecord",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#ResourceRecord",
          "type": "data"
        },
        "index": {
          "description": "Raw data format for resource records",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "ResourceRecord",
          "package": "dns",
          "partial": "Resource Record",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:ResourceRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes for resource records.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "TYPE",
          "package": "dns",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "data"
        },
        "index": {
          "description": "Types for resource records",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "TYPE",
          "package": "dns",
          "partial": "TYPE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#t:TYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "A",
          "package": "dns",
          "signature": "A",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "A",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "AAAA",
          "package": "dns",
          "signature": "AAAA",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "AAAA",
          "package": "dns",
          "partial": "AAAA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:AAAA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "CNAME",
          "package": "dns",
          "signature": "CNAME",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "CNAME",
          "package": "dns",
          "partial": "CNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:CNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "DNSFlags",
          "package": "dns",
          "signature": "DNSFlags",
          "source": "src/Network-DNS-Internal.html#DNSFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "DNSFlags",
          "package": "dns",
          "partial": "DNSFlags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:DNSFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "DNSFormat",
          "package": "dns",
          "signature": "DNSFormat",
          "source": "src/Network-DNS-Internal.html#DNSFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "DNSFormat",
          "package": "dns",
          "partial": "DNSFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:DNSFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "DNSHeader",
          "package": "dns",
          "signature": "DNSHeader",
          "source": "src/Network-DNS-Internal.html#DNSHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "DNSHeader",
          "package": "dns",
          "partial": "DNSHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:DNSHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "FormatErr",
          "package": "dns",
          "signature": "FormatErr",
          "source": "src/Network-DNS-Internal.html#RCODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "FormatErr",
          "package": "dns",
          "partial": "Format Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:FormatErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name server was unable to interpret the query.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "FormatError",
          "package": "dns",
          "signature": "FormatError",
          "source": "src/Network-DNS-Internal.html#DNSError",
          "type": "function"
        },
        "index": {
          "description": "The name server was unable to interpret the query",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "FormatError",
          "package": "dns",
          "partial": "Format Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:FormatError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain for query is illegal.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "IllegalDomain",
          "package": "dns",
          "signature": "IllegalDomain",
          "source": "src/Network-DNS-Internal.html#DNSError",
          "type": "function"
        },
        "index": {
          "description": "The domain for query is illegal",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "IllegalDomain",
          "package": "dns",
          "partial": "Illegal Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:IllegalDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "MX",
          "package": "dns",
          "signature": "MX",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "MX",
          "package": "dns",
          "partial": "MX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:MX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "NS",
          "package": "dns",
          "signature": "NS",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "NS",
          "package": "dns",
          "partial": "NS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:NS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "NameErr",
          "package": "dns",
          "signature": "NameErr",
          "source": "src/Network-DNS-Internal.html#RCODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "NameErr",
          "package": "dns",
          "partial": "Name Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:NameErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeaningful only for responses from an authoritative name\n server, this code signifies that the\n domain name referenced in the query does not exist.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "NameError",
          "package": "dns",
          "signature": "NameError",
          "source": "src/Network-DNS-Internal.html#DNSError",
          "type": "function"
        },
        "index": {
          "description": "Meaningful only for responses from an authoritative name server this code signifies that the domain name referenced in the query does not exist",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "NameError",
          "package": "dns",
          "partial": "Name Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:NameError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "NoErr",
          "package": "dns",
          "signature": "NoErr",
          "source": "src/Network-DNS-Internal.html#RCODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "NoErr",
          "package": "dns",
          "partial": "No Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:NoErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "NotImpl",
          "package": "dns",
          "signature": "NotImpl",
          "source": "src/Network-DNS-Internal.html#RCODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "NotImpl",
          "package": "dns",
          "partial": "Not Impl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:NotImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name server does not support the requested kind of query.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "NotImplemented",
          "package": "dns",
          "signature": "NotImplemented",
          "source": "src/Network-DNS-Internal.html#DNSError",
          "type": "function"
        },
        "index": {
          "description": "The name server does not support the requested kind of query",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "NotImplemented",
          "package": "dns",
          "partial": "Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:NotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "OP_INV",
          "package": "dns",
          "signature": "OP_INV",
          "source": "src/Network-DNS-Internal.html#OPCODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "OP_INV",
          "package": "dns",
          "partial": "OP INV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:OP_INV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "OP_SSR",
          "package": "dns",
          "signature": "OP_SSR",
          "source": "src/Network-DNS-Internal.html#OPCODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "OP_SSR",
          "package": "dns",
          "partial": "OP SSR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:OP_SSR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "OP_STD",
          "package": "dns",
          "signature": "OP_STD",
          "source": "src/Network-DNS-Internal.html#OPCODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "OP_STD",
          "package": "dns",
          "partial": "OP STD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:OP_STD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name server refuses to perform the specified operation for\n   policy reasons.  For example, a name\n   server may not wish to provide the\n   information to the particular requester,\n   or a name server may not wish to perform\n   a particular operation (e.g., zone transfer) for particular data.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "OperationRefused",
          "package": "dns",
          "signature": "OperationRefused",
          "source": "src/Network-DNS-Internal.html#DNSError",
          "type": "function"
        },
        "index": {
          "description": "The name server refuses to perform the specified operation for policy reasons For example name server may not wish to provide the information to the particular requester or name server may not wish to perform particular operation e.g zone transfer for particular data",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "OperationRefused",
          "package": "dns",
          "partial": "Operation Refused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:OperationRefused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "PTR",
          "package": "dns",
          "signature": "PTR",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "PTR",
          "package": "dns",
          "partial": "PTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:PTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "QR_Query",
          "package": "dns",
          "signature": "QR_Query",
          "source": "src/Network-DNS-Internal.html#QorR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "QR_Query",
          "package": "dns",
          "partial": "QR Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:QR_Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "QR_Response",
          "package": "dns",
          "signature": "QR_Response",
          "source": "src/Network-DNS-Internal.html#QorR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "QR_Response",
          "package": "dns",
          "partial": "QR Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:QR_Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "Question",
          "package": "dns",
          "signature": "Question",
          "source": "src/Network-DNS-Internal.html#Question",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "Question",
          "package": "dns",
          "partial": "Question",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:Question"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RD_A",
          "package": "dns",
          "signature": "RD_A IPv4",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RD_A",
          "package": "dns",
          "partial": "RD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RD_AAAA",
          "package": "dns",
          "signature": "RD_AAAA IPv6",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RD_AAAA",
          "package": "dns",
          "partial": "RD AAAA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_AAAA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RD_CNAME",
          "package": "dns",
          "signature": "RD_CNAME Domain",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RD_CNAME",
          "package": "dns",
          "partial": "RD CNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_CNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RD_MX",
          "package": "dns",
          "signature": "RD_MX Int Domain",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RD_MX",
          "package": "dns",
          "partial": "RD MX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_MX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RD_NS",
          "package": "dns",
          "signature": "RD_NS Domain",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RD_NS",
          "package": "dns",
          "partial": "RD NS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_NS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RD_OTH",
          "package": "dns",
          "signature": "RD_OTH [Int]",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RD_OTH",
          "normalized": "RD_OTH[Int]",
          "package": "dns",
          "partial": "RD OTH",
          "signature": "RD_OTH[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_OTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RD_PTR",
          "package": "dns",
          "signature": "RD_PTR Domain",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RD_PTR",
          "package": "dns",
          "partial": "RD PTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_PTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RD_SOA",
          "package": "dns",
          "signature": "RD_SOA Domain Domain Int Int Int Int Int",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RD_SOA",
          "package": "dns",
          "partial": "RD SOA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_SOA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RD_SRV",
          "package": "dns",
          "signature": "RD_SRV Int Int Int Domain",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RD_SRV",
          "package": "dns",
          "partial": "RD SRV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_SRV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "RD_TXT",
          "package": "dns",
          "signature": "RD_TXT ByteString",
          "source": "src/Network-DNS-Internal.html#RDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "RD_TXT",
          "package": "dns",
          "partial": "RD TXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:RD_TXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "Refused",
          "package": "dns",
          "signature": "Refused",
          "source": "src/Network-DNS-Internal.html#RCODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "Refused",
          "package": "dns",
          "partial": "Refused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:Refused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "ResourceRecord",
          "package": "dns",
          "signature": "ResourceRecord",
          "source": "src/Network-DNS-Internal.html#ResourceRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "ResourceRecord",
          "package": "dns",
          "partial": "Resource Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:ResourceRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "SOA",
          "package": "dns",
          "signature": "SOA",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "SOA",
          "package": "dns",
          "partial": "SOA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:SOA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "SRV",
          "package": "dns",
          "signature": "SRV",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "SRV",
          "package": "dns",
          "partial": "SRV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:SRV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sequence number of the answer doesn't match our query. This\n   could indicate foul play.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "SequenceNumberMismatch",
          "package": "dns",
          "signature": "SequenceNumberMismatch",
          "source": "src/Network-DNS-Internal.html#DNSError",
          "type": "function"
        },
        "index": {
          "description": "The sequence number of the answer doesn match our query This could indicate foul play",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "SequenceNumberMismatch",
          "package": "dns",
          "partial": "Sequence Number Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:SequenceNumberMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "ServFail",
          "package": "dns",
          "signature": "ServFail",
          "source": "src/Network-DNS-Internal.html#RCODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "ServFail",
          "package": "dns",
          "partial": "Serv Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:ServFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name server was unable to process this query due to a\n   problem with the name server.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "ServerFailure",
          "package": "dns",
          "signature": "ServerFailure",
          "source": "src/Network-DNS-Internal.html#DNSError",
          "type": "function"
        },
        "index": {
          "description": "The name server was unable to process this query due to problem with the name server",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "ServerFailure",
          "package": "dns",
          "partial": "Server Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:ServerFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "TXT",
          "package": "dns",
          "signature": "TXT",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "TXT",
          "package": "dns",
          "partial": "TXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:TXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe request simply timed out.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "TimeoutExpired",
          "package": "dns",
          "signature": "TimeoutExpired",
          "source": "src/Network-DNS-Internal.html#DNSError",
          "type": "function"
        },
        "index": {
          "description": "The request simply timed out",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "TimeoutExpired",
          "package": "dns",
          "partial": "Timeout Expired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:TimeoutExpired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "UNKNOWN",
          "package": "dns",
          "signature": "UNKNOWN Int",
          "source": "src/Network-DNS-Internal.html#TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "UNKNOWN",
          "package": "dns",
          "partial": "UNKNOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:UNKNOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe answer has the correct sequence number, but returned an\n   unexpected RDATA format.\n\u003c/p\u003e",
          "module": "Network.DNS.Types",
          "name": "UnexpectedRDATA",
          "package": "dns",
          "signature": "UnexpectedRDATA",
          "source": "src/Network-DNS-Internal.html#DNSError",
          "type": "function"
        },
        "index": {
          "description": "The answer has the correct sequence number but returned an unexpected RDATA format",
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "UnexpectedRDATA",
          "package": "dns",
          "partial": "Unexpected RDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:UnexpectedRDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "additional",
          "package": "dns",
          "signature": "[ResourceRecord]",
          "source": "src/Network-DNS-Internal.html#DNSFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "additional",
          "normalized": "[ResourceRecord]",
          "package": "dns",
          "signature": "[ResourceRecord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:additional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "anCount",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Internal.html#DNSHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "anCount",
          "package": "dns",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:anCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "answer",
          "package": "dns",
          "signature": "[ResourceRecord]",
          "source": "src/Network-DNS-Internal.html#DNSFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "answer",
          "normalized": "[ResourceRecord]",
          "package": "dns",
          "signature": "[ResourceRecord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:answer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "arCount",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Internal.html#DNSHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "arCount",
          "package": "dns",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:arCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "authAnswer",
          "package": "dns",
          "signature": "Bool",
          "source": "src/Network-DNS-Internal.html#DNSFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "authAnswer",
          "package": "dns",
          "partial": "Answer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:authAnswer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "authority",
          "package": "dns",
          "signature": "[ResourceRecord]",
          "source": "src/Network-DNS-Internal.html#DNSFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "authority",
          "normalized": "[ResourceRecord]",
          "package": "dns",
          "signature": "[ResourceRecord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "flags",
          "package": "dns",
          "signature": "DNSFlags",
          "source": "src/Network-DNS-Internal.html#DNSHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "flags",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "header",
          "package": "dns",
          "signature": "DNSHeader",
          "source": "src/Network-DNS-Internal.html#DNSFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "header",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "identifier",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Internal.html#DNSHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "identifier",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "intToType",
          "package": "dns",
          "signature": "Int -\u003e TYPE",
          "source": "src/Network-DNS-Internal.html#intToType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "intToType",
          "normalized": "Int-\u003eTYPE",
          "package": "dns",
          "partial": "To Type",
          "signature": "Int-\u003eTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:intToType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "nsCount",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Internal.html#DNSHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "nsCount",
          "package": "dns",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:nsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "opcode",
          "package": "dns",
          "signature": "OPCODE",
          "source": "src/Network-DNS-Internal.html#DNSFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "opcode",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:opcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "qOrR",
          "package": "dns",
          "signature": "QorR",
          "source": "src/Network-DNS-Internal.html#DNSFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "qOrR",
          "package": "dns",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:qOrR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "qdCount",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Internal.html#DNSHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "qdCount",
          "package": "dns",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:qdCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "qname",
          "package": "dns",
          "signature": "Domain",
          "source": "src/Network-DNS-Internal.html#Question",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "qname",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:qname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "qtype",
          "package": "dns",
          "signature": "TYPE",
          "source": "src/Network-DNS-Internal.html#Question",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "qtype",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:qtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "question",
          "package": "dns",
          "signature": "[Question]",
          "source": "src/Network-DNS-Internal.html#DNSFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "question",
          "normalized": "[Question]",
          "package": "dns",
          "signature": "[Question]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:question"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "rcode",
          "package": "dns",
          "signature": "RCODE",
          "source": "src/Network-DNS-Internal.html#DNSFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "rcode",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "rdata",
          "package": "dns",
          "signature": "RDATA",
          "source": "src/Network-DNS-Internal.html#ResourceRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "rdata",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "rdlen",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Internal.html#ResourceRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "rdlen",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rdlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "recAvailable",
          "package": "dns",
          "signature": "Bool",
          "source": "src/Network-DNS-Internal.html#DNSFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "recAvailable",
          "package": "dns",
          "partial": "Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:recAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "recDesired",
          "package": "dns",
          "signature": "Bool",
          "source": "src/Network-DNS-Internal.html#DNSFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "recDesired",
          "package": "dns",
          "partial": "Desired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:recDesired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "responseA",
          "package": "dns",
          "signature": "Int -\u003e Question -\u003e IPv4 -\u003e DNSFormat",
          "source": "src/Network-DNS-Internal.html#responseA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "responseA",
          "normalized": "Int-\u003eQuestion-\u003eIPv-\u003eDNSFormat",
          "package": "dns",
          "signature": "Int-\u003eQuestion-\u003eIPv-\u003eDNSFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:responseA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "responseAAAA",
          "package": "dns",
          "signature": "Int -\u003e Question -\u003e IPv6 -\u003e DNSFormat",
          "source": "src/Network-DNS-Internal.html#responseAAAA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "responseAAAA",
          "normalized": "Int-\u003eQuestion-\u003eIPv-\u003eDNSFormat",
          "package": "dns",
          "partial": "AAAA",
          "signature": "Int-\u003eQuestion-\u003eIPv-\u003eDNSFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:responseAAAA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "rrname",
          "package": "dns",
          "signature": "Domain",
          "source": "src/Network-DNS-Internal.html#ResourceRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "rrname",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rrname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "rrttl",
          "package": "dns",
          "signature": "Int",
          "source": "src/Network-DNS-Internal.html#ResourceRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "rrttl",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rrttl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "rrtype",
          "package": "dns",
          "signature": "TYPE",
          "source": "src/Network-DNS-Internal.html#ResourceRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "rrtype",
          "package": "dns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:rrtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "toType",
          "package": "dns",
          "signature": "String -\u003e TYPE",
          "source": "src/Network-DNS-Internal.html#toType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "toType",
          "normalized": "String-\u003eTYPE",
          "package": "dns",
          "partial": "Type",
          "signature": "String-\u003eTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:toType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "trunCation",
          "package": "dns",
          "signature": "Bool",
          "source": "src/Network-DNS-Internal.html#DNSFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "trunCation",
          "package": "dns",
          "partial": "Cation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:trunCation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DNS.Types",
          "name": "typeToInt",
          "package": "dns",
          "signature": "TYPE -\u003e Int",
          "source": "src/Network-DNS-Internal.html#typeToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DNS Types",
          "module": "Network.DNS.Types",
          "name": "typeToInt",
          "normalized": "TYPE-\u003eInt",
          "package": "dns",
          "partial": "To Int",
          "signature": "TYPE-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS-Types.html#v:typeToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA thread-safe DNS library for both clients and servers written\n   in pure Haskell.\n   The Network.DNS module re-exports all other exposed modules for\n   convenience.\n   Applications will most likely use the high-level interface, while\n   library/daemon authors may need to use the lower-level one.\n   EDNS0 and TCP fallback are not supported yet.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DNS",
          "name": "DNS",
          "package": "dns",
          "source": "src/Network-DNS.html",
          "type": "module"
        },
        "index": {
          "description": "thread-safe DNS library for both clients and servers written in pure Haskell The Network.DNS module re-exports all other exposed modules for convenience Applications will most likely use the high-level interface while library daemon authors may need to use the lower-level one EDNS0 and TCP fallback are not supported yet",
          "hierarchy": "Network DNS",
          "module": "Network.DNS",
          "name": "DNS",
          "package": "dns",
          "partial": "DNS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dns/docs/Network-DNS.html#"
      }
    }
  ]
]