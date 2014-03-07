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
        "word": "crf-chain2-generic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "Codec",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "Codec",
          "package": "crf-chain2-generic",
          "partial": "Codec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract codec representation with external observation type\n \u003ccode\u003ea\u003c/code\u003e, external label type \u003ccode\u003eb\u003c/code\u003e, codec data type \u003ccode\u003ec\u003c/code\u003e, internal\n observation type \u003ccode\u003eo\u003c/code\u003e and internal label type \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "Codec",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#Codec",
          "type": "data"
        },
        "index": {
          "description": "An abstract codec representation with external observation type external label type codec data type internal observation type and internal label type",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "Codec",
          "package": "crf-chain2-generic",
          "partial": "Codec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#t:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec monad.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "CodecM",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#CodecM",
          "type": "type"
        },
        "index": {
          "description": "codec monad",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "CodecM",
          "package": "crf-chain2-generic",
          "partial": "Codec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#t:CodecM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "Codec",
          "package": "crf-chain2-generic",
          "signature": "Codec",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#Codec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "Codec",
          "package": "crf-chain2-generic",
          "partial": "Codec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the label.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "decodeLabel",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e c -\u003e e -\u003e Maybe b",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#decodeLabel",
          "type": "function"
        },
        "index": {
          "description": "Decode the label",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "decodeLabel",
          "normalized": "Codec a b c d e-\u003ec-\u003ee-\u003eMaybe b",
          "package": "crf-chain2-generic",
          "partial": "Label",
          "signature": "Codec a b c o e-\u003ec-\u003ee-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:decodeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the sequence of labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "decodeLabels",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e c -\u003e [e] -\u003e [Maybe b]",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#decodeLabels",
          "type": "function"
        },
        "index": {
          "description": "Decode the sequence of labels",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "decodeLabels",
          "normalized": "Codec a b c d e-\u003ec-\u003e[e]-\u003e[Maybe b]",
          "package": "crf-chain2-generic",
          "partial": "Labels",
          "signature": "Codec a b c o e-\u003ec-\u003e[e]-\u003e[Maybe b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:decodeLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the label within the codec monad.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "decodeLbC",
          "package": "crf-chain2-generic",
          "signature": "e -\u003e CodecM c (Maybe b)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#Codec",
          "type": "function"
        },
        "index": {
          "description": "Decode the label within the codec monad",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "decodeLbC",
          "normalized": "a-\u003eCodecM b(Maybe c)",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "signature": "e-\u003eCodecM c(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:decodeLbC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "empty",
          "package": "crf-chain2-generic",
          "signature": "c",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#Codec",
          "type": "function"
        },
        "index": {
          "description": "Empty codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "empty",
          "package": "crf-chain2-generic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the dataset with the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeData",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e c -\u003e [Sent a b] -\u003e [Xs o e]",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeData",
          "type": "function"
        },
        "index": {
          "description": "Encode the dataset with the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeData",
          "normalized": "Codec a b c d e-\u003ec-\u003e[Sent a b]-\u003e[Xs d e]",
          "package": "crf-chain2-generic",
          "partial": "Data",
          "signature": "Codec a b c o e-\u003ec-\u003e[Sent a b]-\u003e[Xs o e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled dataset using the codec.  Substitute the default\n label for any label not present in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeDataL",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e c -\u003e [SentL a b] -\u003e [(Xs o e, Ys e)]",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeDataL",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled dataset using the codec Substitute the default label for any label not present in the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeDataL",
          "normalized": "Codec a b c d e-\u003ec-\u003e[SentL a b]-\u003e[(Xs d e,Ys e)]",
          "package": "crf-chain2-generic",
          "partial": "Data",
          "signature": "Codec a b c o e-\u003ec-\u003e[SentL a b]-\u003e[(Xs o e,Ys e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeDataL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the label and do *not* update the codec.\n In case the label is not a member of the codec,\n return the label code assigned to Nothing label.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeLbN",
          "package": "crf-chain2-generic",
          "signature": "b -\u003e CodecM c e",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#Codec",
          "type": "function"
        },
        "index": {
          "description": "Encode the label and do not update the codec In case the label is not member of the codec return the label code assigned to Nothing label",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeLbN",
          "normalized": "a-\u003eCodecM b c",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "signature": "b-\u003eCodecM c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeLbN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the label and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeLbU",
          "package": "crf-chain2-generic",
          "signature": "b -\u003e CodecM c e",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#Codec",
          "type": "function"
        },
        "index": {
          "description": "Encode the label and update the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeLbU",
          "normalized": "a-\u003eCodecM b c",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "signature": "b-\u003eCodecM c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeLbU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the observation and do *not* update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeObN",
          "package": "crf-chain2-generic",
          "signature": "a -\u003e CodecM c (Maybe o)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#Codec",
          "type": "function"
        },
        "index": {
          "description": "Encode the observation and do not update the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeObN",
          "normalized": "a-\u003eCodecM b(Maybe c)",
          "package": "crf-chain2-generic",
          "partial": "Ob",
          "signature": "a-\u003eCodecM c(Maybe o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeObN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the observation and update the codec\n (only in the encoding direction).\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeObU",
          "package": "crf-chain2-generic",
          "signature": "a -\u003e CodecM c o",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#Codec",
          "type": "function"
        },
        "index": {
          "description": "Encode the observation and update the codec only in the encoding direction",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeObU",
          "normalized": "a-\u003eCodecM b c",
          "package": "crf-chain2-generic",
          "partial": "Ob",
          "signature": "a-\u003eCodecM c o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeObU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the sentence using the given codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSent",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e c -\u003e Sent a b -\u003e Xs o e",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeSent",
          "type": "function"
        },
        "index": {
          "description": "Encode the sentence using the given codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSent",
          "normalized": "Codec a b c d e-\u003ec-\u003eSent a b-\u003eXs d e",
          "package": "crf-chain2-generic",
          "partial": "Sent",
          "signature": "Codec a b c o e-\u003ec-\u003eSent a b-\u003eXs o e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeSent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the sentence and do *not* update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSent'Cn",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e Sent a b -\u003e CodecM c (Xs o e)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeSent%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encode the sentence and do not update the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSent'Cn",
          "normalized": "Codec a b c d e-\u003eSent a b-\u003eCodecM c(Xs d e)",
          "package": "crf-chain2-generic",
          "partial": "Sent' Cn",
          "signature": "Codec a b c o e-\u003eSent a b-\u003eCodecM c(Xs o e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeSent-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the sentence and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSent'Cu",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e Sent a b -\u003e CodecM c (Xs o e)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeSent%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the sentence and update the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSent'Cu",
          "normalized": "Codec a b c d e-\u003eSent a b-\u003eCodecM c(Xs d e)",
          "package": "crf-chain2-generic",
          "partial": "Sent' Cu",
          "signature": "Codec a b c o e-\u003eSent a b-\u003eCodecM c(Xs o e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeSent-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled sentence with the given codec.  Substitute the\n default label for any label not present in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSentL",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e c -\u003e SentL a b -\u003e (Xs o e, Ys e)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeSentL",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled sentence with the given codec Substitute the default label for any label not present in the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSentL",
          "normalized": "Codec a b c d e-\u003ec-\u003eSentL a b-\u003e(Xs d e,Ys e)",
          "package": "crf-chain2-generic",
          "partial": "Sent",
          "signature": "Codec a b c o e-\u003ec-\u003eSentL a b-\u003e(Xs o e,Ys e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeSentL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled sentence and do *not* update the codec.\n Substitute the default label for any label not present in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSentL'Cn",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e SentL a b -\u003e CodecM c (Xs o e, Ys e)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeSentL%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled sentence and do not update the codec Substitute the default label for any label not present in the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSentL'Cn",
          "normalized": "Codec a b c d e-\u003eSentL a b-\u003eCodecM c(Xs d e,Ys e)",
          "package": "crf-chain2-generic",
          "partial": "Sent L' Cn",
          "signature": "Codec a b c o e-\u003eSentL a b-\u003eCodecM c(Xs o e,Ys e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeSentL-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled sentence and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSentL'Cu",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e SentL a b -\u003e CodecM c (Xs o e, Ys e)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeSentL%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled sentence and update the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeSentL'Cu",
          "normalized": "Codec a b c d e-\u003eSentL a b-\u003eCodecM c(Xs d e,Ys e)",
          "package": "crf-chain2-generic",
          "partial": "Sent L' Cu",
          "signature": "Codec a b c o e-\u003eSentL a b-\u003eCodecM c(Xs o e,Ys e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeSentL-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the word and do *not* update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeWord'Cn",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e Word a b -\u003e CodecM c (X o e)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeWord%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encode the word and do not update the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeWord'Cn",
          "normalized": "Codec a b c d e-\u003eWord a b-\u003eCodecM c(X d e)",
          "package": "crf-chain2-generic",
          "partial": "Word' Cn",
          "signature": "Codec a b c o e-\u003eWord a b-\u003eCodecM c(X o e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeWord-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the word and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeWord'Cu",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e Word a b -\u003e CodecM c (X o e)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeWord%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the word and update the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeWord'Cu",
          "normalized": "Codec a b c d e-\u003eWord a b-\u003eCodecM c(X d e)",
          "package": "crf-chain2-generic",
          "partial": "Word' Cu",
          "signature": "Codec a b c o e-\u003eWord a b-\u003eCodecM c(X o e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeWord-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodec the labeled word and do *not* update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeWordL'Cn",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e WordL a b -\u003e CodecM c (X o e, Y e)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeWordL%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encodec the labeled word and do not update the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeWordL'Cn",
          "normalized": "Codec a b c d e-\u003eWordL a b-\u003eCodecM c(X d e,Y e)",
          "package": "crf-chain2-generic",
          "partial": "Word L' Cn",
          "signature": "Codec a b c o e-\u003eWordL a b-\u003eCodecM c(X o e,Y e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeWordL-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled word and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeWordL'Cu",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e WordL a b -\u003e CodecM c (X o e, Y e)",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#encodeWordL%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled word and update the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "encodeWordL'Cu",
          "normalized": "Codec a b c d e-\u003eWordL a b-\u003eCodecM c(X d e,Y e)",
          "package": "crf-chain2-generic",
          "partial": "Word L' Cu",
          "signature": "Codec a b c o e-\u003eWordL a b-\u003eCodecM c(X o e,Y e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:encodeWordL-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs label a member of the codec?\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "hasLabel",
          "package": "crf-chain2-generic",
          "signature": "c -\u003e b -\u003e Bool",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#Codec",
          "type": "function"
        },
        "index": {
          "description": "Is label member of the codec",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "hasLabel",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "crf-chain2-generic",
          "partial": "Label",
          "signature": "c-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:hasLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the codec on the basis of the labeled dataset, return the\n resultant codec and the encoded dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "mkCodec",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e [SentL a b] -\u003e (c, [(Xs o e, Ys e)])",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#mkCodec",
          "type": "function"
        },
        "index": {
          "description": "Create the codec on the basis of the labeled dataset return the resultant codec and the encoded dataset",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "mkCodec",
          "normalized": "Codec a b c d e-\u003e[SentL a b]-\u003e(c,[(Xs d e,Ys e)])",
          "package": "crf-chain2-generic",
          "partial": "Codec",
          "signature": "Codec a b c o e-\u003e[SentL a b]-\u003e(c,[(Xs o e,Ys e)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:mkCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the label when \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e or one of the unknown values\n when \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "unJust",
          "package": "crf-chain2-generic",
          "signature": "Codec a b c o e -\u003e c -\u003e Word a b -\u003e Maybe b -\u003e b",
          "source": "src/Data-CRF-Chain2-Generic-Codec.html#unJust",
          "type": "function"
        },
        "index": {
          "description": "Return the label when Just or one of the unknown values when Nothing",
          "hierarchy": "Data CRF Chain2 Generic Codec",
          "module": "Data.CRF.Chain2.Generic.Codec",
          "name": "unJust",
          "normalized": "Codec a b c d e-\u003ec-\u003eWord a b-\u003eMaybe b-\u003eb",
          "package": "crf-chain2-generic",
          "partial": "Just",
          "signature": "Codec a b c o e-\u003ec-\u003eWord a b-\u003eMaybe b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Codec.html#v:unJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExternal data representation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "External",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html",
          "type": "module"
        },
        "index": {
          "description": "External data representation",
          "hierarchy": "Data CRF Chain2 Generic External",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "External",
          "package": "crf-chain2-generic",
          "partial": "External",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-External.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA probability distribution defined over elements of type a.\n All elements not included in the map have probability equal\n to 0.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "Dist",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html#Dist",
          "type": "data"
        },
        "index": {
          "description": "probability distribution defined over elements of type All elements not included in the map have probability equal to",
          "hierarchy": "Data CRF Chain2 Generic External",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "Dist",
          "package": "crf-chain2-generic",
          "partial": "Dist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-External.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "Sent",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html#Sent",
          "type": "type"
        },
        "index": {
          "description": "sentence of words",
          "hierarchy": "Data CRF Chain2 Generic External",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "Sent",
          "package": "crf-chain2-generic",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-External.html#t:Sent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of labeled words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "SentL",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html#SentL",
          "type": "type"
        },
        "index": {
          "description": "sentence of labeled words",
          "hierarchy": "Data CRF Chain2 Generic External",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "SentL",
          "package": "crf-chain2-generic",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-External.html#t:SentL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word consists of a set of observations and a set of potential labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "Word",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html#Word",
          "type": "data"
        },
        "index": {
          "description": "word consists of set of observations and set of potential labels",
          "hierarchy": "Data CRF Chain2 Generic External",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "Word",
          "package": "crf-chain2-generic",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-External.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA WordL is a labeled word, i.e. a word with probability distribution\n defined over labels.  We assume that every label from the distribution\n domain is a member of the set of potential labels corresponding to the\n word.  TODO: Ensure the assumption using the smart constructor.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "WordL",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html#WordL",
          "type": "type"
        },
        "index": {
          "description": "WordL is labeled word i.e word with probability distribution defined over labels We assume that every label from the distribution domain is member of the set of potential labels corresponding to the word TODO Ensure the assumption using the smart constructor",
          "hierarchy": "Data CRF Chain2 Generic External",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "WordL",
          "package": "crf-chain2-generic",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-External.html#t:WordL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the probability distribution.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain2.Generic.External\",\"Data.CRF.Chain2.Pair\"]",
          "name": "mkDist",
          "package": "crf-chain2-generic",
          "signature": "[(a, Double)] -\u003e Dist a",
          "source": "src/Data-CRF-Chain2-Generic-External.html#mkDist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-External.html#v:mkDist\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:mkDist\"]"
        },
        "index": {
          "description": "Construct the probability distribution",
          "hierarchy": "Data CRF Chain2 Generic External",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "mkDist",
          "normalized": "[(a,Double)]-\u003eDist a",
          "package": "crf-chain2-generic",
          "partial": "Dist",
          "signature": "[(a,Double)]-\u003eDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-External.html#v:mkDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word constructor which checks non-emptiness of the potential\n set of labels.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain2.Generic.External\",\"Data.CRF.Chain2.Pair\"]",
          "name": "mkWord",
          "package": "crf-chain2-generic",
          "signature": "Set a -\u003e Set b -\u003e Word a b",
          "source": "src/Data-CRF-Chain2-Generic-External.html#mkWord",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-External.html#v:mkWord\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:mkWord\"]"
        },
        "index": {
          "description": "word constructor which checks non-emptiness of the potential set of labels",
          "hierarchy": "Data CRF Chain2 Generic External",
          "module": "Data.CRF.Chain2.Generic.External",
          "name": "mkWord",
          "normalized": "Set a-\u003eSet b-\u003eWord a b",
          "package": "crf-chain2-generic",
          "partial": "Word",
          "signature": "Set a-\u003eSet b-\u003eWord a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-External.html#v:mkWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.FeatMap.Map",
          "name": "Map",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-FeatMap-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic FeatMap Map",
          "module": "Data.CRF.Chain2.Generic.FeatMap.Map",
          "name": "Map",
          "package": "crf-chain2-generic",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-FeatMap-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.FeatMap.Map",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-FeatMap-Map.html#FeatMap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic FeatMap Map",
          "module": "Data.CRF.Chain2.Generic.FeatMap.Map",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "partial": "Feat Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-FeatMap-Map.html#t:FeatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.FeatMap.Map",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "signature": "FeatMap",
          "source": "src/Data-CRF-Chain2-Generic-FeatMap-Map.html#FeatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic FeatMap Map",
          "module": "Data.CRF.Chain2.Generic.FeatMap.Map",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "partial": "Feat Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-FeatMap-Map.html#v:FeatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.FeatMap.Map",
          "name": "unFeatMap",
          "package": "crf-chain2-generic",
          "signature": "Map f FeatIx",
          "source": "src/Data-CRF-Chain2-Generic-FeatMap-Map.html#FeatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic FeatMap Map",
          "module": "Data.CRF.Chain2.Generic.FeatMap.Map",
          "name": "unFeatMap",
          "package": "crf-chain2-generic",
          "partial": "Feat Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-FeatMap-Map.html#v:unFeatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.FeatMap",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-FeatMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic FeatMap",
          "module": "Data.CRF.Chain2.Generic.FeatMap",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "partial": "Feat Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-FeatMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.FeatMap",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-FeatMap.html#FeatMap",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic FeatMap",
          "module": "Data.CRF.Chain2.Generic.FeatMap",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "partial": "Feat Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-FeatMap.html#t:FeatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.FeatMap",
          "name": "featIndex",
          "package": "crf-chain2-generic",
          "signature": "f -\u003e m f -\u003e Maybe FeatIx",
          "source": "src/Data-CRF-Chain2-Generic-FeatMap.html#featIndex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic FeatMap",
          "module": "Data.CRF.Chain2.Generic.FeatMap",
          "name": "featIndex",
          "normalized": "a-\u003eb a-\u003eMaybe FeatIx",
          "package": "crf-chain2-generic",
          "partial": "Index",
          "signature": "f-\u003em f-\u003eMaybe FeatIx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-FeatMap.html#v:featIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.FeatMap",
          "name": "mkFeatMap",
          "package": "crf-chain2-generic",
          "signature": "[(f, FeatIx)] -\u003e m f",
          "source": "src/Data-CRF-Chain2-Generic-FeatMap.html#mkFeatMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic FeatMap",
          "module": "Data.CRF.Chain2.Generic.FeatMap",
          "name": "mkFeatMap",
          "normalized": "[(a,FeatIx)]-\u003eb a",
          "package": "crf-chain2-generic",
          "partial": "Feat Map",
          "signature": "[(f,FeatIx)]-\u003em f",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-FeatMap.html#v:mkFeatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "Inference",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Inference.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Inference",
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "Inference",
          "package": "crf-chain2-generic",
          "partial": "Inference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Inference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the accuracy of the model with respect to the labeled dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "accuracy",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e [(Xs o t, Ys t)] -\u003e Double",
          "source": "src/Data-CRF-Chain2-Generic-Inference.html#accuracy",
          "type": "function"
        },
        "index": {
          "description": "Compute the accuracy of the model with respect to the labeled dataset",
          "hierarchy": "Data CRF Chain2 Generic Inference",
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "accuracy",
          "normalized": "Model a b c d-\u003e[(Xs b c,Ys c)]-\u003eDouble",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f-\u003e[(Xs o t,Ys t)]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Inference.html#v:accuracy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "expectedFeatures",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e Xs o t -\u003e [(f, LogFloat)]",
          "source": "src/Data-CRF-Chain2-Generic-Inference.html#expectedFeatures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Inference",
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "expectedFeatures",
          "normalized": "Model a b c d-\u003eXs b c-\u003e[(d,LogFloat)]",
          "package": "crf-chain2-generic",
          "partial": "Features",
          "signature": "Model m o t f-\u003eXs o t-\u003e[(f,LogFloat)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Inference.html#v:expectedFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "marginals",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e Xs o t -\u003e [[LogFloat]]",
          "source": "src/Data-CRF-Chain2-Generic-Inference.html#marginals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Inference",
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "marginals",
          "normalized": "Model a b c d-\u003eXs b c-\u003e[[LogFloat]]",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f-\u003eXs o t-\u003e[[LogFloat]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Inference.html#v:marginals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "probs",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e Xs o t -\u003e [[LogFloat]]",
          "source": "src/Data-CRF-Chain2-Generic-Inference.html#probs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Inference",
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "probs",
          "normalized": "Model a b c d-\u003eXs b c-\u003e[[LogFloat]]",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f-\u003eXs o t-\u003e[[LogFloat]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Inference.html#v:probs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "tag",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e Xs o t -\u003e [t]",
          "source": "src/Data-CRF-Chain2-Generic-Inference.html#tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Inference",
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "tag",
          "normalized": "Model a b c d-\u003eXs b c-\u003e[c]",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f-\u003eXs o t-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Inference.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "zx",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e Xs o t -\u003e LogFloat",
          "source": "src/Data-CRF-Chain2-Generic-Inference.html#zx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Inference",
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "zx",
          "normalized": "Model a b c d-\u003eXs b c-\u003eLogFloat",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f-\u003eXs o t-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Inference.html#v:zx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "zx'",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e Xs o t -\u003e LogFloat",
          "source": "src/Data-CRF-Chain2-Generic-Inference.html#zx%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Inference",
          "module": "Data.CRF.Chain2.Generic.Inference",
          "name": "zx'",
          "normalized": "Model a b c d-\u003eXs b c-\u003eLogFloat",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f-\u003eXs o t-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Inference.html#v:zx-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal core data types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "Internal",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal core data types",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "Internal",
          "package": "crf-chain2-generic",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ascending vector of distinct elements.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "AVec",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#AVec",
          "type": "data"
        },
        "index": {
          "description": "An ascending vector of distinct elements",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "AVec",
          "package": "crf-chain2-generic",
          "partial": "AVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#t:AVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ascending vector of distinct elements with respect\n to \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "AVec2",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#AVec2",
          "type": "data"
        },
        "index": {
          "description": "An ascending vector of distinct elements with respect to fst values",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "AVec2",
          "package": "crf-chain2-generic",
          "partial": "AVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#t:AVec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA feature index.  To every model feature a unique index is assigned.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "FeatIx",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#FeatIx",
          "type": "newtype"
        },
        "index": {
          "description": "feature index To every model feature unique index is assigned",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "FeatIx",
          "package": "crf-chain2-generic",
          "partial": "Feat Ix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#t:FeatIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn index of the label.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "LbIx",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#LbIx",
          "type": "type"
        },
        "index": {
          "description": "An index of the label",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "LbIx",
          "package": "crf-chain2-generic",
          "partial": "Lb Ix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#t:LbIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word represented by a list of its observations\n and a list of its potential label interpretations.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "X",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#X",
          "type": "data"
        },
        "index": {
          "description": "word represented by list of its observations and list of its potential label interpretations",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "X",
          "package": "crf-chain2-generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSentence of words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "Xs",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#Xs",
          "type": "type"
        },
        "index": {
          "description": "Sentence of words",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "Xs",
          "package": "crf-chain2-generic",
          "partial": "Xs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#t:Xs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector of chosen labels together with\n corresponding probabilities.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "Y",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#Y",
          "type": "data"
        },
        "index": {
          "description": "Vector of chosen labels together with corresponding probabilities",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "Y",
          "package": "crf-chain2-generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#t:Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSentence of Y (label choices).\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "Ys",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#Ys",
          "type": "type"
        },
        "index": {
          "description": "Sentence of label choices",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "Ys",
          "package": "crf-chain2-generic",
          "partial": "Ys",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#t:Ys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "FeatIx",
          "package": "crf-chain2-generic",
          "signature": "FeatIx",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#FeatIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "FeatIx",
          "package": "crf-chain2-generic",
          "partial": "Feat Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:FeatIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePotential label at the given position.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "lbAt",
          "package": "crf-chain2-generic",
          "signature": "X o t -\u003e LbIx -\u003e t",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#lbAt",
          "type": "function"
        },
        "index": {
          "description": "Potential label at the given position",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "lbAt",
          "normalized": "X a b-\u003eLbIx-\u003eb",
          "package": "crf-chain2-generic",
          "partial": "At",
          "signature": "X o t-\u003eLbIx-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:lbAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of label indices at the given position.  Function extended to\n indices outside the positions' domain.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain2.Generic.Internal\",\"Data.CRF.Chain2.Generic.Model\"]",
          "name": "lbIxs",
          "package": "crf-chain2-generic",
          "signature": "Xs o t -\u003e Int -\u003e [LbIx]",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#lbIxs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:lbIxs\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:lbIxs\"]"
        },
        "index": {
          "description": "List of label indices at the given position Function extended to indices outside the positions domain",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "lbIxs",
          "normalized": "Xs a b-\u003eInt-\u003e[LbIx]",
          "package": "crf-chain2-generic",
          "partial": "Ixs",
          "signature": "Xs o t-\u003eInt-\u003e[LbIx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:lbIxs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of potential labels at the given position of the sentence.\n Function extended to indices outside the positions' domain.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain2.Generic.Internal\",\"Data.CRF.Chain2.Generic.Model\"]",
          "name": "lbNum",
          "package": "crf-chain2-generic",
          "signature": "Xs o t -\u003e Int -\u003e Int",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#lbNum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:lbNum\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:lbNum\"]"
        },
        "index": {
          "description": "Number of potential labels at the given position of the sentence Function extended to indices outside the positions domain",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "lbNum",
          "normalized": "Xs a b-\u003eInt-\u003eInt",
          "package": "crf-chain2-generic",
          "partial": "Num",
          "signature": "Xs o t-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:lbNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePotential label at the given position and at the given index.\n Return Nothing for positions outside the domain.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain2.Generic.Internal\",\"Data.CRF.Chain2.Generic.Model\"]",
          "name": "lbOn",
          "package": "crf-chain2-generic",
          "signature": "Xs o t -\u003e Int -\u003e LbIx -\u003e Maybe t",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#lbOn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:lbOn\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:lbOn\"]"
        },
        "index": {
          "description": "Potential label at the given position and at the given index Return Nothing for positions outside the domain",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "lbOn",
          "normalized": "Xs a b-\u003eInt-\u003eLbIx-\u003eMaybe b",
          "package": "crf-chain2-generic",
          "partial": "On",
          "signature": "Xs o t-\u003eInt-\u003eLbIx-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:lbOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart AVec constructor which ensures that the\n underlying vector is strictly ascending.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "mkAVec",
          "package": "crf-chain2-generic",
          "signature": "[a] -\u003e AVec a",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#mkAVec",
          "type": "function"
        },
        "index": {
          "description": "Smart AVec constructor which ensures that the underlying vector is strictly ascending",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "mkAVec",
          "normalized": "[a]-\u003eAVec a",
          "package": "crf-chain2-generic",
          "partial": "AVec",
          "signature": "[a]-\u003eAVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:mkAVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart AVec constructor which ensures that the\n underlying vector is strictly ascending with respect\n to fst values.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "mkAVec2",
          "package": "crf-chain2-generic",
          "signature": "[(a, b)] -\u003e AVec2 a b",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#mkAVec2",
          "type": "function"
        },
        "index": {
          "description": "Smart AVec constructor which ensures that the underlying vector is strictly ascending with respect to fst values",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "mkAVec2",
          "normalized": "[(a,b)]-\u003eAVec a b",
          "package": "crf-chain2-generic",
          "partial": "AVec",
          "signature": "[(a,b)]-\u003eAVec a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:mkAVec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX constructor.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "mkX",
          "package": "crf-chain2-generic",
          "signature": "[o] -\u003e [t] -\u003e X o t",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#mkX",
          "type": "function"
        },
        "index": {
          "description": "constructor",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "mkX",
          "normalized": "[a]-\u003e[b]-\u003eX a b",
          "package": "crf-chain2-generic",
          "signature": "[o]-\u003e[t]-\u003eX o t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:mkX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eY constructor.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "mkY",
          "package": "crf-chain2-generic",
          "signature": "[(t, Double)] -\u003e Y t",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#mkY",
          "type": "function"
        },
        "index": {
          "description": "constructor",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "mkY",
          "normalized": "[(a,Double)]-\u003eY a",
          "package": "crf-chain2-generic",
          "signature": "[(t,Double)]-\u003eY t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:mkY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "unFeatIx",
          "package": "crf-chain2-generic",
          "signature": "Int",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#FeatIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "unFeatIx",
          "package": "crf-chain2-generic",
          "partial": "Feat Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:unFeatIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of potential labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "unR",
          "package": "crf-chain2-generic",
          "signature": "X o t -\u003e [t]",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#unR",
          "type": "function"
        },
        "index": {
          "description": "List of potential labels",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "unR",
          "normalized": "X a b-\u003e[b]",
          "package": "crf-chain2-generic",
          "signature": "X o t-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:unR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of observations.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "unX",
          "package": "crf-chain2-generic",
          "signature": "X o t -\u003e [o]",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#unX",
          "type": "function"
        },
        "index": {
          "description": "List of observations",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "unX",
          "normalized": "X a b-\u003e[a]",
          "package": "crf-chain2-generic",
          "signature": "X o t-\u003e[o]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:unX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eY deconstructor symetric to mkY.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "unY",
          "package": "crf-chain2-generic",
          "signature": "Y t -\u003e [(t, Double)]",
          "source": "src/Data-CRF-Chain2-Generic-Internal.html#unY",
          "type": "function"
        },
        "index": {
          "description": "deconstructor symetric to mkY",
          "hierarchy": "Data CRF Chain2 Generic Internal",
          "module": "Data.CRF.Chain2.Generic.Internal",
          "name": "unY",
          "normalized": "Y a-\u003e[(a,Double)]",
          "package": "crf-chain2-generic",
          "signature": "Y t-\u003e[(t,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Internal.html#v:unY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "Model",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Model.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "Model",
          "package": "crf-chain2-generic",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA core of the model with no feature generation function.\n Unlike the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e, the core can be serialized. \n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "Core",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#Core",
          "type": "data"
        },
        "index": {
          "description": "core of the model with no feature generation function Unlike the Model the core can be serialized",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "Core",
          "package": "crf-chain2-generic",
          "partial": "Core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#t:Core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeature generation specification.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "FeatGen",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#FeatGen",
          "type": "data"
        },
        "index": {
          "description": "Feature generation specification",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "FeatGen",
          "package": "crf-chain2-generic",
          "partial": "Feat Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#t:FeatGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA feature selection function type.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "FeatSel",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#FeatSel",
          "type": "type"
        },
        "index": {
          "description": "feature selection function type",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "FeatSel",
          "package": "crf-chain2-generic",
          "partial": "Feat Sel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#t:FeatSel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA conditional random field.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "Model",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#Model",
          "type": "data"
        },
        "index": {
          "description": "conditional random field",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "Model",
          "package": "crf-chain2-generic",
          "partial": "Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "Core",
          "package": "crf-chain2-generic",
          "signature": "Core",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#Core",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "Core",
          "package": "crf-chain2-generic",
          "partial": "Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:Core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "FeatGen",
          "package": "crf-chain2-generic",
          "signature": "FeatGen",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#FeatGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "FeatGen",
          "package": "crf-chain2-generic",
          "partial": "Feat Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:FeatGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "Model",
          "package": "crf-chain2-generic",
          "signature": "Model",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "Model",
          "package": "crf-chain2-generic",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the model core.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "core",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e Core m f",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#core",
          "type": "function"
        },
        "index": {
          "description": "Extract the model core",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "core",
          "normalized": "Model a b c d-\u003eCore a d",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f-\u003eCore m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "featGen",
          "package": "crf-chain2-generic",
          "signature": "FeatGen o t f",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "featGen",
          "package": "crf-chain2-generic",
          "partial": "Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:featGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeatures hidden in the dataset element.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "hiddenFeats",
          "package": "crf-chain2-generic",
          "signature": "FeatGen o t f -\u003e Xs o t -\u003e [f]",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#hiddenFeats",
          "type": "function"
        },
        "index": {
          "description": "Features hidden in the dataset element",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "hiddenFeats",
          "normalized": "FeatGen a b c-\u003eXs a b-\u003e[c]",
          "package": "crf-chain2-generic",
          "partial": "Feats",
          "signature": "FeatGen o t f-\u003eXs o t-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:hiddenFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex of the feature.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "index",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e f -\u003e Maybe FeatIx",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#index",
          "type": "function"
        },
        "index": {
          "description": "Index of the feature",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "index",
          "normalized": "Model a b c d-\u003ed-\u003eMaybe FeatIx",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f-\u003ef-\u003eMaybe FeatIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "ixMap",
          "package": "crf-chain2-generic",
          "signature": "m f",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "ixMap",
          "package": "crf-chain2-generic",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:ixMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "ixMapC",
          "package": "crf-chain2-generic",
          "signature": "m f",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#Core",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "ixMapC",
          "package": "crf-chain2-generic",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:ixMapC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "mkModel",
          "package": "crf-chain2-generic",
          "signature": "FeatGen o t f -\u003e FeatSel o t f -\u003e [(Xs o t, Ys t)] -\u003e Model m o t f",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#mkModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "mkModel",
          "normalized": "FeatGen a b c-\u003eFeatSel a b c-\u003e[(Xs a b,Ys b)]-\u003eModel d a b c",
          "package": "crf-chain2-generic",
          "partial": "Model",
          "signature": "FeatGen o t f-\u003eFeatSel o t f-\u003e[(Xs o t,Ys t)]-\u003eModel m o t f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:mkModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "obFeats",
          "package": "crf-chain2-generic",
          "signature": "o -\u003e t -\u003e [f]",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#FeatGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "obFeats",
          "normalized": "a-\u003eb-\u003e[c]",
          "package": "crf-chain2-generic",
          "partial": "Feats",
          "signature": "o-\u003et-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:obFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "obFeatsOn",
          "package": "crf-chain2-generic",
          "signature": "FeatGen o t f -\u003e Xs o t -\u003e Int -\u003e LbIx -\u003e [f]",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#obFeatsOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "obFeatsOn",
          "normalized": "FeatGen a b c-\u003eXs a b-\u003eInt-\u003eLbIx-\u003e[c]",
          "package": "crf-chain2-generic",
          "partial": "Feats On",
          "signature": "FeatGen o t f-\u003eXs o t-\u003eInt-\u003eLbIx-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:obFeatsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "onTransition",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e Xs o t -\u003e Int -\u003e LbIx -\u003e LbIx -\u003e LbIx -\u003e LogFloat",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#onTransition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "onTransition",
          "normalized": "Model a b c d-\u003eXs b c-\u003eInt-\u003eLbIx-\u003eLbIx-\u003eLbIx-\u003eLogFloat",
          "package": "crf-chain2-generic",
          "partial": "Transition",
          "signature": "Model m o t f-\u003eXs o t-\u003eInt-\u003eLbIx-\u003eLbIx-\u003eLbIx-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:onTransition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "onWord",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e Xs o t -\u003e Int -\u003e LbIx -\u003e LogFloat",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#onWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "onWord",
          "normalized": "Model a b c d-\u003eXs b c-\u003eInt-\u003eLbIx-\u003eLogFloat",
          "package": "crf-chain2-generic",
          "partial": "Word",
          "signature": "Model m o t f-\u003eXs o t-\u003eInt-\u003eLbIx-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:onWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePotential assigned to the feature -- exponential of the\n corresonding parameter.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "phi",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f -\u003e f -\u003e LogFloat",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#phi",
          "type": "function"
        },
        "index": {
          "description": "Potential assigned to the feature exponential of the corresonding parameter",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "phi",
          "normalized": "Model a b c d-\u003ed-\u003eLogFloat",
          "package": "crf-chain2-generic",
          "signature": "Model m o t f-\u003ef-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:phi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeatures present in the dataset element together with corresponding\n occurence probabilities.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "presentFeats",
          "package": "crf-chain2-generic",
          "signature": "FeatGen o t f -\u003e Xs o t -\u003e Ys t -\u003e [(f, LogFloat)]",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#presentFeats",
          "type": "function"
        },
        "index": {
          "description": "Features present in the dataset element together with corresponding occurence probabilities",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "presentFeats",
          "normalized": "FeatGen a b c-\u003eXs a b-\u003eYs b-\u003e[(c,LogFloat)]",
          "package": "crf-chain2-generic",
          "partial": "Feats",
          "signature": "FeatGen o t f-\u003eXs o t-\u003eYs t-\u003e[(f,LogFloat)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:presentFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehiddenFeats\u003c/a\u003e\u003c/code\u003e adapted to fit feature selection specs.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain2.Generic.Model\",\"Data.CRF.Chain2.Pair\"]",
          "name": "selectHidden",
          "package": "crf-chain2-generic",
          "signature": "FeatSel o t f",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#selectHidden",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:selectHidden\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:selectHidden\"]"
        },
        "index": {
          "description": "The hiddenFeats adapted to fit feature selection specs",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "selectHidden",
          "package": "crf-chain2-generic",
          "partial": "Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:selectHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epresentFeats\u003c/a\u003e\u003c/code\u003e adapted to fit feature selection specs.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain2.Generic.Model\",\"Data.CRF.Chain2.Pair\"]",
          "name": "selectPresent",
          "package": "crf-chain2-generic",
          "signature": "FeatSel o t f",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#selectPresent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:selectPresent\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:selectPresent\"]"
        },
        "index": {
          "description": "The presentFeats adapted to fit feature selection specs",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "selectPresent",
          "package": "crf-chain2-generic",
          "partial": "Present",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:selectPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "trFeats1",
          "package": "crf-chain2-generic",
          "signature": "t -\u003e [f]",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#FeatGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "trFeats1",
          "normalized": "a-\u003e[b]",
          "package": "crf-chain2-generic",
          "partial": "Feats",
          "signature": "t-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:trFeats1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "trFeats2",
          "package": "crf-chain2-generic",
          "signature": "t -\u003e t -\u003e [f]",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#FeatGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "trFeats2",
          "normalized": "a-\u003ea-\u003e[b]",
          "package": "crf-chain2-generic",
          "partial": "Feats",
          "signature": "t-\u003et-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:trFeats2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "trFeats3",
          "package": "crf-chain2-generic",
          "signature": "t -\u003e t -\u003e t -\u003e [f]",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#FeatGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "trFeats3",
          "normalized": "a-\u003ea-\u003ea-\u003e[b]",
          "package": "crf-chain2-generic",
          "partial": "Feats",
          "signature": "t-\u003et-\u003et-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:trFeats3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "trFeatsOn",
          "package": "crf-chain2-generic",
          "signature": "FeatGen o t f -\u003e Xs o t -\u003e Int -\u003e LbIx -\u003e LbIx -\u003e LbIx -\u003e [f]",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#trFeatsOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "trFeatsOn",
          "normalized": "FeatGen a b c-\u003eXs a b-\u003eInt-\u003eLbIx-\u003eLbIx-\u003eLbIx-\u003e[c]",
          "package": "crf-chain2-generic",
          "partial": "Feats On",
          "signature": "FeatGen o t f-\u003eXs o t-\u003eInt-\u003eLbIx-\u003eLbIx-\u003eLbIx-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:trFeatsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "values",
          "package": "crf-chain2-generic",
          "signature": "Vector Double",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "values",
          "package": "crf-chain2-generic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "valuesC",
          "package": "crf-chain2-generic",
          "signature": "Vector Double",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#Core",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "valuesC",
          "package": "crf-chain2-generic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:valuesC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct model with the given core and feature generation function.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "withCore",
          "package": "crf-chain2-generic",
          "signature": "Core m f -\u003e FeatGen o t f -\u003e Model m o t f",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#withCore",
          "type": "function"
        },
        "index": {
          "description": "Construct model with the given core and feature generation function",
          "hierarchy": "Data CRF Chain2 Generic Model",
          "module": "Data.CRF.Chain2.Generic.Model",
          "name": "withCore",
          "normalized": "Core a b-\u003eFeatGen c d b-\u003eModel a c d b",
          "package": "crf-chain2-generic",
          "partial": "Core",
          "signature": "Core m f-\u003eFeatGen o t f-\u003eModel m o t f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Model.html#v:withCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "Train",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Train.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Train",
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "Train",
          "package": "crf-chain2-generic",
          "partial": "Train",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Train.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec specification.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "CodecSpec",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Train.html#CodecSpec",
          "type": "data"
        },
        "index": {
          "description": "codec specification",
          "hierarchy": "Data CRF Chain2 Generic Train",
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "CodecSpec",
          "package": "crf-chain2-generic",
          "partial": "Codec Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Train.html#t:CodecSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "CodecSpec",
          "package": "crf-chain2-generic",
          "signature": "CodecSpec",
          "source": "src/Data-CRF-Chain2-Generic-Train.html#CodecSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Train",
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "CodecSpec",
          "package": "crf-chain2-generic",
          "partial": "Codec Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Train.html#v:CodecSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "encode",
          "package": "crf-chain2-generic",
          "signature": "c -\u003e [SentL a b] -\u003e [(Xs o t, Ys t)]",
          "source": "src/Data-CRF-Chain2-Generic-Train.html#CodecSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Train",
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "encode",
          "normalized": "a-\u003e[SentL b c]-\u003e[(Xs d e,Ys e)]",
          "package": "crf-chain2-generic",
          "signature": "c-\u003e[SentL a b]-\u003e[(Xs o t,Ys t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Train.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "mkCodec",
          "package": "crf-chain2-generic",
          "signature": "[SentL a b] -\u003e (c, [(Xs o t, Ys t)])",
          "source": "src/Data-CRF-Chain2-Generic-Train.html#CodecSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Generic Train",
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "mkCodec",
          "normalized": "[SentL a b]-\u003e(c,[(Xs d e,Ys e)])",
          "package": "crf-chain2-generic",
          "partial": "Codec",
          "signature": "[SentL a b]-\u003e(c,[(Xs o t,Ys t)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Train.html#v:mkCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the CRF using the stochastic gradient descent method.\n When the evaluation data \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, the iterative\n training process will notify the user about the current accuracy\n on the evaluation part every full iteration over the training part.\n TODO: Add custom feature extraction function.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "train",
          "package": "crf-chain2-generic",
          "signature": "SgdArgs-\u003e CodecSpec a b c o t-\u003e FeatGen o t f-\u003e FeatSel o t f-\u003e IO [SentL a b]-\u003e Maybe (IO [SentL a b])-\u003e IO (c, Model m o t f)",
          "type": "function"
        },
        "index": {
          "description": "Train the CRF using the stochastic gradient descent method When the evaluation data IO action is Just the iterative training process will notify the user about the current accuracy on the evaluation part every full iteration over the training part TODO Add custom feature extraction function",
          "hierarchy": "Data CRF Chain2 Generic Train",
          "module": "Data.CRF.Chain2.Generic.Train",
          "name": "train",
          "normalized": "SgdArgs-\u003eCodecSpec a b c d e-\u003eFeatGen d e f-\u003eFeatSel d e f-\u003eIO[SentL a b]-\u003eMaybe(IO[SentL a b])-\u003eIO(c,Model g d e f)",
          "package": "crf-chain2-generic",
          "signature": "SgdArgs-\u003eCodecSpec a b c o t-\u003eFeatGen o t f-\u003eFeatSel o t f-\u003eIO[SentL a b]-\u003eMaybe(IO[SentL a b])-\u003eIO(c,Model m o t f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Generic-Train.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Base",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Base",
          "package": "crf-chain2-generic",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Feat",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Feat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Feat",
          "package": "crf-chain2-generic",
          "partial": "Feat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#t:Feat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Lb",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Lb",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Lb",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#t:Lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Lb1",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Lb1",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Lb1",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#t:Lb1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Lb2",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Lb2",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Lb2",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#t:Lb2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Ob",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Ob",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Ob",
          "package": "crf-chain2-generic",
          "partial": "Ob",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#t:Ob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "Lb1",
          "package": "crf-chain2-generic",
          "signature": "Lb1",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Lb1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:Lb1\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:Lb1\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Lb1",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:Lb1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "Lb2",
          "package": "crf-chain2-generic",
          "signature": "Lb2",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Lb2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:Lb2\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:Lb2\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Lb2",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:Lb2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "OFeat'1",
          "package": "crf-chain2-generic",
          "signature": "OFeat'1 !Ob !Lb1",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Feat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:OFeat-39-1\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:OFeat-39-1\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "OFeat'1",
          "package": "crf-chain2-generic",
          "partial": "OFeat'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:OFeat-39-1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "OFeat'2",
          "package": "crf-chain2-generic",
          "signature": "OFeat'2 !Ob !Lb2",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Feat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:OFeat-39-2\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:OFeat-39-2\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "OFeat'2",
          "package": "crf-chain2-generic",
          "partial": "OFeat'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:OFeat-39-2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "Ob",
          "package": "crf-chain2-generic",
          "signature": "Ob",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Ob",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:Ob\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:Ob\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "Ob",
          "package": "crf-chain2-generic",
          "partial": "Ob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:Ob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "TFeat1'1",
          "package": "crf-chain2-generic",
          "signature": "TFeat1'1 !Lb1",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Feat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat1-39-1\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:TFeat1-39-1\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "TFeat1'1",
          "package": "crf-chain2-generic",
          "partial": "TFeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat1-39-1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "TFeat1'2",
          "package": "crf-chain2-generic",
          "signature": "TFeat1'2 !Lb2",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Feat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat1-39-2\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:TFeat1-39-2\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "TFeat1'2",
          "package": "crf-chain2-generic",
          "partial": "TFeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat1-39-2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "TFeat2'1",
          "package": "crf-chain2-generic",
          "signature": "TFeat2'1 !Lb1 !Lb1",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Feat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat2-39-1\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:TFeat2-39-1\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "TFeat2'1",
          "package": "crf-chain2-generic",
          "partial": "TFeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat2-39-1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "TFeat2'2",
          "package": "crf-chain2-generic",
          "signature": "TFeat2'2 !Lb2 !Lb2",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Feat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat2-39-2\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:TFeat2-39-2\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "TFeat2'2",
          "package": "crf-chain2-generic",
          "partial": "TFeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat2-39-2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "TFeat3'1",
          "package": "crf-chain2-generic",
          "signature": "TFeat3'1 !Lb1 !Lb1 !Lb1",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Feat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat3-39-1\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:TFeat3-39-1\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "TFeat3'1",
          "package": "crf-chain2-generic",
          "partial": "TFeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat3-39-1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "TFeat3'2",
          "package": "crf-chain2-generic",
          "signature": "TFeat3'2 !Lb2 !Lb2 !Lb2",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Feat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat3-39-2\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:TFeat3-39-2\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "TFeat3'2",
          "package": "crf-chain2-generic",
          "partial": "TFeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:TFeat3-39-2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "featGen",
          "package": "crf-chain2-generic",
          "signature": "FeatGen Ob (Lb1, Lb2) Feat",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#featGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "featGen",
          "normalized": "FeatGen Ob(Lb,Lb)Feat",
          "package": "crf-chain2-generic",
          "partial": "Gen",
          "signature": "FeatGen Ob(Lb,Lb)Feat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:featGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "unLb1",
          "package": "crf-chain2-generic",
          "signature": "Int",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Lb1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:unLb1\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:unLb1\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "unLb1",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:unLb1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "unLb2",
          "package": "crf-chain2-generic",
          "signature": "Int",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Lb2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:unLb2\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:unLb2\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "unLb2",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:unLb2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain2.Pair.Base\",\"Data.CRF.Chain2.Pair\"]",
          "name": "unOb",
          "package": "crf-chain2-generic",
          "signature": "Int",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Ob",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:unOb\",\"http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:unOb\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Base",
          "module": "Data.CRF.Chain2.Pair.Base",
          "name": "unOb",
          "package": "crf-chain2-generic",
          "partial": "Ob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Base.html#v:unOb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "Codec",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Codec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Codec",
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "Codec",
          "package": "crf-chain2-generic",
          "partial": "Codec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Codec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec.  The first component is used to encode observations\n of type a, the second one is used to encode labels of type b,\n third -- labels of type c from the third level.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "CodecData",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Codec.html#CodecData",
          "type": "type"
        },
        "index": {
          "description": "codec The first component is used to encode observations of type the second one is used to encode labels of type third labels of type from the third level",
          "hierarchy": "Data CRF Chain2 Pair Codec",
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "CodecData",
          "package": "crf-chain2-generic",
          "partial": "Codec Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Codec.html#t:CodecData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "codec",
          "package": "crf-chain2-generic",
          "signature": "Codec a (b, c) (CodecData a b c) Ob Lb",
          "source": "src/Data-CRF-Chain2-Pair-Codec.html#codec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair Codec",
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "codec",
          "normalized": "Codec a(b,c)(CodecData a b c)Ob Lb",
          "package": "crf-chain2-generic",
          "signature": "Codec a(b,c)(CodecData a b c)Ob Lb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Codec.html#v:codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum internal label included in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "lb1Max",
          "package": "crf-chain2-generic",
          "signature": "CodecData a b c -\u003e Lb1",
          "source": "src/Data-CRF-Chain2-Pair-Codec.html#lb1Max",
          "type": "function"
        },
        "index": {
          "description": "The maximum internal label included in the codec",
          "hierarchy": "Data CRF Chain2 Pair Codec",
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "lb1Max",
          "normalized": "CodecData a b c-\u003eLb",
          "package": "crf-chain2-generic",
          "partial": "Max",
          "signature": "CodecData a b c-\u003eLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Codec.html#v:lb1Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum internal label included in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "lb2Max",
          "package": "crf-chain2-generic",
          "signature": "CodecData a b c -\u003e Lb2",
          "source": "src/Data-CRF-Chain2-Pair-Codec.html#lb2Max",
          "type": "function"
        },
        "index": {
          "description": "The maximum internal label included in the codec",
          "hierarchy": "Data CRF Chain2 Pair Codec",
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "lb2Max",
          "normalized": "CodecData a b c-\u003eLb",
          "package": "crf-chain2-generic",
          "partial": "Max",
          "signature": "CodecData a b c-\u003eLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Codec.html#v:lb2Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum internal observation included in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "obMax",
          "package": "crf-chain2-generic",
          "signature": "CodecData a b c -\u003e Ob",
          "source": "src/Data-CRF-Chain2-Pair-Codec.html#obMax",
          "type": "function"
        },
        "index": {
          "description": "The maximum internal observation included in the codec",
          "hierarchy": "Data CRF Chain2 Pair Codec",
          "module": "Data.CRF.Chain2.Pair.Codec",
          "name": "obMax",
          "normalized": "CodecData a b c-\u003eOb",
          "package": "crf-chain2-generic",
          "partial": "Max",
          "signature": "CodecData a b c-\u003eOb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-Codec.html#v:obMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-FeatMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair FeatMap",
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "partial": "Feat Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-FeatMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-FeatMap.html#FeatMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair FeatMap",
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "partial": "Feat Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-FeatMap.html#t:FeatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "signature": "FeatMap",
          "source": "src/Data-CRF-Chain2-Pair-FeatMap.html#FeatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair FeatMap",
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "FeatMap",
          "package": "crf-chain2-generic",
          "partial": "Feat Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-FeatMap.html#v:FeatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "otherMap",
          "package": "crf-chain2-generic",
          "signature": "Map Feat FeatIx",
          "source": "src/Data-CRF-Chain2-Pair-FeatMap.html#FeatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair FeatMap",
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "otherMap",
          "package": "crf-chain2-generic",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-FeatMap.html#v:otherMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "trMap3'1",
          "package": "crf-chain2-generic",
          "signature": "UArray (Lb1, Lb1, Lb1) FeatIx",
          "source": "src/Data-CRF-Chain2-Pair-FeatMap.html#FeatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair FeatMap",
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "trMap3'1",
          "normalized": "UArray(Lb,Lb,Lb)FeatIx",
          "package": "crf-chain2-generic",
          "partial": "Map",
          "signature": "UArray(Lb,Lb,Lb)FeatIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-FeatMap.html#v:trMap3-39-1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "trMap3'2",
          "package": "crf-chain2-generic",
          "signature": "UArray (Lb2, Lb2, Lb2) FeatIx",
          "source": "src/Data-CRF-Chain2-Pair-FeatMap.html#FeatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair FeatMap",
          "module": "Data.CRF.Chain2.Pair.FeatMap",
          "name": "trMap3'2",
          "normalized": "UArray(Lb,Lb,Lb)FeatIx",
          "package": "crf-chain2-generic",
          "partial": "Map",
          "signature": "UArray(Lb,Lb,Lb)FeatIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair-FeatMap.html#v:trMap3-39-2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair",
          "name": "Pair",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Pair",
          "package": "crf-chain2-generic",
          "partial": "Pair",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair",
          "name": "CRF",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair.html#CRF",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "CRF",
          "package": "crf-chain2-generic",
          "partial": "CRF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:CRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA probability distribution defined over elements of type a.\n All elements not included in the map have probability equal\n to 0.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Dist",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html#Dist",
          "type": "data"
        },
        "index": {
          "description": "probability distribution defined over elements of type All elements not included in the map have probability equal to",
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Dist",
          "package": "crf-chain2-generic",
          "partial": "Dist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair",
          "name": "Feat",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Feat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Feat",
          "package": "crf-chain2-generic",
          "partial": "Feat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:Feat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA feature selection function type.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair",
          "name": "FeatSel",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-Model.html#FeatSel",
          "type": "type"
        },
        "index": {
          "description": "feature selection function type",
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "FeatSel",
          "package": "crf-chain2-generic",
          "partial": "Feat Sel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:FeatSel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair",
          "name": "Lb",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Lb",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Lb",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:Lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair",
          "name": "Lb1",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Lb1",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Lb1",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:Lb1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair",
          "name": "Lb2",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Lb2",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Lb2",
          "package": "crf-chain2-generic",
          "partial": "Lb",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:Lb2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair",
          "name": "Ob",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Pair-Base.html#Ob",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Ob",
          "package": "crf-chain2-generic",
          "partial": "Ob",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:Ob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Sent",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html#Sent",
          "type": "type"
        },
        "index": {
          "description": "sentence of words",
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Sent",
          "package": "crf-chain2-generic",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:Sent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of labeled words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair",
          "name": "SentL",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html#SentL",
          "type": "type"
        },
        "index": {
          "description": "sentence of labeled words",
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "SentL",
          "package": "crf-chain2-generic",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:SentL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word consists of a set of observations and a set of potential labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Word",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html#Word",
          "type": "data"
        },
        "index": {
          "description": "word consists of set of observations and set of potential labels",
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "Word",
          "package": "crf-chain2-generic",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA WordL is a labeled word, i.e. a word with probability distribution\n defined over labels.  We assume that every label from the distribution\n domain is a member of the set of potential labels corresponding to the\n word.  TODO: Ensure the assumption using the smart constructor.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair",
          "name": "WordL",
          "package": "crf-chain2-generic",
          "source": "src/Data-CRF-Chain2-Generic-External.html#WordL",
          "type": "type"
        },
        "index": {
          "description": "WordL is labeled word i.e word with probability distribution defined over labels We assume that every label from the distribution domain is member of the set of potential labels corresponding to the word TODO Ensure the assumption using the smart constructor",
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "WordL",
          "package": "crf-chain2-generic",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#t:WordL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair",
          "name": "CRF",
          "package": "crf-chain2-generic",
          "signature": "CRF",
          "source": "src/Data-CRF-Chain2-Pair.html#CRF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "CRF",
          "package": "crf-chain2-generic",
          "partial": "CRF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:CRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair",
          "name": "codecData",
          "package": "crf-chain2-generic",
          "signature": "CodecData a b c",
          "source": "src/Data-CRF-Chain2-Pair.html#CRF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "codecData",
          "package": "crf-chain2-generic",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:codecData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain2.Pair",
          "name": "model",
          "package": "crf-chain2-generic",
          "signature": "Model FeatMap Ob Lb Feat",
          "source": "src/Data-CRF-Chain2-Pair.html#CRF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "model",
          "package": "crf-chain2-generic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the most probable label sequence.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair",
          "name": "tag",
          "package": "crf-chain2-generic",
          "signature": "CRF a b c -\u003e Sent a (b, c) -\u003e [(b, c)]",
          "source": "src/Data-CRF-Chain2-Pair.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Find the most probable label sequence",
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "tag",
          "normalized": "CRF a b c-\u003eSent a(b,c)-\u003e[(b,c)]",
          "package": "crf-chain2-generic",
          "signature": "CRF a b c-\u003eSent a(b,c)-\u003e[(b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the CRF using the stochastic gradient descent method.\n When the evaluation data \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, the iterative\n training process will notify the user about the current accuracy\n on the evaluation part every full iteration over the training part.\n Use the provided feature selection function to determine model\n features.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain2.Pair",
          "name": "train",
          "package": "crf-chain2-generic",
          "signature": "SgdArgs-\u003e FeatSel Ob Lb Feat-\u003e IO [SentL a (b, c)]-\u003e Maybe (IO [SentL a (b, c)])-\u003e IO (CRF a b c)",
          "type": "function"
        },
        "index": {
          "description": "Train the CRF using the stochastic gradient descent method When the evaluation data IO action is Just the iterative training process will notify the user about the current accuracy on the evaluation part every full iteration over the training part Use the provided feature selection function to determine model features",
          "hierarchy": "Data CRF Chain2 Pair",
          "module": "Data.CRF.Chain2.Pair",
          "name": "train",
          "normalized": "SgdArgs-\u003eFeatSel Ob Lb Feat-\u003eIO[SentL a(b,c)]-\u003eMaybe(IO[SentL a(b,c)])-\u003eIO(CRF a b c)",
          "package": "crf-chain2-generic",
          "signature": "SgdArgs-\u003eFeatSel Ob Lb Feat-\u003eIO[SentL a(b,c)]-\u003eMaybe(IO[SentL a(b,c)])-\u003eIO(CRF a b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain2-generic/docs/Data-CRF-Chain2-Pair.html#v:train"
      }
    }
  ]
]