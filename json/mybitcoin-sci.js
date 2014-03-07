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
        "word": "mybitcoin-sci"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to mybitcoin.com's shopping cart interface.\n\u003c/p\u003e\u003cp\u003eAfter entering your credentials into the config structure, you should be\n able to use the library like this:\n\u003c/p\u003e\u003cp\u003eBehold my glorious fortune:\n\u003c/p\u003e\u003cpre\u003e\n *Network.MyBitcoin\u003e mbcGetBalance myConfig\n [(\"SCI Version\",\"1.0\"),(\"SCI Code\",\"1\"),(\"SCI Reason\",\"OK\"),(\"SCI Balance\",\"0.49000000000\")]\n\u003c/pre\u003e\u003cp\u003eWell, how much are 0.49 bitcoins worth?\n\u003c/p\u003e\u003cpre\u003e\n *Network.MyBitcoin\u003e fmap (lookup \"SCI Currency USD Rate\") $ mbcGetRates myConfig \n Just \"17.113100\"\n\u003c/pre\u003e\u003cp\u003eCan we be sure the responses are authentic?\n\u003c/p\u003e\u003cpre\u003e\n *Network.MyBitcoin\u003e mbcPostProcess myConfig \"response\"\n *** Exception: GPG Signature failure!\n\u003c/pre\u003e\u003cp\u003eThis library is shaped after the PHP interface to mybitcoin.com. It uses libcurl\n and verifies responses with GPG. To enable verification, you need to add the mybitcoin\n public key to your GPG keychain.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MyBitcoin",
          "name": "MyBitcoin",
          "package": "mybitcoin-sci",
          "source": "src/Network-MyBitcoin.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to mybitcoin.com shopping cart interface After entering your credentials into the config structure you should be able to use the library like this Behold my glorious fortune Network.MyBitcoin mbcGetBalance myConfig SCI Version SCI Code SCI Reason OK SCI Balance Well how much are bitcoins worth Network.MyBitcoin fmap lookup SCI Currency USD Rate mbcGetRates myConfig Just Can we be sure the responses are authentic Network.MyBitcoin mbcPostProcess myConfig response Exception GPG Signature failure This library is shaped after the PHP interface to mybitcoin.com It uses libcurl and verifies responses with GPG To enable verification you need to add the mybitcoin public key to your GPG keychain",
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "MyBitcoin",
          "package": "mybitcoin-sci",
          "partial": "My Bitcoin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MyBitcoin",
          "name": "Config",
          "package": "mybitcoin-sci",
          "source": "src/Network-MyBitcoin.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "Config",
          "package": "mybitcoin-sci",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MyBitcoin",
          "name": "Config",
          "package": "mybitcoin-sci",
          "signature": "Config",
          "source": "src/Network-MyBitcoin.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "Config",
          "package": "mybitcoin-sci",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MyBitcoin",
          "name": "cfgAutoKey",
          "package": "mybitcoin-sci",
          "signature": "String",
          "source": "src/Network-MyBitcoin.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "cfgAutoKey",
          "package": "mybitcoin-sci",
          "partial": "Auto Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:cfgAutoKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MyBitcoin",
          "name": "cfgEnableGPG",
          "package": "mybitcoin-sci",
          "signature": "Bool",
          "source": "src/Network-MyBitcoin.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "cfgEnableGPG",
          "package": "mybitcoin-sci",
          "partial": "Enable GPG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:cfgEnableGPG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MyBitcoin",
          "name": "cfgGPGBinary",
          "package": "mybitcoin-sci",
          "signature": "FilePath",
          "source": "src/Network-MyBitcoin.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "cfgGPGBinary",
          "package": "mybitcoin-sci",
          "partial": "GPGBinary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:cfgGPGBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MyBitcoin",
          "name": "cfgUserName",
          "package": "mybitcoin-sci",
          "signature": "String",
          "source": "src/Network-MyBitcoin.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "cfgUserName",
          "package": "mybitcoin-sci",
          "partial": "User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:cfgUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is used for receiving payments. You receive payments by redirecting\n   customers to the mybitcoin pay page with your bitcoin address in the query arguments.\n   This method lets you do that without revealing your bitcoin address. See the Merchant\n   Tools at mybitcoin.com for more information.\n\u003c/p\u003e",
          "module": "Network.MyBitcoin",
          "name": "mbcEncryptFormData",
          "package": "mybitcoin-sci",
          "signature": "Config -\u003e String -\u003e IO [(String, String)]",
          "source": "src/Network-MyBitcoin.html#mbcEncryptFormData",
          "type": "function"
        },
        "index": {
          "description": "This function is used for receiving payments You receive payments by redirecting customers to the mybitcoin pay page with your bitcoin address in the query arguments This method lets you do that without revealing your bitcoin address See the Merchant Tools at mybitcoin.com for more information",
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "mbcEncryptFormData",
          "normalized": "Config-\u003eString-\u003eIO[(String,String)]",
          "package": "mybitcoin-sci",
          "partial": "Encrypt Form Data",
          "signature": "Config-\u003eString-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:mbcEncryptFormData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the key \"SCI Balance\" with your account balance.\n\u003c/p\u003e",
          "module": "Network.MyBitcoin",
          "name": "mbcGetBalance",
          "package": "mybitcoin-sci",
          "signature": "Config -\u003e IO [(String, String)]",
          "source": "src/Network-MyBitcoin.html#mbcGetBalance",
          "type": "function"
        },
        "index": {
          "description": "Returns the key SCI Balance with your account balance",
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "mbcGetBalance",
          "normalized": "Config-\u003eIO[(String,String)]",
          "package": "mybitcoin-sci",
          "partial": "Get Balance",
          "signature": "Config-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:mbcGetBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists bitcoin exchange rates for various currencies. Presumably taken from\n   Mt. Gox.\n\u003c/p\u003e",
          "module": "Network.MyBitcoin",
          "name": "mbcGetRates",
          "package": "mybitcoin-sci",
          "signature": "Config -\u003e IO [(String, String)]",
          "source": "src/Network-MyBitcoin.html#mbcGetRates",
          "type": "function"
        },
        "index": {
          "description": "Lists bitcoin exchange rates for various currencies Presumably taken from Mt Gox",
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "mbcGetRates",
          "normalized": "Config-\u003eIO[(String,String)]",
          "package": "mybitcoin-sci",
          "partial": "Get Rates",
          "signature": "Config-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:mbcGetRates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and verify (if enabled) a message from mybitcoin.com. This method is used\n   when processing receipts. See \u003ccode\u003e\u003ca\u003embcSpend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.MyBitcoin",
          "name": "mbcPostProcess",
          "package": "mybitcoin-sci",
          "signature": "Config -\u003e String -\u003e IO [(String, String)]",
          "source": "src/Network-MyBitcoin.html#mbcPostProcess",
          "type": "function"
        },
        "index": {
          "description": "Parse and verify if enabled message from mybitcoin.com This method is used when processing receipts See mbcSpend",
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "mbcPostProcess",
          "normalized": "Config-\u003eString-\u003eIO[(String,String)]",
          "package": "mybitcoin-sci",
          "partial": "Post Process",
          "signature": "Config-\u003eString-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:mbcPostProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method is used for sending bitcoins to other bitcoin addresses. Mybitcoin.com\n   uses a two-step commit procedure where you have to confirm a receipt before the transaction\n   is final.\n\u003c/p\u003e",
          "module": "Network.MyBitcoin",
          "name": "mbcSpend",
          "package": "mybitcoin-sci",
          "signature": "Config-\u003e String-\u003e Rational-\u003e String-\u003e String-\u003e IO [(String, String)]",
          "type": "function"
        },
        "index": {
          "description": "This method is used for sending bitcoins to other bitcoin addresses Mybitcoin.com uses two-step commit procedure where you have to confirm receipt before the transaction is final",
          "hierarchy": "Network MyBitcoin",
          "module": "Network.MyBitcoin",
          "name": "mbcSpend",
          "normalized": "Config-\u003eString-\u003eRational-\u003eString-\u003eString-\u003eIO[(String,String)]",
          "package": "mybitcoin-sci",
          "partial": "Spend",
          "signature": "Config-\u003eString-\u003eRational-\u003eString-\u003eString-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mybitcoin-sci/docs/Network-MyBitcoin.html#v:mbcSpend"
      }
    }
  ]
]