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
        "word": "xsha1"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExploring the CD key hash used to authenticate the game with Battle.net.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "CDHash",
          "package": "xsha1",
          "source": "src/Data-Codec-Blizz-CDHash.html",
          "type": "module"
        },
        "index": {
          "description": "Exploring the CD key hash used to authenticate the game with Battle.net",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "CDHash",
          "package": "xsha1",
          "partial": "CDHash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData accessible to an attacker observing traffic. All plaintext.\n\u003c/p\u003e\u003cp\u003eOnly missing piece of CD key info is the private value, which gets hashed.\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "Sniff",
          "package": "xsha1",
          "source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
          "type": "data"
        },
        "index": {
          "description": "Data accessible to an attacker observing traffic All plaintext Only missing piece of CD key info is the private value which gets hashed",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "Sniff",
          "package": "xsha1",
          "partial": "Sniff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#t:Sniff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "Sniff",
          "package": "xsha1",
          "signature": "Sniff",
          "source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "Sniff",
          "package": "xsha1",
          "partial": "Sniff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:Sniff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnknown value is the pivot point.\n\u003c/p\u003e\u003cp\u003eRegister states before and after it are marked alpha and beta.\n Beta has 32 possible values. Alpha just one. Solve for 32 private values.\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "alpha",
          "package": "xsha1",
          "signature": "Vector N -\u003e Regs",
          "source": "src/Data-Codec-Blizz-CDHash.html#alpha",
          "type": "function"
        },
        "index": {
          "description": "Unknown value is the pivot point Register states before and after it are marked alpha and beta Beta has possible values Alpha just one Solve for private values",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "alpha",
          "normalized": "Vector N-\u003eRegs",
          "package": "xsha1",
          "signature": "Vector N-\u003eRegs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "beta",
          "package": "xsha1",
          "signature": "Vector N -\u003e Regs -\u003e Regs",
          "source": "src/Data-Codec-Blizz-CDHash.html#beta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "beta",
          "normalized": "Vector N-\u003eRegs-\u003eRegs",
          "package": "xsha1",
          "signature": "Vector N-\u003eRegs-\u003eRegs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassify DWORDs based on how much knowledge an eavesdropper has of them.\n\u003c/p\u003e\u003cp\u003eX = known value\n\u003c/p\u003e\u003cp\u003e? = unknown (32 bit CD key private value)\n\u003c/p\u003e\u003cp\u003e# = depends on 5 LSBs of private value\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "classify",
          "package": "xsha1",
          "signature": "Vector N -\u003e String",
          "source": "src/Data-Codec-Blizz-CDHash.html#classify",
          "type": "function"
        },
        "index": {
          "description": "Classify DWORDs based on how much knowledge an eavesdropper has of them known value unknown bit CD key private value depends on LSBs of private value",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "classify",
          "normalized": "Vector N-\u003eString",
          "package": "xsha1",
          "signature": "Vector N-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:classify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "getUnk",
          "package": "xsha1",
          "signature": "Regs -\u003e Vector N -\u003e N",
          "source": "src/Data-Codec-Blizz-CDHash.html#getUnk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "getUnk",
          "normalized": "Regs-\u003eVector N-\u003eN",
          "package": "xsha1",
          "partial": "Unk",
          "signature": "Regs-\u003eVector N-\u003eN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:getUnk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "guessedUnknowns",
          "package": "xsha1",
          "signature": "Sniff -\u003e Regs -\u003e [N]",
          "source": "src/Data-Codec-Blizz-CDHash.html#guessedUnknowns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "guessedUnknowns",
          "normalized": "Sniff-\u003eRegs-\u003e[N]",
          "package": "xsha1",
          "partial": "Unknowns",
          "signature": "Sniff-\u003eRegs-\u003e[N]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:guessedUnknowns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample D2 CD key hash buffer. XSHA1 of this is sent to the server.\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "hash",
          "package": "xsha1",
          "signature": "Sniff-\u003e N-\u003e Vector N",
          "type": "function"
        },
        "index": {
          "description": "Sample D2 CD key hash buffer XSHA1 of this is sent to the server",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "hash",
          "normalized": "Sniff-\u003eN-\u003eVector N",
          "package": "xsha1",
          "signature": "Sniff-\u003eN-\u003eVector N",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFoldl that keeps history.\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "hfoldl",
          "package": "xsha1",
          "signature": "(a -\u003e t -\u003e a) -\u003e a -\u003e [t] -\u003e (a, [a])",
          "source": "src/Data-Codec-Blizz-CDHash.html#hfoldl",
          "type": "function"
        },
        "index": {
          "description": "Foldl that keeps history",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "hfoldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e(a,[a])",
          "package": "xsha1",
          "signature": "(a-\u003et-\u003ea)-\u003ea-\u003e[t]-\u003e(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:hfoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "printReg",
          "package": "xsha1",
          "signature": "(N, N, N, N, N) -\u003e t",
          "source": "src/Data-Codec-Blizz-CDHash.html#printReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "printReg",
          "normalized": "(N,N,N,N,N)-\u003ea",
          "package": "xsha1",
          "partial": "Reg",
          "signature": "(N,N,N,N,N)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:printReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "result1",
          "package": "xsha1",
          "signature": "(N, N, N, N, N)",
          "source": "src/Data-Codec-Blizz-CDHash.html#result1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "result1",
          "normalized": "(N,N,N,N,N)",
          "package": "xsha1",
          "signature": "(N,N,N,N,N)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:result1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "result2",
          "package": "xsha1",
          "signature": "(N, N, N, N, N)",
          "source": "src/Data-Codec-Blizz-CDHash.html#result1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "result2",
          "normalized": "(N,N,N,N,N)",
          "package": "xsha1",
          "signature": "(N,N,N,N,N)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:result2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "setPriv",
          "package": "xsha1",
          "signature": "N -\u003e Vector N -\u003e Vector N",
          "source": "src/Data-Codec-Blizz-CDHash.html#setPriv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "setPriv",
          "normalized": "N-\u003eVector N-\u003eVector N",
          "package": "xsha1",
          "partial": "Priv",
          "signature": "N-\u003eVector N-\u003eVector N",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:setPriv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enonce\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "snClientTok",
          "package": "xsha1",
          "signature": "Word32",
          "source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
          "type": "function"
        },
        "index": {
          "description": "nonce",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "snClientTok",
          "package": "xsha1",
          "partial": "Client Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:snClientTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecoded from key: 6 classic D2, 10 xpac D2 are common values\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "snProduct",
          "package": "xsha1",
          "signature": "Word32",
          "source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
          "type": "function"
        },
        "index": {
          "description": "decoded from key classic D2 xpac D2 are common values",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "snProduct",
          "package": "xsha1",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:snProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecoded from key, server has mapping to the private value\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "snPublic",
          "package": "xsha1",
          "signature": "Word32",
          "source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
          "type": "function"
        },
        "index": {
          "description": "decoded from key server has mapping to the private value",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "snPublic",
          "package": "xsha1",
          "partial": "Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:snPublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enonce\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "snServerTok",
          "package": "xsha1",
          "signature": "Word32",
          "source": "src/Data-Codec-Blizz-CDHash.html#Sniff",
          "type": "function"
        },
        "index": {
          "description": "nonce",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "snServerTok",
          "package": "xsha1",
          "partial": "Server Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:snServerTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "sniff1",
          "package": "xsha1",
          "signature": "Sniff",
          "source": "src/Data-Codec-Blizz-CDHash.html#sniff1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "sniff1",
          "package": "xsha1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:sniff1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "sniff2",
          "package": "xsha1",
          "signature": "Sniff",
          "source": "src/Data-Codec-Blizz-CDHash.html#sniff1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "sniff2",
          "package": "xsha1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:sniff2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible hash buffer construction from data known to eavesdroper.\n\u003c/p\u003e\u003cp\u003eSince most of the expanded buffer depends just on 5 secret bits, 32\n  different buffers will cover all the possibilities for all but one DWORD.\n  That DWORD is the private key value, and is unknown.\n\u003c/p\u003e\u003cp\u003eOnly the relevant 5 bits on the private value are set. It should be re-set\n  afterwards, to a better guess or and unknown.\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "space",
          "package": "xsha1",
          "signature": "Sniff -\u003e [Vector N]",
          "source": "src/Data-Codec-Blizz-CDHash.html#space",
          "type": "function"
        },
        "index": {
          "description": "Possible hash buffer construction from data known to eavesdroper Since most of the expanded buffer depends just on secret bits different buffers will cover all the possibilities for all but one DWORD That DWORD is the private key value and is unknown Only the relevant bits on the private value are set It should be re-set afterwards to better guess or and unknown",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "space",
          "normalized": "Sniff-\u003e[Vector N]",
          "package": "xsha1",
          "signature": "Sniff-\u003e[Vector N]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Codec.Blizz.CDHash",
          "name": "test",
          "package": "xsha1",
          "signature": "Regs",
          "source": "src/Data-Codec-Blizz-CDHash.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "test",
          "package": "xsha1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet private values from sniffed data.\n\u003c/p\u003e\u003cp\u003eSome false positives, Binomial(n=31, p=1/32)\n\u003c/p\u003e\u003cp\u003eStraightforward to encode back into human-readable CD key.\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "unhash",
          "package": "xsha1",
          "signature": "Sniff -\u003e (N, N, N, N, N) -\u003e IO ()",
          "source": "src/Data-Codec-Blizz-CDHash.html#unhash",
          "type": "function"
        },
        "index": {
          "description": "Get private values from sniffed data Some false positives Binomial Straightforward to encode back into human-readable CD key",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "unhash",
          "normalized": "Sniff-\u003e(N,N,N,N,N)-\u003eIO()",
          "package": "xsha1",
          "signature": "Sniff-\u003e(N,N,N,N,N)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:unhash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint infix equations for buffer.\n\u003c/p\u003e",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "view",
          "package": "xsha1",
          "signature": "Vector N -\u003e IO ()",
          "source": "src/Data-Codec-Blizz-CDHash.html#view",
          "type": "function"
        },
        "index": {
          "description": "Print infix equations for buffer",
          "hierarchy": "Data Codec Blizz CDHash",
          "module": "Data.Codec.Blizz.CDHash",
          "name": "view",
          "normalized": "Vector N-\u003eIO()",
          "package": "xsha1",
          "signature": "Vector N-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Codec-Blizz-CDHash.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression stage. Padding - extension - compression.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://en.wikipedia.org/wiki/Sha1\u003c/a\u003e for the real thing.\n\u003c/p\u003e\u003cp\u003eForward and reverse of a single round is implemented, to perform the full\n thing just foldl over [0..79].\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "Compress",
          "package": "xsha1",
          "source": "src/Data-Digest-XSHA1-Compress.html",
          "type": "module"
        },
        "index": {
          "description": "Compression stage Padding extension compression See http en.wikipedia.org wiki Sha1 for the real thing Forward and reverse of single round is implemented to perform the full thing just foldl over",
          "hierarchy": "Data Digest XSHA1 Compress",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "Compress",
          "package": "xsha1",
          "partial": "Compress",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.XSHA1.Compress",
          "name": "Regs",
          "package": "xsha1",
          "source": "src/Data-Digest-XSHA1-Compress.html#Regs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Digest XSHA1 Compress",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "Regs",
          "package": "xsha1",
          "partial": "Regs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#t:Regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial values for registers a..e.\n\u003c/p\u003e\u003cp\u003eAlso get added to the registers at the end.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "consts",
          "package": "xsha1",
          "signature": "Regs",
          "source": "src/Data-Digest-XSHA1-Compress.html#consts",
          "type": "function"
        },
        "index": {
          "description": "Initial values for registers a..e Also get added to the registers at the end",
          "hierarchy": "Data Digest XSHA1 Compress",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "consts",
          "package": "xsha1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:consts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound function f, with round number and three of the registers.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "f",
          "package": "xsha1",
          "signature": "Int -\u003e N -\u003e N -\u003e N -\u003e N",
          "source": "src/Data-Digest-XSHA1-Compress.html#f",
          "type": "function"
        },
        "index": {
          "description": "Round function with round number and three of the registers",
          "hierarchy": "Data Digest XSHA1 Compress",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "f",
          "normalized": "Int-\u003eN-\u003eN-\u003eN-\u003eN",
          "package": "xsha1",
          "signature": "Int-\u003eN-\u003eN-\u003eN-\u003eN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the last step, a weird addition thrown in for obfuscation.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "finalize",
          "package": "xsha1",
          "signature": "Regs -\u003e Regs",
          "source": "src/Data-Digest-XSHA1-Compress.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "Does the last step weird addition thrown in for obfuscation",
          "hierarchy": "Data Digest XSHA1 Compress",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "finalize",
          "normalized": "Regs-\u003eRegs",
          "package": "xsha1",
          "signature": "Regs-\u003eRegs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne round of the XSHA1 compression function.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "iter",
          "package": "xsha1",
          "signature": "Vector N -\u003e Regs -\u003e Int -\u003e Regs",
          "source": "src/Data-Digest-XSHA1-Compress.html#iter",
          "type": "function"
        },
        "index": {
          "description": "One round of the XSHA1 compression function",
          "hierarchy": "Data Digest XSHA1 Compress",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "iter",
          "normalized": "Vector N-\u003eRegs-\u003eInt-\u003eRegs",
          "package": "xsha1",
          "signature": "Vector N-\u003eRegs-\u003eInt-\u003eRegs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound constant k.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "k",
          "package": "xsha1",
          "signature": "Int -\u003e N",
          "source": "src/Data-Digest-XSHA1-Compress.html#k",
          "type": "function"
        },
        "index": {
          "description": "Round constant",
          "hierarchy": "Data Digest XSHA1 Compress",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "k",
          "normalized": "Int-\u003eN",
          "package": "xsha1",
          "signature": "Int-\u003eN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:k"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of the round function.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "reti",
          "package": "xsha1",
          "signature": "Vector N -\u003e Regs -\u003e Int -\u003e Regs",
          "source": "src/Data-Digest-XSHA1-Compress.html#reti",
          "type": "function"
        },
        "index": {
          "description": "Inverse of the round function",
          "hierarchy": "Data Digest XSHA1 Compress",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "reti",
          "normalized": "Vector N-\u003eRegs-\u003eInt-\u003eRegs",
          "package": "xsha1",
          "signature": "Vector N-\u003eRegs-\u003eInt-\u003eRegs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:reti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.XSHA1.Compress",
          "name": "test",
          "package": "xsha1",
          "signature": "IO ()",
          "source": "src/Data-Digest-XSHA1-Compress.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest XSHA1 Compress",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "test",
          "normalized": "IO()",
          "package": "xsha1",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ca\u003efinalize\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "unfinalize",
          "package": "xsha1",
          "signature": "Regs -\u003e Regs",
          "source": "src/Data-Digest-XSHA1-Compress.html#unfinalize",
          "type": "function"
        },
        "index": {
          "description": "Inverse of finalize",
          "hierarchy": "Data Digest XSHA1 Compress",
          "module": "Data.Digest.XSHA1.Compress",
          "name": "unfinalize",
          "normalized": "Regs-\u003eRegs",
          "package": "xsha1",
          "signature": "Regs-\u003eRegs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Compress.html#v:unfinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtension stage of XSHA1.\n\u003c/p\u003e\u003cp\u003eIn SHA-1, it follows padding. XSHA1 doesn't pad, just zeros.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.XSHA1.Extend",
          "name": "Extend",
          "package": "xsha1",
          "source": "src/Data-Digest-XSHA1-Extend.html",
          "type": "module"
        },
        "index": {
          "description": "Extension stage of XSHA1 In SHA-1 it follows padding XSHA1 doesn pad just zeros",
          "hierarchy": "Data Digest XSHA1 Extend",
          "module": "Data.Digest.XSHA1.Extend",
          "name": "Extend",
          "package": "xsha1",
          "partial": "Extend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Extend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a 16 DWORD list, and extend it to 80 DWORDS based on itself.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1.Extend",
          "name": "extend",
          "package": "xsha1",
          "signature": "Vector N -\u003e Vector N",
          "source": "src/Data-Digest-XSHA1-Extend.html#extend",
          "type": "function"
        },
        "index": {
          "description": "Take DWORD list and extend it to DWORDS based on itself",
          "hierarchy": "Data Digest XSHA1 Extend",
          "module": "Data.Digest.XSHA1.Extend",
          "name": "extend",
          "normalized": "Vector N-\u003eVector N",
          "package": "xsha1",
          "signature": "Vector N-\u003eVector N",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1-Extend.html#v:extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSingle-block implementation of XSHA-1.\n\u003c/p\u003e\u003cp\u003eSee no reason to implement multiple blocks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.XSHA1",
          "name": "XSHA1",
          "package": "xsha1",
          "source": "src/Data-Digest-XSHA1.html",
          "type": "module"
        },
        "index": {
          "description": "Single-block implementation of XSHA-1 See no reason to implement multiple blocks",
          "hierarchy": "Data Digest XSHA1",
          "module": "Data.Digest.XSHA1",
          "name": "XSHA1",
          "package": "xsha1",
          "partial": "XSHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint 512 bit hash in hex.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1",
          "name": "hexp",
          "package": "xsha1",
          "signature": "Regs -\u003e IO ()",
          "source": "src/Data-Digest-XSHA1.html#hexp",
          "type": "function"
        },
        "index": {
          "description": "Print bit hash in hex",
          "hierarchy": "Data Digest XSHA1",
          "module": "Data.Digest.XSHA1",
          "name": "hexp",
          "normalized": "Regs-\u003eIO()",
          "package": "xsha1",
          "signature": "Regs-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#v:hexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests of known pairs, based on hash reverser's implementation.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1",
          "name": "test",
          "package": "xsha1",
          "signature": "IO Counts",
          "source": "src/Data-Digest-XSHA1.html#test",
          "type": "function"
        },
        "index": {
          "description": "Tests of known pairs based on hash reverser implementation",
          "hierarchy": "Data Digest XSHA1",
          "module": "Data.Digest.XSHA1",
          "name": "test",
          "package": "xsha1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.XSHA1",
          "name": "testEmpty",
          "package": "xsha1",
          "signature": "Assertion",
          "source": "src/Data-Digest-XSHA1.html#testEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest XSHA1",
          "module": "Data.Digest.XSHA1",
          "name": "testEmpty",
          "package": "xsha1",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#v:testEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.XSHA1",
          "name": "testOneLetter",
          "package": "xsha1",
          "signature": "Assertion",
          "source": "src/Data-Digest-XSHA1.html#testOneLetter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest XSHA1",
          "module": "Data.Digest.XSHA1",
          "name": "testOneLetter",
          "package": "xsha1",
          "partial": "One Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#v:testOneLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle block of XSHA1.\n\u003c/p\u003e",
          "module": "Data.Digest.XSHA1",
          "name": "xsha1",
          "package": "xsha1",
          "signature": "Vector N-\u003e Regs",
          "type": "function"
        },
        "index": {
          "description": "Single block of XSHA1",
          "hierarchy": "Data Digest XSHA1",
          "module": "Data.Digest.XSHA1",
          "name": "xsha1",
          "normalized": "Vector N-\u003eRegs",
          "package": "xsha1",
          "signature": "Vector N-\u003eRegs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Data-Digest-XSHA1.html#v:xsha1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArithmetic taint tracking.\n\u003c/p\u003e\u003cp\u003eExtension of Word32, that allows \u003ca\u003eU\u003c/a\u003enknown values to be used. Operations on\n known values are calculated as usual, while operations on unknowns are\n recorded in unsimplified form.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet e = 1+5 `xor` U `lshift` 2\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ee\n\u003c/code\u003e\u003c/strong\u003eX Xor (N 6) (X LShift U (N 2))\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epprint e\n\u003c/code\u003e\u003c/strong\u003e\"(6^(?\u003c\u003c2))\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e1+5 `xor` 0xBEEF `lshift` 2\n\u003c/code\u003e\u003c/strong\u003eN 195514\n\u003c/pre\u003e\u003cp\u003eIntended for analysis of XSHA-1, so only supports the necessary primitives.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Taint.Word32",
          "name": "Word32",
          "package": "xsha1",
          "source": "src/Numeric-Taint-Word32.html",
          "type": "module"
        },
        "index": {
          "description": "Arithmetic taint tracking Extension of Word32 that allows nknown values to be used Operations on known values are calculated as usual while operations on unknowns are recorded in unsimplified form let xor lshift Xor LShift pprint xor xBEEF lshift Intended for analysis of XSHA-1 so only supports the necessary primitives",
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "Word32",
          "package": "xsha1",
          "partial": "Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numeric type extended to hold information about unknown values.\n\u003c/p\u003e",
          "module": "Numeric.Taint.Word32",
          "name": "N",
          "package": "xsha1",
          "source": "src/Numeric-Taint-Word32.html#N",
          "type": "data"
        },
        "index": {
          "description": "numeric type extended to hold information about unknown values",
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "N",
          "package": "xsha1",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#t:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupported operators.\n\u003c/p\u003e",
          "module": "Numeric.Taint.Word32",
          "name": "Op",
          "package": "xsha1",
          "source": "src/Numeric-Taint-Word32.html#Op",
          "type": "data"
        },
        "index": {
          "description": "Supported operators",
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "Op",
          "package": "xsha1",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Taint.Word32",
          "name": "Add",
          "package": "xsha1",
          "signature": "Add",
          "source": "src/Numeric-Taint-Word32.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "Add",
          "package": "xsha1",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Taint.Word32",
          "name": "And",
          "package": "xsha1",
          "signature": "And",
          "source": "src/Numeric-Taint-Word32.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "And",
          "package": "xsha1",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Taint.Word32",
          "name": "LShift",
          "package": "xsha1",
          "signature": "LShift",
          "source": "src/Numeric-Taint-Word32.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "LShift",
          "package": "xsha1",
          "partial": "LShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:LShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumbers are still present.\n\u003c/p\u003e",
          "module": "Numeric.Taint.Word32",
          "name": "N",
          "package": "xsha1",
          "signature": "N Word32",
          "source": "src/Numeric-Taint-Word32.html#N",
          "type": "function"
        },
        "index": {
          "description": "Numbers are still present",
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "N",
          "package": "xsha1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Taint.Word32",
          "name": "Or",
          "package": "xsha1",
          "signature": "Or",
          "source": "src/Numeric-Taint-Word32.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "Or",
          "package": "xsha1",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Taint.Word32",
          "name": "Rot",
          "package": "xsha1",
          "signature": "Rot",
          "source": "src/Numeric-Taint-Word32.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "Rot",
          "package": "xsha1",
          "partial": "Rot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:Rot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Taint.Word32",
          "name": "Sub",
          "package": "xsha1",
          "signature": "Sub",
          "source": "src/Numeric-Taint-Word32.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "Sub",
          "package": "xsha1",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnknown values are marked with X.\n\u003c/p\u003e",
          "module": "Numeric.Taint.Word32",
          "name": "U",
          "package": "xsha1",
          "signature": "U",
          "source": "src/Numeric-Taint-Word32.html#N",
          "type": "function"
        },
        "index": {
          "description": "Unknown values are marked with",
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "U",
          "package": "xsha1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperations can be piled on top of them.\n\u003c/p\u003e",
          "module": "Numeric.Taint.Word32",
          "name": "X",
          "package": "xsha1",
          "signature": "X Op N N",
          "source": "src/Numeric-Taint-Word32.html#N",
          "type": "function"
        },
        "index": {
          "description": "Operations can be piled on top of them",
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "X",
          "package": "xsha1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Taint.Word32",
          "name": "Xor",
          "package": "xsha1",
          "signature": "Xor",
          "source": "src/Numeric-Taint-Word32.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "Xor",
          "package": "xsha1",
          "partial": "Xor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:Xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe shift in the Bits class doesn't allow non-int shifts.\n\u003c/p\u003e\u003cp\u003eWe'll be shifting by Unknown values, so have to use custom stuff.\n\u003c/p\u003e\u003cp\u003eAlso we're following VC++ compiler behaviour, and shifting in\n modulo 32 for 32 bit unsigned numbers. This behaviour is undefined\n in the C standard.\n\u003c/p\u003e",
          "module": "Numeric.Taint.Word32",
          "name": "lshift",
          "package": "xsha1",
          "signature": "N -\u003e N -\u003e N",
          "source": "src/Numeric-Taint-Word32.html#lshift",
          "type": "function"
        },
        "index": {
          "description": "The shift in the Bits class doesn allow non-int shifts We ll be shifting by Unknown values so have to use custom stuff Also we re following VC compiler behaviour and shifting in modulo for bit unsigned numbers This behaviour is undefined in the standard",
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "lshift",
          "normalized": "N-\u003eN-\u003eN",
          "package": "xsha1",
          "signature": "N-\u003eN-\u003eN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:lshift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix notation display of stored operations.\n\u003c/p\u003e",
          "module": "Numeric.Taint.Word32",
          "name": "pprint",
          "package": "xsha1",
          "signature": "N -\u003e String",
          "source": "src/Numeric-Taint-Word32.html#pprint",
          "type": "function"
        },
        "index": {
          "description": "Infix notation display of stored operations",
          "hierarchy": "Numeric Taint Word32",
          "module": "Numeric.Taint.Word32",
          "name": "pprint",
          "normalized": "N-\u003eString",
          "package": "xsha1",
          "signature": "N-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsha1/docs/Numeric-Taint-Word32.html#v:pprint"
      }
    }
  ]
]