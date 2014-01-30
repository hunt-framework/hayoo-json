[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFountain codes are forward error correction codes for erasure channels.\n They are able to recover lost packets without needing a backchannel.\n As a rateless code, transmitters generate packets at random, on the fly.\n Receivers then listen to as many packets as needed to reconstruct the message.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "module",
        "fct-source": "src/Codec-Fountain.html",
        "fct-type": "module",
        "title": "Fountain"
      },
      "index": {
        "description": "Fountain codes are forward error correction codes for erasure channels They are able to recover lost packets without needing backchannel As rateless code transmitters generate packets at random on the fly Receivers then listen to as many packets as needed to reconstruct the message",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "Fountain",
        "normalized": "",
        "package": "fountain",
        "partial": "Fountain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#t:Decoder",
      "description": {
        "fct-descr": "\u003cp\u003eA decoder holds the state of the decoding process.\n\u003c/p\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "data",
        "fct-source": "src/Codec-Fountain.html#Decoder",
        "fct-type": "data",
        "title": "Decoder"
      },
      "index": {
        "description": "decoder holds the state of the decoding process",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "Decoder",
        "normalized": "",
        "package": "fountain",
        "partial": "Decoder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#t:Droplet",
      "description": {
        "fct-descr": "\u003cp\u003eA message droplet is a set of message indices and the combined symbol.\n\u003c/p\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "data",
        "fct-source": "src/Codec-Fountain.html#Droplet",
        "fct-type": "data",
        "title": "Droplet"
      },
      "index": {
        "description": "message droplet is set of message indices and the combined symbol",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "Droplet",
        "normalized": "",
        "package": "fountain",
        "partial": "Droplet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#t:Precoding",
      "description": {
        "fct-descr": "\u003cp\u003eA precoding matrix that appends extra symbols to a message.\n\u003c/p\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "type",
        "fct-source": "src/Codec-Fountain.html#Precoding",
        "fct-type": "type",
        "title": "Precoding"
      },
      "index": {
        "description": "precoding matrix that appends extra symbols to message",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "Precoding",
        "normalized": "",
        "package": "fountain",
        "partial": "Precoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:Droplet",
      "description": {
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "Droplet IntSet a",
        "fct-source": "src/Codec-Fountain.html#Droplet",
        "fct-type": "function",
        "title": "Droplet"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "Droplet",
        "normalized": "",
        "package": "fountain",
        "partial": "Droplet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e and a new \u003ccode\u003e\u003ca\u003eDroplet\u003c/a\u003e\u003c/code\u003e, returns either an updated \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e or the decoded message.\n\u003c/p\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "Decoder a -\u003e Droplet a -\u003e (Decoder a, Maybe [a])",
        "fct-source": "src/Codec-Fountain.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Given Decoder and new Droplet returns either an updated Decoder or the decoded message",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "decode",
        "normalized": "Decoder a-\u003eDroplet a-\u003e(Decoder a,Maybe[a])",
        "package": "fountain",
        "partial": "",
        "signature": "Decoder a-\u003eDroplet a-\u003e(Decoder a,Maybe[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:decoder",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new decoder given a message length and the precoding.\n\u003c/p\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "Int -\u003e Precoding -\u003e Decoder a",
        "fct-source": "src/Codec-Fountain.html#decoder",
        "fct-type": "function",
        "title": "decoder"
      },
      "index": {
        "description": "Creates new decoder given message length and the precoding",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "decoder",
        "normalized": "Int-\u003ePrecoding-\u003eDecoder a",
        "package": "fountain",
        "partial": "",
        "signature": "Int-\u003ePrecoding-\u003eDecoder a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:decoderProgress",
      "description": {
        "fct-descr": "\u003cp\u003eA visual of \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e progress.\n\u003c/p\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "Decoder a -\u003e String",
        "fct-source": "src/Codec-Fountain.html#decoderProgress",
        "fct-type": "function",
        "title": "decoderProgress"
      },
      "index": {
        "description": "visual of Decoder progress",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "decoderProgress",
        "normalized": "Decoder a-\u003eString",
        "package": "fountain",
        "partial": "Progress",
        "signature": "Decoder a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:droplets",
      "description": {
        "fct-descr": "\u003cp\u003eAn infinite list of droplets, given a seed, the max degree, precoding, and a message.\n\u003c/p\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "Int -\u003e Int -\u003e Precoding -\u003e [a] -\u003e [Droplet a]",
        "fct-source": "src/Codec-Fountain.html#droplets",
        "fct-type": "function",
        "title": "droplets"
      },
      "index": {
        "description": "An infinite list of droplets given seed the max degree precoding and message",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "droplets",
        "normalized": "Int-\u003eInt-\u003ePrecoding-\u003e[a]-\u003e[Droplet a]",
        "package": "fountain",
        "partial": "",
        "signature": "Int-\u003eInt-\u003ePrecoding-\u003e[a]-\u003e[Droplet a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:precoding",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a random precoding matrix.\n\u003c/p\u003e\u003cpre\u003e precoding seed messageLength extraSymbols boundaries\n\u003c/pre\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Precoding",
        "fct-source": "src/Codec-Fountain.html#precoding",
        "fct-type": "function",
        "title": "precoding"
      },
      "index": {
        "description": "Generates random precoding matrix precoding seed messageLength extraSymbols boundaries",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "precoding",
        "normalized": "Int-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003ePrecoding",
        "package": "fountain",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003ePrecoding"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:test",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a test of a [Word8] message given the message length, max droplet degree, and a seed.\n   Returns the number of droplets that were needed to decode the message and if the message\n   was sucessfully decoded.\n\u003c/p\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "Int -\u003e Int -\u003e Precoding -\u003e Int -\u003e (Int, Bool, [Decoder Word8])",
        "fct-source": "src/Codec-Fountain.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "Runs test of Word8 message given the message length max droplet degree and seed Returns the number of droplets that were needed to decode the message and if the message was sucessfully decoded",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "test",
        "normalized": "Int-\u003eInt-\u003ePrecoding-\u003eInt-\u003e(Int,Bool,[Decoder Word])",
        "package": "fountain",
        "partial": "",
        "signature": "Int-\u003eInt-\u003ePrecoding-\u003eInt-\u003e(Int,Bool,[Decoder Word])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:test-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a test with a randomly generated precoding.\n\u003c/p\u003e\u003cpre\u003e test' messageLength dropletMaxDegree extraSymbols (precodingMinDegree, precodingMaxDegree) seed\n\u003c/pre\u003e",
        "fct-module": "Codec.Fountain",
        "fct-package": "fountain",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Int -\u003e (Int, Bool, [Decoder Word8])",
        "fct-source": "src/Codec-Fountain.html#test%27",
        "fct-type": "function",
        "title": "test'"
      },
      "index": {
        "description": "Runs test with randomly generated precoding test messageLength dropletMaxDegree extraSymbols precodingMinDegree precodingMaxDegree seed",
        "hierarchy": "Codec Fountain",
        "module": "Codec.Fountain",
        "name": "test'",
        "normalized": "Int-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eInt-\u003e(Int,Bool,[Decoder Word])",
        "package": "fountain",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eInt-\u003e(Int,Bool,[Decoder Word])"
      }
    }
  }
]