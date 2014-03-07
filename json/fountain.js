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
        "word": "fountain"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFountain codes are forward error correction codes for erasure channels.\n They are able to recover lost packets without needing a backchannel.\n As a rateless code, transmitters generate packets at random, on the fly.\n Receivers then listen to as many packets as needed to reconstruct the message.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Fountain",
          "name": "Fountain",
          "package": "fountain",
          "source": "src/Codec-Fountain.html",
          "type": "module"
        },
        "index": {
          "description": "Fountain codes are forward error correction codes for erasure channels They are able to recover lost packets without needing backchannel As rateless code transmitters generate packets at random on the fly Receivers then listen to as many packets as needed to reconstruct the message",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "Fountain",
          "package": "fountain",
          "partial": "Fountain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA decoder holds the state of the decoding process.\n\u003c/p\u003e",
          "module": "Codec.Fountain",
          "name": "Decoder",
          "package": "fountain",
          "source": "src/Codec-Fountain.html#Decoder",
          "type": "data"
        },
        "index": {
          "description": "decoder holds the state of the decoding process",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "Decoder",
          "package": "fountain",
          "partial": "Decoder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#t:Decoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA message droplet is a set of message indices and the combined symbol.\n\u003c/p\u003e",
          "module": "Codec.Fountain",
          "name": "Droplet",
          "package": "fountain",
          "source": "src/Codec-Fountain.html#Droplet",
          "type": "data"
        },
        "index": {
          "description": "message droplet is set of message indices and the combined symbol",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "Droplet",
          "package": "fountain",
          "partial": "Droplet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#t:Droplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA precoding matrix that appends extra symbols to a message.\n\u003c/p\u003e",
          "module": "Codec.Fountain",
          "name": "Precoding",
          "package": "fountain",
          "source": "src/Codec-Fountain.html#Precoding",
          "type": "type"
        },
        "index": {
          "description": "precoding matrix that appends extra symbols to message",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "Precoding",
          "package": "fountain",
          "partial": "Precoding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#t:Precoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Fountain",
          "name": "Droplet",
          "package": "fountain",
          "signature": "Droplet IntSet a",
          "source": "src/Codec-Fountain.html#Droplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "Droplet",
          "package": "fountain",
          "partial": "Droplet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:Droplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e and a new \u003ccode\u003e\u003ca\u003eDroplet\u003c/a\u003e\u003c/code\u003e, returns either an updated \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e or the decoded message.\n\u003c/p\u003e",
          "module": "Codec.Fountain",
          "name": "decode",
          "package": "fountain",
          "signature": "Decoder a -\u003e Droplet a -\u003e (Decoder a, Maybe [a])",
          "source": "src/Codec-Fountain.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Given Decoder and new Droplet returns either an updated Decoder or the decoded message",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "decode",
          "normalized": "Decoder a-\u003eDroplet a-\u003e(Decoder a,Maybe[a])",
          "package": "fountain",
          "signature": "Decoder a-\u003eDroplet a-\u003e(Decoder a,Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new decoder given a message length and the precoding.\n\u003c/p\u003e",
          "module": "Codec.Fountain",
          "name": "decoder",
          "package": "fountain",
          "signature": "Int -\u003e Precoding -\u003e Decoder a",
          "source": "src/Codec-Fountain.html#decoder",
          "type": "function"
        },
        "index": {
          "description": "Creates new decoder given message length and the precoding",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "decoder",
          "normalized": "Int-\u003ePrecoding-\u003eDecoder a",
          "package": "fountain",
          "signature": "Int-\u003ePrecoding-\u003eDecoder a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:decoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA visual of \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e progress.\n\u003c/p\u003e",
          "module": "Codec.Fountain",
          "name": "decoderProgress",
          "package": "fountain",
          "signature": "Decoder a -\u003e String",
          "source": "src/Codec-Fountain.html#decoderProgress",
          "type": "function"
        },
        "index": {
          "description": "visual of Decoder progress",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "decoderProgress",
          "normalized": "Decoder a-\u003eString",
          "package": "fountain",
          "partial": "Progress",
          "signature": "Decoder a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:decoderProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list of droplets, given a seed, the max degree, precoding, and a message.\n\u003c/p\u003e",
          "module": "Codec.Fountain",
          "name": "droplets",
          "package": "fountain",
          "signature": "Int -\u003e Int -\u003e Precoding -\u003e [a] -\u003e [Droplet a]",
          "source": "src/Codec-Fountain.html#droplets",
          "type": "function"
        },
        "index": {
          "description": "An infinite list of droplets given seed the max degree precoding and message",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "droplets",
          "normalized": "Int-\u003eInt-\u003ePrecoding-\u003e[a]-\u003e[Droplet a]",
          "package": "fountain",
          "signature": "Int-\u003eInt-\u003ePrecoding-\u003e[a]-\u003e[Droplet a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:droplets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random precoding matrix.\n\u003c/p\u003e\u003cpre\u003e precoding seed messageLength extraSymbols boundaries\n\u003c/pre\u003e",
          "module": "Codec.Fountain",
          "name": "precoding",
          "package": "fountain",
          "signature": "Int -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Precoding",
          "source": "src/Codec-Fountain.html#precoding",
          "type": "function"
        },
        "index": {
          "description": "Generates random precoding matrix precoding seed messageLength extraSymbols boundaries",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "precoding",
          "normalized": "Int-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003ePrecoding",
          "package": "fountain",
          "signature": "Int-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003ePrecoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:precoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a test of a [Word8] message given the message length, max droplet degree, and a seed.\n   Returns the number of droplets that were needed to decode the message and if the message\n   was sucessfully decoded.\n\u003c/p\u003e",
          "module": "Codec.Fountain",
          "name": "test",
          "package": "fountain",
          "signature": "Int -\u003e Int -\u003e Precoding -\u003e Int -\u003e (Int, Bool, [Decoder Word8])",
          "source": "src/Codec-Fountain.html#test",
          "type": "function"
        },
        "index": {
          "description": "Runs test of Word8 message given the message length max droplet degree and seed Returns the number of droplets that were needed to decode the message and if the message was sucessfully decoded",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "test",
          "normalized": "Int-\u003eInt-\u003ePrecoding-\u003eInt-\u003e(Int,Bool,[Decoder Word])",
          "package": "fountain",
          "signature": "Int-\u003eInt-\u003ePrecoding-\u003eInt-\u003e(Int,Bool,[Decoder Word])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a test with a randomly generated precoding.\n\u003c/p\u003e\u003cpre\u003e test' messageLength dropletMaxDegree extraSymbols (precodingMinDegree, precodingMaxDegree) seed\n\u003c/pre\u003e",
          "module": "Codec.Fountain",
          "name": "test'",
          "package": "fountain",
          "signature": "Int -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Int -\u003e (Int, Bool, [Decoder Word8])",
          "source": "src/Codec-Fountain.html#test%27",
          "type": "function"
        },
        "index": {
          "description": "Runs test with randomly generated precoding test messageLength dropletMaxDegree extraSymbols precodingMinDegree precodingMaxDegree seed",
          "hierarchy": "Codec Fountain",
          "module": "Codec.Fountain",
          "name": "test'",
          "normalized": "Int-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eInt-\u003e(Int,Bool,[Decoder Word])",
          "package": "fountain",
          "signature": "Int-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eInt-\u003e(Int,Bool,[Decoder Word])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fountain/docs/Codec-Fountain.html#v:test-39-"
      }
    }
  ]
]