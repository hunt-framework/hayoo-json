[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#",
      "description": {
        "fct-module": "Data.Bits.Coding",
        "fct-package": "bits",
        "fct-signature": "module",
        "fct-source": "src/Data-Bits-Coding.html",
        "fct-type": "module",
        "title": "Coding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bits Coding",
        "module": "Data.Bits.Coding",
        "name": "Coding",
        "normalized": "",
        "package": "bits",
        "partial": "Coding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#t:Coding",
      "description": {
        "fct-module": "Data.Bits.Coding",
        "fct-package": "bits",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Bits-Coding.html#Coding",
        "fct-type": "newtype",
        "title": "Coding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bits Coding",
        "module": "Data.Bits.Coding",
        "name": "Coding",
        "normalized": "",
        "package": "bits",
        "partial": "Coding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:Coding",
      "description": {
        "fct-module": "Data.Bits.Coding",
        "fct-package": "bits",
        "fct-signature": "Coding",
        "fct-source": "src/Data-Bits-Coding.html#Coding",
        "fct-type": "function",
        "title": "Coding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bits Coding",
        "module": "Data.Bits.Coding",
        "name": "Coding",
        "normalized": "",
        "package": "bits",
        "partial": "Coding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:getAligned",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eGet\u003c/code\u003e something from byte-aligned storage, starting on the next byte\n and discarding any left over bits in the buffer.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNB:\u003c/em\u003e Using any operation from \u003ccode\u003e\u003ca\u003eMonadGet\u003c/a\u003e\u003c/code\u003e other than checking \u003ccode\u003e\u003ca\u003eremaining\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eisEmpty\u003c/a\u003e\u003c/code\u003e will implicitly perform this operation.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Coding",
        "fct-package": "bits",
        "fct-signature": "m a -\u003e Coding m a",
        "fct-source": "src/Data-Bits-Coding.html#getAligned",
        "fct-type": "function",
        "title": "getAligned"
      },
      "index": {
        "description": "Get something from byte-aligned storage starting on the next byte and discarding any left over bits in the buffer NB Using any operation from MonadGet other than checking remaining or isEmpty will implicitly perform this operation",
        "hierarchy": "Data Bits Coding",
        "module": "Data.Bits.Coding",
        "name": "getAligned",
        "normalized": "a b-\u003eCoding a b",
        "package": "bits",
        "partial": "Aligned",
        "signature": "m a-\u003eCoding m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:getBit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eGet\u003c/code\u003e a single bit, consuming an entire \u003ccode\u003ebyte\u003c/code\u003e if the bit buffer is empty\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Coding",
        "fct-package": "bits",
        "fct-signature": "Coding m Bool",
        "fct-source": "src/Data-Bits-Coding.html#getBit",
        "fct-type": "function",
        "title": "getBit"
      },
      "index": {
        "description": "Get single bit consuming an entire byte if the bit buffer is empty",
        "hierarchy": "Data Bits Coding",
        "module": "Data.Bits.Coding",
        "name": "getBit",
        "normalized": "",
        "package": "bits",
        "partial": "Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:putAligned",
      "description": {
        "fct-descr": "\u003cp\u003eEmit any remaining contents from the bit buffer.\n\u003c/p\u003e\u003cp\u003eAny use of the combinators from \u003ccode\u003e\u003ca\u003eMonadPut\u003c/a\u003e\u003c/code\u003e (including \u003ccode\u003e\u003ca\u003eflush\u003c/a\u003e\u003c/code\u003e) will cause\n this to happen.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Coding",
        "fct-package": "bits",
        "fct-signature": "m a -\u003e Coding m a",
        "fct-source": "src/Data-Bits-Coding.html#putAligned",
        "fct-type": "function",
        "title": "putAligned"
      },
      "index": {
        "description": "Emit any remaining contents from the bit buffer Any use of the combinators from MonadPut including flush will cause this to happen",
        "hierarchy": "Data Bits Coding",
        "module": "Data.Bits.Coding",
        "name": "putAligned",
        "normalized": "a b-\u003eCoding a b",
        "package": "bits",
        "partial": "Aligned",
        "signature": "m a-\u003eCoding m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:putBit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ePut\u003c/code\u003e a single bit, emitting an entire \u003ccode\u003ebyte\u003c/code\u003e if the bit buffer is full\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Coding",
        "fct-package": "bits",
        "fct-signature": "Bool -\u003e Coding m ()",
        "fct-source": "src/Data-Bits-Coding.html#putBit",
        "fct-type": "function",
        "title": "putBit"
      },
      "index": {
        "description": "Put single bit emitting an entire byte if the bit buffer is full",
        "hierarchy": "Data Bits Coding",
        "module": "Data.Bits.Coding",
        "name": "putBit",
        "normalized": "Bool-\u003eCoding a()",
        "package": "bits",
        "partial": "Bit",
        "signature": "Bool-\u003eCoding m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Coding.html#v:runCoding",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Bits.Coding",
        "fct-package": "bits",
        "fct-signature": "forall r.  (a -\u003e Int -\u003e Word8 -\u003e m r) -\u003e Int -\u003e Word8 -\u003e m r",
        "fct-source": "src/Data-Bits-Coding.html#Coding",
        "fct-type": "function",
        "title": "runCoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bits Coding",
        "module": "Data.Bits.Coding",
        "name": "runCoding",
        "normalized": "a b(c-\u003eInt-\u003eWord-\u003ed e)-\u003eInt-\u003eWord-\u003ed e",
        "package": "bits",
        "partial": "Coding",
        "signature": "forall r.(a-\u003eInt-\u003eWord-\u003em r)-\u003eInt-\u003eWord-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCalculate a number of fiddly bit operations using fast de Bruijn\n multiplication tables.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits",
        "fct-signature": "module",
        "fct-source": "src/Data-Bits-Extras.html",
        "fct-type": "module",
        "title": "Extras"
      },
      "index": {
        "description": "Calculate number of fiddly bit operations using fast de Bruijn multiplication tables",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "Extras",
        "normalized": "",
        "package": "bits",
        "partial": "Extras",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#t:Ranked",
      "description": {
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits",
        "fct-signature": "class",
        "fct-source": "src/Data-Bits-Extras.html#Ranked",
        "fct-type": "class",
        "title": "Ranked"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "Ranked",
        "normalized": "",
        "package": "bits",
        "partial": "Ranked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:log2",
      "description": {
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits",
        "fct-signature": "Word32 -\u003e Int",
        "fct-source": "src/Data-Bits-Extras.html#log2",
        "fct-type": "function",
        "title": "log2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "log2",
        "normalized": "Word-\u003eInt",
        "package": "bits",
        "partial": "",
        "signature": "Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:lsb",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the least significant set bit using a debruijn multiplication table.\n \u003cem\u003eNB:\u003c/em\u003e The result of this function is undefined when given 0.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits",
        "fct-signature": "t -\u003e Int",
        "fct-source": "src/Data-Bits-Extras.html#lsb",
        "fct-type": "method",
        "title": "lsb"
      },
      "index": {
        "description": "Calculate the least significant set bit using debruijn multiplication table NB The result of this function is undefined when given",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "lsb",
        "normalized": "a-\u003eInt",
        "package": "bits",
        "partial": "",
        "signature": "t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:nlz",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the number of leading zeros.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits",
        "fct-signature": "t -\u003e Int",
        "fct-source": "src/Data-Bits-Extras.html#nlz",
        "fct-type": "method",
        "title": "nlz"
      },
      "index": {
        "description": "Calculate the number of leading zeros",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "nlz",
        "normalized": "a-\u003eInt",
        "package": "bits",
        "partial": "",
        "signature": "t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:rank",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the number of trailing 0 bits.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits",
        "fct-signature": "t -\u003e Int",
        "fct-source": "src/Data-Bits-Extras.html#rank",
        "fct-type": "method",
        "title": "rank"
      },
      "index": {
        "description": "Calculate the number of trailing bits",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "rank",
        "normalized": "a-\u003eInt",
        "package": "bits",
        "partial": "",
        "signature": "t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:w16",
      "description": {
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits",
        "fct-signature": "a -\u003e Word16",
        "fct-source": "src/Data-Bits-Extras.html#w16",
        "fct-type": "function",
        "title": "w16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "w16",
        "normalized": "a-\u003eWord",
        "package": "bits",
        "partial": "",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:w32",
      "description": {
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits",
        "fct-signature": "a -\u003e Word32",
        "fct-source": "src/Data-Bits-Extras.html#w32",
        "fct-type": "function",
        "title": "w32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "w32",
        "normalized": "a-\u003eWord",
        "package": "bits",
        "partial": "",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:w64",
      "description": {
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits",
        "fct-signature": "a -\u003e Word64",
        "fct-source": "src/Data-Bits-Extras.html#w64",
        "fct-type": "function",
        "title": "w64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "w64",
        "normalized": "a-\u003eWord",
        "package": "bits",
        "partial": "",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits/docs/Data-Bits-Extras.html#v:w8",
      "description": {
        "fct-module": "Data.Bits.Extras",
        "fct-package": "bits",
        "fct-signature": "a -\u003e Word8",
        "fct-source": "src/Data-Bits-Extras.html#w8",
        "fct-type": "function",
        "title": "w8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bits Extras",
        "module": "Data.Bits.Extras",
        "name": "w8",
        "normalized": "a-\u003eWord",
        "package": "bits",
        "partial": "",
        "signature": "a-\u003eWord"
      }
    }
  }
]