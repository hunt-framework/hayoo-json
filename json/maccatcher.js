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
        "word": "maccatcher"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA MAC address datatype, representing the six bytes of a MAC address, also\n    known as an OID, IAB or \"...Vendor Address, Vendor ID, NIC Address,\n    Ethernet Address and others.\", see\n    \u003ca\u003ehttp://standards.ieee.org/faqs/OUI.html#q4\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MAC",
          "name": "MAC",
          "package": "maccatcher",
          "source": "src/Data-MAC.html",
          "type": "module"
        },
        "index": {
          "description": "MAC address datatype representing the six bytes of MAC address also known as an OID IAB or Vendor Address Vendor ID NIC Address Ethernet Address and others see http standards.ieee.org faqs OUI.html q4",
          "hierarchy": "Data MAC",
          "module": "Data.MAC",
          "name": "MAC",
          "package": "maccatcher",
          "partial": "MAC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/Data-MAC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MAC",
          "name": "MAC",
          "package": "maccatcher",
          "source": "src/Data-MAC.html#MAC",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MAC",
          "module": "Data.MAC",
          "name": "MAC",
          "package": "maccatcher",
          "partial": "MAC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/Data-MAC.html#t:MAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MAC",
          "name": "MAC",
          "package": "maccatcher",
          "signature": "MAC !Word8 !Word8 !Word8 !Word8 !Word8 !Word8",
          "source": "src/Data-MAC.html#MAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MAC",
          "module": "Data.MAC",
          "name": "MAC",
          "package": "maccatcher",
          "partial": "MAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/Data-MAC.html#v:MAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSystem specific routines for determing the MAC address and macros to help\n    sort things out at compile time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Info.MAC.Fetch",
          "name": "Fetch",
          "package": "maccatcher",
          "source": "src/System-Info-MAC-Fetch.html",
          "type": "module"
        },
        "index": {
          "description": "System specific routines for determing the MAC address and macros to help sort things out at compile time",
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "Fetch",
          "package": "maccatcher",
          "partial": "Fetch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a list containing the name and MAC of all NICs.\n\u003c/p\u003e",
          "module": "System.Info.MAC.Fetch",
          "name": "fetchNICs",
          "package": "maccatcher",
          "signature": "IO [(String, MAC)]",
          "source": "src/System-Info-MAC-Fetch.html#fetchNICs",
          "type": "function"
        },
        "index": {
          "description": "Obtain list containing the name and MAC of all NICs",
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "fetchNICs",
          "normalized": "IO[(String,MAC)]",
          "package": "maccatcher",
          "partial": "NICs",
          "signature": "IO[(String,MAC)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:fetchNICs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003eifconfig\u003c/code\u003e or \u003ccode\u003eipconfig\u003c/code\u003e, as appropriate, capturing its output.\n\u003c/p\u003e",
          "module": "System.Info.MAC.Fetch",
          "name": "i_config",
          "package": "maccatcher",
          "signature": "IO String",
          "source": "src/System-Info-MAC-Fetch.html#i_config",
          "type": "function"
        },
        "index": {
          "description": "Run ifconfig or ipconfig as appropriate capturing its output",
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "i_config",
          "package": "maccatcher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:i_config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the output of Linux or BSD \u003ccode\u003eifconfig\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Info.MAC.Fetch",
          "name": "ifconfig",
          "package": "maccatcher",
          "signature": "Parser [(String, MAC)]",
          "source": "src/System-Info-MAC-Fetch.html#ifconfig",
          "type": "function"
        },
        "index": {
          "description": "Parses the output of Linux or BSD ifconfig",
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "ifconfig",
          "normalized": "Parser[(String,MAC)]",
          "package": "maccatcher",
          "signature": "Parser[(String,MAC)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:ifconfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the output of Windows \u003ccode\u003eipconfig\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Info.MAC.Fetch",
          "name": "ipconfig",
          "package": "maccatcher",
          "signature": "Parser [(String, MAC)]",
          "source": "src/System-Info-MAC-Fetch.html#ipconfig",
          "type": "function"
        },
        "index": {
          "description": "Parses the output of Windows ipconfig",
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "ipconfig",
          "normalized": "Parser[(String,MAC)]",
          "package": "maccatcher",
          "signature": "Parser[(String,MAC)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:ipconfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Info.MAC.Fetch",
          "name": "manyAnyTill",
          "package": "maccatcher",
          "signature": "Parser Char -\u003e Parser String",
          "source": "src/System-Info-MAC-Fetch.html#manyAnyTill",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "manyAnyTill",
          "normalized": "Parser Char-\u003eParser String",
          "package": "maccatcher",
          "partial": "Any Till",
          "signature": "Parser Char-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:manyAnyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Info.MAC.Fetch",
          "name": "maybeMAC",
          "package": "maccatcher",
          "signature": "String -\u003e Maybe MAC",
          "source": "src/System-Info-MAC-Fetch.html#maybeMAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "maybeMAC",
          "normalized": "String-\u003eMaybe MAC",
          "package": "maccatcher",
          "partial": "MAC",
          "signature": "String-\u003eMaybe MAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:maybeMAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Info.MAC.Fetch",
          "name": "parse'",
          "package": "maccatcher",
          "signature": "String -\u003e Parser [t] -\u003e String -\u003e [t]",
          "source": "src/System-Info-MAC-Fetch.html#parse%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "parse'",
          "normalized": "String-\u003eParser[a]-\u003eString-\u003e[a]",
          "package": "maccatcher",
          "signature": "String-\u003eParser[t]-\u003eString-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:parse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Info.MAC.Fetch",
          "name": "parseNIC_ifconfig",
          "package": "maccatcher",
          "signature": "Parser (Maybe (String, MAC))",
          "source": "src/System-Info-MAC-Fetch.html#parseNIC_ifconfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "parseNIC_ifconfig",
          "normalized": "Parser(Maybe(String,MAC))",
          "package": "maccatcher",
          "partial": "NIC",
          "signature": "Parser(Maybe(String,MAC))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:parseNIC_ifconfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Info.MAC.Fetch",
          "name": "parseNIC_ipconfig",
          "package": "maccatcher",
          "signature": "Parser (Maybe (String, MAC))",
          "source": "src/System-Info-MAC-Fetch.html#parseNIC_ipconfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "parseNIC_ipconfig",
          "normalized": "Parser(Maybe(String,MAC))",
          "package": "maccatcher",
          "partial": "NIC",
          "signature": "Parser(Maybe(String,MAC))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:parseNIC_ipconfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Info.MAC.Fetch",
          "name": "parseNICs",
          "package": "maccatcher",
          "signature": "Parser (Maybe (String, MAC)) -\u003e Parser [(String, MAC)]",
          "source": "src/System-Info-MAC-Fetch.html#parseNICs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "parseNICs",
          "normalized": "Parser(Maybe(String,MAC))-\u003eParser[(String,MAC)]",
          "package": "maccatcher",
          "partial": "NICs",
          "signature": "Parser(Maybe(String,MAC))-\u003eParser[(String,MAC)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:parseNICs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Info.MAC.Fetch",
          "name": "skipManyAnyTill",
          "package": "maccatcher",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/System-Info-MAC-Fetch.html#skipManyAnyTill",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "skipManyAnyTill",
          "normalized": "Parser a-\u003eParser a",
          "package": "maccatcher",
          "partial": "Many Any Till",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:skipManyAnyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Info.MAC.Fetch",
          "name": "skipManyTill",
          "package": "maccatcher",
          "signature": "Parser a -\u003e Parser b -\u003e Parser b",
          "source": "src/System-Info-MAC-Fetch.html#skipManyTill",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Info MAC Fetch",
          "module": "System.Info.MAC.Fetch",
          "name": "skipManyTill",
          "normalized": "Parser a-\u003eParser b-\u003eParser b",
          "package": "maccatcher",
          "partial": "Many Till",
          "signature": "Parser a-\u003eParser b-\u003eParser b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:skipManyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eObtain a MAC address for the host system, on *NIX and Windows.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Info.MAC",
          "name": "MAC",
          "package": "maccatcher",
          "source": "src/System-Info-MAC.html",
          "type": "module"
        },
        "index": {
          "description": "Obtain MAC address for the host system on NIX and Windows",
          "hierarchy": "System Info MAC",
          "module": "System.Info.MAC",
          "name": "MAC",
          "package": "maccatcher",
          "partial": "MAC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch MAC address, using a cached value if it is available.\n\u003c/p\u003e",
          "module": "System.Info.MAC",
          "name": "mac",
          "package": "maccatcher",
          "signature": "IO (Maybe MAC)",
          "source": "src/System-Info-MAC.html#mac",
          "type": "function"
        },
        "index": {
          "description": "Fetch MAC address using cached value if it is available",
          "hierarchy": "System Info MAC",
          "module": "System.Info.MAC",
          "name": "mac",
          "package": "maccatcher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#v:mac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch MAC addresses, using a cached value if it is available.\n\u003c/p\u003e",
          "module": "System.Info.MAC",
          "name": "macs",
          "package": "maccatcher",
          "signature": "IO [MAC]",
          "source": "src/System-Info-MAC.html#macs",
          "type": "function"
        },
        "index": {
          "description": "Fetch MAC addresses using cached value if it is available",
          "hierarchy": "System Info MAC",
          "module": "System.Info.MAC",
          "name": "macs",
          "normalized": "IO[MAC]",
          "package": "maccatcher",
          "signature": "IO[MAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#v:macs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch a name-MAC pair, using a cached value if it is available.\n\u003c/p\u003e",
          "module": "System.Info.MAC",
          "name": "nic",
          "package": "maccatcher",
          "signature": "IO (Maybe (String, MAC))",
          "source": "src/System-Info-MAC.html#nic",
          "type": "function"
        },
        "index": {
          "description": "Fetch name-MAC pair using cached value if it is available",
          "hierarchy": "System Info MAC",
          "module": "System.Info.MAC",
          "name": "nic",
          "normalized": "IO(Maybe(String,MAC))",
          "package": "maccatcher",
          "signature": "IO(Maybe(String,MAC))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#v:nic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch name-MAC pairs, using a cached value if it is available.\n\u003c/p\u003e",
          "module": "System.Info.MAC",
          "name": "nics",
          "package": "maccatcher",
          "signature": "IO [(String, MAC)]",
          "source": "src/System-Info-MAC.html#nics",
          "type": "function"
        },
        "index": {
          "description": "Fetch name-MAC pairs using cached value if it is available",
          "hierarchy": "System Info MAC",
          "module": "System.Info.MAC",
          "name": "nics",
          "normalized": "IO[(String,MAC)]",
          "package": "maccatcher",
          "signature": "IO[(String,MAC)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#v:nics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly re-run the MAC reading operation.\n\u003c/p\u003e",
          "module": "System.Info.MAC",
          "name": "refresh",
          "package": "maccatcher",
          "signature": "IO [(String, MAC)]",
          "source": "src/System-Info-MAC.html#refresh",
          "type": "function"
        },
        "index": {
          "description": "Explicitly re-run the MAC reading operation",
          "hierarchy": "System Info MAC",
          "module": "System.Info.MAC",
          "name": "refresh",
          "normalized": "IO[(String,MAC)]",
          "package": "maccatcher",
          "signature": "IO[(String,MAC)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#v:refresh"
      }
    }
  ]
]