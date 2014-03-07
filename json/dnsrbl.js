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
        "word": "dnsrbl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnynchronously lookup a host on multiple DSNRBLs. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DNSRBL",
          "name": "DNSRBL",
          "package": "dnsrbl",
          "source": "src/Network-DNSRBL.html",
          "type": "module"
        },
        "index": {
          "description": "Anynchronously lookup host on multiple DSNRBLs",
          "hierarchy": "Network DNSRBL",
          "module": "Network.DNSRBL",
          "name": "DNSRBL",
          "package": "dnsrbl",
          "partial": "DNSRBL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dnsrbl/docs/Network-DNSRBL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easanequery\u003c/a\u003e\u003c/code\u003e is a wrapper of dorblf which has only one instance of RBL and\n if any of the elements were found in the RBL (name, any of the IPs)\n if it is true otherwise it is false.\n\u003c/p\u003e",
          "module": "Network.DNSRBL",
          "name": "asanequery",
          "package": "dnsrbl",
          "signature": "String -\u003e [HostAddress] -\u003e Resolver -\u003e IO [(String, Bool)]",
          "source": "src/Network-DNSRBL.html#asanequery",
          "type": "function"
        },
        "index": {
          "description": "asanequery is wrapper of dorblf which has only one instance of RBL and if any of the elements were found in the RBL name any of the IPs if it is true otherwise it is false",
          "hierarchy": "Network DNSRBL",
          "module": "Network.DNSRBL",
          "name": "asanequery",
          "normalized": "String-\u003e[HostAddress]-\u003eResolver-\u003eIO[(String,Bool)]",
          "package": "dnsrbl",
          "signature": "String-\u003e[HostAddress]-\u003eResolver-\u003eIO[(String,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dnsrbl/docs/Network-DNSRBL.html#v:asanequery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edorblf\u003c/a\u003e\u003c/code\u003e returns a list of (String,Bool) where\n the string is the RBL name and Bool is if it was found or not\n Note: There may be multiple instances of the same string \n with different Bool values since one hostname may resolve to multiple IPs\n some of which may match and some of which may not match\n\u003c/p\u003e",
          "module": "Network.DNSRBL",
          "name": "dorblf",
          "package": "dnsrbl",
          "signature": "String -\u003e [HostAddress] -\u003e Resolver -\u003e IO [(String, Bool)]",
          "source": "src/Network-DNSRBL.html#dorblf",
          "type": "function"
        },
        "index": {
          "description": "dorblf returns list of String Bool where the string is the RBL name and Bool is if it was found or not Note There may be multiple instances of the same string with different Bool values since one hostname may resolve to multiple IPs some of which may match and some of which may not match",
          "hierarchy": "Network DNSRBL",
          "module": "Network.DNSRBL",
          "name": "dorblf",
          "normalized": "String-\u003e[HostAddress]-\u003eResolver-\u003eIO[(String,Bool)]",
          "package": "dnsrbl",
          "signature": "String-\u003e[HostAddress]-\u003eResolver-\u003eIO[(String,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dnsrbl/docs/Network-DNSRBL.html#v:dorblf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edorbls\u003c/a\u003e\u003c/code\u003e is a friendly wrapper around \n dorblf which only requires a hostname\n\u003c/p\u003e",
          "module": "Network.DNSRBL",
          "name": "dorbls",
          "package": "dnsrbl",
          "signature": "String -\u003e IO [(String, Bool)]",
          "source": "src/Network-DNSRBL.html#dorbls",
          "type": "function"
        },
        "index": {
          "description": "dorbls is friendly wrapper around dorblf which only requires hostname",
          "hierarchy": "Network DNSRBL",
          "module": "Network.DNSRBL",
          "name": "dorbls",
          "normalized": "String-\u003eIO[(String,Bool)]",
          "package": "dnsrbl",
          "signature": "String-\u003eIO[(String,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dnsrbl/docs/Network-DNSRBL.html#v:dorbls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esanequery\u003c/a\u003e\u003c/code\u003e is a Wrapper of \u003ca\u003edorbls\u003c/a\u003e which has only one instance \n of each RBL and\n if any of the elements were found in the RBL (name, any of the IPs)\n it is true, otherwise it is false\n\u003c/p\u003e",
          "module": "Network.DNSRBL",
          "name": "sanequery",
          "package": "dnsrbl",
          "signature": "String -\u003e IO [(String, Bool)]",
          "source": "src/Network-DNSRBL.html#sanequery",
          "type": "function"
        },
        "index": {
          "description": "sanequery is Wrapper of dorbls which has only one instance of each RBL and if any of the elements were found in the RBL name any of the IPs it is true otherwise it is false",
          "hierarchy": "Network DNSRBL",
          "module": "Network.DNSRBL",
          "name": "sanequery",
          "normalized": "String-\u003eIO[(String,Bool)]",
          "package": "dnsrbl",
          "signature": "String-\u003eIO[(String,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dnsrbl/docs/Network-DNSRBL.html#v:sanequery"
      }
    }
  ]
]