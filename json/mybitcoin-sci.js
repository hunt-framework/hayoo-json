[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to mybitcoin.com's shopping cart interface.\n\u003c/p\u003e\u003cp\u003eAfter entering your credentials into the config structure, you should be\n able to use the library like this:\n\u003c/p\u003e\u003cp\u003eBehold my glorious fortune:\n\u003c/p\u003e\u003cpre\u003e\n *Network.MyBitcoin\u003e mbcGetBalance myConfig\n [(\"SCI Version\",\"1.0\"),(\"SCI Code\",\"1\"),(\"SCI Reason\",\"OK\"),(\"SCI Balance\",\"0.49000000000\")]\n\u003c/pre\u003e\u003cp\u003eWell, how much are 0.49 bitcoins worth?\n\u003c/p\u003e\u003cpre\u003e\n *Network.MyBitcoin\u003e fmap (lookup \"SCI Currency USD Rate\") $ mbcGetRates myConfig \n Just \"17.113100\"\n\u003c/pre\u003e\u003cp\u003eCan we be sure the responses are authentic?\n\u003c/p\u003e\u003cpre\u003e\n *Network.MyBitcoin\u003e mbcPostProcess myConfig \"response\"\n *** Exception: GPG Signature failure!\n\u003c/pre\u003e\u003cp\u003eThis library is shaped after the PHP interface to mybitcoin.com. It uses libcurl\n and verifies responses with GPG. To enable verification, you need to add the mybitcoin\n public key to your GPG keychain.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "module",
        "fct-source": "src/Network-MyBitcoin.html",
        "fct-type": "module",
        "title": "MyBitcoin"
      },
      "index": {
        "description": "Interface to mybitcoin.com shopping cart interface After entering your credentials into the config structure you should be able to use the library like this Behold my glorious fortune Network.MyBitcoin mbcGetBalance myConfig SCI Version SCI Code SCI Reason OK SCI Balance Well how much are bitcoins worth Network.MyBitcoin fmap lookup SCI Currency USD Rate mbcGetRates myConfig Just Can we be sure the responses are authentic Network.MyBitcoin mbcPostProcess myConfig response Exception GPG Signature failure This library is shaped after the PHP interface to mybitcoin.com It uses libcurl and verifies responses with GPG To enable verification you need to add the mybitcoin public key to your GPG keychain",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "MyBitcoin",
        "normalized": "",
        "package": "mybitcoin-sci",
        "partial": "My Bitcoin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#t:Config",
      "description": {
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "data",
        "fct-source": "src/Network-MyBitcoin.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "Config",
        "normalized": "",
        "package": "mybitcoin-sci",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:Config",
      "description": {
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "Config",
        "fct-source": "src/Network-MyBitcoin.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "Config",
        "normalized": "",
        "package": "mybitcoin-sci",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:cfgAutoKey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "String",
        "fct-source": "src/Network-MyBitcoin.html#Config",
        "fct-type": "function",
        "title": "cfgAutoKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "cfgAutoKey",
        "normalized": "",
        "package": "mybitcoin-sci",
        "partial": "Auto Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:cfgEnableGPG",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "Bool",
        "fct-source": "src/Network-MyBitcoin.html#Config",
        "fct-type": "function",
        "title": "cfgEnableGPG"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "cfgEnableGPG",
        "normalized": "",
        "package": "mybitcoin-sci",
        "partial": "Enable GPG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:cfgGPGBinary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "FilePath",
        "fct-source": "src/Network-MyBitcoin.html#Config",
        "fct-type": "function",
        "title": "cfgGPGBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "cfgGPGBinary",
        "normalized": "",
        "package": "mybitcoin-sci",
        "partial": "GPGBinary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:cfgUserName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "String",
        "fct-source": "src/Network-MyBitcoin.html#Config",
        "fct-type": "function",
        "title": "cfgUserName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "cfgUserName",
        "normalized": "",
        "package": "mybitcoin-sci",
        "partial": "User Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:mbcEncryptFormData",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is used for receiving payments. You receive payments by redirecting\n   customers to the mybitcoin pay page with your bitcoin address in the query arguments.\n   This method lets you do that without revealing your bitcoin address. See the Merchant\n   Tools at mybitcoin.com for more information.\n\u003c/p\u003e",
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "Config -\u003e String -\u003e IO [(String, String)]",
        "fct-source": "src/Network-MyBitcoin.html#mbcEncryptFormData",
        "fct-type": "function",
        "title": "mbcEncryptFormData"
      },
      "index": {
        "description": "This function is used for receiving payments You receive payments by redirecting customers to the mybitcoin pay page with your bitcoin address in the query arguments This method lets you do that without revealing your bitcoin address See the Merchant Tools at mybitcoin.com for more information",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "mbcEncryptFormData",
        "normalized": "Config-\u003eString-\u003eIO[(String,String)]",
        "package": "mybitcoin-sci",
        "partial": "Encrypt Form Data",
        "signature": "Config-\u003eString-\u003eIO[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:mbcGetBalance",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the key \"SCI Balance\" with your account balance.\n\u003c/p\u003e",
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "Config -\u003e IO [(String, String)]",
        "fct-source": "src/Network-MyBitcoin.html#mbcGetBalance",
        "fct-type": "function",
        "title": "mbcGetBalance"
      },
      "index": {
        "description": "Returns the key SCI Balance with your account balance",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "mbcGetBalance",
        "normalized": "Config-\u003eIO[(String,String)]",
        "package": "mybitcoin-sci",
        "partial": "Get Balance",
        "signature": "Config-\u003eIO[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:mbcGetRates",
      "description": {
        "fct-descr": "\u003cp\u003eLists bitcoin exchange rates for various currencies. Presumably taken from\n   Mt. Gox.\n\u003c/p\u003e",
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "Config -\u003e IO [(String, String)]",
        "fct-source": "src/Network-MyBitcoin.html#mbcGetRates",
        "fct-type": "function",
        "title": "mbcGetRates"
      },
      "index": {
        "description": "Lists bitcoin exchange rates for various currencies Presumably taken from Mt Gox",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "mbcGetRates",
        "normalized": "Config-\u003eIO[(String,String)]",
        "package": "mybitcoin-sci",
        "partial": "Get Rates",
        "signature": "Config-\u003eIO[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:mbcPostProcess",
      "description": {
        "fct-descr": "\u003cp\u003eParse and verify (if enabled) a message from mybitcoin.com. This method is used\n   when processing receipts. See \u003ccode\u003e\u003ca\u003embcSpend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "Config -\u003e String -\u003e IO [(String, String)]",
        "fct-source": "src/Network-MyBitcoin.html#mbcPostProcess",
        "fct-type": "function",
        "title": "mbcPostProcess"
      },
      "index": {
        "description": "Parse and verify if enabled message from mybitcoin.com This method is used when processing receipts See mbcSpend",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "mbcPostProcess",
        "normalized": "Config-\u003eString-\u003eIO[(String,String)]",
        "package": "mybitcoin-sci",
        "partial": "Post Process",
        "signature": "Config-\u003eString-\u003eIO[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:mbcSpend",
      "description": {
        "fct-descr": "\u003cp\u003eThis method is used for sending bitcoins to other bitcoin addresses. Mybitcoin.com\n   uses a two-step commit procedure where you have to confirm a receipt before the transaction\n   is final.\n\u003c/p\u003e",
        "fct-module": "Network.MyBitcoin",
        "fct-package": "mybitcoin-sci",
        "fct-signature": "Config-\u003e String-\u003e Rational-\u003e String-\u003e String-\u003e IO [(String, String)]",
        "fct-type": "function",
        "title": "mbcSpend"
      },
      "index": {
        "description": "This method is used for sending bitcoins to other bitcoin addresses Mybitcoin.com uses two-step commit procedure where you have to confirm receipt before the transaction is final",
        "hierarchy": "Network MyBitcoin",
        "module": "Network.MyBitcoin",
        "name": "mbcSpend",
        "normalized": "Config-\u003eString-\u003eRational-\u003eString-\u003eString-\u003eIO[(String,String)]",
        "package": "mybitcoin-sci",
        "partial": "Spend",
        "signature": "Config-\u003eString-\u003eRational-\u003eString-\u003eString-\u003eIO[(String,String)]"
      }
    }
  }
]