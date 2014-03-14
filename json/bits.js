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
        "word": "bits"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bits.Coding",
          "name": "Coding",
          "package": "bits",
          "source": "src/Data-Bits-Coding.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Bits Coding",
          "module": "Data.Bits.Coding",
          "name": "Coding",
          "package": "bits",
          "partial": "Coding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bits.Coding",
          "name": "Coding",
          "package": "bits",
          "source": "src/Data-Bits-Coding.html#Coding",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Bits Coding",
          "module": "Data.Bits.Coding",
          "name": "Coding",
          "package": "bits",
          "partial": "Coding",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#t:Coding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bits.Coding",
          "name": "Coding",
          "package": "bits",
          "signature": "Coding",
          "source": "src/Data-Bits-Coding.html#Coding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bits Coding",
          "module": "Data.Bits.Coding",
          "name": "Coding",
          "package": "bits",
          "partial": "Coding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:Coding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eGet\u003c/code\u003e something from byte-aligned storage, starting on the next byte\n and discarding any left over bits in the buffer.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNB:\u003c/em\u003e Using any operation from \u003ccode\u003e\u003ca\u003eMonadGet\u003c/a\u003e\u003c/code\u003e other than checking \u003ccode\u003e\u003ca\u003eremaining\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eisEmpty\u003c/a\u003e\u003c/code\u003e will implicitly perform this operation.\n\u003c/p\u003e",
          "module": "Data.Bits.Coding",
          "name": "getAligned",
          "package": "bits",
          "signature": "m a -\u003e Coding m a",
          "source": "src/Data-Bits-Coding.html#getAligned",
          "type": "function"
        },
        "index": {
          "description": "Get something from byte-aligned storage starting on the next byte and discarding any left over bits in the buffer NB Using any operation from MonadGet other than checking remaining or isEmpty will implicitly perform this operation",
          "hierarchy": "Data Bits Coding",
          "module": "Data.Bits.Coding",
          "name": "getAligned",
          "normalized": "a b-\u003eCoding a b",
          "package": "bits",
          "partial": "Aligned",
          "signature": "m a-\u003eCoding m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:getAligned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eGet\u003c/code\u003e a single bit, consuming an entire \u003ccode\u003ebyte\u003c/code\u003e if the bit buffer is empty\n\u003c/p\u003e",
          "module": "Data.Bits.Coding",
          "name": "getBit",
          "package": "bits",
          "signature": "Coding m Bool",
          "source": "src/Data-Bits-Coding.html#getBit",
          "type": "function"
        },
        "index": {
          "description": "Get single bit consuming an entire byte if the bit buffer is empty",
          "hierarchy": "Data Bits Coding",
          "module": "Data.Bits.Coding",
          "name": "getBit",
          "package": "bits",
          "partial": "Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:getBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit any remaining contents from the bit buffer.\n\u003c/p\u003e\u003cp\u003eAny use of the combinators from \u003ccode\u003e\u003ca\u003eMonadPut\u003c/a\u003e\u003c/code\u003e (including \u003ccode\u003e\u003ca\u003eflush\u003c/a\u003e\u003c/code\u003e) will cause\n this to happen.\n\u003c/p\u003e",
          "module": "Data.Bits.Coding",
          "name": "putAligned",
          "package": "bits",
          "signature": "m a -\u003e Coding m a",
          "source": "src/Data-Bits-Coding.html#putAligned",
          "type": "function"
        },
        "index": {
          "description": "Emit any remaining contents from the bit buffer Any use of the combinators from MonadPut including flush will cause this to happen",
          "hierarchy": "Data Bits Coding",
          "module": "Data.Bits.Coding",
          "name": "putAligned",
          "normalized": "a b-\u003eCoding a b",
          "package": "bits",
          "partial": "Aligned",
          "signature": "m a-\u003eCoding m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:putAligned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePut\u003c/code\u003e a single bit, emitting an entire \u003ccode\u003ebyte\u003c/code\u003e if the bit buffer is full\n\u003c/p\u003e",
          "module": "Data.Bits.Coding",
          "name": "putBit",
          "package": "bits",
          "signature": "Bool -\u003e Coding m ()",
          "source": "src/Data-Bits-Coding.html#putBit",
          "type": "function"
        },
        "index": {
          "description": "Put single bit emitting an entire byte if the bit buffer is full",
          "hierarchy": "Data Bits Coding",
          "module": "Data.Bits.Coding",
          "name": "putBit",
          "normalized": "Bool-\u003eCoding a()",
          "package": "bits",
          "partial": "Bit",
          "signature": "Bool-\u003eCoding m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:putBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bits.Coding",
          "name": "runCoding",
          "package": "bits",
          "signature": "forall r.  (a -\u003e Int -\u003e Word8 -\u003e m r) -\u003e Int -\u003e Word8 -\u003e m r",
          "source": "src/Data-Bits-Coding.html#Coding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bits Coding",
          "module": "Data.Bits.Coding",
          "name": "runCoding",
          "normalized": "a b(c-\u003eInt-\u003eWord-\u003ed e)-\u003eInt-\u003eWord-\u003ed e",
          "package": "bits",
          "partial": "Coding",
          "signature": "forall r.(a-\u003eInt-\u003eWord-\u003em r)-\u003eInt-\u003eWord-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:runCoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCalculate a number of fiddly bit operations using fast de Bruijn\n multiplication tables.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bits.Extras",
          "name": "Extras",
          "package": "bits",
          "source": "src/Data-Bits-Extras.html",
          "type": "module"
        },
        "index": {
          "description": "Calculate number of fiddly bit operations using fast de Bruijn multiplication tables",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "Extras",
          "package": "bits",
          "partial": "Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bits.Extras",
          "name": "Ranked",
          "package": "bits",
          "source": "src/Data-Bits-Extras.html#Ranked",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "Ranked",
          "package": "bits",
          "partial": "Ranked",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#t:Ranked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bits.Extras",
          "name": "log2",
          "package": "bits",
          "signature": "Word32 -\u003e Int",
          "source": "src/Data-Bits-Extras.html#log2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "log2",
          "normalized": "Word-\u003eInt",
          "package": "bits",
          "signature": "Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:log2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the least significant set bit using a debruijn multiplication table.\n \u003cem\u003eNB:\u003c/em\u003e The result of this function is undefined when given 0.\n\u003c/p\u003e",
          "module": "Data.Bits.Extras",
          "name": "lsb",
          "package": "bits",
          "signature": "t -\u003e Int",
          "source": "src/Data-Bits-Extras.html#lsb",
          "type": "method"
        },
        "index": {
          "description": "Calculate the least significant set bit using debruijn multiplication table NB The result of this function is undefined when given",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "lsb",
          "normalized": "a-\u003eInt",
          "package": "bits",
          "signature": "t-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:lsb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the number of leading zeros.\n\u003c/p\u003e",
          "module": "Data.Bits.Extras",
          "name": "nlz",
          "package": "bits",
          "signature": "t -\u003e Int",
          "source": "src/Data-Bits-Extras.html#nlz",
          "type": "method"
        },
        "index": {
          "description": "Calculate the number of leading zeros",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "nlz",
          "normalized": "a-\u003eInt",
          "package": "bits",
          "signature": "t-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:nlz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the number of trailing 0 bits.\n\u003c/p\u003e",
          "module": "Data.Bits.Extras",
          "name": "rank",
          "package": "bits",
          "signature": "t -\u003e Int",
          "source": "src/Data-Bits-Extras.html#rank",
          "type": "method"
        },
        "index": {
          "description": "Calculate the number of trailing bits",
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "rank",
          "normalized": "a-\u003eInt",
          "package": "bits",
          "signature": "t-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bits.Extras",
          "name": "w16",
          "package": "bits",
          "signature": "a -\u003e Word16",
          "source": "src/Data-Bits-Extras.html#w16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "w16",
          "normalized": "a-\u003eWord",
          "package": "bits",
          "signature": "a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:w16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bits.Extras",
          "name": "w32",
          "package": "bits",
          "signature": "a -\u003e Word32",
          "source": "src/Data-Bits-Extras.html#w32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "w32",
          "normalized": "a-\u003eWord",
          "package": "bits",
          "signature": "a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:w32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bits.Extras",
          "name": "w64",
          "package": "bits",
          "signature": "a -\u003e Word64",
          "source": "src/Data-Bits-Extras.html#w64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "w64",
          "normalized": "a-\u003eWord",
          "package": "bits",
          "signature": "a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:w64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bits.Extras",
          "name": "w8",
          "package": "bits",
          "signature": "a -\u003e Word8",
          "source": "src/Data-Bits-Extras.html#w8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bits Extras",
          "module": "Data.Bits.Extras",
          "name": "w8",
          "normalized": "a-\u003eWord",
          "package": "bits",
          "signature": "a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:w8"
      }
    }
  ]
]