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
        "word": "IPv6Addr"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDealing with IPv6 address text representations, canonization and manipulations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.IPv6Addr.Internal",
          "name": "Internal",
          "package": "IPv6Addr",
          "source": "src/Text-IPv6Addr-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Dealing with IPv6 address text representations canonization and manipulations",
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "Internal",
          "package": "IPv6Addr",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IPv6Addr.Internal",
          "name": "expandTokens",
          "package": "IPv6Addr",
          "signature": "[IPv6AddrToken] -\u003e [IPv6AddrToken]",
          "source": "src/Text-IPv6Addr-Internal.html#expandTokens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "expandTokens",
          "normalized": "[IPv AddrToken]-\u003e[IPv AddrToken]",
          "package": "IPv6Addr",
          "partial": "Tokens",
          "signature": "[IPv AddrToken]-\u003e[IPv AddrToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:expandTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IPv6Addr.Internal",
          "name": "fromDoubleColon",
          "package": "IPv6Addr",
          "signature": "[IPv6AddrToken] -\u003e [IPv6AddrToken]",
          "source": "src/Text-IPv6Addr-Internal.html#fromDoubleColon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "fromDoubleColon",
          "normalized": "[IPv AddrToken]-\u003e[IPv AddrToken]",
          "package": "IPv6Addr",
          "partial": "Double Colon",
          "signature": "[IPv AddrToken]-\u003e[IPv AddrToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:fromDoubleColon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003eText\u003c/code\u003e of an IPv6 address.\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Internal",
          "name": "fromIPv6Addr",
          "package": "IPv6Addr",
          "signature": "IPv6Addr -\u003e Text",
          "source": "src/Text-IPv6Addr-Internal.html#fromIPv6Addr",
          "type": "function"
        },
        "index": {
          "description": "Returns the Text of an IPv6 address",
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "fromIPv6Addr",
          "normalized": "IPv Addr-\u003eText",
          "package": "IPv6Addr",
          "partial": "IPv Addr",
          "signature": "IPv Addr-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:fromIPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrites \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e an embedded \u003ccode\u003e\u003ca\u003eIPv4Addr\u003c/a\u003e\u003c/code\u003e into the corresponding list of pure\n \u003ccode\u003e\u003ca\u003eIPv6Addr\u003c/a\u003e\u003c/code\u003e tokens.\n\u003c/p\u003e\u003cpre\u003e ipv4AddrToIPv6AddrTokens (IPv4Addr \"127.0.0.1\") == [SixteenBits \"7f0\",Colon,SixteenBits \"1\"]\n\u003c/pre\u003e",
          "module": "Text.IPv6Addr.Internal",
          "name": "ipv4AddrToIPv6AddrTokens",
          "package": "IPv6Addr",
          "signature": "IPv6AddrToken -\u003e [IPv6AddrToken]",
          "source": "src/Text-IPv6Addr-Internal.html#ipv4AddrToIPv6AddrTokens",
          "type": "function"
        },
        "index": {
          "description": "Rewrites Just an embedded IPv4Addr into the corresponding list of pure IPv6Addr tokens ipv4AddrToIPv6AddrTokens IPv4Addr SixteenBits f0 Colon SixteenBits",
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "ipv4AddrToIPv6AddrTokens",
          "normalized": "IPv AddrToken-\u003e[IPv AddrToken]",
          "package": "IPv6Addr",
          "partial": "Addr To IPv Addr Tokens",
          "signature": "IPv AddrToken-\u003e[IPv AddrToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:ipv4AddrToIPv6AddrTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IPv6Addr.Internal",
          "name": "ipv6TokensToIPv6Addr",
          "package": "IPv6Addr",
          "signature": "[IPv6AddrToken] -\u003e Maybe IPv6Addr",
          "source": "src/Text-IPv6Addr-Internal.html#ipv6TokensToIPv6Addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "ipv6TokensToIPv6Addr",
          "normalized": "[IPv AddrToken]-\u003eMaybe IPv Addr",
          "package": "IPv6Addr",
          "partial": "Tokens To IPv Addr",
          "signature": "[IPv AddrToken]-\u003eMaybe IPv Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:ipv6TokensToIPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an arbitrary list of \u003ccode\u003e\u003ca\u003eIPv6AddrToken\u003c/a\u003e\u003c/code\u003e, returns the corresponding \u003ccode\u003eText\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Internal",
          "name": "ipv6TokensToText",
          "package": "IPv6Addr",
          "signature": "[IPv6AddrToken] -\u003e Text",
          "source": "src/Text-IPv6Addr-Internal.html#ipv6TokensToText",
          "type": "function"
        },
        "index": {
          "description": "Given an arbitrary list of IPv6AddrToken returns the corresponding Text",
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "ipv6TokensToText",
          "normalized": "[IPv AddrToken]-\u003eText",
          "package": "IPv6Addr",
          "partial": "Tokens To Text",
          "signature": "[IPv AddrToken]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:ipv6TokensToText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if a list of \u003ccode\u003e\u003ca\u003eIPv6AddrToken\u003c/a\u003e\u003c/code\u003e constitutes a valid IPv6 Address.\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Internal",
          "name": "isIPv6Addr",
          "package": "IPv6Addr",
          "signature": "[IPv6AddrToken] -\u003e Bool",
          "source": "src/Text-IPv6Addr-Internal.html#isIPv6Addr",
          "type": "function"
        },
        "index": {
          "description": "Returns True if list of IPv6AddrToken constitutes valid IPv6 Address",
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "isIPv6Addr",
          "normalized": "[IPv AddrToken]-\u003eBool",
          "package": "IPv6Addr",
          "partial": "IPv Addr",
          "signature": "[IPv AddrToken]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:isIPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IPv6Addr.Internal",
          "name": "macAddr",
          "package": "IPv6Addr",
          "signature": "Parser (Maybe [IPv6AddrToken])",
          "source": "src/Text-IPv6Addr-Internal.html#macAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "macAddr",
          "normalized": "Parser(Maybe[IPv AddrToken])",
          "package": "IPv6Addr",
          "partial": "Addr",
          "signature": "Parser(Maybe[IPv AddrToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:macAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTokenize a \u003ccode\u003eText\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a list of \u003ccode\u003e\u003ca\u003eIPv6AddrToken\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Internal",
          "name": "maybeIPv6AddrTokens",
          "package": "IPv6Addr",
          "signature": "Text -\u003e Maybe [IPv6AddrToken]",
          "source": "src/Text-IPv6Addr-Internal.html#maybeIPv6AddrTokens",
          "type": "function"
        },
        "index": {
          "description": "Tokenize Text into Just list of IPv6AddrToken or Nothing",
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "maybeIPv6AddrTokens",
          "normalized": "Text-\u003eMaybe[IPv AddrToken]",
          "package": "IPv6Addr",
          "partial": "IPv Addr Tokens",
          "signature": "Text-\u003eMaybe[IPv AddrToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:maybeIPv6AddrTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the main function which returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the list of a tokenized IPv6\n address text representation validated against RFC 4291 and canonized\n in conformation with RFC 5952, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Internal",
          "name": "maybeTokIPv6Addr",
          "package": "IPv6Addr",
          "signature": "Text -\u003e Maybe [IPv6AddrToken]",
          "source": "src/Text-IPv6Addr-Internal.html#maybeTokIPv6Addr",
          "type": "function"
        },
        "index": {
          "description": "This is the main function which returns Just the list of tokenized IPv6 address text representation validated against RFC and canonized in conformation with RFC or Nothing",
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "maybeTokIPv6Addr",
          "normalized": "Text-\u003eMaybe[IPv AddrToken]",
          "package": "IPv6Addr",
          "partial": "Tok IPv Addr",
          "signature": "Text-\u003eMaybe[IPv AddrToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:maybeTokIPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the list of tokenized pure IPv6 address, always rewriting an\n embedded IPv4 address if present.\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Internal",
          "name": "maybeTokPureIPv6Addr",
          "package": "IPv6Addr",
          "signature": "Text -\u003e Maybe [IPv6AddrToken]",
          "source": "src/Text-IPv6Addr-Internal.html#maybeTokPureIPv6Addr",
          "type": "function"
        },
        "index": {
          "description": "Returns Just the list of tokenized pure IPv6 address always rewriting an embedded IPv4 address if present",
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "maybeTokPureIPv6Addr",
          "normalized": "Text-\u003eMaybe[IPv AddrToken]",
          "package": "IPv6Addr",
          "partial": "Tok Pure IPv Addr",
          "signature": "Text-\u003eMaybe[IPv AddrToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:maybeTokPureIPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IPv6Addr.Internal",
          "name": "networkInterfacesIPv6AddrList",
          "package": "IPv6Addr",
          "signature": "IO [(String, IPv6)]",
          "source": "src/Text-IPv6Addr-Internal.html#networkInterfacesIPv6AddrList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "networkInterfacesIPv6AddrList",
          "normalized": "IO[(String,IPv)]",
          "package": "IPv6Addr",
          "partial": "Interfaces IPv Addr List",
          "signature": "IO[(String,IPv)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:networkInterfacesIPv6AddrList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IPv6Addr.Internal",
          "name": "toDoubleColon",
          "package": "IPv6Addr",
          "signature": "[IPv6AddrToken] -\u003e [IPv6AddrToken]",
          "source": "src/Text-IPv6Addr-Internal.html#toDoubleColon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text IPv6Addr Internal",
          "module": "Text.IPv6Addr.Internal",
          "name": "toDoubleColon",
          "normalized": "[IPv AddrToken]-\u003e[IPv AddrToken]",
          "package": "IPv6Addr",
          "partial": "Double Colon",
          "signature": "[IPv AddrToken]-\u003e[IPv AddrToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Internal.html#v:toDoubleColon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDealing with IPv6 address text representations, canonization and manipulations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.IPv6Addr.Manip",
          "name": "Manip",
          "package": "IPv6Addr",
          "source": "src/Text-IPv6Addr-Manip.html",
          "type": "module"
        },
        "index": {
          "description": "Dealing with IPv6 address text representations canonization and manipulations",
          "hierarchy": "Text IPv6Addr Manip",
          "module": "Text.IPv6Addr.Manip",
          "name": "Manip",
          "package": "IPv6Addr",
          "partial": "Manip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Manip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a valid name of a local network interface, returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the list of\n tokens of the interface's IPv6 address, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e getTokIPv6AddrOf \"eth0\" == Just [SixteenBit \"fe80\",DoubleColon,SixteenBit \"fa1d\",Colon,SixteenBit \"58cc\",Colon,SixteenBit \"9516\"]\n\u003c/pre\u003e",
          "module": "Text.IPv6Addr.Manip",
          "name": "getTokIPv6AddrOf",
          "package": "IPv6Addr",
          "signature": "String -\u003e IO (Maybe [IPv6AddrToken])",
          "source": "src/Text-IPv6Addr-Manip.html#getTokIPv6AddrOf",
          "type": "function"
        },
        "index": {
          "description": "Given valid name of local network interface returns Just the list of tokens of the interface IPv6 address or Nothing getTokIPv6AddrOf eth0 Just SixteenBit fe80 DoubleColon SixteenBit fa1d Colon SixteenBit cc Colon SixteenBit",
          "hierarchy": "Text IPv6Addr Manip",
          "module": "Text.IPv6Addr.Manip",
          "name": "getTokIPv6AddrOf",
          "normalized": "String-\u003eIO(Maybe[IPv AddrToken])",
          "package": "IPv6Addr",
          "partial": "Tok IPv Addr Of",
          "signature": "String-\u003eIO(Maybe[IPv AddrToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Manip.html#v:getTokIPv6AddrOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a valid name of a local network interface,\n returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the corresponding list of \u003ccode\u003e\u003ca\u003eIPv6AddrToken\u003c/a\u003e\u003c/code\u003e of the interface's MAC Address,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e getTokMacAddrOf \"eth0\" == Just [SixteenBit \"fa1d\",Colon,SixteenBit \"58cc\",Colon,SixteenBit \"9516\"]\n\u003c/pre\u003e",
          "module": "Text.IPv6Addr.Manip",
          "name": "getTokMacAddrOf",
          "package": "IPv6Addr",
          "signature": "String -\u003e IO (Maybe [IPv6AddrToken])",
          "source": "src/Text-IPv6Addr-Manip.html#getTokMacAddrOf",
          "type": "function"
        },
        "index": {
          "description": "Given valid name of local network interface returns Just the corresponding list of IPv6AddrToken of the interface MAC Address or Nothing getTokMacAddrOf eth0 Just SixteenBit fa1d Colon SixteenBit cc Colon SixteenBit",
          "hierarchy": "Text IPv6Addr Manip",
          "module": "Text.IPv6Addr.Manip",
          "name": "getTokMacAddrOf",
          "normalized": "String-\u003eIO(Maybe[IPv AddrToken])",
          "package": "IPv6Addr",
          "partial": "Tok Mac Addr Of",
          "signature": "String-\u003eIO(Maybe[IPv AddrToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Manip.html#v:getTokMacAddrOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a MAC address, returns the corresponding \u003ccode\u003e\u003ca\u003eIPv6AddrToken\u003c/a\u003e\u003c/code\u003e list, or an empty list.\n\u003c/p\u003e\u003cpre\u003e macAddrToIPv6AddrTokens \"fa:1d:58:cc:95:16\" == [SixteenBit \"fa1d\",Colon,SixteenBit \"58cc\",Colon,SixteenBit \"9516\"]\n\u003c/pre\u003e",
          "module": "Text.IPv6Addr.Manip",
          "name": "macAddrToIPv6AddrTokens",
          "package": "IPv6Addr",
          "signature": "Text -\u003e Maybe [IPv6AddrToken]",
          "source": "src/Text-IPv6Addr-Manip.html#macAddrToIPv6AddrTokens",
          "type": "function"
        },
        "index": {
          "description": "Given MAC address returns the corresponding IPv6AddrToken list or an empty list macAddrToIPv6AddrTokens fa cc SixteenBit fa1d Colon SixteenBit cc Colon SixteenBit",
          "hierarchy": "Text IPv6Addr Manip",
          "module": "Text.IPv6Addr.Manip",
          "name": "macAddrToIPv6AddrTokens",
          "normalized": "Text-\u003eMaybe[IPv AddrToken]",
          "package": "IPv6Addr",
          "partial": "Addr To IPv Addr Tokens",
          "signature": "Text-\u003eMaybe[IPv AddrToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Manip.html#v:macAddrToIPv6AddrTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a partial \u003ccode\u003e\u003ca\u003eIPv6Addr\u003c/a\u003e\u003c/code\u003e with n \u003ccode\u003e\u003ca\u003eSixteenBit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Manip",
          "name": "partialRandAddr",
          "package": "IPv6Addr",
          "signature": "Int -\u003e IO [IPv6AddrToken]",
          "source": "src/Text-IPv6Addr-Manip.html#partialRandAddr",
          "type": "function"
        },
        "index": {
          "description": "Generates partial IPv6Addr with SixteenBit",
          "hierarchy": "Text IPv6Addr Manip",
          "module": "Text.IPv6Addr.Manip",
          "name": "partialRandAddr",
          "normalized": "Int-\u003eIO[IPv AddrToken]",
          "package": "IPv6Addr",
          "partial": "Rand Addr",
          "signature": "Int-\u003eIO[IPv AddrToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Manip.html#v:partialRandAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e an arbitrary \u003ccode\u003e\u003ca\u003eSixteenBit\u003c/a\u003e\u003c/code\u003e token based on a mask \"____\", each\n underscore being replaced by a random hexadecimal digit.\n\u003c/p\u003e\u003cpre\u003e sixteenBitArbToken \"_f__\" == Just (SixteenBit \"bfd4\")\n\u003c/pre\u003e",
          "module": "Text.IPv6Addr.Manip",
          "name": "sixteenBitArbToken",
          "package": "IPv6Addr",
          "signature": "String -\u003e IO IPv6AddrToken",
          "source": "src/Text-IPv6Addr-Manip.html#sixteenBitArbToken",
          "type": "function"
        },
        "index": {
          "description": "Returns Just an arbitrary SixteenBit token based on mask each underscore being replaced by random hexadecimal digit sixteenBitArbToken Just SixteenBit bfd4",
          "hierarchy": "Text IPv6Addr Manip",
          "module": "Text.IPv6Addr.Manip",
          "name": "sixteenBitArbToken",
          "normalized": "String-\u003eIO IPv AddrToken",
          "package": "IPv6Addr",
          "partial": "Bit Arb Token",
          "signature": "String-\u003eIO IPv AddrToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Manip.html#v:sixteenBitArbToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDealing with IPv6 address text representations, canonization and manipulations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.IPv6Addr.Types",
          "name": "Types",
          "package": "IPv6Addr",
          "source": "src/Text-IPv6Addr-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Dealing with IPv6 address text representations canonization and manipulations",
          "hierarchy": "Text IPv6Addr Types",
          "module": "Text.IPv6Addr.Types",
          "name": "Types",
          "package": "IPv6Addr",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IPv6Addr.Types",
          "name": "IPv6Addr",
          "package": "IPv6Addr",
          "source": "src/Text-IPv6Addr-Types.html#IPv6Addr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text IPv6Addr Types",
          "module": "Text.IPv6Addr.Types",
          "name": "IPv6Addr",
          "package": "IPv6Addr",
          "partial": "IPv Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Types.html#t:IPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IPv6Addr.Types",
          "name": "IPv6AddrToken",
          "package": "IPv6Addr",
          "source": "src/Text-IPv6Addr-Types.html#IPv6AddrToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text IPv6Addr Types",
          "module": "Text.IPv6Addr.Types",
          "name": "IPv6AddrToken",
          "package": "IPv6Addr",
          "partial": "IPv Addr Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Types.html#t:IPv6AddrToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn all zeros 16-Bit chunk\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Types",
          "name": "AllZeros",
          "package": "IPv6Addr",
          "signature": "AllZeros",
          "source": "src/Text-IPv6Addr-Types.html#IPv6AddrToken",
          "type": "function"
        },
        "index": {
          "description": "An all zeros Bit chunk",
          "hierarchy": "Text IPv6Addr Types",
          "module": "Text.IPv6Addr.Types",
          "name": "AllZeros",
          "package": "IPv6Addr",
          "partial": "All Zeros",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Types.html#v:AllZeros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA separator between 16-Bit chunks\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Types",
          "name": "Colon",
          "package": "IPv6Addr",
          "signature": "Colon",
          "source": "src/Text-IPv6Addr-Types.html#IPv6AddrToken",
          "type": "function"
        },
        "index": {
          "description": "separator between Bit chunks",
          "hierarchy": "Text IPv6Addr Types",
          "module": "Text.IPv6Addr.Types",
          "name": "Colon",
          "package": "IPv6Addr",
          "partial": "Colon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Types.html#v:Colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA double-colon stands for a unique compression of many consecutive 16-Bit chunks\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Types",
          "name": "DoubleColon",
          "package": "IPv6Addr",
          "signature": "DoubleColon",
          "source": "src/Text-IPv6Addr-Types.html#IPv6AddrToken",
          "type": "function"
        },
        "index": {
          "description": "double-colon stands for unique compression of many consecutive Bit chunks",
          "hierarchy": "Text IPv6Addr Types",
          "module": "Text.IPv6Addr.Types",
          "name": "DoubleColon",
          "package": "IPv6Addr",
          "partial": "Double Colon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Types.html#v:DoubleColon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn embedded IPv4 address as representation of the last 32-Bit\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Types",
          "name": "IPv4Addr",
          "package": "IPv6Addr",
          "signature": "IPv4Addr Text",
          "source": "src/Text-IPv6Addr-Types.html#IPv6AddrToken",
          "type": "function"
        },
        "index": {
          "description": "An embedded IPv4 address as representation of the last Bit",
          "hierarchy": "Text IPv6Addr Types",
          "module": "Text.IPv6Addr.Types",
          "name": "IPv4Addr",
          "package": "IPv6Addr",
          "partial": "IPv Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Types.html#v:IPv4Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.IPv6Addr.Types\",\"Text.IPv6Addr\"]",
          "name": "IPv6Addr",
          "package": "IPv6Addr",
          "signature": "IPv6Addr Text",
          "source": "src/Text-IPv6Addr-Types.html#IPv6Addr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Types.html#v:IPv6Addr\",\"http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr.html#v:IPv6Addr\"]"
        },
        "index": {
          "hierarchy": "Text IPv6Addr Types",
          "module": "Text.IPv6Addr.Types",
          "name": "IPv6Addr",
          "package": "IPv6Addr",
          "partial": "IPv Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Types.html#v:IPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA four hexadecimal digits group representing a 16-Bit chunk\n\u003c/p\u003e",
          "module": "Text.IPv6Addr.Types",
          "name": "SixteenBit",
          "package": "IPv6Addr",
          "signature": "SixteenBit Text",
          "source": "src/Text-IPv6Addr-Types.html#IPv6AddrToken",
          "type": "function"
        },
        "index": {
          "description": "four hexadecimal digits group representing Bit chunk",
          "hierarchy": "Text IPv6Addr Types",
          "module": "Text.IPv6Addr.Types",
          "name": "SixteenBit",
          "package": "IPv6Addr",
          "partial": "Sixteen Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr-Types.html#v:SixteenBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IPv6Addr",
          "name": "IPv6Addr",
          "package": "IPv6Addr",
          "source": "src/Text-IPv6Addr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text IPv6Addr",
          "module": "Text.IPv6Addr",
          "name": "IPv6Addr",
          "package": "IPv6Addr",
          "partial": "IPv Addr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IPv6Addr",
          "name": "IPv6Addr",
          "package": "IPv6Addr",
          "source": "src/Text-IPv6Addr-Types.html#IPv6Addr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text IPv6Addr",
          "module": "Text.IPv6Addr",
          "name": "IPv6Addr",
          "package": "IPv6Addr",
          "partial": "IPv Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr.html#t:IPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the canonized \u003ccode\u003e\u003ca\u003eIPv6Addr\u003c/a\u003e\u003c/code\u003e of the given network interface,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e getIPv6AddrOf \"eth0\"\n\u003c/pre\u003e",
          "module": "Text.IPv6Addr",
          "name": "getIPv6AddrOf",
          "package": "IPv6Addr",
          "signature": "String -\u003e IO (Maybe IPv6Addr)",
          "source": "src/Text-IPv6Addr.html#getIPv6AddrOf",
          "type": "function"
        },
        "index": {
          "description": "Returns Just the canonized IPv6Addr of the given network interface or Nothing getIPv6AddrOf eth0",
          "hierarchy": "Text IPv6Addr",
          "module": "Text.IPv6Addr",
          "name": "getIPv6AddrOf",
          "normalized": "String-\u003eIO(Maybe IPv Addr)",
          "package": "IPv6Addr",
          "partial": "IPv Addr Of",
          "signature": "String-\u003eIO(Maybe IPv Addr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr.html#v:getIPv6AddrOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the reverse lookup domain name corresponding of the given IPv6 address\n (RFC 3596 Section 2.5), or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ip6arpa (IPv6Addr \"4321:0:1:2:3:4:567:89ab\") == Just \"b.a.9.8.7.6.5.0.4.0.0.0.3.0.0.0.2.0.0.0.1.0.0.0.0.0.0.0.1.2.3.4.ip6.arpa.\"\n\u003c/pre\u003e",
          "module": "Text.IPv6Addr",
          "name": "ip6arpa",
          "package": "IPv6Addr",
          "signature": "IPv6Addr -\u003e Text",
          "source": "src/Text-IPv6Addr.html#ip6arpa",
          "type": "function"
        },
        "index": {
          "description": "Returns Just the reverse lookup domain name corresponding of the given IPv6 address RFC Section or Nothing ip6arpa IPv6Addr ab Just b.a.9.8.7.6.5.0.4.0.0.0.3.0.0.0.2.0.0.0.1.0.0.0.0.0.0.0.1.2.3.4.ip6.arpa",
          "hierarchy": "Text IPv6Addr",
          "module": "Text.IPv6Addr",
          "name": "ip6arpa",
          "normalized": "IPv Addr-\u003eText",
          "package": "IPv6Addr",
          "signature": "IPv Addr-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr.html#v:ip6arpa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a pure and expanded \u003ccode\u003e\u003ca\u003eIPv6Addr\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maybeFullIPv6Addr \"::ffff:192.0.2.128\" == Just (IPv6Addr \"0000:0000:0000:0000:0000:ffff:c000:0280\")\n\u003c/pre\u003e",
          "module": "Text.IPv6Addr",
          "name": "maybeFullIPv6Addr",
          "package": "IPv6Addr",
          "signature": "Text -\u003e Maybe IPv6Addr",
          "source": "src/Text-IPv6Addr.html#maybeFullIPv6Addr",
          "type": "function"
        },
        "index": {
          "description": "Returns Just pure and expanded IPv6Addr or Nothing maybeFullIPv6Addr ffff Just IPv6Addr ffff c000",
          "hierarchy": "Text IPv6Addr",
          "module": "Text.IPv6Addr",
          "name": "maybeFullIPv6Addr",
          "normalized": "Text-\u003eMaybe IPv Addr",
          "package": "IPv6Addr",
          "partial": "Full IPv Addr",
          "signature": "Text-\u003eMaybe IPv Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr.html#v:maybeFullIPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the text representation of a canonized\n \u003ccode\u003e\u003ca\u003eIPv6Addr\u003c/a\u003e\u003c/code\u003e in conformation with RFC 5952, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maybeIPv6Addr \"0:0::FFFF:192.0.2.128\" == Just (IPv6Addr \"::ffff:192.0.2.128\")\n\u003c/pre\u003e",
          "module": "Text.IPv6Addr",
          "name": "maybeIPv6Addr",
          "package": "IPv6Addr",
          "signature": "Text -\u003e Maybe IPv6Addr",
          "source": "src/Text-IPv6Addr.html#maybeIPv6Addr",
          "type": "function"
        },
        "index": {
          "description": "Returns Just the text representation of canonized IPv6Addr in conformation with RFC or Nothing maybeIPv6Addr FFFF Just IPv6Addr ffff",
          "hierarchy": "Text IPv6Addr",
          "module": "Text.IPv6Addr",
          "name": "maybeIPv6Addr",
          "normalized": "Text-\u003eMaybe IPv Addr",
          "package": "IPv6Addr",
          "partial": "IPv Addr",
          "signature": "Text-\u003eMaybe IPv Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr.html#v:maybeIPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a pure \u003ccode\u003e\u003ca\u003eIPv6Addr\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maybePureIPv6Addr \"::ffff:192.0.2.128\" == Just (IPv6Addr \"::ffff:c000:280\")\n\u003c/pre\u003e",
          "module": "Text.IPv6Addr",
          "name": "maybePureIPv6Addr",
          "package": "IPv6Addr",
          "signature": "Text -\u003e Maybe IPv6Addr",
          "source": "src/Text-IPv6Addr.html#maybePureIPv6Addr",
          "type": "function"
        },
        "index": {
          "description": "Returns Just pure IPv6Addr or Nothing maybePureIPv6Addr ffff Just IPv6Addr ffff c000",
          "hierarchy": "Text IPv6Addr",
          "module": "Text.IPv6Addr",
          "name": "maybePureIPv6Addr",
          "normalized": "Text-\u003eMaybe IPv Addr",
          "package": "IPv6Addr",
          "partial": "Pure IPv Addr",
          "signature": "Text-\u003eMaybe IPv Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr.html#v:maybePureIPv6Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a random \u003ccode\u003e\u003ca\u003eIPv6Addr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.IPv6Addr",
          "name": "randIPv6Addr",
          "package": "IPv6Addr",
          "signature": "IO IPv6Addr",
          "source": "src/Text-IPv6Addr.html#randIPv6Addr",
          "type": "function"
        },
        "index": {
          "description": "Returns random IPv6Addr",
          "hierarchy": "Text IPv6Addr",
          "module": "Text.IPv6Addr",
          "name": "randIPv6Addr",
          "package": "IPv6Addr",
          "partial": "IPv Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IPv6Addr/docs/Text-IPv6Addr.html#v:randIPv6Addr"
      }
    }
  ]
]