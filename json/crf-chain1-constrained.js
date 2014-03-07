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
        "word": "crf-chain1-constrained"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "Codec",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "Codec",
          "package": "crf-chain1-constrained",
          "partial": "Codec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec.  The first component is used to encode observations\n of type a, the second one is used to encode labels of type b.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "Codec",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#Codec",
          "type": "type"
        },
        "index": {
          "description": "codec The first component is used to encode observations of type the second one is used to encode labels of type",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "Codec",
          "package": "crf-chain1-constrained",
          "partial": "Codec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#t:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for the codec monad.  It is important to notice that by a\n codec we denote here a structure of two \u003ccode\u003e\u003ca\u003eAtomCodec\u003c/a\u003e\u003c/code\u003es while in the\n monad-codec package it denotes a monad.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "CodecM",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#CodecM",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for the codec monad It is important to notice that by codec we denote here structure of two AtomCodec while in the monad-codec package it denotes monad",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "CodecM",
          "package": "crf-chain1-constrained",
          "partial": "Codec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#t:CodecM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the label.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "decodeLabel",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e Lb -\u003e Maybe b",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#decodeLabel",
          "type": "function"
        },
        "index": {
          "description": "Decode the label",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "decodeLabel",
          "normalized": "Codec a b-\u003eLb-\u003eMaybe b",
          "package": "crf-chain1-constrained",
          "partial": "Label",
          "signature": "Codec a b-\u003eLb-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:decodeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the sequence of labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "decodeLabels",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e [Lb] -\u003e [Maybe b]",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#decodeLabels",
          "type": "function"
        },
        "index": {
          "description": "Decode the sequence of labels",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "decodeLabels",
          "normalized": "Codec a b-\u003e[Lb]-\u003e[Maybe b]",
          "package": "crf-chain1-constrained",
          "partial": "Labels",
          "signature": "Codec a b-\u003e[Lb]-\u003e[Maybe b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:decodeLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the dataset with the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeData",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e [Sent a b] -\u003e [Xs]",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeData",
          "type": "function"
        },
        "index": {
          "description": "Encode the dataset with the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeData",
          "normalized": "Codec a b-\u003e[Sent a b]-\u003e[Xs]",
          "package": "crf-chain1-constrained",
          "partial": "Data",
          "signature": "Codec a b-\u003e[Sent a b]-\u003e[Xs]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled dataset using the codec.  Substitute the default\n label for any label not present in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeDataL",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e [SentL a b] -\u003e [(Xs, Ys)]",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeDataL",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled dataset using the codec Substitute the default label for any label not present in the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeDataL",
          "normalized": "Codec a b-\u003e[SentL a b]-\u003e[(Xs,Ys)]",
          "package": "crf-chain1-constrained",
          "partial": "Data",
          "signature": "Codec a b-\u003e[SentL a b]-\u003e[(Xs,Ys)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeDataL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode labels into an ascending vector of distinct label codes.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeLabels",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e [b] -\u003e AVec Lb",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeLabels",
          "type": "function"
        },
        "index": {
          "description": "Encode labels into an ascending vector of distinct label codes",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeLabels",
          "normalized": "Codec a b-\u003e[b]-\u003eAVec Lb",
          "package": "crf-chain1-constrained",
          "partial": "Labels",
          "signature": "Codec a b-\u003e[b]-\u003eAVec Lb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the sentence using the given codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSent",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e Sent a b -\u003e Xs",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSent",
          "type": "function"
        },
        "index": {
          "description": "Encode the sentence using the given codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSent",
          "normalized": "Codec a b-\u003eSent a b-\u003eXs",
          "package": "crf-chain1-constrained",
          "partial": "Sent",
          "signature": "Codec a b-\u003eSent a b-\u003eXs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the sentence and do *not* update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSent'Cn",
          "package": "crf-chain1-constrained",
          "signature": "Sent a b -\u003e CodecM a b Xs",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSent%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encode the sentence and do not update the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSent'Cn",
          "normalized": "Sent a b-\u003eCodecM a b Xs",
          "package": "crf-chain1-constrained",
          "partial": "Sent' Cn",
          "signature": "Sent a b-\u003eCodecM a b Xs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSent-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the sentence and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSent'Cu",
          "package": "crf-chain1-constrained",
          "signature": "Sent a b -\u003e CodecM a b Xs",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSent%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the sentence and update the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSent'Cu",
          "normalized": "Sent a b-\u003eCodecM a b Xs",
          "package": "crf-chain1-constrained",
          "partial": "Sent' Cu",
          "signature": "Sent a b-\u003eCodecM a b Xs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSent-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled sentence with the given codec.  Substitute the\n default label for any label not present in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSentL",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e SentL a b -\u003e (Xs, Ys)",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSentL",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled sentence with the given codec Substitute the default label for any label not present in the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSentL",
          "normalized": "Codec a b-\u003eSentL a b-\u003e(Xs,Ys)",
          "package": "crf-chain1-constrained",
          "partial": "Sent",
          "signature": "Codec a b-\u003eSentL a b-\u003e(Xs,Ys)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSentL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled sentence and do *not* update the codec.\n Substitute the default label for any label not present in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSentL'Cn",
          "package": "crf-chain1-constrained",
          "signature": "SentL a b -\u003e CodecM a b (Xs, Ys)",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSentL%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled sentence and do not update the codec Substitute the default label for any label not present in the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSentL'Cn",
          "normalized": "SentL a b-\u003eCodecM a b(Xs,Ys)",
          "package": "crf-chain1-constrained",
          "partial": "Sent L' Cn",
          "signature": "SentL a b-\u003eCodecM a b(Xs,Ys)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSentL-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled sentence and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSentL'Cu",
          "package": "crf-chain1-constrained",
          "signature": "SentL a b -\u003e CodecM a b (Xs, Ys)",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSentL%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled sentence and update the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeSentL'Cu",
          "normalized": "SentL a b-\u003eCodecM a b(Xs,Ys)",
          "package": "crf-chain1-constrained",
          "partial": "Sent L' Cu",
          "signature": "SentL a b-\u003eCodecM a b(Xs,Ys)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSentL-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the word and do *not* update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeWord'Cn",
          "package": "crf-chain1-constrained",
          "signature": "Word a b -\u003e CodecM a b X",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeWord%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encode the word and do not update the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeWord'Cn",
          "normalized": "Word a b-\u003eCodecM a b X",
          "package": "crf-chain1-constrained",
          "partial": "Word' Cn",
          "signature": "Word a b-\u003eCodecM a b X",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeWord-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the word and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeWord'Cu",
          "package": "crf-chain1-constrained",
          "signature": "Word a b -\u003e CodecM a b X",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeWord%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the word and update the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeWord'Cu",
          "normalized": "Word a b-\u003eCodecM a b X",
          "package": "crf-chain1-constrained",
          "partial": "Word' Cu",
          "signature": "Word a b-\u003eCodecM a b X",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeWord-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodec the labeled word and do *not* update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeWordL'Cn",
          "package": "crf-chain1-constrained",
          "signature": "WordL a b -\u003e CodecM a b (X, Y)",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeWordL%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encodec the labeled word and do not update the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeWordL'Cn",
          "normalized": "WordL a b-\u003eCodecM a b(X,Y)",
          "package": "crf-chain1-constrained",
          "partial": "Word L' Cn",
          "signature": "WordL a b-\u003eCodecM a b(X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeWordL-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled word and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeWordL'Cu",
          "package": "crf-chain1-constrained",
          "signature": "WordL a b -\u003e CodecM a b (X, Y)",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeWordL%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled word and update the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "encodeWordL'Cu",
          "normalized": "WordL a b-\u003eCodecM a b(X,Y)",
          "package": "crf-chain1-constrained",
          "partial": "Word L' Cu",
          "signature": "WordL a b-\u003eCodecM a b(X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeWordL-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum internal label included in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "lbMax",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e Lb",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#lbMax",
          "type": "function"
        },
        "index": {
          "description": "The maximum internal label included in the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "lbMax",
          "normalized": "Codec a b-\u003eLb",
          "package": "crf-chain1-constrained",
          "partial": "Max",
          "signature": "Codec a b-\u003eLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:lbMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate codec on the basis of the labeled dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "mkCodec",
          "package": "crf-chain1-constrained",
          "signature": "[SentL a b] -\u003e Codec a b",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#mkCodec",
          "type": "function"
        },
        "index": {
          "description": "Create codec on the basis of the labeled dataset",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "mkCodec",
          "normalized": "[SentL a b]-\u003eCodec a b",
          "package": "crf-chain1-constrained",
          "partial": "Codec",
          "signature": "[SentL a b]-\u003eCodec a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:mkCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum internal observation included in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "obMax",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e Ob",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#obMax",
          "type": "function"
        },
        "index": {
          "description": "The maximum internal observation included in the codec",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "obMax",
          "normalized": "Codec a b-\u003eOb",
          "package": "crf-chain1-constrained",
          "partial": "Max",
          "signature": "Codec a b-\u003eOb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:obMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the label when \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e or one of the unknown values\n when \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "unJust",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e Word a b -\u003e Maybe b -\u003e b",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#unJust",
          "type": "function"
        },
        "index": {
          "description": "Return the label when Just or one of the unknown values when Nothing",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "unJust",
          "normalized": "Codec a b-\u003eWord a b-\u003eMaybe b-\u003eb",
          "package": "crf-chain1-constrained",
          "partial": "Just",
          "signature": "Codec a b-\u003eWord a b-\u003eMaybe b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:unJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e labels with all unknown labels from\n the set of potential interpretations.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "unJusts",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b -\u003e Word a b -\u003e [Maybe b] -\u003e [b]",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#unJusts",
          "type": "function"
        },
        "index": {
          "description": "Replace Nothing labels with all unknown labels from the set of potential interpretations",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
          "name": "unJusts",
          "normalized": "Codec a b-\u003eWord a b-\u003e[Maybe b]-\u003e[b]",
          "package": "crf-chain1-constrained",
          "partial": "Justs",
          "signature": "Codec a b-\u003eWord a b-\u003e[Maybe b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:unJusts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "External",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "External",
          "package": "crf-chain1-constrained",
          "partial": "External",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA probability distribution defined over elements of type a.\n All elements not included in the map have probability equal\n to 0.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "Prob",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Prob",
          "type": "data"
        },
        "index": {
          "description": "probability distribution defined over elements of type All elements not included in the map have probability equal to",
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "Prob",
          "package": "crf-chain1-constrained",
          "partial": "Prob",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#t:Prob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "Sent",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Sent",
          "type": "type"
        },
        "index": {
          "description": "sentence of words",
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "Sent",
          "package": "crf-chain1-constrained",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#t:Sent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of labeled words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "SentL",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#SentL",
          "type": "type"
        },
        "index": {
          "description": "sentence of labeled words",
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "SentL",
          "package": "crf-chain1-constrained",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#t:SentL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Word is represented by a set of observations\n and a set of potential interpretation labels.\n When the set of potential labels is empty the word\n is considered to be unknown and the default potential\n set is used in its place.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "Word",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
          "type": "data"
        },
        "index": {
          "description": "Word is represented by set of observations and set of potential interpretation labels When the set of potential labels is empty the word is considered to be unknown and the default potential set is used in its place",
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "Word",
          "package": "crf-chain1-constrained",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA WordL is a labeled word, i.e. a word with probability distribution\n defined over labels.  We assume that every label from the distribution\n domain is a member of the set of potential labels corresponding to the\n word.  Use the \u003ccode\u003e\u003ca\u003emkWordL\u003c/a\u003e\u003c/code\u003e smart constructor to build \u003ccode\u003e\u003ca\u003eWordL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "WordL",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#WordL",
          "type": "data"
        },
        "index": {
          "description": "WordL is labeled word i.e word with probability distribution defined over labels We assume that every label from the distribution domain is member of the set of potential labels corresponding to the word Use the mkWordL smart constructor to build WordL",
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "WordL",
          "package": "crf-chain1-constrained",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#t:WordL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain1.Constrained.Dataset.External\",\"Data.CRF.Chain1.Constrained\"]",
          "name": "Word",
          "package": "crf-chain1-constrained",
          "signature": "Word",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:Word\",\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:Word\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "Word",
          "package": "crf-chain1-constrained",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of potential interpretations.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Constrained.Dataset.External\",\"Data.CRF.Chain1.Constrained\"]",
          "name": "lbs",
          "package": "crf-chain1-constrained",
          "signature": "Set b",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:lbs\",\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:lbs\"]"
        },
        "index": {
          "description": "The set of potential interpretations",
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "lbs",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:lbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the probability distribution.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Constrained.Dataset.External\",\"Data.CRF.Chain1.Constrained\"]",
          "name": "mkProb",
          "package": "crf-chain1-constrained",
          "signature": "[(a, Double)] -\u003e Prob a",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#mkProb",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:mkProb\",\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:mkProb\"]"
        },
        "index": {
          "description": "Construct the probability distribution",
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "mkProb",
          "normalized": "[(a,Double)]-\u003eProb a",
          "package": "crf-chain1-constrained",
          "partial": "Prob",
          "signature": "[(a,Double)]-\u003eProb a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:mkProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure, that every label from the distribution domain is a member\n of the set of potential labels corresponding to the word.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Constrained.Dataset.External\",\"Data.CRF.Chain1.Constrained\"]",
          "name": "mkWordL",
          "package": "crf-chain1-constrained",
          "signature": "Word a b -\u003e Prob b -\u003e WordL a b",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#mkWordL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:mkWordL\",\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:mkWordL\"]"
        },
        "index": {
          "description": "Ensure that every label from the distribution domain is member of the set of potential labels corresponding to the word",
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "mkWordL",
          "normalized": "Word a b-\u003eProb b-\u003eWordL a b",
          "package": "crf-chain1-constrained",
          "partial": "Word",
          "signature": "Word a b-\u003eProb b-\u003eWordL a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:mkWordL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of observations\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Constrained.Dataset.External\",\"Data.CRF.Chain1.Constrained\"]",
          "name": "obs",
          "package": "crf-chain1-constrained",
          "signature": "Set a",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:obs\",\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:obs\"]"
        },
        "index": {
          "description": "The set of observations",
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "obs",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:obs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe word is considered to be unknown when the set of potential\n labels is empty.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Constrained.Dataset.External\",\"Data.CRF.Chain1.Constrained\"]",
          "name": "unknown",
          "package": "crf-chain1-constrained",
          "signature": "Word a b -\u003e Bool",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#unknown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:unknown\",\"http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:unknown\"]"
        },
        "index": {
          "description": "The word is considered to be unknown when the set of potential labels is empty",
          "hierarchy": "Data CRF Chain1 Constrained Dataset External",
          "module": "Data.CRF.Chain1.Constrained.Dataset.External",
          "name": "unknown",
          "normalized": "Word a b-\u003eBool",
          "package": "crf-chain1-constrained",
          "signature": "Word a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Internal",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Internal",
          "package": "crf-chain1-constrained",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAscending vector of unique interger elements.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "AVec",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#AVec",
          "type": "data"
        },
        "index": {
          "description": "Ascending vector of unique interger elements",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "AVec",
          "package": "crf-chain1-constrained",
          "partial": "AVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:AVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA label.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Lb",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Lb",
          "type": "newtype"
        },
        "index": {
          "description": "label",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Lb",
          "package": "crf-chain1-constrained",
          "partial": "Lb",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:Lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn observation.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Ob",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Ob",
          "type": "newtype"
        },
        "index": {
          "description": "An observation",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Ob",
          "package": "crf-chain1-constrained",
          "partial": "Ob",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:Ob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word represented by a list of its observations\n and a list of its potential label interpretations.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "X",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#X",
          "type": "data"
        },
        "index": {
          "description": "word represented by list of its observations and list of its potential label interpretations",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "X",
          "package": "crf-chain1-constrained",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSentence of words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Xs",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Xs",
          "type": "type"
        },
        "index": {
          "description": "Sentence of words",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Xs",
          "package": "crf-chain1-constrained",
          "partial": "Xs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:Xs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability distribution over labels.  We assume, that when y is\n a member of chosen labels list it is also a member of the list\n potential labels for corresponding \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e word.\n TODO: Perhaps we should substitute \u003ccode\u003e\u003ca\u003eLb\u003c/a\u003e\u003c/code\u003es with label indices\n corresponding to labels from the vector of potential labels?\n FIXME: The type definition is incorrect (see \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e definition),\n it should be something like AVec2.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Y",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Y",
          "type": "newtype"
        },
        "index": {
          "description": "Probability distribution over labels We assume that when is member of chosen labels list it is also member of the list potential labels for corresponding word TODO Perhaps we should substitute Lb with label indices corresponding to labels from the vector of potential labels FIXME The type definition is incorrect see fromList definition it should be something like AVec2",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Y",
          "package": "crf-chain1-constrained",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSentence of Y (label choices).\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Ys",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Ys",
          "type": "type"
        },
        "index": {
          "description": "Sentence of label choices",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Ys",
          "package": "crf-chain1-constrained",
          "partial": "Ys",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:Ys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Lb",
          "package": "crf-chain1-constrained",
          "signature": "Lb",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Lb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Lb",
          "package": "crf-chain1-constrained",
          "partial": "Lb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:Lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Ob",
          "package": "crf-chain1-constrained",
          "signature": "Ob",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Ob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Ob",
          "package": "crf-chain1-constrained",
          "partial": "Ob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:Ob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe word with custom set of potential labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "R",
          "package": "crf-chain1-constrained",
          "signature": "R",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#X",
          "type": "function"
        },
        "index": {
          "description": "The word with custom set of potential labels",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "R",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe word with default set of potential interpretations.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "X",
          "package": "crf-chain1-constrained",
          "signature": "X",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#X",
          "type": "function"
        },
        "index": {
          "description": "The word with default set of potential interpretations",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "X",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Y",
          "package": "crf-chain1-constrained",
          "signature": "Y",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Y",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "Y",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "_unR",
          "package": "crf-chain1-constrained",
          "signature": "AVec Lb",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#X",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "_unR",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:_unR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "_unX",
          "package": "crf-chain1-constrained",
          "signature": "AVec Ob",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#X",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "_unX",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:_unX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "_unY",
          "package": "crf-chain1-constrained",
          "signature": "AVec (Lb, Double)",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Y",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "_unY",
          "normalized": "AVec(Lb,Double)",
          "package": "crf-chain1-constrained",
          "signature": "AVec(Lb,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:_unY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart AVec constructor which ensures that the\n underlying vector satisfies the AVec properties.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "fromList",
          "package": "crf-chain1-constrained",
          "signature": "[a] -\u003e AVec a",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Smart AVec constructor which ensures that the underlying vector satisfies the AVec properties",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "fromList",
          "normalized": "[a]-\u003eAVec a",
          "package": "crf-chain1-constrained",
          "partial": "List",
          "signature": "[a]-\u003eAVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart AVec constructor which ensures that the\n underlying vector satisfies the AVec properties.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "fromSet",
          "package": "crf-chain1-constrained",
          "signature": "Set a -\u003e AVec a",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#fromSet",
          "type": "function"
        },
        "index": {
          "description": "Smart AVec constructor which ensures that the underlying vector satisfies the AVec properties",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "fromSet",
          "normalized": "Set a-\u003eAVec a",
          "package": "crf-chain1-constrained",
          "partial": "Set",
          "signature": "Set a-\u003eAVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:fromSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX constructor.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "mkX",
          "package": "crf-chain1-constrained",
          "signature": "[Ob] -\u003e [Lb] -\u003e X",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#mkX",
          "type": "function"
        },
        "index": {
          "description": "constructor",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "mkX",
          "normalized": "[Ob]-\u003e[Lb]-\u003eX",
          "package": "crf-chain1-constrained",
          "signature": "[Ob]-\u003e[Lb]-\u003eX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:mkX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eY constructor.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "mkY",
          "package": "crf-chain1-constrained",
          "signature": "[(Lb, Double)] -\u003e Y",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#mkY",
          "type": "function"
        },
        "index": {
          "description": "constructor",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "mkY",
          "normalized": "[(Lb,Double)]-\u003eY",
          "package": "crf-chain1-constrained",
          "signature": "[(Lb,Double)]-\u003eY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:mkY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "unLb",
          "package": "crf-chain1-constrained",
          "signature": "Int",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Lb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "unLb",
          "package": "crf-chain1-constrained",
          "partial": "Lb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:unLb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "unOb",
          "package": "crf-chain1-constrained",
          "signature": "Int",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Ob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "unOb",
          "package": "crf-chain1-constrained",
          "partial": "Ob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:unOb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of potential labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "unR",
          "package": "crf-chain1-constrained",
          "signature": "AVec Lb -\u003e X -\u003e [Lb]",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#unR",
          "type": "function"
        },
        "index": {
          "description": "List of potential labels",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "unR",
          "normalized": "AVec Lb-\u003eX-\u003e[Lb]",
          "package": "crf-chain1-constrained",
          "signature": "AVec Lb-\u003eX-\u003e[Lb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:unR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of observations.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "unX",
          "package": "crf-chain1-constrained",
          "signature": "X -\u003e [Ob]",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#unX",
          "type": "function"
        },
        "index": {
          "description": "List of observations",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "unX",
          "normalized": "X-\u003e[Ob]",
          "package": "crf-chain1-constrained",
          "signature": "X-\u003e[Ob]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:unX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eY deconstructor symetric to mkY.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "unY",
          "package": "crf-chain1-constrained",
          "signature": "Y -\u003e [(Lb, Double)]",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#unY",
          "type": "function"
        },
        "index": {
          "description": "deconstructor symetric to mkY",
          "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
          "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
          "name": "unY",
          "normalized": "Y-\u003e[(Lb,Double)]",
          "package": "crf-chain1-constrained",
          "signature": "Y-\u003e[(Lb,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:unY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides feature selection functions which extract\n hidden features, i.e. all features which can be constructed \n on the basis of observations and potential labels (constraints)\n corresponding to individual words.\n\u003c/p\u003e\u003cp\u003eYou can mix functions defined here with the selection functions\n from the \u003ca\u003eData.CRF.Chain1.Constrained.Feature.Present\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
          "name": "Hidden",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Feature-Hidden.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides feature selection functions which extract hidden features i.e all features which can be constructed on the basis of observations and potential labels constraints corresponding to individual words You can mix functions defined here with the selection functions from the Data.CRF.Chain1.Constrained.Feature.Present module",
          "hierarchy": "Data CRF Chain1 Constrained Feature Hidden",
          "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
          "name": "Hidden",
          "package": "crf-chain1-constrained",
          "partial": "Hidden",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Hidden.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es of all types which can be constructed\n on the basis of the dataset.  The default set of potential\n interpretations is used for all unknown words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
          "name": "hiddenFeats",
          "package": "crf-chain1-constrained",
          "signature": "AVec Lb -\u003e [(Xs, b)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Constrained-Feature-Hidden.html#hiddenFeats",
          "type": "function"
        },
        "index": {
          "description": "Hidden Feature of all types which can be constructed on the basis of the dataset The default set of potential interpretations is used for all unknown words",
          "hierarchy": "Data CRF Chain1 Constrained Feature Hidden",
          "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
          "name": "hiddenFeats",
          "normalized": "AVec Lb-\u003e[(Xs,a)]-\u003e[Feature]",
          "package": "crf-chain1-constrained",
          "partial": "Feats",
          "signature": "AVec Lb-\u003e[(Xs,b)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Hidden.html#v:hiddenFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n The default set of potential interpretations is used for all unknown words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
          "name": "hiddenOFeats",
          "package": "crf-chain1-constrained",
          "signature": "AVec Lb -\u003e [(Xs, b)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Constrained-Feature-Hidden.html#hiddenOFeats",
          "type": "function"
        },
        "index": {
          "description": "Hidden OFeature which can be constructed based on the dataset The default set of potential interpretations is used for all unknown words",
          "hierarchy": "Data CRF Chain1 Constrained Feature Hidden",
          "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
          "name": "hiddenOFeats",
          "normalized": "AVec Lb-\u003e[(Xs,a)]-\u003e[Feature]",
          "package": "crf-chain1-constrained",
          "partial": "OFeats",
          "signature": "AVec Lb-\u003e[(Xs,b)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Hidden.html#v:hiddenOFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n The default set of potential interpretations is used for all unknown words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
          "name": "hiddenSFeats",
          "package": "crf-chain1-constrained",
          "signature": "AVec Lb -\u003e [(Xs, b)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Constrained-Feature-Hidden.html#hiddenSFeats",
          "type": "function"
        },
        "index": {
          "description": "Hidden SFeature which can be constructed based on the dataset The default set of potential interpretations is used for all unknown words",
          "hierarchy": "Data CRF Chain1 Constrained Feature Hidden",
          "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
          "name": "hiddenSFeats",
          "normalized": "AVec Lb-\u003e[(Xs,a)]-\u003e[Feature]",
          "package": "crf-chain1-constrained",
          "partial": "SFeats",
          "signature": "AVec Lb-\u003e[(Xs,b)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Hidden.html#v:hiddenSFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n The default set of potential interpretations is used for all unknown words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
          "name": "hiddenTFeats",
          "package": "crf-chain1-constrained",
          "signature": "AVec Lb -\u003e [(Xs, b)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Constrained-Feature-Hidden.html#hiddenTFeats",
          "type": "function"
        },
        "index": {
          "description": "Hidden TFeature which can be constructed based on the dataset The default set of potential interpretations is used for all unknown words",
          "hierarchy": "Data CRF Chain1 Constrained Feature Hidden",
          "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
          "name": "hiddenTFeats",
          "normalized": "AVec Lb-\u003e[(Xs,a)]-\u003e[Feature]",
          "package": "crf-chain1-constrained",
          "partial": "TFeats",
          "signature": "AVec Lb-\u003e[(Xs,b)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Hidden.html#v:hiddenTFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides feature selection functions which extract\n features present in the dataset, i.e. features which directly occure\n the dataset.\n\u003c/p\u003e\u003cp\u003eYou can mix functions defined here with the selection functions\n from the \u003ca\u003eData.CRF.Chain1.Constrained.Feature.Hidden\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature.Present",
          "name": "Present",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Feature-Present.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides feature selection functions which extract features present in the dataset i.e features which directly occure the dataset You can mix functions defined here with the selection functions from the Data.CRF.Chain1.Constrained.Feature.Hidden module",
          "hierarchy": "Data CRF Chain1 Constrained Feature Present",
          "module": "Data.CRF.Chain1.Constrained.Feature.Present",
          "name": "Present",
          "package": "crf-chain1-constrained",
          "partial": "Present",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Present.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es of all kinds which occur in the dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature.Present",
          "name": "presentFeats",
          "package": "crf-chain1-constrained",
          "signature": "[(Xs, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Constrained-Feature-Present.html#presentFeats",
          "type": "function"
        },
        "index": {
          "description": "Feature of all kinds which occur in the dataset",
          "hierarchy": "Data CRF Chain1 Constrained Feature Present",
          "module": "Data.CRF.Chain1.Constrained.Feature.Present",
          "name": "presentFeats",
          "normalized": "[(Xs,Ys)]-\u003e[Feature]",
          "package": "crf-chain1-constrained",
          "partial": "Feats",
          "signature": "[(Xs,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Present.html#v:presentFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature.Present",
          "name": "presentOFeats",
          "package": "crf-chain1-constrained",
          "signature": "[(Xs, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Constrained-Feature-Present.html#presentOFeats",
          "type": "function"
        },
        "index": {
          "description": "OFeature which occur in the dataset",
          "hierarchy": "Data CRF Chain1 Constrained Feature Present",
          "module": "Data.CRF.Chain1.Constrained.Feature.Present",
          "name": "presentOFeats",
          "normalized": "[(Xs,Ys)]-\u003e[Feature]",
          "package": "crf-chain1-constrained",
          "partial": "OFeats",
          "signature": "[(Xs,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Present.html#v:presentOFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature.Present",
          "name": "presentSFeats",
          "package": "crf-chain1-constrained",
          "signature": "[(a, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Constrained-Feature-Present.html#presentSFeats",
          "type": "function"
        },
        "index": {
          "description": "SFeature which occur in the dataset",
          "hierarchy": "Data CRF Chain1 Constrained Feature Present",
          "module": "Data.CRF.Chain1.Constrained.Feature.Present",
          "name": "presentSFeats",
          "normalized": "[(a,Ys)]-\u003e[Feature]",
          "package": "crf-chain1-constrained",
          "partial": "SFeats",
          "signature": "[(a,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Present.html#v:presentSFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature.Present",
          "name": "presentTFeats",
          "package": "crf-chain1-constrained",
          "signature": "[(a, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Constrained-Feature-Present.html#presentTFeats",
          "type": "function"
        },
        "index": {
          "description": "TFeature which occur in the dataset",
          "hierarchy": "Data CRF Chain1 Constrained Feature Present",
          "module": "Data.CRF.Chain1.Constrained.Feature.Present",
          "name": "presentTFeats",
          "normalized": "[(a,Ys)]-\u003e[Feature]",
          "package": "crf-chain1-constrained",
          "partial": "TFeats",
          "signature": "[(a,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Present.html#v:presentTFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "Feature",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Feature.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Feature",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "Feature",
          "package": "crf-chain1-constrained",
          "partial": "Feature",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Feature is either an observation feature OFeature o x, which\n models relation between observation o and label x assigned to\n the same word, or a transition feature TFeature x y (SFeature x\n for the first position in the sentence), which models relation\n between two subsequent labels, x (on i-th position) and y\n (on (i-1)-th positoin).\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "Feature",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Feature.html#Feature",
          "type": "data"
        },
        "index": {
          "description": "Feature is either an observation feature OFeature which models relation between observation and label assigned to the same word or transition feature TFeature SFeature for the first position in the sentence which models relation between two subsequent labels on i-th position and on i-1 th positoin",
          "hierarchy": "Data CRF Chain1 Constrained Feature",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "Feature",
          "package": "crf-chain1-constrained",
          "partial": "Feature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#t:Feature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "OFeature",
          "package": "crf-chain1-constrained",
          "signature": "OFeature !Ob !Lb",
          "source": "src/Data-CRF-Chain1-Constrained-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Feature",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "OFeature",
          "package": "crf-chain1-constrained",
          "partial": "OFeature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:OFeature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "SFeature",
          "package": "crf-chain1-constrained",
          "signature": "SFeature !Lb",
          "source": "src/Data-CRF-Chain1-Constrained-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Feature",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "SFeature",
          "package": "crf-chain1-constrained",
          "partial": "SFeature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:SFeature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "TFeature",
          "package": "crf-chain1-constrained",
          "signature": "TFeature !Lb !Lb",
          "source": "src/Data-CRF-Chain1-Constrained-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Feature",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "TFeature",
          "package": "crf-chain1-constrained",
          "partial": "TFeature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:TFeature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll features with assigned probabilities in given labeled sentence.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "featuresIn",
          "package": "crf-chain1-constrained",
          "signature": "Xs -\u003e Ys -\u003e [(Feature, LogFloat)]",
          "source": "src/Data-CRF-Chain1-Constrained-Feature.html#featuresIn",
          "type": "function"
        },
        "index": {
          "description": "All features with assigned probabilities in given labeled sentence",
          "hierarchy": "Data CRF Chain1 Constrained Feature",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "featuresIn",
          "normalized": "Xs-\u003eYs-\u003e[(Feature,LogFloat)]",
          "package": "crf-chain1-constrained",
          "partial": "In",
          "signature": "Xs-\u003eYs-\u003e[(Feature,LogFloat)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:featuresIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it an \u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "isOFeat",
          "package": "crf-chain1-constrained",
          "signature": "Feature -\u003e Bool",
          "source": "src/Data-CRF-Chain1-Constrained-Feature.html#isOFeat",
          "type": "function"
        },
        "index": {
          "description": "Is it an OFeature",
          "hierarchy": "Data CRF Chain1 Constrained Feature",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "isOFeat",
          "normalized": "Feature-\u003eBool",
          "package": "crf-chain1-constrained",
          "partial": "OFeat",
          "signature": "Feature-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:isOFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it a \u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "isSFeat",
          "package": "crf-chain1-constrained",
          "signature": "Feature -\u003e Bool",
          "source": "src/Data-CRF-Chain1-Constrained-Feature.html#isSFeat",
          "type": "function"
        },
        "index": {
          "description": "Is it SFeature",
          "hierarchy": "Data CRF Chain1 Constrained Feature",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "isSFeat",
          "normalized": "Feature-\u003eBool",
          "package": "crf-chain1-constrained",
          "partial": "SFeat",
          "signature": "Feature-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:isSFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it a \u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "isTFeat",
          "package": "crf-chain1-constrained",
          "signature": "Feature -\u003e Bool",
          "source": "src/Data-CRF-Chain1-Constrained-Feature.html#isTFeat",
          "type": "function"
        },
        "index": {
          "description": "Is it TFeature",
          "hierarchy": "Data CRF Chain1 Constrained Feature",
          "module": "Data.CRF.Chain1.Constrained.Feature",
          "name": "isTFeat",
          "normalized": "Feature-\u003eBool",
          "package": "crf-chain1-constrained",
          "partial": "TFeat",
          "signature": "Feature-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:isTFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "Inference",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Inference.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Inference",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "Inference",
          "package": "crf-chain1-constrained",
          "partial": "Inference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the accuracy of the model with respect to the labeled dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "accuracy",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e [(Xs, Ys)] -\u003e Double",
          "source": "src/Data-CRF-Chain1-Constrained-Inference.html#accuracy",
          "type": "function"
        },
        "index": {
          "description": "Compute the accuracy of the model with respect to the labeled dataset",
          "hierarchy": "Data CRF Chain1 Constrained Inference",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "accuracy",
          "normalized": "Model-\u003e[(Xs,Ys)]-\u003eDouble",
          "package": "crf-chain1-constrained",
          "signature": "Model-\u003e[(Xs,Ys)]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:accuracy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of features (represented by feature indices) defined within\n the context of the sentence accompanied by expected probabilities\n determined on the basis of the model. \n\u003c/p\u003e\u003cp\u003eOne feature can occur multiple times in the output list.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "expectedFeaturesIn",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Xs -\u003e [(FeatIx, LogFloat)]",
          "source": "src/Data-CRF-Chain1-Constrained-Inference.html#expectedFeaturesIn",
          "type": "function"
        },
        "index": {
          "description": "list of features represented by feature indices defined within the context of the sentence accompanied by expected probabilities determined on the basis of the model One feature can occur multiple times in the output list",
          "hierarchy": "Data CRF Chain1 Constrained Inference",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "expectedFeaturesIn",
          "normalized": "Model-\u003eXs-\u003e[(FeatIx,LogFloat)]",
          "package": "crf-chain1-constrained",
          "partial": "Features In",
          "signature": "Model-\u003eXs-\u003e[(FeatIx,LogFloat)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:expectedFeaturesIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag probabilities with respect to marginal distributions.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "marginals",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Xs -\u003e [[(Lb, LogFloat)]]",
          "source": "src/Data-CRF-Chain1-Constrained-Inference.html#marginals",
          "type": "function"
        },
        "index": {
          "description": "Tag probabilities with respect to marginal distributions",
          "hierarchy": "Data CRF Chain1 Constrained Inference",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "marginals",
          "normalized": "Model-\u003eXs-\u003e[[(Lb,LogFloat)]]",
          "package": "crf-chain1-constrained",
          "signature": "Model-\u003eXs-\u003e[[(Lb,LogFloat)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:marginals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the most probable label sequence (with probabilities of individual\n lables determined with respect to marginal distributions) satisfying the\n constraints imposed over label values.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "tag",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Xs -\u003e [Lb]",
          "source": "src/Data-CRF-Chain1-Constrained-Inference.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Find the most probable label sequence with probabilities of individual lables determined with respect to marginal distributions satisfying the constraints imposed over label values",
          "hierarchy": "Data CRF Chain1 Constrained Inference",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "tag",
          "normalized": "Model-\u003eXs-\u003e[Lb]",
          "package": "crf-chain1-constrained",
          "signature": "Model-\u003eXs-\u003e[Lb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet (at most) k best tags for each word and return them in\n descending order.  TODO: Tagging with respect to marginal\n distributions might not be the best idea.  Think of some\n more elegant method.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "tagK",
          "package": "crf-chain1-constrained",
          "signature": "Int -\u003e Model -\u003e Xs -\u003e [[(Lb, LogFloat)]]",
          "source": "src/Data-CRF-Chain1-Constrained-Inference.html#tagK",
          "type": "function"
        },
        "index": {
          "description": "Get at most best tags for each word and return them in descending order TODO Tagging with respect to marginal distributions might not be the best idea Think of some more elegant method",
          "hierarchy": "Data CRF Chain1 Constrained Inference",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "tagK",
          "normalized": "Int-\u003eModel-\u003eXs-\u003e[[(Lb,LogFloat)]]",
          "package": "crf-chain1-constrained",
          "signature": "Int-\u003eModel-\u003eXs-\u003e[[(Lb,LogFloat)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:tagK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalization factor computed for the \u003ccode\u003e\u003ca\u003eXs\u003c/a\u003e\u003c/code\u003e sentence using the\n backward computation.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "zx",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Xs -\u003e LogFloat",
          "source": "src/Data-CRF-Chain1-Constrained-Inference.html#zx",
          "type": "function"
        },
        "index": {
          "description": "Normalization factor computed for the Xs sentence using the backward computation",
          "hierarchy": "Data CRF Chain1 Constrained Inference",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "zx",
          "normalized": "Model-\u003eXs-\u003eLogFloat",
          "package": "crf-chain1-constrained",
          "signature": "Model-\u003eXs-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:zx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalization factor computed for the \u003ccode\u003e\u003ca\u003eXs\u003c/a\u003e\u003c/code\u003e sentence using the\n forward computation.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "zx'",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Xs -\u003e LogFloat",
          "source": "src/Data-CRF-Chain1-Constrained-Inference.html#zx%27",
          "type": "function"
        },
        "index": {
          "description": "Normalization factor computed for the Xs sentence using the forward computation",
          "hierarchy": "Data CRF Chain1 Constrained Inference",
          "module": "Data.CRF.Chain1.Constrained.Inference",
          "name": "zx'",
          "normalized": "Model-\u003eXs-\u003eLogFloat",
          "package": "crf-chain1-constrained",
          "signature": "Model-\u003eXs-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:zx-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal implementation of the CRF model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "Model",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html",
          "type": "module"
        },
        "index": {
          "description": "Internal implementation of the CRF model",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "Model",
          "package": "crf-chain1-constrained",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA feature index.  To every model feature a unique index is assigned.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "FeatIx",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#FeatIx",
          "type": "newtype"
        },
        "index": {
          "description": "feature index To every model feature unique index is assigned",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "FeatIx",
          "package": "crf-chain1-constrained",
          "partial": "Feat Ix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#t:FeatIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe model is actually a map from features to their respective potentials,\n but for the sake of efficiency the internal representation is more complex.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "Model",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
          "type": "data"
        },
        "index": {
          "description": "The model is actually map from features to their respective potentials but for the sake of efficiency the internal representation is more complex",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "Model",
          "package": "crf-chain1-constrained",
          "partial": "Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "FeatIx",
          "package": "crf-chain1-constrained",
          "signature": "FeatIx",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#FeatIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "FeatIx",
          "package": "crf-chain1-constrained",
          "partial": "Feat Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:FeatIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "Model",
          "package": "crf-chain1-constrained",
          "signature": "Model",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "Model",
          "package": "crf-chain1-constrained",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine index for the given feature.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "featToIx",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Feature -\u003e Maybe FeatIx",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#featToIx",
          "type": "function"
        },
        "index": {
          "description": "Determine index for the given feature",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "featToIx",
          "normalized": "Model-\u003eFeature-\u003eMaybe FeatIx",
          "package": "crf-chain1-constrained",
          "partial": "To Ix",
          "signature": "Model-\u003eFeature-\u003eMaybe FeatIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:featToIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine index for the given feature and return it as an integer.\n Throw error when the feature is not a member of the model.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "featToJustInt",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Feature -\u003e Int",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#featToJustInt",
          "type": "function"
        },
        "index": {
          "description": "Determine index for the given feature and return it as an integer Throw error when the feature is not member of the model",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "featToJustInt",
          "normalized": "Model-\u003eFeature-\u003eInt",
          "package": "crf-chain1-constrained",
          "partial": "To Just Int",
          "signature": "Model-\u003eFeature-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:featToJustInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine index for the given feature.  Throw error when\n the feature is not a member of the model. \n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "featToJustIx",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Feature -\u003e FeatIx",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#featToJustIx",
          "type": "function"
        },
        "index": {
          "description": "Determine index for the given feature Throw error when the feature is not member of the model",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "featToJustIx",
          "normalized": "Model-\u003eFeature-\u003eFeatIx",
          "package": "crf-chain1-constrained",
          "partial": "To Just Ix",
          "signature": "Model-\u003eFeature-\u003eFeatIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:featToJustIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from features to feature indices\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "ixMap",
          "package": "crf-chain1-constrained",
          "signature": "Map Feature FeatIx",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "map from features to feature indices",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "ixMap",
          "package": "crf-chain1-constrained",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:ixMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the model from the list of features.  All parameters will be\n set to 0.  There can be repetitions in the input list.\n We assume that the set of labels is of the {0, 1, .. \u003ccode\u003elbMax\u003c/code\u003e} form and,\n similarly, the set of observations is of the {0, 1, .. \u003ccode\u003eobMax\u003c/code\u003e} form.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "mkModel",
          "package": "crf-chain1-constrained",
          "signature": "Ob -\u003e Lb -\u003e [Feature] -\u003e Model",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#mkModel",
          "type": "function"
        },
        "index": {
          "description": "Construct the model from the list of features All parameters will be set to There can be repetitions in the input list We assume that the set of labels is of the lbMax form and similarly the set of observations is of the obMax form",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "mkModel",
          "normalized": "Ob-\u003eLb-\u003e[Feature]-\u003eModel",
          "package": "crf-chain1-constrained",
          "partial": "Model",
          "signature": "Ob-\u003eLb-\u003e[Feature]-\u003eModel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:mkModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of ,,next'' labels which constitute a valid feature in combination\n with the ,,current'' label accompanied by feature indices determined by\n ,,next'' labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "nextIxs",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Lb -\u003e AVec LbIx",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#nextIxs",
          "type": "function"
        },
        "index": {
          "description": "List of next labels which constitute valid feature in combination with the current label accompanied by feature indices determined by next labels",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "nextIxs",
          "normalized": "Model-\u003eLb-\u003eAVec LbIx",
          "package": "crf-chain1-constrained",
          "partial": "Ixs",
          "signature": "Model-\u003eLb-\u003eAVec LbIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:nextIxs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of ,,next'' labels for the value of the ,,current'' label.\n Both labels constitute a transition feature present in the the model.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "nextIxsV",
          "package": "crf-chain1-constrained",
          "signature": "Vector (AVec LbIx)",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Set of next labels for the value of the current label Both labels constitute transition feature present in the the model",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "nextIxsV",
          "package": "crf-chain1-constrained",
          "partial": "Ixs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:nextIxsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of labels which constitute a valid feature in combination with\n the given observation accompanied by feature indices determined by\n these labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "obIxs",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Ob -\u003e AVec LbIx",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#obIxs",
          "type": "function"
        },
        "index": {
          "description": "List of labels which constitute valid feature in combination with the given observation accompanied by feature indices determined by these labels",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "obIxs",
          "normalized": "Model-\u003eOb-\u003eAVec LbIx",
          "package": "crf-chain1-constrained",
          "partial": "Ixs",
          "signature": "Model-\u003eOb-\u003eAVec LbIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:obIxs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of labels for the given observation which, together with the\n observation, constitute an observation feature of the model. \n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "obIxsV",
          "package": "crf-chain1-constrained",
          "signature": "Vector (AVec LbIx)",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Set of labels for the given observation which together with the observation constitute an observation feature of the model",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "obIxsV",
          "package": "crf-chain1-constrained",
          "partial": "Ixs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:obIxsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of ,,previous'' labels which constitute a valid feature in\n combination with the ,,current'' label accompanied by feature indices\n determined by ,,previous'' labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "prevIxs",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Lb -\u003e AVec LbIx",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#prevIxs",
          "type": "function"
        },
        "index": {
          "description": "List of previous labels which constitute valid feature in combination with the current label accompanied by feature indices determined by previous labels",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "prevIxs",
          "normalized": "Model-\u003eLb-\u003eAVec LbIx",
          "package": "crf-chain1-constrained",
          "partial": "Ixs",
          "signature": "Model-\u003eLb-\u003eAVec LbIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:prevIxs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of ,,previous'' labels for the value of the ,,current'' label.\n Both labels constitute a transition feature present in the the model.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "prevIxsV",
          "package": "crf-chain1-constrained",
          "signature": "Vector (AVec LbIx)",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Set of previous labels for the value of the current label Both labels constitute transition feature present in the the model",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "prevIxsV",
          "package": "crf-chain1-constrained",
          "partial": "Ixs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:prevIxsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default set of labels.  It is used on sentence positions for which\n no constraints are assigned.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "r0",
          "package": "crf-chain1-constrained",
          "signature": "AVec Lb",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "default set of labels It is used on sentence positions for which no constraints are assigned",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "r0",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:r0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of labels which can be located on the first position of\n a sentence together with feature indices determined by them.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "sgIxs",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e [LbIx]",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#sgIxs",
          "type": "function"
        },
        "index": {
          "description": "List of labels which can be located on the first position of sentence together with feature indices determined by them",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "sgIxs",
          "normalized": "Model-\u003e[LbIx]",
          "package": "crf-chain1-constrained",
          "partial": "Ixs",
          "signature": "Model-\u003e[LbIx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:sgIxs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingular feature index for the given label.  Index is equall to -1\n if feature is not present in the model.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "sgIxsV",
          "package": "crf-chain1-constrained",
          "signature": "Vector FeatIx",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Singular feature index for the given label Index is equall to if feature is not present in the model",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "sgIxsV",
          "package": "crf-chain1-constrained",
          "partial": "Ixs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:sgIxsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePotential value (in log domain) of the singular feature with the\n given label.  The value defaults to 1 (0 in log domain) when the feature\n is not a member of the model.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "sgValue",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e Lb -\u003e LogFloat",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#sgValue",
          "type": "function"
        },
        "index": {
          "description": "Potential value in log domain of the singular feature with the given label The value defaults to in log domain when the feature is not member of the model",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "sgValue",
          "normalized": "Model-\u003eLb-\u003eLogFloat",
          "package": "crf-chain1-constrained",
          "partial": "Value",
          "signature": "Model-\u003eLb-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:sgValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "unFeatIx",
          "package": "crf-chain1-constrained",
          "signature": "Int",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#FeatIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "unFeatIx",
          "package": "crf-chain1-constrained",
          "partial": "Feat Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:unFeatIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModel potential defined for the given feature interpreted as a\n number in logarithmic domain.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "valueL",
          "package": "crf-chain1-constrained",
          "signature": "Model -\u003e FeatIx -\u003e LogFloat",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#valueL",
          "type": "function"
        },
        "index": {
          "description": "Model potential defined for the given feature interpreted as number in logarithmic domain",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "valueL",
          "normalized": "Model-\u003eFeatIx-\u003eLogFloat",
          "package": "crf-chain1-constrained",
          "signature": "Model-\u003eFeatIx-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:valueL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue (potential) of the model for feature index.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "values",
          "package": "crf-chain1-constrained",
          "signature": "Vector Double",
          "source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Value potential of the model for feature index",
          "hierarchy": "Data CRF Chain1 Constrained Model",
          "module": "Data.CRF.Chain1.Constrained.Model",
          "name": "values",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "Train",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Train.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Train",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "Train",
          "package": "crf-chain1-constrained",
          "partial": "Train",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA conditional random field model with additional codec used for\n data encoding.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "CRF",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Train.html#CRF",
          "type": "data"
        },
        "index": {
          "description": "conditional random field model with additional codec used for data encoding",
          "hierarchy": "Data CRF Chain1 Constrained Train",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "CRF",
          "package": "crf-chain1-constrained",
          "partial": "CRF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#t:CRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "CRF",
          "package": "crf-chain1-constrained",
          "signature": "CRF",
          "source": "src/Data-CRF-Chain1-Constrained-Train.html#CRF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Constrained Train",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "CRF",
          "package": "crf-chain1-constrained",
          "partial": "CRF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:CRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect labels assigned to words in a dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "anyChosen",
          "package": "crf-chain1-constrained",
          "signature": "[SentL a b] -\u003e Set b",
          "source": "src/Data-CRF-Chain1-Constrained-Train.html#anyChosen",
          "type": "function"
        },
        "index": {
          "description": "Collect labels assigned to words in dataset",
          "hierarchy": "Data CRF Chain1 Constrained Train",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "anyChosen",
          "normalized": "[SentL a b]-\u003eSet b",
          "package": "crf-chain1-constrained",
          "partial": "Chosen",
          "signature": "[SentL a b]-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:anyChosen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect interpretations (also labels assigned) of words in a dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "anyInterps",
          "package": "crf-chain1-constrained",
          "signature": "[SentL a b] -\u003e Set b",
          "source": "src/Data-CRF-Chain1-Constrained-Train.html#anyInterps",
          "type": "function"
        },
        "index": {
          "description": "Collect interpretations also labels assigned of words in dataset",
          "hierarchy": "Data CRF Chain1 Constrained Train",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "anyInterps",
          "normalized": "[SentL a b]-\u003eSet b",
          "package": "crf-chain1-constrained",
          "partial": "Interps",
          "signature": "[SentL a b]-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:anyInterps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe codec is used to transform data into internal representation,\n where each observation and each label is represented by a unique\n integer number.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "codec",
          "package": "crf-chain1-constrained",
          "signature": "Codec a b",
          "source": "src/Data-CRF-Chain1-Constrained-Train.html#CRF",
          "type": "function"
        },
        "index": {
          "description": "The codec is used to transform data into internal representation where each observation and each label is represented by unique integer number",
          "hierarchy": "Data CRF Chain1 Constrained Train",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "codec",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual model, which is a map from \u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es to potentials.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "model",
          "package": "crf-chain1-constrained",
          "signature": "Model",
          "source": "src/Data-CRF-Chain1-Constrained-Train.html#CRF",
          "type": "function"
        },
        "index": {
          "description": "The actual model which is map from Feature to potentials",
          "hierarchy": "Data CRF Chain1 Constrained Train",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "model",
          "package": "crf-chain1-constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect labels assigned to OOV words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "oovChosen",
          "package": "crf-chain1-constrained",
          "signature": "[SentL a b] -\u003e Set b",
          "source": "src/Data-CRF-Chain1-Constrained-Train.html#oovChosen",
          "type": "function"
        },
        "index": {
          "description": "Collect labels assigned to OOV words",
          "hierarchy": "Data CRF Chain1 Constrained Train",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "oovChosen",
          "normalized": "[SentL a b]-\u003eSet b",
          "package": "crf-chain1-constrained",
          "partial": "Chosen",
          "signature": "[SentL a b]-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:oovChosen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the CRF using the stochastic gradient descent method.\n\u003c/p\u003e\u003cp\u003eThe resulting model will contain features extracted with the user supplied\n extraction function.  You can use the functions provided by the\n \u003ca\u003eData.CRF.Chain1.Constrained.Feature.Present\u003c/a\u003e and\n \u003ca\u003eData.CRF.Chain1.Constrained.Feature.Hidden\u003c/a\u003e\n modules for this purpose.\n\u003c/p\u003e\u003cp\u003eYou also have to supply R0 construction method (e.g. \u003ccode\u003e\u003ca\u003eoovChosen\u003c/a\u003e\u003c/code\u003e)\n which determines the contents of the default set of labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "train",
          "package": "crf-chain1-constrained",
          "signature": "SgdArgs-\u003e Bool-\u003e ([SentL a b] -\u003e Set b)-\u003e (AVec Lb -\u003e [(Xs, Ys)] -\u003e [Feature])-\u003e IO [SentL a b]-\u003e IO [SentL a b]-\u003e IO (CRF a b)",
          "type": "function"
        },
        "index": {
          "description": "Train the CRF using the stochastic gradient descent method The resulting model will contain features extracted with the user supplied extraction function You can use the functions provided by the Data.CRF.Chain1.Constrained.Feature.Present and Data.CRF.Chain1.Constrained.Feature.Hidden modules for this purpose You also have to supply R0 construction method e.g oovChosen which determines the contents of the default set of labels",
          "hierarchy": "Data CRF Chain1 Constrained Train",
          "module": "Data.CRF.Chain1.Constrained.Train",
          "name": "train",
          "normalized": "SgdArgs-\u003eBool-\u003e([SentL a b]-\u003eSet b)-\u003e(AVec Lb-\u003e[(Xs,Ys)]-\u003e[Feature])-\u003eIO[SentL a b]-\u003eIO[SentL a b]-\u003eIO(CRF a b)",
          "package": "crf-chain1-constrained",
          "signature": "SgdArgs-\u003eBool-\u003e([SentL a b]-\u003eSet b)-\u003e(AVec Lb-\u003e[(Xs,Ys)]-\u003e[Feature])-\u003eIO[SentL a b]-\u003eIO[SentL a b]-\u003eIO(CRF a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides first-order, linear-chain conditional random fields\n (CRFs) with position-wide constraints over label values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "Constrained",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides first-order linear-chain conditional random fields CRFs with position-wide constraints over label values",
          "hierarchy": "Data CRF Chain1 Constrained",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "Constrained",
          "package": "crf-chain1-constrained",
          "partial": "Constrained",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA probability distribution defined over elements of type a.\n All elements not included in the map have probability equal\n to 0.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "Prob",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Prob",
          "type": "data"
        },
        "index": {
          "description": "probability distribution defined over elements of type All elements not included in the map have probability equal to",
          "hierarchy": "Data CRF Chain1 Constrained",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "Prob",
          "package": "crf-chain1-constrained",
          "partial": "Prob",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#t:Prob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "Sent",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Sent",
          "type": "type"
        },
        "index": {
          "description": "sentence of words",
          "hierarchy": "Data CRF Chain1 Constrained",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "Sent",
          "package": "crf-chain1-constrained",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#t:Sent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of labeled words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "SentL",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#SentL",
          "type": "type"
        },
        "index": {
          "description": "sentence of labeled words",
          "hierarchy": "Data CRF Chain1 Constrained",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "SentL",
          "package": "crf-chain1-constrained",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#t:SentL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Word is represented by a set of observations\n and a set of potential interpretation labels.\n When the set of potential labels is empty the word\n is considered to be unknown and the default potential\n set is used in its place.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "Word",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
          "type": "data"
        },
        "index": {
          "description": "Word is represented by set of observations and set of potential interpretation labels When the set of potential labels is empty the word is considered to be unknown and the default potential set is used in its place",
          "hierarchy": "Data CRF Chain1 Constrained",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "Word",
          "package": "crf-chain1-constrained",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA WordL is a labeled word, i.e. a word with probability distribution\n defined over labels.  We assume that every label from the distribution\n domain is a member of the set of potential labels corresponding to the\n word.  Use the \u003ccode\u003e\u003ca\u003emkWordL\u003c/a\u003e\u003c/code\u003e smart constructor to build \u003ccode\u003e\u003ca\u003eWordL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "WordL",
          "package": "crf-chain1-constrained",
          "source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#WordL",
          "type": "data"
        },
        "index": {
          "description": "WordL is labeled word i.e word with probability distribution defined over labels We assume that every label from the distribution domain is member of the set of potential labels corresponding to the word Use the mkWordL smart constructor to build WordL",
          "hierarchy": "Data CRF Chain1 Constrained",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "WordL",
          "package": "crf-chain1-constrained",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#t:WordL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the most probable label sequence within the context of the\n given sentence using the model provided by the \u003ccode\u003e\u003ca\u003eCRF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "tag",
          "package": "crf-chain1-constrained",
          "signature": "CRF a b -\u003e Sent a b -\u003e [b]",
          "source": "src/Data-CRF-Chain1-Constrained.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Determine the most probable label sequence within the context of the given sentence using the model provided by the CRF",
          "hierarchy": "Data CRF Chain1 Constrained",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "tag",
          "normalized": "CRF a b-\u003eSent a b-\u003e[b]",
          "package": "crf-chain1-constrained",
          "signature": "CRF a b-\u003eSent a b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the most probable label sets of the given size (at maximum)\n for each position in the input sentence.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "tagK",
          "package": "crf-chain1-constrained",
          "signature": "Int -\u003e CRF a b -\u003e Sent a b -\u003e [[b]]",
          "source": "src/Data-CRF-Chain1-Constrained.html#tagK",
          "type": "function"
        },
        "index": {
          "description": "Determine the most probable label sets of the given size at maximum for each position in the input sentence",
          "hierarchy": "Data CRF Chain1 Constrained",
          "module": "Data.CRF.Chain1.Constrained",
          "name": "tagK",
          "normalized": "Int-\u003eCRF a b-\u003eSent a b-\u003e[[b]]",
          "package": "crf-chain1-constrained",
          "signature": "Int-\u003eCRF a b-\u003eSent a b-\u003e[[b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:tagK"
      }
    }
  ]
]