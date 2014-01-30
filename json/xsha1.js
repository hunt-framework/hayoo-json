[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExploring the CD key hash used to authenticate the game with Battle.net.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "module",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html",
        "fct-type": "module",
        "title": "CDHash"
      },
      "index": {
        "description": "Exploring the CD key hash used to authenticate the game with Battle.net",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "CDHash",
        "normalized": "",
        "package": "xsha1",
        "partial": "CDHash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#t:Sniff",
      "description": {
        "fct-descr": "\u003cp\u003eData accessible to an attacker observing traffic. All plaintext.\n\u003c/p\u003e\u003cp\u003eOnly missing piece of CD key info is the private value, which gets hashed.\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "data",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
        "fct-type": "data",
        "title": "Sniff"
      },
      "index": {
        "description": "Data accessible to an attacker observing traffic All plaintext Only missing piece of CD key info is the private value which gets hashed",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "Sniff",
        "normalized": "",
        "package": "xsha1",
        "partial": "Sniff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:Sniff",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Sniff",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
        "fct-type": "function",
        "title": "Sniff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "Sniff",
        "normalized": "",
        "package": "xsha1",
        "partial": "Sniff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003eUnknown value is the pivot point.\n\u003c/p\u003e\u003cp\u003eRegister states before and after it are marked alpha and beta.\n Beta has 32 possible values. Alpha just one. Solve for 32 private values.\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Vector N -\u003e Regs",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#alpha",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "Unknown value is the pivot point Register states before and after it are marked alpha and beta Beta has possible values Alpha just one Solve for private values",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "alpha",
        "normalized": "Vector N-\u003eRegs",
        "package": "xsha1",
        "partial": "",
        "signature": "Vector N-\u003eRegs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:beta",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Vector N -\u003e Regs -\u003e Regs",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#beta",
        "fct-type": "function",
        "title": "beta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "beta",
        "normalized": "Vector N-\u003eRegs-\u003eRegs",
        "package": "xsha1",
        "partial": "",
        "signature": "Vector N-\u003eRegs-\u003eRegs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:classify",
      "description": {
        "fct-descr": "\u003cp\u003eClassify DWORDs based on how much knowledge an eavesdropper has of them.\n\u003c/p\u003e\u003cp\u003eX = known value\n\u003c/p\u003e\u003cp\u003e? = unknown (32 bit CD key private value)\n\u003c/p\u003e\u003cp\u003e# = depends on 5 LSBs of private value\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Vector N -\u003e String",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#classify",
        "fct-type": "function",
        "title": "classify"
      },
      "index": {
        "description": "Classify DWORDs based on how much knowledge an eavesdropper has of them known value unknown bit CD key private value depends on LSBs of private value",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "classify",
        "normalized": "Vector N-\u003eString",
        "package": "xsha1",
        "partial": "",
        "signature": "Vector N-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:getUnk",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Regs -\u003e Vector N -\u003e N",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#getUnk",
        "fct-type": "function",
        "title": "getUnk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "getUnk",
        "normalized": "Regs-\u003eVector N-\u003eN",
        "package": "xsha1",
        "partial": "Unk",
        "signature": "Regs-\u003eVector N-\u003eN"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:guessedUnknowns",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Sniff -\u003e Regs -\u003e [N]",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#guessedUnknowns",
        "fct-type": "function",
        "title": "guessedUnknowns"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "guessedUnknowns",
        "normalized": "Sniff-\u003eRegs-\u003e[N]",
        "package": "xsha1",
        "partial": "Unknowns",
        "signature": "Sniff-\u003eRegs-\u003e[N]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eSample D2 CD key hash buffer. XSHA1 of this is sent to the server.\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Sniff-\u003e N-\u003e Vector N",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "Sample D2 CD key hash buffer XSHA1 of this is sent to the server",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "hash",
        "normalized": "Sniff-\u003eN-\u003eVector N",
        "package": "xsha1",
        "partial": "",
        "signature": "Sniff-\u003eN-\u003eVector N"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:hfoldl",
      "description": {
        "fct-descr": "\u003cp\u003eFoldl that keeps history.\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "(a -\u003e t -\u003e a) -\u003e a -\u003e [t] -\u003e (a, [a])",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#hfoldl",
        "fct-type": "function",
        "title": "hfoldl"
      },
      "index": {
        "description": "Foldl that keeps history",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "hfoldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e(a,[a])",
        "package": "xsha1",
        "partial": "",
        "signature": "(a-\u003et-\u003ea)-\u003ea-\u003e[t]-\u003e(a,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:printReg",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "(N, N, N, N, N) -\u003e t",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#printReg",
        "fct-type": "function",
        "title": "printReg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "printReg",
        "normalized": "(N,N,N,N,N)-\u003ea",
        "package": "xsha1",
        "partial": "Reg",
        "signature": "(N,N,N,N,N)-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:result1",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "(N, N, N, N, N)",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#result1",
        "fct-type": "function",
        "title": "result1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "result1",
        "normalized": "(N,N,N,N,N)",
        "package": "xsha1",
        "partial": "",
        "signature": "(N,N,N,N,N)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:result2",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "(N, N, N, N, N)",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#result1",
        "fct-type": "function",
        "title": "result2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "result2",
        "normalized": "(N,N,N,N,N)",
        "package": "xsha1",
        "partial": "",
        "signature": "(N,N,N,N,N)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:setPriv",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "N -\u003e Vector N -\u003e Vector N",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#setPriv",
        "fct-type": "function",
        "title": "setPriv"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "setPriv",
        "normalized": "N-\u003eVector N-\u003eVector N",
        "package": "xsha1",
        "partial": "Priv",
        "signature": "N-\u003eVector N-\u003eVector N"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:snClientTok",
      "description": {
        "fct-descr": "\u003cp\u003enonce\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Word32",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
        "fct-type": "function",
        "title": "snClientTok"
      },
      "index": {
        "description": "nonce",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "snClientTok",
        "normalized": "",
        "package": "xsha1",
        "partial": "Client Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:snProduct",
      "description": {
        "fct-descr": "\u003cp\u003edecoded from key: 6 classic D2, 10 xpac D2 are common values\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Word32",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
        "fct-type": "function",
        "title": "snProduct"
      },
      "index": {
        "description": "decoded from key classic D2 xpac D2 are common values",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "snProduct",
        "normalized": "",
        "package": "xsha1",
        "partial": "Product",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:snPublic",
      "description": {
        "fct-descr": "\u003cp\u003edecoded from key, server has mapping to the private value\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Word32",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
        "fct-type": "function",
        "title": "snPublic"
      },
      "index": {
        "description": "decoded from key server has mapping to the private value",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "snPublic",
        "normalized": "",
        "package": "xsha1",
        "partial": "Public",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:snServerTok",
      "description": {
        "fct-descr": "\u003cp\u003enonce\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Word32",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
        "fct-type": "function",
        "title": "snServerTok"
      },
      "index": {
        "description": "nonce",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "snServerTok",
        "normalized": "",
        "package": "xsha1",
        "partial": "Server Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:sniff1",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Sniff",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#sniff1",
        "fct-type": "function",
        "title": "sniff1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "sniff1",
        "normalized": "",
        "package": "xsha1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:sniff2",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Sniff",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#sniff1",
        "fct-type": "function",
        "title": "sniff2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "sniff2",
        "normalized": "",
        "package": "xsha1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003ePossible hash buffer construction from data known to eavesdroper.\n\u003c/p\u003e\u003cp\u003eSince most of the expanded buffer depends just on 5 secret bits, 32\n  different buffers will cover all the possibilities for all but one DWORD.\n  That DWORD is the private key value, and is unknown.\n\u003c/p\u003e\u003cp\u003eOnly the relevant 5 bits on the private value are set. It should be re-set\n  afterwards, to a better guess or and unknown.\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Sniff -\u003e [Vector N]",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "Possible hash buffer construction from data known to eavesdroper Since most of the expanded buffer depends just on secret bits different buffers will cover all the possibilities for all but one DWORD That DWORD is the private key value and is unknown Only the relevant bits on the private value are set It should be re-set afterwards to better guess or and unknown",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "space",
        "normalized": "Sniff-\u003e[Vector N]",
        "package": "xsha1",
        "partial": "",
        "signature": "Sniff-\u003e[Vector N]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:test",
      "description": {
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Regs",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "test",
        "normalized": "",
        "package": "xsha1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:unhash",
      "description": {
        "fct-descr": "\u003cp\u003eGet private values from sniffed data.\n\u003c/p\u003e\u003cp\u003eSome false positives, Binomial(n=31, p=1/32)\n\u003c/p\u003e\u003cp\u003eStraightforward to encode back into human-readable CD key.\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Sniff -\u003e (N, N, N, N, N) -\u003e IO ()",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#unhash",
        "fct-type": "function",
        "title": "unhash"
      },
      "index": {
        "description": "Get private values from sniffed data Some false positives Binomial Straightforward to encode back into human-readable CD key",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "unhash",
        "normalized": "Sniff-\u003e(N,N,N,N,N)-\u003eIO()",
        "package": "xsha1",
        "partial": "",
        "signature": "Sniff-\u003e(N,N,N,N,N)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:view",
      "description": {
        "fct-descr": "\u003cp\u003ePrint infix equations for buffer.\n\u003c/p\u003e",
        "fct-module": "Data.Codec.Blizz.CDHash",
        "fct-package": "xsha1",
        "fct-signature": "Vector N -\u003e IO ()",
        "fct-source": "src/Data-Codec-Blizz-CDHash.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "Print infix equations for buffer",
        "hierarchy": "Data Codec Blizz CDHash",
        "module": "Data.Codec.Blizz.CDHash",
        "name": "view",
        "normalized": "Vector N-\u003eIO()",
        "package": "xsha1",
        "partial": "",
        "signature": "Vector N-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression stage. Padding - extension - compression.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://en.wikipedia.org/wiki/Sha1\u003c/a\u003e for the real thing.\n\u003c/p\u003e\u003cp\u003eForward and reverse of a single round is implemented, to perform the full\n thing just foldl over [0..79].\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.XSHA1.Compress",
        "fct-package": "xsha1",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-XSHA1-Compress.html",
        "fct-type": "module",
        "title": "Compress"
      },
      "index": {
        "description": "Compression stage Padding extension compression See http en.wikipedia.org wiki Sha1 for the real thing Forward and reverse of single round is implemented to perform the full thing just foldl over",
        "hierarchy": "Data Digest XSHA1 Compress",
        "module": "Data.Digest.XSHA1.Compress",
        "name": "Compress",
        "normalized": "",
        "package": "xsha1",
        "partial": "Compress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#t:Regs",
      "description": {
        "fct-module": "Data.Digest.XSHA1.Compress",
        "fct-package": "xsha1",
        "fct-signature": "type",
        "fct-source": "src/Data-Digest-XSHA1-Compress.html#Regs",
        "fct-type": "type",
        "title": "Regs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest XSHA1 Compress",
        "module": "Data.Digest.XSHA1.Compress",
        "name": "Regs",
        "normalized": "",
        "package": "xsha1",
        "partial": "Regs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:consts",
      "description": {
        "fct-descr": "\u003cp\u003eInitial values for registers a..e.\n\u003c/p\u003e\u003cp\u003eAlso get added to the registers at the end.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1.Compress",
        "fct-package": "xsha1",
        "fct-signature": "Regs",
        "fct-source": "src/Data-Digest-XSHA1-Compress.html#consts",
        "fct-type": "function",
        "title": "consts"
      },
      "index": {
        "description": "Initial values for registers a..e Also get added to the registers at the end",
        "hierarchy": "Data Digest XSHA1 Compress",
        "module": "Data.Digest.XSHA1.Compress",
        "name": "consts",
        "normalized": "",
        "package": "xsha1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:f",
      "description": {
        "fct-descr": "\u003cp\u003eRound function f, with round number and three of the registers.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1.Compress",
        "fct-package": "xsha1",
        "fct-signature": "Int -\u003e N -\u003e N -\u003e N -\u003e N",
        "fct-source": "src/Data-Digest-XSHA1-Compress.html#f",
        "fct-type": "function",
        "title": "f"
      },
      "index": {
        "description": "Round function with round number and three of the registers",
        "hierarchy": "Data Digest XSHA1 Compress",
        "module": "Data.Digest.XSHA1.Compress",
        "name": "f",
        "normalized": "Int-\u003eN-\u003eN-\u003eN-\u003eN",
        "package": "xsha1",
        "partial": "",
        "signature": "Int-\u003eN-\u003eN-\u003eN-\u003eN"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:finalize",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the last step, a weird addition thrown in for obfuscation.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1.Compress",
        "fct-package": "xsha1",
        "fct-signature": "Regs -\u003e Regs",
        "fct-source": "src/Data-Digest-XSHA1-Compress.html#finalize",
        "fct-type": "function",
        "title": "finalize"
      },
      "index": {
        "description": "Does the last step weird addition thrown in for obfuscation",
        "hierarchy": "Data Digest XSHA1 Compress",
        "module": "Data.Digest.XSHA1.Compress",
        "name": "finalize",
        "normalized": "Regs-\u003eRegs",
        "package": "xsha1",
        "partial": "",
        "signature": "Regs-\u003eRegs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:iter",
      "description": {
        "fct-descr": "\u003cp\u003eOne round of the XSHA1 compression function.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1.Compress",
        "fct-package": "xsha1",
        "fct-signature": "Vector N -\u003e Regs -\u003e Int -\u003e Regs",
        "fct-source": "src/Data-Digest-XSHA1-Compress.html#iter",
        "fct-type": "function",
        "title": "iter"
      },
      "index": {
        "description": "One round of the XSHA1 compression function",
        "hierarchy": "Data Digest XSHA1 Compress",
        "module": "Data.Digest.XSHA1.Compress",
        "name": "iter",
        "normalized": "Vector N-\u003eRegs-\u003eInt-\u003eRegs",
        "package": "xsha1",
        "partial": "",
        "signature": "Vector N-\u003eRegs-\u003eInt-\u003eRegs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:k",
      "description": {
        "fct-descr": "\u003cp\u003eRound constant k.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1.Compress",
        "fct-package": "xsha1",
        "fct-signature": "Int -\u003e N",
        "fct-source": "src/Data-Digest-XSHA1-Compress.html#k",
        "fct-type": "function",
        "title": "k"
      },
      "index": {
        "description": "Round constant",
        "hierarchy": "Data Digest XSHA1 Compress",
        "module": "Data.Digest.XSHA1.Compress",
        "name": "k",
        "normalized": "Int-\u003eN",
        "package": "xsha1",
        "partial": "",
        "signature": "Int-\u003eN"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:reti",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of the round function.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1.Compress",
        "fct-package": "xsha1",
        "fct-signature": "Vector N -\u003e Regs -\u003e Int -\u003e Regs",
        "fct-source": "src/Data-Digest-XSHA1-Compress.html#reti",
        "fct-type": "function",
        "title": "reti"
      },
      "index": {
        "description": "Inverse of the round function",
        "hierarchy": "Data Digest XSHA1 Compress",
        "module": "Data.Digest.XSHA1.Compress",
        "name": "reti",
        "normalized": "Vector N-\u003eRegs-\u003eInt-\u003eRegs",
        "package": "xsha1",
        "partial": "",
        "signature": "Vector N-\u003eRegs-\u003eInt-\u003eRegs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:test",
      "description": {
        "fct-module": "Data.Digest.XSHA1.Compress",
        "fct-package": "xsha1",
        "fct-signature": "IO ()",
        "fct-source": "src/Data-Digest-XSHA1-Compress.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest XSHA1 Compress",
        "module": "Data.Digest.XSHA1.Compress",
        "name": "test",
        "normalized": "IO()",
        "package": "xsha1",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:unfinalize",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of \u003ca\u003efinalize\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1.Compress",
        "fct-package": "xsha1",
        "fct-signature": "Regs -\u003e Regs",
        "fct-source": "src/Data-Digest-XSHA1-Compress.html#unfinalize",
        "fct-type": "function",
        "title": "unfinalize"
      },
      "index": {
        "description": "Inverse of finalize",
        "hierarchy": "Data Digest XSHA1 Compress",
        "module": "Data.Digest.XSHA1.Compress",
        "name": "unfinalize",
        "normalized": "Regs-\u003eRegs",
        "package": "xsha1",
        "partial": "",
        "signature": "Regs-\u003eRegs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Extend.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtension stage of XSHA1.\n\u003c/p\u003e\u003cp\u003eIn SHA-1, it follows padding. XSHA1 doesn't pad, just zeros.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.XSHA1.Extend",
        "fct-package": "xsha1",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-XSHA1-Extend.html",
        "fct-type": "module",
        "title": "Extend"
      },
      "index": {
        "description": "Extension stage of XSHA1 In SHA-1 it follows padding XSHA1 doesn pad just zeros",
        "hierarchy": "Data Digest XSHA1 Extend",
        "module": "Data.Digest.XSHA1.Extend",
        "name": "Extend",
        "normalized": "",
        "package": "xsha1",
        "partial": "Extend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Extend.html#v:extend",
      "description": {
        "fct-descr": "\u003cp\u003eTake a 16 DWORD list, and extend it to 80 DWORDS based on itself.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1.Extend",
        "fct-package": "xsha1",
        "fct-signature": "Vector N -\u003e Vector N",
        "fct-source": "src/Data-Digest-XSHA1-Extend.html#extend",
        "fct-type": "function",
        "title": "extend"
      },
      "index": {
        "description": "Take DWORD list and extend it to DWORDS based on itself",
        "hierarchy": "Data Digest XSHA1 Extend",
        "module": "Data.Digest.XSHA1.Extend",
        "name": "extend",
        "normalized": "Vector N-\u003eVector N",
        "package": "xsha1",
        "partial": "",
        "signature": "Vector N-\u003eVector N"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSingle-block implementation of XSHA-1.\n\u003c/p\u003e\u003cp\u003eSee no reason to implement multiple blocks.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.XSHA1",
        "fct-package": "xsha1",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-XSHA1.html",
        "fct-type": "module",
        "title": "XSHA1"
      },
      "index": {
        "description": "Single-block implementation of XSHA-1 See no reason to implement multiple blocks",
        "hierarchy": "Data Digest XSHA1",
        "module": "Data.Digest.XSHA1",
        "name": "XSHA1",
        "normalized": "",
        "package": "xsha1",
        "partial": "XSHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#v:hexp",
      "description": {
        "fct-descr": "\u003cp\u003ePrint 512 bit hash in hex.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1",
        "fct-package": "xsha1",
        "fct-signature": "Regs -\u003e IO ()",
        "fct-source": "src/Data-Digest-XSHA1.html#hexp",
        "fct-type": "function",
        "title": "hexp"
      },
      "index": {
        "description": "Print bit hash in hex",
        "hierarchy": "Data Digest XSHA1",
        "module": "Data.Digest.XSHA1",
        "name": "hexp",
        "normalized": "Regs-\u003eIO()",
        "package": "xsha1",
        "partial": "",
        "signature": "Regs-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#v:test",
      "description": {
        "fct-descr": "\u003cp\u003eTests of known pairs, based on hash reverser's implementation.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1",
        "fct-package": "xsha1",
        "fct-signature": "IO Counts",
        "fct-source": "src/Data-Digest-XSHA1.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "Tests of known pairs based on hash reverser implementation",
        "hierarchy": "Data Digest XSHA1",
        "module": "Data.Digest.XSHA1",
        "name": "test",
        "normalized": "",
        "package": "xsha1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#v:testEmpty",
      "description": {
        "fct-module": "Data.Digest.XSHA1",
        "fct-package": "xsha1",
        "fct-signature": "Assertion",
        "fct-source": "src/Data-Digest-XSHA1.html#testEmpty",
        "fct-type": "function",
        "title": "testEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest XSHA1",
        "module": "Data.Digest.XSHA1",
        "name": "testEmpty",
        "normalized": "",
        "package": "xsha1",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#v:testOneLetter",
      "description": {
        "fct-module": "Data.Digest.XSHA1",
        "fct-package": "xsha1",
        "fct-signature": "Assertion",
        "fct-source": "src/Data-Digest-XSHA1.html#testOneLetter",
        "fct-type": "function",
        "title": "testOneLetter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest XSHA1",
        "module": "Data.Digest.XSHA1",
        "name": "testOneLetter",
        "normalized": "",
        "package": "xsha1",
        "partial": "One Letter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#v:xsha1",
      "description": {
        "fct-descr": "\u003cp\u003eSingle block of XSHA1.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.XSHA1",
        "fct-package": "xsha1",
        "fct-signature": "Vector N-\u003e Regs",
        "fct-type": "function",
        "title": "xsha1"
      },
      "index": {
        "description": "Single block of XSHA1",
        "hierarchy": "Data Digest XSHA1",
        "module": "Data.Digest.XSHA1",
        "name": "xsha1",
        "normalized": "Vector N-\u003eRegs",
        "package": "xsha1",
        "partial": "",
        "signature": "Vector N-\u003eRegs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArithmetic taint tracking.\n\u003c/p\u003e\u003cp\u003eExtension of Word32, that allows \u003ca\u003eU\u003c/a\u003enknown values to be used. Operations on\n known values are calculated as usual, while operations on unknowns are\n recorded in unsimplified form.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet e = 1+5 `xor` U `lshift` 2\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ee\n\u003c/code\u003e\u003c/strong\u003eX Xor (N 6) (X LShift U (N 2))\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epprint e\n\u003c/code\u003e\u003c/strong\u003e\"(6^(?\u003c\u003c2))\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e1+5 `xor` 0xBEEF `lshift` 2\n\u003c/code\u003e\u003c/strong\u003eN 195514\n\u003c/pre\u003e\u003cp\u003eIntended for analysis of XSHA-1, so only supports the necessary primitives.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Taint-Word32.html",
        "fct-type": "module",
        "title": "Word32"
      },
      "index": {
        "description": "Arithmetic taint tracking Extension of Word32 that allows nknown values to be used Operations on known values are calculated as usual while operations on unknowns are recorded in unsimplified form let xor lshift Xor LShift pprint xor xBEEF lshift Intended for analysis of XSHA-1 so only supports the necessary primitives",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "Word32",
        "normalized": "",
        "package": "xsha1",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#t:N",
      "description": {
        "fct-descr": "\u003cp\u003eA numeric type extended to hold information about unknown values.\n\u003c/p\u003e",
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Taint-Word32.html#N",
        "fct-type": "data",
        "title": "N"
      },
      "index": {
        "description": "numeric type extended to hold information about unknown values",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "N",
        "normalized": "",
        "package": "xsha1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#t:Op",
      "description": {
        "fct-descr": "\u003cp\u003eSupported operators.\n\u003c/p\u003e",
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Taint-Word32.html#Op",
        "fct-type": "data",
        "title": "Op"
      },
      "index": {
        "description": "Supported operators",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "Op",
        "normalized": "",
        "package": "xsha1",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:Add",
      "description": {
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "Add",
        "fct-source": "src/Numeric-Taint-Word32.html#Op",
        "fct-type": "function",
        "title": "Add"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "Add",
        "normalized": "",
        "package": "xsha1",
        "partial": "Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:And",
      "description": {
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "And",
        "fct-source": "src/Numeric-Taint-Word32.html#Op",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "And",
        "normalized": "",
        "package": "xsha1",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:LShift",
      "description": {
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "LShift",
        "fct-source": "src/Numeric-Taint-Word32.html#Op",
        "fct-type": "function",
        "title": "LShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "LShift",
        "normalized": "",
        "package": "xsha1",
        "partial": "LShift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:N",
      "description": {
        "fct-descr": "\u003cp\u003eNumbers are still present.\n\u003c/p\u003e",
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "N Word32",
        "fct-source": "src/Numeric-Taint-Word32.html#N",
        "fct-type": "function",
        "title": "N"
      },
      "index": {
        "description": "Numbers are still present",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "N",
        "normalized": "",
        "package": "xsha1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:Or",
      "description": {
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "Or",
        "fct-source": "src/Numeric-Taint-Word32.html#Op",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "Or",
        "normalized": "",
        "package": "xsha1",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:Rot",
      "description": {
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "Rot",
        "fct-source": "src/Numeric-Taint-Word32.html#Op",
        "fct-type": "function",
        "title": "Rot"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "Rot",
        "normalized": "",
        "package": "xsha1",
        "partial": "Rot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:Sub",
      "description": {
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "Sub",
        "fct-source": "src/Numeric-Taint-Word32.html#Op",
        "fct-type": "function",
        "title": "Sub"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "Sub",
        "normalized": "",
        "package": "xsha1",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:U",
      "description": {
        "fct-descr": "\u003cp\u003eUnknown values are marked with X.\n\u003c/p\u003e",
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "U",
        "fct-source": "src/Numeric-Taint-Word32.html#N",
        "fct-type": "function",
        "title": "U"
      },
      "index": {
        "description": "Unknown values are marked with",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "U",
        "normalized": "",
        "package": "xsha1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:X",
      "description": {
        "fct-descr": "\u003cp\u003eOperations can be piled on top of them.\n\u003c/p\u003e",
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "X Op N N",
        "fct-source": "src/Numeric-Taint-Word32.html#N",
        "fct-type": "function",
        "title": "X"
      },
      "index": {
        "description": "Operations can be piled on top of them",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "X",
        "normalized": "",
        "package": "xsha1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:Xor",
      "description": {
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "Xor",
        "fct-source": "src/Numeric-Taint-Word32.html#Op",
        "fct-type": "function",
        "title": "Xor"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "Xor",
        "normalized": "",
        "package": "xsha1",
        "partial": "Xor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:lshift",
      "description": {
        "fct-descr": "\u003cp\u003eThe shift in the Bits class doesn't allow non-int shifts.\n\u003c/p\u003e\u003cp\u003eWe'll be shifting by Unknown values, so have to use custom stuff.\n\u003c/p\u003e\u003cp\u003eAlso we're following VC++ compiler behaviour, and shifting in\n modulo 32 for 32 bit unsigned numbers. This behaviour is undefined\n in the C standard.\n\u003c/p\u003e",
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "N -\u003e N -\u003e N",
        "fct-source": "src/Numeric-Taint-Word32.html#lshift",
        "fct-type": "function",
        "title": "lshift"
      },
      "index": {
        "description": "The shift in the Bits class doesn allow non-int shifts We ll be shifting by Unknown values so have to use custom stuff Also we re following VC compiler behaviour and shifting in modulo for bit unsigned numbers This behaviour is undefined in the standard",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "lshift",
        "normalized": "N-\u003eN-\u003eN",
        "package": "xsha1",
        "partial": "",
        "signature": "N-\u003eN-\u003eN"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:pprint",
      "description": {
        "fct-descr": "\u003cp\u003eInfix notation display of stored operations.\n\u003c/p\u003e",
        "fct-module": "Numeric.Taint.Word32",
        "fct-package": "xsha1",
        "fct-signature": "N -\u003e String",
        "fct-source": "src/Numeric-Taint-Word32.html#pprint",
        "fct-type": "function",
        "title": "pprint"
      },
      "index": {
        "description": "Infix notation display of stored operations",
        "hierarchy": "Numeric Taint Word32",
        "module": "Numeric.Taint.Word32",
        "name": "pprint",
        "normalized": "N-\u003eString",
        "package": "xsha1",
        "partial": "",
        "signature": "N-\u003eString"
      }
    }
  }
]