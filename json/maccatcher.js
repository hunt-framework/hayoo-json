[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/Data-MAC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA MAC address datatype, representing the six bytes of a MAC address, also\n    known as an OID, IAB or \"...Vendor Address, Vendor ID, NIC Address,\n    Ethernet Address and others.\", see\n    \u003ca\u003ehttp://standards.ieee.org/faqs/OUI.html#q4\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MAC",
        "fct-package": "maccatcher",
        "fct-signature": "module",
        "fct-source": "src/Data-MAC.html",
        "fct-type": "module",
        "title": "MAC"
      },
      "index": {
        "description": "MAC address datatype representing the six bytes of MAC address also known as an OID IAB or Vendor Address Vendor ID NIC Address Ethernet Address and others see http standards.ieee.org faqs OUI.html q4",
        "hierarchy": "Data MAC",
        "module": "Data.MAC",
        "name": "MAC",
        "normalized": "",
        "package": "maccatcher",
        "partial": "MAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/Data-MAC.html#t:MAC",
      "description": {
        "fct-module": "Data.MAC",
        "fct-package": "maccatcher",
        "fct-signature": "data",
        "fct-source": "src/Data-MAC.html#MAC",
        "fct-type": "data",
        "title": "MAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MAC",
        "module": "Data.MAC",
        "name": "MAC",
        "normalized": "",
        "package": "maccatcher",
        "partial": "MAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/Data-MAC.html#v:MAC",
      "description": {
        "fct-module": "Data.MAC",
        "fct-package": "maccatcher",
        "fct-signature": "MAC !Word8 !Word8 !Word8 !Word8 !Word8 !Word8",
        "fct-source": "src/Data-MAC.html#MAC",
        "fct-type": "function",
        "title": "MAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MAC",
        "module": "Data.MAC",
        "name": "MAC",
        "normalized": "",
        "package": "maccatcher",
        "partial": "MAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSystem specific routines for determing the MAC address and macros to help\n    sort things out at compile time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "module",
        "fct-source": "src/System-Info-MAC-Fetch.html",
        "fct-type": "module",
        "title": "Fetch"
      },
      "index": {
        "description": "System specific routines for determing the MAC address and macros to help sort things out at compile time",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "Fetch",
        "normalized": "",
        "package": "maccatcher",
        "partial": "Fetch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:fetchNICs",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a list containing the name and MAC of all NICs.\n\u003c/p\u003e",
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "IO [(String, MAC)]",
        "fct-source": "src/System-Info-MAC-Fetch.html#fetchNICs",
        "fct-type": "function",
        "title": "fetchNICs"
      },
      "index": {
        "description": "Obtain list containing the name and MAC of all NICs",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "fetchNICs",
        "normalized": "IO[(String,MAC)]",
        "package": "maccatcher",
        "partial": "NICs",
        "signature": "IO[(String,MAC)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:i_config",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003eifconfig\u003c/code\u003e or \u003ccode\u003eipconfig\u003c/code\u003e, as appropriate, capturing its output.\n\u003c/p\u003e",
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "IO String",
        "fct-source": "src/System-Info-MAC-Fetch.html#i_config",
        "fct-type": "function",
        "title": "i_config"
      },
      "index": {
        "description": "Run ifconfig or ipconfig as appropriate capturing its output",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "i_config",
        "normalized": "",
        "package": "maccatcher",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:ifconfig",
      "description": {
        "fct-descr": "\u003cp\u003eParses the output of Linux or BSD \u003ccode\u003eifconfig\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "Parser [(String, MAC)]",
        "fct-source": "src/System-Info-MAC-Fetch.html#ifconfig",
        "fct-type": "function",
        "title": "ifconfig"
      },
      "index": {
        "description": "Parses the output of Linux or BSD ifconfig",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "ifconfig",
        "normalized": "Parser[(String,MAC)]",
        "package": "maccatcher",
        "partial": "",
        "signature": "Parser[(String,MAC)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:ipconfig",
      "description": {
        "fct-descr": "\u003cp\u003eParses the output of Windows \u003ccode\u003eipconfig\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "Parser [(String, MAC)]",
        "fct-source": "src/System-Info-MAC-Fetch.html#ipconfig",
        "fct-type": "function",
        "title": "ipconfig"
      },
      "index": {
        "description": "Parses the output of Windows ipconfig",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "ipconfig",
        "normalized": "Parser[(String,MAC)]",
        "package": "maccatcher",
        "partial": "",
        "signature": "Parser[(String,MAC)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:manyAnyTill",
      "description": {
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "Parser Char -\u003e Parser String",
        "fct-source": "src/System-Info-MAC-Fetch.html#manyAnyTill",
        "fct-type": "function",
        "title": "manyAnyTill"
      },
      "index": {
        "description": "",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "manyAnyTill",
        "normalized": "Parser Char-\u003eParser String",
        "package": "maccatcher",
        "partial": "Any Till",
        "signature": "Parser Char-\u003eParser String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:maybeMAC",
      "description": {
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "String -\u003e Maybe MAC",
        "fct-source": "src/System-Info-MAC-Fetch.html#maybeMAC",
        "fct-type": "function",
        "title": "maybeMAC"
      },
      "index": {
        "description": "",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "maybeMAC",
        "normalized": "String-\u003eMaybe MAC",
        "package": "maccatcher",
        "partial": "MAC",
        "signature": "String-\u003eMaybe MAC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:parse-39-",
      "description": {
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "String -\u003e Parser [t] -\u003e String -\u003e [t]",
        "fct-source": "src/System-Info-MAC-Fetch.html#parse%27",
        "fct-type": "function",
        "title": "parse'"
      },
      "index": {
        "description": "",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "parse'",
        "normalized": "String-\u003eParser[a]-\u003eString-\u003e[a]",
        "package": "maccatcher",
        "partial": "",
        "signature": "String-\u003eParser[t]-\u003eString-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:parseNIC_ifconfig",
      "description": {
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "Parser (Maybe (String, MAC))",
        "fct-source": "src/System-Info-MAC-Fetch.html#parseNIC_ifconfig",
        "fct-type": "function",
        "title": "parseNIC_ifconfig"
      },
      "index": {
        "description": "",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "parseNIC_ifconfig",
        "normalized": "Parser(Maybe(String,MAC))",
        "package": "maccatcher",
        "partial": "NIC",
        "signature": "Parser(Maybe(String,MAC))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:parseNIC_ipconfig",
      "description": {
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "Parser (Maybe (String, MAC))",
        "fct-source": "src/System-Info-MAC-Fetch.html#parseNIC_ipconfig",
        "fct-type": "function",
        "title": "parseNIC_ipconfig"
      },
      "index": {
        "description": "",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "parseNIC_ipconfig",
        "normalized": "Parser(Maybe(String,MAC))",
        "package": "maccatcher",
        "partial": "NIC",
        "signature": "Parser(Maybe(String,MAC))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:parseNICs",
      "description": {
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "Parser (Maybe (String, MAC)) -\u003e Parser [(String, MAC)]",
        "fct-source": "src/System-Info-MAC-Fetch.html#parseNICs",
        "fct-type": "function",
        "title": "parseNICs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "parseNICs",
        "normalized": "Parser(Maybe(String,MAC))-\u003eParser[(String,MAC)]",
        "package": "maccatcher",
        "partial": "NICs",
        "signature": "Parser(Maybe(String,MAC))-\u003eParser[(String,MAC)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:skipManyAnyTill",
      "description": {
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "Parser a -\u003e Parser a",
        "fct-source": "src/System-Info-MAC-Fetch.html#skipManyAnyTill",
        "fct-type": "function",
        "title": "skipManyAnyTill"
      },
      "index": {
        "description": "",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "skipManyAnyTill",
        "normalized": "Parser a-\u003eParser a",
        "package": "maccatcher",
        "partial": "Many Any Till",
        "signature": "Parser a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC-Fetch.html#v:skipManyTill",
      "description": {
        "fct-module": "System.Info.MAC.Fetch",
        "fct-package": "maccatcher",
        "fct-signature": "Parser a -\u003e Parser b -\u003e Parser b",
        "fct-source": "src/System-Info-MAC-Fetch.html#skipManyTill",
        "fct-type": "function",
        "title": "skipManyTill"
      },
      "index": {
        "description": "",
        "hierarchy": "System Info MAC Fetch",
        "module": "System.Info.MAC.Fetch",
        "name": "skipManyTill",
        "normalized": "Parser a-\u003eParser b-\u003eParser b",
        "package": "maccatcher",
        "partial": "Many Till",
        "signature": "Parser a-\u003eParser b-\u003eParser b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eObtain a MAC address for the host system, on *NIX and Windows.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Info.MAC",
        "fct-package": "maccatcher",
        "fct-signature": "module",
        "fct-source": "src/System-Info-MAC.html",
        "fct-type": "module",
        "title": "MAC"
      },
      "index": {
        "description": "Obtain MAC address for the host system on NIX and Windows",
        "hierarchy": "System Info MAC",
        "module": "System.Info.MAC",
        "name": "MAC",
        "normalized": "",
        "package": "maccatcher",
        "partial": "MAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#v:mac",
      "description": {
        "fct-descr": "\u003cp\u003eFetch MAC address, using a cached value if it is available.\n\u003c/p\u003e",
        "fct-module": "System.Info.MAC",
        "fct-package": "maccatcher",
        "fct-signature": "IO (Maybe MAC)",
        "fct-source": "src/System-Info-MAC.html#mac",
        "fct-type": "function",
        "title": "mac"
      },
      "index": {
        "description": "Fetch MAC address using cached value if it is available",
        "hierarchy": "System Info MAC",
        "module": "System.Info.MAC",
        "name": "mac",
        "normalized": "",
        "package": "maccatcher",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#v:macs",
      "description": {
        "fct-descr": "\u003cp\u003eFetch MAC addresses, using a cached value if it is available.\n\u003c/p\u003e",
        "fct-module": "System.Info.MAC",
        "fct-package": "maccatcher",
        "fct-signature": "IO [MAC]",
        "fct-source": "src/System-Info-MAC.html#macs",
        "fct-type": "function",
        "title": "macs"
      },
      "index": {
        "description": "Fetch MAC addresses using cached value if it is available",
        "hierarchy": "System Info MAC",
        "module": "System.Info.MAC",
        "name": "macs",
        "normalized": "IO[MAC]",
        "package": "maccatcher",
        "partial": "",
        "signature": "IO[MAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#v:nic",
      "description": {
        "fct-descr": "\u003cp\u003eFetch a name-MAC pair, using a cached value if it is available.\n\u003c/p\u003e",
        "fct-module": "System.Info.MAC",
        "fct-package": "maccatcher",
        "fct-signature": "IO (Maybe (String, MAC))",
        "fct-source": "src/System-Info-MAC.html#nic",
        "fct-type": "function",
        "title": "nic"
      },
      "index": {
        "description": "Fetch name-MAC pair using cached value if it is available",
        "hierarchy": "System Info MAC",
        "module": "System.Info.MAC",
        "name": "nic",
        "normalized": "IO(Maybe(String,MAC))",
        "package": "maccatcher",
        "partial": "",
        "signature": "IO(Maybe(String,MAC))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#v:nics",
      "description": {
        "fct-descr": "\u003cp\u003eFetch name-MAC pairs, using a cached value if it is available.\n\u003c/p\u003e",
        "fct-module": "System.Info.MAC",
        "fct-package": "maccatcher",
        "fct-signature": "IO [(String, MAC)]",
        "fct-source": "src/System-Info-MAC.html#nics",
        "fct-type": "function",
        "title": "nics"
      },
      "index": {
        "description": "Fetch name-MAC pairs using cached value if it is available",
        "hierarchy": "System Info MAC",
        "module": "System.Info.MAC",
        "name": "nics",
        "normalized": "IO[(String,MAC)]",
        "package": "maccatcher",
        "partial": "",
        "signature": "IO[(String,MAC)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maccatcher/docs/System-Info-MAC.html#v:refresh",
      "description": {
        "fct-descr": "\u003cp\u003eExplicitly re-run the MAC reading operation.\n\u003c/p\u003e",
        "fct-module": "System.Info.MAC",
        "fct-package": "maccatcher",
        "fct-signature": "IO [(String, MAC)]",
        "fct-source": "src/System-Info-MAC.html#refresh",
        "fct-type": "function",
        "title": "refresh"
      },
      "index": {
        "description": "Explicitly re-run the MAC reading operation",
        "hierarchy": "System Info MAC",
        "module": "System.Info.MAC",
        "name": "refresh",
        "normalized": "IO[(String,MAC)]",
        "package": "maccatcher",
        "partial": "",
        "signature": "IO[(String,MAC)]"
      }
    }
  }
]