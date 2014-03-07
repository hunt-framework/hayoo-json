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
        "word": "afis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ehaskell implementation of the Anti-forensic information splitter\n available in LUKS. \u003ca\u003ehttp://clemens.endorphin.org/AFsplitter\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe algorithm bloats an arbitrary secret with many bits that are necessary for\n the recovery of the key (merge), and allow greater way to permanently\n destroy a key stored on disk.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Data.AFIS",
          "name": "AFIS",
          "package": "afis",
          "source": "src/Crypto-Data-AFIS.html",
          "type": "module"
        },
        "index": {
          "description": "haskell implementation of the Anti-forensic information splitter available in LUKS http clemens.endorphin.org AFsplitter The algorithm bloats an arbitrary secret with many bits that are necessary for the recovery of the key merge and allow greater way to permanently destroy key stored on disk",
          "hierarchy": "Crypto Data AFIS",
          "module": "Crypto.Data.AFIS",
          "name": "AFIS",
          "package": "afis",
          "partial": "AFIS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/afis/docs/Crypto-Data-AFIS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge previously diffused data back to the original data.\n\u003c/p\u003e",
          "module": "Crypto.Data.AFIS",
          "name": "merge",
          "package": "afis",
          "signature": "HashFunctionBS a-\u003e Int-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Merge previously diffused data back to the original data",
          "hierarchy": "Crypto Data AFIS",
          "module": "Crypto.Data.AFIS",
          "name": "merge",
          "normalized": "HashFunctionBS a-\u003eInt-\u003eByteString-\u003eByteString",
          "package": "afis",
          "signature": "HashFunctionBS a-\u003eInt-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/afis/docs/Crypto-Data-AFIS.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit data to diffused data, using a random generator and\n an hash algorithm.\n\u003c/p\u003e\u003cp\u003ethe diffused data will consist of random data for (expandTimes-1)\n then the last block will be xor of the accumulated random data diffused by\n the hash algorithm.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e---------\n -  orig  -\n ----------\n\u003c/li\u003e\u003cli\u003e--------- ---------- --------------\n - rand1  - - rand2  - - orig ^ acc -\n ---------- ---------- --------------\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ewhere acc is :\n   acc(n+1) = hash (n ++ rand(n)) ^ acc(n)\n\u003c/p\u003e",
          "module": "Crypto.Data.AFIS",
          "name": "split",
          "package": "afis",
          "signature": "HashFunctionBS a-\u003e rng-\u003e Int-\u003e ByteString-\u003e (ByteString, rng)",
          "type": "function"
        },
        "index": {
          "description": "Split data to diffused data using random generator and an hash algorithm the diffused data will consist of random data for expandTimes-1 then the last block will be xor of the accumulated random data diffused by the hash algorithm orig rand1 rand2 orig acc where acc is acc hash rand acc",
          "hierarchy": "Crypto Data AFIS",
          "module": "Crypto.Data.AFIS",
          "name": "split",
          "normalized": "HashFunctionBS a-\u003eb-\u003eInt-\u003eByteString-\u003e(ByteString,b)",
          "package": "afis",
          "signature": "HashFunctionBS a-\u003erng-\u003eInt-\u003eByteString-\u003e(ByteString,rng)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/afis/docs/Crypto-Data-AFIS.html#v:split"
      }
    }
  ]
]